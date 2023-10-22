import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import VotingContract from "../contracts/Voting.json";


export function Dapp() {
  const [voterAddress, setVoterAddress] = useState("0x7ca833501066B71993B0D3703aDD39FfA59d6Ba0");
  const [proposalDescription, setProposalDescription] = useState("");
  const [votingContract, setVotingContract] = useState(null);

  useEffect(() => {
    async function initContract() {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress.Voting, VotingContract.abi, signer);
        setVotingContract(contract);
      } else {
        console.error("MetaMask n'est pas détecté dans ce navigateur.");
      }
    }

    initContract();
  }, []);

  async function registerVoter() {
    try {
      const tx = await votingContract.registerVoter(voterAddress);
      await tx.wait();
      console.log("Électeur enregistré avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de l'électeur :", error);
    }
  }

  async function submitProposal() {
    try {
      const tx = await votingContract.submitProposal(proposalDescription);
      await tx.wait();
      console.log("Proposition soumise avec succès!");
    } catch (error) {
      console.error("Erreur lors de la soumission de la proposition :", error);
    }
  }

  async function startProposalRegistration() {
    try {
      await votingContract.startProposalRegistrationSession();
      console.log("Session de proposition commencée avec succès!");
    } catch (error) {
      console.error("Erreur lors du démarrage de la session de proposition :", error);
    }
  }

  async function stopProposalRegistration() {
    try {
      await votingContract.stopProposalRegistrationSession();
      console.log("Session de proposition terminée avec succès!");
    } catch (error) {
      console.error("Erreur lors de la fin de la session de proposition :", error);
    }
  }

  async function startVoting() {
    try {
      await votingContract.startVotingSession();
      console.log("Session de vote commencée avec succès!");
    } catch (error) {
      console.error("Erreur lors du démarrage de la session de vote :", error);
    }
  }

  async function stopVoting() {
    try {
      await votingContract.stopVotingSession();
      console.log("Session de vote terminée avec succès!");
    } catch (error) {
      console.error("Erreur lors de la fin de la session de vote :", error);
    }
  }

  async function tallyVotes() {
    try {
      await votingContract.countVotes();
      console.log("Votes comptés avec succès!");
    } catch (error) {
      console.error("Erreur lors du comptage des votes :", error);
    }
  }

  return (
    <div className="container">
      <h1>Contrat de Vote</h1>
      <div>
        <h2>Enregistrement de l'électeur</h2>
        <input
          type="text"
          placeholder="Adresse de l'électeur"
          value={voterAddress}
          onChange={(e) => setVoterAddress(e.target.value)}
        />
        <button onClick={registerVoter}>Enregistrer l'électeur</button>
      </div>
      <div>
        <h2>Soumission de proposition</h2>
        <input
          type="text"
          placeholder="Description de la proposition"
          value={proposalDescription}
          onChange={(e) => setProposalDescription(e.target.value)}
        />
        <button onClick={submitProposal}>Soumettre la proposition</button>
      </div>
      <div>
        <h2>Gestion des sessions</h2>
        <button onClick={startProposalRegistration}>Commencer la session de proposition</button>
        <button onClick={stopProposalRegistration}>Terminer la session de proposition</button>
        <button onClick={startVoting}>Commencer la session de vote</button>
        <button onClick={stopVoting}>Terminer la session de vote</button>
        <button onClick={tallyVotes}>Compter les votes</button>
      </div>
    </div>
  );
}