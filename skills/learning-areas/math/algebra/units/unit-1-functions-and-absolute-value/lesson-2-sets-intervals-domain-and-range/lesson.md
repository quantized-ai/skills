# Lesson 1.2: Sets, intervals, domain, and range

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Prerequisite

[Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)

## Outcome

The student can represent real sets precisely and determine domain and range without adding or excluding values through a notation or modeling error.

## Scope

### Teach

- Inequality, interval, and set-builder notation.
- Open and closed finite endpoints and unbounded intervals.
- Union and intersection.
- Empty sets, singletons, finite sets, and continuous intervals.
- Domain and range from tables, graphs, formulas with stated domains, and contexts.
- Discrete versus continuous contextual domains.

### Defer

- Formal set theory.
- Compound absolute-value inequalities.
- Function composition and inverse domains.
- Optimization beyond reading attained extrema.

## Agent workflow

1. Start with membership: ask whether a particular input or output belongs to the proposed set before teaching notation. Diagnose set operations separately from domain/range reasoning.
2. Keep one formula fixed and vary only its domain using the task below. Ask the student to identify a witness input for every claimed attained endpoint. Use the calibration examples if they only transform the two endpoints or copy domain into range.
3. Connect each answer to a number-line description and interval or set notation. For union/intersection errors, test one boundary in each original set before naming the operation.
4. Transfer to a context with either indivisible counts or continuous measurements. Require the student to state the assumption that makes the domain discrete or continuous; do not join discrete outputs by default.
5. Invite a revised explanation after feedback. Assess later with an unexposed representation and the remaining required cases, keeping supported revision distinct from independent evidence.

## Reasoning task for learning and practice

**Purpose:** make the domain's effect visible while keeping the algebra unchanged. Use this locally authored comparison for learning or practice, not as a fresh assessment after discussing its key.

**Prompt:** Three functions all use $x^2$, but their complete domains are $A=\{-3,-1,1,3\}$, $B=[-3,3]$, and $C=(-3,3)$. Find each range. For each endpoint you include, name an allowed input producing it. Explain which graph consists only of isolated points.

**Agent key:** Ranges are $\{1,9\}$, $[0,9]$, and $[0,9)$, respectively. In $B$, input $0$ gives the minimum and $\pm3$ give the maximum. In $C$, $0$ is attained but $9$ is not; the output approaches $9$ near either boundary. Only $A$ has a finite isolated-point graph.

**Respond to reasoning:** If the student gives range $\{9\}$ for $B$, request the output at $0$ and one other interior input. If they include $9$ for $C$, ask for an allowed input attaining it. Ask them to revise the range and explain the change.

**Follow-up prompt:** Remove only input $1$ from domain $B$. Does output $1$ disappear from its range?

**Agent key:** No: input $-1$ still gives output $1$; the range stays $[0,9]$. The learner must produce that witness, not just repeat that some holes are harmless.

## Criteria

### Represent and combine real sets

#### Knowledge

Inequality, interval, and set-builder notation can describe the same real set. A bracket includes a finite endpoint and a parenthesis excludes it. Infinity and negative infinity are never included. A union contains values belonging to either set; an intersection contains values belonging to both. Empty sets, singleton sets, finite lists, and continuous intervals are different kinds of sets.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Give $[-2,1]\cap[1,4)$ and explain whether its result is empty.
- **Key:** $\{1\}$, because both sets contain $1$ and share no other values. Accept $[1,1]$ as equivalent singleton notation.
- **Worked model:** Let $A=(-\infty,2)$ and $B=[-1,5]$. Membership in either gives $A\cup B=(-\infty,5]$; membership in both gives $A\cap B=[-1,2)$. The finite set $\{-1,2\}$ contains neither $0$ nor any unlisted value.
- **First hint:** “Test the boundary value in each original set.” For connector errors ask whether membership in one set is enough.
- **Generation check:** Test each finite endpoint in the originals; use parentheses at infinity. Empty, singleton, finite, and interval answers must retain their actual membership.

#### Learn

- Map strict and inclusive inequalities to open and closed endpoints.
- Explain why infinity always receives a parenthesis.
- Contrast a finite set such as $\{1,3\}$ with the interval $[1,3]$.
- Model union and intersection by testing membership, including empty and singleton results.

#### Practice

Generate bidirectional translations among inequalities, intervals, number-line descriptions, and set-builder notation. Include bounded, unbounded, disjoint, empty, and singleton cases. Ask the student to justify endpoint membership and the choice of union or intersection.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#represent-and-combine-real-sets) and generate fresh questions using this coverage checklist.

Require fresh tasks covering:

- a bounded set with one included and one excluded endpoint;
- an unbounded set;
- a union with separated components;
- an intersection producing either a singleton or the empty set; and
- a distinction between a finite set and an interval.

#### Mastery evidence

Every representation has identical membership, all finite endpoints are handled correctly, infinity remains open, and union/intersection results contain exactly the permitted values.

#### Misconceptions

- **Infinity as an endpoint value:** Using a bracket at infinity.
- **Union means overlap:** Applying the both-set condition to a union.
- **Intersection means combine everything:** Retaining values present in only one set.
- **Filling finite gaps:** Replacing a finite set with the interval between its least and greatest values.

### Determine domain and range

#### Knowledge

Domain is the set of allowed inputs. Range is the set of outputs actually attained by those inputs. Tables, graph endpoints, holes, extrema, formula restrictions, stated domains, and contextual constraints determine these sets.

Removing an input removes its output from the range only when no other allowed input produces that output. A context may require a discrete domain, a continuous domain, or additional bounds. The form of the range must be derived; it need not match the form of the domain.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** For $f(x)=x^2$ on $[-2,1)$, give domain and range.
- **Key:** Domain $[-2,1)$; range $[0,4]$. The minimum is attained at the interior input $0$ and the maximum at $-2$; squaring just the two endpoints is insufficient.
- **Worked model:** For $g(x)=x^2$ on $[-2,2]\setminus\{1\}$, the domain has a hole at $1$, but the range remains $[0,4]$: input $-1$ still produces output $1$, and every other output in that interval also has an allowed preimage.
- **First hint:** “Which allowed input produces the proposed missing output?” For extrema errors ask whether the function turns inside the domain.
- **Generation check:** Derive branch images and attained extrema before combining outputs. For contexts, state capacity bounds and whether inputs count indivisible objects or measure continuous quantities.

#### Learn

- Determine allowed inputs before collecting outputs.
- Demonstrate how open endpoints, closed endpoints, holes, and interior extrema affect domain and range.
- Show why an excluded point does not necessarily exclude its output if another input attains it.
- Contrast discrete counts with continuously measurable quantities in context.

#### Practice

Use tables, described graphs, and simple formulas with stated domains. Include a graph with an interior extremum, an excluded endpoint, and a repeated output. Include contexts where inputs are whole-number counts and where inputs vary continuously.

When an answer is wrong, diagnose whether the student projected onto the wrong axis, copied the domain form into the range, mishandled an unattained boundary, or ignored contextual meaning.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#determine-domain-and-range) and generate fresh questions using this coverage checklist.

Require independent work on:

- one finite table;
- one graph or precise graph description with endpoint information and an extremum;
- one formula with a restricted domain; and
- one context requiring a justified discrete or continuous domain and its resulting range.

#### Mastery evidence

The student identifies allowed inputs first, reports only attained outputs, handles endpoints and repeated outputs correctly, and states justified contextual restrictions without filling gaps.

#### Misconceptions

- **Domain and range are interchangeable:** Reading outputs as inputs or projecting onto the wrong axis.
- **Same-shape assumption:** Giving the range the same interval or discreteness as the domain without evaluating outputs.
- **Hole automatically removes an output:** Ignoring another input that attains the same output.
- **Context is always continuous:** Allowing fractional values for a count.

## Lesson completion

Mark this lesson complete only when both criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric). Preserve criterion-level results for later prerequisite checks.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance) and [MAP teacher guidance](../teaching-sources.md#mathematics-assessment-project-teacher-guidance). Mathematical reference: [OpenStax 3.2 Domain and Range](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-2-domain-and-range). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
