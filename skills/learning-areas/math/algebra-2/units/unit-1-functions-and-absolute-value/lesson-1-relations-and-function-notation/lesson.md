# Lesson 1.1: Relations and function notation

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Relations establish which inputs are allowed and whether each has a unique output. Function notation then connects these assignments to formulas and to quantities in context.

## Learning objectives

- Classify relations and describe their input and output sets.
- Evaluate function notation and interpret the quantities it represents.

## Learning outcome

By the end of this lesson, you should be able to decide whether a relation defines a function and use its notation to compute and communicate outputs.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Justify a function classification with the single-output condition across ordered pairs, tables, and graphs; repeated outputs alone must not be treated as a violation.
- Distinguish domain from range and list each member of a finite set only once.
- Substitute a complete numerical or algebraic input into every occurrence of the variable while preserving grouping and signs.
- Interpret an input-output statement with the correct quantities and units, without treating the function name as a multiplier.

## Concepts

### Concept U01-L01-C01: Functions as single-output relations

**Content**

- Ordered pairs, input, output, domain, and range.
- Exactly one output per allowed input; repeated outputs are permitted.
- The vertical-line test as a consequence of the definition.

**Learning objectives**

- **U01-L01-C01-O1:** Decide whether a relation given by pairs, a table, or a graph is a function and justify the decision.
  - Standards: CCSS HSF-IF.A.1 (prerequisite review).
- **U01-L01-C01-O2:** List the domain and range of a finite relation without repeating elements.
  - Standards: CCSS HSF-IF.A.1 (prerequisite review); TEKS 2A.7(I) (supporting knowledge).

**Proficiency criteria**

- Apply the exactly-one-output condition to each allowed input and identify a specific violation when the relation fails.
- Explain the vertical-line test in terms of a fixed input and distinguish repeated outputs from conflicting outputs.
- List distinct domain and range elements from the relation without inserting intermediate values.

**Explanation**

A relation is a collection of input-output pairs. It is a function when each input in its domain has exactly one output. Two different inputs may produce the same output. On a graph, a vertical line fixes an input; two distinct intersection points would assign it two outputs. A graph need not meet every vertical line, since its domain may exclude some inputs.

**Worked examples**

For $R=\{(-2,5),(0,5),(3,-1)\}$, no input is paired with two different outputs, so $R$ is a function. Its domain is $\{-2,0,3\}$ and its range is $\{-1,5\}$. Adding $(0,7)$ makes it fail the function definition because input $0$ would produce both $5$ and $7$.

**Exercises**

1. Classify $\{(1,4),(2,4),(3,4)\}$ and state its domain and range. **Answer:** Function; $D=\{1,2,3\}$, $R=\{4\}$.
2. Is $x^2+y^2=1$ a function of $x$ over the entire circle? **Answer:** No; $x=0$ gives $y=1$ and $y=-1$. The upper semicircle alone is a function.

**Assessment**

Given $\{(-1,2),(2,3),(-1,4)\}$, decide whether it is a function, state its domain and range, and explain why repeated outputs would not by themselves be a problem. **Expected:** Not a function; $-1$ has two outputs; domain $\{-1,2\}$, range $\{2,3,4\}$; the rule restricts outputs per input, not inputs per output. **Rubric, 4 points:** decision and reason (2; O1), domain and range (2; O2).

### Concept U01-L01-C02: Evaluating and interpreting function notation

**Content**

- $f(x)$ as an output, not multiplication.
- Numerical and algebraic inputs; parentheses in substitution.
- Input-output statements in context.

**Learning objectives**

- **U01-L01-C02-O1:** Evaluate a formula at numerical and algebraic inputs in its domain.
  - Standards: CCSS HSF-IF.A.2 (prerequisite review).
- **U01-L01-C02-O2:** Interpret a statement using function notation in terms of the quantities and their units.
  - Standards: CCSS HSF-IF.A.2 (direct).

**Proficiency criteria**

- Replace every occurrence of the input variable with the complete supplied expression, retaining parentheses needed for signs and powers.
- Evaluate or simplify the substituted expression without treating function notation as multiplication.
- Interpret the input and output as different quantities with their associated units and stated domain conditions.

**Explanation**

The letter names the rule; the expression inside the parentheses is the entire input. Replace every occurrence of the input variable with that expression. If $T(t)$ is temperature in degrees Celsius after $t$ minutes, $T(4)=18$ says that after four minutes the temperature is $18$ degrees Celsius. It does not say that $T$ times $4$ is $18$.

**Worked examples**

For $f(x)=x^2-3x$, $f(-2)=(-2)^2-3(-2)=10$, and $f(a+1)=(a+1)^2-3(a+1)=a^2-a-2$. If this formula models displacement $f(t)$ in meters at time $t$ seconds, $f(4)=4$ means displacement is $4$ meters at $4$ seconds; time units and displacement units remain different.

**Exercises**

1. For $g(x)=2x-5$, find $g(-3)$ and $g(t+2)$. **Answer:** $-11$ and $2t-1$.
2. A tank has volume $V(t)$ liters after $t$ minutes. Interpret $V(6)=20$. **Answer:** It contains $20$ liters after six minutes.

**Assessment**

For $C(n)=3n+8$, where $n$ is a nonnegative integer number of items and $C$ is cost in dollars, find $C(5)$ and $C(k+1)$ and interpret $C(5)$. **Expected:** $23$, $3k+11$, and five items cost $23$ dollars. **Rubric, 4 points:** evaluations (2; O1), input/output meanings and units (2; O2).
