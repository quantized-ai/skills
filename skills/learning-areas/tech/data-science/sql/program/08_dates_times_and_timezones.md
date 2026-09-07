# Unit 8: Dates, times, and timezones

**Input:** Interpret field representations from [Unit 1](01_relational_data.md) and produce row expressions with explicit missing-value behavior from [Unit 6](06_row_expressions.md).

**Output:** Independently extract date components, shift calendar values, calculate elapsed durations, and compare instants while identifying unsupported timezone requirements.

## Proficiency criteria

- **C1:** Interpret SQLite text, Julian-day, and Unix-timestamp representations, select appropriate parsing/modifiers, and flag unsupported or ambiguous supplied strings.
- **C2:** Extract year, day of month, and hour and apply calendar additions that satisfy the requested month-end or leap-day policy.
- **C3:** Calculate elapsed differences in stated units and compare equivalent or ordered instants after consistent UTC normalization.
- **C4:** Diagnose offset-free local-time ambiguity and identify when named-zone or DST requirements exceed SQLite's built-in support; state the missing information or external timezone capability needed.

## Supporting knowledge

- Use date/datetime and strftime for supported inputs and components; use julianday or unixepoch differences for elapsed durations. Select modifiers according to representation, not appearance.
- Calendar shifts differ from fixed elapsed intervals; month/year boundaries need an explicit intended policy.
- Offset-bearing supported strings can be normalized to UTC. The localtime modifier assumes UTC input and uses the host environment; it is not arbitrary named-zone conversion. Built-in local-time/DST handling has platform and historical limitations. [SQLite date/time functions](https://www.sqlite.org/lang_datefunc.html).

## Practice

1. Convert supplied supported representations and inspect extracted components, contrasting unsupported strings (C1–C2).
2. Repair a shift or duration calculation using a month boundary and differently offset representations of an instant (C2–C3).
3. Independently analyze new timestamps, separating computable results from local times requiring additional timezone information (C1–C4).

## Assessment

**Task:** Supply fresh event rows with supported text, Julian-day values, and Unix timestamps; unsupported or ambiguous strings; offset-bearing instants; and local times near a supplied DST transition. Specify component outputs, a calendar-shift policy, and duration units. Provide reference transition facts so assessment does not require memorized timezone rules. Include an arbitrary named-zone conversion request to evaluate feasibility.

**Evidence:** Representation/parsing annotations and executed outputs (C1); component and calendar-shift results checked against boundary expectations (C2); duration and normalized instant comparisons with independent checks (C3); specific ambiguity and support-limit diagnoses identifying missing context or capability (C4).

**Critical failures:** Incompatible representations or unnormalized local times produce incorrect instant comparisons; ambiguous wall times are assigned unique instants without sufficient information.

## Check questions

1. Why can differently offset timestamps denote the same instant?
2. Why might adding a calendar month differ from adding a fixed number of days?
3. What information is needed when a local clock reading occurs twice?

## Boundaries

**Deferred/excluded:** Grouped date reports belong to [Unit 9](09_grouped_reports.md); implementing timezone infrastructure is excluded.
