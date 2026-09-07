# Unit 4: Whole-result summaries

**Input:** Retrieve rows with a single comparison predicate and inspect their values from [Unit 2](02_basic_retrieval.md).

**Output:** Independently calculate and validate one-row summaries of a selected population, including duplicates, missing values, and empty inputs.

## Proficiency criteria

- **C1:** Use COUNT, SUM, MIN, MAX, and AVG to answer requested whole-result questions over the correct selected rows.
- **C2:** Choose row counts or non-NULL value counts according to the question, with correct denominators for interpreting averages.
- **C3:** Validate the effect of repeated observations and repeated values without silently discarding legitimate contributions.
- **C4:** Predict and verify results for empty selected populations and all-NULL measured values, distinguishing missing results from zero.

## Supporting knowledge

- Aggregate input is the selected row population; whole-result aggregation returns a single summary row.
- COUNT(*) counts rows; COUNT(column) counts non-NULL values. SUM, MIN, MAX, and AVG ignore NULL inputs. With no non-NULL inputs these four return NULL; counts return zero as applicable. Repeated inputs contribute repeatedly. [SQLite aggregates](https://www.sqlite.org/lang_aggfunc.html).

## Practice

1. Calculate small reference summaries by hand, then compare query outputs (C1–C2).
2. Diagnose conflicting reports caused by duplicates, a wrong count, or treating a missing result as zero (C2–C4).
3. Independently summarize a new table and verify ordinary, empty, and all-NULL cases (C1–C4).

## Assessment

**Task:** Supply a fresh single table with numeric measurements, repeated values, NULLs, and a selector field. Request all five summaries for populations selected with single comparisons, including an empty population and one with only NULL measurements. Provide one misleading summary claim for diagnosis.

**Evidence:** SQL, selected source rows, and summary outputs (C1); reconciliation of row count, value count, and average denominator (C2); manual contribution accounting for repeated observations (C3); predicted versus executed empty/all-NULL results and repaired claim (C4).

**Critical failures:** Summaries use the wrong population; NULLs or duplicate observations are silently reinterpreted to force an expected total.

## Check questions

1. How can a nonempty population have a zero value count?
2. Why is an empty sum different from an observed sum of zero?
3. When do equal measurements represent separate valid contributions?

## Boundaries

**Deferred/excluded:** Conditional expressions belong to [Unit 6](06_row_expressions.md); GROUP BY, HAVING, and aggregation after joins belong to [Unit 9](09_grouped_reports.md).
