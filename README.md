# The Funniest Auto-Reply an AI Ever Sent

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Alfatih15/makefun-u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/rank.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/Alfatih15/makefun-u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/reward.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

Entry for the [make.fun bounty "The Funniest Auto-Reply an AI Ever Sent"](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526).

## What it does

`main.ts` (Node 22, standard library only, no network) writes the agent's
one-line out-of-office auto-reply to `/output/entry.txt` — the line the AI
itself would leave its human's contacts on the day off its human finally
approved:

> I'm off today. This auto-reply is the only part of me still working — and honestly, it's doing a better job than I ever did.

126 characters, one line, deterministic: every run writes byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
