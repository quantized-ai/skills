# Unit 5: Joining tables

**Input:** Map key relationships from [Unit 1](01_relational_data.md) and construct compound filters from [Unit 3](03_compound_filtering.md).

**Output:** Independently query related tables with intended matches, unmatched rows, and multiplicities, repairing join-induced omissions or multiplication.

## Proficiency criteria

- **C1:** Use INNER JOIN with ON to return exactly the intended related row pairs, qualifying ambiguous columns.
- **C2:** Use LEFT and RIGHT joins to preserve the requested side, placing restrictions in ON or WHERE according to the intended treatment of unmatched rows.
- **C3:** Produce an intentional CROSS join and a SELF join using aliases with distinct table roles.
- **C4:** Trace missing or multiplied rows to join conditions and relationship cardinality, then repair faulty queries without hiding the defect through duplicate removal.

## Supporting knowledge

- Each matching pair contributes a row; one-to-many relationships can legitimately repeat one side's values.
- Outer joins extend unmatched rows with NULLs. ON controls matching before that extension; WHERE filters the resulting rows.
- CROSS joins form all pairs; a self join relates separate aliases of one table. Supply a SQLite runtime supporting RIGHT JOIN. [SQLite joins](https://www.sqlite.org/lang_select.html).

## Practice

1. Predict row pairs for small relationships, then execute inner and both outer-join orientations (C1–C2).
2. Build a combination list and a same-table relationship report; inspect alias roles (C3).
3. Independently repair reports with a wrong key, missing condition, or misplaced outer-join filter, tracing source identifiers (C1–C4).

## Assessment

**Task:** Supply fresh related tables with multiple matches, unmatched rows, and a same-table reference, plus a small independent options table. Request matched detail, left- and right-preserving filtered reports, all option pairs, and a self-related report. Include a defective query whose omissions or multiplication are repairable through join conditions or filter placement.

**Evidence:** SQL and source-identifier pairs for inner joins (C1); outputs identifying preserved unmatched rows and filter-placement rationale for both orientations (C2); CROSS and SELF outputs with row-role annotations (C3); before/after row traces explaining the defect and correction (C4).

**Critical failures:** Required unmatched rows disappear; unintended pair multiplication remains or is concealed with DISTINCT; self-join aliases refer to the wrong roles.

## Check questions

1. Which repeated identifiers indicate an expected one-to-many match?
2. How can moving a right-table restriction into WHERE remove left-side rows?
3. What source-row trace distinguishes a wrong key from valid multiple matches?

## Boundaries

**Deferred/excluded:** Aggregation after joins belongs to [Unit 9](09_grouped_reports.md); subqueries and CTEs are excluded.
