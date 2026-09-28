# Tutor: Lesson 17.9: Probability-based decisions

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check sample spaces, fractions and table margins; separate fairness criteria from decision preferences. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A die allocates one prize among five students using faces 1–5, with face 6 also assigned to student 1. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Student 1 receives probability 1/3 versus 1/6 for others. Reroll 6 or use another uniform mechanism; fair selection does not guarantee balanced outcomes in one short run.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Fair random allocation

**Diagnostic — ask and wait:** How can one of5 students be selected fairly using a die?

**Private diagnostic key:** assign 1–5 and reroll 6; do not award 6 to one student.

**Teach in this order:** Define what fairness means (equal selection or allocation probabilities); enumerate allowed outcomes; map generator states evenly; preserve required group sizes.

**Distinct worked model — reveal in steps:** Randomly allocate 4 students to two labeled teams of2: choose uniformly one of6 subsets for team A, remainder B. Each student has inclusion probability 1/2. Alternating arrivals may systematically separate arrival patterns and is not the same random mechanism.

**Misconception response and hint ladder:** If a redraw is called unfair, ask for each student's eventual probability; next show symmetry among the five accepted faces. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Equal one-person draw → fixed-size allocation → detect unequal generator mapping. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Explicit fairness criterion; reproducible mechanism; equal probabilities; allocation constraints; fairness not identical realized groups. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** State the eligible set, fairness criterion, generator mapping, and repetition policy. Calculate eventual selection probabilities including rejected outcomes and verify that the procedure selects with probability one. Identify unequal mappings and justify a revision achieving the stated allocation goal.

### Conditional probabilities and decision tradeoffs

**Diagnostic — ask and wait:** Among 100 people,20 have a condition;16 of these and 8 of the other 80 test positive. Find P(condition|positive).

**Private diagnostic key:** 16/24=2/3.

**Teach in this order:** Build a complete count table; define the conditioning group; compare relevant error probabilities; state decision values separately from probability calculations.

**Distinct worked model — reveal in steps:** Rule A correctly flags 16 true cases and 8 false positives; Rule B flags 12 true cases and 2 false positives. A detects more cases; B causes fewer false alarms. A preferable decision needs consequences/costs, not only overall accuracy or one conditional rate.

**Misconception response and hint ladder:** If16/20 answers the reversed conditional, ask which group is already known; next circle only 24 positive cases. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Conditional table → unequal base rates → compare false-positive/negative tradeoffs without inventing values. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Correct denominators; base rates; reversed conditionals; zero-conditioning case; consequences and uncertainty; no uniquely optimal choice without criteria. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Organize true conditions and test outcomes with consistent error counts and group totals. Use the correct conditional denominator, distinguish reversed conditional probabilities, and explain the role of base rates. Compare expected consequences using stated probabilities and costs and identify how another objective or cost assignment could change the decision.

## Extended private calibration

**Prompt:** Allocate one prize fairly among five students using a six-sided die. In a separate decision, a test flags 9 of 10 affected people and 18 of 90 unaffected people; among those flagged, what proportion are affected?

**Private worked key:** Assign faces 1–5 to students and reroll 6; symmetry gives each eventual probability $1/5$. Of 27 flagged, 9 are affected, so $P(\text{affected}\mid\text{flagged})=1/3$, distinct from sensitivity $9/10$. A policy choice also depends on costs of missed cases and false flags, not sensitivity alone.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Additional worked coverage

The die procedure terminates with probability one because the chance of still rerolling after k draws is $(1/6)^k\to0$. Each student's eventual win probability is $(1/6)/(1-1/6)=1/5$. For the hypothetical test counts in the main anchor, suppose a false action costs 2 units and a missed affected case costs 10. Acting on every flagged result costs 18×2 + 1×10=46 expected-cost units per the stated 100-person model, versus 10×10=100 for never acting. Acting on everyone costs 90×2=180. Different costs may reverse which policy is preferred; these are invented educational costs, not real medical advice.

Use this reasoning as instruction or private calibration. Generate a fresh independent counterpart after exposure; this is not a fixed reassessment task.


## Further task construction

Use transparent fair allocations and contingency tables with nonzero conditioning totals; vary base rates and decision costs without presenting medical or real-world policy advice as established by an invented example.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
