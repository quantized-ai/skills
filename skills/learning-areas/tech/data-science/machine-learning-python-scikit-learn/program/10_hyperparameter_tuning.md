# Unit 10: Hyperparameter Tuning

## Unit purpose

Tune basic supervised scikit-learn pipelines without contaminating the final test set. Learners first compare a small set of configurations manually, then use `GridSearchCV` and `RandomizedSearchCV`, balancing performance, interpretability, and compute cost.

## Entry requirements

- Build a leakage-safe preprocessing-and-estimator pipeline as covered in [Unit 8](./08_preprocessing_pipelines.md).
- Configure and interpret cross-validation as covered in [Unit 9](./09_cross_validation.md).
- Choose suitable classification or regression metrics.
- Understand estimator hyperparameters versus fitted model attributes.

## Proficiency outcomes

By the end of this unit, the learner can:

- Establish a defensible baseline and manually compare a small number of planned configurations.
- Address nested pipeline parameters with `step__parameter` names.
- Define valid, purposeful search spaces using lists for grids and distributions or sampled lists for randomized search.
- Configure and fit `GridSearchCV` and `RandomizedSearchCV` around a complete pipeline.
- Select scoring and `refit` behavior intentionally, including multi-metric search.
- Inspect `best_params_`, `best_score_`, `best_estimator_`, and `cv_results_` rather than relying only on the winning row.
- Compare exhaustive coverage with randomized-search compute trade-offs.
- Evaluate the selected, refitted workflow exactly once on a held-out final test set.

## Skills covered

- Baseline definition and manual parameter comparison with fixed cross-validation splits.
- Pipeline parameter discovery with `get_params()` and `step__parameter` naming.
- `GridSearchCV` search grids.
- `RandomizedSearchCV`, `n_iter`, and reproducible `random_state`.
- Search-space validity, useful ranges, scale, and interaction awareness.
- Single- and multi-metric `scoring`; explicit `refit` metric selection.
- `cv_results_`: ranks, mean and standard deviation of training and validation-fold scores when requested, timings, and parameter columns.
- Final refit behavior and one-time held-out test evaluation.
- Compute budgeting through candidates × folds, parallelism, and search strategy.

## Supporting knowledge

- Hyperparameters control learning behavior and are chosen outside estimator fitting; learned attributes usually end in `_`.
- Searching a pipeline refits preprocessing separately inside every training fold, maintaining the boundary established in [Unit 9](./09_cross_validation.md).
- A grid evaluates every listed combination. Randomized search evaluates `n_iter` sampled combinations and can explore broader spaces under a fixed budget.
- The search's `best_score_` is a cross-validation estimate used for selection, not final test performance.
- With multiple metrics, `refit` specifies which metric chooses and refits `best_estimator_`.
- More candidates increase selection opportunity and compute cost; they do not guarantee meaningful improvement.
- Repeated test-set checks turn the test set into tuning data and make its reported result optimistically biased.

## Required evidence / work product

Submit a runnable notebook or script containing:

- An untouched train/test split created before search.
- A baseline pipeline and a manual comparison of at least three predeclared configurations using identical CV splits and scoring.
- One `GridSearchCV` and one `RandomizedSearchCV` exercise on complete pipelines.
- Correct nested parameter names and justified search spaces.
- Explicit scoring and `refit` configuration.
- Inspection of `best_params_`, `best_score_`, and `best_estimator_`, plus a compact `cv_results_` table showing parameters, mean validation score, standard deviation, rank, and fit time.
- An estimate of search fits or compute budget and a comparison of the two strategies.
- One final test evaluation of the selected refitted pipeline, clearly separated from search results.

## Practice activities

1. **Manual comparison:** Establish a default baseline, select one influential hyperparameter, and compare at least three values with the same folds. Record performance and variability before choosing.
2. **Pipeline parameter map:** Use `get_params()` to locate tunable preprocessing and estimator parameters. Build a small valid grid using `step__parameter` names and run `GridSearchCV`.
3. **Budgeted random search:** Define a broader space, choose `n_iter` and `random_state`, run `RandomizedSearchCV`, and compare coverage, runtime, and best CV score with the grid.
4. **Multi-metric decision:** Search with two metrics, choose one explicit `refit` metric, then inspect whether the candidates rank differently under the other metric.
5. **Results audit:** Turn `cv_results_` into a sorted table and investigate score variability, train/validation gaps when train scores are available, and expensive candidates.

## Sample check questions

1. If a pipeline step is named `model`, how would you tune its `max_depth` parameter?
2. Why should preprocessing be inside the object passed to `GridSearchCV`?
3. When is randomized search preferable to an exhaustive grid?
4. With 12 candidates and five folds, how many CV fits are required before any optional final refit?
5. In a multi-metric search, what does `refit="roc_auc"` control?
6. Why can `best_score_` not be reported as final test performance?
7. What patterns in `cv_results_` might make the nominal winning candidate a fragile choice?
8. Why is choosing a parameter after comparing repeated test scores a form of test-set tuning?

## Proficiency assessment

### Authentic task

Given a raw tabular supervised-learning dataset and problem brief, build a defensible baseline pipeline, select a tuned workflow under a stated compute budget, and present an auditable recommendation to a teammate.

### Constraints

- Reserve the final test set before comparison and do not use it for candidate selection, search-space revision, or metric choice.
- Manually compare at least three planned configurations before automated search.
- Search the complete pipeline with explicit, reproducible CV.
- Run both a grid of no more than 20 candidates and a randomized search with a justified `n_iter` no greater than 20.
- Use at least two CV metrics and identify one `refit` metric before fitting the searches.
- Estimate candidate × fold cost and keep within the supplied compute budget.
- Do not use nested CV, Bayesian optimization, or third-party tuning libraries.

### Deliverables

- Runnable code and a data-role diagram or concise written split protocol.
- Baseline and manual-comparison results using common folds.
- Search definitions, parameter-name validation, and compute estimates.
- A filtered, readable `cv_results_` comparison for both searches.
- Selected `best_estimator_`, selection rationale, and one final held-out test result.
- A 200–350 word recommendation discussing performance, variability, compute, and remaining uncertainty.

## Rubric

| Criterion | Developing | Proficient | Mastery |
|---|---|---|---|
| Experimental design | Compares inconsistent runs or lacks baseline | Uses baseline, common folds, planned candidates, and untouched test data | Makes an especially clear, auditable selection protocol |
| Pipeline search | Searches disconnected preprocessing/model pieces | Searches complete pipelines with valid nested names | Tunes preprocessing and estimator coherently while tracing leakage boundaries |
| Search configuration | Space, metric, or refit choice is arbitrary | Justifies spaces, scoring, refit, and reproducibility | Shows strong awareness of interactions, scale, and metric trade-offs |
| Results interpretation | Reports only winning parameters | Uses key `cv_results_` fields, variability, rank, and timing | Identifies fragile or inefficient candidates and supports a robust choice |
| Compute and final evaluation | Ignores cost or reuses test data | Budgets fits and evaluates once on held-out test data | Clearly explains grid/random trade-offs and residual uncertainty |

**Pass rule:** Proficient or better in every criterion, with no critical failure.

**Mastery rule:** Mastery in at least four criteria, Proficient or better in the remainder, and no critical failure.

**Critical failures:** using test-set results to choose parameters, alter the search, or select a metric; preprocessing outside the searched pipeline; invalid parameter names that prevent a meaningful search; selecting a model without cross-validated evidence; reporting `best_score_` as test performance; or failing to produce a runnable selected estimator.

## Common gaps & targeted remediation

- **Changing several things in an informal manual comparison:** Use predeclared configurations, identical folds, and a results table before interpreting differences.
- **Invalid nested parameter names:** Inspect `pipeline.get_params().keys()` and copy the exact `step__parameter` key.
- **Arbitrary or enormous spaces:** State a hypothesis for each parameter, reduce irrelevant combinations, and calculate candidates × folds before fitting.
- **Choosing by only the top mean:** Compare standard deviation, rank gaps, fit time, and, when collected, train-versus-validation behavior.
- **Ambiguous multi-metric refit:** Name the deployment priority first, set `refit` to that scorer, and verify the selected rank column.
- **Test-set peeking:** Log every test access; if it influenced a decision, retire that test set and obtain a genuinely untouched one.
- **Unfair grid/random comparison:** Give both searches the same pipeline, folds, scorer, and a documented budget.

## Scope boundaries / deferred or excluded topics

- Pipeline construction and leakage-safe preprocessing belong to [Unit 8: Preprocessing Pipelines](./08_preprocessing_pipelines.md).
- Cross-validation mechanics and score interpretation belong to [Unit 9: Cross-Validation](./09_cross_validation.md).
- This unit is limited to basic supervised scikit-learn workflows. Nested cross-validation, Bayesian or successive-halving optimization, distributed search, third-party tuning frameworks, custom scorers beyond simple course needs, threshold tuning, feature-selection searches, and production retraining systems are explicitly excluded.
