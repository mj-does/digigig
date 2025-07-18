import { ethers } from "ethers";
import contractABI from "../abi/contractABI.json";

// This tells TypeScript the ABI is an array
const abiInterface = new ethers.Interface(contractABI as any);

const CONTRACT_ADDRESS = "0xf8e81D47203A594245E36C48e151709F0C19fBe8"; // Replace

export const getProvider = () => {
    const { ethereum } = window as any;
    if (!ethereum) throw new Error("MetaMask not detected!");
    return new ethers.BrowserProvider(ethereum);
};

export const getSigner = async () => {
    const provider = getProvider();
    return (await provider).getSigner();
};

export const getContractWithSigner = async () => {
    const signer = await getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, abiInterface, signer);
};

export const getContractWithProvider = async () => {
    const provider = getProvider();
    return new ethers.Contract(CONTRACT_ADDRESS, abiInterface, await provider);
};
