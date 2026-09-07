# Unit 9: Cross-Validation

**Target:** Evaluate complete classification and regression pipelines across multiple train/validation splits, reporting fold scores, mean, and variability instead of relying on one fortunate split.

## Proficiency criteria

- Explain what a fold is, how K-fold works, and why several splits give more reliable evidence than one split.
- Configure `KFold` for regression and `StratifiedKFold` for classification, justifying shuffle and seed choices.
- Treat 5 or 10 folds as common starting points, then choose according to sample size, minority-class counts, and compute cost.
- Use `cross_val_score` and/or `cross_validate` on a complete raw-data pipeline so every component fits only on each training fold; keep the final test outside CV and all decisions.
- Report every fold score plus mean and standard deviation in the metric's natural direction for both classification and regression.
- Demonstrate bounded `ShuffleSplit` and `StratifiedShuffleSplit` use and recognize that their validation sets can overlap.

## Supporting knowledge

- Each split fits a new model on its training portion and scores unseen validation rows.
- K-fold partitions the development rows; shuffle-split draws random train/validation splits that may overlap.
- Stratification approximately preserves class proportions but cannot repair very small or extremely rare classes.
- Scikit-learn negates loss scorers such as `neg_mean_absolute_error` so higher scorer values remain better.

## Practice

1. Generate `KFold`, `StratifiedKFold`, `ShuffleSplit`, and `StratifiedShuffleSplit` indices; inspect coverage, overlap, and class proportions.
2. Cross-validate full regression and classification pipelines and report fold values, mean, and standard deviation.
3. Compare a K-fold result with a bounded shuffle-split result and explain any instability without selecting hyperparameters.

## Assessment

**Task:** Evaluate one supplied raw-data classification pipeline and one regression pipeline before tuning.

**Evidence:**

- explicit `StratifiedKFold` and `KFold` definitions with justified split counts and reproducibility choices;
- one or both CV APIs applied to complete pipelines, with per-fold and aggregate metrics for both task types;
- a bounded demonstration of both shuffle-split variants with overlap and class-proportion observations.

**Critical failures:** preprocessing is fitted before CV or validation rows enter any `.fit`; the splitter is invalid for the task or data and the issue is not recognized; score direction is reported incorrectly; the final test is used in CV or decisions; or hyperparameters are selected or tuned in this unit.

## Check questions

1. Why is `StratifiedKFold` usually preferable to `KFold` for classification?
2. During five-fold CV of a pipeline, where and how often is its scaler fitted?
3. How do shuffle-split validation sets differ from K-fold validation folds?

## Boundaries

**Deferred/excluded:** Pipeline construction belongs to [Unit 8](./08_preprocessing_pipelines.md), tuning belongs to [Unit 10](./10_hyperparameter_tuning.md), and nested/repeated CV plus grouped or time-series splitters are excluded.
