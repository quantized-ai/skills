# Tutor: Lesson 10.1: Exponential structure

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Exponent laws, ratios and function inputs. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Identify the nonconstant exponential family and state finite-data assumptions. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Values 2,8,32 occur at inputs 0,2,4. Is the per-unit multiplier four?

**Private reasoning key:** Four is the two-unit factor. The positive per-unit factor is two, so the assumed model is 2·2^x.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Exponential functions versus power functions

Curriculum reference: **Exponential functions versus power functions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Distinguish $3\cdot2^x$ from $3x^2$.

**Agent key:** The first has a variable exponent and fixed positive base; the second is a power function with fixed exponent.

**Worked example:** Why is $(-2)^x$ not a real exponential function on all real inputs?

**Worked reasoning:** Negative bases fail to give real values at many noninteger inputs, such as x=1/2.


#### Teaching sequence

Identify whether the variable is the exponent or the base before naming the family. For nonconstant real exponentials ab^x, require b>0,b≠1,a≠0; discuss excluded constant cases separately. Evaluate negative inputs through reciprocals and keep the outside coefficient distinct from the powered base. Explain why a negative base cannot define this family on every real input.

#### Respond to student reasoning

**First hint:** Where is the variable, and what is the proposed domain?

If 3·2^x is read as 6^x, compare x=0. If a negative exponent produces a negative output, rewrite it as a reciprocal. If a negative base is accepted for all reals, test input 1/2.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Classify exponential, power and constant rules, then evaluate full expressions at positive, zero and negative inputs. Include parameter values that change the classification.

#### Assessment evidence

Require variable-position reasoning, coefficient/base conditions, correct full evaluation and justified constant/negative-base exceptions.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Equal-interval ratios

Curriculum reference: **Equal-interval ratios** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Outputs at x=0,2,4 are 5,20,80. Assuming an exponential model, find its per-unit factor.

**Agent key:** The two-step ratio is 4, so the positive per-unit factor is 2; model $5\cdot2^x$.

**Worked example:** Do outputs 3,6,12 at x=0,1,3 have a constant exponential factor per unit?

**Worked reasoning:** No: the first one-step ratio gives base 2, but the two-step ratio of 2 gives base $\sqrt2$.


#### Teaching sequence

Compare input gaps before output ratios. A gap Δ gives ratio b^Δ, so recover the positive per-unit factor by solving that equation, not by dividing the ratio by Δ. Contrast ratios with differences and verify every supplied point against the same factor. State that finite agreement supports the specified exponential assumption rather than proving unique continuation.

#### Respond to student reasoning

**First hint:** Are the input intervals equal before comparing ratios?

If unevenly spaced ratios are compared directly, annotate their intervals. If b=±2 is proposed from b²=4, enforce the positive-base model. If output zero is used in a ratio, address that division before inference.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with equal gaps, then unequal gaps and missing outputs. Ask for both a model under an explicit assumption and a critique of data inconsistent with it.

#### Assessment evidence

Assess spacing, nonzero outputs, interval-specific ratios, positive per-unit factor and limits of finite evidence. Constant differences are not the exponential invariant.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
