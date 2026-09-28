# Tutor: Lesson 17.5: Sampling distributions of means

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check mean versus individual observation and replacement; route missing sampling-design assumptions before constructing an interval. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A bootstrap interval for a population mean is said to contain 95% of individual observations. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** The simulation stores means, so calibration concerns repeated-procedure uncertainty about a mean. Ask what one plotted point represents; explain design/representativeness limits before reporting coverage.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Repeated-sample mean variability

**Diagnostic — ask and wait:** Are repeated sample means distributed like individual data?

**Private diagnostic key:** generally no; means average multiple observations.

**Teach in this order:** Draw repeated samples using identical n/design; record one mean per sample; build a second distribution and compare center/spread with individuals.

**Distinct worked model — reveal in steps:** Population values 0 and 4 are equally likely. Independent samples of size 2 yield means 0,2,4 with probabilities 1/4,1/2,1/4. Population SD is2; mean SD is√2. The center remains 2 while variability decreases.

**Misconception response and hint ladder:** If all sampled observations are pooled, ask which one number should represent each sample; next calculate and retain its mean only. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Enumerate n=2 means → compare sizes with simulation → explain why biased selection can remain tightly wrong. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Individual/sample-mean distributions; fixed design/n; repeatability; variability reduction conditions; bias not cured by n. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Preserve sample size and sampling design and record one mean per repetition. Distinguish distributions of sample means from pooled individual observations. Explain sample-size effects under stated sampling conditions and distinguish sampling variability from systematic bias.

### Simulation-based margin of error for a mean

**Diagnostic — ask and wait:** For observed 4,6,8, may a bootstrap sample be4,4,8?

**Private diagnostic key:** yes; empirical sampling is with replacement, size 3.

**Teach in this order:** Resample observed values with replacement at original n; store means; center errors at observed mean; choose declared percentile; interpret repeated-procedure uncertainty.

**Distinct worked model — reveal in steps:** Suppose explicitly supplied bootstrap absolute mean errors are 0,0.2,0.4,0.5,0.7,0.8,1,1.2,1.4,1.8. With nearest-rank 90th percentile, m is the ninth value 1.4; observed mean 6 gives[4.6,7.4]. This is an illustration of calibration, not a claimed simulation run or guaranteed 90% coverage.

**Misconception response and hint ladder:** If the interval is said to contain 90% of individuals, ask which statistic the simulation recorded; next contrast raw values and resample means. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Resample mechanism → percentile calculation → actual reproducible run and design/bias critique. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Empirical model; original n; absolute errors; percentile convention; design dependence; approximate coverage, not individual or posterior probability. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Use the observed values as the empirical population and repeatedly resample groups of the observed size with replacement when the stated design supports that approximation. Calculate absolute errors relative to the empirical model mean, extract the specified percentile, and form the interval in measurement units. Identify the fixed population mean as the target; explain approximate coverage, design limitations, and why it is not an interval for individual observations and cannot repair bias.

## Extended private calibration

**Prompt:** A random sample of size 36 from a large population has mean 53. Describe an empirical resampling model. Supplied output gives a 95th percentile of absolute resampled-mean errors of 4 units. Interpret the resulting margin and the effect of quadrupling sample size under comparable independent sampling.

**Private worked key:** Treat the observed values as an empirical population and repeatedly sample 36 with replacement, recording one mean per repetition. Calculate errors $|\bar x^*-53|$, then their 95th percentile. The supplied percentile gives approximate margin 4 and interval $[49,57]$. This approximates the stated random design when the population is large relative to the sample; a clustered or high-fraction design needs its own resampling model. Repeated-sampling coverage describes the procedure, not a 95% random chance attached to a fixed population mean after observing this interval. With independent draws and unchanged population spread, quadrupling size approximately halves the SD of the mean; the original simulated width is not an exact guarantee for a new design.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

For a small illustrative sample 2,4,6, the empirical resampling distribution for sample size 3 has 27 equally likely ordered draws with replacement. Record the mean of each ordered triple, not nine pooled values. The empirical center is 4; absolute mean errors range from 0 to 2. With the nearest-rank 95th-percentile convention, the 26th ordered error is 2, so the resulting illustrative interval is [2,6]. This exact enumeration demonstrates the procedure for a tiny empirical model; it does not establish adequate population coverage with n=3.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Separate individual spread from sampling spread; vary sample size and sample design, require a justified simulation center and interval method, and assess actual simulation separately from interpreting supplied output.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

In a toy population with equally likely values $0,2$, two independent draws with replacement produce ordered samples $(0,0),(0,2),(2,0),(2,2)$. Their means are $0,1,1,2$, with probabilities $1/4,1/2,1/4$. Individual SD is $1$, while the means have variance $1/2$ and SD $1/\sqrt2$. Each plotted point in the sampling distribution represents a whole sample mean, not one individual.

Cue “What statistic is recorded after each complete sample?”; next list the four ordered pairs; then calculate the first mean only, leaving the rest. Fade with a different two-value population. For empirical resampling from $4,6,8$, a valid size-three sample is $4,4,8$, mean $16/3$ and absolute error $|16/3-6|=2/3$. A single resample does not define a margin: repeat under the justified design, record the percentile convention, and interpret the interval as approximate procedure coverage for a mean. Actual execution remains separate evidence.
