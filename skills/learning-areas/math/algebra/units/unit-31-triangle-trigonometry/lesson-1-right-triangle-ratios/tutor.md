# Tutor: Lesson 31.1: Right-triangle ratios

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check AA similarity, right-angle/acute-angle identification and fraction simplification; if side ratios are difficult, use corresponding sides before trig notation. Route next to solving right triangles.

## Teaching boundaries

Keep angles acute for ratio definitions here; defer general unit-circle graphs and non-right triangle solving.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Similarity and acute-angle ratios:** Label opposite and adjacent relative to one acute angle; then switch the chosen angle without rotating the triangle.

- **Complementary-angle identities:** Mark both acute angles of one right triangle.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A learner says doubling the legs of a 3–4–5 triangle doubles tanθ. Ask them to compute the ratio before and after, then explain what similarity contributes that the two examples alone do not.

**Agent key and discussion:** For the angle opposite 3, ratios are 3/4 and 6/8, both 3/4. A general scale k cancels in 3k/(4k). The numerical comparison refutes the claim; common-factor cancellation plus similarity establishes invariance.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Similarity and acute-angle ratios

Curriculum reference: **Similarity and acute-angle ratios** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A right triangle's sides all triple. Does sine triple?
- **Diagnostic key:** No: both numerator and denominator triple, so the ratio is unchanged.
- **Worked-example prompt:** A right triangle has legs 8 and 15 and hypotenuse 17. For the angle opposite 8, find all three ratios; explain why a doubled triangle gives the same ratios.
- **Worked model and reasoning:** Sine is $8/17$, cosine $15/17$, tangent $8/15$. AA similarity scales every side by the same positive factor, so ratios cancel that factor. A 45-degree isosceles right triangle similarly gives sine and cosine $\sqrt2/2$.
- **First hint:** Which side changes its role when you switch the named acute angle?

#### Learn

- Label opposite and adjacent relative to one acute angle; then switch the chosen angle without rotating the triangle.
- Establish AA similarity for any two right triangles with that angle.
- Cancel the common scale in each ratio.
- Derive 45-degree ratios from equal legs and 30/60-degree ratios by bisecting an equilateral triangle; preserve radicals.

#### Practice progression

Begin with labeled triangles, remove the labels, then reconstruct special triangles and justify scale independence symbolically.

**Further variation and generation checks:** Vary the chosen angle, scale, and special triangle; require a similarity justification as well as ratios. Avoid treating the hypotenuse as the adjacent leg.

#### Misconceptions and responsive feedback

If the hypotenuse is called adjacent, ask which side is opposite the right angle; reserve adjacent for the other leg. If ratios have centimeters, cancel numerator and denominator units explicitly.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Establish similarity before asserting scale independence, use the nonhypotenuse adjacent side, and attach no length units to a ratio.

**Task range to sample:** Vary the chosen angle, scale, and special triangle; require a similarity justification as well as ratios. Avoid treating the hypotenuse as the adjacent leg.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Complementary-angle identities

Curriculum reference: **Complementary-angle identities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** What is the complement of π/6 radians?
- **Diagnostic key:** π/3, since the sum must be π/2.
- **Worked-example prompt:** If an acute angle has sine $5/13$, what is the cosine of its complement? Explain with side roles.
- **Worked model and reasoning:** $5/13$; complementary acute angles exchange opposite and adjacent legs while keeping the hypotenuse. In radians the complement is $\pi/2-\theta$, not $\pi-\theta$.
- **First hint:** What relation do the two acute angles have, and how do their side roles compare?

#### Learn

- Mark both acute angles of one right triangle.
- List each angle's opposite leg and show that it is the other's adjacent leg.
- Write both sine-cosine identities from those two descriptions before substituting numerical values.
- Translate the full right angle into radians rather than mixing 90 with radian inputs.

#### Practice progression

Start with complementary angle pairs, then evaluate an unknown ratio from its partner, then explain the identity without a numerical triangle.

**Further variation and generation checks:** Alternate degrees and radians explicitly and distinguish complements from supplements; accept diagram or side-role reasoning.

#### Misconceptions and responsive feedback

A learner using 180−θ has selected a supplement: ask whether two acute angles of a right triangle can total a straight angle.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Derive the relationship from side roles and retain consistent degree or radian units; do not treat supplementary angles as complementary.

**Task range to sample:** Alternate degrees and radians explicitly and distinguish complements from supplements; accept diagram or side-role reasoning.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Switch the reference angle without changing the triangle.** In triangle ABC right at C, let AC=12, BC=5, AB=13. For angle A, sine is $5/13$ and cosine $12/13$; for B they exchange. Thus $\sin A=\cos B$ because $A+B=90^\circ$ and BC changes from A's opposite leg to B's adjacent leg. Doubling every side preserves both ratios through cancellation, not because lengths stay fixed.

If the learner labels AB adjacent, ask which side is opposite the right angle. Next mark AB as hypotenuse and leave the two legs unlabeled; then identify A's opposite side and ask them to finish all ratios. Fade by choosing B first in a 7–24–25 triangle (state which leg faces B), with no side-role labels. For a general scale proof, have them replace lengths by $ka,kb,kc$ and explain why positive k cancels.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
