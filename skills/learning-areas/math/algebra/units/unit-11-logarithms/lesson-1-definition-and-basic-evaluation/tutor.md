# Tutor: Lesson 11.1: Definition and basic evaluation

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Positive-base exponentials and inverse input-output roles. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Explain bases and argument domains before teaching log manipulation rules. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student rejects log₂(1/8)=−3 because logarithms cannot be negative.

**Private reasoning key:** The argument 1/8 is positive, so it is allowed. The output is −3 because 2^(−3)=1/8; the positivity condition applies to the argument, not the output.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Logarithms as exponents

Curriculum reference: **Logarithms as exponents** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate $\log_3(1/9)$ by rewriting it exponentially.

**Agent key:** $3^{-2}=1/9$, so the value is -2; logarithm outputs may be negative.

**Worked example:** Find the real domain of $\log_2(x-4)$.

**Worked reasoning:** Require $x-4>0$, so x>4. The argument is strictly positive, not nonnegative.


#### Teaching sequence

Read log_b(A)=c as the question b^c=A, preserving base, argument and exponent roles. Explain b>0,b≠1 through the real exponential's existence and one-to-one behavior, and A>0 through its range. A logarithm output can be zero or negative; it is the argument that must be positive. For an algebraic argument, solve the entire positivity inequality.

#### Respond to student reasoning

**First hint:** What exponent produces the argument?

If log_b(A) is treated as division, return to the equivalent power equation. If negative answers are rejected, use b^(−1)=1/b. If an argument equal to zero is allowed, ask which finite power of b produces zero.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Convert both directions, evaluate recognizable powers and determine domains of composite arguments. Include invalid bases and arguments for explanation.

#### Assessment evidence

Require correct three-way roles, valid-base conditions, full positive-argument domain and acceptance of valid negative/zero outputs.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Base 2, common logarithms, and natural logarithms

Curriculum reference: **Base 2, common logarithms, and natural logarithms** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate $\log(1000)$ and $\ln(e^{-3})$.

**Agent key:** Under the course notation, common log is base 10 and natural log base e; values are 3 and -3.

**Worked example:** Between which integers lies $\log_2 6$?

**Worked reasoning:** Between 2 and 3 because $2^2<6<2^3$ and the base-2 exponential increases.


#### Teaching sequence

State the notation convention: log commonly means base ten here, ln means base e, and log₂ names base two. Evaluate exact powers through the exponent definition before using a calculator. For a nonrecognizable argument bracket the logarithm between exponents whose powers surround it, accounting for a decreasing valid base when relevant. Round only the final reported approximation.

#### Respond to student reasoning

**First hint:** Which base does the notation specify?

If ln is read as base ten, compare ln(e)=1 with log(10)=1. If an exact form is unnecessarily rounded mid-calculation, retain it until the end. If a bracket is reversed for a base below one, inspect its exponential order.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Mix exact powers, reciprocals, zero output at argument one and bracketed estimates with explicitly named bases.

#### Assessment evidence

Assess notation, inverse evaluation, exact versus approximate reporting and an exponential-value reasonableness check. Do not infer a base from an unlabeled software function without confirming its convention.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
