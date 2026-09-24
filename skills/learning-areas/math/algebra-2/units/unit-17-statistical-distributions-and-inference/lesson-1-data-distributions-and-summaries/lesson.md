# Lesson 17.1: Data distributions and summaries

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Distribution shape determines which summaries are informative. The lesson reviews center and spread while distinguishing sample estimates, complete-population quantities, and the units of standard deviation.

## Learning objectives

- Describe quantitative distributions and select suitable summaries.
- Calculate mean and standard deviation with a stated convention.
- Compare center and spread and interpret their response to transformations.

## Learning outcome

The student can summarize a dataset with justified measures and interpret center and variability separately.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use an appropriate display to describe shape and unusual values and distinguish quantitative from categorical data.
- Justify a typical-value summary using skewness and sensitivity to extremes.
- Calculate standard deviation with the correct sample or population denominator and original units.
- Compare distributions without treating equal means as equal spreads, and explain the effects of shifting or scaling observations.

## Concepts

### Concept U17-L01-C01: Shape, center, and appropriate summaries

**Content**

Dot plots/histograms; symmetry, skewness, outliers; mean versus median; quantitative versus categorical data.

**Learning objectives**

- **U17-L01-C01-O1:** Describe a quantitative distribution using shape, center, and unusual values.
  - Standards: CCSS HSS-ID.A.1 (prerequisite review); CCSS HSS-ID.A.3 (prerequisite review).
- **U17-L01-C01-O2:** Choose and justify a typical-value summary appropriate to the distribution.
  - Standards: CCSS HSS-ID.A.2 (prerequisite review; supporting knowledge for HSS-ID.A.4).

**Proficiency criteria**

- Describe distribution shape and unusual values from an appropriate quantitative display rather than from the mean alone.
- Calculate and compare mean and median, explaining how skewness or extreme values affect the choice of typical-value summary.
- Distinguish quantitative measurements from categorical outcomes and choose numerical summaries appropriate to the variable type.

**Explanation**

A distribution describes how values are spread, not just their average. The mean uses every numerical value and is sensitive to extreme observations; the median is resistant. Mean and standard deviation suit reasonably symmetric distributions without strong outliers. Median and interquartile range are often more descriptive for skewed data. For categorical outcomes, summarize counts or proportions rather than averaging category names.

**Worked examples**

1. Data $2,3,3,4,8$ have mean $20/5=4$ and median 3. The high value 8 produces right-skew behavior, so the median is a more resistant typical value.
2. Data $4,5,6,7,8$ are symmetric around 6; mean and median both equal 6, and a mean/standard-deviation summary is reasonable.

**Exercises**

1. Find mean and median of $1,2,2,3,12$. **Answer:** Mean 4, median 2; the mean is pulled toward 12.
2. Should a survey of favorite colors be summarized by standard deviation of color names? **Answer:** No; use category counts/proportions.

**Assessment**

For $5,6,6,7,26$, sketch a dot plot, calculate mean and median, and choose a typical-value summary with a reason. **Expected:** high isolated 26; mean 10, median 6; median preferred for resistance to the high extreme. **Rubric (4):** plot/shape and numeric summaries (2, O1); justified summary choice (2, O2).

Objective coverage: **U17-L01-C01-O1**, **U17-L01-C01-O2**.

### Concept U17-L01-C02: Mean, standard deviation, and units

**Content**

Deviation from mean; sample versus population formulas; nonnegative spread; effects of shifting/scaling.

**Learning objectives**

- **U17-L01-C02-O1:** Calculate a mean and standard deviation using a stated denominator convention.
  - Standards: CCSS HSS-ID.A.2 (prerequisite review; supporting knowledge for HSS-ID.A.4).
- **U17-L01-C02-O2:** Interpret standard deviation in the original units and compare distributions with equal means.
  - Standards: CCSS HSS-ID.A.2 (prerequisite review); CCSS HSS-ID.A.4 (supporting knowledge).

**Proficiency criteria**

- State whether the data are a sample or complete population and use the corresponding standard-deviation denominator.
- Calculate deviations, squared deviations, and the square root in order, reporting spread in the original measurement units.
- Compare spread independently of center and explain how shifting or scaling all observations changes the summaries.

**Explanation**

For a complete finite population use $\sigma=\sqrt{\sum(x-\mu)^2/N}$; for a sample estimating spread use $s=\sqrt{\sum(x-\bar x)^2/(n-1)}$ when $n>1$. State which is used. Squaring prevents cancellation, and the square root returns the original units. Adding a constant shifts the mean but preserves spread; multiplying by $c$ multiplies standard deviation by $|c|$.

**Worked examples**

1. Treat $2,4,6$ as a sample: $\bar x=4$, squared deviations $4,0,4$, so $s=\sqrt{8/2}=2$ units.
2. Treat the same three values as the entire population: $\sigma=\sqrt{8/3}\approx1.633$. The data did not change; the denominator and intended interpretation did.

**Exercises**

1. Find sample mean and standard deviation for $1,1,1$. **Answer:** Mean 1, $s=0$.
2. If 10 is added to every observation with original mean 5 and SD 2, what changes? **Answer:** Mean 15, SD still 2.

**Assessment**

For sample data $3,5,7$, calculate $\bar x$ and $s$, then compare its spread with $4,5,6$. **Expected:** mean 5 and SD 2; comparison sample mean 5 and SD 1, so the first sample is more spread out. **Rubric (4):** correct denominator, calculation, and values (2, O1); comparison and units/meaning (2, O2).

Objective coverage: **U17-L01-C02-O1**, **U17-L01-C02-O2**.
