# Tutor: Lesson 38.4: Vector models, dot products, and projections

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check addition/subtraction/scalars and trig directions; name reference frames before a velocity problem and nonzero vectors before angle/projection formulas.

Within this unit, revisit [the previous lesson](../lesson-3-scalar-multiples-and-unit-vectors/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Constant-force work and planar models; defer variable-force integrals and 3D cross products.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Velocity, force, and bearing models:** Draw named reference frames and define east/north components.

- **Dot product and angles:** Calculate the scalar dot product, then derive or interpret the magnitude-cosine form for nonzero vectors.

- **Projection and work:** Derive the signed scalar component using dot product divided by target magnitude, then multiply by the target's unit vector for the vector projection.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** For u=⟨3,4⟩ and v=⟨1,0⟩, a student calls 3 the vector projection. Distinguish scalar component, vector projection and residual.

**Agent key and discussion:** Scalar component is 3; vector projection is ⟨3,0⟩; residual ⟨0,4⟩ is perpendicular to v. The quantities share a related number but have different mathematical types.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Velocity, force, and bearing models

Curriculum reference: **Velocity, force, and bearing models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A northward velocity plus eastward current has a bearing measured from which axis?
- **Diagnostic key:** From north clockwise under the bearing convention, unlike standard counterclockwise-from-east angles.
- **Worked-example prompt:** A boat moves 12 km/h due north relative to water flowing 5 km/h east. Find ground velocity and bearing.
- **Worked model and reasoning:** Ground velocity $\langle5,12\rangle$ km/h east/north, speed 13. Bearing measured clockwise from north is $\arctan(5/12)\approx22.62^\circ$, written 022.62 degrees.
- **First hint:** Identify the reference frame for each velocity.

#### Learn

- Draw named reference frames and define east/north components.
- Resolve each velocity or force with its own physical meaning before adding or subtracting.
- Convert resultant direction back to the requested bearing convention.
- For displacement multiply a constant velocity by elapsed time; for equilibrium solve the balancing vector as negative resultant.

#### Practice progression

Progress from one reference-frame sum to relative velocity, bearing conversion, travel displacement and force equilibrium, tracking units at each step.

**Further variation and generation checks:** Include force equilibria, wind corrections and relative velocities; define bearings and add vectors only in compatible frames/units.

#### Misconceptions and responsive feedback

If water-relative velocity is reported as ground velocity, ask which frame observes the final motion. If speed is added directly, show the component triangle.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Specify axes, units, reference frames, and bearing conventions; compute the required resultant or relative vector; and interpret its magnitude and direction in the physical setting.

**Task range to sample:** Include force equilibria, wind corrections and relative velocities; define bearings and add vectors only in compatible frames/units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Dot product and angles

Curriculum reference: **Dot product and angles** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does u·0=0 prove an angle of 90 degrees with the zero vector?
- **Diagnostic key:** No; the angle formula requires two nonzero magnitudes.
- **Worked-example prompt:** Find the angle between u=⟨1,2⟩ and v=⟨2,-1⟩ and discuss replacing v by zero.
- **Worked model and reasoning:** Dot product 0 and both magnitudes $\sqrt5$ give angle π/2. The zero vector has zero dot product with any vector but the angle formula divides by zero, so no angle is defined.
- **First hint:** Are both vectors nonzero before using the cosine formula?

#### Learn

- Calculate the scalar dot product, then derive or interpret the magnitude-cosine form for nonzero vectors.
- Predict acute/obtuse/right from its sign and compare with the computed angle.
- For perpendicularity confirm both vectors are nonzero.
- Verify an arccos argument belongs to [−1,1] and investigate significant violations before clipping.

#### Practice progression

Compute exact dots, infer angle type, determine full angles and prove perpendicularity, with zero and rounding-domain exceptions.

**Further variation and generation checks:** Include acute/obtuse angles, parallel vectors and zero; allow tiny rounding clamping only after confirming valid exact data.

#### Misconceptions and responsive feedback

If the dot product is reported as a vector, inspect the sum of scalar products. If a negative dot product is called impossible, locate the obtuse included angle.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Calculate the scalar product correctly, divide by nonzero magnitudes to find an angle, and justify perpendicularity only with appropriate nonzero-vector conditions.

**Task range to sample:** Include acute/obtuse angles, parallel vectors and zero; allow tiny rounding clamping only after confirming valid exact data.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Projection and work

Curriculum reference: **Projection and work** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Project ⟨0,3⟩ onto ⟨2,0⟩. Must the projection retain length 3?
- **Diagnostic key:** No; both scalar and vector projections are zero.
- **Worked-example prompt:** Project u=⟨3,4⟩ onto v=⟨2,0⟩, and find work by a force ⟨3,4⟩ N over displacement ⟨2,0⟩ m.
- **Worked model and reasoning:** Scalar projection is $(u\cdot v)/\|v\|=3$; vector projection is $[(u\cdot v)/(v\cdot v)]v=\langle3,0\rangle$. Work is dot product 6 J. Projection onto zero is undefined.
- **First hint:** Is the requested projection a signed number or a vector?

#### Learn

- Derive the signed scalar component using dot product divided by target magnitude, then multiply by the target's unit vector for the vector projection.
- Subtract it and check the residual dot target is zero.
- Interpret force-dot-displacement as work, with sign from along/against motion and force-distance units.

#### Practice progression

Start with axis projections, move to oblique positive/negative components, verify perpendicular residuals, then compute work and distinguish it from force magnitude times distance indiscriminately.

**Further variation and generation checks:** Include negative work, oblique projections and zero displacement; retain the nonzero target-vector condition.

#### Misconceptions and responsive feedback

If the projection denominator uses only one component, ask for rotation invariance. If negative work is rejected, draw force opposing displacement. Projection onto zero remains undefined even when u is zero.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Exclude projection onto the zero vector, distinguish a scalar component from a vector projection, check perpendicular residuals, and report work with appropriate units and sign.

**Task range to sample:** Include negative work, oblique projections and zero displacement; retain the nonzero target-vector condition.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
