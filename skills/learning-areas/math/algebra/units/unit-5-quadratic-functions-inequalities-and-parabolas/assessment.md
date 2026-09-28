# Unit 5 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 5.1: Three forms of a quadratic function

### Standard form and factored form

[Curriculum](lesson-1-three-forms-of-a-quadratic-function/lesson.md#concepts) · [Tutor guidance](lesson-1-three-forms-of-a-quadratic-function/tutor.md#standard-form-and-factored-form)

**A — Prompt:** For $f(x)=2(x-1)(x+3)$, find zeros and y-intercept.

**Key:** Zeros are 1 and $-3$; $f(0)=-6$. Expansion is $2x^2+4x-6$.

**B — Prompt:** Which real zeros does $x^2+4$ have, and must every quadratic have real factored form?

**Key:** It has no real zeros; it cannot factor into real linear factors. Standard form remains valid.

**Generation checks:** Keep quadratic leading coefficient nonzero and distinguish real from complex linear factors.

### Vertex form, axis, and range

[Curriculum](lesson-1-three-forms-of-a-quadratic-function/lesson.md#concepts) · [Tutor guidance](lesson-1-three-forms-of-a-quadratic-function/tutor.md#vertex-form-axis-and-range)

**A — Prompt:** Give vertex, axis, and range of $-2(x-3)^2+5$.

**Key:** Vertex $(3,5)$, axis $x=3$, range $(-\infty,5]$ because the squared term is nonnegative and the multiplier negative.

**B — Prompt:** Write a downward quadratic with vertex $(-1,4)$ and vertical scale magnitude 3.

**Key:** $f(x)=-3(x+1)^2+4$; the inside sign locates the vertex at $-1$.

**Generation checks:** Include both opening directions and attained extrema; use the full real domain unless restricted.

## Lesson 5.2: Converting forms and locating zeros

### Converting standard form to vertex form

[Curriculum](lesson-2-converting-forms-and-locating-zeros/lesson.md#concepts) · [Tutor guidance](lesson-2-converting-forms-and-locating-zeros/tutor.md#converting-standard-form-to-vertex-form)

**A — Prompt:** Convert $x^2+6x+2$ to vertex form.

**Key:** Add and subtract 9: $(x+3)^2-7$, so vertex $(-3,-7)$.

**B — Prompt:** Convert $2x^2-8x+3$ to vertex form.

**Key:** $2[(x-2)^2-4]+3=2(x-2)^2-5$; the compensating constant is multiplied by 2.

**Generation checks:** Verify by re-expansion; vary signs and nonunit leading coefficients.

### Zeros and the discriminant on a real graph

[Curriculum](lesson-2-converting-forms-and-locating-zeros/lesson.md#concepts) · [Tutor guidance](lesson-2-converting-forms-and-locating-zeros/tutor.md#zeros-and-the-discriminant-on-a-real-graph)

**A — Prompt:** How many real zeros has $3x^2+2x+1$?

**Key:** Discriminant $4-12=-8$, so none; the real graph does not cross the x-axis.

**B — Prompt:** Compare $x^2-4x+4$ and $x^2-4x+3$.

**Key:** The first has one distinct zero 2 with multiplicity 2; the second has distinct zeros 1 and 3.

**Generation checks:** Separate zero count, multiplicity, and intercept points; include all three discriminant signs.

## Lesson 5.3: Transformations and graph construction

### Transformations of a quadratic parent function

[Curriculum](lesson-3-transformations-and-graph-construction/lesson.md#concepts) · [Tutor guidance](lesson-3-transformations-and-graph-construction/tutor.md#transformations-of-a-quadratic-parent-function)

**A — Prompt:** Map $(2,4)$ on $y=x^2$ to $y=-2(x-1)^2+3$.

**Key:** Translate the input right 1 and transform output by $-2v+3$: $(3,-5)$.

**B — Prompt:** Can the graph of $a(bx)^2$ identify $a$ and $b$ separately?

**Key:** Generally no: it determines only $ab^2$. For instance $a=4,b=1$ and $a=1,b=2$ give the same graph.

**Generation checks:** Use corresponding points and check parameter identifiability; inside reflection is concealed by evenness.

### Sketching from verified attributes

[Curriculum](lesson-3-transformations-and-graph-construction/lesson.md#concepts) · [Tutor guidance](lesson-3-transformations-and-graph-construction/tutor.md#sketching-from-verified-attributes)

**A — Prompt:** Sketch $y=(x-2)^2-4$ from verified attributes.

**Key:** Vertex $(2,-4)$, axis $x=2$, zeros 0 and 4, y-intercept 0, opens upward. Points symmetric about the axis must agree.

**B — Prompt:** A sketch of $-x^2+4x-1$ shows vertex $(2,3)$ but opens upward. Diagnose it.

**Key:** Completing the square gives $-(x-2)^2+3$; vertex is correct but the negative leading coefficient requires downward opening.

**Generation checks:** Ask for checked attributes before plotting; never invent a tool-generated graph.

## Lesson 5.4: Constructing quadratics from attributes

### A vertex and an additional point

[Curriculum](lesson-4-constructing-quadratics-from-attributes/lesson.md#concepts) · [Tutor guidance](lesson-4-constructing-quadratics-from-attributes/tutor.md#a-vertex-and-an-additional-point)

**A — Prompt:** Find the quadratic with vertex $(2,-1)$ through $(0,7)$.

**Key:** $y=a(x-2)^2-1$ and $7=4a-1$, so $a=2$.

**B — Prompt:** Does the vertex alone determine a unique quadratic?

**Key:** No: every nonzero $a$ in $a(x-h)^2+k$ shares vertex $(h,k)$. A second point at the vertex adds no constraint on $a$.

**Generation checks:** Reject incompatible points on the vertex's vertical line; ensure the additional point identifies a nonzero scale.

### Real zeros and an additional point

[Curriculum](lesson-4-constructing-quadratics-from-attributes/lesson.md#concepts) · [Tutor guidance](lesson-4-constructing-quadratics-from-attributes/tutor.md#real-zeros-and-an-additional-point)

**A — Prompt:** Find the quadratic with zeros $-2,3$ passing through $(0,-12)$.

**Key:** $y=a(x+2)(x-3)$; $-12=-6a$ gives $a=2$.

**B — Prompt:** Zeros are 1 and 4 and the extra point is $(1,0)$. Is the scale determined?

**Key:** No: that point is already required by the root data, so any nonzero scale works.

**Generation checks:** Include repeated zeros and underdetermined or incompatible data explicitly.

## Lesson 5.5: Three-point construction

### Constructing a quadratic through three specified points

[Curriculum](lesson-5-three-point-construction/lesson.md#concepts) · [Tutor guidance](lesson-5-three-point-construction/tutor.md#constructing-a-quadratic-through-three-specified-points)

**A — Prompt:** Find the polynomial of degree at most 2 through $(0,1),(1,4),(2,9)$.

**Key:** From $c=1$, $a+b=3$, and $4a+2b=8$, obtain $a=1,b=2$, so $x^2+2x+1$.

**B — Prompt:** Construct the quadratic through $(-1,2),(0,1),(1,2)$.

**Key:** $c=1$, $a-b=1$, $a+b=1$ give $a=1,b=0$: $y=x^2+1$. All three substitutions check.

**Generation checks:** Use distinct x-values and verify every point; exact interpolation is not regression.

### Uniqueness and degenerate three-point data

[Curriculum](lesson-5-three-point-construction/lesson.md#concepts) · [Tutor guidance](lesson-5-three-point-construction/tutor.md#uniqueness-and-degenerate-three-point-data)

**A — Prompt:** Do $(0,1),(1,3),(2,5)$ determine a genuine quadratic?

**Key:** They determine $y=2x+1$, degree 1; the unique degree-at-most-2 interpolant has zero quadratic coefficient.

**B — Prompt:** Can a function pass through both $(2,1)$ and $(2,4)$?

**Key:** No: the same input would have conflicting outputs. Repeated identical points instead give redundant information.

**Generation checks:** Deliberately generate collinear, conflicting, redundant, and genuine quadratic data; classify uniqueness accurately.

## Lesson 5.6: Quadratic inequalities

### Quadratic inequalities with two real zeros

[Curriculum](lesson-6-quadratic-inequalities/lesson.md#concepts) · [Tutor guidance](lesson-6-quadratic-inequalities/tutor.md#quadratic-inequalities-with-two-real-zeros)

**A — Prompt:** Solve $(x-1)(x+3)>0$.

**Key:** Signs are positive on $(-\infty,-3)$ and $(1,\infty)$, negative between; strictness excludes both roots.

**B — Prompt:** Solve $-2(x-2)(x+1)\ge0$.

**Key:** The negative factor reverses the product sign; the solution is $[-1,2]$, including both zeros.

**Generation checks:** Include leading-coefficient sign changes and strict/inclusive endpoints; test every interval.

### Repeated-root and no-real-root inequalities

[Curriculum](lesson-6-quadratic-inequalities/lesson.md#concepts) · [Tutor guidance](lesson-6-quadratic-inequalities/tutor.md#repeated-root-and-no-real-root-inequalities)

**A — Prompt:** Solve $(x-2)^2<0$ and $(x-2)^2\le0$.

**Key:** A real square is nonnegative: the strict inequality has no solutions, and the inclusive one has only $x=2$.

**B — Prompt:** Solve $-x^2-1<0$ and $x^2+1\le0$ over the reals.

**Key:** The first holds for all real x; the second never holds. No-real-zero quadratics can keep one sign everywhere.

**Generation checks:** Include all-real, empty, singleton, and punctured-real solutions for repeated/no-real-root cases.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Standard form and factored form](lesson-1-three-forms-of-a-quadratic-function/tutor.md#standard-form-and-factored-form) | Require form recognition, equivalent expansion, nonzero quadratic coefficient, valid zeros and y-intercept. Distinguish real factorability from existence of a standard quadratic formula. |
| [Vertex form, axis, and range](lesson-1-three-forms-of-a-quadratic-function/tutor.md#vertex-form-axis-and-range) | Assess vertex, axis, opening, attained range and a constructed formula with a stated nonzero scale. Range claims must use the actual domain supplied. |
| [Converting standard form to vertex form](lesson-2-converting-forms-and-locating-zeros/tutor.md#converting-standard-form-to-vertex-form) | Require equality-preserving completion, correct outside compensation, re-expansion and vertex interpretation. Merely reporting a memorized vertex formula does not establish the requested conversion process. |
| [Zeros and the discriminant on a real graph](lesson-2-converting-forms-and-locating-zeros/tutor.md#zeros-and-the-discriminant-on-a-real-graph) | Assess exact discriminant, distinct-root count, multiplicity and real-graph interpretation. Complex solutions may be mentioned when requested but are not real x-intercepts. |
| [Transformations of a quadratic parent function](lesson-3-transformations-and-graph-construction/tutor.md#transformations-of-a-quadratic-parent-function) | Require correct coordinate mappings, feature changes and an explanation of parameter nonuniqueness. Verify supplied correspondences; visual resemblance alone does not determine them. |
| [Sketching from verified attributes](lesson-3-transformations-and-graph-construction/tutor.md#sketching-from-verified-attributes) | Assess consistency among formula, anchors, symmetry, opening and range. Record any required tool verification separately and accept an exact accessible graph description when a drawing itself is not the assessed requirement. |
| [A vertex and an additional point](lesson-4-constructing-quadratics-from-attributes/tutor.md#a-vertex-and-an-additional-point) | Require a correct vertex-form setup, scale solution, validation and classification of underdetermined/impossible/degenerate data. Do not force a unique answer from insufficient information. |
| [Real zeros and an additional point](lesson-4-constructing-quadratics-from-attributes/tutor.md#real-zeros-and-an-additional-point) | Assess root factors, scale identification, repeated-root handling and every data check. Under- or overdetermination must be reported rather than repaired by invented assumptions. |
| [Constructing a quadratic through three specified points](lesson-5-three-point-construction/tutor.md#constructing-a-quadratic-through-three-specified-points) | Require the complete coefficient system, a valid solution, all point checks and degree classification. A plotted curve passing approximately through data is not exact construction evidence. |
| [Uniqueness and degenerate three-point data](lesson-5-three-point-construction/tutor.md#uniqueness-and-degenerate-three-point-data) | Assess distinct-input reasoning, degree degeneration, redundancy versus contradiction and honest uniqueness claims. Counting supplied points alone is not a valid sufficiency argument. |
| [Quadratic inequalities with two real zeros](lesson-6-quadratic-inequalities/tutor.md#quadratic-inequalities-with-two-real-zeros) | Require all interval signs, correct inclusion, an exact solution set and original-expression checks. Solving the associated equation only establishes boundaries, not the inequality solution. |
| [Repeated-root and no-real-root inequalities](lesson-6-quadratic-inequalities/tutor.md#repeated-root-and-no-real-root-inequalities) | Assess repeated-root and no-real-root reasoning, all possible set types, equality points and stated number system. A global sign argument is valid without an unnecessarily elaborate table. |
