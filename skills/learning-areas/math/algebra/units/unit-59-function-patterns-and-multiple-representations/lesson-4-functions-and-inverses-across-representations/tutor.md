# Tutor: Lesson 59.4 — Functions and inverses across representations

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check domain/range and one-to-one behavior. If two inputs share an output, explain why reversing the pairs fails to define an inverse function.

Review [59.1: Finite differences and model reconstruction](../lesson-1-finite-differences-and-model-reconstruction/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Use the stated low-degree/family assumptions. Do not infer global identity, derivatives, complete roots or inverse functions from finite samples alone.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** The inverse of x² on [0,3] is assigned domain [0,3]. Correct the exchanged sets.

**Agent-only reasoning:** The original range is [0,9], which becomes the inverse domain;√x maps [0,9] to [0,3]. Domain and range exchange in full, including endpoints.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Comparing inverse attributes

Curriculum reference: **Comparing inverse attributes** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Does f(x)=x² on [−2,2] have an inverse function?

**Agent-only key:** No; f(−1)=f(1)=1, so one-to-one fails on that domain.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** For f(x)=x² on [0,3], find its inverse domain, range, extrema and a reversed pair.

**Agent-only worked reasoning:** f is one-to-one increasing on [0,3], range [0,9]; inverse √x has domain [0,9], range [0,3]. Its minimum is 0 at input 0 and maximum 3 at input 9. The pair (2,4) reverses to (4,2). Without restricting the original real domain, x² has no inverse function.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Check injectivity on the entire specified domain before reversing anything.
2. Exchange full domain/range with endpoint membership, reflect corresponding pairs across y=x and reevaluate intercepts/extrema in the inverse coordinates.
3. Explain why an attained maximum output becomes an allowed inverse input, not automatically the same type of extremum statement.

### Practice progression

Restrict a quadratic to one monotone branch; compare increasing and decreasing examples with open/closed endpoints; then analyze extrema and intercepts explicitly in both formulas, tables and full graphs.

**Construction and verification controls:** Include increasing/decreasing restricted functions, excluded endpoints and attained/unattained extremes; require fresh extremum analysis rather than name swapping.

### Responsive hints and misconceptions

**First conceptual cue:** Which values can enter the process when it runs backward?

If only formulas are swapped while domains stay fixed, write the mapping arrows D→R and R→D. If an extremum name is copied, identify the inverse's input and output coordinates and compare all allowed outputs.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Establish the domain restriction supporting an inverse, exchange complete sets including endpoints and exclusions.
- Analyze each claimed extremum rather than transfer its name automatically.

**Required case selection:** One-to-one restriction, exchanged sets/intercepts, reflection and attained extrema across representations.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Tabular and graphical inverse verification

Curriculum reference: **Tabular and graphical inverse verification** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A complete finite table has pairs (1,2),(2,2). Does reversing them produce a function?

**Agent-only key:** No; reversed input 2 would have two outputs 1 and 2.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A complete finite function is {(1,4),(2,7),(3,9)}. Is {(4,1),(7,2)} its inverse? What if those are only sampled rows?

**Agent-only worked reasoning:** No for complete finite functions: the reversed pair (9,3) is missing. The full inverse is {(4,1),(7,2),(9,3)}. For sampled underlying functions these rows alone cannot establish the whole inverse; specify domains and check both composition directions or full graph relation.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. First distinguish complete finite data from samples of an underlying continuous function.
2. For finite functions check uniqueness and every reversed pair in both directions.
3. For full graphs check reflection together with entire domains; for sampled graphs/tables explain what can refute but not prove a global inverse claim.

### Practice progression

Reverse a complete one-to-one table; diagnose duplicate outputs and missing reversed pairs; then compare a sampled continuous table with a formula-based inverse proof, naming exactly which unshown inputs remain unsupported by samples alone.

**Construction and verification controls:** Generate complete finite one-to-one tables, non-injective countercases, and separately labeled continuous samples/graphs; preserve all omissions and endpoints.

### Responsive hints and misconceptions

**First conceptual cue:** Is the table complete or a sample, and is every pair reversed?

If one matching pair is deemed enough, compare the full declared domain. If a finite inverse is rejected merely for being discontinuous, use the finite mapping definition rather than continuous graph expectations.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Check both directions and all listed pairs for finite functions.
- Compare full specified graph domains.
- Distinguish exact complete evidence from a finite sample of an underlying continuous function.

**Required case selection:** Both directions, all finite pairs, complete reflected graph and sample-evidence limits.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Contextual reversals and compositions

Curriculum reference: **Contextual reversals and compositions** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If distance d(t)=4t maps seconds to metres, what units enter and leave its inverse?

**Agent-only key:** Metres enter and seconds leave; the inverse reverses the quantity roles.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A distance model d(t)=3t metres for t≥0 is followed by a fee c(d)=2d+5 currency units. Distinguish inverse and composition.

**Agent-only worked reasoning:** d inverse maps metres to seconds: t=d/3 for d≥0. Composition c(d(t))=6t+5 maps seconds to currency, domain t≥0; it does not reverse distance. A table t=0,1,2 gives distance 0,3,6 and fee 5,11,17; graph the correct units on each axis.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Draw arrows for quantities and units before writing notation.
2. Reverse a one-to-one model for an inverse, but join compatible arrows in order for a composition.
3. Check that the intermediate value belongs to the second function's domain, and verify with tables and graphs using correctly swapped or chained axes.

### Practice progression

Construct an inverse rate model; compose it with a cost rule; then compare reversed composition order and a restricted intermediate domain, rejecting invalid inputs before evaluating.

**Construction and verification controls:** Use one-to-one contextual models, compatible intermediate units and constrained domains; verify reversed pairs or ordered composition in tables and graphs.

### Responsive hints and misconceptions

**First conceptual cue:** Does the new rule undo a process or feed its output into another?

If inverse is written 1/f, test whether composing restores the original input. If composition is commuted, follow the physical units and a concrete intermediate value to expose the mismatch.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Distinguish reversing one model from composing two processes, define the quantities and units at each stage.
- Verify the relevant pair reversal or ordered composition.

**Required case selection:** Inverse versus composition, units, meaningful domains and representation checks.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Use a decreasing function with an excluded endpoint to prevent mechanical extrema swapping. Let \(f(x)=5-x\) on \([1,4)\). Its range is \((1,4]\), maximum 4 is attained at 1, and it has no attained minimum. The inverse formula is also \(5-x\), but its domain is \((1,4]\) and range \([1,4)\); it attains minimum 1 at input 4 and has no attained maximum. Reflecting a point swaps coordinates, not the labels “maximum” and “minimum.” For the inverse, test which outputs are actually allowed.

For the complete finite function \(\{(1,4),(2,7),(3,9)\}\), every pair must reverse and the inverse must include \((9,3)\). If these are merely samples of a continuous function, the same reversal checks the samples but cannot prove an inverse everywhere. Conversely, a single mismatched reversed pair can refute the claim at that point.

If inverse domains are unchanged, cue “Which values can enter the process when it runs backward?” Next draw \(D\to R\) and leave \(R\to D\) for the learner; only then fill exchanged endpoint sets. Fade with \(f(x)=x^2\) on \([1,3)\): inverse \(\sqrt x\) has domain \([1,9)\), range \([1,3)\), attained minimum 1 and no maximum.

In \(d(t)=3t\) metres for \(t\ge0\), followed by \(c(d)=2d+5\), composition gives currency \(6t+5\). If the fee model is valid only for \(0\le d\le12\), the composition's time domain becomes \([0,4]\). The inverse distance model instead returns seconds \(t=d/3\). Have the learner follow units and the intermediate domain before manipulating notation.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
