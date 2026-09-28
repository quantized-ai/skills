# Tutor: Lesson 42.1: Function decomposition

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check function notation, composition order and elementary domains; name an intermediate quantity before multiplying out formulas.

## Teaching boundaries

Decomposition and contextual order; defer inverse-function construction as a separate mastery requirement.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Decomposing function formulas:** Read operations from inside outward and name each intermediate output.

- **Order and modeled intermediate quantities:** Label each stage's input/output quantity and units before composing.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A model first converts kilograms x to grams, then charges 0.02 per gram. Someone reverses the functions and calls it equally meaningful because both formulas simplify to 20x. Evaluate.

**Agent key and discussion:** Numerical formulas happen to commute here, but the reversed stage accepts grams where kilograms were intended and assigns incompatible intermediate units. Equality of algebraic outputs does not establish a valid model interpretation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Decomposing function formulas

Curriculum reference: **Decomposing function formulas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If g(u)=√u and h(x)=x−4, may g(h(2)) be evaluated over the reals?
- **Diagnostic key:** No; h(2)=−2 is outside g's domain.
- **Worked-example prompt:** Decompose f(x)=√(3x-6) and state the domain through the intermediate function.
- **Worked model and reasoning:** Inner h(x)=3x-6, outer g(u)=√u; composition requires h(x)≥0, so x≥2. Alternatives are possible if they recompose to the same formula and domain.
- **First hint:** Which operation is performed last, and what inputs does it accept?

#### Learn

- Read operations from inside outward and name each intermediate output.
- Choose components whose recomposition gives the original expression, then impose the inner domain and the outer admissibility condition separately.
- Compare alternative decompositions without implying uniqueness; preserve holes even if the final formula simplifies.

#### Practice progression

Decompose two-stage formulas, then three-stage and rational/radical/logarithmic cases, verifying formula and domain in each representation.

**Further variation and generation checks:** Include two- and three-stage polynomial/rational/radical/logarithmic decompositions; verify intermediate domains and distinguish formula equality from function equality.

#### Misconceptions and responsive feedback

If a simplified formula is treated as the same function on a larger domain, test an originally excluded input. If the order is reversed, substitute a small admissible number through both proposed chains.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the inner-to-outer operations, reconstruct the original expression, test each intermediate domain condition, and state any restriction needed for equality of functions.

**Task range to sample:** Include two- and three-stage polynomial/rational/radical/logarithmic decompositions; verify intermediate domains and distinguish formula equality from function equality.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Order and modeled intermediate quantities

Curriculum reference: **Order and modeled intermediate quantities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does applying a fixed fee before a percentage discount necessarily give the same total as after?
- **Diagnostic key:** No; the fee is discounted only in the first ordering.
- **Worked-example prompt:** A price p≥0 receives a 20% discount, then a fixed delivery fee of 6. Compare reversing the order.
- **Worked model and reasoning:** Correct order D(p)=0.8p then F(q)=q+6 gives 0.8p+6. Reversed gives 0.8(p+6)=0.8p+4.8, discounting delivery too. At p=50, totals are 46 and 44.8 in currency units.
- **First hint:** Name what the output of the first stage represents.

#### Learn

- Label each stage's input/output quantity and units before composing.
- Check whether the next stage accepts the previous output physically and mathematically.
- Compare reversed orders with a symbolic formula and an admissible numerical input.
- Regroup three stages using associativity while keeping their original order.

#### Practice progression

Build two-stage contextual chains, compare reverse order, then solve multistage models with intermediate feasibility and unit checks.

**Further variation and generation checks:** Vary physical conversions and multistage models; require units, feasible intermediate values and a justified order rather than algebra alone.

#### Misconceptions and responsive feedback

If algebra permits a composition but units do not, explain the model mismatch instead of calculating blindly. If parentheses are rearranged into a reversed order, follow one input through the actual sequence.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain each intermediate quantity and unit, justify the allowed domain and stage order, demonstrate why reversing order can change the result, and interpret the final output.

**Task range to sample:** Vary physical conversions and multistage models; require units, feasible intermediate values and a justified order rather than algebra alone.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Verify the domain through every stage

Let $h(x)=x^2$ on all reals and $g(u)=\sqrt u$ on $u\ge0$. Then $g(h(x))=\sqrt{x^2}=|x|$ on all reals, whereas $h(g(x))=(\sqrt x)^2=x$ only for $x\ge0$. The intermediate output, not only the simplified formula, determines the domain. This also shows why $\sqrt{x^2}=x$ needs a sign restriction.

If the learner writes $g\circ h=x$ on all reals, ask them to follow $x=-3$ through both stages. Then supply $h(-3)=9$; finally evaluate $g(9)=3$ and leave the general expression. If the formula is right but the domain wrong, ask which stage rejects negative original inputs. Fade with the component formulas supplied but their domains withheld, then ask for a fresh decomposition and full recomposition. Accept alternative components when both formula and domain match.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
