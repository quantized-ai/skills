# Tutor: Lesson 41.2: Converting parametric and rectangular relations

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check substitution, square roots and trig identities; preserve domain/endpoint notes throughout elimination.

Within this unit, revisit [the previous lesson](../lesson-1-parametric-graphs-and-orientation/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Exact point-set conversion and parametrization of elementary curves; defer arbitrary curve parametrization algorithms.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Parameter elimination:** Isolate t when possible and substitute, or use an identity for trigonometric coordinates.

- **Constructing parametrizations:** For a segment use start+t(end−start) with 0≤t≤1 and show that all convex combinations lie on it.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Eliminate t from x=t²,y=t with −1≤t≤2. A response gives the full parabola x=y². Repair it and state what timing information was lost.

**Agent key and discussion:** Add −1≤y≤2; the full parabola contains extra points. The parameter itself equals y, so traversal runs upward through that restricted arc, information the bare equation would not convey.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Parameter elimination

Curriculum reference: **Parameter elimination** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** From x=t²,y=t with t≥0, is x=y² alone the complete rectangular description?
- **Diagnostic key:** No; add y≥0 to preserve the upper branch.
- **Worked-example prompt:** Eliminate t from x=t², y=t+1 for -2≤t≤1 without adding points.
- **Worked model and reasoning:** t=y-1 gives $x=(y-1)^2$ with $-1\le y\le2$. Equivalently y=1±√x only with branch-specific restrictions; the unrestricted parabola is too large.
- **First hint:** Carry the original interval through the recovered expression for t.

#### Learn

- Isolate t when possible and substitute, or use an identity for trigonometric coordinates.
- Translate every parameter restriction into coordinate conditions.
- Check points potentially added by squaring and lost by division; reconstruct an allowed t for each claimed branch to prove equivalence.
- Record lost timing/orientation information separately.

#### Practice progression

Eliminate linear and nonlinear parameters, use trig identities, then handle intervals, excluded endpoints and reverse-recoverability checks.

**Further variation and generation checks:** Include trig elimination, squaring and division hazards; test reverse recoverability of t for every proposed branch.

#### Misconceptions and responsive feedback

If the entire conic is reported after elimination, test a point on an unintended branch for an admissible parameter. If dividing by t removes t=0, examine that point directly.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Apply the appropriate elimination method, carry parameter-domain restrictions into coordinate conditions, and check points or branches potentially lost or introduced by algebra.

**Task range to sample:** Include trig elimination, squaring and division hazards; test reverse recoverability of t for every proposed branch.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Constructing parametrizations

Curriculum reference: **Constructing parametrizations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does x=1+2t,y=3−t for all real t describe only the segment between t=0 and t=1?
- **Diagnostic key:** No; the entire line is traced unless t is restricted.
- **Worked-example prompt:** Parametrize the segment from (-2,3) to (4,-1) including endpoints, then reverse its traversal.
- **Worked model and reasoning:** $(x,y)=(-2+6t,3-4t)$ for 0≤t≤1; reverse $(4-6t,-1+4t)$ on the same interval. Substitution covers every convex combination once. A standard full-circle parametrization uses sine and cosine with a stated tracing interval; other verified parametrizations are valid.
- **First hint:** Use start point plus t times the endpoint displacement.

#### Learn

- For a segment use start+t(end−start) with 0≤t≤1 and show that all convex combinations lie on it.
- Reverse direction by exchanging endpoints.
- For circles use center plus radius times cosine/sine and choose the needed angle interval.
- For a function graph take x=t with the original domain; verify both inclusion and full coverage.

#### Practice progression

Parametrize lines/segments, full and partial circles, and rectangular relations; vary orientation and demonstrate no extra or missing points.

**Further variation and generation checks:** Include line segments, circles and rectangular relations, with both surjectivity onto the target set and exclusion of unwanted branches.

#### Misconceptions and responsive feedback

If arbitrary coordinate functions are chosen independently, test whether their paired values satisfy the target relation. If the parametrization misses an endpoint, adjust the parameter interval deliberately.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Verify the rectangular equation, recover every intended point, use domain endpoints correctly, and explain the orientation and nonuniqueness of the parametrization.

**Task range to sample:** Include line segments, circles and rectangular relations, with both surjectivity onto the target set and exclusion of unwanted branches.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
