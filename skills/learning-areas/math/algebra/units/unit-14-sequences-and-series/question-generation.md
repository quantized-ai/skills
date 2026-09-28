# Unit 14: generating fresh questions

Read the [agent guide](agent-guide.md) and the selected curriculum/tutor pair via [SKILL.md](SKILL.md#lessons). Generate new questions for every quiz, including the first. The [bank](assessment.md) calibrates correctness and coverage; it is not a fixed test sequence.

## Construction and validation

Select the exact curriculum concept and required proficiency before choosing numbers. Use the task families below and the tutor’s concept guidance. Keep arithmetic, step count, abstraction, and prerequisites appropriate to the requested difficulty. On a retake preserve difficulty unless the student requests a change. A longer quiz can cover several task families; a short quiz reports sampled coverage only.

Construct a complete prompt and independently solve that final prompt. Specify domain, parameters, units, geometry or graph information, and exact versus approximate expectations. Check every restriction, degenerate case, and claimed solution count. Reject underdetermined or contradictory data unless diagnosing that defect is explicitly the task. Verify by an appropriate independent computation or derivation; do not grade from an intended answer alone.

Vary representation, reasoning direction, sign patterns, boundary cases, contextual assumptions, and coefficient data. A numerical variant can support procedural practice but does not by itself demonstrate transfer from a worked template. For transfer, ask for construction, interpretation, critique, or a different representation while retaining the same curriculum concept. Never add later topics solely for novelty.

## Construction recipes for this unit

Choose explicit initial indices and recurrence bounds before generating terms. For arithmetic/geometric data with skipped indices, solve for all possible parameters and preserve zero/sign ambiguity. Build sums from a listed event sequence, not from an assumed formula. For deposits state timing, rate period and valuation date; independently total each contribution. Keep finite sums separate from infinite convergence and distinguish a stipulated family from an arbitrary continuation fitting the same prefix.

## Task families and evidence checks

Each row distinguishes ways to vary a task from the mathematical evidence that must survive that variation. Choose missing cases deliberately. A short quiz samples these requirements; it must not pretend to cover the full unit. Read the linked tutor and curriculum pair before generating.

| Curriculum concept | Practice-to-transfer progression | Key and evidence checks |
| --- | --- | --- |
| [Terms and indices](lesson-1-sequence-notation-and-domains/tutor.md#terms-and-indices) | Use starts at zero and one, finite domains and negative-index domains when specified, then translate lists/tables into indexed points. | Require allowed index set, correct values and notation, discrete representation and distinction between formula evaluation and membership in the defined sequence. |
| [Recursive definitions and initial values](lesson-1-sequence-notation-and-domains/tutor.md#recursive-definitions-and-initial-values) | Move from first-order to simple second-order recurrences, then incomplete definitions and changes of initial values. Ask which data must be supplied before a requested term can be computed. | Assess complete initial information, recurrence bounds, dependency-order computation and nonuniqueness when information is missing. Do not assume every recurrence starts at n=1. |
| [Constant differences and explicit formulas](lesson-2-arithmetic-sequences/tutor.md#constant-differences-and-explicit-formulas) | Use consecutive and skipped indices, negative/zero differences and a reverse rule-to-data task. Compare assumed arithmetic models with finite observations alone. | Require difference per step, anchored formula, domain and all given-value checks, plus an explicit statement of the model assumption behind continuation. |
| [Arithmetic recursive and explicit representations](lesson-2-arithmetic-sequences/tutor.md#arithmetic-recursive-and-explicit-representations) | Convert both directions with different initial indices, decreasing and constant cases, then diagnose a representation pair that disagrees at the first term. | Assess explicit rule, initial value, recurrence bound and agreement on the stated integer domain. Formula equivalence outside that domain is not needed to establish the sequence. |
| [Constant ratios and explicit formulas](lesson-3-geometric-sequences/tutor.md#constant-ratios-and-explicit-formulas) | Use positive, negative, unit and zero ratios, all-zero data and skipped-index information. Ask when a ratio is determined or ambiguous. | Require correct terms/rule, valid ratio division, initial-index handling and zero/sign cases. Do not assume a finite geometric-looking prefix uniquely determines an unstated infinite continuation. |
| [Geometric recursion and percent change](lesson-3-geometric-sequences/tutor.md#geometric-recursion-and-percent-change) | Build percent-change recursions and explicit forms, compare timing conventions and include zero/no-change/negative-ratio boundary cases. | Assess retained factor, initial value, update bound, explicit agreement and discrete-versus-continuous domain interpretation. Do not infer a physical model from a negative-ratio algebraic sequence without context. |
| [Differences, ratios, and model selection](lesson-4-comparison-of-sequence-models/tutor.md#differences-ratios-and-model-selection) | Sort finite data as consistent with arithmetic, geometric, both or neither under stated assumptions; include skipped indices, zeros and competing continuations. | Require valid invariant checks, overlap/degenerate cases and honest identification limits. Finite agreement alone must not be promoted to proof of a unique infinite rule. |
| [Comparative growth](lesson-4-comparison-of-sequence-models/tutor.md#comparative-growth) | Compare arithmetic/geometric models on bounded domains, vary strictness and starting index, and investigate how changing a scale or ratio changes an observed crossover. | Assess accurate common-index comparison, first-qualifying logic in the stated domain and the finite-evidence/general-claim distinction. Do not manufacture a unique crossover from insufficient observations. |
| [Sigma notation and arithmetic sums](lesson-5-finite-sums/tutor.md#sigma-notation-and-arithmetic-sums) | Move from short expansions to non-one starting bounds, missing totals and a derivation of the arithmetic sum. Include negative/zero differences. | Require correct bounds, term count, endpoint values, total and pairing explanation. Do not confuse a_n with the sum through n. |
| [Derivation of finite geometric sums](lesson-5-finite-sums/tutor.md#derivation-of-finite-geometric-sums) | Derive the identity, calculate with different signs and ratios, then infer a missing first term or count from simple exact data with verified uniqueness. | Require cancellation derivation, correct N versus N−1 roles, r=1 handling and valid finite-domain use. Keep infinite-series claims out of this lesson's finite-sum evidence. |
| [Totals from repeated proportional change](lesson-6-finite-geometric-models/tutor.md#totals-from-repeated-proportional-change) | Use repeated contributions, partial journeys and alternate stopping points, then ask the student to construct the summation from a verbal timeline. | Assess physical accounting, first term/ratio/count, exact finite total, units and reasonableness. Correct use of a sum formula cannot repair an incorrectly modeled list. |
| [Repeated deposits and accumulation timing](lesson-6-finite-geometric-models/tutor.md#repeated-deposits-and-accumulation-timing) | Compare beginning/end timing, zero rate and a changed valuation date with all periods explicitly stated. Use hypothetical amounts without implying investment advice or guaranteed returns. | Require timeline, compatible rate period, correct exponents, total/principal distinction and boundary handling. Formula recall without correct timing is insufficient. |

## Exposure and recovery

Compare exact mathematical data and required reasoning with all available learning, practice, and assessment exposure. Rewording a story or renaming a character does not create a fresh item. Keep the exact prompt, checked key, concept, case, representation, and difficulty in the current record. Without supplied past-session history, generate a new task but do not promise it cannot coincide with an unseen prior question. Replace a reported repeat.

If the student asks for a familiar example, use it as review and label the exposure. After hints or taught feedback, choose a genuinely fresh independent task for the affected evidence. If a defect appears after presentation, acknowledge it, invalidate the item without penalty, and generate a checked replacement. This policy supplies many useful variations; it does not establish statistical equivalence of quiz forms or guarantee infinitely many distinct valid questions.

## Checked demand anchors

| Demand | Example and checked key | What changes |
| --- | --- | --- |
| Comparable arithmetic construction | $a_3=10,a_7=22$ gives $d=3,a_n=3n+1$; $a_2=5,a_6=17$ gives $d=3,a_n=3n-1$. | Skipped-index difference and anchored rule in both. |
| Increased demand | Geometric $a_0=3,a_2=12$ gives $r=\pm2$. | Adds sign ambiguity under an even index gap; cannot silently assume a positive exponential base. |
| Timing transfer | Three end-year deposits of $100$ at hypothetical $10\%$ give $331$; beginning-year timing at the same valuation gives $364.10$. | Same sum machinery, different event-to-exponent modeling. |
| Boundary | Finite geometric $2+6+18+54=80$. | Ratio greater than one is valid; no infinite convergence criterion belongs in the task. |

These are intended demand comparisons, not measured equivalence. Match the assessed cases, permitted tools, and assistance as well as coefficient size; a numerical variant alone does not establish transfer.
