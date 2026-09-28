# Tutor: Lesson 34.4: Volume and Cavalieri’s principle

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check base area, perpendicular height, similarity and volume units; review disjoint regions before composite volumes.

Within this unit, revisit [the previous lesson](../lesson-3-surface-area/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Give informal dissection/Cavalieri/limit arguments without requiring calculus; do not substitute a single matching slice for Cavalieri's every-height condition.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Prisms and cylinders:** Imagine equal-thickness layers parallel to the base.

- **Pyramids and cones:** Establish a prism-to-pyramid dissection giving the one-third volume relation for a suitable configuration.

- **Sphere volume by Cavalieri:** Use a central right triangle to derive the section radius.

- **Composite volumes:** Draw a disjoint solid decomposition or an outer-solid-minus-contained-cavities model.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two solids have the same height and equal base areas. A student invokes Cavalieri to say their volumes are equal. Refute using a cone and cylinder.

**Agent key and discussion:** A cone and cylinder with the same base and height have volumes in ratio 1:3. Their base slices agree but intermediate areas do not; Cavalieri requires equality at every corresponding height.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Prisms and cylinders

Curriculum reference: **Prisms and cylinders** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** An oblique cylinder has perpendicular height 4 and slant edge 5. Which multiplies base area for volume?
- **Diagnostic key:** The perpendicular height 4.
- **Worked-example prompt:** An oblique prism has base area 18 cm² and perpendicular height 7 cm. Find volume and justify use of that height.
- **Worked model and reasoning:** $V=126$ cm³. Each slice parallel to the base has area 18; a right prism of the same height has equal cross-sectional areas at every level, so Cavalieri gives equal volume. Slanted edge length is irrelevant.
- **First hint:** Which distance separates the parallel base planes?

#### Learn

- Imagine equal-thickness layers parallel to the base.
- Explain V=Bh by accumulating identical area layers, then compare a right and oblique solid of equal base area and perpendicular height.
- State both equal-height and equal-cross-sectional-area-at-every-level conditions for Cavalieri, not just equal areas at the ends.

#### Practice progression

Compute prism/cylinder volumes, recover heights/base measures and convert capacity units, then give a Cavalieri argument for an oblique case.

**Further variation and generation checks:** Include prisms and cylinders, recovery of dimensions and capacity conversions; require equal height and every corresponding slice for Cavalieri.

#### Misconceptions and responsive feedback

If a slant edge is used, compare tilted and upright stacks of the same layers. If equal volumes are inferred from a single matching slice, ask about all the intermediate slices.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the cross-section conditions, identify perpendicular height, and distinguish volume from capacity units after conversion.

**Task range to sample:** Include prisms and cylinders, recovery of dimensions and capacity conversions; require equal height and every corresponding slice for Cavalieri.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Pyramids and cones

Curriculum reference: **Pyramids and cones** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** At half the distance from a cone's vertex to its base, is the slice area half the base area?
- **Diagnostic key:** No: radius halves, so slice area is one quarter.
- **Worked-example prompt:** Compare a cone and cylinder with common radius 4 and height 9. Explain their volumes and slice scaling.
- **Worked model and reasoning:** Cylinder $144\pi$, cone $48\pi$. At fraction t of the height measured from the cone vertex, radius is $4t$ and slice area $16\pi t^2$. To exhibit the one-third factor, partition a unit cube into three square pyramids with common apex $(0,0,0)$ and bases on its faces $x=1$, $y=1$, $z=1$. Each point lies in the pyramid corresponding to its largest coordinate; ties are shared boundaries, so interiors do not overlap. Coordinate permutations make the three pyramids congruent, so each has volume $1/3$. Stretch two base directions by $\sqrt{B}$ and the perpendicular direction by $h$: slice areas scale by $B$ and layer thickness by $h$, yielding volume $Bh/3$. For any pyramid with base area $B$ and perpendicular height $h$, a parallel slice at distance $z$ from the vertex has area $B(z/h)^2$. Equal-height, equal-slice comparisons extend the formula to other base shapes and apex positions by Cavalieri. Inscribed and circumscribed polygonal approximations to a circular base approach area $\pi r^2$, giving cone volume $\pi r^2h/3$. This argument uses perpendicular height, not slant height.
- **First hint:** A half-height slice has what fraction of the radius and area?

#### Learn

- Establish a prism-to-pyramid dissection giving the one-third volume relation for a suitable configuration.
- Use similarity to show every parallel pyramid slice has area t²B; equal base area and height then give equal slice profiles and equal volume by Cavalieri.
- Approximate a circular base by polygons to extend the cone result.

**Concrete dissection support:** Label a triangular prism ABC–A′B′C′ with matching translated triangular bases. Cut it into tetrahedra ABCA′, BCC′A′ and BB′C′A′ along the indicated face diagonals. The first and third have congruent parallel base triangles ABC and A′B′C′ and equal perpendicular heights, so their matching similar slices have equal areas. The second and third have common vertex A′ and equal-area base triangles BCC′ and BB′C′ in the same rectangular/parallelogram lateral face; their matching slices also agree. Thus all three volumes are equal and together fill the prism, establishing one third without presupposing the pyramid-volume formula. Extend to other equal-base-area/equal-height pyramids using their t²B slice profiles; then approximate a cone by polygonal pyramids. A labeled diagram or physical decomposition should accompany this argument during learning.

#### Practice progression

Derive the factor, calculate cone/pyramid quantities, recover a missing dimension and compare oblique versions with the same B and perpendicular h.

**Further variation and generation checks:** Mix pyramids/cones and oblique perpendicular heights; require the one-third justification, not just a memorized substitution.

#### Misconceptions and responsive feedback

If the one-third factor is justified merely by a sketch, ask which equal-volume pieces or matching slices establish it. If slant height is substituted, identify the separation of slice planes.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain the one-third factor and cross-sectional scaling, distinguish slant from perpendicular height, and keep the relevant base area explicit.

**Task range to sample:** Mix pyramids/cones and oblique perpendicular heights; require the one-third justification, not just a memorized substitution.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Sphere volume by Cavalieri

Curriculum reference: **Sphere volume by Cavalieri** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A sphere of radius r has an equatorial disk area πr². Is every parallel slice that large?
- **Diagnostic key:** No: at height z its area is π(r²−z²).
- **Worked-example prompt:** Explain the volume of a radius-3 sphere using a cylinder-minus-two-cones comparison.
- **Worked model and reasoning:** At height z from the equator, both have slice area $\pi(9-z^2)$ for $-3\le z\le3$. Cylinder volume $54\pi$ minus two cones each $9\pi$ gives $36\pi=4\pi3^3/3$.
- **First hint:** What disk area is removed at a height z from the common cone vertex?

#### Learn

- Use a central right triangle to derive the section radius.
- For a cylinder of radius r and height 2r, remove two cones with vertex at the midpoint; the removed disk at height z has area πz².
- Show equal remaining slices throughout −r≤z≤r, then subtract the two cone volumes from the cylinder.

#### Practice progression

Derive the comparison for arbitrary z, evaluate sphere volume and recover radius from volume, then contrast surface and volume scaling.

**Further variation and generation checks:** Ask for slice equality at arbitrary z as well as numeric volume, inverse radius problems and cubic units.

#### Misconceptions and responsive feedback

If the comparison cones are drawn with their bases at the midpoint, ask whether the removed radius would be |z|; that configuration reverses the slice profile.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the comparison solid, justify equality of every corresponding cross-section and height, and distinguish radius, diameter, and cubic quantities.

**Task range to sample:** Ask for slice equality at arbitrary z as well as numeric volume, inverse radius problems and cubic units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Composite volumes

Curriculum reference: **Composite volumes** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A spherical cavity lies partly outside a block. May its entire sphere volume be subtracted from the block?
- **Diagnostic key:** No; only the intersection actually removed counts.
- **Worked-example prompt:** A cylinder of radius 5 and height 6 has a coaxial cylindrical through-hole of radius 2. Find remaining volume.
- **Worked model and reasoning:** Outer minus removed volume gives $\pi(25-4)6=126\pi$. The hole runs the whole height; a partial cavity would use its own depth.
- **First hint:** State the extent of the removed solid before subtracting.

#### Learn

- Draw a disjoint solid decomposition or an outer-solid-minus-contained-cavities model.
- Check which pieces overlap and whether a cavity traverses the whole depth.
- Derive missing heights/radii by similarity or Pythagoras before volume substitution.
- Check positive dimensions and reconcile all cubic units.

#### Practice progression

Begin with a through-hole, then partial cavities and attached solids, then inverse dimensions and feasibility checks on the reconstructed figure.

**Further variation and generation checks:** Include combinations of cone/prism/sphere pieces, partial cavities and missing dimensions; verify no overlaps or negative physical dimensions.

#### Misconceptions and responsive feedback

If added component volumes double-count overlap, ask where a point in the overlap was counted. If a missing cavity depth is assumed, identify whether the givens really specify it.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State a complete decomposition, handle removed volume and overlapping pieces correctly, verify positive feasible dimensions, and use consistent cubic units.

**Task range to sample:** Include combinations of cone/prism/sphere pieces, partial cavities and missing dimensions; verify no overlaps or negative physical dimensions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
