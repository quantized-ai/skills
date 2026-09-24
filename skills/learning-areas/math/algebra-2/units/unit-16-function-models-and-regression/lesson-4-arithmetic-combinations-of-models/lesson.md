# Lesson 16.4: Arithmetic combinations of models

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Arithmetic combinations build total, net, revenue, and average models from simpler functions. The operations are justified by quantity meanings, units, and the domains shared by the components.

## Learning objectives

- Construct sum, difference, product, and quotient models.
- Interpret each component and the combined quantity.
- Preserve mathematical and contextual domain restrictions.

## Learning outcome

The student can combine function models using meaningful arithmetic operations and a correctly restricted domain.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose an operation whose output units and quantity meaning match the modeled goal.
- Use shared input definitions and intersect component domains before simplification.
- Exclude divisor zeros and any additional infeasible counts, prices, or physical values.
- Interpret the combined model’s initial, limiting, total, or average values through its components.

## Concepts

### Concept U16-L04-C01: Sums and differences of functions

**Content**

Combining contributions; net quantities; common domains; constant plus exponential.

**Learning objectives**

- **U16-L04-C01-O1:** Build a model by adding or subtracting standard function types.
  - Standards: CCSS HSF-BF.A.1b (direct).
- **U16-L04-C01-O2:** Interpret the component functions and domain of a combined model.
  - Standards: CCSS HSF-BF.A.1b (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Combine component outputs only when they describe compatible quantities at a common input.
- Construct a total or net model with the shared component domain and any additional contextual restrictions.
- Interpret each contribution and distinguish the limiting level of a constant-plus-decay model from that of a pure exponential.

**Explanation**

Adding models is appropriate when their outputs describe compatible quantities at the same input. Subtraction gives a net difference. The shared domain is the intersection of component domains, restricted further by context. A constant added to a decaying exponential changes its limiting level, so the combined model is not a pure exponential.

**Worked examples**

1. Revenue $R(q)=12q$ and cost $C(q)=100+5q$ give profit $P(q)=7q-100$ for nonnegative integer $q$. At 20 items, $P=40$.
2. $T(t)=20+60(0.8)^t$ adds an ambient level to a decaying excess. $T(0)=80$ and the long-term level is 20, not 0, for $t\ge0$.

**Exercises**

1. Subtract $C(q)=30+2q$ from $R(q)=5q$. **Answer:** $P(q)=3q-30$.
2. Interpret the 12 in $H(t)=12+5(0.5)^t$. **Answer:** Baseline/limiting level; the decaying component approaches zero.

**Assessment**

Combine $f(t)=8$ and $g(t)=40(0.5)^t$ into a total model for $t\ge0$. Find its initial value and limiting level, and explain each component. **Expected:** $h(t)=8+40(0.5)^t$, initially 48 and tending toward 8; fixed baseline plus decaying excess. **Rubric (4):** combined function and evaluation (2, O1); component meanings and domain (2, O2).

Objective coverage: **U16-L04-C01-O1**, **U16-L04-C01-O2**.

### Concept U16-L04-C02: Products, quotients, and compatible quantities

**Content**

Price times quantity; average quantities; units; zeros in denominator; domain intersection.

**Learning objectives**

- **U16-L04-C02-O1:** Construct product or quotient models with compatible quantity interpretations.
  - Standards: CCSS HSF-BF.A.1b (direct).
- **U16-L04-C02-O2:** Determine and explain domain restrictions and units for combined models.
  - Standards: CCSS HSF-BF.A.1b (direct); CCSS HSF-IF.B.5 (direct); CCSS HSN-Q.A.1 (direct).

**Proficiency criteria**

- Justify multiplication or division through the meanings and units of the component quantities.
- Preserve the intersection of original domains and exclude every zero of a divisor before simplification.
- Apply any additional count, price, or physical restrictions and interpret the resulting rate, total, or average in its correct units.

**Explanation**

A product can combine rate and count; a quotient can form an average or density. Units provide a meaning check. For $(f/g)(x)$, both component functions must exist and $g(x)$ must be nonzero. Simplifying a quotient does not erase exclusions inherited from the original context.

**Worked examples**

1. Price $p(q)=20-0.5q$ dollars/item and quantity $q$ give revenue $R(q)=20q-0.5q^2$ dollars. With nonnegative prices and counts, $q\in\{0,1,\ldots,40\}$.
2. Total cost $C(q)=100+4q$ dollars yields average cost $A(q)=100/q+4$ dollars/item, restricted to positive integer $q$. At $q=25$, average cost is 8.

**Exercises**

1. A rate $r(t)=2t+1$ units/hour operates for a fixed 3 hours at that selected rate. Write total as a function of the rate-selection parameter $t$. **Answer:** $3(2t+1)$ units; this is not the integral of a changing rate over time.
2. Give the domain of $(x+1)/(x-2)$. **Answer:** All real $x\ne2$.

**Assessment**

A model gives price $p(q)=30-q$ and cost $C(q)=60+2q$. Construct revenue and average cost, state their contextual domains, and evaluate average cost at 10 items. **Expected:** $R(q)=30q-q^2$, integer $0\le q\le30$; $A(q)=60/q+2$, integer $1\le q\le30$ if using the same selling context; $A(10)=8$ dollars/item. **Rubric (4):** both models (2, O1); domains, units, and evaluation (2, O2).

Objective coverage: **U16-L04-C02-O1**, **U16-L04-C02-O2**.
