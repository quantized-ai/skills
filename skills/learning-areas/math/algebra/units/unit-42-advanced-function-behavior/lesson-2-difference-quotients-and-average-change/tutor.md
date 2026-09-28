# Tutor: Lesson 42.2: Difference quotients and average change

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check substitution, factoring, rational denominators and conjugates; diagnose parentheses before simplification.

Within this unit, revisit [the previous lesson](../lesson-1-function-decomposition/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Difference quotients as average change only; defer derivative limits and instantaneous-rate claims.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Symbolic difference quotients:** Write f(x+h) by replacing every input occurrence and put the entire subtracted f(x) in parentheses.

- **Secant slopes and interval rates:** Identify two ordered points and calculate output change over input change in matching order.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A quotient for f(x)=x² is simplified to 2x+h. A student substitutes h=0 in the original definition to call it an average rate over a zero interval. Repair the statement.

**Agent key and discussion:** The original quotient requires h≠0. 2x+h agrees only on that domain; h=0 is not a defined average over distinct endpoints. A limiting interpretation belongs to later calculus and is not established merely by cancellation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Symbolic difference quotients

Curriculum reference: **Symbolic difference quotients** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** After h cancels from a difference quotient, does h=0 become allowed in the original quotient?
- **Diagnostic key:** No; its definition still excludes zero increment.
- **Worked-example prompt:** Find the difference quotient for f(x)=1/x.
- **Worked model and reasoning:** $[1/(x+h)-1/x]/h=-1/[x(x+h)]$, with h≠0,x≠0,x+h≠0. Cancellation of h does not make the original quotient defined at h=0. For a radical, conjugation may simplify while both endpoint domains remain required.
- **First hint:** Combine the two fractions before cancelling h.

#### Learn

- Write f(x+h) by replacing every input occurrence and put the entire subtracted f(x) in parentheses.
- For polynomials expand and factor h; for rational functions combine denominators; for radicals multiply by a conjugate.
- Record x and x+h domain conditions before simplification and retain them afterward.

#### Practice progression

Progress from linear/quadratic quotients to rational and radical cases, then explain each cancellation and complete domain restriction without taking an instantaneous-rate limit.

**Further variation and generation checks:** Cover polynomial, rational and radical functions; retain h≠0 and both input-domain conditions after simplification.

#### Misconceptions and responsive feedback

If the subtraction sign affects only the first term, expand the bracket carefully. If a new simplified denominator conceals an original restriction, evaluate the original two endpoints.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Substitute $x+h$ everywhere the input occurs, subtract the entire original output, use justified algebra, and retain $h\ne0$ and both function-domain conditions.

**Task range to sample:** Cover polynomial, rational and radical functions; retain h≠0 and both input-domain conditions after simplification.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Secant slopes and interval rates

Curriculum reference: **Secant slopes and interval rates** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A graph rises 12 meters in 3 seconds. Is its average rate 12 meters?
- **Diagnostic key:** No; it is 4 m/s.
- **Worked-example prompt:** A position is s(t)=t²+2t meters, with t in seconds. Find the average velocity from t=1 to t=4 and compare reversing endpoint order.
- **Worked model and reasoning:** Values 3 and 24 give $(24-3)/(4-1)=7$ m/s. Reversing both differences gives the same 7; reversing only one changes the sign incorrectly. It is an interval average, not the output 24.
- **First hint:** Write the two ordered coordinate pairs before forming the slope.

#### Learn

- Identify two ordered points and calculate output change over input change in matching order.
- Draw the secant and connect its slope to units and sign.
- Rewrite b=a+h to connect numeric averages with the symbolic difference quotient.
- Compare several intervals without assuming equal averages or claiming an instantaneous derivative.

#### Practice progression

Use formulas, tables and graph readings, include positive/negative intervals and estimate precision, then compare interval averages with corresponding symbolic quotients.

**Further variation and generation checks:** Include formulas, tables and graphs, variable increments and signed rates; distinguish secant average from an instantaneous claim.

#### Misconceptions and responsive feedback

If endpoint order is reversed in only the numerator, reverse both or neither. If output divided by input is used, test a function with a nonzero initial value.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use matching numerator and denominator order, compute rates on valid nonzero intervals, explain units and sign, and distinguish an interval average from an output value.

**Task range to sample:** Include formulas, tables and graphs, variable increments and signed rates; distinguish secant average from an instantaneous claim.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
