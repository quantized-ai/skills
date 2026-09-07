# SQL Querying with SQLite

For SQL beginners who want to answer practical questions from relational data using query concepts transferable across database engines.

## Course outcome

- Query related tables to produce correctly filtered, ordered, and paginated results.
- Produce calculated values and grouped reports; diagnose errors involving missing values, precision, and duplicated rows.
- Identify syntax and behavior requiring adaptation when transferring queries between SQLite, PostgreSQL, and MySQL.

## Prerequisites

- Read rows and columns, compare values, and perform basic arithmetic; no SQL experience required.

## Learning approach

An AI learning agent diagnoses ability, provides necessary explanations and targeted hands-on practice, evaluates observable work, remediates gaps, and permits advancement only after independent proficiency.

## Scope

**Included:** Read-only SQL (DQL) using SQLite, emphasizing transferable concepts and relevant dialect differences.

**Not covered:** Data/schema modification, schema design, administration, performance tuning, subqueries, CTEs, window functions, or advanced analytics.

## Unit flow

| # | Unit | Input | Focus | Output / proficiency gate |
| --- | --- | --- | --- | --- |
| 1 | Relational data | Prerequisites | Tables, relationships, PKs/FKs, constraints; integers, decimal versus float/double precision; text/CHAR versus binary BLOBs; dates/datetimes, booleans; length, nullability, uniqueness; SQLite affinity and enforcement differences. | Map table relationships and diagnose value/constraint mismatches, including SQLite's unenforced declared lengths and decimal precision. |
| 2 | Basic retrieval | Interpret tables and fields (1) | SELECT/FROM; all or selected columns; column/table aliases; single equality/comparison WHERE predicates; multicolumn ORDER BY, ASC/DESC; LIMIT/OFFSET; DISTINCT/ALL. | Retrieve requested rows/columns, control duplicates, and paginate with deterministic ordering. |
| 3 | Compound filtering | Single-predicate retrieval (2) | AND/OR/NOT, precedence and parentheses; NULL's unknown logic, IS NULL/IS NOT NULL; IN, inclusive BETWEEN; LIKE wildcards. | Produce and repair filters combining conditions, missing values, membership, ranges, and patterns. |
| 4 | Whole-result summaries | Filtered retrieval (2) | COUNT, SUM, MIN, MAX, AVG; row versus non-NULL counts; duplicates and empty inputs. | Calculate and validate single-result summaries with correct NULL and duplicate handling. |
| 5 | Joining tables | Relationships (1); compound filters (3) | INNER with ON, LEFT/RIGHT, CROSS, SELF joins; cardinality; outer-join ON versus WHERE filtering. | Produce filtered joins, preserve intended unmatched rows, and diagnose missing or multiplied rows. |
| 6 | Row expressions | Compound filters (3) | Inline arithmetic, precedence, CASE, NULL propagation. | Calculate derived measures and conditional labels with correct missing-value behavior. |
| 7 | Text and numeric operations | Row expressions (6) | Concatenation, case conversion, trimming, substrings, replacement; rounding, absolute values, casts, division and precision. | Derive text and numeric outputs; diagnose conversion and precision errors; identify dialect-specific syntax requiring adaptation. |
| 8 | Dates, times, and timezones | Field types (1); row expressions (6) | SQLite date representations; supported string parsing; year/day/hour extraction; calendar addition and elapsed subtraction; UTC, offsets, local time/DST limitations. | Extract components, shift dates, calculate durations, and compare instants consistently; identify operations beyond SQLite's timezone support. |
| 9 | Grouped reports | Summaries (4); filtered joins (5) | GROUP BY; valid grouped selections; WHERE versus HAVING; aggregation after joins. | Produce grouped reports, filter groups correctly, and repair totals inflated by joins. |
