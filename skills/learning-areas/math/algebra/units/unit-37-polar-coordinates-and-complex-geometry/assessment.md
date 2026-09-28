# Private calibration: Unit 37 — Polar coordinates and complex geometry

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Polar coordinates and equivalent pairs | [Original task and checked key](lesson-1-polar-coordinate-representations/tutor.md#polar-coordinates-and-equivalent-pairs) | Include the pole's nonunique angle, signed radii and restricted angle intervals; compare locations rather than pairs alone. |
| Rectangular-polar conversion | [Original task and checked key](lesson-1-polar-coordinate-representations/tutor.md#rectangular-polar-conversion) | Include axes and the origin, exact special angles and numerical atan2 cases; declare radius and angle conventions. |
| Polar graph construction | [Original task and checked key](lesson-2-polar-equations-and-curves/tutor.md#polar-graph-construction) | Include rose/cardioid-style curves and different tracing intervals; verify pole passages and repeated tracing numerically without asserting a picture proves completeness. |
| Polar symmetry and rectangular relations | [Original task and checked key](lesson-2-polar-equations-and-curves/tutor.md#polar-symmetry-and-rectangular-relations) | Convert lines/circles with specified domains, verify both inclusions of point sets and use sufficient symmetry tests without treating them as necessary. |
| Geometric arithmetic and conjugation | [Original task and checked key](lesson-3-complex-plane-geometry/tutor.md#geometric-arithmetic-and-conjugation) | Mix sums, differences, conjugates and quarter-turns; retain coordinate signs and distinguish reflection from rotation. |
| Distance and midpoint in the complex plane | [Original task and checked key](lesson-3-complex-plane-geometry/tutor.md#distance-and-midpoint-in-the-complex-plane) | Include coincident points and fixed-distance loci, distinguish modulus from a component and derive midpoint coordinates. |
| Polar form and argument | [Original task and checked key](lesson-3-complex-plane-geometry/tutor.md#polar-form-and-argument) | Include real, imaginary and zero cases and alternate stated argument intervals; never force an angle for zero. |
| Multiplication as scaling and rotation | [Original task and checked key](lesson-4-polar-complex-multiplication-and-division/tutor.md#multiplication-as-scaling-and-rotation) | Include negative rectangular factors and nonprincipal argument sums; derive the product identity and handle zero without assigning its argument. |
| Division, reciprocation, and conjugation | [Original task and checked key](lesson-4-polar-complex-multiplication-and-division/tutor.md#division-reciprocation-and-conjugation) | Compare polar and conjugate methods, reciprocals and conjugates, including zero numerator and forbidden zero denominator. |
| De Moivre powers | [Original task and checked key](lesson-5-complex-powers-and-roots/tutor.md#de-moivre-powers) | Include positive, zero and negative integer powers; exclude zero for zero or negative powers; 0^0 is not assigned a value in this curriculum. |
| Complete sets of complex roots | [Original task and checked key](lesson-5-complex-powers-and-roots/tutor.md#complete-sets-of-complex-roots) | Vary root order and complex target, include roots of unity and zero; verify completeness and distinguish distinct roots from multiplicity. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** Find the cube roots of 8 and give a polar representation with negative radius of the root in quadrant II.

**Key and required reasoning:** Roots 2, $-1+i\sqrt3$, $-1-i\sqrt3$. Quadrant-II root has positive pair (2,2π/3), or negative pair (-2,5π/3); cubing each gives 8.

### Transfer check 2

**Prompt:** Does squaring r=2 automatically give an equivalent signed-radius polar equation r²=4? Explain as pairs and point sets.

**Key and required reasoning:** Coordinate-pair sets differ: r²=4 permits r=-2. With all real angles both represent the same circle of radius 2 in the plane. Restricted angle intervals can change that conclusion, so verify point sets under the stated domain.

## Response calibration

| Learner work on an explicit reasoning task | Judgment and next action |
| --- | --- |
| Converts $(-2,-2\sqrt3)$ to $(4,-2\pi/3)$ under $(-\pi,\pi]$, without reconstructing coordinates as requested. | Correct representation, incomplete requested verification. Ask for the two component checks without supplying them. |
| Uses $(4,4\pi/3)$ when no angle interval was specified. | Valid equivalent representation. Do not impose an unstated principal convention; clarify it for later tasks. |
| Converts $r=4\cos\theta$, $0\le\theta\le\pi/2$, to the full circle only. | Circle algebra is correct; locus restriction is incomplete. Preserve conversion evidence and ask whether $(2,-2)$ is attained. |
| Gives $1\pm i\sqrt3,-2$ for $w^3=-8$ using rectangular factorization with a justified complete quadratic solution. | Valid alternative complete method. If De Moivre derivation is separately requested, that component still needs its own evidence. |
| Supplies all roots after the tutor provides $3\phi=\pi+2k\pi$. | Assisted enumeration; keep any earlier unaided modulus reasoning and reassess the argument family on a fresh task. |
| Describes the correct rose but has not produced or used a plotting tool. | Symbolic/tracing evidence may count; the technology requirement remains unassessed. |
