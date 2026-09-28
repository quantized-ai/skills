# Tutor: Lesson 14.4: Comparison of sequence models

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Differences, ratios and equal-index comparisons. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 14.2 curriculum](../lesson-2-arithmetic-sequences/lesson.md) and [tutor](../lesson-2-arithmetic-sequences/tutor.md); [Lesson 14.3 curriculum](../lesson-3-geometric-sequences/lesson.md) and [tutor](../lesson-3-geometric-sequences/tutor.md). Load both files for any selected review.

## Teaching boundaries

Finite data support but do not uniquely determine an unstated infinite pattern. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Under a geometric assumption, a₀=3 and a₂=12. Is a₁ necessarily 6?

**Private reasoning key:** No. r²=4 allows r=2 or −2, so a₁ is 6 or −6. An additional sign or odd-index datum is needed.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Differences, ratios, and model selection

Curriculum reference: **Differences, ratios, and model selection** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Is the constant sequence 4,4,4 consistent with arithmetic and geometric models?

**Agent key:** Yes: d=0 and r=1 both work. Family labels need not be exclusive.

**Worked example:** Under a geometric assumption, $a_0=2,a_2=8$. Is r uniquely determined over the reals?

**Worked reasoning:** $2r^2=8$ gives r=±2; the skipped odd index leaves the sign ambiguous.


#### Teaching sequence

Compare differences and valid ratios on the same allowed index steps. A nonzero constant sequence fits arithmetic d=0 and geometric r=1; the zero sequence needs care because ratios are undefined although many recurrence multipliers preserve it. With skipped indices, solve for possible ratios and retain sign ambiguity such as r=±2 from a two-step factor four.

#### Respond to student reasoning

**First hint:** Are the index gaps and possible zero terms accounted for?

If classifications are forced to be exclusive, test a constant sequence. If missing odd-index information is invented to select a sign, state what the supplied data cannot determine. If a ratio uses a zero denominator, use a recurrence relation instead.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Sort finite data as consistent with arithmetic, geometric, both or neither under stated assumptions; include skipped indices, zeros and competing continuations.

#### Assessment evidence

Require valid invariant checks, overlap/degenerate cases and honest identification limits. Finite agreement alone must not be promoted to proof of a unique infinite rule.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Comparative growth

Curriculum reference: **Comparative growth** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** On integer indices 0 through 6, find the first n where $2^n>3n+1$.

**Agent key:** Values do not exceed through n=3, where 8<10; at n=4,16>13, so the first is 4.

**Worked example:** Does one observed crossover prove permanent dominance for every larger index?

**Worked reasoning:** No. That requires a general argument or the stated eventual-growth theorem, not a single finite comparison.


#### Teaching sequence

Evaluate competing models at the same allowed integer indices and state the search interval. For a first crossover, check preceding indices or use a valid monotonic argument covering them. Separate that finite finding from eventual dominance, which is a general claim needing its hypotheses and justification. A later crossover can be hidden by a short table or graph window.

#### Respond to student reasoning

**First hint:** Are you testing strict exceedance at the same allowed indices?

If one sampled inequality is called permanent, ask what covers later inputs. If continuous and integer crossings are confused, return to the sequence domain. If comparisons use different indices, align the rows.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Compare arithmetic/geometric models on bounded domains, vary strictness and starting index, and investigate how changing a scale or ratio changes an observed crossover.

#### Assessment evidence

Assess accurate common-index comparison, first-qualifying logic in the stated domain and the finite-evidence/general-claim distinction. Do not manufacture a unique crossover from insufficient observations.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Under a geometric assumption, $a_0=3,a_2=12$ implies $3r^2=12$, so $r=2$ or $-2$. Both match the known even-index values, but predict $a_1=6$ or $-6$. An observed positive odd-index term can resolve the ambiguity; a positive-base requirement for continuous exponentials must not be imposed on this integer sequence without stating it.

Cue “What information about sign survives an even power?”; then set up $r^2=4$; next exhibit $r=2$ as one possibility, leaving the other and checks. Fade by adding $a_1=-6$ to select $r=-2$. In comparing $2^n$ with $3n+1$ on integers $0$ through $6$, list both at common indices: equality at $0$, no strict exceedance through $3$, first exceedance at $4$. A first crossing in a finite domain does not itself prove permanent dominance.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
