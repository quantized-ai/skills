# Unit 7: Text and numeric operations

**Input:** Produce arithmetic expressions, CASE results, and intentional NULL behavior from [Unit 6](06_row_expressions.md).

**Output:** Independently derive requested text and numeric values, repair conversion/precision defects, and identify adaptations for PostgreSQL and MySQL.

## Proficiency criteria

- **C1:** Combine concatenation, case conversion, trimming, substrings, and replacement to produce exact requested text outputs, including specified NULL behavior.
- **C2:** Use rounding, absolute values, casts, and division to produce numeric outputs matching specified units and precision.
- **C3:** Diagnose truncation, lossy or misleading conversion, and floating-point approximation using contrasting inputs; repair what is repairable and identify unrecoverable information loss.
- **C4:** Identify concrete syntax or behavior changes needed for the submitted expressions in PostgreSQL and MySQL, supported by supplied official reference excerpts.

## Supporting knowledge

- SQLite provides `||`, upper/lower, trim, substr, replace, round, and abs; substring positions and trimming arguments affect results. Built-in case conversion is limited to ASCII. [Scalar functions](https://www.sqlite.org/lang_corefunc.html).
- CAST can lose information and is not input validation; integer division truncates toward zero, while real operands permit fractional results. Rounding an approximation does not restore lost exactness. [Expressions](https://www.sqlite.org/lang_expr.html).
- Compare concatenation syntax and NULL behavior explicitly across [SQLite](https://www.sqlite.org/lang_corefunc.html), [PostgreSQL](https://www.postgresql.org/docs/current/functions-string.html), and [MySQL](https://dev.mysql.com/doc/refman/8.4/en/string-functions.html); similar function names do not establish equivalence.

## Practice

1. Apply individual operations to short text and numeric cases, then combine them (C1–C2).
2. Repair outputs exposing integer division, malformed numeric text, missing text, or premature rounding (C1–C3).
3. Independently transform a new table and annotate expressions needing dialect adaptation using reference excerpts (C1–C4).

## Assessment

**Task:** Supply fresh messy text and numeric rows, target output rules covering every listed operation, and official dialect reference excerpts. Include NULLs, malformed numeric text, a fractional quotient, and a precision defect. Request corrected SQLite results and concrete adaptation notes for both target engines; additional database installations are unnecessary.

**Evidence:** SQL and before/after text values (C1); numeric results checked against independent calculations and stated precision (C2); failing inputs, diagnosis, and repaired or explicitly unrecoverable cases (C3); expression-specific adaptations citing the provided references (C4).

**Critical failures:** Conversion manufactures apparently valid measurements from invalid input; truncation or rounding materially changes required values; dialect equivalence is asserted despite a demonstrated behavior difference.

## Check questions

1. Why might a successful cast fail to establish that the source text was valid?
2. How can division discard information before rounding runs?
3. What NULL input would distinguish two concatenation implementations?

## Boundaries

**Deferred/excluded:** Date/time functions belong to [Unit 8](08_dates_times_and_timezones.md); stored-data cleanup is excluded.
