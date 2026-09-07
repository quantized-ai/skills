# Unit 9: Cross-Validation

## Unit purpose

Estimate how reliably a supervised scikit-learn workflow generalizes by evaluating it across multiple train/validation splits. The unit covers regression and classification, emphasizes variation across folds, and keeps preprocessing leakage-safe by cross-validating the complete pipeline.

## Entry requirements

- Build an end-to-end preprocessing-and-estimator pipeline as covered in [Unit 8](./08_preprocessing_pipelines.md).
- Distinguish training, validation, and final test roles.
- Select and interpret basic regression and classification metrics.
- Work with NumPy arrays or pandas objects using row-aligned `X` and `y`.

## Proficiency outcomes

By the end of this unit, the learner can:

- Explain what cross-validation estimates and what it does not guarantee.
- Select `KFold` for regression and `StratifiedKFold` for classification when appropriate.
- Recognize and run bounded alternatives with `ShuffleSplit` and `StratifiedShuffleSplit` while keeping the K-fold splitters as the core workflow.
- Use `cross_val_score` for one metric and `cross_validate` for multiple metrics or timing information.
- Report per-fold scores plus mean and standard deviation without treating folds as independent final tests.
- Explain out-of-fold predictions conceptually and distinguish them from predictions made by one model fitted to all training data.
- Prevent leakage by passing the complete preprocessing-and-estimator pipeline into cross-validation.
- Preserve a held-out test set for one final evaluation when the workflow requires unbiased final confirmation.

## Skills covered

- Fold construction and the role of shuffling and `random_state`.
- `KFold` for continuous-target problems.
- `StratifiedKFold` for classification class-balance preservation.
- Basic `ShuffleSplit` and `StratifiedShuffleSplit` configuration with `n_splits`, `test_size`, and `random_state`.
- `cross_val_score` and `cross_validate`.
- Single- and multi-metric scoring.
- Per-fold results, mean, standard deviation, and basic stability interpretation.
- Conceptual out-of-fold coverage: each training example is validated by a model that did not train on that example.
- Cross-validating a full `Pipeline` so preprocessing is refitted within each training fold.

## Supporting knowledge

- In each fold, the validation subset must remain unseen by every fitted component, including imputers, encoders, and scalers.
- Five or ten folds are common starting choices, not universal rules; choose the count from sample size, minority-class representation, estimate stability, and compute cost.
- Cross-validation reuses the development dataset in different roles; it does not make the folds independent datasets or replace a final test set.
- Shuffle-split alternatives draw bounded random train/validation splits; their validation sets can overlap, unlike the one-pass partition formed by ordinary K-fold splitting.
- Stratification approximately preserves class proportions but does not solve all small-sample or rare-class problems.
- A score's direction depends on scikit-learn's scoring convention. Loss scorers such as `neg_mean_absolute_error` are negated so that higher is always better.
- Mean summarizes central performance; standard deviation describes fold-to-fold variability, not a formal confidence interval by itself.
- Out-of-fold predictions come from several fitted models. They are useful for diagnostics but are not predictions from the final model refitted on all development data.

## Required evidence / work product

Submit a runnable notebook or script that includes:

- One classification and one regression cross-validation example.
- An explicit splitter: `StratifiedKFold` for classification and `KFold` for regression, with justified split count and shuffle settings.
- A small demonstration of both `ShuffleSplit` and `StratifiedShuffleSplit`, including fixed seeds, bounded split counts, and a class-proportion check for the stratified form.
- Complete pipelines passed directly to both `cross_val_score` and `cross_validate`.
- Per-fold scores, mean, standard deviation, and interpretation in the original metric direction.
- At least one `cross_validate` run with multiple metrics.
- A short explanation of what cross-validation estimates and cannot guarantee, how an out-of-fold prediction differs from an in-sample or final-model prediction, and why a reserved final test set stays untouched.
- A leakage audit confirming that preprocessing is fitted anew inside every training fold.

## Practice activities

1. **Read the splits:** Generate small `KFold`, `StratifiedKFold`, `ShuffleSplit`, and `StratifiedShuffleSplit` examples. Inspect indices and class proportions, then explain partitioning, overlap, and the effect of a fixed seed.
2. **Evaluate two task types:** Run `cross_val_score` on a regression pipeline and a classification pipeline. Print every fold score and compute mean and standard deviation.
3. **Multi-metric evaluation:** Use `cross_validate` to collect two appropriate metrics plus fit/score time. Reconcile any negative loss convention before communicating results.
4. **Leakage investigation:** Compare a flawed preprocessed-before-CV workflow with CV of the full pipeline. Identify exactly which fold information leaks in the flawed version.
5. **Out-of-fold reasoning:** For a tiny dataset, map each row to the fold model that validates it and explain why no single fold model supplies all predictions.

## Sample check questions

1. Why is stratification usually appropriate for classification but not ordinary regression?
2. Where is a scaler fitted during five-fold CV of a complete pipeline, and how many times is it fitted?
3. What additional information does `cross_validate` provide over `cross_val_score`?
4. What does a high mean score with high fold-to-fold standard deviation suggest?
5. Why might mean `neg_mean_absolute_error` be `-12`, and how should it be reported as MAE?
6. Are out-of-fold predictions produced by the final model trained on all development rows? Explain.
7. When should the held-out test set enter the workflow?
8. How do `ShuffleSplit` and `StratifiedShuffleSplit` differ, and how can their validation rows overlap across splits?

## Proficiency assessment

### Authentic task

Evaluate two supplied raw-data pipelines: one classifier and one regressor. Produce a concise reliability report that a teammate can use to judge expected performance and stability before any tuning.

### Constraints

- Cross-validate the full pipeline, never a feature matrix preprocessed on all development rows.
- Use an explicit splitter with reproducible settings and a justified number of folds.
- Use `StratifiedKFold` for classification and `KFold` for regression unless a documented property of the supplied data makes either invalid.
- Report all fold scores, not only the mean.
- Do not search or select hyperparameters in this assessment.
- Do not inspect or repeatedly score a reserved final test set.

### Deliverables

- Runnable code for both task types.
- Splitter definitions and rationale.
- A table of fold-level and aggregate metrics, including mean and standard deviation.
- A brief stability and leakage analysis.
- A 100–200 word explanation of out-of-fold predictions and the role of a final test set.

## Rubric

| Criterion | Developing | Proficient | Mastery |
|---|---|---|---|
| Splitter choice | Uses unsuitable or implicit splitting | Uses and justifies `KFold` and `StratifiedKFold` appropriately and demonstrates both shuffle-split alternatives | Also analyzes overlap, class, sample-size, and compute implications |
| API use | Produces incomplete or misread scores | Correctly uses both CV APIs and metric conventions | Builds a clear multi-metric, timing-aware evaluation |
| Leakage control | Preprocessing sees validation rows | Cross-validates the full pipeline | Precisely traces fitting boundaries for every fold |
| Interpretation | Reports only a mean or misstates variability | Reports folds, mean, standard deviation, and limitations | Connects variation to plausible data/model behavior without overclaiming |
| Task coverage | Handles only one task type | Correctly evaluates classification and regression | Compares task-specific choices with especially clear reasoning |

**Pass rule:** Proficient or better in every criterion, with no critical failure.

**Mastery rule:** Mastery in at least four criteria, Proficient or better in the remainder, and no critical failure.

**Critical failures:** fitting preprocessing before cross-validation; allowing validation-fold data into any `.fit`; using an inappropriate splitter without recognizing the issue; tuning or selecting hyperparameters with the assessment folds; using the final test set during iterative evaluation; or reporting a negated loss with the wrong meaning.

## Common gaps & targeted remediation

- **CV on an already transformed matrix:** Pass the raw-data pipeline to the CV function and trace one fold's fit/transform sequence.
- **Classification without stratification:** Inspect fold class counts, then repeat with `StratifiedKFold` and compare validity.
- **Only reporting the mean:** Plot or tabulate fold scores and write one sentence about their range and standard deviation.
- **Misreading negative losses:** Convert one `neg_*` result back to the natural error scale and label it explicitly.
- **Confusing CV and final test:** Draw a data-role diagram and state which decisions are allowed before test evaluation.
- **Treating OOF output as one model:** Label the training subset responsible for each row's prediction, then contrast it with a final refit.

## Scope boundaries / deferred or excluded topics

- Building leakage-safe preprocessing pipelines is covered in [Unit 8: Preprocessing Pipelines](./08_preprocessing_pipelines.md).
- Metric selection and metric-specific interpretation are covered in [Unit 5: Evaluation Metrics](./05_evaluation_metrics.md).
- Tuning-oriented manual parameter comparison and automated search are deferred to [Unit 10: Hyperparameter Tuning](./10_hyperparameter_tuning.md).
- Hyperparameter search, nested cross-validation, grouped or time-series splitters, repeated CV, formal confidence intervals, stacking, and advanced out-of-fold applications are excluded here.
