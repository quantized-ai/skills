# Unit 6: Feature Engineering

**Target:** Improve model inputs through explicit pandas/scikit-learn transformations, while preventing leakage and handling categorical data, scale, outliers, redundancy, low variance, and basic class imbalance. Pipelines are not used.

## Proficiency criteria

- State what one row represents and which values exist at prediction time; remove target/future leakage, identifiers, and obvious noise.
- Identify low/no-variance fields, redundant representations, correlated proxies, and outliers; choose treatment according to the model and domain rather than automatic rules.
- Encode unordered categories with `OneHotEncoder` and genuinely ordered categories with `OrdinalEncoder`.
- Apply `StandardScaler` or `MinMaxScaler` when the model is scale-sensitive and explain the choice.
- Fit encoder/scaler state on `X_train` only; transform `X_test`, handle unseen categories, and preserve alignment.
- Measure class imbalance and, when justified, use `class_weight` or simple training-only over/undersampling.
- Compare original and engineered features with the same split, estimator settings, and primary metric.

## Supporting knowledge

- A feature is valid only if it is available when prediction occurs.
- One-hot encoding adds no order; ordinal encoding asserts one.
- Standardization uses mean/standard deviation; min-max scaling uses extrema and is more outlier-sensitive.
- Scale matters strongly to distance- and gradient-based models but usually not trees.
- Correlation mainly destabilizes linear-model coefficients; it is not a universal removal rule.
- Resampling changes prevalence, so held-out data must retain the real distribution.

## Practice

1. Audit features containing an ID, future outcome, age/birth-date pair, annual/monthly salary, constant field, and extreme values; justify each treatment.
2. Fit an encoder and scaler on training rows, transform held-out rows with an unseen category, and verify names, shapes, finite values, and row order.
3. Run a controlled before/after comparison, including one scale-sensitive model, one tree, and one basic imbalance intervention.

## Assessment

**Task:** Engineer a fixed-split dataset containing categorical/numeric features, leakage candidates, redundancy, scale differences, outliers, and an imbalanced target.

**Evidence:** A feature audit with availability, quality issue, action, and reason; runnable manual transformations with retained fitted state and alignment assertions; controlled baseline-versus-engineered results, including any imbalance intervention.

**Critical failures:** Target/future leakage; fitting transforms on combined or held-out data; resampling before splitting or resampling held-out data; row/label misalignment; ordinal encoding of unordered categories; pipelines, cross-validation, or automated search.

## Check questions

1. Why is a post-outcome field invalid even when highly predictive?
2. When is one-hot encoding preferable to ordinal encoding?
3. Why might scaling help logistic regression but not a decision tree?

## Boundaries

**Deferred/excluded:** Fit diagnosis → [Unit 7](07_underfitting_overfitting.md); `Pipeline`/`ColumnTransformer` → [Unit 8](08_preprocessing_pipelines.md); cross-validation/search → [Unit 9](09_cross_validation.md) and [Unit 10](10_hyperparameter_tuning.md); advanced resampling and automated feature selection are excluded.
