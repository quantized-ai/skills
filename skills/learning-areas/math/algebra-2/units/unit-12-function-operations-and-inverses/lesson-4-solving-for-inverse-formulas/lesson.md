# Lesson 12.4: Solving for inverse formulas

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

Finding an inverse formula means solving for the original input. Linear and simple rational formulas illustrate how reversed operations and excluded values determine the inverse representation.

## Learning objectives

- Derive inverses of nonconstant linear and one-to-one simple rational functions.
- Verify the reversed operations and specify exchanged domain and range restrictions.

## Learning outcome

The student can derive an inverse formula algebraically and explain the conditions under which it reverses the original function.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Treat the original output as known and solve for its input rather than merely swapping variable names.
- Reverse linear operations in the appropriate order.
- Collect and factor the original input when it occurs in both parts of a rational expression.
- Use impossible original outputs and excluded inputs to determine inverse restrictions and verify the resulting formula.

## Concepts

### Concept U12-L04-C01: Linear inverses and reversal of operations

**Content**

- Solve for the original input
- Meaning of the inverse formula

**Learning objectives**

- **U12-L04-C01-O1:** Find the inverse of a nonconstant linear function algebraically.
  - Standards: CCSS HSF-BF.B.4a (direct); TEKS 2A.2(B) (direct).
- **U12-L04-C01-O2:** Interpret and verify the reversal of the function’s operations.
  - Standards: TEKS 2A.2(C) (supporting knowledge); TEKS 2A.2(D) (direct).

**Proficiency criteria**

- Solve the defining linear equation for the original input with a nonzero slope.
- Explain the reverse order of the original arithmetic operations.
- Verify algebraically that the derived inverse returns the original input on the stated domain.

**Explanation**

To invert a one-to-one formula, write $y=f(x)$, solve for $x$ in terms of $y$, and rename the input variable. A linear function $ax+b$ with $a\ne0$ has inverse $(x-b)/a$. Its operations undo in reverse order: subtract $b$, then divide by $a$. Interchanging letters without solving does not finish the inverse.

**Worked examples**

For $f(x)=3x-5$, solve $y=3x-5$: $y+5=3x$, so $x=(y+5)/3$. Thus $f^{-1}(x)=(x+5)/3$, with both domains all real. Check $f^{-1}(f(4))=f^{-1}(7)=4$ and algebraically $[(3x-5)+5]/3=x$.

**Exercises**

1. Find the inverse of $f(x)=5-2x$. **Answer:** $f^{-1}(x)=(5-x)/2$.
2. Find the inverse of $f(x)=x/4+3$. **Answer:** $f^{-1}(x)=4x-12$.

**Assessment**

Find the inverse of $f(x)=4x+7$ and verify algebraically that applying it after $f$ returns the original input.

- **U12-L04-C01-O1 — 2 points:** From $y=4x+7$, $x=(y-7)/4$, so $f^{-1}(x)=(x-7)/4$.
- **U12-L04-C01-O2 — 2 points:** $f^{-1}(f(x))=[(4x+7)-7]/4=x$ for every real $x$, undoing addition before multiplication.

### Concept U12-L04-C02: Simple rational inverses

**Content**

- Solving with the input in numerator and denominator
- Excluded input and output exchange

**Learning objectives**

- **U12-L04-C02-O1:** Find the inverse of a one-to-one simple rational function.
  - Standards: CCSS HSF-BF.B.4a (direct); TEKS 2A.2(B) (direct).
- **U12-L04-C02-O2:** Specify the inverse domain and range from the original function.
  - Standards: TEKS 2A.2(C) (supporting knowledge); TEKS 2A.7(I) (direct).

**Proficiency criteria**

- Clear the denominator only on the original domain and collect all terms containing the original input.
- Derive an inverse formula with its new nonzero-denominator condition.
- Explain how original excluded inputs and unattainable outputs become inverse range and domain restrictions, distinguishing the nonconstant case from a noninvertible constant quotient.

**Explanation**

For a linear-fractional function, multiply by the denominator, collect all terms containing the original input, factor that input, and divide. Track the original excluded input and any impossible output. A nonconstant function $(ax+b)/(cx+d)$ with $ad-bc\ne0$ is one-to-one on its natural domain; a constant quotient cannot be inverted that way.

**Worked examples**

For $f(x)=(2x+1)/(x-3)$, $x\ne3$, solve $y(x-3)=2x+1$, then $x(y-2)=3y+1$. Thus $f^{-1}(x)=(3x+1)/(x-2)$, $x\ne2$. The original never equals 2 because $2x+1=2x-6$ is impossible. Its range excludes 2, so the inverse domain excludes 2 and its range excludes 3.

**Exercises**

1. Find the inverse of $f(x)=1/(x+2)$. **Answer:** $f^{-1}(x)=1/x-2$, domain $x\ne0$, range $y\ne-2$.
2. Find the inverse of $f(x)=(x+1)/(x-1)$. **Answer:** the same formula, with domain and range excluding 1.

**Assessment**

Find the inverse of $f(x)=(x+4)/(x-2)$ and state both functions’ domain and range.

- **U12-L04-C02-O1 — 2 points:** $y(x-2)=x+4$ gives $x(y-1)=2y+4$, so $f^{-1}(x)=(2x+4)/(x-1)$.
- **U12-L04-C02-O2 — 2 points:** Original domain excludes 2, range excludes 1; inverse domain excludes 1, range excludes 2.
