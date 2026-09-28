# Tutor: Lesson 16.8: Prediction and model revision

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check observed data range, residual interpretation and context domains; route apparent 'certainty' to model-versus-data distinction. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A polynomial passes through every training observation, so the student guarantees better forecasts than a simpler fit. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Exact interpolation alone says nothing about unseen data. Compare held-out errors and mechanism/domain; if no validation exists, state that limitation rather than invent evidence.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Interpolation, extrapolation, and uncertainty

**Diagnostic — ask and wait:** A model fitted for x∈[2,6] predicts x=5 and x=8. Classify.

**Private diagnostic key:** interpolation and extrapolation.

**Teach in this order:** Locate prediction input relative to data; check model and physical domains; discuss observed residual variation and plausible extension; report defensible precision.

**Distinct worked model — reveal in steps:** A population model P=120−15t fits months 0–4. At t=10 it predicts −30, mathematically evaluable but impossible for a population. The failure restricts usable domain or motivates a revised family; it is not repaired by reporting −30.000.

**Misconception response and hint ladder:** If exact arithmetic is mistaken for certainty, ask whether the equation perfectly predicts new measurements; next separate calculation from model assumptions. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Within-range prediction → extrapolation → impossible output and uncertainty statement. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Data range; domain; feasible outputs; residuals not guaranteed bounds; prediction precision; no invented numerical interval. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Calculate predictions from the fitted equation, check permitted inputs and outputs, and locate them relative to the observed range. State the assumptions needed for extrapolation and identify limits arising from data coverage, residual variation, or competing models. Report predictions as estimates with justified precision; do not treat residual size or interpolation as a guarantee of accuracy.

### Model comparison and documented revision

**Diagnostic — ask and wait:** Model A has lower training SSE but higher error on held-out data. Which is automatically better?

**Private diagnostic key:** neither automatically; prediction evidence and context must be considered.

**Teach in this order:** Separate fit and validation observations; compare same response scale; examine plausible mechanism/domain; document equation, method, assumptions and reason for revision.

**Distinct worked model — reveal in steps:** On common training data A has SSE 2, B has 0. On two validation observations y=5,7, A predicts 4,8 (SSE 2), B predicts 1,11 (SSE 32). B interpolates training data yet predicts worse here; provisionally retain A and record limited validation size.

**Misconception response and hint ladder:** If zero training error decides the choice, ask what happened on unseen observations; next calculate both validation SSEs. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Compare common-data fits → validation comparison → write a revision report with remaining limitations. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Common data/scale; fitting versus validation; complexity; contextual plausibility; explicit retained/revised domain; complete model report. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Compare candidates on shared fitting data and scale and check predictions against separate observations when available. Use fit, mechanism, domain, and validation evidence to justify a provisional choice or a revision to coefficients, family, or domain. Document the selected model and its assumptions, supporting evidence, usable domain, and a specific remaining limitation.

## Extended private calibration

**Prompt:** A linear temperature model fitted over hours 1–5 is $T=18+2t$. Predict at $t=3$ and $t=12$. A later observation is $T(12)=34$. Revise the claim responsibly.

**Private worked key:** Predictions are 24 and 42 degrees. Hour 3 is interpolation; hour 12 is extrapolation and depends on continued linear warming. The later residual is $34-42=-8$ degrees, evidence to investigate model scope. One new point alone does not determine a uniquely justified replacement; document the new data, candidate models, residual comparison on common data, domain and uncertainty.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Require explicit comparison using a common dataset, feasible predictions and a documented reason for retaining or revising a model; do not invent a numerical prediction interval from an equation alone.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

For a model $T(t)=18+2t$ fitted over hours $1$–$5$, predictions at $3$ and $12$ are $24$ and $42$ degrees. The first is interpolation, the second extrapolation. If a later supplied observation at $12$ is $34$, residual is $34-42=-8$ degrees: the model overpredicts there. That is evidence against extending the same warming rate so far, not enough to select one unique replacement.

Cue “Which part of this prediction is supported by observed input coverage?”; next mark $[1,5]$ and the target times; then classify $3$, leaving $12$ and the assumption needed there. Fade by comparing two candidate models on the same held-out observations. If a learner chooses solely by training SSE, ask what independent prediction evidence says. A defensible revision can narrow the usable domain while documenting the new discrepancy; it need not invent an unsupported nonlinear fit or a numerical uncertainty interval.
