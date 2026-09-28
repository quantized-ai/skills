# Tutor: Lesson 53.1 — Strategic games and payoff representations

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check matrix coordinates and payoff order:row strategyU,columnL selects UL; the first coordinate is Row’s payoff when stated so.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep pure Nash, cardinal zero-sum mixing and strict-ordinal theory of moves separate. Do not introduce repeated-game utility accumulation, behavioral forecasts or new stopping/order rules silently.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A cell has the greatest payoff sum and is declared Nash without checking deviations. What test must replace this?

**Agent-only reasoning:** Hold the opponent fixed and compare each player’s own alternatives. A mutually profitable joint result may still permit a unilateral profitable deviation.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Games, payoffs, and strategy sets

Curriculum reference: **Games, payoffs, and strategy sets** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A cell is labeled(5,−2). Is that zero-sum simply because one payoff is negative?

**Agent-only key:** No; their sum is 3. Zero-sum requires opposing payoffs summing to zero in every cell under the stated payoff scale.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** In a matching game the row player gains 1 when choices agree and loses 1 otherwise, with the column player getting the opposite amount. Write both players' payoffs.

**Agent-only worked reasoning:** Cells (H,H) and (T,T) are (1,-1); (H,T) and (T,H) are (-1,1). The row payoff matrix is [[1,-1],[-1,1]] and column is its negative, so zero-sum. A preference ranking alone would not justify arithmetic differences or expected payoffs.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Define players and their complete strategy sets before populating cells.
2. Label the order of payoffs and distinguish a one-player zero-sum matrix from a two-payoff bimatrix.
3. Contrast ordinal rank information with cardinal quantities: rankings justify comparisons, but not differences, interpersonal sums or expected-value mixing.

### Practice progression

Translate a fully described matching game into both matrix forms; then model a partial-conflict scenario with explicit payoffs; finally critique a story missing a strategy/outcome or assigning invented cardinal meaning to ranks.

**Construction and verification controls:** State players, strategies, payoff order and cardinal versus ordinal meaning; contrast zero-sum and partial-conflict bimatrices.

### Responsive hints and misconceptions

**First conceptual cue:** Whose gain is recorded in each entry?

If matrix rows/columns are interchanged during reading, point to one fixed joint choice and name whose outcome is first. If ordinal ranks are averaged, ask what meaningful payoff differences the source actually supplied.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Specify both players and every strategy pair.
- Identify whose payoff is shown.
- Distinguish ordinal from cardinal information.
- State omitted real-world factors.

**Required case selection:** Complete matrix construction, payoff ownership, zero-sum distinction and omitted assumptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Best responses and equilibrium

Curriculum reference: **Best responses and equilibrium** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** At one cell neither player can improve by changing only their own strategy. Does that prove this is the jointly best outcome?

**Agent-only key:** No; it establishes a Nash equilibrium, which can be Pareto inefficient.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For rows U,D and columns L,R, payoff pairs are UL=(3,2), UR=(0,0), DL=(1,1), DR=(2,3). Find pure Nash equilibria.

**Agent-only worked reasoning:** Row best responses: U to L, D to R. Column best responses: L to U, R to D. Thus UL and DR are mutual best responses; neither row strategy dominates. Joint improvement is not the unilateral Nash test.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Mark row-player best responses within each fixed column and column-player best responses within each fixed row.
2. Intersect the two marked sets to find all pure equilibria.
3. Test dominance against every opponent strategy, distinguishing strict improvement from ties and distinguishing dominance from a best response to one choice.

### Practice progression

Find responses in a2×2 game with a unique equilibrium; then include ties/multiple equilibria and a no-pure-equilibrium game; finally compare a Nash outcome with a jointly better alternative without changing the unilateral definition.

**Construction and verification controls:** Include strict/weak dominance, ties, multiple or no pure equilibria; enumerate best-response sets before intersections.

### Responsive hints and misconceptions

**First conceptual cue:** Hold the opponent's choice fixed when comparing one player's options.

If payoffs are compared diagonally, freeze the opponent's strategy. If only one equilibrium is reported, inspect every mutually marked cell rather than stopping at the first.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Compare one player’s payoffs while fixing the opponent’s strategy.
- Account for ties.
- Distinguish a unilateral incentive test from joint payoff improvement.

**Required case selection:** Dominance, both response sets, all pure equilibria and unilateral versus joint incentives.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
