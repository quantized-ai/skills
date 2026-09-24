# Lesson 16.5: Regression foundations and linear fitting

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Regression fits a chosen family to paired observations rather than forcing every point onto the graph. Residuals, squared errors, and coefficient checks make a linear fit reproducible and interpretable.

## Learning objectives

- Prepare paired data and calculate residuals and squared errors.
- Use technology to obtain and verify a linear least-squares fit.
- Interpret linear coefficients and make qualified predictions.

## Learning outcome

The student can document a linear regression and evaluate its numerical fit and contextual meaning.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Preserve input-output pairs and specify the fitted form and coefficient convention.
- Compute predicted values, observed-minus-predicted residuals, and squared-error totals from unrounded coefficients.
- Verify the fitted line with reproducible regression calculations and interpret its slope and intercept in units.
- Distinguish a lower fitting error from evidence that the model’s future predictions or mechanism are correct.

## Concepts

### Concept U16-L05-C01: Data entry, residuals, and least squares

**Content**

Observed $y$ versus fitted $\hat y$; residual $y-\hat y$; sum of squared errors; exact construction versus fitting.

**Learning objectives**

- **U16-L05-C01-O1:** Set up reproducible regression data and calculate predictions and residuals.
  - Standards: TEKS 2A.8(B) (supporting knowledge); CCSS HSS-ID.B.6b (direct).
- **U16-L05-C01-O2:** Compare candidate fits using squared residuals and model assumptions.
  - Standards: TEKS 2A.8(C) (direct); CCSS HSS-ID.B.6b (direct).

**Proficiency criteria**

- Preserve the pairing and orientation of input and output data and identify the candidate family before comparing fits.
- Calculate predictions, signed residuals, and their squared-error total consistently from the stated model.
- Explain why squared residuals avoid cancellation and why a smaller training-data error alone does not establish better future predictions.

**Explanation**

Enter paired inputs and outputs in adjacent columns and plot a scatter plot before fitting. For each candidate, create predicted-output and residual columns, then square residuals and add them. Ordinary least squares minimizes this total within a chosen family. A smaller error on the fitting data alone does not prove better future prediction; family complexity and mechanism also matter.

**Worked examples**

1. Data $(0,1),(1,3),(2,4)$ with candidate $\hat y=1+1.5x$ give predictions $1,2.5,4$, residuals $0,0.5,0$, and SSE $0.25$.
2. Candidate $\hat y=1+2x$ gives predictions $1,3,5$, residuals $0,0,-1$, SSE 1. The first candidate fits these observations better by SSE, though neither was asserted to be the optimizing regression line.

**Exercises**

1. Observed values 4 and 7, predictions 5 and 6: find residuals and SSE. **Answer:** $-1,1$ and 2.
2. Why square rather than sum residuals? **Answer:** Positive and negative errors could cancel despite substantial mismatches.

**Assessment**

For data $(0,2),(1,3),(2,5)$ compare $\hat y_A=2+x$ and $\hat y_B=1.5+1.5x$. **Expected:** residuals A $0,0,1$, SSE 1; B $0.5,0,0.5$, SSE 0.5; B has lower in-sample squared error. **Rubric (4):** prediction/residual setup (2, O1); both SSE values and qualified comparison (2, O2).

Objective coverage: **U16-L05-C01-O1**, **U16-L05-C01-O2**.

### Concept U16-L05-C02: Linear regression and coefficient interpretation

**Content**

Technology linear fit $\hat y=a+bx$; slope/intercept; verification; noisy data.

**Learning objectives**

- **U16-L05-C02-O1:** Use technology to calculate and verify a linear regression equation.
  - Standards: TEKS 2A.8(B) (direct); CCSS HSS-ID.B.6c (direct).
- **U16-L05-C02-O2:** Interpret regression slope and intercept and make a prediction in context.
  - Standards: CCSS HSS-ID.C.7 (direct); TEKS 2A.8(C) (direct).

**Proficiency criteria**

- Record the data, intercept-including linear fit, coefficient convention, and unrounded coefficient estimates.
- Verify the fitted line with regression sums or an equivalent reproducible calculation and use the stored coefficients for prediction.
- Interpret slope and intercept in the quantities’ units, identifying when the intercept lies outside the observed input range.

**Explanation**

Enter $x$ and $y$ lists, select linear least-squares regression with an intercept, and record which returned coefficient multiplies $x$. Verify by computing $b=\sum(x-\bar x)(y-\bar y)/\sum(x-\bar x)^2$, then $a=\bar y-b\bar x$ (or compute these columns directly in a spreadsheet). This verification detects reversed lists and coefficient-order errors. The intercept may be an extrapolation if $x=0$ was not observed.

**Worked examples**

1. Data $x=0,1,2$, $y=2,5,8$ give $\hat y=2+3x$ exactly; slope 3 output units per input unit.
2. For $x=0,1,2,3$, $y=1.2,2.8,5.2,6.8$, $\bar x=1.5,\bar y=4$, numerator 9.6 and denominator 5, so $b=1.92,a=1.12$. At $x=2.5$, predict 5.92. Residuals are $0.08,-0.24,0.24,-0.08$.

**Exercises**

1. Fit $(0,4),(1,6),(2,8)$. **Answer:** $\hat y=4+2x$.
2. Interpret slope 1.92 if $x$ is hours and $y$ liters. **Answer:** Predicted amount rises 1.92 L per additional hour within the modeled setting.

**Assessment**

Use technology or the stated spreadsheet sums to regress $(0,1),(1,2),(2,4)$. Interpret slope in meters per second and predict at 1.5 s. **Expected:** $\hat y=5/6+(3/2)x$; slope 1.5 m/s, intercept $5/6$ m; prediction $37/12\approx3.0833$ m. **Rubric (4):** recorded data/setup and correct fit (2, O1); units, intercept, and prediction (2, O2).

Objective coverage: **U16-L05-C02-O1**, **U16-L05-C02-O2**.
