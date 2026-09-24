# Lesson 6.5: Multiplicity and the Fundamental Theorem

[Unit 6: Polynomial division, equations, and graphs](../unit.md) · [Algebra 2](../../../curriculum.md)

Interpret repeated factors as root multiplicities and connect parity to local graph behavior. State the Fundamental Theorem of Algebra and demonstrate its real-coefficient quadratic case.

## Learning objectives

- Determine root multiplicities and local crossing behavior.
- Apply the complex root count with multiplicity.
- Demonstrate the theorem for real-coefficient quadratics.

## Learning outcome

The student can reconcile factor multiplicities, graph behavior, and the polynomial’s complete complex root count.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Read multiplicity only after isolating a factor whose remaining multiplier is nonzero at the root.
- Distinguish distinct, real, and multiplicity-counted root totals.
- Explain touching or crossing through the sign behavior of even or odd powers.
- State the general theorem precisely and limit the demonstrated proof to the real-coefficient quadratic case.

## Concepts

### Concept U06-L05-C01: Multiplicity of zeros

**Content**

Exponent of a linear factor; distinct versus counted zeros; odd crossing/even touching; local sign.

**Learning objectives**

- **U06-L05-C01-O1:** Read the multiplicity of each zero from a factorization.
  - Standards: CCSS HSA-APR.B.3 (direct); TEKS 2A.7(D) (direct for cubic/quartic factors).
- **U06-L05-C01-O2:** Predict crossing or touching at a real zero using odd/even multiplicity.
  - Standards: CCSS HSA-APR.B.3 (direct); CCSS HSF-IF.C.7c (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify each root multiplicity from its factor exponent while ensuring the remaining factor is nonzero there.
- Distinguish the number of distinct roots from the total count with multiplicity.
- Justify crossing or touching from sign change of the repeated factor rather than from the exponent size alone.

**Explanation**

If $p(x)=(x-r)^m q(x)$ with $q(r)\ne0$, then $r$ has multiplicity $m$. Near $r$, the nonzero factor $q$ keeps its sign, while $(x-r)^m$ changes sign exactly when $m$ is odd. Thus odd-multiplicity zeros cross the axis and even-multiplicity zeros touch without crossing. Multiplicity greater than one can flatten the graph locally, but a sketch should not invent additional zeros or turning points.

**Worked examples**

For $p(x)=(x+2)^2(x-1)^3$, zero $-2$ has multiplicity $2$ and touches; zero $1$ has multiplicity $3$ and crosses. There are two distinct zeros but five zeros counting multiplicity, matching degree five.

**Exercises**

1. Read zeros and behavior of $(x-3)^2(x+1)$.
   - Answer and reasoning: $3$ double/touch; $-1$ simple/cross.
2. How many distinct zeros does $(x-2)^4$ have?
   - Answer and reasoning: One distinct zero $2$, counted four times; graph touches there.

**Assessment**

Independent prompt: For $p(x)=-2(x+1)^3(x-4)^2$, state all real zeros, multiplicities, total count, and local crossing behavior.

Expected answer: $-1$ has multiplicity $3$ and crosses; $4$ has multiplicity $2$ and touches; total count $5$, two distinct zeros.

Scoring (4 points): 2 points for zeros/multiplicities; 2 points for behavior justified by parity. Assesses **U06-L05-C01-O1** and **U06-L05-C01-O2**.

### Concept U06-L05-C02: The Fundamental Theorem of Algebra

**Content**

Existence of a complex root; exactly $n$ roots counting multiplicity; complete complex linear factorization; quadratic proof.

**Learning objectives**

- **U06-L05-C02-O1:** State and apply the Fundamental Theorem of Algebra with multiplicity counted correctly.
  - Standards: CCSS HSN-CN.C.9 (+) (direct; included in Appendix A Algebra II).
- **U06-L05-C02-O2:** Demonstrate the theorem for every real-coefficient quadratic using the discriminant and quadratic formula.
  - Standards: CCSS HSN-CN.C.9 (+) (direct; included in Appendix A Algebra II).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State the complex-root existence result and the full degree count with multiplicity.
- Distinguish counted roots from distinct or real roots and connect the count to complete complex linear factorization.
- Demonstrate the real-coefficient quadratic case for positive, zero, and negative discriminants without claiming a general proof of the theorem.

**Explanation**

Every nonconstant polynomial with complex coefficients has a complex root. Repeated division by its linear factors yields exactly $n$ roots counting multiplicity for degree $n$, and a factorization $a_n\prod_{j=1}^n(x-r_j)$. The theorem does not promise $n$ distinct roots or $n$ real roots. For a real-coefficient quadratic, the quadratic formula supplies two real roots if $D>0$, one repeated real root if $D=0$, and two nonreal roots if $D<0$, establishing the required degree-two case.

**Worked examples**

$p(x)=(x-1)^2(x^2+4)$ has degree four. Its complete complex factors are $(x-1)^2(x-2i)(x+2i)$, so roots are $1,1,2i,-2i$ counting multiplicity. There are three distinct complex roots and only one distinct real root.

**Exercises**

1. How many complex roots counting multiplicity must a degree-seven polynomial have?
   - Answer and reasoning: Seven; the number of distinct or real roots is not determined.
2. Show the theorem for $x^2+2x+1$ and $x^2+2x+2$.
   - Answer and reasoning: First has $-1$ twice; second has $-1\pm i$, so each has two counted roots.

**Assessment**

Independent prompt: Explain the quadratic case for each discriminant sign, then count all roots of $(x-2)^3(x^2+1)$ over the complex numbers.

Expected answer: Positive $D$: two real; zero: one repeated; negative: two nonreal. The degree-five product has $2$ three times and $i,-i$, for five counted roots.

Scoring (4 points): 2 points for theorem/root-count application; 2 points for the complete quadratic-case argument. Assesses **U06-L05-C02-O1** and **U06-L05-C02-O2**.
