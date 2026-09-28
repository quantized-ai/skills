# Tutor: Lesson 41.3: Parametric motion models

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check vectors, quadratic vertices/roots and trig angle units; identify physical time bounds before solving target events.

Within this unit, revisit [the previous lesson](../lesson-2-converting-parametric-and-rectangular-relations/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Constant velocity, uniform circular and ideal projectile models; defer drag, variable gravity and calculus velocity unless requested outside this scope.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Constant-velocity motion:** Write each initial position and velocity in common units using the same time origin.

- **Uniform circular motion:** Choose center, radius and starting phase, then write coordinates from the running angle.

- **Idealized projectile motion:** Resolve initial velocity into horizontal and vertical components and state constant downward acceleration and no-drag assumptions.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two trajectories share the point (4,0): A(t)=(t,0), B(t)=(4,t−1). Do the objects collide after t=0?

**Agent key and discussion:** A arrives at t=4 and B at t=1. Simultaneous equality would require t=4 and t=1, impossible. Intersecting paths alone do not establish collision.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Constant-velocity motion

Curriculum reference: **Constant-velocity motion** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two paths intersect at a point reached at times 2 and 5. Have the objects collided?
- **Diagnostic key:** No; collision requires equal positions at the same allowed time.
- **Worked-example prompt:** A(t)=(t,0), B(t)=(2,t-3) for t≥0. Do their paths intersect, and do the objects collide?
- **Worked model and reasoning:** Paths share (2,0), but A visits at t=2 and B at t=3. Simultaneous equality would require both t=2 and t=3, impossible, so no collision.
- **First hint:** Does occupying the same place at different times count as a collision?

#### Learn

- Write each initial position and velocity in common units using the same time origin.
- Solve both coordinate equalities simultaneously and intersect with both time intervals.
- If one equality is an identity, solve the other; if contradictory, reject collision.
- Distinguish identical motion over an interval from one-time meeting.

#### Practice progression

Compute positions, solve real and impossible meetings, then stationary/parallel/coincident motions and shifted start times with explicit shared-time modeling.

**Further variation and generation checks:** Include real collisions, stationary objects and bounded time intervals; distinguish position units from velocity units.

#### Misconceptions and responsive feedback

If separate path parameters are solved and called a collision, translate them back to the shared physical clock. If only x coordinates agree, inspect the y separation at that time.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use consistent distance and time units, preserve the allowed interval, solve both coordinate conditions simultaneously, and distinguish a shared point from a simultaneous meeting.

**Task range to sample:** Include real collisions, stationary objects and bounded time intervals; distinguish position units from velocity units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Uniform circular motion

Curriculum reference: **Uniform circular motion** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A circular angular velocity is −2 rad/s and radius 3. Is linear speed −6?
- **Diagnostic key:** No; speed is 6, while the negative sign indicates clockwise motion.
- **Worked-example prompt:** A point moves on a radius-4 circle centered at (1,-2) with clockwise angular speed π/3 rad/s, starting at the rightmost point. Model it.
- **Worked model and reasoning:** $x=1+4\cos(-\pi t/3)$, $y=-2+4\sin(-\pi t/3)$. Linear speed $4\pi/3$, period 6 s. Signed angular velocity is negative; speed remains nonnegative.
- **First hint:** Which sign gives clockwise motion from the rightmost point?

#### Learn

- Choose center, radius and starting phase, then write coordinates from the running angle.
- Convert degree rates to radians before multiplying by radius.
- Separate signed angular displacement from nonnegative traveled arc distance and straight-line displacement.
- Derive period from one full angular turn and handle zero angular velocity as a fixed point.

#### Practice progression

Construct models from initial positions and direction, compute speed/period/arc distance, then compare stationary and multiple-turn intervals.

**Further variation and generation checks:** Include phase shifts, degree-to-radian rates and stationary ω=0; distinguish arc distance from straight displacement.

#### Misconceptions and responsive feedback

If period uses a signed denominator, ask whether elapsed duration can be negative. If total distance is confused with endpoint chord length, compare a full revolution returning to the start.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Convert degree-based rates to radians when applying radius-times-angle formulas, distinguish signed angular velocity from nonnegative speed, and handle stationary motion separately.

**Task range to sample:** Include phase shifts, degree-to-radian rates and stationary ω=0; distinguish arc distance from straight displacement.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Idealized projectile motion

Curriculum reference: **Idealized projectile motion** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A projectile equation has one positive and one negative ground-intersection time. Should both be flight times after launch?
- **Diagnostic key:** No; retain only times in the physical interval.
- **Worked-example prompt:** Use x=6t, y=10+8t-5t² for a projectile above level ground, in meters and seconds. Find impact time, maximum height and range.
- **Worked model and reasoning:** Positive impact root $T=(4+\sqrt{66})/5\approx2.425$ s; other root is negative. Vertex t=0.8 is in [0,T], maximum 13.2 m, range $6T\approx14.549$ m. Model assumes constant g=10 and no air resistance; launch and impact heights differ.
- **First hint:** Which event ends the modeled flight, and which times are physically allowed?

#### Learn

- Resolve initial velocity into horizontal and vertical components and state constant downward acceleration and no-drag assumptions.
- Solve the actual landing-height equation and determine the allowed interval.
- Use the vertical quadratic's vertex only if it lies in that interval.
- Eliminate time when possible while preserving trajectory bounds; treat zero horizontal velocity separately.

#### Practice progression

Begin with same-height launches, then elevated/different-height landing and vertical launch; require feasible roots, maxima, units and trajectory restrictions.

**Further variation and generation checks:** Vary launch/landing heights and horizontal direction, including vertical launch; verify maxima on the actual flight interval and do not use a same-height shortcut automatically.

#### Misconceptions and responsive feedback

If a same-height range shortcut is used for elevated launch, substitute its proposed time into the landing equation. If a vertex lies before launch, maximize over the actual interval endpoints instead.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the model assumptions and units, select physically relevant roots, analyze maxima on the actual time interval, and preserve trajectory restrictions when eliminating time.

**Task range to sample:** Vary launch/landing heights and horizontal direction, including vertical launch; verify maxima on the actual flight interval and do not use a same-height shortcut automatically.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## A constrained maximum can occur at launch

For $x=3t$, $y=10-2t-5t^2$ above level ground, the positive impact time is $T=(-1+\sqrt{51})/5\approx1.2283$ seconds. The quadratic vertex is at $t=-0.2$, outside $[0,T]$. Completing the square gives $y=10.2-5(t+0.2)^2$; on the allowed interval the squared term grows, so maximum physical height is 10 at launch, not 10.2. Range is $3T\approx3.6849$ meters.

If the learner reports 10.2, ask when that height occurs before discussing the formula. Then supply the allowed interval; finally compare the vertex time with zero, leaving the constrained maximum. Fade with a downward launch from another height and only the impact interval supplied, then remove it. For collision tasks use a shared clock even when objects start at different times; a separately solved path-intersection pair is not enough. For circular motion check radius-times-angle uses radians and distinguish distance traveled from endpoint displacement.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
