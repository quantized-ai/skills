---
lesson_id: ALG-U01-L03
unit_id: ALG-U01
title: Features and change in functions
prerequisites:
  - ALG-U01-L01
  - ALG-U01-L02
---

# Features and change in functions

## Outcome

The student can describe a function's key features and compute and interpret its average rate of change over an interval.

## Scope

### Teach

- Zeros and intercepts.
- Positive and negative output intervals.
- Increasing, decreasing, and constant intervals.
- Local and absolute extrema, including endpoints.
- Average rate of change from formulas, tables, and graphs.
- Units and limitations of average rate of change.

### Defer

- Instantaneous rate of change and derivatives.
- Optimization methods.
- Formal continuity.
- Regression and model fitting.

## Agent workflow

Diagnose criteria separately. Teach the missing distinction or procedure, then use varied representations during practice. Give error-specific hints and reduce support as performance improves. Assess with fresh tasks and no hints. A correct calculation does not demonstrate interpretation, and a correct feature list without valid interval reasoning does not demonstrate the relevant criterion.

## Criteria

### ALG-U01-L03-C01: Describe function features

#### Knowledge

A zero is an input satisfying (f(x)=0); an intercept is a point on the graph. Positive or negative intervals describe output sign and are different from intervals where a function increases or decreases.

A function is increasing on an interval when larger inputs there have larger outputs, decreasing when larger inputs have smaller outputs, and constant when outputs remain equal. A local extremum compares nearby allowed outputs; an absolute extremum compares all outputs in the stated domain. Endpoint extrema use one-sided comparison. When reporting monotonic intervals, open turning-point endpoints are conventional; including an endpoint is also valid when the comparison property remains true.

#### Learn

- Contrast a zero such as (x=3) with the intercept point ((3,0)).
- Use one graph to contrast positive output with increasing behavior.
- Model complete interval descriptions with correct boundary membership.
- Compare local and absolute extrema and identify an extremum's input location and output value.

#### Practice

Use formulas, tables, and graph descriptions containing multiple intercepts, sign changes, turning points, constant portions, and domain endpoints. Ask for both symbolic features and contextual interpretations when quantities and units are supplied.

Diagnose whether errors arise from confusing coordinates, sign with direction, local with absolute comparison, or open/closed boundary membership.

#### Assess

Use a fresh graph or precise graph description that contains:

- at least one zero;
- positive and negative output regions;
- increasing and decreasing behavior;
- a local extremum; and
- an absolute or endpoint extremum.

Require zeros as inputs, intercepts as points, complete intervals, and extrema with both location and value.

#### Mastery evidence

The student consistently distinguishes zeros from intercepts, sign from monotonicity, and local from absolute comparison while reporting all features with valid intervals and contextual units when applicable.

#### Misconceptions

- **Zero as a point:** Reporting ((a,0)) when asked for a zero, or (a) when asked for an intercept.
- **Positive means increasing:** Inferring direction of change from the sign of the output.
- **Highest visible nearby point is absolute:** Failing to compare the entire stated domain.
- **Endpoint cannot be an extremum:** Ignoring valid one-sided comparisons.

### ALG-U01-L03-C02: Compute and interpret average rate of change

#### Knowledge

For distinct allowed inputs (a) and (b), average rate of change is

\[
\frac{f(b)-f(a)}{b-a}.
\]

It is the slope of the secant line between the endpoint points. It may be computed exactly from a formula or table and estimated from a graph. Its units are output units per input unit. Its sign describes net change between the endpoints, not behavior at every interior point. A zero average rate means equal endpoint outputs, not that the function is constant between them.

#### Learn

- Derive the quotient as change in output divided by the corresponding change in input.
- Demonstrate that reversing both differences preserves the result, while reversing only one does not.
- Connect the quotient to a secant line.
- Contrast net endpoint change with possible interior behavior.

#### Practice

Generate computations from a formula, a table, and readable graph data. Include positive, negative, and zero rates; non-unit input intervals; contextual units; and an example whose interior behavior differs from the net rate.

#### Assess

Require:

- one exact calculation from a formula or table;
- one justified estimate from a graph;
- correct output-per-input units;
- an interpretation of the sign; and
- an explanation of why the average does not determine all interior behavior.

#### Mastery evidence

The student uses corresponding endpoint differences in a consistent order, computes or estimates accurately, states correct units, and limits the interpretation to net change over the specified interval.

#### Misconceptions

- **Output over input:** Computing (f(b)/b) instead of a difference quotient.
- **Mismatched order:** Reversing one difference but not the other.
- **Average equals constant behavior:** Assuming the function has the same rate at every interior point.
- **Zero rate means constant function:** Ignoring equal endpoints with nonconstant behavior between them.

## Lesson completion

Mark `ALG-U01-L03` complete only when both criteria have independent assessment evidence, including interpretation rather than calculation alone.
