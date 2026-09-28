# Tutor: Lesson 34.5: Dimensional change

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check ratios, exponents and the relevant perimeter/area/volume formulas; establish whether similarity actually holds.

Within this unit, revisit [the previous lesson](../lesson-4-volume-and-cavalieri-principle/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Separate uniform scaling from independent dimension changes; defer optimization of changed dimensions.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Uniform scaling laws:** Establish uniform length scale k from corresponding sides.

- **Nonuniform dimensional changes:** Write original formulas with separate lateral and base contributions.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A cylinder's radius triples and height is divided by nine. Someone calls this a scale factor 3 and predicts volume factor 27. Find the actual factor and surface consequence.

**Agent key and discussion:** Volume factor is 3²/9=1. Lateral area factor is 3/9=1/3; base area factor is 9. There is no single similarity scale, and total surface behavior depends on the original dimensions.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Uniform scaling laws

Curriculum reference: **Uniform scaling laws** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If surface area increases by factor 16 under similarity, what is the volume factor?
- **Diagnostic key:** Length factor 4 and volume factor 64.
- **Worked-example prompt:** Two similar solids have volume ratio 125:8. Find corresponding length and surface-area ratios.
- **Worked model and reasoning:** Length ratio $5:2$ from positive cube roots; area ratio $25:4$. Each length factor contributes once to a product measuring volume, so it is cubed.
- **First hint:** Which power of the length factor produces volume?

#### Learn

- Establish uniform length scale k from corresponding sides.
- Count two length factors in area and three in volume using rectangles/prisms, then extend by dissection or approximation.
- Invert area or volume ratios using positive square or cube roots.
- Distinguish geometric scale from drawing units.

#### Practice progression

Predict scale exponents, compute forward ratios, recover k from area/volume and solve a mixed-measure comparison with verified similarity.

**Further variation and generation checks:** Recover length from area or volume ratios, and use the same scale on all dimensions before invoking similarity.

#### Misconceptions and responsive feedback

If an area ratio is used directly as a length factor, test a unit square scaled by two. If only one dimension changes, route to nonuniform analysis rather than applying k² or k³.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Verify uniform similarity, apply the correct exponent, and recover the appropriate positive length scale from a measure ratio.

**Task range to sample:** Recover length from area or volume ratios, and use the same scale on all dimensions before invoking similarity.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Nonuniform dimensional changes

Curriculum reference: **Nonuniform dimensional changes** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Only a cylinder's height doubles. Do its circular bases double in area?
- **Diagnostic key:** No; their radius is unchanged.
- **Worked-example prompt:** A cylinder's radius doubles while its height halves. Compare volume, lateral area and base area with the original.
- **Worked model and reasoning:** Volume factor $2^2/2=2$; lateral factor $2/2=1$; each base area factor 4. Total area does not have one universal factor because it combines differently scaled parts.
- **First hint:** Substitute the changed dimensions into each full formula.

#### Learn

- Write original formulas with separate lateral and base contributions.
- Substitute each changed dimension explicitly before simplifying a ratio.
- Compare which terms scale and which stay fixed.
- Explain why a total surface-area factor can depend on the starting proportions even when volume has a simple factor.

#### Practice progression

Alter one dimension, then opposite changes in two dimensions, then constraints preserving a quantity; compare complete perimeter/area/surface/volume formulas.

**Further variation and generation checks:** Vary dimensions independently and request before/after perimeter, area, surface and volume ratios; do not apply uniform scaling to distortion.

#### Misconceptions and responsive feedback

If one k is assigned to a distorted solid, ask which pair of corresponding lengths contradicts it. For perimeter, add the changed side lengths rather than multiply area factors.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State which dimensions vary and which remain fixed, compare the complete before-and-after formulas, and avoid applying a single similarity factor to a distorted shape.

**Task range to sample:** Vary dimensions independently and request before/after perimeter, area, surface and volume ratios; do not apply uniform scaling to distortion.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
