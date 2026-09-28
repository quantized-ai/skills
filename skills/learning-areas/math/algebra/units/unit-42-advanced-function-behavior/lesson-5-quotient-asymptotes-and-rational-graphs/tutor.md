# Tutor: Lesson 42.5: Quotient asymptotes and rational graphs

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check polynomial division, factorization and one-sided/end behavior; record original exclusions before any cancellation.

Within this unit, revisit [the previous lesson](../lesson-4-continuity-discontinuities-and-graphing-limits/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Rational graphs and quotient asymptotes; defer derivative-based turning-point analysis.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Division and quotient asymptotes:** Perform polynomial division and verify P=QS+R with lower-degree remainder.

- **Complete rational graph analysis:** Factor the original relation and record exclusions first.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A learner claims an asymptote can never be crossed. Test f(x)=x+x/(x²+1) against y=x and justify both the crossing and asymptotic status.

**Agent key and discussion:** Difference x/(x²+1) vanishes at x=0 and tends to zero at both infinities. Thus (0,0) is a valid crossing while y=x remains an oblique asymptote.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Division and quotient asymptotes

Curriculum reference: **Division and quotient asymptotes** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If f(x)=x+1/(x²+1), what is f(x)−x at infinity?
- **Diagnostic key:** It tends to zero, so y=x is the quotient asymptote.
- **Worked-example prompt:** Find the quotient asymptote of (x³+2x)/(x²+1) and any crossings.
- **Worked model and reasoning:** Division gives $x+x/(x^2+1)$. Difference tends to zero at both ends, so y=x is an oblique asymptote. At x=0 remainder is zero and denominator nonzero, giving a crossing at (0,0).
- **First hint:** Divide first, then analyze the remainder term and its domain.

#### Learn

- Perform polynomial division and verify P=QS+R with lower-degree remainder.
- Study R/Q at each unbounded end to justify approaching the quotient graph.
- Solve R=0 together with Q≠0 for crossings.
- Preserve all original exclusions, including exact-division holes; a zero remainder means equality only on the original domain.

#### Practice progression

Derive oblique and higher-degree quotient models, analyze valid/excluded crossings and zero remainder, then justify the vanishing difference rather than a visual resemblance.

**Further variation and generation checks:** Include higher-degree quotients, zero remainder and excluded apparent crossings; require a vanishing-difference argument at each end.

#### Misconceptions and responsive feedback

If the quotient alone is called the exact rational function, substitute an input with nonzero remainder. If every numerator zero is called an asymptote crossing, distinguish R from P.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Produce a correct quotient and proper remainder, verify the vanishing difference, retain all original denominator exclusions, and distinguish an allowed crossing from an excluded input.

**Task range to sample:** Include higher-degree quotients, zero remainder and excluded apparent crossings; require a vanishing-difference argument at each end.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Complete rational graph analysis

Curriculum reference: **Complete rational graph analysis** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does a canceled denominator factor still exclude its original zero?
- **Diagnostic key:** Yes; it may give a hole even though it is absent from the reduced formula.
- **Worked-example prompt:** Analyze f(x)=(x²-1)/(x²-x).
- **Worked model and reasoning:** Original x≠0,1; reduced form (x+1)/x. Hole at (1,2), vertical asymptote x=0 with left -∞ and right +∞, horizontal asymptote y=1. x-intercept (-1,0); no y-intercept. Sign positive on (-∞,-1) and (0,1)∪(1,∞), negative on (-1,0).
- **First hint:** Record original exclusions before cancelling a factor.

#### Learn

- Factor the original relation and record exclusions first.
- Separate canceled holes from remaining poles, calculate hole heights using the reduced form and determine signs around each pole with multiplicity.
- Find allowed intercepts and quotient/end behavior, then reconcile every plotted branch with all these features.

#### Practice progression

Analyze one hole or pole first, then combine them with intercepts, sign intervals and asymptotes; use actual plotting to check the assembled graph.

**Further variation and generation checks:** Coordinate holes, poles, signs, intercepts and end behavior; include multiplicity changes and use plotting as verification, not proof.

#### Misconceptions and responsive feedback

If a canceled zero is called a vertical asymptote, inspect nearby reduced values. If a denominator zero is included as an intercept, substitute in the original before accepting the point.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Keep original exclusions, distinguish removable factors from poles, determine signs on both sides of each pole, and make every branch consistent with intercepts and end behavior.

**Task range to sample:** Coordinate holes, poles, signs, intercepts and end behavior; include multiplicity changes and use plotting as verification, not proof.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
