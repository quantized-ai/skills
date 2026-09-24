# Lesson 17.2: Normal distribution models

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

A normal distribution is a model whose shape must be justified before areas are interpreted. Standard scores connect original measurements to cumulative areas and estimated population percentages.

## Learning objectives

- Assess the appropriateness of a normal model.
- Use mean and standard deviation to describe normal intervals.
- Calculate and interpret normal areas, percentages, and expected counts.

## Learning outcome

The student can select and use a normal model with correct area calculations and explicit model-based interpretation.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Evaluate shape and context before using mean and standard deviation as normal-model parameters.
- Translate measurement boundaries into signed standard scores and identify the event’s correct tail or interval.
- Use cumulative values, complements, or differences consistently to calculate the requested area.
- Report percentages or expected counts as estimates under the model rather than guarantees about every dataset.

## Concepts

### Concept U17-L02-C01: Normal shape and model appropriateness

**Content**

Bell shape; mean and standard deviation as parameters; empirical rule; limits of normal models.

**Learning objectives**

- **U17-L02-C01-O1:** Judge whether a normal model is reasonable from distribution shape and context.
  - Standards: CCSS HSS-ID.A.4 (direct).
- **U17-L02-C01-O2:** Use mean and standard deviation to locate central normal intervals and estimate percentages.
  - Standards: CCSS HSS-ID.A.4 (direct).

**Proficiency criteria**

- Evaluate a normal model using symmetry, modality, outliers, and contextual constraints rather than matching mean and standard deviation alone.
- Locate central intervals relative to the model mean and standard deviation and associate them with appropriate approximate normal percentages.
- Distinguish a model-based percentage estimate from a guaranteed feature of an arbitrary empirical dataset.

**Explanation**

A normal curve is symmetric, unimodal, and described by a mean and positive standard deviation; its total area is 1. Approximately 68%, 95%, and 99.7% of model area lie within one, two, and three standard deviations of the mean. These percentages are model-based approximations, not facts about every dataset. Strong skew, multiple clusters, and impossible tail values can make the model unsuitable.

**Worked examples**

1. A plausible normal measurement model with mean 50 and SD 4 places about 95% between $50-8=42$ and $50+8=58$.
2. A waiting-time histogram with many zeros and a long right tail is not approximately symmetric. Matching its mean and SD to a normal curve does not fix this shape mismatch.

**Exercises**

1. For a plausible normal model with mean 100 and SD 15, give the approximate 68% interval. **Answer:** $[85,115]$.
2. Why might combining two groups with widely different centers fail a normal model? **Answer:** The pooled distribution can have two peaks, violating the single-bell shape.

**Assessment**

Dataset A has a symmetric bell-shaped histogram centered at 20 with SD 3; dataset B is strongly right-skewed with the same summaries. Select a candidate for a normal fit and give its approximate 95% interval. **Expected:** A; $20\pm6=[14,26]$; equal summaries do not make B normal. **Rubric (4):** selection and shape justification (2, O1); correct interval and percentage interpretation (2, O2).

Objective coverage: **U17-L02-C01-O1**, **U17-L02-C01-O2**.

### Concept U17-L02-C02: Standard scores and normal areas

**Content**

$z=(x-\mu)/\sigma$; cumulative area $\Phi$; complements and interval differences; table/technology use.

**Learning objectives**

- **U17-L02-C02-O1:** Standardize observations and compute normal areas using a table or technology.
  - Standards: CCSS HSS-ID.A.4 (direct).
- **U17-L02-C02-O2:** Interpret a normal area as an estimated population percentage or expected count.
  - Standards: CCSS HSS-ID.A.4 (direct).

**Proficiency criteria**

- Standardize each boundary using the specified mean and positive standard deviation, retaining the direction of each inequality.
- Translate the event into a left-tail area, complement, or difference of cumulative areas using a table or correctly configured technology.
- Convert the resulting area into a population percentage or expected count and distinguish expectation from a guaranteed observed count.

**Explanation**

A $z$ score measures how many standard deviations an observation lies above the mean. A cumulative table reports $\Phi(z)=P(Z\le z)$: right-tail area is $1-\Phi(z)$ and interval area is $\Phi(z_2)-\Phi(z_1)$. In a normal-area calculator enter lower bound, upper bound, mean, and SD; check which convention its output uses. Useful values: $\Phi(-2)=0.0228$, $\Phi(-1)=0.1587$, $\Phi(0)=0.5000$, $\Phi(1)=0.8413$, $\Phi(1.5)=0.9332$, $\Phi(2)=0.9772$.

**Worked examples**

1. For mean 100, SD 15, below 130 corresponds to $z=2$, so estimated percentage is 97.72%.
2. Between 85 and 115 corresponds to $-1<Z<1$, area $0.8413-0.1587=0.6826$. In 500 comparable observations, expected count is $500(0.6826)=341.3$, about 341, not a guaranteed count.

**Exercises**

1. For mean 50, SD 10, estimate the percentage above 65. **Answer:** $z=1.5$; $1-0.9332=0.0668$, or 6.68%.
2. For the same model, estimate the percentage between 30 and 50. **Answer:** $0.5000-0.0228=0.4772$, or 47.72%.

**Assessment**

A plausible normal model has mean 80 and SD 5. Estimate the proportion between 75 and 90 and the expected number among 1000 observations. **Expected:** bounds $z=-1,2$; area $0.9772-0.1587=0.8185$, 81.85%, expected 818.5 or about 819. **Rubric (4):** standardization and area operation (2, O1); percentage/count with approximate interpretation (2, O2).

Objective coverage: **U17-L02-C02-O1**, **U17-L02-C02-O2**.
