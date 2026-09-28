# Tutor: Lesson 12.1: Arithmetic combinations of functions

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Function notation, set intersection and rational-expression restrictions. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Arithmetic combinations use a common input; do not confuse products with composition. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Let f(x)=√x and g(x)=−√x. Is f+g the unrestricted zero function?

**Private reasoning key:** Its formula is zero, but both originals require x≥0. The sum's domain is [0,∞), so it differs from zero defined on all reals.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Sums, differences, and products

Curriculum reference: **Sums, differences, and products** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Let $f(x)=\sqrt{x}$ and $g(x)=1/(x-1)$. Find the domain of f+g.

**Agent key:** Intersect x≥0 with x≠1: $[0,1)\cup(1,\infty)$.

**Worked example:** If f is defined only for x>0, does $(f-f)(x)=0$ make its domain all real?

**Worked reasoning:** No. Subtraction requires both original outputs; the zero result is defined only on x>0.


#### Teaching sequence

Evaluate both functions at the same permitted input, then perform the stated arithmetic in order. The domain is their intersection even if cancellation makes the resulting formula look unrestricted. In contexts, check that addition/subtraction combines compatible quantities and multiplication has the appropriate product unit. Compare pointwise multiplication with composition rather than reading the same notation loosely.

#### Respond to student reasoning

**First hint:** Are both outputs available at the same input?

If separate admissible inputs are used for f and g, insist on the common input. If a canceled radical restriction vanishes, inspect both originals. If incompatible units are added, interpret the quantities before calculating.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use formulas and complete tables, restricted domains, reverse missing-function tasks and compatible contextual combinations.

#### Assessment evidence

Require correct operation, common admissibility, domain intersection and units. A simplified expression does not waive either original function's restrictions.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Quotients of functions

Curriculum reference: **Quotients of functions** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** For $f(x)=x^2-1$ and $g(x)=x-1$, simplify f/g with its domain.

**Agent key:** $x+1$ for x≠1; the divisor's zero remains excluded.

**Worked example:** If $g(x)=1/(x+2)$, does it have zero output at x=-2?

**Worked reasoning:** No: it is undefined there and never zero. Quotient restrictions require both defined operands and a nonzero divisor.


#### Teaching sequence

Construct f(x)/g(x) with the full g in the denominator and keep order explicit. Start with D_f∩D_g, then remove all inputs where g(x)=0. Simplify only afterward and retain canceled exclusions. Distinguish a point where g is undefined from one where it is defined but zero; both prohibit the quotient for different reasons.

#### Respond to student reasoning

**First hint:** Which inputs make g zero rather than undefined?

If the domain is read only from a reduced denominator, reconstruct both original domains. If f/g and g/f are confused, label dividend and divisor. If a common zero is canceled to admit the input, evaluate the original quotient first.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Include polynomial, radical and rational operands, isolated divisor zeros and a divisor identically zero on the shared domain.

#### Assessment evidence

Assess ordered quotient, both original domains, complete divisor-zero exclusions and valid reduction. Report an empty domain when no common admissible nonzero-divisor input exists.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $f(x)=\sqrt x$ and $g(x)=1/(x-1)$, evaluate both at the same input before addition. Domain requires $x\ge0$ and $x\ne1$, giving $[0,1)\cup(1,\infty)$. At $4$, $(f+g)(4)=2+1/3=7/3$; the product is $2/3$, a different operation. For $f-g$, subtraction negates the whole second output.

Cue “Are both original outputs available here?”; next list the two domain conditions; then solve one, leaving intersection. Fade by replacing $g$ with $-\sqrt x$: the sum is zero only on $[0,\infty)$. For a quotient with $g=\sqrt x$, zero must also be excluded, even though both functions may exist there. A canceled denominator or zero result cannot expand the domain of the original combination.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
