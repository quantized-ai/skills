# Lesson 1.3: Features and change in functions

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Function features describe where outputs lie and how they change. Average rate of change summarizes endpoint change and must be interpreted separately from behavior inside an interval.

## Learning objectives

- Describe intercepts, sign, monotonicity, and extrema from a function representation.
- Compute average rate of change and interpret its units and limitations.

## Learning outcome

By the end of this lesson, you should be able to give a consistent account of a function’s key features and its net change over an interval.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Report zeros as inputs and intercepts as points; distinguish positive output intervals from increasing intervals.
- Identify increasing and decreasing intervals and distinguish local extrema from extrema over the entire stated domain.
- Compute or estimate a secant slope using corresponding endpoint changes in a consistent order.
- Interpret the sign and output-per-input units of an average rate without claiming that it determines behavior at every interior point.

## Concepts

### Concept U01-L03-C01: Intercepts, intervals, and extrema

**Content**

- Zeros versus the $y$-intercept; positive and negative outputs.
- Increasing, decreasing, and constant intervals.
- Local versus absolute extrema; endpoint conventions.

**Learning objectives**

- **U01-L03-C01-O1:** Identify intercepts, sign intervals, and increasing or decreasing intervals from a graph or description.
  - Standards: CCSS HSF-IF.B.4 (supporting knowledge).
- **U01-L03-C01-O2:** Interpret extrema and intervals in a quantitative context, distinguishing local from absolute behavior.
  - Standards: CCSS HSF-IF.B.4 (direct).

**Proficiency criteria**

- Distinguish zero inputs from intercept points and distinguish output sign from increasing or decreasing behavior.
- Identify complete intervals of positive, negative, increasing, and decreasing behavior using the stated graph or description.
- Compare nearby outputs for a local extremum and all allowed outputs for an absolute extremum, including relevant domain endpoints.
- Interpret an extremum with both its input location and output value, using the corresponding units.

**Explanation**

Zeros are inputs with output zero; intercepts are points. Increasing means larger inputs give larger outputs throughout an interval. A positive function need not be increasing. A local maximum compares nearby outputs; an absolute maximum compares every output in the domain. For this curriculum, increasing/decreasing intervals are normally reported as open intervals separated by turning points; endpoint-inclusive descriptions with equivalent meaning are acceptable.

**Worked examples**

Let $h(t)=4-(t-2)^2$ be a height in meters for $0\le t\le4$ seconds. Its zeros are $0$ and $4$, its $y$-intercept is $(0,0)$, and $h(t)>0$ for $0<t<4$. Height increases on $(0,2)$ and decreases on $(2,4)$. The absolute maximum is $4$ meters at $t=2$ seconds; zero meters is attained at both endpoints.

**Exercises**

1. For the graph $y=-x$ on all real inputs, state where outputs are positive and where it decreases. **Answer:** Positive on $(-\infty,0)$; decreasing on $\mathbb R$.
2. A graph has a local peak at height $3$ and later a peak at height $7$. Is the first necessarily an absolute maximum? **Answer:** No; the later output is larger.

**Assessment**

A continuous temperature graph on $0\le t\le6$ is linear between $(0,1),(2,5),(4,3),(6,7)$. State its increasing intervals, the local maximum in the interior, and its absolute maximum with units of degrees Celsius and hours. **Expected:** $(0,2)$ and $(4,6)$; local maximum $5$ degrees at $2$ hours; absolute maximum $7$ degrees at $6$ hours. **Rubric, 4 points:** intervals (2; O1), extrema distinction and context (2; O2).

### Concept U01-L03-C02: Average rate of change

**Content**

- $[f(b)-f(a)]/(b-a)$ for $a\ne b$.
- Secant slope from formula, table, or graph.
- Output units per input unit; average change versus pointwise behavior.

**Learning objectives**

- **U01-L03-C02-O1:** Compute or estimate average rate of change from multiple representations.
  - Standards: CCSS HSF-IF.B.6 (direct).
- **U01-L03-C02-O2:** Interpret its sign and units without inferring monotonicity throughout the interval.
  - Standards: CCSS HSF-IF.B.6 (direct).

**Proficiency criteria**

- Use distinct input endpoints and subtract the corresponding outputs and inputs in a consistent order.
- Compute the secant slope exactly from exact data or give a justified estimate from a graph.
- Express the rate in output units per input unit and interpret its sign as net change.
- Explain why equal endpoint outputs or a signed average rate do not establish constant or monotone behavior inside the interval.

**Explanation**

Average rate compares net output change with input change. It equals the slope of the line through the two endpoint points. A zero rate means equal endpoint outputs, even when the function rises or falls between them. Instantaneous rate and derivatives are outside this course.

**Worked examples**

For $f(x)=x^2$ on $[1,4]$, the rate is $(16-1)/(4-1)=5$. On $[-2,2]$ the same function has rate $(4-4)/4=0$, yet it decreases and then increases. For volume measurements $V(2)=30$ and $V(5)=18$ liters, the rate is $(18-30)/(5-2)=-4$ liters per minute: a net loss averaging four liters per minute.

**Exercises**

1. Find the average rate of $x^2+1$ on $[0,3]$. **Answer:** $(10-1)/3=3$.
2. A graph shows approximately $(1,8)$ and $(5,10)$. Estimate the rate. **Answer:** $0.5$ output units per input unit; precision is limited by graph reading.

**Assessment**

A distance-from-start table gives $(t,d)=(0,2),(2,8),(4,2)$ in seconds and meters. Find the average rates on $[0,2]$ and $[0,4]$, and explain whether the second rate proves no motion occurred. **Expected:** $3$ m/s and $0$ m/s; no, the intermediate distance changed. **Rubric, 4 points:** rates (2; O1), units and interpretation (2; O2).
