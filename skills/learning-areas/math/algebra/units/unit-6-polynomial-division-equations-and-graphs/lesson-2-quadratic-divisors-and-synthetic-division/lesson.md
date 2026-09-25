# Lesson 6.2: Quadratic divisors and synthetic division

Extend long division to quadratic divisors and use synthetic division where its assumptions apply. Interpret each algorithm’s output through the same division identity.

## Learning objectives

- Divide quadratic, cubic, and quartic polynomials by quadratic divisors.
- Use and verify synthetic division for monic linear divisors.
- Check remainder degree and algorithm applicability, including normalization of nonmonic linear divisors.

## Learning outcome

The student can choose an appropriate division procedure and justify its quotient and remainder.

## Proficiency criteria

- Select long division or the ordinary synthetic shortcut according to the divisor form.
- Keep coefficient positions and signed divisor parameters aligned correctly.
- Stop only when the required remainder degree has been reached, allowing linear remainders for quadratic divisors.
- Reconstruct the original dividend and explain any normalization needed for a nonmonic divisor.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Long division by a quadratic polynomial** | Quadratic, cubic, and quartic dividends may be divided by monic or nonmonic quadratic divisors. Long division continues until the remainder is linear, constant, or zero; nonmonic divisors may produce fractional coefficients. The result must satisfy $p=dq+r$. | Divide quadratic, cubic, and quartic polynomials by monic and nonmonic quadratic divisors using long division. Check the remainder-degree condition and verify the quotient and remainder by reconstructing the dividend. | Carry out long division for quadratic, cubic, and quartic dividends. Handle nonmonic coefficients accurately. Continue while the remainder degree is at least two; accept linear, constant, or zero remainders. Verify the complete division identity. |
| **Synthetic division by $x-c$** | Ordinary synthetic division applies directly to $x-c$: the multiply-add recurrence uses $c$ and all dividend coefficients, including zeros. All output entries except the last are quotient coefficients; the last is the remainder. For $d=a(x-c)$, $a\ne0$, division by $x-c$ gives $p=(x-c)Q+r$, so the quotient for $d$ is $Q/a$ and the remainder is still $r$. Quadratic divisors require long division here. | Use synthetic division for a monic linear divisor, interpret its quotient and remainder, and verify the division identity. Explain its relationship to long division, recognize the shortcut’s limitations, and handle nonmonic linear divisors by correct normalization or long division. | Use the correctly signed value of $c$ and include every coefficient position. Explain the multiply-add recurrence and interpret the output. Distinguish monic linear, nonmonic linear, and quadratic divisors; adjust the quotient after normalization or use long division. Verify the original dividend. |
