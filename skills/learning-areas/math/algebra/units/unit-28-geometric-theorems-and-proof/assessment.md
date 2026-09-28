# Private calibration: Unit 28: Geometric theorems and proof

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 28.1

[Curriculum](lesson-1-lines-angles-and-equidistance/lesson.md) · [Tutor](lesson-1-lines-angles-and-equidistance/tutor.md)

**Prompt:** Intersecting lines create adjacent angles u and v with u=68°. Find v and the angle vertically opposite u. Prove that a point equidistant from endpoints A,B lies on their perpendicular bisector.

**Checked reasoning:** A linear pair gives v=112°; the vertical opposite angle equals 68° because both supplement the same adjacent angle. For point P off AB, join P to midpoint M; PA=PB, AM=BM, PM common give SSS, so adjacent angles PMA and PMB are equal and supplementary, hence 90°. If P lies on AB and is equidistant, it is M. The forward perpendicular-bisector implication follows by SAS of the right triangles.

**Coverage limit:** Include transversal angle theorems only with parallel hypotheses, converses establishing parallelism, and both directions of the equidistance locus with on-line cases.

## Lesson 28.2

[Curriculum](lesson-2-triangle-angle-and-midsegment-theorems/lesson.md) · [Tutor](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md)

**Prompt:** In triangle ABC, AB=AC and angle A=40°. Let D,E be midpoints of AB,AC. Find angles B,C and relate DE to BC; justify the general claims.

**Checked reasoning:** Base angles are equal by congruence using the bisector of A (SAS), hence each is 70° after the angle-sum theorem. A line through A parallel to BC derives the 180° sum from alternate interior angles; an exterior angle equals the two remote interior angles. With vectors or coordinates, $E-D=(C-B)/2$, so DE is parallel to BC with half its length. The converse equal-base-angle statement follows by AAS with a bisector.

**Coverage limit:** Require triangle angle-sum and exterior-angle proofs, isosceles theorem/converse and midsegment proof; vary orientation and distinguish midsegments from medians.

## Lesson 28.3

[Curriculum](lesson-3-triangle-centers/lesson.md) · [Tutor](lesson-3-triangle-centers/tutor.md)

**Prompt:** For A=(0,0), B=(6,0), C=(0,6), find centroid, circumcenter and incenter; distinguish their defining distances.

**Checked reasoning:** Centroid G=(2,2), dividing the median from A to (3,3) in ratio 2:1. Circumcenter O=(3,3) is the hypotenuse midpoint, equidistant $3\sqrt2$ from all vertices. Inradius $r=(6+6-6\sqrt2)/2=6-3\sqrt2$, incenter I=(r,r), equidistant from all three side lines. Vertex distances define circumcenter; perpendicular side distances define incenter.

**Coverage limit:** Include acute/obtuse/right triangles, centroid 2:1 direction, concurrence justification, exterior circumcenters, and constructions explaining equal-distance properties.

## Lesson 28.4

[Curriculum](lesson-4-quadrilateral-proofs/lesson.md) · [Tutor](lesson-4-quadrilateral-proofs/tutor.md)

**Prompt:** A parallelogram has diagonals of equal length. Prove it is a rectangle. Explain why equal diagonals alone do not prove an arbitrary quadrilateral is a rectangle.

**Checked reasoning:** In parallelogram ABCD, triangles ABC and BAD have AB common, BC=AD and AC=BD, hence SSS; angles ABC and BAD are equal. Consecutive parallelogram angles are supplementary, so both are 90°. An isosceles trapezoid can have equal diagonals without being a rectangle. For a rhombus, perpendicular diagonals require the parallelogram hypothesis for the converse used here; a square requires both rectangle and rhombus properties.

**Coverage limit:** Cover all specified parallelogram side/angle/diagonal tests, forward/converse proofs, rhombus angle bisection and rectangle/rhombus/square classification; supply a valid non-parallelogram counterexample to an overgeneralized diagonal test.

## Lesson 28.5

[Curriculum](lesson-5-polygon-angles-and-triangle-inequalities/lesson.md) · [Tutor](lesson-5-polygon-angles-and-triangle-inequalities/tutor.md)

**Prompt:** Find the interior-angle sum and each exterior angle of a regular octagon. Decide which third-side lengths c are possible with sides 4 and 7, and compare angles opposite unequal sides.

**Checked reasoning:** Interior sum $(8-2)180°=1080°$; each consistently directed exterior turn 45°, so each interior angle 135°. For a nondegenerate triangle $3<c<11$; c=3 or 11 is degenerate, beyond those bounds impossible. Larger sides oppose larger angles. A convex polygon's exterior turns total 360°; individual equality requires regularity.

**Coverage limit:** Include nonregular and concave polygons with appropriate signed/unsigned conventions, derivations via triangulation, strict triangle bounds and side-angle ordering with correspondence.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 28.1 — Vertical and transversal angles | Incidence; parallel premise; corresponding/alternate/same-side roles; converse; deductive reason for each equality. | [Teaching plan](lesson-1-lines-angles-and-equidistance/tutor.md#vertical-and-transversal-angles) |
| 28.1 — Perpendicular-bisector locus | Distinct endpoints; both implications; perpendicular and midpoint conditions; midpoint case; full locus. | [Teaching plan](lesson-1-lines-angles-and-equidistance/tutor.md#perpendicular-bisector-locus) |
| 28.2 — Triangle angle sum and exterior angles | Euclidean setting; remote/adjacent distinction; auxiliary justification; valid positive angles. | [Teaching plan](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md#triangle-angle-sum-and-exterior-angles) |
| 28.2 — Isosceles triangles and their converse | Opposite correspondence; congruence criterion; both directions; inclusive isosceles; equilateral/equiangular. | [Teaching plan](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md#isosceles-triangles-and-their-converse) |
| 28.2 — Triangle midsegments | Both midpoints; parallelism; half-length; nondegeneracy; general reasoning rather than measurement alone. | [Teaching plan](lesson-2-triangle-angle-and-midsegment-theorems/tutor.md#triangle-midsegments) |
| 28.3 — Medians and centroid | Midpoints;2:1 from vertex; all three medians; inside location; no altitude/bisector confusion. | [Teaching plan](lesson-3-triangle-centers/tutor.md#medians-and-centroid) |
| 28.3 — Circumcenter and incenter | Perpendicular versus angle bisectors; concurrency; vertex/side-line distance; interior incenter; altitude distinct. | [Teaching plan](lesson-3-triangle-centers/tutor.md#circumcenter-and-incenter) |
| 28.4 — Parallelogram properties and tests | All named tests; both opposite pairs or same pair parallel+equal; diagonals; congruence/angle reasons; no circular classification. | [Teaching plan](lesson-4-quadrilateral-proofs/tutor.md#parallelogram-properties-and-tests) |
| 28.4 — Rectangles, rhombi, and squares | Parallelogram condition; equal/perpendicular diagonal tests; rhombus angle bisection; square requires both properties. | [Teaching plan](lesson-4-quadrilateral-proofs/tutor.md#rectangles-rhombi-and-squares) |
| 28.5 — Polygon angle sums | Simple polygon; regularity; convex exterior statement; sum versus individual; integer n≥3. | [Teaching plan](lesson-5-polygon-angles-and-triangle-inequalities/tutor.md#polygon-angle-sums) |
| 28.5 — Triangle side constraints | Strict inequalities; positive lengths; equivalent interval; opposite correspondence; degenerate equality excluded. | [Teaching plan](lesson-5-polygon-angles-and-triangle-inequalities/tutor.md#triangle-side-constraints) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.
