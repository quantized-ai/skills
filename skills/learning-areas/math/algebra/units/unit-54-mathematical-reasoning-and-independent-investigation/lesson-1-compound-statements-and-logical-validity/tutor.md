# Tutor: Lesson 54.1 — Compound statements and logical validity

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check truth values and a stated domain before symbolic notation. Distinguish “and” from inclusive “or” using a both-true example.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep proof claims within their declared domains. Do not require an original research result or treat software output/source prestige as a proof.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A learner says p⇒q and q imply p because both premises sound plausible. Give a truth-row test.

**Agent-only reasoning:** p=false,q=true makes both premises true and conclusion false. One such assignment refutes validity even when another row has a true conclusion.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Connectives and truth tables

Curriculum reference: **Connectives and truth tables** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** When is p⇒q false?

**Agent-only key:** Only when p is true and q false; a false premise does not make the implication false.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Is the argument “p implies q; q; therefore p” valid? Give a truth-table row that decides.

**Agent-only worked reasoning:** No. With p false and q true, p⇒q and q are both true but p is false. That counterrow invalidates affirming the consequent. The contrapositive ¬q⇒¬p is equivalent to p⇒q; its converse q⇒p need not be.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Establish the five connective truth conditions with a complete two-variable table and explicit grouping.
2. Construct compound columns from inner expressions outward.
3. Test argument validity by searching for a row with all premises true and conclusion false, then compare converse/inverse with the equivalent contrapositive.

### Practice progression

Fill tables for negation, and, inclusive or, implication and biconditional; test a valid modus-ponens and invalid affirming-consequent argument; then build an unfamiliar nested conditional and justify validity by its rows rather than familiar wording.

**Construction and verification controls:** Use all truth assignments and explicit grouping for negation, and/or, implication and biconditional; include valid and invalid arguments.

### Responsive hints and misconceptions

**First conceptual cue:** Can the conclusion be false while every premise is true?

If “or” excludes the both-true row, restate inclusive disjunction. If a true conclusion is taken as a valid argument, inspect all premises and all assignments, not just the observed case.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Enumerate all truth assignments.
- Respect grouping.
- Test whether any row makes all premises true and the conclusion false rather than relying on familiar wording.

**Required case selection:** Complete truth tables, connective semantics, converse/inverse/contrapositive and counterrow validity test.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Quantifiers and counterexamples

Curriculum reference: **Quantifiers and counterexamples** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Refute “Every integer has an integer reciprocal” with a valid counterexample.

**Agent-only key:** Integer 2 has reciprocal 1/2, which is not an integer; zero also exposes undefined reciprocal, but 2 cleanly satisfies a nonzero interpretation.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Negate “For every integer n there is an integer m with m>n.” Is the original true?

**Agent-only worked reasoning:** Negation: there exists an integer n such that every integer m satisfies m≤n. The original is true: for each n choose witness m=n+1. The witness depends on n; reversing quantifier order is a different statement.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. State the domain and hypotheses before negating or testing a claim.
2. Switch quantifiers while negating the predicate, retaining their order.
3. Use a witness for existence and a counterexample for false universality, then explain why many agreeing finite examples are not a universal proof.

### Practice progression

Negate one universal and one existential claim; analyze a nested statement whose witness depends on the first variable; then compare a correct domain-respecting counterexample with one outside the hypotheses and repair it.

**Construction and verification controls:** State domain and order, use universal/existential/nested claims, check witnesses/hypotheses and distinguish finite evidence from proof.

### Responsive hints and misconceptions

**First conceptual cue:** Switch each quantifier and negate the final comparison.

If the witness is outside the domain, reread the quantifier. If quantifiers are reversed casually, write one fixed witness versus a witness chosen separately for each input and test the difference.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Retain the domain and quantifier order.
- Verify a counterexample satisfies the hypotheses.
- Distinguish evidence from universal justification.

**Required case selection:** Negation, quantifier order, valid witnesses/counterexamples and universal justification.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
