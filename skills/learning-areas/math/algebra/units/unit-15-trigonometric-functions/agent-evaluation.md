# Unit 15: agent evaluation scenarios

These tests concern the tutor, not the student. Load [SKILL.md](SKILL.md), the [agent guide](agent-guide.md), and the relevant curriculum/tutor pair. Run in fresh conversations except where a multi-turn sequence is specified. Record actual prompts, retrieved files, outputs, and pass/fail evidence. This file is a test specification, not a claim that a runtime has passed it.

## Interaction and retrieval

- Request a named lesson directly: the agent must read both its curriculum and tutor guidance and honor the requested mode.
- Request a quiz twice at the same difficulty: questions must be freshly constructed and checked, with meaningful variation using available exposure history.
- Ask for an assessment hint, then answer correctly: the tutor must help, mark that attempt assisted, and obtain a fresh independent attempt later.
- Supply a correct answer by an alternative valid method: accept it unless the specified curriculum capability requires a particular method or representation.
- Stop a quiz early: report demonstrated and missing concepts without claiming unit mastery or counting unattempted work as failure.
- Remove required tool access: symbolic work may proceed, but the agent must not invent graph, calculation, or experimental observations.
- Start without saved history: the tutor must not claim past mastery or guaranteed global question uniqueness.
- Challenge an actually faulty generated key: the tutor must recompute, correct the item without penalty, and preserve unrelated evidence.

## Mathematical and reasoning probes

These reference probes may be used by reviewers; they are not default student quizzes. Check the explanation and restrictions, not only final-value matching.

### Lesson 15.1: Radian measure — Directed angles and arc length

**Probe:** If radius and directed arc both double, does the angle change?

**Expected reasoning:** No: their ratio $s_d/r$ is unchanged. Radian measure is scale-invariant.

**Failure to catch:** Ignoring the concept constraint: Include negative and multiple-turn angles; the simple length formula assumes no reversal.

### Lesson 15.1: Radian measure — Degree conversion and coterminal angles

**Probe:** Are $\pi/3$ and $7\pi/3$ the same total rotation?

**Expected reasoning:** They share a terminal point but differ by a full turn in total directed rotation.

**Failure to catch:** Ignoring the concept constraint: Check degree/radian units and avoid double-counting both endpoints of a full-turn interval.

### Lesson 15.2: Unit-circle definitions — Sine, cosine, and tangent as coordinates

**Probe:** Evaluate sine, cosine, and tangent at $\pi/2$.

**Expected reasoning:** Sine 1, cosine 0, tangent undefined because its denominator is zero.

**Failure to catch:** Ignoring the concept constraint: Include axes and other quadrants; enforce tangent's excluded angles.

### Lesson 15.2: Unit-circle definitions — Quadrant signs, periodicity, and symmetry

**Probe:** Explain why tangent has period π although sine and cosine have period 2π.

**Expected reasoning:** A half-turn changes both coordinate signs, preserving their quotient. Sine and cosine individually change sign, so their least positive period remains 2π.

**Failure to catch:** Ignoring the concept constraint: Distinguish a period from the least positive period and keep identities within defined domains.

### Lesson 15.3: Exact special-angle values — Special triangles

**Probe:** Give exact sine, cosine, and tangent at π/6.

**Expected reasoning:** The 1:√3:2 triangle gives $1/2,\sqrt3/2,\sqrt3/3$, respectively.

**Failure to catch:** Ignoring the concept constraint: Require geometric derivation before recall; retain exact radical values.

### Lesson 15.3: Exact special-angle values — Reference angles and reflected coordinates

**Probe:** Find the unit-circle point at $7\pi/4$.

**Expected reasoning:** Reference angle π/4 in quadrant IV gives $(\sqrt2/2,-\sqrt2/2)$.

**Failure to catch:** Ignoring the concept constraint: Include coterminal angles and axis cases; axis points do not need an artificial acute reference angle.

### Lesson 15.4: Pythagorean identity — Proof and algebraic use of the identity

**Probe:** Does agreement at θ=0 prove $\sin\theta=0$ is an identity?

**Expected reasoning:** No: at θ=π/2 sine is 1. An equation can hold at selected inputs without being an identity.

**Failure to catch:** Ignoring the concept constraint: Distinguish squared function values from functions of squared angles and numerical checks from proof.

### Lesson 15.4: Pythagorean identity — Recovering ratios with quadrant information

**Probe:** If tanθ=-2 and θ lies in quadrant IV, find sine and cosine.

**Expected reasoning:** $(1+4)x^2=1$ and x>0 give cosθ=1/√5, sinθ=-2/√5; signs satisfy the quadrant and quotient.

**Failure to catch:** Ignoring the concept constraint: Reject impossible magnitudes or inconsistent quadrant data; verify recovered ratios in the identity.

### Lesson 15.5: Parent trigonometric graphs — Sine and cosine graphs

**Probe:** Compare cosine's starting value and zeros with sine's.

**Expected reasoning:** Cosine starts at 1 and has zeros π/2+kπ; sine starts at 0 and has zeros kπ. Their phases differ.

**Failure to catch:** Ignoring the concept constraint: Include multiple cycles and extrema; do not connect anchors with a polygon as an exact trigonometric graph.

### Lesson 15.5: Parent trigonometric graphs — Tangent graph and asymptotes

**Probe:** Does tangent have amplitude 1 because it has period π?

**Expected reasoning:** No. Tangent has all-real range and no finite amplitude; period does not imply bounded outputs.

**Failure to catch:** Ignoring the concept constraint: Keep branches disconnected across asymptotes and distinguish zeros from undefined points.

### Lesson 15.6: Sinusoidal transformations — Amplitude, midline, period, and frequency

**Probe:** Does a constant sinusoidal formula with A=0 have a least positive period?

**Expected reasoning:** No: every positive shift is a period of a constant function, so there is no smallest positive one.

**Failure to catch:** Ignoring the concept constraint: Include frequency units and zero-parameter degeneracies without dividing by a zero frequency.

### Lesson 15.6: Sinusoidal transformations — Phase shift and transformed graphs

**Probe:** Are $\cos x$ and $\sin(x+\pi/2)$ different graphs?

**Expected reasoning:** No: they are equivalent phase representations. Adding a whole period to a phase also leaves the graph unchanged.

**Failure to catch:** Ignoring the concept constraint: Check directed quarter-cycle anchors and coefficient signs; do not demand a unique phase parameterization.

### Lesson 15.7: Periodic function models — Parameter estimation from periodic data

**Probe:** If two observed peaks are not known to be consecutive, does their separation determine one period?

**Expected reasoning:** No: it may span several cycles. More timing information is needed before claiming a unique period.

**Failure to catch:** Ignoring the concept constraint: Specify peak or crossing direction, time units, and uncertainty of estimated extrema.

### Lesson 15.7: Periodic function models — Model checking and limitations

**Probe:** Do small residuals on one observed cycle guarantee accurate predictions for years?

**Expected reasoning:** No. Stable repetition is a contextual assumption; holdout observations and residual patterns assess fit but cannot establish indefinite stationarity.

**Failure to catch:** Ignoring the concept constraint: Keep observed-minus-predicted signs, inspect unused observations, and avoid causal diagnoses from a single residual.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Ask for an exact special-angle derivation rather than a recalled decimal. In a later task provide two peaks without saying consecutive and ask for a unique period; expect insufficient-information reasoning. If the learner asks for a hint during assessment, help and retain assisted status, then generate a new phase or representation task.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **15.1:** On radius 2, a point travels clockwise π radians then counterclockwise π radians. Are net angle and traveled distance both zero? [Private key and response guidance](lesson-1-radian-measure/tutor.md#reasoning-activity).

- **15.2:** At the unit-circle point (−3/5,4/5), a learner gives tangent 3/4. [Private key and response guidance](lesson-2-unit-circle-definitions/tutor.md#reasoning-activity).

- **15.3:** Is cos(5π/6)=√3/2 because its reference angle is π/6? [Private key and response guidance](lesson-3-exact-special-angle-values/tutor.md#reasoning-activity).

- **15.4:** If sinθ=5/13 and θ is in quadrant II, is cosθ=12/13? [Private key and response guidance](lesson-4-pythagorean-identity/tutor.md#reasoning-activity).

- **15.5:** A tangent sketch joins values across x=π/2 with a vertical segment. Why is that not part of the graph? [Private key and response guidance](lesson-5-parent-trigonometric-graphs/tutor.md#reasoning-activity).

- **15.6:** A learner reads a right shift of π from sin(2x−π). Repair using the inside equation. [Private key and response guidance](lesson-6-sinusoidal-transformations/tutor.md#reasoning-activity).

- **15.7:** Observed maximum 14 and minimum 6 lead to a model with amplitude 8 and midline 10. Which parameter is wrong? [Private key and response guidance](lesson-7-periodic-function-models/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
