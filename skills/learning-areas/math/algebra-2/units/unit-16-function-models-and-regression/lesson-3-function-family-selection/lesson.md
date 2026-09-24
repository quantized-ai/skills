# Lesson 16.3: Function-family selection

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Function families are selected and compared using data patterns, rates, shape, and context. Restricting the input interval can also change which extrema exist and whether bounds are attained.

## Learning objectives

- Select plausible model families from tabular patterns and contextual behavior.
- Compare representations using average rates and key features.
- Determine and compare extrema on specified input intervals.

## Learning outcome

The student can justify a model-family choice and compare its rates and attained extrema on a valid domain.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Analyze equal-step differences or ratios only when the input spacing permits those tests.
- Use context and shape to qualify a family choice rather than inferring a mechanism from finite data alone.
- Compare rates and output levels over compatible intervals and units.
- Check endpoint inclusion, singularities, and interior turning behavior before reporting extrema with their attaining inputs.

## Concepts

### Concept U16-L03-C01: Differences, ratios, shape, and context

**Content**

Linear first differences; quadratic second differences; exponential ratios; mechanism and domain.

**Learning objectives**

- **U16-L03-C01-O1:** Select linear, quadratic, or exponential candidate families from equally spaced data.
  - Standards: TEKS 2A.8(A) (direct); CCSS HSS-ID.B.6a (direct).
- **U16-L03-C01-O2:** Justify or reject a family using contextual behavior in addition to tabular evidence.
  - Standards: TEKS 2A.8(A) (direct); CCSS HSF-IF.B.4 (direct).

**Proficiency criteria**

- Use first differences, second differences, or ratios appropriately for equally spaced inputs and identify when spacing invalidates a shortcut.
- Select a candidate family using its numerical pattern together with the proposed mechanism and graph shape.
- Explain why a locally fitting unbounded family may require a restricted domain for a bounded contextual quantity.

**Explanation**

For equally spaced inputs, exact linear data have constant first differences, quadratic data have constant nonzero second differences, and nonzero exponential data have constant ratios. Measured data show approximate patterns. If inputs are unequally spaced, simple successive differences are not comparable. Context can rule out a family even when it locally fits.

**Worked examples**

1. At $x=0,1,2,3$, values $1,4,9,16$ have first differences $3,5,7$ and second differences 2, supporting a quadratic such as $(x+1)^2$.
2. At those inputs, $5,10,20,40$ has constant ratio 2, supporting $5(2)^x$. A fixed doubling mechanism also supports that choice; a finite storage capacity would limit its valid domain.

**Exercises**

1. Classify $7,11,15,19$ at equal steps. **Answer:** Linear; first difference 4.
2. Classify $2,6,18,54$. **Answer:** Exponential; common ratio 3.

**Assessment**

At $x=0,1,2,3$ values are $2,5,10,17$. Choose a family and explain whether it can model a bounded quantity indefinitely. **Expected:** differences $3,5,7$, second differences 2, so quadratic; $x^2+2x+2$ fits, but unbounded growth is unsuitable indefinitely for a bounded quantity. **Rubric (4):** numerical classification (2, O1); contextual limitation (2, O2).

Objective coverage: **U16-L03-C01-O1**, **U16-L03-C01-O2**.

### Concept U16-L03-C02: Comparing representations and rates

**Content**

Average rate with units; equations versus tables/graphs; turning points and end behavior.

**Learning objectives**

- **U16-L03-C02-O1:** Calculate and interpret average rates of change across a specified interval.
  - Standards: CCSS HSF-IF.B.6 (direct).
- **U16-L03-C02-O2:** Compare models represented in different forms using rates and key features.
  - Standards: CCSS HSF-IF.C.9 (direct); CCSS HSF-IF.B.4 (direct).

**Proficiency criteria**

- Calculate a secant rate from compatible input/output values and attach output-per-input units.
- Compare representations on the same interval without confusing starting level, final level, and average change.
- Distinguish an interval average from a claim of constant change throughout the interval or beyond the available observations.

**Explanation**

Average rate is $[f(b)-f(a)]/(b-a)$ and describes the secant slope over that interval. It does not claim a constant instantaneous rate inside the interval. Compare models on the same input interval and in compatible units; a larger starting value need not mean faster growth.

**Worked examples**

1. For $f(t)=t^2+1$, average rate on $[1,3]$ is $(10-2)/(3-1)=4$ units/time.
2. A table gives $g(1)=5,g(3)=11$, so $g$ averages 3 on the same interval. Although $g$ starts higher, $f$ grows faster on average there and still ends lower (10 versus 11).

**Exercises**

1. Find average rate for $h(x)=2^x$ on $[1,4]$. **Answer:** $(16-2)/3=14/3$.
2. A graph rises from 7 at time 2 to 19 at time 6. Find average rate. **Answer:** 3 output units per time unit.

**Assessment**

Compare $f(x)=3x+2$ with a table $g(0)=1,g(2)=9,g(4)=17$ over $[0,4]$. Which has the larger average rate and final value? **Expected:** $f$ rate 3, $g$ rate 4; $f(4)=14$, $g(4)=17$, so $g$ has both. The table alone does not establish $g$ is linear between all inputs. **Rubric (4):** rates with calculation (2, O1); feature comparison and finite-table caution (2, O2).

Objective coverage: **U16-L03-C02-O1**, **U16-L03-C02-O2**.

### Concept U16-L03-C03: Extrema on specified intervals

**Content**

Absolute maxima and minima on a restricted domain; monotone parent families; interior turning points; excluded endpoints and singularities.

**Learning objectives**

- **U16-L03-C03-O1:** Determine maximum and minimum values of the required parent-function families on a specified interval using graph behavior and endpoint values.
  - Standards: TEKS 2A.2(A) (direct); CCSS HSF-IF.B.4 (supporting knowledge).
- **U16-L03-C03-O2:** Compare interval extrema and explain when an excluded input prevents a bound from being attained.
  - Standards: CCSS HSF-IF.C.9 (direct); TEKS 2A.2(A) (direct).

**Proficiency criteria**

- Check that the proposed interval is compatible with the function’s domain and note excluded endpoints or singularities.
- Compare allowed endpoint outputs and relevant interior turning points using the function’s known behavior.
- State extrema together with attaining inputs, distinguishing an attained value from an unattained bound or unbounded behavior.

**Explanation**

A function with no absolute maximum on its full domain can have one when its domain is restricted. For an increasing function on a closed interval in its domain, the left endpoint gives the minimum and the right endpoint the maximum; reverse these for a decreasing function. If the graph turns within the interval, also compare the turning-point output. A finite bound is not a minimum or maximum unless the graph actually attains it. Check that the interval lies in the function's domain before using endpoint reasoning. No derivative is required: use known monotonicity, symmetry, and graph features.

**Worked examples**

1. The following exact comparisons apply to the seven parent families named in Texas 2A.2(A). Sketch each graph only over the stated interval and mark the attaining inputs.

   | Function and interval | Minimum, at input | Maximum, at input | Reason |
   |---|---|---|---|
   | $\sqrt{x}$ on $[1,9]$ | $1$ at $1$ | $3$ at $9$ | Increasing |
   | $1/x$ on $[1,4]$ | $1/4$ at $4$ | $1$ at $1$ | Decreasing on positive inputs |
   | $x^3$ on $[-2,1]$ | $-8$ at $-2$ | $1$ at $1$ | Increasing |
   | $\sqrt[3]{x}$ on $[-8,27]$ | $-2$ at $-8$ | $3$ at $27$ | Increasing |
   | $2^x$ on $[-1,2]$ | $1/2$ at $-1$ | $4$ at $2$ | Increasing |
   | $\lvert x\rvert$ on $[-2,5]$ | $0$ at $0$ | $5$ at $5$ | Compare the vertex and endpoints |
   | $\log_2x$ on $[1,8]$ | $0$ at $1$ | $3$ at $8$ | Increasing |

2. On $0<x\le1$, the function $1/x$ has minimum $1$ at $x=1$ and no maximum: positive inputs close to zero give arbitrarily large outputs. Its full interval cannot include $x=0$. Likewise, $\log_2x$ on $(1,8]$ has maximum $3$, but no minimum; outputs approach zero without attaining it on that domain.

**Exercises**

1. Find extrema of $4-\sqrt{x}$ on $[0,9]$. **Answer:** Maximum $4$ at $0$ and minimum $1$ at $9$, because the function decreases.
2. Find extrema of $\ln x$ on $(1,e]$. **Answer:** Maximum $1$ at $e$; no minimum. Zero is a lower bound, but the only input producing it, $1$, is excluded.

**Assessment**

Compare $f(x)=1/x$ on $[2,8]$ and $g(x)=\sqrt{x}$ on $[4,16]$. Give each function's extrema and where they occur; state which maximum is larger. Then explain the change to $f$ if its domain is $(2,8]$. **Expected:** $f$ has minimum $1/8$ at $8$ and maximum $1/2$ at $2$; $g$ has minimum $2$ at $4$ and maximum $4$ at $16$, the larger maximum. On $(2,8]$, $f$ retains its minimum but has no maximum, because $1/2$ is approached but not attained. **Rubric (4):** correct extrema and attaining inputs (2, O1); comparison and excluded-endpoint reasoning (2, O2).

Objective coverage: **U16-L03-C03-O1**, **U16-L03-C03-O2**.
