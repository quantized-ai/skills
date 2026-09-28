# Unit 10: generating fresh questions

Read the [agent guide](agent-guide.md) and the selected curriculum/tutor pair via [SKILL.md](SKILL.md#lessons). Generate new questions for every quiz, including the first. The [bank](assessment.md) calibrates correctness and coverage; it is not a fixed test sequence.

## Construction and validation

Select the exact curriculum concept and required proficiency before choosing numbers. Use the task families below and the tutor’s concept guidance. Keep arithmetic, step count, abstraction, and prerequisites appropriate to the requested difficulty. On a retake preserve difficulty unless the student requests a change. A longer quiz can cover several task families; a short quiz reports sampled coverage only.

Construct a complete prompt and independently solve that final prompt. Specify domain, parameters, units, geometry or graph information, and exact versus approximate expectations. Check every restriction, degenerate case, and claimed solution count. Reject underdetermined or contradictory data unless diagnosing that defect is explicitly the task. Verify by an appropriate independent computation or derivation; do not grade from an intended answer alone.

Vary representation, reasoning direction, sign patterns, boundary cases, contextual assumptions, and coefficient data. A numerical variant can support procedural practice but does not by itself demonstrate transfer from a worked template. For transfer, ask for construction, interpretation, critique, or a different representation while retaining the same curriculum concept. Never add later topics solely for novelty.

## Construction recipes for this unit

Build positive-base models with explicit constant degeneracies, matched time units and a declared continuous or integer domain. Generate points from one rule and independently recover its parameters. Verify numerical roots using a continuous signed bracket and a rounding-safe interval; prove uniqueness separately. For growth comparisons evaluate common inputs and preserve theorem hypotheses; a chosen graph window must not serve as proof of eventual behavior.

## Task families and evidence checks

Each row distinguishes ways to vary a task from the mathematical evidence that must survive that variation. Choose missing cases deliberately. A short quiz samples these requirements; it must not pretend to cover the full unit. Read the linked tutor and curriculum pair before generating.

| Curriculum concept | Practice-to-transfer progression | Key and evidence checks |
| --- | --- | --- |
| [Exponential functions versus power functions](lesson-1-exponential-structure/tutor.md#exponential-functions-versus-power-functions) | Classify exponential, power and constant rules, then evaluate full expressions at positive, zero and negative inputs. Include parameter values that change the classification. | Require variable-position reasoning, coefficient/base conditions, correct full evaluation and justified constant/negative-base exceptions. |
| [Equal-interval ratios](lesson-1-exponential-structure/tutor.md#equal-interval-ratios) | Begin with equal gaps, then unequal gaps and missing outputs. Ask for both a model under an explicit assumption and a critique of data inconsistent with it. | Assess spacing, nonzero outputs, interval-specific ratios, positive per-unit factor and limits of finite evidence. Constant differences are not the exponential invariant. |
| [Percent rates and parameters](lesson-2-growth-decay-and-construction/tutor.md#percent-rates-and-parameters) | Start with one period, then several periods and a reverse rate-from-factor task. Include zero change and model-invalid nonpositive factors as separately classified cases. | Require initial amount, decimal rate, retained factor, period and repeated multiplicative interpretation. Contextual percent conventions and valid base conditions must agree. |
| [Constructing a model from points and recursion](lesson-2-growth-decay-and-construction/tutor.md#constructing-a-model-from-points-and-recursion) | Construct from two points, convert to/from recursion at specified initial indices and compare constant or incompatible data. | Assess positive-base recovery, coefficient, both point checks, complete recursion and handling of equal-output degeneracy. Do not infer a unique family without the model assumption. |
| [Parent graphs for bases 2, 10, and e](lesson-3-exponential-graphs/tutor.md#parent-graphs-for-bases-2-10-and-e) | Match tables, formulas and graph descriptions across both base intervals. Include exact anchors and comparisons of steepness without changing common features. | Require consistent points, domain/range, intercept, asymptote, monotonicity and both end directions. A finite plotted window cannot turn near-zero values into actual zeros. |
| [Transformed exponential graphs](lesson-3-exponential-graphs/tutor.md#transformed-exponential-graphs) | Vary growth/decay bases, shifts and signs; construct from features and compare zero/one x-intercept possibilities. Check every claimed point in the original formula. | Assess mapping, domain/range, asymptote side, existing intercepts and end behavior. Do not merely list parameters without explaining their graph consequences. |
| [Equivalent forms and time scales](lesson-4-time-units-and-the-base-e/tutor.md#equivalent-forms-and-time-scales) | Convert between period-factor and per-unit forms, change units and build doubling/halving formulas. Include noninteger durations under a stated continuous model. | Require interval identification, consistent unit conversion, equivalent checks and distinction between per-period and per-unit change. A sequence interpretation needs an integer domain if real-time interpolation is not assumed. |
| [The constant e and continuous-rate notation](lesson-4-time-units-and-the-base-e/tutor.md#the-constant-e-and-continuous-rate-notation) | Translate continuous parameters into interval factors/effective rates, then reverse that relationship where logarithms are available. Compare models using matched time units. | Assess initial value, sign, units, period factor and effective-percent distinction. Do not imply a physical instantaneous-rate derivation is demonstrated without the needed calculus context. |
| [Common-base equations](lesson-5-exponential-equations/tutor.md#common-base-equations) | Move from direct powers to shifted/scaled exponents and outside constants. Include impossible targets and constant cases rather than forcing a numeric root. | Require base conditions, isolation, justified exponent equality, original verification and accurate all/none classification of degeneracies. |
| [Graphical and numerical solutions](lesson-5-exponential-equations/tutor.md#graphical-and-numerical-solutions) | Bracket simple exponential targets, refine estimates and compare graphs at different scales. Include a proposed uniqueness claim with insufficient support. | Assess original-side representation, evaluated continuous bracket, justified precision, approximate notation and valid uniqueness reasoning. Record required actual technology evidence separately. |
| [Average rates of change for exponentials](lesson-6-rates-of-change-and-comparisons/tutor.md#average-rates-of-change-for-exponentials) | Use equal and unequal intervals, growing and decaying models, and context-specific rate units. Ask why identical percentage changes produce different additive changes. | Require correct difference quotient, signs, units and an explanation distinguishing multiplicative consistency from constant additive rate. |
| [Comparing exponential and polynomial growth](lesson-6-rates-of-change-and-comparisons/tutor.md#comparing-exponential-and-polynomial-growth) | Compare short and long input ranges, investigate a crossover and critique an overgeneralized finite-table claim. Keep numerical overflow or display compression distinct from mathematical conclusions. | Assess accurate common-input comparisons, appropriate scale changes, qualified eventual behavior and the evidence/theorem distinction. Do not grade an unsupported global claim as justified because its answer happens to be true. |

## Exposure and recovery

Compare exact mathematical data and required reasoning with all available learning, practice, and assessment exposure. Rewording a story or renaming a character does not create a fresh item. Keep the exact prompt, checked key, concept, case, representation, and difficulty in the current record. Without supplied past-session history, generate a new task but do not promise it cannot coincide with an unseen prior question. Replace a reported repeat.

If the student asks for a familiar example, use it as review and label the exposure. After hints or taught feedback, choose a genuinely fresh independent task for the affected evidence. If a defect appears after presentation, acknowledge it, invalidate the item without penalty, and generate a checked replacement. This policy supplies many useful variations; it does not establish statistical equivalence of quiz forms or guarantee infinitely many distinct valid questions.

## Checked demand anchors

| Demand | Example and checked key | What changes |
| --- | --- | --- |
| Comparable construction | $(1,6),(3,24)$ gives $3\cdot2^x$; $(1,12),(3,108)$ gives $4\cdot3^x$. | Two-unit ratio, positive square root, then coefficient recovery. |
| Added demand | Rewrite $7\cdot3^{t/2}$ from hours to minutes: $7\cdot3^{m/120}$. | Requires unit conversion and period interpretation, not merely exponent evaluation. |
| Numerical boundary | A bracket $[1.54,1.56]$ straddles rounding boundary $1.55$. | Opposite signs bracket a root but do not alone support one-decimal rounding; refine using actual evaluations. |

These are intended demand comparisons, not measured equivalence. Match the assessed cases, permitted tools, and assistance as well as coefficient size; a numerical variant alone does not establish transfer.
