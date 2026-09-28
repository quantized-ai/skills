# Tutor: Lesson 51.1 — List scheduling on identical processors

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check a task timeline and readiness: a3-unit task starting 2 finishes 5, and a successor cannot start before 5. Introduce graph/precedence notation directly if needed.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep identical processors, nonpreemptive tasks and the specified bin model. Different processor speeds, migration and extra precedence rules require a changed model.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A list schedule has makespan 6 and work lower bound 5. A learner says an optimum 5 schedule must exist. Explain why this does not follow.

**Agent-only reasoning:** A lower bound need not be attainable with indivisible tasks/precedence. For tasks 4,3,3 on two processors, no subset totals 5, so 6 is optimal despite that gap.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## List processing and feasible schedules

Curriculum reference: **List processing and feasible schedules** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A free processor sees high-priority C waiting for unfinished A and lower-priority ready B. Which task may start?

**Agent-only key:** B; priority is applied among ready tasks, not used to override precedence.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** On two identical processors, independent nonpreemptive tasks have A=4,B=3,C=2 and priority A,B,C. Construct the list schedule.

**Agent-only worked reasoning:** At t=0 start A on P1 and B on P2; at t=3 start C on P2, finishing at 5. P1 ends at 4, makespan 5. If C instead depends on A, it starts at 4 and ends at 6; it was not ready when B ended.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. At each event time finish every completing task before rebuilding the ready set.
2. Assign highest-priority ready tasks to free identical processors using a stated tie order, without interrupting tasks already running.
3. Record genuine idle time when no task is ready rather than inventing work.

### Practice progression

Schedule independent tasks in the given list; add predecessors causing intentional idle intervals; then handle simultaneous completions and verify each start against predecessor finish times and each processor's nonoverlap.

**Construction and verification controls:** Generate positive durations, processor count and priority/tie rules; include simultaneous finishes, idle periods and precedence DAGs.

### Responsive hints and misconceptions

**First conceptual cue:** Which tasks are ready at this completion time?

If C starts early because it tops the list, mark the unfinished prerequisite. If a long task is split between processors, restate nonpreemption and show where the proposed schedule violates it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the declared priority and tie order.
- Avoid overlaps and premature starts.
- Record idle intervals, and determine the completion time from the finished schedule.

**Required case selection:** Independent and constrained schedules, nonoverlap, readiness, tie order, idle intervals and makespan.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Bounds and optimality

Curriculum reference: **Bounds and optimality** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** With total work 18 on 3 processors and a longest task 8, is 6 a valid claimed optimal makespan?

**Agent-only key:** No; work gives bound 6 but the 8-unit task gives stronger bound 8.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Tasks of lengths 4,3,3 run on two identical processors. Compute bounds and decide whether makespan 6 is optimal.

**Agent-only worked reasoning:** Work bound=10/2=5 and longest-task bound=4. A feasible schedule 4 versus 3+3 gives 6. Bounds alone do not certify 6, but enumeration does: no subset has sum 5, and all durations are integer, so makespan below 6 is impossible. A bound gap alone would not prove improvement exists.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Derive each bound from a different obstruction: total capacity, indivisible longest task and precedence chain.
2. Take the maximum, then compare it with a feasible schedule.
3. Explain why meeting a bound proves optimality while a gap leaves uncertainty unless a stronger argument is supplied.

### Practice progression

Construct schedules attaining a work or critical-path bound; compare a nonattaining list schedule with another ordering; then use enumeration on a small case to prove an optimum that the simple bounds alone do not certify.

**Construction and verification controls:** Create examples attaining bounds and examples with gaps; use exact enumeration for small task sets and critical-path bounds with precedence.

### Responsive hints and misconceptions

**First conceptual cue:** Can work be split into two loads of 5 with these indivisible tasks?

If a gap is called proof of a better schedule, ask for that schedule or a theorem. If the smallest bound is selected, ask how any schedule can violate the larger obstruction.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Compute all applicable bounds.
- Preserve precedence and processor assumptions.
- Distinguish proof of optimality from the best schedule found by a heuristic.

**Required case selection:** Work, task and critical-path bounds; feasible comparison and rigorous certification/uncertainty.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
