# Private calibration: Unit 31 — Triangle trigonometry

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Similarity and acute-angle ratios | [Original task and checked key](lesson-1-right-triangle-ratios/tutor.md#similarity-and-acute-angle-ratios) | Vary the chosen angle, scale, and special triangle; require a similarity justification as well as ratios. Avoid treating the hypotenuse as the adjacent leg. |
| Complementary-angle identities | [Original task and checked key](lesson-1-right-triangle-ratios/tutor.md#complementary-angle-identities) | Alternate degrees and radians explicitly and distinguish complements from supplements; accept diagram or side-role reasoning. |
| Right-triangle solutions and inverse ratios | [Original task and checked key](lesson-2-solving-right-triangles/tutor.md#right-triangle-solutions-and-inverse-ratios) | Mix side-side and side-angle data; include impossible hypotenuse data and distinguish inverse sine from reciprocal sine. |
| Indirect measurement models | [Original task and checked key](lesson-2-solving-right-triangles/tutor.md#indirect-measurement-models) | Vary observer height, elevation/depression, and connected triangles; state measured precision and distinguish slant distance from horizontal distance. |
| Obtuse angles and triangle area | [Original task and checked key](lesson-3-laws-for-general-triangles/tutor.md#obtuse-angles-and-triangle-area) | Include acute, right, and obtuse included angles; require an altitude derivation and consistent opposite-side labeling. |
| Law of Sines | [Original task and checked key](lesson-3-laws-for-general-triangles/tutor.md#law-of-sines) | Use AAS/ASA and right/obtuse triangles; require general proof with valid altitude cases rather than only substitution. |
| Law of Cosines | [Original task and checked key](lesson-3-laws-for-general-triangles/tutor.md#law-of-cosines) | Alternate SAS and SSS, check triangle inequalities and arccos input range, and require a coordinate derivation. |
| SSA ambiguity | [Original task and checked key](lesson-4-triangle-data-and-ambiguity/tutor.md#ssa-ambiguity) | Generate zero/one/two SSA cases using height thresholds; verify each candidate has positive third angle and satisfies original data. |
| Existence, uniqueness, and triangle models | [Original task and checked key](lesson-4-triangle-data-and-ambiguity/tutor.md#existence-uniqueness-and-triangle-models) | Mix degenerate equality, inconsistent angles, AAA, ASA, SAS, SSS and SSA; distinguish uniqueness up to congruence from position in the plane. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** SSA with A=30 degrees, b=12: classify a=5, a=6 and a=15 before solving.

**Key and required reasoning:** Height is $12\sin30^\circ=6$: a=5 gives no triangle; a=6 one right triangle with B=90 degrees and C=60 degrees; a=15>b gives one triangle, since the supplementary B candidate would exceed the angle sum.

### Transfer check 2

**Prompt:** A triangle has sides 5,7,9. Find the cosine of the angle opposite 9 and decide whether it is obtuse.

**Key and required reasoning:** $\cos C=(25+49-81)/(2\cdot5\cdot7)=-1/10$, so C is obtuse. Triangle inequality holds; an acute diagram would contradict the data.

## Annotated learner responses

**Calibration prompt:** Find the side opposite the included $120^\circ$ angle between sides 3 and 5. For the reasoning version, add: “Choose and justify the law, retain the cosine sign, and check triangle feasibility.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “7.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “7.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| $c^2=9+25-30(1/2)=19$. | The structure is correct but cosine of the obtuse angle is negative; this is a sign/projection error evidenced by the work. |
| Coordinates $(0,0),(5,0),(-3/2,3\sqrt3/2)$ give squared opposite distance 49. | Valid direct distance derivation; credit it without requiring a memorized law label. |
| Tutor supplies $\cos120^\circ=-1/2$; learner then gives “7.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
