const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Clarkson", "May", "Hammond"],       // Names
    ["https://i.imgur.com/jMORcq7.jpeg", // Images
      "https://i.ytimg.com/vi/xKYE3wAC3fM/hqdefault.jpg",
      "https://i.imgur.com/ZYC9VC8.jpeg"],
    [150, 200, 300],                    // HP values
    [100, 75, 50],
    "Citroen 2CV",
    "https://cdn.pixabay.com/photo/2021/09/14/12/59/citroen-2cv-6623962__480.png",
    10000,
    50                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);


  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


runMain();