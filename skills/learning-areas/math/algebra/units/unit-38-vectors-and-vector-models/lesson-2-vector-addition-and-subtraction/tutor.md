# Tutor: Lesson 38.2: Vector addition and subtraction

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check component representation and magnitude-direction conversion from lesson 1; draw arrow order before computing relative vectors.

Within this unit, revisit [the previous lesson](../lesson-1-vector-representations/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use common reference axes and units; defer dot-product angle methods until lesson 4.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Geometric and component addition:** Add components, then reproduce the same result with tip-to-tail arrows and the parallelogram diagonal.

- **Resultants from angular descriptions:** Convert each magnitude-direction input to one common angle convention and axes.

- **Subtraction and relative vectors:** Rewrite subtraction as addition of the reversed second vector.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A learner adds magnitude-5 eastward and magnitude-5 northward vectors and reports magnitude 10 at 45°. Which part is correct, and what is the actual magnitude?

**Agent key and discussion:** Direction 45° is correct for equal perpendicular components, but magnitude is √(25+25)=5√2. Preserve the correct direction evidence while repairing scalar length addition.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Geometric and component addition

Curriculum reference: **Geometric and component addition** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does ⟨3,0⟩+⟨−3,0⟩ have magnitude 6?
- **Diagnostic key:** No; the resultant is zero.
- **Worked-example prompt:** Add u=⟨4,1⟩ and v=⟨-1,3⟩ using components and a tip-to-tail description.
- **Worked model and reasoning:** Sum $\langle3,4\rangle$, magnitude 5. Place v's tail at u's head without changing v; the resultant goes from the first tail to the final head. $\sqrt{17}+\sqrt{10}\ne5$, so magnitudes do not generally add.
- **First hint:** Translate the second arrow without rotating it.

#### Learn

- Add components, then reproduce the same result with tip-to-tail arrows and the parallelogram diagonal.
- Translate without rotating arrows.
- Contrast aligned reinforcement, opposite cancellation and a right-angle sum to show when adding magnitudes succeeds or fails.
- Require all three methods to identify the same directed resultant.

#### Practice progression

Progress through aligned/opposite vectors, oblique sums and zero resultants, then reconcile component and both geometric constructions.

**Further variation and generation checks:** Require tip-to-tail and parallelogram reasoning as well as components; include opposite and aligned vectors.

#### Misconceptions and responsive feedback

If the wrong parallelogram diagonal is drawn, verify that following both input arrows reaches its endpoint. If magnitude is added first, build a cancelling pair as a counterexample.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Obtain the same directed resultant with all three methods, distinguish reinforcing and cancelling directions, and identify complete cancellation.

**Task range to sample:** Require tip-to-tail and parallelogram reasoning as well as components; include opposite and aligned vectors.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Resultants from angular descriptions

Curriculum reference: **Resultants from angular descriptions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two magnitude-5 vectors point at 0° and 180°. What angle belongs to their sum?
- **Diagnostic key:** None uniquely: they cancel to zero.
- **Worked-example prompt:** Two forces have magnitudes 8 N east and 6 N north. Find the resultant's magnitude and direction.
- **Worked model and reasoning:** Components $\langle8,6\rangle$ N, magnitude 10 N, angle $\arctan(6/8)\approx36.87^\circ$ north of east. Adding magnitudes would incorrectly give 14 N.
- **First hint:** Resolve each force onto the same axes.

#### Learn

- Convert each magnitude-direction input to one common angle convention and axes.
- Add both components and only then recover magnitude and direction.
- Estimate the resultant quadrant from the dominant components before calculator use.
- Check for exact or justified numerical cancellation rather than reporting a meaningless roundoff angle.

#### Practice progression

Start with perpendicular directions, then oblique and mixed-quadrant vectors, then cancellation and data expressed in different declared angle conventions.

**Further variation and generation checks:** Use nonperpendicular angular descriptions and non-first-quadrant results; label angles and round only after component addition.

#### Misconceptions and responsive feedback

If directions are averaged, test unequal magnitudes: the stronger vector must have more influence. If bearings and standard angles are mixed, translate each angle onto the same diagram first.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Convert each angle to the shared convention, compute both resultant components, use the correct angle quadrant, and report no unique direction for a zero sum.

**Task range to sample:** Use nonperpendicular angular descriptions and non-first-quadrant results; label angles and round only after component addition.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Subtraction and relative vectors

Curriculum reference: **Subtraction and relative vectors** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For common-tail arrows u and v, is the arrow from u's tip to v's tip u−v?
- **Diagnostic key:** No; it is v−u.
- **Worked-example prompt:** For u=⟨2,-1⟩ and v=⟨-3,4⟩, interpret u-v geometrically.
- **Worked model and reasoning:** $u-v=\langle5,-5\rangle=u+(-v)$. With common tails, it is the arrow from v's tip to u's tip; v-u points the opposite way.
- **First hint:** Which vector added to v would produce u?

#### Learn

- Rewrite subtraction as addition of the reversed second vector.
- Construct the tip-to-tip arrow and verify v+(u−v)=u.
- Compute component differences in the same order and connect them to relative position or velocity meanings before taking any magnitude.

#### Practice progression

Compare the two subtraction orders, build each geometrically and algebraically, then solve relative-displacement questions with specified reference order.

**Further variation and generation checks:** Include relative positions/velocities, same-vector subtraction and geometric correspondence; never reverse the order silently.

#### Misconceptions and responsive feedback

If scalar magnitudes are subtracted, ask whether that result determines direction; use nonparallel equal-length vectors whose difference is nonzero.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Reverse the subtracted vector or connect the tips in the correct order, match the component result to the geometric arrow, and distinguish subtraction from subtracting magnitudes.

**Task range to sample:** Include relative positions/velocities, same-vector subtraction and geometric correspondence; never reverse the order silently.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
