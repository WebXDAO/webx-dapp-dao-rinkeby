import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "WebX DAO", // Name of NFT Collection for DAO
      description: "WebXDAO is a community that focus on the future of the web. Here you will learn how to become a blockchain developer while having fun with other community members.", // Description
      image:
        "https://avatars.githubusercontent.com/u/89759498?s=200&v=4", // PFP for NFT collection
      primary_sale_recipient: ethers.constants.AddressZero,
    });

    const editionDrop = sdk.getEditionDrop(editionDropAddress);

    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
