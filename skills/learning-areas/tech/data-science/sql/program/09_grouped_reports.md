# Unit 9: Grouped reports

**Input:** Validate whole-result aggregates from [Unit 4](04_whole_result_summaries.md) and produce filtered joins with traced multiplicity from [Unit 5](05_joining_tables.md).

**Output:** Independently produce grouped reports with correct row and group filters and repair totals inflated by joins.

## Proficiency criteria

- **C1:** Choose GROUP BY keys that match the requested reporting level and produce the expected aggregate for every group.
- **C2:** Select only grouping columns and aggregate results in these reports, repairing an ambiguous ungrouped selection and explaining why SQLite acceptance alone does not validate it.
- **C3:** Place population conditions in WHERE and aggregate conditions in HAVING, matching intended included rows and retained groups.
- **C4:** Trace each measure to contributing joined rows and repair inflated counts or totals by correcting an erroneous join condition or removing an unnecessary multiplying join.

## Supporting knowledge

- Group keys define what each report row represents; aggregates consume the rows remaining in that group.
- WHERE acts before aggregation; HAVING filters groups afterward. SQLite permits bare selected columns, whose values can depend on a contributing row; do not rely on that extension for these transferable reports. [SQLite grouping](https://www.sqlite.org/lang_select.html).
- A correct join can still repeat a measure stored at a different reporting level; validate contributions before accepting totals. Equal measure values can belong to distinct legitimate records.

## Practice

1. Turn small populations into grouped reports and reconcile each group against its source rows (C1–C2).
2. Repair an ambiguous selected column and misplaced row/group conditions using groups that expose the errors (C2–C3).
3. Independently diagnose and repair a join-inflated report, retaining legitimate repeated contributions (C1–C4).

## Assessment

**Task:** Supply fresh related tables and a report request specifying grouping dimensions, population restrictions, and aggregate thresholds. Include unmatched entities, repeated legitimate amounts, an ambiguous grouped selection, and an inflated report. Ensure inflation is repairable by correcting join keys or dropping an unnecessary join while preserving requested semantics; do not require intermediate aggregation.

**Evidence:** Executed final SQL and group-by-group source reconciliation (C1); repaired selection with explanation of the formerly ambiguous value (C2); inspected pre-group population and retained/excluded group outputs (C3); before/after contribution traces identifying the multiplication and validating repaired totals (C4).

**Critical failures:** Report rows represent the wrong grouping level; aggregate thresholds change the input population incorrectly; totals retain join multiplication or discard legitimate equal-valued contributions.

## Check questions

1. Why can a query run successfully while returning an unjustified descriptive value per group?
2. How would moving a population restriction change the rows available to aggregate?
3. Why does a repeated amount alone fail to prove that its contribution is duplicated?

## Boundaries

**Deferred/excluded:** Subqueries, CTEs, window functions, and advanced analytics remain excluded, including repairs that require intermediate aggregation.
