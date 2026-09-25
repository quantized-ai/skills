# Lesson 51.1: List scheduling on identical processors

A priority list assigns ready tasks to available processors while precedence determines which tasks can start.

## Learning objectives

- Construct list-processing schedules for independent and precedence-constrained tasks on identical processors.
- Compare schedules and determine when lower bounds certify optimal completion time.

## Proficiency criteria

- Use the declared priority and tie order, avoid overlaps and premature starts, record idle intervals, and determine the completion time from the finished schedule.
- Compute all applicable bounds, preserve precedence and processor assumptions, and distinguish proof of optimality from the best schedule found by a heuristic.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **List processing and feasible schedules** | Nonpreemptive tasks run uninterrupted on identical processors. At each completion time, a list-processing algorithm assigns the highest-priority ready tasks to available processors; a task is ready only after all predecessors finish. Independent tasks have no predecessor restrictions. | Construct list-processing schedules for independent and precedence-constrained tasks on identical processors. | Use the declared priority and tie order, avoid overlaps and premature starts, record idle intervals, and determine the completion time from the finished schedule. |
| **Bounds and optimality** | For total work $W$ on $m$ processors, $W/m$ is a completion-time lower bound; longest task and critical-path duration give further bounds. Equality between a feasible schedule and a valid lower bound proves optimality; a gap does not prove that a better schedule exists. | Compare schedules and determine when lower bounds certify optimal completion time. | Compute all applicable bounds, preserve precedence and processor assumptions, and distinguish proof of optimality from the best schedule found by a heuristic. |
