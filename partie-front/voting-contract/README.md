# Voting contract

Ce projet a été développé avec Node v18.18.2 et ses outils. Il est donc fortement recommandé de le lancer avec cette version de node disponible [ici](https://nodejs.org/download/release/latest-v18.x/).

Vous avez également une vidéo de démonstration du programme dans ce dépôt (presentation.mp4)

## Démarage rapide

La première chose à faire est de télécharger le projet via le dépôt git, de le décompresser puis :

```sh
cd voting-contract
npm install
```

Une fois que vous avez installé les node_modules vous pouvez lancer la commande :

```sh
npx hardhat node
```

Maintenant dans un nouveau terminal lancez :

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Pour finir, rendez vous dans la partie front du projet, installez les nodes_modules et lancer le serveur avec :

```sh
cd frontend
npm install
npm start
```

Si vous n'êtes pas redirigé automatiquement, vous pouvez vous rendre à l'adresse: [http://localhost:3000/](http://localhost:3000/) pour manipuler le smart contract.