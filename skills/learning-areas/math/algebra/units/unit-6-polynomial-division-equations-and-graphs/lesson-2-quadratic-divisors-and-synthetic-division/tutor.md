# Tutor: Lesson 6.2: Quadratic divisors and synthetic division

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Long-division steps and coefficient placeholders. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.1 curriculum](../lesson-1-the-division-algorithm-and-linear-long-division/lesson.md) and [tutor](../lesson-1-the-division-algorithm-and-linear-long-division/tutor.md). Load both files for any selected review.

## Teaching boundaries

Ordinary synthetic division applies to x−c; normalize other linear divisors explicitly. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student divides x²−1 by 3x−3, gets x+1 by synthetic division and stops. Repair the quotient.

**Private reasoning key:** x²−1=(x−1)(x+1), while the divisor is 3(x−1). The quotient is (x+1)/3 with remainder zero; multiplication by the original divisor verifies it.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Long division by a quadratic polynomial

Curriculum reference: **Long division by a quadratic polynomial** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Divide $x^4+1$ by $x^2+1$.

**Agent key:** Quotient $x^2-1$, remainder 2; $(x^2+1)(x^2-1)+2=x^4+1$.

**Worked example:** Divide $2x^3+x+1$ by $2x^2+1$.

**Worked reasoning:** Quotient x, remainder 1; the remainder is below degree 2.


#### Teaching sequence

Apply the same division algorithm with a quadratic divisor; the stopping condition permits a linear remainder. In x⁴+1 divided by x²+1, include zero x³,x²,x terms and subtract x⁴+x² before continuing. Verify q=x²−1,r=2 by multiplication, not by matching only the leading term.

#### Respond to student reasoning

**First hint:** Should division continue while the remainder still has degree 2?

If a linear remainder is forced to zero, compare its degree with two. If ordinary synthetic division is attempted, explain that its single-root recurrence assumes a linear divisor. If fractional quotient coefficients are avoided by altering the divisor, preserve the original problem.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use exact and linear-remainder cases, nonmonic quadratic divisors and lower-degree dividends. Include a reconstruction problem with an invalid degree-two proposed remainder.

#### Assessment evidence

Require the full algorithm or a justified equivalent polynomial calculation, proper remainder degree and all-coefficient reconstruction. Track original exclusions when a rational quotient is requested.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Synthetic division by $x-c$

Curriculum reference: **Synthetic division by $x-c$** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Use synthetic division on $x^3-3x+2$ by $x-1$.

**Agent key:** Use coefficients $1,0,-3,2$ and c=1: quotient $x^2+x-2$, remainder 0.

**Worked example:** Divide $x^2-1$ by $2x-2$ using a monic normalization.

**Worked reasoning:** Dividing by $x-1$ gives $x+1$; for $2(x-1)$ the quotient is $(x+1)/2$, remainder 0.


#### Teaching sequence

Derive the synthetic number from x−c=0 and write every coefficient including zeros. Bring down the leading coefficient, multiply by c and add in each column; the final entry is the remainder and preceding entries represent a quotient one degree lower. For a nonunit multiple of x−c, account for that multiplier in the quotient instead of silently changing the divisor.

#### Respond to student reasoning

**First hint:** Is the divisor exactly $x-c$ or a nonunit multiple?

If c's sign is reversed, solve the divisor equation explicitly. If a zero column is omitted, label descending powers. If a nonmonic divisor yields the monic quotient unchanged, multiply back by the original divisor to detect the scale error.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with monic linear exact division, then signed roots, missing powers, remainders and explicit nonmonic normalization. Compare with long division after one method is understood.

#### Assessment evidence

Assess correct c, complete coefficient positions, quotient degree, remainder and reconstruction. Do not apply the ordinary synthetic procedure to a quadratic divisor.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $x^4+1$ divided by $x^2+1$, write $x^4+0x^3+0x^2+0x+1$. First quotient term $x^2$ leaves $-x^2+1$; division must continue because this remainder still has degree $2$. Subtract $-(x^2+1)$ to get $2$, so $q=x^2-1,r=2$.

For synthetic division of $x^3-3x+2$ by $x-1$, use $1,0,-3,2$: bring down $1$, then successive multiply-add totals are $1,-2,0$. These are quotient coefficients $1,1,-2$ and remainder $0$. Cue “Which missing power needs a position?”; set up the coefficient row; then perform only the first multiply-add, leaving the rest. Fade on $x^3-4x+3$ by $x-1$ (key $x^2+x-3$, remainder $0$). If the original divisor is $2x-2$, halve the quotient; the remainder does not halve.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
