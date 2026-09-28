# Tutor: Lesson 38.3: Scalar multiples and unit vectors

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check vector magnitude and component arithmetic; a zero-vector probe should precede normalization.

Within this unit, revisit [the previous lesson](../lesson-2-vector-addition-and-subtraction/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Real scalar multiples and planar unit directions; defer vector division and assigning a unique zero direction.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Scalar multiplication:** Multiply both components by the scalar and derive magnitude via the square root of c² times the original squared magnitude.

- **Unit vectors and resolution:** Normalize a nonzero vector and verify squared components sum to one.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A proposed unit vector for ⟨−3,4⟩ is ⟨3/5,4/5⟩. It has magnitude one; is it the required direction?

**Agent key and discussion:** No: it reflects the original across the vertical axis. The required unit vector is ⟨−3/5,4/5⟩. Unit length alone does not establish orientation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Scalar multiplication

Curriculum reference: **Scalar multiplication** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If v has magnitude 7, what is the magnitude of −2v?
- **Diagnostic key:** 14, with opposite direction for nonzero v.
- **Worked-example prompt:** Find magnitude and direction of -3⟨2,-5⟩ relative to the original vector.
- **Worked model and reasoning:** Result $\langle-6,15\rangle$, magnitude $3\sqrt{29}$, direction reversed by π. Multiplication by zero yields the zero vector with no direction.
- **First hint:** A negative scalar changes direction as well as length.

#### Learn

- Multiply both components by the scalar and derive magnitude via the square root of c² times the original squared magnitude.
- Interpret |c| as size, its sign as orientation.
- Treat c=0 or v=0 before any direction statement.
- Verify graph and component results agree.

#### Practice progression

Vary positive fractions, positive/negative integers and zero, then recover a scalar between collinear vectors and reject nonparallel candidates.

**Further variation and generation checks:** Vary positive/negative/zero scalars and zero inputs; use the absolute scalar in the magnitude formula.

#### Misconceptions and responsive feedback

If negative magnitude appears, have the learner separate length from arrow direction. If only one component is scaled, compare the resulting direction with the promised scalar multiple.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Scale both components, use an absolute value for magnitude, reverse direction precisely when a negative scalar acts on a nonzero vector, and handle zero products explicitly.

**Task range to sample:** Vary positive/negative/zero scalars and zero inputs; use the absolute scalar in the magnitude formula.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Unit vectors and resolution

Curriculum reference: **Unit vectors and resolution** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does dividing ⟨6,8⟩ by 8 produce a unit vector?
- **Diagnostic key:** No; divide by magnitude 10 to get ⟨3/5,4/5⟩.
- **Worked-example prompt:** Construct a unit vector in direction ⟨-5,12⟩ and then a vector of magnitude 26 in that direction.
- **Worked model and reasoning:** Unit vector $\langle-5/13,12/13\rangle$; scaled vector $\langle-10,24\rangle$. Check unit magnitude before scaling. Zero cannot be normalized.
- **First hint:** Divide by the vector's magnitude, not by either component.

#### Learn

- Normalize a nonzero vector and verify squared components sum to one.
- Express the result using i and j, emphasizing components as signed coefficients.
- Multiply the unit direction by a requested nonnegative magnitude and reconstruct the original vector when that magnitude is restored.
- Handle zero output without inventing a direction for zero.

#### Practice progression

Build unit directions from components or angles, resolve into i/j, construct prescribed magnitudes and explain the exceptional zero case.

**Further variation and generation checks:** Include coordinate-unit-vector sums, specified angles and zero-direction requests; distinguish unit length from unit components.

#### Misconceptions and responsive feedback

If normalization changes signs, compare orientation before and after. If a zero direction is supplied, explain that no normalization is defined and ask for a genuine direction.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Normalize only nonzero vectors, verify unit length and orientation, and recover both original components from the coordinate-direction sum.

**Task range to sample:** Include coordinate-unit-vector sums, specified angles and zero-direction requests; distinguish unit length from unit components.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
