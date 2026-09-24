# Lesson 17.7: Randomized treatment comparisons

[Unit 17: Statistical distributions and inference](../unit.md) · [Algebra 2](../../../curriculum.md)

Randomization distributions ask how large a treatment difference chance assignment could produce under a no-effect model. Evidence from that comparison must be separated from practical importance and population reach.

## Learning objectives

- Construct treatment-difference statistics and valid label-randomization distributions.
- Judge observed differences against a no-effect simulation.
- Distinguish statistical evidence, effect magnitude, and causal or population scope.

## Learning outcome

The student can conduct and interpret an informal randomization comparison that respects the experimental design.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Use the same ordered difference statistic for observed and simulated treatment groups.
- Keep outcomes fixed and reassign labels according to the original group sizes and any blocking or pairing.
- Compare using the prespecified extremeness rule and interpret the resulting tail frequency under the no-effect model.
- Qualify the conclusion for practical significance, individual variation, and the population actually represented.

## Concepts

### Concept U17-L07-C01: Randomization distributions under no effect

**Content**

Difference in means/proportions; exchangeability under a null model; reshuffling labels; preserving group sizes.

**Learning objectives**

- **U17-L07-C01-O1:** Construct a treatment-difference statistic and a randomization distribution under a no-effect model.
  - Standards: CCSS HSS-IC.B.5 (direct).
- **U17-L07-C01-O2:** Explain why reshuffling treatment labels reflects the original random assignment and preserves outcomes.
  - Standards: CCSS HSS-IC.B.5 (direct).

**Proficiency criteria**

- Define an ordered treatment-difference statistic and calculate it consistently for observed and randomized assignments.
- Hold observed outcomes fixed while reallocating labels in a way that preserves the original group sizes and any blocking or pairing.
- Explain why the no-effect model permits label reassignment and why changing the experimental design would simulate a different process.

**Explanation**

For a completely randomized experiment with fixed group sizes, choose a statistic such as mean A minus mean B. Under the sharp no-treatment-effect model, observed outcomes would not change with labels, so pool them and randomly reassign the original numbers of A/B labels. Recalculate the difference for each shuffle. Do not resample new outcomes for this label-randomization model. If the original design used pairs or blocks, the reshuffling must preserve that design.

**Worked examples**

1. A has outcomes $6,7,8$ and B has $1,2,3$, giving mean difference $7-2=5$. Pool all six values and allocate three distinct observations to A for each randomization.
2. If A receives $1,6,8$, its mean is 5 and B receives $2,3,7$ with mean 4, giving shuffled difference 1. There are 20 equally likely assignments of three out of six, which can be enumerated exactly for this example.

**Exercises**

1. Treatment means are 12.4 and 10.1. Find A minus B. **Answer:** 2.3 outcome units.
2. Why keep group sizes 3 and 3 in the example? **Answer:** They were fixed by the actual random assignment; changing them would simulate a different experiment.

**Assessment**

A randomized experiment has A outcomes $4,6$ and B outcomes $1,3$. Find the observed difference and describe one valid shuffled allocation and its statistic. **Expected:** difference $5-2=3$; e.g. A=$1,6$, B=$3,4$ gives $3.5-3.5=0$; shuffle labels while preserving two per group and all four fixed outcomes. **Rubric (4):** observed and shuffled statistics (2, O1); correct no-effect/design explanation (2, O2).

Objective coverage: **U17-L07-C01-O1**, **U17-L07-C01-O2**.

### Concept U17-L07-C02: Significance, practical size, and causal scope

**Content**

At least-as-extreme differences; two-sided versus directional questions; chance evidence; effect size and design limitations.

**Learning objectives**

- **U17-L07-C02-O1:** Use a randomization distribution to judge whether a treatment difference is unusually large under no effect.
  - Standards: CCSS HSS-IC.B.5 (direct).
- **U17-L07-C02-O2:** Distinguish statistical evidence, practical importance, and the population scope of a causal conclusion.
  - Standards: CCSS HSS-IC.B.5 (direct); CCSS HSS-IC.B.3 (direct); CCSS HSS-IC.B.6 (direct).

**Proficiency criteria**

- Compare the observed effect with the valid no-effect distribution using the prespecified directional or two-sided extremeness criterion.
- Interpret the estimated tail frequency as evidence about the no-effect model without proving an effect or equivalence.
- Distinguish statistical unusualness from practical magnitude and restrict population generalization to what the recruitment and sampling design support.

**Explanation**

Compare the observed statistic to the randomized no-effect distribution using a direction chosen in advance. For a two-sided difference question, count absolute differences at least as large. A small tail proportion indicates that chance assignment alone rarely produces so large a difference under the null model. Statistical unusualness does not determine whether the magnitude matters in practice, and random assignment alone does not establish population representativeness.

**Worked examples**

1. In the six-outcome example, two of the 20 assignments produce absolute differences at least 5: one has +5 and one has −5. The exact two-sided tail proportion is $2/20=0.10$. At a prespecified 5% criterion the data do not supply strong evidence against no effect, despite the visible difference.
2. If an independent experiment has observed difference 4 units and only 18 of 2000 null shuffles have absolute difference at least 4, the estimated tail rate is 0.009. This supports a treatment effect under the design assumptions; whether 4 units is important needs context.

**Exercises**

1. If 75 of 1000 shuffled differences are at least as extreme, calculate the rate. **Answer:** 0.075 or 7.5%.
2. Does failure to meet a 5% criterion prove the treatments equivalent? **Answer:** No; the study may be too imprecise to detect a difference.

**Assessment**

A randomized experiment among volunteers shows a mean difference of 0.2 units. In 5000 valid null shuffles, 40 have absolute difference at least 0.2. Interpret the evidence and name two separate limits on the conclusion. **Expected:** tail rate $0.008$; evidence of an effect under the null/design assumptions; 0.2 may be practically small, and volunteers may not represent the broader population. **Rubric (4):** tail calculation and evidential judgment (2, O1); practical and population-scope limits (2, O2).

Objective coverage: **U17-L07-C02-O1**, **U17-L07-C02-O2**.
