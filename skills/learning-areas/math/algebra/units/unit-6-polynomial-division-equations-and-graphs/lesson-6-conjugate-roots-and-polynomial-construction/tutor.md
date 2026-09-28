# Tutor: Lesson 6.6: Conjugate roots and polynomial construction

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Complex conjugates, root multiplicity and polynomial products. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.4 curriculum](../lesson-4-finding-and-solving-higher-degree-factors/lesson.md) and [tutor](../lesson-4-finding-and-solving-higher-degree-factors/tutor.md); [Lesson 6.5 curriculum](../lesson-5-multiplicity-and-the-fundamental-theorem/lesson.md) and [tutor](../lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md). Load both files for any selected review.

## Teaching boundaries

Require real coefficients before forcing conjugates and enough normalization before claiming uniqueness. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A least-degree real polynomial has root 3i and leading coefficient 2. Is 2(x−3i) valid?

**Private reasoning key:** No: its coefficients are not all real. The forced root −3i gives 2(x−3i)(x+3i)=2(x²+9), the least-degree real construction.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Conjugate roots of real-coefficient polynomials

Curriculum reference: **Conjugate roots of real-coefficient polynomials** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A real-coefficient polynomial has root $2+3i$. What other root is forced?

**Agent key:** $2-3i$ with the same multiplicity; their real quadratic factor is $(x-2)^2+9=x^2-4x+13$.

**Worked example:** Does $p(x)=x-i$ also have root $-i$?

**Worked reasoning:** No: $p(-i)=-2i$. Its coefficient is nonreal, so conjugate pairing is not forced.


#### Teaching sequence

For real coefficients, conjugating p(z)=0 gives p(conjugate z)=0 because coefficients remain unchanged. Pair a+bi with a−bi and multiply to obtain (x−a)²+b², a real quadratic. Repeated conjugate roots have equal multiplicity. Contrast a polynomial with nonreal coefficients, where the implication need not hold.

#### Respond to student reasoning

**First hint:** Are all coefficients real?

If an unneeded opposite −z is added, distinguish conjugation from negation. If the real-coefficient condition is omitted, test p(x)=x−i. If multiplicity differs between conjugates, revisit conjugation of the repeated factorization.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Recover forced partners and real quadratic factors, then identify data inconsistent with real coefficients. Include an all-real root, whose conjugate is itself.

#### Assessment evidence

Assess the hypothesis, exact partner/multiplicity and product reconstruction. Do not force a partner when the coefficients are allowed to be complex.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Constructing a polynomial from zeros and scale

Curriculum reference: **Constructing a polynomial from zeros and scale** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Find the least-degree real polynomial with roots 1 and $2i$ and leading coefficient 3.

**Agent key:** The forced partner is $-2i$, giving $3(x-1)(x^2+4)$, degree 3.

**Worked example:** Do roots 1 and 2 together with $p(1)=0$ fix a least-degree polynomial?

**Worked reasoning:** No: $a(x-1)(x-2)$ works for every nonzero a. The extra condition repeats a known zero and supplies no scale.


#### Teaching sequence

Build the product from required roots and multiplicities, adding forced conjugates only for real coefficients. Leave a nonzero scale a until a leading coefficient or a value at a nonroot determines it. A value at an existing root is either redundant or contradictory. Distinguish least-degree construction from a higher-degree family that could contain extra factors.

#### Respond to student reasoning

**First hint:** Is the normalization given at a root or a nonroot?

If a is silently one, ask for the normalization datum. If a root is repeated without a stated multiplicity requirement, identify the degree choice. If a value condition divides by zero, classify its compatibility instead.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Construct from root lists, repeated roots and conjugate data; vary leading coefficient, nonroot value and redundant/inconsistent normalization. Verify all required conditions.

#### Assessment evidence

Require coefficient-system consistency, least/fixed-degree interpretation, correct factors, justified scale and all-data checks. Report nonuniqueness when normalization or degree information is insufficient.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
