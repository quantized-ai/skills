# Fresh-question generation: Unit 31 — Triangle trigonometry

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

State degree or radian units. Label each side opposite its angle and check positive lengths and triangle inequalities before solving. For SSA retain both inverse-sine candidates and test the third angle; for AAA report an undetermined scale. Require the curriculum’s similarity and Law-of-Sines/Cosines derivations, including obtuse configurations, rather than certifying proof from numerical substitution.

## Constructive families and verification

- **Construct consistent right-triangle data:** choose positive legs (Pythagorean triples when exact lengths are desired), compute the hypotenuse, then hide a side or angle. Independently reconstruct all measurements from the displayed givens. Change the named acute angle to test side-role understanding without increasing arithmetic difficulty.
- **Generate SSA deliberately:** for acute A choose b>0, compute h=b sinA, then choose a below h, at h, between h and b, or at/above b. Solve both inverse-sine candidates and test positive third angles. For obtuse A choose a relative to b and verify the angle ordering. Do not generate random numbers and assume one triangle.
- **Proof and model transfer:** select an acute versus obtuse auxiliary-altitude configuration; supply enough incidence information to justify the law. For indirect measurement include eye height, horizontal versus slant distances and a rounding instruction. Grade the model diagram and assumptions separately from a correct final number.
- **Difficulty ladder:** one labeled ratio → choosing a law from data → classifying ambiguous or impossible givens → deriving the law or explaining physical admissibility. Keep a reassessment at the same rung while changing data/configuration.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [31.1 Similarity and acute-angle ratios](lesson-1-right-triangle-ratios/tutor.md#similarity-and-acute-angle-ratios) | Vary the chosen angle, scale, and special triangle; require a similarity justification as well as ratios. Avoid treating the hypotenuse as the adjacent leg. |
| [31.1 Complementary-angle identities](lesson-1-right-triangle-ratios/tutor.md#complementary-angle-identities) | Alternate degrees and radians explicitly and distinguish complements from supplements; accept diagram or side-role reasoning. |
| [31.2 Right-triangle solutions and inverse ratios](lesson-2-solving-right-triangles/tutor.md#right-triangle-solutions-and-inverse-ratios) | Mix side-side and side-angle data; include impossible hypotenuse data and distinguish inverse sine from reciprocal sine. |
| [31.2 Indirect measurement models](lesson-2-solving-right-triangles/tutor.md#indirect-measurement-models) | Vary observer height, elevation/depression, and connected triangles; state measured precision and distinguish slant distance from horizontal distance. |
| [31.3 Obtuse angles and triangle area](lesson-3-laws-for-general-triangles/tutor.md#obtuse-angles-and-triangle-area) | Include acute, right, and obtuse included angles; require an altitude derivation and consistent opposite-side labeling. |
| [31.3 Law of Sines](lesson-3-laws-for-general-triangles/tutor.md#law-of-sines) | Use AAS/ASA and right/obtuse triangles; require general proof with valid altitude cases rather than only substitution. |
| [31.3 Law of Cosines](lesson-3-laws-for-general-triangles/tutor.md#law-of-cosines) | Alternate SAS and SSS, check triangle inequalities and arccos input range, and require a coordinate derivation. |
| [31.4 SSA ambiguity](lesson-4-triangle-data-and-ambiguity/tutor.md#ssa-ambiguity) | Generate zero/one/two SSA cases using height thresholds; verify each candidate has positive third angle and satisfies original data. |
| [31.4 Existence, uniqueness, and triangle models](lesson-4-triangle-data-and-ambiguity/tutor.md#existence-uniqueness-and-triangle-models) | Mix degenerate equality, inconsistent angles, AAA, ASA, SAS, SSS and SSA; distinguish uniqueness up to congruence from position in the plane. |

## Checked demand anchors

These are intended demand comparisons, not empirically equated tests. Treat an exposed anchor as practice. Match the requested reasoning, representation, tool access and support when making a fresh retry; use the concept checklists above for the rest of the unit.

| Anchor | Private task and key | Demand decision |
| --- | --- | --- |
| Initial case | Adjacent sides 3,5 and included $120^\circ$: opposite side 7. | Same SAS selection and negative-cosine sign; the second retains a radical, so align expected answer form and arithmetic support. |
| Intended comparable retry | Adjacent sides 4,6 and included $120^\circ$: opposite side $2\sqrt{19}$. | Preserve the same support and explanation request; changing values alone is not transfer. |
| Deliberate increase or transfer | SSA $A=30^\circ,a=5,b=8$ has two shapes, with $c=4\sqrt3\pm3$. Complete candidate enumeration adds inverse-sine ambiguity and cannot silently replace SAS at the same difficulty. | Announce the changed reasoning demand and check its prerequisites before assigning it. |
