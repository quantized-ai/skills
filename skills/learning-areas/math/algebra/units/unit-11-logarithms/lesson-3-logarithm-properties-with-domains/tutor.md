# Tutor: Lesson 11.3: Logarithm properties with domains

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Exponent laws and original-domain intersections. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 11.1 curriculum](../lesson-1-definition-and-basic-evaluation/lesson.md) and [tutor](../lesson-1-definition-and-basic-evaluation/tutor.md). Load both files for any selected review.

## Teaching boundaries

Preserve domains through expansion/condensation; no general logarithm-of-a-sum rule exists. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is ln(x²)=2ln(x) valid for every x≠0? Repair it without losing negative inputs.

**Private reasoning key:** No, the right side excludes negative x. The full-domain identity is ln(x²)=2ln|x| for x≠0.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Product and quotient properties

Curriculum reference: **Product and quotient properties** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Expand $\ln(xy)$ for x>0,y>0.

**Agent key:** $\ln x+\ln y$ on the stated positive-factor domain.

**Worked example:** Why is that expansion not valid at x=-2,y=-3 although $\ln(xy)$ exists?

**Worked reasoning:** The product is 6, but the separate real logs of -2 and -3 are undefined. A positive product does not ensure positive factors.


#### Teaching sequence

Derive product and quotient rules from b^u b^v=b^(u+v) and b^u/b^v=b^(u−v), assuming each log argument is positive. Before expansion or condensation, compare separate-argument restrictions with the product/quotient's domain. Two negative factors can have a positive product while their individual real logarithms remain undefined. State equality only on the valid common domain.

#### Respond to student reasoning

**First hint:** Are both separate logarithm arguments positive?

If positivity of a product is used to justify both logs, use x=y=−1 as a countercase. If log of a sum is split, compare log₁₀(10+10) with log₁₀10+log₁₀10=2; they differ because 20≠100. If a condensed expression enlarges the domain, retain the original restrictions.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use numerical identities, symbolic expansion/condensation and domain-comparison tasks. Include negative-factor points valid only in the condensed expression.

#### Assessment evidence

Require exponent-based justification, correct signs in quotient rules, each original positive argument and explicit preservation of domain in any equivalence claim.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Power properties and absolute values

Curriculum reference: **Power properties and absolute values** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Expand $\ln(x^2)$ on its full real domain.

**Agent key:** $2\ln\lvert x\rvert$ for x≠0; absolute value preserves the negative-x branch.

**Worked example:** Is $\ln(x+1)=\ln x+\ln1$ for x>0?

**Worked reasoning:** No: at x=1 the left side is $\ln2$ while the right side is 0. No sum-to-sum logarithm identity applies.


#### Teaching sequence

Apply log_b(M^r)=r log_b(M) when M>0. For log_b(x²), preserve all nonzero real x by writing 2log_b|x|; writing 2log_b x is only equivalent on x>0. Compare original and transformed domains before removing absolute values. Keep power properties distinct from any nonexistent general log-sum rule.

#### Respond to student reasoning

**First hint:** Does the power base have a known positive sign?

If negative x is lost, evaluate log_b(x²) at x=−2 before judging the rewrite. If absolute value is dropped with no condition, ask which sign information is supplied. If log(x+y) is expanded, return to exponent laws and show no corresponding addition rule.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with positive arguments and integer powers, then even-power expressions with unrestricted nonzero inputs, supplied sign domains and invalid sum expansions.

#### Assessment evidence

Assess the positive-base argument hypothesis, correct coefficient extraction, absolute values where needed and domain comparison. A valid restricted identity must state its restriction.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
