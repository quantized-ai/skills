# Tutor: Lesson 56.2 — Horizontal parabolas and general equations

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check signed focal parameter and completing squares. Return to vertical equidistance derivation if the role of focus/directrix is unclear, then exchange coordinate roles deliberately.

Review [56.1: Focus, directrix, and vertical parabolas](../lesson-1-focus-directrix-and-vertical-parabolas/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Restrict to nonrotated nondegenerate parabolas with the prescribed focus/directrix data. Rotated conics and optical laws beyond the locus definition are deferred.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner sees (y−2)²=−8(x−1) and calls it a downward parabola/function y(x). Repair both.

**Agent-only reasoning:** The squared variable is y: it opens left with p=−2,vertex (1,2). At x=−1 it has y=−2,6, so the full relation is not y=f(x).

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Horizontal focus/directrix equations

Curriculum reference: **Horizontal focus/directrix equations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For y²=8x, how many y-values occur at x=2?

**Agent-only key:** Two: y=4 and −4. The complete horizontal parabola is not y=f(x).

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Derive the relation for focus (-1,2), directrix x=3, and explain whether y is a function of x.

**Agent-only worked reasoning:** Equal distances give (x+1)²+(y-2)²=(x-3)², so (y-2)²=-8(x-1). Vertex (1,2), p=-2, axis y=2, opening left. At x=-1, y=2±4 gives -2 and 6, so the full relation fails the vertical-line test; x is a function of y.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Derive horizontal focal form using a vertical directrix and keep x,y roles explicit.
2. Read signed p, vertex and horizontal axis before solving for branches.
3. Use one interior-domain vertical line to demonstrate two outputs and contrast the full relation with a chosen branch or x as a function of y.

### Practice progression

Derive right- and left-opening cases; label every focal attribute and verify two symmetric points; then explain why a branch restriction changes the relation and is necessary before calling y a function of x.

**Construction and verification controls:** Generate vertical directrices and signed p≠0; sample an interior horizontal-domain x with two outputs, distinguish full relation from restricted branch.

### Responsive hints and misconceptions

**First conceptual cue:** Which coordinate is squared after subtracting the distance expressions?

If a familiar vertical formula is reused, identify which variable is squared. If the vertical-line test is asserted without evidence, choose an interior x and solve both y-values.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Derive the focal equation from equal distances.
- Interpret the signed parameter and all focal attributes consistently.
- Show that inputs strictly inside the horizontal domain have two outputs and apply the vertical-line test.

**Required case selection:** Derivation, all focal attributes, orientation and two-output/function distinction.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Recovering parabola attributes by square completion

Curriculum reference: **Recovering parabola attributes by square completion** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In y²−6y−4x+5=0, which orientation is expected before completing the square?

**Agent-only key:** Horizontal, because y is squared while x is linear; completion gives (y−3)²=4(x+1).

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Convert x²-4x-8y+12=0 to focal form and verify a point by distances.

**Agent-only worked reasoning:** (x-2)²=8(y-1), vertex (2,1), p=2, focus (2,3), directrix y=-1, axis x=2. Point (6,3) lies on it: focus distance 4 and directrix distance 4. The squared variable identifies vertical orientation.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Verify the squared and linear coefficients are nonzero, then group and complete the square while preserving every constant adjustment.
2. Normalize to read 4p, not p directly, and recover all geometric attributes.
3. Choose a simple point on the completed relation and check focus/directrix distances against the original equation.

### Practice progression

Convert one vertical and one horizontal general equation; include an outside coefficient requiring scaled compensation; then reject degenerate or rotated inputs outside the stated form and verify a point by both substitution and distance.

**Construction and verification controls:** Use Ax²+Bx+Cy+D or Ay²+By+Cx+D with A,C nonzero; include outside scaling and both orientations, reject rotated/degenerate assumptions.

### Responsive hints and misconceptions

**First conceptual cue:** Where is the symmetry axis of this squared-variable expression?

If orientation comes from the first written variable, inspect the squared term instead. If a constant disappears during completion, expand the final focal equation and compare each original coefficient.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify orientation and preserve equivalence through square completion, including coefficient scaling and constant compensation.
- Read the nonzero signed focal parameter and all geometric attributes.
- Verify that a point on the parabola has equal focus and directrix distances.

**Required case selection:** Equivalent square completion, signed geometry attributes and equal-distance verification for both orientations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

For focus \((-1,2)\) and directrix \(x=3\), use distance to the vertical line \(\lvert x-3\rvert\). Squaring gives \((x+1)^2+(y-2)^2=(x-3)^2\), hence \((y-2)^2=-8(x-1)\). Because the left side is nonnegative, \(x\le1\). At \(x=-1\), the two outputs \(y=-2,6\) demonstrate failure of the vertical-line test; at the vertex only one output occurs. A single output at the boundary does not make the full relation a function of \(x\). The upper branch \(y=2+\sqrt{8(1-x)}\), with \(x\le1\), is a different, restricted relation.

For square completion with an outside coefficient, work \(2y^2-12y-8x+10=0\). Divide by 2, then group: \(y^2-6y=4x-5\), so \((y-3)^2=4x+4=4(x+1)\). Vertex \((-1,3)\), \(p=1\), focus \((0,3)\), directrix \(x=-2\). Point \((0,5)\) satisfies the original equation and has both distances equal to 2. Reading \(p=4\) would confuse \(4p\) with \(p\).

For an orientation error, cue “Which coordinate changes on both sides of the axis?” Then ask which variable is squared; reveal the focal form only if needed. For a completion error, ask the learner to expand their proposed square before supplying the compensated equation. Fade with \(y^2+4y+8x-12=0\): \((y+2)^2=-8(x-2)\), vertex \((2,-2)\), focus \((0,-2)\), directrix \(x=4\). At \(x=0\), outputs -6 and 2 verify the horizontal relation's two branches.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
