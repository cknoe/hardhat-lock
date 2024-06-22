hardhat-test:
	npx hardhat test

hardhat-covarage:
	npx hardhat coverage

hardhat-new-node:
	npx hardhat node

hardhat-deploy:
	npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost