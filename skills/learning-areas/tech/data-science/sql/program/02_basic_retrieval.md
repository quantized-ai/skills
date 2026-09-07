# Unit 2: Basic retrieval

**Input:** Interpret tables, fields, and row identifiers from [Unit 1](01_relational_data.md).

**Output:** Independently execute single-table queries that meet requested projection, selection, duplicate, ordering, and pagination requirements.

## Proficiency criteria

- **C1:** Use SELECT/FROM for all or selected columns, including column and table aliases, with the requested output headings.
- **C2:** Select exactly the requested rows using one equality or comparison WHERE predicate.
- **C3:** Choose DISTINCT or ALL so duplicate projected rows are removed or retained as requested.
- **C4:** Use multicolumn ORDER BY with ASC/DESC and LIMIT/OFFSET to return adjacent pages with no missing or repeated rows on unchanged data, resolving ordering ties.

## Supporting knowledge

- Execute statements and inspect results in a supplied SQLite query interface; quote text literals and qualify fields with table aliases.
- WHERE selects rows; projection defines output columns; DISTINCT compares whole projected rows, while ALL retains duplicates and is the default.
- Sort keys are applied in sequence. Pagination requires an order that distinguishes remaining result rows; adding a source identifier to a DISTINCT projection can change its meaning. [SQLite SELECT](https://www.sqlite.org/lang_select.html).

## Practice

1. Complete short retrieval requests, then remove the query scaffold (C1–C2).
2. Repair a query that changes requested duplicates or paginates tied sort values inconsistently (C3–C4).
3. Independently deliver a varied set of requests over a new table with repeated values and sort ties (C1–C4).

## Assessment

**Task:** Supply a populated SQLite table and fresh browsing requests covering all-column retrieval, aliased projections, single comparisons, retained and removed duplicates, and adjacent pages with mixed sort directions. Keep the data unchanged during pagination.

**Evidence:** Executed SQL and outputs for projections (C1), matched row identifiers checked against source rows (C2), duplicate-retention/removal results (C3), and adjacent page outputs with a tie-breaking explanation (C4).

**Critical failures:** Returned rows or columns contradict the request; ordering ties leave pagination ambiguous; duplicate removal changes required information.

## Check questions

1. Why can adding an identifier change a DISTINCT result?
2. What happens to page boundaries when the requested sort column contains ties?
3. Does a column alias change stored data?

## Boundaries

**Deferred/excluded:** Combined conditions and NULL tests belong to [Unit 3](03_compound_filtering.md); summaries to [Unit 4](04_whole_result_summaries.md); joins to [Unit 5](05_joining_tables.md).
