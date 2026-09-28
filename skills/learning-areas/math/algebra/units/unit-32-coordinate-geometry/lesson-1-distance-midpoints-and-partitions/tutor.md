# Tutor: Lesson 32.1: Distance, midpoints, and partitions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check signed coordinate subtraction, Pythagoras and fractions; distinguish a point from a displacement. Route to line directions once distance and partition reasoning work.

## Teaching boundaries

Internal division only with positive ratio parts; defer external division and higher-dimensional formulas.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Distance and midpoint formulas:** Construct horizontal and vertical displacements, use Pythagoras for length and explain why its square root is nonnegative.

- **Directed internal division:** Represent AB as five equal parts.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A proposed 1:2 division point on A=(0,0),B=(9,6) is (6,4). Ask the student to measure both portions and repair the weighting.

**Agent key and discussion:** (6,4) is two thirds from A, so AP:PB=2:1. The requested point is (3,2), giving displacements one and two copies of (3,2). The smaller AP ratio places the point nearer A.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Distance and midpoint formulas

Curriculum reference: **Distance and midpoint formulas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is the midpoint of (−6,1) and (2,5) obtained by averaging their distance?
- **Diagnostic key:** No: average coordinates, giving (−2,3).
- **Worked-example prompt:** For A=(-4,2), B=(2,10), derive distance and midpoint and verify bisection.
- **Worked model and reasoning:** Difference vector $(6,8)$ gives distance $10$ by Pythagoras. Midpoint $(-1,6)$ averages each coordinate; its distances to A and B are both 5.
- **First hint:** Build the horizontal and vertical legs between the endpoints.

#### Learn

- Construct horizontal and vertical displacements, use Pythagoras for length and explain why its square root is nonnegative.
- Derive midpoint by adding half of each displacement to the initial point.
- Verify equal half-distances and collinearity/betweenness; equal distances alone also describe off-segment points.

#### Practice progression

Progress from number-line distances to axis-aligned and oblique segments, then derive formulas with variables and verify segment congruence and bisection.

**Further variation and generation checks:** Include horizontal/vertical segments, coincident points, and symbolic endpoint derivations; require both length and midpoint checks.

#### Misconceptions and responsive feedback

If a negative distance is reported, distinguish signed displacement from length. If only equal distances are checked, offer a point on the perpendicular bisector and ask why it is not necessarily the midpoint.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain the right-triangle derivation, distinguish displacement from distance, and verify that a midpoint is equidistant from and between the endpoints.

**Task range to sample:** Include horizontal/vertical segments, coincident points, and symbolic endpoint derivations; require both length and midpoint checks.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Directed internal division

Curriculum reference: **Directed internal division** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** On a segment with AP:PB=1:4, is P one quarter of the way from A?
- **Diagnostic key:** No: it is one fifth of the whole.
- **Worked-example prompt:** Find P on A=(1,-2) to B=(11,3) with AP:PB=2:3.
- **Worked model and reasoning:** Fraction from A is $2/(2+3)=2/5$, so $P=A+\tfrac25(B-A)=(5,0)$. The remaining fraction is $3/5$; reversing the ratio changes P.
- **First hint:** Does the fraction refer to the whole segment or only the other part?

#### Learn

- Represent AB as five equal parts.
- Derive t=m/(m+n), then P=A+t(B−A), showing why the opposite endpoint weights appear in the weighted formula.
- Check that each coordinate interpolation uses the same t and that 0<t<1 places P internally.

#### Practice progression

Begin with one-dimensional partitions, move to oblique coordinates and reversed endpoints, then recover a ratio from a proposed point and check it is actually collinear.

**Further variation and generation checks:** Use directed one- and two-dimensional segments, reversed endpoints and ratios; keep internal fractions strictly between zero and one.

#### Misconceptions and responsive feedback

If weights are reversed, test the limiting case where AP is very short: P must be near A, so A gets the larger weight.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the correct endpoint weights, distinguish a fraction of the whole from a ratio of parts, and verify both the ratio and internal position.

**Task range to sample:** Use directed one- and two-dimensional segments, reversed endpoints and ratios; keep internal fractions strictly between zero and one.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
