# Lesson 11.3: Logarithm properties with domains

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

Logarithm properties follow from exponential identities but carry argument restrictions. Expansion or condensation can change a formula’s natural domain, especially when products or even powers conceal negative factors.

## Learning objectives

- Use product, quotient, and power logarithm properties with justified hypotheses.
- Compare domains and use absolute values when needed to preserve an identity.

## Learning outcome

The student can transform logarithmic expressions while stating exactly where the transformed and original expressions agree.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Relate product and quotient properties to the corresponding exponent operations.
- Check positivity of each original logarithm argument before expanding or condensing.
- Use the power property on a positive base quantity or introduce an appropriate absolute value for an even power.
- Identify domain enlargements or losses and reject any proposed logarithm rule for an arbitrary sum.

## Concepts

### Concept U11-L03-C01: Product and quotient properties

**Content**

- Exponent-law derivation
- Positive factors for real expansion

**Learning objectives**

- **U11-L03-C01-O1:** Derive and use product and quotient logarithm identities for positive arguments.
  - Standards: CCSS HSF-BF.B.5 (+) (supporting knowledge); TEKS 2A.5(D) (supporting knowledge).
- **U11-L03-C01-O2:** Compare domains before expanding or condensing logarithms.
  - Standards: CCSS HSF-BF.B.5 (+) (supporting knowledge); TEKS 2A.5(E) (supporting knowledge).

**Proficiency criteria**

- Derive or justify the product and quotient rules from a shared valid logarithm base.
- Require separate positive factors for a real expansion rather than assuming a positive product is sufficient.
- Preserve original restrictions after condensation, and identify any domain lost by expansion; claim equivalence only where both formulas are defined unless a valid rewrite restores the full domain.

**Explanation**

For $M,N>0$, $\log_b(MN)=\log_bM+\log_bN$ and $\log_b(M/N)=\log_bM-\log_bN$. To derive the first, write $M=b^u,N=b^v$; then $MN=b^{u+v}$. Positivity of the product alone does not justify splitting into two real logarithms: both factors must be positive. Condensing can enlarge a formula’s natural domain, so preserve the original conditions.

**Worked examples**

For $x>0$, $\ln(3x)=\ln3+\ln x$. But $\ln[(x-1)(x-2)]$ has domain $x<1$ or $x>2$, whereas $\ln(x-1)+\ln(x-2)$ requires $x>2$. They agree on $x>2$; the expanded formula loses the original branch $x<1$.

**Exercises**

1. Condense $\log_2 x+\log_2 5$ with its domain. **Answer:** $\log_2(5x)$, $x>0$.
2. Expand $\ln(x/4)$. **Answer:** $\ln x-\ln4$ for $x>0$.

**Assessment**

Condense $\ln(x+1)-\ln(x-2)$ and state the domain on which it represents the original; explain why checking only the quotient’s positivity can admit extra inputs.

- **U11-L03-C01-O1 — 2 points:** $\ln[(x+1)/(x-2)]$ using the quotient property.
- **U11-L03-C01-O2 — 2 points:** Original domain $x>2$; the quotient is also positive for $x<-1$, but those inputs make both original logarithms invalid.

### Concept U11-L03-C02: Power properties and absolute values

**Content**

- Positive-argument power rule
- $\ln(x^2)=2\ln|x|$

**Learning objectives**

- **U11-L03-C02-O1:** Expand and condense powers of positive logarithmic arguments.
  - Standards: CCSS HSF-BF.B.5 (+) (supporting knowledge); TEKS 2A.5(D) (supporting knowledge).
- **U11-L03-C02-O2:** Use absolute value or explicit restrictions when an even power conceals negative inputs.
  - Standards: CCSS HSF-BF.B.5 (+) (supporting knowledge); TEKS 2A.5(E) (supporting knowledge).

**Proficiency criteria**

- Apply the power rule only under its stated positive-argument hypothesis.
- Preserve negative nonzero original inputs by using absolute value when an even power is expanded.
- Compare the original and transformed domains and distinguish a power rule from a nonexistent general sum rule.

**Explanation**

For $M>0$ and real $r$, $\log_b(M^r)=r\log_bM$. If the original is $\ln(x^2)$, its domain is $x\ne0$, including negative $x$. The correct identity on that full domain is $2\ln|x|$, because $x^2=|x|^2$. The form $2\ln x$ is valid only for $x>0$. There is no analogous sum rule $\log(M+N)=\log M+\log N$.

**Worked examples**

For $x>0$, $\ln(x^{3/2})=(3/2)\ln x$. For all $x\ne0$, $\ln(x^4)=4\ln|x|$. At $x=-2$, the original is $\ln16$ and the absolute-value expression is $4\ln2$, while $4\ln(-2)$ is not real.

**Exercises**

1. Expand $\log_2(8x^3)$ for $x>0$. **Answer:** $3+3\log_2x$.
2. Rewrite $\ln[(x-1)^2]$ on its full real domain. **Answer:** $2\ln|x-1|$, $x\ne1$.

**Assessment**

Rewrite $\ln(x^6)$ on its full domain and explain why replacing it by $6\ln x$ can change the domain.

- **U11-L03-C02-O1 — 2 points:** $6\ln|x|$, for $x\ne0$, since $x^6=|x|^6$.
- **U11-L03-C02-O2 — 2 points:** The original accepts negative nonzero inputs, while $\ln x$ does not; for example $x=-1$ gives original value 0.
