# Fresh-question generation: Unit 41 — Parametric relations and motion

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Use the same parameter value for paired coordinates and the same time for collision tests. Preserve the exact parameter interval, endpoints, branches, orientation and repeated tracing after elimination. Circular speed is nonnegative even for clockwise motion. Projectile roots, heights and ranges must respect the actual impact interval and model assumptions.

## Constructive families and verification

- **Exact parameter sets:** choose a common parameter domain, compute matched coordinate pairs and included/excluded endpoints, then test orientation and repeated visits using ordered values. Parametrizations with the same locus may differ in traversal; preserve that distinction in the key.
- **Elimination:** derive the rectangular relation and all coordinate restrictions, then recover an admissible parameter for every claimed branch. Check t=0 before division and branch signs after squaring. For construction verify both that every generated point is intended and that every intended point is reached.
- **Motion:** choose position/velocity data in a common time frame and verify both coordinate equations at a meeting time. For circular models convert angular rates to radians and use |ω| for speed/period. For projectiles solve the specified landing-height equation, select the physical interval and evaluate the vertex only when inside it; handle zero horizontal velocity without dividing.
- **Transfer:** change the time interval, phase, starting height or object start time while retaining comparable algebra. Ask whether a path intersection is a simultaneous collision, or whether a rectangular equation has silently added trajectory points. Use actual technology output for required graphing checks.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [41.1 Parametric representations](lesson-1-parametric-graphs-and-orientation/tutor.md#parametric-representations) | Include common-domain restrictions and numerical plotting; reconcile graph endpoints with computed pairs and label parameter units. |
| [41.1 Orientation and traversal](lesson-1-parametric-graphs-and-orientation/tutor.md#orientation-and-traversal) | Vary open/closed parameter endpoints, partial/repeated tracing and stationary segments; distinguish point-set equality from traversal equality. |
| [41.2 Parameter elimination](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#parameter-elimination) | Include trig elimination, squaring and division hazards; test reverse recoverability of t for every proposed branch. |
| [41.2 Constructing parametrizations](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#constructing-parametrizations) | Include line segments, circles and rectangular relations, with both surjectivity onto the target set and exclusion of unwanted branches. |
| [41.3 Constant-velocity motion](lesson-3-parametric-motion-models/tutor.md#constant-velocity-motion) | Include real collisions, stationary objects and bounded time intervals; distinguish position units from velocity units. |
| [41.3 Uniform circular motion](lesson-3-parametric-motion-models/tutor.md#uniform-circular-motion) | Include phase shifts, degree-to-radian rates and stationary ω=0; distinguish arc distance from straight displacement. |
| [41.3 Idealized projectile motion](lesson-3-parametric-motion-models/tutor.md#idealized-projectile-motion) | Vary launch/landing heights and horizontal direction, including vertical launch; verify maxima on the actual flight interval and do not use a same-height shortcut automatically. |
