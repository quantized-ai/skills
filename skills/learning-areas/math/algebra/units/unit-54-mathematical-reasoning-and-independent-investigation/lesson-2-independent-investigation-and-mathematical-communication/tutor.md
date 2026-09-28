# Tutor: Lesson 54.2 — Independent investigation and mathematical communication

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check conjecture versus proof:ten successes suggest a pattern but do not establish a universal result. Revisit quantifiers or counterexamples if the claim’s scope is unclear.

Review [54.1: Compound statements and logical validity](../lesson-1-compound-statements-and-logical-validity/tutor.md) together with its curriculum if that specific gap appears.

## Teaching boundaries

Keep proof claims within their declared domains. Do not require an original research result or treat software output/source prestige as a proof.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A table verifies the odd-sum pattern through n=20 and is presented as a universal proof. Supply a bridge to generality.

**Agent-only reasoning:** Use (k+1)²−k²=2k+1 with a base case, or a fully justified square-border argument, to prove the formula for every positive integer; otherwise retain a bounded computation claim.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Investigating a mathematical question

Curriculum reference: **Investigating a mathematical question** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** Checking a conjecture for n=1 through 100 finds no failure. Is it now a theorem for every positive integer?

**Agent-only key:** No; this is finite computational evidence unless a separate argument covers all remaining cases.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Investigate the sum of the first n positive odd integers for positive integer n. What would complete the investigation beyond a table?

**Agent-only worked reasoning:** Initial sums suggest n². Since (k+1)²-k²=2k+1, an inductive or telescoping argument proves the formula; a square-dot diagram can supply another justification when fully explained. Declare n positive integer, distinguish conjecture from proof, and document any borrowed result or computation.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Narrow an open question to a domain, definitions and achievable claim.
2. Maintain an evidence log separating known results, conjectures, computed cases and original deductions.
3. Choose an invariant, counterexample search or proof strategy, then revise the claim when special cases fail instead of hiding them.

### Practice progression

Investigate a bounded pattern with an explicit table; formulate a precise conjecture and test boundary cases; then produce a proof or clearly bounded conclusion with attributed sources and an explanation of what remains unresolved.

**Construction and verification controls:** Let students choose a bounded question; supply scope/definitions, require actual reasoning, edge checks, source attribution and clearly labeled conjectures.

### Responsive hints and misconceptions

**First conceptual cue:** What new border changes a k×k square into a (k+1)×(k+1) square?

If every new example is counted as proof, ask how it rules out the next untested case. If a borrowed theorem is called a discovery, retain its source and identify the student's actual contribution.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Distinguish established results, conjectures, computations, and original arguments.
- Revise unsupported claims.
- Check special cases.
- Explain remaining uncertainty.

**Required case selection:** Executed investigation, strategy, evidence/proof, revisions and honest attribution/remaining uncertainty.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Representations, tools, and audience

Curriculum reference: **Representations, tools, and audience** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A computer gives a decimal answer but the task asks for an exact identity. What evidence is still needed?

**Agent-only key:** A symbolic or otherwise exact justification of the identity; numerical samples can test or refute but do not normally prove it globally.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** A plotted graph suggests (x+1)²=x²+1. How should a report evaluate that claim using symbols, a table and prose?

**Agent-only worked reasoning:** Expansion gives x²+2x+1; at x=1 the proposed sides are 4 and 2, refuting the identity. Explain which graph/window obscured the difference, state the exact algebra and counterexample, and present an oral explanation if that component is being assessed. A text transcript does not by itself verify spoken delivery.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Choose the representation that makes the claim's logical step visible, then use another as a check.
2. Record tool inputs/settings and verify outputs against original conditions.
3. Build a written explanation and an oral account with the same definitions, assumptions and inferential chain, adapting language rather than weakening the conclusion.

### Practice progression

Repair a graph-only false identity claim; explain why a table, diagram or code result helps a chosen investigation; then present and critique written/oral versions, recording unavailable spoken evidence separately rather than fabricating performance.

**Construction and verification controls:** Choose claims with useful symbolic/numerical/visual checks; require tool settings and actual outputs where used, plus audience-appropriate reasoning.

### Responsive hints and misconceptions

**First conceptual cue:** Try an input where the missing cross term is nonzero.

If software output is treated as authority, ask which input/domain it actually used. If an accessible explanation drops a key condition, compare its claim with the technical statement and restore that condition in plain language.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Explain why tools are appropriate, reconcile representations.
- Verify numerical or symbolic outputs, acknowledge sources, and make each inferential step and its conditions clear to the intended audience.

**Required case selection:** Tool choice, cross-representation reconciliation, verification, attribution and both written/oral communication evidence.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
