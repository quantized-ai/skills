# Lesson 4.3: Multiplication and conjugates

[Unit 4: Complex numbers and quadratic equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Multiply complex numbers through distribution and study the cancellation in conjugate products. Extend polynomial identities to factor sums of squares over the complex numbers.

## Learning objectives

- Multiply complex numbers in standard form.
- Explain and compute conjugate products.
- Factor real sums of squares using complex factors.

## Learning outcome

The student can connect complex multiplication, conjugate cancellation, and complex polynomial factorization.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Account for every partial product and replace squared imaginary-unit terms correctly.
- Explain why conjugate cross terms cancel and the remaining product is real.
- Use the appropriate complex difference-of-squares structure when factoring.
- Distinguish a complex factorization from a claim about real graph intercepts.

## Concepts

### Concept U04-L03-C01: Multiplying complex numbers

**Content**

Distribution; replacing $i^2$ by $-1$; real and imaginary components of the product.

**Learning objectives**

- **U04-L03-C01-O1:** Multiply complex numbers using distribution and $i^2=-1$.
  - Standards: CCSS HSN-CN.A.2 (direct); TEKS 2A.7(A) (direct).
- **U04-L03-C01-O2:** Explain the sign change contributed by the product of imaginary terms.
  - Standards: CCSS HSN-CN.A.2 (direct); TEKS 2A.7(A) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Distribute each component of one complex factor to each component of the other.
- Replace every squared imaginary-unit term by its negative real value.
- Collect the real and imaginary contributions separately and trace the source of the resulting signs.

**Explanation**

Expand complex products exactly as binomials, then replace $i^2$ by $-1$ and collect real and imaginary parts. The general result is $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$. The term $-bd$ belongs to the real part. Do not stop with $i^2$ in a final standard-form answer, and do not use $i^2=1$.

**Worked examples**

$(2+3i)(4-i)=8-2i+12i-3i^2=8+10i+3=11+10i$. Also $(3i)(-2i)=-6i^2=6$, illustrating that a product of two imaginary numbers can be real.

**Exercises**

1. Multiply $(1+2i)(3+4i)$.
   - Answer and reasoning: $-5+10i$.
2. Square $2-3i$.
   - Answer and reasoning: $4-12i+9i^2=-5-12i$.

**Assessment**

Independent prompt: Multiply $(3-2i)(-1+5i)$ and explain which partial product becomes positive real.

Expected answer: $-3+15i+2i-10i^2=7+17i$; $-10i^2=10$.

Scoring (4 points): 2 points for distribution; 2 points for $i^2$ reasoning and standard form. Assesses **U04-L03-C01-O1** and **U04-L03-C01-O2**.

### Concept U04-L03-C02: Conjugate products and complex factorization

**Content**

Conjugate pairs; $(a+bi)(a-bi)=a^2+b^2$; factoring real sums of squares over complex numbers.

**Learning objectives**

- **U04-L03-C02-O1:** Identify a conjugate and compute its product with the original number.
  - Standards: CCSS HSN-CN.A.2 (direct); CCSS HSN-CN.A.3 (+) (partial direct: conjugates); TEKS 2A.7(A) (direct for multiplication).
- **U04-L03-C02-O2:** Extend a difference-of-squares identity to factor a sum of squares over the complex numbers.
  - Standards: CCSS HSN-CN.C.8 (+) (direct; included in Appendix A Algebra II).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Form a conjugate by changing only the imaginary coefficient sign.
- Explain the cancellation that makes a conjugate product a real sum of squares.
- Use imaginary factors to factor a real sum of squares while distinguishing complex zeros from real graph intercepts.

**Explanation**

The conjugate of $a+bi$ is $a-bi$: keep the real part and reverse the imaginary coefficient. Multiplication cancels the imaginary cross terms and gives the nonnegative real number $a^2+b^2$. The same identity lets $x^2+k^2$ factor as $(x-ki)(x+ki)$, because $(ki)^2=-k^2$. This is factorization over the complex numbers; it does not create real zeros or real horizontal intercepts.

**Worked examples**

The conjugate of $2-3i$ is $2+3i$, and the product is $4+9=13$. Also $x^2+16=x^2-(4i)^2=(x-4i)(x+4i)$, exposing complex zeros $\pm4i$.

**Exercises**

1. Find the conjugate of $-1+6i$ and their product.
   - Answer and reasoning: $-1-6i$; product $37$.
2. Factor $4x^2+9$ over the complex numbers.
   - Answer and reasoning: $(2x-3i)(2x+3i)$.

**Assessment**

Independent prompt: Compute $(3+4i)(3-4i)$ and factor $x^2+25$ over the complex numbers, checking the constant term.

Expected answer: $25$; $(x-5i)(x+5i)$ has constant $-25i^2=25$.

Scoring (4 points): 2 points for conjugate product; 2 points for complex factorization and check. Assesses **U04-L03-C02-O1** and **U04-L03-C02-O2**.
