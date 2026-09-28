# Tutor: Lesson 14.6: Finite geometric models

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Finite geometric sums, units and event timelines. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 14.3 curriculum](../lesson-3-geometric-sequences/lesson.md) and [tutor](../lesson-3-geometric-sequences/tutor.md); [Lesson 14.5 curriculum](../lesson-5-finite-sums/lesson.md) and [tutor](../lesson-5-finite-sums/tutor.md). Load both files for any selected review.

## Teaching boundaries

Define the stopping/valuation event before choosing exponents or counting journeys. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Deposit 50 at each year end for two years at hypothetical 10% annual interest. Is the end-of-year-two value 50·1.1²+50·1.1?

**Private reasoning key:** That expression uses beginning-of-year timing. End deposits accrue for one and zero periods, giving 55+50=105, with principal 100.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Totals from repeated proportional change

Curriculum reference: **Totals from repeated proportional change** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** A process contributes 12,6,3,1.5 units in four rounds. Find total contribution.

**Agent key:** Sum $12\sum_{k=0}^3(1/2)^k=22.5$ units. The last contribution 1.5 is not the total.

**Worked example:** A ball starts with a 10-meter drop and rebounds to 5 then 2.5 meters; stop at the top of the second rebound. Find traveled distance.

**Worked reasoning:** Initial drop 10, first rise 5, next fall 5, second rise 2.5 total 22.5 meters. Do not count a final fall that has not occurred.


#### Teaching sequence

Identify each actual contribution and the stopping event before selecting a sum. For a rebound path, distinguish initial drop, each rise and each completed fall; stopping at a peak omits its subsequent fall. Translate the resulting list into a finite geometric sum only after its first term, ratio and count are settled. Check units and compare the total with the final contribution.

#### Respond to student reasoning

**First hint:** Which physical movements or contributions are actually included?

If every rebound height is doubled, ask whether the last fall has occurred. If only the last term is returned, list earlier contributions. If an infinite formula replaces a finite count, point to the specified stopping event.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use repeated contributions, partial journeys and alternate stopping points, then ask the student to construct the summation from a verbal timeline.

#### Assessment evidence

Assess physical accounting, first term/ratio/count, exact finite total, units and reasonableness. Correct use of a sum formula cannot repair an incorrectly modeled list.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Repeated deposits and accumulation timing

Curriculum reference: **Repeated deposits and accumulation timing** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Deposit 100 at each year end for three years at a hypothetical fixed 10% annual rate. Value just after deposit 3?

**Agent key:** $100(1.1^2+1.1+1)=331$. Principal is 300 and modeled growth 31, with no fees or withdrawals.

**Worked example:** Move those three deposits to the beginning of each year, keeping valuation at the end of year 3.

**Worked reasoning:** Every deposit gains one more period: $1.1\cdot331=364.10$. At zero rate either schedule totals 300.


#### Teaching sequence

Draw a common valuation time and label how many interest periods each deposit receives. End-of-period deposits in a three-period model accrue for two, one and zero periods; beginning deposits receive one extra period each. Sum the accumulated contributions, separate principal from modeled growth and treat zero rate by direct addition. State fixed-rate and fee/withdrawal assumptions.

#### Respond to student reasoning

**First hint:** How many growth periods does each deposit receive before the common valuation time?

If every deposit earns three periods, locate each on the timeline. If annuity-due and ordinary timing are confused, move each deposit one period and compare. If principal is called profit, subtract total contributions.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare beginning/end timing, zero rate and a changed valuation date with all periods explicitly stated. Use hypothetical amounts without implying investment advice or guaranteed returns.

#### Assessment evidence

Require timeline, compatible rate period, correct exponents, total/principal distinction and boundary handling. Formula recall without correct timing is insufficient.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
