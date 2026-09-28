# Private calibration: Unit 30: Similarity and the Pythagorean theorem

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 30.1

[Curriculum](lesson-1-dilations-and-similarity-transformations/lesson.md) · [Tutor](lesson-1-dilations-and-similarity-transformations/tutor.md)

**Prompt:** Dilate P=(3,2) about C=(1,1) by factor 2, then translate by (-1,3). Recover P from the result. Compare lines through and away from C and a nonuniform stretch.

**Checked reasoning:** Dilation gives C+2(P-C)=(5,3), then translation gives (4,6). Invert translation to (5,3), then dilate about C by 1/2 to recover (3,2). Lines through C map onto themselves as sets although most points move; other lines map to parallels. Lengths double and angles stay equal. $(x,y)\mapsto(2x,y)$ generally fails similarity, e.g. changes a square to a nonsquare rectangle.

**Coverage limit:** Require experimental line/length/angle verification, arbitrary centers, contraction/enlargement and mixed pre-images; keep factors positive as specified and distinguish a line fixed as a set from every point fixed.

## Lesson 30.2

[Curriculum](lesson-2-triangle-similarity-criteria/lesson.md) · [Tutor](lesson-2-triangle-similarity-criteria/tutor.md)

**Prompt:** Triangles have sides 3,4,5 and 6,8,10. Justify similarity and scale factor. Explain AA by dilating one matched side to equal length.

**Checked reasoning:** Corresponding side ratios are all 2, giving SSS similarity, not congruence. For AA, dilate one triangle so a corresponding side matches; two corresponding angles plus the included matched side give ASA congruence, so the original triangles are similar. SAS similarity needs the included angle and equal ratios for both adjacent sides.

**Coverage limit:** Include embedded/shared-angle figures, separate AA/SAS/SSS justifications, misleading SSA data and proportionality only after a criterion has been established.

## Lesson 30.3

[Curriculum](lesson-3-triangle-proportionality/lesson.md) · [Tutor](lesson-3-triangle-proportionality/tutor.md)

**Prompt:** In triangle ABC, D lies on AB and E on AC with AD=2, DB=3, AE=4, EC=6. Establish DE parallel BC. In a second triangle, internal bisector AX meets BC at X, with AB=6, AC=9, BC=10; find BX and XC.

**Checked reasoning:** Ratios $AD/DB=AE/EC=2/3$ justify the proportionality converse, so DE is parallel BC. The forward theorem follows from AA; the converse uses the unique point dividing AC in the required ratio and a constructed parallel. For the bisector, $BX/XC=AB/AC=2/3$ and sum 10 gives BX=4,XC=6. A derivation can extend BA to F where CF is parallel AX; equal angles make AF=AC, and similar triangles BAX,BFC yield $BX/BC=AB/(AB+AC)$, hence the required ratio.

**Coverage limit:** Cover theorem and converse proofs, an auxiliary-parallel derivation of the internal bisector theorem, whole/part ratio distinctions and equal-side special cases; retain internal incidence and positive lengths.

## Lesson 30.4

[Curriculum](lesson-4-right-triangle-metric-relationships/lesson.md) · [Tutor](lesson-4-right-triangle-metric-relationships/tutor.md)

**Prompt:** A right triangle's hypotenuse altitude splits the hypotenuse into p=9 and q=16. Find altitude and legs; derive the Pythagorean theorem and contrast special right-triangle ratios.

**Checked reasoning:** c=25, altitude $h=\sqrt{pq}=12$, adjacent legs $a=\sqrt{cp}=15$, $b=\sqrt{cq}=20$. Similarity establishes the three relations; adding leg squares gives $a^2+b^2=c(p+q)=c^2$. For the converse, construct a right triangle with legs a,b and compare its exact hypotenuse with c using SSS. Square bisection gives $1:1:\sqrt2$; equilateral-triangle bisection gives $1:\sqrt3:2$ opposite 30°,60°,90°.

**Coverage limit:** Require correctly ordered similar triangles, exact converse conditions with the longest side, scaled integer triples, and derivations of both special ratios; do not accept rounded equality as proof of a right angle.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 30.1 — Dilation properties | k>0; center fixed; lengths scale k; angles; invariant versus pointwise fixed; k=1 special case. | [Teaching plan](lesson-1-dilations-and-similarity-transformations/tutor.md#dilation-properties) |
| 30.1 — Similarity and mixed compositions | Positive nonzero scales; correspondence; common ratio; angle preservation; reverse order; nonuniform scaling failure. | [Teaching plan](lesson-1-dilations-and-similarity-transformations/tutor.md#similarity-and-mixed-compositions) |
| 30.2 — AA, SAS, and SSS similarity | Nondegenerate positive sides; criterion; consistent ratio direction; AA derivation; included angle. | [Teaching plan](lesson-2-triangle-similarity-criteria/tutor.md#aa-sas-and-sss-similarity) |
| 30.2 — Similarity and congruence in geometric figures | Diagram hypotheses; criterion first; ordered correspondence; consistent sides; auxiliary segments justified. | [Teaching plan](lesson-2-triangle-similarity-criteria/tutor.md#similarity-and-congruence-in-geometric-figures) |
| 30.3 — Triangle proportionality and converse | Interior intersections; parallel premise/converse; whole versus segment; correspondence; uniqueness argument. | [Teaching plan](lesson-3-triangle-proportionality/tutor.md#triangle-proportionality-and-converse) |
| 30.3 — Internal angle-bisector theorem | Internal bisector; correct adjacent-side/base correspondence; auxiliary proof; nondegeneracy; midpoint iff adjacent sides equal. | [Teaching plan](lesson-3-triangle-proportionality/tutor.md#internal-angle-bisector-theorem) |
| 30.4 — Hypotenuse altitude and geometric means | Right-angle/altitude hypotheses; c=p+q; h²=pq,a²=cp,b²=cq; positive roots; explicit similarity correspondence. | [Teaching plan](lesson-4-right-triangle-metric-relationships/tutor.md#hypotenuse-altitude-and-geometric-means) |
| 30.4 — Pythagorean theorem and converse | Right premise versus conclusion; positive lengths; longest side; triangle existence; exact radicals; theorem/converse reasoning. | [Teaching plan](lesson-4-right-triangle-metric-relationships/tutor.md#pythagorean-theorem-and-converse) |
| 30.4 — Special right triangles | Both special families; angle-side correspondence; positive scale; exact radical simplification; derivation not memorized labels alone. | [Teaching plan](lesson-4-right-triangle-metric-relationships/tutor.md#special-right-triangles) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated learner responses

**Calibration prompt:** Right-triangle hypotenuse parts are 2 and 8. Find the altitude to the hypotenuse. For the reasoning version, add: “Justify the geometric-mean relationship using the smaller similar triangles.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “4.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “4.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “Altitude squared is $(2+8)2=20$, so altitude is $2\sqrt5$.” | That is the adjacent original leg, not the altitude. Preserve valid positive-root arithmetic and repair correspondence. |
| $h/2=8/h$ from ordered AA-similar triangles gives $h^2=16$, so $h=4$ since length is positive. | Valid ratio route; accept a complete equivalent triangle correspondence. |
| Tutor supplies $h^2=2\cdot8$; learner then gives “4.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
