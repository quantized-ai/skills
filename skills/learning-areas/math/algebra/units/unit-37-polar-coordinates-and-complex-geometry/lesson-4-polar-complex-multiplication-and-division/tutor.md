# Tutor: Lesson 37.4: Polar complex multiplication and division

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check polar form and angle-addition identities; if the product rule is only recalled, reconstruct it by rectangular expansion.

Within this unit, revisit [the previous lesson](../lesson-3-complex-plane-geometry/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Multiplication/division geometry only; defer nth-root enumeration until lesson 5 and division by zero entirely.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Multiplication as scaling and rotation:** Expand two polar factors using distributivity, then group real and imaginary terms using angle-addition identities.

- **Division, reciprocation, and conjugation:** Construct the factor whose product with the denominator is one.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** For z=2cis(π/3), someone claims 1/z=2cis(−π/3). Multiply their candidate by z and repair it.

**Agent key and discussion:** Their product is 4, not 1. The reciprocal is (1/2)cis(−π/3), combining inverse scaling with inverse rotation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Multiplication as scaling and rotation

Curriculum reference: **Multiplication as scaling and rotation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Multiplication by −2 changes a nonzero complex point how?
- **Diagnostic key:** It doubles its distance from the origin and rotates by π.
- **Worked-example prompt:** Multiply 3cis(π/6) and 2cis(2π/3), where cis θ=cos θ+i sin θ.
- **Worked model and reasoning:** Product $6\operatorname{cis}(5\pi/6)=-3\sqrt3+3i$. Distributivity plus addition identities prove that moduli multiply and arguments add; multiplication by a nonzero complex number scales and rotates.
- **First hint:** Separate the positive scale from the angular change.

#### Learn

- Expand two polar factors using distributivity, then group real and imaginary terms using angle-addition identities.
- Identify modulus product and angle sum.
- Apply the same fixed multiplier to several points to expose a uniform rotation and dilation.
- Handle multiplication by zero as collapse, not a rotation with a defined argument.

#### Practice progression

Predict geometric effects, compute exact products, recover a multiplier from corresponding nonzero points and derive the polar product formula.

**Further variation and generation checks:** Include negative rectangular factors and nonprincipal argument sums; derive the product identity and handle zero without assigning its argument.

#### Misconceptions and responsive feedback

If arguments are multiplied, compare multiplication by i twice. If only the angle changes while modulus is ignored, track a point's distance before and after.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Connect the expansion to sine and cosine addition, multiply moduli and add angles, and distinguish a nonzero rotation-scaling from multiplication by zero.

**Task range to sample:** Include negative rectangular factors and nonprincipal argument sums; derive the product identity and handle zero without assigning its argument.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Division, reciprocation, and conjugation

Curriculum reference: **Division, reciprocation, and conjugation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is the reciprocal of 3cisθ equal to 3cis(−θ)?
- **Diagnostic key:** No; the modulus is 1/3 as well as the argument reversal.
- **Worked-example prompt:** Divide 4cis(5π/6) by 2cis(π/3) and verify with the polar inverse.
- **Worked model and reasoning:** Quotient $2\operatorname{cis}(\pi/2)=2i$. The denominator inverse is $\tfrac12\operatorname{cis}(-\pi/3)$, so arguments subtract. Dividing by zero is undefined; conjugate division gives the same result.
- **First hint:** What scaling and rotation undo multiplication by the denominator?

#### Learn

- Construct the factor whose product with the denominator is one.
- Divide moduli and subtract arguments in the original order.
- Compute the same quotient by conjugate-based rectangular division and verify by multiplication.
- For conjugation alone retain modulus; distinguish it from reciprocation's scaling.

#### Practice progression

Compare conjugate and reciprocal, compute mixed rectangular/polar quotients, then zero and argument-normalization cases with a reconstruction check.

**Further variation and generation checks:** Compare polar and conjugate methods, reciprocals and conjugates, including zero numerator and forbidden zero denominator.

#### Misconceptions and responsive feedback

If subtraction order is reversed, multiply the candidate by the denominator. If the numerator is zero, allow a zero quotient only when the denominator is nonzero without inventing zero's argument.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Exclude zero divisors, divide moduli and subtract arguments in the correct order, and verify the result by multiplication or rectangular conversion.

**Task range to sample:** Compare polar and conjugate methods, reciprocals and conjugates, including zero numerator and forbidden zero denominator.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Recover the operation from its effect

A fixed multiplier takes $1+i$ to $-2+2i$. Solve $m(1+i)=-2+2i$ by division: $m=(-2+2i)/(1+i)=2i$. In polar form the modulus changes from $\sqrt2$ to $2\sqrt2$ and the argument increases by $\pi/2$, agreeing with a dilation by 2 and a quarter-turn. Verify by multiplying back; one nonzero input determines the multiplier, whereas an input of zero would not.

For a reversed quotient, cue “Which multiplier must reproduce the output when multiplied by the input?” → supply $m=z_{\text{out}}/z_{\text{in}}$ → model conjugate multiplication in the numerator only, leaving simplification. If the scale is correct but the angle is wrong, check subtraction order instead. Fade with input $2\operatorname{cis}(\pi/6)$ and output $6\operatorname{cis}(2\pi/3)$: the learner should obtain $3i$ and verify it without a supplied quotient.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
