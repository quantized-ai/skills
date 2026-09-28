# Unit 14 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 14.1: Sequence notation and domains

### Terms and indices

[Curriculum](lesson-1-sequence-notation-and-domains/lesson.md#concepts) · [Tutor guidance](lesson-1-sequence-notation-and-domains/tutor.md#terms-and-indices)

**A — Prompt:** Let $a_n=2n+1$ for integers 0≤n≤3. List its domain and values.

**Key:** Inputs {0,1,2,3} give values 1,3,5,7. The graph has four isolated points, not a continuous segment.

**B — Prompt:** Is $a_{1.5}$ part of that sequence, though the formula accepts 1.5?

**Key:** No. The stated sequence domain contains only integers; a continuous extension is a different function.

**Generation checks:** Vary initial indices and finite endpoints; count and plot only permitted indices.

### Recursive definitions and initial values

[Curriculum](lesson-1-sequence-notation-and-domains/lesson.md#concepts) · [Tutor guidance](lesson-1-sequence-notation-and-domains/tutor.md#recursive-definitions-and-initial-values)

**A — Prompt:** For $a_0=2$, $a_n=3a_{n-1}-1$ for n≥1, find $a_1,a_2$.

**Key:** $a_1=5$, then $a_2=14$; substitute earlier values, not indices.

**B — Prompt:** Does $a_n=a_{n-1}+a_{n-2}$ for n≥2 determine a unique sequence by itself?

**Key:** No. Two initial values such as $a_0,a_1$ are required; different choices give different sequences.

**Generation checks:** State initial values and recurrence bounds, especially for second-order recurrences.

## Lesson 14.2: Arithmetic sequences

### Constant differences and explicit formulas

[Curriculum](lesson-2-arithmetic-sequences/lesson.md#concepts) · [Tutor guidance](lesson-2-arithmetic-sequences/tutor.md#constant-differences-and-explicit-formulas)

**A — Prompt:** An arithmetic sequence has $a_2=7,a_5=16$. Find d and a rule.

**Key:** Three steps increase by 9, so d=3 and $a_n=7+3(n-2)=3n+1$ on its stated integer domain.

**B — Prompt:** Do the first three terms 2,5,8 prove every later term follows the arithmetic rule?

**Key:** No. They are consistent with difference 3, but other continuations exist unless an arithmetic model is assumed.

**Generation checks:** Include skipped indices and explicit model assumptions; do not infer unique continuation from finite data alone.

### Arithmetic recursive and explicit representations

[Curriculum](lesson-2-arithmetic-sequences/lesson.md#concepts) · [Tutor guidance](lesson-2-arithmetic-sequences/tutor.md#arithmetic-recursive-and-explicit-representations)

**A — Prompt:** Convert $a_0=5$, $a_n=a_{n-1}-2$ for n≥1 to an explicit rule.

**Key:** $a_n=5-2n$ for integers n≥0.

**B — Prompt:** For $a_n=4+3n$ with n≥1, what is the first term and a recursive form?

**Key:** $a_1=7$; recursion $a_n=a_{n-1}+3$ for n≥2. The intercept 4 is not the first allowed term.

**Generation checks:** Preserve the starting index in conversions and distinguish intercept from first term.

## Lesson 14.3: Geometric sequences

### Constant ratios and explicit formulas

[Curriculum](lesson-3-geometric-sequences/lesson.md#concepts) · [Tutor guidance](lesson-3-geometric-sequences/tutor.md#constant-ratios-and-explicit-formulas)

**A — Prompt:** Give four terms when $a_1=3$ and r=-2.

**Key:** $3,-6,12,-24$; signs alternate and magnitudes double.

**B — Prompt:** If $a_1=5$ and r=0, what are subsequent terms?

**Key:** The first stays 5 and all later terms are zero. Do not use 0/0 to estimate ratios or redefine the first term through an ambiguous power.

**Generation checks:** Include zero/all-zero sequences, negative ratios, and magnitude growth separately from sign.

### Geometric recursion and percent change

[Curriculum](lesson-3-geometric-sequences/lesson.md#concepts) · [Tutor guidance](lesson-3-geometric-sequences/tutor.md#geometric-recursion-and-percent-change)

**A — Prompt:** Write a recursion for an amount initially 80 that loses 25% each step.

**Key:** $a_0=80$, $a_{n+1}=0.75a_n$ for n≥0; next values are 60 and 45.

**B — Prompt:** Can a geometric sequence with ratio -3 be extended as $a_0(-3)^t$ for every real t?

**Key:** Not as an all-real-valued exponential: fractional real exponents can be undefined. The integer-index sequence is valid.

**Generation checks:** Include total loss, zero change, and the distinction between sequence ratios and continuous exponential bases.

## Lesson 14.4: Comparison of sequence models

### Differences, ratios, and model selection

[Curriculum](lesson-4-comparison-of-sequence-models/lesson.md#concepts) · [Tutor guidance](lesson-4-comparison-of-sequence-models/tutor.md#differences-ratios-and-model-selection)

**A — Prompt:** Is the constant sequence 4,4,4 consistent with arithmetic and geometric models?

**Key:** Yes: d=0 and r=1 both work. Family labels need not be exclusive.

**B — Prompt:** Under a geometric assumption, $a_0=2,a_2=8$. Is r uniquely determined over the reals?

**Key:** $2r^2=8$ gives r=±2; the skipped odd index leaves the sign ambiguous.

**Generation checks:** Include both/neither classifications and skipped-index sign ambiguity; no unjustified unique model claim.

### Comparative growth

[Curriculum](lesson-4-comparison-of-sequence-models/lesson.md#concepts) · [Tutor guidance](lesson-4-comparison-of-sequence-models/tutor.md#comparative-growth)

**A — Prompt:** On integer indices 0 through 6, find the first n where $2^n>3n+1$.

**Key:** Values do not exceed through n=3, where 8<10; at n=4,16>13, so the first is 4.

**B — Prompt:** Does one observed crossover prove permanent dominance for every larger index?

**Key:** No. That requires a general argument or the stated eventual-growth theorem, not a single finite comparison.

**Generation checks:** State the finite search interval and distinguish first observed crossover from eventual dominance.

## Lesson 14.5: Finite sums

### Sigma notation and arithmetic sums

[Curriculum](lesson-5-finite-sums/lesson.md#concepts) · [Tutor guidance](lesson-5-finite-sums/tutor.md#sigma-notation-and-arithmetic-sums)

**A — Prompt:** Evaluate $\sum_{k=2}^{5}(3k-1)$.

**Key:** Terms 5,8,11,14 give 38; there are 5-2+1=4 terms, also $4(5+14)/2=38$.

**B — Prompt:** Explain arithmetic pairing for 1+2+3+4+5.

**Key:** Pair a forward and reverse copy: five pairs each total 6, so twice the sum is 30 and the sum is 15. Odd term counts do not invalidate pairing.

**Generation checks:** Distinguish an individual term from the sum and verify first term, last term, and count.

### Derivation of finite geometric sums

[Curriculum](lesson-5-finite-sums/lesson.md#concepts) · [Tutor guidance](lesson-5-finite-sums/tutor.md#derivation-of-finite-geometric-sums)

**A — Prompt:** Evaluate the first four terms' sum with first term 3 and ratio 2.

**Key:** $3+6+12+24=45$, also $3(1-2^4)/(1-2)=45$. Finite sums permit r>1.

**B — Prompt:** Derive the geometric finite-sum formula and handle r=1.

**Key:** Subtract $rS_N$ from $S_N$ to get $(1-r)S_N=a(1-r^N)$. Divide only if r≠1; at r=1 the sum is Na.

**Generation checks:** Include r=0,1, negative, and growing ratios; do not import infinite-series convergence restrictions.

## Lesson 14.6: Finite geometric models

### Totals from repeated proportional change

[Curriculum](lesson-6-finite-geometric-models/lesson.md#concepts) · [Tutor guidance](lesson-6-finite-geometric-models/tutor.md#totals-from-repeated-proportional-change)

**A — Prompt:** A process contributes 12,6,3,1.5 units in four rounds. Find total contribution.

**Key:** Sum $12\sum_{k=0}^3(1/2)^k=22.5$ units. The last contribution 1.5 is not the total.

**B — Prompt:** A ball starts with a 10-meter drop and rebounds to 5 then 2.5 meters; stop at the top of the second rebound. Find traveled distance.

**Key:** Initial drop 10, first rise 5, next fall 5, second rise 2.5 total 22.5 meters. Do not count a final fall that has not occurred.

**Generation checks:** Define stopping time, first term, and repeated legs before selecting a sum formula.

### Repeated deposits and accumulation timing

[Curriculum](lesson-6-finite-geometric-models/lesson.md#concepts) · [Tutor guidance](lesson-6-finite-geometric-models/tutor.md#repeated-deposits-and-accumulation-timing)

**A — Prompt:** Deposit 100 at each year end for three years at a hypothetical fixed 10% annual rate. Value just after deposit 3?

**Key:** $100(1.1^2+1.1+1)=331$. Principal is 300 and modeled growth 31, with no fees or withdrawals.

**B — Prompt:** Move those three deposits to the beginning of each year, keeping valuation at the end of year 3.

**Key:** Every deposit gains one more period: $1.1\cdot331=364.10$. At zero rate either schedule totals 300.

**Generation checks:** State timing, rate period, fixed-rate assumptions, fees, and withdrawals explicitly; these are hypothetical mathematical models.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Terms and indices](lesson-1-sequence-notation-and-domains/tutor.md#terms-and-indices) | Require allowed index set, correct values and notation, discrete representation and distinction between formula evaluation and membership in the defined sequence. |
| [Recursive definitions and initial values](lesson-1-sequence-notation-and-domains/tutor.md#recursive-definitions-and-initial-values) | Assess complete initial information, recurrence bounds, dependency-order computation and nonuniqueness when information is missing. Do not assume every recurrence starts at n=1. |
| [Constant differences and explicit formulas](lesson-2-arithmetic-sequences/tutor.md#constant-differences-and-explicit-formulas) | Require difference per step, anchored formula, domain and all given-value checks, plus an explicit statement of the model assumption behind continuation. |
| [Arithmetic recursive and explicit representations](lesson-2-arithmetic-sequences/tutor.md#arithmetic-recursive-and-explicit-representations) | Assess explicit rule, initial value, recurrence bound and agreement on the stated integer domain. Formula equivalence outside that domain is not needed to establish the sequence. |
| [Constant ratios and explicit formulas](lesson-3-geometric-sequences/tutor.md#constant-ratios-and-explicit-formulas) | Require correct terms/rule, valid ratio division, initial-index handling and zero/sign cases. Do not assume a finite geometric-looking prefix uniquely determines an unstated infinite continuation. |
| [Geometric recursion and percent change](lesson-3-geometric-sequences/tutor.md#geometric-recursion-and-percent-change) | Assess retained factor, initial value, update bound, explicit agreement and discrete-versus-continuous domain interpretation. Do not infer a physical model from a negative-ratio algebraic sequence without context. |
| [Differences, ratios, and model selection](lesson-4-comparison-of-sequence-models/tutor.md#differences-ratios-and-model-selection) | Require valid invariant checks, overlap/degenerate cases and honest identification limits. Finite agreement alone must not be promoted to proof of a unique infinite rule. |
| [Comparative growth](lesson-4-comparison-of-sequence-models/tutor.md#comparative-growth) | Assess accurate common-index comparison, first-qualifying logic in the stated domain and the finite-evidence/general-claim distinction. Do not manufacture a unique crossover from insufficient observations. |
| [Sigma notation and arithmetic sums](lesson-5-finite-sums/tutor.md#sigma-notation-and-arithmetic-sums) | Require correct bounds, term count, endpoint values, total and pairing explanation. Do not confuse a_n with the sum through n. |
| [Derivation of finite geometric sums](lesson-5-finite-sums/tutor.md#derivation-of-finite-geometric-sums) | Require cancellation derivation, correct N versus N−1 roles, r=1 handling and valid finite-domain use. Keep infinite-series claims out of this lesson's finite-sum evidence. |
| [Totals from repeated proportional change](lesson-6-finite-geometric-models/tutor.md#totals-from-repeated-proportional-change) | Assess physical accounting, first term/ratio/count, exact finite total, units and reasonableness. Correct use of a sum formula cannot repair an incorrectly modeled list. |
| [Repeated deposits and accumulation timing](lesson-6-finite-geometric-models/tutor.md#repeated-deposits-and-accumulation-timing) | Require timeline, compatible rate period, correct exponents, total/principal distinction and boundary handling. Formula recall without correct timing is insufficient. |
