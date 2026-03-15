# Crowd-Underwritten Trade Insurance

Decentralized trade insurance where **users underwrite risk** instead of a central pool. Traders request coverage; other users stake tokens to back it. The **INSURE token** becomes risk collateral and the basis for an AI-coordinated insurance market.

---

## Idea

Someone about to ape into a token can request insurance:

```
User: I want to insure a 3 SOL trade on TOKENX
```

The agent posts the request. Other users stake tokens to underwrite the risk.

---

## Example Flow

### 1. Trader requests coverage

| Field      | Example   |
|-----------|-----------|
| Coverage  | 3 SOL     |
| Duration  | 12 hours  |
| Premium   | 0.1 SOL  |
| Token     | TOKENX    |

### 2. Underwriters stake tokens

```
Alice stakes 1000 INSURE tokens
Bob stakes 500 INSURE tokens
```

### 3. Outcome

**If token survives**  
→ Underwriters earn the premium (e.g. 0.1 SOL split by stake share).

**If token rugs**  
→ Coverage (3 SOL) is paid from staked token value / liquidation; trader is made whole (or partially), underwriters take the loss.

The **token (INSURE) is the risk collateral** — stakers are the capital behind the insurance.

---

## Why This Is Interesting

- **No central pool** — risk is distributed across willing underwriters.
- **Token = collateral** — INSURE isn’t just a meme; it backs real coverage.
- **AI-coordinated market** — an agent parses requests, posts them, and can help match coverage to underwriters.
- **Clear incentives** — underwriters earn premium when trades are safe; they lose when they’re not.

---

## Project layout (scaffold)

```
├── README.md           # This file
├── docs/               # Design & flows (optional)
├── agent/              # Agent that posts requests & coordinates
├── types/              # Shared types (requests, stakes, outcomes)
└── program/            # (Future) Solana program for staking/escrow/payouts
```

---

## Next steps

1. **Agent**: Parse “insure X SOL on TOKEN” → create and post coverage request.
2. **Underwriting**: Users stake INSURE against a request; track stakes per request.
3. **Resolution**: After duration, resolve (survived / rugged) and settle premium or coverage.
4. **On-chain**: Move request lifecycle, staking, and payouts into a Solana program when ready.
