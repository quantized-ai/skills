# Tutor: Lesson 42.7: Power functions and scaling models

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check exponent reduction, roots, logarithms for positive data and function transformations; isolate parent-domain decisions before graph changes.

Within this unit, revisit [the previous lesson](../lesson-6-rational-inequalities/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Real power families under stated conventions; defer complex branches and universal physical scaling laws inferred from two observations.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Rational-power domains and graphs:** Reduce m/n to lowest terms before applying root and negative-exponent restrictions.

- **Real powers and transformed graphs:** Define real powers through exp(p ln x) on positive inputs and state any continuous zero extension separately.

- **Power-law scaling models:** Divide two positive observations to eliminate k, take logarithms to recover p from distinct inputs, then recover k from either point.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A student defines x^(2/6) only for x≥0 because the written denominator is even. Explain the curriculum convention and compare at x=−8.

**Agent key and discussion:** Reduce the exponent to 1/3 first; the real power is cube root, giving −2 at −8. Interpreting an unreduced root form changes the convention and can spuriously restrict the domain.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Rational-power domains and graphs

Curriculum reference: **Rational-power domains and graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is x^(2/6) classified using an even root denominator 6?
- **Diagnostic key:** Reduce first: 2/6=1/3, so the real cube-root convention permits negative inputs.
- **Worked-example prompt:** Analyze x^(-2/3) over the reals.
- **Worked model and reasoning:** Reduced exponent denominator 3 permits negative x, negative exponent excludes zero. Function is even and positive, rising on (-∞,0) and falling on (0,∞); it tends to +∞ at zero and to zero at both infinities, with no zeros.
- **First hint:** What do the reduced denominator and negative exponent say about allowed inputs?

#### Learn

- Reduce m/n to lowest terms before applying root and negative-exponent restrictions.
- Analyze each allowed real branch and determine symmetry from numerator parity when the denominator is odd.
- Locate zero behavior and signs near excluded zero, then describe each domain end separately.
- Distinguish increasing positive branches from full-domain monotonicity.

#### Practice progression

Classify parity/sign cases, graph endpoints and both branches, then compare equivalent exponent forms and justify domain, symmetry and end behavior.

**Further variation and generation checks:** Vary reduced exponent parity and sign, including even-root endpoints; determine both real branches rather than extrapolate the positive branch.

#### Misconceptions and responsive feedback

If positive-input samples are extended blindly to negatives, test the reduced root definition. If even symmetry is mistaken for increasing on both sides, compare mirrored input pairs.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Reduce the exponent, apply root and negative-exponent restrictions, determine each real branch rather than extrapolating from positive inputs, and justify the stated intercepts, symmetry, and end behavior.

**Task range to sample:** Vary reduced exponent parity and sign, including even-root endpoints; determine both real branches rather than extrapolate the positive branch.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Real powers and transformed graphs

Curriculum reference: **Real powers and transformed graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For an arbitrary irrational exponent p, is the default x^p model defined at every negative x?
- **Diagnostic key:** No; the stated real-power convention uses x>0.
- **Worked-example prompt:** For the real-power positive-input convention, analyze y=2(3-x)^(√2)-1.
- **Worked model and reasoning:** Base must be positive, so x<3 unless a continuous extension is explicitly chosen. Parent u>0 maps by x=3-u and y=2u^(√2)-1. As x→3⁻, y→-1; as x→-∞, y→∞; it decreases.
- **First hint:** Which values may the parent power function accept as its input?

#### Learn

- Define real powers through exp(p ln x) on positive inputs and state any continuous zero extension separately.
- Treat p=0 as constant one on its stated domain.
- Map a selected parent point by x=h+u/B,y=Av+D and transfer the parent domain before sketching transformed features.
- Distinguish variable-base powers from fixed-base exponentials.

#### Practice progression

Compare positive/negative/zero exponents, explicit zero extensions and input/output transformations including negative B, with domain and endpoint verification.

**Further variation and generation checks:** Include negative input scales, irrational and constant powers and explicit zero extensions; distinguish variable-base powers from fixed-base exponentials.

#### Misconceptions and responsive feedback

If an outside zero assumption changes the parent domain, retain the original restrictions. If x^p is labeled exponential merely because it has an exponent, identify which symbol varies.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the positive-input or explicitly extended domain, transform domains and features with the coordinate rule, handle constant powers separately, and identify whether the variable occurs in the base or exponent.

**Task range to sample:** Include negative input scales, irrational and constant powers and explicit zero extensions; distinguish variable-base powers from fixed-base exponentials.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Power-law scaling models

Curriculum reference: **Power-law scaling models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If input doubles and output triples under a positive power model, is p=3/2?
- **Diagnostic key:** No; 2^p=3, so p=ln3/ln2.
- **Worked-example prompt:** Assume y=kx^p on positive inputs. Observations are (2,12),(6,108). Recover the model and predict at x=4.
- **Worked model and reasoning:** Ratio 108/12=9 and input ratio 3 give p=2, k=3; prediction 48. General recovery uses log output ratio divided by log input ratio, requiring distinct positive inputs. This fits the assumed family, not a proved law.
- **First hint:** Which comparison removes a common multiplicative scale?

#### Learn

- Divide two positive observations to eliminate k, take logarithms to recover p from distinct inputs, then recover k from either point.
- Verify both data and interpret p as a scale response.
- Track the units carried by k and restrict predictions to a justified domain; two fitted points do not establish a physical law.

#### Practice progression

Build models from stated scaling, fit positive data including noninteger powers, predict within scope and critique extrapolation or inadequate data.

**Further variation and generation checks:** Vary noninteger exponents, units and scaling questions; reject repeated/zero/negative inputs for log recovery and qualify extrapolation.

#### Misconceptions and responsive feedback

If linear slope is substituted for p, compare multiplicative ratios rather than differences. If equal inputs produce a zero log denominator, identify inconsistency or underdetermination instead of dividing.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use distinct positive inputs for logarithmic parameter recovery, distinguish an assumed model from a proved physical law, preserve units and feasible domains, and evaluate the reasonableness of predictions.

**Task range to sample:** Vary noninteger exponents, units and scaling questions; reject repeated/zero/negative inputs for log recovery and qualify extrapolation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Analyze the negative branch from the reduced root

For $x^{-1/3}=1/\sqrt[3]x$, the domain excludes zero and the function is odd. At negative inputs $-8,-1,-1/8$, outputs are $-1/2,-1,-2$: it decreases toward $-\infty$ as $x\to0^-$. For $x^{-2/3}$, squaring the cube root makes both branches positive, and the left branch instead increases toward $+\infty$. Positive-input samples cannot distinguish these negative branches.

If a learner calls both functions even, ask what replacing $x$ by $-x$ does to the reduced root. Then supply the root form; finally evaluate one mirrored pair and leave the general parity explanation. Fade with transformed root forms where the learner must first identify the parent's domain and then move it. In power-law fitting, retain the assumption $y=kx^p$: two positive points determine its parameters within that family but do not establish that the data-generating process follows a power law.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
