# Lesson 16.5: Regression foundations and linear fitting

Regression fits a chosen family to paired observations rather than forcing every point onto the graph. Residuals, squared errors, and coefficient checks make a linear fit reproducible and interpretable.

## Learning objectives

- Prepare and plot paired data; calculate residuals and squared errors on a stated response scale.
- Use technology to obtain and verify a linear least-squares fit.
- Interpret linear coefficients and make qualified predictions.

## Learning outcome

The student can document a linear regression and evaluate its numerical fit and contextual meaning.

## Proficiency criteria

- Preserve input-output pairs and specify the fitted form and coefficient convention.
- Plot paired data and compute predictions, observed-minus-predicted residuals, and squared-error totals using stored coefficient precision.
- Verify the fitted line with reproducible regression calculations and interpret its slope and intercept in units.
- Distinguish a lower fitting error from evidence that the model’s future predictions or mechanism are correct.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Data entry, residuals, and least squares** | Paired observations $(x_i,y_i)$ retain their input-output orientation and are inspected in a scatter plot. A candidate model gives $\hat y_i$; residuals are $e_i=y_i-\hat y_i$, and $\mathrm{SSE}=\sum e_i^2$. Squaring prevents cancellation of opposite signed errors. Ordinary least squares minimizes SSE within a chosen family on the stated response scale. Compare SSE on the same observations and scale; lower fitting-data error alone establishes neither better future prediction nor a causal mechanism. | Prepare paired data and a scatter plot, identify the model form, and calculate reproducible predictions and signed residuals. Compare candidate fits using squared residuals on a common data set and response scale, explaining least squares and limits of fitting-data evidence. | Preserve input-output pairs and record the candidate family and prediction rule. Plot paired data; calculate predictions, observed-minus-predicted residuals, and SSE consistently. Explain squared-error minimization and qualify comparisons by data, scale, assumptions, and limits on future prediction. |
| **Linear regression and coefficient interpretation** | Linear least squares with an intercept fits $\hat y=a+bx$. With at least two distinct input values, $b=\sum(x_i-\bar x)(y_i-\bar y)/\sum(x_i-\bar x)^2$ and $a=\bar y-b\bar x$. Technology output must identify the coefficient convention and retain stored precision. Slope has output-per-input units; the intercept is the predicted output at zero, which may lie outside the observed or meaningful domain. | Use technology to calculate an intercept-including linear regression and verify its coefficients through regression sums or an equivalent reproducible calculation. Interpret regression slope and intercept in units and make contextual predictions from stored coefficients, identifying unsupported intercept interpretations. | Record paired data, check that inputs vary, select linear regression with an intercept, and retain the coefficient convention and precision. Verify slope and intercept by regression sums or an equivalent calculation and use stored coefficients for prediction. Interpret coefficient units and identify when zero input or a prediction lies outside the observed or meaningful domain. |
