# Tutor: Lesson 53.3 — Prisoners’ dilemma and chicken

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check unilateral comparisons with the opponent held fixed. Return to best-response marking if a joint move is mistaken for a deviation.

Review [53.1: Strategic games and payoff representations](../lesson-1-strategic-games-and-payoff-representations/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep pure Nash, cardinal zero-sum mixing and strict-ordinal theory of moves separate. Do not introduce repeated-game utility accumulation, behavioral forecasts or new stopping/order rules silently.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A story labels mutual escalation “worst” yet calls escalation strictly dominant. Test the opponent-escalates case.

**Agent-only reasoning:** In chicken, yielding to an escalating opponent is better than mutual escalation, so escalation is not dominant. Verify full rankings rather than transferring prisoners’ dilemma labels.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Prisoners’ dilemma

Curriculum reference: **Prisoners’ dilemma** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Against cooperation, defection yields 4 instead of 3; against defection, it yields 2 instead of 1. Is defection dominant?

**Agent-only key:** Yes, strictly against both opponent choices; dominance needs both comparisons.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Rows and columns choose C or D. Payoffs are CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). Verify the prisoners' dilemma.

**Agent-only worked reasoning:** For each player, D beats C against either opponent choice (4>3 and 2>1), so DD is the unique pure Nash equilibrium. CC gives both 3 instead of 2, a Pareto improvement. The narrative label alone is insufficient; the stated preferences establish the structure.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Derive the outcome ranking from the narrative for each player separately.
2. Check temptation>mutual cooperation>mutual defection>being exploited, then demonstrate each unilateral incentive.
3. Compare the mutual-defection equilibrium with mutual cooperation using each player's own ranking, keeping efficiency distinct from stability.

### Practice progression

Analyze the canonical matrix; translate a resource-sharing or joint-effort story with supplied preferences; then change one rank and decide whether it still is prisoners' dilemma rather than preserving the label from the story.

**Construction and verification controls:** Generate strict rankings temptation>cooperation>mutual defection>exploitation and test both players; use original everyday conflict narratives without implying real people have known utilities.

### Responsive hints and misconceptions

**First conceptual cue:** Compare defection and cooperation separately against C and D.

If the cooperative cell is called equilibrium because both like it, test one player's deviation holding the other fixed. If any conflict is labeled prisoners' dilemma, require the four-outcome ordering and dominance evidence.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Verify both players’ payoff orderings.
- Demonstrate unilateral incentives and the jointly better alternative.
- State why the model’s assumptions matter.

**Required case selection:** Both dominance arguments, equilibrium, inefficiency and model assumptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Chicken and coordination over conflict

Curriculum reference: **Chicken and coordination over conflict** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In chicken, the other player escalates. Should a player whose worst outcome is mutual escalation keep escalating?

**Agent-only key:** No; yielding is the better response under the stated ranking.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Rows and columns choose Yield or Escalate, with YY=(3,3), YE=(2,4), EY=(4,2), EE=(1,1). Identify pure equilibria and contrast prisoners' dilemma.

**Agent-only worked reasoning:** Best response to Yield is Escalate; to Escalate it is Yield. YE and EY are pure equilibria. Neither player has a dominant strategy; mutual escalation is worst, unlike mutual defection's position in prisoners' dilemma. A threat does not guarantee which asymmetric outcome occurs.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Compare response to yielding with response to escalation to expose the absence of a dominant strategy.
2. Mark the two asymmetric mutual best responses.
3. Explain that simultaneous incentives conflict over which equilibrium occurs, and commitments or move timing are new modeling assumptions rather than guarantees from the matrix alone.

### Practice progression

Verify both pure equilibria; compare the same strategy labels under prisoners' dilemma rankings; then critique a claim that a threat ensures victory, identifying the credibility, information or timing assumptions needed.

**Construction and verification controls:** Preserve each player's strict chicken ranking, contrast changed rankings and state whether timing/commitment alters the game.

### Responsive hints and misconceptions

**First conceptual cue:** Is escalation still best when the other player escalates?

If escalation is treated as always best because it wins against yielding, inspect its payoff against escalation. If one asymmetric equilibrium is selected without a rule, ask what coordinating evidence breaks the symmetry.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Verify payoff rankings and best responses.
- Identify the asymmetric equilibria.
- Distinguish a threat or commitment from a guaranteed prediction.

**Required case selection:** Both best-response patterns, two asymmetric equilibria, ranking verification and limits of prediction.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
