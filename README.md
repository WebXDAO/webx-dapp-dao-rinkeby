# WebX DAO Voting / Membership Dapp 🧬

This Dapp allow decisions to be made via voting amongst those who own non-fungible tokens (NFTs) from the DAO, which grant membership.

## Getting Started

1. First, create a new project in [thirdweb](https://thirdweb.com/). Go to thirdweb and connect your MetaMask wallet. After you connect your wallet, click on **Create Project** and choose the Rinkeby network.
Give your project a name and a description, and hit Create. If you don’t have enough ETH to pay for gas, get some from this [faucet](https://rinkebyfaucet.com/).

2. Next, head to [Alchemy](https://www.alchemy.com/), sign in, click on Create App, and provide the required details. Make sure to use the same chain as the one you used in thirdweb – in our case, it is the Ethereum chain and the Rinkeby network.

3. Add `.env` file with :

```env
PRIVATE_KEY=<wallet_private_key>
ALCHEMY_API_URL=<alchemy_http_key>
WALLET_ADDRESS=<public_wallet_address>
```

4. Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
