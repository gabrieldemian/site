---
title: Dots
description: DOTs Interactive NFT with Solidjs and GraphQL.
image: "/images/dot.webp"
link: "https://opensea.io/collection/inhabitants-dots"
sortOrder: 2
---

## Requirements
I needed to build a interactive NFT (which is a html file with JS). It needed to be fast and lightweight, because it will be rendered on marketplaces. It also needed to get data from 2 APIs, one of them was in `GraphQL`.

## What I did
I developed the INFT using `solid` with `typescript` for type-safety, and did the `GraphQL` calls using native `fetch` to reduce bundle size even more.
