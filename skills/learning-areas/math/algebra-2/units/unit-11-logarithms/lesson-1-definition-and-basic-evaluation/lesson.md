# Lesson 11.1: Definition and basic evaluation

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

A logarithm names the exponent that produces a given positive argument. Definition-based reasoning supports exact values, calculator approximations, and the distinction between an invalid argument and a negative logarithm.

## Learning objectives

- Convert between logarithmic and exponential statements with valid bases and arguments.
- Evaluate common, natural, and base-two logarithms and check approximate magnitudes.

## Learning outcome

The student can interpret and evaluate a real logarithm while justifying its domain, sign, and approximate size.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Match base, exponent, and argument correctly when reversing logarithmic and exponential statements.
- Enforce a positive base different from one and a positive argument.
- Distinguish negative or zero logarithmic outputs from forbidden nonpositive arguments.
- Use known powers to check exact values and bracket calculator approximations before reporting precision.

## Concepts

### Concept U11-L01-C01: Logarithms as exponents

**Content**

- $\log_b a=c\iff b^c=a$
- Base and argument conditions

**Learning objectives**

- **U11-L01-C01-O1:** Convert between logarithmic and exponential statements.
  - Standards: TEKS 2A.5(C) (direct); CCSS HSF-BF.B.5 (+) (direct).
- **U11-L01-C01-O2:** Identify valid bases and positive arguments for real logarithms.
  - Standards: TEKS 2A.5(C) (supporting knowledge); CCSS HSF-BF.B.5 (+) (supporting knowledge).

**Proficiency criteria**

- Translate a logarithmic statement into an equivalent exponential statement with the same three quantities.
- Explain the conditions on the base and argument using existence and uniqueness of the exponent.
- Determine input restrictions by requiring the complete argument to be positive.

**Explanation**

For $b>0,b\ne1$, $\log_b a$ is the unique real exponent that makes $b$ produce $a$. Thus the argument must satisfy $a>0$. The logarithm can be negative or zero even though its argument must be positive. Base 1 fails because $1^x$ does not have a unique inverse; zero and negative bases do not give an exponential function on all real inputs.

**Worked examples**

$\log_2 8=3$ means $2^3=8$. The statement $\log_3(1/9)=-2$ means $3^{-2}=1/9$. The expression $\log_2(-8)$ has no real value because no real exponent of 2 yields a negative result.

**Exercises**

1. Rewrite $5^{-1}=1/5$ in logarithmic form. **Answer:** $\log_5(1/5)=-1$.
2. State the domain of $\log_2(x-4)$. **Answer:** $x>4$ because the argument must be positive.

**Assessment**

Rewrite $\log_4(1/16)=-2$ exponentially and explain whether $\log_1 7$ and $\log_4 0$ are real logarithms.

- **U11-L01-C01-O1 — 2 points:** $4^{-2}=1/16$, with the logarithm identifying an exponent.
- **U11-L01-C01-O2 — 2 points:** Neither is defined: base 1 is invalid and argument 0 is not positive.

### Concept U11-L01-C02: Base 2, common logarithms, and natural logarithms

**Content**

- $\log x=\log_{10}x$ and $\ln x=\log_e x$
- Exact and approximate values

**Learning objectives**

- **U11-L01-C02-O1:** Evaluate simple logarithms in bases 2, 10, and e.
  - Standards: TEKS 2A.5(C) (direct); CCSS HSF-BF.B.5 (+) (direct).
- **U11-L01-C02-O2:** Use technology to approximate logarithms and check their signs and sizes.
  - Standards: CCSS HSF-LE.A.4 (supporting knowledge); TEKS 2A.5(E) (supporting knowledge).

**Proficiency criteria**

- Distinguish common-logarithm, natural-logarithm, and explicit-base notation.
- Evaluate logarithms of recognizable powers through the inverse definition.
- Use nearby exponential values to check the sign and magnitude of a technology-generated logarithm.

**Explanation**

Unless another convention is stated, this course writes $\log x$ for base 10 and $\ln x$ for base $e$. In any valid base, $\log_b1=0$ and $\log_b b=1$. For bases greater than 1, arguments between 0 and 1 have negative logarithms. Use exact powers when available; otherwise retain the exact logarithmic form before rounding.

**Worked examples**

$\log 1000=3$, $\ln(e^{-2})=-2$, and $\log_2(1/8)=-3$. A calculator gives $\ln5\approx1.609438$. Since $e^1<5<e^2$, a result between 1 and 2 is reasonable.

**Exercises**

1. Evaluate $\log0.001$ and $\ln1$. **Answer:** $-3$ and 0.
2. Approximate $\ln2$ to three decimals and bracket it between integers. **Answer:** 0.693, between 0 and 1 since $1<2<e$.

**Assessment**

Evaluate $\log100$, $\ln(e^4)$, and approximate $\ln7$ to three decimals with a magnitude check.

- **U11-L01-C02-O1 — 2 points:** $\log100=2$ and $\ln(e^4)=4$, by the inverse definition.
- **U11-L01-C02-O2 — 2 points:** $\ln7\approx1.946$; it lies between 1 and 2 because $e<7<e^2$.
