# Fresh-question generation: Unit 38 — Vectors and vector models

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Choose axes, reference frame, angle and bearing conventions before resolving components. Magnitudes are nonnegative; signs belong in components or directions. The zero vector has no unique direction and cannot be normalized; an angle with zero or projection onto zero is undefined. Track scalar versus vector projections and force-distance units in work.

## Constructive families and verification

- **Components and directions:** construct nonzero planar vectors from integer components or exact special angles; choose a clear standard-angle/bearing convention and reconstruct the components after conversion. Include exact cancellation and zero separately so numerical roundoff cannot invent a direction.
- **Geometric operations:** choose arrows with displaced origins to separate free vectors from positions. Compute sums/subtractions component-wise and verify tip-to-tail, parallelogram or tip-to-tip orientation. For scalar multiplication check |c| magnitude and sign-driven reversal.
- **Models:** name each velocity frame, force direction, time interval and unit. Resolve into common axes before combining; verify a ground velocity or balancing force against the original frame equation. Do not compare or add scalar speeds as though they encode direction.
- **Dot/projection/work:** ensure nonzero vectors for angles and nonzero target for projections. Compute scalar/vector projections separately and check residual orthogonality. Work requires compatible force and displacement units. Vary sign, quadrant and representation rather than relying only on bigger components.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [38.1 Vectors, displacements, and components](lesson-1-vector-representations/tutor.md#vectors-displacements-and-components) | Include physical vector/scalar classification, equivalent directed segments and planar component comparisons; keep signs and units. |
| [38.1 Magnitude and direction conversion](lesson-1-vector-representations/tutor.md#magnitude-and-direction-conversion) | Convert both ways, include axes and zero, and state angle conventions explicitly. |
| [38.2 Geometric and component addition](lesson-2-vector-addition-and-subtraction/tutor.md#geometric-and-component-addition) | Require tip-to-tail and parallelogram reasoning as well as components; include opposite and aligned vectors. |
| [38.2 Resultants from angular descriptions](lesson-2-vector-addition-and-subtraction/tutor.md#resultants-from-angular-descriptions) | Use nonperpendicular angular descriptions and non-first-quadrant results; label angles and round only after component addition. |
| [38.2 Subtraction and relative vectors](lesson-2-vector-addition-and-subtraction/tutor.md#subtraction-and-relative-vectors) | Include relative positions/velocities, same-vector subtraction and geometric correspondence; never reverse the order silently. |
| [38.3 Scalar multiplication](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#scalar-multiplication) | Vary positive/negative/zero scalars and zero inputs; use the absolute scalar in the magnitude formula. |
| [38.3 Unit vectors and resolution](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#unit-vectors-and-resolution) | Include coordinate-unit-vector sums, specified angles and zero-direction requests; distinguish unit length from unit components. |
| [38.4 Velocity, force, and bearing models](lesson-4-vector-models-dot-products-and-projections/tutor.md#velocity-force-and-bearing-models) | Include force equilibria, wind corrections and relative velocities; define bearings and add vectors only in compatible frames/units. |
| [38.4 Dot product and angles](lesson-4-vector-models-dot-products-and-projections/tutor.md#dot-product-and-angles) | Include acute/obtuse angles, parallel vectors and zero; allow tiny rounding clamping only after confirming valid exact data. |
| [38.4 Projection and work](lesson-4-vector-models-dot-products-and-projections/tutor.md#projection-and-work) | Include negative work, oblique projections and zero displacement; retain the nonzero target-vector condition. |

## Demand anchors

| Role | Checked task and result | Demand distinction |
| --- | --- | --- |
| Routine oblique projection | Project $\langle1,2\rangle$ onto $\langle2,1\rangle$: $\langle8/5,4/5\rangle$; residual $\langle-3/5,6/5\rangle$. | Nonunit target, simple fractions, perpendicular-residual check. |
| Comparable intended retake | Project $\langle2,1\rangle$ onto $\langle1,2\rangle$: $\langle4/5,8/5\rangle$; residual $\langle6/5,-3/5\rangle$. | Same operations and denominator; choose fresh data beyond these exposed anchors for learners. |
| Additional demand | Determine a boat's water-relative heading so its ground velocity is due north in an eastward current. | Adds a reference-frame model and solving an unknown component; supply speed/current values that permit the requested heading. It is not a projection retake. |
| Representation transfer | Draw both diagonals of the parallelogram for $\langle2,1\rangle$, $\langle-1,2\rangle$ and label their directions. | Sum $\langle1,3\rangle$ versus directed difference $\langle3,-1\rangle$; requires actual construction. |
