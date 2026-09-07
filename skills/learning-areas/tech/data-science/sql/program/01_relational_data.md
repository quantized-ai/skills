# Unit 1: Relational data

**Input:** Read rows and columns, compare values, and perform basic arithmetic.

**Output:** Independently annotate supplied tables and field descriptions with relationships and evidence-based diagnoses of value/constraint mismatches.

## Proficiency criteria

- **C1:** Map primary and foreign keys to specific related rows, distinguishing valid references, missing references, and repeated foreign-key values.
- **C2:** Classify supplied fields and values as integers, decimal quantities, float/double approximations, text/CHAR, binary BLOBs, dates/datetimes, or booleans; identify representation mismatches.
- **C3:** Diagnose length, nullability, uniqueness, and referential violations against supplied constraints, citing the offending values.
- **C4:** Reconcile supplied SQLite storage and acceptance observations with affinity and enforcement settings, including unenforced declared lengths and decimal precision.

## Supporting knowledge

- Keys identify rows and express relationships; field descriptions specify allowed values independently of observed data.
- Exact decimal intent differs from binary floating-point approximation; text and binary payloads are distinct representations.
- SQLite uses storage classes and, in ordinary tables, affinity; date/time and boolean declarations do not create dedicated storage classes. Declared length and decimal precision arguments are ignored. [SQLite types](https://www.sqlite.org/datatype3.html).
- Constraint behavior depends on the actual declaration and environment: foreign-key enforcement must be supplied as context; SQLite has primary-key nullability exceptions. Diagnose supplied facts without changing settings. [Foreign keys](https://www.sqlite.org/foreignkeys.html), [constraints](https://www.sqlite.org/lang_createtable.html).

## Practice

1. Annotate a small table pair with key references and value categories using a partially completed example (C1–C2).
2. Diagnose contradictory field descriptions, values, and SQLite observations; distinguish business-rule violations from engine rejection (C3–C4).
3. Independently inspect a new table packet containing all required representations and constraints (C1–C4).

## Assessment

**Task:** Supply fresh table snapshots, plain-language field declarations, enforcement context, and observed storage/acceptance results. Have the learner map relationships and diagnose planted mismatches without executing SQL or modifying data.

**Evidence:** Annotated row-reference map (C1); field/value classification (C2); offending-value and constraint annotations (C3); explanations reconciling SQLite observations, including length and decimal cases (C4).

**Critical failures:** Incorrect key mapping invalidates relationships; diagnoses assume declared SQLite lengths or decimal precision enforce the intended limits.

## Check questions

1. When is a repeated foreign-key value consistent with valid relationships?
2. How can an accepted value still violate a field's intended meaning?
3. What evidence distinguishes a decimal declaration from guaranteed exact decimal storage?

## Boundaries

**Deferred/excluded:** Query execution belongs to [Unit 2](02_basic_retrieval.md); type conversion belongs to [Unit 7](07_text_and_numeric_operations.md); schema design and modification are excluded.
