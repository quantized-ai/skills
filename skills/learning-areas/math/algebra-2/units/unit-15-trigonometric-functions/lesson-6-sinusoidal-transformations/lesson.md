# Lesson 15.6: Sinusoidal transformations

[Unit 15: Trigonometric functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Sinusoidal transformations determine amplitude, midline, period, frequency, and phase. Graph construction and equation recovery use these features together with a directional anchor.

## Learning objectives

- Determine sinusoidal features and distinguish the two frequency conventions.
- Graph combined transformations with correct phase and orientation.
- Recover an equation from a sinusoidal graph’s features.

## Learning outcome

The student can move consistently between a transformed sinusoidal equation and its labeled graph.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Extract vertical features while interpreting negative coefficients as reflections rather than negative amplitudes.
- Derive period and cycle frequency from the inner coefficient and attach appropriate units.
- Factor the inner argument before determining phase and construct a complete cycle with quarter-period spacing.
- Build a matching equation from extrema, spacing, and orientation, recognizing that equivalent phase forms can describe the same graph.

## Concepts

### Concept U15-L06-C01: Amplitude, midline, period, and frequency

**Content**

$A\sin(Bx)+D$ and $A\cos(Bx)+D$; $|A|$; $2\pi/|B|$; cycles per input unit.

**Learning objectives**

- **U15-L06-C01-O1:** Calculate sinusoidal amplitude, midline, range, period, and frequency from an equation.
  - Standards: CCSS HSF-IF.C.7e (direct); CCSS HSF-TF.B.5 (direct).
- **U15-L06-C01-O2:** Explain vertical reflection and distinguish angular frequency from ordinary frequency.
  - Standards: CCSS HSF-BF.B.3 (direct); CCSS HSF-TF.B.5 (direct).

**Proficiency criteria**

- Extract amplitude, midline, and range while distinguishing a negative vertical coefficient from a negative amplitude.
- Derive period from the change in input needed for a full angular cycle and express frequency in cycles per input unit.
- Distinguish angular frequency from ordinary frequency and explain reflection about the midline.

**Explanation**

For nonzero $A,B$, amplitude is $|A|$, midline is $D$, and range is $[D-|A|,D+|A|]$. The angle $Bx$ must change by $2\pi$ for a cycle, so period $T=2\pi/|B|$ and frequency $f=1/T$. The magnitude $|B|$ is angular frequency in radians per input unit, not cycles per unit. A negative $A$ reflects about the midline.

**Worked examples**

1. $y=3\sin(2x)-1$ has amplitude 3, midline $-1$, range $[-4,2]$, period $\pi$, frequency $1/\pi$.
2. $y=-2\cos((\pi/3)t)+5$ has amplitude 2 and period 6. It starts at $y=3$, a minimum, because the negative coefficient reverses cosine’s usual maximum.

**Exercises**

1. Find the period and range of $4\sin(x/2)+6$. **Answer:** $4\pi$ and $[2,10]$.
2. A cycle lasts 8 seconds. Find frequency and angular frequency. **Answer:** $1/8$ cycles/s and $\pi/4$ rad/s.

**Assessment**

Analyze $y=-5\sin(4t)+2$: give amplitude, midline, range, period, and frequency, and interpret the negative coefficient. **Expected:** $5,2,[-3,7],\pi/2,2/\pi$ cycles per time unit; reflection across $y=2$. **Rubric (4):** numerical features (2, O1); reflection and distinction from angular frequency 4 (2, O2).

Objective coverage: **U15-L06-C01-O1**, **U15-L06-C01-O2**.

### Concept U15-L06-C02: Phase shift and transformed graphs

**Content**

$A\sin(B(x-C))+D$; factoring inner expressions; quarter-period anchors.

**Learning objectives**

- **U15-L06-C02-O1:** Determine phase shift and graph a transformed sinusoid with quarter-cycle points.
  - Standards: CCSS HSF-BF.B.3 (direct); CCSS HSF-IF.C.7e (direct).
- **U15-L06-C02-O2:** Recover a sinusoidal equation from graph features and an orientation anchor.
  - Standards: CCSS HSF-TF.B.5 (direct); CCSS HSF-BF.B.3 (direct).

**Proficiency criteria**

- Factor the inner argument before identifying the phase shift and preserve the effects of all vertical and horizontal transformations.
- Construct a complete transformed cycle from quarter-period anchor positions and the correct starting orientation.
- Recover a sinusoidal equation from extrema, cycle spacing, and a peak or directed midline crossing, recognizing equivalent representations.

**Explanation**

In $A\sin(B(x-C))+D$ with $B>0$, the phase shift is $C$, not the entire constant inside the sine. First factor $B$ from the argument. Start at $x=C$ and move by $T/4$ for five anchors. An amplitude, period, and midline alone leave phase undetermined; a maximum or an upward midline crossing supplies the missing position.

**Worked examples**

1. $2\sin(2x-\pi)+1=2\sin(2(x-\pi/2))+1$ shifts right $\pi/2$, has period $\pi$, and anchors at $x=\pi/2,3\pi/4,\pi,5\pi/4,3\pi/2$ with $y=1,3,1,-1,1$.
2. A graph with maximum 7, minimum 1, period 8, and a maximum at $x=2$ fits $y=3\cos((\pi/4)(x-2))+4$.

**Exercises**

1. Find the phase shift of $\cos(3x+\pi)$. **Answer:** Left $\pi/3$, since the argument is $3(x+\pi/3)$.
2. Write a sinusoid of amplitude 2, midline 5, period 4, crossing upward through its midline at 1. **Answer:** $2\sin((\pi/2)(x-1))+5$.

**Assessment**

Graph one cycle of $y=2\cos(\pi(x-1))-3$ and recover its equation from your listed features. **Expected:** period 2, maximum $-1$ at 1, minimum $-5$ at 2, midline $-3$; points $(1,-1),(1.5,-3),(2,-5),(2.5,-3),(3,-1)$; the stated equation or an equivalent sinusoid. **Rubric (4):** transformed anchors and phase (2, O1); feature-to-equation reconstruction (2, O2).

Objective coverage: **U15-L06-C02-O1**, **U15-L06-C02-O2**.
