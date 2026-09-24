# Lesson 11.5: Exponential and logarithmic equations

[Unit 11: Logarithms](../unit.md) · [Algebra 2](../../../curriculum.md)

Logarithms make general exponential equations solvable, and exponential conversion solves logarithmic equations. The original positive-argument conditions remain decisive when algebra produces multiple or invalid candidates.

## Learning objectives

- Solve exponential equations with logarithms and logarithmic equations with exponential conversion.
- Check existence and validate candidates against all original expressions.

## Learning outcome

The student can choose an inverse operation, derive a solution, and explain why it is valid in the original equation.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Isolate the exponential or logarithmic quantity before applying an inverse operation.
- Check exponential target positivity and every original logarithm argument.
- Preserve original restrictions when combining logarithms or solving the resulting algebraic equation.
- Retain exact expressions through calculation and verify the final values, units, and any rejected candidates.

## Concepts

### Concept U11-L05-C01: Solving exponential equations with logarithms

**Content**

- Isolating a positive exponential
- Linear exponents and arbitrary valid bases

**Learning objectives**

- **U11-L05-C01-O1:** Solve exponential equations by expressing the unknown as a logarithm.
  - Standards: CCSS HSF-LE.A.4 (direct); TEKS 2A.5(D) (direct).
- **U11-L05-C01-O2:** Check existence, numerical accuracy, and units of an exponential-equation solution.
  - Standards: TEKS 2A.5(D) (direct); CCSS HSA-REI.A.1 (direct); CCSS HSN-Q.A.1 (direct).

**Proficiency criteria**

- Reduce the equation to an exponential equaling a target and determine whether that target permits a real solution.
- Apply a logarithm and solve for the full exponent with all scale and shift parameters accounted for.
- Preserve an exact solution form, then check any reported approximation in the original equation with the appropriate units.

**Explanation**

Isolate the exponential first. For $ab^{ct}=d$ with nonzero $a,c$ and valid base $b$, a real solution requires $d/a>0$; then $t=\ln(d/a)/(c\ln b)$. Keep the exact expression until the final step. If the exponent also contains a constant, account for it when isolating the unknown. Cases $a=0$ or $c=0$ require separate constant-equation analysis.

**Worked examples**

Solve $5\cdot2^{3t}=40$: $2^{3t}=8$, so $t=\ln8/(3\ln2)=1$. For $200e^{0.04t}=350$, $e^{0.04t}=1.75$, giving $t=\ln1.75/0.04\approx13.99$ time units; substitution returns approximately 350. The equation $3e^x=-6$ has no real solution.

**Exercises**

1. Solve $2\cdot10^x=14$. **Answer:** $x=\log7\approx0.8451$.
2. Solve $4e^{2x}=12$. **Answer:** $x=\ln3/2\approx0.5493$.

**Assessment**

Solve $6\cdot2^{2t}=30$, giving an exact expression and a decimal to three places; justify that a real solution exists.

- **U11-L05-C01-O1 — 2 points:** $t=\ln5/(2\ln2)\approx1.161$, after dividing by 6.
- **U11-L05-C01-O2 — 2 points:** The isolated target 5 is positive, so there is one real solution; substituting the unrounded value yields $6\cdot5=30$.

### Concept U11-L05-C02: Solving logarithmic equations and rejecting invalid roots

**Content**

- Definition and one-to-one logarithms
- Original-argument positivity checks

**Learning objectives**

- **U11-L05-C02-O1:** Solve a logarithmic equation by conversion to exponential form.
  - Standards: TEKS 2A.5(D) (direct); TEKS 2A.5(C) (direct); CCSS HSF-BF.B.5 (+) (direct).
- **U11-L05-C02-O2:** Check all original logarithm arguments and reject invalid algebraic candidates.
  - Standards: TEKS 2A.5(E) (direct); CCSS HSF-BF.B.5 (+) (direct).

**Proficiency criteria**

- Determine the intersection of all original positive-argument conditions.
- Use logarithmic conversion or equal positive arguments to obtain algebraic candidates.
- Check candidates in the original separate logarithms and reject those made admissible only by condensation or other algebra.

**Explanation**

List positive-argument conditions before rewriting. For a single log, $\log_b A=c$ means $A=b^c$. When combining multiple logs, preserve the separate original conditions even if the condensed expression allows more inputs. Equality of logs in a common valid base implies equality of their positive arguments.

**Worked examples**

$\log_2(x-1)=3$ requires $x>1$ and gives $x-1=8$, so $x=9$. For $\log_2x+\log_2(x-2)=3$, first require $x>2$; then $x(x-2)=8$, giving $(x-4)(x+2)=0$. Candidate 4 checks ($2+1=3$); $-2$ is invalid despite its positive product because both original arguments are negative.

**Exercises**

1. Solve $\ln(2x+1)=0$. **Answer:** $2x+1=1$, so $x=0$, allowed by $x>-1/2$.
2. Solve $\log_3(x+2)=\log_3(2x-1)$. **Answer:** $x=3$, satisfying both positive-argument conditions.

**Assessment**

Solve $\log_2(x-3)=2$ and explain why the candidate from $\ln(x-1)=\ln(-x-1)$ cannot be accepted.

- **U11-L05-C02-O1 — 2 points:** First equation gives $x-3=4$, hence $x=7$; the argument is positive and the log equals 2.
- **U11-L05-C02-O2 — 2 points:** The second has no real solution: it requires both $x>1$ and $x<-1$; the algebraic candidate $x=0$ makes both arguments negative.
