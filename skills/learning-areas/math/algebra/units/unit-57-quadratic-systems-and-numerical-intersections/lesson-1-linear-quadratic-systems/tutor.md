# Tutor: Lesson 57.1 — Linear–quadratic systems

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check substitution with grouping and quadratic solving. For y=x+1, replacing y² requires (x+1)², not x²+1.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Separate quadratic functions from arbitrary quadratic relations and finite-window estimates from complete solution claims. Do not require advanced numerical algorithms beyond a justified refinement method.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** Substitution yields 0=0 and the learner reports every ordered pair. Restore the remaining constraint.

**Agent-only reasoning:** The nonconstant original line still applies; an identity says that line lies in the quadratic relation, so the shared line, not the entire plane, is the solution set.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Formulating simultaneous linear and quadratic constraints

Curriculum reference: **Formulating simultaneous linear and quadratic constraints** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Is xy=12 a quadratic relation even though y=12/x is not a quadratic function?

**Agent-only key:** Yes; xy has total degree 2. A quadratic relation need not be a graph of y=ax²+bx+c.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Two positive rectangle sides sum to 10 m and their product is 21 m². Form and solve the simultaneous constraints.

**Agent-only worked reasoning:** x+y=10 and xy=21 with x,y>0. Substitute y=10-x: x²-10x+21=0, giving (3,7),(7,3) metres. Both satisfy both equations. The quadratic relation xy=21 is not itself a polynomial function y=ax²+bx+c; do not assume every quadratic relation has that form.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Translate each simultaneous constraint with its own units and retain sign/integrality restrictions.
2. Distinguish the geometric relation from a single-valued function when choosing graphs.
3. Test candidate ordered pairs in both original equations and then apply contextual feasibility, keeping algebraic and contextual rejection separate.

### Practice progression

Build sum/product rectangle constraints; then a line-circle or other linear–quadratic context; finally inspect candidates satisfying only one equation or violating a contextual condition and explain the exact failure.

**Construction and verification controls:** Include line-circle, line-parabola and product constraints with compatible units; enforce signs/integrality/context independently of algebra.

### Responsive hints and misconceptions

**First conceptual cue:** Which two measurements must hold at the same time?

If one coordinate is reported alone, substitute to recover its partner. If every quadratic relation is treated as y=f(x), test whether one x admits two y-values or the relation has another form.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Translate both relationships and specify relevant domains.
- Do not assume every quadratic relation is a function graph.
- Check each candidate against both equations and the context.
- Explain any rejection using the stated restrictions and interpret accepted coordinates with units.

**Required case selection:** Both equations, defined variables/units, relation versus function and all contextual candidate checks.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Algebraic solutions and intersection counts

Curriculum reference: **Algebraic solutions and intersection counts** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Substitution into a linear–quadratic system gives 0=0. Does that mean every point in the plane solves the system?

**Agent-only key:** No; it means every point on the retained line satisfies the other relation, subject to original/contextual restrictions.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Solve y=x+1 with y=x²-1, then explain why discriminants cannot classify every linear–quadratic system.

**Agent-only worked reasoning:** x²-x-2=0 gives x=-1,2 and pairs (-1,0),(2,3). By contrast y=0 with xy=0 yields an identity after substitution, so the whole line is shared; with xy=1 it yields contradiction. Classify the actual reduced equation before using a quadratic discriminant.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Isolate a variable in the nonconstant linear equation and substitute with grouping.
2. Simplify before choosing a quadratic method: distinguish genuine quadratic, linear, contradiction and identity.
3. Recover all coordinates, check both original equations and reconcile real roots with actual graph intersections.

### Practice progression

Solve zero/one/two-intersection nondegenerate cases; add cancellation to linear and shared-line/contradiction cases; then interpret a repeated root as tangency only where the conic assumptions justify it, excluding complex roots from real-plane counts.

**Construction and verification controls:** Build zero/one/two-intersection nondegenerate cases plus linear, contradiction and shared-line degeneracies; verify every pair and graph.

### Responsive hints and misconceptions

**First conceptual cue:** Could the highest-degree terms cancel when the constraints are combined?

If a discriminant is used after the leading coefficient cancels, name the actual reduced degree. If an identity becomes the whole plane, keep the original line equation visibly in the solution description.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Substitute with correct grouping and retain the actual resulting degree.
- Use the discriminant only for a genuine quadratic and handle linear, contradictory, and identity cases appropriately.
- Recover all real ordered pairs or describe the shared line.
- Verify both original equations and reconcile the result with the graph.
- Exclude complex roots from real intersection counts.

**Required case selection:** Substitution, actual degree, discriminant only when valid, all pairs/shared line and graphical reconciliation.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

In the rectangle model, keep coordinate meaning visible: \(x+y=10\) m and \(xy=21\) m² with \(x,y>0\). Substitution gives \(x(10-x)=21\), hence \((x-3)(x-7)=0\). Recover \(y\) to obtain \((3,7)\) and \((7,3)\). These are two ordered pairs but one unordered set of rectangle dimensions; report according to the variables' meaning. Checking only the reduced polynomial does not verify that a recovered coordinate was copied correctly.

Show actual-degree cases with the same line \(y=0\). With \(x^2+y^2=1\), there are two points \((\pm1,0)\). With \(x^2+y^2=0\), only \((0,0)\) remains; this degenerate circle is not a nondegenerate tangency example. With \(x^2+y^2=-1\), there are none. With \(xy+x=2\), substitution gives the linear equation \(x=2\). With \(xy=1\), it gives a contradiction; with \(xy=0\), it gives an identity and the entire original line remains. A repeated-root tangency statement requires the stated nondegenerate-conic conditions.

For an identity misread as the whole plane, cue “Which original equation still restricts the points?” Then write the retained line beside \(0=0\); supply the shared-line description only after the learner attempts it. For a missing coordinate, ask what an intersection point must contain before offering substitution. Fade with \(y=x-1\) and \(y=x^2-3\): \(x=-1,2\), pairs \((-1,-2),(2,1)\). Verify both original outputs. If graphical solution is requested, obtain and inspect an actual graph as separate evidence.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
