# Lesson 16.6: Quadratic and exponential regression

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Quadratic and exponential regression extend model fitting to curvature and proportional change. The fitting method and response scale must be recorded so predictions and residuals are interpreted correctly.

## Learning objectives

- Fit quadratic and exponential models using technology.
- Interpret fitted features and parameters within a meaningful domain.
- Distinguish exact interpolation, approximate regression, and alternative exponential fitting criteria.

## Learning outcome

The student can reproduce and interpret quadratic and exponential fits without confusing their assumptions or fitting scales.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select the family, record all data and coefficients, and distinguish interpolation from fitting noisy observations.
- Use fitted quadratic features only where the input domain and context support their interpretation.
- For log-response exponential fitting, check positivity and correctly transform and back-transform the coefficients.
- Calculate original-scale predictions and residuals while identifying whether the chosen procedure minimized original- or log-scale errors.

## Concepts

### Concept U16-L06-C01: Quadratic fitting

**Content**

Three coefficients; exact interpolation versus noisy least squares; vertex interpretation.

**Learning objectives**

- **U16-L06-C01-O1:** Use technology to fit a quadratic equation to a table of data.
  - Standards: TEKS 2A.8(B) (direct); TEKS 2A.4(E) (direct).
- **U16-L06-C01-O2:** Use the fitted quadratic’s features to interpret and predict behavior.
  - Standards: TEKS 2A.8(C) (direct); CCSS HSF-IF.B.4 (direct).

**Proficiency criteria**

- Fit the quadratic family with all three coefficients and retain a reproducible data and residual record.
- Distinguish exact interpolation of specified points from least-squares fitting of noisy observations.
- Interpret a fitted vertex and predictions only on a justified domain, separating a model extremum from an observed data value.

**Explanation**

Enter paired lists, choose quadratic regression $\hat y=ax^2+bx+c$, store coefficients, and compute residuals from the stored equation. Three distinct inputs may determine an exact quadratic, but extra observations usually produce an approximate fit. Report a vertex only when its input is meaningful for the modeled domain; a quadratic’s reversal is a substantive modeling claim.

**Worked examples**

1. Data $(0,1),(1,4),(2,9)$ fit $x^2+2x+1$ exactly. Its vertex is $(-1,0)$, outside the observed interval $[0,2]$.
2. For $x=-2,-1,0,1,2$ and $y=9.1,2.6,1.6,2.6,9.1$, quadratic regression yields $\hat y=2x^2+1$. Residuals $0.1,-0.4,0.6,-0.4,0.1$ give SSE $0.70$; the fitted minimum is 1 at zero, not the observed central value 1.6.

**Exercises**

1. Fit $(0,3),(1,4),(2,7),(3,12)$. **Answer:** $\hat y=x^2+3$, all residuals zero.
2. For $\hat y=-2x^2+12x+1$, find the vertex. **Answer:** $x=3$, value 19; maximum because the leading coefficient is negative.

**Assessment**

Fit the table $x=0,1,2,3$, $y=8,11,12,11$ with quadratic regression; identify the fitted maximum and its input. **Expected:** $\hat y=-x^2+4x+8=-(x-2)^2+12$; maximum 12 at $x=2$. **Rubric (4):** technology/data record and coefficients (2, O1); vertex form and interpretation (2, O2).

Objective coverage: **U16-L06-C01-O1**, **U16-L06-C01-O2**.

### Concept U16-L06-C02: Exponential fitting and fitting scale

**Content**

$\hat y=ab^x$; positive outputs; log-response linear fitting; original-scale versus log-scale residuals.

**Learning objectives**

- **U16-L06-C02-O1:** Use technology to fit an exponential function and document the fitting method.
  - Standards: TEKS 2A.8(B) (direct); CCSS HSS-ID.B.6a (direct).
- **U16-L06-C02-O2:** Interpret exponential parameters and evaluate predictions on the original output scale.
  - Standards: TEKS 2A.8(C) (direct); CCSS HSF-LE.B.5 (direct).

**Proficiency criteria**

- Document whether the exponential fit minimizes original-output or log-output errors and retain the corresponding data transformations.
- For a log-response method, check positive outputs, fit the transformed line, and back-transform both coefficients correctly.
- Interpret the growth or decay factor and evaluate predictions and residuals on the original output scale without conflating fitting criteria.

**Explanation**

For a reproducible method with $y>0$, create a column $z=\ln y$, regress $z=\alpha+\beta x$, and report $a=e^\alpha,b=e^\beta$. This minimizes squared log residuals, not squared original-output residuals. Some tools offer direct nonlinear least squares for $ab^x$; label that method separately because noisy-data coefficients can differ. Do not log zero or negative observations.

**Worked examples**

1. Data $x=0,1,2,3$ and $y=3,6,12,24$ have logs on a line with intercept $\ln3$, slope $\ln2$. Back-transform to $\hat y=3(2)^x$.
2. For $x=0,1,2$ and $y=2,4.4,8$, log-response regression gives $a=2(1.1)^{1/3}\approx2.06456$, $b=2$. At $x=1$, predict about 4.1291; original-scale residual is $4.4-4.1291\approx0.2709$.

**Exercises**

1. Fit $y=10,5,2.5$ at $x=0,1,2$. **Answer:** $10(0.5)^x$; 50% decay per step.
2. Why can the log method not directly fit a zero output? **Answer:** $\ln0$ is undefined; a different model or method must be justified.

**Assessment**

Fit $y=5,15,45,135$ at $x=0,1,2,3$ using the stated log-response method. Record the log-line parameters, back-transform, interpret the growth factor, and predict $x=1.5$. **Expected:** $\alpha=\ln5$, $\beta=\ln3$, $\hat y=5(3)^x$; $5\sqrt{27}=15\sqrt3\approx25.9808$. **Rubric (4):** method and transformed/back-transformed coefficients (2, O1); growth interpretation and prediction (2, O2).

Objective coverage: **U16-L06-C02-O1**, **U16-L06-C02-O2**.
