# Tutor: Lesson 10.6: Rates of change and comparisons

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Difference quotients, common inputs and graph scale. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 10.1 curriculum](../lesson-1-exponential-structure/lesson.md) and [tutor](../lesson-1-exponential-structure/tutor.md); [Lesson 10.3 curriculum](../lesson-3-exponential-graphs/lesson.md) and [tutor](../lesson-3-exponential-graphs/tutor.md). Load both files for any selected review.

## Teaching boundaries

Separate observed comparisons from general eventual-dominance claims. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does the constant ratio of 3^x imply equal average rates on [0,1] and [1,2]?

**Private reasoning key:** No. The rates are 3−1=2 and 9−3=6 per input unit. The multiplicative factor is three, while the additive change depends on the starting output.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Average rates of change for exponentials

Curriculum reference: **Average rates of change for exponentials** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Compute average rates for $f(x)=2^x$ on [0,1] and [1,2].

**Agent key:** Rates are $(2-1)/1=1$ and $(4-2)/1=2$; ratios are both 2.

**Worked example:** For $f(t)=80(1/2)^t$, compare changes on [0,1] and [1,2].

**Worked reasoning:** Changes are -40 and -20; proportional decay is constant, but additive decreases have smaller magnitude later.


#### Teaching sequence

Compute output difference divided by input difference with units; do not substitute a ratio of outputs. For a fixed factor over equal intervals, absolute changes depend on each interval's starting amount, so slopes need not agree. In decay, signed changes can become less negative while proportional change remains constant.

#### Respond to student reasoning

**First hint:** Are you calculating a difference quotient or a ratio?

If constant factor is called constant slope, compare [0,1] and [1,2] for 2^x. If interval length is omitted, use unequal input gaps. If decay is reported as a positive rate without saying magnitude, retain the signed difference.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Use equal and unequal intervals, growing and decaying models, and context-specific rate units. Ask why identical percentage changes produce different additive changes.

#### Assessment evidence

Require correct difference quotient, signs, units and an explanation distinguishing multiplicative consistency from constant additive rate.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Comparing exponential and polynomial growth

Curriculum reference: **Comparing exponential and polynomial growth** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Compare $2^x$ and $x^3$ at x=3 and x=10.

**Agent key:** At 3, 8<27; at 10, 1024>1000. Their relative order changes.

**Worked example:** Does that finite comparison alone prove $2^x>x^3$ for every real x>10?

**Worked reasoning:** No. Finite observations cannot establish all later values; the curriculum's eventual-dominance result is a separate general statement.


#### Teaching sequence

Compare both families at the same inputs and expand the table or viewing window when the initial range hides a crossover. For a>0 and b>1, state that ab^x eventually exceeds any fixed real polynomial as x tends to positive infinity; a nonpositive scale or a base at most one does not support that positive-growth claim. Separate a theorem about sufficiently large inputs from what particular samples actually establish.

#### Respond to student reasoning

**First hint:** What inputs has the evidence actually covered?

If one observed crossover is treated as proof for all later inputs, ask what argument covers the unsampled region. If a decaying exponential is included in a growth theorem, inspect its base. If graph scale hides values, report the display limitation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare short and long input ranges, investigate a crossover and critique an overgeneralized finite-table claim. Keep numerical overflow or display compression distinct from mathematical conclusions.

#### Assessment evidence

Assess accurate common-input comparisons, appropriate scale changes, qualified eventual behavior and the evidence/theorem distinction. Do not grade an unsupported global claim as justified because its answer happens to be true.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $f(t)=80(1/2)^t$ units, values at $0,1,2$ are $80,40,20$. One-unit average rates are $-40$ and $-20$ units/time, while both output ratios are $1/2$. Fixed percentage decay gives a smaller absolute loss from a smaller starting amount; it does not give a fixed additive rate.

If a learner answers $1/2$ for the rate, cue “Are you measuring a factor or units lost per time?”; then set up $(f(2)-f(1))/(2-1)$; next substitute $(20-40)/1$, leaving interpretation. Fade with $3\cdot2^t$ on consecutive unit intervals (rates $3,6$). For exponential versus polynomial comparison, check $2^3=8<27$ and $2^{10}=1024>1000$; this establishes a changed ordering at the inspected inputs. It does not prove every later real input obeys the same inequality.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
