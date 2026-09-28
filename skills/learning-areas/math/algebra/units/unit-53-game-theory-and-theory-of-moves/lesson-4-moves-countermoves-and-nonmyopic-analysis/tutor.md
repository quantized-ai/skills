# Tutor: Lesson 53.4 — Moves, countermoves, and nonmyopic analysis

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check the canonical payoff rankings, Nash responses and initial-cell notation. Revisit prisoners’ dilemma/chicken before tracing their nonmyopic predictions.

Review [53.1: Strategic games and payoff representations](../lesson-1-strategic-games-and-payoff-representations/tutor.md) together with its curriculum if that specific gap appears. Review [53.3: Prisoners’ dilemma and chicken](../lesson-3-prisoners-dilemma-and-chicken/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep pure Nash, cardinal zero-sum mixing and strict-ordinal theory of moves separate. Do not introduce repeated-game utility accumulation, behavioral forecasts or new stopping/order rules silently.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Starting prisoners’ dilemma at CC, Row sees immediate DC payoff 4 and initiates without looking ahead. Trace the actual anticipated terminal outcome.

**Agent-only reasoning:** Along CC→DC→DD→CD→CC, backward choices give stop CD for Column, stop DD for Row, then continuation to DD for Column. Row anticipates 2 instead of starting 3 and declines; Column is symmetric.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Rules of the theory of moves

Curriculum reference: **Rules of the theory of moves** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Starting at (U,L), can Row's unilateral first move reach (U,R)?

**Agent-only key:** No; Row can change only U to D, giving (D,L). Reaching (U,R) is Column's switch.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** In a two-by-two game beginning at (U,L), list the alternating state path if Row moves first and nobody stops before the first return.

**Agent-only worked reasoning:** (U,L)→(D,L)→(D,R)→(U,R)→(U,L), with movers Row, Column, Row, Column. Each switches only their own strategy; only a terminal cell pays. The return is a benchmark for backward comparison, not an invitation to assume repeated play or sum intermediate rewards.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Label state, player to move and terminal-versus-intermediate payoff at every tree node.
2. Trace both possible initiators through four alternating switches to the first return.
3. Add stop branches at each decision and keep the return as a terminal comparison benchmark, while prohibiting an initiator from choosing a path that returns or ends worse.

### Practice progression

Draw both first-return paths for one matrix; annotate the decision-maker and stopping payoff at each cell; then contrast terminal-only move analysis with a repeated game that sums stage payoffs, explaining why its incentives would require different rules.

**Construction and verification controls:** Supply complete strict ordinal matrix, initial cell, both possible initiators and explicit stopping convention; label decision-maker at each node.

### Responsive hints and misconceptions

**First conceptual cue:** Which single coordinate may the current player change?

If a player changes both coordinates, require a one-coordinate move. If intermediate gains are added, point to the rule that only the final state pays and recompute the comparison.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State the initial cell and potential first mover.
- Preserve unilateral alternating changes.
- Distinguish terminal from intermediate payoffs.
- Identify cycles explicitly.

**Required case selection:** Legal alternating trees, status quo, terminal rewards, initiation and cycle handling.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Backward reasoning and comparison of predictions

Curriculum reference: **Backward reasoning and comparison of predictions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In backward reasoning, should a mover compare their current payoff with the next cell or with the terminal result of rational continuation?

**Agent-only key:** The anticipated terminal result of continuation, which may differ from the next cell.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For the prisoners' dilemma CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2), analyze moves from CC and compare with Nash.

**Agent-only worked reasoning:** Row-first path is CC→DC→DD→CD→CC. Backward: at CD Column prefers stop (4) to return (3); at DD Row prefers stop (2) to CD (1); at DC Column prefers DD (2) to stop (1). Row therefore anticipates DD (2) versus starting CC (3) and declines. Symmetry gives the same for Column. CC persists under these move rules although simultaneous Nash is DD.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Work backward from the first-return benchmark, deciding stop versus continuation for the scheduled mover at each node.
2. Only then compare each initiator's anticipated outcome with the initial state.
3. Analyze both initiators and apply the stated two-sided preemption rule when one can induce an outcome both prefer to the other's profitable result.

### Practice progression

Start with prisoners' dilemma from CC; analyze DD and an asymmetric start separately; then analyze chicken from mutual yielding, disaster and an asymmetric state, showing any dependence on first-move/order assumptions. For a larger game enumerate branches and state a termination convention instead of importing the unique 2×2 cycle.

**Construction and verification controls:** Also analyze PD from DC: Row's direct CC outcome is not individually profitable, Column can induce DD, but the curriculum's two-sided preemption selects CC since both prefer it to DD. Include chicken from YY (stays YY) and asymmetric cells with explicit first-move/order conventions; larger games need explicit branching/termination rules.

### Responsive hints and misconceptions

**First conceptual cue:** Whose terminal outcome determines whether this scheduled move is worthwhile?

If immediate improvement substitutes for continuation, ask what the opponent would do next and recurse to the terminal outcome. If a preferred preemptive move is omitted as unprofitable in isolation, compare it with the other's profitable initiating result under the explicit two-sidedness convention.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Track each decision-maker’s preference over terminal outcomes.
- Analyze prisoners’ dilemma and chicken from stated initial cells.
- Document cycle and initiation conventions.
- Qualify predictions when several paths remain.

**Required case selection:** Both initiators, PD and chicken, initial-state sensitivity, return benchmark and two-sided preemption; qualify ambiguous order or larger-game predictions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Strict ordinal conflict models

Curriculum reference: **Strict ordinal conflict models** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A storyteller assigns a player rankings 4,4,2,1. Is this a strict ranking of four outcomes?

**Agent-only key:** No; strict ordinal ranks must distinguish every outcome. Ties need a different model or additional preference information.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Two collaborators rank outcomes for sharing C or withholding D as: both share second-best, sole withholder best, both withhold third, sole sharer worst. Model and compare from mutual sharing.

**Agent-only worked reasoning:** Assign ranks CC=(3,3), CD=(1,4), DC=(4,1), DD=(2,2). This is a strict ordinal prisoners' dilemma. Simultaneous analysis gives DD; under the alternating move rules from CC, both decline a path ending worse and CC persists as in the preceding calibration. Rankings come from the supplied story, not inferred facts about actual collaborators.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Extract each participant's four-outcome ordering separately from the stated narrative evidence.
2. Translate to a fixed matrix, identify simultaneous best responses and then specify an actual status quo for move analysis.
3. Use identical rankings in both analyses and explain which assumptions, rather than changed utilities, cause different predictions.

### Practice progression

Build an original conflict from explicitly supplied motives; audit strategy completeness and strict ranks; then draw both initiation trees and compare Nash/nonmyopic outcomes, stating how uncertain preferences, information or feasible moves limit the story's prediction.

**Construction and verification controls:** Ask students to justify an original bounded conflict model, check each player's ranks 1–4 occurs once, state initial cell and analyze both initiators using the same matrix.

### Responsive hints and misconceptions

**First conceptual cue:** Do these ranks compare outcomes for one person or amounts across different people?

If rankings are changed mid-analysis, retain the original table and make any revision a new model. If numbers are treated as interpersonal welfare, remind the learner they encode order only and request own-player comparisons.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Justify each player’s rankings from the stated conflict.
- Specify the initial cell and move conventions.
- Analyze both initiators.
- Explain how model assumptions limit the prediction.

**Required case selection:** Defensible story-to-rank modeling, strictness, Nash and nonmyopic comparison, initial/information assumptions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Cyclic games and stopping assumptions

Curriculum reference: **Cyclic games and stopping assumptions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A legal loop visits all four cells. Does that alone prove the game is cyclic under stop-at-best?

**Agent-only key:** No; the scheduled mover at one cell may already receive their best-ranked payoff and block that orientation.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For UL=(1,4), UR=(3,2), DL=(4,1), DR=(2,3), test cyclic classification under stop-at-best.

**Agent-only worked reasoning:** Orientation UL→DL→DR→UR→UL has movers Row,Column,Row,Column. Their departure payoffs are 1,1,2,2, each below own best 4, so this orientation is cyclic. The reverse begins with Column at UL already receiving 4 and is blocked. Cyclic classification does not predict endless play under rational first-return termination.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Mark the scheduled mover after every cell for one orientation, then compare that player's payoff with their own maximum across the matrix.
2. Repeat in the other orientation.
3. Distinguish this classification test from basic first-return rational termination and from an endurance model that permits repeated cycling.

### Practice progression

Check the supplied cyclic example; move a top rank to a departure cell to create a blocking case; then explain why “cyclic” does not establish endless rational play unless stopping/endurance rules are changed explicitly.

**Construction and verification controls:** Use strict ordinal 2×2 matrices, examine both orientations and each scheduled mover's maximum; keep endurance/repeated-cycling changes explicitly separate from basic rules.

### Responsive hints and misconceptions

**First conceptual cue:** Who may move from this cell, and whose rank should judge that move?

If the wrong player's4 blocks a move, point to whose turn it is. If a cyclic classification is reported as an observed behavioral forecast, state the separate stopping assumptions and what remains a model consequence only.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Track whose turn follows each cell in both orientations.
- Check whether that player has their top-ranked payoff.
- Distinguish a cyclic classification from a prediction of endless play.

**Required case selection:** Both orientations, best-rank blocks, strict ordinal assumptions and classification versus stopping predictions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked branches: initiation and preemption must be explicit

Use the prisoners' dilemma rankings $CC=(3,3)$, $CD=(1,4)$, $DC=(4,1)$, $DD=(2,2)$, and the curriculum's terminal-return benchmark and two-sidedness rule. At each choice compare the scheduled mover's payoff at **stopping now** with that mover's payoff at the anticipated terminal result of continuation. Ties stop; the initiator rejects a return or a worse result.

From DC, with Row as potential initiator, the sequence is $DC\to CC\to CD\to DD\to DC$. Work backward: Column stops at DD because Column has 2 there versus 1 at the terminal DC; Row at CD prefers continuation to DD (2 over 1); Column at CC prefers stopping at CC (3 over the anticipated 2 at DD). The anticipated Row-initiated outcome is therefore CC. Row ordinarily declines because 3 is below Row's initial 4.

With Column as potential initiator, the sequence is $DC\to DD\to CD\to CC\to DC$. Row at CC prefers continuation to terminal DC (4 over 3); Column at CD stops (4 over the anticipated 1 at DC); Row at DD stops (2 over the anticipated 1 at CD). Column can therefore profitably initiate to DD, raising Column's payoff from 1 to 2. Under the specified two-sidedness convention, Row may preempt with CC because **both** prefer CC to that threatened DD outcome. Without that extra convention, silently selecting CC would not follow from Row's ordinary initiation test.

Now change to chicken: $YY=(3,3)$, $YE=(2,4)$, $EY=(4,2)$, $EE=(1,1)$. From EE, Row's initiating path has anticipated terminal YE, while Column's has anticipated terminal EY. Each initiation benefits its own mover, but different initiators produce different terminal outcomes. State the initiator/order assumption or report conditional predictions; neither unilateral trace alone yields one universal outcome. From YY, either potential initiator anticipates payoff 2 instead of the starting 3 and declines under these rules.

Have the learner annotate every cell with the next mover and every branch with its anticipated terminal cell. A changed status quo can change the prediction without changing the payoff rankings or Nash equilibria. Larger matrices require more than a four-cell loop: enumerate the available switches and declare the termination/order convention before backward analysis.


## Adaptive teaching examples

Use a decision table with current cell, scheduled mover, payoff if stopping, and payoff at the anticipated terminal cell after continuation. In the existing prisoners' dilemma from CC, the backward comparisons on the Row-first path give Column stopping at CD, Row stopping at DD, then Column continuing from DC toward DD. At the initial node Row compares its terminal rank 2 with its starting rank 3 and declines. **Conceptual cue:** “Is the 4 at the first changed cell actually paid if the opponent continues?” **Setup:** leave the intermediate payoff column visible but circle only terminal outcomes. **Worked step:** at CD Column compares stopping at rank 4 with the return benchmark rank 3; let the learner complete the preceding node. Then remove one completed backward row and repeat for the other initiator. Apply initiation and two-sidedness only after those terminal comparisons, using the declared conventions.

For an original conflict, ask for separate evidence supporting each player's strict four-outcome order before assigning ranks. Keep those ranks unchanged when comparing Nash and move-tree conclusions. Missing rankings or an unspecified status quo justify a conditional answer, not an invented unique prediction.

For cyclic classification, reuse UL=(1,4), UR=(3,2), DL=(4,1), DR=(2,3): in UL→DL→DR→UR→UL, the scheduled movers' departure ranks are 1,1,2,2. The 4 belonging to the other player at UL does not block Row's move. **Faded contrast:** reverse the orientation and ask whose turn now starts at their best rank. Classification under stop-at-best remains distinct from a prediction of endless play under rules that exclude repeated cycling.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
