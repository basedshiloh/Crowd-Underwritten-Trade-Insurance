# Crowd-Underwritten Trade Insurance

Decentralized trade insurance where **users underwrite risk** instead of a central pool. **Insuring and underwriting are done in SOL.** You must **hold** a certain amount of the governance token (tiered by size) to be allowed to insure or underwrite — the token gates access; SOL is what moves.

---

## Idea

Someone about to ape into a token can request insurance:

```
User: I want to insure a 3 SOL trade on TOKENX
```

The agent posts the request. Other users **stake SOL** to underwrite the risk. To participate (as trader or underwriter) you must **hold** a tiered % of the token supply (e.g. 0.1% to insure 1 SOL, 0.2% for 5 SOL).

---

## Example Flow

### 1. Trader requests coverage

| Field      | Example   |
|-----------|-----------|
| Coverage  | 3 SOL     |
| Duration  | 12 hours  |
| Premium   | 0.1 SOL   |
| Token     | TOKENX    |

Trader must **hold** enough of the governance token for this coverage tier (e.g. 0.2% supply for 3 SOL).

### 2. Underwriters stake SOL

```
Alice stakes 1.5 SOL
Bob stakes 1 SOL
```

Underwriters must also **hold** the tier’s % of token supply; they **stake SOL** to back the coverage. Premium and payouts are in SOL.

### 3. Outcome (survived vs rugged)

Resolution is based on **market cap at resolution vs market cap when insurance was placed**:

- **Survived** — Token market cap at end of coverage is **≥ X%** of market cap at placement (e.g. 80%).  
  → Underwriters earn the premium in SOL (split by stake share).

- **Rugged** — Token market cap falls **below** that % of placement.  
  → Coverage (3 SOL) is paid from **staked SOL**; underwriters take the loss.

The token must stay above a certain **percentage of the market cap at placement** to count as survived. **SOL** is the risk collateral; the **governance token** only gates who can participate (tiered hold requirement).

---

## Tiered participation (hold % of token supply)

To insure or underwrite at a given coverage size, you must **hold** at least this % of the token’s total supply (you don’t stake the token — you just hold it in your wallet):

| Max coverage | Required hold (% of supply) |
|--------------|------------------------------|
| 1 SOL        | 0.1%                         |
| 5 SOL        | 0.2%                         |
| 10 SOL       | 0.3%                         |
| 25 SOL       | 0.5%                         |
| 50 SOL       | 1%                           |
| 100 SOL      | 2%                           |

Example: to insure 1 SOL you need 0.1% supply; to insure 5 SOL you need 0.2%; and so on. Higher size → higher hold requirement.

---

## Why This Is Interesting

- **No central pool** — risk is distributed across willing underwriters.
- **SOL for everything** — premiums, coverage, and underwriting stakes are in SOL; simple and liquid.
- **Token = access tier** — hold more token to participate at higher sizes; not a meme, it’s a gate.
- **AI-coordinated market** — an agent parses requests, posts them, and can help match coverage to underwriters.
- **Clear incentives** — underwriters earn premium in SOL when trades are safe; they lose SOL when they’re not.

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
2. **Underwriting**: Users stake SOL against a request (tier check: hold % of token supply); track stakes per request.
3. **Resolution**: After duration, resolve (survived / rugged) and settle premium or coverage in SOL.
4. **On-chain**: Move request lifecycle, SOL staking, tier checks (hold balance), and payouts into a Solana program when ready.
