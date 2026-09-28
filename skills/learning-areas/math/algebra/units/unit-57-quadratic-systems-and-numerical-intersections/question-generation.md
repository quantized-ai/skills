# Unit 57 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Simplify the reduced equation before counting roots. Preserve common domains, both equations and contextual units. A sign-change bracket needs continuity; an asymptote is not a root. Tangencies can lack sign change and a finite viewing window cannot certify global completeness.

## Concept task families

### 57.1: Formulating simultaneous linear and quadratic constraints

Include line-circle, line-parabola and product constraints with compatible units; enforce signs/integrality/context independently of algebra.

Required coverage: Both equations, defined variables/units, relation versus function and all contextual candidate checks.

### 57.1: Algebraic solutions and intersection counts

Build zero/one/two-intersection nondegenerate cases plus linear, contradiction and shared-line degeneracies; verify every pair and graph.

Required coverage: Substitution, actual degree, discriminant only when valid, all pairs/shared line and graphical reconciliation.

### 57.2: Equations as intersections and successive approximations

Specify common domain and tolerance, verify continuous brackets, include tangencies/multiple roots, and distinguish bounded-window evidence from global completeness.

Required coverage: Equal-output/difference-zero equivalence, actual graph/table search, refined error bounds, domain artifacts and root-count limits.

### 57.2: Quadratic–quadratic systems

Construct pairs yielding quadratic, linear, contradiction or identity reductions, require both leading coefficients nonzero and verify all output coordinates.

Required coverage: Actual simplified degree, zero/one/two or identical graph sets and limitation to quadratic functions.

## Independent verification recipe

**Construct:** Construct linear–quadratic systems with zero, one, two and, for shared components, infinitely many real solutions. For numerical intersections give both functions and domains, search region and precision target; include tangent roots and discontinuities so sign change is not treated as a complete search method.

**Check before release:** Substitute each ordered pair into both originals and distinguish identity from contradiction after elimination. For finite polynomial degree use an algebraic bound when claiming completeness. For numerical roots verify actual bracket values, continuity and a width-based input bound; inspect even-multiplicity roots separately because a sign-change scan can miss them.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

| Demand | Anchor and checked result |
| --- | --- |
| Direct substitution | \(y=x+1,y=x^2-1\): \((-1,0),(2,3)\). |
| Comparable retest | \(y=x-1,y=x^2-3\): \((-1,-2),(2,1)\). |
| Structural decision | \(y=x^2+1,y=x^2-2x+5\): cancellation leaves one intersection \((2,5)\). |
| Numerical reasoning | Positive solution of \(x^2=3\): \([1.73,1.74]\) brackets the root; midpoint 1.735 has input error at most .005. |
| Transfer/error analysis | Contrast a shared component, a discontinuity sign change and a tangent root. Each requires a different completeness argument. |

Specify whether the task asks for a particular root, all roots in an interval, or the global set. Include the common domain, input precision and any separate output tolerance. Coefficient size does not determine conceptual demand; an identity can be arithmetically simple but demand a stronger solution-set explanation. Use fresh verified variants after exposing anchors.
