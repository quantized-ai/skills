# Tutor: Lesson 52.4 — Adjusted winner and negotiated allocation

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check normalized totals and a linear balance equation. Review proportionality/envy before evaluating adjusted winner guarantees.

Review [52.3: Fairness criteria and cake division](../lesson-3-fairness-criteria-and-cake-division/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep formal procedure guarantees conditional on stated voting/valuation assumptions. Do not equate a modeled allocation with authorized transfer of real property.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** In adjusted winner A has 70 points and B80; transfer t of B’s good valued 30 by A and 80 by B. A learner sets 70+80t=80−80t. Repair.

**Agent-only reasoning:** A values the received fraction at 30t, so 70+30t=80(1−t), giving t=1/11 and own satisfaction 800/11 each.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Adjusted winner procedure

Curriculum reference: **Adjusted winner procedure** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Adjusted winner starts with normalized totals 100 each. If A's received satisfaction 70 and B's80, which bundle supplies transfers?

**Agent-only key:** B's higher-total bundle; transfers aim to equalize their own received totals, not the physical number of goods.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Two divisible goods X,Y receive point bids A:(70,30), B:(20,80). Apply adjusted winner.

**Agent-only worked reasoning:** Initially A gets X (70) and B gets Y (80). B is ahead; transfer fraction t of Y to A: A=70+30t, B=80(1-t). Equality gives t=1/11; both get 800/11≈72.73 of their own 100 points. Each values the other's share as 300/11, so neither envies.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Normalize equal positive total points and allocate each good to its higher bidder with declared ties.
2. Order goods in the leading participant's bundle by increasing ratios of that owner's value divided by the other participant's value. Treat positive-to-zero ratios as infinite; assign goods valued zero by both under the stated tie rule.
3. Transfer in that order, solve a balancing fraction at the crossing and verify equal satisfaction plus own-value no-envy.

### Practice progression

Carry out a two-good fractional balance; extend to several goods needing full transfers before the split; then handle ties, goods valued zero by both and positive-to-zero infinite ratios without division-by-zero arithmetic.

**Construction and verification controls:** Normalize equal positive totals, order transfer ratios correctly from higher-total owner, state ties and zero handling, and verify allocations/value totals after fractions.

### Responsive hints and misconceptions

**First conceptual cue:** Set each participant's own received value equal after the transfer.

If ratios are inverted, identify the current owner before constructing numerator. If a fraction exceeds 1, fully transfer that good and continue to the next instead of accepting an impossible share.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Normalize valuations.
- Compute transfers and the balancing fraction, handle ties and zero denominators explicitly.
- Verify equal satisfaction and no envy under the model.

**Required case selection:** Initial allocation, ratio order, balance fraction, zero/tie cases and equal satisfaction/no envy under assumptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Divisibility and trimming limitations

Curriculum reference: **Divisibility and trimming limitations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A half ownership share is mathematically assigned to a good. Does that establish that the parties can split its use or sale value additively?

**Agent-only key:** No; feasibility and additive valuation for the proposed right must be stated or agreed.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Adjusted winner assigns one party 1/11 of a piano. Is physical cutting the warranted recommendation?

**Agent-only worked reasoning:** No. The mathematics requires a feasible divisible right: agreed ownership, use, sale proceeds or compensation may work, but preferences must remain additive for that representation and cash must be available if used. A fractional output alone does not create feasibility.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Translate each fractional output into an actual transferable right.
2. Compare physical division, ownership, scheduled use, sale proceeds and compensation without assuming they preserve preferences.
3. Identify where liquidity, strategic reporting or complementarity breaks the mathematical guarantee.

### Practice progression

Classify divisible cake, a jointly used object and an indivisible heirloom; propose a feasible right only with explicit consent/valuation assumptions; then revise the fairness claim when no fractional transfer or cash payment can actually be made.

**Construction and verification controls:** Include divisible rights and genuinely indivisible goods with or without compensation/liquidity; identify which procedure's assumptions fail.

### Responsive hints and misconceptions

**First conceptual cue:** What transferable right does the fraction represent?

If cutting an object is proposed automatically, ask which right the numbers describe. If compensation is called always feasible, ask whether the payer has cash and whether monetary values genuinely represent preferences.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify the divisible right or compensation assumption.
- Distinguish a mathematical fraction from a feasible transfer.
- Qualify fairness claims when valuations or liquidity assumptions fail.

**Required case selection:** Trimming feasibility, ownership/use/cash alternatives, strategic/nonadditive valuations and qualified guarantees.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked transfer sequence with several goods

Use this second model when the learner is ready to see why ratio order and a full transfer matter. Two parties assign 100 points each to divisible goods X,Y,Z,W: A assigns (60,10,20,10) and B assigns (50,9,8,33). Values are additive and fractional transfers feasible. There are no initial ties.

**Prompt:** Apply adjusted winner and show each transfer before the final split. Verify equal satisfaction and no envy using each party's own values.

**Private trace:** Initially A receives X,Y,Z for 90 of A's points, while B receives W for 33 of B's points. A is ahead. The transfer ratios for A's goods are Y:10/9, X:60/50=6/5, Z:20/8=5/2, so process Y, then X, then Z. Transferring all Y gives A=80 and B=42; A remains ahead. Transfer fraction t of X from A to B and solve 80−60t=42+50t, obtaining t=19/55, which lies between zero and one. Both parties then receive 652/11 of their own points. A retains 36/55 of X and all Z; B has 19/55 of X, all Y and W. Each values the other's allocation at 100−652/11=448/11, so neither envies. Stop at the fractional balance; no Z transfer occurs.

**Responsive comparison:** If the learner transfers the highest ratio first, ask which order the procedure specifies and recompute satisfaction after the first proposed transfer. If a computed fraction exceeds one, transfer the whole good and continue rather than accepting an impossible share. For practice, change normalized valuations while preserving or deliberately changing the number of full transfers; independently recompute the initial owner, ordered ratios and balance from the final task.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
