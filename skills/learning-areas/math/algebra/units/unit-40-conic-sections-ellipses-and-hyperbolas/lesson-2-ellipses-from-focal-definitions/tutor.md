# Tutor: Lesson 40.2: Ellipses from focal definitions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check distance equations, radicals, completing squares and ellipse locus conditions; return to focal sums if a,b,c signs are confused.

Within this unit, revisit [the previous lesson](../lesson-1-conic-sections-and-distance-loci/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Axis-aligned centered/translated ellipses including circles; defer rotated xy forms and calculus arc lengths.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Deriving the ellipse equation:** Name the two focal distances and start from their sum 2a.

- **Ellipse features and translated equations:** Complete any translations and identify the larger denominator.

- **Constructing ellipse equations:** Inventory which independent parameters each supplied feature fixes.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** An ellipse has a=5,b=3; a learner places foci at ±√34 along its major axis. Diagnose geometrically and algebraically.

**Agent key and discussion:** c²=a²−b²=16, so c=4. √34 exceeds a=5 and would put foci beyond the vertices, contradicting the distance-sum construction.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Deriving the ellipse equation

Curriculum reference: **Deriving the ellipse equation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For ellipse a=5,c=4, is b=√41?
- **Diagnostic key:** No; b²=a²−c²=9, so b=3.
- **Worked-example prompt:** Derive the standard ellipse for foci (±3,0) and distance sum 10, and check a co-vertex.
- **Worked model and reasoning:** $a=5,c=3$, so $b^2=a^2-c^2=16$ and $x^2/25+y^2/16=1$. For the general derivation let $d_-=\sqrt{(x+c)^2+y^2}$ and $d_+=\sqrt{(x-c)^2+y^2}$. Their sum is $2a$ and difference of squares is $4cx$, so $d_--d_+=2cx/a$ and $d_-=a+cx/a$. Squaring and rearranging yields $(1-c^2/a^2)x^2+y^2=a^2-c^2$, hence the standard equation. With $a>c\ge0$, points on the resulting ellipse make both reconstructed distances nonnegative and their sum $2a$, verifying the reverse implication. At (0,4), each focal distance is 5.
- **First hint:** Begin with the two distance formulas, not a guessed standard equation.

#### Learn

- Name the two focal distances and start from their sum 2a.
- Use their difference of squares 4cx to solve for their difference, then isolate each distance and square.
- Rearrange to the standard equation and identify b²=a²−c².
- Verify the reverse direction using nonnegative reconstructed distances and explain c=0 as a circle.

#### Practice progression

Derive for a horizontal focal pair, check vertices/covertices in the original sum, then rotate the reasoning to a vertical pair and handle coincident foci.

**Further variation and generation checks:** Require derivation with radical-sign checks and $a>c\ge0$; vary horizontal/vertical axes and verify vertices and covertices in the focal definition.

#### Misconceptions and responsive feedback

If squaring is treated as reversible automatically, test the signs of the isolated radical expressions. If a and c are interchanged, compare semimajor extent with interior focus positions.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Eliminate radicals by valid rearrangement and squaring, state $a^2=b^2+c^2$, verify the distance-sum interpretation, and identify the circular special case.

**Task range to sample:** Require derivation with radical-sign checks and $a>c\ge0$; vary horizontal/vertical axes and verify vertices and covertices in the focal definition.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Ellipse features and translated equations

Curriculum reference: **Ellipse features and translated equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** In x²/4+y²/16=1, is the major axis horizontal because x is written first?
- **Diagnostic key:** No; the larger denominator belongs to y, so it is vertical.
- **Worked-example prompt:** Analyze (x-2)²/9+(y+1)²/25=1.
- **Worked model and reasoning:** Center (2,-1), vertical major axis, a=5,b=3,c=4. Vertices (2,4),(2,-6); covertices (5,-1),(-1,-1); foci (2,3),(2,-5); full axis lengths 10 and 6.
- **First hint:** Which denominator is larger, and which coordinate uses it?

#### Learn

- Complete any translations and identify the larger denominator.
- Take square roots for semiaxes and derive focal distance by subtraction.
- Plot center, vertices, covertices and foci before drawing a curve; label full axis lengths separately.
- Substitute feature points and compare their distances to the center.

#### Practice progression

Extract features from centered and translated equations, compare horizontal/vertical/circular cases and reconstruct a consistent labeled graph.

**Further variation and generation checks:** Include translations and circles as equal-denominator cases; distinguish semiaxis from full length and plot all named features.

#### Misconceptions and responsive feedback

If the focus is placed at a vertex, ask which distance uses c and which uses a. If denominator is used as length, square the claimed length to reveal the mismatch.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the larger denominator to identify the major axis, take square roots for lengths, compute focal distance by subtraction, and retain translation signs consistently.

**Task range to sample:** Include translations and circles as equal-denominator cases; distinguish semiaxis from full length and plot all named features.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Constructing ellipse equations

Curriculum reference: **Constructing ellipse equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Are center and one focus enough to determine an ellipse uniquely?
- **Diagnostic key:** No; semimajor length can vary above the focal distance.
- **Worked-example prompt:** Construct the axis-aligned ellipse centered at (1,2), with major-axis vertex (7,2) and focus (5,2).
- **Worked model and reasoning:** Horizontal a=6,c=4 gives b²=20, so $(x-1)^2/36+(y-2)^2/20=1$. Verify the given point and focus distances; insufficient data such as center alone leaves many ellipses.
- **First hint:** Measure each supplied feature from the center.

#### Learn

- Inventory which independent parameters each supplied feature fixes.
- Determine center and orientation first, convert full lengths to semiaxes and use a²=b²+c² to recover the remaining size.
- Use a supplied point equation when necessary and verify every original condition, including positive b².

#### Practice progression

Construct from vertices/foci/axis lengths, add a point-constrained case, then distinguish sufficient, insufficient and impossible datasets.

**Further variation and generation checks:** Mix foci, axes, points and vertices; enforce sufficient consistent data and distinguish axis-aligned scope from rotated conics.

#### Misconceptions and responsive feedback

If inconsistent data are forced into a formula, compare a and c before taking a root. If an infinite family is reduced to one guess, identify the missing independent measurement.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Determine the orientation and independent parameters, distinguish full-axis from semiaxis lengths, and verify that the resulting ellipse matches every supplied condition.

**Task range to sample:** Mix foci, axes, points and vertices; enforce sufficient consistent data and distinguish axis-aligned scope from rotated conics.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
