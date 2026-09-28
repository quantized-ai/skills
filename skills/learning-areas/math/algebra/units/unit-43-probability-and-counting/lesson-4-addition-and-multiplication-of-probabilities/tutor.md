# Tutor: Lesson 43.4: Addition and multiplication of probabilities

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check event algebra and conditional probability; represent sequential outcomes as complete disjoint paths.

Within this unit, revisit [the previous lesson](../lesson-3-conditional-probability-and-independence/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

General union/complement and multiplication rules; do not assume independence from separate event names.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Addition and complement rules:** Partition into A-only, B-only, overlap and neither.

- **Multiplication along dependent stages:** Build a probability tree with explicitly conditioned branches and totals after each stage.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A bag has 2 red and 1 blue token. Someone computes two reds without replacement as (2/3)². Repair and compare replacement.

**Agent key and discussion:** Without replacement the second red chance after a red is 1/2, giving 1/3. With replacement and independent mixing it stays 2/3, giving 4/9. The mechanism determines the branch probabilities.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Addition and complement rules

Curriculum reference: **Addition and complement rules** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If P(A)=0.6 and P(B)=0.6, can P(A∪B)=1.2?
- **Diagnostic key:** No; valid events must overlap enough for the union to stay at most one.
- **Worked-example prompt:** If P(A)=0.55, P(B)=0.35, P(A∩B)=0.15, find probability of at least one and neither.
- **Worked model and reasoning:** Union 0.55+0.35-0.15=0.75; neither 0.25. Inclusive or includes the overlap; exclusive or would be 0.60. No independence assumption is needed.
- **First hint:** What is counted twice when the two probabilities are simply added?

#### Learn

- Partition into A-only, B-only, overlap and neither.
- Add each cell once to derive inclusion-exclusion and subtract the union from one for neither.
- Contrast inclusive or with exactly one, which removes the overlap from both marginals.
- Validate supplied probabilities against nonnegative cells.

#### Practice progression

Calculate unions/complements, infer missing intersections and classify impossible supplied models, then compare inclusive/exclusive wording.

**Further variation and generation checks:** Include complements, impossible inconsistent supplied probabilities and inclusive/exclusive wording; enforce probability bounds.

#### Misconceptions and responsive feedback

If independence is introduced to use addition, explain that overlap correction needs no such assumption. If a complement denominator changes, confirm the same sample space is being used.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Subtract overlap exactly once, distinguish inclusive or from exclusive or, and verify results lie between zero and one.

**Task range to sample:** Include complements, impossible inconsistent supplied probabilities and inclusive/exclusive wording; enforce probability bounds.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Multiplication along dependent stages

Curriculum reference: **Multiplication along dependent stages** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** After drawing a red token without replacement, is the next red probability unchanged?
- **Diagnostic key:** Usually not; both available red count and total count change.
- **Worked-example prompt:** A bag has 3 red and 2 blue tokens. Two are drawn without replacement. Find the probability of one of each in any order.
- **Worked model and reasoning:** Red-blue gives $(3/5)(2/4)=3/10$; blue-red gives $(2/5)(3/4)=3/10$. Disjoint paths add to 3/5. Replacing would change branch denominators and the answer.
- **First hint:** Update the bag after the first draw before assigning the second probability.

#### Learn

- Build a probability tree with explicitly conditioned branches and totals after each stage.
- Multiply along a path because each stage is conditional on the preceding history.
- Add only disjoint paths for a combined event.
- Show how independence simplifies the conditional probability only when the mechanism supports it.

#### Practice progression

Compare with/without replacement, exactly/at-least events and different orders, then verify with counting or a complementary calculation.

**Further variation and generation checks:** Include dependent trees, replacement, zero branches and complementary events; multiply within paths and add disjoint paths.

#### Misconceptions and responsive feedback

If path probabilities are added instead of multiplied, ask whether both stages must occur together. If paths overlap, refine them into disjoint complete histories before summing.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Update conditional probabilities at each stage, justify any independence simplification, and connect each path or sum to its event.

**Task range to sample:** Include dependent trees, replacement, zero branches and complementary events; multiply within paths and add disjoint paths.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
