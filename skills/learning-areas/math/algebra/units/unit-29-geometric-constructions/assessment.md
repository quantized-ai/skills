# Private calibration: Unit 29: Geometric constructions

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 29.1

[Curriculum](lesson-1-copying-and-bisecting/lesson.md) · [Tutor](lesson-1-copying-and-bisecting/tutor.md)

**Prompt:** Describe exact constructions copying a segment and an angle, then construct the perpendicular bisector of AB and the internal bisector of angle XOY. Give reasons rather than measured approximations.

**Checked reasoning:** Transfer a segment's compass radius to the target ray. For an angle, draw equal-radius arcs about source and target vertices, transfer the chord between source-ray intersections, and draw the target ray; SSS justifies the copy. For AB draw equal-radius circles with radius greater than AB/2; join their two intersections, whose equal endpoint distances force the perpendicular bisector. For the angle take equal-distance points on its rays, intersect equal-radius arcs inside the angle, and join the vertex to that interior intersection; SSS makes the two angles equal.

**Coverage limit:** Require compass/straightedge and a second exact method (constraint-based dynamic geometry or justified folding), label every center/radius/intersection, avoid tangent/nonintersecting arcs and distinguish the intended internal ray.

## Lesson 29.2

[Curriculum](lesson-2-perpendiculars-parallels-and-triangle-existence/lesson.md) · [Tutor](lesson-2-perpendiculars-parallels-and-triangle-existence/tutor.md)

**Prompt:** Construct a perpendicular through a point P on a line and through a point Q off it, then a parallel through Q. Test triangle sides 3,4,8 and 3,4,5 by intersecting circles.

**Checked reasoning:** On-line P: mark equal distances A,B on either side and construct their perpendicular bisector. Off-line Q: draw a circle centered at Q intersecting the line at A,B, then construct AB's perpendicular bisector through Q. A perpendicular to that perpendicular through Q is parallel to the original line. With base length 8 and radii 3,4, circles are externally separated, so no triangle (with base 3 or 4 instead, one circle lies inside the other; still no triangle). With base 5 and radii 3,4, two intersections give reflected congruent triangles, since $1<5<7$.

**Coverage limit:** Include on/off-line incidence, another exact construction method, circle containment, external/internal tangency and strict triangle bounds; a failed approximate sketch is not evidence of impossibility.

## Lesson 29.3

[Curriculum](lesson-3-regular-inscribed-polygons/lesson.md) · [Tutor](lesson-3-regular-inscribed-polygons/tutor.md)

**Prompt:** In a given circle of radius r, construct a regular hexagon, an equilateral triangle and a square, and justify regularity.

**Checked reasoning:** Step a chord of length r around the circle. Each central triangle has three sides r, hence is equilateral with 60° central angle; six steps close a regular hexagon. Join alternate vertices to obtain equal 120° arcs and an equilateral triangle. Construct perpendicular diameters and join their endpoints cyclically for a square: equal 90° central angles give equal chords and inscribed right angles. All vertices remain on the original circle.

**Coverage limit:** Vary circle placement/radius and starting point, require exact unmarked-straightedge/compass constraints and proofs of both equal sides and equal angles; do not generalize radius stepping to arbitrary polygons.

## Lesson 29.4

[Curriculum](lesson-4-triangle-circles-and-exterior-tangents/lesson.md) · [Tutor](lesson-4-triangle-circles-and-exterior-tangents/tutor.md)

**Prompt:** Construct the incircle and circumcircle of a nondegenerate triangle, then both tangents from exterior P to circle center O and radius r. Explain what changes when P is on or inside the circle.

**Checked reasoning:** Circumcenter is the intersection of two perpendicular bisectors; use its distance to a vertex as radius. Incenter is the intersection of two internal angle bisectors; drop a perpendicular to a side for radius, then equal side distances establish all tangencies. For exterior P, construct midpoint M of OP and circle with diameter OP. Its intersections T1,T2 with the original circle give right angles OT_iP, so PT_i are tangent. If OP=r, the tangent is perpendicular to OP at P; if OP<r, no real tangent exists.

**Coverage limit:** Include obtuse triangles with exterior circumcenters, perpendicular inradius feet and both tangent points; require an actual construction trace or artifact before crediting construction execution.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 29.1 — Copying segments and angles | Actual steps/artifact; fixed radii/chord; chosen ray/side; theorem justification; exact constraints versus visual approximation. | [Teaching plan](lesson-1-copying-and-bisecting/tutor.md#copying-segments-and-angles) |
| 29.1 — Segment and angle bisectors | Radius existence; two intersections; midpoint/perpendicular conclusions; internal angle choice; actual second method/evidence. | [Teaching plan](lesson-1-copying-and-bisecting/tutor.md#segment-and-angle-bisectors) |
| 29.2 — Perpendicular and parallel lines | Nondegenerate intersections; point lies on result; double-perpendicular/corresponding-angle theorem; actual execution; second method. | [Teaching plan](lesson-2-perpendiculars-parallels-and-triangle-existence/tutor.md#perpendicular-and-parallel-lines) |
| 29.2 — Triangle inequality through construction | Positive radii; fixed base; full strict interval; both degeneracies; reflection relationship; actual or constraint-based construction evidence. | [Teaching plan](lesson-2-perpendiculars-parallels-and-triangle-existence/tutor.md#triangle-inequality-through-construction) |
| 29.3 — Equilateral triangle, square, and hexagon | All three polygons; equal arcs/chords; correct adjacency; actual straightedge-compass steps; regularity justification. | [Teaching plan](lesson-3-regular-inscribed-polygons/tutor.md#equilateral-triangle-square-and-hexagon) |
| 29.4 — Incircle and circumcircle | Correct bisectors; nondegenerate triangle; radius; concurrency/equidistance; actual contact/incidence; circumcenter possibly outside. | [Teaching plan](lesson-4-triangle-circles-and-exterior-tangents/tutor.md#incircle-and-circumcircle) |
| 29.4 — Tangents from an exterior point | Exterior/on/interior cases; auxiliary circle; both tangent points; right-angle theorem; observed construction evidence. | [Teaching plan](lesson-4-triangle-circles-and-exterior-tangents/tutor.md#tangents-from-an-exterior-point) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated learner responses

**Calibration prompt:** For AB=6, what line is obtained by joining intersections of equal radius-4 circles centered at A and B? For the reasoning version, add: “Perform the construction and justify it; provide an inspectable artifact.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “The perpendicular bisector of AB.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “The perpendicular bisector of AB.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “I used radius 3, got one intersection, and drew any line through it.” | The circles are tangent, so no two-point line was constructed and perpendicularity is unsupported. |
| An actual paper fold superposes A and B; the crease is justified by equal distances. | Valid second exact realization, but it does not replace separately required compass-and-straightedge execution. |
| Tutor supplies The two arc intersections and the instruction to join them; learner then gives “The perpendicular bisector of AB.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
