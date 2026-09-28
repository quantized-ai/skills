# Unit 56 agent evaluation

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

### 56.1: A parabola as an equidistance locus

Give this prompt to the tutor as a student request: Derive the parabola with focus (2,4) and directrix y=0.

Then challenge its reasoning using this misconception: Using distance to a chosen point on the directrix instead of perpendicular line distance. The [delivery guidance](lesson-1-focus-directrix-and-vertical-parabolas/tutor.md#a-parabola-as-an-equidistance-locus) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Equal squared distances give (x-2)²+(y-4)²=y², hence (x-2)²=8(y-2). Vertex (2,2), p=2, axis x=2, opening upward. Squaring is safe because original distances are nonnegative; on the derived locus y≥2.

### 56.1: Converting between vertex form and focal attributes

Give this prompt to the tutor as a student request: Find focal attributes of y=-(x-1)²/8+3.

Then challenge its reasoning using this misconception: Placing focus and directrix on the same side or equating a and p. The [delivery guidance](lesson-1-focus-directrix-and-vertical-parabolas/tutor.md#converting-between-vertex-form-and-focal-attributes) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: a=-1/8, so p=1/(4a)=-2. Vertex (1,3), focus (1,1), directrix y=5, axis x=1, focal distance 2 and opening downward. Opening direction alone would not determine |p|.

### 56.2: Horizontal focus/directrix equations

Give this prompt to the tutor as a student request: Derive the relation for focus (-1,2), directrix x=3, and explain whether y is a function of x.

Then challenge its reasoning using this misconception: Assuming every parabola is a graph y=f(x). The [delivery guidance](lesson-2-horizontal-parabolas-and-general-equations/tutor.md#horizontal-focusdirectrix-equations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Equal distances give (x+1)²+(y-2)²=(x-3)², so (y-2)²=-8(x-1). Vertex (1,2), p=-2, axis y=2, opening left. At x=-1, y=2±4 gives -2 and 6, so the full relation fails the vertical-line test; x is a function of y.

### 56.2: Recovering parabola attributes by square completion

Give this prompt to the tutor as a student request: Convert x²-4x-8y+12=0 to focal form and verify a point by distances.

Then challenge its reasoning using this misconception: Reading p from an unnormalized equation or including degenerate C=0 cases as parabolas. The [delivery guidance](lesson-2-horizontal-parabolas-and-general-equations/tutor.md#recovering-parabola-attributes-by-square-completion) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: (x-2)²=8(y-1), vertex (2,1), p=2, focus (2,3), directrix y=-1, axis x=2. Point (6,3) lies on it: focus distance 4 and directrix distance 4. The squared variable identifies vertical orientation.

## Adversarial transfer scenario

**Student response to test:** The equation (y−2)²=−8(x−1) is described as a downward-opening y-function with focus (1,0).

**Required behavior and mathematics:** Expected: horizontal left-opening relation, p=−2, vertex (1,2), focus (−1,2), directrix x=3. For x=−1 there are y=−2 and 6, so the full relation fails the vertical-line test.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Present the claim that the distance to directrix \(y=0\) is \(\sqrt{x^2+y^2}\). Expect a point-to-line diagnosis and perpendicular distance, not approval of the resulting curve.
- Give correct \(p=-2\) but “focal distance -2.” Expect credit for signed orientation and correction of the nonnegative distance.
- Present one vertex output as proof that a horizontal parabola is \(y=f(x)\). Expect an interior input with two outputs and distinction from a selected branch.
- Supply a proposed dynamic construction without a produced construction. Expect mathematical reasoning credit while execution stays unverified; do not report that a tool ran.
