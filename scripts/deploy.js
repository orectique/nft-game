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