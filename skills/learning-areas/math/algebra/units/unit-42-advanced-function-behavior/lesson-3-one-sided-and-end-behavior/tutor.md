# Tutor: Lesson 42.3: One-sided and end behavior

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check domains, factored expressions and piecewise evaluation; distinguish an input approached from one used for direct substitution.

Within this unit, revisit [the previous lesson](../lesson-2-difference-quotients-and-average-change/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Elementary limit/end-behavior reasoning without formal epsilon-delta proofs or differentiation.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Finite one-sided limits:** Read left and right approaches separately using only allowed nearby inputs.

- **Unbounded and nonconvergent behavior:** Determine denominator signs separately on each side for unbounded rational behavior.

- **Behavior at infinity:** Identify the available unbounded ends.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A function equals (x²−1)/(x−1) off x=1, with f(1)=100. Two students answer 100 and 2 for its limit. Ask what each number describes.

**Agent key and discussion:** 100 is the assigned point value. Nearby values equal x+1, so both one-sided limits are 2. A filled point cannot alter nearby approach behavior.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Finite one-sided limits

Curriculum reference: **Finite one-sided limits** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If f(2)=100 but nearby outputs approach 3 from both sides, what is the limit at 2?
- **Diagnostic key:** 3; the assigned point value is a different question.
- **Worked-example prompt:** For f(x)=(x²-9)/(x-3), x≠3, find the one-sided limits at 3 and f(3).
- **Worked model and reasoning:** For nearby x≠3, f(x)=x+3; both limits equal 6. f(3) is undefined. Defining a value at 3 would create an extension rather than change the original evaluation.
- **First hint:** Separate the point value from the behavior of nearby allowed inputs.

#### Learn

- Read left and right approaches separately using only allowed nearby inputs.
- Use a factored nearby-equal expression to justify a finite limit while recording any hole.
- Compare the two sides for two-sided existence and inspect the filled point independently.
- At domain endpoints discuss only the available approach side.

#### Practice progression

Analyze removable holes, assigned mismatched values and piecewise unequal sides through algebra, tables and graphs, including domain-endpoint limitations.

**Further variation and generation checks:** Include piecewise unequal sides, filled/missing points and domain endpoints; require algebraic justification beyond a few samples.

#### Misconceptions and responsive feedback

If substitution at a hole is called proof of nonexistence, evaluate the reduced formula on nearby inputs. If table agreement alone is called proof, ask what algebra or structural condition supports all sufficiently near inputs.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the approach direction, compare the two sides, read filled and missing point values separately, and justify algebraic cancellations on nearby allowed inputs.

**Task range to sample:** Include piecewise unequal sides, filled/missing points and domain endpoints; require algebraic justification beyond a few samples.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Unbounded and nonconvergent behavior

Curriculum reference: **Unbounded and nonconvergent behavior** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a bounded function fail to have a limit?
- **Diagnostic key:** Yes; sin(1/x) oscillates near zero while staying between −1 and 1.
- **Worked-example prompt:** Describe both one-sided behaviors of 1/(x-2) at 2 and compare sin(1/x) near zero.
- **Worked model and reasoning:** Left tends to -∞, right to +∞, so no finite two-sided limit. sin(1/x) stays bounded but oscillates: sequences with reciprocal angles π/2+2kπ and 3π/2+2kπ yield 1 and -1, precluding a single limit.
- **First hint:** Track the denominator's sign separately on each side.

#### Learn

- Determine denominator signs separately on each side for unbounded rational behavior.
- Distinguish unequal finite limits, signed infinity and persistent oscillation rather than using one undifferentiated DNE label.
- For oscillation construct two approaching input sequences with different outputs, demonstrating why finite sampling is insufficient.

#### Practice progression

Contrast poles of odd/even multiplicity, jumps and oscillatory examples; require side-specific explanations and the precise failure of a finite two-sided limit.

**Further variation and generation checks:** Distinguish jumps, signed unbounded behavior and persistent oscillation; do not equate boundedness with convergence or infinity with a real value.

#### Misconceptions and responsive feedback

If infinity is treated as the function's assigned value, separate unbounded nearby behavior from membership in the real domain. If boundedness is called convergence, use the two-sequence comparison.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Analyze signs on each side, avoid treating infinity as a function value, and explain the reason a single finite limit fails rather than only reporting nonexistence.

**Task range to sample:** Distinguish jumps, signed unbounded behavior and persistent oscillation; do not equate boundedness with convergence or infinity with a real value.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Behavior at infinity

Curriculum reference: **Behavior at infinity** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Must a function approach the same value as x→∞ and x→−∞?
- **Diagnostic key:** No; analyze the ends independently and only when the domain contains them.
- **Worked-example prompt:** Find the end behavior of (3x²+1)/(x²+4), and decide whether the graph can cross y=3.
- **Worked model and reasoning:** Divide by x² to get limit 3 at both infinities. Difference from 3 is $-11/(x^2+4)<0$, so this graph never crosses it. Other horizontal asymptotes can be crossed; this conclusion follows from this numerator.
- **First hint:** Study f(x)-3 separately from the limiting ratio.

#### Learn

- Identify the available unbounded ends.
- Use leading terms or division for polynomials/rational functions; use base and exponent signs for exponentials and positive-input domains for logs/real powers.
- State finite versus signed unbounded behavior.
- Test possible finite crossings separately from asymptotic approach.

#### Practice progression

Compare all required function families, both available ends, parameter-dependent growth/decay and finite crossings with algebraic justification.

**Further variation and generation checks:** Cover polynomial/rational/exponential/logarithmic/power families, only ends in the domain, and examples that do cross horizontal asymptotes.

#### Misconceptions and responsive feedback

If a logarithm is assigned an x→−∞ limit on its positive domain, point out the absent inputs. If horizontal-asymptote crossing is declared impossible, inspect the zeros of f−L.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Consider only ends present in the domain, distinguish positive and negative infinity, justify behavior from the function structure, and separate end limits from finite graph intersections.

**Task range to sample:** Cover polynomial/rational/exponential/logarithmic/power families, only ends in the domain, and examples that do cross horizontal asymptotes.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Use signs and repeated inputs to explain failure modes

For $f(x)=1/(x-2)^2$, both sides tend to $+\infty$: squaring makes the denominator positive on both sides. For $1/(x-2)$, the left side tends to $-\infty$ and the right to $+\infty$. Neither has a finite two-sided limit, but their side behavior differs. For $\sin(1/x)$, the inputs $1/(\pi/2+2k\pi)$ and $1/(3\pi/2+2k\pi)$ tend to zero with outputs 1 and $-1$; boundedness does not make those outputs settle.

If the learner reports only “DNE,” ask whether the cause is a jump, unboundedness, or oscillation. For a sign error, cue denominator sign near the target → supply test inputs $2-0.1$ and $2+0.1$ → compute one value and leave the other and general sign argument. Fade by withholding test inputs for a fresh shifted pole with changed multiplicity. Tables suggest behavior; factor signs or the two input families justify it.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
