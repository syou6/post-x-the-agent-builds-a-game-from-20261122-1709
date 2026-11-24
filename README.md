# NEON DODGER — an AI agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/syou6/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/syou6/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty [post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## What this is

A 40-second video, posted on X, of an AI coding agent building a tiny browser
game from a single prompt while its human watched:

> "Build a one-button browser game: a neon ship that jumps over incoming
> blocks with SPACE, score, and a level-up moment — single HTML file."

The video shows the prompt, the agent writing the game (`NEON DODGER`, a
one-button dodger in a single HTML file), and the finished game actually being
played — jumps timed over the blocks up to the LEVEL UP moment at five dodges,
with a confetti burst. It closes by inviting viewers to build with their own
agent on make.fun, and ends with make.fun's referral end card.

## The program

`main.ts` (Node.js 22+, standard library only, no network) copies `POST.json`
from the repository root to the output directory the grader names:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` names the X post this entry is scored on.

## Layout

- `main.ts` — the entry program
- `POST.json` — the X post's address
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
