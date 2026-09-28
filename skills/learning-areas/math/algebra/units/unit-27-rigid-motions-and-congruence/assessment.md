# Private calibration: Unit 27: Rigid motions and congruence

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 27.1

[Curriculum](lesson-1-transformations-as-functions/lesson.md) · [Tutor](lesson-1-transformations-as-functions/tutor.md)

**Prompt:** Find three independent images of the original P=(2,-1): translate by (3,4), reflect in $y=x$, and rotate 90° counterclockwise about C=(1,1). Compare a directional stretch $(x,y)\mapsto(2x,y)$.

**Checked reasoning:** Independent images are (5,3),(-1,2), and (3,2): displacement from C is (1,-2), rotated to (2,1), then add C. Translations/reflections/rotations preserve all distances and angles. Stretching the unit horizontal and vertical segments gives lengths 2 and 1, so it is not an isometry; the 45° ray becomes a ray of slope 1/2, showing angles need not be preserved.

**Coverage limit:** Include arbitrary mirror lines via perpendicular-bisector constructions, negative directed rotations and invariant checks across multiple point pairs; evidence must go beyond a single transformed vertex.

## Lesson 27.2

[Curriculum](lesson-2-compositions-and-symmetry/lesson.md) · [Tutor](lesson-2-compositions-and-symmetry/tutor.md)

**Prompt:** Let T translate by (2,0) and R reflect in the y-axis. Compare $R(T(1,3))$ with $T(R(1,3))$. List all symmetries of a nonsquare rectangle.

**Checked reasoning:** Images are (-3,3) and (1,3), so order matters. The inverse of $R\circ T$ is $T^{-1}\circ R^{-1}$. A nonsquare rectangle has two mirror axes through side midpoints and rotations 0° and 180° about its center; diagonals are not mirror axes. A square has additional symmetries.

**Coverage limit:** Generate inverse compositions, off-coordinate motion descriptions, regular polygons, general parallelograms and general versus isosceles trapezoids; list identities explicitly and use defining features to exclude extra symmetries.

## Lesson 27.3

[Curriculum](lesson-3-congruence-from-rigid-motions/lesson.md) · [Tutor](lesson-3-congruence-from-rigid-motions/tutor.md)

**Prompt:** Triangle ABC has vertices (0,0),(3,0),(0,2). Triangle DEF has vertices (5,1),(8,1),(5,-1). Prove congruence by motions and explain why equal area alone would not suffice.

**Checked reasoning:** Reflect ABC in the x-axis then translate by (5,1), mapping A→D,B→E,C→F. All sides and angles correspond. Conversely, equal corresponding sides and angles let one align a vertex and side, then the third vertex, with reflection if needed. Rectangles 1-by-6 and 2-by-3 have equal area but different side lengths, so are not congruent.

**Coverage limit:** Include reversed orientation, necessity/sufficiency of triangle part equality, complete correspondences and violated-invariant counterexamples.

## Lesson 27.4

[Curriculum](lesson-4-triangle-congruence-criteria/lesson.md) · [Tutor](lesson-4-triangle-congruence-criteria/tutor.md)

**Prompt:** Two nondegenerate triangles have corresponding sides 4,5,6. Explain SSS using rigid alignment. Compare triangles with two angles 40°,70° and corresponding side 5, and right triangles with hypotenuse 13 and leg 5.

**Checked reasoning:** Align one side by a motion; the remaining vertex is at intersections of two fixed-radius circles, with reflected positions congruent, proving SSS. Two given angles force the third to 70°, so the appropriately corresponding side gives ASA/AAS. For the right triangles, the other leg is 12 and HL applies; the right-angle hypothesis is essential. AAA alone permits different sizes, and SSA is generally insufficient.

**Coverage limit:** Require separate SSS/SAS/ASA rigid-motion arguments, included versus nonincluded angles, AAS reduction, established right angles for HL and corresponding-parts conclusions only after congruence.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 27.1 — Point functions and invariants | Whole-plane rule; pairwise distance; angles; actual representation; general versus example evidence. | [Teaching plan](lesson-1-transformations-as-functions/tutor.md#point-functions-and-invariants) |
| 27.1 — Translations and reflections | Equal perpendicular distances; fixed mirror points; translation vector; all vertices/edges mapped; justification beyond memorized rules. | [Teaching plan](lesson-1-transformations-as-functions/tutor.md#translations-and-reflections) |
| 27.1 — Rotations | Center fixed; directed angle; coordinate recentering; radius invariant; actual drawing/tool evidence if claimed. | [Teaching plan](lesson-1-transformations-as-functions/tutor.md#rotations) |
| 27.2 — Compositions and inverse motions | Order; intermediates; inverse order/direction; complete figure not one lucky vertex. | [Teaching plan](lesson-2-compositions-and-symmetry/tutor.md#compositions-and-inverse-motions) |
| 27.2 — Reflectional and rotational symmetry | Identity included; angles modulo 360°; centers/axes specified; regularity; no overgeneralized reflection claims. | [Teaching plan](lesson-2-compositions-and-symmetry/tutor.md#reflectional-and-rotational-symmetry) |
| 27.3 — Congruent figures and correspondence | Full mapping; preserved lengths/angles; orientation reversal allowed; no equal-area shortcut. | [Teaching plan](lesson-3-congruence-from-rigid-motions/tutor.md#congruent-figures-and-correspondence) |
| 27.3 — Triangle congruence equivalence | Both directions; correct vertex order; nondegenerate triangle; side/ray uniqueness; allowed rigid motions. | [Teaching plan](lesson-3-congruence-from-rigid-motions/tutor.md#triangle-congruence-equivalence) |
| 27.4 — SSS, SAS, and ASA | Strict triangle inequalities; included angle/side; matching order; alignment reasoning; no SSA substitution. | [Teaching plan](lesson-4-triangle-congruence-criteria/tutor.md#sss-sas-and-asa) |
| 27.4 — AAS, hypotenuse-leg, and corresponding parts | Right-angle premise; hypotenuse identification; criterion before CPCTC; AAS reasoning; reject AAA/SSA as general congruence tests. | [Teaching plan](lesson-4-triangle-congruence-criteria/tutor.md#aas-hypotenuse-leg-and-corresponding-parts) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.
