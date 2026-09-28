# Tutor: Lesson 44.2: Binomial and geometric distributions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check independent Bernoulli trials and counting combinations; contrast a fixed number of trials with stopping at first success.

Within this unit, revisit [the previous lesson](../lesson-1-discrete-random-variables-and-expected-value/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Binomial/geometric assumptions with direct endpoint handling; defer hypergeometric or Poisson models as required procedures.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Binomial counts:** Check fixed n, two outcomes, constant p and independence before applying the model.

- **Geometric waiting times:** Draw repeated failure branches followed by the first success and derive (1−p)^(k−1)p.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A variable counts successes in ten trials; another counts attempts until first success. Both use p=0.2. Why is one not a renamed version of the other?

**Agent key and discussion:** Binomial support is 0,…,10 and its mean 2. Geometric trial-count support is 1,2,… and mean 5. The experiment's stopping rule and recorded quantity differ even with identical trial probabilities.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Binomial counts

Curriculum reference: **Binomial counts** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is counting successes in sampling without replacement from a small changing population automatically binomial?
- **Diagnostic key:** No; success probability changes and trials are not independent.
- **Worked-example prompt:** For five independent trials with success probability 0.2, find exactly two successes and at least one.
- **Worked model and reasoning:** $P(X=2)=\binom52(0.2)^2(0.8)^3=0.2048$; $P(X\ge1)=1-0.8^5=0.67232$. Mean 1, SD $\sqrt{0.8}$. Fixed n, independent trials, binary outcomes and constant p are all needed.
- **First hint:** Does 'at least one' have an easier complementary event?

#### Learn

- Check fixed n, two outcomes, constant p and independence before applying the model.
- Derive an exact-count term from one success/failure pattern and multiply by its combination count.
- Use complement or cumulative sums for inequalities, then compute mean/SD.
- Treat n=0 and p=0/1 as point masses directly and compare with actual simulation.

#### Practice progression

Diagnose applicability, compute exact and cumulative probabilities, compare moments and actual simulated frequencies, then analyze degenerate endpoints and rejected mechanisms.

**Further variation and generation checks:** Include exact/cumulative events, n=0 and p=0 or 1 interpreted directly; compare actual simulated frequencies without fabricating a run.

#### Misconceptions and responsive feedback

If at least is treated as exactly, enumerate the included k values. If a binomial formula yields invalid support, restate X's allowed integers before calculation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check fixed count, binary classification, constant probability, and independence; distinguish exact counts from cumulative events and preserve endpoint cases.

**Task range to sample:** Include exact/cumulative events, n=0 and p=0 or 1 interpreted directly; compare actual simulated frequencies without fabricating a run.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Geometric waiting times

Curriculum reference: **Geometric waiting times** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For first success on trial four, how many failures occur first?
- **Diagnostic key:** Three; this sets the exponent k−1 in the trial-number convention.
- **Worked-example prompt:** Independent attempts succeed with p=1/4. Let T count the trial of first success. Find P(T=3), P(T>3), and mean.
- **Worked model and reasoning:** $P(T=3)=(3/4)^2(1/4)=9/64$; $P(T>3)=(3/4)^3=27/64$; mean 4. Counting failures instead shifts values by one.
- **First hint:** How many failures occur before success on trial three?

#### Learn

- Draw repeated failure branches followed by the first success and derive (1−p)^(k−1)p.
- Contrast trial number with failures-before-success by a one-unit shift.
- Interpret T>k as k consecutive failures and derive its tail.
- Discuss the unbounded support and finite mean 1/p for p>0, with p=1 deterministic.

#### Practice progression

Move from exact waits to tails and convention changes, then actual repeated simulations, mean interpretation and boundary cases.

**Further variation and generation checks:** Compare trial-count and failures-count conventions, tails and p=1; for p=0 first success never occurs, outside the stated finite-mean model.

#### Misconceptions and responsive feedback

If a fixed-trial binomial count is used, ask what stops the process. If a finite list of waiting times is called exhaustive, explain that any longer failure run remains possible when 0<p<1.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the counting convention, distinguish waiting time from a fixed-trial success count, and interpret tail events and the unbounded range.

**Task range to sample:** Compare trial-count and failures-count conventions, tails and p=1; for p=0 first success never occurs, outside the stated finite-mean model.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
