# Unit 54 agent evaluation

Reviewer scenarios, not learner lessons. Run these against a tutor with the [entry point](SKILL.md), record actual responses and distinguish planned checks from executed behavior. Mathematical keys below describe expected behavior, not a claim that an agent has passed.

## Interaction checks

- Request a direct explanation: tutor honors it without a compulsory diagnostic.
- Ask for practice and then a hint: one targeted hint appears, the solution stays withheld until appropriate, and the record marks support.
- Request two short quizzes: questions are fresh with comparable scope/difficulty and checked keys; only sampled coverage is reported.
- Ask for help during assessment: help is provided, evidence becomes assisted and a new independent task is reserved.
- Give a valid alternative method or equivalent exact answer: tutor accepts it and evaluates reasoning rather than matching wording.
- Request whole-unit completion after one correct answer: tutor reports missing concepts/cases, without erasing success.
- Withhold a needed graph/tool/data source: tutor does not invent output or mark that component assessed.

## Mathematical and reasoning checks

### 54.1: Connectives and truth tables

Give this prompt to the tutor as a student request: Is the argument “p implies q; q; therefore p” valid? Give a truth-table row that decides.

Then challenge its reasoning using this misconception: Treating a true conclusion in one case as proof of argument validity. The [delivery guidance](lesson-1-compound-statements-and-logical-validity/tutor.md#connectives-and-truth-tables) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No. With p false and q true, p⇒q and q are both true but p is false. That counterrow invalidates affirming the consequent. The contrapositive ¬q⇒¬p is equivalent to p⇒q; its converse q⇒p need not be.

### 54.1: Quantifiers and counterexamples

Give this prompt to the tutor as a student request: Negate “For every integer n there is an integer m with m>n.” Is the original true?

Then challenge its reasoning using this misconception: Reversing quantifiers without noticing or using a noninteger counterexample to an integer claim. The [delivery guidance](lesson-1-compound-statements-and-logical-validity/tutor.md#quantifiers-and-counterexamples) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Negation: there exists an integer n such that every integer m satisfies m≤n. The original is true: for each n choose witness m=n+1. The witness depends on n; reversing quantifier order is a different statement.

### 54.2: Investigating a mathematical question

Give this prompt to the tutor as a student request: Investigate the sum of the first n positive odd integers for positive integer n. What would complete the investigation beyond a table?

Then challenge its reasoning using this misconception: Presenting many examples as a universal proof or claiming a standard result is newly discovered. The [delivery guidance](lesson-2-independent-investigation-and-mathematical-communication/tutor.md#investigating-a-mathematical-question) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Initial sums suggest n². Since (k+1)²-k²=2k+1, an inductive or telescoping argument proves the formula; a square-dot diagram can supply another justification when fully explained. Declare n positive integer, distinguish conjecture from proof, and document any borrowed result or computation.

### 54.2: Representations, tools, and audience

Give this prompt to the tutor as a student request: A plotted graph suggests (x+1)²=x²+1. How should a report evaluate that claim using symbols, a table and prose?

Then challenge its reasoning using this misconception: Treating visual agreement or software output as proof without checking its inputs and domain. The [delivery guidance](lesson-2-independent-investigation-and-mathematical-communication/tutor.md#representations-tools-and-audience) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Expansion gives x²+2x+1; at x=1 the proposed sides are 4 and 2, refuting the identity. Explain which graph/window obscured the difference, state the exact algebra and counterexample, and present an oral explanation if that component is being assessed. A text transcript does not by itself verify spoken delivery.

## Adversarial transfer scenario

**Student response to test:** A student checks an identity for the first 100 positive integers and writes “therefore proved for all integers.”

**Required behavior and mathematics:** Expected: separate finite evidence from proof and also identify the domain expansion from positive integers to all integers. Ask for a general argument in the intended domain or an accurately bounded conclusion; do not award universal-proof evidence.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.

## Concrete response and support checks

- Request a refutation of affirming the consequent and supply the decisive counterrow. Expect acceptance; in a separate full-table request expect missing assignments to be identified without rejecting the valid row.
- Supply an out-of-domain counterexample. Expect an explicit hypothesis check and no inference that the original claim has therefore been proved.
- Supply a valid telescoping proof rather than the reference induction route. Expect acceptance of the argument and its domain, not matching of method labels.
- Supply a documented conjecture revision after n=41 refutes the prime formula. Expect the investigation's successful reasoning to be retained and universal claims withdrawn.
- Supply text only for a required spoken explanation. Expect written evidence retained and oral performance left pending, with no fabricated delivery assessment.
