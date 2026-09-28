# Tutor: Lesson 42.6: Rational inequalities

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check sign charts, rational domains and interval notation; if denominator multiplication is used, split its sign cases first.

Within this unit, revisit [the previous lesson](../lesson-5-quotient-asymptotes-and-rational-graphs/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Polynomial-rational inequalities on their original real domains; defer absolute-value and transcendental inequality systems.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Sign analysis for rational inequalities:** Move all terms to one side while preserving original denominator restrictions.

- **Endpoints, identities, and contextual solutions:** Separate strict and non-strict endpoint rules from denominator exclusions.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A proposed solution of (x−2)²/(x+1)≤0 omits x=2 because it only lists negative-sign intervals. Repair the set.

**Agent key and discussion:** The interval x<−1 works, x=−1 is excluded, and the numerator's allowed zero x=2 also satisfies equality. Solution is (−∞,−1)∪{2}; non-strict inequalities can have isolated solutions.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Sign analysis for rational inequalities

Curriculum reference: **Sign analysis for rational inequalities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** May an inequality be multiplied by x−1 without checking its sign?
- **Diagnostic key:** No; the direction changes when x−1 is negative and x=1 may be excluded.
- **Worked-example prompt:** Solve (x-3)/(x+2)≥0.
- **Worked model and reasoning:** Critical inputs -2 and 3; signs are positive, negative, positive on the three intervals. Solution $(-\infty,-2)\cup[3,\infty)$. Denominator zero is excluded even in a non-strict inequality.
- **First hint:** Could multiplying by this denominator reverse the inequality?

#### Learn

- Move all terms to one side while preserving original denominator restrictions.
- Factor numerator/denominator, partition at all real zeros and exclusions and determine each interval sign using factors or a test point.
- Repeated factors do not necessarily change sign.
- Resolve endpoint membership only after the interval analysis.

#### Practice progression

Start with one numerator/denominator factor, then combined fractions, repeated factors and cancellations, requiring a complete sign chart with justified intervals.

**Further variation and generation checks:** Include combined fractions, repeated factors and cancellation; keep original exclusions and justify every sign interval.

#### Misconceptions and responsive feedback

If a sign changes at every marked point automatically, test an even-multiplicity factor. If cancellation erases a partition hole, restore the original excluded input.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Form an equivalent comparison with zero, record all exclusions, justify interval signs, and avoid unqualified multiplication by a denominator of unknown sign.

**Task range to sample:** Include combined fractions, repeated factors and cancellation; keep original exclusions and justify every sign interval.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Endpoints, identities, and contextual solutions

Curriculum reference: **Endpoints, identities, and contextual solutions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If a rational comparison simplifies to 0≤0, are excluded inputs restored?
- **Diagnostic key:** No; it holds only on the original domain.
- **Worked-example prompt:** Solve (x-1)/(x-1)≤1 on x≥0, and compare the strict inequality.
- **Worked model and reasoning:** Original x≠1. The non-strict inequality is true throughout its domain, so $[0,1)\cup(1,\infty)$. The strict version is false everywhere. Combining produces identically zero only on the original domain.
- **First hint:** Is the simplified comparison an identity or an ordinary sign-changing expression?

#### Learn

- Separate strict and non-strict endpoint rules from denominator exclusions.
- Handle an identically zero expression directly instead of creating meaningless sign intervals.
- Retain isolated allowed zeros when neighboring intervals fail.
- Intersect the entire algebraic set with physical or contextual restrictions and express all components clearly.

#### Practice progression

Practice endpoints, identity/contradiction cases and isolated zeros, then apply contextual bounds and verify representative included/excluded values.

**Further variation and generation checks:** Include all/no-solution identities, isolated allowed zeros and contextual intersections; preserve domain holes in set notation.

#### Misconceptions and responsive feedback

If non-strict comparison includes a pole, ask whether the original expression has a value there. If an isolated solution is lost in interval notation, allow singleton set notation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Include only endpoints permitted by both the inequality and domain, preserve isolated solutions where appropriate, handle zero expressions directly, and state the contextual intersection with correct units.

**Task range to sample:** Include all/no-solution identities, isolated allowed zeros and contextual intersections; preserve domain holes in set notation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Keep the isolated zero after the interval analysis

For $(x-2)^2/(x+1)\le0$, the numerator is positive except at 2, where it is zero; it never becomes negative. Thus the fraction is negative when $x<-1$, positive on $(-1,2)$ and $(2,\infty)$, undefined at $-1$, and zero at 2. The complete set is $(-\infty,-1)\cup\{2\}$. Even multiplicity explains why the sign does not flip at 2.

If the learner omits 2, ask whether equality is allowed and whether the original expression is defined there. If they flip signs across 2, cue the sign of a square → supply test inputs 1 and 3 → show the squared numerator is positive at one, leaving the other. Fade with $(x+3)^2/(x-1)\le0$, whose solution is $(-\infty,1)$ because its zero lies inside the negative interval. This is a useful contrast, but an isolated-zero retake must place the zero in the positive-denominator region again.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
