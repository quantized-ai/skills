# Lesson 25.3: Quartiles, spread, and box plots

Spread describes variation around or across a distribution, and a box plot summarizes its ordered structure.

## Learning objectives

- Calculate range, quartiles, interquartile range, and mean absolute deviation.
- Construct and interpret box plots with a declared quartile and outlier convention.

## Proficiency criteria

- State the calculation convention and preserve the original measurement units.
- Distinguish the summary shown in a box plot from information the display does not retain.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Range, quartiles, and interquartile range** | Range is maximum minus minimum. Quartiles divide ordered data into approximate quarters; finite-sample conventions differ. For the median-of-halves convention used here, exclude the overall median from both halves when \(n\) is odd and take each half’s median; for a singleton dataset, the empty halves make its quartiles and interquartile range undefined under this convention. The interquartile range is \(Q_3-Q_1\) and summarizes the middle half. | Calculate and interpret range, quartiles, and interquartile range using a stated finite-data convention. | Sort observations, apply one consistent quartile rule, report nonnegative spread in the original units, and identify when small samples make a requested summary undefined under the chosen convention. |
| **Box plots and outlier flags** | A basic box plot displays minimum, \(Q_1\), median, \(Q_3\), and maximum. A modified box plot flags observations below \(Q_1-1.5\operatorname{IQR}\) or above \(Q_3+1.5\operatorname{IQR}\); whiskers extend to the most extreme unflagged observed values. Fences need not be observed values. A flagged value invites investigation and is not automatically an error. | Construct and interpret basic and modified box plots and identify potential outliers using a stated rule. | Distinguish whisker endpoints from fences, plot flagged observations separately when using the modified form, and avoid inferring individual frequencies or detailed modality from the five-number summary. |
| **Mean absolute deviation** | Mean absolute deviation about the mean is \((\sum\lvert x_i-\bar x\rvert)/n\) for \(n>0\). Absolute values prevent cancellation and measure average distance from the center. Its units match the observations, and it is zero exactly when every value is equal. It differs from standard deviation’s squared-deviation calculation. | Calculate and interpret mean absolute deviation and compare variability independently of the mean. | Compute the mean first, use absolute rather than signed deviations, divide by the number of observations, and distinguish equal centers from equal spreads. |
