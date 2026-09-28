# Tutor: Lesson 14.2: Arithmetic sequences

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Complete indexed definitions and constant differences. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 14.1 curriculum](../lesson-1-sequence-notation-and-domains/lesson.md) and [tutor](../lesson-1-sequence-notation-and-domains/tutor.md). Load both files for any selected review.

## Teaching boundaries

State arithmetic assumptions and preserve the starting index during conversion. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Given a₃=10 and a₇=22 in an arithmetic sequence, is d=12?

**Private reasoning key:** Four steps separate the indices, so d=(22−10)/4=3. An anchored rule is a_n=10+3(n−3) on the declared integer domain.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Constant differences and explicit formulas

Curriculum reference: **Constant differences and explicit formulas** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** An arithmetic sequence has $a_2=7,a_5=16$. Find d and a rule.

**Agent key:** Three steps increase by 9, so d=3 and $a_n=7+3(n-2)=3n+1$ on its stated integer domain.

**Worked example:** Do the first three terms 2,5,8 prove every later term follows the arithmetic rule?

**Worked reasoning:** No. They are consistent with difference 3, but other continuations exist unless an arithmetic model is assumed.


#### Teaching sequence

Under an arithmetic assumption, a change of m index steps changes the term by md. Use the index gap to recover d, then anchor a_n=a_j+(n−j)d at a known term. Define the integer domain and verify both supplied terms. Constant observed differences in a finite prefix do not force every later term unless the model is assumed.

#### Respond to student reasoning

**First hint:** How many index steps separate the known values?

If the raw term difference is called d across skipped indices, count the steps. If the intercept is confused with the first term, evaluate at the actual first index. If a prefix is said to determine an unrestricted sequence, construct a different next term.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use consecutive and skipped indices, negative/zero differences and a reverse rule-to-data task. Compare assumed arithmetic models with finite observations alone.

#### Assessment evidence

Require difference per step, anchored formula, domain and all given-value checks, plus an explicit statement of the model assumption behind continuation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Arithmetic recursive and explicit representations

Curriculum reference: **Arithmetic recursive and explicit representations** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Convert $a_0=5$, $a_n=a_{n-1}-2$ for n≥1 to an explicit rule.

**Agent key:** $a_n=5-2n$ for integers n≥0.

**Worked example:** For $a_n=4+3n$ with n≥1, what is the first term and a recursive form?

**Worked reasoning:** $a_1=7$; recursion $a_n=a_{n-1}+3$ for n≥2. The intercept 4 is not the first allowed term.


#### Teaching sequence

Translate between a first value plus repeated addition and a_n=a_j+(n−j)d. Preserve the starting index: when n≥1, an intercept at n=0 need not be a sequence term. Write the recurrence bound so the initial term remains given rather than recursively undefined. Verify the first two permitted terms in both representations.

#### Respond to student reasoning

**First hint:** At which index does the sequence actually start?

If a₀ is used despite n≥1, evaluate the actual first input. If a recurrence has a_(n−1) at its initial index with no earlier value, supply the correct initial-condition structure instead.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Convert both directions with different initial indices, decreasing and constant cases, then diagnose a representation pair that disagrees at the first term.

#### Assessment evidence

Assess explicit rule, initial value, recurrence bound and agreement on the stated integer domain. Formula equivalence outside that domain is not needed to establish the sequence.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Given arithmetic $a_3=10,a_7=22$, four increments account for a total rise of $12$, so $d=3$. Anchor at known index $3$: $a_n=10+3(n-3)=3n+1$ on the declared integer domain. Check $a_3=10,a_7=22$. If the sequence begins at $n=1$, its first term is $4$, not the constant $1$ in the expanded rule.

Cue “How many steps separate the indices?”; set up $22=10+(7-3)d$; then work $12=4d$, leaving the rule. Fade with $a_2=7,a_5=16$ (same difference $3$, rule $3n+1$), but treat that exposed comparison as practice rather than a fresh retake. For independent work change both anchoring and data, and ask to convert to a recurrence with the correct starting index.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
