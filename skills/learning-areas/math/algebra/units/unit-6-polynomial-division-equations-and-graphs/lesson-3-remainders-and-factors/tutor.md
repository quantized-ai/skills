# Tutor: Lesson 6.3: Remainders and factors

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Division identity and polynomial evaluation. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.1 curriculum](../lesson-1-the-division-algorithm-and-linear-long-division/lesson.md) and [tutor](../lesson-1-the-division-algorithm-and-linear-long-division/tutor.md); [Lesson 6.2 curriculum](../lesson-2-quadratic-divisors-and-synthetic-division/lesson.md) and [tutor](../lesson-2-quadratic-divisors-and-synthetic-division/tutor.md). Load both files for any selected review.

## Teaching boundaries

A single evaluation supplies a linear-divisor remainder, not the entire quotient. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student tests whether x+3 divides p(x)=x²+2x−3 by computing p(3)=12 and rejecting it.

**Private reasoning key:** The divisor vanishes at −3, and p(−3)=9−6−3=0. Thus x+3 is a factor; the complete product is (x+3)(x−1).

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### The Remainder Theorem

Curriculum reference: **The Remainder Theorem** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the remainder when $p(x)=x^3+2x-1$ is divided by $x+2$.

**Agent key:** Evaluate $p(-2)=-8-4-1=-13$; the divisor root is $-2$.

**Worked example:** Why does substituting c in $p=(x-c)q+r$ determine r but not q?

**Worked reasoning:** The product term becomes zero and leaves $p(c)=r$. Its value gives no quotient coefficients.


#### Teaching sequence

Start with p(x)=(x−c)q(x)+r and substitute x=c. The product vanishes, leaving p(c)=r; this proves the theorem for linear divisors without computing q. When the divisor is x+2, its c is −2. Explain that one remainder value contains no information sufficient to reconstruct every quotient coefficient.

#### Respond to student reasoning

**First hint:** At what input does the divisor vanish?

If p(2) is used for x+2, ask at what input that divisor vanishes. If p(c) is called the quotient, point to the surviving term in the substituted identity.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compute remainders by evaluation, compare with division and solve a simple coefficient condition from a given remainder. Include a quadratic-divisor question to expose the theorem's scope.

#### Assessment evidence

Require correct divisor root, evaluation, identity-based explanation and a distinction between remainder and quotient. Do not infer a quadratic remainder from one function value.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### The Factor Theorem

Curriculum reference: **The Factor Theorem** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Is $x-2$ a factor of $x^3-4x$?

**Agent key:** Yes: $p(2)=8-8=0$, so the remainder is zero and the linear factor exists.

**Worked example:** Find k so that $x+1$ divides $x^2+kx+3$.

**Worked reasoning:** $p(-1)=1-k+3=0$ gives $k=4$; $(x+1)(x+3)$ verifies it.


#### Teaching sequence

Use the remainder theorem in both directions: p(c)=0 means the constant remainder is zero and x−c divides p; an existing factor makes p(c)=0. In the parameter example substitute c=−1 before solving for k, then factor or divide to verify k=4 in the original polynomial.

#### Respond to student reasoning

**First hint:** What equation does a zero remainder impose?

If zero output at c is used to claim factor x+c, solve the proposed factor's root. If a parameter condition is solved but not checked, evaluate the resulting p(c). If a nonzero remainder is ignored, the factor claim fails.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate testing a proposed factor, recovering a parameter and constructing a polynomial with a required factor. Include a plausible nonfactor to require a disproof.

#### Assessment evidence

Assess both factor-zero implications, correct signs, parameter solution and independent verification. A factor claim requires exact zero rather than a rounded near-zero value.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Explain remainder evaluation from $p(x)=(x-c)q(x)+r$: at $x=c$ the unknown quotient is multiplied by zero, leaving exactly $p(c)=r$. For $p=x^3+2x-1$ and divisor $x+2$, $c=-2$, giving remainder $-13$. For $p=x^2+kx+3$ and required factor $x+1$, zero remainder gives $1-k+3=0$, so $k=4$ and $(x+1)(x+3)$ verifies the factor.

If the learner evaluates at $+1$, cue “At what input is the divisor zero?”; then set up $x+1=0$; next show $p(-1)=1-k+3$, leaving the coefficient equation. Fade with $x^2+kx+6$ divisible by $x-2$ (key $k=-5$). Evaluation at one point determines a constant remainder for a linear divisor, not all coefficients of a possible linear remainder for a quadratic divisor.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
