# Unit 6: Row expressions

**Input:** Construct compound conditions and intentionally handle missing values from [Unit 3](03_compound_filtering.md).

**Output:** Independently derive per-row measures and conditional labels that match supplied formulas and missing-value rules.

## Proficiency criteria

- **C1:** Translate arithmetic formulas into inline expressions with correct precedence and parentheses, matching independently calculated row values.
- **C2:** Use CASE to assign labels or values with correct branch ordering, boundary behavior, and fallback handling.
- **C3:** Diagnose NULL propagation and implement an explicit requested missing-value policy without confusing unknown values with observed zero.

## Supporting knowledge

- Arithmetic expressions operate on each selected row; multiplication precedes addition and subtraction unless parentheses change evaluation.
- CASE selects the first satisfied branch; ELSE supplies a fallback, and omission of ELSE can yield NULL.
- Ordinary arithmetic with a NULL operand yields NULL; CASE can implement the requested alternative. [SQLite expressions](https://www.sqlite.org/lang_expr.html).

## Practice

1. Implement parenthesized addition, subtraction, and multiplication formulas and verify selected rows by hand (C1).
2. Repair overlapping CASE branches and missing-value behavior using threshold, NULL, and zero cases (C2–C3).
3. Independently derive measures and labels for a new single-table request (C1–C3).

## Assessment

**Task:** Supply a fresh table and specification requiring inline arithmetic and conditional labels, including overlapping conditions, threshold endpoints, missing operands, and observed zeros. Use integer addition, subtraction, and multiplication within an ordinary numeric range. Require a repair of a flawed expression as part of the deliverable.

**Evidence:** Executed SQL and derived output with independent sample calculations (C1); branch-outcome annotations for overlaps, thresholds, and fallback cases (C2); NULL/zero result checks and a diagnosis of the repaired expression (C3).

**Critical failures:** Formula grouping changes the requested measure; branch ordering misclassifies required cases; missing values are silently replaced contrary to the specification.

## Check questions

1. Which row would reveal a missing pair of arithmetic parentheses?
2. What happens when two CASE conditions are true for one row?
3. How can replacing an unknown quantity with zero change the meaning of a result?

## Boundaries

**Deferred/excluded:** Division, casts, rounding, and text operations belong to [Unit 7](07_text_and_numeric_operations.md); date arithmetic belongs to [Unit 8](08_dates_times_and_timezones.md).
