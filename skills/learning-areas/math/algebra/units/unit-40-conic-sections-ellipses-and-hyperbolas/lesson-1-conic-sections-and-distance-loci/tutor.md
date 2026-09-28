# Tutor: Lesson 40.1: Conic sections and distance loci

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check distance, triangle inequalities and spatial plane/solid descriptions; use verbal incidence as well as a diagram.

## Teaching boundaries

Classify conic sections and distance loci; defer coordinate derivations and rotated conic algebra to later/other topics.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Plane sections of a double cone:** Draw the double cone and mark the cutting plane as an actual plane.

- **Distance-locus definitions:** Express circle, parabola, ellipse and hyperbola as distance statements, identifying center versus focus roles.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two foci are 6 units apart. Someone proposes an ellipse with focal sum 5 and a hyperbola with difference 7. Test both without drawing.

**Agent key and discussion:** Triangle inequality makes every sum at least 6; reverse triangle inequality makes every absolute difference at most 6. Both proposed loci are impossible; nondegenerate bounds are stricter in the appropriate directions.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Plane sections of a double cone

Curriculum reference: **Plane sections of a double cone** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Must every tilted plane through a cone create an ellipse?
- **Diagnostic key:** No; its relation to generating lines and whether it reaches both nappes determine the section.
- **Worked-example prompt:** A plane intersects one nappe of a double cone, is not parallel to a generating line, and cuts every generator of that nappe. What nondegenerate section is possible? Contrast apex cases.
- **Worked model and reasoning:** A closed ellipse (circle for a plane perpendicular to the axis). Parallel to exactly one generator direction in a non-apex plane gives a parabola; intersecting both nappes gives a hyperbola. Through the apex, sections may be a point, a line, or two intersecting lines depending on orientation.
- **First hint:** Ask whether the section is bounded and whether it reaches one or both nappes.

#### Learn

- Draw the double cone and mark the cutting plane as an actual plane.
- Vary orientation while distinguishing closed one-nappe, exactly-one-generator-parallel and two-nappe intersections.
- Move the plane through the apex separately to classify point, line or intersecting-line degeneracies.
- A circle is the perpendicular-axis special case of an ellipse.

#### Practice progression

Classify named orientations, justify one/both-nappe behavior, then compare nondegenerate sections with their apex-limit configurations.

**Further variation and generation checks:** Specify plane orientation relative to generators, not just a vague tilt; include degenerate apex cases and justify from the three-dimensional configuration.

#### Misconceptions and responsive feedback

If a perspective drawing is used as the entire argument, ask which cone generators the plane meets. If apex passage is ignored, compare with a nearby parallel non-apex plane.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the nappe intersections and parallel-generator condition, distinguish circle from a general ellipse, and explain why apex sections may be degenerate.

**Task range to sample:** Specify plane orientation relative to generators, not just a vague tilt; include degenerate apex cases and justify from the three-dimensional configuration.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Distance-locus definitions

Curriculum reference: **Distance-locus definitions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two foci are 10 apart. Can distances to them sum to 8 at a real point?
- **Diagnostic key:** No; triangle inequality requires a sum at least 10.
- **Worked-example prompt:** Foci are (-4,0),(4,0). Classify a locus with sum of distances 10 and one with absolute difference 6.
- **Worked model and reasoning:** Sum 10 exceeds separation 8, so ellipse with a=5,c=4,b=3. Difference 6 lies strictly between 0 and 8, so hyperbola with a=3,c=4,b=√7. Equality/boundary values need separate degenerate-locus analysis.
- **First hint:** Compare the required sum or difference with the focal separation.

#### Learn

- Express circle, parabola, ellipse and hyperbola as distance statements, identifying center versus focus roles.
- Apply triangle and reverse-triangle inequalities to determine allowable focal sums/differences.
- Retain strict inequalities for nondegenerate cases and use absolute difference to include both hyperbola branches.

#### Practice progression

Translate loci to verbal definitions, test feasible parameters, then contrast impossible/degenerate/nondegenerate conditions and recover a,b,c.

**Further variation and generation checks:** Include impossible, degenerate and nondegenerate loci and focus-directrix parabola descriptions; retain sum/difference parameter restrictions.

#### Misconceptions and responsive feedback

If a signed difference omits one branch, reflect a valid point across the perpendicular bisector. If equality at a parameter boundary is called an ordinary ellipse, inspect the segment or degenerate locus directly.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Distinguish center and focus roles, use an absolute difference for both hyperbola branches, and retain the strict inequalities needed for the focal loci.

**Task range to sample:** Include impossible, degenerate and nondegenerate loci and focus-directrix parabola descriptions; retain sum/difference parameter restrictions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Test boundary loci before assigning a family

With foci $(-3,0),(3,0)$, a distance sum of 6 gives the entire segment joining them: points on it have distances $x+3$ and $3-x$. A sum below 6 is impossible, while a sum above 6 gives a nondegenerate ellipse. An absolute difference of 0 gives the perpendicular bisector $x=0$; a difference of 6 gives the two outer rays $x\le-3$ or $x\ge3$ on the focal axis. Thus the strict nondegeneracy inequalities are consequential.

If a learner calls the sum-6 locus an ellipse, ask where equality occurs in the triangle inequality. Then supply a point $(x,0)$ between the foci; finally write its two distances, leaving their sum and locus description. Fade by changing focal separation and asking the learner to classify an equality case without the distances supplied. For cone cuts, “parallel to a generator” must include the single-direction condition; a non-apex plane that reaches both nappes gives a hyperbola even if it is parallel to some generators.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
