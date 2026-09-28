# Tutor: Lesson 11.5: Exponential and logarithmic equations

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Linear/quadratic equations and positive-argument conditions. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 11.1 curriculum](../lesson-1-definition-and-basic-evaluation/lesson.md) and [tutor](../lesson-1-definition-and-basic-evaluation/tutor.md); [Lesson 11.3 curriculum](../lesson-3-logarithm-properties-with-domains/lesson.md) and [tutor](../lesson-3-logarithm-properties-with-domains/tutor.md); [Lesson 11.4 curriculum](../lesson-4-change-of-base-and-inverse-identities/lesson.md) and [tutor](../lesson-4-change-of-base-and-inverse-identities/tutor.md). Load both files for any selected review.

## Teaching boundaries

Exact solutions precede rounding; solve constant degeneracies separately. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Solve log₂(x)+log₂(x−2)=3 and test both algebraic roots.

**Private reasoning key:** Domain x>2. Condensation yields x(x−2)=8, giving x=4 or −2. Only 4 satisfies both original positive arguments; −2 is invalid despite the positive product.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Solving exponential equations with logarithms

Curriculum reference: **Solving exponential equations with logarithms** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $3\cdot2^{2t-1}=15$ exactly.

**Agent key:** Isolate $2^{2t-1}=5$, so $t=(1+\ln5/\ln2)/2$. Substitution makes the exponential 5.

**Worked example:** Does $-2\cdot3^t=4$ have a real solution?

**Worked reasoning:** No: the isolated target is -2, impossible for a positive-base exponential.


#### Teaching sequence

Isolate the varying exponential and check the target is positive before taking logs. For a b^(mx+n)=d with a,m nonzero, solve mx+n=log_b(d/a), then x=(log_b(d/a)−n)/m. Analyze a=0 or m=0 directly as constant equations. Preserve exact form, verify in the original and apply any time/domain restrictions before interpreting a decimal.

#### Respond to student reasoning

**First hint:** Have you isolated the entire exponential before taking logs?

If the shift n is divided incorrectly, solve the linear exponent in two explicit steps. If a nonpositive target is logged, stop and classify. If a zero scale/rate causes division by zero, compare the constant sides instead.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use outside shifts, nonunit exponent slopes, impossible targets and constant cases. Add units and an allowed time interval in contextual tasks.

#### Assessment evidence

Require isolation, positivity, all scales/shifts, degeneracy classification, exact solution and original/context verification. Rounding is not a substitute for checking reachability.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Solving logarithmic equations and rejecting invalid roots

Curriculum reference: **Solving logarithmic equations and rejecting invalid roots** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

**Agent key:** Domain x>1; condensation gives $x^2-1=8$, candidates ±3, only x=3 valid.

**Worked example:** Solve $\log_2(x-4)=0$.

**Worked reasoning:** Require x>4; exponentiation gives x-4=1, so x=5, not x=4.


#### Teaching sequence

Record positivity for every original logarithm separately, then use a legal identity or one-to-one same-base equality to obtain an algebraic equation. Solve all candidates and check each in the original separate logs. In models, define the quantity and use dimensionless argument ratios rather than taking the logarithm of a raw dimensional measurement.

#### Respond to student reasoning

**First hint:** Which candidates satisfy every original argument inequality?

If a root is accepted because a combined product is positive, test each original factor. If different-base logs are equated by their arguments, first align bases or change method. If a contextual log argument has units, normalize by the stated reference quantity.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Progress from one log to sums/differences, resulting quadratics and a contextual equation with a reference scale. Include a candidate invalid in only one original logarithm.

#### Assessment evidence

Assess original-domain intersection, justified conversion, every candidate check and correct model units/meaning. Condensation must not admit inputs excluded by the original equation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
