This is the core "Machine Learning with Python and Scikit Learn" program. It's divided into different units numbered from 1 to 10.

Pre-requisites: basic python programming and pandas knowledge.

Course goals: by the end of the course the student should be able to create basic supervised machine learning projects with scikit-learn (both classification and regression), that involve using the builtin scikit-learn models, with the appropriate data analysis/preparation and the basic ML topics: comparing models, understanding/fixing data (underfitting/overfitting, unbalanced datasets, broken datasets, etc), tuning hyperparamters, evaluations, cross validation,

What this course is NOT: this course does NOT cover or expects the student to do:
- Train unsupervised learning models
- Use models outside of Scikit-learn core package
- Deep learning

### 1. Machine Learning Basics

This unit is very high level, is just conceptual and the student should be able to have a rough mental/conceptual idea of how machine learning works.

The student should be able to:
- Understand how machines learn from data: it's not magic, there's a heavy algorithm creating a "model" from the training data.
- Supervised vs Unsupervised learning
  - understand that they're different and how they differ.
  - Explain briefly examples of scenarios of which one is used over the other
- Understand the basics components of data for Supervised Learning
  - features vs targets
- Understand the process of a basic ML project
  - Load and have a basic understanding of the data dealing with
  - Choose a basic model for the task
  - Train the model
  - Evaluate it

To do this we'll guide them through very basic projects using Scikit Learn and a simple classification project. For example, we can guide them step by step and ask them specific objectives:

- Load a basic datasets like Iris that requires no pre-processing with Python/Pandas.
- Identify the type of task supervised vs unsupervised, regression vs classification.
- Identify features and targets. Describe them. The student should understand that the target is the species of the flower, the features are different measurements. Understand how the number/type of features will affect the project. Have a basic intuition of which features will be useful or not (for example the feature `id` should not used), which ones might be problematic (a feature that might or might not be relevant).
- Do some basic analysis, creating a few plots, analyzing the distribution of the data, trying to uncover some basic patterns or identify early some things that might arise in the process.
- Load and instantiate a particular model.
  - We can ask them explicitly: "Now import DecisionTreeClassifier and instantiate it".
- Do a basic training task
  - We can ask them explicitly to just do the `.fit()` on the data
- Create some predictions
  - Expand the dataframe with a `target predicted` column and identify which samples were incorrectly predicted, connect it back with the previous analysis.
- Do a higher level evaluation:
  - Invoke the `.score` method and have a basic understanding of the outcome.

The important part is that we're NOT asking the student right away to process the data, or split into train/test, etc. We just want them to build a basic intuition of the project: load data, instantiate the model, .fit(), .predict(), .score()

A good project could be use iris, do the basic analysis, and then repeat the same process for different basic models:

```
# Decision tree
from sklearn.tree import DecisionTreeClassifier
decision_tree = DecisionTreeClassifier()
decision_tree.fit(features, target)
y_predict = decision_tree.predict(features)
accuracy = decision_tree.score(features, target)
# analyze y_predict (what was missclassified, understand the implications)

# Logistic regression
from sklearn.linear_model import LogisticRegression
lr = DecisionTreeClassifier()
lr.fit(features, target)
y_predict = lr.predict(features)
accuracy = lr.score(features, target)
# analyze y_predict (same as above)
# compare with decision tree

# RandomForest
from sklearn.ensemble import RandomForestClassifier
...
```

Literally the same repetitive task to undestand the flow of instantiate > fit() > predict > score() > understand the results > compare superficially the models.

### 2. Basics of Classification with Scikit Learn

We don't want to get all the way to advanced metrics. We want to expand a little bit on the classification task. Now that the student has covered the basics, we can keep driving intuition of the previous points + expanding a bit more on classification.

The only big additions to this unit are:
- the introduction of train/test split. The student won't know much about "overfitting/underfitting". Just needs to understand the need to evaluate the model in some data that has not seen before.
- The introduction of some basic hyperparameters. The student won't understand much how the hyperparameters work low level. The goal is for the student to understand that models can be customized with hyperparameters, and each model has their own, and some are more relevant than others.

The student should be able to:
- Load a few more "advanced" classification datasets
- Select the features. In the previous unit `iris` was ready to be used. Here we can pick a dataset that has specific features that don't apply.
- Clean a bit the target. We might introduce a dataset that has a few mislabeled targets, the student has to fix/drop.
- Split the data in train/test with the basic `train_test_split` method.
- Load a few more classification models and instantiate them
- Try a few different parameters
- Train them
- Understand not only accuracy (`.score()`) but also precision and recall
  - The student should be able to explain what they mean
  - A particular project can have a "good" score() but a very low recall, why that happens, what that means. Same for precision.

Here similarly to what we did in the previous one, we can introduce the repetitive process of training several models with different combinations of hyperparameters. So for example for DecisionTree:

```
from sklearn.tree import DecisionTreeClassifier

# Model 1 — simple / strongly regularized
model_1 = DecisionTreeClassifier(
    max_depth=3,
    min_samples_split=20,
    min_samples_leaf=10,
    random_state=42
)

# Model 2 — medium complexity
model_2 = DecisionTreeClassifier(
    max_depth=7,
    min_samples_split=10,
    min_samples_leaf=5,
    random_state=42
)

# Model 3 — more complex / flexible
model_3 = DecisionTreeClassifier(
    max_depth=15,
    min_samples_split=4,
    min_samples_leaf=2,
    random_state=42
)
```

Get the prediction and metrics and compare the outcomes and try to build an understanding of "why".

### 3. Basics of Regression with Scikit Learn

The student has demonstrated basic skills on ML concepts and classification, now has to apply to classification the same level of understanding.
Should be able to load the dataset and understand features/target. Describe target and understand why is a regression task and not classification. Analyze a bit more the target to understand the "distribution" and properties of it.
Understand the most obvious common regression models builtin in Scikit learn.
Then instantiate the model, provide some basic hyperparameters and train it.

Now we introduce a few new things:
- the `predict()` now will give numbers, the student can plot a scatter plot and compare/analyze
- introduce the basic evaluation metrics: error (mean_absolute_error, mean_squared_error) and R2, building a basic intuition of them

### 4. Basics of data preparation for ML

Understand how messy data can affect the process. The student should be able to understand when the data has to be cleaned/reshaped for the ML project.
IMPORTANT: This has to be the understanding of data cleaning/preparation without getting into Feature Engineering.

- Data Cleaning
 - Null/missing values
 - Duplicates
 - Outliers
 - Invalid values (age example)
 - Standarize labels (Yes vs yes vs YES - all lower)

- Manually encode features as numbers with basic replacement (for example, changing Yes/No to 1/0).
- Encoding a single variable, removing null values

The user has to understand the importance of it, identify it, make the right decision (drop vs imputate, reduce dataset, expand, etc) and perform the required actions.


### 5. Evaluation metrics
Here we complete the process with all the required evaluation metrics for classification and regression

- Understand the different evaluation metrics for classification
    - Accuracy
    - Confusion matrix
    - Precision
    - Recall
    - ROC Curves
- Understand metrics for regression
    - MSE
    - RMSE
    - MAE
    - R, R2, etc
These concepts will be use in successive units.

### 6. Feature Engineering

This is NOT using Scikit Learn Pipelines. It's entirely manual using Pandas and sklearn. We might introduce some one hot encoder and helper scikit learn classes and functions, but NOT as pipelines.

The core concept here is for the student to be able to understand the main concepts of feature quality and perform the basic feature engineering tasks according to them. so for example:

- irrelevant noisy features like `id`
- Redundant features like Age and Birth date
- Highly correlated features that can cause multicollinearity: Annual_Salary, Monthly_Salary
- Data leakage
- Categorical features: one hot encoding
- Different scales, identify it, understand that some models are more sensitive than others. Understand and apply standarization and normalization.
- Outliers: understand it and how it affects some models more than others, and how to deal with it
- Low/no variance
- Understanding imbalanced datasets and doing some basic work around it

We can introduce helper classes like: OneHotEncoder, OrdinalEncoder, StandardScaler, MinMaxScaler
But the point is that the student has to invoke them manually to build the `X_train` one by one.

We introduce briefly inbalanced datasets, but not in a lot of detail, just basic intuitions and remediation techniques.
The important part is to connect it to the evaluation metrics, and how good feature engineering can impact the result of the project beyond the model chosen or the data received.

### 7. Underfitting and Overfitting

The student has to be able to identify when a model is underfitting or underfitting.
Combining all the previous topic the student has to identify the possible remediation techniques:

- Changing the data split
- Changing the hyperparameters
- Cleaning data
- Feature engineering
- Use different models

### 8. sklearn Preprocessing & Pipelines
After feeling the pain of manual, leaky data prep before, this unit introduces the professional, robust, and leakage-proof way to do it using sklearn's built-in tools.

The student should be able to understand and apply sklearn Transformer API, Pipeline object, ColumnTransformer and combine everything including the model in a single pipeline to streamline the process.

What's not included:
- Hyperparameter tuning (that's the next unit).
- GridSearchCV or RandomizedSearchCV.
- Creating custom sklearn transformers (this is too advanced).

### 9. Cross-validation

- Understand the more reliable process of using multiple folds and don't depend on the "luck" factor of a single train_test_split.
- Understand that Cross-validation takes a more scientific approach by repeating the experiment and evaluating not only each model’s score, but also aggregate results—such as the mean and variability—across experiments. So we will be looking at the aggregate of the evaluation metric.
- Understand and use K-Fold Cross-Validation. What a "fold" is, How K-Fold works, Typical k values: 5 and 10, etc
- Understand the CV aggregations and score (mean, std)
- Understand StratifiedKFold: the need for it for classification, and why preserving class proportions matters. Especially important with imbalanced datasets
- understand and apply Cross-Validation for Regression
- Understanding other common CV classes: StratifiedShuffleSplit, ShuffleSplit, etc


### 10. Hyperparameter tuning

Using the previous concepts of metrics + pipelines + CV to compare manually how hyperparameters affect models.
Then understand the advantages and how to effectively apply GridSearchCV, RandomizedSearchCV, etc. Understanding how the scoring metrics work applied to these.
