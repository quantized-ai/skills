# Tutor: Lesson 3.5: Cube structures

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Complete component powers and signed distribution. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 3.1 curriculum](../lesson-1-factoring-and-greatest-common-factors/lesson.md) and [tutor](../lesson-1-factoring-and-greatest-common-factors/tutor.md); [Lesson 3.2 curriculum](../lesson-2-common-binomial-factors-and-grouping/lesson.md) and [tutor](../lesson-2-common-binomial-factors-and-grouping/tutor.md). Load both files for any selected review.

## Teaching boundaries

Derive cube companions; distinguish square and cube structures. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Test x³−8=(x−2)(x²+4x+4) and repair it.

**Private reasoning key:** The right side is x³+2x²−4x−8, not x³−8. Replacing the companion by x²+2x+4 cancels mixed terms and gives the correct identity.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Differences of cubes

Curriculum reference: **Differences of cubes** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Factor $8x^3-27$.

**Agent key:** $(2x-3)(4x^2+6x+9)$; multiplication cancels both mixed cubic-expansion terms.

**Worked example:** Factor $2x^3-54$ and explain why the companion is not $(x+3)^2$.

**Worked reasoning:** $2(x-3)(x^2+3x+9)$; a square would have $6x$, not $3x$.


#### Teaching sequence

Identify full cube roots A,B after extracting a GCF. Expand (A−B)(A²+AB+B²) in six products to show the mixed terms cancel. Contrast its quadratic companion with (A+B)², whose middle coefficient would be doubled. Reinsert any extracted coefficient and verify the original variable powers.

#### Respond to student reasoning

**First hint:** What are the complete cube roots after the GCF is removed?

If the companion uses 2AB, expand just the disputed products to expose the unwanted terms. If the binomial is a sum, inspect the sign of the original cubes. If an outer GCF is dropped, compare leading coefficients.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with integer cube roots, then monomial roots and an initial GCF. Mix in expressions that are not differences of cubes and require justification.

#### Assessment evidence

Require correct full cube roots, the three-term companion, all signs, retained GCF and cancellation reasoning. Completeness must respect the allowed coefficients rather than an automatic stop after applying the pattern.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Sums of cubes

Curriculum reference: **Sums of cubes** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Factor $x^3+64$.

**Agent key:** $(x+4)(x^2-4x+16)$; the negative middle term produces cancellation.

**Worked example:** Factor $16x^3+2$ completely over the rationals.

**Worked reasoning:** $2(8x^3+1)=2(2x+1)(4x^2-2x+1)$. The quadratic discriminant is negative.


#### Teaching sequence

Derive the sum pattern by multiplying (A+B)(A²−AB+B²). The negative middle component cancels the mixed products, while B³ remains positive. Contrast a sum of cubes with a sum of squares: the pattern depends on third powers. A missing general sum-of-squares identity does not by itself prove every particular expression irreducible.

#### Respond to student reasoning

**First hint:** Which sign in the companion cancels the mixed terms?

If all companion signs are positive, calculate the mixed terms and show why they do not cancel. If the cube identity is applied to x²+9, ask for polynomial cube roots of both terms before accepting the pattern.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate sums and differences, then negative components and extracted common factors. Require identification before using a mnemonic and a verification after it.

#### Assessment evidence

Assess cube recognition, signed companion, retained factors and expansion. Distinguish rejection of this identity from a justified conclusion about all possible factorizations.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Work the six products once:
$(x-2)(x^2+2x+4)=x^3+2x^2+4x-2x^2-4x-8=x^3-8$.
The two mixed pairs cancel; using $(x+2)^2$ as the companion would double the cross coefficient and prevent cancellation. Fade by supplying $(x+3)(x^2+\square x+9)$ and asking which coefficient eliminates the $x^2$ terms. The answer $-3$ also cancels the $x$ terms, leaving $x^3+27$.

For $16x^3+2$, extract $2$, identify cube roots $2x,1$, and form $2(2x+1)(4x^2-2x+1)$. To justify rational completion using the earlier split method, coefficients splitting $-2$ would have product $4$. Possible integer pair sums are $5,4,-5,-4$, never $-2$; this primitive integer quadratic has no rational linear factor. The discriminant $-12$ is an internal alternative check, not a required new learner method.

When the companion sign is wrong, first cue “Which mixed terms must cancel?”; next set up $(2x+1)(4x^2+kx+1)$; then show its $x^2$ coefficient is $2k+4$, leaving $k=-2$ and the remaining verification to the learner. If cube roots are the actual obstacle, address them first.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
