# Tutor: Lesson 34.3: Surface area

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check nets, triangle/circle area and Pythagoras for slant heights; list requested faces before any total.

Within this unit, revisit [the previous lesson](../lesson-2-cross-sections-and-solids-of-revolution/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Distinguish right/oblique and regular/irregular assumptions; defer thick-wall material volume unless explicitly provided.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Prism and cylinder surfaces:** Draw the actual net.

- **Pyramid, cone, and sphere surfaces:** In a cone axial section compute slant height with Pythagoras.

- **Composite and exposed surfaces:** Start with a list of every exterior, contact, absent and cavity surface.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A cone radius 3 and vertical height 4 is assigned total area 21π. Ask which height was used and reconstruct its net.

**Agent key and discussion:** Slant height is 5, so lateral area is 15π and the base adds 9π, total 24π. The 21π answer used vertical height 4 in πrℓ.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Prism and cylinder surfaces

Curriculum reference: **Prism and cylinder surfaces** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A cylinder is open at both ends. Should 2πr² be included in its surface area?
- **Diagnostic key:** No, if only its curved exterior is requested.
- **Worked-example prompt:** Find lateral and total area of a closed right cylinder with radius 3 and height 8 using a net.
- **Worked model and reasoning:** The curved rectangle is $6\pi$ by 8, giving lateral area $48\pi$. Two disks add $18\pi$, total $66\pi$.
- **First hint:** Which dimension of the unwrapped rectangle is a circumference?

#### Learn

- Draw the actual net.
- For a right prism pair each lateral rectangle with a base edge and common perpendicular height, summing to ph.
- For a right cylinder unwrap the lateral surface into circumference by height.
- Add exactly the bases present.
- For an oblique prism return to individual face areas.

#### Practice progression

Derive nets, compute lateral versus total surfaces, reverse-solve dimensions, then handle open ends and oblique exceptions with square units.

**Further variation and generation checks:** Alternate prisms and cylinders, open/closed requests and oblique-prism exceptions; derive each included face before summing.

#### Misconceptions and responsive feedback

If curved area is treated as a disk, compare its two net dimensions. If ph is applied to an oblique prism, ask whether each face's perpendicular height actually equals the solid's height.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify which faces are bases and which surfaces are included, use the right-solid assumptions correctly, and report square units.

**Task range to sample:** Alternate prisms and cylinders, open/closed requests and oblique-prism exceptions; derive each included face before summing.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Pyramid, cone, and sphere surfaces

Curriculum reference: **Pyramid, cone, and sphere surfaces** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a cone's vertical height be substituted for its slant height in lateral area?
- **Diagnostic key:** No; its net uses the slope length from vertex to rim.
- **Worked-example prompt:** A right cone has radius 5 and vertical height 12. Find lateral and total surface area.
- **Worked model and reasoning:** Slant height 13 by Pythagoras; lateral area $65\pi$, base area $25\pi$, total $90\pi$. Vertical height cannot replace slant height.
- **First hint:** Which height lies along the triangular cross-section's sloping edge?

#### Learn

- In a cone axial section compute slant height with Pythagoras.
- Unroll the cone into a sector of radius ℓ whose arc is 2πr; its area is half radius times arc, πrℓ.
- Sum pyramid triangular faces separately, using pℓ/2 only when their face heights agree.
- Distinguish the sphere's 4πr² surface from any base or volume.

#### Practice progression

Move from cone slant-height recovery to regular and unequal-face pyramids and spheres; vary lateral/total requests and verify included bases.

**Further variation and generation checks:** Cover regular and irregular pyramids, cones and spheres; distinguish unequal face heights and sphere surface from volume.

#### Misconceptions and responsive feedback

If an irregular pyramid is given one slant height, ask which other face heights are justified. If a sphere base is added, ask where such a face occurs on its boundary.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Distinguish vertical and slant heights, sum unequal pyramid-face areas separately, and retain the correct number of bases or absence of a base.

**Task range to sample:** Cover regular and irregular pyramids, cones and spheres; distinguish unequal face heights and sphere surface from volume.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Composite and exposed surfaces

Curriculum reference: **Composite and exposed surfaces** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** When two solids meet along a face of area 12, how much is removed from the sum of their closed surface areas?
- **Diagnostic key:** 24, because both counted copies become internal.
- **Worked-example prompt:** Two cubes of side 3 are joined along one complete face. Find exposed surface area.
- **Worked model and reasoning:** Sum of separate areas is $2(6\cdot9)=108$; two contacting faces of area 9 are hidden, so exposed area is 90. The resulting 6-by-3-by-3 prism confirms it.
- **First hint:** How many copies of the shared face appear in the starting total?

#### Learn

- Start with a list of every exterior, contact, absent and cavity surface.
- Choose either summing only exposed components or adding closed totals then removing contacts; reconcile both when available.
- Model hollow walls only if thickness and interior dimensions are given, and state whether interior surfaces are requested.

#### Practice progression

Begin with joined blocks, then open containers and cavity surfaces, then compound figures with curved contacts and clearly defined requested boundary.

**Further variation and generation checks:** Include open and hollow shapes with explicitly requested interior surfaces; identify all included/excluded faces.

#### Misconceptions and responsive feedback

If just one contact face is subtracted, identify its copy on each component. If area is confused with material volume, ask whether the task describes coating or filling.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Record included and excluded surfaces, subtract both copies of an internal joining face when starting from component totals, and distinguish material boundary area from volume.

**Task range to sample:** Include open and hollow shapes with explicitly requested interior surfaces; identify all included/excluded faces.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
