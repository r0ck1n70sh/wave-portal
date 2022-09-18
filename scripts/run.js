const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()
    await waveContract.deployed()

    console.log("@r0ck1n70sh Contract deployed to: ", waveContract.address);
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