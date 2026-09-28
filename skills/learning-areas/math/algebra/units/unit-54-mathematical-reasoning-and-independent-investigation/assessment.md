# Unit 54 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 54.1: Compound statements and logical validity

### Connectives and truth tables

**Reference prompt:** Is the argument “p implies q; q; therefore p” valid? Give a truth-table row that decides.

**Checked key:** No. With p false and q true, p⇒q and q are both true but p is false. That counterrow invalidates affirming the consequent. The contrapositive ¬q⇒¬p is equivalent to p⇒q; its converse q⇒p need not be.

[Delivery guidance](lesson-1-compound-statements-and-logical-validity/tutor.md#connectives-and-truth-tables). For complete coverage also apply its Assessment case checklist.

### Quantifiers and counterexamples

**Reference prompt:** Negate “For every integer n there is an integer m with m>n.” Is the original true?

**Checked key:** Negation: there exists an integer n such that every integer m satisfies m≤n. The original is true: for each n choose witness m=n+1. The witness depends on n; reversing quantifier order is a different statement.

[Delivery guidance](lesson-1-compound-statements-and-logical-validity/tutor.md#quantifiers-and-counterexamples). For complete coverage also apply its Assessment case checklist.

## Lesson 54.2: Independent investigation and mathematical communication

### Investigating a mathematical question

**Reference prompt:** Investigate the sum of the first n positive odd integers for positive integer n. What would complete the investigation beyond a table?

**Checked key:** Initial sums suggest n². Since (k+1)²-k²=2k+1, an inductive or telescoping argument proves the formula; a square-dot diagram can supply another justification when fully explained. Declare n positive integer, distinguish conjecture from proof, and document any borrowed result or computation.

[Delivery guidance](lesson-2-independent-investigation-and-mathematical-communication/tutor.md#investigating-a-mathematical-question). For complete coverage also apply its Assessment case checklist.

### Representations, tools, and audience

**Reference prompt:** A plotted graph suggests (x+1)²=x²+1. How should a report evaluate that claim using symbols, a table and prose?

**Checked key:** Expansion gives x²+2x+1; at x=1 the proposed sides are 4 and 2, refuting the identity. State the exact algebra and counterexample. If an actual graph was supplied, inspect its window and resolution to explain the misleading appearance; otherwise discuss that possibility conditionally without inventing settings. Present an oral explanation if that component is being assessed. A text transcript does not by itself verify spoken delivery.

[Delivery guidance](lesson-2-independent-investigation-and-mathematical-communication/tutor.md#representations-tools-and-audience). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

Credit the mathematical claim the response establishes, using the task's actual evidence request.

| Learner response | Judgment and next action |
| --- | --- |
| Gives the single decisive p=false,q=true row to refute affirming the consequent. | Sufficient for that invalidity question. It is not a complete truth table if all rows were explicitly requested; preserve the valid counterrow and name the missing coverage. |
| Negates “for every n there exists m>n” as “for every n there exists m≤n.” | The inner predicate changed, but quantifier negation is incomplete. Ask what would have to fail for the original statement to be false; scaffold one quantifier at a time. |
| Uses n=−1 against a claim restricted to positive integers. | The calculation may be correct but does not satisfy the hypotheses. Request an admissible example or a proof, without claiming the original statement is thereby true. |
| Proves the odd-sum formula by a fully explained square-border argument instead of induction. | Accept equivalent general reasoning with its domain and base established. A bare diagram or a few pictured squares alone does not supply that generality. |
| Revises a conjecture after a verified counterexample and clearly labels the surviving bounded claim. | Credit sound investigative revision; an initially false conjecture does not make the whole investigation unsuccessful. |
| Provides a correct written explanation for an assessment also requiring oral delivery. | Written reasoning can be demonstrated; oral performance remains not assessed until observed. Do not invent speech from the text. |
| Completes the odd-sum proof after the tutor supplies the telescoping identity. | Correct supported proof completion, not independent selection of the proof strategy. Later collect a fresh independent argument within taught scope. |
