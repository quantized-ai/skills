# Lesson 50.4: Spanning trees and critical paths

Connecting a network and scheduling dependent work use different graph structures and objectives.

## Learning objectives

- Use Kruskal’s algorithm to find and justify a minimum-cost spanning tree.
- Use the critical path method to calculate earliest project completion and identify slack and critical tasks.

## Proficiency criteria

- Avoid cycles, include every vertex, sum exactly the accepted weights, and distinguish a spanning-tree objective from shortest paths and traveling-salesman tours.
- Honor every dependency, use maxima at merges, identify all critical paths when tied, and state the assumed resource availability.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Minimum-cost spanning trees** | A spanning tree connects all vertices without cycles. Kruskal’s algorithm processes edges of a connected weighted undirected graph in increasing weight order, accepting an edge when it joins separate components, until there are one fewer edges than vertices. Equal weights may permit multiple optimum trees. | Use Kruskal’s algorithm to find and justify a minimum-cost spanning tree. | Avoid cycles, include every vertex, sum exactly the accepted weights, and distinguish a spanning-tree objective from shortest paths and traveling-salesman tours. |
| **Critical path in a precedence network** | A finite directed acyclic graph models tasks with durations and precedence. Earliest start is the maximum predecessor finish; latest times are obtained backward from the project finish. Critical paths have zero slack and their duration is a lower bound when processor capacity is constrained. | Use the critical path method to calculate earliest project completion and identify slack and critical tasks. | Honor every dependency, use maxima at merges, identify all critical paths when tied, and state the assumed resource availability. |
