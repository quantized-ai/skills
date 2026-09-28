# Tutor: Lesson 39.4: Determinants, inverses, and linear systems

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check systems, coefficient ordering and products; distinguish exact arithmetic from rounded technology output.

Within this unit, revisit [the previous lesson](../lesson-3-matrix-algebra-zero-and-identity/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Two-sided square inverses and consistent contextual systems; defer pseudoinverses and least-squares fitting.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Determinants and inverse existence:** Compute ad−bc with signs intact before forming the inverse.

- **Systems as matrix equations:** Choose and label the unknown vector order, then translate each simultaneous condition into a coefficient row with a matching constant.

- **Technology and singular systems:** Construct three independent contextual equations with named variables and units.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A coefficient row is twice another. One solver declares no solution solely because the determinant is zero. Give right sides producing each singular outcome.

**Agent key and discussion:** For x+y=2 and 2x+2y=4 there are infinitely many solutions; changing the second constant to 5 gives none. A zero determinant blocks the inverse method but does not classify the augmented system.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Determinants and inverse existence

Curriculum reference: **Determinants and inverse existence** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does determinant −2 mean a matrix has no inverse?
- **Diagnostic key:** No; every nonzero determinant permits a two-sided inverse for a square matrix.
- **Worked-example prompt:** Find and verify the inverse of A=[[2,1],[5,3]].
- **Worked model and reasoning:** Determinant 1; inverse [[3,-1],[-5,2]]. Both AA⁻¹ and A⁻¹A give identity. A zero determinant would mean no inverse; nonsquare matrices have no two-sided inverse.
- **First hint:** Compute the determinant before dividing by it.

#### Learn

- Compute ad−bc with signs intact before forming the inverse.
- Derive the adjugate pattern by multiplying the proposed numerator matrix against A and obtaining det(A)I.
- Divide only when determinant is nonzero and verify both products.
- Distinguish singular square matrices from nonsquare ones with no two-sided inverse.

#### Practice progression

Invert nonsingular 2×2 matrices, diagnose singular/nonsquare cases and verify both products; interpret determinant sign separately from existence.

**Further variation and generation checks:** Vary nonsingular/singular 2-by-2 matrices, determinant sign and verification in both orders; distinguish a small nonzero determinant from zero.

#### Misconceptions and responsive feedback

If only diagonal entries are reciprocated, multiply to expose nonidentity off-diagonal entries. If near-zero numerical determinants are equated with exact zero, request exact data or a justified numerical analysis.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check the determinant before division, construct the correct sign-and-position pattern, obtain the identity in both multiplication orders, and distinguish nonsquare matrices from invertible square matrices.

**Task range to sample:** Vary nonsingular/singular 2-by-2 matrices, determinant sign and verification in both orders; distinguish a small nonzero determinant from zero.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Systems as matrix equations

Curriculum reference: **Systems as matrix equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For Ax=b, should the inverse solution be bA⁻¹?
- **Diagnostic key:** No; the compatible operation is A⁻¹b on the left.
- **Worked-example prompt:** Solve 2x+y=8 and 5x+3y=21 as a matrix equation.
- **Worked model and reasoning:** With A=[[2,1],[5,3]] and b=[[8],[21]], inverse multiplication gives x=3,y=2. Substitution gives 8 and 21 respectively; entry order must match the chosen variable vector.
- **First hint:** Write the coefficients in the same variable order in both rows.

#### Learn

- Choose and label the unknown vector order, then translate each simultaneous condition into a coefficient row with a matching constant.
- Check invertibility and multiply on the correct side.
- Substitute the solution into every original equation, not just the matrix product, and intersect with contextual positivity or integer restrictions.

#### Practice progression

Begin with supplied equations, build contextual two-variable models, solve with inverses and verify units/feasibility in all original constraints.

**Further variation and generation checks:** Include contextual two-variable systems with units and invertibility checks; verify solutions in the original equations.

#### Misconceptions and responsive feedback

If columns are silently reordered, ask which variable each column represents. If an algebraic answer violates a quantity restriction, report model infeasibility rather than silently rounding it.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Preserve coefficients, constants, and variable order, multiply the inverse on the correct side, and verify the solution in each original equation.
- Define contextual quantities and units and reject algebraic solutions outside their feasible domains.

**Task range to sample:** Include contextual two-variable systems with units and invertibility checks; verify solutions in the original equations.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Technology and singular systems

Curriculum reference: **Technology and singular systems** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does a zero determinant distinguish no solution from infinitely many?
- **Diagnostic key:** No; the augmented constants decide consistency.
- **Worked-example prompt:** Analyze x+y+z=6, x-y+z=2, x+y-z=0, then replace the last row by twice the first with right side 13.
- **Worked model and reasoning:** Original solution (1,2,3), verified in all three equations; determinant of its coefficient matrix is 4, so it is invertible. Replacement yields $2x+2y+2z=13$ contradicting first row doubled (=12), hence no solution. With right side 12 the replacement leaves one free parameter.
- **First hint:** Compare each dependent coefficient row with its right-hand side.

#### Learn

- Construct three independent contextual equations with named variables and units.
- Enter exact matrices into available technology, compute determinant/inverse when justified and inspect the actual output.
- Verify inverse products and all original modeled relationships.
- For singular systems row-reduce the augmented matrix, distinguishing a contradictory row from a free variable.

#### Contextual three-variable model with verified matrix output

**Prompt:** A school performance sells 20 tickets: adult tickets cost 10 currency units, student tickets 6, and child tickets 3. Revenue is 137 currency units, and two more student tickets than child tickets were sold. Let a,s,c be the three nonnegative integer ticket counts. Build a matrix model in that variable order, use available matrix technology to solve it, and check both the algebra and the interpretation.

**Model construction:** The count relation is a+s+c=20; price times count gives 10a+6s+3c=137; the comparison gives s−c=2. The corresponding coefficient matrix and right side are

$A=\begin{pmatrix}1&1&1\\10&6&3\\0&1&-1\end{pmatrix},
\qquad b=\begin{pmatrix}20\\137\\2\end{pmatrix},
\qquad A\begin{pmatrix}a\\s\\c\end{pmatrix}=b.$

The first and third rows express ticket counts; the second expresses money, so row labels and units must accompany the bare arrays. Preserve the zero coefficient of a in the last row.

**Verified reference output:** Exact rational Gauss–Jordan arithmetic was actually run during authoring on 26 September 2026. It returned det A=11 and

$A^{-1}=\frac1{11}\begin{pmatrix}-9&2&-3\\10&-1&7\\10&-1&-4\end{pmatrix},
\qquad A^{-1}b=\begin{pmatrix}8\\7\\5\end{pmatrix}.$

Both AA⁻¹ and A⁻¹A were computed as I₃. The three row residuals are (8+7+5)−20=0, (80+42+15)−137=0, and (7−5)−2=0. Thus 8 adult, 7 student and 5 child tickets satisfy all observations and are feasible nonnegative integers. This also checks that the second row was not entered as counts or the columns reordered accidentally.

**Student technology workflow:** Enter the exact 3×3 A and 3×1 b in the chosen matrix tool. Record the determinant and inverse or augmented reduced output, including precision, then compute A⁻¹b and check the three original contextual equations. If the tool displays rounded inverse entries, retain exact inputs and use sufficiently precise residuals; a rounded result alone cannot prove a count is exactly an integer. The reference output above is author verification, not evidence of a student's tool action. Supply the model as teaching support when requested, but during assessment require construction from a fresh context and leave any unperformed tool or interpretation component unassessed.

**Singular contrast using the same context:** Replace the last observation by a redundant report that twice the total ticket count is 40. Its coefficient row becomes (2,2,2) with constant 40, so subtraction of twice the first row gives 0=0. Algebraically there is one free variable; the monetary row still constrains it. With c=t, solve a=(17+3t)/4 and s=(63−7t)/4. The contextual nonnegative integer conditions leave t=1,5,9, giving (a,s,c)=(5,14,1),(8,7,5),(11,0,9). Thus an infinite real affine solution family can yield only finitely many feasible ticket counts. If the replacement report is 41 instead of 40, row subtraction gives 0=1, so there is no algebraic or contextual solution. Do not use failure to compute an inverse as the classification proof.

#### Practice progression

Solve an actual tool-supported nonsingular 3×3 model, then singular consistent/inconsistent systems and a numerical precision case; record unperformed technology separately.

**Further variation and generation checks:** Construct contextual three-variable systems and use available technology to compute/verify inverses; use row reasoning for singular systems, never an invented inverse or fake tool result.

#### Misconceptions and responsive feedback

If a calculator error is treated as proof of inconsistency, compare coefficient dependence with right-side dependence. If a rounded determinant appears zero, preserve exact coefficients and assess precision before classifying.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Enter and interpret matrices with correct dimensions, distinguish exact singularity from rounding, verify numerical solutions, and justify no-solution or infinitely-many-solution conclusions from the augmented equations.
- Verify that all three modeled relationships and contextual restrictions hold and interpret each recovered quantity.

**Task range to sample:** Construct contextual three-variable systems and use available technology to compute/verify inverses; use row reasoning for singular systems, never an invented inverse or fake tool result.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
