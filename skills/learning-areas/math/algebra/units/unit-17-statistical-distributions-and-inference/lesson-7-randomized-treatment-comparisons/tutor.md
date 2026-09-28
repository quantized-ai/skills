# Tutor: Lesson 17.7: Randomized treatment comparisons

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check group means and assignment mechanism; establish sharp null before reshuffling labels. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A paired experiment is re-randomized by shuffling all labels freely across pairs. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** That creates allocations the design never allowed. Restrict swaps within pairs and preserve statistic direction. If design details are absent, request them or explicitly limit the proposed analysis.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Randomization distributions under no effect

**Diagnostic — ask and wait:** In a fixed-size two-group experiment, can randomization move every participant into treatment?

**Private diagnostic key:** no; group sizes must remain fixed.

**Teach in this order:** State sharp no-effect assumption; hold outcomes fixed; repeat allowed assignments; recompute the ordered statistic every time.

**Distinct worked model — reveal in steps:** Outcomes 1,2,4,5 stay fixed under a sharp null; assign two to treatment. Treatment-control differences are −3,−1,0,0,1,3 for the six equally likely pairs. This enumerates labels, not new outcomes, and requires the actual completely randomized design.

**Misconception response and hint ladder:** If outcomes are resampled freely, ask which part the original experiment randomized; next move only labels and preserve counts/blocks. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Four-person exact enumeration → larger simulated reassignment → blocked/paired design restrictions. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Sharp null; group-size/order; fixed outcomes; actual allocation mechanism; blocks/pairs; real output if simulation is claimed. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Use the same group order and statistic for observed and simulated comparisons. Hold outcomes fixed and reproduce the actual treatment-assignment mechanism. Explain the individual no-effect assumption and why changing the assignment design would simulate a different process.

### Significance, practical size, and causal scope

**Diagnostic — ask and wait:** A small tail probability proves every student benefits. Correct?

**Private diagnostic key:** no; it concerns incompatibility of data with the tested no-effect model.

**Teach in this order:** Compare observed statistic with valid null distribution; distinguish direction, magnitude and practical decision; bound causal and population scope separately.

**Distinct worked model — reveal in steps:** For differences −3,−1,0,0,1,3, observed 3 has one-sided tail 1/6 and absolute two-sided tail 2/6. Direction must be chosen beforehand. Even a practically tiny effect could be statistically unusual in a large experiment; practical scale and recruitment still matter.

**Misconception response and hint ladder:** If a large tail proves no effect, ask whether plausible nonzero effects were excluded; next distinguish absence of strong evidence from equivalence. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Tail calculation → compare practical/statistical importance → critique causal/generalization language. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Prespecified tail/ties; uncertainty; effect units/size; non-significance not equivalence; implementation and recruitment limits. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Count randomized statistics at least as extreme as observed using the prespecified rule. Interpret the tail proportion as evidence about the sharp no-effect model without claiming proof or equivalence. Separate practical magnitude and individual variation from statistical unusualness and restrict causal and population conclusions to the design’s support.

## Extended private calibration

**Prompt:** In a randomized experiment, treatment minus control mean is 5 points. A supplied no-effect randomization distribution has 18 of 1000 rearrangements with absolute difference at least 5. Interpret the evidence and scope.

**Private worked key:** The supplied two-sided tail proportion is 0.018. Under a sharp no-effect randomization model, such an extreme difference is uncommon, providing evidence against that model. It is not the probability that no effect is true. Random assignment supports a causal comparison for the experimental setting; population generalization requires recruitment evidence. Five points must be judged against a contextual practical threshold.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

For four fixed outcomes 1,3,5,7, assign exactly two subjects to treatment uniformly among the six subsets. Treatment-minus-control mean differences are −4,−2,0,0,2,4. If the observed groups give difference 4, the two-sided exact randomization tail is 2/6=1/3. Hold outcomes fixed under the sharp no-individual-effect model and reproduce the actual allocation mechanism. If the real experiment used matched pairs, these six unrestricted assignments would be the wrong reference design.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Preserve group sizes and observed outcomes while shuffling labels under the specified null; separate one/two-sided tails, randomization from sampling, effect size from significance and simulated from exact enumeration probabilities.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

Under a sharp no-effect model, take four fixed outcomes $2,4,6,8$ with exactly two participants assigned treatment uniformly from the six possible pairs. Treatment-minus-control differences are $-4,-2,0,0,2,4$ for treatment pairs $(2,4),(2,6),(2,8),(4,6),(4,8),(6,8)$. An observed difference $4$ has exact two-sided tail $P(|D|\ge4)=2/6=1/3$, including the negative extreme and ties. This is exact enumeration, not simulated output.

Cue “Which allocations could the original design actually produce?”; next list the six treatment pairs with fixed group sizes; then calculate the first difference, leaving the other five. Fade by changing outcomes while preserving the design. For matched pairs, unrestricted selection of any two would be invalid: reassignment must follow the within-pair mechanism. The tail is conditional on the no-effect model; it is not its probability of being true or evidence that every individual benefits.
