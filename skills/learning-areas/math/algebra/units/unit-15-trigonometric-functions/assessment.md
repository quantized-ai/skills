# Unit 15 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 15.1: Radian measure

### Directed angles and arc length

[Curriculum](lesson-1-radian-measure/lesson.md#concepts) · [Tutor guidance](lesson-1-radian-measure/tutor.md#directed-angles-and-arc-length)

**A — Prompt:** On a radius-4 circle, rotate clockwise through $3\pi/2$ radians. Give signed angle and traveled arc length.

**Key:** The signed angle is $-3\pi/2$; distance traveled is $4\cdot3\pi/2=6\pi$, nonnegative.

**B — Prompt:** If radius and directed arc both double, does the angle change?

**Key:** No: their ratio $s_d/r$ is unchanged. Radian measure is scale-invariant.

**Generation checks:** Include negative and multiple-turn angles; the simple length formula assumes no reversal.

### Degree conversion and coterminal angles

[Curriculum](lesson-1-radian-measure/lesson.md#concepts) · [Tutor guidance](lesson-1-radian-measure/tutor.md#degree-conversion-and-coterminal-angles)

**A — Prompt:** Convert 225 degrees to radians and find the representative of $-3\pi/4$ in [0,2π).

**Key:** $225\pi/180=5\pi/4$; adding $2\pi$ to $-3\pi/4$ also gives $5\pi/4$.

**B — Prompt:** Are $\pi/3$ and $7\pi/3$ the same total rotation?

**Key:** They share a terminal point but differ by a full turn in total directed rotation.

**Generation checks:** Check degree/radian units and avoid double-counting both endpoints of a full-turn interval.

## Lesson 15.2: Unit-circle definitions

### Sine, cosine, and tangent as coordinates

[Curriculum](lesson-2-unit-circle-definitions/lesson.md#concepts) · [Tutor guidance](lesson-2-unit-circle-definitions/tutor.md#sine-cosine-and-tangent-as-coordinates)

**A — Prompt:** A unit-circle point is $(3/5,4/5)$. Find sine, cosine, and tangent.

**Key:** Sine $4/5$, cosine $3/5$, tangent $4/3$; tangent divides vertical by horizontal coordinate.

**B — Prompt:** Evaluate sine, cosine, and tangent at $\pi/2$.

**Key:** Sine 1, cosine 0, tangent undefined because its denominator is zero.

**Generation checks:** Include axes and other quadrants; enforce tangent's excluded angles.

### Quadrant signs, periodicity, and symmetry

[Curriculum](lesson-2-unit-circle-definitions/lesson.md#concepts) · [Tutor guidance](lesson-2-unit-circle-definitions/tutor.md#quadrant-signs-periodicity-and-symmetry)

**A — Prompt:** Determine signs of sine, cosine, and tangent in quadrant II.

**Key:** Sine positive, cosine negative, tangent negative from y/x.

**B — Prompt:** Explain why tangent has period π although sine and cosine have period 2π.

**Key:** A half-turn changes both coordinate signs, preserving their quotient. Sine and cosine individually change sign, so their least positive period remains 2π.

**Generation checks:** Distinguish a period from the least positive period and keep identities within defined domains.

## Lesson 15.3: Exact special-angle values

### Special triangles

[Curriculum](lesson-3-exact-special-angle-values/lesson.md#concepts) · [Tutor guidance](lesson-3-exact-special-angle-values/tutor.md#special-triangles)

**A — Prompt:** Derive exact sine and cosine at π/4 from a right triangle.

**Key:** Equal legs 1 give hypotenuse √2; both ratios are $1/\sqrt2=\sqrt2/2$.

**B — Prompt:** Give exact sine, cosine, and tangent at π/6.

**Key:** The 1:√3:2 triangle gives $1/2,\sqrt3/2,\sqrt3/3$, respectively.

**Generation checks:** Require geometric derivation before recall; retain exact radical values.

### Reference angles and reflected coordinates

[Curriculum](lesson-3-exact-special-angle-values/lesson.md#concepts) · [Tutor guidance](lesson-3-exact-special-angle-values/tutor.md#reference-angles-and-reflected-coordinates)

**A — Prompt:** Find sine, cosine, and tangent at $5\pi/6$.

**Key:** Reference angle π/6 in quadrant II gives $1/2,-\sqrt3/2,-\sqrt3/3$.

**B — Prompt:** Find the unit-circle point at $7\pi/4$.

**Key:** Reference angle π/4 in quadrant IV gives $(\sqrt2/2,-\sqrt2/2)$.

**Generation checks:** Include coterminal angles and axis cases; axis points do not need an artificial acute reference angle.

## Lesson 15.4: Pythagorean identity

### Proof and algebraic use of the identity

[Curriculum](lesson-4-pythagorean-identity/lesson.md#concepts) · [Tutor guidance](lesson-4-pythagorean-identity/tutor.md#proof-and-algebraic-use-of-the-identity)

**A — Prompt:** Derive $\sin^2\theta+\cos^2\theta=1$ geometrically.

**Key:** Unit-circle coordinates satisfy x²+y²=1; substitute x=cosθ,y=sinθ. This covers every real angle.

**B — Prompt:** Does agreement at θ=0 prove $\sin\theta=0$ is an identity?

**Key:** No: at θ=π/2 sine is 1. An equation can hold at selected inputs without being an identity.

**Generation checks:** Distinguish squared function values from functions of squared angles and numerical checks from proof.

### Recovering ratios with quadrant information

[Curriculum](lesson-4-pythagorean-identity/lesson.md#concepts) · [Tutor guidance](lesson-4-pythagorean-identity/tutor.md#recovering-ratios-with-quadrant-information)

**A — Prompt:** If sinθ=3/5 and θ lies in quadrant II, find cosine and tangent.

**Key:** Cosine squared is 16/25 and its quadrant sign is negative: cosθ=-4/5, tanθ=-3/4.

**B — Prompt:** If tanθ=-2 and θ lies in quadrant IV, find sine and cosine.

**Key:** $(1+4)x^2=1$ and x>0 give cosθ=1/√5, sinθ=-2/√5; signs satisfy the quadrant and quotient.

**Generation checks:** Reject impossible magnitudes or inconsistent quadrant data; verify recovered ratios in the identity.

## Lesson 15.5: Parent trigonometric graphs

### Sine and cosine graphs

[Curriculum](lesson-5-parent-trigonometric-graphs/lesson.md#concepts) · [Tutor guidance](lesson-5-parent-trigonometric-graphs/tutor.md#sine-and-cosine-graphs)

**A — Prompt:** Give sine's values at 0,π/2,π,3π/2,2π and its range.

**Key:** Values 0,1,0,-1,0 anchor a smooth cycle; range [-1,1] and period 2π.

**B — Prompt:** Compare cosine's starting value and zeros with sine's.

**Key:** Cosine starts at 1 and has zeros π/2+kπ; sine starts at 0 and has zeros kπ. Their phases differ.

**Generation checks:** Include multiple cycles and extrema; do not connect anchors with a polygon as an exact trigonometric graph.

### Tangent graph and asymptotes

[Curriculum](lesson-5-parent-trigonometric-graphs/lesson.md#concepts) · [Tutor guidance](lesson-5-parent-trigonometric-graphs/tutor.md#tangent-graph-and-asymptotes)

**A — Prompt:** Describe one branch of tan x between -π/2 and π/2.

**Key:** It increases from negative unbounded values to positive unbounded values, crosses (0,0), and excludes both vertical asymptotes.

**B — Prompt:** Does tangent have amplitude 1 because it has period π?

**Key:** No. Tangent has all-real range and no finite amplitude; period does not imply bounded outputs.

**Generation checks:** Keep branches disconnected across asymptotes and distinguish zeros from undefined points.

## Lesson 15.6: Sinusoidal transformations

### Amplitude, midline, period, and frequency

[Curriculum](lesson-6-sinusoidal-transformations/lesson.md#concepts) · [Tutor guidance](lesson-6-sinusoidal-transformations/tutor.md#amplitude-midline-period-and-frequency)

**A — Prompt:** Find amplitude, midline, period, and range of $-3\sin(2t)+5$.

**Key:** Amplitude 3, midline y=5, period π, range [2,8]; angular frequency 2 differs from cycle frequency $1/\pi$.

**B — Prompt:** Does a constant sinusoidal formula with A=0 have a least positive period?

**Key:** No: every positive shift is a period of a constant function, so there is no smallest positive one.

**Generation checks:** Include frequency units and zero-parameter degeneracies without dividing by a zero frequency.

### Phase shift and transformed graphs

[Curriculum](lesson-6-sinusoidal-transformations/lesson.md#concepts) · [Tutor guidance](lesson-6-sinusoidal-transformations/tutor.md#phase-shift-and-transformed-graphs)

**A — Prompt:** Find phase shift and period of $2\sin(3x-\pi)+1$.

**Key:** Factoring $3(x-\pi/3)$ gives right shift $\pi/3$ and period $2\pi/3$. Right shift $\pi$ is also equivalent because it differs by one whole period; accept it unless the prompt specifies a principal-phase convention.

**B — Prompt:** Are $\cos x$ and $\sin(x+\pi/2)$ different graphs?

**Key:** No: they are equivalent phase representations. Adding a whole period to a phase also leaves the graph unchanged.

**Generation checks:** Check directed quarter-cycle anchors and coefficient signs; do not demand a unique phase parameterization.

## Lesson 15.7: Periodic function models

### Parameter estimation from periodic data

[Curriculum](lesson-7-periodic-function-models/lesson.md#concepts) · [Tutor guidance](lesson-7-periodic-function-models/tutor.md#parameter-estimation-from-periodic-data)

**A — Prompt:** A sinusoid has maximum 9, minimum 1, and consecutive peaks at t=2 and t=8. Give one model.

**Key:** Amplitude 4, midline 5, period 6: $y=5+4\cos[(\pi/3)(t-2)]$. Units follow the supplied quantities.

**B — Prompt:** If two observed peaks are not known to be consecutive, does their separation determine one period?

**Key:** No: it may span several cycles. More timing information is needed before claiming a unique period.

**Generation checks:** Specify peak or crossing direction, time units, and uncertainty of estimated extrema.

### Model checking and limitations

[Curriculum](lesson-7-periodic-function-models/lesson.md#concepts) · [Tutor guidance](lesson-7-periodic-function-models/tutor.md#model-checking-and-limitations)

**A — Prompt:** A sinusoidal model predicts 6 at a time when 7.2 is observed. Find the residual.

**Key:** Observed minus predicted gives 1.2 in output units; a positive residual means underprediction there.

**B — Prompt:** Do small residuals on one observed cycle guarantee accurate predictions for years?

**Key:** No. Stable repetition is a contextual assumption; holdout observations and residual patterns assess fit but cannot establish indefinite stationarity.

**Generation checks:** Keep observed-minus-predicted signs, inspect unused observations, and avoid causal diagnoses from a single residual.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Directed angles and arc length](lesson-1-radian-measure/tutor.md#directed-angles-and-arc-length) | Assess radian ratio, signed rotation, nonnegative arc length, scale invariance and the no-reversal condition for the simple distance formula. |
| [Degree conversion and coterminal angles](lesson-1-radian-measure/tutor.md#degree-conversion-and-coterminal-angles) | Require correct units, exact conversion, integer full-turn adjustment, interval membership and terminal-point versus total-rotation distinction. |
| [Sine, cosine, and tangent as coordinates](lesson-2-unit-circle-definitions/tutor.md#sine-cosine-and-tangent-as-coordinates) | Assess coordinate definitions, normalization, exact ratios and tangent exclusions. An unlabelled drawing must not supply guessed exact coordinates. |
| [Quadrant signs, periodicity, and symmetry](lesson-2-unit-circle-definitions/tutor.md#quadrant-signs-periodicity-and-symmetry) | Require quadrant signs, period/least-period distinction, parity identities and defined-domain conditions, with a coordinate-based explanation. |
| [Special triangles](lesson-3-exact-special-angle-values/tutor.md#special-triangles) | Require both geometric derivations, consistent side roles and all three ratios at the special acute angles. Accept equivalent exact radical forms. |
| [Reference angles and reflected coordinates](lesson-3-exact-special-angle-values/tutor.md#reference-angles-and-reflected-coordinates) | Assess reference-angle selection, exact magnitudes, signs, coordinate pairing and tangent domain. Correct memorized magnitude alone does not show full-angle understanding. |
| [Proof and algebraic use of the identity](lesson-4-pythagorean-identity/tutor.md#proof-and-algebraic-use-of-the-identity) | Require a general circle-based derivation, correct notation and identity-versus-equation reasoning. Samples can refute a claim but cannot establish the full identity. |
| [Recovering ratios with quadrant information](lesson-4-pythagorean-identity/tutor.md#recovering-ratios-with-quadrant-information) | Assess magnitudes, justified signs, consistency checks and all recovered ratios. If the quadrant is absent, retain valid alternatives rather than inventing a unique answer. |
| [Sine and cosine graphs](lesson-5-parent-trigonometric-graphs/tutor.md#sine-and-cosine-graphs) | Require consistent anchors, smooth shape, zeros/extrema, range and period, plus a coordinate interpretation. Record actual graph-tool observations separately when required. |
| [Tangent graph and asymptotes](lesson-5-parent-trigonometric-graphs/tutor.md#tangent-graph-and-asymptotes) | Assess domain exclusions, period, zeros, branch monotonicity and range/no-amplitude distinction. Do not plot infinity as an attained output. |
| [Amplitude, midline, period, and frequency](lesson-6-sinusoidal-transformations/tutor.md#amplitude-midline-period-and-frequency) | Require amplitude/midline/range, justified period, frequency units and boundary-case classification. Numerical parameter reading without units is insufficient in a time model. |
| [Phase shift and transformed graphs](lesson-6-sinusoidal-transformations/tutor.md#phase-shift-and-transformed-graphs) | Assess inside factoring, phase/period distinction, checked anchors and recognition of nonunique equivalent forms. Do not demand one phase answer without declaring a convention. |
| [Parameter estimation from periodic data](lesson-7-periodic-function-models/tutor.md#parameter-estimation-from-periodic-data) | Require justified parameter estimates, phase event/direction, units, all-feature checks and identification of insufficient timing data. Do not infer a unique model from one cycle fragment without needed assumptions. |
| [Model checking and limitations](lesson-7-periodic-function-models/tutor.md#model-checking-and-limitations) | Assess correctly signed residuals, units, multiple-data interpretation and qualified prediction limits. Do not claim real observations, successful tool checks or long-term stability without evidence. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Find $\cos(5\pi/6)$: “$-\sqrt3/2$.” | Correct exact value; if geometric reasoning is requested, reference magnitude and quadrant sign still need evidence. |
| Give $\tan(\pi/6)=1/\sqrt3$ instead of $\sqrt3/3$. | Equivalent exact form; accept it unless a requested normalization itself is the objective. |
| For $2\sin(3x-\pi)+1$, give amplitude $2$, midline $1$, right shift $\pi/2$. | Vertical attributes correct, phase incorrect. Factoring gives a right shift $\pi/3$; $\pi/2$ differs by neither zero nor a whole period $2\pi/3$. Preserve the established features. |
| For the same function, give right shift $\pi$. | Accept the equivalent phase: $\pi-\pi/3=2\pi/3$ is one full period. If justification was requested, ask for this equivalence; do not impose an unstated principal-phase convention. |
| After quadrant II is supplied as a sign cue, learner corrects cosine from $4/5$ to $-4/5$. | Assisted sign selection, with previously correct magnitude retained. Use a fresh quadrant task for independent sign reasoning. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
