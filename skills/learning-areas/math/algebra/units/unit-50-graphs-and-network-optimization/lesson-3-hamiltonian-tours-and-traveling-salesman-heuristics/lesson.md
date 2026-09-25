# Lesson 50.3: Hamiltonian tours and traveling-salesman heuristics

Visiting locations once is a different optimization problem from servicing every edge.

## Learning objectives

- Distinguish Hamiltonian tour and Euler inspection models and formulate an appropriate network objective.
- Apply and compare nearest-neighbor and greedy cheapest-link traveling-salesman algorithms.

## Proficiency criteria

- Identify whether vertices or edges must be covered, include return requirements and allowed connections, and avoid transferring Euler tests to Hamiltonian questions.
- State starts and tie rules, enforce each algorithm’s constraints, compare complete tour costs, and distinguish a feasible heuristic result from a certified optimum.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Hamiltonian circuits and tour models** | A Hamiltonian circuit visits every vertex once before returning; a traveling-salesman problem minimizes its total edge cost in a specified weighted graph. A route may revisit roads when realizing graph-edge costs in a real network. Euler degree conditions do not decide Hamiltonian existence. | Distinguish Hamiltonian tour and Euler inspection models and formulate an appropriate network objective. | Identify whether vertices or edges must be covered, include return requirements and allowed connections, and avoid transferring Euler tests to Hamiltonian questions. |
| **Nearest-neighbor and cheapest-link heuristics** | For a complete finite weighted graph, nearest neighbor repeatedly selects the nearest unvisited vertex from a specified start and then returns. A greedy cheapest-link method selects low-cost edges subject to degree at most two and no premature closed subtour. Ties and start choice affect results; neither method guarantees a minimum tour in general. On an incomplete graph a method can get stuck; a missing edge cannot be silently added, and any metric completion must define an allowed connecting route and its cost. | Apply and compare nearest-neighbor and greedy cheapest-link traveling-salesman algorithms. | State starts and tie rules, enforce each algorithm’s constraints, compare complete tour costs, and distinguish a feasible heuristic result from a certified optimum. |
