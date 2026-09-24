# Lesson 14.4: Comparison of sequence models

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Sequence models are compared through equal-step changes, ratios, and common-input tables. The lesson separates evidence about a finite interval from claims about eventual growth.

## Learning objectives

- Select arithmetic or geometric models using numerical and contextual evidence.
- Compare sequence values and locate crossover indices.
- Explain the limits of finite tables when interpreting eventual growth.

## Learning outcome

The student can justify a sequence-family choice and compare its local and eventual behavior with another model.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use input spacing correctly when comparing additive or multiplicative changes.
- Support a model selection with the stated mechanism as well as the observed terms.
- Compare outputs at shared indices and distinguish equality from strict exceedance.
- State which comparisons are established by the available data and which rely on an eventual-growth property or further reasoning.

## Concepts

### Concept U14-L04-C01: Differences, ratios, and model selection

**Content**

Arithmetic versus geometric models; equal index intervals; counterexamples.

**Learning objectives**

- **U14-L04-C01-O1:** Select arithmetic or geometric models from tabular and verbal evidence.
  - Standards: CCSS HSF-LE.A.1a (direct); CCSS HSF-LE.A.1b (direct); CCSS HSF-LE.A.1c (direct).
- **U14-L04-C01-O2:** Justify a selection using differences, ratios, and the meaning of the change.
  - Standards: CCSS HSF-BF.A.2 (direct).

**Proficiency criteria**

- Compare differences and ratios only across equal input intervals, adjusting for skipped indices when necessary.
- Select an arithmetic or geometric family using both numerical evidence and the stated change mechanism.
- Explain why a finite table supports a chosen family without uniquely determining every possible continuation.

**Explanation**

Compare outputs only across equal index intervals. Constant additive change suggests arithmetic; constant multiplicative change suggests geometric. For data at every second index, a ratio is $r^2$, not necessarily the one-step ratio. A short table can match many rules, so specify the assumed family.

**Worked examples**

1. $10,14,18,22$ has differences 4 but unequal ratios; an arithmetic model is $a_n=10+4(n-1)$.
2. Values at $n=0,2,4$ are $3,12,48$. Each two-step ratio is 4. Under a positive-ratio geometric assumption, $r=2$ and $a_n=3(2)^n$.

**Exercises**

1. A quantity gains 7 units per period. Choose a family. **Answer:** Arithmetic, since absolute increments are fixed.
2. A quantity retains 60% each period. Choose a family. **Answer:** Geometric, $r=0.60$, because multiplication is fixed.

**Assessment**

Tables at $n=0,1,2$ give $A:6,9,12$ and $B:6,9,13.5$. Select and justify each model. **Expected:** $A_n=6+3n$ using difference 3; $B_n=6(1.5)^n$ using ratio 1.5. **Rubric (4):** both selections and formulas (2, O1); correct numeric evidence for each (2, O2).

Objective coverage: **U14-L04-C01-O1**, **U14-L04-C01-O2**.

### Concept U14-L04-C02: Comparative growth

**Content**

Tables and discrete graphs; eventual growth; crossover indices.

**Learning objectives**

- **U14-L04-C02-O1:** Compare arithmetic, geometric, and polynomial sequences using tables.
  - Standards: CCSS HSF-LE.A.3 (direct); CCSS HSF-IF.C.9 (direct).
- **U14-L04-C02-O2:** Distinguish an observed crossover from an unsupported claim that one model always dominates.
  - Standards: CCSS HSF-LE.A.3 (direct).

**Proficiency criteria**

- Compare competing sequence outputs at common integer inputs and identify equality separately from strict exceedance.
- Locate a first crossover within a stated search interval without inferring a universal ordering from an early comparison.
- Distinguish finite tabular evidence from the eventual-growth claim for a positive growing exponential and a fixed polynomial.

**Explanation**

An exponential sequence with positive initial value and ratio greater than one eventually exceeds a growing polynomial, although the crossover can occur late. A few early values do not establish long-term dominance. Tables locate a crossover; persistent dominance needs reasoning about later growth or a stated theorem.

**Worked examples**

1. Compare $A_n=10+3n$ and $B_n=2^n$ for $n=0,1,2,3,4,5$: $A=10,13,16,19,22,25$ and $B=1,2,4,8,16,32$. The first integer crossover is 5.
2. $n^2$ exceeds $2^n$ at $n=3$ ($9>8$), equals it at $n=4$, and is below it at $n=5$ ($25<32$). Initial comparisons do not give one ordering for all $n$.

**Exercises**

1. Compare $3^n$ and $5n$ at $n=1,2,3$. **Answer:** $3<5$, $9<10$, $27>15$.
2. Does $1000+n>1.01^n$ for the first ten indices prove perpetual dominance? **Answer:** No; exponential growth eventually exceeds linear growth.

**Assessment**

Compare $4n$ and $2^n$ at integer $n=1$ through 5; identify equality and the first strict exceedance by $2^n$. State why early linear dominance is insufficient for a global claim. **Expected:** pairs $(4,2),(8,4),(12,8),(16,16),(20,32)$; equality 4, exceedance 5. **Rubric (4):** table and crossover (2, O1); explicit finite-evidence limitation and eventual-growth statement (2, O2).

Objective coverage: **U14-L04-C02-O1**, **U14-L04-C02-O2**.
