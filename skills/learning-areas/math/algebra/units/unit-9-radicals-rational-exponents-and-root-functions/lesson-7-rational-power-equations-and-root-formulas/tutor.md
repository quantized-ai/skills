# Tutor: Lesson 9.7: Rational-power equations and root formulas

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Root substitution, branch conditions and model parameters. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 9.2 curriculum](../lesson-2-rational-exponents-and-their-laws/lesson.md) and [tutor](../lesson-2-rational-exponents-and-their-laws/tutor.md); [Lesson 9.5 curriculum](../lesson-5-square-root-and-cube-root-functions/lesson.md) and [tutor](../lesson-5-square-root-and-cube-root-functions/tutor.md); [Lesson 9.6 curriculum](../lesson-6-radical-equations/lesson.md) and [tutor](../lesson-6-radical-equations/tutor.md). Load both files for any selected review.

## Teaching boundaries

Restore every admissible branch and state the assumed family for table-based modeling. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A student solves x^(2/3)=9 by raising both sides to 3/2 and returns 27. What is missing?

**Private reasoning key:** Let u=cuberoot(x). Then u²=9 gives u=±3, so x=±27. The single reciprocal-power operation selected only one branch.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Equations with rational powers

Curriculum reference: **Equations with rational powers** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Solve $x^{2/3}=4$ over the reals.

**Agent key:** Put $u=\sqrt[3]x$: $u^2=4$ gives u=±2, hence x=±8. A single principal reciprocal power would lose one branch.

**Worked example:** Solve $x^{-1/2}=1/3$.

**Worked reasoning:** Domain x>0; $1/\sqrt{x}=1/3$ implies $\sqrt{x}=3$, so x=9.


#### Teaching sequence

Reduce the exponent and introduce a root variable that exposes parity. In x^(2/3)=4 let u=cuberoot(x), solve u²=4 and restore x=u³, retaining both signs. For negative exponents impose nonzero conditions before reciprocating. An inverse-looking fractional power alone can select one branch and lose valid solutions.

#### Respond to student reasoning

**First hint:** What root substitution exposes admissible signs?

If only x=8 is returned, check x=−8 directly. If a negative exponent gives a negative answer by rule, interpret the reciprocal. If restoration ignores a domain condition, test the original power convention.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate odd/even denominator and numerator effects, negative exponents, zero targets and positive versus negative right sides. Use root substitution or justified sign/parity analysis to preserve all branches.

#### Assessment evidence

Assess reduced-exponent domains, all admissible branches, nonzero constraints and exact original verification. Do not apply unrestricted exponent reciprocity as a universal equation-solving rule.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Formulating square-root equations from tables

Curriculum reference: **Formulating square-root equations from tables** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** In the family $y=a\sqrt{x-h}+k$, the endpoint is $(1,2)$ and the curve contains $(5,8)$. Find the formula.

**Agent key:** $h=1,k=2$ and $8=2a+2$ give $a=3$: $y=3\sqrt{x-1}+2$.

**Worked example:** For that model, solve y=11 and assess whether a matching finite table proves this family uniquely.

**Worked reasoning:** $3\sqrt{x-1}=9$ gives x=10, valid. A finite table supports but does not uniquely determine the assumed function family.


#### Teaching sequence

State the square-root family and identify what data fix its endpoint, shift and scale. An endpoint (h,k) gives y=a√(x−h)+k; an independent allowed point determines a. A finite table alone cannot establish that family uniquely, so retain the modeling assumption. Solve a requested output only after checking it lies in the model’s range. With the endpoint (1,2) explicitly supplied, the table x=1,2,5,10 and y=2,5,8,11 is consistent with 3√(x−1)+2: use x=5 to determine scale and independently check the remaining rows. Obtain and inspect an actual technology table or graph for the candidate as required; record input, observed output, model prediction and residual (observed minus predicted), then interpret discrepancies. The supplied reference table is not evidence that a tool was used.

#### Respond to student reasoning

**First hint:** Which supplied feature fixes the endpoint rather than merely an ordinary point?

If an ordinary point is assumed to be an endpoint, ask what evidence makes its radicand zero. If the extra point repeats the endpoint, explain why scale remains free. If an unreachable output is squared into a candidate, check the unsquared sign.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Construct from endpoint plus point, compare table values, solve reachable and unreachable targets, and discuss alternate families fitting the same finite data.

#### Assessment evidence

Require stated family, sufficient independent data, verified parameters, remaining-data checks, domain/range and original target checks. Collect the required actual technology table/graph and interpretation; if unavailable, preserve symbolic evidence and mark that component pending. A finite fit supports a model but does not prove unique real-world behavior.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $x^{2/3}=4$, let $u=\sqrt[3]x$, allowed for every real $x$. Then $u^2=4$ gives $u=\pm2$, and cubing restores $x=\pm8$. Both original values equal $4$. A principal reciprocal power would select only one branch.

Cue “Can the underlying cube root be negative?”; set up $u^2=4$; then supply $u=\pm2$, leaving restoration and checks. Fade with $x^{2/3}=9$ (key $\pm27$). For a model in the stated family with endpoint $(1,2)$ and point $(5,8)$, shifts give $a\sqrt{x-1}+2$ and substitution gives $8=2a+2$, hence $a=3$. Target $11$ gives $x=10$; target $1$ is outside the range. The required technology check of additional table values remains separate from this symbolic construction and cannot be inferred from it.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
