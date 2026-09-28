# Tutor: Lesson 25.7: Residuals, correlation, and causal claims

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check predictions, deviations and graphical pattern; causal claims require design information. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** r=0 is claimed to prove variables are unrelated. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Symmetric y=x² data can have r=0 with exact nonlinear dependence. Ask for the scatter plot before interpreting the coefficient; keep constant-variable undefined cases separate.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Residuals and model fit

**Diagnostic — ask and wait:** Observed y=9, predicted 7: residual?

**Private diagnostic key:** +2, model underpredicts.

**Teach in this order:** Pair each y with its own prediction; compute observed −predicted; plot against x; inspect curve, spread and isolated errors.

**Distinct worked model — reveal in steps:** Residuals in x order 2,0,−2,0,2 show curvature despite total 2 being small relative to values; inspect a residual plot with zero reference. A patternless-looking finite plot supports adequacy locally but cannot guarantee future predictions.

**Misconception response and hint ladder:** If positive residual means overprediction, ask which number is larger; next write 9−7 explicitly. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Residual signs → residual plot → compare adequacy and extrapolation limits. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Sign; original units; zero reference; structure/changing spread; observed-range scope. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Match each prediction to its observation, preserve residual sign and units, and explain why visible patterns or unusual residuals affect confidence in the model.

### Correlation coefficient

**Diagnostic — ask and wait:** Does r=0 rule out every relationship?

**Private diagnostic key:** no; symmetric curved data can have zero linear correlation.

**Teach in this order:** Plot first; interpret r as linear strength/direction; separate its unitless scale from slope; examine outlier sensitivity.

**Distinct worked model — reveal in steps:** For x=−1,0,1 and y=1,0,1, mean x=0 and mean y=2/3. Cross-products sum −1/3+0+1/3=0, so r=0 although y=x² exactly. Both variables vary; a constant variable would make r undefined.

**Misconception response and hint ladder:** If r is interpreted as units per x, ask whether changing units changes correlation; next contrast slope's units with r's bound. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Positive/negative r → same r/different slope → nonlinear/constant/outlier cases. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Actual correlation output where required; −1≤r≤1; undefined constant input/output; nonlinear caveat; outliers. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Associate the sign with direction and magnitude with linear strength, examine the scatter plot alongside the coefficient, and distinguish zero variation from a defined correlation of zero.

### Association and causation

**Diagnostic — ask and wait:** Ice-cream sales and swimming incidents rise together. Does buying ice cream cause incidents?

**Private diagnostic key:** no; temperature/season can influence both.

**Teach in this order:** Identify association; suggest specific alternative paths; inspect who selected exposure; qualify the claim to the design.

**Distinct worked model — reveal in steps:** Students choosing tutoring score differently from nonparticipants. Prior attainment, motivation or selection could explain part of the association; a randomized assignment with sound implementation would strengthen causal inference. A plausible mechanism alone does not settle it.

**Misconception response and hint ladder:** If correlation magnitude is offered as proof of cause, ask whether group assignment was controlled; next draw a common-cause explanation. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Name alternatives → compare observational/experimental designs → rewrite causal overclaim. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Reverse influence/confounding/selection/chance; design evidence; association versus causality; qualified statement. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** State what the data establish, name a relevant potential confounding or selection explanation, and identify the need for study-design evidence before asserting causation.

## Extended private calibration

**Prompt:** For $(0,1),(1,3),(2,2)$ and fitted $\hat y=1.5+0.5x$, calculate residuals and correlation. Does association prove causation?

**Private worked key:** Residuals $-0.5,1,-0.5$ and correlation $r=0.5$ (cross-deviation sum 1, both square sums 2). Technology should confirm the correlation. Positive r indicates positive linear association, not slope magnitude or causation; a lurking variable or reverse influence may explain an observational relationship. With a constant variable, r is undefined.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Include curved patterns with small r, influential outliers, constant-variable undefined r and contexts with plausible alternative explanations; inspect residual patterns, not only a summary coefficient.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
