# Unit 1: Machine Learning Basics

**Target:** Explain the supervised-learning workflow and complete a first classification lifecycle from basic EDA through fit, predict, score, and result inspection.

## Proficiency criteria

- Distinguish supervised from unsupervised scenarios and classification from regression.
- Identify samples, features, target, X/y shapes, and a non-predictive ID-like column.
- Inspect schema, missingness, target distribution, and simple feature/target plots before modeling.
- Run the same fit → predict → score lifecycle with a tree, linear classifier, and ensemble.
- Produce actual/predicted columns, inspect mismatches, and connect them to EDA when reasoning about useful or problematic features.
- Predict one new sample with the trained feature count/order.
- Treat same-row scores and comparisons as training mechanics only, never evidence of generalization.

## Supporting knowledge

- Supervised learning has known targets; unsupervised learning seeks structure without them.
- Algorithms use training data to create fitted model state; predict uses that state.
- X is two-dimensional; y supplies one target per aligned row; one sample is still a 2-D batch.
- Classification predicts categories; regression predicts numeric quantities.
- Numeric IDs identify records but need not describe the phenomenon.
- A mismatch suggests a case to inspect, not proof of a bad label.

## Practice

1. Classify learning scenarios; inspect a clean labeled dataset and justify excluding an ID-like feature.
2. Run one classifier lifecycle, add actual/predicted columns, inspect mismatch patterns against the EDA, and predict a new row.
3. Repeat with two other classifier families and compare score/mismatch outputs without changing the data.

## Assessment

**Task:** Use load_iris; add then exclude specimen_id; use all four measurements; fit/predict/score the complete data with DecisionTreeClassifier(random_state=42), LogisticRegression(max_iter=1000), and RandomForestClassifier(n_estimators=100, random_state=42).

**Evidence:** runnable code; EDA/target distribution and ID decision; per-model parameters, score, actual/predicted output, mismatch count/examples (or none); EDA-linked feature reasoning; one schema-correct new prediction.

**Critical failures:** specimen_id enters X; X/y or new-row schema is wrong; any required lifecycle is missing; same-data results are presented as valid evaluation or a generalizable winner.

## Check questions

1. What distinguishes supervised from unsupervised learning?
2. Why can a numeric ID be a poor feature?
3. What can mismatch inspection and score(X, y) establish in this unit?

## Boundaries

**Deferred/excluded:** holdout evaluation in [Unit 2](02_classification.md) and [Unit 3](03_regression.md); preparation and full metrics in [Unit 4](04_data_preparation.md) and [Unit 5](05_evaluation_metrics.md); unsupervised model implementation.
