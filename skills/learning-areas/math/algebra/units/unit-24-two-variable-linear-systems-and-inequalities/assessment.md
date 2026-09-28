# Private calibration: Unit 24: Two-variable linear systems and inequalities

These original prompts and checked reasoning anchors calibrate mathematical accuracy. They are **not a fixed student quiz** and are not a complete assessment blueprint. They also serve as worked examples in the paired tutors, so exposure makes them unsuitable for independent reassessment. Use [fresh-question generation](question-generation.md) and the curriculum coverage in each tutor. Break composite prompts into manageable turns. Equivalent justified solutions are valid.

## Lesson 24.1

[Curriculum](lesson-1-systems-and-graphical-solutions/lesson.md) · [Tutor](lesson-1-systems-and-graphical-solutions/tutor.md)

**Prompt:** Find the intersection of $y=2x+1$ and $y=-x+7$ and explain what a graphical solution represents.

**Checked reasoning:** Equate: $2x+1=-x+7$, so x=2 and y=5. $(2,5)$ satisfies both original equations. A graph estimates an intersection subject to scale and plotting precision; these exact equations permit exact confirmation.

**Coverage limit:** Include no-intersection and coincident-line graphs, imperfect plotting windows and exact versus approximate intersections; do not infer no solution just because an intersection is off-screen.

## Lesson 24.2

[Curriculum](lesson-2-solving-systems-by-substitution/lesson.md) · [Tutor](lesson-2-solving-systems-by-substitution/tutor.md)

**Prompt:** Use substitution on $y=3x-2$, $2x+y=13$; contrast replacing the second equation with $6x-2y=4$ or $6x-2y=5$.

**Checked reasoning:** First gives $2x+3x-2=13$, x=3,y=7. With $6x-2y=4$, substitution yields $4=4$, so the whole first line is the solution set. With right side 5 it gives $4=5$, so none.

**Coverage limit:** Include isolated coefficients ±1, fractions and cancellations; represent infinitely many solutions parametrically or by the common line, never merely as “all ordered pairs.”

## Lesson 24.3

[Curriculum](lesson-3-solving-systems-by-elimination/lesson.md) · [Tutor](lesson-3-solving-systems-by-elimination/tutor.md)

**Prompt:** Solve $2x+3y=12$ and $4x-3y=6$ by elimination, and justify why replacing the second equation with their sum preserves solutions when the first is retained.

**Checked reasoning:** Adding yields $6x=18$, x=3; then y=2. The transformed pair contains the first equation and their sum. Subtracting the first recovers the original second, proving reversibility. Keeping only the sum would lose a constraint and add extraneous pairs.

**Coverage limit:** Vary signs and required nonzero scaling factors; ask for the inverse row operation and test candidates in both originals.

## Lesson 24.4

[Curriculum](lesson-4-classification-and-choice-of-system-method/lesson.md) · [Tutor](lesson-4-classification-and-choice-of-system-method/tutor.md)

**Prompt:** Classify $x+y=3$ paired with $2x+2y=6$, with $2x+2y=7$, and with $x-y=1$. Choose an efficient method.

**Checked reasoning:** Respectively dependent (the common line), inconsistent (none), and unique $(2,1)$. Compare constant multiples in the first two; addition is efficient in the third. Justify classification algebraically and relate it to coincident, parallel and intersecting lines.

**Coverage limit:** Deliberately generate all three solution types, including horizontal/vertical cases; compare substitution, elimination and graphing without mandating one method for every problem.

## Lesson 24.5

[Curriculum](lesson-5-constructing-and-interpreting-linear-systems/lesson.md) · [Tutor](lesson-5-constructing-and-interpreting-linear-systems/tutor.md)

**Prompt:** A venue sells adult tickets for 8 credits and student tickets for 5. It sells 20 tickets for 130 credits. Model and solve, then explain a fractional-count solution in a similar model.

**Checked reasoning:** $a+s=20$, $8a+5s=130$ gives $3a=30$, hence a=10,s=10. Counts are nonnegative integers. A fractional result in a similar exact count model indicates no feasible count solution; do not silently round it. Both total count and revenue must be checked.

**Coverage limit:** Use mixture, price-plan break-even and rate contexts with consistent units, valid or deliberately infeasible solutions, and an explicit interpretation of each variable.

## Lesson 24.6

[Curriculum](lesson-6-linear-inequalities-and-feasible-regions/lesson.md) · [Tutor](lesson-6-linear-inequalities-and-feasible-regions/tutor.md)

**Prompt:** Describe $x+y\le6$, $x\ge1$, $y>0$. Test $(1,5),(1,0),(7,1)$ and interpret x,y as counts when appropriate.

**Checked reasoning:** Boundary $x+y=6$ is solid, $x=1$ solid, $y=0$ dashed. $(1,5)$ is feasible; $(1,0)$ fails strict positivity; $(7,1)$ fails the sum bound. Counts add integrality; (1.5,2) belongs to the continuous region but not the integer feasible set.

**Coverage limit:** Generate bounded/unbounded/empty feasible regions, strict/nonstrict boundaries and contextual constraints; a single satisfying test point selects a half-plane, not an entire intersection automatically.

## Coverage blueprint for fresh independent assessment

The examples above remain private calibration. Generate a new task for each selected capability; the rows below are a coverage ledger, not a fixed question order. The paired tutors now contain distinct concept diagnostics and worked models. Do not count either after exposure as fresh assessment.

| Lesson / concept | Required cases and evidence | Agent plan |
| --- | --- | --- |
| 24.1 — Simultaneous solution meaning | Simultaneous satisfaction; ordered pair; both checks; geometric meaning. | [Teaching plan](lesson-1-systems-and-graphical-solutions/tutor.md#simultaneous-solution-meaning) |
| 24.1 — Graphical solution and precision | Both graphs; scale; approximate versus exact; substitution; limited resolution. | [Teaching plan](lesson-1-systems-and-graphical-solutions/tutor.md#graphical-solution-and-precision) |
| 24.2 — Substitution and reduction | Equality replacement; grouping; back-substitution; both original checks. | [Teaching plan](lesson-2-solving-systems-by-substitution/tutor.md#substitution-and-reduction) |
| 24.2 — Identity or contradiction after substitution | Constant statements; entire line versus plane; original domain; meaningful infinite-solution description. | [Teaching plan](lesson-2-solving-systems-by-substitution/tutor.md#identity-or-contradiction-after-substitution) |
| 24.3 — Elimination by equation combinations | Whole-equation scaling; signs; recovery; both checks; suitable method choice. | [Teaching plan](lesson-3-solving-systems-by-elimination/tutor.md#elimination-by-equation-combinations) |
| 24.3 — Proof of solution-set preservation | Nonzero scaling; retained equation; inverse row operation; necessity and sufficiency; consequence versus full system equivalence. | [Teaching plan](lesson-3-solving-systems-by-elimination/tutor.md#proof-of-solution-set-preservation) |
| 24.4 — Unique, inconsistent, and dependent constraints | Constants included; vertical lines; exhaustive exceptional cases; common-set description. | [Teaching plan](lesson-4-classification-and-choice-of-system-method/tutor.md#unique-inconsistent-and-dependent-constraints) |
| 24.4 — Method selection and verification | Justified method choice; accurate execution; both equations; exact versus graphical evidence. | [Teaching plan](lesson-4-classification-and-choice-of-system-method/tutor.md#method-selection-and-verification) |
| 24.5 — Representing linked quantities | Independent constraints; units; nonnegative/integer domain; equality versus preference; original story checks. | [Teaching plan](lesson-5-constructing-and-interpreting-linear-systems/tutor.md#representing-linked-quantities) |
| 24.5 — Contextual solutions and comparisons | Domain feasibility; units; both constraints; no arbitrary rounding; meaningful comparison or inconsistency report. | [Teaching plan](lesson-5-constructing-and-interpreting-linear-systems/tutor.md#contextual-solutions-and-comparisons) |
| 24.6 — Boundary lines and half-planes | Boundary equation; dashed/solid; test off boundary; orientation; original inequality check. | [Teaching plan](lesson-6-linear-inequalities-and-feasible-regions/tutor.md#boundary-lines-and-half-planes) |
| 24.6 — Intersections of half-planes | All inequalities; intersections; strict edges; empty/unbounded cases; no visual-only membership claims. | [Teaching plan](lesson-6-linear-inequalities-and-feasible-regions/tutor.md#intersections-of-half-planes) |
| 24.6 — Formulating contextual feasible sets | Complete model; at least/at most; nonnegativity/integrality; units; feasible witness and rejection; assumptions explicit. | [Teaching plan](lesson-6-linear-inequalities-and-feasible-regions/tutor.md#formulating-contextual-feasible-sets) |

Record the task fingerprint, exact case, observed reasoning, assistance and status. Award only the demonstrated component; list remaining cases by name. Use an explanation/error-analysis or reversed representation for transfer, and separately observe any required graph, construction, fit or simulation.

## Annotated learner responses

**Calibration prompt:** Solve $x+y=7$, $2x-y=2$. For the reasoning version, add: “Show elimination, retain a second equation, and explain how the removed equation is recovered.” These examples calibrate the existing component-level evidence labels; they do not add a scoring scale.

| Actual response or support state | Judgment and next action |
| --- | --- |
| Bare prompt; learner replies “$(3,4)$.” | Correct result for what was asked. Reasoning was not elicited and remains unassessed; do not infer guessing or a misconception. Ask a neutral explanation follow-up if that evidence is needed. |
| Reasoning version; learner gives only “$(3,4)$.” | Result correct; specifically requested justification is missing. Name that omission, preserve the result evidence, and invite an explanation without supplying the method. |
| “Adding gives x=3, so all $(3,y)$ solve.” | The x consequence is correct but a constraint has been lost; y=4 still follows from the retained equation. |
| $y=7-x$ leads to $3x-7=2$ and $(3,4)$, checked in both originals. | Valid solution by substitution; the explicitly requested elimination-equivalence proof remains unassessed by this alternative. |
| Tutor supplies $3x=9$; learner then gives “$(3,4)$.” | Supported success. Preserve any earlier unaided work, but reassess the supplied decision on an unseen item before recording independent proficiency. |

A correction made before mathematical feedback remains independent under the guide. A clarification that merely asks the learner to show existing work does not itself supply a mathematical step; a targeted hint that teaches one does. A bare incorrect answer calls for working before selecting a misconception diagnosis.
