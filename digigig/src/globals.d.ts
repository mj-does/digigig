interface Window {
    ethereum?: any;
}

interface ImportMetaEnv {
    readonly VITE_CONTRACT_ADDRESS: string;
    readonly VITE_CHAIN_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
