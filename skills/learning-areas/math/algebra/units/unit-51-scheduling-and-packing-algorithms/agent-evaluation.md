# Unit 51 agent evaluation

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

### 51.1: List processing and feasible schedules

Give this prompt to the tutor as a student request: On two identical processors, independent nonpreemptive tasks have A=4,B=3,C=2 and priority A,B,C. Construct the list schedule.

Then challenge its reasoning using this misconception: Treating list position as permission to violate a predecessor. The [delivery guidance](lesson-1-list-scheduling-on-identical-processors/tutor.md#list-processing-and-feasible-schedules) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: At t=0 start A on P1 and B on P2; at t=3 start C on P2, finishing at 5. P1 ends at 4, makespan 5. If C instead depends on A, it starts at 4 and ends at 6; it was not ready when B ended.

### 51.1: Bounds and optimality

Give this prompt to the tutor as a student request: Tasks of lengths 4,3,3 run on two identical processors. Compute bounds and decide whether makespan 6 is optimal.

Then challenge its reasoning using this misconception: Treating a lower-bound gap as proof the heuristic can be improved. The [delivery guidance](lesson-1-list-scheduling-on-identical-processors/tutor.md#bounds-and-optimality) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Work bound=10/2=5 and longest-task bound=4. A feasible schedule 4 versus 3+3 gives 6. Bounds alone do not certify 6, but enumeration does: no subset has sum 5, and all durations are integer, so makespan below 6 is impossible. A bound gap alone would not prove improvement exists.

### 51.2: Packing heuristics

Give this prompt to the tutor as a student request: Capacity is 10 and ordered item sizes are 6,6,4,4. Compare next fit, first fit and best fit, breaking bin ties by earliest bin.

Then challenge its reasoning using this misconception: Treating next fit as first fit or omitting a repeated-size item. The [delivery guidance](lesson-2-bin-packing-and-capacity-models/tutor.md#packing-heuristics) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Next fit gives [6],[6,4],[4]: three bins. First fit and best fit both give [6,4],[6,4]: two bins. The sequence is already decreasing, so their decreasing versions give the same respective results. Total size=20 makes two a lower bound; the two-bin solutions are optimal.

### 51.2: Packing bounds and scheduling connections

Give this prompt to the tutor as a student request: Five items each have size 6 and capacity is 10. Compare the total-size bound and the large-item bound; relate this to scheduling.

Then challenge its reasoning using this misconception: Assuming the volume bound is always attainable. The [delivery guidance](lesson-2-bin-packing-and-capacity-models/tutor.md#packing-bounds-and-scheduling-connections) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Total-size bound ceil(30/10)=3, but all five items exceed half capacity, so each requires its own bin: five, attainable. Packing fixes deadline/capacity and minimizes processors/bins; scheduling with a fixed processor count minimizes maximum load. Precedence changes the correspondence.

## Adversarial transfer scenario

**Student response to test:** For capacity 10 and items 6,6,6, a student claims two bins because ceiling(18/10)=2.

**Required behavior and mathematics:** Expected: recognize 2 as a lower bound, then strengthen it to 3 because no pair fits. A three-bin construction meets the strengthened bound. Explain why a lower bound is not automatically attainable.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- At time 3 in the dependent C example, submit “C starts because P2 is free.” Expect the agent to identify readiness, preserve correct earlier scheduling, and mark coached repair assisted.
- For capacity 10 and ordered sizes 6,8,2, submit best-fit placement under a first-fit request. Expect separate judgments for valid packing and incorrect algorithm selection.
- For durations 4,3,3 on two processors, submit makespan 6 with a correct partition and the weak bound 5. Expect no false optimality credit until a valid stronger argument is supplied; also no claim that a better schedule must exist.
- Provide a schedule differing only by processor names. Expect acceptance when no relevant tie rule is violated.
