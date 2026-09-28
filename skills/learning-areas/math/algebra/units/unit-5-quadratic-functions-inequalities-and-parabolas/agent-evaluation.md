# Unit 5: agent evaluation scenarios

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

### Lesson 5.1: Three forms of a quadratic function — Standard form and factored form

**Probe:** Which real zeros does $x^2+4$ have, and must every quadratic have real factored form?

**Expected reasoning:** It has no real zeros; it cannot factor into real linear factors. Standard form remains valid.

**Failure to catch:** Ignoring the concept constraint: Keep quadratic leading coefficient nonzero and distinguish real from complex linear factors.

### Lesson 5.1: Three forms of a quadratic function — Vertex form, axis, and range

**Probe:** Write a downward quadratic with vertex $(-1,4)$ and vertical scale magnitude 3.

**Expected reasoning:** $f(x)=-3(x+1)^2+4$; the inside sign locates the vertex at $-1$.

**Failure to catch:** Ignoring the concept constraint: Include both opening directions and attained extrema; use the full real domain unless restricted.

### Lesson 5.2: Converting forms and locating zeros — Converting standard form to vertex form

**Probe:** Convert $2x^2-8x+3$ to vertex form.

**Expected reasoning:** $2[(x-2)^2-4]+3=2(x-2)^2-5$; the compensating constant is multiplied by 2.

**Failure to catch:** Ignoring the concept constraint: Verify by re-expansion; vary signs and nonunit leading coefficients.

### Lesson 5.2: Converting forms and locating zeros — Zeros and the discriminant on a real graph

**Probe:** Compare $x^2-4x+4$ and $x^2-4x+3$.

**Expected reasoning:** The first has one distinct zero 2 with multiplicity 2; the second has distinct zeros 1 and 3.

**Failure to catch:** Ignoring the concept constraint: Separate zero count, multiplicity, and intercept points; include all three discriminant signs.

### Lesson 5.3: Transformations and graph construction — Transformations of a quadratic parent function

**Probe:** Can the graph of $a(bx)^2$ identify $a$ and $b$ separately?

**Expected reasoning:** Generally no: it determines only $ab^2$. For instance $a=4,b=1$ and $a=1,b=2$ give the same graph.

**Failure to catch:** Ignoring the concept constraint: Use corresponding points and check parameter identifiability; inside reflection is concealed by evenness.

### Lesson 5.3: Transformations and graph construction — Sketching from verified attributes

**Probe:** A sketch of $-x^2+4x-1$ shows vertex $(2,3)$ but opens upward. Diagnose it.

**Expected reasoning:** Completing the square gives $-(x-2)^2+3$; vertex is correct but the negative leading coefficient requires downward opening.

**Failure to catch:** Ignoring the concept constraint: Ask for checked attributes before plotting; never invent a tool-generated graph.

### Lesson 5.4: Constructing quadratics from attributes — A vertex and an additional point

**Probe:** Does the vertex alone determine a unique quadratic?

**Expected reasoning:** No: every nonzero $a$ in $a(x-h)^2+k$ shares vertex $(h,k)$. A second point at the vertex adds no constraint on $a$.

**Failure to catch:** Ignoring the concept constraint: Reject incompatible points on the vertex's vertical line; ensure the additional point identifies a nonzero scale.

### Lesson 5.4: Constructing quadratics from attributes — Real zeros and an additional point

**Probe:** Zeros are 1 and 4 and the extra point is $(1,0)$. Is the scale determined?

**Expected reasoning:** No: that point is already required by the root data, so any nonzero scale works.

**Failure to catch:** Ignoring the concept constraint: Include repeated zeros and underdetermined or incompatible data explicitly.

### Lesson 5.5: Three-point construction — Constructing a quadratic through three specified points

**Probe:** Construct the quadratic through $(-1,2),(0,1),(1,2)$.

**Expected reasoning:** $c=1$, $a-b=1$, $a+b=1$ give $a=1,b=0$: $y=x^2+1$. All three substitutions check.

**Failure to catch:** Ignoring the concept constraint: Use distinct x-values and verify every point; exact interpolation is not regression.

### Lesson 5.5: Three-point construction — Uniqueness and degenerate three-point data

**Probe:** Can a function pass through both $(2,1)$ and $(2,4)$?

**Expected reasoning:** No: the same input would have conflicting outputs. Repeated identical points instead give redundant information.

**Failure to catch:** Ignoring the concept constraint: Deliberately generate collinear, conflicting, redundant, and genuine quadratic data; classify uniqueness accurately.

### Lesson 5.6: Quadratic inequalities — Quadratic inequalities with two real zeros

**Probe:** Solve $-2(x-2)(x+1)\ge0$.

**Expected reasoning:** The negative factor reverses the product sign; the solution is $[-1,2]$, including both zeros.

**Failure to catch:** Ignoring the concept constraint: Include leading-coefficient sign changes and strict/inclusive endpoints; test every interval.

### Lesson 5.6: Quadratic inequalities — Repeated-root and no-real-root inequalities

**Probe:** Solve $-x^2-1<0$ and $x^2+1\le0$ over the reals.

**Expected reasoning:** The first holds for all real x; the second never holds. No-real-zero quadratics can keep one sign everywhere.

**Failure to catch:** Ignoring the concept constraint: Include all-real, empty, singleton, and punctured-real solutions for repeated/no-real-root cases.
## Review limits

Recalculate generated variants, especially boundary and exceptional cases, and inspect whether the evidence record matches the actual conversation. Re-run a failed scenario after correcting the cause. Static links and checked reference answers cannot establish reliable tutoring, student learning, or retention; those require observed sessions.

## Multi-turn teaching and assessment audit

In learn mode ask why completing 2x²+8x+1 uses compensation multiplied by two. Later submit three collinear points for a requested “quadratic” and expect a degree-one classification rather than invented curvature. Ask for a five-question assessment and then whole-unit mastery: expect a report of sampled versus still-missing concepts.

Run this as an actual sequence of student turns, pausing after each tutor response. Record what was asked, what the student supplied, what help was given and which file-guided decision the tutor made. A correct final number with premature answer leakage, ignored reasoning or false independent credit is a failure of this interaction test.

## Lesson reasoning and repair probes

These are reviewer prompts with private keys in the linked tutors. For a teaching check, withhold the key from the student-facing response and observe the explanation and revision opportunity. For a mathematical check, independently solve the prompt before comparing.

- **5.1:** A learner reads the vertex of −(x+2)²+7 as (2,7) and calls 7 the minimum. Repair both. [Private key and response guidance](lesson-1-three-forms-of-a-quadratic-function/tutor.md#reasoning-activity).

- **5.2:** Repair 3x²+12x+2=3(x+2)²−2. [Private key and response guidance](lesson-2-converting-forms-and-locating-zeros/tutor.md#reasoning-activity).

- **5.3:** A graph for y=−(x−1)²+4 passes through (0,3) and (2,3) but opens upward. Can the two correct points certify it? [Private key and response guidance](lesson-3-transformations-and-graph-construction/tutor.md#reasoning-activity).

- **5.4:** Zeros are −1 and 2, and the extra point is (2,0). Does that specify one quadratic? [Private key and response guidance](lesson-4-constructing-quadratics-from-attributes/tutor.md#reasoning-activity).

- **5.5:** Do (0,2),(1,5),(2,8) force a genuine quadratic because there are three points? [Private key and response guidance](lesson-5-three-point-construction/tutor.md#reasoning-activity).

- **5.6:** A learner solves (x−2)²>0 as x>2. Find the missing inputs and explain. [Private key and response guidance](lesson-6-quadratic-inequalities/tutor.md#reasoning-activity).

## Reassessment comparison

Save two actual generated quizzes at the same requested scope and difficulty. Compare mathematical data and reasoning demands, not just wording. Independently solve every presented item, list its curriculum cases and check that feedback on one item has not silently supplied independent evidence for another. Report coverage and failures per concept; this specification is not a record that those tests have passed.
