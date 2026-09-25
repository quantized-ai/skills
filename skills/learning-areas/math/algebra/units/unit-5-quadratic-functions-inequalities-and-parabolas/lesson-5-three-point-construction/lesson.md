# Lesson 5.5: Three-point construction

Determine a quadratic from three specified points and examine the conditions for uniqueness. Separate genuine quadratic interpolation from collinear, redundant, or inconsistent data.

## Learning objectives

- Construct and solve coefficient equations from three points.
- Verify the polynomial and its degree, distinguishing exact interpolation from regression.
- Justify uniqueness and diagnose redundant or inconsistent point data.

## Learning outcome

The student can determine whether point conditions specify a unique quadratic and justify the constructed function or failure.

## Proficiency criteria

- Check input distinctness and functional consistency before solving.
- Use every point to build and solve the coefficient conditions.
- Verify every point and distinguish a nonzero quadratic coefficient from a lower-degree result.
- Explain redundancy or contradiction and distinguish exact interpolation from regression.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Constructing a quadratic through three specified points** | Substituting three points into $y=ax^2+bx+c$ gives linear equations for $a,b,c$, solvable by elimination. Distinct input coordinates determine one polynomial of degree at most two; $a\ne0$ is required for a quadratic. Exact interpolation satisfies every supplied point; regression fits observations and need not pass through every point. | Form coefficient equations from three specified points and solve them by elimination to obtain the interpolating polynomial. Verify all three points, determine whether $a\ne0$, and distinguish exact interpolation from regression. | Use every point to construct and solve the coefficient equations without losing a condition. Verify all supplied outputs. Identify whether the result is quadratic and distinguish exact point constraints from regression fitting. |
| **Uniqueness and degenerate three-point data** | Three distinct real inputs determine a unique polynomial of degree at most two: noncollinear points give degree two; collinear points give a line or constant. Repeated identical points add no condition, leaving fewer than three independent point constraints. Different outputs at the same input are incompatible with any function. Uniqueness follows because the difference of two candidate polynomials of degree at most two cannot have three distinct zeros unless it is the zero polynomial. | Determine whether three supplied points specify a unique quadratic, a lower-degree polynomial, insufficient conditions, or no function. Justify uniqueness for distinct inputs and diagnose redundant or inconsistent point conditions. | Check distinctness of inputs and consistency of repeated inputs. Distinguish noncollinear from collinear data and verify the resulting degree. Justify uniqueness or explain why the conditions are redundant or inconsistent. |
