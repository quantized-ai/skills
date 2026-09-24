# Lesson 1.8: Piecewise and step functions

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Piecewise definitions assign formulas to input regions; step functions assign constant outputs to such regions. Boundary membership determines both evaluation and graph markers.

## Learning objectives

- Evaluate and graph piecewise rules using their branch conditions.
- Construct step functions and describe their domain and range.

## Learning outcome

By the end of this lesson, you should be able to move between a piecewise rule, its graph, and threshold conditions without ambiguity at boundaries.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select the branch using its input condition before evaluating the output, including at jump points and negative inputs.
- Draw each branch only on its permitted region and mark included and excluded endpoints consistently with evaluation.
- Combine branch domains and attained outputs to form the whole domain and range without filling gaps.
- Construct a threshold-based constant rule with complete, compatible branch conditions and distinguish floor evaluation from truncation toward zero.

## Concepts

### Concept U01-L08-C01: Evaluating and graphing piecewise functions

**Content**

- Branch conditions, endpoints, and rule selection.
- Open and closed points at boundaries.
- Checking whether overlapping branches define a function.

**Learning objectives**

- **U01-L08-C01-O1:** Evaluate a piecewise function by selecting the branch that contains the input.
  - Standards: CCSS HSF-IF.A.2 (direct).
- **U01-L08-C01-O2:** Graph the branches with correct endpoint conventions and determine domain and range.
  - Standards: CCSS HSF-IF.C.7b (direct); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Choose a branch by checking its input condition before evaluating its formula.
- Restrict each plotted branch to its specified inputs and distinguish included values from open endpoint markers.
- Obtain the total domain and range by combining branch sets without adding values in gaps.
- Identify overlapping conditions that assign different outputs to the same input and explain why they fail to define a function.

**Explanation**

A branch's condition limits where its formula applies. Evaluate the condition before the formula. At a boundary, a closed point supplies the actual value; an open point records a value approached by a branch but excluded there. If two branch conditions overlap and give different outputs at one input, the rule fails to define a function.

**Worked examples**

Let $f(x)=x+2$ for $x<0$ and $f(x)=x^2$ for $x\ge0$. Then $f(-3)=-1$, $f(0)=0$, and $f(2)=4$. Graph the line only left of zero with an open point at $(0,2)$; graph the parabola only right of and including zero with a closed point at $(0,0)$. The domain is $\mathbb R$ and the range is $(-\infty,2)\cup[0,\infty)=\mathbb R$.

**Exercises**

1. For $g(x)=2x$ when $x\le1$ and $g(x)=5$ when $x>1$, find $g(1)$ and $g(2)$. **Answer:** $2$ and $5$.
2. Find the range of this $g$. **Answer:** $(-\infty,2]\cup\{5\}$; outputs between $2$ and $5$ are missing.

**Assessment**

Define $h(x)=-x$ for $x<2$ and $h(x)=3$ for $x\ge2$. Find $h(2)$, sketch the graph with its two boundary markers, and state domain and range. **Expected:** $3$; open $(2,-2)$, closed $(2,3)$; domain $\mathbb R$, range $(-2,\infty)$, since the first branch already attains $3$. **Rubric, 4 points:** evaluation (1; O1), graph and intervals (3; O2).

### Concept U01-L08-C02: Step functions and endpoint conventions

**Content**

- Constant outputs on adjacent intervals.
- Floor notation as a specified example, not a rounding rule.
- Building piecewise constant rules from discrete thresholds.

**Learning objectives**

- **U01-L08-C02-O1:** Graph and evaluate a step function, including at negative inputs and jump points.
  - Standards: CCSS HSF-IF.C.7b (direct).
- **U01-L08-C02-O2:** Construct a piecewise constant function from threshold conditions and explain its domain.
  - Standards: CCSS HSF-BF.A.1a (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Evaluate a step rule using the correct interval at negative inputs and jump boundaries.
- Apply the floor definition as the greatest integer no larger than the input, including for negative noninteger inputs.
- Construct constant branches from threshold statements with correct strict or inclusive endpoints.
- Graph the rule and state its domain and discrete range consistently with those branch conditions.

**Explanation**

Each step is a horizontal segment with its own interval. The floor function $\lfloor x\rfloor$ is the greatest integer not exceeding $x$; it is not truncation toward zero. For integer $n$, its graph is $y=n$ on $[n,n+1)$. Other step functions may use the opposite endpoint convention, depending on their definition.

**Worked examples**

$\lfloor2.8\rfloor=2$, $\lfloor-0.2\rfloor=-1$, and $\lfloor3\rfloor=3$. A fee is $4$ dollars for $0<t\le1$ hour and $7$ dollars for $1<t\le2$ hours. Its graph has an open left and closed right endpoint on each step; at exactly one hour the fee is $4$, not $7$. The domain is $(0,2]$.

**Exercises**

1. Find $\lfloor-3\rfloor$ and $\lfloor-3.1\rfloor$. **Answer:** $-3$ and $-4$.
2. Write a rule that outputs $0$ for $x<0$ and $1$ for $x\ge0$. **Answer:** A two-branch step with an open point at $(0,0)$ and closed point at $(0,1)$, domain $\mathbb R$.

**Assessment**

A measured input $t$ is assigned level $1$ on $0\le t<2$, level $2$ on $2\le t<5$, and level $3$ on $5\le t\le6$. Write and sketch the rule; give its value at $2$ and its domain and range. **Expected:** The stated three constant branches, value $2$, domain $[0,6]$, range $\{1,2,3\}$, correct open/closed ends. **Rubric, 5 points:** evaluation/graph (3; O1), construction and domain (2; O2).
