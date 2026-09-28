# Tutor: Lesson 43.5: Fair allocation and probability-based choices

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check tables/conditionals and geometric-series intuition for repeat-until-accepted; define fairness or decision costs explicitly.

Within this unit, revisit [the previous lesson](../lesson-4-addition-and-multiplication-of-probabilities/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Mathematical allocation and supplied synthetic decision models; defer personal medical/financial advice and unspecified utility judgments.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Fair random selection:** Declare the fairness target, choose a genuinely uniform primitive and assign equal accepted outcome counts to each participant.

- **Base rates and decision consequences:** Choose a convenient population size and split true-state groups using the base rate.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Uniform digits 0–9 are mapped by remainder modulo 3 to three people. Count allocations and design a terminating fair repair.

**Agent key and discussion:** Remainders have counts 4,3,3. Reject digit 9 and repeat independently; accepted 0–8 allocate 3 outcomes each. Acceptance probability 0.9 gives almost-sure termination, not a guaranteed finite cap.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Fair random selection

Curriculum reference: **Fair random selection** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can ten equally likely digits be mapped to three people with equal counts and no rejection?
- **Diagnostic key:** No; ten is not divisible by three.
- **Worked-example prompt:** Use independent uniform decimal digits to select fairly among four people. Is digit modulo four fair? Design a fair method.
- **Worked model and reasoning:** Modulo four on 0–9 gives counts 3,3,2,2 and is biased. Accept 0–7, map pairs {0,4},{1,5},{2,6},{3,7}, and reject 8,9 then repeat. Acceptance 0.8 each trial gives eventual termination probability one and each person's probability 1/4.
- **First hint:** Count how many accepted digit outcomes map to each person.

#### Learn

- Declare the fairness target, choose a genuinely uniform primitive and assign equal accepted outcome counts to each participant.
- State exactly which outcomes are rejected and how independent repetition works.
- Calculate acceptance probability and show the probability of no acceptance after k attempts tends to zero.
- Distinguish almost-sure termination from a fixed attempt guarantee.

#### Practice progression

Design equal selection, repair biased maps, then proportional allocation and rejection processes with complete probability and termination justification.

**Further variation and generation checks:** Include equal/proportional allocation and rejection schemes; state independent uniform draws and distinguish almost-sure termination from a finite bound.

#### Misconceptions and responsive feedback

If modulo mapping is asserted fair, count each person's preimages. If rejection might loop forever under correlated draws, state the independence/positive-acceptance mechanism required by the argument.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Describe a complete procedure that terminates with probability one under its chance model and calculate the resulting probabilities, detecting biased mappings.

**Task range to sample:** Include equal/proportional allocation and rejection schemes; state independent uniform draws and distinguish almost-sure termination from a finite bound.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Base rates and decision consequences

Curriculum reference: **Base rates and decision consequences** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does a detector's 90% detection rate mean 90% of its flags are true defects?
- **Diagnostic key:** No; that posterior also depends on prevalence and false positives.
- **Worked-example prompt:** Among 10000 items, 2% are defective. A flag catches 90% of defects and flags 5% of sound items. What fraction of flagged items are defective?
- **Worked model and reasoning:** Defective flagged 180; sound flagged 490; total 670, so 180/670=18/67≈26.87%. This is not the 90% detection rate. With stated inspection/replacement costs, compare all weighted outcomes under the same population.
- **First hint:** Build counts for defects and sound items separately before restricting to flagged items.

#### Learn

- Choose a convenient population size and split true-state groups using the base rate.
- Apply detection/false-positive rates within their own groups, then restrict to all flagged outcomes for the posterior.
- Attach explicit costs to every state-action combination and compute comparable weighted consequences.
- Vary uncertain rates to identify when a preferred action changes.

#### Practice progression

Build tables from rates, recover reversed conditionals, compare specified decisions and analyze a base-rate or cost sensitivity change.

**Further variation and generation checks:** Use nonmedical screening contexts, vary base rates and explicit costs, and require sensitivity rather than a universal decision recommendation.

#### Misconceptions and responsive feedback

If the detection denominator is reused for a flag posterior, rebuild the table and circle the flag column. If a low posterior is called detector uselessness, compare costs and available actions rather than one number.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the correct conditioning population, include all outcome cases, and state how uncertain rates or costs could change the preferred decision.

**Task range to sample:** Use nonmedical screening contexts, vary base rates and explicit costs, and require sensitivity rather than a universal decision recommendation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
