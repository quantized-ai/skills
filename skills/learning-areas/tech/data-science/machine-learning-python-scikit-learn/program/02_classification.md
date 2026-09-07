# Unit 2: Classification

## Unit purpose

Build and evaluate binary decision trees with one reproducible train/test split. Introduce accuracy, precision, recall, cautious label cleanup, explicit feature choice, and basic tree hyperparameters through a fixed descriptive comparison.

## Entry requirements

- Meet the outcomes of [Unit 1: Machine Learning Basics](01_machine_learning_basics.md).
- Identify X, y, samples, features, and a categorical target.
- Use an estimator's fit and predict methods.

## Proficiency outcomes

By the end of the unit, the learner can:

- Confirm that a target represents a classification problem and define the positive class.
- Audit target values and remove/correct only objectively invalid or inconsistent labels using an authoritative rule.
- Choose and document a feature subset before examining holdout results.
- Create a reproducible, stratified train/test split.
- Explain max_depth and min_samples_leaf as hyperparameters set before fitting.
- Fit three predeclared tree configurations on the same training rows and compare their test accuracy, precision, and recall.
- Explain each metric in terms of correct predictions, false positives, and false negatives.
- Choose whether precision or recall deserves emphasis in a stated decision context.
- Describe differences without iterative tuning, declaring a winner, or implying broader validation.

## Skills covered

- Auditing target labels against allowed values and a documented source-of-truth rule.
- Converting a domain-relevant event to the positive label when necessary.
- Selecting named features for a stated reason before splitting.
- Using train_test_split with test_size, random_state, and stratify.
- Customizing DecisionTreeClassifier with max_depth and min_samples_leaf.
- Evaluating three fixed configurations on the identical holdout rows.
- Computing and contextualizing accuracy_score, precision_score, and recall_score.

Minimal pattern:

    raw = load_breast_cancer(as_frame=True)
    valid = raw.target.isin([0, 1])
    selected = ["mean radius", "mean texture", "mean perimeter",
                "mean area", "mean smoothness"]
    X = raw.data.loc[valid, selected]
    y = (raw.target.loc[valid] == 0).astype(int)  # 1 means malignant
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.25, random_state=42, stratify=y
    )
    configs = {
        "shallow": {"max_depth": 2},
        "medium": {"max_depth": 4},
        "leaf_constrained": {"max_depth": 4, "min_samples_leaf": 10},
    }
    scores = {}
    for name, params in configs.items():
        model = DecisionTreeClassifier(random_state=42, **params)
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        scores[name] = {"accuracy": accuracy_score(y_test, y_pred),
                        "precision": precision_score(y_test, y_pred, zero_division=0),
                        "recall": recall_score(y_test, y_pred, zero_division=0)}

## Supporting knowledge

- A classifier predicts labels, not continuous quantities.
- The **positive class** is the event counted in precision and recall; it must be stated explicitly.
- A train/test split reserves rows that are not passed to fit. The test set simulates unseen data for this one evaluation.
- **Stratification** approximately preserves class proportions across the split. It does not solve class imbalance.
- A **hyperparameter** is chosen before fit; `max_depth` limits the longest root-to-leaf depth, while `min_samples_leaf` sets the minimum rows allowed in a leaf.
- Feature inclusion must follow a stated domain or assignment rule before test inspection, not whichever subset scores best on the holdout.
- A model disagreement is not evidence that a target is wrong. Change or remove a label only when an authoritative rule shows it is invalid or inconsistent, and log the action.
- **Accuracy** is the fraction of all test predictions that are correct.
- **Precision** asks: among predicted positives, what fraction are truly positive?
- **Recall** asks: among actual positives, what fraction did the model identify?
- Higher precision reduces false-positive burden; higher recall reduces missed positives. The consequences of errors determine emphasis.
- One test split is limited evidence. It is not cross-validation, a tuning set, or proof of production performance.

## Required evidence/work product

Submit a runnable script or notebook and a short result note containing:

1. Positive-label definition, allowed-label audit, cleanup log, and source rule; document “no changes” when all labels are valid.
2. Included/excluded feature lists and a reason chosen before holdout inspection.
3. Train/test sizes, seed, stratification, class proportions, and proof all configurations use the same rows.
4. The three predeclared parameter dictionaries and a classifier fitted only on training data for each.
5. Test accuracy, precision, and recall for each configuration plus actual/predicted examples.
6. Error-cost interpretation and a descriptive comparison that makes no winner, tuning, or generalization claim.

## Practice activities

### 1. Define labels and error costs

For a spam filter, equipment-failure alert, and medical-screening example, define the positive class and describe one false positive and one false negative. Choose whether precision or recall deserves emphasis and justify the choice.

### 2. Audit labels and choose features

Audit a supplied target copy containing one impossible label and one documented spelling inconsistency. Apply only the authoritative mapping, log removals/corrections, and explain why prediction disagreement would not justify relabeling. Select the provided five-feature subset before splitting.

### 3. Fit and evaluate

Create one 75/25 stratified split with random_state=42. Fit the three supplied configurations on the same training rows; calculate test accuracy, precision, and recall for each and describe differences without ranking them.

### 4. Audit a leaky workflow

Review a workflow that changes max_depth and the feature list after each test result. Restore the three predeclared configurations and one feature list, then explain why iterative reuse turns the holdout into a tuning aid.

## Sample check questions

1. **Why pass stratify=y to train_test_split?**  
   To preserve approximately the same class proportions in the training and test partitions.
2. **Does stratification fix an imbalanced target?**  
   No. It distributes the existing proportions; it does not rebalance them.
3. **What data may be passed to model.fit in this unit?**  
   X_train and y_train only.
4. **When is recall more important than precision?**  
   When missing an actual positive is especially costly, subject to the stated domain context.
5. **What can be concluded from one test split?**  
   The model's performance on that held-out partition, with uncertainty and broader validation still unresolved.
6. **May a label be changed because every classifier disagrees with it?**  
   No. A label needs independent source-of-truth evidence; model disagreement alone is insufficient.
7. **What is max_depth?**  
   A pre-fit hyperparameter limiting the tree's maximum root-to-leaf depth.

## Proficiency assessment

### Authentic task: malignant-case triage benchmark

Create a reproducible educational benchmark that flags malignant cases in scikit-learn's bundled breast-cancer dataset. This is a modeling exercise, not a clinical system.

Constraints:

- Define label 1 as malignant and document the mapping.
- Audit labels against allowed source values; log justified changes and never relabel from model disagreement.
- Predeclare the five named features shown above, one 75/25 stratified split with random_state=42, and the three shown parameter dictionaries.
- Fit each DecisionTreeClassifier(random_state=42, **params) on the identical training rows.
- Evaluate each once with accuracy, precision, and recall; pass zero_division=0 where applicable.
- Do not revise labels, features, or configurations after test inspection; do not select a final model.

Deliverables:

- A clean-run script or notebook with the required evidence.
- A cleanup/feature-choice record, a three-row configuration-and-metrics table, and actual/predicted examples.
- A 150–200 word memo stating which error is costlier in this scenario, which metric reflects it, and the limits of a single split.

## Rubric

Each criterion scores 0–2: **2** complete/correct, **1** partial, **0** missing/incorrect.

| Criterion | Full-credit evidence |
| --- | --- |
| Data decisions | Positive mapping, evidence-based cleanup, and predeclared feature choice are sound. |
| Comparison integrity | One reproducible split and identical rows support all three fixed configurations. |
| Model workflow | Parameters are explained; all trees fit training data and predict test data. |
| Metrics | All three configurations have correctly labeled accuracy, precision, and recall. |
| Interpretation | Error costs and differences are described without winner/tuning/generalization claims. |

- **Pass:** at least 7/10, with full credit for Comparison integrity and no critical failure.
- **Mastery:** at least 9/10, with full credit for Data decisions, Comparison integrity, and Interpretation, and no critical failure.
- **Critical failures:** a label is changed because a model disagrees; test results drive features/configurations; any test row influences fit; configurations use different splits; or a winner, clinical-readiness, or validated-generalization claim is made.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
| --- | --- |
| fit receives all X and y | Write the split first, then trace every object passed to fit and predict. |
| Positive class is assumed | Add a one-line label mapping before splitting and repeat it beside the metrics. |
| Prediction disagreements are “cleaned” | Restore original labels and require independent source evidence for every correction/removal. |
| Accuracy alone drives the conclusion | Describe false positives and false negatives, then add precision and recall. |
| Precision and recall are swapped | Restate their denominators: predicted positives for precision, actual positives for recall. |
| Stratification is described as balancing | Compare proportions and replace “balanced” with “proportions preserved.” |
| Configurations are changed after each result | Restore the predeclared set and defer selection to cross-validation and tuning units. |

## Scope boundaries / explicit not-yet topics

- Multiclass, thresholds, fuller metric analysis, and imbalance remediation: [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Missing values, encoding, scaling, and other data preparation: [Unit 4: Data Preparation](04_data_preparation.md).
- Data-driven feature selection, creation, or importance analysis: [Unit 6: Feature Engineering](06_feature_engineering.md).
- Diagnosing train/test gaps or overfitting: [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- Combining preparation and modeling safely: [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Repeated validation: [Unit 9: Cross-Validation](09_cross_validation.md).
- Iterative or automated model/hyperparameter search: [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md).
