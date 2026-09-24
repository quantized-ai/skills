# Lesson 16.7: Square-root fitting and residual analysis

A transformed square-root predictor permits a specific radical family to be fitted by linear regression. Residual patterns provide evidence of systematic mismatch, changing uncertainty, or observations that need investigation.

## Learning objectives

- Fit the square-root family $\hat y=a+b\sqrt{x}$ through a transformed predictor while retaining the original response scale.
- Verify predictions and restrictions in the original input variable.
- Use residual plots to evaluate and compare model adequacy.

## Learning outcome

The student can fit the stated square-root family and use residual evidence to propose a justified model check or revision.

## Proficiency criteria

- Apply the predictor transformation only on its allowed domain and retain the paired response values.
- Substitute the fitted predictor back into the original variable and state which square-root family was actually estimated.
- Construct residual plots with consistent signs, original inputs, and a zero reference.
- Link any curvature, unequal spread, or isolated discrepancy to a specific investigation rather than declaring automatic success or deleting data.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Square-root models from tables** | For $\hat y=a+b\sqrt{x}$, transform the predictor to $u=\sqrt{x}$ with $x\ge0$ and fit $y=a+bu$ by linear least squares with at least two distinct inputs. The response remains unchanged, so the fit minimizes original-output SSE. Substitute back into the original input and apply contextual restrictions. This method does not estimate an unknown horizontal shift in $a+b\sqrt{x-h}$; estimating that shift is an optional nonlinear extension. | Use technology to fit the family $\hat y=a+b\sqrt{x}$ through a square-root predictor transformation and document the unchanged response scale. Verify predictions and domain restrictions in the original input and distinguish the fitted family from an optional model with an unknown horizontal shift. | Check nonnegative, varying inputs; pair each transformed predictor with its original response and fit the linear relation using technology. Substitute the square-root predictor back into the fitted equation and verify original-input predictions. State mathematical and contextual domains and explain why the transformation does not fit an unknown horizontal shift. |
| **Residual patterns and model adequacy** | An original-scale residual plot against input shows $y-\hat y$ against original input with a zero reference. Positive residuals indicate underprediction and negative residuals overprediction. Curvature suggests missed systematic structure; changing spread suggests error variability changes with input. Isolated large residuals warrant investigation rather than automatic deletion. An apparently patternless plot supports adequacy on the observed data but proves neither model correctness nor future accuracy. | Construct and interpret a residual plot using original inputs, observed-minus-predicted residuals, and a zero reference. Use residual patterns and context to compare adequacy and propose a targeted check or revision without overstating certainty or discarding data automatically. | Plot correctly signed residuals against original inputs with meaningful scales and a marked zero reference. Identify curvature, changing spread, and isolated large discrepancies and explain their possible implications. Propose a check or revision matched to the evidence and qualify what an apparently patternless plot establishes. |
