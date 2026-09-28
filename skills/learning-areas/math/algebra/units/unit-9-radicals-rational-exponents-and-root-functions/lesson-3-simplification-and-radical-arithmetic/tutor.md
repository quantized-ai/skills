# Tutor: Lesson 9.3: Simplification and radical arithmetic

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Perfect powers, distribution and like terms. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 9.1 curriculum](../lesson-1-root-definitions-and-principal-values/lesson.md) and [tutor](../lesson-1-root-definitions-and-principal-values/tutor.md); [Lesson 9.2 curriculum](../lesson-2-rational-exponents-and-their-laws/lesson.md) and [tutor](../lesson-2-rational-exponents-and-their-laws/tutor.md). Load both files for any selected review.

## Teaching boundaries

Even-root extraction may require absolute values; do not distribute roots over sums. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Repair √(18x²)=3x√2 for unrestricted real x.

**Private reasoning key:** The correct result is 3|x|√2. At x=−1 the proposed expression is negative while the principal root is positive.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Extracting perfect powers

Curriculum reference: **Extracting perfect powers** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $\sqrt{72x^2}$ for real x.

**Agent key:** Extract the perfect square: $6\lvert x\rvert\sqrt2$. The absolute value preserves nonnegativity.

**Worked example:** Simplify $\sqrt[3]{-54x^3}$.

**Worked reasoning:** Extract $-27x^3$ to obtain $-3x\sqrt[3]2$; odd roots retain the sign.


#### Teaching sequence

Factor the radicand into a perfect nth power and a remaining factor, checking that any separate even roots are real. Extract an even power as an absolute value when its sign is unknown; extract odd powers with their sign. Check the simplified result by raising it to the index and by the principal-root sign where relevant.

#### Respond to student reasoning

**First hint:** Which factor is a perfect power of the root's index?

If x is extracted from √(x²) without bars, test a negative input. If a product is split into undefined even roots, inspect each factor's sign and any zero endpoint. If only numerical factors are extracted, examine variable powers too.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use numerical perfect powers, signed variable powers and remaining radicals, then compare even and odd extraction and supplied sign restrictions.

#### Assessment evidence

Require valid factorization, appropriate absolute values, real-domain preservation and a sign/power verification. Do not lose an originally valid zero-product input by an invalid split.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Adding, subtracting, and multiplying radicals

Curriculum reference: **Adding, subtracting, and multiplying radicals** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $\sqrt{12}+\sqrt{27}$.

**Agent key:** $2\sqrt3+3\sqrt3=5\sqrt3$ after extracting perfect-square factors.

**Worked example:** Expand $(\sqrt5+2)(\sqrt5-1)$.

**Worked reasoning:** Distribution gives $5-\sqrt5+2\sqrt5-2=3+\sqrt5$.


#### Teaching sequence

Simplify radical factors before identifying like terms; the index and simplified radicand must match before coefficients combine. For multiplication distribute complete binomials and simplify resulting products under valid root hypotheses. Show why √(a+b) cannot generally be replaced by √a+√b.

#### Respond to student reasoning

**First hint:** Have the radical parts been simplified before comparing like terms?

If unlike roots are combined, write them as different units and test a numerical example. If a binomial product loses cross terms, use a two-by-two grid. If radicals are distributed across addition, compare √(9+16)=5 with 3+4.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with sums that become like after simplification, then unlike differences and signed products including conjugates. Require an explanation of the grouping used.

#### Assessment evidence

Assess simplification, like-term recognition, full distribution and correct use of root laws. Equivalent unsimplified exact forms can be accepted unless simplification itself is the objective.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Factor $72x^2=36x^2\cdot2$; both factors are nonnegative for real $x$. Thus $\sqrt{72x^2}=6|x|\sqrt2$. The absolute value makes the extracted factor nonnegative. Separately, $\sqrt{12}+\sqrt{27}=2\sqrt3+3\sqrt3=5\sqrt3$ because the simplified radical parts agree, not because radicands add.

Cue “Which whole factor is a perfect square?”; next write $\sqrt{36x^2\cdot2}$; then work $\sqrt{36x^2}=6|x|$, leaving the remaining factor. Fade with $\sqrt{50x^2}$ (key $5|x|\sqrt2$), then require the learner to justify the sign. If their extraction is correct but they combine $\sqrt2+\sqrt3$, target like-term structure. Avoid splitting $\sqrt{x^2y}$ into $|x|\sqrt y$ without conditions: at $x=0,y=-1$, the original is defined and the split is not.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
