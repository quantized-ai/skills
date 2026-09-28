# Tutor: Lesson 7.6: Structure and closure

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Division identities and rational arithmetic. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 7.1 curriculum](../lesson-1-definitions-and-restrictions/lesson.md) and [tutor](../lesson-1-definitions-and-restrictions/tutor.md); [Lesson 7.3 curriculum](../lesson-3-products-and-quotients/lesson.md) and [tutor](../lesson-3-products-and-quotients/tutor.md); [Lesson 7.4 curriculum](../lesson-4-addition-and-subtraction/lesson.md) and [tutor](../lesson-4-addition-and-subtraction/tutor.md). Load both files for any selected review.

## Teaching boundaries

Separate algebraic closure from permission to evaluate at an input. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does a nonzero rational function always make a permissible divisor? Use g(x)=x/(x+1).

**Private reasoning key:** No. g is not identically zero, but g(0)=0 and g(−1) is undefined. Dividing by it excludes both inputs in addition to restrictions of the other operand.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Quotient-plus-remainder forms

Curriculum reference: **Quotient-plus-remainder forms** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Rewrite $(x^2+1)/(x-1)$ as quotient plus remainder.

**Agent key:** $x+1+2/(x-1)$ for $x\ne1$, because $(x-1)(x+1)+2=x^2+1$.

**Worked example:** Rewrite $(x^2-4)/(x-2)$ using division and state what happens to x=2.

**Worked reasoning:** Quotient is $x+2$ and remainder zero, but the original exclusion $x\ne2$ still applies.


#### Teaching sequence

Divide the numerator by the denominator to obtain p=dq+r, then divide the identity by d only at allowed inputs. Interpret q as the polynomial part and r/d as the proper remainder term. For exact division the remainder disappears algebraically but the original denominator roots remain excluded. Reconstruct p to verify all coefficients.

#### Respond to student reasoning

**First hint:** Can you reconstruct the numerator from divisor, quotient, and remainder?

If the remainder is written without its denominator, multiply the proposed result by d. If a remainder's degree is too high, continue division. If exact division restores holes, distinguish polynomial identity from quotient evaluation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use improper rational expressions, exact division and lower-degree numerators. Reverse the task by constructing a numerator from a given quotient and remainder.

#### Assessment evidence

Require division identity, proper remainder degree, quotient-plus-fraction representation and preserved original domain. Use reconstruction rather than asymptotic appearance as verification.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Closure and rational-number analogies

Curriculum reference: **Closure and rational-number analogies** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Express $p/q+r/s$ as one rational expression and state evaluation restrictions.

**Agent key:** $(ps+rq)/(qs)$, requiring q and s nonzero at the input and nonzero as denominator polynomials.

**Worked example:** Does a rational expression that is not identically zero necessarily have a nonzero value at every input?

**Worked reasoning:** No: $x/(x+1)$ is zero at 0. Dividing by it also excludes 0, besides its undefined input $-1$.


#### Teaching sequence

Derive arithmetic rules by multiplying by factors of one, just as for numerical fractions, but keep evaluation conditions explicit. For addition, ps+rq over qs requires q,s nonzero at the input. For division, a rational function not identically zero can still have individual zero values that must be excluded. Separate closure as an algebraic class from pointwise permission to evaluate.

#### Respond to student reasoning

**First hint:** Are you discussing algebraic closure or evaluation at one input?

If nonzero expression is interpreted as never zero, use x/(x+1) at x=0. If a denominator polynomial identically zero is accepted, there is no rational expression to evaluate. If closure is inferred from examples alone, derive the general polynomial numerator/denominator form.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare arithmetic with numerical fractions, prove a general operation's form and diagnose zero-divisor versus undefined-input cases.

#### Assessment evidence

Assess general-form reasoning, polynomial closure, nonzero-polynomial requirements and pointwise domain restrictions. Do not treat an operation's symbolic form as permission at every real input.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Divide $x^2+1$ by $x-1$ to get $x^2+1=(x-1)(x+1)+2$. Therefore $(x^2+1)/(x-1)=x+1+2/(x-1)$ for $x\ne1$. Multiplying the entire right side by $x-1$ recovers the numerator; the proper remainder has degree zero, below degree one.

Cue “What would divisor times proposed quotient leave over?”; set up $x^2+1-(x-1)(x+1)$; then show the remainder $2$, leaving the quotient form and restriction. Fade with $(x^2+3)/(x+1)$ (key $x-1+4/(x+1)$, $x\ne-1$). For closure, use $1/x+1/(x+1)=(2x+1)/[x(x+1)]$ as an instance of polynomial numerator and denominator construction; the algebraic result remains rational while evaluation still excludes $0,-1$.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
