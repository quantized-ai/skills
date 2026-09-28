# Private calibration: Unit 38 — Vectors and vector models

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Vectors, displacements, and components | [Original task and checked key](lesson-1-vector-representations/tutor.md#vectors-displacements-and-components) | Include physical vector/scalar classification, equivalent directed segments and planar component comparisons; keep signs and units. |
| Magnitude and direction conversion | [Original task and checked key](lesson-1-vector-representations/tutor.md#magnitude-and-direction-conversion) | Convert both ways, include axes and zero, and state angle conventions explicitly. |
| Geometric and component addition | [Original task and checked key](lesson-2-vector-addition-and-subtraction/tutor.md#geometric-and-component-addition) | Require tip-to-tail and parallelogram reasoning as well as components; include opposite and aligned vectors. |
| Resultants from angular descriptions | [Original task and checked key](lesson-2-vector-addition-and-subtraction/tutor.md#resultants-from-angular-descriptions) | Use nonperpendicular angular descriptions and non-first-quadrant results; label angles and round only after component addition. |
| Subtraction and relative vectors | [Original task and checked key](lesson-2-vector-addition-and-subtraction/tutor.md#subtraction-and-relative-vectors) | Include relative positions/velocities, same-vector subtraction and geometric correspondence; never reverse the order silently. |
| Scalar multiplication | [Original task and checked key](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#scalar-multiplication) | Vary positive/negative/zero scalars and zero inputs; use the absolute scalar in the magnitude formula. |
| Unit vectors and resolution | [Original task and checked key](lesson-3-scalar-multiples-and-unit-vectors/tutor.md#unit-vectors-and-resolution) | Include coordinate-unit-vector sums, specified angles and zero-direction requests; distinguish unit length from unit components. |
| Velocity, force, and bearing models | [Original task and checked key](lesson-4-vector-models-dot-products-and-projections/tutor.md#velocity-force-and-bearing-models) | Include force equilibria, wind corrections and relative velocities; define bearings and add vectors only in compatible frames/units. |
| Dot product and angles | [Original task and checked key](lesson-4-vector-models-dot-products-and-projections/tutor.md#dot-product-and-angles) | Include acute/obtuse angles, parallel vectors and zero; allow tiny rounding clamping only after confirming valid exact data. |
| Projection and work | [Original task and checked key](lesson-4-vector-models-dot-products-and-projections/tutor.md#projection-and-work) | Include negative work, oblique projections and zero displacement; retain the nonzero target-vector condition. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** Project u=⟨-2,5⟩ onto v=⟨1,1⟩ and check the residual.

**Key and required reasoning:** Dot product 3 and v·v=2 give projection ⟨3/2,3/2⟩. Residual ⟨-7/2,7/2⟩ has dot product zero with v. Signed scalar projection is $3/\sqrt2$.

### Transfer check 2

**Prompt:** Two equal-speed vectors point in exactly opposite directions. What resultant direction should be reported?

**Key and required reasoning:** Resultant is the zero vector: magnitude zero, no unique direction. A calculator angle for numerical roundoff is not a meaningful direction.
