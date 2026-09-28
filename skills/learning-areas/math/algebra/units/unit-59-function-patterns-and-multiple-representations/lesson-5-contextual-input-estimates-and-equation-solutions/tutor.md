# Tutor: Lesson 59.5 — Contextual input estimates and equation solutions

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check target-equation formulation and the relevant model domain. Route linear/quadratic algebra gaps to local explanation before using tables or graphs as a substitute for reasoning.

Review [59.1: Finite differences and model reconstruction](../lesson-1-finite-differences-and-model-reconstruction/tutor.md) together with its curriculum if that specific gap appears. Review [59.4: Functions and inverses across representations](../lesson-4-functions-and-inverses-across-representations/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated low-degree/family assumptions. Do not infer global identity, derivatives, complete roots or inverse functions from finite samples alone.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A small cubic residual is called a guaranteed input error bound of the same size. Replace this with valid evidence for t³=2.

**Agent-only reasoning:** A continuous bracket [1.25,1.26] contains the positive root, so midpoint 1.255 has input error at most .005. Output residual and input error are distinct.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Input estimation from outputs

Curriculum reference: **Input estimation from outputs** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Can a positive exponential model attain output 0 at a finite real input just because its graph approaches zero?

**Agent-only key:** No; an unattained asymptote is not a reached target.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For a model h(t)=4-(t-2)² on 0≤t≤4, estimate times with h=3 and h=5. Compare R(t)=10/t for t>0 at target 0.

**Agent-only worked reasoning:** h=3 gives (t-2)²=1, so t=1,3, confirmed by table/graph. h never exceeds 4, so h=5 has no solution. R(t) approaches 0 but never equals it; an asymptote is not a target hit. A positive exponential also cannot reach 0 on its full real domain.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Form f(x)=target on the original domain and first inspect the attainable range.
2. Use monotonic branches, extrema or asymptotes to anticipate no, one or multiple inputs.
3. Then obtain nearby table values or graph intersections supporting estimates, preserving units and acknowledging table gaps.

### Practice progression

Estimate targets in quadratic models with two branches; compare a reciprocal target near an excluded input and an exponential target near an asymptote; then reject a target outside the range and explain why a coarse table cannot prove missing intermediate roots.

**Construction and verification controls:** Generate quadratic, rational and exponential targets with zero/one/multiple admissible solutions, label units/domain and justify estimates with nearby values.

### Responsive hints and misconceptions

**First conceptual cue:** Can this model attain the target output on its allowed domain?

If the first found input is called the only one, inspect other branches. If a table never lists the target exactly, use bracketing/attributes rather than conclude no solution.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the original domain and units.
- Justify the estimate with nearby values or graph features.
- Identify nonexistent or multiple input possibilities rather than assume one solution.

**Required case selection:** All three families, attributes, reasonable table/graph estimates and nonexistent/multiple inputs.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Linear and quadratic contextual solutions

Curriculum reference: **Linear and quadratic contextual solutions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A contextual equation has roots 2 and −3. May the negative root always be discarded?

**Agent-only key:** No; feasibility depends on the variable's stated domain. A length excludes it, but a signed coordinate may allow it.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A rectangle has width w and length w+1 metres with area 12 m². Solve symbolically and explain corresponding graphical/table evidence.

**Agent-only worked reasoning:** w²+w=12 gives (w+4)(w-3)=0. Width w>0 retains 3, length 4 m; -4 is algebraically valid but physically excluded. The graph of w²+w intersects horizontal 12 at -4 and 3; a table brackets the positive root but cannot alone exclude hidden roots.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Translate the target, equal-output comparison or fixed constraint into an equation with quantities and units.
2. Select a valid exact method from structure, then graph/table the same equation and reconcile approximations with the exact roots.
3. Check every candidate in the original context, including integer restrictions when counts are intended.

### Practice progression

Solve a linear break-even model and a quadratic area/motion model; compare symbolic roots with table brackets/graph intersections; then diagnose a rounded count or automatically rejected negative coordinate using the actual domain.

**Construction and verification controls:** Include linear and quadratic target/equal-output constraints, different exact methods and contextual integer/nonnegative exclusions; reconcile every representation.

### Responsive hints and misconceptions

**First conceptual cue:** Which two dimensions produce the stated area, and what widths are physically possible?

If an equation is solved before defining the question, reconstruct which output or equality was intended. If approximate graph values disagree slightly, compare precision rather than declaring the exact solution wrong.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Define the equation from the quantitative question.
- Choose a justified symbolic method.
- Compare approximate evidence with exact results.
- Check every candidate against the original model and context.

**Required case selection:** Formulation, all methods under valid conditions, table/graph/exact reconciliation and all candidate checks.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Numerical solutions for additional families

Curriculum reference: **Numerical solutions for additional families** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For log(x−2)=0, which inputs are even eligible before any numerical search?

**Agent-only key:** x>2 because the logarithm's argument must be positive; a bracket crossing 2 is invalid.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A cubic model v(t)=t³ for t≥0 reaches target 2. Use a bracket to report input within .005; describe what changes for log and square-root models.

**Agent-only worked reasoning:** 1.25³=1.953125<2<2.000376=1.26³, so continuity and strict increase place the unique root in [1.25,1.26]. Midpoint 1.255 is within .005, with time units if t measures time. Log models require positive log argument; square-root models require nonnegative radicand. Output residual alone is not a bound on input error.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Identify the function family and its domain before choosing a viewing window.
2. Form a continuous difference from the target, bracket valid crossings and refine to a declared input tolerance.
3. Inspect tangencies and multiple branches separately, then verify the approximated input in the original model with a compatible output tolerance.

### Practice progression

Use tables/plots for exponential and logarithmic targets; repeat for square-root and cubic models with valid radicands and possible multiple roots; then diagnose an asymptote or tangency missed by an ordinary crossing search and state the limits of completeness.

**Construction and verification controls:** Rotate exponential/log/square-root/cubic contexts, domain-valid windows and explicit tolerance; check multiple/tangent roots and verify original outputs with actual table/plot.

### Responsive hints and misconceptions

**First conceptual cue:** What evidence would guarantee that a solution lies inside the proposed interval?

If a small residual is equated with small input error, supply a bracket or another bound. If the screen shows one crossing, ask what domain/window was checked and whether a tangential solution could be invisible.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Apply logarithm and root domain restrictions.
- Choose and refine a suitable window or table interval.
- Check for multiple or tangential solutions.
- Report a justified tolerance and contextual units.

**Required case selection:** All four families, target modeling, domain, graph/table refinement, tolerances and root-count caveats.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Start an input search by checking attainable outputs. For \(h(t)=4-(t-2)^2\), \(0\le t\le4\), target 3 has two inputs 1 and 3, target 4 has one, and target 5 has none. A table containing only times 0,2,4 would miss both inputs for target 3; the missing table entry is not evidence of no solution. For \(10/t\) on \(t>0\), zero is approached but never attained.

For \(t^3=2\), \(t\ge0\), the continuous strictly increasing function has one root bracketed by \([1.25,1.26]\). Midpoint 1.255 has input error at most .005. For a tighter target .001, refine to \([1.259,1.260]\): cubed endpoints are 1.995616979 and 2.000376, so midpoint 1.2595 has error at most .0005. A calculated residual is a separate output check; it is not automatically the input error.

Contrast domain and accuracy decisions across families. In \(\log_2(t-2)=1\), require \(t>2\), then \(t=4\). In \(\sqrt{t-1}=2\), require \(t\ge1\), then verify \(t=5\) in the unsquared original. In the supplied model \(2^t=3\), a table at 1 and 2 brackets the root, but a narrower continuous bracket is needed for a small tolerance. These exactly solvable examples make later numerical checks interpretable rather than replacing required table or graph work.

If a learner stops at one quadratic input, cue “Can the same height occur on both sides of the vertex?” Next identify the two monotonic intervals, then work one branch only if needed. Fade with \(9-(t-3)^2=5\), \(0\le t\le6\): inputs 1 and 5. Retain contextual units and never discard a negative candidate until the variable's domain justifies that rejection.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
