# SQL Querying with SQLite

## Course goal

For SQL beginners, develop transferable querying skills through read-only SQLite work:

- Independently query related tables to return correctly filtered, ordered, and paginated results.
- Produce calculated values and grouped reports, and diagnose missing-value, precision, and duplicated-row errors using inspected results.
- Identify syntax and behavior requiring adaptation when transferring queries between SQLite, PostgreSQL, and MySQL.

## Prerequisites

- Read rows and columns, compare values, and perform basic arithmetic. No SQL experience is required.

## Units

| # | Unit | Input → output |
| --- | --- | --- |
| 1 | [Relational data](01_relational_data.md) | Prerequisite capabilities → relationship map and value/constraint diagnosis. |
| 2 | [Basic retrieval](02_basic_retrieval.md) | Table and field interpretation → selected, filtered, duplicate-controlled, deterministically paginated results. |
| 3 | [Compound filtering](03_compound_filtering.md) | Single-predicate retrieval → combined filters with correct missing-value behavior. |
| 4 | [Whole-result summaries](04_whole_result_summaries.md) | Filtered retrieval → validated single-result summaries. |
| 5 | [Joining tables](05_joining_tables.md) | Relationships and compound filters → joins with intended matches and row multiplicity. |
| 6 | [Row expressions](06_row_expressions.md) | Compound filters → derived measures and conditional labels. |
| 7 | [Text and numeric operations](07_text_and_numeric_operations.md) | Row expressions → transformed values, precision diagnosis, and dialect adaptation notes. |
| 8 | [Dates, times, and timezones](08_dates_times_and_timezones.md) | Field types and row expressions → date components, shifts, durations, and consistent instant comparisons. |
| 9 | [Grouped reports](09_grouped_reports.md) | Summaries and filtered joins → correctly filtered groups and repaired join-inflated totals. |

## Out of scope

Data/schema modification, schema design, administration, performance tuning, subqueries, CTEs, window functions, and advanced analytics.

## Guidance for the AI learning agent

Obey unit scope and ordering. Diagnose existing evidence against individual criteria. Skip explanation and routine practice for demonstrated criteria without waiving their evidence gate. Target gaps by criterion ID with varied practice and fresh reassessment. Assess without step-by-step hints. Require evidence for every criterion and no critical failure before advancing.
