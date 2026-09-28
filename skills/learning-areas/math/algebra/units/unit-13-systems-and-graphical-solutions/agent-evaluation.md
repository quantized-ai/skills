# Unit 13: agent evaluation scenarios

These tests concern the tutor, not the student. Load [SKILL.md](SKILL.md), the [agent guide](agent-guide.md), and the relevant curriculum/tutor pair. Run in fresh conversations except where a multi-turn sequence is specified. Record actual prompts, retrieved files, outputs, and pass/fail evidence. This file is a test specification, not a claim that a runtime has passed it.

## Interaction and retrieval

- Request a named lesson directly: the agent must read both its curriculum and tutor guidance and honor the requested mode.
- Request a quiz twice at the same difficulty: questions must be freshly constructed and checked, with meaningful variation using available exposure history.
- Ask for an assessment hint, then answer correctly: the tutor must help, mark that attempt assisted, and obtain a fresh independent attempt later.
- Supply a correct answer by an alternative valid method: accept it unless the specified curriculum capability requires a particular method or representation.
- Stop a quiz early: report demonstrated and missing concepts without claiming unit mastery or counting unattempted work as failure.
- Remove required tool access: symbolic work may proceed, but the agent must not invent graph, calculation, or experimental observations.
- Start without saved history: the tutor must not claim past mastery or guaranteed global question uniqueness.
- Challenge an actually faulty generated key: the tutor must recompute, correct the item without penalty, and preserve unrelated evidence.

## Mathematical and reasoning probes

These reference probes may be used by reviewers; they are not default student quizzes. Check the explanation and restrictions, not only final-value matching.

### Lesson 13.1: Solution sets and equivalent systems — Simultaneous solutions and reversible elimination

**Probe:** Explain why replacing the second equation by its difference with the first is reversible when the first remains.

**Expected reasoning:** Add the retained first equation back to recover the original second. Both directions preserve the simultaneous solution set.

**Failure to catch:** Ignoring the concept constraint: Distinguish valid row replacement from dropping an independent equation; verify all originals.

### Lesson 13.1: Solution sets and equivalent systems — Substitution and elimination in two variables

**Probe:** Solve $2x+y=5$, $y=x-1$ by substitution.

**Expected reasoning:** $2x+x-1=5$ gives x=2,y=1. Substitution uses an equivalent expression for y.

**Failure to catch:** Ignoring the concept constraint: Include intersecting, parallel, and coincident lines and exact checks beyond graphical estimates.

### Lesson 13.2: Three-variable linear systems — Formulation and substitution

**Probe:** A mixture has x,y,z liters totaling 10, with y=2x and z=4. Formulate and solve.

**Expected reasoning:** $x+y+z=10$, $y=2x$, $z=4$ imply 3x=6, so $(2,4,4)$ liters, all nonnegative.

**Failure to catch:** Ignoring the concept constraint: Use three independent constraints and preserve contextual positivity or integrality.

### Lesson 13.2: Three-variable linear systems — Gaussian elimination and back-substitution

**Probe:** Solve $x+y+z=6$, $2x+3y+z=11$, $x-y+2z=5$ using elimination. Explain why each operation preserves the solution set.

**Expected reasoning:** Retain $R_1$. Replace $R_2$ by $R_2-2R_1$ to obtain $y-z=-1$ and $R_3$ by $R_3-R_1$ to obtain $-2y+z=-1$. Then replace $R_3$ by $R_3+2R_2$ (using the new $R_2$) to obtain $-z=-3$. Back-substitution gives $z=3$, $y=2$, $x=1$. Check the original left sides: $6$, $11$, $5$. Each row replacement is reversible by adding back the same multiple of the retained row. Swaps and nonzero scaling are also reversible; multiplication of an equation by zero would lose a constraint.

**Failure to catch:** Ignoring the concept constraint: Include pivot swaps, contradictions, and free variables rather than forcing a unique solution.

### Lesson 13.3: Matrix representation and solution classification — Augmented matrices and technology

**Probe:** A calculator reports a tiny nonzero reduced-row entry rounded to 0. Does that certify an exact zero?

**Expected reasoning:** No. Inspect precision and verify the original exact system; rounding can change apparent rank and solution classification.

**Failure to catch:** Ignoring the concept constraint: Require actual technology output where specified and distinguish computed approximations from exact row identities.

### Lesson 13.3: Matrix representation and solution classification — Contradictions and free variables

**Probe:** Classify reduced rows $x+2y=4$ and $0=5$.

**Expected reasoning:** The contradiction makes the whole system inconsistent; no assignment can satisfy every row.

**Failure to catch:** Ignoring the concept constraint: Parameterize every free variable independently and prove the family satisfies all constraints.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

Give a student solution that replaces both original equations by only their sum. Expect an explicit counterexample showing lost information and a reversible repair. Then request a matrix-tool demonstration without tool access: expect symbolic work plus an unassessed technology component. A rounded tiny value must not be declared an exact contradiction or zero.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **13.1:** Replace x+y=5 and x−y=1 by their sum 2x=6. Is that equivalent to the original system? [Private key and response guidance](lesson-1-solution-sets-and-equivalent-systems/tutor.md#reasoning-activity).

- **13.2:** A solver has triangular equations x+y+z=9, y+z=5, z=2 and reports (4,5,2). Locate the first back-substitution error. [Private key and response guidance](lesson-2-three-variable-linear-systems/tutor.md#reasoning-activity).

- **13.3:** Does the reduced row (0,0,0|0) mean no solution? Compare with (0,0,0|2). [Private key and response guidance](lesson-3-matrix-representation-and-solution-classification/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.

## Response-dependent decision checks

- Submit one valid triple for a free-variable system. Expect acknowledgment plus a completeness probe rather than treating the triple as the unique solution.
- Provide a manually derived RREF but claim it came from a calculator. Expect the tool component to remain unobserved unless actual output is available.
