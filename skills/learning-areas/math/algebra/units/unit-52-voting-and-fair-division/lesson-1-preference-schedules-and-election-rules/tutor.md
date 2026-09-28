# Tutor: Lesson 52.1 — Preference schedules and election rules

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check weighted counts:three groups with 4,3,2 voters total 9, not 3. Establish whether ballots rank candidates or approve them.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Keep formal procedure guarantees conditional on stated voting/valuation assumptions. Do not equate a modeled allocation with authorized transfer of real property.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A wins plurality 4–3–2 and is called the majority winner. Apply two checks using the worked schedule.

**Agent-only reasoning:** Four of nine is not a majority. Under IRV the eliminated C ballots transfer to B, producing B5–A4; the rule matters.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Ranked and approval voting

Curriculum reference: **Ranked and approval voting** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** A candidate has 4 of 9 first-place votes. Is that a majority?

**Agent-only key:** No; it may be a plurality, but majority requires more than half, hence at least 5.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Preferences are 4 voters A>B>C, 3 voters B>C>A and 2 voters C>B>A. Find plurality, instant runoff and Borda with scores 2,1,0.

**Agent-only worked reasoning:** Plurality A with 4 (not a majority of 9). IRV removes C (2), whose ballots transfer to B, so B wins 5–4. Borda totals A=8, B=12, C=7, so B wins. Approval totals cannot be inferred without approval sets.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Expand a small preference schedule into voter groups to explain weights, then recount without expansion.
2. Run plurality, top-two majority runoff and instant runoff separately with explicit ties and transfer rules.
3. Build Borda and pairwise tallies from the same electorate; treat approval sets as additional data, not inferred rankings.

### Practice progression

Compute each method on one schedule; create a case where plurality and runoff differ; then change only the stated point convention or tie rule and explain the result, checking approval totals from actual approvals.

**Construction and verification controls:** Generate weighted complete rankings, explicit tie/elimination rules, Borda convention and separate approval ballots; include majority-runoff and pairwise comparisons.

### Responsive hints and misconceptions

**First conceptual cue:** Does each row represent one voter or a group of voters?

If voter groups are counted equally, attach their counts to every score/transfer. If approval is guessed from first choices, ask for the actual approval ballot or an explicit conversion rule.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Weight each preference group correctly.
- Specify tie and elimination rules.
- Distinguish plurality, majority, pairwise winners, and approval totals.

**Required case selection:** Every named ranked method plus approval; weighting, ties and majority distinctions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Strategic and agenda effects

Curriculum reference: **Strategic and agenda effects** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** If A beats B and B beats C by majority, must A beat C?

**Agent-only key:** No; pairwise majority preference can cycle even when individual rankings are transitive.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** Three equally sized groups rank A>B>C, B>C>A and C>A>B. Is there a Condorcet winner, and can agenda matter?

**Agent-only worked reasoning:** A beats B 2–1, B beats C 2–1, C beats A 2–1. No Condorcet winner. Sequential pairwise agenda (A versus B) then winner versus C elects C; (B versus C) then winner versus A elects A. The electorate stayed fixed; the agenda changed.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Build the full pairwise matrix before searching for a Condorcet winner.
2. Hold voters fixed while changing an agenda so a changed outcome has a clear cause.
3. Distinguish a strategic report from a change in sincere preference and identify which fairness property a counterexample actually challenges.

### Practice progression

Diagnose a cycle and a true Condorcet winner; run two sequential agendas; then compare an explicit strategic ranking or candidate withdrawal with the original schedule, without asserting that one example proves a method always fails a property.

**Construction and verification controls:** Use fixed schedules and change only agenda, report or withdrawal; verify all pairwise tallies and specify the fairness property under discussion.

### Responsive hints and misconceptions

**First conceptual cue:** For these two candidates, which does each voter rank higher?

If a cycle is called an invalid individual ballot, display each group's transitive ranking. If a strategy is called guaranteed, test the assumed knowledge of others and tie/agenda rules.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Use a fixed original electorate for comparisons.
- Identify the exact changed rule or report.
- Distinguish a method’s systematic property from one observed outcome.

**Required case selection:** Cycles/winners, strategic reports, agenda/withdrawal effects and case versus general method property.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.


## Adaptive teaching examples

Keep the same electorate visible while changing the rule. In the existing 4,3,2 schedule, compute B's Borda score as \(4(1)+3(2)+2(1)=12\), not one score per ranking type. **Conceptual cue:** “How many voters does this one column represent?” **Setup:** use rows for candidates and columns for groups, with group counts above the columns. **Worked step:** the four A>B>C voters contribute 8,4,0; leave the other groups and totals to the learner. **Fade:** remove the expanded ballots and ask for weighted tallying directly. Approval totals remain undetermined unless approval sets or an explicit conversion rule are provided.

For strategic or agenda effects, change only one feature per comparison and retain the original schedule. On the three-group cycle A>B>C, B>C>A, C>A>B, have the learner compute A versus B, then complete the other two pairwise contests before applying an agenda. Two valid agendas can elect different candidates without any voter changing preference. If a learner says this proves a particular fairness criterion fails, ask them to name that criterion and its hypotheses; a changed winner alone is not a general impossibility proof.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
