# Tutor: Lesson 34.2: Cross-sections and solids of revolution

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check plane figures, perpendicular distance and similarity; distinguish a solid's filled interior from its visible outline.

Within this unit, revisit [the previous lesson](../lesson-1-plane-area-and-circumference/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Require slice orientation and rotation axis; defer integration of arbitrary profiles and unlabeled perspective guesses.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Cross-sections:** Identify the cutting plane, not merely a line in a perspective sketch.

- **Solids of revolution:** Mark the rotation axis on the two-dimensional region.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A rectangle 1≤x≤3,0≤y≤2 rotates about the y-axis. A proposed result is a solid cylinder radius 3. Ask which generated radii are actually present.

**Agent key and discussion:** Radii run from 1 to 3, so the result is a hollow cylinder, height 2. No original region point has distance below 1 from the axis; the central cavity cannot be filled implicitly.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Cross-sections

Curriculum reference: **Cross-sections** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A plane parallel to a cone's base halfway from vertex to base gives what radius ratio?
- **Diagnostic key:** 1/2, and its area ratio is 1/4.
- **Worked-example prompt:** A sphere of radius 10 is cut by a plane 6 units from its center. What is the cross-section?
- **Worked model and reasoning:** A circle of radius $\sqrt{100-36}=8$ and area $64\pi$. At distance 10 it becomes one point; greater distance gives no intersection.
- **First hint:** How does moving the slicing plane away from the center change the section radius?

#### Learn

- Identify the cutting plane, not merely a line in a perspective sketch.
- For prisms/cylinders compare parallel cross-sections by translation; for pyramids/cones use similarity from the vertex.
- For spheres apply Pythagoras with center-to-plane distance.
- For oblique cuts list intersected faces and join actual edge intersections.

#### Practice progression

Compare parallel, perpendicular and oblique cuts across all five solid families, including empty/tangent cases and section size with a justified diagram.

**Further variation and generation checks:** Cover slices of prisms, pyramids, cylinders, cones and spheres with plane orientation specified; compare congruent and similar parallel sections.

#### Misconceptions and responsive feedback

If every cylinder slice is called a circle, change to an axial plane and identify the rectangular section. If a sphere tangent plane is called a radius-zero circle, clarify the geometric intersection is one point.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Account for intersected faces and orientation, distinguish congruent from similar sections, and recognize empty and degenerate intersections when relevant.

**Task range to sample:** Cover slices of prisms, pyramids, cylinders, cones and spheres with plane orientation specified; compare congruent and similar parallel sections.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Solids of revolution

Curriculum reference: **Solids of revolution** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Rotate only a semicircular arc about its diameter. Does this describe filled volume by itself?
- **Diagnostic key:** It describes the sphere surface; rotating the filled half-disk generates the solid ball.
- **Worked-example prompt:** Rotate the filled rectangle 2≤x≤5, 0≤y≤4 about the y-axis. Identify the solid and its dimensions.
- **Worked model and reasoning:** A hollow cylinder of height 4, outer radius 5, inner radius 2. Its volume is $\pi(25-4)4=84\pi$; rotating only the boundary would describe surfaces, not the filled material.
- **First hint:** Does the rotating region ever reach the axis, or must a hole remain?

#### Learn

- Mark the rotation axis on the two-dimensional region.
- Track the smallest and largest distances of each horizontal strip from that axis.
- Relate rectangle, right-triangle and half-disk profiles to cylinder, cone and sphere.
- For external axes retain a positive inner radius and identify the cavity.

#### Practice progression

Start with axes on an edge, then choose between legs or diameter, then offset axes and hollow profiles; require dimensions and region-versus-boundary distinction.

**Further variation and generation checks:** Rotate rectangles, right triangles and semicircular regions about named axes; include offset axes and cavities.

#### Misconceptions and responsive feedback

If the learner fills an offset-axis hole, trace one interior point's circular path: no point crosses into a radius absent from the original region.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State the rotation axis and track radii and height, distinguish internal from external axes, and identify hollow regions instead of filling them implicitly.

**Task range to sample:** Rotate rectangles, right triangles and semicircular regions about named axes; include offset axes and cavities.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Track distance from the actual rotation axis.** Rotate the filled rectangle $2\le x\le5$, $0\le y\le4$ about the y-axis. Its nearest and farthest radii are 2 and 5, so the solid is a hollow cylinder with height 4; cross-sections perpendicular to the axis are annuli. Its material volume is $\pi(25-4)4=84\pi$. The axis lies outside the rectangle, so the central hole is not filled.

If the learner uses radius 3, ask whether width equals distance to the axis here. Next draw the horizontal segment from the axis to each vertical edge; then label inner radius 2 and leave the outer radius and cross-section. Fade to rotating $1\le x\le4$, $0\le y\le3$ (radii 1,4; volume $45\pi$). Rotating only the boundary describes surfaces; explicitly specify the filled region when asking for a solid.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
