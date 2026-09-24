# Lesson 16.7: Square-root fitting and residual analysis

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

A transformed square-root predictor permits a specific radical family to be fitted by linear regression. Residual patterns then reveal systematic mismatch, changing uncertainty, or observations that need investigation.

## Learning objectives

- Fit a square-root model through an explicitly transformed predictor.
- Verify predictions and restrictions in the original input variable.
- Use residual plots to evaluate and compare model adequacy.

## Learning outcome

The student can fit the stated square-root family and use residual evidence to propose a justified model check or revision.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Apply the predictor transformation only on its allowed domain and retain the paired response values.
- Substitute the fitted predictor back into the original variable and state which square-root family was actually estimated.
- Construct residual plots with consistent signs, original inputs, and a zero reference.
- Link any curvature, unequal spread, or isolated discrepancy to a specific investigation rather than declaring automatic success or deleting data.

## Concepts

### Concept U16-L07-C01: Square-root models from tables

**Content**

Predictor transformation $u=\sqrt{x}$; $y=a+b\sqrt{x}$; domain; optional shifted-root fit.

**Learning objectives**

- **U16-L07-C01-O1:** Use technology to formulate a square-root equation from a data table.
  - Standards: TEKS 2A.4(E) (direct).
- **U16-L07-C01-O2:** Interpret the fitted domain and use the square-root model for predictions.
  - Standards: TEKS 2A.4(E) (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Create the square-root predictor only on its real domain and pair it with the original observed response values.
- Fit the linear relation in the transformed predictor, then substitute back to obtain a square-root model in the original input.
- Verify original-input predictions and distinguish the fitted family from a model with an additional unknown horizontal shift.

**Explanation**

For the family $y=a+b\sqrt{x}$ with $x\ge0$, create a predictor column $u=\sqrt{x}$ and perform ordinary linear regression of $y$ on $u$. Replace $u$ by $\sqrt{x}$ in the final equation and verify predictions against the original $x$ values. This does not fit all shifted-root models $a+b\sqrt{x-h}$: if $h$ is unknown, a separate justified nonlinear fit is needed.

**Worked examples**

1. Data $x=0,1,4,9$, $y=1,3,5,7$ give $u=0,1,2,3$ and line $y=1+2u$. Thus $\hat y=1+2\sqrt{x}$; predict 9 at $x=16$ but label it extrapolation beyond 9.
2. With the same inputs and outputs $1,3,5,7.4$, linear regression on $u$ gives $a=0.92,b=2.12$, hence $\hat y=0.92+2.12\sqrt{x}$. Its mathematical domain is $x\ge0$.

**Exercises**

1. Fit $x=0,1,4,9$, $y=2,5,8,11$. **Answer:** $2+3\sqrt{x}$.
2. For this fit, predict $x=6.25$. **Answer:** $2+3(2.5)=9.5$, an interpolation between observed inputs 4 and 9.

**Assessment**

Use a transformed predictor to fit $(0,4),(1,6),(4,8),(9,10)$; predict at $x=2.25$ and state the mathematical domain. **Expected:** $u=\sqrt{x}$; $y=4+2u$, so $\hat y=4+2\sqrt{x}$; prediction 7, domain $x\ge0$. **Rubric (4):** transformed table and fitted equation (2, O1); prediction and domain (2, O2).

Objective coverage: **U16-L07-C01-O1**, **U16-L07-C01-O2**.

### Concept U16-L07-C02: Residual patterns and model adequacy

**Content**

Residual plot against original input; curvature; unequal spread; outliers; contextual adequacy.

**Learning objectives**

- **U16-L07-C02-O1:** Construct and interpret a residual plot for a fitted model.
  - Standards: CCSS HSS-ID.B.6b (direct); TEKS 2A.8(C) (direct).
- **U16-L07-C02-O2:** Use residual patterns and context to compare model adequacy without overstating certainty.
  - Standards: CCSS HSS-ID.B.6b (direct); TEKS 2A.8(A) (direct); TEKS 2A.8(C) (direct).

**Proficiency criteria**

- Plot signed residuals against the original input with a marked zero reference and meaningful scales.
- Identify systematic curvature, changing spread, and isolated large discrepancies without automatically discarding observations.
- Propose a model check or revision directed at the observed pattern and explain why a random-looking plot is evidence rather than proof of adequacy.

**Explanation**

Plot residuals vertically against the original input horizontally, with a horizontal zero reference. A curved pattern suggests the family misses systematic structure. Growing vertical spread suggests prediction uncertainty changes with input. An isolated large residual warrants checking the observation and context, not automatically deleting it. Random-looking residuals support but do not prove model adequacy.

**Worked examples**

1. Fitting a line to $y=x^2$ at $x=-2,-1,0,1,2$ gives $\hat y=2$. Residuals $2,-1,-2,-1,2$ form a U shape, so a linear fit misses curvature.
2. The quadratic $\hat y=x^2$ gives zero residuals for these data. For exact constructed data it explains the pattern, but real future observations need not lie exactly on it.

**Exercises**

1. What does residual $-3$ mean? **Answer:** The model overpredicts by 3 output units.
2. Residuals are small at low $x$ and widely spread at high $x$. Interpret. **Answer:** Error variability changes; high-input predictions may be less precise.

**Assessment**

A candidate model gives residuals $3,0,-2,0,3$ at equally spaced inputs. Sketch the pattern, state a concern, and propose a justified next step. **Expected:** curved U pattern; systematic missing structure; inspect a quadratic candidate and compare residuals on additional data. **Rubric (4):** correct residual plot/interpretation (2, O1); evidence-based concern and next step (2, O2).

Objective coverage: **U16-L07-C02-O1**, **U16-L07-C02-O2**.
