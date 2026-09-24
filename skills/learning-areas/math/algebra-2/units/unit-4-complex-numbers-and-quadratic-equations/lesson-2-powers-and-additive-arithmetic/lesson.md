# Lesson 4.2: Powers and additive arithmetic

[Unit 4: Complex numbers and quadratic equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Use the repeating powers of the imaginary unit and componentwise addition to simplify complex expressions. Explain the role of additive inverses when subtraction changes both components.

## Learning objectives

- Reduce integer powers of the imaginary unit using its cycle.
- Add and subtract complex numbers in standard form.
- Explain coefficient and sign changes in the resulting expressions.

## Learning outcome

The student can simplify powers, sums, and differences while keeping real and imaginary components distinct.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Justify the power cycle from the defining imaginary-unit relation.
- Use exponent remainders consistently in products and sums involving powers.
- Combine only matching real or imaginary components.
- Apply the complete additive inverse when subtracting and express the result in standard form.

## Concepts

### Concept U04-L02-C01: Integer powers of $i$

**Content**

Four-power cycle; reducing nonnegative exponents modulo four; products of powers.

**Learning objectives**

- **U04-L02-C01-O1:** Simplify nonnegative integer powers of $i$ using their four-term cycle.
  - Standards: CCSS HSN-CN.A.1 (direct); TEKS 2A.7(A) (supporting knowledge).
- **U04-L02-C01-O2:** Justify exponent reduction from $i^4=1$ and simplify products.
  - Standards: CCSS HSN-CN.A.2 (direct); TEKS 2A.7(A) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the cycle of powers from the defining square of the imaginary unit.
- Use an exponent remainder to select the corresponding cycle value.
- Combine powers and numerical coefficients consistently and write the result in standard complex form.

**Explanation**

The cycle is $i^0=1$, $i^1=i$, $i^2=-1$, $i^3=-i$, and $i^4=1$. If $n=4q+r$ with $0\le r<4$, then $i^n=(i^4)^qi^r=i^r$. Thus divide the exponent by four and use the remainder. Reduce powers after multiplying coefficients or after combining exponents; both routes should agree.

**Worked examples**

Since $37=4(9)+1$, $i^{37}=i$. Since $22=4(5)+2$, $i^{22}=-1$. Therefore $3i^{37}\cdot2i^{22}=6(i)(-1)=-6i$, also obtained from $6i^{59}$.

**Exercises**

1. Simplify $i^{100}$ and $i^{103}$.
   - Answer and reasoning: $1$ and $-i$.
2. Simplify $-4i^{18}+2i^{19}$.
   - Answer and reasoning: $4-2i$.

**Assessment**

Independent prompt: Simplify $i^{58}$ and $2i^{11}\cdot3i^6$; justify using $i^4=1$.

Expected answer: $i^{58}=-1$; product $6i^{17}=6i$. Exponents with the same remainder modulo four yield the same power.

Scoring (4 points): 2 points for correct simplifications; 2 points for cycle justification. Assesses **U04-L02-C01-O1** and **U04-L02-C01-O2**.

### Concept U04-L02-C02: Adding and subtracting complex numbers

**Content**

Combining real and imaginary components; distribution of subtraction; additive inverses.

**Learning objectives**

- **U04-L02-C02-O1:** Add complex numbers and write the result in standard form.
  - Standards: CCSS HSN-CN.A.2 (direct); TEKS 2A.7(A) (direct).
- **U04-L02-C02-O2:** Subtract complex numbers with correct signs and explain componentwise combination.
  - Standards: CCSS HSN-CN.A.2 (direct); TEKS 2A.7(A) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Combine real components with real components and imaginary components with imaginary components.
- Negate both components when subtracting a complex number.
- Use the additive inverse to explain sign changes rather than combining unlike real and imaginary terms.

**Explanation**

Combine real terms with real terms and imaginary terms with imaginary terms. Distribution and commutativity give $(a+bi)+(c+di)=(a+c)+(b+d)i$. Subtraction gives $(a-c)+(b-d)i$, so the negative sign acts on both components. Real and imaginary components cannot be combined into one real coefficient because $1$ and $i$ are distinct basis elements over the reals.

**Worked examples**

$(3-5i)+(-2+7i)=1+2i$. For subtraction, $(3-5i)-(-2+7i)=3-5i+2-7i=5-12i$. The sign of $-2$ changes when the second number is subtracted.

**Exercises**

1. Add $(4+2i)+(-7-6i)$.
   - Answer and reasoning: $-3-4i$.
2. Subtract $(1-3i)-(5-2i)$.
   - Answer and reasoning: $-4-i$.

**Assessment**

Independent prompt: Find the sum and difference of $z=2+5i$ and $w=-3-4i$, and identify the additive inverse of $w$.

Expected answer: $z+w=-1+i$; $z-w=5+9i$; $-w=3+4i$.

Scoring (4 points): 2 points for sum; 2 points for difference and correct inverse. Assesses **U04-L02-C02-O1** and **U04-L02-C02-O2**.
