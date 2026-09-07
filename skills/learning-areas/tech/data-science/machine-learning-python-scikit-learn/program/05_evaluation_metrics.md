# Unit 5: Evaluation Metrics

## Unit purpose

Select, compute, and interpret evaluation metrics that match the prediction task, class distribution, decision threshold, error costs, and stakeholder objective. This unit evaluates predictions on a fixed held-out dataset; it does not use cross-validation or diagnose underfitting and overfitting.

## Entry requirements

Learners can:

- define a target and identify classification versus regression;
- create a train/test split and fit basic models from [Unit 2](02_classification.md) and [Unit 3](03_regression.md);
- prepare a model-ready table using [Unit 4](04_data_preparation.md);
- obtain class predictions, class scores/probabilities, or numeric predictions;
- calculate a mean, proportion, and absolute or squared difference.

## Proficiency outcomes

By the end of this unit, learners can:

1. translate a decision objective and error costs into a primary metric and useful secondary metrics;
2. establish a relevant naive or simple baseline before judging a model;
3. construct and interpret binary and multiclass confusion matrices;
4. compute and explain threshold-based, ranking-based, and probability-quality classification metrics;
5. choose suitable regression metrics based on units, outliers, target scale, and business loss;
6. recognize misleading uses of accuracy, ROC AUC, percentage errors, and R²;
7. report results with the dataset, split, positive class, averaging method, threshold, and limitations clearly stated.

## Skills covered

### Classification

- Confusion-matrix terms: true/false positives and true/false negatives.
- Accuracy, balanced accuracy, recall/sensitivity, specificity, precision, negative predictive value, F1, and F-beta.
- The precision–recall tradeoff and the effect of changing a decision threshold.
- ROC curve and ROC AUC as ranking measures; the precision–recall curve and average precision as its common step-weighted summary for rare-positive settings.
- Log loss for probabilistic predictions and the penalty for confident wrong predictions.
- Binary positive-class selection and multiclass macro, micro, and weighted averaging.
- Use of `confusion_matrix`, `classification_report`, `accuracy_score`, `balanced_accuracy_score`, `precision_score`, `recall_score`, `f1_score`, `fbeta_score`, `roc_auc_score`, `average_precision_score`, and `log_loss`.

### Regression

- MAE as typical absolute error in target units; MSE and RMSE as metrics that emphasize larger errors, with RMSE returned to target units.
- `R² = 1 - SSE / SST`, where SSE is the model's squared error and SST is the mean baseline's squared error, including the meaning of zero and negative values.
- Correlation coefficient R as linear association—not prediction error or a substitute for R². Held-out predictive R² is not generally R squared; equality requires special conditions, such as an in-sample least-squares fit with an intercept.
- MAPE limitations with zero, near-zero, signed, or highly skewed targets.
- Median absolute error when robustness to extreme residuals is important.
- Residual summaries by meaningful segment to expose uneven error, without treating them as new training signals.
- Use of `mean_absolute_error`, `mean_squared_error`, `root_mean_squared_error` or its compatible equivalent, `r2_score`, `mean_absolute_percentage_error`, and `median_absolute_error`.

### Selection and reporting

- Majority-class, prevalence, mean, median, or policy baseline as appropriate.
- Separation of a primary decision metric from diagnostic secondary metrics.
- Explicit metric direction: higher-is-better versus lower-is-better.
- Comparison on the same observations, target definition, and fixed split.
- Clear distinction among labels (`predict`), probabilities (`predict_proba`), and decision scores (`decision_function`).

## Supporting knowledge

- Prevalence changes the practical meaning of precision even when recall and specificity remain similar.
- Threshold metrics evaluate a decision rule; AUC-style metrics evaluate ranking across thresholds.
- A high ROC AUC does not guarantee useful precision for a rare event.
- Log loss requires valid probabilities and evaluates confidence, not just the final class label.
- Squaring residuals makes RMSE more sensitive than MAE to large errors.
- R² has no target units, is not an error magnitude, and can be negative on held-out data.
- Metric selection should precede model comparison so results do not dictate the success criterion after the fact.

## Required evidence/work product

Submit an evaluation report or reproducible notebook that includes:

- separate binary-classification and regression sections, plus a short multiclass confusion-matrix and averaging interpretation;
- each prediction task, unit of analysis, target, held-out dataset, and decision context, including the positive class for classification;
- a stated primary metric for each main task, its direction, and a justification tied to error costs;
- a relevant baseline evaluated on exactly the same observations for each main task;
- binary and multiclass confusion matrices, threshold/ranking/probability metrics for classification, and target-unit, squared-error, robustness, and R² metrics for regression;
- explicit threshold and multiclass averaging choices where applicable;
- code that uses the correct input type for every metric;
- results in a compact comparison table with units and plain-language interpretation;
- a metric-misuse note covering accuracy, ROC AUC, percentage errors, and R², including the distinction between correlation R and predictive R².

## Practice activities

1. **Reconstruct metrics from counts.** Given a binary confusion matrix, calculate accuracy, precision, recall, specificity, and F1 by hand, then explain which changed after the positive class was redefined.
2. **Match metrics to decisions.** For fraud review, disease screening, spam filtering, and demand forecasting scenarios, choose a primary metric and baseline. State the costly error and reject at least one tempting but unsuitable metric.
3. **Evaluate supplied predictions.** Using fixed `y_true`, labels, and probabilities, compute threshold metrics at two declared thresholds plus ROC AUC, average precision, and log loss. Explain why their rankings can disagree.
4. **Compare regression errors.** Evaluate two supplied prediction vectors with MAE, RMSE, median absolute error, MAPE, and R². Identify which conclusion changes after one extreme residual or near-zero target is introduced.
5. **Handle multiclass averaging.** Compute per-class, macro, micro, and weighted precision/recall/F1 for an imbalanced three-class problem and recommend a reporting set.

## Sample check questions

1. Why can 99% accuracy be useless when the positive prevalence is 1%?
2. Which prediction output is required for log loss, and which is required for a confusion matrix?
3. When is average precision more informative than ROC AUC?
4. What does macro recall reveal that weighted recall can conceal?
5. Why does lowering a binary decision threshold usually increase recall and reduce precision?
6. In what units are MAE, MSE, RMSE, and R² expressed?
7. How can held-out R² be negative, and why can high correlation R still accompany poor predictions?
8. Why is MAPE dangerous when actual values approach zero?

## Proficiency assessment

### Authentic task

Act as the evaluation analyst for two supplied models in each of two contexts: an imbalanced binary decision with unequal false-positive and false-negative costs, and a regression decision with target-unit costs and occasional large errors. You receive fixed held-out targets and each model's predictions; the classification case includes labels and probabilities. A small supplied multiclass prediction table is included for confusion-matrix and averaging interpretation.

### Constraints

- Declare the primary metric for each main context before calculating model comparisons.
- Evaluate a defensible baseline on the same held-out rows in each main context.
- Use only the supplied fixed splits; do not resplit, cross-validate, or tune a model or threshold against a held-out outcome.
- Use class labels only for threshold metrics and scores/probabilities only for metrics that require them.
- Report the positive class, threshold, and averaging convention explicitly.
- Do not infer underfitting or overfitting from these held-out metrics alone.

### Deliverables

- executable metric calculations;
- a concise decision memo naming the recommended model and operational tradeoff in each main context;
- a comparison table against the corresponding baseline for each main context;
- a binary confusion matrix plus threshold/ranking/probability metrics, and a multiclass confusion matrix with per-class and macro, micro, and weighted interpretation;
- an overall and segmented regression residual summary plus absolute, squared, robustness, percentage-error, and R² metrics;
- a metric-misuse and limitations section covering prevalence, threshold, scale, accuracy, ROC AUC, percentage-error, R, and R² caveats.

## Rubric

| Criterion | Meets proficiency | Demonstrates mastery |
|---|---|---|
| Metric choice | Primary metrics match both main tasks and their costly errors; useful secondary metrics and misuse caveats are included. | Compares credible alternatives and explains metric incentives and blind spots. |
| Calculation correctness | Correctly handles binary, multiclass, and regression inputs, formulas/APIs, labels, averaging, thresholds, and units, and distinguishes R from R². | Adds independent checks and correctly reconciles apparently conflicting metrics. |
| Baseline and comparison | Uses a relevant baseline and identical held-out observations in both main tasks. | Quantifies practical improvement and identifies where aggregate results conceal segment behavior. |
| Interpretation | Explains model behavior and tradeoffs in decision language without unsupported causal claims. | Gives a precise operational recommendation and threshold caveat grounded in the evidence. |
| Reporting | Context, split, positive class, conventions, and limitations are reproducible. | Report is concise enough for a decision-maker and detailed enough for technical review. |

**Pass rule:** all five criteria meet proficiency and there are no critical failures.

**Mastery rule:** all five criteria meet proficiency, at least four demonstrate mastery, and there are no critical failures.

**Critical failures:** evaluating different models on different rows; using hard labels for AUC or log loss; leakage from the held-out target into model or threshold selection; omitting the positive class or averaging convention when it changes meaning; recommending a model from accuracy alone in a materially imbalanced task; claiming underfitting or overfitting without train-versus-held-out evidence; use of cross-validation.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
|---|---|
| Reporting every metric without a decision criterion | Write the costly error first, select one primary metric, and label the rest as diagnostics. |
| Confusing precision and recall | Explain each using a different denominator, then annotate the corresponding confusion-matrix cells. |
| Treating AUC as accuracy | Rank five scored examples manually and contrast ranking quality with one threshold's decisions. |
| Ignoring the positive class or averaging method | Recompute after swapping the positive label or changing macro to weighted averaging and explain the difference. |
| Reading RMSE as a percentage | Label each regression metric with its unit and construct a two-residual example by hand. |
| Treating R or R² as error size | Show that offset or scale bias can preserve high R, then report target-unit error and distinguish it from R². |
| Tuning a threshold on the test target | Use a policy-specified threshold for this unit and document that threshold optimization requires separate validation design. |

## Scope boundaries / explicit deferred topics

- Cleaning and preparation decisions are covered in [Unit 4: Data Preparation](04_data_preparation.md).
- Feature creation, scaling, and imbalance interventions are deferred to [Unit 6: Feature Engineering](06_feature_engineering.md).
- Train-versus-held-out diagnosis of model capacity is deferred to [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- Reusable preprocessing composition is deferred to [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Fold-based performance estimates and fold aggregation are deferred to [Unit 9: Cross-Validation](09_cross_validation.md).
- Automated hyperparameter search is deferred to [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md). Threshold optimization is outside this program and requires separate validation evidence plus an untouched final test set.
