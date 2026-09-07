# Unit 8: Preprocessing Pipelines

## Unit purpose

Build leakage-safe scikit-learn workflows that apply different preprocessing to different feature types and train an estimator as one reproducible object. This unit focuses on the `Transformer` API, `Pipeline`, and `ColumnTransformer` for basic supervised learning.

## Entry requirements

- Load tabular data and separate features (`X`) from a target (`y`).
- Create train/test splits and fit a basic scikit-learn estimator.
- Recognize numeric and categorical columns and common missing-value representations.
- Use basic classification or regression metrics appropriate to the task.

## Proficiency outcomes

By the end of this unit, the learner can:

- Explain and correctly use the `fit`, `transform`, and `fit_transform` lifecycle.
- Build numeric and categorical preprocessing branches with standard scikit-learn transformers.
- Combine branches with `ColumnTransformer` and attach an estimator with `Pipeline`.
- Fit preprocessing only on training data and apply learned transformations unchanged to validation or test data.
- Configure a pipeline so prediction accepts the original, unprocessed feature schema.
- Inspect pipeline steps and diagnose common schema, missing-value, and unseen-category failures.

## Skills covered

- Transformer API: `fit`, `transform`, and `fit_transform`.
- Numeric preprocessing with tools such as `SimpleImputer` and `StandardScaler`.
- Categorical preprocessing with tools such as `SimpleImputer` and `OneHotEncoder(handle_unknown="ignore")`.
- Heterogeneous feature handling with `ColumnTransformer`.
- Sequential composition with `Pipeline` and named steps.
- End-to-end `fit`, `predict`, and, when supported, `predict_proba`.
- Leakage prevention through train-only fitting.
- Basic inspection with `named_steps`, `named_transformers_`, and transformed feature names when available.

## Supporting knowledge

- A transformer learns state during `fit` (for example, medians, category vocabularies, or scaling statistics) and applies that frozen state during `transform`.
- An estimator learns the prediction rule. In an integrated pipeline, the final step is the estimator and earlier steps are transformers.
- `ColumnTransformer` selects columns and runs branches in parallel; `Pipeline` runs steps sequentially.
- Any data-derived operation must be fitted without access to validation or test rows. Fitting an imputer, encoder, or scaler before splitting is leakage.
- The same raw columns, compatible dtypes, and expected column names must be available at prediction time.

## Required evidence / work product

Submit a runnable notebook or script containing:

- A documented train/test split made before preprocessing is fitted.
- Explicit numeric and categorical column selections.
- A `ColumnTransformer` with appropriate preprocessing for both types.
- A `Pipeline` whose final step is a supervised estimator.
- One evaluation from raw, untouched test data using at least one suitable metric, with no subsequent workflow revision based on that result.
- A short leakage audit identifying where each learned preprocessing statistic is fitted.
- Inspection of named fitted steps and a brief diagnosis using constructed raw rows with missing values and unseen categories, plus any remaining schema failure conditions.

## Practice activities

1. **Transformer lifecycle:** Fit an imputer and scaler on a training-only numeric table. Record learned statistics, transform training and validation rows, and explain why refitting on validation data is incorrect.
2. **Mixed-type preprocessing:** Build separate numeric and categorical pipelines, combine them with `ColumnTransformer`, and inspect the transformed shape and feature names.
3. **Integrated prediction workflow:** Attach a classifier or regressor, fit the complete pipeline once, predict from raw held-out validation rows, evaluate it, and deliberately test a constructed missing value and unseen category.
4. **Leakage repair:** Given code that preprocesses the full dataset before splitting, rewrite it as a single train-fitted pipeline and explain which optimistic pathway was removed.

## Sample check questions

1. What information can a scaler leak if it is fitted before the train/test split?
2. How do `ColumnTransformer` and `Pipeline` differ in how they compose operations?
3. Why is `fit_transform` normally used on training data but only `transform` on held-out data?
4. What does `handle_unknown="ignore"` protect against, and what does it not protect against?
5. Why should the estimator be inside the same pipeline as preprocessing?
6. Where would you inspect the medians learned by a nested numeric imputer?

## Proficiency assessment

### Authentic task

Build a leakage-safe baseline model from a supplied tabular dataset containing numeric features, categorical features, missing values, and a binary or continuous target.

### Constraints

- Split the raw dataset before fitting any data-dependent transformation.
- Use only built-in scikit-learn transformers; do not write a custom transformer.
- Use `ColumnTransformer` for type-specific branches and one `Pipeline` containing the estimator.
- The held-out test set may be evaluated only after the pipeline is finalized and must not drive subsequent revisions.
- The final prediction call must consume raw feature rows, not manually preprocessed arrays.

### Deliverables

- Runnable code and dependency/version note.
- A compact feature-to-preprocessing map.
- The fitted pipeline and test metric(s).
- Evidence that missing values and unknown categories are handled as intended.
- A 150–300 word explanation of transformer state, execution order, and leakage controls.

## Rubric

| Criterion | Developing | Proficient | Mastery |
|---|---|---|---|
| Transformer lifecycle | Confuses fitting with applying transformations | Correctly fits on training data and transforms held-out data | Also inspects learned state and explains its implications |
| Composition | Uses disconnected or manual preprocessing | Correctly combines typed branches and estimator | Produces a clear, reusable workflow and diagnoses nested steps |
| Leakage safety | Leakage risk remains | All data-derived preprocessing is trained only through the training pipeline | Also provides a precise leakage audit and repairs a flawed alternative |
| Robustness | Common missing/schema cases fail | Handles stated missing values and unseen categories | Tests edge cases and explains remaining schema assumptions |
| Evidence | Code or evaluation is incomplete | Runnable code, suitable metric, and required explanation are present | Results are especially clear, reproducible, and well justified |

**Pass rule:** Proficient or better in every criterion, with no critical failure.

**Mastery rule:** Mastery in at least four criteria, Proficient or better in the remainder, and no critical failure.

**Critical failures:** fitting preprocessing on all data or test data; preprocessing train and test with independently fitted objects; omitting the estimator from the submitted end-to-end pipeline; inability to predict from raw held-out rows; or code that cannot run on the supplied data.

## Common gaps & targeted remediation

- **Preprocessing before splitting:** Rebuild from raw data and annotate every `.fit` call with the rows it can see.
- **Using one transform for every column:** Create a feature-type inventory, then implement and test one branch at a time.
- **Unknown-category errors:** Add `handle_unknown="ignore"`, then predict on a constructed row containing a new category.
- **Lost column alignment:** Keep `X` as a DataFrame, select columns by stable names, and assert the expected input schema.
- **Manual train/test transformations:** Remove intermediate transformed datasets and call `pipeline.fit` and `pipeline.predict` directly.
- **Opaque nested objects:** Trace a single raw row through named steps and inspect fitted attributes ending in `_`.

## Scope boundaries / deferred or excluded topics

- Foundational cleaning and splitting decisions are covered in [Unit 4: Data Preparation](./04_data_preparation.md); metric selection is covered in [Unit 5: Evaluation Metrics](./05_evaluation_metrics.md).
- Cross-validation is deferred to [Unit 9: Cross-Validation](./09_cross_validation.md).
- Model and preprocessing hyperparameter search is deferred to [Unit 10: Hyperparameter Tuning](./10_hyperparameter_tuning.md).
- Custom transformer classes, feature unions beyond `ColumnTransformer`, metadata routing, advanced feature selection, resampling, and production deployment are excluded from this basic supervised-learning unit.
