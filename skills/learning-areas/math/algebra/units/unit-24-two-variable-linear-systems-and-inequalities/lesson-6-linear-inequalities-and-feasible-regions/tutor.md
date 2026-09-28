# Tutor: Lesson 24.6: Linear inequalities and feasible regions

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check single-inequality half-planes and simultaneous membership; model each contextual restriction explicitly. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A point satisfying a budget is accepted even though it violates a minimum-production constraint. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** Feasibility requires every constraint. Use a membership table across all originals, then retain lattice points if quantities are counts.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Boundary lines and half-planes

**Diagnostic — ask and wait:** For y<2x+1, is the boundary included?

**Private diagnostic key:** no; draw dashed.

**Teach in this order:** Graph equality first; determine inclusion; choose a nonboundary test point; shade the correct side and verify one point.

**Distinct worked model — reveal in steps:** For 2x+y≥4, boundary y=4−2x is solid. Test (0,0):0≥4 is false, so shade the other half-plane;(0,5) is included. Vertical boundaries x≤3 use the same test-point logic.

**Misconception response and hint ladder:** If 'greater than' always means above, ask whether y has been isolated and division sign handled; next substitute a test point directly. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Isolated y → standard-form/vertical boundary → strictness and membership. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Boundary equation; dashed/solid; test off boundary; orientation; original inequality check. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Identify the correct boundary and strictness, reverse the comparison for negative scaling, select shading using a test point, and identify insufficient information rather than assume an inclusion side.

### Intersections of half-planes

**Diagnostic — ask and wait:** Does a point in either of two shaded regions solve an AND system?

**Private diagnostic key:** no; it must lie in both.

**Teach in this order:** Draw each constraint separately; retain overlap; label boundary intersections; test candidates against every original restriction.

**Distinct worked model — reveal in steps:** System x≥0,y≥0,x+y≤5,y≥2 has feasible vertices (0,2),(3,2),(0,5). All boundaries are included. Checking (4,2) fails x+y≤5 despite satisfying the other three inequalities.

**Misconception response and hint ladder:** If union is shaded, ask which constraint a point outside the overlap violates; next evaluate a concrete counterexample. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Two half-planes → bounded polygon → empty/unbounded/strict-boundary region. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** All inequalities; intersections; strict edges; empty/unbounded cases; no visual-only membership claims. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Retain only the common intersection, distinguish region types, verify interior and boundary candidates in every original inequality, and do not list vertices as though they were all solutions.

### Formulating contextual feasible sets

**Diagnostic — ask and wait:** A budget allows x items at4 and y at6 for at most 24. What else is needed for counts?

**Private diagnostic key:** x,y≥0 integers.

**Teach in this order:** List every resource/minimum/maximum/domain restriction; choose axes with units; graph continuous constraints then restrict discrete decisions.

**Distinct worked model — reveal in steps:** A workshop needs at least 5 total items and has capacity 8 with 2x+y≤10 hours. Feasible counts satisfy 5≤x+y≤8,2x+y≤10,x,y∈ℤ≥0. (2,4) works; (4,4) fails hours. A continuous shaded polygon is only a relaxation.

**Misconception response and hint ladder:** If all lattice points in the first quadrant are retained, ask which resources each uses; next test against a constraint table. If the first prompt is insufficient, use the next indicated representation/setup; only then reveal one calculation or inference. Ask the student to finish the remaining reasoning.

**Practice progression:** Translate restrictions → graph feasible region → enumerate/test integer decisions. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Complete model; at least/at most; nonnegativity/integrality; units; feasible witness and rejection; assumptions explicit. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Translate every constraint, include all contextual restrictions, and check each proposed choice in the original inequalities before interpreting its coordinates.

## Extended private calibration

**Prompt:** Describe $x+y\le6$, $x\ge1$, $y>0$. Test $(1,5),(1,0),(7,1)$ and interpret x,y as counts when appropriate.

**Private worked key:** Boundary $x+y=6$ is solid, $x=1$ solid, $y=0$ dashed. $(1,5)$ is feasible; $(1,0)$ fails strict positivity; $(7,1)$ fails the sum bound. Counts add integrality; (1.5,2) belongs to the continuous region but not the integer feasible set.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Generate bounded/unbounded/empty feasible regions, strict/nonstrict boundaries and contextual constraints; a single satisfying test point selects a half-plane, not an entire intersection automatically.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
