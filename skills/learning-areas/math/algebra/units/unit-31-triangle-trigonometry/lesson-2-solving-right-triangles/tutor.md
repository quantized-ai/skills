# Tutor: Lesson 31.2: Solving right triangles

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check ratio-side matching, Pythagoras and acute complements from lesson 1; if inverse notation fails, ask for the angle having a familiar ratio before using a calculator.

Within this unit, revisit [the previous lesson](../lesson-1-right-triangle-ratios/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use nondegenerate right triangles and declared degree/radian units; defer SSA ambiguity until lesson 4.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Right-triangle solutions and inverse ratios:** Inventory the known side/angle information before choosing a ratio.

- **Indirect measurement models:** Sketch the horizontal, vertical and line-of-sight segments before inserting numbers.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A 13 m ladder has its foot 5 m from a wall. One student gets height 13sin(arctan(5/13)); another gets 12. Diagnose the first setup before calculating.

**Agent key and discussion:** The ratio 5/13 compares adjacent to hypotenuse, not opposite to adjacent, so arctan is mismatched. Height is √(169−25)=12. Alternatively the angle at the ground is arccos(5/13), then height 13sinθ=12.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Right-triangle solutions and inverse ratios

Curriculum reference: **Right-triangle solutions and inverse ratios** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a right triangle have hypotenuse 4 and leg 5?
- **Diagnostic key:** No: its longest side would not be the hypotenuse, and the missing squared leg would be negative.
- **Worked-example prompt:** A right triangle has hypotenuse 25 and a leg 7. Solve it, naming the angle opposite 7.
- **Worked model and reasoning:** Other leg $\sqrt{625-49}=24$; opposite angle $\arcsin(7/25)\approx16.26^\circ$, other acute angle $73.74^\circ$. Verify $7^2+24^2=25^2$ and a 90-degree acute-angle sum.
- **First hint:** Which side must be longest in a right triangle, and do the data respect that?

#### Learn

- Inventory the known side/angle information before choosing a ratio.
- Solve lengths before using inverse ratios when two sides are given.
- Explain the calculator output as an acute angle whose ratio matches the data.
- Recover the remaining acute angle, then verify Pythagoras and all angle sums using unrounded values.

#### Practice progression

Move from two sides to side-and-angle data, choose among inverse ratios, then reject contradictory or insufficient data and justify precision.

**Further variation and generation checks:** Mix side-side and side-angle data; include impossible hypotenuse data and distinguish inverse sine from reciprocal sine.

#### Misconceptions and responsive feedback

If sin⁻¹ is treated as 1/sin, ask whether the requested answer is an angle or a ratio. If degree output is wrong, test the known special angle in the current calculator mode.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Match each operation to the known data, reject impossible or degenerate data, distinguish inverse from reciprocal notation, and verify the solved triangle.

**Task range to sample:** Mix side-side and side-angle data; include impossible hypotenuse data and distinguish inverse sine from reciprocal sine.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Indirect measurement models

Curriculum reference: **Indirect measurement models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A ladder of length 10 leans at 60 degrees to level ground. Is its height 10 tan60°?
- **Diagnostic key:** No: 10 is the hypotenuse; height is 10 sin60°=5√3.
- **Worked-example prompt:** An observer's eye is 1.6 m above level ground, 12 m horizontally from a vertical mast. The elevation angle is 35 degrees. Model the mast height.
- **Worked model and reasoning:** $H=1.6+12\tan35^\circ\approx10.00$ m. The triangle measures height above the eye; level ground, vertical mast, and horizontal distance are assumptions.
- **First hint:** Where does the horizontal sight line meet the mast?

#### Learn

- Sketch the horizontal, vertical and line-of-sight segments before inserting numbers.
- Label eye height separately from the vertical triangle leg.
- Derive elevation/depression equivalence using parallel horizontals.
- For two observations, share the same unknown height across both triangles and solve their equations together.

#### Practice progression

Begin with one right triangle, add observer height, then an inaccessible offset or connected pair; assess diagram assumptions as well as arithmetic.

**Further variation and generation checks:** Vary observer height, elevation/depression, and connected triangles; state measured precision and distinguish slant distance from horizontal distance.

#### Misconceptions and responsive feedback

If a horizontal offset is omitted, have the learner point to the actual measurement endpoints. If a final answer is more precise than measured data, retain calculation precision internally but qualify the reported estimate.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Draw and label the necessary triangles, distinguish horizontal from slanted distances, include relevant offsets, keep calculator angle mode consistent, and judge whether the numerical result fits the geometry.

**Task range to sample:** Vary observer height, elevation/depression, and connected triangles; state measured precision and distinguish slant distance from horizontal distance.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Observer height belongs outside the sight triangle.** On level ground, an observer's eye is 1.6 m above ground and 12 m horizontally from a vertical pole. An elevation of $30^\circ$ gives height above eye level $12\tan30^\circ=4\sqrt3$ m. Total pole height is $1.6+4\sqrt3\approx8.53$ m; its line of sight is the hypotenuse, not the 12 m horizontal leg.

If the learner uses $12\sin30^\circ$, ask which side the stated distance describes. Next sketch the horizontal through the eye meeting the pole; then write $\tan30^\circ=(H-1.6)/12$ and leave solving. If they obtain $4\sqrt3$ only, focus on the missing ground-to-eye offset. Fade to eye height 1.5 m, horizontal distance 10 m, elevation $45^\circ$ (height 11.5 m). State that these are idealized measurements and report precision consistent with the supplied data.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
