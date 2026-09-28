# Unit 13: generating fresh questions

Read the [agent guide](agent-guide.md) and the selected curriculum/tutor pair via [SKILL.md](SKILL.md#lessons). Generate new questions for every quiz, including the first. The [bank](assessment.md) calibrates correctness and coverage; it is not a fixed test sequence.

## Construction and validation

Select the exact curriculum concept and required proficiency before choosing numbers. Use the task families below and the tutor’s concept guidance. Keep arithmetic, step count, abstraction, and prerequisites appropriate to the requested difficulty. On a retake preserve difficulty unless the student requests a change. A longer quiz can cover several task families; a short quiz reports sampled coverage only.

Construct a complete prompt and independently solve that final prompt. Specify domain, parameters, units, geometry or graph information, and exact versus approximate expectations. Check every restriction, degenerate case, and claimed solution count. Reject underdetermined or contradictory data unless diagnosing that defect is explicitly the task. Verify by an appropriate independent computation or derivation; do not grade from an intended answer alone.

Vary representation, reasoning direction, sign patterns, boundary cases, contextual assumptions, and coefficient data. A numerical variant can support procedural practice but does not by itself demonstrate transfer from a worked template. For transfer, ask for construction, interpretation, critique, or a different representation while retaining the same curriculum concept. Never add later topics solely for novelty.

## Construction recipes for this unit

Construct unique systems from a known solution and an independently verified full-rank coefficient matrix, then solve the displayed equations without using the planted answer. Construct dependent systems from reversible combinations and inconsistent systems by changing a constant in a dependent row; verify classification exactly. Retain variable order and contextual constraints. For technology requirements record actual inputs/output and precision rather than a fabricated reduced form.

## Task families and evidence checks

Each row distinguishes ways to vary a task from the mathematical evidence that must survive that variation. Choose missing cases deliberately. A short quiz samples these requirements; it must not pretend to cover the full unit. Read the linked tutor and curriculum pair before generating.

| Curriculum concept | Practice-to-transfer progression | Key and evidence checks |
| --- | --- | --- |
| [Simultaneous solutions and reversible elimination](lesson-1-solution-sets-and-equivalent-systems/tutor.md#simultaneous-solutions-and-reversible-elimination) | Compare valid and invalid operations before solving, then construct a reversible elimination step and its inverse. Include redundant equations separately from deliberately dropped constraints. | Require simultaneous interpretation, reversibility reasoning and identification of information loss. A final correct solution by coincidence does not justify an invalid transformation. |
| [Substitution and elimination in two variables](lesson-1-solution-sets-and-equivalent-systems/tutor.md#substitution-and-elimination-in-two-variables) | Move from direct substitution to scaled elimination, then dependent/inconsistent pairs and a method-choice comparison. Require exact checks beyond visual estimates. | Assess a justified method, equivalent steps, complete solution set, both-original verification and geometric classification. Any valid alternative route is acceptable unless a particular method is the target. |
| [Formulation and substitution](lesson-2-three-variable-linear-systems/tutor.md#formulation-and-substitution) | Begin with direct isolated variables and proportional relations, then small three-quantity contexts and data that yield an inadmissible physical value. | Require variable definitions, a complete faithful system, consistent substitution, all-equation verification and contextual filtering. Do not claim three supplied statements are independent without inspecting their relationships. |
| [Gaussian elimination and back-substitution](lesson-2-three-variable-linear-systems/tutor.md#gaussian-elimination-and-back-substitution) | Use a nontriangular unique system, a pivot-swap case, then dependent/inconsistent systems. Ask for an explanation of why each chosen operation preserves solutions. | Assess forward elimination, correct current-row use, valid pivot handling, back-substitution, solution classification and substitution into all originals. A triangular starting example alone does not demonstrate elimination. |
| [Augmented matrices and technology](lesson-3-matrix-representation-and-solution-classification/tutor.md#augmented-matrices-and-technology) | Translate systems to matrices and back, perform a justified row step, then inspect actual reduction output including a precision-sensitive case. | Require consistent order, full coefficient/constant encoding, meaningful row interpretation and actual tool evidence where prescribed. Record unavailable technology as unassessed, never fabricate output. |
| [Contradictions and free variables](lesson-3-matrix-representation-and-solution-classification/tutor.md#contradictions-and-free-variables) | Classify unique, inconsistent and dependent systems, then construct and verify one- and two-parameter families with declared parameter domains. | Assess row meaning, full-system consistency, pivot/free distinction, complete parameterization and original-family verification. Do not infer free-variable values from unused labels or force them to zero. |

## Exposure and recovery

Compare exact mathematical data and required reasoning with all available learning, practice, and assessment exposure. Rewording a story or renaming a character does not create a fresh item. Keep the exact prompt, checked key, concept, case, representation, and difficulty in the current record. Without supplied past-session history, generate a new task but do not promise it cannot coincide with an unseen prior question. Replace a reported repeat.

If the student asks for a familiar example, use it as review and label the exposure. After hints or taught feedback, choose a genuinely fresh independent task for the affected evidence. If a defect appears after presentation, acknowledge it, invalidate the item without penalty, and generate a checked replacement. This policy supplies many useful variations; it does not establish statistical equivalence of quiz forms or guarantee infinitely many distinct valid questions.

## Checked demand anchors

| Demand | Example and checked key | What changes |
| --- | --- | --- |
| Comparable two-variable systems | $x+y=7,x-y=1$ gives $(4,3)$; $x+y=5,x-y=1$ gives $(3,2)$. | Immediate cancellation and one back-substitution. |
| Increased demand | $x+y+z=6,2x+3y+z=11,x-y+2z=5$ gives $(1,2,3)$. | Requires actual forward elimination through two stages; a triangular starting system is easier. |
| Classification transfer | $x+2z=4,y-z=1,0=0$ gives $(4-2t,1+t,t)$; replacing the zero row by $0=2$ gives no solution. | Distinguishes redundancy from contradiction, with a family instead of one triple. |

These are intended demand comparisons, not measured equivalence. Match the assessed cases, permitted tools, and assistance as well as coefficient size; a numerical variant alone does not establish transfer.
