# Tutor: Lesson 31.3: Laws for general triangles

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check right-triangle ratios, auxiliary altitudes and distance/Pythagoras; if a law is memorized without labels, draw its opposite side-angle pairs first.

Within this unit, revisit [the previous lesson](../lesson-2-solving-right-triangles/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Teach sine/cosine laws with proofs and obtuse cases; do not assume any non-right triangle has a unique inverse-sine solution.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Obtuse angles and triangle area:** Place one side on a horizontal base.

- **Law of Sines:** Draw an altitude from C to AB: h=b sinA=a sinB.

- **Law of Cosines:** Place endpoints at (0,0),(b,0),(a cosC,a sinC).

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** For two sides 5,8 with included angle 120°, a proposed third side squared is 25+64−80=9. Ask for a sign check and a geometric reason the answer is implausible.

**Agent key and discussion:** cos120°=−1/2, so c²=89+40=129. The obtuse angle faces the longest side; c=3 would violate even the triangle inequality. The error was replacing cosine by 1 and missing the signed projection.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Obtuse angles and triangle area

Curriculum reference: **Obtuse angles and triangle area** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does an obtuse included angle make triangle area negative?
- **Diagnostic key:** No: sine of a triangle angle is positive; cosine may be negative.
- **Worked-example prompt:** Two sides of a triangle are 6 and 10 with included angle 120 degrees. Derive its area using an altitude.
- **Worked model and reasoning:** Area $=\tfrac12(6)(10)\sin120^\circ=15\sqrt3$. An auxiliary right triangle outside the triangle has height $6\sin60^\circ=3\sqrt3$ over base 10; obtuse sine is positive and cosine negative.
- **First hint:** Where can the perpendicular height lie when a base angle is obtuse?

#### Learn

- Place one side on a horizontal base.
- When both base angles are acute the altitude foot lies on the base segment; when a base angle is obtuse, extend the base line.
- Show h=b sinC using the supplement when needed, then substitute into base-times-height/2.
- Contrast sine's positive height with cosine's signed horizontal projection.

#### Practice progression

Derive first in an acute configuration, repeat with an exterior altitude, then choose the included pair from relabeled diagrams and recover a missing measure.

**Further variation and generation checks:** Include acute, right, and obtuse included angles; require an altitude derivation and consistent opposite-side labeling.

#### Misconceptions and responsive feedback

If the student uses a nonincluded angle with two sides, ask which side actually forms each ray of that angle. Do not accept a correct-looking formula with mismatched labels.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Distinguish signed horizontal projection from positive altitude, handle acute and obtuse included angles, and identify the two sides adjacent to the chosen angle.

**Task range to sample:** Include acute, right, and obtuse included angles; require an altitude derivation and consistent opposite-side labeling.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Law of Sines

Curriculum reference: **Law of Sines** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** In triangle ABC, does a/sin B correctly pair opposite quantities?
- **Diagnostic key:** No; side a is opposite A, so use a/sin A.
- **Worked-example prompt:** For triangle ABC, let A=30 degrees, B=45 degrees, and opposite side a=7. Find C, b, and c and explain the Law of Sines.
- **Worked model and reasoning:** $C=105^\circ$, $b=7\sqrt2$, $c=7(\sqrt6+\sqrt2)/2$. An altitude gives $h=b\sin A=a\sin B$, hence $a/\sin A=b/\sin B$; choosing another altitude gives the third ratio. For obtuse angles use an extended base.
- **First hint:** Which angle faces the side whose length you are using?

#### Learn

- Draw an altitude from C to AB: h=b sinA=a sinB.
- Divide only by positive triangle-angle sines to get the first equality; a second altitude supplies c/sinC.
- For an obtuse configuration use the supplementary acute angle and equal sine.
- Solve ASA/AAS after completing the angle sum.

#### Practice progression

Practice matching labels, solving ASA/AAS and right triangles, then explain the law's derivation and compare which givens support sine versus cosine law.

**Further variation and generation checks:** Use AAS/ASA and right/obtuse triangles; require general proof with valid altitude cases rather than only substitution.

#### Misconceptions and responsive feedback

If a side seems unreasonably large, compare side order with opposite angle order. If only the principal inverse sine is kept for SSA, postpone certification and route to the ambiguity lesson.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Give a proof valid for obtuse as well as acute triangles, keep opposite pairs together, and check that all recovered angles are positive with sum \(180^\circ\).

**Task range to sample:** Use AAS/ASA and right/obtuse triangles; require general proof with valid altitude cases rather than only substitution.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Law of Cosines

Curriculum reference: **Law of Cosines** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** What does the Law of Cosines become when the included angle is 90 degrees?
- **Diagnostic key:** c²=a²+b² because cos90°=0.
- **Worked-example prompt:** Two triangle sides have lengths 4 and 7 and included angle 60 degrees. Find the opposite side and justify the cosine term.
- **Worked model and reasoning:** $c^2=4^2+7^2-2(4)(7)\cos60^\circ=37$, so $c=\sqrt{37}$. Place one side on the x-axis: squared coordinate differences give $(7-4\cos C)^2+(4\sin C)^2$, yielding the formula for acute or obtuse C.
- **First hint:** How does the horizontal projection change when the included angle becomes obtuse?

#### Learn

- Place endpoints at (0,0),(b,0),(a cosC,a sinC).
- Expand the squared distance between the last two and use sin²C+cos²C=1.
- This derivation also covers negative cosine for obtuse C.
- Use the formula directly for SAS; rearrange for cosine with SSS and check the inverse input.

#### Practice progression

Start with right-angle reduction, then SAS lengths, SSS angles, obtuse checks and a complete coordinate derivation with consistent labels.

**Further variation and generation checks:** Alternate SAS and SSS, check triangle inequalities and arccos input range, and require a coordinate derivation.

#### Misconceptions and responsive feedback

If the cross term's sign is lost, compare an obtuse angle: its opposite side squared must exceed the sum of the other squared sides. Reject SSS inputs violating a strict triangle inequality before calculator work.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Derive the cross term and its sign, select the included angle correctly, check triangle existence before recovering angles, and retain intermediate precision.

**Task range to sample:** Alternate SAS and SSS, check triangle inequalities and arccos input range, and require a coordinate derivation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**An obtuse angle changes the projection sign.** With adjacent sides 3 and 5 and included angle $120^\circ$, place vertices $O=(0,0)$, $A=(5,0)$, $B=(3\cos120^\circ,3\sin120^\circ)=(-3/2,3\sqrt3/2)$. The foot of B's altitude lies left of O. Distance gives $AB^2=(13/2)^2+(3\sqrt3/2)^2=49$, so AB=7; area is $5(3\sqrt3/2)/2=15\sqrt3/4$. Negative horizontal projection does not mean negative height or area.

If the cross term is subtracted as a positive quantity, cue “Which side of O contains the projection?” Next give the coordinates before simplifying; then evaluate cosine only and leave the distance calculation. Fade to adjacent sides 4 and 6 with included $120^\circ$ (opposite side $2\sqrt{19}$, area $6\sqrt3$). A numerical example checks the law; a proof must retain a variable angle and justify the expansion for both acute and obtuse cases.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
