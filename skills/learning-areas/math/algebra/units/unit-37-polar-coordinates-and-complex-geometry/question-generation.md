# Fresh-question generation: Unit 37 — Polar coordinates and complex geometry

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Declare the polar radius and angle conventions. A negative radius reverses the ray; the pole has no unique polar angle and zero has no complex argument. Verify point-set equivalence when multiplying or dividing polar relations, including the pole. Separate curve locus from tracing interval. For complex roots enumerate all distinct roots and verify powers, with zero handled separately.

## Constructive families and verification

- **Representations:** choose a rectangular point or positive-modulus complex number, then generate signed-radius or shifted-angle equivalents under an explicit interval. Reconstruct x and y to check location. Include axes and zero without assigning zero a unique argument.
- **Curve equivalence:** select a simple polar relation with a stated angle domain, calculate pole visits, signs and tracing interval, and compare its rectangular locus in both directions. Deliberately test r=0 before division and extra signs after squaring. A larger angle window may retrace a curve rather than add new points.
- **Complex operations:** choose positive moduli and exact special angles; compute products/quotients both polar and rectangular when practical. For powers separate integer sign and zero-base restrictions. For nth roots list k=0,…,n−1, verify every power and prove additional integers repeat rather than create more roots.
- **Transfer:** move from formula-to-point to an equivalence claim, missing multiplier, tracing interpretation or complete-root argument. Require actual plotted evidence for the curriculum's technology component; a list of points alone does not establish it.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [37.1 Polar coordinates and equivalent pairs](lesson-1-polar-coordinate-representations/tutor.md#polar-coordinates-and-equivalent-pairs) | Include the pole's nonunique angle, signed radii and restricted angle intervals; compare locations rather than pairs alone. |
| [37.1 Rectangular-polar conversion](lesson-1-polar-coordinate-representations/tutor.md#rectangular-polar-conversion) | Include axes and the origin, exact special angles and numerical atan2 cases; declare radius and angle conventions. |
| [37.2 Polar graph construction](lesson-2-polar-equations-and-curves/tutor.md#polar-graph-construction) | Include rose/cardioid-style curves and different tracing intervals; verify pole passages and repeated tracing numerically without asserting a picture proves completeness. |
| [37.2 Polar symmetry and rectangular relations](lesson-2-polar-equations-and-curves/tutor.md#polar-symmetry-and-rectangular-relations) | Convert lines/circles with specified domains, verify both inclusions of point sets and use sufficient symmetry tests without treating them as necessary. |
| [37.3 Geometric arithmetic and conjugation](lesson-3-complex-plane-geometry/tutor.md#geometric-arithmetic-and-conjugation) | Mix sums, differences, conjugates and quarter-turns; retain coordinate signs and distinguish reflection from rotation. |
| [37.3 Distance and midpoint in the complex plane](lesson-3-complex-plane-geometry/tutor.md#distance-and-midpoint-in-the-complex-plane) | Include coincident points and fixed-distance loci, distinguish modulus from a component and derive midpoint coordinates. |
| [37.3 Polar form and argument](lesson-3-complex-plane-geometry/tutor.md#polar-form-and-argument) | Include real, imaginary and zero cases and alternate stated argument intervals; never force an angle for zero. |
| [37.4 Multiplication as scaling and rotation](lesson-4-polar-complex-multiplication-and-division/tutor.md#multiplication-as-scaling-and-rotation) | Include negative rectangular factors and nonprincipal argument sums; derive the product identity and handle zero without assigning its argument. |
| [37.4 Division, reciprocation, and conjugation](lesson-4-polar-complex-multiplication-and-division/tutor.md#division-reciprocation-and-conjugation) | Compare polar and conjugate methods, reciprocals and conjugates, including zero numerator and forbidden zero denominator. |
| [37.5 De Moivre powers](lesson-5-complex-powers-and-roots/tutor.md#de-moivre-powers) | Include positive, zero and negative integer powers; exclude zero for zero or negative powers; 0^0 is not assigned a value in this curriculum. |
| [37.5 Complete sets of complex roots](lesson-5-complex-powers-and-roots/tutor.md#complete-sets-of-complex-roots) | Vary root order and complex target, include roots of unity and zero; verify completeness and distinguish distinct roots from multiplicity. |

## Demand anchors with checked keys

| Role | Task and key | Demand |
| --- | --- | --- |
| Routine | All cube roots of $8$: $2,-1\pm i\sqrt3$. | Positive modulus, three angle choices, exact conversion and completeness. |
| Intended same-demand retake | All cube roots of $-8$: $-2,1\pm i\sqrt3$. | Same root order and conversion load; angle origin changes. Require the same verification and independence. |
| Higher demand | All fourth roots of $-16$: $\sqrt2(\pm1\pm i)$ with all four sign pairs. | Changes angle spacing, count, and exact-value arithmetic; do not assume equivalent difficulty to cube roots. |
| Transfer | Compare $r=4\cos\theta$ on $[0,\pi/2]$ and $[0,\pi]$. | Upper semicircle versus full circle; requires checking the tracing interval, not just completing a square. |

Do not equate a failed substitution symmetry test with lack of point-set symmetry. Check converted loci in both directions under the actual angle interval, and keep plotted evidence separate from analytically predicted appearance.
