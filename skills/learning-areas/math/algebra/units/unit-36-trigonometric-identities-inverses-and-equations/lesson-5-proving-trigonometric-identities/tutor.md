# Tutor: Lesson 36.5: Proving trigonometric identities

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check factoring, common denominators, reciprocal and Pythagorean identities; isolate the first unjustified algebraic step in a failed proof.

Within this unit, revisit [the previous lesson](../lesson-4-double-and-half-angle-identities/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Prove identities on a stated common domain; defer numerical agreement as proof and transformations involving unjustified division.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Reciprocal Pythagorean identities:** Derive both reciprocal Pythagorean identities by distinct nonzero divisors.

- **Identity proof and common domains:** Write the common domain first.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A proof of sin²x=sin x divides by sin x and concludes sin x=1. Is it an identity proof? What was lost?

**Agent key and discussion:** The starting equality is an equation, not an identity. Factoring sinx(sinx−1)=0 retains sinx=0 and sinx=1. Dividing loses the zero branch; the equation is not true for every real x.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Reciprocal Pythagorean identities

Curriculum reference: **Reciprocal Pythagorean identities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** May sin²x+cos²x=1 be divided by sin²x at x=0?
- **Diagnostic key:** No; that step is undefined there.
- **Worked-example prompt:** Derive sec²x-tan²x=1 and identify where it holds.
- **Worked model and reasoning:** Divide $\sin^2x+\cos^2x=1$ by $\cos^2x$ only where $\cos x\ne0$. The identity holds for $x\ne\pi/2+k\pi$; the constant expression does not extend the original left side automatically.
- **First hint:** What operation introduces the domain restriction?

#### Learn

- Derive both reciprocal Pythagorean identities by distinct nonzero divisors.
- Keep each divisor condition next to the new identity.
- Rewrite reciprocal expressions as sine/cosine when factors are unclear, then convert back only if useful.
- Compare a constant simplified expression's domain with the original quotient.

#### Practice progression

Derive each identity, choose one to reduce an expression, retain all restrictions and explain an apparent disagreement at an excluded angle.

**Further variation and generation checks:** Include cosecant/cotangent identity derived by division by sine squared, cancellation and explicit exclusions.

#### Misconceptions and responsive feedback

If the identity is asserted at an excluded angle, ask for the value of each original reciprocal. A constant result after cancellation does not supply missing original values.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify the nonzero divisor, retain its exclusions after cancellation, and coordinate reciprocal, quotient, and Pythagorean identities correctly.

**Task range to sample:** Include cosecant/cotangent identity derived by division by sine squared, cancellation and explicit exclusions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Identity proof and common domains

Curriculum reference: **Identity proof and common domains** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does matching an alleged identity at ten calculator inputs prove it?
- **Diagnostic key:** No; it must hold at every input in the specified common domain.
- **Worked-example prompt:** Prove (1-cos²x)/sin x=sin x and state its common domain.
- **Worked model and reasoning:** For $\sin x\ne0$, numerator equals $\sin^2x$, so cancellation gives sin x. Domain excludes $x=k\pi$. Agreement at a few values does not prove an identity, and the simplified right side alone has a larger domain.
- **First hint:** Replace the numerator using an established identity before cancelling.

#### Learn

- Write the common domain first.
- Transform one side with known identities, factoring and valid common denominators, documenting every nonzero cancellation.
- Or transform both sides independently to one established expression.
- If disproving, choose one allowed counterexample; if squaring, explain why the implication is reversible or verify candidates separately.

#### Practice progression

Start with one-identity rewrites, then mixed reciprocal/Pythagorean proofs, domain comparisons and false identity counterexamples.

**Further variation and generation checks:** Mix one-side proofs, false claims and two expressions with different domains; require justification of each division rather than assuming the desired equality.

#### Misconceptions and responsive feedback

If the desired equality is used as a premise, have the learner start from one expression alone. If division by a trigonometric factor occurs, retain its zero cases or exclude them legitimately.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Give a logically complete chain without assuming the equality, justify every division or cancellation, and distinguish verified identities from equations true only at selected inputs.

**Task range to sample:** Mix one-side proofs, false claims and two expressions with different domains; require justification of each division rather than assuming the desired equality.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
