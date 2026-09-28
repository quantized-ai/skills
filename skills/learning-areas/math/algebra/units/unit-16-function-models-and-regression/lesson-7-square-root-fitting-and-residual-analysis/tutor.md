# Tutor: Lesson 16.7: Square-root fitting and residual analysis

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check square roots, linear fitting and residual sign; distinguish predictor transformation from response transformation. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A student takes square roots of both x and y when fitting y=a+b√x. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Only predictor u=√x is transformed. Ask the student to substitute u into the stated family; response y and original-scale SSE remain unchanged. Unknown horizontal shift is not estimated here.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Square-root models from tables

**Diagnostic — ask and wait:** For x=0,4,16, what predictor enters a square-root fit?

**Private diagnostic key:** 0,2,4; y stays unchanged.

**Teach in this order:** Check nonnegative x and distinct predictors; transform x only; fit the line; substitute back and verify against original inputs.

**Distinct worked model — reveal in steps:** Observations (0,1),(1,3),(4,5) become (u,y)=(0,1),(1,3),(2,5), giving y=1+2u and $y=1+2\sqrt x$. At x=9 prediction is 7. Original-output residuals are minimized because only x was transformed.

**Misconception response and hint ladder:** If √y is also taken, ask which variable the family specifies; next write u=√x alongside unchanged y. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Exact transformed table → noisy technology fit → distinguish fixed-origin model from unknown horizontal shift. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** x≥0; distinct inputs; unchanged response; a+b√x family only; original SSE; meaningful prediction domain. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Check nonnegative, varying inputs; pair each transformed predictor with its original response and fit the linear relation using technology. Substitute the square-root predictor back into the fitted equation and verify original-input predictions. State mathematical and contextual domains and explain why the transformation does not fit an unknown horizontal shift.

### Residual patterns and model adequacy

**Diagnostic — ask and wait:** Residuals in input order are 1,−1,−1,1. Is their zero sum enough?

**Private diagnostic key:** no; the curvature may signal a missed pattern.

**Teach in this order:** Plot against original inputs with zero reference; examine curvature, spread and isolated points; investigate causes before making a revised fit.

**Distinct worked model — reveal in steps:** At x=1,2,3,4, paired residuals have ranges ±1,±2,±3,±4. Centering near zero does not remove increasing spread: later predictions have more variable observed errors. Inspect measurement process and candidate error model before revising or deleting data.

**Misconception response and hint ladder:** If one outlier is automatically deleted, ask what evidence shows error; next compare conclusions with and without it and document the choice. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Sign interpretation → curvature/changing spread → investigate influential unusual observations. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Actual residual plot; zero-centered versus patternless; under/overprediction; outlier investigation; limited adequacy claims. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Plot correctly signed residuals against original inputs with meaningful scales and a marked zero reference. Identify curvature, changing spread, and isolated large discrepancies and explain their possible implications. Propose a check or revision matched to the evidence and qualify what an apparently patternless plot establishes.

## Extended private calibration

**Prompt:** At $x=0,1,4,9$, measured values are $2,5,8,11$. Fit $y=a+b\sqrt x$. A different model gives ordered residuals $2,-1,-2,-1,2$: assess it.

**Private worked key:** Set $z=\sqrt x$, giving $z=0,1,2,3$ and $y=2+3z$, hence $y=2+3\sqrt x$ on $x\ge0$. The U-shaped residual sequence suggests missing curvature even if its average is zero; inspect plotted residuals and context before selecting a replacement family.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Include noisy square-root data with nonnegative varying inputs; explain that this method fits $a+b\sqrt{x}$ and cannot estimate an unknown horizontal shift; distinguish zero-centered residuals from patternless ones, inspect changing spread and outliers, and state the fitting method.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Additional teaching and execution activities

### Noisy predictor-transformation activity

Use original pairs $(0,2),(1,4),(4,9),(9,10)$. Transform x to u=√x, producing 0,1,2,3, but leave y unchanged. The means are 1.5 and 6.25; the centered-product sum is 14.5 and predictor-square sum5, so b=2.9 and a=1.9. Hence $\hat y=1.9+2.9\sqrt x$. Predictions 1.9,4.8,7.7,10.6 give residuals 0.1,−0.8,1.3,−0.6 and SSE2.70. Ask for the original-input residual plot and actual transformed-data fitting output. Contrast this with taking logs of y: transforming only the predictor leaves the response error units and minimized SSE scale unchanged.

## Decision model and graduated practice

For $x=0,1,4,9$ and responses $2,5,8,11$, transform only the predictor to $u=0,1,2,3$. The line is $y=2+3u$, hence $\hat y=2+3\sqrt x$ on $x\ge0$. The response and its units stay unchanged, so least squares still minimizes original-response SSE. This transformation does not estimate a hidden shift $h$.

If a learner takes $\sqrt y$ too, cue “Which symbol is the transformed predictor in the stated family?”; next set up pairs $(\sqrt{x_i},y_i)$; then work the pair $(4,8)\mapsto(2,8)$, leaving the others. Fade by giving the fitted $u$-line and asking for original-input predictions. Residuals $1,-1,-1,1$ sum to zero but have a U-shaped pattern; plotting them against the original inputs can expose missed structure. One large residual warrants checking data and context, not automatic deletion.
