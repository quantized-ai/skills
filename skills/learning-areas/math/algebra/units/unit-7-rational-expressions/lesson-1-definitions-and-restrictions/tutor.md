# Tutor: Lesson 7.1: Definitions and restrictions

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Polynomial definitions, evaluation and division by nonzero numbers. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

This is an independent entry within the unit. Review the listed prerequisite directly if its other-unit files are unavailable.

## Teaching boundaries

Record original inputs before simplifying; a reduced formula is not an automatic domain extension. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Is 0/(x²−9) the zero function on every real input?

**Private reasoning key:** It is zero only for x≠−3,3 and undefined at those two inputs. Its domain is narrower than the unrestricted constant-zero function.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Rational expressions and allowed inputs

Curriculum reference: **Rational expressions and allowed inputs** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Give the real domain and value at 2 of $0/(x-2)$.

**Agent key:** Domain is $\mathbb R\setminus\{2\}$; at 2 it is undefined, not zero.

**Worked example:** Is $x^2+1$ a rational expression?

**Worked reasoning:** Yes: $(x^2+1)/1$ is a quotient of polynomials with a denominator never zero.


#### Teaching sequence

Define a rational expression as a quotient of polynomials whose denominator polynomial is not identically zero. For each input, additionally require its denominator value to be nonzero. A zero numerator does not override this evaluation rule. Express a polynomial as itself over 1 to explain why it belongs to the class.

#### Respond to student reasoning

**First hint:** Is the denominator polynomial identically zero or merely zero at certain inputs?

If 0/0 is assigned zero, ask whether a unique quotient could satisfy denominator times quotient equals numerator. If every denominator polynomial is rejected because it has a root, distinguish a nonzero polynomial from a polynomial nonzero everywhere.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Classify expressions, list excluded inputs from factored denominators, then include zero numerators, constants and multiple roots.

#### Assessment evidence

Require quotient structure, nonzero-denominator-polynomial condition, input restrictions and undefined evaluations. Do not cancel before recording the original exclusions.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Original domains and equivalent formulas

Curriculum reference: **Original domains and equivalent formulas** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Simplify $(x^2-1)/(x-1)$ and state its domain.

**Agent key:** It becomes $x+1$ for $x\ne1$; cancellation does not add the excluded input.

**Worked example:** Do $(x^2-1)/(x-1)$ and unrestricted $x+1$ define the same function?

**Worked reasoning:** No. Their values agree on the first domain, but only the second is defined at 1.


#### Teaching sequence

Make a domain ledger before simplifying. Explain cancellation by dividing a common nonzero factor at allowed inputs. Compare the simplified formula's natural domain with the original expression's inherited domain: the values agree on their common allowed inputs, but functions with different domains are not identical.

#### Respond to student reasoning

**First hint:** What nonzero condition allowed the cancellation?

If a canceled root is restored, evaluate the original quotient there. If equivalent formulas are declared unrelated because their natural domains differ, distinguish equality on a common domain from equality as fully specified functions.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Simplify removable factors, compare original/reduced evaluations and ask whether two formula-domain pairs define the same function. Include constant reduced results.

#### Assessment evidence

Assess original restrictions, valid simplification, retained exclusions and the exact sense of equivalence claimed. A wider reduced formula must not silently redefine the original object.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

Model $(x^2-1)/(x-1)$ by recording $x\ne1$ first, then factoring to $(x-1)(x+1)/(x-1)=x+1$ on that domain. Division by $x-1$ is justified there because it is nonzero. At $x=1$ the original is $0/0$, undefined; the unrestricted polynomial's value $2$ belongs to a different function.

If restrictions disappear, cue “Which input could not be evaluated before simplification?”; next set up $x-1\ne0$; then work $x\ne1$, leaving the restricted answer. Fade with $(x^2-4)/(x-2)$ (key $x+2,x\ne2$). Compare $0/(x-2)$: zero numerator changes the allowed values to zero but cannot admit the forbidden input. Diagnose a response of “zero everywhere” by asking the learner to evaluate the denominator at $2$.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
