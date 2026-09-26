# Tutor: Lesson 1.6: Absolute value functions and equations

Agent-facing delivery guidance for the [curriculum](lesson.md). Read both files with the [shared agent guide](../agent-guide.md) before tutoring. The curriculum defines content, objectives, and proficiency; this file supplies activities and evidence collection. Keep calibration keys private until feedback is appropriate. Use the [assessment bank](../assessment.md) for calibration and the [question-generation specification](../question-generation.md) for fresh assessments.

## Prerequisites

- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)
- [Transformations of functions](../lesson-4-transformations-of-functions/lesson.md)

## Teaching boundaries

Use the content and objectives in [lesson.md](lesson.md#concepts) to determine what to teach. Keep these later topics deferred during this lesson.

### Defer

- Absolute-value inequalities.
- Equations with nonlinear expressions inside absolute value.
- Optimization applications.
- General piecewise-function construction beyond the absolute-value rule.

## Agent workflow

1. Begin with distance and the two branches of absolute value. Distinguish the distance itself from outputs changed by outside operations, then diagnose graph features and equation solving separately.
2. Use a graph's vertex and branch directions to predict possible intercept counts. Connect each feature to the formula instead of memorizing an isolated graph checklist.
3. For equations, isolate the absolute value and determine the possible solution count before splitting into cases. Use the learning task to link a distance explanation with the case equations.
4. When the student can solve by one approach, compare the same solution set with intersections of the V-shaped graph and a horizontal line. Ask which method produces exact values most directly; a sketch is a check, not a replacement for verification.
5. Require substitutions into the original equation and contextual-domain filtering. Invite a corrected explanation after feedback, then assess with fresh graph, distance-model, positive-, zero-, and negative-bound tasks.

## Reasoning task for learning and practice

**Purpose:** connect two exact solution methods to a graph without teaching a case rule detached from its conditions. The task and numbers are locally authored.

**Prompt:** Solve $2|x+1|+3=11$. Explain why all solutions have been found, then verify them in the original equation.

**Agent key:** Isolate $|x+1|=4$. Distance from $-1$ is 4, so the inputs are $-5$ and $3$. Equivalently, $x+1=4$ or $x+1=-4$. Both make the original left side $2(4)+3=11$; the two sides of the center exhaust the possible positions at this positive distance.

**Comparison after a successful first method:** Ask the student to explain how the intersections of $y=2|x+1|+3$ and $y=11$ encode the same answers. Its vertex is $(-1,3)$; the two branch slopes are $-2$ and $2$. The horizontal line lies above the vertex, so two intersections are possible and the algebra identifies them exactly. Use a precise description if drawing is unavailable.

**Variation prompt:** Keep the left side unchanged but replace 11 by 3, then by 1. Predict and justify the solution counts before calculating.

**Agent key:** At 3, only $x=-1$ works. At 1, there are no solutions because the left side is at least 3. If a learner keeps making two branches, return to the nonnegative distance and graph minimum. Keep these guided comparisons out of later independent-evidence counts.

## Criteria

### Interpret and graph absolute-value functions

Curriculum reference: **Absolute value as distance and a piecewise rule** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Can $g(x)=-|x|+2$ have negative outputs? Give its vertex and range.
- **Key:** Yes, for $|x|>2$; vertex $(0,2)$, range $(-\infty,2]$. The absolute-value expression is nonnegative, but transformed outputs need not be.
- **Worked model:** For $g(x)=-2|3(x-1)|+6=-6|x-1|+6$, the vertex is $(1,6)$, left slope $6$, right slope $-6$, domain $\mathbb R$, and range $(-\infty,6]$. Solving $|x-1|=1$ gives horizontal intercepts $(0,0),(2,0)$; the vertical intercept is $(0,0)$. Replacing $3$ by $-3$ inside changes no outputs.
- **First hint:** “Which part is a distance, and which operations happen after that distance is found?”
- **Generation check:** Keep inside and outside multipliers nonzero for V-shaped graph tasks. Do not infer the sign of an inside multiplier from an absolute-value graph.

#### Learn

- Derive the two branches from distance and nonnegativity.
- Connect the two linear branches to the V-shaped graph.
- Use transformation reasoning to determine vertex, slopes, opening direction, and range.
- Explain why the sign of the inside multiplier is visually concealed.
- Determine intercepts from inputs or outputs equal to zero.

#### Practice

Generate formula-to-graph-description and graph-feature-to-formula tasks. Vary $a$, $b$, $h$, and $k$, including negative outside multipliers and inside multipliers with equal magnitude but opposite signs. Include cases with zero, one, or two horizontal intercepts.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#interpret-and-graph-absolute-value-functions) and generate fresh questions using this coverage checklist.

Require the student to analyze a fresh transformed absolute-value function by giving:

- a graph or precise graph description of both branches, connected to the distance and piecewise definitions;
- vertex and opening direction;
- both branch slopes;
- domain and range;
- all intercepts; and
- an explanation of the effects of the inside and outside multipliers, including the concealed inside reflection.

#### Misconceptions

- **Confuse distance with transformed output:** The absolute-value expression is nonnegative; outside scaling and translation may produce negative outputs. For $a>0$, no output lies below the vertex.
- **Inside multiplier controls opening direction:** Ignoring that the outside sign determines upward or downward opening.
- **Inside reflection changes the graph:** Failing to account for the even symmetry of absolute value.
- **Vertex is an excluded boundary:** Using an open range endpoint at $k$.

### Formulate and solve absolute-value equations

Curriculum reference: **Absolute value equations** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** How many real solutions does $|2x-1|=-3$ have, and why?
- **Key:** None: an absolute value cannot equal a negative number. Do not create sign branches.
- **Worked model:** $5-2|3x+1|=-7$ implies $|3x+1|=6$, so $3x+1=6$ or $-6$, giving $x=5/3$ or $-7/3$. Both make the original left side $5-12=-7$. For $|3x+1|=0$, only $x=-1/3$ remains; the two signs do not give distinct solutions.
- **First hint:** “What value must the distance itself equal after removing the outside operations?”
- **Generation check:** Use a nonconstant linear inside expression for the two/one/no-solution rule. Check each candidate in the original and filter any explicitly restricted domain; two algebraic candidates need not both be contextually allowed.

#### Learn

- Translate verbal exact-distance conditions using the correct center and nonnegative distance.
- Isolate the absolute-value expression before creating sign cases.
- Predict the number of solutions from nonnegativity.
- Explain the special zero case and verify candidates in the original equation.

#### Practice

Use contextual distance statements and algebraic equations requiring one or more isolation steps. Include positive, zero, and negative isolated values and an equation where an outside negative coefficient requires careful isolation. Ask for a predicted solution count before case solving.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#formulate-and-solve-absolute-value-equations) and generate fresh questions using this coverage checklist.

Require fresh tasks covering:

- construction of an equation from an exact-distance context;
- a positive isolated bound with two sign cases;
- a zero isolated bound;
- a negative isolated bound; and
- substitution checks in the original equations, retaining only candidates in any stated domain.

#### Misconceptions

- **Center has the same inside sign:** Writing $|x+h|$ for distance from $h$.
- **Always create two cases:** Producing false or duplicate cases when the isolated value is nonpositive.
- **Branch before isolating:** Applying sign cases to an equation that still has outside operations.
- **Verification is unnecessary:** Retaining candidates that fail the original equation after an invalid manipulation or arithmetic error.

## Lesson completion

Mark this lesson complete only when both graph analysis and equation solving are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric).

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance). Mathematical reference: [OpenStax 3.6 Absolute Value Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-6-absolute-value-functions). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
