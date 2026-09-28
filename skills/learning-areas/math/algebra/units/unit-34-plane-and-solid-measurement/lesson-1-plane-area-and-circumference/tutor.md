# Tutor: Lesson 34.1: Plane area and circumference

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check perpendicular height, polygon decomposition, circle radius/diameter and length/area units; repair geometry before formula substitution.

## Teaching boundaries

Use elementary plane shapes and original dissection arguments; defer integral area and unprovided dimensions inferred from appearance.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Polygon area formulas:** Cut and translate a right triangle to turn a parallelogram into a rectangle.

- **Circle circumference and area:** Compare similar circles to define the invariant C/d.

- **Composite plane regions:** Draw a region inventory before formulas: disjoint pieces, holes and shared edges.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A 6×4 rectangle is cut into two 3×4 rectangles. Someone adds their perimeters to claim the original perimeter is 28. Diagnose the double counting.

**Agent key and discussion:** Original perimeter is 20. Component perimeters total 28 because the shared cut of length 4 is counted twice; subtract 8. Areas add directly because their interiors do not overlap.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Polygon area formulas

Curriculum reference: **Polygon area formulas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A parallelogram has base 7, perpendicular height 3 and sloping side 5. What is its area?
- **Diagnostic key:** 21 square units; the side 5 is not the height.
- **Worked-example prompt:** Derive and apply the area of a trapezoid with parallel bases 5 and 11 and perpendicular height 4.
- **Worked model and reasoning:** Two congruent copies make a parallelogram of base 16 and height 4; one area is $16\cdot4/2=32$. Triangle/parallelogram dissections likewise explain their formulas; regular polygons require apothem, and kite products require perpendicular diagonals.
- **First hint:** Join two copies along a nonparallel side.

#### Learn

- Cut and translate a right triangle to turn a parallelogram into a rectangle.
- Duplicate a triangle or trapezoid to derive its factor one-half.
- Split a kite along perpendicular diagonals into four right triangles.
- Split a regular polygon into central triangles of height equal to the apothem; sum bases to get p·a/2.

#### Practice progression

Begin with one dissection and labeled height, then rotated figures, kites/trapezoids and regular polygons; finish with inverse dimensions and explanations of formula conditions.

**Further variation and generation checks:** Rotate the diagram and include triangle, parallelogram, kite and regular-polygon derivations; never substitute a sloping side for height.

#### Misconceptions and responsive feedback

When a formula is chosen from appearance, ask what dissection establishes it. For a regular polygon, draw a radius and an apothem together to expose their different lengths and roles.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify valid base-height pairs, distinguish an apothem from a circumradius, and explain why the kite diagonal or regular-polygon conditions are needed.

**Task range to sample:** Rotate the diagram and include triangle, parallelogram, kite and regular-polygon derivations; never substitute a sloping side for height.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Circle circumference and area

Curriculum reference: **Circle circumference and area** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If a circle's radius doubles, does its circumference or area quadruple?
- **Diagnostic key:** Area quadruples; circumference doubles.
- **Worked-example prompt:** A circle has diameter 14. Find circumference and area and explain the informal area argument.
- **Worked model and reasoning:** Radius 7 gives circumference $14\pi$ and area $49\pi$. Finer rearranged sectors approach a rectangle with height r and base half the circumference, so area approaches $rC/2$. Similarity explains a constant circumference-to-diameter ratio.
- **First hint:** Which given measure must be halved before using the area formula?

#### Learn

- Compare similar circles to define the invariant C/d.
- Approximate circumference using increasingly many polygon edges.
- Rearrange increasingly fine sectors to approach a rectangle with height r and base C/2; connect its limiting area to πr².
- Keep exact π forms until an approximation is requested.

#### Practice progression

Calculate from radius or diameter, recover either from area/circumference, then explain the informal limit and contrast linear with square-unit scaling.

**Further variation and generation checks:** Alternate radius/diameter and exact/approximate results; require a limit-of-partitions explanation without claiming a finite rearrangement is an exact rectangle.

#### Misconceptions and responsive feedback

If a learner calls the finite sector arrangement an exact rectangle, inspect its curved edges. If diameter enters πr², check against a square enclosing the circle as a size estimate.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain the constant ratio and how increasingly fine partitions approach the circle, distinguish exact pi expressions from numerical approximations, and retain the radius-diameter distinction.

**Task range to sample:** Alternate radius/diameter and exact/approximate results; require a limit-of-partitions explanation without claiming a finite rearrangement is an exact rectangle.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Composite plane regions

Curriculum reference: **Composite plane regions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A line splits a rectangle into two pieces. Does the cut add to the rectangle's exterior perimeter?
- **Diagnostic key:** No; the shared internal edge is not part of the outer boundary.
- **Worked-example prompt:** A 10-by-6 rectangle has a radius-2 circular hole entirely inside. Find remaining area, exterior perimeter and total boundary.
- **Worked model and reasoning:** Area $60-4\pi$; exterior perimeter 32; total boundary $32+4\pi$. The internal circle contributes boundary length but removes area.
- **First hint:** List the boundaries separately from the regions.

#### Learn

- Draw a region inventory before formulas: disjoint pieces, holes and shared edges.
- Compute areas additively only after removing overlaps.
- Trace the requested outer boundary separately; if total boundary includes holes, add those components.
- Derive missing dimensions using right triangles or matching segment sums.

#### Practice progression

Start with two disjoint pieces, then attached semicircles and cutouts, then missing-dimension shapes; require a labeled decomposition and separate boundary accounting.

**Further variation and generation checks:** Include attached sectors, cutouts and missing dimensions; avoid counting shared construction edges or overlapping areas twice.

#### Misconceptions and responsive feedback

If component perimeters are simply summed, mark each shared edge twice and cross both copies out. If a hole removes perimeter instead of adding an inner boundary, ask which boundary the question requests.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify all pieces or removed regions, avoid overlaps and double-counted boundaries, derive necessary missing dimensions, and distinguish exterior perimeter from total boundary when holes are present.

**Task range to sample:** Include attached sectors, cutouts and missing dimensions; avoid counting shared construction edges or overlapping areas twice.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
