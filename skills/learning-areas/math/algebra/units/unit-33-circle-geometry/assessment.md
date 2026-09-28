# Private calibration: Unit 33 — Circle geometry

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Circle similarity and chord relationships | [Original task and checked key](lesson-1-circle-similarity-chords-and-tangents/tutor.md#circle-similarity-and-chord-relationships) | Vary chord length or distance, request similarity mapping and chord/arc proofs; distinguish minor from major arcs. |
| Tangents and radii | [Original task and checked key](lesson-1-circle-similarity-chords-and-tangents/tutor.md#tangents-and-radii) | Include converse tangency tests using shortest distance and interior/on-circle/exterior point cases; do not invent a tangent from an interior point. |
| Central and inscribed angles | [Original task and checked key](lesson-2-circle-angle-theorems/tutor.md#central-and-inscribed-angles) | Include all center positions in proof coverage, diameter angles, and major intercepted arcs; do not rely on a diagram drawn to scale. |
| Cyclic quadrilaterals | [Original task and checked key](lesson-2-circle-angle-theorems/tutor.md#cyclic-quadrilaterals) | Include the converse and exterior-angle property; require convexity and avoid inferring cyclicity from adjacent angle sums. |
| Tangent, chord, and secant angles | [Original task and checked key](lesson-2-circle-angle-theorems/tutor.md#tangent-chord-and-secant-angles) | Cover tangent-chord, interior-chord, two-secant and two-tangent cases with explicitly labeled arcs and a derivation. |
| Intersecting chord products | [Original task and checked key](lesson-3-circle-segment-products/tutor.md#intersecting-chord-products) | Vary which length is missing and require a stated triangle correspondence; reject nonpositive lengths and whole-chord substitutions. |
| Secant and tangent products | [Original task and checked key](lesson-3-circle-segment-products/tutor.md#secant-and-tangent-products) | Include two-secant cases and a similarity proof, extraneous negative roots, and the distinction between inside and whole length. |
| Arcs and radian measure | [Original task and checked key](lesson-4-arc-length-radians-and-sectors/tutor.md#arcs-and-radian-measure) | Alternate degrees/radians, major/minor/full arcs and recovery of radius; keep angle measure distinct from length units. |
| Sector and segment areas | [Original task and checked key](lesson-4-arc-length-radians-and-sectors/tutor.md#sector-and-segment-areas) | Vary central angles with computable triangle areas; derive sector area from its angular fraction and verify containment before subtraction. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** From exterior P a secant has external length 3 and internal length 9. A second has external length 4. Find its internal length.

**Key and required reasoning:** Power is $3(12)=36$. Second whole length is 9, so internal length 5. Using 3·9 would confuse interior with whole.

### Transfer check 2

**Prompt:** A circle radius is 6 and a minor sector has sweep π/3 radians. Find its arc length, sector area and minor segment area.

**Key and required reasoning:** Arc $2\pi$, sector $6\pi$, central triangle $\tfrac12(6)(6)\sin(\pi/3)=9\sqrt3$, segment $6\pi-9\sqrt3$.

## Annotated learner responses

**Calibration prompt:** An exterior secant has outside length 3 and inside length 9. Another from the same point has outside length 4. Find its inside length. For the reasoning version, add: “Label near/far endpoints, justify exterior-times-whole, and verify positive lengths.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “5.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “5.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “The second full length is 9, so its inside length is 9.” | Power computation may be correct; the endpoint interpretation is incomplete. Subtract the exterior 4. |
| $3(3+9)=4(4+x)$ leads directly to x=5. | Valid direct unknown-interior equation; a separate full-length variable is unnecessary. |
| Tutor supplies The equation $4(4+x)=36$; learner then gives “5.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
