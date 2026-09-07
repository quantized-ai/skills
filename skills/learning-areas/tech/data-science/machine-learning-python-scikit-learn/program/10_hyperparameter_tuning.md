# Unit 10: Hyperparameter Tuning

**Target:** Compare planned settings manually, then use `GridSearchCV` and `RandomizedSearchCV` on complete pipelines to select by cross-validation and evaluate the chosen workflow once on held-out test data.

## Proficiency criteria

- Distinguish hyperparameters from learned attributes and discover valid nested names with `get_params()`.
- Establish a baseline and manually compare a small predeclared set of settings on identical CV folds and one chosen scoring metric.
- Address nested settings with `step__parameter` and define purposeful values or distributions.
- Configure both `GridSearchCV` and `RandomizedSearchCV`, including `n_iter` and `random_state` for randomized search.
- Inspect `best_params_`, `best_score_`, `best_estimator_`, and useful `cv_results_` fields such as parameters, validation mean, standard deviation, and rank.
- Search the complete pipeline so preprocessing fits inside each CV fold; select without test results, then evaluate the refitted choice once on the reserved final test set.

## Supporting knowledge

- A grid evaluates every listed combination; randomized search samples `n_iter` combinations and can cover a broader space with fewer trials.
- `best_score_` is cross-validation selection evidence, not final-test performance.
- By default, search refits the best configuration on all development data for later prediction.

## Practice

1. Compare a baseline with a small predeclared set of one-parameter changes on common folds.
2. Inspect pipeline parameter keys, define a reasoned grid, choose a scorer, and run `GridSearchCV`.
3. Run a seeded `RandomizedSearchCV` over a broader space and compare its sampled coverage and results with the grid.

## Assessment

**Task:** Given raw supervised data, build a baseline pipeline, compare planned settings, run both search methods, and recommend one workflow.

**Evidence:**

- a reserved test split plus baseline and manual-comparison results from common CV folds;
- justified parameter names, spaces, scorer, and reproducibility settings for both complete-pipeline searches;
- inspected `cv_results_` and `best_*` attributes, the selected refitted pipeline, and one final held-out result.

**Critical failures:** test results influence settings, search space, scorer, or selection; preprocessing occurs outside the searched pipeline; invalid parameter names prevent a meaningful run; selection lacks CV evidence or `best_score_` is reported as test performance; or the final test is evaluated repeatedly.

## Check questions

1. If a pipeline step is named `model`, how do you tune its `max_depth`?
2. When is randomized search preferable to an exhaustive grid?
3. Why is `best_score_` not final unbiased performance evidence?

## Boundaries

**Deferred/excluded:** Pipeline and CV mechanics belong to [Unit 8](./08_preprocessing_pipelines.md) and [Unit 9](./09_cross_validation.md); only manual comparison, `GridSearchCV`, and `RandomizedSearchCV` are in scope.
