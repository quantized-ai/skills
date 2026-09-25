# Lesson 1.1: Relations and function notation

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Outcome

The student can decide whether a relation is a function, identify its domain and range, and evaluate and interpret function notation.

## Scope

### Teach

- Relations as input-output pairings.
- The single-output condition for a function.
- Domain and range of finite relations.
- The vertical-line test.
- Evaluation of numerical and algebraic inputs in function notation.
- Interpretation of inputs, outputs, units, and domain restrictions in context.

### Defer

- Interval and set-builder notation.
- Inverse functions.
- Transformations and composition.
- Formal proofs about functions.

## Agent workflow

1. Establish the input and output quantities before discussing notation. If diagnostic entry is useful, check classification and substitution separately; honor an explicit request for explanation or assessment.
2. Use the finite-representation task below to see whether the student can connect a rule, table, and graph. Ask for a reason for one match before revealing correctness. If needed, use the classification calibration example to explain the single-output condition.
3. Use the notation error analysis after the student can substitute a complete input. Ask them to repair the first invalid equality and explain why; then let them evaluate an algebraic input with less support.
4. Vary repeated outputs, conflicting inputs, and excluded inputs independently. Keep finite graphs as isolated points unless connectivity is stated. Return to the student's first explanation and invite a revision after feedback.
5. Use fresh assessment tasks for every missing required representation and case. Record classification and notation evidence separately; a revised worked answer does not establish independent mastery.

## Reasoning task for learning and practice

**Purpose:** connect representations of one function and expose grouping errors without adding inverse-function content. This locally authored task is for learning or practice. Present one part at a time and keep the key hidden until feedback is appropriate.

**Prompt:** A rule is $f(x)=x^2$ with complete domain $\{-2,0,2\}$. Which table matches it: $(-2,4),(0,0),(2,4)$ or $(-2,-4),(0,0),(2,4)$? Describe the complete graph. Explain whether sharing output $4$ is a problem.

**Agent key:** The first table matches; graph only its three isolated points. Each input has one output, and shared outputs are allowed. Joining the points would add inputs not in the stated domain. A correct table choice without explaining the domain is incomplete diagnostic evidence.

**Respond to reasoning:** If the student joins points, ask whether input $1$ is allowed. If repeated outputs are rejected, ask which single input receives two different outputs. After repair, ask the student to create one additional pair that would break the function; for example $(2,0)$ conflicts with $(2,4)$.

**Next prompt:** For $p(x)=3x^2-1$ on $\mathbb R$, a hypothetical student writes $p(-2)=3(-2)^2-1=-13$. Locate the first invalid equality and repair it.

**Agent key:** Substitution is correct; the numerical simplification is wrong because $(-2)^2=4$. The value is $11$. Have the student explain the role of the parentheses before moving to an independent algebraic-input task.

## Criteria

### Classify relations and identify domain and range

#### Knowledge

A relation pairs inputs with outputs. It is a function exactly when every input in its domain has one output. Different inputs may share an output. The domain is the set of inputs; the range is the set of attained outputs. A graph represents a function of its horizontal coordinate exactly when every vertical line meets it at most once.

Finite domain and range sets list each distinct value once. They do not include unlisted intermediate values.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Is $\{(-1,2),(3,2),(-1,2)\}$ a function? Give its domain and range and explain.
- **Key:** Yes: the repeated identical pair introduces no conflicting output. Domain $\{-1,3\}$; range $\{2\}$. Distinguish a harmless repeated pair from two different outputs for one input.
- **Worked model:** In $\{(0,1),(0,4),(2,4)\}$, input $0$ has two outputs, so this is not a function. Its domain is still $\{0,2\}$ and range $\{1,4\}$; nonfunctions also have domains and ranges. A vertical line through $x=0$ meets both plotted points.
- **First hint:** “Which outputs are attached to the same input?” If the student rejects repeated outputs, compare two different people having the same age; keep input identity explicit.
- **Generation check:** For finite sets, deduplicate identical pairs before checking conflicts. A graph test must specify the full graph or limit the conclusion to the displayed portion.

#### Learn

- Contrast a repeated input with conflicting outputs against different inputs sharing one output.
- Connect the same single-output condition across ordered pairs, tables, mappings, and graphs.
- Introduce the vertical-line test as a graphical check of conflicting outputs for one input.
- Model extracting distinct domain and range values from one finite relation.

#### Practice

Generate a mixture of ordered-pair, table, mapping, and described-graph tasks. Include repeated outputs, repeated identical pairs, and at least one conflicting-input case. Ask the student to justify the classification and list domain and range rather than provide only a label.

When an error occurs, first determine whether the student confused inputs with outputs, treated repeated outputs as invalid, or filled gaps in a finite set.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#classify-relations-and-identify-domain-and-range) and generate fresh questions using this coverage checklist.

Use fresh representations and require:

- one function with repeated outputs;
- one nonfunction containing an input with different outputs;
- one graph or graph description requiring the vertical-line test; and
- the distinct domain and range of a finite relation.

Do not state the single-output rule in the assessment prompt.

#### Mastery evidence

The student correctly classifies every required representation, identifies the decisive input when a relation is not a function, permits repeated outputs, and lists the exact finite domain and range without invented values. Encourage listing each element once; redundant repeats in set notation warrant notation feedback, not a different mathematical judgment.

#### Misconceptions

- **Repeated outputs violate the function rule:** The student incorrectly requires outputs to be unique.
- **Every possible input must appear:** The student treats values outside the stated domain as missing outputs.
- **Finite sets contain their gaps:** The student turns a finite domain or range into a continuous interval.
- **Horizontal-line test:** The student uses horizontal rather than vertical lines to test whether a graph is a function of $x$.

### Evaluate and interpret function notation

#### Knowledge

In $f(x)$, $f$ names the function and the parenthesized expression is its complete input; the notation is not multiplication. Evaluating a formula means substituting the complete input into every occurrence of its variable while preserving grouping and signs. The input must belong to the stated domain.

In context, an equation such as $T(4)=18$ states that input quantity $4$, with its input unit, corresponds to output quantity $18$, with its output unit.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** For $f(x)=x^2-2x$, find $f(-3)$ and explain what is substituted.
- **Key:** $(-3)^2-2(-3)=15$; the complete input replaces both occurrences of $x$.
- **Worked model:** Let $C(n)=4n+3$ dollars for whole-number ticket counts $0\le n\le8$. Then $C(2)=11$ means two tickets cost 11 dollars; $C(2.5)$ is undefined in this model even though the expression $4(2.5)+3$ can be evaluated. For allowed $t+1$, $C(t+1)=4(t+1)+3=4t+7$, with $t+1$ a whole number in $[0,8]$.
- **First hint:** “Put the entire input in parentheses wherever the variable appears.” For contextual errors, ask which quantity is counted and which is measured in dollars.
- **Generation check:** Supply domain restrictions rather than silently introducing rational-domain techniques. Accept an exact substituted expression when the prompt does not require expansion.

#### Learn

- Contrast function notation with multiplication notation.
- Demonstrate substitution of a number, a negative value, and an algebraic expression using parentheses.
- Connect a function statement to the names and units of the contextual quantities.
- Check domain restrictions before evaluating.

#### Practice

Generate tasks using linear, quadratic, and simple rational formulas. Vary the input among positive numbers, negative numbers, and algebraic expressions. Include contextual interpretations and at least one input excluded by a stated domain.

If the student makes a sign or distribution error, target substitution and grouping rather than reteaching function classification.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#evaluate-and-interpret-function-notation) and generate fresh questions using this coverage checklist.

Require independent performance on:

- one numerical evaluation involving a negative input;
- one algebraic-input evaluation requiring parentheses;
- one domain-validity decision; and
- one contextual interpretation naming both quantities and their units.

#### Mastery evidence

The student substitutes the complete input into every occurrence, simplifies correctly, rejects excluded inputs, and interprets notation without treating the function name as a factor.

#### Misconceptions

- **Function name as multiplication:** Interpreting $f(x)$ as $f\cdot x$.
- **Partial substitution:** Replacing only one occurrence of the variable.
- **Lost grouping:** Substituting a negative or algebraic input without needed parentheses.
- **Reversed quantities:** Treating the output as the input or assigning the wrong units.

## Lesson completion

Mark this lesson complete only when both criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric). Report which criterion needs more work rather than assigning a single undifferentiated lesson score.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance) and [MAP teacher guidance](../teaching-sources.md#mathematics-assessment-project-teacher-guidance). Mathematical reference: [OpenStax 3.1 Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
