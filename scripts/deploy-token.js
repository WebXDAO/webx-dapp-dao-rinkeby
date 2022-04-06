import { AddressZero } from "@ethersproject/constants";
import sdk from "./initialize-sdk.js";

(async () => {
  try {
    const tokenAddress = await sdk.deployer.deployToken({
      name: "WebX DAO Token", // name of the token
      symbol: "WEBX", // symbol
      primary_sale_recipient: AddressZero, // 0x0000000000000000000000000000000000000000
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
