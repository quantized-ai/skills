# Tutor: Lesson 37.2: Polar equations and curves

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check polar conversion and equivalent representations from lesson 1, including negative radii and the pole.

Within this unit, revisit [the previous lesson](../lesson-1-polar-coordinate-representations/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use specified angle intervals and actual graphing evidence; defer polar area integrals and derivative-based tangents.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Polar graph construction:** Build a θ,r,x,y table containing zeros, extrema and intermediate angles.

- **Polar symmetry and rectangular relations:** Use substitutions as sufficient algebraic symmetry tests, then justify reflected points directly when the formula changes.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Converting r=2cosθ by dividing by r produces an expression used to exclude the pole. Test whether the pole belonged originally.

**Agent key and discussion:** r=0 occurs when cosθ=0, so the original includes the pole. Multiplying to obtain x²+y²=2x preserves it; division by r requires restoring that separately checked case.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Polar graph construction

Curriculum reference: **Polar graph construction** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For r=2sinθ, does a negative value of r mean no real plotted point?
- **Diagnostic key:** No; it places the point on the opposite ray.
- **Worked-example prompt:** Trace r=3cos θ for 0≤θ≤π and identify visits to the pole.
- **Worked model and reasoning:** Points at θ=0,π/2,π are (3,0),(0,0),(3,0). Since $(x-3/2)^2+y^2=(3/2)^2$, the interval traces the whole circle once counterclockwise, with one pole visit at π/2. Negative r after π/2 must be plotted on the opposite ray.
- **First hint:** Convert selected pairs to x=r cos θ and y=r sin θ instead of drawing r as an x-coordinate.

#### Learn

- Build a θ,r,x,y table containing zeros, extrema and intermediate angles.
- Mark the tracing order as θ increases, converting negative radii explicitly.
- Identify loops or petals by pole passages and check whether a longer interval retraces existing points.
- Use actual graphing with sufficient angular resolution and reconcile every apparent feature with computed pairs.

#### Worked petal and retracing model

**Prompt:** Analyze $r=2\cos(3\theta)$ for $-\pi/6\le\theta\le5\pi/6$. Determine the petals, pole visits and tracing order. Explain what changes if a further π is added to the upper limit, and check a real polar or parametric display against your analysis.

**Private derivation:** The pole occurs when cos(3θ)=0: in the stated interval these parameters are −π/6, π/6, π/2 and 5π/6. Between consecutive pole visits one loop is traced. The three tips occur at θ=0,π/3,2π/3, where r=2,−2,2 respectively. Their Cartesian points are (2,0), (−1,−√3), (−1,√3). The negative middle radius places that petal in direction 4π/3, not π/3. On the first interval radius increases from zero to 2 and decreases to zero while θ moves through its rightward angular sector. The next two intervals do the same in disjoint sectors after applying the negative-radius reversal, establishing exactly three petals on this interval.

| Parameter θ | Radius r | Cartesian location |
| --- | --- | --- |
| −π/6 | 0 | Pole |
| −π/12 | √2 | ((√3+1)/2,−(√3−1)/2) |
| 0 | 2 | (2,0), right tip |
| π/12 | √2 | ((√3+1)/2,(√3−1)/2) |
| π/6 | 0 | Pole |
| π/3 | −2 | (−1,−√3), lower-left tip |
| π/2 | 0 | Pole |
| 2π/3 | 2 | (−1,√3), upper-left tip |
| 5π/6 | 0 | Pole |

The radial formula has period 2π/3, but that change rotates the represented point to another petal. In contrast, $r(\theta+\pi)=-r(\theta)$ and both cosine and sine also change sign under θ→θ+π, so the Cartesian point repeats exactly. Extending to 11π/6 traces the same three petals a second time; it does not create three new petals. Pole visits alone count parameter events, not distinct nonzero petals.

**Actual graph check:** Enter the relation in polar mode, or enter x=2cos(3t)cos t and y=2cos(3t)sin t with the stated interval. Use equal axis scales and a window containing [−2,2] on both axes. Include the exact pole/tip parameters in a table; begin with an angular increment such as π/120 and compare a finer increment if a petal looks disconnected or missing. Then extend by π and compare the same traced positions. Record the actual input, interval, display and observations. The table and identities above verify the mathematics but are not evidence that the learner used a plotting tool; leave that component pending until the action is observed. In reassessment change the radial coefficient, sine/cosine phase or interval and independently recheck petal directions and retracing.

#### Practice progression

Plot simple circles/rays, then a rose, spiral or limacon within the curriculum; vary angle windows and require point, pole and repeated-tracing evidence.

**Further variation and generation checks:** Include rose/cardioid-style curves and different tracing intervals; verify pole passages and repeated tracing numerically without asserting a picture proves completeness.

#### Misconceptions and responsive feedback

If a polar graph is drawn as θ against r, ask where x and y come from. If a loop disappears in a coarse plot, refine around consecutive zeros rather than assume it is absent.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Plot negative radii correctly, use enough angles to resolve loops and petals, identify repeated tracing where it occurs, and reconcile the display with calculated points.

**Task range to sample:** Include rose/cardioid-style curves and different tracing intervals; verify pole passages and repeated tracing numerically without asserting a picture proves completeness.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Polar symmetry and rectangular relations

Curriculum reference: **Polar symmetry and rectangular relations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If replacing θ by −θ changes a polar formula, has x-axis symmetry been disproved?
- **Diagnostic key:** No; different polar representations can still give the same point set.
- **Worked-example prompt:** Convert r=4cos θ to a rectangular locus and justify that no extra point is introduced at the pole.
- **Worked model and reasoning:** Multiplying by r gives $x^2+y^2=4x$, or $(x-2)^2+y^2=4$. The original includes the pole when cos θ=0. Reflection θ→-θ verifies x-axis symmetry; failed substitution tests need not disprove all point-set symmetries.
- **First hint:** Check r=0 separately before multiplying or dividing by r.

#### Learn

- Use substitutions as sufficient algebraic symmetry tests, then justify reflected points directly when the formula changes.
- Convert relations with rcosθ=x, rsinθ=y and r²=x²+y² while tracking radius/angle restrictions.
- Treat the pole separately before dividing by r and check both directions after squaring.

#### Practice progression

Verify straightforward symmetries, analyze a failed test that still preserves points, then convert lines/circles with pole and branch equivalence checks.

**Further variation and generation checks:** Convert lines/circles with specified domains, verify both inclusions of point sets and use sufficient symmetry tests without treating them as necessary.

#### Misconceptions and responsive feedback

If extra points arise from r², ask whether their sign/angle representatives existed originally. A failed substitution test must not be used as a necessary-condition proof.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify symmetry through represented points, identify any sign or angle restriction in a conversion, and check the pole and any points potentially lost or added by algebra.

**Task range to sample:** Convert lines/circles with specified domains, verify both inclusions of point sets and use sufficient symmetry tests without treating them as necessary.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## A restricted window changes the conversion answer

For $r=4\cos\theta$ with $0\le\theta\le\pi/2$, multiplying by $r$ gives $(x-2)^2+y^2=4$, but the stated interval traces only its upper semicircle from $(4,0)$ to the pole. Indeed $x=2+2\cos2\theta$ and $y=2\sin2\theta$ with $0\le2\theta\le\pi$. The full circle equation alone therefore enlarges this restricted locus; add $y\ge0$.

When a learner reports the full circle, ask whether $(2,-2)$ can occur in the original window. If needed, cue the signs of $r$ and $\sin\theta$; then supply $y=4\cos\theta\sin\theta$, leaving its sign and endpoint check. If the learner has the correct upper semicircle but reverses travel, ask for the first and last parameter values. Fade by supplying the circle equation for $r=2\sin\theta$, $0\le\theta\le\pi/2$, and asking which half is traced: the right half, from the pole to $(0,2)$. Require the existing actual-tool check separately.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
