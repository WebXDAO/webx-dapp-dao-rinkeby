import sdk from "./initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
  "0x032D24E5D34BE21FA3eAD8a42FC503FAD7d8314A"
);  

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "WebX DAO", // Name of NFT Collection for DAO
        description: "WebXDAO is a community that focus on the future of the web. Here you will learn how to become a blockchain developer while having fun with other community members.", // Description
        image:
          "https://avatars.githubusercontent.com/u/89759498?s=200&v=4", // Image for NFT
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
