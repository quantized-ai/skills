# Unit 52 agent evaluation

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

### 52.1: Ranked and approval voting

Give this prompt to the tutor as a student request: Preferences are 4 voters A>B>C, 3 voters B>C>A and 2 voters C>B>A. Find plurality, instant runoff and Borda with scores 2,1,0.

Then challenge its reasoning using this misconception: Equating plurality and majority or deriving approvals from rankings without a rule. The [delivery guidance](lesson-1-preference-schedules-and-election-rules/tutor.md#ranked-and-approval-voting) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Plurality A with 4 (not a majority of 9). IRV removes C (2), whose ballots transfer to B, so B wins 5–4. Borda totals A=8, B=12, C=7, so B wins. Approval totals cannot be inferred without approval sets.

### 52.1: Strategic and agenda effects

Give this prompt to the tutor as a student request: Three equally sized groups rank A>B>C, B>C>A and C>A>B. Is there a Condorcet winner, and can agenda matter?

Then challenge its reasoning using this misconception: Treating a majority cycle as a counting mistake or one result as a universal property. The [delivery guidance](lesson-1-preference-schedules-and-election-rules/tutor.md#strategic-and-agenda-effects) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A beats B 2–1, B beats C 2–1, C beats A 2–1. No Condorcet winner. Sequential pairwise agenda (A versus B) then winner versus C elects C; (B versus C) then winner versus A elects A. The electorate stayed fixed; the agenda changed.

### 52.2: Arrow’s impossibility theorem

Give this prompt to the tutor as a student request: A claim says Arrow proved no election can be fair, even with two candidates. Evaluate it.

Then challenge its reasoning using this misconception: Turning an incompatibility theorem into a claim elections are useless. The [delivery guidance](lesson-2-social-choice-limits-and-weighted-voting/tutor.md#arrows-impossibility-theorem) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Overbroad. The theorem concerns a complete transitive social ranking on unrestricted preferences with at least three alternatives, together with unanimity, independence of irrelevant alternatives and nondictatorship. Restricting to two alternatives changes an assumption; a winner-only rule is not automatically the same ranking problem.

### 52.2: Weighted coalitions and Banzhaf power

Give this prompt to the tutor as a student request: For weighted voting [3:2,1,1], enumerate winning coalitions and normalized Banzhaf powers.

Then challenge its reasoning using this misconception: Counting membership in winning coalitions instead of critical occurrences. The [delivery guidance](lesson-2-social-choice-limits-and-weighted-voting/tutor.md#weighted-coalitions-and-banzhaf-power) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: With voters A,B,C, winners are AB, AC, ABC. In AB both A,B are critical; in AC both A,C; in ABC only A. Critical counts 3,1,1 give powers 3/5,1/5,1/5. They differ from weight shares 1/2,1/4,1/4.

### 52.3: Proportionality, envy, equity, and efficiency

Give this prompt to the tutor as a student request: Two people value allocated shares X,Y as A:(60,40) and B:(30,70), each totaling 100; A gets X, B gets Y. Which fairness claims follow?

Then challenge its reasoning using this misconception: Treating proportional, envy-free, equitable and efficient as synonyms. The [delivery guidance](lesson-3-fairness-criteria-and-cake-division/tutor.md#proportionality-envy-equity-and-efficiency) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Both receive at least half by own value, neither envies the other, and normalized satisfaction differs (.6 versus .7), so not equitable. Pareto efficiency is not established by these bundle totals alone without knowing feasible alternative allocations and subpiece valuations.

### 52.3: Divider-chooser and last diminisher

Give this prompt to the tutor as a student request: A cuts cake into two shares each worth 50 to A; B values them 30 and 70. What happens? In three-player last diminisher, who takes an untrimmed proposal?

Then challenge its reasoning using this misconception: Awarding the share to the first trimmer or claiming three-player envy-freeness. The [delivery guidance](lesson-3-fairness-criteria-and-cake-division/tutor.md#divider-chooser-and-last-diminisher) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: B chooses the 70 share, leaving A a 50 share; both are proportional and envy-free by their own valuations. With three players, if nobody trims a proposed one-third share, the proposer takes it; otherwise the last trimmer takes it and all trimmings return to the residue. Remaining two divide and choose. This guarantees proportionality, not general three-player envy-freeness.

### 52.4: Adjusted winner procedure

Give this prompt to the tutor as a student request: Two divisible goods X,Y receive point bids A:(70,30), B:(20,80). Apply adjusted winner.

Then challenge its reasoning using this misconception: Equalizing physical quantities instead of normalized satisfaction. The [delivery guidance](lesson-4-adjusted-winner-and-negotiated-allocation/tutor.md#adjusted-winner-procedure) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Initially A gets X (70) and B gets Y (80). B is ahead; transfer fraction t of Y to A: A=70+30t, B=80(1-t). Equality gives t=1/11; both get 800/11≈72.73 of their own 100 points. Each values the other's share as 300/11, so neither envies.

### 52.4: Divisibility and trimming limitations

Give this prompt to the tutor as a student request: Adjusted winner assigns one party 1/11 of a piano. Is physical cutting the warranted recommendation?

Then challenge its reasoning using this misconception: Assuming every mathematical fraction of a good can be physically delivered. The [delivery guidance](lesson-4-adjusted-winner-and-negotiated-allocation/tutor.md#divisibility-and-trimming-limitations) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: No. The mathematics requires a feasible divisible right: agreed ownership, use, sale proceeds or compensation may work, but preferences must remain additive for that representation and cash must be available if used. A fractional output alone does not create feasibility.

### 52.5: Sealed bids and fair-share accounts

Give this prompt to the tutor as a student request: Three heirs value one item at A=90, B=60, C=30. Apply highest-bid allocation and initial fair-share accounts.

Then challenge its reasoning using this misconception: Using a common average valuation or reversing payment signs. The [delivery guidance](lesson-5-knaster-inheritance-and-compensation/tutor.md#sealed-bids-and-fair-share-accounts) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: A receives the item. Each fair share is their own total divided by three: 30,20,10. Initial signed payment into the account is value of own award minus fair share: A pays 60, B withdraws 20, C withdraws 10. Surplus is 30.

### 52.5: Surplus and guarantees

Give this prompt to the tutor as a student request: Complete the settlement where A receives an item valued by A at 90, fair shares are A=30,B=20,C=10 and the initial surplus is 30.

Then challenge its reasoning using this misconception: Counting the surplus twice or asserting cash feasibility without liquidity. The [delivery guidance](lesson-5-knaster-inheritance-and-compensation/tutor.md#surplus-and-guarantees) supplies a targeted hint for practice; the tutor must not leak it in an independent assessment.

Expected mathematical check: Equal surplus bonus is 10 each. Net payments are A=50, B=-30, C=-20, summing to zero. Own-value net benefits are 90-50=40, 30 and 20: each fair share plus 10. A must be able to pay 50. This proportional guarantee does not imply general envy-freeness.

## Adversarial transfer scenario

**Student response to test:** A three-person cake result gives A35% of their own value but A values B’s share at 40%. The tutor calls the allocation envy-free because A got a third.

**Required behavior and mathematics:** Expected: A is proportional but envies B. Distinguish criteria, and do not extend the two-person divider-chooser envy-free guarantee to a general three-person proportional procedure.

Run this in learn, practice and assess separately. In learn, explain the decisive distinction; in practice, begin with a targeted cue and wait; in assess, withhold mathematical coaching before submission, then score the demonstrated reasoning and provide feedback. If help was given, the corrected response is supported and a fresh changed-representation task is needed for independent evidence.
