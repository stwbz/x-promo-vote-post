# X Promo Vote Post — make.fun

An X post promoting make.fun's make-your-own-bounty feature, asking readers to vote 1, 2 or 3 for which bounty to launch first.

- Post: https://x.com/stwn_xyz/status/2125451100476297529
- Bounty: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01

## Run

```sh
node main.ts
```

`main.ts` copies `POST.json` from the repository into the output directory. It reads the repository directory from `MAKEFUN_BOT_DIR` (default `.`) and the output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`).
