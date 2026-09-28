# Tutor: Lesson 4.4: Complex division and rectangular coordinates

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Conjugate products, nonzero division and coordinate pairs. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 4.1 curriculum](../lesson-1-the-imaginary-unit-and-complex-form/lesson.md) and [tutor](../lesson-1-the-imaginary-unit-and-complex-form/tutor.md); [Lesson 4.3 curriculum](../lesson-3-multiplication-and-conjugates/lesson.md) and [tutor](../lesson-3-multiplication-and-conjugates/tutor.md). Load both files for any selected review.

## Teaching boundaries

Use rectangular arithmetic and geometry; do not introduce polar division as a prerequisite. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Someone computes (1+i)/(1−i) by dividing components and obtains 1−i. Check and repair.

**Private reasoning key:** Multiplying 1−i by the divisor gives −2i, not 1+i. Conjugation gives (1+i)²/2=2i/2=i, which multiplies back correctly.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Dividing complex numbers

Curriculum reference: **Dividing complex numbers** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $(3+i)/(1-2i)$.

**Agent key:** Multiply by $(1+2i)/(1+2i)$: numerator $1+7i$, denominator 5; result $1/5+7i/5$.

**Worked example:** Is division by $0+0i$ defined? Why does the conjugate method fail there?

**Worked reasoning:** No. The denominator becomes $0^2+0^2=0$, so the step cannot produce a quotient.


#### Teaching sequence

Check c+di≠0 before forming a quotient. Multiply numerator and denominator by c−di, which produces real denominator c²+d². Distribute the numerator carefully, separate real and imaginary parts, then multiply the proposed quotient by the original divisor to verify it. Conjugation is a convenient identity-based method, not a change to the original value.

#### Respond to student reasoning

**First hint:** What product gives a nonzero real denominator?

If numerator and denominator are divided componentwise, test by multiplying that proposal back. If only the denominator is conjugated, ask what factor of one was applied. If c²+d² is zero, identify the forbidden divisor.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with a purely imaginary divisor, then general signed divisors and a quotient with zero imaginary part. Include an undefined zero-divisor case and reverse multiplication checks.

#### Assessment evidence

Require nonzero-divisor recognition, equal multiplication of numerator and denominator, rectangular form and recovery of the dividend. Accept a valid alternative method with equivalent justification.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### The rectangular complex plane

Curriculum reference: **The rectangular complex plane** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Describe the point for $-2+5i$ in the complex plane.

**Agent key:** The point is $(-2,5)$: horizontal real coordinate, vertical imaginary coefficient.

**Worked example:** Reflect the point for $3-4i$ across the real axis and name the complex number.

**Worked reasoning:** $(3,-4)$ becomes $(3,4)$, representing the conjugate $3+4i$.


#### Teaching sequence

Associate a+bi with the point (a,b): the first coordinate measures the real axis, the second the imaginary coefficient. Plot the point, then compare its conjugate (a,−b) and its negative (−a,−b). Read the same information from a supplied plot without confusing a coordinate with a modulus or a real function output.

#### Respond to student reasoning

**First hint:** Which coordinate changes under conjugation?

If bi is used as the vertical coordinate, ask for its real scalar coefficient. If conjugation reflects in the vertical axis, check which coordinate remains unchanged. If a point is read as y=f(x), explain that each point represents one complex number.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from standard form to coordinates and back, then plot real/pure-imaginary values and compare conjugation with negation. Use exact labelled coordinates if no figure is supplied.

#### Assessment evidence

Require bidirectional point-number translation, axis roles, signs and geometric conjugation. Do not claim a student's plotted artifact was inspected when only a verbal location was provided.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Model $(3+i)/(1-2i)$ by multiplying by $(1+2i)/(1+2i)$, a ratio equal to one because $1+2i\ne0$. The denominator becomes $1+4=5$ and the numerator $3+6i+i+2i^2=1+7i$. Thus the quotient is $1/5+7i/5$. Multiplication by $1-2i$ recovers $3+i$; modulus squared explains why the denominator is positive.

Cue “Which multiplier cancels the denominator's imaginary part?”; next supply the conjugate ratio; then work the denominator $5$, leaving numerator distribution. Fade with $(2+i)/(1-i)$ (key $1/2+3i/2$). If the learner already has the correct fraction but swapped plotted coordinates, address only representation: $1/5+7i/5$ is $(1/5,7/5)$, and conjugation reflects it to $(1/5,-7/5)$.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
