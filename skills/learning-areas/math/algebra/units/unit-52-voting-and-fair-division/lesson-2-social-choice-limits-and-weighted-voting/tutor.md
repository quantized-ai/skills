# Tutor: Lesson 52.2 — Social choice limits and weighted voting

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check subsets and quota comparison:coalition weight exactly quota wins. Revisit pairwise rankings before the social-ranking theorem.

Review [52.1: Preference schedules and election rules](../lesson-1-preference-schedules-and-election-rules/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep formal procedure guarantees conditional on stated voting/valuation assumptions. Do not equate a modeled allocation with authorized transfer of real property.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A voter belongs to a winning coalition and is automatically called critical. Test removing that voter.

**Agent-only reasoning:** Criticality requires the remaining coalition to lose. In[3:2,1,1], only the weight 2 voter is critical in the grand coalition, although all belong to it.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Arrow’s impossibility theorem

Curriculum reference: **Arrow’s impossibility theorem** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does Arrow's theorem directly say that no winner-selection rule works for two candidates?

**Agent-only key:** No; its stated setting concerns a social ranking with at least three alternatives and the specified assumptions.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A claim says Arrow proved no election can be fair, even with two candidates. Evaluate it.

**Agent-only worked reasoning:** Overbroad. The theorem concerns a complete transitive social ranking on unrestricted preferences with at least three alternatives, together with unanimity, independence of irrelevant alternatives and nondictatorship. Restricting to two alternatives changes an assumption; a winner-only rule is not automatically the same ranking problem.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. State the input domain and required output before listing fairness conditions.
2. Explain unanimity, independence of irrelevant alternatives and nondictatorship using what may change in a pair's social ranking.
3. Examine a proposed escape by naming the exact assumption it relaxes, rather than claiming a logical contradiction to the theorem.

### Practice progression

Sort claims into theorem assumptions versus informal hopes; explain a restricted-preference-domain proposal; then evaluate a winner-only or two-alternative “counterexample” and write a qualified implication for comparing election methods.

**Construction and verification controls:** Ask whether a proposed exception changes unrestricted domain, ranking output, candidate count or one of the conditions; avoid unsupported universality.

### Responsive hints and misconceptions

**First conceptual cue:** What output and number of alternatives does the theorem assume?

If the theorem becomes “all voting is useless,” ask which combination of formal properties is ruled out. If a familiar winner rule is declared a refutation, identify whether it supplies the required complete transitive social ranking.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State the relevant assumptions and incompatible properties.
- Distinguish a ranking theorem from a claim that all elections are useless.
- Explain which assumption a proposed exception changes.

**Required case selection:** Exact assumptions and incompatible properties, applicability and qualified implications.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Weighted coalitions and Banzhaf power

Curriculum reference: **Weighted coalitions and Banzhaf power** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In quota [4:3,1,1], is voter A critical in coalition ABC of weight 5?

**Agent-only key:** Yes; removing A leaves weight 2 below 4. Either smaller voter alone is not critical there because removing it leaves 4.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For weighted voting [3:2,1,1], enumerate winning coalitions and normalized Banzhaf powers.

**Agent-only worked reasoning:** With voters A,B,C, winners are AB, AC, ABC. In AB both A,B are critical; in AC both A,C; in ABC only A. Critical counts 3,1,1 give powers 3/5,1/5,1/5. They differ from weight shares 1/2,1/4,1/4.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Enumerate subsets systematically so every coalition is counted once.
2. Mark winning coalitions, then remove one member at a time to count critical occurrences.
3. Normalize by total critical counts rather than weight sum and compare the result with nominal weight shares.

### Practice progression

Analyze a three-voter system completely; change quota while preserving weights and examine dummies; then include a zero-weight voter or equal-power unequal-weight case, verifying quota>0 and quota≤total before normalization.

**Construction and verification controls:** Enumerate small coalitions with nonnegative weights and quota in (0,total]; include dummies, ties and equal power with unequal weights.

### Responsive hints and misconceptions

**First conceptual cue:** Would this coalition still win without the member being tested?

If all winning members are deemed critical, recompute the reduced coalition. If normalized indices do not sum to 1, reconcile the critical-count denominator before changing any values.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Verify the weight and quota conditions.
- Distinguish quota from majority count, count each coalition once.
- Identify critical members and dummies, normalize by the positive total of critical occurrences.
- Explain why power can differ from weight share.

**Required case selection:** Valid quotas, complete enumeration, criticality/dummies and positive normalization.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For Arrow, treat a proposed exception as a hypothesis check. A rule restricted to two candidates does not contradict a theorem requiring at least three; a winner-only output is not automatically a complete social ranking. **Conceptual cue:** “What kind of output is this claim asking the rule to produce?” **Setup:** place the claimed exception beside the theorem's domain, output and conditions. **Worked step:** mark “two candidates” as a changed hypothesis; ask the learner to classify a restricted-preference example without announcing its answer. Do not demand a proof of the impossibility theorem when the curriculum asks for its statement and implications.

For Banzhaf power, isolate membership from necessity. In [3:2,1,1], AB and AC have two critical members, but ABC has only A: removing B leaves weight 3, still winning. **Cue:** “Would this coalition still win without that member?” **Setup:** add reduced-weight and win/lose columns for one coalition. **Worked step:** ABC without A weighs 2; leave the B and C checks to the learner. **Faded contrast:** [3:3,1,1] has winning coalitions A, AB, AC, ABC; only A is ever critical, so normalized powers are (1,0,0), despite B and C having positive weights. Ask why weight share is the wrong denominator.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
