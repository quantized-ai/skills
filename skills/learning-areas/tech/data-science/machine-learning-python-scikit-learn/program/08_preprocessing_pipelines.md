# Unit 8: Preprocessing Pipelines

**Target:** Building on [data preparation](./04_data_preparation.md), [metrics](./05_evaluation_metrics.md), and [manual feature engineering](./06_feature_engineering.md), create one leakage-safe scikit-learn pipeline that preprocesses mixed-type data and fits an estimator, then predicts from raw held-out rows.

## Proficiency criteria

- Distinguish `fit`, `transform`, and `fit_transform`, and inspect state learned by an imputer, encoder, or scaler.
- Define explicit numeric and categorical branches with suitable built-in transformers such as `SimpleImputer`, `StandardScaler`, and `OneHotEncoder(handle_unknown="ignore")`.
- Combine branches with `ColumnTransformer`, then place it and a supervised estimator in one named `Pipeline`.
- Split raw data first; fit the complete pipeline only on training rows and never fit or refit any component on held-out rows.
- Call `predict` or `predict_proba` on raw rows; handle expected missing values and unseen categories and diagnose incompatible names, dtypes, or columns.
- Keep any designated final test set unused until the workflow is fixed, and do not revise the workflow from its result.

## Supporting knowledge

- A transformer learns state in `fit`; `transform` applies that state unchanged.
- `ColumnTransformer` runs column branches in parallel; `Pipeline` runs steps sequentially, with the estimator last.
- Bundling preprocessing with the estimator makes training and prediction follow the same fitted path.
- `handle_unknown="ignore"` handles new categories, not missing columns, incompatible dtypes, or semantic drift.

## Practice

1. Fit an imputer and scaler on a training table, inspect their state, and transform separate rows.
2. Combine numeric and categorical branches, attach an estimator, and inspect step names, output shape, and feature names.
3. Predict on raw validation rows and constructed missing/unseen-category cases; then repair a workflow that preprocesses before splitting.

## Assessment

**Task:** Build a baseline classifier or regressor for supplied raw data containing numeric and categorical features, missing values, and an unseen category.

**Evidence:**

- runnable raw split, column-to-transform map, complete fitted pipeline, and suitable held-out metric;
- inspection of named fitted steps and learned state;
- predictions for constructed edge cases plus an explanation of execution order and remaining schema assumptions.

**Critical failures:** any preprocessing component sees held-out data during fitting; train and held-out preprocessors are fitted independently; the estimator is outside the pipeline or final prediction requires manually transformed input; the designated final test changes the workflow; or the evidence cannot run.

## Check questions

1. What information can a scaler leak when fitted before the split?
2. How do `ColumnTransformer` and `Pipeline` compose operations differently?
3. What does `handle_unknown="ignore"` solve, and which schema failures remain?

## Boundaries

**Deferred/excluded:** Cross-validation is in [Unit 9](./09_cross_validation.md), tuning and search are in [Unit 10](./10_hyperparameter_tuning.md), and custom transformers are excluded.
