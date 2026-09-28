# Private calibration: Unit 41 — Parametric relations and motion

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Parametric representations | [Original task and checked key](lesson-1-parametric-graphs-and-orientation/tutor.md#parametric-representations) | Include common-domain restrictions and numerical plotting; reconcile graph endpoints with computed pairs and label parameter units. |
| Orientation and traversal | [Original task and checked key](lesson-1-parametric-graphs-and-orientation/tutor.md#orientation-and-traversal) | Vary open/closed parameter endpoints, partial/repeated tracing and stationary segments; distinguish point-set equality from traversal equality. |
| Parameter elimination | [Original task and checked key](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#parameter-elimination) | Include trig elimination, squaring and division hazards; test reverse recoverability of t for every proposed branch. |
| Constructing parametrizations | [Original task and checked key](lesson-2-converting-parametric-and-rectangular-relations/tutor.md#constructing-parametrizations) | Include line segments, circles and rectangular relations, with both surjectivity onto the target set and exclusion of unwanted branches. |
| Constant-velocity motion | [Original task and checked key](lesson-3-parametric-motion-models/tutor.md#constant-velocity-motion) | Include real collisions, stationary objects and bounded time intervals; distinguish position units from velocity units. |
| Uniform circular motion | [Original task and checked key](lesson-3-parametric-motion-models/tutor.md#uniform-circular-motion) | Include phase shifts, degree-to-radian rates and stationary ω=0; distinguish arc distance from straight displacement. |
| Idealized projectile motion | [Original task and checked key](lesson-3-parametric-motion-models/tutor.md#idealized-projectile-motion) | Vary launch/landing heights and horizontal direction, including vertical launch; verify maxima on the actual flight interval and do not use a same-height shortcut automatically. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** Eliminate t from x=2cos t,y=3sin t for 0≤t≤π. Specify the exact locus and direction.

**Key and required reasoning:** Relation $x^2/4+y^2/9=1$ with y≥0: upper half ellipse including endpoints (2,0),(-2,0), traversed counterclockwise. Full ellipse adds unintended points.

### Transfer check 2

**Prompt:** A(t)=(2t,1), B(t)=(6,4-t) for 0≤t≤5. Decide collision and time.

**Key and required reasoning:** Both coordinate equations give t=3; both are at (6,1). The time lies in the common domain, so there is a collision.

## Annotated response boundaries

| Learner work | Evidence decision |
| --- | --- |
| Gives the correct restricted parabola $x=(y-1)^2$, $-1\le y\le2$, without the requested reverse-coverage argument. | Correct locus; justification incomplete. Ask how to recover an allowed parameter for any claimed point. |
| Gives the two square-root branches with their distinct bounds $[0,4]$ and $[0,1]$. | Accept as an equivalent complete locus; do not require the implicit form. |
| Gives both branches the bound $0\le x\le4$. | Lower branch correct; upper branch adds points such as $(4,3)$. Target the bound, preserving elimination work. |
| Corrects the upper bound after the tutor supplies $t=y-1$. | Assisted domain recovery; reassess it on a fresh parameterization. |
| Marks $(1,0)$ open for $(\cos t,\sin t)$ on $(0,2\pi]$. | Has noticed the excluded initial time but missed the included final preimage. Ask about all visits, not just the first endpoint. |
| Gives maximum height 10.2 for $y=10-2t-5t^2$, after launch. | Correct unconstrained vertex height, wrong physical maximum. The vertex time is negative; physical maximum is 10. |
