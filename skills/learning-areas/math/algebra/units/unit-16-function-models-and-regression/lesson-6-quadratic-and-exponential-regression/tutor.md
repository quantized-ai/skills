# Tutor: Lesson 16.6: Quadratic and exponential regression

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check exponential/logarithmic inverse meaning, scatter plots and fitting parameters; route log-domain mistakes before using tools. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A student compares original-output quadratic SSE with exponential log-output SSE and picks the smaller number. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Different scales make that comparison invalid. Recompute both candidates' predictions and residuals in original units on identical data; separately report each fitting objective.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Quadratic fitting

**Diagnostic — ask and wait:** Three distinct inputs lie on y=2x+1. Must quadratic regression have a vertex?

**Private diagnostic key:** no; a=0 gives a linear result.

**Teach in this order:** Fit in original response units; inspect coefficient a before a vertex formula; locate vertex relative to observed and contextual domains.

**Distinct worked model — reveal in steps:** At x=0,1,2,3, outputs 3,2,3,6 fit $x^2-2x+3$. Vertex input −(−2)/2=1 and output 2. It is a model minimum; if permitted x≥2, the vertex lies outside the usable domain.

**Misconception response and hint ladder:** If every three-point fit is called genuinely quadratic, ask whether second differences are nonzero; next test a=0. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Exact quadratic → noisy additional observations using technology → degenerate fit or inaccessible vertex. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Three distinct inputs; original-output SSE; approximate versus interpolating fit; a=0; vertex interpretation/domain. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Check for at least three distinct inputs; record the three fitted coefficients, predictions, and original-output residuals. Distinguish interpolation from noisy-data least squares and identify a zero leading coefficient. Calculate and interpret predictions and any quadratic vertex within a justified domain without treating fitted values as observations.

### Exponential fitting and fitting scale

**Diagnostic — ask and wait:** Can y=0 be log-transformed for exponential regression?

**Private diagnostic key:** no; ln0 is undefined.

**Teach in this order:** Identify positive response family and input spacing; transform outputs; fit log line; back-transform coefficients; recompute original-scale predictions and residuals.

**Distinct worked model — reveal in steps:** Data (0,8),(1,4),(2,2) give ln y=ln8−x ln2, so a=8,b=1/2 and $\hat y=8(1/2)^x$. For noisy data this procedure minimizes log-scale SSE, which weights relative errors differently from original-scale SSE.

**Misconception response and hint ladder:** If the log-line intercept is reported as a, ask what ln a equals; next exponentiate the intercept. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Exact growth/decay → noisy log fit with actual output → compare fitting scales or reject nonpositive observations. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** a>0,b>0; b=1 case; coefficient units/meaning; log versus original objective; back-transform; original residuals. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Record paired data, the exponential family, the fitting method, and the response scale of its minimized errors. For log-response fitting, verify positive outputs and varying inputs, fit the transformed line, and correctly back-transform both coefficients. Interpret initial level and growth or decay factor; compute original-scale predictions and residuals and distinguish the two fitting criteria.

## Extended private calibration

**Prompt:** Tables have inputs $0,1,2,3$ and outputs Q: $1,2,5,10$ or E: $3,6,12,24$. Fit the appropriate family and explain what changes for noisy exponential data.

**Private worked key:** Q fits $q(x)=x^2+1$ exactly; E fits $e(x)=3\cdot2^x$ exactly. For E, $\ln y=\ln3+x\ln2$. With noise, least squares on $\ln y$ minimizes squared log residuals, not squared residuals in original output units; the two fits generally differ. Log fitting requires positive observed outputs.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

Before claiming a quadratic fit, check at least three distinct input values. Data (0,1),(1,3),(2,5),(3,7) have a best quadratic fit with leading coefficient zero: the fitted relationship is linear and the quadratic-vertex formula would divide by zero. For a log fit $\ln y=\alpha+\beta x$, back-transform both coefficients: $y=e^\alpha(e^\beta)^x$, not $\alpha\beta^x$.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Fit noisy quadratic and exponential datasets with a stated objective; keep enough distinct inputs, state whether the tool fits on original or log scale, and compare residuals in the same units rather than comparing incompatible reported fit scores.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Additional teaching and execution activities

### Noisy fitting activity with independently checked calibration

Provide quadratic data $(-1,2),(0,1),(1,3),(2,6)$. Ask the student to enter all four pairs, choose quadratic-family least squares, and show coefficients and residuals. A by-hand normal-equation check gives $\hat y=x^2+0.4x+1.3$. Predictions are1.9,1.3,2.7,6.1; residuals0.1,−0.3,0.3,−0.1; SSE0.2. The model vertex is at x=−0.2 with y=1.26; it is a fitted feature, not an observed pair. If the student's output differs, check coefficient order and pair entry before blaming arithmetic. If data-entry evidence is unavailable, assess interpretation of this supplied result and leave execution unassessed.

For exponential data $(0,2),(1,5),(2,8)$, a log-response fit has slope $\beta=\ln2$ because the centered x-values are−1,0,1, and intercept $\alpha=(\ln2+\ln5+\ln8)/3-\ln2=\frac13\ln10$. Thus $a=\sqrt[3]{10}$ and b=2; predictions are approximately2.154435,4.308869,8.617739 and original residuals approximately−0.154435,0.691131,−0.617739. This fit minimizes log-output SSE. Ask the student to record the fitting method and calculate original-output SSE (approximately0.8831); do not label it the original-scale least-squares optimum. An independent original-scale fitting comparison needs an actual fitting result, not an assertion that both objectives coincide.
