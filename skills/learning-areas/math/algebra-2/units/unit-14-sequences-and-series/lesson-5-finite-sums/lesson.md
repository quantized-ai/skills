# Lesson 14.5: Finite sums

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Finite sums combine indexed terms into totals. Pairing and cancellation derive the arithmetic and geometric formulas while clarifying term counts and exceptional cases.

## Learning objectives

- Expand finite sigma notation and identify the number of included terms.
- Derive and apply an arithmetic-sum formula by pairing.
- Derive and apply the finite geometric-sum formula, including the unit-ratio case.

## Learning outcome

The student can select, justify, and apply a finite-sum method with correct bounds and validity conditions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Translate between a finite indexed sum and its included terms without confusing the upper bound with the count.
- Distinguish a sequence term from the partial sum containing it.
- Explain arithmetic pairing and geometric cancellation as derivations rather than unsupported formula choices.
- Use the appropriate formula for the identified structure and handle a unit geometric ratio without dividing by zero.

## Concepts

### Concept U14-L05-C01: Sigma notation and arithmetic sums

**Content**

Terms versus partial sums; inclusive bounds; $n(a_1+a_n)/2$.

**Learning objectives**

- **U14-L05-C01-O1:** Expand and evaluate finite sums with correct index bounds.
  - Standards: CCSS HSA-SSE.B.4 (supporting knowledge).
- **U14-L05-C01-O2:** Derive and apply the arithmetic-sum formula by pairing terms.
  - Standards: CCSS HSA-SSE.B.4 (supporting knowledge; arithmetic sums are not the standard’s direct target).

**Proficiency criteria**

- Expand sigma notation using every inclusive index and distinguish a single term from a partial sum.
- Count the terms from both bounds rather than interpreting the upper bound alone as the count.
- Justify an arithmetic total by pairing forward and reversed terms, including an odd number of terms.

**Explanation**

A series adds sequence terms; $a_n$ is one term whereas $S_n$ is a total. Bounds $j$ through $k$ include $k-j+1$ terms. In an arithmetic sum, writing the terms in forward and reverse order makes every paired column equal to $a_1+a_n$. Hence $2S_n=n(a_1+a_n)$, valid for odd or even $n$.

**Worked examples**

1. $\sum_{k=0}^{3}(2k+1)=1+3+5+7=16$; four terms occur despite upper bound 3.
2. For $4+7+10+\cdots+31$, solve $31=4+3(n-1)$ to get $n=10$. Pairing gives $S=10(4+31)/2=175$.

**Exercises**

1. Evaluate $\sum_{k=2}^{5}k$. **Answer:** $2+3+4+5=14$.
2. Sum the first 20 terms of $a_n=3n$. **Answer:** $a_1=3,a_{20}=60$; $S_{20}=20(63)/2=630$.

**Assessment**

Expand $\sum_{k=1}^{4}(5+2k)$ and find its sum using pairing. **Expected:** $7+9+11+13$; forward/reverse pairs sum to 20, so $2S=4(20)$ and $S=40$. **Rubric (4):** expansion and term count (2, O1); pairing argument and total (2, O2).

Objective coverage: **U14-L05-C01-O1**, **U14-L05-C01-O2**.

### Concept U14-L05-C02: Derivation of finite geometric sums

**Content**

$S_n=a_1(1-r^n)/(1-r)$; cancellation; $r=1$ separately.

**Learning objectives**

- **U14-L05-C02-O1:** Derive the finite-geometric-sum formula by subtraction.
  - Standards: CCSS HSA-SSE.B.4 (direct).
- **U14-L05-C02-O2:** Apply the formula while treating $r=1$ and the number of terms correctly.
  - Standards: CCSS HSA-SSE.B.4 (direct).

**Proficiency criteria**

- Derive the finite geometric-sum identity by aligning the original sum with its ratio multiple and showing cancellation.
- Identify the first included term, common ratio, and number of terms before substituting into the formula.
- Treat a unit ratio separately because the derivation’s division is invalid there, and avoid imposing an infinite-series convergence condition on a finite sum.

**Explanation**

Write $S_n=a_1+a_1r+\cdots+a_1r^{n-1}$. Multiplying gives $rS_n=a_1r+\cdots+a_1r^n$. Subtract to obtain $(1-r)S_n=a_1(1-r^n)$. Divide only when $r\ne1$. If $r=1$, all $n$ terms equal $a_1$, so $S_n=na_1$. No convergence condition is needed for a finite sum.

**Worked examples**

1. $3+6+12+24+48$ has $a_1=3,r=2,n=5$. $S_5=3(1-32)/(1-2)=93$, matching direct addition.
2. $7+7+7+7$ has $r=1$. The quotient formula would be $0/0$, so use $S_4=4(7)=28$.

**Exercises**

1. Sum $8+4+2+1$. **Answer:** $8(1-(1/2)^4)/(1-1/2)=15$.
2. Evaluate $\sum_{k=0}^{3}2(-3)^k$. **Answer:** Four terms, $2-6+18-54=-40$.

**Assessment**

Derive $S_n$ by displaying $S_n-rS_n$, then evaluate a six-term geometric sum with first term 5 and ratio 1. **Expected:** $(1-r)S_n=a_1-a_1r^n$, quotient for $r\ne1$; the specified sum is $6(5)=30$. **Rubric (4):** cancellation and qualified derivation (2, O1); detects $r=1$ and obtains 30 (2, O2).

Objective coverage: **U14-L05-C02-O1**, **U14-L05-C02-O2**.
