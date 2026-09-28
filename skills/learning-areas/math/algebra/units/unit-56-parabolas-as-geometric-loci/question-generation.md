# Unit 56 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Use nonrotated nondegenerate parabolas with nonzero signed focal parameter. Distances are nonnegative, focus/directrix geometry fixes the sign, and a full horizontal parabola is a relation rather than y=f(x). Derive from equidistance before reading a formula, and verify a point.

## Concept task families

### 56.1: A parabola as an equidistance locus

Use horizontal directrices and off-line focus with signed nonzero p; verify the derived locus and a point's two distances.

Required coverage: Equidistance derivation, vertex, axis, signed parameter and opening.

### 56.1: Converting between vertex form and focal attributes

Vary signed vertex forms and sufficient/insufficient vertex-focus/directrix data; include compatible checks and width comparisons.

Required coverage: Both conversions, reciprocal relation, distance/sign and insufficiency of direction-only data.

### 56.2: Horizontal focus/directrix equations

Generate vertical directrices and signed p≠0; sample an interior horizontal-domain x with two outputs, distinguish full relation from restricted branch.

Required coverage: Derivation, all focal attributes, orientation and two-output/function distinction.

### 56.2: Recovering parabola attributes by square completion

Use Ax²+Bx+Cy+D or Ay²+By+Cx+D with A,C nonzero; include outside scaling and both orientations, reject rotated/degenerate assumptions.

Required coverage: Equivalent square completion, signed geometry attributes and equal-distance verification for both orientations.

## Independent verification recipe

**Construct:** Choose focus/directrix or vertex/signed p with p≠0, keeping the axis horizontal or vertical and the directrix separate from the focus. Include positive and negative p, both orientations and reverse reconstruction from a general equation.

**Check before release:** Derive squared point-to-focus distance equals squared perpendicular distance to the directrix, expand and simplify independently. Check focus/vertex/directrix midpoint relations and a nonvertex point in both the equation and distance equality. A drawing must correspond to the equation; record actual dynamic-construction evidence separately.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

| Demand | Anchor and checked result |
| --- | --- |
| Direct conversion | \((x-1)^2=8(y+2)\): vertex \((1,-2)\), focus \((1,0)\), directrix \(y=-4\). |
| Comparable retest | \((x+3)^2=-12(y-1)\): vertex \((-3,1)\), focus \((-3,-2)\), directrix \(y=4\). |
| Added algebra | \(2y^2-12y-8x+10=0\) requires compensated completion before reading horizontal attributes. |
| Reverse construction | Vertex \((1,2)\), focus \((-1,2)\): \((y-2)^2=-8(x-1)\). |
| Insufficient data | Vertex and left-opening direction alone leave every \(p<0\) possible. Ask what magnitude information is missing. |

Vary orientation and sign independently of arithmetic difficulty. For each new item, check coefficient equivalence and both distances at a nonvertex point. If dynamic construction is requested, specify the observable output; a prose plan alone is not that output. Replace exposed anchors for assessment.
