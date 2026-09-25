# Lesson 59.1: Finite differences and model reconstruction

Equally spaced function values reveal difference or ratio patterns that support candidate models, their reconstruction, and checks against observed change.

## Learning objectives

- Classify linear, quadratic, cubic, and exponential patterns using valid differences or ratios.
- Construct candidate functions from tabular data and evaluate their accuracy and contextual restrictions.

## Proficiency criteria

- Check spacing and required nonzero values before interpreting a pattern.
- Verify the reconstructed model on all supplied data and distinguish an assumed family from uniquely determined behavior beyond the table.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Differences, ratios, and function families** | For equally spaced inputs with spacing \(h\ne0\), successive differences subtract neighboring outputs and repeat the operation on the resulting sequence. Linear functions have constant first differences; genuine quadratics constant nonzero second differences; genuine cubics constant nonzero third differences. For \(ax^3+\cdots\), the third difference is \(6ah^3\). A nonconstant exponential with positive base has constant positive output ratios when outputs are nonzero. Constant or zero sequences can make family labels degenerate. | Calculate first, second, and third differences or successive ratios and classify tabular patterns as linear, quadratic, cubic, or exponential under stated conditions. | Confirm equal input intervals, calculate every successive layer consistently, require nonzero denominators for ratios, and identify lower-degree or constant degeneracies. |
| **Reconstructing functions from equal-step tables** | For \(x=x_0+ht\), a degree-at-most-three candidate can be written \(p(x)=f_0+d_1t+d_2t(t-1)/2+d_3t(t-1)(t-2)/6\), where \(d_j\) is the initial jth forward difference; omit higher terms for lower-degree candidates. The formula agrees with enough initial values and must be checked against all supplied rows. A positive constant ratio \(q\) gives an exponential candidate \(f(x)=f_0q^{(x-x_0)/h}\) for nonzero \(f_0\). A finite table alone does not identify an unrestricted function uniquely. | Construct and verify linear, quadratic, cubic, or exponential functions from equally spaced tables and state their mathematical and contextual domains and ranges. | Use the correct initial differences or ratio and input scale, verify all tabulated outputs, and state the assumed family and any discrete or restricted contextual domain. |
| **Contextual changes and model accuracy** | Average rate of change over an interval is output change divided by input change. Differences carry output units; a first difference divided by a common time step measures an average velocity for position data, and successive velocity differences divided by time describe change in those averages. Comparing observed and predicted rates or finite differences tests whether a model reproduces changing behavior, supplementing pointwise prediction errors. Noisy data rarely have exactly constant higher differences. | Use observed and predicted rates of change and finite differences to construct contextual models and assess the accuracy of their predictions. | State quantities and units, match interval lengths, distinguish noise from a guaranteed exact pattern, and identify where model changes disagree with observed changes despite close individual predictions. |
