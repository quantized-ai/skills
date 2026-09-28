# Unit 53 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 53.1: Strategic games and payoff representations

### Games, payoffs, and strategy sets

**Reference prompt:** In a matching game the row player gains 1 when choices agree and loses 1 otherwise, with the column player getting the opposite amount. Write both players' payoffs.

**Checked key:** Cells (H,H) and (T,T) are (1,-1); (H,T) and (T,H) are (-1,1). The row payoff matrix is [[1,-1],[-1,1]] and column is its negative, so zero-sum. A preference ranking alone would not justify arithmetic differences or expected payoffs.

[Delivery guidance](lesson-1-strategic-games-and-payoff-representations/tutor.md#games-payoffs-and-strategy-sets). For complete coverage also apply its Assessment case checklist.

### Best responses and equilibrium

**Reference prompt:** For rows U,D and columns L,R, payoff pairs are UL=(3,2), UR=(0,0), DL=(1,1), DR=(2,3). Find pure Nash equilibria.

**Checked key:** Row best responses: U to L, D to R. Column best responses: L to U, R to D. Thus UL and DR are mutual best responses; neither row strategy dominates. Joint improvement is not the unilateral Nash test.

[Delivery guidance](lesson-1-strategic-games-and-payoff-representations/tutor.md#best-responses-and-equilibrium). For complete coverage also apply its Assessment case checklist.

## Lesson 53.2: Zero-sum minimax and mixed strategies

### Saddle points and pure-strategy value

**Reference prompt:** For row-maximizing payoff matrix [[2,4],[1,3]], find maximin, minimax and saddle point.

**Checked key:** Row minima are 2,1, so maximin 2. Column maxima are 2,4, so minimax 2. Top-left is a saddle point and value 2: top row protects at least 2 and left column holds payoff at most 2.

[Delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#saddle-points-and-pure-strategy-value). For complete coverage also apply its Assessment case checklist.

### Two-strategy mixing

**Reference prompt:** Find optimal mixtures for zero-sum row payoffs [[3,0],[0,2]].

**Checked key:** If row uses top with probability p, column payoffs to row are 3p and 2(1-p); equality gives p=2/5. If column uses left with q, row choices yield 3q and 2(1-q); q=2/5. Value=6/5. Endpoints have guarantee 0 and no saddle exists, so the interior mix is optimal.

[Delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#two-strategy-mixing). For complete coverage also apply its Assessment case checklist.

### Payoff envelopes with two strategies

**Reference prompt:** For row matrix [[4,0,2],[0,4,2]], optimize a mix p of the first row. Also interpret the transposed problem for a column minimizer.

**Checked key:** The lower envelope is min(4p,4-4p,2), maximized at p=.5 with value 2. In the transpose, the column mix q minimizes max(4q,4-4q,2), likewise q=.5,value 2. Intersections of inactive lines alone need not be optimal in other games; evaluate endpoints and the actual envelope.

[Delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#payoff-envelopes-with-two-strategies). For complete coverage also apply its Assessment case checklist.

## Lesson 53.3: Prisoners’ dilemma and chicken

### Prisoners’ dilemma

**Reference prompt:** Rows and columns choose C or D. Payoffs are CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). Verify the prisoners' dilemma.

**Checked key:** For each player, D beats C against either opponent choice (4>3 and 2>1), so DD is the unique pure Nash equilibrium. CC gives both 3 instead of 2, a Pareto improvement. The narrative label alone is insufficient; the stated preferences establish the structure.

[Delivery guidance](lesson-3-prisoners-dilemma-and-chicken/tutor.md#prisoners-dilemma). For complete coverage also apply its Assessment case checklist.

### Chicken and coordination over conflict

**Reference prompt:** Rows and columns choose Yield or Escalate, with YY=(3,3), YE=(2,4), EY=(4,2), EE=(1,1). Identify pure equilibria and contrast prisoners' dilemma.

**Checked key:** Best response to Yield is Escalate; to Escalate it is Yield. YE and EY are pure equilibria. Neither player has a dominant strategy; mutual escalation is worst, unlike mutual defection's position in prisoners' dilemma. A threat does not guarantee which asymmetric outcome occurs.

[Delivery guidance](lesson-3-prisoners-dilemma-and-chicken/tutor.md#chicken-and-coordination-over-conflict). For complete coverage also apply its Assessment case checklist.

## Lesson 53.4: Moves, countermoves, and nonmyopic analysis

### Rules of the theory of moves

**Reference prompt:** In a two-by-two game beginning at (U,L), list the alternating state path if Row moves first and nobody stops before the first return.

**Checked key:** (U,L)→(D,L)→(D,R)→(U,R)→(U,L), with movers Row, Column, Row, Column. Each switches only their own strategy; only a terminal cell pays. The return is a benchmark for backward comparison, not an invitation to assume repeated play or sum intermediate rewards.

[Delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#rules-of-the-theory-of-moves). For complete coverage also apply its Assessment case checklist.

### Backward reasoning and comparison of predictions

**Reference prompt:** For the prisoners' dilemma CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2), analyze moves from CC and compare with Nash.

**Checked key:** Row-first path is CC→DC→DD→CD→CC. Backward: at CD Column prefers stop (4) to return (3); at DD Row prefers stop (2) to CD (1); at DC Column prefers DD (2) to stop (1). Row therefore anticipates DD (2) versus starting CC (3) and declines. Symmetry gives the same for Column. CC persists under these move rules although simultaneous Nash is DD.

[Delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#backward-reasoning-and-comparison-of-predictions). For complete coverage also apply its Assessment case checklist.

### Strict ordinal conflict models

**Reference prompt:** Two collaborators rank outcomes for sharing C or withholding D as: both share second-best, sole withholder best, both withhold third, sole sharer worst. Model and compare from mutual sharing.

**Checked key:** Assign ranks CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). This is a strict ordinal prisoners' dilemma. Simultaneous analysis gives DD; under the alternating move rules from CC, both decline a path ending worse and CC persists as in the preceding calibration. Rankings come from the supplied story, not inferred facts about actual collaborators.

[Delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#strict-ordinal-conflict-models). For complete coverage also apply its Assessment case checklist.

### Cyclic games and stopping assumptions

**Reference prompt:** For UL=(1,4), UR=(3,2), DL=(4,1), DR=(2,3), test cyclic classification under stop-at-best.

**Checked key:** Orientation UL→DL→DR→UR→UL has movers Row,Column,Row,Column. Their departure payoffs are 1,1,2,2, each below own best 4, so this orientation is cyclic. The reverse begins with Column at UL already receiving 4 and is blocked. Cyclic classification does not predict endless play under rational first-return termination.

[Delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#cyclic-games-and-stopping-assumptions). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.
