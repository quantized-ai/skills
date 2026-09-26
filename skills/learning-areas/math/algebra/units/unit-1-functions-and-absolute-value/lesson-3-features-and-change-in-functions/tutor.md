# Tutor: Lesson 1.3: Features and change in functions

Agent-facing delivery guidance for the [curriculum](lesson.md). Read both files with the [shared agent guide](../agent-guide.md) before tutoring. The curriculum defines content, objectives, and proficiency; this file supplies activities and evidence collection. Keep calibration keys private until feedback is appropriate. Use the [assessment bank](../assessment.md) for calibration and the [question-generation specification](../question-generation.md) for fresh assessments.

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)

## Teaching boundaries

Use the content and objectives in [lesson.md](lesson.md#concepts) to determine what to teach. Keep these later topics deferred during this lesson.

### Defer

- Instantaneous rate of change and derivatives.
- Optimization methods.
- Formal continuity.
- Regression and model fitting.

## Agent workflow

1. Establish what the representation actually supplies: exact formula, complete graph, or sampled observations. Separate sign, direction of change, extrema, and average rate in the diagnosis.
2. Use the paired records below to let the student test a claim about zero average change. Obtain a prediction before calculation; do not connect sampled points until that modeling assumption is explicitly introduced.
3. Use the formula or table to compute a secant slope and the graph to describe interior behavior. Ask for output-per-input units and an explanation of what the quotient can and cannot establish.
4. Return to feature descriptions with zeros as inputs and intercepts as points. State the endpoint-extremum convention before grading; ask for a concrete comparison when the student calls an extremum absolute.
5. Have the student revise an overgeneralized claim, then independently assess features and change with fresh representations. A correct quotient does not supply missing interpretation evidence.

## Reasoning task for learning and practice

**Purpose:** distinguish endpoint information from interior behavior and sampled data from a specified graph. The records and prompts are locally authored.

**Prompt:** At times $0,2,4$ minutes, sensor A records heights $1,5,1$ meters and sensor B records heights $1,1,1$ meters. Find each average rate from 0 to 4 minutes. A student claims both heights stayed constant throughout because both rates are zero. What does the supplied information justify?

**Agent key:** Both rates are $(1-1)/(4-0)=0$ meters per minute. A is demonstrably nonconstant because its middle recorded value differs. B is constant at the recorded times, but its unobserved behavior is unspecified; zero net change alone proves neither continuous nor constant behavior.

**Respond to reasoning:** If the student uses height divided by time, ask what changed between the endpoints. If they call B globally constant, ask whether an extra observation at minute 1 could differ while preserving all supplied data.

**Follow-up prompt:** Now define each entire graph on $[0,4]$ by joining its successive recorded points with straight segments. Describe their increasing, decreasing, and constant intervals. Is positive height the same as increasing height?

**Agent key:** A increases from 0 to 2 and decreases from 2 to 4, with maximum 5 at minute 2. B is constant on $[0,4]$. Both heights are always positive, including when A decreases. Accept valid monotonic-endpoint conventions. The second question supplies a new assumption; the first answer must not pretend it was known earlier.

## Criteria

### Describe function features

Curriculum reference: **Intercepts, intervals, and extrema** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** On the entire line $f(x)=3-x$, where is $f$ positive and where is it increasing?
- **Key:** Positive for $x<3$; increasing nowhere; decreasing on $\mathbb R$. A positive output says nothing by itself about direction of change.
- **Worked model:** The entire graph joins $(-2,0),(0,2),(2,0)$ with straight segments and includes both endpoints. Its zeros are $-2,2$; horizontal intercepts $(-2,0),(2,0)$; vertical intercept $(0,2)$. It is positive on $(-2,2)$, never negative, increases up to $0$ and decreases after $0$. Its absolute maximum is $2$ at $0$ and minimum is $0$ at both domain endpoints. Under one-sided endpoint comparisons the endpoints are also local minima.
- **First hint:** “Are you describing where the graph is above zero or how its height changes as input increases?”
- **Generation check:** State the entire domain and how points connect; do not infer monotonicity between sampled values. Accept endpoint conventions for monotonic intervals when the comparison property holds; explain the local-extremum convention before grading.

#### Learn

- Contrast a zero such as $x=3$ with the intercept point $(3,0)$.
- Use one graph to contrast positive output with increasing behavior.
- Model complete interval descriptions with correct boundary membership.
- Compare local and absolute extrema and identify an extremum's input location and output value.

#### Practice

Use formulas, tables, and graph descriptions containing multiple intercepts, sign changes, turning points, constant portions, and domain endpoints. Ask for both symbolic features and contextual interpretations when quantities and units are supplied.

Diagnose whether errors arise from confusing coordinates, sign with direction, local with absolute comparison, or open/closed boundary membership.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#describe-function-features) and generate fresh questions using this coverage checklist.

Use a fresh graph or precise graph description that contains:

- at least one zero;
- positive and negative output regions;
- increasing, decreasing, and constant behavior;
- a local extremum; and
- an absolute or endpoint extremum.

Require zeros as inputs, intercepts as points, complete intervals, and extrema with both location and value.

#### Misconceptions

- **Zero as a point:** Reporting $(a,0)$ when asked for a zero, or $a$ when asked for an intercept.
- **Positive means increasing:** Inferring direction of change from the sign of the output.
- **Highest visible nearby point is absolute:** Failing to compare the entire stated domain.
- **Endpoint cannot be an extremum:** Ignoring valid one-sided comparisons.

### Compute and interpret average rate of change

Curriculum reference: **Average rate of change** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** A tank holds 12 liters at 2 minutes and 24 liters at 5 minutes. Find and interpret its average rate.
- **Key:** $(24-12)/(5-2)=4$ liters per minute, a net average increase; this does not establish a constant filling rate.
- **Worked model:** For $h(t)=(t-2)^2$ meters on $[0,4]$ seconds, $h(0)=h(4)=4$, so the average rate is $(4-4)/(4-0)=0$ meters per second. Yet $h(2)=0$: equal endpoints do not make the function constant. The secant line is horizontal even though the graph is not.
- **First hint:** “What are the changes in output and input over this interval?”
- **Generation check:** Use distinct allowed endpoints and output-per-input units. Graph estimates need stated resolution; require an estimate only when the supplied graphical evidence supports it.

#### Learn

- Derive the quotient as change in output divided by the corresponding change in input.
- Demonstrate that reversing both differences preserves the result, while reversing only one does not.
- Connect the quotient to a secant line.
- Contrast net endpoint change with possible interior behavior.

#### Practice

Generate computations from a formula, a table, and readable graph data. Include positive, negative, and zero rates; non-unit input intervals; contextual units; and an example whose interior behavior differs from the net rate.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#compute-and-interpret-average-rate-of-change) and generate fresh questions using this coverage checklist.

Require:

- one exact calculation from a formula or table;
- one justified estimate from a graph;
- correct output-per-input units;
- an interpretation of the sign; and
- an explanation of why the average does not determine all interior behavior.

#### Misconceptions

- **Output over input:** Computing $f(b)/b$ instead of a difference quotient.
- **Mismatched order:** Reversing one difference but not the other.
- **Average equals constant behavior:** Assuming the function has the same rate at every interior point.
- **Zero rate means constant function:** Ignoring equal endpoints with nonconstant behavior between them.

## Lesson completion

Mark this lesson complete only when both criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), including interpretation rather than calculation alone.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance) and [MAP teacher guidance](../teaching-sources.md#mathematics-assessment-project-teacher-guidance). Mathematical reference: [OpenStax 3.3 Rates of Change and Behavior of Graphs](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-3-rates-of-change-and-behavior-of-graphs). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
