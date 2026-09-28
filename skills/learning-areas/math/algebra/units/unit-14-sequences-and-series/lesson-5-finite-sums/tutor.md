# Tutor: Lesson 14.5: Finite sums

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Indexed terms, finite arithmetic and multiplication by a common ratio. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 14.2 curriculum](../lesson-2-arithmetic-sequences/lesson.md) and [tutor](../lesson-2-arithmetic-sequences/tutor.md); [Lesson 14.3 curriculum](../lesson-3-geometric-sequences/lesson.md) and [tutor](../lesson-3-geometric-sequences/tutor.md). Load both files for any selected review.

## Teaching boundaries

Distinguish finite sums from infinite-series convergence conditions. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is 2+6+18+54 invalid as a geometric sum because its ratio exceeds one?

**Private reasoning key:** No. It is a finite sum of four terms, equal to 80. Only an infinite convergence claim would need a restriction such as |r|<1.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Sigma notation and arithmetic sums

Curriculum reference: **Sigma notation and arithmetic sums** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate $\sum_{k=2}^{5}(3k-1)$.

**Agent key:** Terms 5,8,11,14 give 38; there are 5-2+1=4 terms, also $4(5+14)/2=38$.

**Worked example:** Explain arithmetic pairing for 1+2+3+4+5.

**Worked reasoning:** Pair a forward and reverse copy: five pairs each total 6, so twice the sum is 30 and the sum is 15. Odd term counts do not invalidate pairing.


#### Teaching sequence

Expand sigma notation by listing its first and last permitted indices and counting inclusively. Keep an individual term separate from the total. For arithmetic terms, pair a forward and reversed copy so twice the sum equals number of terms times first-plus-last; this works for odd counts too. Confirm the formula against a short direct sum before generalizing.

#### Respond to student reasoning

**First hint:** Are both sigma bounds included?

If the count is upper minus lower, include both endpoints. If n is used as the last term value rather than term count, label each quantity. If odd counts are said to invalidate pairing, use two copies rather than pairing only within one list.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move from short expansions to non-one starting bounds, missing totals and a derivation of the arithmetic sum. Include negative/zero differences.

#### Assessment evidence

Require correct bounds, term count, endpoint values, total and pairing explanation. Do not confuse a_n with the sum through n.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Derivation of finite geometric sums

Curriculum reference: **Derivation of finite geometric sums** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Evaluate the first four terms' sum with first term 3 and ratio 2.

**Agent key:** $3+6+12+24=45$, also $3(1-2^4)/(1-2)=45$. Finite sums permit r>1.

**Worked example:** Derive the geometric finite-sum formula and handle r=1.

**Worked reasoning:** Subtract $rS_N$ from $S_N$ to get $(1-r)S_N=a(1-r^N)$. Divide only if r≠1; at r=1 the sum is Na.


#### Teaching sequence

Write S_N=a+ar+…+ar^(N−1) and align rS_N beneath it. Subtract to cancel interior terms, giving (1−r)S_N=a(1−r^N). Divide only if r≠1; at r=1 all N terms equal a. Finite sums also permit r=0, negative r and |r|≥1; infinite-convergence restrictions do not apply.

#### Respond to student reasoning

**First hint:** Which interior terms cancel after multiplying the sum by r?

If r^N is treated as the last term instead of the boundary after shifting, label exponents in both rows. If r=1 is substituted into the quotient, sum its terms directly. If r>1 is rejected, compute a short finite example.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Derive the identity, calculate with different signs and ratios, then infer a missing first term or count from simple exact data with verified uniqueness.

#### Assessment evidence

Require cancellation derivation, correct N versus N−1 roles, r=1 handling and valid finite-domain use. Keep infinite-series claims out of this lesson's finite-sum evidence.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
