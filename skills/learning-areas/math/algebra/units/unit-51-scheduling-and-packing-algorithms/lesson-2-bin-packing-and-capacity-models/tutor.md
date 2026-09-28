# Tutor: Lesson 51.2 — Bin packing and capacity models

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check residual capacity:capacity 10 with load 7 leaves 3. Review ceiling division for lower bounds:ceil(21/10)=3.

Review [51.1: List scheduling on identical processors](../lesson-1-list-scheduling-on-identical-processors/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep identical processors, nonpreemptive tasks and the specified bin model. Different processor speeds, migration and extra precedence rules require a changed model.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Five size 6 items and capacity 10 give volume bound 3. A learner reports 3 bins without placement. Refute and construct the optimum.

**Agent-only reasoning:** No two items fit together, so five bins are necessary and sufficient. A volume total cannot replace an actual capacity-respecting assignment.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Packing heuristics

Curriculum reference: **Packing heuristics** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Capacity 10, current bin contains 8, and a size 3 item arrives. An earlier bin contains 6. Which algorithm may reuse that earlier bin?

**Agent-only key:** First fit and best fit may; next fit opens a new bin because it only considers the current bin.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Capacity is 10 and ordered item sizes are 6,6,4,4. Compare next fit, first fit and best fit, breaking bin ties by earliest bin.

**Agent-only worked reasoning:** Next fit gives [6],[6,4],[4]: three bins. First fit and best fit both give [6,4],[6,4]: two bins. The sequence is already decreasing, so their decreasing versions give the same respective results. Total size=20 makes two a lower bound; the two-bin solutions are optimal.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Keep the item list, bin loads and residual capacities visible.
2. Demonstrate how next/first/best differ in their search rule before sorting the list.
3. For decreasing variants sort once at the beginning, state ties, and then apply the same underlying rule without rearranging bins to improve the result afterward.

### Practice progression

Trace an unsorted list through all three rules; repeat its decreasing order through all three variants; then compare bin count and waste, verifying every item appears once and none exceeds capacity. A heuristic result is optimal only with a separate certificate.

**Construction and verification controls:** Specify sizes in (0,C], item order and tie order; include unsorted inputs so all six named algorithms can differ and trace assignments.

### Responsive hints and misconceptions

**First conceptual cue:** Does the algorithm revisit earlier bins or only use the current bin?

If next fit searches old bins, ask which bin its rule permits examining. If best fit chooses the emptiest feasible bin, compare remaining spaces and select the smallest nonnegative one.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State item order and ties.
- Preserve every item exactly once.
- Respect capacity.
- Compare bin count and unused capacity without assuming a heuristic is optimal.

**Required case selection:** Next/first/best fit and all decreasing variants, conservation, capacity and cautious comparisons.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Packing bounds and scheduling connections

Curriculum reference: **Packing bounds and scheduling connections** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For sizes 6,6,6 and capacity 10, the volume bound is 2. Can 2 bins work?

**Agent-only key:** No; every item exceeds half capacity, so three separate bins are necessary.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Five items each have size 6 and capacity is 10. Compare the total-size bound and the large-item bound; relate this to scheduling.

**Agent-only worked reasoning:** Total-size bound ceil(30/10)=3, but all five items exceed half capacity, so each requires its own bin: five, attainable. Packing fixes deadline/capacity and minimizes processors/bins; scheduling with a fixed processor count minimizes maximum load. Precedence changes the correspondence.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Derive the ceiling volume bound and the large-item count bound, then compare them on one instance.
2. State which quantity is fixed and which is minimized when changing from packing to scheduling.
3. A bin can represent one processor with a deadline only when tasks fit the nonpreemptive capacity model and precedence does not add incompatible timing.

### Practice progression

Compute both bounds and a packing that meets the stronger; produce an instance with a remaining gap; then translate a deadline allocation to bins and explain why a precedence-constrained schedule cannot be checked by load sums alone.

**Construction and verification controls:** Vary many items above C/2, volume gaps and compatible/precedence-constrained scheduling interpretations.

### Responsive hints and misconceptions

**First conceptual cue:** Can any two of these items share a bin?

If total free space is treated as usable regardless of location, try placing the remaining indivisible item. If fewer bins and shorter makespan are confused, name the fixed resource in each question.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify fixed resources and the minimized quantity.
- Justify each bound.
- State precisely when a bin can be interpreted as a processor with a deadline.

**Required case selection:** Both lower bounds, attainability, resource/objective distinction and limits of equivalence.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Worked comparison: all six packing variants

Use capacity 10, arrival order $2,5,4,7,1,3,8$, and earliest-created-bin tie-breaking. Label duplicate items if a new task contains them. Decreasing variants first sort to $8,7,5,4,3,2,1$. Trace one item at a time before showing this private completed table; square brackets denote each bin's contents.

| Algorithm | Final bins in creation order | Bin count | Total unused capacity |
| --- | --- | --- | --- |
| Next fit | [2,5], [4], [7,1], [3], [8] | 5 | 20 |
| First fit | [2,5,1], [4,3], [7], [8] | 4 | 10 |
| Best fit | [2,5,1], [4], [7,3], [8] | 4 | 10 |
| Next-fit decreasing | [8], [7], [5,4], [3,2,1] | 4 | 10 |
| First-fit decreasing | [8,2], [7,3], [5,4,1] | 3 | 0 |
| Best-fit decreasing | [8,2], [7,3], [5,4,1] | 3 | 0 |

At the item 3 in the original order, first fit chooses the second bin, leaving 3 units, while best fit chooses the third bin, leaving zero. This distinguishes their decision rules even though their final counts match. Next fit cannot revisit an older bin, including after decreasing sorting. All methods conserve the total size 30. The volume lower bound is $\lceil30/10\rceil=3$, so the two three-bin constructions are optimal **for this instance**; the evidence does not prove either heuristic always optimal.

For transfer, give a permutation of the same multiset and ask which algorithms should be recomputed and why. The decreasing input becomes the same sorted sequence under the same tie convention, whereas the arrival-order algorithms may change. Relate three bins to three identical processors with deadline 10 only when items are independent, indivisible, nonpreemptive tasks and there are no extra release-time or precedence restrictions.


## Adaptive teaching examples

To distinguish first fit from best fit, use capacity 10 and ordered items 6,8,2, with bins numbered by opening time. After two items the loads are 6 and 8. **Conceptual cue:** “Does this rule choose the earliest feasible bin or the tightest feasible bin?” **Setup:** list residual capacities 4 and 2. **Worked step:** both can hold the size-2 item; first fit selects bin 1, while best fit selects bin 2. Let the learner compute final loads (8,8) and (6,10). Same bin count does not prove the same algorithm was followed. Next fit considers only the current bin, giving (6,10) here for a different reason.

For the effect of sorting, use 4,4,6,6. First fit in supplied order produces [4,4], [6], [6]; first-fit decreasing sorts to 6,6,4,4 and produces [6,4], [6,4]. **Fade:** supply the sorted list but no assignments, then remove the sorting scaffold. Retain item identity and never rearrange a finished trace retroactively. The total-size bound is 2 and is attained by the latter placement; three bins from the former trace establish heuristic performance, not an optimum. When translating bins to processors, explicitly fix a deadline of 10 and assume independent nonpreemptive tasks; precedence can invalidate that simple capacity interpretation.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
