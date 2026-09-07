# Machine Learning with Python and scikit-learn

## Course goal

Build basic, reproducible supervised-learning projects for tabular data with pandas and core scikit-learn. Completion requires applying the full workflow to unfamiliar classification and regression problems—not recalling definitions.

By the end, the learner can:

- frame classification and regression problems, then inspect, clean, and transform their data without leakage;
- train, compare, and diagnose scikit-learn models using metrics that match the problem;
- build preprocessing pipelines and use cross-validation and hyperparameter search correctly; and
- deliver reproducible projects with justified decisions, results, and limitations.

## Prerequisites

- Basic Python: functions, collections, control flow, imports, and debugging common errors.
- Basic pandas: load, inspect, filter, aggregate, and modify tabular data; read simple summaries and plots.

## Units

| Unit | Proficiency target |
| --- | --- |
| [1. Machine Learning Basics](01_machine_learning_basics.md) | Frame a supervised task and execute `fit` → `predict` → `score`. |
| [2. Classification](02_classification.md) | Use a train/test split and interpret accuracy, precision, and recall. |
| [3. Regression](03_regression.md) | Predict numeric targets and interpret MAE, MSE/RMSE, and R². |
| [4. Data Preparation](04_data_preparation.md) | Audit and clean messy tabular data without performing feature engineering. |
| [5. Evaluation Metrics](05_evaluation_metrics.md) | Select and interpret classification and regression metrics. |
| [6. Feature Engineering](06_feature_engineering.md) | Improve features manually while controlling leakage, scale, outliers, redundancy, and imbalance. |
| [7. Underfitting and Overfitting](07_underfitting_overfitting.md) | Diagnose fit problems and test a justified remedy. |
| [8. Preprocessing Pipelines](08_preprocessing_pipelines.md) | Build a leakage-safe `ColumnTransformer` and `Pipeline`. |
| [9. Cross-Validation](09_cross_validation.md) | Evaluate models across appropriate folds and interpret mean and variability. |
| [10. Hyperparameter Tuning](10_hyperparameter_tuning.md) | Tune a pipeline with grid and randomized search, then evaluate once on held-out data. |

## Out of scope

- Training unsupervised models. Unit 1 covers the supervised/unsupervised distinction only.
- Models outside core scikit-learn.
- Deep learning.

## Guidance for the AI learning agent

- Treat each unit as a scope and proficiency specification; do not introduce later-unit techniques early.
- Diagnose with observable tasks, skip demonstrated skills, and target gaps with varied practice and fresh reassessment.
- Assess without step-by-step hints. Advance when code, outputs, and explanations evidence every criterion with no critical failure; stop once evidence is sufficient.
