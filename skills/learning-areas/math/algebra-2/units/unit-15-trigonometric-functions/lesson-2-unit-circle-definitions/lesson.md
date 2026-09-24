# Lesson 15.2: Unit-circle definitions

[Unit 15: Trigonometric functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Unit-circle coordinates extend sine, cosine, and tangent beyond acute angles. Coordinate reflections and rotations explain their signs, symmetry, periods, and excluded tangent inputs.

## Learning objectives

- Read trigonometric ratios from unit-circle coordinates.
- Determine quadrant signs and tangent restrictions.
- Explain trigonometric symmetry and periodicity geometrically.

## Learning outcome

The student can derive trigonometric values and structural properties from unit-circle position.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Connect the coordinate definitions to right-triangle ratios where both interpretations apply.
- Use coordinate signs and quotient validity to determine all requested ratios.
- Explain parity by reflection and distinguish full-turn repetition from tangent’s half-turn repetition.
- Identify all inputs excluded by tangent’s denominator and keep them excluded when using its periodicity.

## Concepts

### Concept U15-L02-C01: Sine, cosine, and tangent as coordinates

**Content**

$(\cos\theta,\sin\theta)$; tangent as $y/x$; axes and undefined tangent; right-triangle connection.

**Learning objectives**

- **U15-L02-C01-O1:** Determine sine and cosine from a unit-circle point and connect them to triangle ratios.
  - Standards: CCSS HSF-TF.A.2 (direct); CCSS HSG-SRT.C.6 (prerequisite review).
- **U15-L02-C01-O2:** Compute tangent where defined and identify its excluded inputs.
  - Standards: CCSS HSF-TF.A.2 (direct).

**Proficiency criteria**

- Read cosine and sine as horizontal and vertical unit-circle coordinates and connect them to acute-angle triangle ratios.
- Compute tangent as the coordinate quotient only when the horizontal coordinate is nonzero.
- Identify axis-angle values and express the complete family of tangent’s excluded inputs.

**Explanation**

An angle determines a terminal point $(x,y)$ on $x^2+y^2=1$. Define cosine as $x$, sine as $y$, and tangent as $y/x$ when $x\ne0$. In quadrant I these equal adjacent/hypotenuse, opposite/hypotenuse, and opposite/adjacent because the radius is 1. Coordinates extend the definitions beyond acute triangle angles.

**Worked examples**

1. At $(3/5,4/5)$, $\cos\theta=3/5$, $\sin\theta=4/5$, and $\tan\theta=(4/5)/(3/5)=4/3$.
2. At $\theta=\pi/2$, the point is $(0,1)$, so sine is 1 and cosine is 0; tangent is undefined because division by zero is impossible.

**Exercises**

1. Find all three ratios at $(-5/13,12/13)$. **Answer:** cosine $-5/13$, sine $12/13$, tangent $-12/5$.
2. Find sine and cosine at $\pi$. **Answer:** 0 and $-1$, from $(-1,0)$.

**Assessment**

At a unit-circle point $(-4/5,-3/5)$ find sine, cosine, and tangent. State all radian inputs where tangent is undefined. **Expected:** $-3/5,-4/5,3/4$; $\pi/2+k\pi$, $k\in\mathbb Z$. **Rubric (4):** coordinate definitions and two values (2, O1); quotient and exclusions (2, O2).

Objective coverage: **U15-L02-C01-O1**, **U15-L02-C01-O2**.

### Concept U15-L02-C02: Quadrant signs, periodicity, and symmetry

**Content**

Coordinate signs; full-turn periodicity; sine/tangent odd and cosine even; tangent’s $\pi$ period.

**Learning objectives**

- **U15-L02-C02-O1:** Use quadrant position and unit-circle reflections to determine signs and parity.
  - Standards: CCSS HSF-TF.A.2 (direct); CCSS HSF-TF.A.4 (+, direct).
- **U15-L02-C02-O2:** Explain sine, cosine, and tangent periods using terminal points.
  - Standards: CCSS HSF-TF.A.4 (+, direct).

**Proficiency criteria**

- Determine ratio signs from coordinate signs rather than relying on an angle’s positive or negative notation alone.
- Explain sine/tangent odd symmetry and cosine even symmetry by reflecting unit-circle points.
- Derive repetition after full turns and explain why opposite points preserve tangent but generally reverse sine and cosine.

**Explanation**

Reflecting $(x,y)$ across the horizontal axis changes the angle to $-\theta$ and the point to $(x,-y)$. Thus cosine is even while sine and tangent are odd. Adding $2\pi$ restores the point; adding $\pi$ changes it to $(-x,-y)$, leaving $y/x$ unchanged. Hence sine/cosine have fundamental period $2\pi$ and tangent has fundamental period $\pi$.

**Worked examples**

1. If $\sin\theta=2/3$, then $\sin(-\theta)=-2/3$ and $\sin(\theta+2\pi)=2/3$.
2. In quadrant III both coordinates are negative, so tangent is positive. At $\theta+\pi$, both signs reverse, and $(-y)/(-x)=y/x$ explains tangent’s repeated value.

**Exercises**

1. If $\cos\theta=-0.4$, find $\cos(-\theta)$. **Answer:** $-0.4$ by even symmetry.
2. Is cosine $\pi$-periodic? **Answer:** No; $\cos0=1$ but $\cos\pi=-1$.

**Assessment**

For a quadrant-II point explain the signs of the three ratios and how sine and cosine change when the angle is negated. Then explain why tangent repeats after $\pi$ while sine generally does not. **Expected:** sine positive, cosine and tangent negative; negating the angle negates sine and preserves cosine; opposite points preserve the quotient but negate the $y$ coordinate. **Rubric (4):** signs and reflection/parity reasoning (2, O1); quotient argument and sine distinction (2, O2).

Objective coverage: **U15-L02-C02-O1**, **U15-L02-C02-O2**.
