# Lesson 14.3: Geometric sequences

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Geometric sequences express repeated multiplication, including alternating-sign and percent-change patterns. The lesson connects ratio behavior with explicit powers and complete recursive models.

## Learning objectives

- Identify a geometric ratio and construct an explicit sequence rule.
- Explain sign and magnitude behavior from the ratio.
- Translate geometric forms and model constant percentage change.

## Learning outcome

The student can construct and interpret geometric sequences while preserving their indexing, ratio meaning, and domain.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Justify a constant multiplier and account for zero terms that obstruct quotient tests.
- Use the ratio’s sign and magnitude separately to describe the sequence’s behavior.
- Produce matching recursive and explicit rules with a complete initial condition.
- Translate percent change into a current-amount multiplier and distinguish integer sequence behavior from a continuous exponential extension.

## Concepts

### Concept U14-L03-C01: Constant ratios and explicit formulas

**Content**

Common ratio; $a_n=a_1r^{n-1}$; positive, negative, and fractional ratios.

**Learning objectives**

- **U14-L03-C01-O1:** Identify geometric sequences and determine an explicit rule.
  - Standards: CCSS HSF-BF.A.2 (direct); TEKS A.12(D) (prerequisite review).
- **U14-L03-C01-O2:** Explain the effects of ratio sign and magnitude on the terms.
  - Standards: CCSS HSF-IF.A.3 (direct); CCSS HSF-LE.A.1a (supporting knowledge).

**Proficiency criteria**

- Test a common ratio using nonzero consecutive terms and identify when zero terms prevent quotient-based identification.
- Construct an explicit geometric rule with the correct exponent offset for its initial index.
- Predict sign alternation and magnitude growth or decay separately from the sign and absolute value of the ratio.

**Explanation**

For nonzero consecutive terms, a geometric sequence has constant quotient $a_{n+1}/a_n=r$. Each move multiplies by $r$, so $n-1$ moves give $r^{n-1}$. Negative ratios alternate signs; $0<|r|<1$ shrinks magnitudes. The all-zero sequence does not have a uniquely recoverable ratio. If $r=0$ and $a_1\ne0$, all later terms are zero, and later quotients cannot determine the rule.

**Worked examples**

1. $3,6,12,24$ has $r=2$ and $a_n=3\cdot2^{n-1}$, so $a_6=96$.
2. $16,-8,4,-2$ has $r=-1/2$ and $a_n=16(-1/2)^{n-1}$. Signs alternate while magnitudes halve.

**Exercises**

1. Find a rule for $81,27,9,3$. **Answer:** $a_n=81(1/3)^{n-1}$.
2. Is $2,4,7,11$ geometric? **Answer:** No; ratios $2,7/4,11/7$ differ.

**Assessment**

For $-5,15,-45,135$, determine the explicit formula and describe sign and magnitude behavior. **Expected:** $a_n=-5(-3)^{n-1}$; alternating signs, magnitudes triple. **Rubric (4):** ratio and rule (2, O1); sign and magnitude explanations (2, O2).

Objective coverage: **U14-L03-C01-O1**, **U14-L03-C01-O2**.

### Concept U14-L03-C02: Geometric recursion and percent change

**Content**

Recursive exponential relationships; percent growth/decay; time-zero indexing.

**Learning objectives**

- **U14-L03-C02-O1:** Translate geometric rules between recursive and explicit forms.
  - Standards: CCSS HSF-BF.A.2 (direct); TEKS 2A.5(B) (direct).
- **U14-L03-C02-O2:** Create a geometric model from a constant percent change and interpret its ratio.
  - Standards: CCSS HSF-LE.A.1c (direct); TEKS 2A.5(B) (direct).

**Proficiency criteria**

- Convert a stated percent change into a multiplier acting on the current amount, distinguishing amount retained from amount lost.
- Write equivalent explicit and recursive rules with a complete initial condition and integer domain.
- Interpret a geometric sequence with a negative ratio on integer inputs without assuming it extends to a real-input exponential function.

**Explanation**

A percent change acts on the current amount. Increase by $p$ uses $1+p$ and decrease by $p$ uses $1-p$, with $p$ a decimal. A fixed percentage is generally a changing absolute increment. A real exponential extension assumes a positive ratio; negative-ratio sequences remain meaningful on integer inputs.

**Worked examples**

1. Starting at $P_0=200$ with 10% growth gives $P_n=1.10P_{n-1}$ and $P_n=200(1.10)^n$. Thus $P_2=242$, an increase of 22 on the second step.
2. $Q_n=80(0.75)^{n-1}$ becomes $Q_1=80$, $Q_n=0.75Q_{n-1}$; it loses 25%, not 75%, per step.

**Exercises**

1. Write explicit and recursive models for 500 initially with 4% decay per step. **Answer:** $A_n=500(0.96)^n$; $A_0=500$, $A_n=0.96A_{n-1}$.
2. Interpret ratio 1.08. **Answer:** An 8% increase each step.

**Assessment**

A model has $M_0=120$, $M_n=0.8M_{n-1}$. Write the explicit form and interpret the percent change; calculate $M_2$. **Expected:** $120(0.8)^n$, 20% decrease, $76.8$. **Rubric (4):** correct form and evaluation (2, O1); correct percent and current-amount interpretation (2, O2).

Objective coverage: **U14-L03-C02-O1**, **U14-L03-C02-O2**.
