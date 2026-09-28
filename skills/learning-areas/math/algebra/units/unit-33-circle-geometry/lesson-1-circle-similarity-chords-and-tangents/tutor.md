# Tutor: Lesson 33.1: Circle similarity, chords, and tangents

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check similarity/dilations, right-triangle congruence and Pythagoras; draw radii to contact/chord endpoints before invoking a theorem.

## Teaching boundaries

Require equal-radius hypotheses for congruent chord comparisons; defer angle/segment-product shortcuts until they are established in later lessons.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Circle similarity and chord relationships:** Translate circle centers together and dilate by the positive radius ratio to prove similarity.

- **Tangents and radii:** Explain perpendicular distance from the center as the shortest distance to a line.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two circles have radii 3 and 6 with corresponding 60° central angles. A claim says their chords are congruent because their angles match. Repair it with a dilation argument.

**Agent key and discussion:** The second circle is a factor-2 dilation of the first, so its corresponding chord is twice as long. Equal angles ensure similarity; chord congruence across circles also needs equal radii.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Circle similarity and chord relationships

Curriculum reference: **Circle similarity and chord relationships** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two different-radius circles subtend equal central angles. Must their chords have equal length?
- **Diagnostic key:** No; corresponding chords scale with the radius.
- **Worked-example prompt:** A circle of radius 13 has a chord whose perpendicular distance from the center is 5. Find its length and explain the bisection.
- **Worked model and reasoning:** Right-triangle congruence splits the chord equally; half-length $\sqrt{169-25}=12$, total 24. Translation plus dilation by $r_2/r_1$ maps any circle onto another. Equal chord comparisons across circles require equal radii.
- **First hint:** Join the center to both chord endpoints.

#### Learn

- Translate circle centers together and dilate by the positive radius ratio to prove similarity.
- Within equal-radius circles join center to chord endpoints; congruent radius triangles connect chords and central angles.
- Drop a perpendicular and use right-triangle congruence to prove bisection and compare center distances.

#### Practice progression

Begin with radius dilation, then chord/arc/central-angle comparisons, then recover chord lengths or distances and justify every theorem used.

**Further variation and generation checks:** Vary chord length or distance, request similarity mapping and chord/arc proofs; distinguish minor from major arcs.

#### Misconceptions and responsive feedback

If congruent arcs are inferred across unequal radii, distinguish equal angular measures from equal lengths. If a chord midpoint is assumed from a drawing, require the perpendicular or triangle-congruence hypothesis.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Specify the translation and scale factor, distinguish minor and major arcs, and state when circle radii must be equal for chord comparisons.

**Task range to sample:** Vary chord length or distance, request similarity mapping and chord/arc proofs; distinguish minor from major arcs.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Tangents and radii

Curriculum reference: **Tangents and radii** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A line passes through a point on a circle. Is it automatically tangent there?
- **Diagnostic key:** No; it must be perpendicular to that point's radius, otherwise it meets the circle again.
- **Worked-example prompt:** A point P is 10 units from a circle center O with radius 6. Find the tangent length from P and justify equality of the two tangents.
- **Worked model and reasoning:** Radius to a tangency point is perpendicular to the tangent, so length $\sqrt{100-36}=8$. Both right triangles have shared hypotenuse OP and radius 6; hypotenuse-leg congruence gives equal tangent segments.
- **First hint:** Which angle is known to be right, and why?

#### Learn

- Explain perpendicular distance from the center as the shortest distance to a line.
- Equality to the radius gives exactly one contact; greater gives none and smaller gives two.
- From an exterior point join both contacts to the center; common hypotenuse and equal radii yield hypotenuse-leg congruence.

#### Practice progression

Prove the radius-tangent relation and converse, calculate one tangent, compare two, then decide whether claimed tangent data are possible.

**Further variation and generation checks:** Include converse tangency tests using shortest distance and interior/on-circle/exterior point cases; do not invent a tangent from an interior point.

#### Misconceptions and responsive feedback

If two segments look equal but have different exterior endpoints, ask which common hypotenuse supports the proof. If the point lies inside, a real tangent-length calculation must fail.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the point of tangency and the shared exterior endpoint and justify each theorem with distance or congruence reasoning.

**Task range to sample:** Include converse tangency tests using shortest distance and interior/on-circle/exterior point cases; do not invent a tangent from an interior point.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
