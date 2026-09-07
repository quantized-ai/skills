# Unit 4: Data Preparation

**Target:** Audit and clean messy tabular data into reproducible, aligned train/test tables. Simple manual encoding is allowed; feature engineering, scaling, and pipelines are not.

## Proficiency criteria

- Audit shape, dtypes, missingness, duplicates, cardinality, identifiers, target, and suspicious values with pandas.
- Distinguish storage dtype from field meaning and repair numeric, categorical, boolean, or date fields.
- Choose whether to retain, drop, or impute missing values from field meaning and population impact.
- Identify duplicates using a documented entity/business key.
- Distinguish invalid values from unusual but plausible outliers; alter data only under an explicit rule.
- Normalize inconsistent labels and manually encode simple categories with a fixed mapping.
- Learn data-dependent cleaning values from training rows only.
- Preserve row identity and `X`/`y` alignment; report before/after counts and enforce assumptions with assertions.

## Supporting knowledge

- Missing, zero, empty, and “not applicable” can represent different states.
- Numeric storage does not make an identifier a numeric predictor.
- Repeated entities are not necessarily duplicates; identical rows are not necessarily errors.
- Dropping rows changes the represented population. Every material change must be deterministic and auditable.

## Practice

1. Audit a dirty table containing mixed types, blanks, duplicate candidates, inconsistent labels, an identifier, and invalid values before editing it.
2. Apply and log cleaning rules; report affected rows and assert schema, ranges, missingness, uniqueness, and alignment.
3. Split first, learn an imputation value from training rows, encode a simple Yes/No field, and compare two defensible treatments for one ambiguous field.

## Assessment

**Task:** Prepare a supplied messy classification or regression dataset for modeling with pandas and simple manual encoding.

**Evidence:** Rerunnable code from raw input to aligned `X_train`, `X_test`, `y_train`, and `y_test`; an audit/decision log with issue, action, reason, and affected rows; before/after counts and assertions.

**Critical failures:** Target leakage; test-derived cleaning values; silent material deletion or alteration; broken `X`/`y` alignment; derived features, scaling, or a preprocessing pipeline.

## Check questions

1. Why might an integer `customer_id` be unsuitable as a predictor?
2. What evidence is needed before removing duplicate-looking rows?
3. When should an extreme value be corrected, retained, or removed?

## Boundaries

**Deferred/excluded:** Derived features, scaling, richer encoding, and imbalance handling → [Unit 6](06_feature_engineering.md); reusable preprocessing → [Unit 8](08_preprocessing_pipelines.md).
