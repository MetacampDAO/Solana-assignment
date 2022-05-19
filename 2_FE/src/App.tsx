import { useState } from "react";
import { Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import "./App.css";

function App() {
  const [mint, setMint] = useState("");
  const [amountToMint, setAmountToMint] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [accountToSend, setAccountToSend] = useState("");
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const handleSend = async () => {
    // await connection.confirmTransaction(
    //   await connection.requestAirdrop(publicKey!, 1e9)
    // );
  };
  const handleNewMint = async () => {};

  const handleMintToAccount = async () => {};

  const handleSendToFriend = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleNewMint}>Mint a token</button>
        <br />
        Amount to mint
        <input
          type="number"
          onChange={(e) => setAmountToMint(e.target.value)}
        />
        <button onClick={handleMintToAccount}>Mint to own wallet</button>
        <br />
        Amount to send
        <input
          type="amount"
          onChange={(e) => setAmountToSend(e.target.value)}
        />
        Send To
        <input type="text" onChange={(e) => setAccountToSend(e.target.value)} />
        <button onClick={handleSendToFriend}>Send</button>
      </header>
    </div>
  );
}

export default App;
