---
title: The Vault
description: The Vault/Inhabitants website. Interactive hub with web3 integration, games, and NFT drops.
image: "/images/vault.png"

---

## Requirements
I needed to build a complex, highly interactive user hub, that is able to:

- Get data and send transactions to Ethereum blockchain
- Host NFT drops
- Connect with APIs
- Host unity games.

## What I did
I chose the following tech stack:

- Tailwindcss
- Typescript with React
- Framer motion
- Ethers
- Wagmi hooks

On the beggining, I developed my own library to manage Ethereum calls and transactions. But I realized it is very hard to maintain, because it needed a complex state management, complex types, and a lot of work to avoid re-renders. So I took the decision to switch to `wagmi-hooks`.

## Challenges
### Even more complexity
I was asked to make the website support multiple themes, but not only that, I needed to implement **two websites in one, and each website has it's own theme with different components**

#### How I solved it
I created a monorepo for the components, posted them on `npm`, and switched `Tailwindcss` to `Stitches`, because it supports multiple themes out-of-the-box. The monorepo allowed me to have granular control over versions of each component when I import them on the main webapp.

So, with the components detached from the webapp, both codebases were much more cleaner and easier to debug and maintain. I did all the logic of the multiple themes inside the components monorepo, since only the components need to change styles.

The main app imports the components from `npm`, alongside the themes. Then it set's the theme on a top level div, as a class. To change themes, it is as easy as just changing that class name to another one, and all the components will change the style. The DX was great and I'm proud of that.
