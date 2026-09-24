# Lesson 15.3: Exact special-angle values

[Unit 15: Trigonometric functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Special triangles supply exact trigonometric magnitudes, and circle transformations extend them to other quadrants. The lesson develops reasoning from geometry before numerical approximation.

## Learning objectives

- Derive special-angle values from geometric triangles.
- Use reference angles and coordinate transformations to find exact ratios.
- Evaluate negative or multi-turn angles with correct signs and restrictions.

## Learning outcome

The student can reconstruct exact trigonometric values from triangle geometry and unit-circle transformations.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Derive the needed side ratios and normalize them to a unit-circle radius.
- Locate the actual terminal position while using a reference angle only for magnitude.
- Explain sign changes through reflected or opposite coordinates.
- Return exact ratio values or identify undefined tangent without introducing unsupported decimal approximations.

## Concepts

### Concept U15-L03-C01: Special triangles

**Content**

45–45–90 and 30–60–90 triangles; exact radicals; unit-circle normalization.

**Learning objectives**

- **U15-L03-C01-O1:** Derive exact trigonometric values at $\pi/4$, $\pi/6$, and $\pi/3$ geometrically.
  - Standards: CCSS HSF-TF.A.3 (+, direct).
- **U15-L03-C01-O2:** Use exact values to calculate sine, cosine, and tangent without decimal approximation.
  - Standards: CCSS HSF-TF.A.3 (+, direct).

**Proficiency criteria**

- Derive special-angle coordinates from isosceles-right and bisected-equilateral triangles using the Pythagorean theorem.
- Normalize triangle side lengths to a unit hypotenuse before interpreting sine and cosine coordinates.
- Calculate exact sine, cosine, and tangent values from the derived ratios and preserve equivalent radical forms.

**Explanation**

An isosceles right triangle with legs 1 has hypotenuse $\sqrt2$, so its unit-radius legs are $\sqrt2/2$. Bisecting an equilateral triangle of side 2 gives legs 1 and $\sqrt3$ with hypotenuse 2. These produce values through geometry rather than a memorized table without justification.

**Worked examples**

1. At $\pi/4$, equal coordinates satisfy $2x^2=1$, so $x=y=\sqrt2/2$ in quadrant I and tangent is 1.
2. At $\pi/6$, opposite/hypotenuse is $1/2$ and adjacent/hypotenuse is $\sqrt3/2$; tangent is $1/\sqrt3=\sqrt3/3$. At $\pi/3$ the sine/cosine values exchange, yielding tangent $\sqrt3$.

**Exercises**

1. Explain why $\sin(\pi/3)=\sqrt3/2$. **Answer:** The opposite leg in the halved equilateral triangle is $\sqrt3$ and hypotenuse is 2.
2. Evaluate $2\cos(\pi/4)$. **Answer:** $2(\sqrt2/2)=\sqrt2$.

**Assessment**

Derive $\cos(\pi/6)$ from an equilateral triangle of side 2, then evaluate $\tan(\pi/3)$. **Expected:** bisected triangle has adjacent leg $\sqrt{4-1}=\sqrt3$, hence cosine $\sqrt3/2$; tangent at $\pi/3$ is $\sqrt3/1=\sqrt3$. **Rubric (4):** geometric derivation (2, O1); correct exact ratio calculation (2, O2).

Objective coverage: **U15-L03-C01-O1**, **U15-L03-C01-O2**.

### Concept U15-L03-C02: Reference angles and reflected coordinates

**Content**

Angles $\pi-x$, $\pi+x$, $2\pi-x$; sign changes; exact values in all quadrants.

**Learning objectives**

- **U15-L03-C02-O1:** Use unit-circle transformations to express ratios at reflected or rotated angles.
  - Standards: CCSS HSF-TF.A.3 (+, direct).
- **U15-L03-C02-O2:** Find exact special-angle values beyond quadrant I, including negative and large inputs.
  - Standards: CCSS HSF-TF.A.3 (+, direct).

**Proficiency criteria**

- Reduce an angle to a useful reference position without losing its actual quadrant or direction.
- Explain coordinate changes under reflection and half-turn rotation and use them to determine all ratio signs.
- Combine exact special-triangle magnitudes with those signs, treating tangent as undefined wherever its denominator vanishes.

**Explanation**

For any real $x$, if its point is $(c,s)$, then points at $\pi-x$, $\pi+x$, and $2\pi-x$ are respectively $(-c,s)$, $(-c,-s)$, and $(c,-s)$. Read sine/cosine from these coordinates and divide for tangent when defined. A positive reference angle supplies magnitudes; the actual quadrant supplies signs.

**Worked examples**

1. $5\pi/6=\pi-\pi/6$ has point $(-\sqrt3/2,1/2)$, so tangent is $-\sqrt3/3$.
2. $-\pi/4$ is coterminal with $7\pi/4=2\pi-\pi/4$, so sine $=-\sqrt2/2$, cosine $=\sqrt2/2$, and tangent $=-1$.

**Exercises**

1. Find $\sin(7\pi/6)$ and $\cos(7\pi/6)$. **Answer:** $-1/2,-\sqrt3/2$.
2. Find $\tan(11\pi/3)$. **Answer:** Reduce to $5\pi/3$; tangent $=-\sqrt3$.

**Assessment**

Write the point at $\pi+x$ in terms of the point $(c,s)$ at $x$, then find sine and cosine of $4\pi/3$. **Expected:** $(-c,-s)$; with $x=\pi/3$, sine $=-\sqrt3/2$ and cosine $=-1/2$. **Rubric (4):** both general coordinate changes (2, O1); both exact values with quadrant reasoning (2, O2).

Objective coverage: **U15-L03-C02-O1**, **U15-L03-C02-O2**.
