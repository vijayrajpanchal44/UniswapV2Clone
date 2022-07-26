// const { ethers } = require("hardhat");

/*For Multi-signature contract*/
async function main() {
    // We get the contract to deploy

    const [deployer] = await ethers.getSigners();
    const multiSig = await ethers.getContractFactory("MultiSigWallet","MultiSigWalletFactory");
    const addrs = ["0xa725E9FbE8CbCA596e1f7d8c6DA3Fb7EDDCcF13A",
     "0x343DA4001dE96F546710468C4AF00D4D61917835", 
     "0xeb6d7C503669B9c418d4934D2856d75E222Fd55F"];
   
    const required = 2;
    console.log(addrs);
    const sign = await multiSig.deploy(addrs, required.toString());
    console.log("Token deployed to:", sign.address);
  }

/*For ERC20token contract*/
// async function main() {
//     // We get the contract to deploy

//     const [deployer] = await ethers.getSigners();
//     const ERC20token = await ethers.getContractFactory("ERC20token");
//     const amount = 1000;
//     const erc20token = await ERC20token.deploy("binance","BNB", amount.toString());
  
//    // await erc20token.deployed();
  
//     console.log("Token deployed to:", erc20token.address);
//   }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });