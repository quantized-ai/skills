# Private calibration: Unit 35 — Geometric modeling and design

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Idealization and representation | [Original task and checked key](lesson-1-geometric-models-and-measurement/tutor.md#idealization-and-representation) | Vary scale drawings, composite shapes and ignored features; require labeled dimensions and justification for the idealization. |
| Precision and model evaluation | [Original task and checked key](lesson-1-geometric-models-and-measurement/tutor.md#precision-and-model-evaluation) | Specify the rounding convention, propagate positive interval bounds and compare predictions with measurements; ask what concrete assumption should be revised. |
| Density relationships | [Original task and checked key](lesson-2-area-and-volume-density/tutor.md#density-relationships) | Include area density, mass/number density and inverse-size questions; require uniformity assumptions and squared/cubed conversions. |
| Composite density models | [Original task and checked key](lesson-2-area-and-volume-density/tutor.md#composite-density-models) | Vary sizes and densities, include volume mixtures without assuming additive volumes unless stated, and distinguish local from overall density. |
| Feasible geometric designs | [Original task and checked key](lesson-3-geometric-design-constraints/tutor.md#feasible-geometric-designs) | Include aspect ratios, clearances and tolerances; intersect every algebraic inequality with positivity and physical constraints. |
| Design comparison and optimization | [Original task and checked key](lesson-3-geometric-design-constraints/tutor.md#design-comparison-and-optimization) | Compare finite design alternatives and continuous families; include objective units, feasible endpoints and sensitivity to constraints. Label a numerical best as limited to the search unless justified globally. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** A model uses 2 m² at 5 kg/m² and 6 m² at 9 kg/m². Find total mass and mean surface density.

**Key and required reasoning:** Mass 10+54=64 kg; area-weighted density 64/8=8 kg/m². A plain average 7 is inappropriate.

### Transfer check 2

**Prompt:** A rectangular enclosure has 18 m of fence for three sides, the fourth lying on a wall. Find the maximal area.

**Key and required reasoning:** Let perpendicular depth x and parallel length 18-2x, 0<x<9. Area $18x-2x^2=40.5-2(x-4.5)^2$, maximal 40.5 m² at depth 4.5 and length 9. No fourth fence length is charged.

## Annotated learner responses

**Calibration prompt:** Find maximum area using 20 m of fencing for three sides of a rectangle against a wall. For the reasoning version, add: “Form the model and prove a global bound with a feasible equality case.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “$50\text{ m}^2$ at depth 5 m and length 10 m.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “$50\text{ m}^2$ at depth 5 m and length 10 m.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “I tested depths 4,5,6; their areas are 48,50,48, so 50 is proved best.” | Candidate and calculations are correct; three samples do not prove a global optimum. |
| $2x+y=20$ implies $(2x)y\le[(2x+y)/2]^2=100$, hence $xy\le50$, with equality y=2x. | Valid square/AM–GM bound if justified; verify x=5,y=10 is feasible. Do not force completing the square. |
| Tutor supplies $A=50-2(x-5)^2$; learner then gives “$50\text{ m}^2$ at depth 5 m and length 10 m.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
