# Unit 6: Feature Engineering

## Unit purpose

Create, transform, and select useful tabular predictors using domain reasoning and explicit pandas/scikit-learn steps. Every learned transformation is fitted on training data and applied unchanged to held-out data. This unit includes basic class-imbalance responses but does not compose transformations into pipelines.

## Entry requirements

Learners can:

- fit classification and regression models from [Unit 2](02_classification.md) and [Unit 3](03_regression.md);
- audit, clean, split, and validate tabular data using [Unit 4](04_data_preparation.md);
- select and interpret suitable held-out metrics using [Unit 5](05_evaluation_metrics.md);
- work with pandas columns, group summaries, dates, and basic NumPy operations;
- explain why the test target must not influence training decisions.

## Proficiency outcomes

By the end of this unit, learners can:

1. propose features from a stated prediction time, unit of analysis, and domain mechanism;
2. create reproducible numeric, categorical, date/time, count, ratio, interaction, bin, and transformed-skew features;
3. encode categories and scale numeric values with transformers fitted only on training data;
4. handle unseen categories and invalid mathematical values without changing the held-out schema;
5. identify target leakage, future information, proxy leakage, and train/test contamination in candidate features;
6. audit irrelevant identifiers, redundant pairs, correlated proxies, low/no-variance fields, and outliers without universal deletion rules;
7. respond to class imbalance only in training data and compare baseline versus engineered features on one fixed split.

## Skills covered

### Feature design

- Define the entity represented by one row and the exact time at which a prediction is made.
- Write an availability statement for each candidate: source, timestamp, and whether it is known at prediction time.
- Create date parts, durations, counts, flags, guarded ratios, differences, justified interactions, bins, `log1p` transformations, and appropriate missingness indicators.
- Avoid unstable row-wise features whose values depend on future or held-out observations.

### Manual transformation workflow

- Maintain separate `X_train` and `X_test` objects from the start.
- Fit `OneHotEncoder(handle_unknown="ignore")`, `OrdinalEncoder` only for genuinely ordered categories, `StandardScaler`, `MinMaxScaler`, or another justified transformer on `X_train` only.
- Call `transform`, never `fit` or `fit_transform`, on `X_test`.
- Retain fitted transformer objects, output names, source mapping, and deterministic column order; verify shapes, row order, finite values, and matching schemas.
- Apply a manually defined transformation function identically to both splits when the transformation has no learned state.

### Feature screening and comparison

- Audit irrelevant/noisy identifiers and low/no variance; distinguish redundant representations such as age/birth date from correlated proxies such as annual/monthly salary.
- Treat correlation and outlier actions as model-dependent: multicollinearity mainly destabilizes linear coefficients and is not a universal delete rule; distinguish invalid values from influential but valid rare cases.
- Compare a baseline feature set and an engineered set with the same model settings, split, and primary metric.

### Imbalance basics

- Measure train/held-out class proportions and use stratification when making a classification split where feasible.
- Prefer an imbalance-aware primary metric from [Unit 5](05_evaluation_metrics.md).
- Use estimator `class_weight` when supported, or simple random over/undersampling on training rows only.
- Preserve the untouched held-out class distribution and report the tradeoff between minority recall and false positives.

## Supporting knowledge

- A feature is valid only if it can be computed from information available at the stated prediction time.
- A transformation with learned state includes category vocabulary, means, standard deviations, minima/maxima, quantiles, imputation values, and selection thresholds.
- `fit` learns state; `transform` applies that state. Fitting on all data leaks held-out distribution information even without reading its target.
- One-hot encoding represents unordered categories; ordinal encoding asserts order. Standardization uses training mean/standard deviation without bounding values; min-max normalization uses training extrema, usually maps to `[0, 1]`, and is especially outlier-sensitive.
- Correlation is not a universal deletion rule: multicollinearity mainly destabilizes linear coefficients, while estimator families respond differently to redundancy and outliers.
- Ratios need a domain-valid denominator policy; logs need a policy for zero and negative inputs.
- Resampling changes the training distribution. It must not change the held-out distribution or precede the split.

## Required evidence/work product

Submit a reproducible notebook or script containing:

- prediction-time and row-unit definitions;
- a feature register and quality audit covering formula, availability, leakage, relevance, variance, redundancy/correlation, and outliers;
- a baseline feature matrix and an engineered feature matrix demonstrating numeric, categorical, date/time, count, ratio, interaction, bin, and transformed-skew features;
- explicit training-only `fit` calls and held-out-only `transform` calls for every stateful step;
- retained fitted encoder and scaler objects, deterministic output names, and assertions for alignment, schema, finite values, and unseen categories;
- training class-distribution evidence and, if used, a documented imbalance intervention;
- a controlled comparison using the same split, model settings, and primary metric;
- a limitations note identifying features that are fragile, costly, uncertain, or unavailable in production.

## Practice activities

1. **Design from prediction time.** Given a churn or late-delivery table and an event timeline, classify candidate columns as available, future, target-derived, ambiguous, or safe. Write three domain-grounded feature proposals.
2. **Create robust manual features.** Implement a duration, count, guarded ratio, date-part feature, and skew transformation. Test zero denominators, missing dates, negative values, and row-order preservation.
3. **Fit and apply transformations safely.** Fit an encoder and scaler on training data, transform a held-out table containing an unseen category, recover output names, and prove that no held-out statistic was learned.
4. **Respond to imbalance.** Compare an unweighted model with class weighting or a training-only random resample using the same fixed split and imbalance-aware primary metric. Report minority recall and false-positive cost.
5. **Audit feature quality.** Review an identifier, age/birth-date pair, annual/monthly salary proxies, low-variance flag, and extremes; recommend model-specific treatment rather than a universal deletion threshold.

## Sample check questions

1. Why is “days until cancellation” invalid for a model run before cancellation occurs?
2. Which attributes of a scaler are learned state, and from which rows should they be learned?
3. How should an encoder respond to a category found only in held-out data?
4. When is ordinal encoding appropriate, and what false claim does it make for unordered labels?
5. How do standardization and min-max normalization differ, and how do outliers affect them?
6. Why is oversampling before splitting leakage, and why should held-out prevalence remain real?

## Proficiency assessment

### Authentic task

Engineer features for a fixed-split dataset containing numeric and categorical inputs, timestamps, countable events, skew, interaction and bin opportunities, a zero-prone denominator, an imbalanced target, a category present only in held-out data, target-derived/future/proxy leakage candidates, a noisy identifier, age/birth-date redundancy, annual/monthly salary proxies, low/no-variance fields, and valid and invalid extremes.

### Constraints

- State the row unit and prediction time before proposing features.
- Use pandas transformations and individually managed scikit-learn transformers; do not use `Pipeline` or `ColumnTransformer`.
- Fit all learned values, vocabularies, and scalers on training data only, then apply those transformations unchanged to held-out data. Derive and execute any sampling rule on training data only; never resample held-out rows.
- Do not use held-out labels for feature creation, screening, or threshold choice.
- If resampling is used, resample only the training set. Keep the original held-out class distribution.
- Compare feature sets with the same fixed split, estimator settings, and predeclared primary metric.
- Do not use cross-validation or automated feature/model search.

### Deliverables

- executable notebook or script and retained fitted encoder and scaler objects;
- feature register plus a feature-quality audit and explicit classifications of target, future, proxy, and train/test-contamination leakage;
- validated baseline and engineered matrices with feature names, covering numeric, categorical, date/time, count, ratio, interaction, bin, and transformed-skew features;
- baseline-versus-engineered result table and one feature-group ablation;
- class-distribution and imbalance-response summary;
- a 300–500-word recommendation covering usefulness, tradeoffs, production availability, and limitations.

## Rubric

| Criterion | Meets proficiency | Demonstrates mastery |
|---|---|---|
| Feature validity and quality | Features match row unit/time; the audit distinguishes target, future, proxy, and train/test-contamination leakage and covers relevance, variance, redundancy, correlated proxies, and model-dependent outliers. | Treatment is justified by provenance, estimator behavior, coefficient stability, and production use. |
| Transformation correctness | Required numeric, categorical, date/time, count, ratio, interaction, bin, and transformed-skew features have correct formulas, types, output names, and train/test schemas; categorical encoding, numeric scaling, unseen categories, and invalid mathematical values are handled correctly. | Tests cover missing, unseen, zero, negative, and sparse/dense edge cases with clear failure messages. |
| Leakage safety | Every stateful step fits on training data and only transforms held-out data. | Fitted state is inspectable, retained, and demonstrably independent of held-out rows. |
| Imbalance response | Measures imbalance, uses a suitable metric, and applies weighting/resampling safely if justified. | Quantifies the minority-benefit/majority-cost tradeoff and rejects an unsuitable intervention. |
| Controlled evidence | Baseline and engineered sets use the same split/model settings and are interpreted cautiously. | Includes a useful ablation and combines metric, domain, and operational evidence. |
| Reproducibility | Feature register, code, assertions, and limitations permit rerunning the work. | Another practitioner could implement the same feature contract in production. |

**Pass rule:** all six criteria meet proficiency and there are no critical failures.

**Mastery rule:** all six criteria meet proficiency, at least five demonstrate mastery, and there are no critical failures.

**Critical failures:** any target/future leakage; fitting an encoder, scaler, selector, or other learned transformation on held-out or combined data; resampling before splitting or altering held-out prevalence; row/label misalignment; an engineered feature that cannot exist at prediction time; using a pipeline, cross-validation, or automated search.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
|---|---|
| Generating features without a prediction timestamp | Draw the event timeline and add an availability timestamp to every candidate in the feature register. |
| Calling `fit_transform` on both splits | Highlight every `fit` call, restrict it to training objects, and add a held-out unseen-category test. |
| Using ordinal codes for unordered categories | Replace codes with a train-fitted one-hot encoder and explain why numeric distance was false. |
| Producing infinities in ratios or logs | Write explicit zero/negative/missing policies and unit-test each input class. |
| Resampling the full dataset | Recreate the untouched split, resample training rows only, and compare class proportions before and after. |
| Claiming one feature “caused” improvement | Run a same-split ablation and rewrite the conclusion as predictive evidence with stated uncertainty. |
| Losing feature names after transformation | Extract transformer output names, join them to source/formula metadata, and assert expected order. |

## Scope boundaries / explicit deferred topics

- Raw schema repair and cleaning policy belong to [Unit 4: Data Preparation](04_data_preparation.md).
- Metric definitions and selection belong to [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Capacity diagnosis and remediation are deferred to [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- `Pipeline`, `ColumnTransformer`, end-to-end preprocessing composition, and deployment-safe bundling are deferred to [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Repeated/fold-based feature comparisons are deferred to [Unit 9: Cross-Validation](09_cross_validation.md).
- Automated hyperparameter search is deferred to [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md). Automated feature-selection searches are outside this program.
