# Tutor: Lesson 55.4 — Method choice and quadratic models

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check all-real versus contextual domains and identify actual degree. Route method gaps to the relevant earlier lesson rather than repeating every method.

Review [55.1: Factoring and square-root solutions](../lesson-1-factoring-and-square-root-solutions/tutor.md) together with its curriculum if that specific gap appears. Review [55.2: Completing the square](../lesson-2-completing-the-square/tutor.md) together with its curriculum if that specific gap appears. Review [55.3: Quadratic formula and discriminant](../lesson-3-quadratic-formula-and-discriminant/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Solve over the reals; complex-root calculation, calculus and higher-degree methods are not required. If the leading coefficient vanishes, solve the actual lower degree.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A positive-width garden gives roots 5 and−8. A learner changes−8 to 8 because lengths are positive. Explain the valid filtering.

**Agent-only reasoning:** Reject−8; taking its absolute value is not an equivalent operation and 8 need not solve the equation. Width 5 and length 8 satisfy both dimensions and area.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Comparing exact and graphical solutions

Curriculum reference: **Comparing exact and graphical solutions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For (x−2)²=11, would expanding first be necessary?

**Agent-only key:** No; the square-root property immediately gives x=2±√11. Expansion is valid but hides useful structure.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Choose efficient exact methods for (x-4)²=9 and x²+x-1=0, then explain what a plot can check.

**Agent-only worked reasoning:** Square-root extraction gives x=1,7 in the first. The quadratic formula gives (-1±√5)/2 in the second; square completion also works. Plotting can corroborate approximate intercepts but a limited window can miss a root and does not convert an approximation into an exact value.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Identify visible factorization, isolated-square or completion structure before selecting a method.
2. Solve with one accessible exact method, then compare a second for what it reveals rather than for ritual repetition.
3. Use a plot to check approximate intercept locations and multiplicity, while retaining exact symbolic verification.

### Practice progression

Choose and justify methods for factored, isolated-square and unfactored equations; solve one by two exact methods and reconcile forms; then inspect a graph window missing a root or obscuring tangency and explain what the picture cannot establish.

**Construction and verification controls:** Contrast factoring, isolated square, completion and formula cases; require explanation of method tradeoff after one method is understood and actual graph evidence where requested.

### Responsive hints and misconceptions

**First conceptual cue:** What structure is already visible before expanding?

If every quadratic is forced into the formula, ask which structure reduces work. If rounded intercepts replace exact roots, retain both labels and substitute the exact form for verification.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Justify method choice from structure, reconcile equivalent exact forms.
- Distinguish graph estimates from exact roots.
- Explain missing or repeated intersections.

**Required case selection:** All listed methods, equivalent forms, graph estimates, hidden/repeated roots and justified choice.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Quadratic constraints in context

Curriculum reference: **Quadratic constraints in context** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A model for a length gives roots−6 and 4 metres. Which should be retained if the length must be positive?

**Agent-only key:** Only 4;−6 fails the contextual domain even if it solves the equation.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A rectangular garden is 3 m longer than its positive width and has area 40 m². Find dimensions.

**Agent-only worked reasoning:** Let width w>0; w(w+3)=40, so (w+8)(w-5)=0. Only w=5 is feasible, length=8 m. The root -8 solves the equation but violates positive width. If a contextual parameter cancels the quadratic term, solve the resulting actual degree.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Define quantities and units before forming the relationship.
2. State admissible signs, intervals or integer constraints and check the actual polynomial degree after parameters are substituted.
3. Solve algebraically, then filter candidates in the original context, explaining each rejection by a stated condition.

### Practice progression

Form an area model; compare a motion model with multiple nonnegative target times; then handle a parameter causing a linear degeneration or an infeasible/no-real case, reporting units and assumptions for every accepted solution.

**Construction and verification controls:** Generate consistent area/motion constraints with units and stated domains; include degeneracy and infeasible/no-solution contexts.

### Responsive hints and misconceptions

**First conceptual cue:** Which quantity does the variable measure, and what values are possible in this context?

If roots are rounded to make counts feasible, check the original exact constraint. If a negative root is discarded automatically in a non-length model, ask whether the variable's declared domain actually excludes it.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Derive the equation from the relationship.
- Check degree and parameters.
- Retain only contextually feasible roots.
- Explain why excluded candidates fail.

**Required case selection:** Formulation, actual degree, method, original checks and justified feasible interpretation.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Ask for the structure that supports a method choice before asking for the method's name. In \((x-4)^2=9\), the square is already isolated, so square roots give 1 and 7 directly. In \(x^2+x-1=0\), the formula or square completion gives \((-1\pm\sqrt5)/2\); failure to find integer factors is not evidence of no real roots. Accept any valid efficient method unless the task explicitly elicits a named representation or derivation.

In the garden model, define width \(w>0\), length \(w+3\), in metres. The area equation \(w(w+3)=40\) gives \((w-5)(w+8)=0\). Both 5 and -8 solve the algebraic equation; only 5 satisfies the length restrictions, yielding dimensions 5 m and 8 m. Taking the absolute value of -8 would invent a new candidate: dimensions 8 and 11 give area 88, not 40.

At a modeling block, cue “Which quantities must stay positive in this situation?” Next supply the variable definitions and let the learner build the product; give \(w(w+3)=40\) only at the setup level. For method choice, ask what recognizable structure is already present before displaying a transformed equation.

Fade with sides differing by 2 m and area 24 m²: \(w=4\) or -6 algebraically, with dimensions 4 and 6 accepted. Then use \(kx^2+2x-4=0\) to test degree awareness: at \(k=0\) the equation is linear and \(x=2\); a formula with denominator \(2k\) cannot be used there. When a graph is requested, require actual graph evidence and relate it to the exact solutions.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
