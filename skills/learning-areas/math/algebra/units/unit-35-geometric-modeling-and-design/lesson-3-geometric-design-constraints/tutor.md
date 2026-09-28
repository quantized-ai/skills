# Tutor: Lesson 35.3: Geometric design constraints

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check equations/inequalities, geometric measures and feasible positive dimensions; simplify a multi-constraint problem to one variable when possible.

Within this unit, revisit [the previous lesson](../lesson-2-area-and-volume-density/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Optimize only the stated feasible model and objective; defer unprovided costs, engineering guarantees and unsupported global claims from coarse search.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Feasible geometric designs:** List each design requirement as an equality, inequality or tolerance with units.

- **Design comparison and optimization:** Define the objective and feasible set separately.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A rectangle of fixed perimeter 20 has sampled areas 16,21,24 at widths 2,3,4. Is width 4 proven best? Find a stronger argument.

**Agent key and discussion:** Area x(10−x)=25−(x−5)² is at most 25, attained at width 5. The samples missed the optimum. The proof includes the equality case within 0<x<10.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Feasible geometric designs

Curriculum reference: **Feasible geometric designs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A border 0.2 m wide surrounds a rectangle. Does it add 0.2 or 0.4 to each outside dimension?
- **Diagnostic key:** 0.4, since it appears on both sides.
- **Worked-example prompt:** A rectangular display has width x, height 2x, and a uniform 0.5 m border outside. Its total outside area must be at most 15 m². Find feasible positive widths.
- **Worked model and reasoning:** Outside dimensions $(x+1)$ and $(2x+1)$ give $2x^2+3x+1\le15$. Roots of $2x^2+3x-14=0$ are -3.5 and 2, so feasible $0<x\le2$ m. Border width appears on both sides.
- **First hint:** Does the border add once or twice to each dimension?

#### Learn

- List each design requirement as an equality, inequality or tolerance with units.
- Choose variables for independent dimensions and express aspect ratios or fixed offsets before measures.
- Intersect algebraic solutions with positivity, clearance and discrete material limits.
- Substitute a proposed design into every original requirement.

#### Practice progression

Begin with one exact constraint, then ratios and clearances, then multiple constraints/tolerances and a scale layout with all checks documented.

**Further variation and generation checks:** Include aspect ratios, clearances and tolerances; intersect every algebraic inequality with positivity and physical constraints.

#### Misconceptions and responsive feedback

If a feasible algebraic root gives negative interior width, distinguish equation solving from physical feasibility. If only the binding constraint is checked, ask whether the other requirements still hold.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Translate each requirement without omitting fixed offsets or unit conversions, distinguish exact constraints from tolerances, and check the resulting design against all conditions.

**Task range to sample:** Include aspect ratios, clearances and tolerances; intersect every algebraic inequality with positivity and physical constraints.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Design comparison and optimization

Curriculum reference: **Design comparison and optimization** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A computer checks ten designs and finds the best one. Has it proved a global optimum over all real dimensions?
- **Diagnostic key:** No; unsampled feasible choices may do better.
- **Worked-example prompt:** A rectangle must have perimeter 28 m. Determine the largest possible area and justify global optimality without calculus.
- **Worked model and reasoning:** Sides x and $14-x$, $0<x<14$. Area $x(14-x)=49-(x-7)^2\le49$ m², attained by 7-by-7. A sampled graph supports but does not prove the global bound.
- **First hint:** What would establish an upper bound for every feasible width, not just those tested?

#### Learn

- Define the objective and feasible set separately.
- For finite alternatives compute comparable totals, including fixed costs.
- For one-parameter rectangles use square completion or an inequality to prove a bound and show equality is feasible.
- For numerical searches state interval, resolution and what evidence could exclude better unsampled designs.

#### Practice progression

Compare a finite list, optimize a simple algebraic family, then test sensitivity to a changed constraint and distinguish model optimum from a real-world recommendation.

**Further variation and generation checks:** Compare finite design alternatives and continuous families; include objective units, feasible endpoints and sensitivity to constraints. Label a numerical best as limited to the search unless justified globally.

#### Misconceptions and responsive feedback

If maximum volume is chosen when cost is the stated objective, return to the decision criterion. If a graph peak is called exact, ask for an algebraic bound or a qualified numerical statement.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the complete relevant cost or measure, include boundary candidates where admissible, distinguish a proved optimum from a best tested design, and explain how assumptions or changed constraints could alter the choice.

**Task range to sample:** Compare finite design alternatives and continuous families; include objective units, feasible endpoints and sensitivity to constraints. Label a numerical best as limited to the search unless justified globally.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**A proved bound also needs a feasible equality case.** For a rectangular enclosure with 20 m of fencing on three sides and its fourth side on a straight wall, let the two perpendicular sides be x and the fenced parallel side y. Then $2x+y=20$, $0<x<10$, and area $A=x(20-2x)=50-2(x-5)^2\le50$. Equality occurs at x=5,y=10, which satisfies positivity and the fence constraint, so 50 $\text{m}^2$ is the maximum.

If a learner reports a best table value as globally optimal, ask whether an untested width might improve it. Next express the area as a quadratic; then supply the completed-square form and leave the bound and equality check. That supplied rewrite is assistance to the proof. Fade to a 24 m fence with the same configuration (maximum 72 at x=6,y=12). If an additional clearance constraint requires $x\le4$, the best feasible boundary is x=4,y=16, area 64; check changed constraints before reusing the original optimum.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
