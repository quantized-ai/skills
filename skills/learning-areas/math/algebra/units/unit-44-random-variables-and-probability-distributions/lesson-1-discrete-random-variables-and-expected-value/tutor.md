# Tutor: Lesson 44.1: Discrete random variables and expected value

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check probability weights, expected counts and graph labels; distinguish elementary outcomes from values of a random variable.

## Teaching boundaries

Finite distributions and actual empirical/simulated data; defer continuous density formulas until lesson 3.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Constructing probability distributions:** Define the numerical random variable separately from the elementary outcome.

- **Expected value and variability:** Validate probabilities before forming weighted products.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** X is −1 or 3 with equal probability. A student says expected value 1 is impossible because 1 never occurs. Explain both statements accurately.

**Agent key and discussion:** E(X)=1 is correct as a long-run weighted mean; it is not a possible individual realization. Expected value and support answer different questions. Variance is 4 and SD 2, preserving the distinction between squared and original units.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Constructing probability distributions

Curriculum reference: **Constructing probability distributions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two elementary outcomes give the same value X=1. Should the probability plot contain two separate masses at 1?
- **Diagnostic key:** No; combine their probabilities at that value.
- **Worked-example prompt:** Toss two independent fair coins and let X be the number of heads. Construct and describe its probability plot.
- **Worked model and reasoning:** Outcomes TT,TH,HT,HH have probability 1/4 each. X=0,1,2 have probabilities 1/4,1/2,1/4; aggregate TH and HT. Plot separate masses with count on the horizontal axis and probability vertically, not a continuous density curve.
- **First hint:** Can several elementary outcomes produce the same random-variable value?

#### Learn

- Define the numerical random variable separately from the elementary outcome.
- Enumerate or observe outcomes, group equal X values and normalize the resulting masses.
- Label value and probability axes and plot discrete masses without implying continuous area between them.
- For empirical/simulated versions preserve sample size and label probabilities as estimates.

#### Practice progression

Construct theoretical distributions, then empirical and actually simulated frequency distributions; compare normalization, support and plot interpretation.

**Further variation and generation checks:** Include theoretical, empirical and simulated distributions; reject negative/non-normalized probabilities and distinguish estimates from exact models.

#### Misconceptions and responsive feedback

If every distinct X value is assumed equally likely, count its elementary preimages or assigned weights. If a simulation is described but not run, do not claim empirical evidence.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Account for all outcomes, combine repeated values, and label value and probability axes while distinguishing empirical estimates from theoretical probabilities.

**Task range to sample:** Include theoretical, empirical and simulated distributions; reject negative/non-normalized probabilities and distinguish estimates from exact models.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Expected value and variability

Curriculum reference: **Expected value and variability** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Must an expected value be an outcome the variable can actually attain?
- **Diagnostic key:** No; a fair 0-or-1 variable has mean 1/2.
- **Worked-example prompt:** X takes values -2 and 4 with probabilities 1/3 and 2/3. Find mean, variance and standard deviation.
- **Worked model and reasoning:** Mean $(-2)/3+8/3=2$; variance $16/3+8/3=8$; standard deviation $2\sqrt2$. Mean 2 is not a possible outcome. Variance uses squared units; mean and standard deviation use original units.
- **First hint:** What would happen if signed deviations were averaged without squaring?

#### Learn

- Validate probabilities before forming weighted products.
- Compute μ, then list each deviation, squared deviation and probability weight.
- Compare the centered variance with E(X²)−μ² as an independent check and take the nonnegative square root.
- Explain long-run average versus most-likely value and preserve original versus squared units.

#### Practice progression

Use two-value distributions, then larger finite supports and repeated-value aggregation, calculate all three summaries and interpret unattainable means and units.

**Further variation and generation checks:** Use finite distributions with repeated outcomes already aggregated, nonattainable means and unit interpretation; independently check second-moment and centered formulas.

#### Misconceptions and responsive feedback

If deviations are averaged without squaring, they cancel around the mean. If probabilities are ignored, contrast unequal weights on the same values.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use normalized probabilities and all values, distinguish a mean from a most likely outcome, and report mean and standard deviation in original units and variance in squared units.

**Task range to sample:** Use finite distributions with repeated outcomes already aggregated, nonattainable means and unit interpretation; independently check second-moment and centered formulas.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Aggregate first, then compute spread

For two fair independent coins and $X=$ number of heads, the distribution is $(0,1/4),(1,1/2),(2,1/4)$. Mean is $1$ and variance is $(0-1)^2/4+(1-1)^2/2+(2-1)^2/4=1/2$; standard deviation is $1/\sqrt2$. The second-moment check gives $E(X^2)=3/2$, hence $3/2-1^2=1/2$. A sample histogram will usually differ from these exact masses even when generated correctly.

If the learner uses equal weight $1/3$ for the three values, ask which value has two elementary preimages. Then supply the HH/HT/TH/TT grouping; finally give the mass at 1 and leave normalization and moments. If the distribution is right but variance is zero, inspect whether deviations were squared. Fade with the probability table supplied but the centered-deviation column blank, then require a new distribution's construction and both moment checks independently. Keep theoretical, observed, and simulated provenance explicit.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
