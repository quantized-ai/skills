# Unit 52 private assessment calibration

These are checked reference tasks and keys for the agent. Do not present this file or use these fixed questions as the default student assessment. The matching tutor sections are the canonical worked explanations; this bank collects their checks for review. Generate fresh questions from [question-generation.md](question-generation.md), preserving the curriculum scope. A single example does not cover every required case.

## Lesson 52.1: Preference schedules and election rules

### Ranked and approval voting

**Reference prompt:** Preferences are 4 voters A>B>C, 3 voters B>C>A and 2 voters C>B>A. Find plurality, instant runoff and Borda with scores 2,1,0.

**Checked key:** Plurality A with 4 (not a majority of 9). IRV removes C (2), whose ballots transfer to B, so B wins 5–4. Borda totals A=8, B=12, C=7, so B wins. Approval totals cannot be inferred without approval sets.

[Delivery guidance](lesson-1-preference-schedules-and-election-rules/tutor.md#ranked-and-approval-voting). For complete coverage also apply its Assessment case checklist.

### Strategic and agenda effects

**Reference prompt:** Three equally sized groups rank A>B>C, B>C>A and C>A>B. Is there a Condorcet winner, and can agenda matter?

**Checked key:** A beats B 2–1, B beats C 2–1, C beats A 2–1. No Condorcet winner. Sequential pairwise agenda (A versus B) then winner versus C elects C; (B versus C) then winner versus A elects A. The electorate stayed fixed; the agenda changed.

[Delivery guidance](lesson-1-preference-schedules-and-election-rules/tutor.md#strategic-and-agenda-effects). For complete coverage also apply its Assessment case checklist.

## Lesson 52.2: Social choice limits and weighted voting

### Arrow’s impossibility theorem

**Reference prompt:** A claim says Arrow proved no election can be fair, even with two candidates. Evaluate it.

**Checked key:** Overbroad. The theorem concerns a complete transitive social ranking on unrestricted preferences with at least three alternatives, together with unanimity, independence of irrelevant alternatives and nondictatorship. Restricting to two alternatives changes an assumption; a winner-only rule is not automatically the same ranking problem.

[Delivery guidance](lesson-2-social-choice-limits-and-weighted-voting/tutor.md#arrows-impossibility-theorem). For complete coverage also apply its Assessment case checklist.

### Weighted coalitions and Banzhaf power

**Reference prompt:** For weighted voting [3:2,1,1], enumerate winning coalitions and normalized Banzhaf powers.

**Checked key:** With voters A,B,C, winners are AB, AC, ABC. In AB both A,B are critical; in AC both A,C; in ABC only A. Critical counts 3,1,1 give powers 3/5,1/5,1/5. They differ from weight shares 1/2,1/4,1/4.

[Delivery guidance](lesson-2-social-choice-limits-and-weighted-voting/tutor.md#weighted-coalitions-and-banzhaf-power). For complete coverage also apply its Assessment case checklist.

## Lesson 52.3: Fairness criteria and cake division

### Proportionality, envy, equity, and efficiency

**Reference prompt:** Two people value allocated shares X,Y as A:(60,40) and B:(30,70), each totaling 100; A gets X, B gets Y. Which fairness claims follow?

**Checked key:** Both receive at least half by own value, neither envies the other, and normalized satisfaction differs (.6 versus .7), so not equitable. Pareto efficiency is not established by these bundle totals alone without knowing feasible alternative allocations and subpiece valuations.

[Delivery guidance](lesson-3-fairness-criteria-and-cake-division/tutor.md#proportionality-envy-equity-and-efficiency). For complete coverage also apply its Assessment case checklist.

### Divider-chooser and last diminisher

**Reference prompt:** A cuts cake into two shares each worth 50 to A; B values them 30 and 70. What happens? In three-player last diminisher, who takes an untrimmed proposal?

**Checked key:** B chooses the 70 share, leaving A a 50 share; both are proportional and envy-free by their own valuations. With three players, if nobody trims a proposed one-third share, the proposer takes it; otherwise the last trimmer takes it and all trimmings return to the residue. Remaining two divide and choose. This guarantees proportionality, not general three-player envy-freeness.

[Delivery guidance](lesson-3-fairness-criteria-and-cake-division/tutor.md#divider-chooser-and-last-diminisher). For complete coverage also apply its Assessment case checklist.

## Lesson 52.4: Adjusted winner and negotiated allocation

### Adjusted winner procedure

**Reference prompt:** Two divisible goods X,Y receive point bids A:(70,30), B:(20,80). Apply adjusted winner.

**Checked key:** Initially A gets X (70) and B gets Y (80). B is ahead; transfer fraction t of Y to A: A=70+30t, B=80(1-t). Equality gives t=1/11; both get 800/11≈72.73 of their own 100 points. Each values the other's share as 300/11, so neither envies.

[Delivery guidance](lesson-4-adjusted-winner-and-negotiated-allocation/tutor.md#adjusted-winner-procedure). For complete coverage also apply its Assessment case checklist.

### Divisibility and trimming limitations

**Reference prompt:** Adjusted winner assigns one party 1/11 of a piano. Is physical cutting the warranted recommendation?

**Checked key:** No. The mathematics requires a feasible divisible right: agreed ownership, use, sale proceeds or compensation may work, but preferences must remain additive for that representation and cash must be available if used. A fractional output alone does not create feasibility.

[Delivery guidance](lesson-4-adjusted-winner-and-negotiated-allocation/tutor.md#divisibility-and-trimming-limitations). For complete coverage also apply its Assessment case checklist.

## Lesson 52.5: Knaster inheritance and compensation

### Sealed bids and fair-share accounts

**Reference prompt:** Three heirs value one item at A=90, B=60, C=30. Apply highest-bid allocation and initial fair-share accounts.

**Checked key:** A receives the item. Each fair share is their own total divided by three: 30,20,10. Initial signed payment into the account is value of own award minus fair share: A pays 60, B withdraws 20, C withdraws 10. Surplus is 30.

[Delivery guidance](lesson-5-knaster-inheritance-and-compensation/tutor.md#sealed-bids-and-fair-share-accounts). For complete coverage also apply its Assessment case checklist.

### Surplus and guarantees

**Reference prompt:** Complete the settlement where A receives an item valued by A at 90, fair shares are A=30,B=20,C=10 and the initial surplus is 30.

**Checked key:** Equal surplus bonus is 10 each. Net payments are A=50, B=-30, C=-20, summing to zero. Own-value net benefits are 90-50=40, 30 and 20: each fair share plus 10. A must be able to pay 50. This proportional guarantee does not imply general envy-freeness.

[Delivery guidance](lesson-5-knaster-inheritance-and-compensation/tutor.md#surplus-and-guarantees). For complete coverage also apply its Assessment case checklist.

## Planning a fresh assessment

Use the unit-specific evidence requirements and lesson routing in [agent-guide.md](agent-guide.md#evidence-specific-to-this-unit), then select missing cases from each relevant tutor’s Assessment case checklist. The separate diagnostics, lesson reasoning activities and supplemental worked comparisons are additional private calibration material; they are not unseen test items once discussed. Track the actual case and representation covered, and report remaining cases explicitly.

A learner can correctly reject an invalid model or unsupported conclusion without supplying a numerical answer. Conversely, a correct number does not establish an omitted justification, practical execution or completeness claim. Use the unit’s [adversarial scenario](agent-evaluation.md#adversarial-transfer-scenario) to check this distinction before treating a generated item as a reliable assessment.

## Annotated learner-response calibration

Apply the stated procedure and the claimed fairness property separately, always retaining whose values or preferences are being used.

| Learner response | Judgment and next action |
| --- | --- |
| “A has a majority with 4 of 9 first choices.” | The count may be correct; majority interpretation is wrong. Credit the tally, distinguish it from plurality, and ask for the threshold. |
| “Approval elects B” using only a ranked schedule without approval sets. | The requested result is undetermined. A learner who identifies the missing approval data should receive credit for that limitation, not be forced to invent votes. |
| “Arrow means every election is unfair.” | The conclusion exceeds the theorem. Ask for its input/output assumptions and incompatible conditions; preserve any correctly recalled condition. |
| Banzhaf powers are correct, but no coalition or criticality reasoning was requested or shown. | Credit the numbers; enumeration and criticality remain unassessed until elicited. If the trace was expressly required, record it as incomplete requested evidence. |
| A proportional three-person allocation is called envy-free using the one-third test alone. | Proportionality is a valid component; envy needs comparisons within each participant's valuation row. Request those comparisons rather than erase the valid guarantee. |
| The adjusted-winner equation uses the correct own valuations and produces 1/11, but fractional transfer rights are unspecified. | Mathematical balancing is supported; practical feasibility is unresolved. Do not equate a fraction with permission or ability to split the object. |
| After the tutor supplies the 10-per-person bonus, the learner gets correct final Knaster payments. | Credit supported settlement arithmetic, not independent surplus-distribution reasoning. Reassess with new data and no supplied bonus. |
