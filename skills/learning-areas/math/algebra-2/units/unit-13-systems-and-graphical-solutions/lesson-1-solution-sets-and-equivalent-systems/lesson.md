# Lesson 13.1: Solution sets and equivalent systems

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

A system requires every equation to hold simultaneously. Substitution and elimination are justified by preserving that shared solution set and checked against the original equations.

## Learning objectives

- Explain equivalence and possible solution sets of linear systems.
- Solve two-variable systems efficiently and verify exact solutions.

## Learning outcome

By the end of this lesson, you should be able to choose, justify, and verify a substitution or elimination method for a two-variable linear system.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Verify a proposed solution in every original equation and distinguish no solution, a unique solution, and infinitely many solutions.
- Explain a permitted equation replacement by describing its inverse and retaining the other constraints of the system.
- Demonstrate both substitution and elimination on appropriate systems, carrying each method through to all unknowns and explaining which method the equation structure makes more efficient.
- Report exact coordinates when available, check them in both original equations, and distinguish a plotted estimate from exact evidence.

## Concepts

### Concept U13-L01-C01: Simultaneous solutions and reversible elimination

**Content**

- A solution satisfies every equation in a system.
- Substitution checks; unique, absent, and infinitely many solutions.
- Replacing an equation by itself plus a multiple of another.

**Learning objectives**

- **U13-L01-C01-O1:** Verify a proposed solution and distinguish the possible solution counts of a linear system.
  - Standards: CCSS HSA-REI.C.6 (prerequisite review).
- **U13-L01-C01-O2:** Justify why a reversible row or equation replacement preserves a system's solution set.
  - Standards: CCSS HSA-REI.C.5 (direct).

**Proficiency criteria**

- Test every original equation when verifying simultaneous membership in the solution set.
- Distinguish a unique solution, a contradiction, and a consistent dependent system from their equations or geometry.
- Explain a reversible equation replacement by describing how the prior equation can be recovered.
- Retain the independent constraints needed for equivalence and identify why replacing both equations by only their sum loses information.

**Explanation**

The word “system” means all listed conditions hold simultaneously. Suppose equations $E_1$ and $E_2$ are replaced by $E_1$ and $E_2+cE_1$. Every original solution satisfies the new equations by adding equal quantities. Conversely, subtracting $cE_1$ recovers $E_2$, so the new system has no extra solutions. Keeping only the sum and discarding both original equations would lose a condition and can enlarge the solution set.

**Worked examples**

For $x+y=5$ and $2x-y=1$, $(2,3)$ satisfies both because $2+3=5$ and $4-3=1$. Replace the second equation by its sum with the first: $3x=6$. Retaining the first equation gives $x=2,y=3$. In contrast, $3x=6$ alone permits every $(2,y)$ and is not equivalent to the system.

**Exercises**

1. Does $(1,4)$ solve that system? **Answer:** No; it satisfies the first equation but gives $-2$ rather than $1$ in the second.
2. Classify $x+y=2,\ 2x+2y=4$ and $x+y=2,\ 2x+2y=5$. **Answer:** Infinitely many solutions on the same line; no solutions because doubling the first gives a contradiction with the second.

**Assessment**

For $x-y=1$ and $2x+y=8$, verify $(3,2)$ and explain why replacing the second equation with the second minus twice the first preserves all solutions. **Expected:** Both original equations hold; the new second equation is $3y=6$, and adding twice the first recovers the original second. **Rubric, 4 points:** verification (2; O1), forward and reverse preservation argument (2; O2).

### Concept U13-L01-C02: Substitution and elimination in two variables

**Content**

- Solving for one variable and substituting an equivalent expression.
- Scaling equations to eliminate one variable.
- Exact solutions versus estimates from a graph.

**Learning objectives**

- **U13-L01-C02-O1:** Solve a two-variable linear system by substitution and elimination.
  - Standards: CCSS HSA-REI.C.6 (prerequisite review).
- **U13-L01-C02-O2:** Select an efficient method and check an exact answer in both equations.
  - Standards: CCSS HSA-REI.C.6 (prerequisite review); TEKS 2A.1(B) (direct process).

**Proficiency criteria**

- Select substitution or elimination based on coefficient structure or an already isolated variable.
- Execute both substitution and elimination across appropriate systems without losing the relation needed to recover the second coordinate.
- Check the ordered pair in both original equations using exact arithmetic when exact values are available.
- Separate an approximate graph intersection from a justified exact algebraic solution.

**Explanation**

Substitution is efficient when a variable is already isolated. Elimination is efficient when coefficients match or are simple multiples. Either method must retain enough information to find both variables. A graph provides an estimate or a geometric check; a plotted intersection near $(1.3,2.7)$ does not establish exact fractions.

**Worked examples**

For $y=2x+1$ and $3x+y=11$, substitute to get $3x+2x+1=11$, so $x=2,y=5$. Check $5=2(2)+1$ and $3(2)+5=11$. For $2x+3y=7$ and $4x-3y=5$, adding eliminates $y$: $6x=12$, so $x=2$ and $y=1$.

**Exercises**

1. Solve $y=3x-2,\ x+y=6$. **Answer:** $(2,4)$.
2. Solve $3x+2y=8,\ 3x-2y=4$. **Answer:** $(2,1)$; addition is especially convenient.

**Assessment**

Solve $2x+y=7,\ 3x-2y=0$ and justify your method choice. **Expected:** Substitute $y=7-2x$ to obtain $7x=14$, hence $(2,3)$; both equations check. Elimination by doubling the first is equally valid. **Rubric, 4 points:** algebra and solution (2; O1), method rationale and checks (2; O2).
