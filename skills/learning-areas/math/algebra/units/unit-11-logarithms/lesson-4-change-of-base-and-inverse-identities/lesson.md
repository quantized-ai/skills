# Lesson 11.4: Change of base and inverse identities

Change of base permits numerical evaluation, while inverse identities explain which operations undo each other. Both require attention to valid bases and to the order-dependent domains of the compositions.

## Learning objectives

- Derive and apply change of base with valid argument and base conditions, checking numerical approximations.
- Simplify matching exponential-logarithmic compositions while preserving their original domains.

## Learning outcome

The student can justify a logarithm evaluation or inverse simplification and preserve every condition needed for it to be valid.

## Proficiency criteria

- Derive change of base from an exponential equality and justify its nonzero denominator.
- State conditions on the original and auxiliary bases and argument; retain exact forms until final rounding and check against nearby powers.
- Require matching bases before applying inverse identities.
- Distinguish the input domains of the two composition orders and retain restrictions after simplification.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Change-of-base formula** | For $x>0$, $b>0$, $b\ne1$, $c>0$, and $c\ne1$, $\log_bx=\frac{\log_cx}{\log_cb}$. Setting $b^y=x$ and taking base-$c$ logarithms gives $y\log_cb=\log_cx$; $\log_cb\ne0$ permits division. Common or natural logarithms give the same value. Preserve the exact quotient before rounding and compare the result with nearby powers of the original base. | Derive the change-of-base formula and justify its argument, base, and nonzero-denominator conditions. Evaluate logarithms with technology using valid bases and arguments, appropriate rounding, and a nearby-power check. | Derive the quotient from the equivalent exponential equation. State conditions for both bases and the argument and justify division. Retain exact expressions through calculation, then check the approximation against corresponding powers. |
| **Inverse identities and their domains** | For $b>0$ and $b\ne1$, $\log_b(b^x)=x$ for every real $x$, while $b^{\log_bx}=x$ only for $x>0$. With a real expression $A(x)$, the first composition retains the domain of $A$; the second additionally requires $A(x)>0$. These inverse cancellations require matching bases. A simplified formula does not restore inputs excluded by the original composition. | Simplify compositions of matching exponential and logarithmic functions and justify the inverse operations. Determine and preserve the original input domains in both orders of exponential-logarithmic composition. | Check that bases match before inverse cancellation. Explain why exponential outputs satisfy their corresponding logarithm’s positivity requirement. Retain the domain of an inner expression and any extra positivity restriction imposed by an inner logarithm. |
