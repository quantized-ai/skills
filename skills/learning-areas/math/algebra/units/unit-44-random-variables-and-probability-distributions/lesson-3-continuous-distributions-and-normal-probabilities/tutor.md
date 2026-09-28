# Tutor: Lesson 44.3: Continuous distributions and normal probabilities

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check interval area, standardization and calculator cumulative versus inverse functions; verify σ>0 before normal calculations.

Within this unit, revisit [the previous lesson](../lesson-2-binomial-and-geometric-distributions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Uniform and normal models with qualified applicability; defer density integration techniques and treating all data as normal.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Density and uniform models:** Draw the density rectangle and normalize height by support length.

- **Normal probabilities and inverse percentiles:** Name μ, positive σ and the event before standardizing.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A uniform variable on [0,0.1] has density 10. Someone rejects it as an impossible probability. Explain normalization and P(X<0.04).

**Agent key and discussion:** Density height 10 has reciprocal-input units, while probability is area. Total area 10·0.1=1; requested area 10·0.04=0.4. A point still has probability zero.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Density and uniform models

Curriculum reference: **Density and uniform models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a uniform density equal 5 without violating probability≤1?
- **Diagnostic key:** Yes; on a support of length 0.2 its total area is one.
- **Worked-example prompt:** X is uniform on [2,7]. Find P(1<X<4), the density height, and P(X=3).
- **Worked model and reasoning:** Intersect with support to get length 2, so probability 2/5. Density is 1/5 and point probability is 0. A single allowed point can have zero probability without being excluded from the support.
- **First hint:** Which requested values can this distribution actually produce?

#### Learn

- Draw the density rectangle and normalize height by support length.
- Intersect a requested event with the support before computing its area.
- Separate density units from probability and explain why open/closed interval endpoints have the same probability in a continuous model.
- Distinguish zero point probability from excluding the point from the support.

#### Practice progression

Compute intervals wholly inside, outside and crossing support, recover uniform endpoints from probabilities and critique density/point-mass misconceptions.

**Further variation and generation checks:** Include density heights above one on short supports and intervals outside/straddling endpoints; distinguish area, height and point mass.

#### Misconceptions and responsive feedback

If density height is used as interval probability, identify the missing width. If an outside interval receives positive probability, trace its actual overlap with support.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use interval length ratios, trim events to the support, and distinguish zero point probability from impossibility.

**Task range to sample:** Include density heights above one on short supports and intervals outside/straddling endpoints; distinguish area, height and point mass.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Normal probabilities and inverse percentiles

Curriculum reference: **Normal probabilities and inverse percentiles** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For mean 20 and SD 3, is x=26 two standard deviations above the mean?
- **Diagnostic key:** Yes: z=(26−20)/3=2.
- **Worked-example prompt:** For a normal model with mean 50 and standard deviation 8, estimate P(X≤58) and the 97.5th percentile.
- **Worked model and reasoning:** Standardized threshold z=1 gives probability about 0.8413. Quantile $50+1.959964(8)\approx65.68$. These numerical normal values presume the model; bounded or skewed data can undermine it.
- **First hint:** Is the problem asking for a cumulative probability or the cutoff producing one?

#### Learn

- Name μ, positive σ and the event before standardizing.
- Sketch the requested tail or interval, then use an actual verified normal table/tool.
- For inverse percentiles identify the cumulative area, recover z and transform back with x=μ+σz.
- Assess whether shape, bounds and context support a normal approximation and state numerical precision.

#### Practice progression

Progress from standardization and one-tail areas to intervals/two tails and inverse cutoffs, including implausible normal-model contexts.

**Further variation and generation checks:** Vary lower/upper/two-sided areas and quantiles; use verified normal tools/tables, state approximation and never confuse variance with standard deviation.

#### Misconceptions and responsive feedback

If an upper tail is entered as a lower-tail quantile, draw the shaded region and complement it. If variance is substituted for σ, compare its squared units.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Configure mean, standard deviation, tails, and cumulative probability correctly; return cutoffs to original units and qualify normal estimates when data are skewed or bounded.

**Task range to sample:** Vary lower/upper/two-sided areas and quantiles; use verified normal tools/tables, state approximation and never confuse variance with standard deviation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Work backward from a shaded tail

For a normal model with mean 50 and standard deviation 8, an upper-tail probability of 0.025 means lower-tail cumulative probability 0.975. Using the standard normal quantile $z\approx1.959964$ gives $x=50+8z\approx65.68$. Entering 0.025 as a lower-tail quantile instead gives $34.32$, the opposite tail. The sign and location relative to the mean provide a useful check before accepting calculator output.

If the learner reports 34.32, ask which side of the mean contains the highest 2.5%. Then supply the complement $1-0.025$; finally write $x=50+8z$ and leave substitution. Fade with a lower-tail target and only a shaded sketch, then require the sketch and tool setup independently. A supplied quantile can support arithmetic practice, but numerical-tool evidence requires an actual table lookup or tool result. The calculation is conditional on the normal model; it does not establish suitability for heavily skewed or tightly bounded data.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
