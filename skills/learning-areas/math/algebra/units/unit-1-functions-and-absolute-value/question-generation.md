# Generating fresh Unit 1 assessments

[Agent guide](agent-guide.md) · [Calibration bank](assessment.md) · [Lessons](unit.md#lessons)

Generate new questions whenever a student requests a quiz, self-assessment, or reassessment. The lesson criteria are the specification; the calibration bank illustrates what correct mathematical evidence looks like. Do not select a fixed bank question as the default first question, alternate bank versions, or use a fixed sequence of prompts.

## Build a quiz from criteria

1. Establish the requested lesson, topic, length, and difficulty from the conversation. If no length is given, start with a short set or one question at a time. A short quiz samples coverage; do not force the whole unit's completion checklist into it.
2. Select the criteria and required cases before generating prompts. Favor missing evidence on a targeted reassessment; retain comparable difficulty for a retake unless the student asks for a change. Include explanation or interpretation where the criterion requires it.
3. Choose task families from the table below and vary their mathematical features. Do not always begin with the same family or exceptional case. Preserve a sensible progression for a learner who needs it; arbitrary shuffling must not create prerequisite gaps.
4. Construct the question, then independently solve the exact final wording. Create the full key before presenting it. Use the answer-validation procedure in the agent guide; an intended answer used to design a task is not sufficient verification.
5. Compare the candidate with the examples in the lesson and bank and the student's available exposure record. Replace copied questions, rephrasings of the same problem, and repeated combinations of data and reasoning. Ask only after the candidate is valid and suitably fresh.

## Meaningful variation and difficulty

Vary coefficients, domain restrictions, endpoint inclusion, representation, context, direction of reasoning, and the kind of justification requested. Choose variations that remain inside the lesson's Teach scope. For example, an absolute-value equation can ask for a solution set, a distance model, a solution-count explanation, or a diagnosis of missing cases. All can target the same criterion.

Numerical variation is useful for routine practice and procedural checks. It does not by itself count as transfer from a worked example. Each quiz should use more than one task family when its scope and length permit, and mastery evidence must include the distinct reasoning or representation required by the shared rubric. Changing only a character's name or a story's nouns does not make an exposed problem fresh.

Keep arithmetic load, number of steps, abstraction, and prerequisite demands appropriate to the requested level. Use small integers or simple rational values initially; difficulty should come from the intended mathematical idea. A more varied retake should not quietly become a harder test. Do not add nonlinear absolute-value equations, inverse functions, or calculus to manufacture novelty.

## Task families and mathematical constraints

Use the exact lesson criterion as the evidence key. These families guide creation, not a fixed sequence or an exhaustive list. The lesson's Assess checklist still determines required coverage.

| Criterion | Ways to generate distinct tasks | Checks before presentation |
| --- | --- | --- |
| Classify relations and identify domain and range | Construct a complete table or mapping; ask which added pair would break a function; use a precise full-graph description. | Distinguish identical repeated pairs from conflicting outputs. Mark finite versus continuous domains explicitly. |
| Evaluate and interpret function notation | Evaluate negative or algebraic inputs; interpret a statement with units; judge whether a stated input is allowed. | Substitute every occurrence with grouping. Preserve the stated domain even if the formula permits more inputs. |
| Represent and combine real sets | Translate number-line descriptions; construct a set with specified membership; compare union and intersection; alter one endpoint. | Check all boundary memberships. Include empty and singleton results deliberately; infinity is never included. |
| Determine domain and range | Restrict a simple formula; provide a complete table or piecewise-linear graph description; contrast counts and measurements. | Derive attained outputs, including interior extrema. A hole in the input set need not remove its output. |
| Describe function features | Construct a piecewise-linear graph from feasible ordered vertices; ask for features or critique a claim; provide contextual units. | Specify connectivity and endpoints. Calculate exact crossings; distinguish sign from monotonicity and local from absolute extrema. |
| Compute and interpret average rate of change | Use formulas, unevenly spaced table inputs, or graph readings with stated precision; compare equal endpoint rates with different interior data. | Endpoints must be distinct and allowed. Compute output change over input change with units; bound estimates from the supplied resolution. |
| Apply translations | Map marked points; recover a translation from stated correspondences; critique an inside-sign interpretation. | Specify translation alone when recovering parameters; solve the inside input equation and check both coordinates. |
| Apply reflections and scale factors | Use a nonsymmetric complete point set; vary one multiplier; contrast visible and concealed reflections; reason about a zero multiplier. | Use reciprocal horizontal factors and signed coordinate mappings. Analyze zero multipliers from the original domain. |
| Apply and verify combined transformations | Generate an affine inside expression; map a restricted domain/range; recover parameters from sufficient correspondences; compare predicted and actual plotted points. | Factor correctly, preserve endpoint inclusion, and verify that supplied data are jointly possible. Handle underdetermined recovery explicitly. |
| Classify functions by even and odd symmetry | Construct complete symmetric-domain tables; change one value or domain member; compare formulas with sampled observations. | Check domain symmetry and both identities. Ensure the intended class is correct; matching samples cannot prove a global identity. |
| Interpret and graph absolute-value functions | Generate a V-shaped rule; recover one possible formula from sufficient features; compare graphs after a sign change. | Nonzero multipliers for V-shaped tasks. Verify vertex, both slopes, range and zero/one/two intercept cases. |
| Formulate and solve absolute-value equations | Generate an exact-distance context; isolate a linear absolute-value expression; compare positive, zero, and negative bounds; filter by a contextual domain. | Use a nonconstant linear inside expression for standard solution counts. Substitute each candidate into the original equation and apply restrictions. |
| Solve and justify absolute-value inequalities | Translate an interior or exterior distance condition; include negative outside multipliers; diagnose a connector error; vary nonpositive bounds. | Derive the whole set, verify comparison reversal, and test endpoints and every resulting region. Keep exceptional bound cases in coverage. |
| Evaluate and graph piecewise functions | Generate linear or constant branches; ask about gaps, attained ranges, or overlapping conditions; repair a conflicting rule. | Evaluate all applicable branches at shared inputs. Check the whole overlap, not just its endpoints; build unions of branch images. |
| Evaluate and construct step functions | Generate a flat-fee threshold context with explicit inclusions; ask for negative floor evaluations or input intervals yielding a specified floor. | Define continuous versus discrete inputs and flat versus cumulative charges. Test below, at, and above each threshold; derive floor from neighboring integers. |

## Record and compare exposure

For each presented question retain the exact prompt and verified key, criterion, task family, representation, required case, domain type, and intended difficulty in the current session's evidence record. Compare mathematical structure as well as wording. Include questions seen in learning and practice, not just earlier quizzes. Do not record unseen draft candidates as student exposure.

For a fresh attempt after feedback, change the reasoning demand or representation while keeping the target criterion. Deliberate repetition requested by the student is allowed for review, but label it as review rather than new independent evidence.

Use saved history only when the host actually supplies it. Without earlier-session history, still generate a new quiz instead of defaulting to the bank, but do not promise that no question could coincide with an unseen prior session or another student's quiz. If the student reports a repeat, replace it and update the available record. The number of useful variations is very large; reliable coverage and correctness matter more than claiming infinite guaranteed uniqueness.

## Reject, repair, or replace

If a candidate is ambiguous, outside scope, contradictory, unintentionally degenerate, or lacks a verifiable key, repair it and solve it again or choose another family. Never fall back silently to an exposed bank question. If a faulty item has already been presented, acknowledge the defect, invalidate that item's result, and supply a new checked question without penalizing the student.

This generation policy is a local design choice. The [teacher-source record](teaching-sources.md) supports the instructional approach; it does not establish that every generated question is valid or that different quizzes are statistically equivalent tests. Evaluate the tutor with the [generation scenarios](agent-evaluation.md#fresh-question-generation).
