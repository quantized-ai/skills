# Unit 13 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 13.1: Solution sets and equivalent systems

### Simultaneous solutions and reversible elimination

[Curriculum](lesson-1-solution-sets-and-equivalent-systems/lesson.md#concepts) · [Tutor guidance](lesson-1-solution-sets-and-equivalent-systems/tutor.md#simultaneous-solutions-and-reversible-elimination)

**A — Prompt:** Does replacing both equations of $x+y=3$, $x-y=1$ by only their sum preserve the system?

**Key:** No: $2x=4$ fixes x=2 but loses the constraint on y. Keeping one original equation also gives y=1.

**B — Prompt:** Explain why replacing the second equation by its difference with the first is reversible when the first remains.

**Key:** Add the retained first equation back to recover the original second. Both directions preserve the simultaneous solution set.

**Generation checks:** Distinguish valid row replacement from dropping an independent equation; verify all originals.

### Substitution and elimination in two variables

[Curriculum](lesson-1-solution-sets-and-equivalent-systems/lesson.md#concepts) · [Tutor guidance](lesson-1-solution-sets-and-equivalent-systems/tutor.md#substitution-and-elimination-in-two-variables)

**A — Prompt:** Solve $x+y=7$, $x-y=1$.

**Key:** Addition gives 2x=8, so x=4 and y=3; both original equations check.

**B — Prompt:** Solve $2x+y=5$, $y=x-1$ by substitution.

**Key:** $2x+x-1=5$ gives x=2,y=1. Substitution uses an equivalent expression for y.

**Generation checks:** Include intersecting, parallel, and coincident lines and exact checks beyond graphical estimates.

## Lesson 13.2: Three-variable linear systems

### Formulation and substitution

[Curriculum](lesson-2-three-variable-linear-systems/lesson.md#concepts) · [Tutor guidance](lesson-2-three-variable-linear-systems/tutor.md#formulation-and-substitution)

**A — Prompt:** Solve $x+y+z=6$, $x-y=0$, $z=2$.

**Key:** Set y=x and z=2: 2x+2=6 gives $(x,y,z)=(2,2,2)$; check all three.

**B — Prompt:** A mixture has x,y,z liters totaling 10, with y=2x and z=4. Formulate and solve.

**Key:** $x+y+z=10$, $y=2x$, $z=4$ imply 3x=6, so $(2,4,4)$ liters, all nonnegative.

**Generation checks:** Use three independent constraints and preserve contextual positivity or integrality.

### Gaussian elimination and back-substitution

[Curriculum](lesson-2-three-variable-linear-systems/lesson.md#concepts) · [Tutor guidance](lesson-2-three-variable-linear-systems/tutor.md#gaussian-elimination-and-back-substitution)

**A — Prompt:** Back-substitute in $x+y+z=6$, $2y+z=7$, $z=3$.

**Key:** z=3, then y=2, then x=1; solution $(1,2,3)$.

**B — Prompt:** Solve $x+y+z=6$, $2x+3y+z=11$, $x-y+2z=5$ using elimination. Explain why each operation preserves the solution set.

**Key:** Retain $R_1$. Replace $R_2$ by $R_2-2R_1$ to obtain $y-z=-1$ and $R_3$ by $R_3-R_1$ to obtain $-2y+z=-1$. Then replace $R_3$ by $R_3+2R_2$ (using the new $R_2$) to obtain $-z=-3$. Back-substitution gives $z=3$, $y=2$, $x=1$. Check the original left sides: $6$, $11$, $5$. Each row replacement is reversible by adding back the same multiple of the retained row. Swaps and nonzero scaling are also reversible; multiplication of an equation by zero would lose a constraint.

**Generation checks:** Include pivot swaps, contradictions, and free variables rather than forcing a unique solution.

## Lesson 13.3: Matrix representation and solution classification

### Augmented matrices and technology

[Curriculum](lesson-3-matrix-representation-and-solution-classification/lesson.md#concepts) · [Tutor guidance](lesson-3-matrix-representation-and-solution-classification/tutor.md#augmented-matrices-and-technology)

**A — Prompt:** Write an augmented matrix for $x+z=4$, $2y-z=1$ in order x,y,z.

**Key:** Rows are $(1,0,1\mid4)$ and $(0,2,-1\mid1)$; missing variables need zero entries.

**B — Prompt:** A calculator reports a tiny nonzero reduced-row entry rounded to 0. Does that certify an exact zero?

**Key:** No. Inspect precision and verify the original exact system; rounding can change apparent rank and solution classification.

**Generation checks:** Require actual technology output where specified and distinguish computed approximations from exact row identities.

### Contradictions and free variables

[Curriculum](lesson-3-matrix-representation-and-solution-classification/lesson.md#concepts) · [Tutor guidance](lesson-3-matrix-representation-and-solution-classification/tutor.md#contradictions-and-free-variables)

**A — Prompt:** Classify $x+y=3$, $2x+2y=6$ and describe all solutions.

**Key:** The second equation is redundant; let y=t, giving $(x,y)=(3-t,t)$ for real t.

**B — Prompt:** Classify reduced rows $x+2y=4$ and $0=5$.

**Key:** The contradiction makes the whole system inconsistent; no assignment can satisfy every row.

**Generation checks:** Parameterize every free variable independently and prove the family satisfies all constraints.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Simultaneous solutions and reversible elimination](lesson-1-solution-sets-and-equivalent-systems/tutor.md#simultaneous-solutions-and-reversible-elimination) | Require simultaneous interpretation, reversibility reasoning and identification of information loss. A final correct solution by coincidence does not justify an invalid transformation. |
| [Substitution and elimination in two variables](lesson-1-solution-sets-and-equivalent-systems/tutor.md#substitution-and-elimination-in-two-variables) | Assess a justified method, equivalent steps, complete solution set, both-original verification and geometric classification. Any valid alternative route is acceptable unless a particular method is the target. |
| [Formulation and substitution](lesson-2-three-variable-linear-systems/tutor.md#formulation-and-substitution) | Require variable definitions, a complete faithful system, consistent substitution, all-equation verification and contextual filtering. Do not claim three supplied statements are independent without inspecting their relationships. |
| [Gaussian elimination and back-substitution](lesson-2-three-variable-linear-systems/tutor.md#gaussian-elimination-and-back-substitution) | Assess forward elimination, correct current-row use, valid pivot handling, back-substitution, solution classification and substitution into all originals. A triangular starting example alone does not demonstrate elimination. |
| [Augmented matrices and technology](lesson-3-matrix-representation-and-solution-classification/tutor.md#augmented-matrices-and-technology) | Require consistent order, full coefficient/constant encoding, meaningful row interpretation and actual tool evidence where prescribed. Record unavailable technology as unassessed, never fabricate output. |
| [Contradictions and free variables](lesson-3-matrix-representation-and-solution-classification/tutor.md#contradictions-and-free-variables) | Assess row meaning, full-system consistency, pivot/free distinction, complete parameterization and original-family verification. Do not infer free-variable values from unused labels or force them to zero. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Solve $x+y=7,x-y=1$: “$(4,3)$.” | Correct pair; if explanation was not requested, method and reversibility are unassessed. Ask for reasoning without supplying the elimination. |
| Solve by substituting $y=7-x$, with both original equations checked. | Valid method. A separate explicit elimination objective remains unshown rather than making the result wrong. |
| Reduced rows $x+2z=4,y-z=1,0=0$: “$(4,1,0)$.” | One valid solution, not the complete family. Ask whether $z$ is forced to zero; complete answer is $(4-2t,1+t,t)$. |
| After the tutor supplies $z=t$, learner derives the two remaining coordinates. | Assisted free-variable choice with successful dependent-variable recovery; later collect an independent parameterization. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
