# Lesson 11.4: Change of base and inverse identities

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

Change of base permits numerical evaluation, while inverse identities explain which operations undo each other. Both require attention to valid bases and to the order-dependent domains of the compositions.

## Learning objectives

- Derive and apply the change-of-base formula.
- Simplify matching exponential-logarithmic compositions with their original domains.

## Learning outcome

The student can justify a logarithm evaluation or inverse simplification and preserve every condition needed for it to be valid.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive change of base by introducing the unknown exponent and taking a valid auxiliary logarithm.
- Keep the change-of-base denominator nonzero and retain the exact expression until rounding.
- Recognize matching bases when applying an inverse identity.
- Distinguish the domain of a logarithm after an exponential from the domain of an exponential after a logarithm.

## Concepts

### Concept U11-L04-C01: Change-of-base formula

**Content**

- Derivation from an exponential equality
- Exact expression before approximation

**Learning objectives**

- **U11-L04-C01-O1:** Derive a change-of-base expression for a logarithm.
  - Standards: CCSS HSF-BF.B.5 (+) (supporting knowledge).
- **U11-L04-C01-O2:** Evaluate logarithms with technology using valid base and argument conditions.
  - Standards: CCSS HSF-LE.A.4 (supporting knowledge); TEKS 2A.5(D) (supporting knowledge).

**Proficiency criteria**

- Start from the equivalent exponential equation and justify dividing by the logarithm of the original base.
- State valid argument and base conditions, including those for the chosen auxiliary base.
- Evaluate without premature rounding and check the result against nearby powers.

**Explanation**

Let $y=\log_bx$, so $b^y=x$. Taking logarithms in any valid base $c$ gives $y\log_cb=\log_cx$, hence $\log_bx=\log_cx/\log_cb$. Require $x>0$, $b>0$, $b\ne1$, $c>0$, and $c\ne1$. The denominator is nonzero. Common or natural logarithms produce the same result; do not round numerator and denominator prematurely.

**Worked examples**

$\log_2 7=\ln7/\ln2\approx2.807355$. Since $2^2<7<2^3$, this value belongs between 2 and 3. For $\log_{1/2}8$, the formula gives $\ln8/\ln(1/2)=-3$, consistent with $(1/2)^{-3}=8$.

**Exercises**

1. Evaluate $\log_5 20$ to three decimals. **Answer:** $\ln20/\ln5\approx1.861$.
2. Explain why $\ln x/\ln1$ is invalid. **Answer:** $\ln1=0$, reflecting the invalid logarithm base 1.

**Assessment**

Derive and evaluate a natural-log expression for $\log_3 11$, to three decimals, with a magnitude check.

- **U11-L04-C01-O1 — 2 points:** If $3^y=11$, then $y\ln3=\ln11$, so $y=\ln11/\ln3$.
- **U11-L04-C01-O2 — 2 points:** Value about 2.183; it lies between 2 and 3 because $9<11<27$.

### Concept U11-L04-C02: Inverse identities and their domains

**Content**

- $\log_b(b^x)=x$
- $b^{\log_bx}=x$ for $x>0$

**Learning objectives**

- **U11-L04-C02-O1:** Simplify compositions of matching exponential and logarithmic functions.
  - Standards: CCSS HSF-BF.B.5 (+) (direct); TEKS 2A.2(C) (direct).
- **U11-L04-C02-O2:** State and preserve the different input domains in the two inverse identities.
  - Standards: CCSS HSF-BF.B.5 (+) (direct); TEKS 2A.2(D) (direct).

**Proficiency criteria**

- Identify whether the exponential and logarithm have matching bases before simplifying.
- Explain why an exponential output is always a permitted input for its corresponding logarithm.
- Retain the positivity restriction of an inner logarithm even when the simplified formula has a larger natural domain.

**Explanation**

The identity $\log_b(b^x)=x$ holds for every real $x$ because $b^x>0$. The reverse composition $b^{\log_bx}=x$ requires $x>0$. Matching bases matter: $\ln(10^x)$ equals $x\ln10$, not simply $x$. These identities explain why exponentials and logarithms undo one another only on their proper domains.

**Worked examples**

$\ln(e^{2x-1})=2x-1$ for all real $x$. By contrast, $e^{\ln(x-4)}=x-4$ only for $x>4$. Although the simplified expression $x-4$ exists elsewhere, those inputs never belonged to the original logarithmic expression.

**Exercises**

1. Simplify $10^{\log(3x)}$ with restrictions. **Answer:** $3x$, $x>0$.
2. Simplify $\log_2(2^{-7})$. **Answer:** $-7$, with no issue from the negative output.

**Assessment**

Simplify $\ln(e^{x+2})$ and $e^{\ln(x+2)}$, and compare their domains.

- **U11-L04-C02-O1 — 2 points:** Both simplify to $x+2$ by matching inverse operations.
- **U11-L04-C02-O2 — 2 points:** The first accepts all real $x$; the second requires $x>-2$, because the original logarithm must have positive argument.
