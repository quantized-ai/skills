# Tutor: Lesson 38.1: Vector representations

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check signed coordinate differences, Pythagoras and quadrant-correct trigonometry; distinguish location from displacement first.

## Teaching boundaries

Planar vectors with explicit conventions; defer 3D cross products and advanced vector spaces.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Vectors, displacements, and components:** Separate position points, displacement vectors and scalar lengths using notation and units.

- **Magnitude and direction conversion:** Use Pythagoras for nonnegative magnitude.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two arrows run (1,2)→(4,6) and (−2,0)→(1,4). Someone says they differ because their endpoints differ. Compare components and magnitude.

**Agent key and discussion:** Both have components ⟨3,4⟩ and magnitude 5. A vector can be represented by translated directed segments; initial location is not part of the free vector.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Vectors, displacements, and components

Curriculum reference: **Vectors, displacements, and components** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If both endpoints of an arrow shift by (3,−2), does its vector change?
- **Diagnostic key:** No; terminal-minus-initial differences are unchanged.
- **Worked-example prompt:** Find displacement from A=(-3,4) to B=(2,-8) and distinguish it from B's position vector.
- **Worked model and reasoning:** Displacement $\langle5,-12\rangle$ is terminal minus initial. B's position vector is $\langle2,-8\rangle$ from the origin. Translating both endpoints preserves the displacement.
- **First hint:** Which point is the initial point?

#### Learn

- Separate position points, displacement vectors and scalar lengths using notation and units.
- Compute each component as terminal minus initial and draw its horizontal/vertical change.
- Translate the arrow without rotating it to demonstrate equal free vectors.
- Identify quantities such as velocity/force needing direction versus scalar speed or mass.

#### Practice progression

Begin with axis-aligned arrows, then arbitrary endpoints and translated equal vectors, and classify physical vector/scalar quantities with reasons.

**Further variation and generation checks:** Include physical vector/scalar classification, equivalent directed segments and planar component comparisons; keep signs and units.

#### Misconceptions and responsive feedback

If endpoint coordinates are copied as components, move the initial point away from the origin and compare the actual displacement.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use terminal-minus-initial subtraction, preserve arrow orientation under translation, and distinguish a vector from its magnitude or the coordinates of one endpoint.

**Task range to sample:** Include physical vector/scalar classification, equivalent directed segments and planar component comparisons; keep signs and units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Magnitude and direction conversion

Curriculum reference: **Magnitude and direction conversion** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can the zero vector be assigned direction 0 degrees uniquely?
- **Diagnostic key:** No; every angle with magnitude zero gives the same components.
- **Worked-example prompt:** Find magnitude and direction of ⟨-3,3√3⟩ using angle measured counterclockwise from positive x.
- **Worked model and reasoning:** Magnitude 6, direction $2\pi/3$ or 120 degrees. The zero vector has magnitude zero and no unique direction.
- **First hint:** Locate the quadrant before selecting an inverse-tangent angle.

#### Learn

- Use Pythagoras for nonnegative magnitude.
- Derive components as projections of a directed segment and reconstruct them from magnitude/angle.
- Recover direction with both signs, handling axes before tangent division.
- Define the reference axis, sense and angular unit explicitly and test reconstruction.

#### Practice progression

Convert exact special-angle vectors, general numerical vectors and axis cases, then explain why the zero case cannot be normalized or assigned a unique direction.

**Further variation and generation checks:** Convert both ways, include axes and zero, and state angle conventions explicitly.

#### Misconceptions and responsive feedback

If the principal arctangent points into the wrong quadrant, use the component signs to correct it. If magnitude becomes negative, distinguish it from a negative scalar multiplier.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use both components to determine the angle, reconstruct the components from magnitude and direction, and avoid treating the zero vector as having a specified direction.

**Task range to sample:** Convert both ways, include axes and zero, and state angle conventions explicitly.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Check direction through reconstruction

For $P=(2,-1)$ and $Q=(-4,7)$, the displacement is $\langle-6,8\rangle$, magnitude 10. It points into quadrant II, so a standard direction is $180^\circ-\arctan(4/3)\approx126.87^\circ$. Reconstructing $P+\langle-6,8\rangle=Q$ checks orientation; a length check alone would also accept the reversed arrow.

If the learner gives $\langle6,-8\rangle$, ask which endpoint their vector reaches from $P$. Then cue “terminal minus initial”; if needed show only $v_x=-4-2$, leaving $v_y$ and magnitude. If components are correct but the angle is $-53.13^\circ$, keep component evidence and cue quadrant selection instead. Fade by giving only the initial point and displacement and asking for the terminal point, then return to an unsupplied endpoint pair. The reversed task checks the meaning of displacement rather than only subtraction fluency.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
