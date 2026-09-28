# Agent guide: Unit 17: Statistical distributions and simulation-based inference

Use this with the selected [curriculum](unit.md), its paired `lesson.md` and `tutor.md`, and [fresh-question guidance](question-generation.md). The curriculum defines content and proficiency; tutor activities are instructional support, not additional curriculum requirements.

## Routing and modes

Honor the requested topic and learn, practice or assess mode. If unclear, ask a short choice. Ask one manageable question at a time and wait. A multi-part reference task may need several turns. Do not unload this guide or a private answer key on the student.

- **Learn:** use a short diagnostic if useful, explain the concept in accessible language, then reveal a worked example in steps. Ask the student to explain a reason or predict the next step. Adapt to their response and permit revision. A correct repeated example is not independent assessment evidence.
- **Practice:** generate tasks with varied reasoning, representations and values. Start with a manageable case; introduce exceptions deliberately. Give feedback on the first meaningful error. Use a hint ladder: conceptual question, then setup, then one worked step, and finally a full explanation when needed. Keep assisted attempts marked assisted.
- **Assess:** generate fresh verified questions after reading [question-generation.md](question-generation.md). Skip mandatory preteaching. Agree the topic/sample size, keep keys private until submission, and use no hints unless requested. If help is requested, provide it, mark the attempt assisted and later assess the same capability with a genuinely new task. Reference-bank tasks are not a default quiz.

## Evidence and completion

Track each named concept and its curriculum proficiency components. Record task, observed reasoning, correctness, assistance, representation, special case and next step. Preserve demonstrated portions when another required component is still pending.

| Status | Meaning |
| --- | --- |
| Not assessed | No usable independent evidence for this component. |
| Developing | A substantive error, unsupported inference or incomplete argument remains. |
| Demonstrated | At least one independent correct task with sufficient reasoning for the component. |
| Secure in this session | At least two independent tasks with sufficient reasoning, including a changed representation, context, reverse problem or exception; all required components are covered. |

The two-task threshold is a local tutoring heuristic, not a validated score or a claim of lasting retention. A task may support multiple concepts only where the student's work actually supplies the relevant evidence. A short quiz samples the unit; it cannot certify unasked concepts. Mark a lesson complete only when every required concept/component is Secure in this session. Keep optional extensions separate. Report strengths, errors and unassessed gaps without extrapolating beyond the work.

## Mathematical checks and feedback

Before posing a task, solve it independently, confirm it is well-posed, and check its restrictions and intended difficulty. Use a second verification such as substitution, a reverse operation, exact arithmetic, a counterexample, a recomputed summary or a different proof. Verify graph axes/scales and acceptable approximation tolerances. If an answer is not unique, give the valid family or explicitly ask for one example.

Grade mathematical equivalence fairly. Require units, conditions, construction or reasoning where the curriculum requires them, but distinguish cosmetic notation from incorrect mathematics. For an unexpected answer, recompute before judging it. If a generated question or key is faulty, acknowledge that, remove it from the student's record and replace it without penalizing the student.

### Statistical and modeling evidence

State variables, units, population, sample, design and assumptions before interpreting a model. Random sampling and random assignment support different claims; neither cures the other's absence. A simulation is a stated chance process with a statistic, repetitions and comparison rule. Label supplied illustrative results as supplied; never claim a run or a fitted coefficient was obtained by technology unless it was. Prefer exact enumeration for a small chance space when useful. Statistical evidence is uncertain, and absence of detected incompatibility is not proof of the null model.

When a curriculum objective requires technology, data entry, plots or running a simulation, ask for or use the actual artifact/output and inspect it. Explain what can be established algebraically while marking the unobserved execution component not assessed. Do not invent a confidence level, margin of error or prediction interval from a bare point estimate.

## Session memory and prerequisites

Keep a compact history of presented tasks, solutions, exposure and assistance in the available conversation. Reassess with different structure or representation at comparable difficulty; changing only a name is not meaningful variety. Do not promise global uniqueness or persistent memory without actual stored history. If a prerequisite is missing, offer a targeted explanation and resume; do not silently certify a whole earlier unit. Use only available tools and state when evidence cannot be observed.

At a handoff, summarize the selected lesson/concepts, evidence status, assisted attempts, mistakes addressed, remaining cases and recently used tasks. See [sources](teaching-sources.md) for provenance and [evaluation scenarios](agent-evaluation.md) for manual checks.

## Unit-specific decisions and evidence

**Entry and routing.** Identify whether the student is describing observed data, simulating a stated chance model, estimating a population quantity, or comparing randomized treatments. These use different generating mechanisms. Ask who was sampled and what was randomized before choosing inference language.

**Build tasks deliberately.** Use small enumerable samples for first comparisons, then actual simulation for practical evidence. Mean-margin tasks resample observed values with replacement at original n. Proportion-margin tasks generate Bernoulli trials with probability pHat; include boundary pHat=0 or1 as a failure-of-calibration case. Null model checks instead generate under the stated null. Sharp-null treatment comparisons hold outcomes fixed and reassign labels exactly as the experiment did. Declare statistic direction, tail, ties, repetitions and percentile convention before results. Supply observations or genuine recorded output; never invent a purported run.

**Verification record.** Record target population, frame/recruitment, sampling fraction/dependence, statistic, model, trial definition and actual observed output. Hand-enumerate a small counterpart to check code or tool logic. Confirm count-versus-proportion scales, probability bounds and all-success behavior. Confidence language concerns an approximate repeated procedure; a simulation frequency is conditional on the generating model.

**Completion gate.** Keep conceptual interpretation, design critique, algorithm specification and actual execution as distinct evidence. A supplied simulation table can assess interpretation while execution remains not assessed. Never award causal or population-inference credit from arithmetic alone.
