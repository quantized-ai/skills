# Unit 55 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 55.1: Quadratic equations and the zero-product property

Give this prompt to the tutor as a student request: Solve x²=4x over the reals and evaluate the step “divide by x.”

Then challenge its reasoning using this misconception: Canceling a zero-capable factor or applying zero-product to a nonzero right side. The [delivery guidance](lesson-1-factoring-and-square-root-solutions/tutor.md#quadratic-equations-and-the-zero-product-property) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Move to zero form: x(x-4)=0, so x=0 or 4. Both verify in the original. Dividing by x without separating x=0 loses the zero solution; (x-2)²=0 instead has one distinct root 2 of multiplicity two.

### 55.1: Square-root property

Give this prompt to the tutor as a student request: Solve (2x-3)²=7 over the reals; compare right sides 0 and -7.

Then challenge its reasoning using this misconception: Writing only the positive branch or treating √7 itself as two-valued. The [delivery guidance](lesson-1-factoring-and-square-root-solutions/tutor.md#square-root-property) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: For 7: 2x-3=±√7, giving x=(3±√7)/2. For 0: x=3/2 only. For -7: no real solutions because a real square is nonnegative. √7 denotes the nonnegative radical; ± supplies the two equation branches.

### 55.2: Monic square completion

Give this prompt to the tutor as a student request: Solve x²-6x+2=0 by completing the square.

Then challenge its reasoning using this misconception: Adding the square-completion term to only one side or losing its sign. The [delivery guidance](lesson-2-completing-the-square/tutor.md#monic-square-completion) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: x²-6x=-2; add 9 to both sides: (x-3)²=7. Thus x=3±√7. The matching expression identity is x²-6x+2=(x-3)²-7, where inserted 9 is compensated.

### 55.2: Nonmonic square completion

Give this prompt to the tutor as a student request: Complete the square and solve 2x²+4x-1=0.

Then challenge its reasoning using this misconception: Compensating an inside-bracket adjustment without multiplying by the outside coefficient. The [delivery guidance](lesson-2-completing-the-square/tutor.md#nonmonic-square-completion) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Divide by 2: x²+2x=1/2. Add 1: (x+1)²=3/2, so x=-1±√6/2. Equivalently the expression is 2(x+1)²-3; adding 1 inside a factor of 2 changes the expression by 2.

### 55.3: Derivation and use of the quadratic formula

Give this prompt to the tutor as a student request: Derive the quadratic formula for ax²+bx+c=0 (a≠0), then solve 2x²+x-4=0.

Then challenge its reasoning using this misconception: Dropping grouping on negative coefficients or using √(a²)=a for negative a. The [delivery guidance](lesson-3-quadratic-formula-and-discriminant/tutor.md#derivation-and-use-of-the-quadratic-formula) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Divide by a and complete: (x+b/(2a))²=(b²-4ac)/(4a²). For nonnegative discriminant the set is x=(-b±√(b²-4ac))/(2a); the ± set absorbs the sign of a when taking √(a²)=|a|. Here D=33 and roots (-1±√33)/4.

### 55.3: Discriminant and solution classification

Give this prompt to the tutor as a student request: Classify x²-2x+1=0, x²-2=0 and x²+2=0 by real root count and rationality.

Then challenge its reasoning using this misconception: Conflating repeated roots with two distinct values or applying rationality rules to arbitrary real coefficients. The [delivery guidance](lesson-3-quadratic-formula-and-discriminant/tutor.md#discriminant-and-solution-classification) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Discriminants are 0,8,-8. First has one distinct rational repeated root 1; second has two irrational real roots ±√2; third has no real roots. Positive D alone does not imply rational roots. The perfect-rational-square criterion requires rational coefficients.

### 55.4: Comparing exact and graphical solutions

Give this prompt to the tutor as a student request: Choose efficient exact methods for (x-4)²=9 and x²+x-1=0, then explain what a plot can check.

Then challenge its reasoning using this misconception: Insisting on one method or treating rounded graph coordinates as exact. The [delivery guidance](lesson-4-method-choice-and-quadratic-models/tutor.md#comparing-exact-and-graphical-solutions) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Square-root extraction gives x=1,7 in the first. The quadratic formula gives (-1±√5)/2 in the second; square completion also works. Plotting can corroborate approximate intercepts but a limited window can miss a root and does not convert an approximation into an exact value.

### 55.4: Quadratic constraints in context

Give this prompt to the tutor as a student request: A rectangular garden is 3 m longer than its positive width and has area 40 m². Find dimensions.

Then challenge its reasoning using this misconception: Accepting all algebraic roots in context or rejecting a root without naming the violated condition. The [delivery guidance](lesson-4-method-choice-and-quadratic-models/tutor.md#quadratic-constraints-in-context) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Let width w>0; w(w+3)=40, so (w+8)(w-5)=0. Only w=5 is feasible, length=8 m. The root -8 solves the equation but violates positive width. If a contextual parameter cancels the quadratic term, solve the resulting actual degree.

## Adversarial transfer scenario

**Student response to test:** A student solves x²=4x by dividing by x, reports 4, and verifies that 4 works.

**Required behavior and mathematics:** Expected: acknowledge 4 but recover 0 from x(x−4)=0. One verified root does not prove completeness; dividing by x excluded a possible case. Give a fresh problem for independent evidence after the repair.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
