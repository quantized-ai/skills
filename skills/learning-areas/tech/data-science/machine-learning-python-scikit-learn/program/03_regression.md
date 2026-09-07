# Unit 3: Regression

**Target:** Build and interpret a basic regression workflow using numeric predictions, actual-versus-predicted visualization, and MAE, MSE, RMSE, and R².

## Proficiency criteria

- Distinguish a quantitative target from numeric category codes; describe features and target.
- Inspect the target distribution with summary statistics and a plot.
- Make one reproducible train/test split and fit training rows only.
- Fit a linear regressor and a depth-limited tree on identical rows.
- Compute MAE, MSE, RMSE, and R² with correct units/direction.
- Plot actual versus predicted values and inspect actual, predicted, absolute-error, and residual rows.
- Keep the comparison fixed and descriptive; do not change settings or select a winner from the holdout.

## Supporting knowledge

- MAE is average absolute error in target units.
- MSE averages squared errors in squared units; RMSE restores target units while retaining emphasis on large errors.
- R² is unitless relative squared-error fit: 1 is perfect, 0 matches a mean reference, and negative is worse; it is not accuracy.
- With residual = actual − predicted, positive means underprediction.
- Tree depth controls structural flexibility and is set before fit.

## Practice

1. Classify numeric-looking targets and inspect a regression target’s distribution.
2. Fit a linear model; compute all four metrics and create the prediction scatter/residual table.
3. Fit one predeclared tree on the same rows and compare metric/plot differences.

## Assessment

**Task:** On load_diabetes, use all features and train_test_split(test_size=0.20, random_state=42); fit LinearRegression() and DecisionTreeRegressor(max_depth=4, random_state=42) once on identical training rows and predict identical test rows.

**Evidence:** runnable code; target summary/distribution plot; split/model specifications; per-model MAE/MSE/RMSE/R² with units; actual-versus-predicted scatter; aligned residual examples and descriptive comparison.

**Critical failures:** models use different data; test rows enter fit; metrics/units or RMSE are wrong; R² is treated as accuracy; settings change after results or claims name a validated winner.

## Check questions

1. Why is a numeric target not automatically a regression target?
2. How do MAE, MSE, and RMSE differ in units and error weighting?
3. What does a negative R² mean?

## Boundaries

**Deferred/excluded:** preparation and full metrics [Unit 4](04_data_preparation.md) and [Unit 5](05_evaluation_metrics.md); feature/fit work [Unit 6](06_feature_engineering.md) and [Unit 7](07_underfitting_overfitting.md); pipelines, CV, and tuning [Units 8](08_preprocessing_pipelines.md), [9](09_cross_validation.md), and [10](10_hyperparameter_tuning.md).
