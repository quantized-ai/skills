# Tutor: Lesson 2.1: Definition and term structure

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Signed arithmetic, powers and the difference between multiplication and addition. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Establish structure and meaning; factor only as supplied or explained to discuss a domain, not as a new factoring course. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A learner says 7x(x+1) has three outer terms, 7x, x and 1. Explain the first structural error without expanding immediately.

**Private reasoning key:** The outer operation is multiplication, so this is one outer term with factors 7, x and (x+1). The sum x+1 is nested inside a factor; expanding gives two terms, 7x² and 7x, in a different representation.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### What is a polynomial?

Curriculum reference: **What is a polynomial?** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Is $\sqrt{3}x^2-4$ polynomial in $x$? What about $x^{-1}+2$?

**Agent key:** The first is polynomial: irrational fixed coefficients are allowed. The second has an uncanceled negative variable exponent.

**Worked example:** Simplify $(x^2-4)/(x-2)$ and compare its function with $x+2$.

**Worked reasoning:** It equals $x+2$ only for $x\ne2$. The reduced formula is polynomial but the original function still excludes 2.


#### Teaching sequence

Name the variable before inspecting exponents: a fixed irrational coefficient is allowed, but a variable in a denominator needs a domain check. Contrast a finite sum of nonnegative integer powers with a square root of the variable. In the worked example factor the numerator as (x−2)(x+2), cancel only for x≠2, and separately describe the reduced formula and original function. Ask why coefficient type and exponent type play different roles.

#### Respond to student reasoning

**First hint:** Which symbols vary, and which original inputs are excluded?

If √3 is rejected, hold it fixed while x varies. If cancellation is said to restore x=2, ask the learner to evaluate the original denominator there; then contrast formula simplification with domain extension.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with expanded expressions in a named variable; add fixed parameters, then expressions that simplify. Finish by comparing two formulas that agree where both are defined but have different domains.

#### Assessment evidence

Require a justified classification, identification of fixed versus variable symbols, and a simplification with inherited exclusions. Include a finite-sum condition and a noninteger/negative variable exponent countercase.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Terms, coefficients, constants, and factors

Curriculum reference: **Terms, coefficients, constants, and factors** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** List signed terms and coefficients of $-x^3+4x-7$.

**Agent key:** Terms are $-x^3,4x,-7$; coefficients for powers 3,2,1,0 are $-1,0,4,-7$.

**Worked example:** In $3x(x-2)+5$, identify the outer additive terms and the factors of the first term.

**Worked reasoning:** Outer terms are $3x(x-2)$ and 5; factors can be $3,x,x-2$. Terms inside $x-2$ belong to a different structural level.


#### Teaching sequence

Read structure from the outside inward. Rewrite subtraction as addition of signed terms, then identify each term's coefficient and variable factors. In 3x(x−2)+5, the outer addition separates two objects; x and −2 are terms inside a factor. Expand only after this distinction is clear. Place −x³+4x−7 in a coefficient grid to expose −1 and the missing zero coefficient.

#### Respond to student reasoning

**First hint:** Where are the additions at the level being described?

If −x³ is assigned coefficient 1, ask what multiplies x³ to recover the signed term. If x−2 is split when listing outer terms, replace that whole factor temporarily by a box and revisit the outer operation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from signed expanded sums to missing powers, then nested products and sums. Ask the student to produce an expression with specified factors and outer terms and explain its different structural levels.

#### Assessment evidence

Collect complete signed terms, unit/zero coefficients, and a nested factor interpretation. Correct expansion alone does not demonstrate recognition of the original expression's outer structure.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Interpreting quantities from polynomial structure

Curriculum reference: **Interpreting quantities from polynomial structure** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A rectangle has side lengths $x$ m and $(x+3)$ m, with $x>0$. Interpret $x(x+3)$.

**Agent key:** It is area in square meters; $x^2+3x$ separates two area contributions. The context restricts $x>0$.

**Worked example:** Tickets cost 6 dollars each plus a 4-dollar order fee; each order contains at least one ticket. Interpret $6n+4$ and its meaningful domain.

**Worked reasoning:** $6n$ is ticket cost and 4 the one-time fee. For orders of at least one ticket, $n$ is a positive integer, although the polynomial accepts all real inputs.


#### Teaching sequence

Attach units to each symbol before calculating. For the rectangle, multiply lengths to obtain square meters and expand x(x+3) to relate the two area contributions to the whole. For the ticket model, contrast per-ticket cost with one fee per order; n is an integer count at least one. Ask which algebraically evaluable inputs make no sense in each context.

#### Respond to student reasoning

**First hint:** What units must the added parts share?

If the order fee is multiplied by n, ask how many orders a single purchase contains. If n=1.5 is allowed, separate a valid real substitution into the formula from a permitted ticket count. If unlike units are added, name each term's unit first.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use counts versus measurements, then interpret a grouped subtotal without expanding it. Reverse the direction by asking for an expression from a clearly specified fee or area model.

#### Assessment evidence

Require symbol meanings, compatible term units, interpretation of a composite part, and contextual input restrictions. Distinguish continuous positive lengths from positive integer counts.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
