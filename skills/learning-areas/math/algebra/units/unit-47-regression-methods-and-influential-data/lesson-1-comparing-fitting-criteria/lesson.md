# Lesson 47.1: Comparing fitting criteria

A fitted line depends on a defined error criterion, which determines how residual size affects the result.

## Learning objectives

- Construct candidate linear fits by transforming the parent function and compare squared-error and absolute-error criteria.
- Construct a median-median line and compare it with other fitted lines.

## Proficiency criteria

- Use the same data and response scale, compute signed residuals before summarizing error, and distinguish a compared candidate from a proven global optimum.
- Document grouping and ties, compute the three summary points and adjusted line correctly, handle undefined slope, and compare residual behavior and contextual suitability.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Transformed lines and absolute versus squared error** | A linear model $\hat y=a+bx$ shifts and scales the parent $y=x$. Least squares minimizes $\sum e_i^2$ and least absolute deviation minimizes $\sum\lvert e_i\rvert$ for $e_i=y_i-\hat y_i$; these criteria can select different fits and absolute-error fits may be nonunique. | Construct candidate linear fits by transforming the parent function and compare squared-error and absolute-error criteria. | Use the same data and response scale, compute signed residuals before summarizing error, and distinguish a compared candidate from a proven global optimum. |
| **Median-median fitting** | For at least three pairs, order by input and divide into groups with equal outer sizes: $k,k,k$ for $3k$ pairs, $k,k+1,k$ for $3k+1$, and $k+1,k,k+1$ for $3k+2$, using a stated order for tied inputs. Each group supplies its median input and median output; the outer summary points determine slope and all three determine an adjusted intercept, equivalent to averaging their intercepts at that slope. Tied outer median inputs can make the slope undefined. | Construct a median-median line and compare it with other fitted lines. | Document grouping and ties, compute the three summary points and adjusted line correctly, handle undefined slope, and compare residual behavior and contextual suitability. |
