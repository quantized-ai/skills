# Lesson 1.7: Absolute value inequalities

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Prerequisites

- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)
- [Absolute value functions and equations](../lesson-6-absolute-value-functions-and-equations/lesson.md)

## Outcome

The student can solve an absolute-value linear inequality and justify its complete solution set as an interior or exterior distance condition.

## Scope

### Teach

- Isolation of an absolute-value expression in an inequality.
- Inequality reversal under multiplication or division by a negative number.
- Interior conditions as intersections.
- Exterior conditions as unions.
- Strict and inclusive endpoints.
- Zero and negative isolated bounds.
- Equivalent inequality, interval, and set descriptions.

### Defer

- Nonlinear expressions inside absolute value.
- Systems of absolute-value inequalities.
- Optimization.
- Inequalities requiring numerical approximation.

## Agent workflow

1. Begin with a distance region or graph comparison and ask whether the center belongs. Diagnose nonnegativity and logical connectors before practicing long algebraic manipulations.
2. Use the proposed-solution task below to elicit a counterexample. Then derive the entire set; one confirming point cannot establish that all allowed values have been found.
3. Connect strict or inclusive comparison to boundary membership and number-line notation. When an outside negative multiplier occurs, explain how the isolation step reverses the comparison before choosing an interior or exterior condition.
4. Vary only the bound through positive, zero, and negative values, then vary the comparison symbol. Ask the student to explain each change instead of carrying the positive-bound rule into every case.
5. Once a first method is secure, compare distance, algebra, and a precise graph interpretation. Invite revision after feedback; assess with fresh tasks spanning all required bound cases, endpoints, and connectors.

## Reasoning task for learning and practice

**Purpose:** diagnose `and`/`or` confusion through mathematical evidence. Use this locally authored task for learning or practice after the student understands distance from a center.

**Prompt:** For $|x-4|>3$, one proposed answer is $1<x<7$; another is $x<1$ or $x>7$. Test both claims using $x=4$ and $x=8$, then justify the complete solution set. What happens at 1 and 7?

**Agent key:** At 4 the distance is 0, so the interior proposal includes an invalid point. At 8 the distance is 4, so it must be included. The full condition is $x-4<-3$ or $x-4>3$, giving $(-\infty,1)\cup(7,\infty)$. Endpoints 1 and 7 have distance exactly 3 and fail the strict comparison. The two test points refute the wrong proposal; the distance or case reasoning establishes completeness of the right one.

**Respond to reasoning:** If the student replaces `or` with `and`, ask whether any input can be both below 1 and above 7. If they include endpoints, ask them to substitute one into the original strict inequality.

**Variation prompt:** Replace $>3$ with $>0$, then $>-1$, keeping the expression $|x-4|$.

**Agent key:** The first allows all real inputs except 4; the second allows every real input. Require the nonnegativity explanation. If method comparison would overwhelm the learner, stay with distance first and introduce the algebraic comparison after an independent success.

## Criteria

### Solve and justify absolute-value inequalities

#### Knowledge

For $c>0$:

\[
|u|<c \iff -c<u<c,
\]

and

\[
|u|>c \iff u<-c\text{ or }u>c.
\]

Inclusive comparisons include the finite boundary values. The absolute value must be isolated first, and the comparison reverses whenever an isolation step multiplies or divides by a negative number.

Nonpositive isolated bounds must be resolved using $|u|\ge0$:

- If $c<0$, $|u|<c$ and $|u|\le c$ have no solutions, while $|u|>c$ and $|u|\ge c$ hold for every defined $u$.
- $|u|<0$ is impossible.
- $|u|\le0$ requires $u=0$.
- $|u|>0$ requires $u\ne0$.
- $|u|\ge0$ holds for every defined $u$.

An interior distance condition uses an intersection; an exterior condition uses a union.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Solve $|x+2|\le0$ and explain its solution set.
- **Key:** $\{-2\}$: the only nonnegative distance no greater than zero is zero. This is neither empty nor a two-sided interval of positive length.
- **Worked model:** $-2|x-1|+3\ge-5$ becomes $|x-1|\le4$ after reversing the comparison on division by $-2$. Thus $-4\le x-1\le4$, so $[-3,5]$. Both endpoints satisfy equality and $x=1$ satisfies the original inequality; $x=6$ fails. For $|x-1|>0$, the answer is instead $(-\infty,1)\cup(1,\infty)$.
- **First hint:** “After isolating, is this a distance below a bound or above a bound? Did division change the comparison?”
- **Generation check:** Use a nonconstant linear inside expression. Resolve all zero and negative bounds from nonnegativity before applying positive-bound rules. Check boundaries and each solution/complement region; intersect with a stated restricted domain.

#### Learn

- Interpret upper distance bounds as points inside a central interval and lower bounds as points outside it.
- Connect strict and inclusive comparisons to excluded and included boundary points.
- Isolate the absolute value while tracking any required reversal.
- Handle negative and zero bounds from nonnegativity before considering a two-case rule.
- Translate the result into equivalent interval notation.

#### Practice

Generate inequalities requiring no isolation, addition or subtraction, division by a positive number, and division by a negative number. Include all four comparison symbols and positive, zero, and negative isolated bounds. Ask for both a logical compound inequality and interval or set notation.

When an answer is wrong, identify whether the root cause is a missed comparison reversal, inappropriate positive-bound rule, incorrect `and`/`or` connector, or endpoint membership.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#solve-and-justify-absolute-value-inequalities) and generate fresh questions using this coverage checklist.

Use fresh tasks requiring:

- a strict interior solution;
- an inclusive exterior solution;
- isolation involving a negative coefficient and comparison reversal;
- one zero-bound case;
- one negative-bound case; and
- equivalent interval notation with all components and correct endpoints.

Do not include the conversion rules in the prompt.

#### Mastery evidence

The student isolates by equivalence-preserving operations, handles nonpositive bounds before branching, uses intersection for interior and union for exterior conditions, and reports every allowed component with correct boundary membership.

#### Misconceptions

- **Always split into two linear inequalities:** Applying the $c>0$ rule when $c\le0$.
- **Always use `and`:** Treating an exterior region as an intersection.
- **Always use `or`:** Treating an interior region as a union.
- **No reversal during isolation:** Dividing by a negative value without reversing the comparison.
- **Strictness disappears:** Including boundary points for $<$ or $>$, or excluding them for $\le$ or $\ge$.

## Lesson completion

Mark this lesson complete only when the criterion is **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), with evidence across positive, zero, and negative bounds and both interior and exterior conditions.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance). Mathematical reference: [OpenStax 2.7 Linear Inequalities and Absolute Value Inequalities](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
