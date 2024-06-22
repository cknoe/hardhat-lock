import { HardhatUserConfig, vars, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//to set vars in shell : npx hardhat vars set API_PRIVATE_KEY
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

//optional varible
const OPTIONAL_VARIABLE = vars.has("OPTIONAL_VARIABLE") ? [vars.get("OPTIONAL_VARIABLE")] : "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
  if (OPTIONAL_VARIABLE != "") {
    console.log("optional variable is " + OPTIONAL_VARIABLE);
  }
});

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