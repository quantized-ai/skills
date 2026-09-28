# Tutor: Lesson 17.6: Sampling distributions of proportions

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check binary outcomes, proportions and percentage points; inspect all-success/all-failure edge cases before simulation. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** Ten successes give plug-in probability 1, margin 0, and a claim the population proportion is exactly 1. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** The empirical model cannot generate unseen failures; degeneracy does not establish certainty. Ask what samples the model permits and acknowledge inadequate uncertainty representation at this boundary.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Sample proportions and sampling variation

**Diagnostic — ask and wait:** At p=0.25,n=20, what is a sample with 6 successes?

**Private diagnostic key:** pHat=0.30; count 6 differs from proportion 0.30.

**Teach in this order:** Define success before drawing; keep n fixed within a comparison; record a proportion per sample; distinguish count and relative-frequency scales.

**Distinct worked model — reveal in steps:** For independent Bernoulli p=1/2,n=2, proportions 0,1/2,1 occur with probabilities 1/4,1/2,1/4. At n=8 the proportion SD√(p(1−p)/n) is half its n=2 value, while the count SD doubles.

**Misconception response and hint ladder:** If more variable counts imply less precise proportions, ask what denominator changes; next compare SD divided by n. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Compute pHat → enumerate or simulate repeated proportions → contrast n and dependence. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Binary outcomes; fixed true p versus pHat; independent versus design-specific sampling; count/proportion distinction; larger n effect under comparable designs. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Identify the success event and use its count over the full sample-size denominator. Preserve the stated probability and sampling mechanism and record one proportion per repeated sample. Compare variation on the appropriate scale and explain why count and proportion variability respond differently to sample size.

### Simulation-based margin of error for a proportion

**Diagnostic — ask and wait:** All 10 responses are yes. Plug-in pHat=1 gives margin 0. Is uncertainty zero?

**Private diagnostic key:** no; the plug-in model fails to represent unseen failures.

**Teach in this order:** Fit Bernoulli probability to observed pHat; simulate n trials per replicate; form absolute proportion errors; declare percentile and restrict endpoints to[0,1].

**Distinct worked model — reveal in steps:** For n=50, pHat=0.60, suppose a documented simulation's95th percentile absolute error is0.14. Interval[0.46,0.74] has margin 14 percentage points, not 14% of0.60. Its reliability depends on sampling, adequate empirical variation and the approximation.

**Misconception response and hint ladder:** If endpoint truncation is said to guarantee coverage, ask whether biased sampling changed; next separate feasible endpoints from calibration validity. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Compute margin/percentage points → actual plug-in simulation → extreme proportions and design critique. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Original n/pHat; absolute errors; percentile; probability bounds; endpoint degeneracy; bias/dependence; repeated-procedure interpretation. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Specify sample size, fitted probability, and the sampling assumptions that justify the simulation; identify conditions making it unreliable. Extract the specified absolute-error percentile, form the interval within the permissible proportion range, and convert its margin to percentage points correctly. Distinguish coverage of a fixed population proportion from individual outcome frequency or posterior probability, and reject zero-uncertainty claims from degenerate simulations.

## Extended private calibration

**Prompt:** A random sample has 120 successes among 200 observations. Describe a plug-in Bernoulli simulation. Supplied simulated absolute errors have 95th percentile 0.07. Form an approximate interval and explain what fails if all 200 responses were successes.

**Private worked key:** $\hat p=0.60$; simulate repeated independent samples of 200 with probability 0.60, record each proportion and compute $|\hat p^*-0.60|$. The supplied 95th percentile 0.07 gives $[0.53,0.67]$. For 200 successes the fitted probability is 1 and every simulated proportion is 1, producing a zero margin that does not establish zero real uncertainty. The margin is seven percentage points, not seven percent of 0.60. It depends on the sampling process, size and underlying proportion used in the simulation. A volunteer poll does not inherit this justification merely by having 200 responses.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

With fixed Bernoulli probability p=0.4, count variance is np(1−p), while proportion variance is p(1−p)/n. Increasing n from 100 to 400 changes count SD from $\sqrt{24}$ to $\sqrt{96}$ (doubling) and proportion SD from $\sqrt{0.0024}$ to $\sqrt{0.0006}$ (halving). This comparison assumes independent comparable sampling. Truncating a plug-in interval at 0 and 1 respects parameter bounds but does not repair the method's poor coverage near the boundaries.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Vary success definitions, denominators and proportions near boundaries; state simulation assumptions and use an appropriate bounded interval method instead of pretending truncation repairs unjustified coverage.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

With $120$ successes out of $200$, $\hat p=0.60$. A plug-in simulation uses success probability $0.60$ and $200$ draws per repetition, recording one proportion each time. A supplied absolute-error percentile $0.07$ gives $[0.53,0.67]$, or $60\%\pm7$ percentage points. The margin is not $7\%$ of $0.60$.

Cue “Does one simulated result record a count or a proportion?”; next set up $\hat p^*=X^*/200$ and $|\hat p^*-0.60|$; then calculate a hypothetical count $130$ as proportion $0.65$ and error $0.05$, leaving the next repetition. Fade by supplying a short collection of simulated errors for a stated percentile convention. At all-success data, fitted $p=1$ allows no simulated failures: zero spread reveals a degenerate approximation, not certainty about the population. Increasing repetitions of that same model cannot reveal outcomes it assigns probability zero.
