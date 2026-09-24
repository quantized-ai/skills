# Lesson 9.4: Division and rationalization

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Division of radicals requires a real, nonzero denominator. Rationalization changes representation, and a variable conjugate can impose an additional restriction that must be accounted for.

## Learning objectives

- Simplify radical quotients and rationalize monomial or binomial denominators.
- Explain domain conditions before and after rationalization.

## Learning outcome

The student can produce a rationalized form and specify exactly where it represents the original expression.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Distinguish a radicand condition from the stricter condition needed for a radical denominator.
- Choose a multiplier that creates a perfect power or a difference of squares in the denominator.
- Multiply the entire numerator and denominator by the same nonzero expression.
- Detect inputs lost through a zero conjugate and retain the original formula or supply the missing valid case.

## Concepts

### Concept U09-L04-C01: Radical quotients and monomial denominators

**Content**

- Quotient property
- Equivalent rationalized forms

**Learning objectives**

- **U09-L04-C01-O1:** Simplify radical quotients and rationalize a one-term denominator.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).
- **U09-L04-C01-O2:** Preserve restrictions required by radical denominators.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).

**Proficiency criteria**

- Apply the quotient property only when both radical expressions exist and the denominator is nonzero.
- Choose a factor that makes the denominator radicand a perfect power.
- State the original real domain and verify that the rationalized expression agrees throughout it.

**Explanation**

For square roots, $\sqrt{a/b}=\sqrt a/\sqrt b$ when $a\ge0,b>0$. To rationalize a radical denominator, multiply numerator and denominator by a factor that makes its radicand a perfect power. This changes the representation, not the number. Any denominator must remain nonzero.

**Worked examples**

$3/\sqrt6=(3\sqrt6)/6=\sqrt6/2$. For $x>0$, $1/\sqrt{x}=\sqrt{x}/x$; the denominator root requires $x>0$, not merely $x\ge0$. For $1/\sqrt[3]2$, multiply by $\sqrt[3]4$ to obtain $\sqrt[3]4/2$.

**Exercises**

1. Rationalize $5/\sqrt{10}$. **Answer:** $\sqrt{10}/2$.
2. Simplify $\sqrt{18x}/\sqrt{2x}$ with its original domain. **Answer:** 3 for $x>0$; $x=0$ makes the denominator zero.

**Assessment**

Rationalize $2/\sqrt{3x}$ and state the complete real domain.

- **U09-L04-C01-O1 — 2 points:** $2\sqrt{3x}/(3x)$ by multiplying both parts by $\sqrt{3x}$.
- **U09-L04-C01-O2 — 2 points:** $x>0$: $3x$ must be positive so the denominator is real and nonzero.

### Concept U09-L04-C02: Conjugate denominators

**Content**

- Difference-of-squares identity
- Avoiding artificial exclusions

**Learning objectives**

- **U09-L04-C02-O1:** Rationalize a binomial denominator using its conjugate.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).
- **U09-L04-C02-O2:** Check whether a variable conjugate introduces a new excluded input.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).

**Proficiency criteria**

- Choose the conjugate and use the difference-of-squares identity to remove the denominator radical.
- Check that the conjugate used as a multiplier is nonzero at every input under consideration.
- Identify any valid original input excluded by the rationalized form and specify how the full original function is represented there.

**Explanation**

The conjugate of $a+\sqrt b$ is $a-\sqrt b$; their product is $a^2-b$. Multiplication by the conjugate divided by itself is valid only where that conjugate is nonzero. With variable expressions, a rationalized formula can have a smaller domain than the original; retain the original form or give the missing case separately.

**Worked examples**

$1/(3+\sqrt2)=(3-\sqrt2)/(9-2)=(3-\sqrt2)/7$. But $1/(\sqrt x+1)$ is defined for all $x\ge0$, including $x=1$. Its rationalized expression $(\sqrt x-1)/(x-1)$ works for $x\ge0,x\ne1$ only. To represent the original everywhere, also give value $1/2$ at $x=1$.

**Exercises**

1. Rationalize $2/(\sqrt5-1)$. **Answer:** $(\sqrt5+1)/2$.
2. What is lost by replacing $1/(\sqrt x+2)$ with $(\sqrt x-2)/(x-4)$? **Answer:** the original value $1/4$ at $x=4$; the new expression is undefined there.

**Assessment**

Rationalize $1/(2+\sqrt3)$; then state why the analogous operation on $1/(\sqrt x+3)$ needs a special check at $x=9$.

- **U09-L04-C02-O1 — 2 points:** $(2-\sqrt3)/(4-3)=2-\sqrt3$.
- **U09-L04-C02-O2 — 2 points:** The conjugate $\sqrt x-3$ vanishes at 9; the rationalized expression loses the original value $1/6$ there.
