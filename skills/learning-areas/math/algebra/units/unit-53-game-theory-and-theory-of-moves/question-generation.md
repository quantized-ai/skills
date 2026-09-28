# Unit 53 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Label payoff ownership and ordinal versus cardinal use. Analyze both players and all best responses. Expected-payoff optimization requires cardinal payoffs. In theory of moves label initial state, initiator, scheduled mover, first-return benchmark and terminal outcomes; preserve the curriculum’s two-sided preemption convention and qualify order-sensitive results. Do not infer real human predictions from an abstract preference model.

## Concept task families

### 53.1: Games, payoffs, and strategy sets

State players, strategies, payoff order and cardinal versus ordinal meaning; contrast zero-sum and partial-conflict bimatrices.

Required coverage: Complete matrix construction, payoff ownership, zero-sum distinction and omitted assumptions.

### 53.1: Best responses and equilibrium

Include strict/weak dominance, ties, multiple or no pure equilibria; enumerate best-response sets before intersections.

Required coverage: Dominance, both response sets, all pure equilibria and unilateral versus joint incentives.

### 53.2: Saddle points and pure-strategy value

Generate finite matrices with and without saddle points and tied candidates; explicitly state maximizing/minimizing players.

Required coverage: Bounds, equality, all tied saddle points and no false pure optimum when bounds differ.

### 53.2: Two-strategy mixing

Check domination/saddles first, solve separate indifference equations, then verify against every pure response including boundaries.

Required coverage: Both distributions, expected value, normalization, boundary/degenerate cases and guarantees.

### 53.2: Payoff envelopes with two strategies

Use 2×n and m×2 matrices, compare every feasible intersection/endpoint, include flat optima and irrelevant crossings, verify all pure responses.

Required coverage: Both envelope orientations, full interval, endpoints/intersections, ties/flat sets and all-opponent verification.

### 53.3: Prisoners’ dilemma

Generate strict rankings temptation>cooperation>mutual defection>exploitation and test both players; use original everyday conflict narratives without implying real people have known utilities.

Required coverage: Both dominance arguments, equilibrium, inefficiency and model assumptions.

### 53.3: Chicken and coordination over conflict

Preserve each player's strict chicken ranking, contrast changed rankings and state whether timing/commitment alters the game.

Required coverage: Both best-response patterns, two asymmetric equilibria, ranking verification and limits of prediction.

### 53.4: Rules of the theory of moves

Supply complete strict ordinal matrix, initial cell, both possible initiators and explicit stopping convention; label decision-maker at each node.

Required coverage: Legal alternating trees, status quo, terminal rewards, initiation and cycle handling.

### 53.4: Backward reasoning and comparison of predictions

Also analyze PD from DC: Row's direct CC outcome is not individually profitable, Column can induce DD, but the curriculum's two-sided preemption selects CC since both prefer it to DD. Include chicken from YY (stays YY) and asymmetric cells with explicit first-move/order conventions; larger games need explicit branching/termination rules.

Required coverage: Both initiators, PD and chicken, initial-state sensitivity, return benchmark and two-sided preemption; qualify ambiguous order or larger-game predictions.

### 53.4: Strict ordinal conflict models

Ask students to justify an original bounded conflict model, check each player's ranks 1–4 occurs once, state initial cell and analyze both initiators using the same matrix.

Required coverage: Defensible story-to-rank modeling, strictness, Nash and nonmyopic comparison, initial/information assumptions.

### 53.4: Cyclic games and stopping assumptions

Use strict ordinal 2×2 matrices, examine both orientations and each scheduled mover's maximum; keep endurance/repeated-cycling changes explicitly separate from basic rules.

Required coverage: Both orientations, best-rank blocks, strict ordinal assumptions and classification versus stopping predictions.

## Independent verification recipe

**Construct:** For simultaneous games specify strategy ownership and payoff order. For zero-sum mixing supply cardinal values; for ordinal move analysis supply four distinct ranks for each player and an initial cell. Record both possible initiators and the curriculum’s return, stopping, initiation and two-sidedness conventions.

**Check before release:** Enumerate unilateral best responses for Nash; for mixed zero-sum strategies compare all pure opposing responses, probabilities and endpoints. For move trees construct both four-switch loops through return, work backward using the current mover’s terminal-payoff comparison, then apply initiation/preemption. For cyclic classification separately inspect the scheduled departure mover in both orientations.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.
