# Lesson 15.4: Pythagorean identity

[Unit 15: Trigonometric functions](../unit.md) · [Algebra 2](../../../curriculum.md)

The unit-circle equation proves the Pythagorean identity for every real angle. Its algebraic use requires careful distinction between squared magnitudes, signed ratios, and quadrant consistency.

## Learning objectives

- Prove and rearrange the Pythagorean identity.
- Distinguish identities from equations true only at selected angles.
- Recover missing ratios using one ratio and quadrant information.

## Learning outcome

The student can justify the identity and use it to recover consistent signed trigonometric ratios.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Connect the identity to the coordinates of an arbitrary unit-circle point.
- Apply valid algebraic transformations to squared ratios without confusing their notation with squared inputs.
- Recover magnitudes and choose signs from the stated quadrant rather than from the positive square root alone.
- Verify the reconstructed ratios and reject incompatible conditions or false identity claims.

## Concepts

### Concept U15-L04-C01: Proof and algebraic use of the identity

**Content**

$\sin^2\theta+\cos^2\theta=1$; squared notation; true identity versus an equation at selected angles.

**Learning objectives**

- **U15-L04-C01-O1:** Prove the Pythagorean identity from the unit-circle equation.
  - Standards: CCSS HSF-TF.C.8 (direct).
- **U15-L04-C01-O2:** Use the identity to simplify expressions and distinguish identities from conditional equations.
  - Standards: CCSS HSF-TF.C.8 (direct).

**Proficiency criteria**

- Prove the identity by substituting unit-circle coordinates into the circle equation for an arbitrary real angle.
- Distinguish a squared trigonometric value from evaluating a trigonometric function at a squared input.
- Use the identity in valid algebraic rearrangements and disprove a proposed identity with an allowed counterexample when appropriate.

**Explanation**

Every terminal point satisfies $x^2+y^2=1$. Substitution $x=\cos\theta,y=\sin\theta$ proves the identity for every real angle. The notation $\sin^2\theta$ means $(\sin\theta)^2$, not $\sin(\theta^2)$. An identity holds throughout its common domain; checking a few values cannot establish one.

**Worked examples**

1. $1-\sin^2\theta=\cos^2\theta$ follows by subtracting $\sin^2\theta$ from both sides.
2. $\sin\theta+\cos\theta=1$ is not an identity: at $\pi/4$ the left side is $\sqrt2$, even though at 0 it equals 1.

**Exercises**

1. Simplify $3\sin^2t+3\cos^2t$. **Answer:** 3, factoring the identity.
2. If $\sin^2t=0.36$, find $\cos^2t$. **Answer:** $1-0.36=0.64$, without yet choosing cosine’s sign.

**Assessment**

Prove the Pythagorean identity using coordinates, then simplify $2-2\cos^2\theta$ and explain why $\sin\theta+\cos\theta=1$ is not an identity. **Expected:** substitute into $x^2+y^2=1$; $2\sin^2\theta$; counterexample $\pi/4$. **Rubric (4):** coordinate proof (2, O1); simplification and counterexample (2, O2).

Objective coverage: **U15-L04-C01-O1**, **U15-L04-C01-O2**.

### Concept U15-L04-C02: Recovering ratios with quadrant information

**Content**

Square roots and sign choice; ratios from sine, cosine, or tangent; incompatible given conditions.

**Learning objectives**

- **U15-L04-C02-O1:** Find missing trigonometric ratios from one ratio and an angle’s quadrant.
  - Standards: CCSS HSF-TF.C.8 (direct).
- **U15-L04-C02-O2:** Justify sign choices and detect incompatible ratio/quadrant information.
  - Standards: CCSS HSF-TF.C.8 (direct).

**Proficiency criteria**

- Use the Pythagorean identity or its coordinate equations to recover missing ratio magnitudes from a given ratio.
- Select square-root signs using the specified quadrant before forming tangent or other requested ratios.
- Reject incompatible ratio/quadrant information and verify that the recovered ratios satisfy both the identity and the original condition.

**Explanation**

The identity determines a squared magnitude, so taking square roots creates two possible signs until the quadrant is used. Given tangent $t$, use $y=tx$ with $x^2+y^2=1$, obtaining $(1+t^2)x^2=1$; then select $x$ and $y$ signs. A positive sine cannot belong to quadrant III or IV.

**Worked examples**

1. Given $\sin\theta=3/5$ in quadrant II, $\cos^2\theta=16/25$, hence cosine $=-4/5$ and tangent $=-3/4$.
2. Given $\tan\theta=2$ in quadrant III, $y=2x$ and $5x^2=1$. Thus $x=-1/\sqrt5$, $y=-2/\sqrt5$; cosine and sine are both negative.

**Exercises**

1. Given cosine $5/13$ in quadrant IV, find sine and tangent. **Answer:** $-12/13,-12/5$.
2. Can sine $=-1/3$ occur in quadrant II? **Answer:** No; quadrant-II $y$ coordinates are positive.

**Assessment**

Given $\tan\theta=-3/4$ in quadrant II, find sine and cosine and justify the signs. **Expected:** ratio magnitudes form a 3–4–5 triangle (or solve the identity); sine $3/5$, cosine $-4/5$ because $y>0,x<0$. **Rubric (4):** identity or equivalent ratio derivation and values (2, O1); both quadrant-based signs (2, O2).

Objective coverage: **U15-L04-C02-O1**, **U15-L04-C02-O2**.
