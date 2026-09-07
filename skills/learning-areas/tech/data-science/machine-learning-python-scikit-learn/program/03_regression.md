# Unit 3: Regression

## Unit purpose

Build and evaluate common regression models with one reproducible train/test split. Introduce MAE, MSE, RMSE, R², and a fixed max_depth hyperparameter through a descriptive comparison that does not overclaim what one holdout result proves.

## Entry requirements

- Meet the outcomes of [Unit 1: Machine Learning Basics](01_machine_learning_basics.md).
- Identify X, y, samples, features, and a numeric target.
- Use fit and predict and explain why test rows must remain outside fit.
- Perform basic arithmetic, including squaring and taking a square root.

## Proficiency outcomes

By the end of the unit, the learner can:

- Confirm that a continuous numeric target calls for regression.
- Create a reproducible train/test split and keep test rows out of fitting.
- Recognize LinearRegression, DecisionTreeRegressor, and RandomForestRegressor as common built-in options.
- Fit predeclared LinearRegression and depth-limited DecisionTreeRegressor estimators on identical training rows.
- Explain max_depth as a tree hyperparameter set before fit.
- Compute MAE, MSE, RMSE, and R² for both sets of test predictions.
- State the units and basic error emphasis of each metric.
- Interpret negative, zero, and positive R² without calling it accuracy.
- Describe model differences without trying more settings, selecting a winner, or claiming broad validation.

## Skills covered

- Loading a bundled regression dataset and inspecting the target.
- Splitting with train_test_split, test_size, and random_state.
- Instantiating LinearRegression and DecisionTreeRegressor(max_depth=4, random_state=42).
- Fitting both models on the same X_train/y_train and predicting the same X_test.
- Computing mean_absolute_error, mean_squared_error, RMSE, and r2_score.
- Calculating residuals with one declared sign convention.
- Comparing fixed holdout results descriptively rather than tuning.

Minimal pattern:

    data = load_diabetes(as_frame=True)
    X, y = data.data, data.target
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42
    )
    models = {
        "linear": LinearRegression(),
        "depth_4_tree": DecisionTreeRegressor(max_depth=4, random_state=42),
    }
    results = {}
    for name, model in models.items():
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        mae = mean_absolute_error(y_test, y_pred)
        mse = mean_squared_error(y_test, y_pred)
        rmse = mse ** 0.5
        r2 = r2_score(y_test, y_pred)
        results[name] = {"mae": mae, "mse": mse, "rmse": rmse, "r2": r2}

## Supporting knowledge

- Regression predicts a numeric quantity. A numeric code that merely names categories is still a classification target.
- The test partition is held outside fit and used to estimate performance on unseen rows for this one split.
- Linear regression learns a linear relationship; a decision tree makes rule-based partitions. Random forests combine many trees but are only introduced by name here.
- `max_depth` limits the tree's maximum root-to-leaf depth and is chosen before fit. Trying additional depths in response to test results would turn this exercise into inappropriate holdout tuning.
- A **residual** can be defined as actual minus predicted. State the convention before interpreting its sign.
- **MAE** is the average absolute error. It is in target units and weights every absolute error linearly.
- **MSE** averages squared errors. It is in squared target units and gives larger errors more influence.
- **RMSE** is the square root of MSE. It retains the target's units while remaining more sensitive to large errors than MAE.
- **R²** compares squared error with a constant-mean reference on the evaluated data: 1 is perfect, 0 matches that reference, and a negative value is worse. It is not a percentage accuracy and is not restricted to 0–1.
- Metrics describe predictive error; they do not establish causality, fairness, deployment safety, or future stability.

## Required evidence/work product

Submit a runnable script or notebook and a short result note containing:

1. Dataset, target meaning, feature and target shapes, and train/test sizes.
2. Split parameters, including test size and random seed.
3. Both predeclared models and their parameters, fitted on identical X_train/y_train rows.
4. MAE, MSE, RMSE, and R² for each model from the same y_test.
5. Metric units: target units for MAE/RMSE, squared target units for MSE, and unitless for R².
6. At least five actual, predicted, and residual values with the residual convention stated.
7. A descriptive two-model comparison plus a no-winner/no-tuning/one-split limitation.

## Practice activities

### 1. Distinguish target types

Classify six proposed targets as regression, classification, or underspecified. Include a numeric category code, a count, and a continuous measurement; justify each answer from the target's meaning rather than its storage type.

### 2. Build the holdout workflow

Load the diabetes dataset and make one 80/20 split with random_state=42. Fit the fixed linear and depth-4 tree models on identical training rows, predict the same X_test, and verify both prediction counts.

### 3. Compute and label metrics

Calculate MAE, MSE, RMSE, and R². For each, record its units, whether large errors receive extra weight, whether lower or higher is better, and one correct plain-language interpretation.

### 4. Inspect example errors

Create actual/predicted/residual tables and a two-row metric table. Describe visible differences without ranking the models, changing max_depth, or generalizing beyond this split.

## Sample check questions

1. **Why is a numeric target not always a regression target?**  
   Numbers may be category identifiers; the target's meaning determines the task.
2. **Which metrics retain the target's original units?**  
   MAE and RMSE.
3. **Why is MSE harder to explain in domain units?**  
   Squaring errors also squares the target unit.
4. **What does a negative R² mean?**  
   On the evaluated data, the model has more squared error than the constant-mean reference.
5. **Which rows may model.fit receive?**  
   X_train and y_train only.
6. **What does max_depth=4 control, and when was it chosen?**  
   It caps the tree's maximum depth at four and is fixed before any test result is viewed.

## Proficiency assessment

### Authentic task: disease-progression benchmark

Produce an educational benchmark that predicts the numeric disease-progression target in scikit-learn's diabetes dataset. The result supports learning only and must not be framed as a clinical tool.

Constraints:

- Use all supplied feature columns and the supplied numeric target.
- Use an 80/20 split with random_state=42.
- Predeclare LinearRegression() and DecisionTreeRegressor(max_depth=4, random_state=42).
- Fit each once on identical training rows and predict the identical test rows.
- Do not transform features, try another depth/model, tune, cross-validate, refit, or select a final model after viewing results.
- Compute only MAE, MSE, RMSE, and R² for each held-out prediction set.

Deliverables:

- A clean-run script or notebook with the required evidence.
- A two-model metric table with values, units, preferred direction, and one-line meanings.
- Actual, predicted, and residual values for each model on the same ten test rows.
- A 150–200 word descriptive comparison covering error magnitude, R², fixed max_depth, and one-split/no-selection limits.

## Rubric

Each criterion scores 0–2: **2** complete/correct, **1** partial, **0** missing/incorrect.

| Criterion | Full-credit evidence |
| --- | --- |
| Framing | Numeric target and regression task are correctly described. |
| Split integrity | Reproducible split; fit uses training rows only. |
| Model workflow | Both fixed regressors use identical rows; max_depth is explained. |
| Metrics | Both models have correct values, formulas, directions, and units. |
| Interpretation | Residual/R² meanings and descriptive no-selection limitation are accurate. |

- **Pass:** at least 7/10, with full credit for Split integrity and no critical failure.
- **Mastery:** at least 9/10, with full credit for Split integrity, Metrics, and Interpretation, and no critical failure.
- **Critical failures:** models use different splits/features; any test row influences fit; settings change after test inspection; RMSE/R² is materially misinterpreted; or a winner, clinical-use, or broad-generalization claim is made.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
| --- | --- |
| Numeric class codes are treated as quantities | Ask whether differences and averages between target values have domain meaning. |
| Metrics are computed on training predictions | Trace y_pred back to X_test and confirm fit received only training objects. |
| MAE, MSE, and RMSE units are conflated | Write the target unit beside each formula before interpreting the value. |
| RMSE is computed as MSE divided by two | Recompute as MSE raised to the 0.5 power and verify RMSE is nonnegative. |
| R² is called accuracy | Compare it with the constant-mean reference and use “relative squared-error fit.” |
| More depths are tried after test results | Restore the predeclared depth-4 tree and defer search to cross-validation/tuning. |
| Residual signs change meaning mid-report | Declare actual minus predicted once and derive under/overprediction from that convention. |

## Scope boundaries / explicit not-yet topics

- Cleaning, encoding, missing values, scaling, transformations, and outlier handling: [Unit 4: Data Preparation](04_data_preparation.md).
- Deeper metric choice, error-distribution analysis, subgroup analysis, and additional metrics: [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Feature creation/selection and fit diagnosis: [Unit 6: Feature Engineering](06_feature_engineering.md) and [Unit 7: Underfitting and Overfitting](07_underfitting_overfitting.md).
- Leakage-safe preprocessing with models: [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Repeated validation or uncertainty across folds: [Unit 9: Cross-Validation](09_cross_validation.md).
- Iterative model selection or hyperparameter search: [Unit 9: Cross-Validation](09_cross_validation.md) and [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md).
