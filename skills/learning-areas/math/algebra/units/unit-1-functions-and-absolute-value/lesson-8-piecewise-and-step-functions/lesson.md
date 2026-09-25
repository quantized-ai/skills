# Lesson 1.8: Piecewise and step functions

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)

## Outcome

The student can evaluate, graph, and analyze piecewise functions and construct step functions whose branch conditions are complete and compatible.

## Scope

### Teach

- Branch selection from input conditions.
- Evaluation and graphing of piecewise rules.
- Open and closed graph endpoints.
- Compatibility of overlapping branch conditions.
- Whole-function domain and range.
- Step functions and threshold models.
- Floor-function evaluation, including negative inputs.

### Defer

- Ceiling and other rounding functions except as optional contrasts.
- Piecewise inverse functions.
- Formal continuity.
- Recursive definitions.

## Agent workflow

1. Start with a contextual boundary and ask what happens just below, exactly at, and just above it. Use the input conditions before any substitution.
2. Translate between a verbal threshold, its branch rule, and graph markers using the task below. Ask the student to explain why the graph is constant on each interval and why the range is a set of attained fees.
3. Compare a correct branch assignment with a rule containing a gap or conflicting overlap. Test every shared input region; a harmless agreeing overlap is permitted, and a value excluded from one branch may be attained in another.
4. For floor, derive the output from neighboring integers before drawing its steps. Include negative nonintegers and compare the defining inequality with truncation.
5. Revisit the initial boundary explanation after feedback. Independently assess evaluation, complete domain/range, graph markers, overlapping rules, floor, and construction with fresh examples rather than the repaired rule.

## Reasoning task for learning and practice

**Purpose:** make branch boundaries a consequence of a model. This locally authored situation is not a publisher card-sort activity.

**Prompt:** A locker costs a flat 3 dollars for any use lasting $0\le t\le2$ hours and a flat 8 dollars for $2<t\le6$ hours. No other durations are permitted. Write the function, give its domain and range, and explain the graph at $t=2$. A proposed rule uses $2\le t\le6$ for the second branch while leaving the first branch unchanged. Is it valid?

**Agent key:** $L(t)=3$ on $[0,2]$ and $L(t)=8$ on $(2,6]$; domain $[0,6]$, range $\{3,8\}$. At input 2, the first segment has closed point $(2,3)$ and the second has open point $(2,8)$. The proposed overlap is invalid because it assigns both 3 and 8 at 2. Test $1.99,2,2.01$: the correct outputs are $3,3,8$.

**Respond to reasoning:** If the student draws a sloping connection between the steps, ask which duration would cost 5 dollars; none does. If they exclude input 2 entirely, ask which original condition includes it. Invite them to repair the rule and explain why it now gives one output per allowed input.

**Floor bridge:** Ask why the whole set of inputs whose floor equals $-2$ is $[-2,-1)$. The defining inequalities are $-2\le x<-1$; at $-1$ the floor has already changed. This is a different endpoint convention from the locker wording, so require the learner to use each definition rather than copy graph markers mechanically.

## Criteria

### Evaluate and graph piecewise functions

#### Knowledge

A piecewise function assigns formulas to specified input regions. The input condition selects the applicable branch before its formula is evaluated. A closed graph point represents an attained endpoint value; an open point excludes that branch's endpoint value.

Each branch domain is its stated input region intersected with the inputs for which its formula is defined. The whole domain is the union of these branch domains, and the whole range is the union of outputs attained by those branches. Overlapping conditions define a function only when all applicable formulas agree at every shared input. A value excluded from one branch may still belong to the function or range through another branch.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Let $p(x)=x+1$ for $x<1$ and $p(x)=4$ for $x\ge1$. Find $p(1)$ and say whether the open point $(1,2)$ means input $1$ is excluded.
- **Key:** $p(1)=4$; the second branch includes input $1$, so the open point on the first branch does not remove it from the whole domain.
- **Worked model:** Let $q(x)=x$ on $[-1,1)$ and $q(x)=3$ on $[1,2]$. Domain is $[-1,2]$; range is $[-1,1)\cup\{3\}$. Graph the line segment closed at $(-1,-1)$ and open at $(1,1)$, and the horizontal segment closed at $(1,3)$ and $(2,3)$. There are no outputs strictly between $1$ and $3$. Changing the first condition to $[-1,1]$ would assign both $1$ and $3$ at input $1$, so that altered rule is not a function.
- **First hint:** “Which conditions include this exact input?”
- **Generation check:** Check every overlapping input, not just branch endpoints. Formula restrictions also restrict each branch; do not silently choose the first matching branch of a conflicting rule.

#### Learn

- Select the branch by testing the input against every relevant condition.
- Connect inclusive and strict conditions to closed and open graph markers.
- Check overlapping branches for agreement at shared inputs.
- Build the complete domain and range as unions without filling gaps.

#### Practice

Generate rules with two and three branches, finite and unbounded regions, jump points, gaps, and both compatible and conflicting overlaps. Include evaluation at ordinary inputs and exact boundary values. Ask the student to connect symbolic conditions, graph markers, domain, and attained range.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#evaluate-and-graph-piecewise-functions) and generate fresh questions using this coverage checklist.

Use a fresh piecewise rule and require:

- evaluation within each branch;
- evaluation at every branch boundary;
- identification of any conflicting overlap;
- a graph or precise graph description with correct endpoint markers; and
- the complete domain and attained range.

#### Mastery evidence

The student selects branches before evaluating, handles boundaries consistently across notation and graph, detects conflicting outputs, and forms domain and range without filling gaps or discarding values attained elsewhere.

#### Misconceptions

- **Choose a formula before checking the condition:** Evaluating the visually nearest or first branch regardless of input.
- **Open means undefined everywhere at that input:** Ignoring another branch that includes the boundary.
- **Any overlap breaks the function:** Rejecting overlaps whose formulas agree on shared inputs.
- **Range connects graph pieces:** Filling output gaps between attained branch values.

### Evaluate and construct step functions

#### Knowledge

A step function is constant on specified input intervals. Endpoint membership comes from the conditions, not from a visual convention.

The floor function $\lfloor x\rfloor$ is the greatest integer less than or equal to $x$. For each integer $n$, it equals $n$ on $[n,n+1)$. Floor is not truncation toward zero; for example, $\lfloor-1.2\rfloor=-2$.

A threshold model must cover its intended domain without gaps or conflicting outputs. Its range is the set of attained step values, not continuous intervals between them.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Find $\lfloor-1.2\rfloor$ and explain using neighboring integers.
- **Key:** $-2$, because $-2\le-1.2<-1$. Truncating toward zero gives the wrong integer.
- **Worked model:** A flat delivery fee is 4 dollars for $0<w\le2$ kg and 7 dollars for $2<w\le5$ kg; no other weights are served. Then $F(2)=4$, $F(2.01)=7$, domain $(0,5]$, range $\{4,7\}$. Each branch is constant, not a per-kilogram multiplier. For each integer $n$, including negative $n$, the floor equals $n$ for inputs in $[n,n+1)$.
- **First hint:** “Which integer is at or below the input, and is the next integer already too large?” For a pricing boundary, return to the exact wording of the threshold.
- **Generation check:** State whether a context uses continuous measurements or whole-number counts and whether fees are flat or cumulative. Threshold inclusion must come from the context; an unspecified equality convention makes the item incomplete.

#### Learn

- Derive floor values from the greatest-integer definition, especially for negative nonintegers.
- Connect $[n,n+1)$ to the open and closed endpoints of the floor graph.
- Translate verbal thresholds into complete branch conditions.
- Check a constructed rule for gaps, overlaps, and exact-boundary behavior.

#### Practice

Use floor evaluations at positive, negative, integer, and near-integer inputs. Generate threshold contexts such as pricing tiers or quantity bands with varied inclusive conventions. Require the student to test values immediately below, at, and above each boundary.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#evaluate-and-construct-step-functions) and generate fresh questions using this coverage checklist.

Require:

- floor evaluations at a negative noninteger, an integer, and a positive noninteger;
- a floor graph segment with correct endpoint markers;
- construction of a fresh threshold-based piecewise constant rule; and
- verification that the rule covers the intended domain exactly once at each incompatible-output boundary.

#### Mastery evidence

The student applies the greatest-integer definition rather than truncation, handles jump boundaries correctly, constructs complete compatible intervals, and states the range as attained step values.

#### Misconceptions

- **Floor truncates toward zero:** Giving $\lfloor-1.2\rfloor=-1$.
- **Both endpoints follow the same convention:** Closing or opening both ends of every floor interval.
- **Threshold equality is arbitrary:** Failing to assign exact boundary inputs from the contextual rule.
- **Step range is continuous:** Including values between constant outputs.

## Lesson completion

Mark this lesson complete only when both criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), including exact-boundary and negative-input cases.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance) and [MAP teacher guidance](../teaching-sources.md#mathematics-assessment-project-teacher-guidance). Mathematical reference: [OpenStax 3.2 Domain and Range](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-2-domain-and-range). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
