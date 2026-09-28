# Tutor: Lesson 43.3: Conditional probability and independence

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check joint/marginal event counts and probability bounds; draw the conditioned population before fractions.

Within this unit, revisit [the previous lesson](../lesson-2-counting-arrangements-and-selections/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Conditional probability with positive conditioning probability and product-definition independence; defer causal claims from independence tests.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Conditional probability in tables and diagrams:** Draw a complete two-way table with joint cells and margins.

- **Independence and disjointness:** Compare the joint probability with the product of margins as the definition valid even for zero events.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A and B are disjoint with positive probability. A student says this means independent because they never affect the same outcome. Refute via conditional and product reasoning.

**Agent key and discussion:** P(A∩B)=0 but P(A)P(B)>0. Also P(A|B)=0 differs from P(A)>0. Disjointness means knowing B occurred rules A out, so it changes its probability.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Conditional probability in tables and diagrams

Curriculum reference: **Conditional probability in tables and diagrams** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If 8 of 20 club members are seniors and the school has 100 students, what denominator belongs to P(senior|club)?
- **Diagnostic key:** 20, because the conditioning population is the club.
- **Worked-example prompt:** In a group of 50, 20 play chess, 15 play music and 9 do both. Find P(chess|music), P(music|chess), and joint probability.
- **Worked model and reasoning:** Respectively 9/15=3/5, 9/20 and 9/50. The conditioning event determines the denominator; a table has cells 9,11,6,24 under chess/music labels.
- **First hint:** Restrict the population to the event after the conditional bar.

#### Learn

- Draw a complete two-way table with joint cells and margins.
- Restrict to the conditioning row/column before dividing, then distinguish the reversed conditional and the joint proportion.
- Translate the same information into a tree, Venn diagram and area model.
- State that empirical tables estimate population behavior rather than prove it.

#### Practice progression

Read tables, construct them from margins and overlaps, then translate among all four representations and test reversed/undefined conditionals.

**Further variation and generation checks:** Require two-way tables, trees, Venn and area interpretations; include zero-probability conditioning as undefined.

#### Misconceptions and responsive feedback

If the overall total is used for a conditional, physically circle only the conditioned group. If P(B)=0, explain why a conditional ratio is undefined rather than assign zero.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the conditioning event and denominator; retain units or population descriptions and distinguish reversed conditionals and joint probabilities.

**Task range to sample:** Require two-way tables, trees, Venn and area interpretations; include zero-probability conditioning as undefined.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Independence and disjointness

Curriculum reference: **Independence and disjointness** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can two disjoint events with probabilities 0.2 and 0.3 be independent?
- **Diagnostic key:** No; their intersection is zero but the marginal product is 0.06.
- **Worked-example prompt:** For events with P(A)=0.4, P(B)=0.5 and P(A∩B)=0.2, test independence and disjointness.
- **Worked model and reasoning:** Product 0.4·0.5=0.2 matches joint probability, so independent. They are not disjoint because the intersection is positive. Nonzero disjoint events cannot be independent; zero-probability events need the product definition.
- **First hint:** Compare the intersection with both zero and the product of marginals.

#### Learn

- Compare the joint probability with the product of margins as the definition valid even for zero events.
- When conditioning is permitted, show the equivalent unchanged conditional.
- Use a two-way table to compute both sides explicitly.
- Contrast disjointness, independence and the changed branch probabilities of sampling without replacement.

#### Practice progression

Test numerical models and tables, construct independent/dependent examples and include zero-probability/disjoint cases and replacement comparisons.

**Further variation and generation checks:** Include empirical tables, disjoint nonzero events, zero-probability exceptions and without-replacement dependence.

#### Misconceptions and responsive feedback

If independent is taken to mean no overlap, ask whether simultaneous success should be possible under the product rule. If a zero conditional denominator occurs, return to the product definition.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Verify the appropriate equality, identify zero-probability exceptions to conditional expressions, and explain the meaning in everyday language.

**Task range to sample:** Include empirical tables, disjoint nonzero events, zero-probability exceptions and without-replacement dependence.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
