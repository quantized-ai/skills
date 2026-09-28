# Tutor: Lesson 59.3 — Polynomial quotients and factors across representations

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check polynomial multiplication and division identity. Review denominator exclusion:division by x−1 is undefined at 1 even after cancellation.

Review [59.2: Polynomial combinations in tables and graphs](../lesson-2-polynomial-combinations-in-tables-and-graphs/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated low-degree/family assumptions. Do not infer global identity, derivatives, complete roots or inverse functions from finite samples alone.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A polynomial division has remainder 2, but the table is filled using the polynomial quotient alone. Repair its evaluation rule.

**Agent-only reasoning:** Use p/d=q+2/d wherever d≠0. For x³+1 divided by x−1, at x=2 the ratio 9 differs from q=7 by 2; at x=1 it remains undefined.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Division identities and tabular quotients

Curriculum reference: **Division identities and tabular quotients** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If p=dq+2, does p(x)/d(x)=q(x) whenever d(x)≠0?

**Agent-only key:** No; it equals q(x)+2/d(x). The polynomial quotient alone omits the remainder contribution.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Divide p=x³+1 by d=x-1 and compare p/d with the polynomial quotient at x=2 and x=1.

**Agent-only worked reasoning:** p=(x-1)(x²+x+1)+2, so q=x²+x+1 and r=2. At x=2, p/d=9 while q=7, with r/d=2 supplying the difference. At x=1 the original ratio is undefined. Remainder degree 0 is below divisor degree 1.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Carry the polynomial division identity separately from the pointwise ratio.
2. Verify reconstruction and the strict remainder-degree condition before evaluating tables.
3. Mark every original denominator zero even when a factor cancels, then compare q with q+r/d at allowed inputs.

### Practice progression

Divide a cubic by a line with nonzero remainder; divide a quartic by a quadratic and verify degrees; then include exact division with a canceled real zero and show the hole remains in the original ratio's table/graph.

**Construction and verification controls:** Generate cubic/quartic p with linear/quadratic divisor via p=dq+r and deg r<deg d, include zero/nonzero remainder and real denominator zeros.

### Responsive hints and misconceptions

**First conceptual cue:** What part of the dividend is left after divisor times quotient?

If the table uses q alone, compute the remainder fraction at one permitted input. If a canceled root is filled in, substitute it into the original denominator before discussing an extension.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Verify the division identity and remainder degree.
- Calculate only defined table entries.
- Distinguish quotient-plus-remainder values from the polynomial quotient itself.

**Required case selection:** Both divisor degrees, identity/remainder degree, table values and original exclusions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Linear factors from zeros and structure

Curriculum reference: **Linear factors from zeros and structure** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** An exact root is x=−2. Which linear factor follows?

**Agent-only key:** x+2; the factor is x−r, so subtracting −2 gives plus 2.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A cubic p=2x³-6x² has a graph apparently touching at 0 and crossing at 3. Verify its linear factors.

**Agent-only worked reasoning:** p=2x²(x-3); roots 0 with multiplicity 2 and 3 with multiplicity 1. Factors x,x,x-3 plus scale 2 reconstruct the polynomial. A graph could suggest these roots but exact factorization verifies them; omitting scale changes the function.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Distinguish exact tabular roots from approximate graph intercepts.
2. Use the factor theorem, division and multiplication back to verify each proposed factor, retaining leading scale and repeated roots.
3. Investigate unshown roots rather than trusting a limited graph window.

### Practice progression

Recover factors of a quadratic from exact zeros and a scale condition; factor a cubic with a repeated root; then use an approximate plot as a candidate source, checking precision and reporting unresolved factors when information is insufficient.

**Construction and verification controls:** Supply exact rules with suggestive tables/graphs, or mark approximate inputs with tolerances; include window-hidden and repeated roots and insufficient data.

### Responsive hints and misconceptions

**First conceptual cue:** Do the proposed roots determine the whole polynomial, including its scale?

If scale is lost, evaluate at a nonzero test input after multiplying back. If a touching root is omitted because the graph never crosses, test its exact polynomial value and multiplicity.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Translate a zero into a factor with the correct sign.
- Distinguish exact from approximate input values.
- Verify the full product including its scale.
- Identify unresolved factors or insufficient data.

**Required case selection:** Quadratic/cubic factors, root signs, scale, multiplicity, exact/approximate status and unresolved information.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Cross-representation verification and evidence

Curriculum reference: **Cross-representation verification and evidence** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Two cubics agree at three exact inputs. Must they be the same polynomial?

**Agent-only key:** No; their difference could be a nonzero cubic vanishing at those three inputs. Four distinct exact agreements would suffice for degree≤3.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** The functions x² and x²+x(x-1)(x-2) agree at x=0,1,2. Are they identical?

**Agent-only worked reasoning:** No; the added cubic term vanishes only at those sample points, and at x=3 it equals 6. Finite agreement alone is insufficient without a degree bound; two polynomials of degree at most 2 agreeing at three distinct exact inputs would be identical. The proposed second polynomial is degree 3.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. State the claim's domain and degree bound before deciding what finite evidence proves.
2. Contrast symbolic expansion/reconstruction with sampled plots, then derive the bounded-degree uniqueness exception from the maximum number of roots of a nonzero polynomial.
3. Preserve quotient holes and approximate uncertainty in every representation.

### Practice progression

Refute an identity with one counterexample; prove a true identity by expansion; then evaluate sufficient/insufficient exact samples under stated degree bounds and explain what a graph window can conceal.

**Construction and verification controls:** Pair identities verified by expansion with finite-sample counterexamples, known-degree uniqueness and original denominator holes; inspect exact versus approximate evidence.

### Responsive hints and misconceptions

**First conceptual cue:** What general restriction would make finitely many checks decisive?

If many pixels are called proof, ask whether the plot checks every real input exactly. If a degree bound is assumed without being given, produce an added vanishing-factor term as a countermodel.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Identify which claims are exact, approximate, or underdetermined.
- Preserve original exclusions.
- Explain how reconstruction of the dividend or product verifies the general claim.

**Required case selection:** Evidence limits, degree-bound exceptions, reconstruction checks and exclusions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Separate a polynomial identity from division at a point. From \(x^3+1=(x-1)(x^2+x+1)+2\), the identity is valid at every real input, including 1. The ratio \((x^3+1)/(x-1)=x^2+x+1+2/(x-1)\) is defined only for \(x\ne1\). At 2, values 9 and 7 are respectively the original ratio and the polynomial quotient; the difference is exactly the remainder fraction 2. Neither disagreement invalidates the division.

Extend beyond linear divisors with \(x^4+1=(x^2-1)(x^2+1)+2\). The remainder degree 0 is below 2, and the original ratio excludes \(x=\pm1\). At 2 it equals \(17/3=5+2/3\). For a zero remainder, \((x^3-x)/x=x^2-1\) on \(x\ne0\); cancellation does not fill the original hole at zero.

For omitted remainder contribution, cue “What portion of the dividend has not been included in divisor times quotient?” Next offer the identity \(p=dq+r\) and ask the learner to divide each term; only then show \(q+r/d\). Fade with \(x^3-1\) divided by \(x+1\): quotient \(x^2-x+1\), remainder -2, excluded input -1; at 2 the ratio is \(7/3=3-2/3\).

For scale and evidence, \(2x^2(x-3)\) has a double zero at 0 and simple zero at 3, but the factors without the 2 halve its nonzero values. Multiplication verifies the whole polynomial. Four distinct exact agreements establish equality of two degree-at-most-three polynomials; four screen estimates do not supply four exact conditions. Ask the learner which kind of evidence they actually have.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
