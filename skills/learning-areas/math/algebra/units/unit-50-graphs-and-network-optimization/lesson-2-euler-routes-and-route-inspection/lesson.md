# Lesson 50.2: Euler routes and route inspection

Edge-service tasks use Euler traversals and may require repeated edges to create a feasible closed route.

## Learning objectives

- Determine and construct Euler trails or circuits and justify existence from degree and connectivity conditions.
- Solve small route-inspection problems by Eulerizing a graph and evaluating traversal cost.

## Proficiency criteria

- Traverse each required edge exactly once when possible, identify correct endpoints, and distinguish a degree condition from the separate connectivity requirement.
- Preserve all original edges, make all relevant degrees even, count repeated traversal costs, and justify minimality only when pairings and shortest connecting paths have been exhaustively or optimally compared.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Euler trails and circuits** | In a connected undirected graph after ignoring isolated vertices, an Euler circuit uses every edge once and exists exactly when every degree is even. An open Euler trail exists exactly when two degrees are odd, with those vertices as endpoints. | Determine and construct Euler trails or circuits and justify existence from degree and connectivity conditions. | Traverse each required edge exactly once when possible, identify correct endpoints, and distinguish a degree condition from the separate connectivity requirement. |
| **Eulerization and inspection cost** | For a connected undirected graph with nonnegative edge costs, a closed route inspecting every edge may repeat edges. Eulerization pairs odd vertices by duplicated connecting paths; minimizing added total weight requires comparing valid pairings and path costs, not merely choosing visually close vertices. | Solve small route-inspection problems by Eulerizing a graph and evaluating traversal cost. | Preserve all original edges, make all relevant degrees even, count repeated traversal costs, and justify minimality only when pairings and shortest connecting paths have been exhaustively or optimally compared. |
