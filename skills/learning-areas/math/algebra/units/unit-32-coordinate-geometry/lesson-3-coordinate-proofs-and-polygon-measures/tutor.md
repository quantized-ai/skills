# Tutor: Lesson 32.3: Coordinate proofs and polygon measures

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check distance, midpoint and line criteria from lessons 1–2. If proof is attempted with one numerical figure, replace coordinates by unconstrained parameters.

Within this unit, revisit [the previous lesson](../lesson-2-parallel-and-perpendicular-lines/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Require general claims or verified counterexamples; defer advanced vector proofs as mandatory methods and self-intersecting polygon area conventions.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **General coordinate proofs:** Identify the minimal hypotheses before choosing coordinates.

- **Perimeters and coordinate areas:** Put polygon vertices in boundary order, including the closing edge for perimeter.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Someone uses rectangle vertices (0,0),(a,0),(a,b),(0,b) to prove all parallelogram diagonals are equal. Identify the hidden assumption and refute the conclusion.

**Agent key and discussion:** The placement forces right angles. In parallelogram (0,0),(3,0),(4,2),(1,2), diagonal lengths are √20 and √8, unequal. General-coordinate proof must not strengthen the hypotheses.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### General coordinate proofs

Curriculum reference: **General coordinate proofs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does proving the diagonal claim for a square prove it for all parallelograms?
- **Diagnostic key:** No; a square adds right-angle and equal-side assumptions.
- **Worked-example prompt:** Prove that the diagonals of every parallelogram bisect each other using general coordinates.
- **Worked model and reasoning:** Put vertices $(0,0),(a,b),(a+c,b+d),(c,d)$ with $ad-bc\ne0$. Both diagonal midpoints are $((a+c)/2,(b+d)/2)$. Numeric coordinates alone verify only one figure; the nonzero determinant excludes a collapsed parallelogram.
- **First hint:** Choose coordinates that encode only the given hypotheses.

#### Learn

- Identify the minimal hypotheses before choosing coordinates.
- Translate one vertex to the origin and represent independent side directions with parameters.
- Compute the relevant lengths, slopes or midpoints and convert the algebra back into a sufficient geometric statement.
- Treat zero denominators separately and state nondegeneracy.

#### Practice progression

Start with verification of a supplied figure, then disproof by counterexample, then symbolic triangle/quadrilateral/circle claims using only legitimate coordinate normalization.

**Further variation and generation checks:** Alternate general proofs and counterexamples involving triangles/quadrilaterals/circles; do not assume right angles or symmetry absent from the claim.

#### Misconceptions and responsive feedback

If a coordinate choice forces symmetry, ask for an oblique example it cannot represent. If a claim is false, one verified counterexample is enough; if true, a sample cannot replace a parameter proof.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Translate every algebraic result into a sufficient geometric condition, handle undefined slopes, and avoid proving a general statement only for a specially symmetric numerical case.

**Task range to sample:** Alternate general proofs and counterexamples involving triangles/quadrilaterals/circles; do not assume right angles or symmetry absent from the claim.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Perimeters and coordinate areas

Curriculum reference: **Perimeters and coordinate areas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A triangle has base length 8 and an oblique side length 5. Is its area necessarily 20?
- **Diagnostic key:** No: the height perpendicular to that base is still needed.
- **Worked-example prompt:** Find perimeter and area of triangle (0,0),(6,0),(2,3).
- **Worked model and reasoning:** Side lengths $6,5,\sqrt{13}$ give perimeter $11+\sqrt{13}$. Height to the x-axis base is 3, so area 9 square units; the sloping side is not the height.
- **First hint:** Which perpendicular distance corresponds to your chosen base?

#### Learn

- Put polygon vertices in boundary order, including the closing edge for perimeter.
- Find perpendicular height or dissect into rectangles for area.
- Derive the coordinate determinant as signed parallelogram area before taking half its absolute value.
- Verify rotated rectangle sides are perpendicular before multiplying them.

#### Practice progression

Begin with grid-aligned figures, then translated/rotated rectangles and triangles with derived heights, and compare coordinate and decomposition methods.

**Further variation and generation checks:** Include translated/rotated rectangles and triangles; preserve vertex order, distinguish perimeter from area, and use absolute area.

#### Misconceptions and responsive feedback

If area changes sign after reversing vertex order, ask whether orientation can make physical area negative. If diagonal distances enter perimeter, trace the actual exterior boundary.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Respect vertex order, justify any decomposition or determinant formula, verify perpendicular dimensions for rectangles, and express area in square units.

**Task range to sample:** Include translated/rotated rectangles and triangles; preserve vertex order, distinguish perimeter from area, and use absolute area.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
