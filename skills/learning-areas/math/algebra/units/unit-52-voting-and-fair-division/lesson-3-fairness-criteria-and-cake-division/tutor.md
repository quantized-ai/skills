# Tutor: Lesson 52.3 — Fairness criteria and cake division

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check own valuation versus another person’s:half the physical object need not be half of each person’s value. Establish additive normalized values.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep formal procedure guarantees conditional on stated voting/valuation assumptions. Do not equate a modeled allocation with authorized transfer of real property.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Three people each receive at least one third by their own values. A learner claims nobody can envy another. Refute the implication.

**Agent-only reasoning:** A person can value their own share .35 and another .40 (third .25), remaining proportional while envious. Use each person’s own valuation row.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Proportionality, envy, equity, and efficiency

Curriculum reference: **Proportionality, envy, equity, and efficiency** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** With three equal claimants, A values their share 35% and B's share 40%. Is A's allocation proportional? Envy-free?

**Agent-only key:** Proportional for A because 35%≥1/3, but A envies B. These are different comparisons.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Two people value allocated shares X,Y as A:(60,40) and B:(30,70), each totaling 100; A gets X, B gets Y. Which fairness claims follow?

**Agent-only worked reasoning:** Both receive at least half by own value, neither envies the other, and normalized satisfaction differs (.6 versus .7), so not equitable. Pareto efficiency is not established by these bundle totals alone without knowing feasible alternative allocations and subpiece valuations.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Normalize each person's total to one and evaluate every share with that person's own measure.
2. Build a participant-by-share valuation table for proportionality, envy and equity.
3. For efficiency compare feasible alternative allocations: satisfaction totals alone do not establish that no Pareto improvement exists.

### Practice progression

Classify two-person and three-person allocations; create a proportional but envious example; then prove or refute efficiency using a specified feasible transfer, and state assumptions before claiming implications between criteria.

**Construction and verification controls:** Use explicit normalized additive value tables and feasible allocation sets; request a counterallocation or full argument for efficiency rather than assume it.

### Responsive hints and misconceptions

**First conceptual cue:** Whose value system should compare the two shares?

If one person's values judge another's fairness, switch to that participant's row. If equal physical sizes are called equitable, compare normalized subjective satisfaction.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use each participant’s own valuation consistently.
- Distinguish the four criteria.
- Justify claimed implications only under their stated conditions.

**Required case selection:** Four criteria, own valuations and justified implications under stated divisibility/feasibility.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Divider-chooser and last diminisher

Curriculum reference: **Divider-chooser and last diminisher** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In two-person divider-chooser, can the divider guarantee more than half by their own valuation?

**Agent-only key:** Not from the basic guarantee; cutting equal halves secures half, while the chooser may prefer one share by more than half of their own value.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A cuts cake into two shares each worth 50 to A; B values them 30 and 70. What happens? In three-player last diminisher, who takes an untrimmed proposal?

**Agent-only worked reasoning:** B chooses the 70 share, leaving A a 50 share; both are proportional and envy-free by their own valuations. With three players, if nobody trims a proposed one-third share, the proposer takes it; otherwise the last trimmer takes it and all trimmings return to the residue. Remaining two divide and choose. This guarantees proportionality, not general three-player envy-freeness.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Track who values, cuts and chooses at each step.
2. Show why divider equality and chooser preference imply two-person envy-freeness.
3. For three-person last diminisher keep a ledger of the current proposed piece, each trim, the last trimmer and the returned residue; then apply divider-chooser to the remaining two.

### Practice progression

Execute a two-person valuation example; run three-player no-trim and multiple-trim traces; then justify every participant's one-third guarantee and exhibit why that alone does not establish envy-freeness among three.

**Construction and verification controls:** Use additive nonatomic valuations, track proposal and residue values, include no-trim and multiple-trim cases, then finish the two-player division.

### Responsive hints and misconceptions

**First conceptual cue:** Whose most recent cut sets the piece currently being offered?

If the first trimmer gets the piece, follow its ownership marker after later trims. If trimmings disappear, reconcile the residue before dividing among those still waiting.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Track valuations and residue accurately.
- Include the no-trimmer case.
- Justify two-player envy-freeness and three-player proportionality.
- Distinguish the chooser’s possible advantage from the divider’s guarantee.
- Avoid claiming general three-player envy-freeness.

**Required case selection:** Both procedures, chooser advantage/divider guarantee, residue conservation and limits of guarantees.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked trace: last diminisher and its guarantee

Assume three equal claimants A, B, C; each has an additive, nonnegative, nonatomic valuation totaling 100 for the cake. Exact equal-value cuts are feasible. A proposes a piece worth exactly $100/3$ to A. The following private valuation data describe nested pieces and are mutually consistent; discarded trimmings return to the unallocated cake.

| Proposed or trimmed piece | A's value | B's value | C's value |
| --- | --- | --- | --- |
| A's original proposal | $100/3$ | 40 | 50 |
| After B trims to B's third | 30 | $100/3$ | 40 |
| After C trims to C's third | 25 | 30 | $100/3$ |

B values the proposal above a third and trims it to B's third. C still values that piece above a third and trims again. As the last diminisher, C receives the final piece, exactly a third by C's valuation, and leaves the procedure. A and B value the remaining cake at 75 and 70 respectively. Divider-chooser on that remainder guarantees A at least $75/2=37.5$ and B at least $70/2=35$ by their own valuations, both above their original thirds.

The proof uses own values: every nonrecipient values the removed piece at no more than their original third, so enough value remains for the reduced problem. It does not say each participant values another participant's final share equally, and it does not establish envy-freeness for three participants. Ask the student to locate exactly where divisibility and additive valuation are used. For transfer, choose a case where C declines to trim and B therefore receives the piece; do not assign the piece to the last person who merely inspected it.


## Adaptive teaching examples

For fairness criteria, hold one person's valuation row fixed while comparing shares. In the two-person table A:(60,40), B:(30,70), each judges their own award against both half of their own total and their value of the other's award. **Conceptual cue:** “Whose preferences are used in this envy comparison?” **Setup:** circle A's row for A's comparison, then B's row for B's. **Worked step:** A compares 60 with 40; leave B's comparison and the unequal normalized satisfactions to the learner. Do not infer Pareto efficiency from these two received values without information about feasible reallocations.

Explain last-diminisher proportionality through what each remaining person knows about the awarded piece. A person who did not trim valued the then-current piece at most one third; later trimming cannot increase that value. An earlier trimmer also values the final smaller piece at most one third. Thus each remaining person's value of the residue is at least two thirds, and divider-chooser gives at least half of that residue, hence at least one third of the original whole. **Fade:** supply the inequalities “awarded ≤1/3, residue ≥2/3” and ask the learner to justify the last step. Include the no-trimmer case and return all trimmings to the residue. This proves proportionality under the stated valuation assumptions, not general three-person envy-freeness.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
