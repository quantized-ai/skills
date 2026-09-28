# Tutor: Lesson 41.1: Parametric graphs and orientation

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check function evaluation, common domains and coordinate plotting; if paired values are mismatched, return to a row-by-row parameter table.

## Teaching boundaries

Locus and traversal, including actual plotted evidence; defer derivatives of parametric curves.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Parametric representations:** Make one table row for each allowed parameter input, with both coordinates and units.

- **Orientation and traversal:** Record a short ordered sequence of parameter values to establish direction.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** For x=cos t,y=sin t on [0,4π], a student sketches a circle and says it is traced once. What additional evidence is needed?

**Agent key and discussion:** Position repeats every 2π, so the specified interval traces the circle twice counterclockwise. A shape-only graph cannot encode the number of traversals; use increasing t values and endpoints.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Parametric representations

Curriculum reference: **Parametric representations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For x=t,y=t+2, may x at t=1 be paired with y at t=3?
- **Diagnostic key:** No; a parametric point uses both coordinates at the same t.
- **Worked-example prompt:** For x=t+1, y=t²-2, -1≤t≤2, plot paired values and identify the endpoints.
- **Worked model and reasoning:** At t=-1,0,1,2 points are (0,-1),(1,-2),(2,-1),(3,2). Both endpoints are included. Coordinates must come from the same t; separate x-versus-t and y-versus-t graphs are not the planar path.
- **First hint:** Make one row per parameter value with both coordinates.

#### Learn

- Make one table row for each allowed parameter input, with both coordinates and units.
- Intersect coordinate-function domains before sampling.
- Plot the paired points on an xy plane, not the separate time graphs, and verify endpoints exactly.
- Use actual parametric plotting to compare with predicted landmarks and refine the window as needed.

#### Practice progression

Start with linear pairs, then nonlinear common-domain cases and actual plotted relations with checked points, endpoints and units.

**Further variation and generation checks:** Include common-domain restrictions and numerical plotting; reconcile graph endpoints with computed pairs and label parameter units.

#### Misconceptions and responsive feedback

If a table produces a point off the plotted curve, first check whether the same t was used in both coordinates. If an endpoint is missing, distinguish an open parameter bound from a plotting omission.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the common domain, label coordinate and parameter units where relevant, pair values at the same input, and reconcile the plotted relation with calculated points.

**Task range to sample:** Include common-domain restrictions and numerical plotting; reconcile graph endpoints with computed pairs and label parameter units.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Orientation and traversal

Curriculum reference: **Orientation and traversal** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can two parametrizations draw the same circle in opposite directions?
- **Diagnostic key:** Yes; replacing t with −t reverses ordinary sine/cosine traversal.
- **Worked-example prompt:** Compare x=cos t,y=sin t on [0,2π] with x=cos(2t),y=-sin(2t) on [0,2π].
- **Worked model and reasoning:** Both point sets are the unit circle. First traverses once counterclockwise, second twice clockwise; both start/end at (1,0). Same locus does not mean same speed, orientation or visit times.
- **First hint:** Compute the first few points in increasing parameter order.

#### Learn

- Record a short ordered sequence of parameter values to establish direction.
- Compare endpoint inclusion, repeated visits and time spent on segments under a changed parameter.
- Distinguish the geometric point set from the process tracing it, including stationary intervals and closed curves whose start is revisited.

#### Practice progression

Analyze forward/reverse traversal, shortened and multiple-cycle intervals, then same-locus/different-timing examples with explicit endpoint and visit counts.

**Further variation and generation checks:** Vary open/closed parameter endpoints, partial/repeated tracing and stationary segments; distinguish point-set equality from traversal equality.

#### Misconceptions and responsive feedback

If a curve shape alone is used to infer speed or orientation, ask for the associated parameter values. If repeated tracing is missed, compare positions after one apparent cycle and at the final bound.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Mark included or excluded endpoints, determine increasing-parameter direction from ordered values, and distinguish geometric equality of point sets from equality of traversal.

**Task range to sample:** Vary open/closed parameter endpoints, partial/repeated tracing and stationary segments; distinguish point-set equality from traversal equality.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
