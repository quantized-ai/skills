# Tutor: Lesson 43.1: Sample spaces and event algebra

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check finite sets, fractions and area; define one trial before naming events or collecting frequencies.

## Teaching boundaries

Explicit probability models and empirical comparisons; defer inference from limited frequency data and unverified physical uniformity.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Sample spaces and events:** Define one complete trial and mutually exclusive exhaustive elementary outcomes.

- **Theoretical and empirical probability:** Define the event and trial denominator consistently, then compare relative frequency with the theoretical chance model.

- **Geometric probability from area:** Specify the finite positive-area sample region and the uniform-location assumption.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A fair die has six equally likely faces, but the events {1} and {2,3,4,5,6} form two categories. Are the category probabilities each 1/2?

**Agent key and discussion:** No: their probabilities are 1/6 and 5/6. Equal likelihood belongs to elementary faces, not arbitrary event labels; grouping outcomes does not reset weights.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Sample spaces and events

Curriculum reference: **Sample spaces and events** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A spinner has three labeled regions of unequal area. Are label probabilities automatically 1/3?
- **Diagnostic key:** No; the mechanism or assigned weights must establish their probabilities.
- **Worked-example prompt:** A fair six-sided die is rolled. Let A={2,4,6} and B={4,5,6}. Find union, intersection and complement of A.
- **Worked model and reasoning:** Union {2,4,5,6} has probability 4/6; intersection {4,6} has 2/6; complement {1,3,5} has 3/6. Counting equally likely faces is justified by the fair-die assumption.
- **First hint:** List outcomes once before counting an event.

#### Learn

- Define one complete trial and mutually exclusive exhaustive elementary outcomes.
- Represent events as subsets, then build intersection, inclusive union and complement using membership.
- Validate nonnegative assigned weights sum to one.
- Use favorable/total counts only after justifying equal likelihood, otherwise sum the relevant weights.

#### Practice progression

Start with explicit finite equally likely spaces, then unequal weights, compound sets and invalid probability assignments requiring a repair explanation.

**Further variation and generation checks:** Include unequal weights, exhaustive sample spaces and set operations; never infer equal likelihood merely from a finite list.

#### Misconceptions and responsive feedback

If outcomes and events are confused, distinguish a single face from the set of even faces. If overlap is counted twice, list event membership outcome by outcome.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Specify a complete trial and exhaustive outcomes; distinguish outcomes from events and justify equal likelihood before using favorable over total counts.

**Task range to sample:** Include unequal weights, exhaustive sample spaces and set operations; never infer equal likelihood merely from a finite list.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Theoretical and empirical probability

Curriculum reference: **Theoretical and empirical probability** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** After five heads from an independent fair coin, is a tail now more than 1/2 likely?
- **Diagnostic key:** No; the specified next-trial probability remains 1/2.
- **Worked-example prompt:** A fair independent coin gives 8 heads in 10 tosses. Is the next tail more likely, and must 100 tosses be closer to half?
- **Worked model and reasoning:** Next-tail probability remains 1/2 under the model. Relative frequencies tend to stabilize in the long run but need not improve monotonically at each sample size; no short run is owed compensating tails.
- **First hint:** Does independence let previous results change the next probability?

#### Learn

- Define the event and trial denominator consistently, then compare relative frequency with the theoretical chance model.
- Plot cumulative frequency from actual data or a genuine simulation and observe nonmonotone fluctuations.
- Explain stabilization as a long-run statement under independent identically distributed trials, not a short-run quota.

#### Practice progression

Calculate empirical estimates, compare sample sizes and simulated runs, then critique claims of monotone convergence or guaranteed balance.

**Further variation and generation checks:** Compare theoretical and empirical estimates with named trial assumptions; include fluctuation and reject gambler's-fallacy predictions.

#### Misconceptions and responsive feedback

If previous imbalance is used to predict compensation, ask which independence assumption was changed. If an observed discrepancy is declared model failure from a tiny run, compare variability across repeated samples.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use compatible events and denominators; distinguish expected long-run behavior from guarantees about individual runs and reject the gambler’s fallacy.

**Task range to sample:** Compare theoretical and empirical estimates with named trial assumptions; include fluctuation and reject gambler's-fallacy predictions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Geometric probability from area

Curriculum reference: **Geometric probability from area** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A point is uniformly selected in a square; can a partially outside circle's full area be divided by the square area?
- **Diagnostic key:** No; count only their intersection.
- **Worked-example prompt:** Choose a point uniformly from a 12-by-8 rectangle. A radius-2 disk lies fully inside. What is its hit probability?
- **Worked model and reasoning:** Disk area $4\pi$, rectangle area 96, probability $\pi/24$. Uniform selection by area is essential; an arbitrary physical throwing process need not be uniform.
- **First hint:** What does equal chance mean for small regions of equal area?

#### Learn

- Specify the finite positive-area sample region and the uniform-location assumption.
- Identify the event's intersection with that region, decomposing overlap or subtracting holes.
- Compute both areas in compatible squared units and divide.
- Contrast a weighted/nonuniform mechanism where an area ratio alone is insufficient.

#### Practice progression

Use contained shapes, then sectors/composite overlaps and excluded regions; require a justified uniform model and a reasonableness bound.

**Further variation and generation checks:** Include partially overlapping regions, holes and sectors; use area of intersection with the sample region and retain finite positive denominator area.

#### Misconceptions and responsive feedback

If a probability exceeds one, check containment and double counting before arithmetic. If a physical throw is called uniform without evidence, distinguish the mathematical model from its realism.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the sample region and event intersection, compute both areas in compatible units, handle overlap or excluded regions correctly, and distinguish a uniform model from a claim about actual physical selection.

**Task range to sample:** Include partially overlapping regions, holes and sectors; use area of intersection with the sample region and retain finite positive denominator area.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
