# Unit 7: Underfitting and Overfitting

## Unit purpose

Diagnose underfitting and overfitting from paired training-versus-held-out evidence, then apply a targeted remediation and verify its effect. This unit integrates preparation, metrics, and manual feature transformations on one fixed split. It does not use cross-validation or automated tuning.

## Entry requirements

Learners can:

- fit and configure basic classifiers and regressors from [Unit 2](02_classification.md) and [Unit 3](03_regression.md);
- prepare aligned train and held-out data using [Unit 4](04_data_preparation.md);
- select and calculate a suitable metric using [Unit 5](05_evaluation_metrics.md);
- create leakage-safe manual features and transformations using [Unit 6](06_feature_engineering.md);
- explain model complexity, regularization, and the difference between training and held-out data at an introductory level.

## Proficiency outcomes

By the end of this unit, learners can:

1. define an error or score gap whose direction is unambiguous for the selected metric;
2. distinguish likely underfitting, likely overfitting, and inadequate evidence from paired train/held-out results;
3. compare results with a relevant baseline and inspect subgroup or class behavior before assigning a capacity diagnosis;
4. create a manual learning curve from increasing training-set sizes against one unchanged held-out set when dataset size is a plausible issue;
5. choose remediation that follows the diagnosis and model family;
6. rerun a controlled comparison with identical data, preprocessing, metric, and random state;
7. treat alternative splits as diagnostics rather than fixes, state one-split limitations, and identify when cross-validation is next.

## Skills covered

### Evidence and diagnosis

- Record training and held-out values for the same predeclared metric and model.
- Convert higher-is-better scores to an explicit error where helpful, or clearly define the signed generalization gap.
- Recognize the common patterns:
  - poor training and poor held-out performance: evidence consistent with underfitting;
  - strong training performance and materially worse held-out performance: evidence consistent with overfitting;
  - similar and useful results: no clear capacity problem on this split;
  - unstable, tiny, shifted, or contaminated data: diagnosis is inconclusive until the data issue is addressed.
- Compare against a majority/mean/policy baseline and inspect class, residual, or segment results so “poor” has a concrete reference.

### Manual learning curves

- Choose several nested, representative training subsets—stratified for classification where feasible—and keep one held-out set unchanged.
- Refit every learned preprocessing step on each training subset and apply it to the unchanged held-out set.
- Fit the same model configuration at every size and record both training and held-out metrics.
- Interpret convergence patterns cautiously; do not call cross-validation helpers or average across folds in this unit.

### Targeted remediation

- For underfitting: add defensible signal, use a more expressive model or representation, reduce excessive regularization, or relax an overly restrictive model constraint.
- For overfitting: simplify the model, strengthen regularization, limit tree depth/leaves, remove fragile or noisy features, use more representative training data, or apply supported early stopping.
- For data-limited evidence, improve coverage or repair split/leakage issues; change one major factor at a time and log the expected and observed effect.

### Split discipline

- Keep the held-out set, primary metric, feature definition, and evaluation rows fixed during a remediation comparison.
- Fit preparation and feature-transform state only on training data, then apply unchanged to held-out data.
- If repeated iteration has adapted decisions to a nominal “test” set, relabel it as validation evidence and reserve a new untouched final test set.
- Use changed seeds only to reveal sensitivity and never select the one that looks best.

## Supporting knowledge

- Training performance alone cannot establish generalization, and held-out performance alone cannot distinguish underfitting from overfitting.
- Generalization gaps must be interpreted relative to metric scale, baseline, sample size, data noise, and operational stakes; there is no universal numeric cutoff.
- High variance often accompanies data sensitivity; high bias often accompanies restrictive assumptions. Complexity can reduce underfitting while raising overfitting risk, while more data may help variance but not systematic bias or shift.
- A learning curve based on one split visualizes evidence but does not estimate uncertainty across possible splits.
- Repeatedly making decisions from test results turns the test set into a de facto validation set.

## Required evidence/work product

Submit one reproducible diagnostic notebook or script containing:

- a fixed split, preserved row identifiers, predeclared primary metric, and baseline;
- a results ledger with train score/error, held-out score/error, defined gap, model settings, and preprocessing version;
- evidence-backed classification as likely underfit, likely overfit, acceptable, or inconclusive;
- a manual learning-curve table/plot using at least four nested training sizes against the unchanged held-out set;
- a model-complexity comparison plus relevant class/segment breakdown or residual summary;
- one targeted remediation and a controlled before/after comparison;
- proof that every learned preparation or feature transformation fits only on the relevant training rows;
- a limitations note covering split sensitivity, what alternative splits would and would not establish, held-out adaptation, plausible data alternatives, when cross-validation is the next step, and a concrete next action.

## Practice activities

1. **Classify evidence patterns.** Given train/held-out metric pairs, baselines, sample sizes, and metric directions, label each case underfit, overfit, acceptable, or inconclusive. Defend each label without using a universal gap threshold.
2. **Expose a capacity problem.** Fit deliberately shallow and deep versions of a tree, or strongly and weakly regularized linear models, on one fixed split. Build a results table with training, held-out, baseline, and gap values.
3. **Build a manual learning curve.** Train the same configuration on at least four nested training sizes while keeping the held-out rows fixed. Refit transformations at every size and explain whether more representative data appears promising.
4. **Apply one targeted remediation.** Choose one diagnosed case, change one capacity/regularization/feature factor, and predict the expected movement of train performance, held-out performance, and the gap before running it.

## Sample check questions

1. Why can poor held-out performance alone not distinguish underfitting from overfitting?
2. What train/held-out pattern is consistent with overfitting for an error metric? For a higher-is-better score?
3. Why is there no universal acceptable generalization-gap value?
4. When might adding data help more than increasing regularization?
5. Why must preprocessing be refitted for every training-size point on a manual learning curve?
6. What does it mean if both training and held-out results improve as training size increases but have not converged?
7. Why is choosing the most favorable random split invalid?

## Proficiency assessment

### Authentic task

You inherit a classification or regression model described only as “performing poorly.” Both capacity and training-set size are plausible explanations in the supplied raw training and held-out rows. Establish a baseline, produce paired train/held-out evidence, diagnose the dominant problem, apply one justified remediation, and recommend the next action.

### Constraints

- Use one fixed split, one predeclared primary metric, and identical evaluation rows for the main comparison.
- Fit every cleaning value, encoder, scaler, or feature-selection decision on training data only and apply it unchanged to held-out data.
- Include at least three model-capacity settings and a manual learning curve with at least four nested training sizes against the same unchanged held-out set.
- Change only one major remediation factor in the final before/after comparison.
- Do not use cross-validation helpers, grid/random/Bayesian search, or automated tuning.
- Do not present a different split as the remediation. If extra seeds are used diagnostically, prespecify them and report every result.
- Do not repeatedly optimize against a set still described as the final test set.

### Deliverables

- executable notebook or script;
- train/held-out/baseline results ledger with a clearly defined gap;
- a model-capacity comparison, a manual learning-curve table or plot, and relevant class/segment or residual evidence;
- diagnosis statement that distinguishes evidence from alternative explanations;
- controlled remediation result and 300–500-word recommendation;
- leakage and held-out-adaptation audit plus a next-step plan explaining the limits of alternative splits and when Unit 9 cross-validation is warranted.

## Rubric

| Criterion | Meets proficiency | Demonstrates mastery |
|---|---|---|
| Evidence design | Defines gap direction clearly and uses the same metric, rows, preprocessing contract, random state, and baseline for paired train/held-out evidence, a controlled capacity sequence, and a four-size manual learning curve. | Explains both sequences without overstating one-split evidence. |
| Diagnosis | Correctly identifies underfit, overfit, acceptable, or inconclusive evidence and checks major alternatives. | Calibrates confidence to sample size, metric behavior, segment evidence, and plausible shift/noise. |
| Leakage and split discipline | All learned state is training-only; held-out rows remain fixed and untouched by fitting. | Recognizes held-out adaptation, preserves an audit trail, and proposes an untouched final evaluation when needed. |
| Remediation | Intervention follows the diagnosis and changes one major factor. | Predicts expected metric movements, explains model-family mechanics, and reconciles unexpected results. |
| Interpretation | Uses baseline, train/held-out gap, and supporting evidence without claiming certainty from one split. | Distinguishes capacity, data volume, data quality, and distribution-shift explanations precisely. |
| Reproducibility and recommendation | Results ledger, settings, artifacts, and next action are reproducible and decision-ready; the plan explains alternative-split limits and when cross-validation is warranted. | Another practitioner can rerun the diagnosis and execute a prioritized next-step plan without clarification. |

**Pass rule:** all six criteria meet proficiency and there are no critical failures.

**Mastery rule:** all six criteria meet proficiency, at least five demonstrate mastery, and there are no critical failures.

**Critical failures:** diagnosing from held-out performance without corresponding training evidence; fitting any learned transformation on held-out/combined data; choosing or changing a split to improve the reported result; unreported repeated use of the test set; remediation unrelated to the diagnosis; comparing different metrics or evaluation rows as if directly comparable; use of cross-validation or automated tuning.

## Common gaps & targeted remediation

| Gap | Targeted remediation |
|---|---|
| Looking only at held-out score | Add the identically computed training score and baseline, then define the gap direction. |
| Calling every gap overfitting | Construct three counterexamples with different metric scales, sample sizes, and baselines; qualify the diagnosis. |
| Increasing complexity for an overfit model | Predict how train and held-out results should move, then choose a simplifying or regularizing intervention. |
| Treating a new random split as the fix | Restore the original comparison, report all prespecified seeds as sensitivity evidence, and remediate model/data causes. |
| Leaking through a manual learning curve | Refit every stateful transformation separately on each nested training subset. |
| Repeatedly optimizing on the test set | Rename it validation, stop using it as final evidence, and reserve a new untouched test set. |
| Changing several factors at once | Revert to the baseline and rerun one change so the observed effect is interpretable. |
| Blaming capacity despite segment shift | Compare feature/target distributions and subgroup errors, then classify the result as inconclusive if shift dominates. |

## Scope boundaries / explicit deferred topics

- Metric definitions and decision-based selection belong to [Unit 5: Evaluation Metrics](05_evaluation_metrics.md).
- Manual feature and scaling work belongs to [Unit 6: Feature Engineering](06_feature_engineering.md).
- Reusable, leakage-resistant preprocessing composition is deferred to [Unit 8: Preprocessing Pipelines](08_preprocessing_pipelines.md).
- Fold-based estimates, variability across splits, and formal validation design are deferred to [Unit 9: Cross-Validation](09_cross_validation.md).
- Grid and randomized hyperparameter search are deferred to [Unit 10: Hyperparameter Tuning](10_hyperparameter_tuning.md). Bayesian optimization and automated threshold selection are outside this program.
