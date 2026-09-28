# Tutor: Lesson 36.2: Inverse trigonometric functions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check one-to-one functions, reflected inverse graphs and exact unit-circle values; practice range selection before mixed compositions.

Within this unit, revisit [the previous lesson](../lesson-1-reciprocal-trigonometric-functions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use the standard principal branches for arcsin/arccos/arctan; defer multivalued complex inverse functions and inverse reciprocal conventions.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Principal inverse branches:** Use the horizontal-line test on full sine to motivate restriction.

- **Inverse trigonometric graphs:** Reflect the selected original graph across y=x, including endpoint inclusion.

- **Principal values and inverse compositions:** Apply the inner function, then locate an angle in the outer inverse's prescribed range.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** An inverse-sine output for sin(7π/6) is reported as 7π/6. Compare the actual sine value and the principal range, then explain what information was lost.

**Agent key and discussion:** sin(7π/6)=−1/2 and arcsin(−1/2)=−π/6. Sine collapses many angles to one value; its inverse returns the selected branch representative, not the original unrestricted angle.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Principal inverse branches

Curriculum reference: **Principal inverse branches** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can arcsin(2) be a real angle?
- **Diagnostic key:** No: sine never exceeds one.
- **Worked-example prompt:** Why does arcsin(sin(5π/6)) return π/6 rather than 5π/6?
- **Worked model and reasoning:** Sine is not one-to-one on all reals. Its selected increasing branch is $[-\pi/2,\pi/2]$, whose inverse returns π/6. Arccos returns [0,π]; arctan returns $(-\pi/2,\pi/2)$.
- **First hint:** Which output interval defines the inverse function?

#### Learn

- Use the horizontal-line test on full sine to motivate restriction.
- Select the standard monotone branches, not arbitrary narrower intervals.
- Exchange each branch's domain and range to construct its inverse, retaining closed sine/cosine endpoints and open tangent endpoints.
- Distinguish sin⁻¹ as inverse notation from reciprocal csc.

#### Practice progression

Construct each inverse branch graphically, state paired domains/ranges, then select principal outputs for positive, negative and endpoint inputs.

**Further variation and generation checks:** Construct each inverse from a monotone restriction and state both domain and range; distinguish an inverse from a reciprocal.

#### Misconceptions and responsive feedback

If another angle with the same sine is returned, ask whether it lies in the selected inverse range. If an endpoint is removed unnecessarily, evaluate the original function at it.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify one-to-one behavior on each selected interval, exchange domain and range, and distinguish each inverse from the reciprocal function.

**Task range to sample:** Construct each inverse from a monotone restriction and state both domain and range; distinguish an inverse from a reciprocal.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Inverse trigonometric graphs

Curriculum reference: **Inverse trigonometric graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does arctan x attain π/2 at a sufficiently large real input?
- **Diagnostic key:** No; π/2 is a limiting horizontal asymptote.
- **Worked-example prompt:** Compare graphs of arcsin x and arccos x at x=-1,0,1.
- **Worked model and reasoning:** Arcsin values $-\pi/2,0,\pi/2$, increasing and odd. Arccos values $\pi,\pi/2,0$, decreasing and neither even nor odd. Arctan is increasing and odd on all reals, with unattained horizontal asymptotes ±π/2.
- **First hint:** What happens to a point's input and output when a function is inverted?

#### Learn

- Reflect the selected original graph across y=x, including endpoint inclusion.
- Transfer increasing/decreasing behavior using one-to-one order.
- Compute intercepts and axis values, then prove oddness of arcsin/arctan by uniqueness of the inverse output; compare arccos(−x)=π−arccos x rather than claiming oddness.

#### Practice progression

Plot landmark points for all three, justify monotonicity/symmetry, then compare attained endpoints and unattained tangent-inverse limits.

**Further variation and generation checks:** Require endpoints, intercepts, monotonicity and symmetry for all three; do not assign vertical asymptotes to finite inverse-sine endpoints.

#### Misconceptions and responsive feedback

If inverse-sine endpoint steepness is called a vertical asymptote, check that the function has a finite defined endpoint value.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Include inverse sine and cosine endpoints, leave inverse tangent asymptotes unattained, and make reflected points agree with the principal ranges.

**Task range to sample:** Require endpoints, intercepts, monotonicity and symmetry for all three; do not assign vertical asymptotes to finite inverse-sine endpoints.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Principal values and inverse compositions

Curriculum reference: **Principal values and inverse compositions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is arccos(cos(−π/3)) equal to −π/3?
- **Diagnostic key:** No: its principal range gives π/3.
- **Worked-example prompt:** Evaluate cos(arcsin(-3/5)) and arccos(cos(7π/4)).
- **Worked model and reasoning:** The arcsine angle lies in $[-\pi/2,\pi/2]$, so cosine is nonnegative: $4/5$. Arccos must lie in [0,π], giving π/4.
- **First hint:** Which angle is the inverse function allowed to return?

#### Learn

- Apply the inner function, then locate an angle in the outer inverse's prescribed range.
- For mixed compositions introduce that principal angle, build a sign-correct unit-circle or right-triangle relation and determine the other ratio.
- Check inverse-input domains and final ratio denominators before simplifying radicals.

#### Practice progression

Begin with same-function cancellation in the allowed branch, then folded angles, mixed ratios and out-of-domain or denominator-zero cases.

**Further variation and generation checks:** Include mixed compositions and out-of-domain inputs, branch folding and approximate values with explicit angle units.

#### Misconceptions and responsive feedback

If a square root sign is chosen from the original unrestricted angle, ask where the principal angle actually lies. If a calculator decimal obscures an exact angle, recover it from unit-circle values.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check that inputs are allowed, select the correct principal angle and quadrant, preserve angle units, and distinguish exact expressions from numerical approximations.

**Task range to sample:** Include mixed compositions and out-of-domain inputs, branch folding and approximate values with explicit angle units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Branch selection with reduced support

For $\tan(\arccos(-3/5))$, set $\theta=\arccos(-3/5)$. Since $\theta\in[0,\pi]$ and cosine is negative, $\theta$ is in quadrant II. Hence $\sin\theta=4/5$ and $\tan\theta=-4/3$. The positive square root for sine comes from the principal range, not from a rule that square roots always give a positive trigonometric value. At input $u=0$, $\tan(\arccos u)$ is undefined, although arccos itself is defined.

A response $4/3$ is ambiguous until work is shown. If the learner used a positive cosine, cue “Which coordinate is given as negative?” If the learner selected quadrant III, cue “Which quadrants belong to arccos's range?” Next supply $\sin^2\theta=1-9/25$; only then show $\sin\theta=4/5$, leaving the quotient to the learner. Fade with $\sin(\arccos(-5/13))$: supply the principal interval but no triangle, then use a fresh composition without the interval. A correct exact value does not establish the separately required reflected inverse graph.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
