# Tutor: Lesson 53.2 — Zero-sum minimax and mixed strategies

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check probability normalization and weighted expectation:.4·3+.6·0=1.2. Revisit zero-sum perspective and best responses first.

Review [53.1: Strategic games and payoff representations](../lesson-1-strategic-games-and-payoff-representations/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep pure Nash, cardinal zero-sum mixing and strict-ordinal theory of moves separate. Do not introduce repeated-game utility accumulation, behavioral forecasts or new stopping/order rules silently.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A row maximizer chooses the highest response line in a mixed-strategy plot. Explain the correct envelope.

**Agent-only reasoning:** The opponent selects the worst response for Row, so maximize the lower envelope. A column minimizer instead minimizes the upper envelope of row responses.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Saddle points and pure-strategy value

Curriculum reference: **Saddle points and pure-strategy value** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For row-maximizing matrix[[1,3],[2,4]], identify the row guarantees and column bounds.

**Agent-only key:** Row minima 1,2 give maximin 2; column maxima 2,4 give minimax 2, attained at bottom-left.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For row-maximizing payoff matrix [[2,4],[1,3]], find maximin, minimax and saddle point.

**Agent-only worked reasoning:** Row minima are 2,1, so maximin 2. Column maxima are 2,4, so minimax 2. Top-left is a saddle point and value 2: top row protects at least 2 and left column holds payoff at most 2.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Explain worst-case protection before introducing terminology.
2. Compute a minimum for each row and a maximum for each column, then compare outer max/min.
3. At equality show both players can enforce the same value; with a gap state that no pure saddle is established and route to mixed analysis.

### Practice progression

Work a unique saddle; repeat with tied optimal rows/columns and identify all saddle cells; then compare a gap case, retaining the correct lower/upper guarantees without labeling either the mixed value.

**Construction and verification controls:** Generate finite matrices with and without saddle points and tied candidates; explicitly state maximizing/minimizing players.

### Responsive hints and misconceptions

**First conceptual cue:** The row player fears the minimum; the column player fears the maximum.

If both players maximize the displayed row payoff, restate the zero-sum perspective. If equal numbers from unrelated operations are used, reconstruct the row-minimum/column-maximum table.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Compute row minima and column maxima with the correct payoff perspective.
- Identify all tied saddle points.
- Avoid claiming a pure optimum when the bounds differ.

**Required case selection:** Bounds, equality, all tied saddle points and no false pure optimum when bounds differ.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Two-strategy mixing

Curriculum reference: **Two-strategy mixing** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A proposed mixed strategy uses probabilities .7 and .6. Is it valid?

**Agent-only key:** No; they sum to 1.3. Each must be nonnegative and the distribution must sum to 1.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Find optimal mixtures for zero-sum row payoffs [[3,0],[0,2]].

**Agent-only worked reasoning:** If row uses top with probability p, column payoffs to row are 3p and 2(1-p); equality gives p=2/5. If column uses left with q, row choices yield 3q and 2(1-q); q=2/5. Value=6/5. Endpoints have guarantee 0 and no saddle exists, so the interior mix is optimal.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Check dominance and pure saddle first.
2. Express the opponent's response payoffs as functions of your mix, then solve indifference separately for each player.
3. Evaluate endpoints and all response payoffs to verify the guarantee rather than trusting a formula that may give invalid or indeterminate probabilities.

### Practice progression

Solve an interior 2×2 mix; verify expected payoff against both opponent pure strategies; then examine a dominant-strategy or zero-denominator case requiring boundary analysis and explain why an out-of-range solution is not a usable probability.

**Construction and verification controls:** Check domination/saddles first, solve separate indifference equations, then verify against every pure response including boundaries.

### Responsive hints and misconceptions

**First conceptual cue:** Make the opponent's pure choices equally attractive, not your own by using your own probability.

If own payoffs are equalized using the wrong player's probability, label the random choice in each expectation. If indifference is called sufficient automatically, test the resulting mixture against every pure response and the boundaries.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Normalize probabilities.
- Check domination and saddle points first.
- Use the correct indifference equations.
- Verify the resulting guarantee against every opponent pure strategy.

**Required case selection:** Both distributions, expected value, normalization, boundary/degenerate cases and guarantees.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Payoff envelopes with two strategies

Curriculum reference: **Payoff envelopes with two strategies** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For row mix p with response payoffs p and 1−p, which envelope represents its guarantee?

**Agent-only key:** The lower envelope min(p,1−p), whose maximum is 1/2 at p=1/2.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For row matrix [[4,0,2],[0,4,2]], optimize a mix p of the first row. Also interpret the transposed problem for a column minimizer.

**Agent-only worked reasoning:** The lower envelope is min(4p,4-4p,2), maximized at p=.5 with value 2. In the transpose, the column mix q minimizes max(4q,4-4q,2), likewise q=.5,value 2. Intersections of inactive lines alone need not be optimal in other games; evaluate endpoints and the actual envelope.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Plot each opponent-response line on the closed probability interval.
2. Highlight the lower envelope for a maximizing row player or upper envelope for a minimizing column player.
3. List endpoints and feasible intersections, discard irrelevant crossing claims only after evaluating the actual envelope, and retain flat optimal intervals if present.

### Practice progression

Optimize a2×3 lower envelope; transpose perspective for a3×2 upper envelope; then add an inactive line or a flat optimum and verify the selected mix's payoff against every original pure strategy.

**Construction and verification controls:** Use 2×n and m×2 matrices, compare every feasible intersection/endpoint, include flat optima and irrelevant crossings, verify all pure responses.

### Responsive hints and misconceptions

**First conceptual cue:** Which opponent choice gives the worst outcome for the mixing player?

If a visually high crossing is chosen, ask whether another response line lies below it. If a single probability is reported from a flat optimum, describe the full optimal set or say explicitly that one optimal mix is requested.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Evaluate the correct envelope on the full probability interval.
- Compare endpoints and relevant line intersections.
- Retain ties or flat optimal intervals.
- Verify the guarantee against every opponent pure strategy.

**Required case selection:** Both envelope orientations, full interval, endpoints/intersections, ties/flat sets and all-opponent verification.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
