# Unit 51 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 51.1: List scheduling on identical processors

### List processing and feasible schedules

**Reference prompt:** On two identical processors, independent nonpreemptive tasks have A=4,B=3,C=2 and priority A,B,C. Construct the list schedule.

**Checked key:** At t=0 start A on P1 and B on P2; at t=3 start C on P2, finishing at 5. P1 ends at 4, makespan 5. If C instead depends on A, it starts at 4 and ends at 6; it was not ready when B ended.

[Delivery guidance](lesson-1-list-scheduling-on-identical-processors/tutor.md#list-processing-and-feasible-schedules). For complete coverage also apply its Assessment case checklist.

### Bounds and optimality

**Reference prompt:** Tasks of lengths 4,3,3 run on two identical processors. Compute bounds and decide whether makespan 6 is optimal.

**Checked key:** Work bound=10/2=5 and longest-task bound=4. A feasible schedule 4 versus 3+3 gives 6. Bounds alone do not certify 6, but enumeration does: no subset has sum 5, and all durations are integer, so makespan below 6 is impossible. A bound gap alone would not prove improvement exists.

[Delivery guidance](lesson-1-list-scheduling-on-identical-processors/tutor.md#bounds-and-optimality). For complete coverage also apply its Assessment case checklist.

## Lesson 51.2: Bin packing and capacity models

### Packing heuristics

**Reference prompt:** Capacity is 10 and ordered item sizes are 6,6,4,4. Compare next fit, first fit and best fit, breaking bin ties by earliest bin.

**Checked key:** Next fit gives [6],[6,4],[4]: three bins. First fit and best fit both give [6,4],[6,4]: two bins. The sequence is already decreasing, so their decreasing versions give the same respective results. Total size=20 makes two a lower bound; the two-bin solutions are optimal.

[Delivery guidance](lesson-2-bin-packing-and-capacity-models/tutor.md#packing-heuristics). For complete coverage also apply its Assessment case checklist.

### Packing bounds and scheduling connections

**Reference prompt:** Five items each have size 6 and capacity is 10. Compare the total-size bound and the large-item bound; relate this to scheduling.

**Checked key:** Total-size bound ceil(30/10)=3, but all five items exceed half capacity, so each requires its own bin: five, attainable. Packing fixes deadline/capacity and minimizes processors/bins; scheduling with a fixed processor count minimizes maximum load. Precedence changes the correspondence.

[Delivery guidance](lesson-2-bin-packing-and-capacity-models/tutor.md#packing-bounds-and-scheduling-connections). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

A finished arrangement, its algorithm trace and an optimality certificate answer different questions.

| Learner response | Judgment and next action |
| --- | --- |
| Starts dependent C at time 3 because its processor is idle, although A finishes at 4. | Processor availability is understood; readiness is not. Mark feasibility developing and ask for the prerequisite finish time. A repair after this cue is assisted. |
| Produces a feasible schedule with a different assignment among simultaneous free processors. | Accept equivalent processor relabeling unless a stated tie rule distinguishes it. Check intervals and dependencies, not the picture's exact layout. |
| For tasks 4,3,3 on two processors, “The bound is 5, so an optimum 5 schedule exists.” | The work bound is correct; attainability is unsupported. Request a feasible partition or proof before accepting the claimed optimum. |
| On items 6,8,2, the learner uses bin 2 for the last item and calls the trace first fit. | Placement and bin count are valid; first-fit fidelity fails because bin 1 was feasible. Preserve packing feasibility and address the selection rule. |
| “Two bins” is given without placement when a heuristic trace was requested. | Final count alone does not establish conservation, capacity or algorithm execution. Request the per-item trace; do not infer which method was used. |
| Learner self-corrects a missed ready task before any mathematical feedback. | The corrected work can remain independent. If the agent has supplied the readiness correction, mark the revision supported and use a fresh later task. |
