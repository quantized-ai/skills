# Fresh-question generation: Unit 43 — Probability and counting

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Define the chance mechanism and sample space before counting. Equal counts imply probabilities only for equally likely outcomes. Match ordered/unordered and replacement conventions in numerator and denominator. Condition only on positive-probability events; use the product definition of independence for zero cases. Disjointness is not independence. State base rates, costs and rejection rules; never promise short-run balancing.

## Constructive families and verification

- **Probability model validity:** enumerate a complete finite sample space or supply nonnegative weights summing to one. Generate event sets from that space, then derive all joint/marginal quantities; do not choose mutually inconsistent probabilities independently. Geometric probability needs a uniform finite positive-area sample region and event intersection.
- **Counting mechanism:** declare order, replacement, restrictions and fairness before constructing numerator/denominator. Enumerate small cases independently to check permutation/combination calculations. For sequential trees update conditional branch counts and sum only disjoint complete paths.
- **Conditioning and independence:** build a nonnegative integer two-way table, compute its margins, and then ask conditionals or test P(A∩B)=P(A)P(B). Include reversed conditionals, disjoint positive events and zero-probability cases. Conditioning on zero is undefined even when product-definition independence is meaningful.
- **Allocation/decision transfer:** count preimages for a proposed random mapping and supply independent repetition for rejection methods. For base-rate decisions choose prevalence, detection and false-positive rates, compute a full outcome table and attach explicit costs before comparing actions. Vary one rate/cost to test sensitivity without inventing a universal recommendation.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [43.1 Sample spaces and events](lesson-1-sample-spaces-and-event-algebra/tutor.md#sample-spaces-and-events) | Include unequal weights, exhaustive sample spaces and set operations; never infer equal likelihood merely from a finite list. |
| [43.1 Theoretical and empirical probability](lesson-1-sample-spaces-and-event-algebra/tutor.md#theoretical-and-empirical-probability) | Compare theoretical and empirical estimates with named trial assumptions; include fluctuation and reject gambler's-fallacy predictions. |
| [43.1 Geometric probability from area](lesson-1-sample-spaces-and-event-algebra/tutor.md#geometric-probability-from-area) | Include partially overlapping regions, holes and sectors; use area of intersection with the sample region and retain finite positive denominator area. |
| [43.2 Addition and multiplication principles](lesson-2-counting-arrangements-and-selections/tutor.md#addition-and-multiplication-principles) | Include restricted products, disjoint cases, overlap corrections and changing stage choices; distinguish code strings from ordinary numbers. |
| [43.2 Permutations and combinations](lesson-2-counting-arrangements-and-selections/tutor.md#permutations-and-combinations) | Cover replacement/no replacement, repeated symbols and probability ratios using matching numerator/denominator conventions. |
| [43.3 Conditional probability in tables and diagrams](lesson-3-conditional-probability-and-independence/tutor.md#conditional-probability-in-tables-and-diagrams) | Require two-way tables, trees, Venn and area interpretations; include zero-probability conditioning as undefined. |
| [43.3 Independence and disjointness](lesson-3-conditional-probability-and-independence/tutor.md#independence-and-disjointness) | Include empirical tables, disjoint nonzero events, zero-probability exceptions and without-replacement dependence. |
| [43.4 Addition and complement rules](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#addition-and-complement-rules) | Include complements, impossible inconsistent supplied probabilities and inclusive/exclusive wording; enforce probability bounds. |
| [43.4 Multiplication along dependent stages](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#multiplication-along-dependent-stages) | Include dependent trees, replacement, zero branches and complementary events; multiply within paths and add disjoint paths. |
| [43.5 Fair random selection](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#fair-random-selection) | Include equal/proportional allocation and rejection schemes; state independent uniform draws and distinguish almost-sure termination from a finite bound. |
| [43.5 Base rates and decision consequences](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#base-rates-and-decision-consequences) | Use nonmedical screening contexts, vary base rates and explicit costs, and require sensitivity rather than a universal decision recommendation. |

## Demand anchors

| Role | Checked task/key | Demand |
| --- | --- | --- |
| Routine dependent stages | One of each from 3 red and 2 blue, two draws without replacement: $3/5$. | Two disjoint ordered paths, updated denominators. |
| Comparable intended retake | One of each from 2 red and 3 blue under the same mechanism: $3/5$. | Same path count and arithmetic; use additional fresh counts for assessment after exposure. |
| Higher demand | Exactly two red in three draws from 3 red and 2 blue: $\binom32\binom21/\binom53=3/5$. | Same final number but more stages or a new combination setup; equal answers do not establish equal demand. |
| Interpretation transfer | A flag has detection rate 90%, defect prevalence 2%, false-positive rate 5%: flagged defect probability $18/67$. | Reversed conditioning and base rates; calculation alone does not select an action without stated costs. |

For the synthetic cost task, keeping a flag costs $L$ only if defective and discarding costs $C$ regardless of state. The threshold is posterior $C/L$ when $L>0$. Change one supplied cost or rate at a time for a controlled sensitivity task; do not invent observational data or claim a universal decision.
