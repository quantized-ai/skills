# Lesson 4.7: The quadratic formula and discriminant

[Unit 4: Complex numbers and quadratic equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Derive the quadratic formula from completing the square and interpret its discriminant. Distinguish root count, multiplicity, and rationality without extending a classification beyond its assumptions.

## Learning objectives

- Derive and apply the quadratic formula.
- Classify roots from the discriminant.
- State the conditions needed for rationality conclusions.

## Learning outcome

The student can justify the quadratic formula and use its discriminant to describe the resulting roots accurately.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the formula through equivalent steps with a nonzero leading coefficient.
- Substitute all signed coefficients and divide the complete numerator correctly.
- Relate discriminant sign to distinct real, repeated real, or nonreal conjugate roots.
- Separate multiplicity from distinct-root count and restrict rationality shortcuts to appropriate coefficients.

## Concepts

### Concept U04-L07-C01: Deriving and applying the quadratic formula

**Content**

General square completion; nonzero $a$; denominator $2a$; substitution with parentheses.

**Learning objectives**

- **U04-L07-C01-O1:** Derive the quadratic formula by completing the square.
  - Standards: CCSS HSA-REI.B.4a (direct).
- **U04-L07-C01-O2:** Apply the formula to solve a quadratic equation exactly.
  - Standards: CCSS HSA-REI.B.4b (direct); TEKS 2A.4(F) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the formula from an equivalent completed-square equation without assuming a positive leading coefficient.
- Track the nonzero-leading-coefficient condition and the division of the entire numerator.
- Substitute signed coefficients accurately and simplify both exact roots.

**Explanation**

From $ax^2+bx+c=0$, divide by $a$, move $c/a$, and add $b^2/(4a^2)$. This gives $(x+b/(2a))^2=(b^2-4ac)/(4a^2)$. Equivalently, $(2ax+b)^2=b^2-4ac$, so $2ax+b=\pm\sqrt{b^2-4ac}$. Therefore $x=(-b\pm\sqrt{b^2-4ac})/(2a)$. This form avoids an unnecessary assumption that $a$ is positive. The entire numerator is divided by $2a$.

**Worked examples**

For $3x^2-2x-2=0$, $a=3,b=-2,c=-2$. Then $b^2-4ac=4+24=28$ and $x=(2\pm\sqrt{28})/6=(1\pm\sqrt7)/3$. Parenthesizing $b=-2$ prevents a sign error in $-b$.

**Exercises**

1. Solve $2x^2+x-4=0$.
   - Answer and reasoning: $x=(-1\pm\sqrt{33})/4$.
2. Explain why $a=0$ is excluded from the derivation.
   - Answer and reasoning: Division by $a$ and $2a$ would be invalid, and the equation would not be quadratic.

**Assessment**

Independent prompt: Derive the formula from $(2ax+b)^2=b^2-4ac$, then solve $2x^2-3x-1=0$.

Expected answer: Take both square-root branches and divide by $2a$: $x=(-b\pm\sqrt{b^2-4ac})/(2a)$; here $x=(3\pm\sqrt{17})/4$.

Scoring (4 points): 2 points for derivation; 2 points for correct substitution and roots. Assesses **U04-L07-C01-O1** and **U04-L07-C01-O2**.

### Concept U04-L07-C02: The discriminant and root classification

**Content**

$D=b^2-4ac$; distinct real, repeated real, and nonreal conjugate roots; rationality for rational coefficients.

**Learning objectives**

- **U04-L07-C02-O1:** Predict the number and type of roots from the discriminant.
  - Standards: CCSS HSA-REI.B.4b (direct); CCSS HSN-CN.C.7 (supporting knowledge); TEKS 2A.4(F) (supporting knowledge).
- **U04-L07-C02-O2:** Distinguish root-count conclusions from rationality conclusions and justify the conditions.
  - Standards: CCSS HSA-REI.B.4b (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Compute the discriminant from the coefficients of a correctly normalized zero-form equation.
- Distinguish two distinct real roots, a repeated real root, and a nonreal conjugate pair from its sign.
- Apply rational-root conclusions only under the rational-coefficient conditions and distinguish distinct roots from roots counted with multiplicity.

**Explanation**

For real coefficients, $D>0$ gives two distinct real roots, $D=0$ one repeated real root, and $D<0$ two nonreal complex conjugate roots. Every quadratic still has two complex roots counting multiplicity. For rational coefficients, a nonnegative rational-square discriminant gives rational roots; a positive nonsquare rational discriminant gives irrational real roots. Without the rational-coefficient assumption, that rationality shortcut is not valid.

**Worked examples**

For $x^2-6x+9=0$, $D=36-36=0$, so the repeated root is $3$. For $2x^2+x+3=0$, $D=1-24=-23$, so there are two nonreal conjugate roots. For $x^2-2=0$, $D=8>0$ is nonsquare, giving two irrational real roots.

**Exercises**

1. Classify roots of $x^2+2x-3=0$ without solving.
   - Answer and reasoning: $D=16$: two distinct rational real roots.
2. Classify roots of $4x^2+4x+1=0$.
   - Answer and reasoning: $D=0$: one distinct repeated real root.

**Assessment**

Independent prompt: Classify the roots of $x^2+4x+7=0$ and $2x^2-1=0$; state the discriminant and distinguish “no real roots” from “no roots.”

Expected answer: Discriminants $-12$ and $8$: first has two nonreal roots, second two irrational real roots. Negative discriminant does not mean no complex roots.

Scoring (4 points): 2 points for discriminants and classification; 2 points for the number-system distinction. Assesses **U04-L07-C02-O1** and **U04-L07-C02-O2**.
