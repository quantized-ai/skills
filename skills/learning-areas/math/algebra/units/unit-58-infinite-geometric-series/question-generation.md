# Unit 58 fresh-question generation

Use with the [agent guide](agent-guide.md) and the selected curriculum/tutor pair. Every quiz and reassessment uses fresh verified tasks. Calibration prompts establish expected reasoning; they are not a bank to rotate through.

## Construction and verification

1. Select an exact curriculum concept and one missing assessment case. Fix difficulty by reasoning steps and representation demand, not just larger numbers.
2. Vary quantities, context, representation, direction of reasoning and boundary cases. Use available exposure history; without saved history promise variety within this session only. Do not claim literally infinite unique valid tasks within bounded parameters.
3. Supply all necessary data, domains, units, assumptions, tie/timing rules and tolerances. If uniqueness is not intended, ask for the solution set or justified alternatives.
4. Solve privately before sending. Check with a second method, original substitution, enumerated states or independent computation as appropriate. Prepare result, decisive reasoning, accepted equivalents, limitations and likely errors. Reject ambiguous or unverified drafts.
5. A figure must actually be supplied or clearly described with enough exact data; a computed table is not an inspected plot. Estimates need a stated error tolerance supported by the data or bracket.
6. Record generated features and support level. Use a different reasoning direction or representation for transfer; mere coefficient replacement can be useful routine practice but is insufficient by itself for transfer evidence.

## Unit validation

Separate terms, finite partial sums, remainders and limits. Nonzero first term requires absolute ratio below 1; zero streams are exceptions. State the first term at ratio zero directly. Discounted streams need valuation time, payment timing and actual convergence before any perpetuity formula.

## Concept task families

### 58.1: Partial sums and convergence

Generate positive/negative ratios inside and outside the unit interval, r=0,±1 and a=0; distinguish terms from partial sums.

Required coverage: Derivation/limit, all convergence exceptions and no formula value for divergent nonzero streams.

### 58.1: Remainders and required term counts

Choose 0<|r|<1 and explicit strict/nonstrict tolerance; verify candidate integer and preceding integer directly, handle r=0 separately.

Required coverage: Exact/magnitude remainder, indexing, tolerance inequality, minimum integer and zero ratio.

### 58.2: Repeating decimals and accumulation

Vary block length, leading zeros and finite prefixes; verify fraction by multiplication and label physical infinite accumulation as idealization.

Required coverage: Tail indexing, exact reduced fraction, contribution counting and finite/infinite model limits.

### 58.2: Finite versus infinite financial models

Declare fictional rates, valuation time and payment dates; include time-zero additions, finite n, i=0, negative admissible i and g<i/≥i.

Required coverage: Finite sums versus limits, timing, discount ratio, convergence and zero-stream exceptions.

## Independent verification recipe

**Construct:** Choose the initial term and ratio explicitly, including negative ratios, r=0, boundary ratios±1 and zero initial term as a special case. For recurring decimals separate the nonrepeating prefix; for discounted streams put every cash flow on a dated timeline.

**Check before release:** Check the finite partial-sum identity before taking a limit and require |r|<1 for a nonzero infinite geometric series. Verify remainder magnitude |a||r|^N/|1−r| under the convention that N terms start at index 0. For growing cash flows check the discounted ratio, not the nominal growth rate alone.

A second pass must target the likely failure above, not simply repeat the same arithmetic. Retain the checked result, decisive assumption and accepted equivalent responses before exposing the task.

## Task demand anchors

| Demand | Anchor and checked result |
| --- | --- |
| Direct convergent sum | \(a=6,r=1/3\): sum 9. |
| Comparable retest | \(a=8,r=1/5\): sum 10. |
| Added sign/index decision | \(a=6,r=-1/2\): alternating partial sums, limit 4, tail \(4(-1/2)^n\). |
| Accuracy boundary | Strict versus nonstrict error \(1/8\) in the preceding series needs six versus five terms. |
| Application transfer | Fictional \(d=100,i=-.02,g=-.05\): discounted ratio, rather than interest sign alone, determines convergence. |

State whether the number of terms must be positive, identify the first term, and write the tolerance symbol explicitly. For financial tasks specify payment dates, valuation date, rate period and whether the stream actually terminates. Independently check a few dated contributions and candidate term counts before release. Replace all exposed anchors for an independent assessment.
