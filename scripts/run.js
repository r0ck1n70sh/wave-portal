const main = async () => {
    const [owner, randomPersons] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()
    await waveContract.deployed()

    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed by: ", owner.address);

    let waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave(); 
    waveTxn.wait();

    waveCount = await waveContract.getTotalWaves()
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (e) {
        console.error(e.message);
        process.exit(1)
    }
}

runMain()