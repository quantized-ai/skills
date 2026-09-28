# Tutor: Lesson 17.4: Probability simulation and model checking

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check probability weights, repeated trials and event definition; distinguish a proposed simulation from observed execution. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** For four fair tosses with H=4, a student reports 1/16 as a prespecified two-sided tail. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Two-sided |H−2|≥2 includes H=0 as well as4, giving 2/16. Ask which outcomes are equally far from the null center; retain directional 1/16 only for a direction chosen beforehand.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Random trials and empirical frequencies

**Diagnostic — ask and wait:** Use digits 0–9 for success probability 0.3.

**Private diagnostic key:** assign exactly 3 digits to success; repeat independent draws.

**Teach in this order:** Specify probability map, replacement/dependence and whole trial; record one event indicator per trial; distinguish draws within a trial from repetition count.

**Distinct worked model — reveal in steps:** To model at least one success in two independent p=0.3 trials, one simulation trial contains two digits; record whether either is0,1,2. Exact probability is1−0.7²=0.51, a check on many-trial frequency, not the value every simulation must return.

**Misconception response and hint ladder:** If probability is estimated from successes among individual digits, ask what the requested event counts; next box the two draws constituting one trial. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Single draw → compound event → run/document repetitions and compare independent runs. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Correct generator weights; replacement; trial/statistic definition; repetitions; empirical variation; real runs distinguished from proposed procedures. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Map generator outcomes to the required probabilities and preserve independence or dependence and replacement rules. Define a complete trial, recorded event or statistic, sample size, and repetition count before running the simulation. Calculate event frequency and explain why valid simulations differ and why more repetitions improve stability rather than guarantee exactness.

### Consistency of a chance model with observations

**Diagnostic — ask and wait:** A model predicts a fair coin. Is four heads in four tosses impossible?

**Private diagnostic key:** no; probability 1/16 for that specified directional event.

**Teach in this order:** State model and statistic before examining observations; choose directional/two-sided rule; reproduce sample mechanism; interpret tail conditional on model.

**Distinct worked model — reveal in steps:** Before observing, choose statistic H among 4 tosses and two-sided extremeness |H−2|. Observation H=4 has extremeness 2; outcomes H=0 or4 count. Exact tail 2/16=1/8. Simulations must preserve four tosses and include equality in the tail.

**Misconception response and hint ladder:** If 1/8 becomes 'probability the coin is fair', ask what was assumed in generating tosses; next restate P(extreme data | fair model). If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Exact small space → simulated tail → critique changed-after-seeing-data extremeness. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Same n/mechanism; prespecified tail; ties counted; simulation uncertainty; neither proof nor posterior model probability. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** State the model, sample size, statistic, and directional or two-sided rule before examining the results. Generate comparable datasets and calculate the proportion of statistics at least as extreme as observed. Interpret that proportion as model-conditional evidence and distinguish unlikely results from impossible results.

## Extended private calibration

**Prompt:** A fair-coin model predicts heads probability 0.5. In 200 supplied simulated repetitions of 20 tosses, 6 have at least 15 heads. A real batch has 15 heads. Interpret the simulation.

**Private worked key:** The supplied one-sided tail estimate is $6/200=0.03$ under the fair-coin model. It is unusual in that chosen direction, not impossible and not a 3% probability the model is true. More repetitions reduce simulation noise, not observational bias. For a two-sided question, include equally extreme low counts and recompute.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

For a model with success probability 0.3, map a uniform digit 0–9 to success for 0,1,2 and failure otherwise; draw independent digits with replacement for independent trials. A complete simulated sample of size 20 uses 20 draws and records one count or proportion. Drawing without replacement from just those ten digits produces dependence and cannot simulate the same 20 independent trials.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Simulate a fully stated chance process, specify the statistic and tail before inspecting results, label supplied versus newly generated output, and compare observed data to the model rather than merely to its expected value.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).

## Decision model and graduated practice

For a model with success probability $0.3$, assign three of ten equally likely digits to success. One trial of four independent draws records the success count; many complete four-draw trials produce the statistic's distribution. Repeating individual draws without grouping them into trials would estimate a different object.

For four fair-coin tosses, all $16$ ordered outcomes are equally likely. A prespecified high-head-count event $H\ge4$ has probability $1/16$. A prespecified two-sided distance event $|H-2|\ge2$ includes all heads and all tails, giving $2/16=1/8$. Cue “Which low outcome is equally distant from the model center?”; next write the absolute-distance rule; then identify $H=0$, leaving the tail count. Fade by defining the extremeness rule before revealing an observed count. Label enumeration as enumeration and supplied simulation counts as supplied; neither is an unperformed simulation run.
