# Lesson 51.2: Bin packing and capacity models

Packing indivisible items into bounded containers reverses the resource question posed by many scheduling problems.

## Learning objectives

- Apply and compare next-fit, first-fit, best-fit, and their decreasing variants to capacity-constrained packing.
- Relate packing and scheduling models and evaluate solutions using valid lower bounds.

## Proficiency criteria

- State item order and ties, preserve every item exactly once, respect capacity, and compare bin count and unused capacity without assuming a heuristic is optimal.
- Identify fixed resources and the minimized quantity, justify each bound, and state precisely when a bin can be interpreted as a processor with a deadline.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Packing heuristics** | For positive item sizes no larger than capacity, bin packing minimizes bin count. Next fit uses the current bin or opens a new one; first fit uses the earliest feasible bin; best fit uses the feasible bin leaving least unused space. Each has a decreasing variant after sorting items largest first, giving six named heuristics. | Apply and compare next-fit, first-fit, best-fit, and their decreasing variants to capacity-constrained packing. | State item order and ties, preserve every item exactly once, respect capacity, and compare bin count and unused capacity without assuming a heuristic is optimal. |
| **Packing bounds and scheduling connections** | Total size divided by capacity, rounded up, is a lower bound on bin count. Items larger than half capacity need separate bins. Packing into the fewest bins of fixed capacity differs from minimizing maximum processor load for a fixed processor count; precedence constraints can break an apparent equivalence. | Relate packing and scheduling models and evaluate solutions using valid lower bounds. | Identify fixed resources and the minimized quantity, justify each bound, and state precisely when a bin can be interpreted as a processor with a deadline. |
