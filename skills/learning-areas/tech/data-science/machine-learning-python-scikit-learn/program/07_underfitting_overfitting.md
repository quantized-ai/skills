# Unit 7: Underfitting and Overfitting

**Target:** Diagnose underfitting or overfitting from paired training/held-out evidence, then test one justified remedy under controlled conditions. Use one fixed split; cross-validation and automated tuning are deferred.

## Proficiency criteria

- Compute the same metric on training and held-out rows and define the gap direction.
- Compare both results with a relevant baseline; avoid universal score or gap cutoffs.
- Recognize likely underfitting from weak training and held-out results, and likely overfitting from strong training but materially weaker held-out results.
- Report evidence as inconclusive when leakage, data quality, noise, small samples, or distribution shift better explains it.
- Compare a small ordered sequence of model-complexity settings while holding split, preprocessing, metric, and seed fixed.
- Choose a remedy consistent with the diagnosis and change one major factor at a time.
- Explain that changing the split changes the evidence; it does not repair the model.

## Supporting knowledge

- Training results alone do not measure generalization; held-out results alone cannot distinguish underfitting from overfitting.
- Underfitting remedies include better features, a more expressive model, or less restriction/regularization.
- Overfitting remedies include simpler or more regularized models, removal of noisy/leaky features, or more representative training data.
- More complexity often reduces training error but can increase held-out error; more data can reduce variance but not systematic bias or distribution shift.

## Practice

1. Classify paired train/held-out/baseline results as likely underfit, likely overfit, acceptable, or inconclusive.
2. Compare shallow/medium/deep trees or strongly/medium/weakly regularized linear models on one fixed split.
3. Predict how one proposed remedy should change training result, held-out result, and gap; run the controlled comparison.

## Assessment

**Task:** Diagnose a supplied poorly performing classifier or regressor, compare at least three ordered complexity settings, and test one justified remedy.

**Evidence:** Fixed split, baseline, metric, paired results, and gap definition; controlled complexity results; diagnosis with plausible alternatives; one-factor before/after remediation and next-step recommendation.

**Critical failures:** Diagnosis from held-out results alone; leakage; incomparable metrics/rows; choosing a favorable split; changing several factors at once; a remedy unrelated to the diagnosis; cross-validation or automated tuning.

## Check questions

1. Why can poor held-out performance indicate either underfitting or overfitting?
2. Why is there no universal acceptable generalization gap?
3. Why does changing the random split test sensitivity rather than fix a model?

## Boundaries

**Deferred/excluded:** Cleaning, metrics, and feature work → [Unit 4](04_data_preparation.md), [Unit 5](05_evaluation_metrics.md), and [Unit 6](06_feature_engineering.md); reusable preprocessing, cross-validation, and search → [Unit 8](08_preprocessing_pipelines.md), [Unit 9](09_cross_validation.md), and [Unit 10](10_hyperparameter_tuning.md).
