---
lesson_id: ALG-U01-L04
unit_id: ALG-U01
title: Transformations of functions
prerequisites:
  - ALG-U01-L01
  - ALG-U01-L02
  - ALG-U01-L03
---

# Transformations of functions

## Outcome

The student can derive, apply, and verify transformations of a function's formula, points, domain, range, and identifiable parameters.

## Scope

### Teach

- Horizontal and vertical translations.
- Horizontal and vertical reflections and scale factors.
- Coordinate mappings for combined transformations.
- Domain and range under transformations.
- Recovery of parameters from valid correspondences.
- Graphing technology as a check of mathematical predictions.

### Defer

- Function composition as an independent topic.
- Inverse functions.
- Transformations of statistical data.
- Unjustified parameter recovery from visually similar graphs.

## Agent workflow

Require the student to predict a mapping before plotting. Use technology only to check predictions, not as replacement evidence. Diagnose inside-versus-outside confusion separately from algebraic factoring errors. Practice should vary one parameter at a time before using combined transformations. Assess with fresh parent functions and correspondences, without supplying the mapping formula.

## Criteria

### ALG-U01-L04-C01: Apply translations

#### Knowledge

For

\[
g(x)=f(x-h)+k,
\]

each point ((u,v)) on (f) maps to ((u+h,v+k)) on (g). The horizontal mapping follows by solving (x-h=u); the sign inside the function is not read as an outside movement. Under translation alone, (h) and (k) are the coordinate differences between corresponding points.

#### Learn

- Derive the horizontal mapping by solving the input equation.
- Contrast the inside sign with the direction of the horizontal translation.
- Map several points and a recognizable feature such as a vertex or intercept.
- Recover (h) and (k) only from actual correspondences under translation alone.

#### Practice

Generate formula-to-mapping, mapping-to-formula, and parameter-recovery tasks. Include positive and negative horizontal and vertical translations and parent functions with recognizable features.

#### Assess

Require the student to derive a translation from a formula, map at least two points, and recover a translated formula from supplied corresponding features.

#### Mastery evidence

The student derives rather than guesses the horizontal direction, maps both coordinates correctly, and recovers parameters only when the stated correspondence determines them.

#### Misconceptions

- **Inside sign gives movement directly:** Reading (f(x-3)) as a move left.
- **Only outputs move:** Applying the vertical change but ignoring the horizontal change.
- **Any similar feature corresponds:** Inferring parameters from unrelated points.

### ALG-U01-L04-C02: Apply reflections and scale factors

#### Knowledge

For (g(x)=af(bx)), where (a,b\ne0), a point ((u,v)) maps to

\[
(u/b,av).
\]

Horizontal distances scale by (1/|b|), while vertical distances scale by (|a|). A negative (b) reflects input locations across the vertical axis; a negative (a) reflects outputs across the horizontal axis. Symmetry may conceal a reflection.

Zero multipliers require separate treatment: (a=0) collapses every output to zero, while (b=0) selects the single input value (f(0)), if defined. The nonzero coordinate mapping is therefore not invertible in these cases.

#### Learn

- Derive the reciprocal horizontal coordinate change from (bx=u).
- Contrast coordinate multipliers with geometric scale factors.
- Track reflected coordinates when a multiplier is negative.
- Use a nonsymmetric parent function to expose reflections that symmetry could conceal.

#### Practice

Vary inside and outside multipliers independently before combining them. Include stretches, compressions, both reflections, a symmetric parent that hides one reflection, and zero-multiplier cases requiring verbal analysis rather than the nonzero mapping.

#### Assess

Use a nonsymmetric parent or explicit point set. Require point mappings for positive and negative inside and outside multipliers, geometric scale factors, and an explanation of why a zero multiplier must be handled separately.

#### Mastery evidence

The student divides input coordinates by the inside multiplier, multiplies outputs by the outside multiplier, distinguishes coordinate changes from scale magnitudes, and recognizes concealed or noninvertible cases.

#### Misconceptions

- **Direct horizontal scaling:** Multiplying input coordinates by (b) rather than dividing by it.
- **Negative scale only changes size:** Omitting the associated reflection.
- **Zero uses the same mapping:** Dividing by zero or treating a collapsed graph as invertible.
- **No visible change means no transformation:** Ignoring symmetry that conceals a reflection.

### ALG-U01-L04-C03: Apply and verify combined transformations

#### Knowledge

For

\[
g(x)=af(b(x-h))+k, \qquad a,b\ne0,
\]

the point mapping is

\[
(u,v)\mapsto(h+u/b,av+k).
\]

An affine inside expression must be factored into (b(x-h)) before identifying (h). If the domain of (f) is (D_f), the new domain is ({h+u/b:u\in D_f}); if its range is (R_f), the new range is ({av+k:v\in R_f}). Negative scales reverse interval endpoint order but preserve whether each mapped endpoint is included.

Correspondences and fixed parameters determine unknowns only when enough independent information is supplied. Symmetry may make recovery nonunique. A graphing tool can test predicted points and features in a common viewing window, but substitution into the formula resolves disagreements.

#### Learn

- Factor an inside affine expression before reading transformation parameters.
- Derive the complete mapping and apply it to points, domain, and range.
- Demonstrate endpoint reordering under a negative scale.
- Predict identifiable features before using graphing technology to check them.

#### Practice

Generate combined transformations with factored and unfactored inside expressions. Include disconnected domains or ranges, open and closed endpoints, negative scales, determined and underdetermined parameter recovery, and a technology-check prompt.

#### Assess

Require the student to:

- factor an inside affine expression;
- derive and apply the complete point mapping;
- transform a domain and range with endpoint membership preserved;
- determine or explicitly identify nonuniqueness in a parameter-recovery task; and
- compare one predicted point or feature against a plotted result.

#### Mastery evidence

The student performs the full mapping consistently, preserves set membership, explains identifiability, and uses technology to verify rather than originate unsupported claims.

#### Misconceptions

- **Read before factoring:** Treating (f(2x-6)) as though its horizontal parameter were (6).
- **Fixed transformation order as a shortcut:** Applying memorized graph moves inconsistently instead of using the coordinate mapping.
- **Negative interval endpoints stay ordered:** Failing to reorder mapped endpoints.
- **Graph appearance proves parameters:** Ignoring symmetry or insufficient correspondence information.

## Lesson completion

Mark `ALG-U01-L04` complete only when all three criteria have independent assessment evidence, including an algebraic derivation and a verification task.
