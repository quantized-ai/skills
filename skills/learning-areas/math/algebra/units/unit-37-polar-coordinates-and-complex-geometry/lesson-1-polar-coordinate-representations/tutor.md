# Tutor: Lesson 37.1: Polar coordinate representations

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check trigonometric projections, radians, quadrants and Pythagoras; use signed rays before inverse-tangent calculations.

## Teaching boundaries

Declare radius/angle conventions; defer polar curve tracing and complex multiplication until later lessons.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Polar coordinates and equivalent pairs:** Draw the angle ray before moving the signed radius along it.

- **Rectangular-polar conversion:** Derive x=r cosθ,y=r sinθ from projections.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Someone says (−3,π/2) lies above the origin because π/2 points north. Determine its rectangular point and an equivalent positive-radius pair.

**Agent key and discussion:** Coordinates are (0,−3); negative radius reverses the ray. A positive-radius representation is (3,3π/2) under [0,2π).

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Polar coordinates and equivalent pairs

Curriculum reference: **Polar coordinates and equivalent pairs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Do (2,0) and (−2,0) denote the same point?
- **Diagnostic key:** No; they lie on opposite rays. (−2,π) does match (2,0).
- **Worked-example prompt:** Give a positive-radius representation of (-4,π/3) with angle in [0,2π), and its rectangular location.
- **Worked model and reasoning:** $(4,4\pi/3)$ represents the same point, which is $(-2,-2\sqrt3)$. In general changing the radius sign shifts the angle by π; adding $2k\pi$ preserves a representation.
- **First hint:** A negative radius points opposite the indicated ray.

#### Learn

- Draw the angle ray before moving the signed radius along it.
- Derive equivalent pairs by full turns and by reversing radius with a half turn.
- Normalize to a requested angle interval only after fixing the radius convention.
- At the pole separate the unique location from its many angle labels.

#### Practice progression

Plot positive and negative radii, generate all equivalent families, then select constrained representatives including axes and the pole.

**Further variation and generation checks:** Include the pole's nonunique angle, signed radii and restricted angle intervals; compare locations rather than pairs alone.

#### Misconceptions and responsive feedback

If changing radius sign leaves angle unchanged, compare rectangular coordinates. If an interval endpoint has two allowed labels, use the specified half-open convention consistently.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Handle negative radii by reversing direction, distinguish coterminal angles from different points, and state the nonuniqueness of the pole angle.

**Task range to sample:** Include the pole's nonunique angle, signed radii and restricted angle intervals; compare locations rather than pairs alone.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Rectangular-polar conversion

Curriculum reference: **Rectangular-polar conversion** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is arctan(y/x) alone enough to locate (−1,−1)?
- **Diagnostic key:** No; its π/4 output needs the third-quadrant adjustment to 5π/4 under [0,2π).
- **Worked-example prompt:** Convert (-3,3√3) to polar coordinates with r≥0 and 0≤θ<2π.
- **Worked model and reasoning:** $r=\sqrt{9+27}=6$; quadrant II gives $\theta=2\pi/3$. The ratio y/x alone would suggest a principal arctangent in the wrong quadrant.
- **First hint:** Determine the quadrant before choosing the arctangent representative.

#### Learn

- Derive x=r cosθ,y=r sinθ from projections.
- Recover r using Pythagoras and choose the angle from both component signs, using axis cases when x=0.
- Convert the result back to both original coordinates; state which angle interval and positive-radius convention determine the representative.

#### Practice progression

Start with exact special angles, then axis and quadrant cases, numerical conversion with atan2 when available and reconstruction checks.

**Further variation and generation checks:** Include axes and the origin, exact special angles and numerical atan2 cases; declare radius and angle conventions.

#### Misconceptions and responsive feedback

If the wrong quadrant is selected, require reconstruction of both signs. If the origin gets a unique angle, ask whether any ray reaches it with radius zero.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Reconstruct both original coordinates, select the correct quadrant or axis, distinguish exact from approximate angle values, and treat the origin separately.

**Task range to sample:** Include axes and the origin, exact special angles and numerical atan2 cases; declare radius and angle conventions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
