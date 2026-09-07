# Unit 2: Classification

**Target:** Prepare and evaluate classification workflows on unseen holdout rows, using basic hyperparameters and accuracy, precision, and recall.

## Proficiency criteria

- Define the categorical target, positive class, class counts, and false-positive/false-negative costs.
- Correct/drop a target only from independent source evidence; never because a model disagrees.
- Predeclare justified included/excluded features before viewing test results.
- Make one reproducible stratified train/test split and fit training rows only.
- Explain max_depth, min_samples_split, and min_samples_leaf as pre-fit customizations.
- Apply at least two classifier families and compare three predeclared tree configurations on identical holdout rows.
- Compute/interpret accuracy, precision, and recall for the stated positive class.
- Keep the comparison fixed and descriptive: no iterative changes or final-winner claim.

## Supporting knowledge

- Stratification preserves approximate class proportions; it does not rebalance them.
- Accuracy = correct/all; precision = true positives/predicted positives; recall = true positives/actual positives.
- High accuracy can coexist with low recall when positives are uncommon.

## Practice

1. Audit labels/features from a data dictionary; document one source-backed correction/drop and define error costs.
2. Make one stratified split, fit two classifier families, and explain the three metrics.
3. Run the fixed tree configurations on the same split and interpret their metric differences.

## Assessment

**Task:** Use two datasets: load_breast_cancer with native targets (0=malignant, 1=benign; precision/recall pos_label=0), and a binary load_iris subset containing targets 0/1. The assessor adds record_id to both and one Iris row with target 9; exclude record_id and drop target 9 using the official allowed labels. For each dataset use test_size=0.25, random_state=42, stratify=y; evaluate LogisticRegression(max_iter=5000) and three DecisionTreeClassifier variants, all random_state=42: simple (max_depth=3, min_samples_split=20, min_samples_leaf=10), medium (7, 10, 5), flexible (15, 4, 2).

**Evidence:** runnable workflows; source-backed target audit/change log; included/excluded features; split/class counts; per-dataset table of model parameters, accuracy, precision, and recall; sample actual/predicted labels and FP/FN interpretation.

**Critical failures:** model-driven relabeling; record_id/test rows enter fitting; test results drive features/settings; models use different splits; positive-class metrics are wrong or results claim a tuned/validated winner.

## Check questions

1. Why use stratify, and what does it not fix?
2. When can accuracy look good while recall is poor?
3. What evidence permits a target correction?

## Boundaries

**Deferred/excluded:** general cleaning [Unit 4](04_data_preparation.md); full metrics [Unit 5](05_evaluation_metrics.md); feature/imbalance work and fit diagnosis [Unit 6](06_feature_engineering.md) and [Unit 7](07_underfitting_overfitting.md); pipelines, CV, and tuning [Units 8](08_preprocessing_pipelines.md), [9](09_cross_validation.md), and [10](10_hyperparameter_tuning.md).
