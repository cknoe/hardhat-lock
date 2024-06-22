hardhat-test:
	npx hardhat test

hardhat-covarage:
	npx hardhat coverage

hardhat-report-gas:
	REPORT_GAS=true npx hardhat test

hardhat-new-node:
	npx hardhat node

hardhat-deploy-local:
	npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost

hardhat-deploy-sepolia:
	npx hardhat ignition deploy ignition/modules/Lock.ts --network sepolia --deployment-id sepolia-deployment

hardhat-verify-sepolia:
	npx hardhat ignition verify sepolia-deployment