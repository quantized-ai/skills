# Tutor: Lesson 35.1: Geometric models and measurement

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check elementary shapes, unit conversion and scale drawings; if relevant measurements are missing, identify them before proposing a numerical result.

## Teaching boundaries

Treat physical idealizations as assumptions; defer empirical claims about an actual object without measurements.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Idealization and representation:** Translate the practical question into a target quantity before choosing a shape.

- **Precision and model evaluation:** Convert readings into intervals before applying monotone positive-length formulas.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A cylindrical model uses a container's outer radius to predict capacity and overestimates measured water volume. Suggest one testable repair rather than adjusting the answer arbitrarily.

**Agent key and discussion:** Measure internal radius, wall/base thickness and actual fill depth; use the interior cavity. Taper or rounded corners are alternative explicit model revisions. One discrepancy alone does not identify which is correct.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Idealization and representation

Curriculum reference: **Idealization and representation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A bottle's outside diameter is 10 cm. Can its liquid volume be known from that alone?
- **Diagnostic key:** No: internal shape, wall thickness, height and fill level are unspecified.
- **Worked-example prompt:** Model a cylindrical water container with internal radius 0.4 m and fill depth 1.2 m. Estimate capacity and name assumptions.
- **Worked model and reasoning:** Water volume $\pi(0.4)^2(1.2)=0.192\pi$ m³, about 603 L. Assumes straight circular internal walls, level fill and negligible fittings; exterior dimensions would need wall-thickness adjustment.
- **First hint:** Are the given measurements inside dimensions or outside dimensions?

#### Learn

- Translate the practical question into a target quantity before choosing a shape.
- Draw a cross-section or scale diagram with internal versus external dimensions.
- State which curved, tapered or irregular features are being idealized.
- Calculate a prediction, then identify a measurement that would test that particular assumption.

#### Practice progression

Start with exact ideal shapes, add scale drawings and neglected features, then propose and compare two defensible models of a composite object.

**Further variation and generation checks:** Vary scale drawings, composite shapes and ignored features; require labeled dimensions and justification for the idealization.

#### Misconceptions and responsive feedback

If convenience is treated as evidence, ask which physical feature makes a cylinder reasonable. If a scale factor applies to area without squaring, compare two corresponding lengths first.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify shape selection, label all necessary dimensions, connect diagram quantities to physical quantities, and avoid treating a convenient idealization as exact without evidence.

**Task range to sample:** Vary scale drawings, composite shapes and ignored features; require labeled dimensions and justification for the idealization.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Precision and model evaluation

Curriculum reference: **Precision and model evaluation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A measured length rounded to nearest 0.1 m is 3.2 m. Is 3.2 exact?
- **Diagnostic key:** No; under the stated rounding convention the true value lies near 3.15 to 3.25 m.
- **Worked-example prompt:** A square panel side is reported as 2.0 m to the nearest 0.1 m. Give the corresponding possible area range.
- **Worked model and reasoning:** With conventional half-up rounding, $1.95\le s<2.05$ m, so $3.8025\le A<4.2025$ m². About 4.0 m² is an estimate, not an exact area; nonlinear formulas amplify measurement variation.
- **First hint:** Convert a rounded reading into a length interval before squaring.

#### Learn

- Convert readings into intervals before applying monotone positive-length formulas.
- Keep intermediate precision and distinguish exact geometric identities from approximate inputs.
- Compare the predicted interval with observed measurements or physical bounds.
- Revise one concrete assumption and explain whether it increases or decreases the prediction.

#### Practice progression

Move from one measurement interval to area/volume propagation, then inconsistent predictions that require an explicit model revision rather than arbitrary rounding.

**Further variation and generation checks:** Specify the rounding convention, propagate positive interval bounds and compare predictions with measurements; ask what concrete assumption should be revised.

#### Misconceptions and responsive feedback

If too many calculator digits are reported, ask which measured digit supports them. If disagreement is blamed on rounding without a bound, compute the largest discrepancy rounding alone could explain.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Retain useful intermediate precision, distinguish exact and approximate conclusions, identify a concrete source of discrepancy, and explain how a revision affects the result.

**Task range to sample:** Specify the rounding convention, propagate positive interval bounds and compare predictions with measurements; ask what concrete assumption should be revised.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
