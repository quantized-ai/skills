# Tutor: Lesson 44.4: Expected payoff and risk

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check weighted means and complete outcome models; separate returns, costs and cash availability before comparing decisions.

Within this unit, revisit [the previous lesson](../lesson-3-continuous-distributions-and-normal-probabilities/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Synthetic expected-payoff/risk comparisons under supplied assumptions; defer investment recommendations and invented probabilities.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Net payoff and fair price:** Enumerate mutually exclusive outcomes and distinguish returns, refunds and mandatory costs.

- **Comparing strategies under uncertainty:** Use one common outcome model for every strategy and compute probability-weighted net consequences.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Strategy A guarantees 5. Strategy B pays 100 with probability 0.1 and loses 5 otherwise. Must everyone prefer B because its expectation is 5.5?

**Agent key and discussion:** E(B)=10−4.5=5.5 exceeds 5, but B risks a loss and may violate resources/preferences. Report expected-value preference and downside separately; the model alone cannot establish a universal recommendation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Net payoff and fair price

Curriculum reference: **Net payoff and fair price** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A game charges 4 and returns 10 with probability 1/5, zero otherwise. Is expected net payoff 2?
- **Diagnostic key:** No; expected gross is 2, so expected net is −2.
- **Worked-example prompt:** A game returns 20 units with probability 0.1 and zero otherwise; entry costs 3. Find expected net payoff and fair price.
- **Worked model and reasoning:** Net outcomes 17 and -3 give $0.1(17)+0.9(-3)=-1$. Expected gross return is 2, so fair entry price is 2 under this model. Fairness concerns long-run expectation, not equal outcomes or guaranteed winnings.
- **First hint:** Subtract the entry fee in every outcome.

#### Learn

- Enumerate mutually exclusive outcomes and distinguish returns, refunds and mandatory costs.
- Subtract costs in every affected outcome, then weight net payoffs; verify by expected gross minus fixed fee.
- Solve zero expected net for a fair price and explain that fairness is a long-run model property, not equal winning chance or guaranteed results.

#### Practice progression

Build payoff tables, include multiple payouts/refunds, find fair prices and compare realized variability with expectation.

**Further variation and generation checks:** Include refunds and multiple payouts, clearly distinguish gross/net and use all probabilities; avoid real-money advice.

#### Misconceptions and responsive feedback

If the losing branch omits entry cost, write its cash flow explicitly. If a fair price is called risk-free, compare the possible individual payoffs.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Distinguish gross from net payoff, include costs and all outcome probabilities, and interpret fairness as a long-run model statement.

**Task range to sample:** Include refunds and multiple payouts, clearly distinguish gross/net and use all probabilities; avoid real-money advice.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Comparing strategies under uncertainty

Curriculum reference: **Comparing strategies under uncertainty** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two options have equal expected cost. Must a student be indifferent?
- **Diagnostic key:** No; downside, variability, resources and risk preferences may differ.
- **Worked-example prompt:** An asset suffers loss 1000 with probability 0.02, otherwise zero. Insurance premium is 30, deductible 100 and payment limit 900. Compare expected costs and downside.
- **Worked model and reasoning:** Uninsured expected cost 20, maximum 1000. Insured cost 30 without loss or 130 with loss, expected 32; insurer pays min(900,max(1000-100,0))=900 on a loss. Lower expected cost favors uninsured in this model, but insurance reduces worst-case cost. Break-even loss probability is 30/900=1/30 with these fixed amounts.
- **First hint:** Separate premium from the loss remaining after coverage.

#### Learn

- Use one common outcome model for every strategy and compute probability-weighted net consequences.
- For insurance separate premium, deductible and capped insurer payment before calculating retained loss.
- Compare expectation with worst-case or spread, then vary an uncertain probability/cost to locate a break-even threshold.
- Frame conclusions as conditional model comparisons.

#### Practice progression

Compare synthetic payoff/insurance strategies, analyze a deductible and limit, then sensitivity and resource constraints without turning expected-value preference into personal advice.

**Further variation and generation checks:** Vary probabilities, deductibles, limits and risk preferences with synthetic data; compare the same outcomes and report sensitivity, not a universal personal recommendation.

#### Misconceptions and responsive feedback

If premium is charged only when loss occurs, place it in every scenario. If a coverage limit is mistaken for a cap on total personal loss, compute an above-limit event explicitly.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the same outcome model across choices, apply costs and coverage consistently, and distinguish expected-value preference from a universal recommendation.

**Task range to sample:** Vary probabilities, deductibles, limits and risk preferences with synthetic data; compare the same outcomes and report sensitivity, not a universal personal recommendation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
