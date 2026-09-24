# Lesson 10.1: Exponential structure

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Exponential structure places the variable in an exponent and produces constant multiplicative change over equal input intervals. Tables must be interpreted with their input spacing, rather than through successive outputs alone.

## Learning objectives

- Distinguish exponential functions from power functions and evaluate them.
- Identify and interpret equal-interval exponential ratios.

## Learning outcome

The student can recognize an exponential representation and connect its base to the correct input interval.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the variable exponent and apply the positive-base, nonconstant-family conditions.
- Evaluate zero and negative inputs without confusing reciprocals with negative outputs.
- Check that table intervals are equal before comparing output ratios.
- Recover a per-unit factor from a longer-interval ratio and distinguish multiplicative change from additive change.

## Concepts

### Concept U10-L01-C01: Exponential functions versus power functions

**Content**

- Variable in an exponent
- Positive base distinct from 1

**Learning objectives**

- **U10-L01-C01-O1:** Distinguish exponential functions from power and polynomial functions.
  - Standards: CCSS HSF-LE.A.1 (supporting knowledge); TEKS 2A.5(B) (supporting knowledge).
- **U10-L01-C01-O2:** Evaluate exponential functions at positive, zero, and negative inputs.
  - Standards: CCSS HSF-IF.A.2 (direct); TEKS 2A.2(A) (supporting knowledge).

**Proficiency criteria**

- Identify whether the variable occurs in the base or the exponent of the defining expression.
- Explain why the usual all-real exponential family uses a positive base different from one.
- Evaluate the entire expression at allowed inputs, treating negative exponents as reciprocals.

**Explanation**

In $f(x)=ab^x$, the variable is in the exponent and $a\ne0$, $b>0$, $b\ne1$. Positive $b$ permits real inputs; $b=1$ would give a constant function. By contrast, $x^3$ is a power function with variable base and fixed exponent. Negative exponents indicate reciprocals, not negative outputs.

**Worked examples**

$f(x)=3\cdot2^x$ is exponential. Its values are $f(0)=3$, $f(2)=12$, and $f(-2)=3/4$. The function $3x^2$ is quadratic. The formula $(-2)^x$ does not define an all-real-domain exponential function: for example, its value at $x=1/2$ is not real.

**Exercises**

1. Classify $5^x$, $x^5$, and $7\cdot1.2^x$. **Answer:** exponential, power/polynomial, exponential.
2. Evaluate $4(1/2)^x$ at $x=-1,0,2$. **Answer:** 8,4,1.

**Assessment**

Explain whether $2\cdot3^x$ and $2x^3$ are exponential; evaluate the exponential at $x=-1$ and 0.

- **U10-L01-C01-O1 — 2 points:** $2\cdot3^x$ is exponential because the variable is the exponent; $2x^3$ is a cubic polynomial.
- **U10-L01-C01-O2 — 2 points:** Values $2/3$ and 2, using $3^{-1}=1/3$ and $3^0=1$.

### Concept U10-L01-C02: Equal-interval ratios

**Content**

- Multiplicative change
- Constant differences versus constant ratios

**Learning objectives**

- **U10-L01-C02-O1:** Test equal-step tables for exponential behavior using ratios.
  - Standards: CCSS HSF-LE.A.1a (direct).
- **U10-L01-C02-O2:** Explain the growth factor over an arbitrary input interval.
  - Standards: CCSS HSF-LE.A.1a (direct); CCSS HSF-IF.C.8b (direct).

**Proficiency criteria**

- Compare output ratios only across equal input increments.
- Relate each constant ratio to the base raised to the length of its input interval.
- Distinguish evidence for an exponential pattern from constant differences and from proof of a unique model on unlisted inputs.

**Explanation**

For $f(x)=ab^x$, $f(x+h)/f(x)=b^h$ wherever $a\ne0$. Thus equal input increments give equal multiplicative factors. Use equal input steps when comparing ratios. Constant first differences characterize a linear pattern; a table alone does not prove that no other formula could fit its finite points.

**Worked examples**

At inputs 0,2,4, outputs 5,20,80 have ratio 4 for each two-unit interval. Hence $b^2=4$ and the positive base is $b=2$, giving $f(x)=5\cdot2^x$. For one-unit steps the factor is 2, not 4. Outputs 5,9,13 at the same inputs have constant difference 4 and suggest a linear model instead.

**Exercises**

1. Inputs 0,1,2 give outputs 9,3,1. Find the factor. **Answer:** $1/3$ per unit.
2. Inputs 1,3,5 give outputs 2,18,162. Find the factor per unit. **Answer:** $b^2=9$, so $b=3$.

**Assessment**

At inputs 0,3,6 the outputs are 4,32,256. Test the ratios and find the one-unit growth factor.

- **U10-L01-C02-O1 — 2 points:** $32/4=256/32=8$, a constant ratio across equal three-unit intervals.
- **U10-L01-C02-O2 — 2 points:** The one-unit factor is $b=2$, since $b^3=8$; a six-unit factor is $2^6=64$.
