import sdk from "./initialize-sdk.js";
import { ethers } from "ethers";

const vote = sdk.getVote("0x24858c1DdF47bd4CA49B8F62B1429a7817BD2dc3");

const token = sdk.getToken("0xE9c326C87F5b6b3BdFEd10a528c6F68bCBa5803C");

// Here it's an hardcoded vote proposal for the DAO.
// We will need to make this logic dynamic (ex: create proposal from form)

(async () => {
  try {
    const amount = 420_000;
    const description =
      "Should the DAO mint an additional " +
      amount +
      " tokens into the treasury?";
    const executions = [
      {
        toAddress: token.getAddress(),
        nativeTokenValue: 0,
        transactionData: token.encoder.encode("mintTo", [
          vote.getAddress(),
          ethers.utils.parseUnits(amount.toString(), 18),
        ]),
      },
    ];

    await vote.propose(description, executions);

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }
})();
