# Unit 4: Data Preparation

## Unit purpose

Turn a raw tabular dataset into a clean, model-ready table whose rows, columns, target, and cleaning decisions are explicit and reproducible. This unit focuses on inspection and cleaning. It permits only simple manual categorical encoding; derived features, scaling, and reusable preprocessing pipelines come later.

## Entry requirements

Learners can:

- load and inspect CSV-style data with pandas;
- select rows and columns and use basic pandas aggregations;
- separate predictors (`X`) from a target (`y`);
- create and preserve a train/test split;
- fit and call a basic scikit-learn classifier or regressor from [Unit 2](02_classification.md) or [Unit 3](03_regression.md).

## Proficiency outcomes

By the end of this unit, learners can:

1. audit a dataset's shape, schema, target, identifiers, duplicates, missing values, category consistency, and implausible values;
2. distinguish storage type from the real-world meaning of a field;
3. choose and justify a row-, column-, or value-level cleaning action;
4. convert valid numeric, categorical, boolean, and date values to appropriate pandas types;
5. perform simple manual category encoding and handle categories absent from one split;
6. preserve row identity and target alignment throughout preparation;
7. document before/after evidence and validate the result with executable checks.

## Skills covered

- Dataset audit with `shape`, `head`, `info`, `describe`, `value_counts`, `nunique`, `isna`, and `duplicated`.
- Identification of target, predictors, row identifiers, obvious leakage columns, and fields that should not be modeled.
- Missing-value decisions: retain, drop, or fill with a clearly justified constant or simple training-derived statistic.
- Duplicate handling using an explicit business key or a documented exact-row rule.
- Type repair with `to_numeric`, `to_datetime`, nullable pandas dtypes, and explicit invalid-value handling.
- Category cleanup with whitespace normalization, case normalization, and a documented alias map.
- Range and rule checks for impossible values; suspicious but plausible observations are flagged rather than silently deleted.
- Simple manual encoding with a fixed mapping or `pandas.get_dummies` using a category vocabulary established from training data.
- Train/test column alignment and explicit handling of unseen test categories.
- Reproducible assertions for schema, missingness, uniqueness, ranges, and `X`/`y` alignment.

## Supporting knowledge

- A missing value, zero, empty string, and “not applicable” can have different meanings.
- A numeric-looking identifier is still categorical or non-predictive; a string can represent a date or number.
- Cleaning rules should follow field meaning and data provenance, not only summary statistics.
- Removing observations can change the population represented by the data.
- Exact duplicate rows are not automatically duplicate entities, and repeated entities are not automatically errors.
- Any value learned from data, such as a median or allowed-category set, should be learned from training data and then applied unchanged to test data.
- Preparation must retain a stable row key so predictors and labels cannot become misaligned.

## Required evidence/work product

Submit one reproducible notebook or script containing:

- a compact audit table with column meaning, dtype, missing count/rate, cardinality, and proposed action;
- a clearly identified target, row key, excluded columns, and rationale for each exclusion;
- ordered cleaning code with no unexplained manual edits;
- before/after counts for rows, columns, duplicates, missing values, and affected categories;
- a cleaning decision log that states the issue, rule, justification, and number of affected rows;
- clean train and test tables with identical predictor columns and aligned indices;
- assertions that enforce the promised schema and data-quality rules;
- a short limitations note covering unresolved ambiguity or potentially biased removals.

## Practice activities

1. **Audit a small dirty table.** Inspect a supplied 10–20-row dataset containing mixed types, blanks, duplicate rows, inconsistent labels, and an identifier. Produce an issue list without changing the data.
2. **Apply and verify cleaning rules.** Convert types, normalize labels, resolve documented missing values, and remove only defensible duplicates. Record before/after counts and add at least five assertions.
3. **Prepare separate train and test tables.** Learn fill values and the category vocabulary from training data, apply them unchanged to test data, manually encode categories, and handle one unseen test category without dropping or reordering rows.
4. **Defend a preparation decision.** Compare two defensible treatments for one ambiguous field. Explain the population impact of each and select one based on field meaning, not downstream model score.

## Sample check questions

1. Why can `customer_id` be stored as an integer but still be inappropriate as a numeric predictor?
2. What evidence is needed before deleting duplicate-looking rows?
3. Why should a median used to fill test values be calculated from training data?
4. How would you distinguish “missing,” “none,” and zero for a transaction-count field?
5. What should happen when test data contains a category that did not occur in training data?
6. Why is removing every statistical outlier an unsafe default?
7. Which assertions would detect accidental row loss or `X`/`y` misalignment?

## Proficiency assessment

### Authentic task

Prepare a messy customer, operations, or public-service dataset for a stated binary classification or regression problem. The source contains mixed dtypes, missing values, inconsistent category labels, duplicate candidates, an identifier, an implausible value, and a category found only outside the training data.

### Constraints

- Preserve the supplied split, or make one split before learning any data-dependent cleaning values.
- Use pandas and simple scikit-learn split utilities only.
- Do not create derived predictors, scale values, select features by model performance, or build a pipeline.
- Use only fixed manual mappings or simple one-hot encoding for categorical values.
- Never delete or overwrite a questionable value without a recorded rule and affected-row count.
- Do not use final model performance to justify a cleaning choice.

### Deliverables

- executable notebook or script;
- audit table and cleaning decision log;
- prepared `X_train`, `X_test`, `y_train`, and `y_test` with consistent row identity;
- before/after quality summary and assertions;
- a 200–400-word rationale and limitations note.

## Rubric

| Criterion | Meets proficiency | Demonstrates mastery |
|---|---|---|
| Audit and semantics | Finds the material quality issues and interprets field roles correctly. | Also identifies ambiguous cases, source assumptions, and population risks. |
| Cleaning decisions | Uses defensible, documented row-, column-, value-, and type-repair rules and reports affected rows. | Connects each rule to field meaning and evaluates a credible alternative. |
| Split-safe execution | Training-derived values and categories are applied unchanged to test data; rows and labels remain aligned. | Encapsulates rules cleanly and verifies unseen-category and edge-case behavior. |
| Validation | Includes effective schema, missingness, uniqueness, range, and alignment checks. | Checks are precise, readable, and fail with actionable messages. |
| Communication | Audit, log, and limitations make the preparation reproducible. | Another practitioner could rerun or review every decision without clarification. |

**Pass rule:** all five criteria meet proficiency and there are no critical failures.

**Mastery rule:** all five criteria meet proficiency, at least four demonstrate mastery, and there are no critical failures.

**Critical failures:** target leakage; calculating data-dependent values from test data; loss of `X`/`y` alignment; silent deletion or alteration of material data; an output that cannot execute from the supplied raw data; use of scaling, derived features, or a preprocessing pipeline.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
|---|---|
| Treating dtype as meaning | Annotate ten columns with both storage dtype and semantic role; correct mismatches. |
| Dropping all missing rows | Build a missingness table and justify one action per field using field meaning and population impact. |
| Deleting “outliers” automatically | Classify flagged values as impossible, suspicious, or plausible and write a rule for each class. |
| Encoding train and test independently | Fix a training vocabulary, transform both splits with it, and test an unseen category. |
| Losing row/label alignment | Carry a stable row key through each step and assert index equality before modeling. |
| Undocumented notebook edits | Replace interactive cell edits with ordered, rerunnable functions or statements and a decision log. |

## Scope boundaries / explicit deferred topics

- Model-specific metric selection and interpretation are deferred to [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Derived variables, interactions, scaling, richer encoders, and imbalance handling are deferred to [Unit 6: Feature Engineering](06_feature_engineering.md).
- Diagnosing model capacity problems is deferred to [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- `Pipeline` and `ColumnTransformer` composition is deferred to [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Cross-validation and automated tuning are deferred to [Unit 9: Cross-Validation](09_cross_validation.md) and [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md).
