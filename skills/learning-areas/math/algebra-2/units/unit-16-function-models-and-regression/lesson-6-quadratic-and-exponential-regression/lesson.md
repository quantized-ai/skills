# Lesson 16.6: Quadratic and exponential regression

Quadratic and exponential regression extend model fitting to curvature and proportional change. The fitting method and response scale must be recorded so predictions and residuals are interpreted correctly.

## Learning objectives

- Fit quadratic and exponential models using technology.
- Interpret fitted features and parameters within a meaningful domain, including degenerate constant or linear fits.
- Distinguish exact interpolation, approximate regression, and alternative exponential fitting criteria.

## Learning outcome

The student can reproduce and interpret quadratic and exponential fits without confusing their assumptions or fitting scales.

## Proficiency criteria

- Select the family, record all data and coefficients, and distinguish interpolation from fitting noisy observations.
- Recognize degenerate quadratic-family fits and interpret vertices only for nonzero leading coefficients on a justified domain.
- For log-response exponential fitting, check positivity and correctly transform and back-transform the coefficients.
- Calculate original-scale predictions and residuals while identifying whether the chosen procedure minimized original- or log-scale errors.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Quadratic fitting** | Quadratic-family least squares fits $\hat y=ax^2+bx+c$ using technology and original-output residuals. At least three distinct input values give unique least-squares coefficients; three observations at distinct inputs determine an interpolating polynomial of degree at most two. Noisy additional observations generally yield an approximate fit. If $a\ne0$, the vertex input is $-b/(2a)$; if $a=0$, the result is linear or constant and has no quadratic vertex. A model extremum need not be observed or contextually meaningful. | Use technology to fit and verify a quadratic-family equation from paired data, distinguishing exact interpolation from approximate least-squares fitting. Interpret and predict from fitted quadratic features on a justified domain, recognizing degenerate fits and distinguishing model extrema from observations. | Check for at least three distinct inputs; record the three fitted coefficients, predictions, and original-output residuals. Distinguish interpolation from noisy-data least squares and identify a zero leading coefficient. Calculate and interpret predictions and any quadratic vertex within a justified domain without treating fitted values as observations. |
| **Exponential fitting and fitting scale** | The positive-response family $\hat y=ab^x$ has $a>0$, $b>0$; $b>1$ gives growth and $0<b<1$ decay, while $b=1$ is constant. The parameter $a$ is the predicted output at zero; $b$ is the output factor per input unit. For positive observed outputs and at least two distinct inputs, regress $z=\ln y$ as $\hat z=\alpha+\beta x$ and back-transform $a=e^\alpha$, $b=e^\beta$. This minimizes squared log-output residuals. Direct nonlinear least squares minimizes original-output squared residuals and may give different coefficients. Original-scale residuals remain $y-\hat y$; zero or negative observations cannot enter the log-response method. | Use technology to fit an exponential model, document its fitting scale, and apply and back-transform log-response regression only when its conditions hold. Interpret exponential parameters and evaluate original-scale predictions and residuals without confusing original-scale and log-scale error minimization. | Record paired data, the exponential family, the fitting method, and the response scale of its minimized errors. For log-response fitting, verify positive outputs and varying inputs, fit the transformed line, and correctly back-transform both coefficients. Interpret initial level and growth or decay factor; compute original-scale predictions and residuals and distinguish the two fitting criteria. |
