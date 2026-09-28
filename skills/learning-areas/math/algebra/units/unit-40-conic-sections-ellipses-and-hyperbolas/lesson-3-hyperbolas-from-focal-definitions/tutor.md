# Tutor: Lesson 40.3: Hyperbolas from focal definitions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check absolute focal differences and radical elimination; compare both branches explicitly.

Within this unit, revisit [the previous lesson](../lesson-2-ellipses-from-focal-definitions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Axis-aligned hyperbolas with positive a,b; defer rectangular-hyperbola rotation and parametric optimization.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Deriving the hyperbola equation:** Choose one signed distance-difference branch and derive its equation using difference of squares and a nonnegative isolated radical.

- **Hyperbola features and asymptotes:** Read center and transverse direction from the positive term, then compute a,b,c by square roots and addition.

- **Constructing hyperbola equations:** Determine center and orientation, then translate each datum into an independent equation for a²,b² or c².

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A hyperbola with x²/9−y²/16=1 is assigned asymptotes y=±3x/4. Check by its large-coordinate leading relation.

**Agent key and discussion:** Setting the leading squared terms equal gives y²/16=x²/9, hence y=±4x/3. The slope uses b/a for a horizontal transverse axis, not a/b.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Deriving the hyperbola equation

Curriculum reference: **Deriving the hyperbola equation** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For hyperbola a=4,b=3, is c=√7?
- **Diagnostic key:** No; c²=a²+b²=25, so c=5.
- **Worked-example prompt:** Foci are (±5,0) and the absolute difference of focal distances is 6. Derive the hyperbola and check a vertex.
- **Worked model and reasoning:** a=3,c=5,b=4, so $x^2/9-y^2/16=1$. For the right branch let $d_-=\sqrt{(x+c)^2+y^2}$, $d_+=\sqrt{(x-c)^2+y^2}$ and $d_--d_+=2a$. Difference of squares gives $d_-+d_+=2cx/a$, hence $d_-=cx/a+a$. Squaring yields $(c^2-a^2)x^2-a^2y^2=a^2(c^2-a^2)$. Division gives the standard equation with $b^2=c^2-a^2>0$. On $x\ge a$ reconstructed distances are nonnegative and differ by $2a$; reflection across the vertical axis gives the other branch and reverses the signed difference. At (3,0), distances 8 and 2 have difference 6; both branches satisfy the absolute difference.
- **First hint:** The distance difference is 2a, while the focal separation is 2c.

#### Learn

- Choose one signed distance-difference branch and derive its equation using difference of squares and a nonnegative isolated radical.
- Identify b²=c²−a² and the condition 0<a<c.
- Check the derived branch in the original absolute difference, then reflect to obtain the other branch instead of losing it in a sign choice.

#### Practice progression

Derive horizontally, verify both vertices and a nonvertex point, then adapt to a vertical focal pair with complete branch and sign reasoning.

**Further variation and generation checks:** Require radical derivation and both-branch verification with $0<a<c$; do not import the ellipse sign relation.

#### Misconceptions and responsive feedback

If ellipse subtraction is used for c², compare the focus and vertex: hyperbola focus lies farther from center. If squaring adds invalid points, evaluate both focal distances before accepting them.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Preserve both branch cases, establish $c^2=a^2+b^2$, retain $0<a<c$, and check that the derived equation has the intended focal difference.

**Task range to sample:** Require radical derivation and both-branch verification with $0<a<c$; do not import the ellipse sign relation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Hyperbola features and asymptotes

Curriculum reference: **Hyperbola features and asymptotes** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does the larger denominator determine a hyperbola's opening direction?
- **Diagnostic key:** No; the positive squared term does.
- **Worked-example prompt:** Analyze (y-1)²/16-(x+2)²/9=1.
- **Worked model and reasoning:** Center (-2,1), vertical transverse axis, a=4,b=3,c=5. Vertices (-2,5),(-2,-3); foci (-2,6),(-2,-4); asymptotes $y-1=\pm(4/3)(x+2)$.
- **First hint:** The positive squared term determines the opening direction.

#### Learn

- Read center and transverse direction from the positive term, then compute a,b,c by square roots and addition.
- Use the auxiliary rectangle to derive asymptote slopes relative to the center.
- Mark vertices and foci, then draw branches outside the vertices approaching but not including the asymptotes.

#### Practice progression

Graph both orientations and translations, derive asymptotes and focal positions, then verify sample branch points and separate guides from the actual locus.

**Further variation and generation checks:** Include translated horizontal/vertical graphs, exact asymptote equations and branch-point checks; avoid treating rectangle corners as points on the curve.

#### Misconceptions and responsive feedback

If asymptotes are drawn through the origin after translation, substitute the center into their equations. If rectangle corners are claimed as curve points, test the standard equation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify orientation from the positive term, compute $c$ by addition, use the correct asymptote slopes, and place both branches relative to the vertices.

**Task range to sample:** Include translated horizontal/vertical graphs, exact asymptote equations and branch-point checks; avoid treating rectangle corners as points on the curve.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Constructing hyperbola equations

Curriculum reference: **Constructing hyperbola equations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Do asymptotes y=±2x uniquely fix a hyperbola?
- **Diagnostic key:** No; they fix b/a for a horizontal form but not its size.
- **Worked-example prompt:** Construct a hyperbola centered at the origin with vertices (±2,0) and asymptotes y=±3x/2.
- **Worked model and reasoning:** a=2 and b/a=3/2 give b=3, so $x^2/4-y^2/9=1$. Asymptotes alone fix a ratio, not scale, so would be insufficient without another measurement.
- **First hint:** What information fixes a and what only fixes b/a?

#### Learn

- Determine center and orientation, then translate each datum into an independent equation for a²,b² or c².
- Use vertices or a focus to fix scale; a point can supply a further equation if it is compatible.
- Require positive parameters and substitute all constraints into the final relation.

#### Practice progression

Construct from vertex/focus information, combine asymptotes with one scale datum, then analyze insufficient and inconsistent constraints.

**Further variation and generation checks:** Mix vertices, foci, asymptotes and point constraints; verify adequacy and original data before choosing a unique equation.

#### Misconceptions and responsive feedback

If an asymptote slope is assigned directly to a semiaxis, construct two scaled examples with the same slope. If supplied data lie on an asymptote rather than the curve, reject an alleged finite intersection.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Select the correct positive coordinate term, determine positive parameters satisfying every condition, and distinguish an asymptote ratio from a complete scale specification.

**Task range to sample:** Mix vertices, foci, asymptotes and point constraints; verify adequacy and original data before choosing a unique equation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Distinguish branch completion from parameter recovery

For $x^2/9-y^2/16=1$, the equation forces $|x|\ge3$. On the right branch the recovered distances are $5x/3+3$ and $5x/3-3$; both are positive since $x\ge3$. On the left branch reflection reverses which distance is larger, so the absolute difference is still 6. Reporting only the signed difference $d_--d_+=6$ would omit the left branch even though both satisfy the squared equation.

If the learner's derivation covers only $x\ge3$, cue “What happens to the two focal distances at $(-x,y)$?” → supply that the distances exchange → show the signed difference changes sign, leaving the absolute-difference conclusion. Fade by giving a vertical focal pair and asking for the analogous two-branch argument. For asymptote errors use the leading relation $x^2/9=y^2/16$ before offering a slope rule; a correct $a,b,c$ calculation does not establish correct asymptotes or both branches.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
