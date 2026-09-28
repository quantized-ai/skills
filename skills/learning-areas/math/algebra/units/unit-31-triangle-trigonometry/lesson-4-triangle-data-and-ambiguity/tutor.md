# Tutor: Lesson 31.4: Triangle data and ambiguity

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check sine/cosine laws and inverse-sine candidates from lesson 3. If a second candidate is missed, compare an acute angle with its supplement on the unit circle.

Within this unit, revisit [the previous lesson](../lesson-3-laws-for-general-triangles/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Classify existence and uniqueness up to congruence, not physical placement. Defer optimization and arbitrary multi-triangle survey networks.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **SSA ambiguity:** Construct the fixed angle and side b; the endpoint of side a lies on a circle about the far vertex.

- **Existence, uniqueness, and triangle models:** Sort the givens by angles and sides, checking angle sum and triangle inequalities first.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** For A=30°, a=4,b=6, one solution reports only B=arcsin(3/4). Ask what other triangle may fit and which geometric test decides.

**Agent key and discussion:** Height is 3 and 3<4<6, so two triangles. B≈48.59° or 131.41° leaves C≈101.41° or 18.59°, both positive. Verify the corresponding third sides by sine law; the principal inverse alone cannot establish completeness.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### SSA ambiguity

Curriculum reference: **SSA ambiguity** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For A=30°, b=8, is a=3 enough to reach the opposite ray?
- **Diagnostic key:** No: the perpendicular height is b sinA=4, greater than a.
- **Worked-example prompt:** Given A=30 degrees, a=6, b=10, determine every triangle.
- **Worked model and reasoning:** Height $b\sin A=5<6<10$ gives two. $\sin B=5/6$; $B\approx56.4427^\circ$ or $123.5573^\circ$. Then $C\approx93.5573^\circ$ or $26.4427^\circ$, and $c=12\sin C\approx11.9769$ or $5.3436$. Both angle sums are valid.
- **First hint:** Inverse sine supplies one candidate; what other angle has the same sine?

#### Learn

- Construct the fixed angle and side b; the endpoint of side a lies on a circle about the far vertex.
- Intersections with the positive ray explain zero, one or two triangles.
- For acute A compare a with h=b sinA and b; for obtuse A require a>b.
- Solve both sine candidates and check B+A<180°.

#### Practice progression

Classify geometrically before calculating; include a<h, a=h, h<a<b, a≥b and obtuse data, then solve all surviving triangles with original-data checks.

**Further variation and generation checks:** Generate zero/one/two SSA cases using height thresholds; verify each candidate has positive third angle and satisfies original data.

#### Misconceptions and responsive feedback

If both inverse-sine candidates are retained automatically, ask for each third angle. A zero or negative third angle rejects that candidate; equal inverse branches count only once.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Include zero, one, and two-triangle cases; reject sine values above one and nonpositive remaining angles; do not discard a valid supplementary candidate.

**Task range to sample:** Generate zero/one/two SSA cases using height thresholds; verify each candidate has positive third angle and satisfies original data.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Existence, uniqueness, and triangle models

Curriculum reference: **Existence, uniqueness, and triangle models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Do angles 30°,60°,90° determine one triangle size?
- **Diagnostic key:** No: they determine shape, with arbitrarily many positive scales.
- **Worked-example prompt:** Classify data: sides 2,3,6; angles 40,60,80 degrees alone; and two sides 5,8 with included angle 70 degrees.
- **Worked model and reasoning:** First: no triangle since $2+3<6$. Second: infinitely many similar triangles because scale is undetermined. Third: one congruence class by SAS, up to reflection or rigid motion.
- **First hint:** Separate information about shape from information fixing size.

#### Learn

- Sort the givens by angles and sides, checking angle sum and triangle inequalities first.
- Distinguish position from congruence class.
- Contrast AAA with ASA, SAS and SSS; send SSA through the full height/candidate analysis.
- In contexts, state whether both mathematical configurations fit the physical situation.

#### Practice progression

Classify mixed data without solving, construct counterexamples to uniqueness, then solve a contextual general triangle retaining all physically admissible cases.

**Further variation and generation checks:** Mix degenerate equality, inconsistent angles, AAA, ASA, SAS, SSS and SSA; distinguish uniqueness up to congruence from position in the plane.

#### Misconceptions and responsive feedback

If a drawing is treated as the second measurement, ask which supplied datum fixes its scale. A sketch is evidence of a possibility, not proof of existence or uniqueness.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State what is determined up to congruence, distinguish a drawing’s reflected placement from another shape, and validate side lengths, angle conventions, units, and contextual feasibility.

**Task range to sample:** Mix degenerate equality, inconsistent angles, AAA, ASA, SAS, SSS and SSA; distinguish uniqueness up to congruence from position in the plane.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
