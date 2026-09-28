# Unit 47 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 47.1: Transformed lines and absolute versus squared error

Give this prompt to the tutor as a student request: For data (0,0),(1,1),(2,5), compare candidates y=x and y=x+1 using absolute and squared residual totals.

Then challenge its reasoning using this misconception: Treating the best of two candidates as the least-squares optimum. The [delivery guidance](lesson-1-comparing-fitting-criteria/tutor.md#transformed-lines-and-absolute-versus-squared-error) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: For y=x residuals are 0,0,3: absolute total 3, squared total 9. For y=x+1 they are -1,-1,2: totals 4 and 6. The criteria prefer different candidates; neither comparison proves a global optimum over every line.

### 47.1: Median-median fitting

Give this prompt to the tutor as a student request: Fit a median-median line to (1,1),(2,3),(3,4),(4,4),(5,7),(6,9) using equal groups.

Then challenge its reasoning using this misconception: Drawing the outer-summary line without the intercept adjustment. The [delivery guidance](lesson-1-comparing-fitting-criteria/tutor.md#median-median-fitting) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Group medians are (1.5,2),(3.5,4),(5.5,8). Outer slope=(8-2)/(5.5-1.5)=1.5. Their intercepts at this slope are -.25,-1.25,-.25; average=-7/12. Thus y=1.5x-7/12. The middle point influences the intercept even though the outer points determine slope.

### 47.2: Outliers and influential observations

Give this prompt to the tutor as a student request: Data lie on y=x at x=0,1,2,10. Is (10,10) necessarily a residual outlier because its x is extreme?

Then challenge its reasoning using this misconception: Automatically deleting high-leverage observations or claiming influence from position alone. The [delivery guidance](lesson-2-influence-residual-variation-and-model-interpretation/tutor.md#outliers-and-influential-observations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: It has high leverage relative to the others but zero residual. Deleting it leaves the same exact fitted line, so it is not influential on those fitted coefficients in this dataset. Perturb its y and refit with actual graphical/regression technology to test influence.

### 47.2: Contextual coefficients and unexplained variation

Give this prompt to the tutor as a student request: A distance model is y=5+2x metres, with x in seconds observed from 10 to 20. Also consider data (-1,1),(0,0),(1,1). What can linear summaries miss?

Then challenge its reasoning using this misconception: Equating zero correlation with no relationship, or treating an extrapolated intercept as observed. The [delivery guidance](lesson-2-influence-residual-variation-and-model-interpretation/tutor.md#contextual-coefficients-and-unexplained-variation) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Slope is 2 metres per second; intercept is a prediction of 5 metres at zero seconds, outside the observed interval. The second dataset has zero linear covariance/correlation but exact nonlinear relation y=x². Residual structure can reveal systematic lack of fit; correlation never itself establishes causation.

## Adversarial transfer scenario

**Student response to test:** A point far from the mean input lies exactly on the fitted line. A student labels it a residual outlier and deletes it automatically.

**Required behavior and mathematics:** Expected: residual zero does not support a residual-outlier label. Unusual x may give high leverage; assess change in the fitted model with/without the point and investigate collection context before proposing exclusion.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
