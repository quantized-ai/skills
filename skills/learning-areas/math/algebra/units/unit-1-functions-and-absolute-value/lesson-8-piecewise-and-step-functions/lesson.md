# Piecewise and step functions

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)

## Outcome

The student can evaluate, graph, and analyze piecewise functions and construct step functions whose branch conditions are complete and compatible.

## Scope

### Teach

- Branch selection from input conditions.
- Evaluation and graphing of piecewise rules.
- Open and closed graph endpoints.
- Compatibility of overlapping branch conditions.
- Whole-function domain and range.
- Step functions and threshold models.
- Floor-function evaluation, including negative inputs.

### Defer

- Ceiling and other rounding functions except as optional contrasts.
- Piecewise inverse functions.
- Formal continuity.
- Recursive definitions.

## Agent workflow

Require branch selection before substitution. Treat evaluation, graphing, and construction as related but separately observable abilities. During practice, focus hints on the condition or boundary before discussing the formula. Assessment must include boundary and negative-input cases and must use rules not previously demonstrated.

## Criteria

### Evaluate and graph piecewise functions

#### Knowledge

A piecewise function assigns formulas to specified input regions. The input condition selects the applicable branch before its formula is evaluated. A closed graph point represents an attained endpoint value; an open point excludes that branch's endpoint value.

The whole domain is the union of branch domains, and the whole range is the union of outputs attained by those branches. Overlapping conditions define a function only when all applicable formulas agree at every shared input. A value excluded from one branch may still belong to the function or range through another branch.

#### Learn

- Select the branch by testing the input against every relevant condition.
- Connect inclusive and strict conditions to closed and open graph markers.
- Check overlapping branches for agreement at shared inputs.
- Build the complete domain and range as unions without filling gaps.

#### Practice

Generate rules with two and three branches, finite and unbounded regions, jump points, gaps, and both compatible and conflicting overlaps. Include evaluation at ordinary inputs and exact boundary values. Ask the student to connect symbolic conditions, graph markers, domain, and attained range.

#### Assess

Use a fresh piecewise rule and require:

- evaluation within each branch;
- evaluation at every branch boundary;
- identification of any conflicting overlap;
- a graph or precise graph description with correct endpoint markers; and
- the complete domain and attained range.

#### Mastery evidence

The student selects branches before evaluating, handles boundaries consistently across notation and graph, detects conflicting outputs, and forms domain and range without filling gaps or discarding values attained elsewhere.

#### Misconceptions

- **Choose a formula before checking the condition:** Evaluating the visually nearest or first branch regardless of input.
- **Open means undefined everywhere at that input:** Ignoring another branch that includes the boundary.
- **Any overlap breaks the function:** Rejecting overlaps whose formulas agree on shared inputs.
- **Range connects graph pieces:** Filling output gaps between attained branch values.

### Evaluate and construct step functions

#### Knowledge

A step function is constant on specified input intervals. Endpoint membership comes from the conditions, not from a visual convention.

The floor function (lfloor x\rfloor) is the greatest integer less than or equal to (x). For each integer (n), it equals (n) on ([n,n+1)). Floor is not truncation toward zero; for example, (lfloor-1.2\rfloor=-2).

A threshold model must cover its intended domain without gaps or conflicting outputs. Its range is the set of attained step values, not continuous intervals between them.

#### Learn

- Derive floor values from the greatest-integer definition, especially for negative nonintegers.
- Connect ([n,n+1)) to the open and closed endpoints of the floor graph.
- Translate verbal thresholds into complete branch conditions.
- Check a constructed rule for gaps, overlaps, and exact-boundary behavior.

#### Practice

Use floor evaluations at positive, negative, integer, and near-integer inputs. Generate threshold contexts such as pricing tiers or quantity bands with varied inclusive conventions. Require the student to test values immediately below, at, and above each boundary.

#### Assess

Require:

- floor evaluations at a negative noninteger, an integer, and a positive noninteger;
- a floor graph segment with correct endpoint markers;
- construction of a fresh threshold-based piecewise constant rule; and
- verification that the rule covers the intended domain exactly once at each incompatible-output boundary.

#### Mastery evidence

The student applies the greatest-integer definition rather than truncation, handles jump boundaries correctly, constructs complete compatible intervals, and states the range as attained step values.

#### Misconceptions

- **Floor truncates toward zero:** Giving (lfloor-1.2\rfloor=-1).
- **Both endpoints follow the same convention:** Closing or opening both ends of every floor interval.
- **Threshold equality is arbitrary:** Failing to assign exact boundary inputs from the contextual rule.
- **Step range is continuous:** Including values between constant outputs.

## Lesson completion

Mark this lesson complete only when both criteria have independent assessment evidence, including exact-boundary and negative-input cases.
