// Import Solana web3 functinalities

import{
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
}
from 
"@solana/web3.js"

// Create a new keypair
const newPair: Keypair = new Keypair();

// Extract the public and private key from the keypair
const publicKey: string = newPair.publicKey.toString();
const privateKey: Uint8Array = newPair.secretKey;

// Connect to the Devnet
const connection: Connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Public Key of the generated keypair", publicKey);

// Get the wallet balance from a given private key
const getWalletBalance = async (): Promise<void> => {
    try {
        console.log("Connection object is:", connection);

        // Make a wallet (keypair) from privateKey and get its balance
        const myWallet = await Keypair.fromSecretKey(privateKey);
        const walletBalance = await connection.getBalance(
            new PublicKey(newPair.publicKey)
        );
        console.log(`Wallet balance: ${parseInt(walletBalance.toString()) / LAMPORTS_PER_SOL} SOL`);
    } catch (err) {
        console.log(err);
    }
};

const airDropSol = async (): Promise<void> => {
    try {
        // Make a wallet from privateKey
        const myWallet = await Keypair.fromSecretKey(privateKey);

        // Request airdrop of 2 SOL to the wallet
        console.log("Airdropping some SOL to my wallet!");
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(myWallet.publicKey),
            2 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    } catch (err) {
        console.log(err);
    }
};

// Show the wallet balance before and after airdropping SOL
const mainFunction = async (): Promise<void> => {
    await getWalletBalance();
    await airDropSol();
    await getWalletBalance();
}

mainFunction();