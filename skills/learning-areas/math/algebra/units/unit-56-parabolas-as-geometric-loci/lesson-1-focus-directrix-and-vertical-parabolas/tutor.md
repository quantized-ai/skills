# Tutor: Lesson 56.1 — Focus, directrix, and vertical parabolas

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check point distance and perpendicular line distance; distance from(2,5) to y=1 is 4. Review square completion only when converting a formula requires it.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Restrict to nonrotated nondegenerate parabolas with the prescribed focus/directrix data. Rotated conics and optical laws beyond the locus definition are deferred.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner places the vertex at focus(2,4) when directrix is y=0. Recover it geometrically.

**Agent-only reasoning:** The perpendicular projection is(2,0), so midpoint vertex(2,2),p=2, and equation(x−2)²=8(y−2).

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## A parabola as an equidistance locus

Curriculum reference: **A parabola as an equidistance locus** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** With focus(0,3) and directrix y=−1, where is the vertex?

**Agent-only key:** (0,1), the midpoint between the focus and its perpendicular projection(0,−1); p=2.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Derive the parabola with focus (2,4) and directrix y=0.

**Agent-only worked reasoning:** Equal squared distances give (x-2)²+(y-4)²=y², hence (x-2)²=8(y-2). Vertex (2,2), p=2, axis x=2, opening upward. Squaring is safe because original distances are nonnegative; on the derived locus y≥2.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Draw the focus and perpendicular projection onto the directrix to identify vertex and axis.
2. Express point-to-focus distance and perpendicular point-to-line distance for a general(x,y), using an absolute value for the latter.
3. Square nonnegative distances, simplify to focal form and verify the signed opening with a known point.

### Practice progression

Derive an upward and a downward parabola from focal data; label vertex/axis/focus/directrix; then test a candidate point by its two actual distances and explain why focus on the directrix is excluded from the nondegenerate model.

**Construction and verification controls:** Use horizontal directrices and off-line focus with signed nonzero p; verify the derived locus and a point's two distances.

### Responsive hints and misconceptions

**First conceptual cue:** Where is the midpoint between the focus and its perpendicular projection onto the line?

If the distance to the line uses a diagonal segment, drop its perpendicular first. If p is forced positive, distinguish signed orientation from nonnegative focal distance|p|.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Equate point-to-focus and perpendicular point-to-line distances.
- Derive the vertical focal equation by equivalent algebra.
- Locate the vertex and axis and interpret the signed parameter consistently with the geometry.

**Required case selection:** Equidistance derivation, vertex, axis, signed parameter and opening.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Converting between vertex form and focal attributes

Curriculum reference: **Converting between vertex form and focal attributes** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For y=2(x−3)²+1, is p=2?

**Agent-only key:** No; p=1/(4a)=1/8, so focus(3,9/8) and directrix y=7/8.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Find focal attributes of y=-(x-1)²/8+3.

**Agent-only worked reasoning:** a=-1/8, so p=1/(4a)=-2. Vertex (1,3), focus (1,1), directrix y=5, axis x=1, focal distance 2 and opening downward. Opening direction alone would not determine |p|.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Rewrite vertex form as (x−h)²=4p(y−k) before reading attributes.
2. Place focus/directrix symmetrically on opposite sides of the vertex, then compare changes in |a| with reciprocal focal distance.
3. Recover equations from compatible vertex/focus or vertex/directrix data and diagnose missing width information.

### Practice progression

Convert signed vertex forms to all focal attributes; reconstruct from enough focal data and verify back; then compare two parabolas sharing vertex/opening but different focal distance, explaining why direction alone is insufficient.

**Construction and verification controls:** Vary signed vertex forms and sufficient/insufficient vertex-focus/directrix data; include compatible checks and width comparisons.

### Responsive hints and misconceptions

**First conceptual cue:** What happens to the coefficient when the squared expression is isolated?

If a is substituted for p, derive the reciprocal relation from the same equation. If focus/directrix land on one side, compare their signed offsets about the vertex.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use the reciprocal relation between $a$ and $p$ with correct sign.
- Place focus and directrix at equal distances on opposite sides of the vertex.
- Recover the equation from compatible nondegenerate focal data and distinguish direction from width information.

**Required case selection:** Both conversions, reciprocal relation, distance/sign and insufficiency of direction-only data.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Start with distances rather than a memorized coefficient. For focus \((2,4)\) and directrix \(y=0\), the point-to-line distance from \((x,y)\) is \(\lvert y\rvert\), not the distance to a chosen point on the line. Equating nonnegative distances and squaring gives \((x-2)^2+(y-4)^2=y^2\). Expand only the second square: the \(y^2\) terms cancel, leaving \((x-2)^2=8y-16=8(y-2)\). The midpoint geometry gives vertex \((2,2)\) and signed \(p=2\), agreeing with the algebra. Squaring is reversible here because both original distances are nonnegative.

Use \((6,4)\) as a nonvertex check: the focus distance is 4 and the perpendicular directrix distance is 4. Checking only the vertex would give weaker evidence about the full equation. For \(y=-(x-1)^2/8+3\), rewrite \((x-1)^2=-8(y-3)\); now \(4p=-8\), so \(p=-2\). The negative sign determines opening; focal **distance** is 2. Focus \((1,1)\) and directrix \(y=5\) lie on opposite sides of the vertex.

If a learner treats \(a\) as \(p\), cue “What happens to the coefficient when the squared expression is isolated?” Next offer \((x-h)^2=(1/a)(y-k)\), then match \(4p=1/a\) only at the worked-step level. Fade with \(y=(x+2)^2/12-1\): \(p=3\), focus \((-2,2)\), directrix \(y=-4\). A correct algebraic construction does not count as executed dynamic-geometry evidence.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
