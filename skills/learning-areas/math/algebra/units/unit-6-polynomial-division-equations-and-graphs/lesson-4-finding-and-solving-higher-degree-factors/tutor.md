# Tutor: Lesson 6.4: Finding and solving higher-degree factors

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Factoring, quadratic solutions and exact evaluation. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 6.2 curriculum](../lesson-2-quadratic-divisors-and-synthetic-division/lesson.md) and [tutor](../lesson-2-quadratic-divisors-and-synthetic-division/tutor.md); [Lesson 6.3 curriculum](../lesson-3-remainders-and-factors/lesson.md) and [tutor](../lesson-3-remainders-and-factors/tutor.md). Load both files for any selected review.

## Teaching boundaries

Rational candidates are a search aid; residual irrational/nonreal roots remain part of a complete solution. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A monic cubic has constant −6, so a student lists ±1,±2,±3,±6 as its eight roots. Diagnose without knowing other coefficients.

**Private reasoning key:** Those are candidates, not established roots. A degree-three nonzero polynomial has at most three distinct roots; each candidate must be tested and residual factors solved.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### The Rational Root Theorem as a search method

Curriculum reference: **The Rational Root Theorem as a search method** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** List the rational-root candidates for $2x^3-3x^2-8x+12$.

**Agent key:** Reduced candidates are $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12,\pm1/2,\pm3/2$. They require testing, not automatic acceptance.

**Worked example:** If a monic integer polynomial has constant term zero, how should rational-root search begin?

**Worked reasoning:** Extract a power of x first and record the zero root; then list candidates for the remaining nonzero constant.


#### Teaching sequence

Confirm integer coefficients, remove any factor x when the constant is zero, then list signed reduced ratios p/q with p dividing the constant and q the leading coefficient. Deduplicate before testing by exact substitution or synthetic division. Explain that this is a finite candidate set for rational roots, not a list of actual roots or of all real roots.

#### Respond to student reasoning

**First hint:** Which divisors of the constant and leading coefficient can form reduced fractions?

If candidates are declared roots without testing, evaluate one that fails. If zero constant is used to generate an unusable divisor list, factor x first. If exhausted candidates imply no roots at all, contrast x²−2.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Start with monic polynomials, then nonmonic coefficients and zero constants. Ask for a candidate list, verified roots and a precisely limited conclusion if none pass.

#### Assessment evidence

Require the theorem's integer-coefficient hypothesis, both signs, reduced fractions, exact testing and rational-only conclusions. Keep residual factors for further solving.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Solving cubic and quartic equations by degree reduction

Curriculum reference: **Solving cubic and quartic equations by degree reduction** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $x^3-2x^2+x-2=0$ over the complex numbers.

**Agent key:** Grouping gives $(x-2)(x^2+1)$, so roots are $2,i,-i$; three roots match the degree.

**Worked example:** Solve $x^4-5x^2+4=0$ and justify completeness.

**Worked reasoning:** Substitute $U=x^2$: $(U-1)(U-4)=0$, giving $x=\pm1,\pm2$. Four simple roots exhaust degree 4.


#### Teaching sequence

Find one verified factor, divide exactly and solve the remaining lower-degree factors. For a biquadratic, substitute U=x², solve its quadratic, restore x² for every U and recover both square-root branches in the stated number system. Count roots with multiplicity against the degree and substitute into the original polynomial.

#### Respond to student reasoning

**First hint:** After finding one root, which remaining factor still needs solving?

If only the first found root is returned, ask what the residual factor contributes. If a negative U is discarded in a complex task, revisit the number system. If ± is lost on restoration, solve x²=U rather than taking one chosen root.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Mix grouping, rational-root search and quadratic structure, including irrational or nonreal residual roots. Ask why an exhausted rational search alone is not a complete solver.

#### Assessment evidence

Require justified degree reduction, every residual solution, restored variables, original checks and completeness with multiplicity. Do not count a candidate list as a solution set.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $p=x^3-2x^2+x-2$, candidate integer roots divide $2$. Testing $p(2)=8-8+2-2=0$ certifies one root; division leaves $x^2+1$. Solving that factor over the complex numbers gives $i,-i$, so $2,i,-i$ is the complete set. Reconstruction $(x-2)(x^2+1)$ and the degree-three count check completeness; the candidate list itself supplies no roots.

Cue a learner who stops at $2$ with “What degree remains after removing one linear factor?”; then supply $(x-2)q(x)=p(x)$; only next provide $q=x^2+1$, leaving its roots. Fade on $x^3-x^2+4x-4=(x-1)(x^2+4)$ (keys $1,\pm2i$), initially supplying the verified root $1$. Label that root discovery assisted even if the remaining division is independent. Later remove the supplied factor on a fresh task.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
