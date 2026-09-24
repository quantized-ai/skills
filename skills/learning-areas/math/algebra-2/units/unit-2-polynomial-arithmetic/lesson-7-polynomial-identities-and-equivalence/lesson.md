# Lesson 2.7: Polynomial identities and equivalence

[Unit 2: Polynomial arithmetic](../unit.md) · [Algebra 2](../../../curriculum.md)

Distinguish identities from equations and establish polynomial equivalence symbolically. Use a proven identity to generate numerical relationships and assess the scope of the resulting claim.

## Learning objectives

- Prove identities by expansion or coefficient comparison.
- Disprove false identities with counterexamples.
- Use the Pythagorean-triple identity to generate valid numerical relationships.

## Learning outcome

The student can justify polynomial identities and transfer them to numerical relationships without confusing examples with proof.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State whether a claim concerns all allowed inputs or only particular solutions.
- Use symbolic transformations to prove equivalence and a valid counterexample to refute a false claim.
- Account for the mixed terms in the Pythagorean identity.
- Apply the integer-input conditions and distinguish a generated triple from a primitive one.

## Concepts

### Concept U02-L07-C01: Proving and disproving polynomial identities

**Content**

Identity versus equation; equivalent transformations; counterexamples; comparison of coefficients.

**Learning objectives**

- **U02-L07-C01-O1:** Prove a proposed polynomial identity by symbolic expansion and comparison.
  - Standards: CCSS HSA-APR.C.4 (direct).
- **U02-L07-C01-O2:** Disprove a false identity with a counterexample or unequal coefficients.
  - Standards: CCSS HSA-APR.C.4 (supporting knowledge).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Distinguish an identity asserted for all allowed inputs from an equation with a restricted solution set.
- Establish a true identity by equivalent symbolic transformations or matching polynomial coefficients.
- Disprove a false identity with a valid counterexample and explain why successful sample checks alone are insufficient.

**Explanation**

An identity is true for every allowed input; an equation may hold only at particular inputs. To prove an identity, transform one side into the other or independently simplify both to identical coefficients. Never assume the proposed identity is true and use a nonreversible step as the whole proof. To disprove it, one valid counterexample suffices. Comparing coefficients is a structural way to see why two polynomial expressions cannot agree for every real input.

**Worked examples**

Prove $(x+2)^2-(x-2)^2=8x$. The left side expands to $(x^2+4x+4)-(x^2-4x+4)=8x$, equal to the right side for all $x$. The claim with right side $4x$ is false: at $x=1$, the left side is $8$, not $4$.

**Exercises**

1. Prove $(x+1)(x-1)+1=x^2$.
   - Answer and reasoning: Expand to $x^2-1+1=x^2$.
2. Disprove $(x+y)^3=x^3+y^3$.
   - Answer and reasoning: At $x=y=1$, the sides are $8$ and $2$.

**Assessment**

Independent prompt: Prove $(2x+1)^2-(2x-1)^2=8x$ and explain why checking only $x=0$ cannot prove it.

Expected answer: Expansion gives $(4x^2+4x+1)-(4x^2-4x+1)=8x$; one matching input provides no guarantee for other inputs.

Scoring (4 points): 2 points for symbolic proof; 2 points for explaining the evidentiary limit. Assesses **U02-L07-C01-O1** and **U02-L07-C01-O2**.

### Concept U02-L07-C02: Identities and numerical relationships

**Content**

Identities that generate numerical patterns; Pythagorean triples; distinguishing proof from examples.

**Learning objectives**

- **U02-L07-C02-O1:** Prove the Pythagorean-triple polynomial identity by expansion.
  - Standards: CCSS HSA-APR.C.4 (direct).
- **U02-L07-C02-O2:** Use an identity to generate and verify an exact numerical relationship.
  - Standards: CCSS HSA-APR.C.4 (direct).

**Proficiency criteria**

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Expand both sides of the Pythagorean-triple identity and account for the mixed-term combination.
- Choose inputs meeting the conditions for positive integer side lengths and interpret the generated quantities.
- Verify the numerical relationship and distinguish a valid triple from a primitive triple.

**Explanation**

The identity $(u^2-v^2)^2+(2uv)^2=(u^2+v^2)^2$ holds for all real $u,v$. For integers $u>v>0$, the three positive integers $u^2-v^2$, $2uv$, and $u^2+v^2$ satisfy the Pythagorean equation. A generated triple need not be primitive; a common factor may remain. The algebraic proof guarantees all choices work, while checking one triple illustrates the result.

**Worked examples**

Expanding the left gives $u^4-2u^2v^2+v^4+4u^2v^2=u^4+2u^2v^2+v^4$, the right-side expansion. With $u=3,v=2$, obtain $5,12,13$; indeed $25+144=169$.

**Exercises**

1. Generate a triple with $u=4,v=1$.
   - Answer and reasoning: $15,8,17$; $225+64=289$.
2. Generate a triple with $u=4,v=2$ and explain whether it is primitive.
   - Answer and reasoning: $12,16,20$; not primitive, because every entry is divisible by $4$.

**Assessment**

Independent prompt: Use $u=5,v=2$ to generate a triple, verify it numerically, and show the cross-term simplification that proves the identity generally.

Expected answer: $21,20,29$; $441+400=841$. The mixed terms combine as $-2u^2v^2+4u^2v^2=2u^2v^2$.

Scoring (4 points): 2 points for general algebraic justification; 2 points for the triple and numerical verification. Assesses **U02-L07-C02-O1** and **U02-L07-C02-O2**.
