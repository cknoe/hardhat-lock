hardhat-test:
	npx hardhat test

hardhat-coverage:
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

hardhat-accounts-task:
	npx hardhat accounts

ignition-list-deployments:
	npx hardhat ignition deployments

ignition-see-sepolia-deployment:
	npx hardhat ignition status DeploymentId