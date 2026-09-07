# Unit 3: Compound filtering

**Input:** Execute single-predicate retrieval and inspect selected rows from [Unit 2](02_basic_retrieval.md).

**Output:** Independently produce and repair compound filters whose returned rows match stated rules, including missing values and boundary cases.

## Proficiency criteria

- **C1:** Combine AND, OR, and NOT with parentheses that implement the intended rule, including a repair of incorrect precedence.
- **C2:** Use IS NULL/IS NOT NULL and account for unknown results so missing values are included or excluded intentionally.
- **C3:** Apply literal-list IN and inclusive BETWEEN with correct membership and endpoint behavior.
- **C4:** Use LIKE with percent and underscore wildcards to match the requested text pattern, rejecting near-matches.

## Supporting knowledge

- NOT binds more tightly than AND, which binds more tightly than OR; parentheses make intended grouping explicit.
- WHERE retains only true conditions; ordinary comparisons with NULL produce unknown. Negation does not turn unknown into true; NULL within a membership list can also produce unknown.
- BETWEEN includes both endpoints. LIKE percent matches zero or more characters; underscore matches one. Default SQLite LIKE folds ASCII case, with different behavior for non-ASCII characters. [SQLite expressions](https://www.sqlite.org/lang_expr.html).

## Practice

1. Predict membership for a small row set, then execute filters that isolate each operator and missing-value case (C1–C4).
2. Repair filters with precedence, NULL, range-endpoint, and wildcard defects; identify a source row exposing each defect (C1–C4).
3. Translate an unfamiliar selection request into a compound query without a skeleton (C1–C4).

## Assessment

**Task:** Instantiate a fresh single-table selection case with combined rules, missing values, literal membership, inclusive ranges, and both wildcard forms. Include a faulty filter to repair and source rows that distinguish plausible incorrect interpretations.

**Evidence:** Final SQL and returned identifiers, plus inclusion/exclusion annotations for precedence counterexamples (C1), NULL cases including negation (C2), membership and endpoints (C3), and pattern near-matches (C4).

**Critical failures:** A filter silently loses required missing-value rows or admits rows forbidden by the combined rule.

## Check questions

1. Why might negating a comparison still omit a NULL row?
2. Which row would expose missing parentheses around an OR condition?
3. How would replacing percent with underscore change the matching set?

## Boundaries

**Deferred/excluded:** Join filtering belongs to [Unit 5](05_joining_tables.md); conditional output expressions to [Unit 6](06_row_expressions.md); subqueries are excluded.
