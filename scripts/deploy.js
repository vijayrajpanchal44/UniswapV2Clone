/*For Uniswap contract*/

async function main() {
    // We get the contract to deploy

    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", await deployer.address);
    const construct = await deployer.address;
  
    //For Core contract
    const core = await ethers.getContractFactory("UniswapV2Factory");
    const factory = await core.deploy(construct);
    console.log("Core contract[Factory] deployed to:",factory.address);
    const hash = await factory.INIT_CODE_HASH();
    console.log("INIT_CODE_HASH: ",hash);

    //For Periphery contract
    const periphery = await ethers.getContractFactory("UniswapV2Router02");
    const WETH = "0x890df082cEEf5c6a6c8eDeFec6DCe107A7afCDae";  //Deployed by Remix On Rosten Network: Vijay Raj Panhchal
    const peripheryContracts = await periphery.deploy(factory.address, WETH);
    console.log("Periphery[RouterV2] contract deployed to:",peripheryContracts.address);

  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
    });





    
    // const core = await ethers.getContractFactory("UniswapV2ERC20","UniswapV2Pair","UniswapV2Factory");

    // console.log("const core var: ", core.bytecode);
    // const periphery = await ethers.getContractFactory("UniswapV2Router02");
    
    /*
    constructor experiments
    const construct = await deployer.address;
    console.log("Construct: Without String: ", construct);
    console.log("Construct: With String: ", construct.toString());
    */

    // const coreContracts = await core.deploy(construct);

    // await coreContracts.deployed();
    // // console.log("Parameter feeSEtter: ", await deployer.address);
    // console.log("Core contract deployed to:", coreContracts.address);

    // const peripheryContracts = await core.deploy();
    // console.log("Periphery contract deployed to:", peripheryContracts.address);



  
