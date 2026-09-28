# Tutor: Lesson 17.1: Data distributions and summaries

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check ordered data, averages and squared deviations; repair statistic conventions before comparing distributions. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A sample SD is reported as −2 meters because the sample has mostly below-mean values. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Deviations may be negative but squared-average-root spread cannot be. Ask the student to calculate each squared deviation; follow by comparing SD units with variance units.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Shape, center, and appropriate summaries

**Diagnostic — ask and wait:** For 1,2,2,3,22, which center better describes a typical value?

**Private diagnostic key:** median 2; mean 6 is pulled upward.

**Teach in this order:** Identify variable type; sketch shape; describe center, spread and unusual values together; choose summaries consistent with skew and outliers.

**Distinct worked model — reveal in steps:** Compare A:4,5,6 and B:0,5,10. Both means/medians are 5, but B is more spread. Plot values before summarizing; neither equal centers nor one summary establishes equal distributions. Category codes such as 1=red,2=blue have no meaningful average color.

**Misconception response and hint ladder:** If mean is always preferred, ask how changing 22 to 220 affects each center; next order the data and locate the middle. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Symmetric distribution → skew/outlier comparison → justify paired center/spread choices for a contextual report. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Shape and spread as well as center; categorical distinction; mean/SD versus median/IQR rationale; limitations of binned plots. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Match displays and numerical summaries to the variable type. Describe shape, center, and unusual values from a quantitative display. Calculate mean and median and explain how skewness or extreme values affect their interpretation and selection.

### Mean, standard deviation, and units

**Diagnostic — ask and wait:** For sample 3,3,3, what is s?

**Private diagnostic key:** 0; all deviations vanish.

**Teach in this order:** Center values, square deviations, choose N or n−1 from purpose, then take a root; track units and derive shift/scale behavior.

**Distinct worked model — reveal in steps:** Population 1,3,5 has mean 3 and variance 8/3, SD√(8/3). As a sample its variance is 4 and s=2. Transform y=−3x+7: mean becomes −2 and sample SD6, never −6.

**Misconception response and hint ladder:** If SD uses squared units, ask which step returns to original units; if negative, ask whether distances can be negative. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Compute population/sample summaries → interpret units → negative/zero scaling and shift. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Convention stated; n>1 sample condition; nonnegative SD; variance units; mean and SD transformation; zero-spread criterion. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Identify the intended population or sample convention and use its denominator. Calculate squared deviations, divide by the stated denominator, and take the square root with the correct units. Distinguish equal means from equal spreads and apply the shift and scale rules, including negative and zero scale factors.

## Extended private calibration

**Prompt:** For data $2,3,3,4,18$, choose and compute useful center and spread summaries. Then find population and sample standard deviations for $2,4,6$.

**Private worked key:** First dataset has mean 6 and median 3; the high outlier makes the median a more resistant typical value. For $2,4,6$, mean is 4, squared deviations total 8; population SD is $\sqrt{8/3}$ and sample SD is 2, in the original measurement units. State the chosen convention.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

For any data with mean 4 and SD 2, changing every observation by y=−3x+10 gives mean −2 and SD 6. A zero multiplier gives a constant dataset with SD 0. Two datasets 4,4,4 and 2,4,6 have the same mean but different spread; a mean alone does not describe the distribution.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Vary skew, gaps, clusters and outliers; ask for a display plus numerical summaries and require explicit population versus sample conventions and units.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

For measurements $2,4,6$, mean is $4$ and deviations are $-2,0,2$. Squared deviations total $8$. Population SD is $\sqrt{8/3}$; sample SD is $\sqrt{8/(3-1)}=2$. State which population or sampling purpose justifies the denominator. Squaring removes negative signs, and the final square root returns the original units.

Cue “Are these all population members or a sample estimating spread?”; next set up both denominators while keeping the same sum of squares; then compute the sample variance $4$, leaving SD and units. Fade by shifting every value up $10$: mean becomes $14$, sample SD remains $2$. Multiplying by $-3$ instead gives mean $-12$, SD $6$, because spread uses the scale's magnitude. For $2,3,3,4,18$, mean $6$ and median $3$ reveal why a high extreme changes the mean more; retain a display and spread discussion when judging a typical-value summary.
