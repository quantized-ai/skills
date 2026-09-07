# Unit 1: Machine Learning Basics

## Unit purpose

Build a first supervised scikit-learn workflow: inspect a dataset, exclude a non-predictive identifier, prepare features and target, then call **fit**, **predict**, and **score** with several estimators. This unit deliberately reuses the training data for prediction and scoring so the learner can focus on mechanics.

> The score produced in this unit is a training score, not a valid estimate of performance on new data. Do not use it to claim that a model generalizes. A train/test split begins in [Unit 2: Classification](02_classification.md) and [Unit 3: Regression](03_regression.md).

## Entry requirements

- Run Python code in a script or notebook.
- Work with rows, columns, variables, and basic numeric data.
- Read array or DataFrame shapes and select columns.

## Proficiency outcomes

By the end of the unit, the learner can:

- Identify samples, features, and a target in a small supervised-learning dataset.
- Perform minimal EDA and report the target distribution.
- Recognize and exclude an obvious ID-like column that does not describe the phenomenon.
- Classify scenarios as supervised or unsupervised; within supervised learning, distinguish classification from regression.
- Keep a two-dimensional feature matrix **X** aligned with a one-dimensional target **y**.
- Repeat the **fit → predict → score** lifecycle with a decision tree, logistic regression, and random forest.
- Build an actual-versus-predicted table and inspect mismatched training rows.
- Predict for a new sample while preserving the training feature count and order.
- State precisely why a score computed on fitted data is not valid model evaluation.

## Skills covered

- Loading a bundled scikit-learn dataset.
- Inspecting head, shape, data types, missing counts, and target counts/proportions.
- Recognizing a unique record identifier and excluding it from X.
- Separating features into **X** and the target into **y**.
- Creating several estimators with explicit parameters.
- Calling **fit(X, y)**, **predict(X)**, and **score(X, y)**.
- Tabulating actual/predicted values and filtering mismatches.
- Making a single prediction from a two-dimensional row.

Minimal lifecycle:

    frame = load_iris(as_frame=True).frame
    frame.insert(0, "specimen_id", range(1, len(frame) + 1))
    frame["target"].value_counts(normalize=True)
    X = frame.drop(columns=["specimen_id", "target"])
    y = frame["target"]
    models = {
        "tree": DecisionTreeClassifier(random_state=42),
        "logistic": LogisticRegression(max_iter=1000),
        "forest": RandomForestClassifier(n_estimators=100, random_state=42),
    }
    for name, model in models.items():
        model.fit(X, y)
        predicted = model.predict(X)
        training_score = model.score(X, y)
        comparison = pd.DataFrame({"actual": y, "predicted": predicted})
        mismatches = comparison[comparison["actual"] != comparison["predicted"]]
        print(name, training_score, len(mismatches))
        print(comparison.head(), mismatches.head())

The score line measures fit on data the model has already seen. Its value is useful only for learning the method call in this unit.

## Supporting knowledge

- A **sample** is one row or observation; a **feature** is an input column.
- **Supervised learning** uses features paired with known targets; classification predicts a category and regression predicts a numeric quantity.
- **Unsupervised learning** has no supplied target and explores structure such as groups. It is recognized conceptually here, but all hands-on modeling remains supervised.
- An **estimator** is a scikit-learn object that learns from data.
- **Training** occurs during **fit**; **inference** occurs during **predict**.
- **X** is normally shaped as (number of samples, number of features); **y** is normally shaped as (number of samples,).
- A one-sample prediction still needs a two-dimensional input such as X.iloc[[0]].
- An identifier may be essential for joining records yet useless or misleading as a predictor; uniqueness and domain meaning are the clues.
- An actual-versus-predicted table makes mismatches inspectable, but a training mismatch is not automatically a bad label.
- The meaning of **score** depends on the estimator. For a classifier it is commonly accuracy; for many regressors it is R². Always verify the estimator documentation before interpreting it.
- A high training score may reflect memorization or an easy dataset. It supplies no independent evidence about unseen cases.

## Required evidence/work product

Submit a runnable script or notebook plus a short interpretation note. The work product must contain:

1. Dataset shape, head, data types, missing counts, and target counts/proportions.
2. The ID-like column, why it is non-predictive, and proof it is excluded from X.
3. Parameters plus fit, predict, and same-data score for all three required classifiers.
4. An actual/predicted table and mismatch count for each model, with inspected rows or an explicit “none.”
5. One new-sample prediction with feature order documented and basic output checks.
6. A warning that these training scores and comparisons do not estimate unseen-data performance.

## Practice activities

### 1. Inspect and frame the data

First classify brief labeled-outcome and customer-grouping scenarios as supervised or unsupervised. Then add specimen_id to the iris frame; inspect its shape, schema, missing values, target distribution, task type, and why the ID must not enter X.

### 2. Trace the estimator lifecycle

Fit the required decision tree on all iris rows and print five predictions and its training score. Annotate each step as estimator creation, training, inference, or same-data scoring.

### 3. Repair interface errors

Create an actual/predicted table for the tree, filter mismatches, and inspect several without treating disagreement as proof that the recorded target is wrong. Repair a one-dimensional new-sample input.

### 4. Compare mechanics without making performance claims

Repeat the unchanged lifecycle with LogisticRegression(max_iter=1000) and RandomForestClassifier(n_estimators=100, random_state=42). Compare only training scores and mismatch counts, then explain why neither reveals performance on new data.

## Sample check questions

1. **Why is X two-dimensional even when y is one-dimensional?**  
   X represents rows by features; y supplies one target value per row.
2. **What changes after fit is called?**  
   The estimator learns and stores fitted state from X and y.
3. **Why can model.predict(X.iloc[0]) fail while model.predict(X.iloc[[0]]) works?**  
   The first expression is typically one-dimensional; the estimator expects a two-dimensional batch of samples.
4. **What does the score in this unit demonstrate?**  
   Only that the fitted estimator can score the same data and how well it matches those seen rows.
5. **Does a training score of 1.0 prove the model is ready for use?**  
   No. It provides no independent evidence about performance on unseen data.
6. **How do supervised and unsupervised learning differ?**  
   Supervised learning has target labels or values; unsupervised learning searches unlabeled data for structure.
7. **Why exclude specimen_id even if its values are numeric?**  
   It identifies records rather than describing flowers and may invite spurious memorization.

## Proficiency assessment

### Authentic task: prototype a flower-routing model

A botanical intake team wants a technical prototype that maps four recorded flower measurements to an iris class. Build the prototype with the bundled iris dataset.

Constraints:

- Add specimen_id as a mock intake key, report its uniqueness, and exclude it from X.
- Report minimal EDA and the target distribution before modeling.
- Use DecisionTreeClassifier(random_state=42), LogisticRegression(max_iter=1000), and RandomForestClassifier(n_estimators=100, random_state=42).
- Fit, predict, and score each on the complete dataset only for this mechanics exercise.
- Do not create a train/test split, tune parameters, preprocess features, or claim generalization.
- The program must run from a clean kernel or Python process.

Deliverables:

- A script or notebook satisfying the required evidence list.
- A compact result block with EDA, three training scores, actual/predicted tables, mismatch counts, and one new-sample prediction.
- A 100–150 word handoff note explaining the workflow, input schema, and evaluation limitation.

## Rubric

Score each criterion from 0 to 2: **2** is complete and correct, **1** is partially correct or insufficiently evidenced, and **0** is missing or incorrect.

| Criterion | Evidence for full credit |
| --- | --- |
| Problem framing | Supervised/unsupervised distinction, minimal EDA, target distribution, and task definition are correct. |
| Data interface | ID is justified/excluded; X/y align and new-sample order is documented. |
| Estimator lifecycle | All three classifiers complete fit, predict, and score. |
| Output validation | Actual/predicted tables, mismatch inspection, scores, and checks are reproducible. |
| Interpretation | Clearly labels the score as same-data training score and rejects generalization claims. |

- **Pass:** at least 7/10, with full credit for Estimator lifecycle and no critical failure.
- **Mastery:** at least 9/10, with full credit for Data interface, Estimator lifecycle, and Interpretation, and no critical failure.
- **Critical failures:** the ID enters X; X/y rows are misaligned; a required model cannot fit/predict; or a same-data score/model comparison is presented as evidence of generalization.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
| --- | --- |
| X and y are reversed or misaligned | Print both shapes, verify equal row counts, and restate which object contains inputs versus answers. |
| A single sample is one-dimensional | Select it as a one-row DataFrame or reshape it to (1, number of features). |
| Feature order is implicit | Build the sample with named columns in X.columns order and print that order before prediction. |
| Identifier is retained because it is numeric | Ask what the column means, verify uniqueness, and remove it from X while retaining it only for record joins. |
| fit, predict, and score are treated as interchangeable | Annotate the lifecycle and state what data and output each method consumes or produces. |
| Training score is called accuracy on new data | Replace the claim with the required limitation statement, then revisit the opening warning. |
| score is assumed to mean the same thing for every estimator | Look up the estimator's score definition and name the metric explicitly. |

## Scope boundaries / explicit not-yet topics

- Train/test splitting and first holdout evaluation: [Unit 2: Classification](02_classification.md) and [Unit 3: Regression](03_regression.md).
- Cleaning, encoding, missing values, and scaling: [Unit 4: Data Preparation](04_data_preparation.md).
- Deeper metric selection and interpretation: [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Creating/selecting features and diagnosing model fit: [Unit 6: Feature Engineering](06_feature_engineering.md) and [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- Reusable preprocessing/model workflows: [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Cross-validation and tuning: [Unit 9: Cross-Validation](09_cross_validation.md) and [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md).
- Unsupervised model implementation is outside this supervised-learning course's scope.
