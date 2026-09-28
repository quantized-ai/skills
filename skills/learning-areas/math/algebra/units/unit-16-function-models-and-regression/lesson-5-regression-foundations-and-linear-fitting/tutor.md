# Tutor: Lesson 16.5: Regression foundations and linear fitting

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check means, graph pairs and arithmetic; provide a brief centered-product table if slope calculation blocks interpretation. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** Residuals −2 and 2 sum 0, so a student calls the model a perfect fit. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** SSE 8 and two nonzero residuals refute perfection. Ask whether each prediction equals its observation; next compare squared-error totals. Actual data entry remains a separate practical requirement.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Data entry, residuals, and least squares

**Diagnostic — ask and wait:** For observed 8 and predicted 10, give residual and squared error.

**Private diagnostic key:** −2 and 4.

**Teach in this order:** Preserve paired data and predictor/response orientation; plot before fitting; calculate signed residual then square; compare totals on identical observations.

**Distinct worked model — reveal in steps:** Predictions 4,4 for observations 2,6 yield residuals −2,2, sum zero but SSE=8. Predictions 3,5 give residuals −1,1, SSE=2. On these same observations and output scale, the second candidate fits better; future accuracy remains unproved.

**Misconception response and hint ladder:** If residual cancellation is used to claim perfection, ask whether either prediction equals its observation; next square each nonzero error. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** One residual → competing SSEs → actual paired-data entry/scatter plot and interpretation. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Residual sign/units; SSE; chosen family/response scale; same-data comparison; actual technology evidence where required. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Preserve input-output pairs and record the candidate family and prediction rule. Plot paired data; calculate predictions, observed-minus-predicted residuals, and SSE consistently. Explain squared-error minimization and qualify comparisons by data, scale, assumptions, and limits on future prediction.

### Linear regression and coefficient interpretation

**Diagnostic — ask and wait:** Why is a least-squares slope undefined when all x values equal 2?

**Private diagnostic key:** its denominator is zero; slopes cannot be uniquely identified.

**Teach in this order:** Compute means and centered products; match tool coefficient conventions; retain internal precision; interpret intercept only if x=0 has meaning.

**Distinct worked model — reveal in steps:** For (0,2),(1,2),(2,5), means are 1 and 3. Cross-deviation sum is 3; x-square sum is 2, so b=1.5 and a=1.5. Predictions 1.5,3,4.5 give residuals 0.5,−1,0.5. Interpret slope in y-units/x-unit.

**Misconception response and hint ladder:** If the first data value is forced as intercept, ask whether a fitted line must interpolate that observation; next calculate $a=\bar y-b\bar x$. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Hand-check small dataset → noisy tool fit → rescale input units or diagnose zero predictor spread. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Two distinct inputs; slope/intercept formula and units; actual tool output; intercept scope; residual check. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Record paired data, check that inputs vary, select linear regression with an intercept, and retain the coefficient convention and precision. Verify slope and intercept by regression sums or an equivalent calculation and use stored coefficients for prediction. Interpret coefficient units and identify when zero input or a prediction lies outside the observed or meaningful domain.

## Extended private calibration

**Prompt:** Fit a least-squares line to $(0,1),(1,3),(2,2)$. Interpret a positive residual and verify the fit.

**Private worked key:** $\bar x=1$, $\bar y=2$, slope $b=1/2$, intercept $a=3/2$. Predictions are $1.5,2,2.5$; residuals observed minus predicted are $-0.5,1,-0.5$, with SSE $1.5$. The positive middle residual means the model underpredicts by 1 response unit. Slope units are response units per input unit. A fitting tool should reproduce these values; a by-hand calculation alone does not demonstrate entering paired data in technology.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Use genuinely noisy data, repeated input values, changed units, and an input with zero spread that makes the ordinary slope formula undefined; require actual fitting-tool output where the objective calls for technology.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
