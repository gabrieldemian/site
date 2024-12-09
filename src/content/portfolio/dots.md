---
title: Dots
description: DOTs Interactive NFT with Solidjs and GraphQL.
image: "/images/dot.webp"
link: "https://opensea.io/collection/metahero-dots"
sortOrder: 3
---

## About

My second project for *Pixel Vault*.

First, I did research around interactive NFTs to know if it was possible to create this project.

These "INFTs" are not static images, they are HTML pages with CSS and Javascript for interactivity.

The idea around this collection is that you have robots that **evolve** and change their main picture.

## Requirements

It needed to be fast and lightweight since this INFT does network calls and has multiple images and animations.

I chose to go with `Solid.js` with `Typescript` for type-safety, and did the `GraphQL` calls using native `fetch` to reduce the bundle size even more.
