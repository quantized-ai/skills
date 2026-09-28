# Tutor: Lesson 17.2: Normal distribution models

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check standardized distance and area interpretation; if normality is unsupported, assess suitability before using a normal CDF. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A student standardizes a skewed dataset and says it is now normally distributed. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Subtracting mean and dividing by positive SD changes location/scale, not skew shape. Ask for the histogram before and after; teach z as a relative position, not a normality transformation.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Normal shape and model appropriateness

**Diagnostic — ask and wait:** Does a bell-shaped histogram alone prove normality?

**Private diagnostic key:** no; normality is a model judgment requiring shape/context checks.

**Teach in this order:** Sketch center and equal SD steps; connect area to population fraction; inspect skew, multiple clusters and impossible-value probability before using the rule.

**Distinct worked model — reveal in steps:** Model scores with μ=50,σ=5: about 95% lie between 40 and 60. A different normal model of nonnegative waiting times with μ=2,σ=5 assigns substantial probability below 0, warning of a poor contextual approximation.

**Misconception response and hint ladder:** If 95% is called certain for a finite sample, ask whether the statement is model area or a guaranteed count; next distinguish expected and observed frequencies. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** 68–95–99.7 intervals → reverse endpoint reasoning → assess suitability with skew/bounds. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** σ>0; symmetry/unimodality; total area 1; approximate percentages; model appropriateness beyond mean/SD. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Evaluate normal-model suitability using symmetry, modality, unusual values, and contextual bounds. Locate intervals centered at the mean and assign the appropriate approximate normal percentages. Distinguish normal-model percentages from guarantees about an arbitrary dataset.

### Standard scores and normal areas

**Diagnostic — ask and wait:** For μ=30,σ=4,x=22, find z.

**Private diagnostic key:** −2, two SD below the mean.

**Teach in this order:** Draw and shade the event first; standardize each boundary; choose cumulative/complement/difference; confirm area is between 0 and 1.

**Distinct worked model — reveal in steps:** For X normal with μ=100,σ=15, event 85<X<130 becomes −1<Z<2. Using Φ(2)=0.97725 and Φ(−1)=0.15866 gives 0.81859. Among 200 modeled observations the expected count is 163.718, about 164, not a guaranteed total.

**Misconception response and hint ladder:** If two cumulative probabilities are added for an interval, ask what each shaded region contains; next remove the overlapping left tail. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Signed z → right/left tail → interval and expected count using actual table/tool evidence. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Event inequalities; correct tail convention; parameters; continuous endpoints; expected versus guaranteed counts; approximate numerical accuracy. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Use the specified mean and positive standard deviation to calculate signed standard scores. Match the stated event to cumulative areas, complements, or differences and verify the table or technology convention. Convert areas to percentages or expected counts and state the normal-model qualification.

## Extended private calibration

**Prompt:** Assume a modeled measurement is normal with mean 70 and SD 8. Standardize 86 and estimate the proportion between 62 and 78. Would the same procedure automatically suit a strongly skewed variable?

**Private worked key:** $z=(86-70)/8=2$. The interval 62–78 is within one SD of the mean, so about 68% under the stated normal model. Strong skew undermines that model; inspecting shape and context precedes normal-area calculations. A standard score can be computed for a nonnormal distribution but normal areas then need not apply.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

Under the stated normal model with mean 70 and SD 8, suppose a standard-normal table reports $\Phi(2)=0.97725$. Then the proportion above 86 is $1-0.97725=0.02275$, about 2.275%, and the expected count in 1000 independent modeled observations is 22.75 (about 23), not a guaranteed integer count. Check whether a supplied table gives left-tail area, right-tail area or area from the mean.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Use left, right and between areas, reverse percentile questions and nonnormal countercases; state normal assumptions and distinguish empirical-rule approximations from tool-based normal CDF values.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Additional teaching and execution activities

### Reverse normal-area reasoning

With an explicitly assumed normal model μ=40,σ=6 and a supplied standard-normal90th-percentile value z≈1.2816, the corresponding cutoff is x=μ+zσ≈47.69. Check that it lies above 40 and leaves about 10% to the right. If the question instead asks the bottom 10%, use z≈−1.2816 and obtain 32.31. Ask the student to shade the requested region before selecting a table/tool convention; do not infer normality merely from the availability of μ and σ.

## Decision model and graduated practice

Assume a normal model with mean $70$, SD $8$. Boundary $86$ has $z=(86-70)/8=2$, so the right-tail event is $P(X>86)=1-\Phi(2)$. The interval $62<X<78$ standardizes to $-1<Z<1$, giving $\Phi(1)-\Phi(-1)$, approximately $68\%$ by the empirical rule. Multiplying that model area by a population size yields an expected count, not a guaranteed count.

If a learner reports $\Phi(2)$ for the right tail, cue “Which side of the boundary does the event shade?”; next label $\Phi(2)$ as left-cumulative area; then set up $1-\Phi(2)$, leaving actual table/tool evaluation. Fade with a left-tail boundary and then a between event. Require a real table or correctly configured calculation when numerical area computation is assessed. Standardization alone does not change a skewed distribution into a normal one.
