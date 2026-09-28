# Tutor: Lesson 30.1: Dilations and similarity transformations

Read [lesson.md](lesson.md) for authoritative scope and objectives, then use this file as the agent's teaching plan. Read [agent-guide.md](../agent-guide.md) for mode/evidence rules and [question-generation.md](../question-generation.md) before creating tasks. Keys and worked solutions below are private until the student submits or requests instruction. These are calibration examples, not a reusable quiz.

## Readiness and routing

Check coordinates, vectors and rigid motions; separate center-relative scaling from origin scaling. Check only the prerequisite needed for the chosen concept; preserve the student's requested learn, practice or assess mode. A failed prerequisite calls for a short repair and return, not automatic completion or restart of an earlier unit. Stay within this lesson's curriculum; defer advanced methods that bypass its required reasoning.

## How to run this lesson

In **learn**, honor a direct explanation request immediately with the relevant teaching sequence and worked model. Use a short diagnostic only when it would help select the next teaching step; do not make it a prerequisite for receiving an explanation. When using a diagnostic, ask and wait before showing its key. Reveal one step at a time and ask for the reason or next step. In **practice**, use the three-stage progression for that concept, adapt the next case to the student's work, and fade assistance. In **assess**, skip compulsory preteaching and generate a new verified task covering a named case; keep its key hidden. Reference examples exposed here cannot supply independent reassessment evidence.

## Reasoning and error-analysis activity

**Ask:** A line through the dilation center is unchanged, so every point on it is claimed fixed. Ask the student to locate the first invalid inference, repair the reasoning, and explain a check or counterexample.

**Private reasoning and response:** The line is invariant as a set; points move along it for k≠1 except the center. Ask for a noncenter point's explicit image and its inverse.

If the student gives only a corrected answer, ask why the original method failed. If the reason is secure, request a different example where the distinction matters. If they remain stuck, use the targeted response below for the relevant concept and mark the attempt assisted.

## Concept teaching plans

### Dilation properties

**Diagnostic — ask and wait:** A dilation centered (1,2) has k=2. Image of(3,4)?

**Private diagnostic key:** (5,6).

**Teach in this order:** Use center-relative vectors; distinguish fixed center from invariant line; check length ratios and angle preservation; contrast 0<k<1 with k>1.

**Distinct worked model — reveal in steps:** For C=(−1,1),k=1/2,P=(5,3), vector P −C=(6,2) halves to(3,1), so P′=(2,2). A line through C remains the same set, but P moves unless k=1 or P=C; other lines map to parallel lines.

**Misconception response and hint ladder:** If coordinates are multiplied about a nonorigin center, ask which point must stay fixed; next subtract C first.

**Practice progression:** Origin dilation → nonorigin center → line images/fixed points. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** k>0; center fixed; lengths scale k; angles; invariant versus pointwise fixed; k=1 special case. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Use coordinate or dynamic measurements to verify both line cases and the length ratio; distinguish points fixed individually from a line mapped onto itself.

### Similarity and mixed compositions

**Diagnostic — ask and wait:** Does (x,y)→(2x,3y) guarantee similar figures?

**Private diagnostic key:** no; unequal directional scales can change angles/side ratios.

**Teach in this order:** Break composition into rigid and dilation steps; track intermediate points; invert in reverse order; test common length scale and angles.

**Distinct worked model — reveal in steps:** Dilate about origin by3 then translate (2,−1): P=(1,2)→(3,6)→(5,5). Invert by subtracting translation then dividing by3. Distances scale 3 despite translation; correspondence determines which side ratios compare.

**Misconception response and hint ladder:** If inverse translation is divided before being removed, ask which action occurred last; next undo that action first.

**Practice progression:** Similarity identification → mixed mapping → inverse and nonuniform counterexample. Change a meaningful case or representation before increasing arithmetic size. Reuse the student's error as the focus of a new task, not by repeating an exposed answer.

**Assessment case checklist:** Positive nonzero scales; correspondence; common ratio; angle preservation; reverse order; nonuniform scaling failure. Select independent tasks that collectively cover these cases and the curriculum row's full proficiency; a short session may leave named cases unassessed.

**Curriculum evidence contract:** Give a common ratio and complete correspondence, use a center away from the origin when specified, and distinguish a uniform scale factor from separate directional factors.

## Extended private calibration

**Prompt:** Dilate P=(3,2) about C=(1,1) by factor 2, then translate by (-1,3). Recover P from the result. Compare lines through and away from C and a nonuniform stretch.

**Private worked key:** Dilation gives C+2(P-C)=(5,3), then translation gives (4,6). Invert translation to (5,3), then dilate about C by 1/2 to recover (3,2). Lines through C map onto themselves as sets although most points move; other lines map to parallels. Lengths double and angles stay equal. $(x,y)\mapsto(2x,y)$ generally fails similarity, e.g. changes a square to a nonsquare rectangle.

This previously checked composite example can connect concepts after instruction. Split it into manageable turns; it does not replace the distinct diagnostic and worked model for each concept.

## Further task construction

Require experimental line/length/angle verification, arbitrary centers, contraction/enlargement and mixed pre-images; keep factors positive as specified and distinguish a line fixed as a set from every point fixed.

## Decision rehearsal and fading

**A fixed line need not have fixed points.** Dilate about $C=(1,2)$ by factor 3. Point $(2,2)$ maps to $(4,2)$, so line $y=2$ through C maps onto itself while that point moves. Line $y=4$ maps to $y=8$: its points have vertical displacement 2 from C, which becomes 6. The image is parallel to, and distinct from, the original line.

If the learner multiplies the absolute y-coordinate by 3, cue “Which point must remain fixed?” Next write $y'=2+3(y-2)$; then evaluate the center's y-coordinate and let them handle 4. Fade to factor $1/2$ about the same center, using both lines (images $y=2$ and $y=3$). Record actual coordinate or dynamic measurements for the experimental verification; a verbal claim of invariance is not a tool trace. For an inverse mixed composition, undo the last rigid motion before the dilation.

## Evidence, feedback and handoff

Track each named concept, the case/representation observed, the student's actual reasoning, correctness and assistance. A number without the required units, condition, explanation, proof or actual artifact supports only the demonstrated portion. Accept equivalent valid methods; recompute unexpected answers before judging them. A faulty generated task is removed from the record and replaced without penalty.

Use the shared guide's session evidence labels. Before declaring this lesson secure, check every required method/case, include independent transfer and keep observed construction/tool execution separate from a described plan. Report demonstrated strengths, helped attempts, remaining cases and one concrete next task. The local evidence rule is not a validated retention measure. See [private calibration bank](../assessment.md) and [sources and limits](../teaching-sources.md).
