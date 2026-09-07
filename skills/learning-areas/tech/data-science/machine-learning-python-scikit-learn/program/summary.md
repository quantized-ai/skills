# Machine Learning with Python and scikit-learn

## Course purpose

This is a proficiency-based course in basic supervised machine learning for tabular data. A student completes the course by showing that they can independently turn a dataset and a problem statement into a reproducible classification or regression project, evaluate it honestly, improve it methodically, and explain the limits of the result.

The course values observable performance over recall. Knowing a definition is supporting evidence; it is not, by itself, proof of proficiency.

## Course-level proficiency

By the end of the course, the student can:

1. Frame a tabular problem as supervised classification or regression and identify the observations, features, and target.
2. Inspect, clean, split, and prepare data while protecting the target and preventing data leakage.
3. Establish a sensible baseline and train appropriate estimators from scikit-learn.
4. Select evaluation metrics that reflect the problem's error costs and interpret those metrics in context.
5. Perform manual feature engineering and express standard learned preprocessing safely with `Pipeline` and `ColumnTransformer`.
6. Recognize underfitting and overfitting from training and validation evidence and choose a justified response.
7. Compare models more reliably with cross-validation and interpret both average performance and variability.
8. Tune hyperparameters with a leakage-safe search and evaluate the selected model once on untouched test data.
9. Deliver runnable work that records assumptions, choices, results, limitations, and reproducibility controls such as fixed random seeds.

The final standard is transfer: the student must do these things on a suitable dataset they have not already practiced on, without a step-by-step recipe.

## Prerequisites

The student should already be able to:

- Write and run basic Python using variables, collections, conditions, loops, functions, imports, and exceptions.
- Use a notebook or Python script and diagnose ordinary syntax, import, shape, and type errors.
- Load data into pandas; select and filter rows and columns; inspect shapes, dtypes, summaries, missing values, and duplicates; and create or modify columns.
- Produce and read basic tables and plots with pandas and a standard plotting library.
- Explain averages, proportions, ranges, and distributions at an introductory level.

A useful readiness check is a short pandas task in which the student loads a CSV, identifies data-quality issues, filters and aggregates rows, creates one plot, and explains the result. Gaps in Python or pandas should be remediated before this course rather than counted as machine-learning gaps.

## Proficiency and progression model

Each unit is a gate. Advancement requires an artifact and an explanation, not only correct answers to questions.

- **Practice:** the AI agent may model a step, give hints, generate variants, and ask the student to repair mistakes.
- **Checkpoint:** the student completes a partially scaffolded task and explains key choices.
- **Proficiency assessment:** the student completes a new but equivalent task with only the unit's stated constraints and permitted references.
- **Evidence:** executable code, outputs, and a concise written or oral rationale must agree with one another.

Unit rubrics use either scored levels or explicit proficiency gates. In both forms, a pass requires proficient evidence for every required criterion and no critical failure; mastery requires stronger, more independent evidence as defined by the unit. A critical failure is an error that makes the claimed result invalid, such as target leakage, evaluating on training data when generalization is claimed, tuning on the test set, using an inappropriate metric without recognizing it, or submitting code that cannot reproduce the reported result.

When a student does not pass, the agent should identify the smallest observable gap, assign targeted practice for that gap, and reassess it with a fresh variant. It should not require the student to repeat skills already demonstrated.

## Unit sequence

| Unit | Proficiency focus | Gate evidence |
| --- | --- | --- |
| [1. Machine Learning Basics](01_machine_learning_basics.md) | Recognize supervised tasks and execute the basic `fit` → `predict` → `score` workflow. | A guided, deliberately simplified classification exploration with a correct explanation of what its same-data score cannot prove. |
| [2. Classification](02_classification.md) | Build a basic classification experiment with a train/test split and interpret accuracy, precision, and recall. | A reproducible comparison of classifiers or simple parameter settings on unseen test data. |
| [3. Regression](03_regression.md) | Apply the supervised workflow to numeric targets and interpret prediction errors. | A regression experiment using MAE, MSE or RMSE, and R², supported by residual or actual-versus-predicted analysis. |
| [4. Data Preparation](04_data_preparation.md) | Find and resolve missing, duplicated, invalid, inconsistent, and simply encoded values. | An auditable cleaning plan and cleaned dataset whose row/column changes are justified. |
| [5. Evaluation Metrics](05_evaluation_metrics.md) | Choose, compute, and communicate classification and regression metrics in context. | A metric-driven evaluation that connects model errors to the stated problem and avoids unsupported conclusions. |
| [6. Feature Engineering](06_feature_engineering.md) | Manually improve feature usefulness while preventing leakage and handling categorical values, scale, outliers, low variance, redundancy, and basic class imbalance. | A before/after experiment in which transformations are fit on training data and improvements are supported by suitable metrics. |
| [7. Underfitting and Overfitting](07_underfitting_overfitting.md) | Diagnose fit problems and test a targeted remedy. | Training-versus-validation evidence, a defensible diagnosis, and a controlled remediation experiment. |
| [8. Preprocessing Pipelines](08_preprocessing_pipelines.md) | Build a mixed-type, leakage-safe preprocessing and modeling pipeline. | One fitted `Pipeline` containing a `ColumnTransformer` and estimator that can predict raw held-out rows. |
| [9. Cross-Validation](09_cross_validation.md) | Compare performance across appropriate folds and interpret mean and variability. | A full-pipeline cross-validation experiment with a justified splitter, metric, and stability conclusion. |
| [10. Hyperparameter Tuning](10_hyperparameter_tuning.md) | Select via leakage-safe search and make one final, honest performance claim. | A capstone using both `GridSearchCV` and `RandomizedSearchCV`, inspected search results, and one untouched-test evaluation. |

The order is intentional. A later unit may require earlier skills, but an earlier unit must not use a later technique to hide a gap. Forward references in each unit identify concepts that the agent may name briefly but should not teach or assess yet.

## Course-wide working conventions

- Use scikit-learn estimators and utilities, pandas for tabular inspection and manual transformations, and ordinary Python plotting tools.
- State what one row represents and verify that feature rows align with target values.
- Make the train/test boundary before any operation that learns from data once leakage prevention has been introduced.
- Keep held-out rows outside fitting. Once a partition is designated as the **final test set**, do not use it for model, feature, threshold, or metric decisions; use development evidence or cross-validation instead.
- Include a simple baseline where it makes the model result easier to interpret.
- Record the target, feature set, split or cross-validation strategy, metric definitions, random seeds, and important estimator settings.
- Interpret results in the problem's terms. A better number is not automatically a useful, fair, causal, or deployable system.
- Prefer small controlled comparisons: change one reasoned element, observe the effect, and explain it.

## What this course is not

This course does not teach or require:

- Unsupervised or semi-supervised learning.
- Deep learning or neural-network frameworks.
- Estimators from packages outside core scikit-learn.
- Time-series forecasting, grouped or spatial validation, recommender systems, NLP, computer vision, or reinforcement learning.
- Mathematical derivations of optimization algorithms or estimator internals.
- Custom scikit-learn transformers, advanced feature-selection algorithms, probability calibration, or advanced threshold optimization.
- Bayesian optimization, nested cross-validation, distributed training, or third-party experiment tracking.
- Causal inference, production deployment, APIs, monitoring, MLOps, or cloud infrastructure.
- Comprehensive Python, pandas, statistics, visualization, fairness, privacy, or domain training.

These exclusions are not claims that the topics are unimportant. They keep the proficiency target narrow enough for the student and the assessing agent to identify exactly what has—and has not—been demonstrated.

## Guidance for the AI learning agent

The agent should treat each unit file as a scope contract and assessment specification.

1. Begin with a short diagnostic using observable tasks, then skip practice the student can already perform.
2. Keep examples and hints inside the current unit's boundaries. Name a deferred concept only when needed to prevent a misconception, and point to its unit.
3. Vary datasets and surface details while preserving the assessed skill. Do not equate memorizing an earlier notebook with transfer.
4. Ask the student to predict outcomes, write or repair code, inspect outputs, and justify decisions. Do not accept fluent terminology in place of working evidence.
5. During assessment, avoid step-by-step prompts. Intervene only to clarify the task or record a gap; then use targeted practice before a fresh reassessment.
6. Check both the process and the claim. Accidental good scores do not compensate for invalid evaluation, leakage, or an inappropriate metric.
7. Stop once sufficient evidence is collected. Report demonstrated skills, specific gaps, remediation attempted, and the evidence supporting the progression decision.
