# Unit 5: Evaluation Metrics

**Target:** Select, compute, and interpret core classification and regression metrics on fixed validation predictions. Metric choice follows the task and error costs, not the most favorable result.

## Proficiency criteria

- Define the task, positive class, costly errors, primary metric, and metric direction before comparison.
- Build a baseline from training targets and evaluate it on the same validation rows as the model.
- Construct a confusion matrix and compute accuracy, precision, and recall; explain why accuracy can mislead on imbalanced data.
- Plot and interpret a ROC curve from positive-class scores/probabilities and explain how thresholds trade precision for recall.
- For multiclass results, report per-class metrics or declare the averaging method.
- Compute and interpret MAE, MSE, RMSE, and R², including units and sensitivity to large errors.
- Distinguish correlation `R` from predictive `R²`; explain that held-out R² can be negative.
- Compare models on identical observations and report the split, threshold, baseline, and limitations.

## Supporting knowledge

- Precision asks how many predicted positives were correct; recall asks how many actual positives were found.
- Threshold metrics use labels; ROC uses scores/probabilities and summarizes ranking across thresholds.
- MAE and RMSE use target units; MSE uses squared units and emphasizes large errors.
- R² compares squared error with a constant based on the evaluation targets. This differs from an operational baseline fitted only on training targets.
- Aggregate metrics can hide poor performance for a class or segment.

## Practice

1. Calculate a confusion matrix, accuracy, precision, and recall by hand; repeat after changing the positive class.
2. Evaluate fixed imbalanced-class labels and scores at two thresholds, plot ROC, and explain the tradeoff against a train-derived baseline.
3. Compare regression predictions with MAE, MSE, RMSE, R², and correlation; add one large error and explain what changes.

## Assessment

**Task:** Evaluate candidate models' supplied binary-class labels and positive-class scores, plus regression predictions, on fixed validation targets; recommend a model for each stated error-cost context.

**Evidence:** Executable metrics and train-derived baselines on identical rows; classification confusion matrix, accuracy, precision, recall, ROC, positive class, and threshold; regression MAE, MSE, RMSE, R², units, and residual inspection; a justified comparison with limitations.

**Critical failures:** Comparing different rows; using labels for ROC; wrong positive-class interpretation; choosing an imbalanced classifier by accuracy alone; confusing `R` with `R²`; iteratively changing candidates, features, or thresholds after viewing validation results; using cross-validation.

## Check questions

1. Why can 99% accuracy be useless when positive prevalence is 1%?
2. Why can lowering a threshold increase recall but reduce precision?
3. Which regression metrics retain target units, and how does `R` differ from `R²`?

## Boundaries

**Deferred/excluded:** This unit evaluates fixed predictions; feature/model changes → [Unit 6](06_feature_engineering.md) and [Unit 7](07_underfitting_overfitting.md); cross-validation/search → [Unit 9](09_cross_validation.md) and [Unit 10](10_hyperparameter_tuning.md); threshold optimization is excluded.
