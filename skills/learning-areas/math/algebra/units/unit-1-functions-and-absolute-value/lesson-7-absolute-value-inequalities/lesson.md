---
lesson_id: ALG-U01-L07
unit_id: ALG-U01
title: Absolute value inequalities
prerequisites:
  - ALG-U01-L02
  - ALG-U01-L06
---

# Absolute value inequalities

## Outcome

The student can solve an absolute-value linear inequality and justify its complete solution set as an interior or exterior distance condition.

## Scope

### Teach

- Isolation of an absolute-value expression in an inequality.
- Inequality reversal under multiplication or division by a negative number.
- Interior conditions as intersections.
- Exterior conditions as unions.
- Strict and inclusive endpoints.
- Zero and negative isolated bounds.
- Equivalent inequality, interval, and set descriptions.

### Defer

- Nonlinear expressions inside absolute value.
- Systems of absolute-value inequalities.
- Optimization.
- Inequalities requiring numerical approximation.

## Agent workflow

Use distance meaning to establish the logic before teaching symbolic case rules. Ask the student to predict whether the result is interior, exterior, empty, a singleton, or all real numbers before solving. During practice, diagnose isolation, sign reversal, connector, and endpoint errors separately. Assessment must use fresh tasks and require justification, not only interval answers.

## Criteria

### ALG-U01-L07-C01: Solve and justify absolute-value inequalities

#### Knowledge

For (c>0):

\[
|u|<c \iff -c<u<c,
\]

and

\[
|u|>c \iff u<-c\text{ or }u>c.
\]

Inclusive comparisons include the finite boundary values. The absolute value must be isolated first, and the comparison reverses whenever an isolation step multiplies or divides by a negative number.

Nonpositive isolated bounds must be resolved using (|u|\ge0):

- If (c<0), (|u|<c) and (|u|\le c) have no solutions, while (|u|>c) and (|u|\ge c) hold for every defined (u).
- (|u|<0) is impossible.
- (|u|\le0) requires (u=0).
- (|u|>0) requires (u\ne0).
- (|u|\ge0) holds for every defined (u).

An interior distance condition uses an intersection; an exterior condition uses a union.

#### Learn

- Interpret upper distance bounds as points inside a central interval and lower bounds as points outside it.
- Connect strict and inclusive comparisons to excluded and included boundary points.
- Isolate the absolute value while tracking any required reversal.
- Handle negative and zero bounds from nonnegativity before considering a two-case rule.
- Translate the result into equivalent interval notation.

#### Practice

Generate inequalities requiring no isolation, addition or subtraction, division by a positive number, and division by a negative number. Include all four comparison symbols and positive, zero, and negative isolated bounds. Ask for both a logical compound inequality and interval or set notation.

When an answer is wrong, identify whether the root cause is a missed comparison reversal, inappropriate positive-bound rule, incorrect `and`/`or` connector, or endpoint membership.

#### Assess

Use fresh tasks requiring:

- a strict interior solution;
- an inclusive exterior solution;
- isolation involving a negative coefficient and comparison reversal;
- one zero-bound case;
- one negative-bound case; and
- equivalent interval notation with all components and correct endpoints.

Do not include the conversion rules in the prompt.

#### Mastery evidence

The student isolates by equivalence-preserving operations, handles nonpositive bounds before branching, uses intersection for interior and union for exterior conditions, and reports every allowed component with correct boundary membership.

#### Misconceptions

- **Always split into two linear inequalities:** Applying the (c>0) rule when (c\le0).
- **Always use `and`:** Treating an exterior region as an intersection.
- **Always use `or`:** Treating an interior region as a union.
- **No reversal during isolation:** Dividing by a negative value without reversing the comparison.
- **Strictness disappears:** Including boundary points for (<) or (>), or excluding them for (\le) or (\ge).

## Lesson completion

Mark `ALG-U01-L07` complete only when the criterion has independent evidence across positive, zero, and negative bounds and both interior and exterior conditions.
