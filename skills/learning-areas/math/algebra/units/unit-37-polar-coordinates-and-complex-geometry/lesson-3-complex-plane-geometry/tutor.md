# Tutor: Lesson 37.3: Complex-plane geometry

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check rectangular complex arithmetic, coordinate distance and polar conversion; separate complex points from their real lengths.

Within this unit, revisit [the previous lesson](../lesson-2-polar-equations-and-curves/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use stated principal-argument interval and nonzero argument conditions; defer complex analytic functions and branch cuts beyond this convention.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Geometric arithmetic and conjugation:** Plot complex numbers as points and as origin-based displacement arrows.

- **Distance and midpoint in the complex plane:** Form a difference before taking its modulus and connect to coordinate distance.

- **Polar form and argument:** Determine positive modulus, locate quadrant or axis and choose an argument in the declared interval.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A learner writes the distance between 3+4i and −3−4i as |3+4i|−|−3−4i|=0. Repair the operation and explain the geometry.

**Agent key and discussion:** Take the modulus after subtraction: |6+8i|=10. Both points are radius 5 from the origin on opposite rays; equal moduli do not mean equal locations.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Geometric arithmetic and conjugation

Curriculum reference: **Geometric arithmetic and conjugation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Which displacement represents z−w: z to w or w to z?
- **Diagnostic key:** From w to z, since adding that displacement to w reaches z.
- **Worked-example prompt:** For z=2-3i, interpret iz and the conjugate of z geometrically.
- **Worked model and reasoning:** $iz=3+2i$ is a counterclockwise 90-degree rotation about the origin. Conjugate $2+3i$ reflects across the real axis. Addition translates by component sums; subtraction gives a displacement.
- **First hint:** Write i(2-3i) using i²=-1, then compare coordinates.

#### Learn

- Plot complex numbers as points and as origin-based displacement arrows.
- Add by translating arrows and subtract by reversing the subtracted arrow.
- Reflect across the real axis for conjugation and rotate a quarter turn for multiplication by i.
- Check each geometric prediction against component arithmetic and preserved lengths.

#### Practice progression

Alternate arithmetic-to-picture and picture-to-arithmetic tasks, then combine translation, conjugation and quarter-turns without changing operation order.

**Further variation and generation checks:** Mix sums, differences, conjugates and quarter-turns; retain coordinate signs and distinguish reflection from rotation.

#### Misconceptions and responsive feedback

If subtraction direction is reversed, verify w+(z−w)=z geometrically. If conjugation negates both coordinates, distinguish reflection from the half-turn produced by negation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Place displacement endpoints and subtraction direction correctly, preserve lengths under conjugation and unit rotations, and reconcile the geometric result with rectangular arithmetic.

**Task range to sample:** Mix sums, differences, conjugates and quarter-turns; retain coordinate signs and distinguish reflection from rotation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Distance and midpoint in the complex plane

Curriculum reference: **Distance and midpoint in the complex plane** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is the distance between i and −i equal to 0 because their real parts match?
- **Diagnostic key:** No; |i−(−i)|=2.
- **Worked-example prompt:** Find distance and midpoint between -2+i and 4+9i, and describe |z-(1+2i)|=5.
- **Worked model and reasoning:** Difference $6+8i$ has modulus 10; midpoint $1+5i$. The locus is a circle centered at (1,2) with radius 5, not centered at the origin.
- **First hint:** Complex distance is the modulus of a difference.

#### Learn

- Form a difference before taking its modulus and connect to coordinate distance.
- Average complex components for midpoint, keeping its point interpretation distinct from a real length.
- Translate a fixed-modulus equation to a circle centered at the subtracted point; handle radius zero as one point.

#### Practice progression

Compute distances/midpoints, verify midpoint betweenness and symmetry, then construct and interpret nonzero/zero-radius fixed-distance loci.

**Further variation and generation checks:** Include coincident points and fixed-distance loci, distinguish modulus from a component and derive midpoint coordinates.

#### Misconceptions and responsive feedback

If |z|−|w| is substituted for distance, use equal-modulus points on opposite sides of the origin as a counterexample.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Compute distance from a difference and midpoint from an average, distinguish real lengths from complex positions, and recognize the radius-zero single-point case.

**Task range to sample:** Include coincident points and fixed-distance loci, distinguish modulus from a component and derive midpoint coordinates.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Polar form and argument

Curriculum reference: **Polar form and argument** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does −4 have argument zero because its imaginary part is zero?
- **Diagnostic key:** No; under (−π,π], its principal argument is π.
- **Worked-example prompt:** Write -√3+i in polar form and contrast its argument with that of zero.
- **Worked model and reasoning:** Modulus 2, principal argument $5\pi/6$ under $(-\pi,\pi]$, so $2(\cos(5\pi/6)+i\sin(5\pi/6))$. All arguments differ by $2k\pi$; zero has modulus zero but no defined argument.
- **First hint:** Which quadrant contains the complex point?

#### Learn

- Determine positive modulus, locate quadrant or axis and choose an argument in the declared interval.
- Reconstruct real and imaginary components from the polar form.
- Distinguish the selected representative from θ+2kπ.
- Explain why zero can be written with any angle but has no defined unique argument.

#### Practice progression

Convert general and axis numbers both ways, compare equivalent arguments and handle zero separately before powers or quotients.

**Further variation and generation checks:** Include real, imaginary and zero cases and alternate stated argument intervals; never force an angle for zero.

#### Misconceptions and responsive feedback

If a negative modulus is used in standard complex polar form, absorb its sign into an argument shift; do not conflate signed polar-coordinate conventions with positive complex modulus.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Choose a quadrant-correct argument, reconstruct both rectangular components, distinguish a principal argument from all arguments, and avoid assigning zero a unique argument.

**Task range to sample:** Include real, imaginary and zero cases and alternate stated argument intervals; never force an angle for zero.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
