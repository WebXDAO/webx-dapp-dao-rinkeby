import sdk from "./initialize-sdk.js";

// WebX Token address:
const token = sdk.getToken("0xE9c326C87F5b6b3BdFEd10a528c6F68bCBa5803C");

(async () => {
  try {
    const amount = 1_000_000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$WEBX in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
