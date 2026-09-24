# Lesson 4.8: Complex quadratic roots and method choice

[Unit 4: Complex numbers and quadratic equations](../unit.md) · [Algebra 2](../../../curriculum.md)

Solve quadratics whose roots are nonreal and compare valid solution methods. Reconcile exact answers and verify complex roots through substitution.

## Learning objectives

- Solve negative-discriminant quadratics in standard complex form.
- Explain conjugate roots for real coefficients.
- Select and compare exact quadratic-solving methods.

## Learning outcome

The student can obtain, verify, and reconcile complete quadratic solution sets across real and complex cases.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose a method from the equation structure and preserve equivalent solution sets throughout.
- Simplify negative-discriminant roots into the required complex form.
- Explain the conjugate relationship and verify a root with correct complex arithmetic.
- Show that answers from different methods represent the same roots and avoid interpreting nonreal roots as real intercepts.

## Concepts

### Concept U04-L08-C01: Solving quadratics with complex roots

**Content**

Negative discriminant; simplified $a\pm bi$ roots; conjugate pairing; direct substitution checks.

**Learning objectives**

- **U04-L08-C01-O1:** Solve real-coefficient quadratics with negative discriminant in standard complex form.
  - Standards: CCSS HSN-CN.C.7 (direct); CCSS HSA-REI.B.4b (direct); TEKS 2A.4(F) (direct).
- **U04-L08-C01-O2:** Check a complex root and explain why its conjugate also appears.
  - Standards: CCSS HSN-CN.C.7 (direct); TEKS 2A.7(A) (direct for checking arithmetic).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Convert a negative discriminant to an imaginary radical and simplify both components of each root.
- Identify the conjugate relationship forced by real coefficients.
- Verify a complex root using the imaginary-unit relation and avoid interpreting nonreal roots as real intercepts.

**Explanation**

When $D<0$, rewrite $\sqrt D=i\sqrt{-D}$, simplify the radical, and divide both numerator parts by $2a$. Real coefficients force the two formula branches to have equal real parts and opposite imaginary parts. They are zeros in the complex number system, not horizontal intercepts of the real graph. Checking uses ordinary substitution together with $i^2=-1$.

**Worked examples**

For $x^2-4x+13=0$, $D=16-52=-36$. Thus $x=(4\pm6i)/2=2\pm3i$. Check $2+3i$: $(2+3i)^2-4(2+3i)+13=(-5+12i)-8-12i+13=0$.

**Exercises**

1. Solve $x^2+6x+13=0$.
   - Answer and reasoning: $x=-3\pm2i$.
2. Solve $2x^2-4x+7=0$.
   - Answer and reasoning: $x=1\pm i\sqrt{10}/2$.

**Assessment**

Independent prompt: Solve $x^2+2x+10=0$, verify one root, and identify the conjugate pair.

Expected answer: $x=-1\pm3i$; substituting $-1+3i$ gives $(-8-6i)+(-2+6i)+10=0$. The two roots have opposite imaginary parts.

Scoring (4 points): 2 points for exact roots; 2 points for substitution and conjugate explanation. Assesses **U04-L08-C01-O1** and **U04-L08-C01-O2**.

### Concept U04-L08-C02: Choosing and comparing quadratic methods

**Content**

Inspection; square-root property; factoring; completing the square; formula; equivalent solution sets.

**Learning objectives**

- **U04-L08-C02-O1:** Select an efficient exact method from the equation structure and justify the choice.
  - Standards: CCSS HSA-REI.B.4b (direct); TEKS 2A.4(F) (direct).
- **U04-L08-C02-O2:** Compare two valid methods and reconcile their equivalent root expressions.
  - Standards: CCSS HSA-REI.A.1 (direct); CCSS HSA-REI.B.4b (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Choose an exact solving method from the equation structure and justify the selection.
- Preserve the complete solution set under every algebraic step.
- Reconcile two valid methods by simplifying their root expressions rather than judging agreement from appearance alone.

**Explanation**

Use square roots for an isolated square, factoring for a visible product or easy trinomial, and the formula for a general quadratic. Completing the square reveals the center of the two roots and prepares for vertex form. Efficiency is a reasoned preference, not a restriction: all valid methods must produce the same solution set. Exact equivalent expressions can look different, so simplify before declaring disagreement.

**Worked examples**

For $x^2-4x-1=0$, completing the square gives $(x-2)^2=5$, hence $2\pm\sqrt5$. The formula gives $(4\pm\sqrt{20})/2=(4\pm2\sqrt5)/2=2\pm\sqrt5$. For $(x+7)^2=9$, square roots immediately give $-7\pm3$, so expanding first is unnecessary.

**Exercises**

1. Choose and use a method for $x(x-5)=0$.
   - Answer and reasoning: Zero product: $x=0,5$.
2. Choose and use a method for $3(x-2)^2=15$.
   - Answer and reasoning: Square roots: $x=2\pm\sqrt5$.

**Assessment**

Independent prompt: Solve $x^2+2x-2=0$ by two methods and show the answers agree.

Expected answer: Completing square: $(x+1)^2=3$, giving $-1\pm\sqrt3$. Formula: $(-2\pm\sqrt{12})/2=-1\pm\sqrt3$.

Scoring (4 points): 2 points for one correct method and rationale; 2 points for the second method and equivalence. Assesses **U04-L08-C02-O1** and **U04-L08-C02-O2**.
