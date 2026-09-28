# Unit 52 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

State electorate, tie rules, scoring convention, normalized or monetary valuation meaning, divisibility and liquidity. Keep own valuations separate. Fairness properties differ; neither a fractional assignment nor a cash settlement implies practical feasibility. Arrow concerns ranking under its stated assumptions, not a universal ban on fair decisions.

## Concept task families

### 52.1: Ranked and approval voting

Generate weighted complete rankings, explicit tie/elimination rules, Borda convention and separate approval ballots; include majority-runoff and pairwise comparisons.

Required coverage: Every named ranked method plus approval; weighting, ties and majority distinctions.

### 52.1: Strategic and agenda effects

Use fixed schedules and change only agenda, report or withdrawal; verify all pairwise tallies and specify the fairness property under discussion.

Required coverage: Cycles/winners, strategic reports, agenda/withdrawal effects and case versus general method property.

### 52.2: Arrow’s impossibility theorem

Ask whether a proposed exception changes unrestricted domain, ranking output, candidate count or one of the conditions; avoid unsupported universality.

Required coverage: Exact assumptions and incompatible properties, applicability and qualified implications.

### 52.2: Weighted coalitions and Banzhaf power

Enumerate small coalitions with nonnegative weights and quota in (0,total]; include dummies, ties and equal power with unequal weights.

Required coverage: Valid quotas, complete enumeration, criticality/dummies and positive normalization.

### 52.3: Proportionality, envy, equity, and efficiency

Use explicit normalized additive value tables and feasible allocation sets; request a counterallocation or full argument for efficiency rather than assume it.

Required coverage: Four criteria, own valuations and justified implications under stated divisibility/feasibility.

### 52.3: Divider-chooser and last diminisher

Use additive nonatomic valuations, track proposal and residue values, include no-trim and multiple-trim cases, then finish the two-player division.

Required coverage: Both procedures, chooser advantage/divider guarantee, residue conservation and limits of guarantees.

### 52.4: Adjusted winner procedure

Normalize equal positive totals, order transfer ratios correctly from higher-total owner, state ties and zero handling, and verify allocations/value totals after fractions.

Required coverage: Initial allocation, ratio order, balance fraction, zero/tie cases and equal satisfaction/no envy under assumptions.

### 52.4: Divisibility and trimming limitations

Include divisible rights and genuinely indivisible goods with or without compensation/liquidity; identify which procedure's assumptions fail.

Required coverage: Trimming feasibility, ownership/use/cash alternatives, strategic/nonadditive valuations and qualified guarantees.

### 52.5: Sealed bids and fair-share accounts

Use three or more participants, additive monetary bids, unique/declared tied winners and feasible compensation; verify every item assigned once.

Required coverage: Allocation, individual totals/fair shares, initial payments and sign convention.

### 52.5: Surplus and guarantees

Verify nonnegative surplus from highest-bid allocation, equal distribution and zero-sum settlements; include insufficient-cash and envy countercases.

Required coverage: Complete settlement, benefit guarantees, cash balance, honest additive valuation/liquidity and envy limitations.

## Independent verification recipe

**Construct:** Generate a fully specified electorate or valuation matrix with consistent totals. Fix ties and candidate ordering before applying a voting rule. For valuations state additive/nonnegative assumptions, divisibility and entitlement shares. For cash procedures state feasible transfers and adequate liquidity instead of assuming money is physically available.

**Check before release:** Recount each ballot contribution, pairwise contest and weighted coalition. Normalize critical counts only after identifying every winning coalition. For allocations, compute each participant’s own received value, fair-share threshold and envy comparisons separately. In adjusted winner verify the transfer fraction and equal satisfaction; in Knaster verify allocated goods and zero final net cash transfer.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

A retake should preserve the rule, number of candidates/goods, tie burden, normalization and number of transfer stages unless increased demand is intended.

| Demand | Checked anchor |
| --- | --- |
| Routine coalition enumeration | [3:2,1,1] has winning AB, AC, ABC and critical counts (3,1,1), normalized (3/5,1/5,1/5). |
| Comparable intended variant | [6:4,2,2] scales quota and weights equally, preserving exactly those winning sets and powers. Ask why this scaling preserves the rule; as bare arithmetic it is a near variant, not transfer. |
| Boundary contrast | [3:3,1,1] adds the winning singleton A and makes B,C dummies. Critical counts (4,0,0) yield powers (1,0,0). |
| Added allocation demand | Two-good adjusted winner A:(70,30), B:(20,80) requires one fractional transfer. The existing four-good example requires ratio ordering, one full transfer and a later fractional balance; these are not same-demand tasks. |
| Transfer | Give a correct numerical allocation with an incorrect envy or feasibility claim and ask what follows under the stated valuations and rights. |

Include all named voting rules with their own required input data, a genuine cycle/agenda comparison, two-person versus three-person fairness guarantees, zero/tied valuations, and cash reconciliation. A vote winner, a fairness judgment and a procedure trace are separate targets.
