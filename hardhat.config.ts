import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//to set vars in shell : npx hardhat vars set API_PRIVATE_KEY
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
    }
  },
  etherscan: {
    apiKey: {
      sepolia:ETHERSCAN_API_KEY,
    },
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
