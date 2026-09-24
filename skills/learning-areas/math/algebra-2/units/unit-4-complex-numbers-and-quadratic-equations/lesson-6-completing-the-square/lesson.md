# Lesson 4.6: Completing the square

[Unit 4: Complex numbers and quadratic equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Create perfect-square equations while preserving equivalence. Extend the half-coefficient method to nonmonic equations and explain the scaling of every added term.

## Learning objectives

- Complete the square in monic and nonmonic equations.
- Track equality-preserving adjustments and outside coefficients.
- Solve the resulting square equations exactly.

## Learning outcome

The student can complete the square with valid normalization and recover all exact roots.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify the correct linear coefficient after any required normalization.
- Construct the missing square term and balance the adjustment on both sides.
- Explain how an outside coefficient scales an adjustment inside a bracket.
- Use the completed square to obtain all roots, retaining exact fractions and real or complex radicals.

## Concepts

### Concept U04-L06-C01: Completing the square when the leading coefficient is one

**Content**

Half the linear coefficient; adding its square to both sides; equivalent squared form.

**Learning objectives**

- **U04-L06-C01-O1:** Transform $x^2+bx=c$ into an equivalent equation with a perfect square.
  - Standards: CCSS HSA-REI.B.4a (direct); TEKS 2A.4(F) (direct).
- **U04-L06-C01-O2:** Solve the completed-square equation with real or complex roots.
  - Standards: CCSS HSA-REI.B.4b (direct); TEKS 2A.4(F) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose the missing square term from half the normalized linear coefficient.
- Preserve the equation by adding the same quantity to both sides.
- Express the completed square accurately and use both root branches for real or complex solutions.

**Explanation**

Since $(x+b/2)^2=x^2+bx+(b/2)^2$, adding $(b/2)^2$ creates the missing constant. Add the same amount to both sides to preserve equality. The sign inside the square is inherited from $b/2$, and the added constant is always nonnegative. This method works even when integer factoring fails and supplies exact roots through the square-root property.

**Worked examples**

Solve $x^2+6x+1=0$. Move the constant: $x^2+6x=-1$. Half of $6$ is $3$, and its square is $9$. Add $9$ to both sides: $(x+3)^2=8$, so $x=-3\pm2\sqrt2$.

**Exercises**

1. Solve $x^2-4x+1=0$ by completing the square.
   - Answer and reasoning: $(x-2)^2=3$, so $x=2\pm\sqrt3$.
2. Solve $x^2+2x+5=0$.
   - Answer and reasoning: $(x+1)^2=-4$, so $x=-1\pm2i$.

**Assessment**

Independent prompt: Solve $x^2-10x+30=0$ by completing the square and state why $25$ must be added to both sides.

Expected answer: $(x-5)^2=-5$, so $x=5\pm i\sqrt5$; $25=(-10/2)^2$ completes the square and equal additions preserve solutions.

Scoring (4 points): 2 points for valid square completion; 2 points for roots and equality explanation. Assesses **U04-L06-C01-O1** and **U04-L06-C01-O2**.

### Concept U04-L06-C02: Completing the square with a nonunit leading coefficient

**Content**

Dividing the equation by $a\ne0$; fractional half-coefficients; exact arithmetic.

**Learning objectives**

- **U04-L06-C02-O1:** Normalize a quadratic equation and complete its square without changing the solution set.
  - Standards: CCSS HSA-REI.B.4a (direct); TEKS 2A.4(F) (direct).
- **U04-L06-C02-O2:** Solve a nonmonic quadratic and explain why adding a constant inside an unnormalized expression requires scaling.
  - Standards: CCSS HSA-REI.A.1 (direct); CCSS HSA-REI.B.4b (direct); TEKS 2A.4(F) (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Obtain a unit quadratic coefficient by dividing the equation by its nonzero leading coefficient or factoring that coefficient from the quadratic and linear terms before applying the half-coefficient rule.
- Retain exact fractional arithmetic when constructing the square.
- Explain the outside scaling of an adjustment made inside a factored bracket and preserve all equivalent solutions.

**Explanation**

Divide every term of $ax^2+bx+c=0$ by nonzero $a$ before applying the half-coefficient rule. The linear coefficient then becomes $b/a$, so the added square is $(b/(2a))^2$. Fractions are legitimate and should be retained exactly. If instead factoring $a$ outside a bracket, adding $t$ inside adds $at$ to the full expression; forgetting this scaling changes the equation.

**Worked examples**

Solve $2x^2+4x-3=0$. Divide by $2$: $x^2+2x=3/2$. Add $1$: $(x+1)^2=5/2$. Thus $x=-1\pm\sqrt{10}/2$. Squaring the offset verifies $5/2$.

**Exercises**

1. Solve $3x^2-6x-2=0$.
   - Answer and reasoning: $(x-1)^2=5/3$, so $x=1\pm\sqrt{15}/3$.
2. In $2[x^2+3x]$, how much does adding $9/4$ inside increase the whole expression?
   - Answer and reasoning: $2(9/4)=9/2$.

**Assessment**

Independent prompt: Solve $2x^2-6x+1=0$ by square completion and identify the exact number added after normalization.

Expected answer: $x^2-3x=-1/2$; add $9/4$ to obtain $(x-3/2)^2=7/4$, so $x=(3\pm\sqrt7)/2$.

Scoring (4 points): 2 points for normalization and added square; 2 points for exact roots and equivalent steps. Assesses **U04-L06-C02-O1** and **U04-L06-C02-O2**.
