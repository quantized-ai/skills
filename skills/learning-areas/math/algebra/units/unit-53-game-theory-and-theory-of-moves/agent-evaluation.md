# Unit 53 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 53.1: Games, payoffs, and strategy sets

Give this prompt to the tutor as a student request: In a matching game the row player gains 1 when choices agree and loses 1 otherwise, with the column player getting the opposite amount. Write both players' payoffs.

Then challenge its reasoning using this misconception: Treating ordinal labels as comparable quantities of happiness. The [delivery guidance](lesson-1-strategic-games-and-payoff-representations/tutor.md#games-payoffs-and-strategy-sets) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Cells (H,H) and (T,T) are (1,-1); (H,T) and (T,H) are (-1,1). The row payoff matrix is [[1,-1],[-1,1]] and column is its negative, so zero-sum. A preference ranking alone would not justify arithmetic differences or expected payoffs.

### 53.1: Best responses and equilibrium

Give this prompt to the tutor as a student request: For rows U,D and columns L,R, payoff pairs are UL=(3,2), UR=(0,0), DL=(1,1), DR=(2,3). Find pure Nash equilibria.

Then challenge its reasoning using this misconception: Comparing row payoffs across columns or equating Nash with the largest total payoff. The [delivery guidance](lesson-1-strategic-games-and-payoff-representations/tutor.md#best-responses-and-equilibrium) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Row best responses: U to L, D to R. Column best responses: L to U, R to D. Thus UL and DR are mutual best responses; neither row strategy dominates. Joint improvement is not the unilateral Nash test.

### 53.2: Saddle points and pure-strategy value

Give this prompt to the tutor as a student request: For row-maximizing payoff matrix [[2,4],[1,3]], find maximin, minimax and saddle point.

Then challenge its reasoning using this misconception: Reversing payoff perspective when taking minima and maxima. The [delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#saddle-points-and-pure-strategy-value) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Row minima are 2,1, so maximin 2. Column maxima are 2,4, so minimax 2. Top-left is a saddle point and value 2: top row protects at least 2 and left column holds payoff at most 2.

### 53.2: Two-strategy mixing

Give this prompt to the tutor as a student request: Find optimal mixtures for zero-sum row payoffs [[3,0],[0,2]].

Then challenge its reasoning using this misconception: Swapping whose probabilities solve which equality or accepting probabilities outside [0,1]. The [delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#two-strategy-mixing) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: If row uses top with probability p, column payoffs to row are 3p and 2(1-p); equality gives p=2/5. If column uses left with q, row choices yield 3q and 2(1-q); q=2/5. Value=6/5. Endpoints have guarantee 0 and no saddle exists, so the interior mix is optimal.

### 53.2: Payoff envelopes with two strategies

Give this prompt to the tutor as a student request: For row matrix [[4,0,2],[0,4,2]], optimize a mix p of the first row. Also interpret the transposed problem for a column minimizer.

Then challenge its reasoning using this misconception: Maximizing the upper envelope for the row player's guarantee. The [delivery guidance](lesson-2-zero-sum-minimax-and-mixed-strategies/tutor.md#payoff-envelopes-with-two-strategies) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: The lower envelope is min(4p,4-4p,2), maximized at p=.5 with value 2. In the transpose, the column mix q minimizes max(4q,4-4q,2), likewise q=.5,value 2. Intersections of inactive lines alone need not be optimal in other games; evaluate endpoints and the actual envelope.

### 53.3: Prisoners’ dilemma

Give this prompt to the tutor as a student request: Rows and columns choose C or D. Payoffs are CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). Verify the prisoners' dilemma.

Then challenge its reasoning using this misconception: Assuming the jointly best outcome must be equilibrium. The [delivery guidance](lesson-3-prisoners-dilemma-and-chicken/tutor.md#prisoners-dilemma) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: For each player, D beats C against either opponent choice (4>3 and 2>1), so DD is the unique pure Nash equilibrium. CC gives both 3 instead of 2, a Pareto improvement. The narrative label alone is insufficient; the stated preferences establish the structure.

### 53.3: Chicken and coordination over conflict

Give this prompt to the tutor as a student request: Rows and columns choose Yield or Escalate, with YY=(3,3), YE=(2,4), EY=(4,2), EE=(1,1). Identify pure equilibria and contrast prisoners' dilemma.

Then challenge its reasoning using this misconception: Treating chicken as prisoners' dilemma merely because both involve conflict. The [delivery guidance](lesson-3-prisoners-dilemma-and-chicken/tutor.md#chicken-and-coordination-over-conflict) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Best response to Yield is Escalate; to Escalate it is Yield. YE and EY are pure equilibria. Neither player has a dominant strategy; mutual escalation is worst, unlike mutual defection's position in prisoners' dilemma. A threat does not guarantee which asymmetric outcome occurs.

### 53.4: Rules of the theory of moves

Give this prompt to the tutor as a student request: In a two-by-two game beginning at (U,L), list the alternating state path if Row moves first and nobody stops before the first return.

Then challenge its reasoning using this misconception: Adding payoffs along the path as if this were a repeated game. The [delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#rules-of-the-theory-of-moves) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: (U,L)→(D,L)→(D,R)→(U,R)→(U,L), with movers Row, Column, Row, Column. Each switches only their own strategy; only a terminal cell pays. The return is a benchmark for backward comparison, not an invitation to assume repeated play or sum intermediate rewards.

### 53.4: Backward reasoning and comparison of predictions

Give this prompt to the tutor as a student request: For the prisoners' dilemma CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2), analyze moves from CC and compare with Nash.

Then challenge its reasoning using this misconception: Replacing backward analysis with greedy immediate improvements or assuming all initial cells give one prediction. The [delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#backward-reasoning-and-comparison-of-predictions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Row-first path is CC→DC→DD→CD→CC. Backward: at CD Column prefers stop (4) to return (3); at DD Row prefers stop (2) to CD (1); at DC Column prefers DD (2) to stop (1). Row therefore anticipates DD (2) versus starting CC (3) and declines. Symmetry gives the same for Column. CC persists under these move rules although simultaneous Nash is DD.

### 53.4: Strict ordinal conflict models

Give this prompt to the tutor as a student request: Two collaborators rank outcomes for sharing C or withholding D as: both share second-best, sole withholder best, both withhold third, sole sharer worst. Model and compare from mutual sharing.

Then challenge its reasoning using this misconception: Changing preferences between Nash and move analyses to manufacture a different prediction. The [delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#strict-ordinal-conflict-models) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Assign ranks CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). This is a strict ordinal prisoners' dilemma. Simultaneous analysis gives DD; under the alternating move rules from CC, both decline a path ending worse and CC persists as in the preceding calibration. Rankings come from the supplied story, not inferred facts about actual collaborators.

### 53.4: Cyclic games and stopping assumptions

Give this prompt to the tutor as a student request: For UL=(1,4), UR=(3,2), DL=(4,1), DR=(2,3), test cyclic classification under stop-at-best.

Then challenge its reasoning using this misconception: Calling any legal four-move loop a cyclic game. The [delivery guidance](lesson-4-moves-countermoves-and-nonmyopic-analysis/tutor.md#cyclic-games-and-stopping-assumptions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Orientation UL→DL→DR→UR→UL has movers Row,Column,Row,Column. Their departure payoffs are 1,1,2,2, each below own best 4, so this orientation is cyclic. The reverse begins with Column at UL already receiving 4 and is blocked. Cyclic classification does not predict endless play under rational first-return termination.

## Adversarial transfer scenario

**Student response to test:** A student averages ordinal ranks 1 and 4 to claim an expected utility 2.5, then uses that number to predict a mixed strategy in an ordinal conflict.

**Required behavior and mathematics:** Expected: rank gaps do not determine cardinal utility differences, so this arithmetic does not justify a mixed-strategy prediction. Continue the appropriate ordinal best-response/move analysis, or require an explicitly supplied cardinal utility model.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
