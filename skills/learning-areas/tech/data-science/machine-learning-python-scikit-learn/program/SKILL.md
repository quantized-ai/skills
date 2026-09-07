---
name: machine-learning-with-python-scikit-learn
description: A hands-on course in supervised machine learning with Python and scikit-learn, covering classification and regression, data cleaning and feature engineering, evaluation metrics, underfitting and overfitting, preprocessing pipelines, cross-validation, and hyperparameter tuning. Learners demonstrate proficiency by building, evaluating, improving, and explaining reproducible machine-learning projects using tabular data. Best for Jupyterlite.
type: learning-program
properties.learning_area: Data
properties.environment: jupyterlite
---

# Machine Learning with Python and scikit-learn

This program's recommended environment is: `jupyterlite`.

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

## Datasets

You can use `sklearn` builtin datasets for lessons and projects.

| Dataset                     | Function               | ML task                 | Samples |           Features | What is it about?                                                                                                             | Good for                                                                           |
| --------------------------- | ---------------------- | ----------------------- | ------: | -----------------: | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Iris**                    | `load_iris()`          | Classification          |     150 |                  4 | Measurements of iris flowers from 3 species, including sepal and petal dimensions.                                            | Beginner classification, visualization, clustering, decision boundaries            |
| **Digits**                  | `load_digits()`        | Classification          |   1,797 |                 64 | 8×8 grayscale images of handwritten digits from 0–9. Each pixel becomes a feature.                                            | Image classification, dimensionality reduction, PCA, SVMs                          |
| **Wine**                    | `load_wine()`          | Classification          |     178 |                 13 | Chemical measurements of wines belonging to 3 different classes/cultivars.                                                    | Multiclass classification, feature importance, scaling, PCA                        |
| **Breast Cancer Wisconsin** | `load_breast_cancer()` | Classification          |     569 |                 30 | Measurements computed from images of breast-cell nuclei, labeled as malignant or benign.                                      | Binary classification, logistic regression, model evaluation, feature selection    |
| **Diabetes**                | `load_diabetes()`      | Regression              |     442 |                 10 | Medical measurements from diabetes patients, with a quantitative measure of disease progression as the target.                | Regression, linear models, regularization, feature selection                       |
| **Linnerud**                | `load_linnerud()`      | Multi-output regression |      20 | 3 input + 3 target | Exercise-performance measurements (chin-ups, sit-ups, jumps) paired with physiological measurements such as weight and pulse. | Multi-output regression and demonstrating relationships between multiple variables |

### Workflow

- Make sure the `jupyterlite` environment is loaded.
- Either read memories to find out the current student level or ask the student where to start
- Locate the unit, load the specific unit document
- Create a notebook for the student with some boilerplate code including the dataset
- Start the process, start feeding the student the challenges one by one.

You can create a new notebook invoking the `create_notebook` tool:

```
create_notebook("Project.ipynb", cells=[{
    "code": "import pandas as pd\nfrom sklearn.datasets import load_iris"
}, {
    "code": "df = load_iris(as_frame=True).frame"
}])
```
