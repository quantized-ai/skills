# Tutor: Lesson 33.4: Arc length, radians, and sectors

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check proportions, circle area/circumference and degree/radian conversion; review included-angle triangle area for segments.

Within this unit, revisit [the previous lesson](../lesson-3-circle-segment-products/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use explicitly selected minor/major sectors or segments; defer calculus arc length and noncircular sectors.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Arcs and radian measure:** Use dilation to show arc and radius change by the same factor for a fixed sweep.

- **Sector and segment areas:** Derive sector area as the angle's fraction of the full disk.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A radius-10 circle has central sweep π/3. Two answers for segment area are 50π/3 and 50π/3−25√3. Identify what region each measures.

**Agent key and discussion:** First is the sector. The central triangle has area 50sin(π/3)=25√3, so subtracting it gives the minor circular segment. The chord/arc boundary determines which region was requested.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Arcs and radian measure

Curriculum reference: **Arcs and radian measure** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does s=rθ work with θ=60 entered as degrees?
- **Diagnostic key:** Not directly; convert to π/3 radians or use the full-turn fraction.
- **Worked-example prompt:** A radius-9 circle has a selected arc with central sweep 240 degrees. Find its radian measure and length.
- **Worked model and reasoning:** Sweep $4\pi/3$ radians; arc length $9(4\pi/3)=12\pi$. Similarity scales arc and radius equally, leaving $s/r$ invariant. The selected arc is major.
- **First hint:** What fraction of a full turn is the chosen sweep?

#### Learn

- Use dilation to show arc and radius change by the same factor for a fixed sweep.
- Define the invariant s/r as radian measure.
- Derive a full turn 2π from circumference, then degrees-to-radians conversion.
- Name the selected minor, major or full arc before computing.

#### Practice progression

Translate between arc fractions, degrees and radians, recover missing radii/angles, then justify similarity invariance instead of memorizing s=rθ.

**Further variation and generation checks:** Alternate degrees/radians, major/minor/full arcs and recovery of radius; keep angle measure distinct from length units.

#### Misconceptions and responsive feedback

If 60r is reported, compare it with the whole circumference to reveal impossible size for a minor arc. If an arc measure gets centimeters, ask whether it is an angle or a length.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain why the ratio is independent of radius, convert units correctly, and distinguish the length of an arc from its degree or radian measure.

**Task range to sample:** Alternate degrees/radians, major/minor/full arcs and recovery of radius; keep angle measure distinct from length units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Sector and segment areas

Curriculum reference: **Sector and segment areas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does a 90-degree sector of radius 4 have the same area as its circular segment?
- **Diagnostic key:** No: sector 4π; segment 4π−8 after removing the central right triangle.
- **Worked-example prompt:** Find the minor segment area cut off by a chord subtending 90 degrees in a radius-8 circle.
- **Worked model and reasoning:** Sector area $\tfrac14\pi64=16\pi$; central triangle area $\tfrac12(8)(8)=32$; minor segment $16\pi-32$. The major segment is $64\pi-(16\pi-32)=48\pi+32$.
- **First hint:** Which straight edges bound the requested region: two radii or one chord?

#### Learn

- Derive sector area as the angle's fraction of the full disk.
- Partition the selected minor sector into central triangle plus segment, using the included angle for triangle area.
- For a major segment subtract the minor segment from the whole disk rather than subtracting a triangle from an unrelated sector.

#### Practice progression

Begin with sectors, then minor segments and major complements, then recover a missing radius/sweep with exact and approximate area units.

**Further variation and generation checks:** Vary central angles with computable triangle areas; derive sector area from its angular fraction and verify containment before subtraction.

#### Misconceptions and responsive feedback

If the chord is counted as an arc length or a central triangle is subtracted twice, have the student name each region and boundary separately.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify the angular fraction, specify minor or major region, use radians in the half-radius-squared form, and subtract only regions contained in the selected sector.

**Task range to sample:** Vary central angles with computable triangle areas; derive sector area from its angular fraction and verify containment before subtraction.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Name the region before subtracting.** In radius-6 circle with minor central sweep $\pi/3$, arc length is $6(\pi/3)=2\pi$ and sector area $\tfrac12\cdot36\cdot\pi/3=6\pi$. The central triangle is equilateral with side 6, area $9\sqrt3$, so the minor segment is $6\pi-9\sqrt3$. The major segment is the rest of the circle, $30\pi+9\sqrt3$; it is not obtained by blindly subtracting that triangle from the major sector.

If the learner reports sector area for the segment, ask which straight edges bound each region. Next shade the chord-bounded cap and the central triangle separately; then give “segment = minor sector − triangle” and leave the values. Fade to radius 4 and minor sweep $\pi/2$ (arc $2\pi$, sector $4\pi$, segment $4\pi-8$). Require radians in $s=r\theta$ and the half-radius-squared formula.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
