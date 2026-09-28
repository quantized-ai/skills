# Tutor: Lesson 47.2 — Influence, residual variation, and model interpretation

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check slope units and scatter coordinates; an x in years and y in kilograms gives kilograms/year. Review the fitted-line calculation if controlled refits cannot be interpreted.

Review [47.1: Comparing fitting criteria](../lesson-1-comparing-fitting-criteria/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep the named least-squares/absolute-error/median-median models distinct. Do not require multivariable regression or infer causality from fit quality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A student deletes a high-leverage point on an exact line because “every far x is a bad outlier.” Evaluate that justification.

**Agent-only reasoning:** An extreme x can have zero residual and leave the fitted line unchanged when removed. Inspect actual fit changes and data provenance; leverage, residual outlier and influence are separate.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Outliers and influential observations

Curriculum reference: **Outliers and influential observations** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Can a high-leverage point have residual zero?

**Agent-only key:** Yes; unusual input position and deviation from the fitted line are separate. A point far along an exact line has zero residual.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Data lie on y=x at x=0,1,2,10. Is (10,10) necessarily a residual outlier because its x is extreme?

**Agent-only worked reasoning:** It has high leverage relative to the others but zero residual. Deleting it leaves the same exact fitted line, so it is not influential on those fitted coefficients in this dataset. Perturb its y and refit with actual graphical/regression technology to test influence.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build three views: scatter plot location, residual plot, and coefficient/prediction change after controlled removal or perturbation.
2. Keep all other observations fixed so a changed fit has an interpretable cause.
3. Investigate whether a suspected error is verified before deciding how to treat a point.

### Practice progression

Identify a residual outlier near the middle x and a high-leverage on-line point; next plot/refit the worked dataset after moving only its far point vertically; finally compare full/omitted fits and justify retention, correction or exclusion using data provenance.

**Construction and verification controls:** Generate base data plus one controlled input/output perturbation; compute full and omitted fits, record plots and avoid invented tool results.

### Responsive hints and misconceptions

**First conceptual cue:** Compare unusual x, unusual residual and change in the fitted model separately.

If position alone is called influence, ask for before/after fitted coefficients. If deletion is proposed because fit improves, ask whether the observation is erroneous or merely inconvenient.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use and inspect graphical technology to compare coefficients and predictions under controlled data changes.
- Distinguish the three notions.
- Justify data handling rather than automatically removing inconvenient observations.

**Required case selection:** Leverage, outlier and influence distinctions, controlled dynamic comparison, coefficient/prediction changes and justified handling.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Contextual coefficients and unexplained variation

Curriculum reference: **Contextual coefficients and unexplained variation** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** For y-hat=12+3x with x in hours and y in kilometres, what units does slope have?

**Agent-only key:** Kilometres per hour; the intercept is kilometres at zero hours, whether or not zero is in the meaningful observed range.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A distance model is y=5+2x metres, with x in seconds observed from 10 to 20. Also consider data (-1,1),(0,0),(1,1). What can linear summaries miss?

**Agent-only worked reasoning:** Slope is 2 metres per second; intercept is a prediction of 5 metres at zero seconds, outside the observed interval. The second dataset has zero linear covariance/correlation but exact nonlinear relation y=x². Residual structure can reveal systematic lack of fit; correlation never itself establishes causation.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Attach units to each coefficient and separate the domain of a formula from the observed/meaningful input range.
2. Plot residuals against x to detect curvature and changing spread.
3. Use symmetric quadratic data to show zero linear correlation can coexist with a deterministic nonlinear relationship.

### Practice progression

Interpret an in-range and extrapolated intercept; next compare equal-correlation datasets with different residual patterns; finally write a report combining coefficient meaning, unexplained spread and noncausal limitations.

**Construction and verification controls:** Supply units and observed range, plus curved residual counterexamples; preserve nonzero variation when computing correlation.

### Responsive hints and misconceptions

**First conceptual cue:** What shape remains after subtracting the fitted line?

If r=.8 is called a slope of.8, ask which measure has units. If zero r is called no relationship, test the y=x² counterexample and name the restriction to linear association.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use contextual units and domain restrictions, inspect nonlinear patterns.
- Avoid equating zero correlation with no relationship or strong correlation with causation.

**Required case selection:** Units, intercept meaning, residual spread/patterns, nonlinear relationships and causal/extrapolation limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Quantify influence while keeping the other points fixed

Start with $(0,0),(1,1),(2,2),(10,10)$, whose exact fitted line is $y=x$. Change only the final response to 15. For these changed data, $S_{xx}=251/4$ and $S_{xy}=386/4$, so the least-squares line is $\hat y=-125/251+(386/251)x$. Removing the far point recovers $y=x$. At $x=2$ the changed-data prediction is $647/251\approx2.578$, compared with 2 after removal. The far point's residual in the changed full fit is only $30/251\approx0.120$: a small fitted residual can coexist with substantial coefficient influence because the fit has moved toward the point.

If a learner concludes “small residual means no influence,” ask what the slope was before removal. Then supply the two fitted coefficients; finally compare one prediction, leaving the influence interpretation. Fade by providing only data and requesting an actual plotted full/omitted refit. The algebra above is a checked reference calculation, not a record of a learner's graphical-tool action. Neither influence nor improved fit alone justifies deleting a valid observation; inspect provenance and report sensitivity.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
