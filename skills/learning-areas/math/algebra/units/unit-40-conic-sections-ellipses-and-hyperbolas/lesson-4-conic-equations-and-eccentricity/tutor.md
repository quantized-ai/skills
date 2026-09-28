# Tutor: Lesson 40.4: Conic equations and eccentricity

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check completing squares for both variables and ellipse/hyperbola features; verify the full normalized constant before classifying.

Within this unit, revisit [the previous lesson](../lesson-3-hyperbolas-from-focal-definitions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Axis-aligned quadratic relations without xy; treat empty/degenerate cases and e=0 separately, without rotated-axis theory.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Expanded conic equations:** Group each variable's terms, factor leading coefficients and complete squares with balanced constants.

- **Eccentricity and focus-directrix form:** Compute c/a using the correct semimajor or semitransverse length.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A student classifies x²+y²−2x+4y+5=0 as a radius-√5 circle. Complete squares and decide.

**Agent key and discussion:** (x−1)²+(y+2)²=0, so the locus is the single point (1,−2), not a positive-radius circle. The constant after completion controls the real locus.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Expanded conic equations

Curriculum reference: **Expanded conic equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is x²+y²+5=0 an ellipse because both square coefficients are positive?
- **Diagnostic key:** Its real locus is empty.
- **Worked-example prompt:** Classify 4x²+9y²-8x+36y+4=0 by completing squares.
- **Worked model and reasoning:** $4(x-1)^2+9(y+2)^2=36$, so $(x-1)^2/9+(y+2)^2/4=1$, an ellipse. Merely seeing same-sign square coefficients cannot distinguish ellipse, point and empty locus without the constant.
- **First hint:** Move the constant only after accounting for both square-completion terms.

#### Learn

- Group each variable's terms, factor leading coefficients and complete squares with balanced constants.
- Normalize only after inspecting the resulting right side.
- Classify circle/ellipse/hyperbola/parabola versus point, empty or line loci from the full equation.
- Recover features only for a nondegenerate real relation.

#### Practice progression

Convert expanded forms of each family, verify by expansion and add boundary constants producing points, intersecting/parallel lines or empty sets.

**Further variation and generation checks:** Include circle/ellipse/hyperbola/parabola and degenerate/empty axis-aligned relations; do not classify by coefficients while ignoring constants.

#### Misconceptions and responsive feedback

If completion constants omit a leading multiplier, expand the proposed result back to the original. If an xy term appears, explain that this lesson's axis-aligned method does not directly classify rotated forms.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Account for leading coefficients when completing squares, classify from the full normalized equation, and recover geometric features only when the real locus permits them.

**Task range to sample:** Include circle/ellipse/hyperbola/parabola and degenerate/empty axis-aligned relations; do not classify by coefficients while ignoring constants.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Eccentricity and focus-directrix form

Curriculum reference: **Eccentricity and focus-directrix form** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a circle's directrix be found by substituting e=0 into a/e?
- **Diagnostic key:** No; the circle has no finite directrix in this model.
- **Worked-example prompt:** For x²/25+y²/9=1, find eccentricity and directrices, then verify the distance ratio at (5,0).
- **Worked model and reasoning:** a=5,c=4, e=4/5, directrices $x=\pm a/e=\pm25/4$. Relative to focus (4,0) and directrix x=25/4, distances at (5,0) are 1 and 5/4, giving ratio 4/5.
- **First hint:** Pair a focus with its corresponding directrix before measuring.

#### Learn

- Compute c/a using the correct semimajor or semitransverse length.
- Pair one focus with the matching signed directrix and use perpendicular point-line distance to verify the ratio.
- Compare e below, equal to and above one with ellipse, parabola and hyperbola; separate the circular limiting case.

#### Practice progression

Calculate eccentricity and directrices in both orientations, verify distance ratios at points and distinguish the circle and parabola cases.

**Further variation and generation checks:** Include e<1, e=1, e>1 and circle e=0 with no finite directrix; state orientation and use perpendicular distance to the line.

#### Misconceptions and responsive feedback

If full axis length replaces a, the ratio is halved incorrectly; ask for the distance from center to vertex. If mismatched focus/directrix signs are chosen, test a simple vertex.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use focal distance divided by semimajor or semitransverse length, match each directrix to its focus, distinguish the three noncircular cases, and treat the circle separately.

**Task range to sample:** Include e<1, e=1, e>1 and circle e=0 with no finite directrix; state orientation and use perpendicular distance to the line.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
