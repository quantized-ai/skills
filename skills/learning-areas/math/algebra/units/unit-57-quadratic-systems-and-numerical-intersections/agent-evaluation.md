# Unit 57 agent evaluation

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

### 57.1: Formulating simultaneous linear and quadratic constraints

Give this prompt to the tutor as a student request: Two positive rectangle sides sum to 10 m and their product is 21 m². Form and solve the simultaneous constraints.

Then challenge its reasoning using this misconception: Solving one relationship while ignoring the other or treating all quadratic relations as quadratic functions. The [delivery guidance](lesson-1-linear-quadratic-systems/tutor.md#formulating-simultaneous-linear-and-quadratic-constraints) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: x+y=10 and xy=21 with x,y>0. Substitute y=10-x: x²-10x+21=0, giving (3,7),(7,3) metres. Both satisfy both equations. The quadratic relation xy=21 is not itself a polynomial function y=ax²+bx+c; do not assume every quadratic relation has that form.

### 57.1: Algebraic solutions and intersection counts

Give this prompt to the tutor as a student request: Solve y=x+1 with y=x²-1, then explain why discriminants cannot classify every linear–quadratic system.

Then challenge its reasoning using this misconception: Applying D to a canceled quadratic or forgetting the second coordinate. The [delivery guidance](lesson-1-linear-quadratic-systems/tutor.md#algebraic-solutions-and-intersection-counts) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: x²-x-2=0 gives x=-1,2 and pairs (-1,0),(2,3). By contrast y=0 with xy=0 yields an identity after substitution, so the whole line is shared; with xy=1 it yields contradiction. Classify the actual reduced equation before using a quadratic discriminant.

### 57.2: Equations as intersections and successive approximations

Give this prompt to the tutor as a student request: Use successive refinement for the positive intersection of y=x² and y=2 with input error at most .005. Why does a sign change of 1/x across zero not certify a root?

Then challenge its reasoning using this misconception: Interpreting an asymptote crossing as a root or residual as a guaranteed input error. The [delivery guidance](lesson-2-nonlinear-systems-and-numerical-intersections/tutor.md#equations-as-intersections-and-successive-approximations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: √2 lies in [1.41,1.42] because squared endpoints are 1.9881 and 2.0164; midpoint 1.415 has error at most .005 by continuity and the bracket. For 1/x, zero is outside the domain and continuity fails across it, so opposite signs give no root. Tangencies such as x²=0 can have no sign change.

### 57.2: Quadratic–quadratic systems

Give this prompt to the tutor as a student request: Solve y=x² and y=x²+2x, then compare y=x²+1 and y=x² with the first graph.

Then challenge its reasoning using this misconception: Assuming two quadratic equations always leave a genuine quadratic difference. The [delivery guidance](lesson-2-nonlinear-systems-and-numerical-intersections/tutor.md#quadraticquadratic-systems) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: First comparison reduces to 2x=0, so intersection (0,0), even though both graphs are quadratic. Comparing x² with x²+1 gives no intersection; comparing x² with itself gives the entire parabola. Distinct quadratic function graphs have at most two intersections, but arbitrary quadratic relations can have more.

## Adversarial transfer scenario

**Student response to test:** A numerical routine sees opposite signs for 1/x at −1 and 1 and returns 0 as an approximate zero.

**Required behavior and mathematics:** Expected: reject the bracket because continuity/domain fail at 0, which is undefined and not a root. Do not present bisection convergence toward a discontinuity as mathematical success.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Present an identity after substitution with the learner's claim “the whole plane.” Expect retention of the original line, not a request to solve \(0=0\) for a number.
- Provide a tiny residual for a shallow linear difference function. Expect refusal to infer a tight input bound without a bracket or quantitative sensitivity argument.
- Contrast \(1/x\) on [-1,1] with \((x-1)^2\) near 1. Expect the tutor to distinguish a false discontinuity bracket from a missed tangent root.
- Give correct positive-root evidence when the prompt asked for all real roots of \(x^2=2\). Expect partial credit and the missing negative root, not rejection of the positive approximation.
- Ask whether all quadratic relations have at most two intersections. Expect the restricted quadratic-function claim or a verified four-point counterexample.
