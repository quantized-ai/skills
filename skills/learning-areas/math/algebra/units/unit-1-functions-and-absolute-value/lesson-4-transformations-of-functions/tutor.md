# Tutor: Lesson 1.4: Transformations of functions

Agent-facing delivery guidance for the [curriculum](lesson.md). Read both files with the [shared agent guide](../agent-guide.md) before tutoring. The curriculum defines content, objectives, and proficiency; this file supplies activities and evidence collection. Keep calibration keys private until feedback is appropriate. Use the [assessment bank](../assessment.md) for calibration and the [question-generation specification](../question-generation.md) for fresh assessments.

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)
- [Features and change in functions](../lesson-3-features-and-change-in-functions/lesson.md)

## Teaching boundaries

Use the content and objectives in [lesson.md](lesson.md#concepts) to determine what to teach. Keep these later topics deferred during this lesson.

### Defer

- Function composition as an independent topic.
- Inverse functions.
- Transformations of statistical data.
- Unjustified parameter recovery from visually similar graphs.

## Agent workflow

1. Confirm that the student can evaluate a function and identify corresponding points. Begin with one inside or outside operation, then add a second only after the first is understood.
2. Derive the new input by setting the inside expression equal to the old input. In the reasoning task, let the student test an incorrect coordinate before presenting the corrected derivation.
3. Once one method is accessible, compare direct input solving with factoring into transformation form. Ask why they agree and which makes the horizontal shift easiest to identify. Do not require simultaneous methods from a beginner.
4. Apply the same mapping to domain and range with endpoint membership attached. Discuss zero multipliers and parameter nonuniqueness separately from the invertible mapping.
5. Predict a point before plotting, vary one parameter, and compare actual observations with the prediction. Record missing technology evidence honestly. Reassess with fresh parents or correspondences rather than the corrected learning example.

## Reasoning task for learning and practice

**Purpose:** connect symbolic structure to a verifiable point correspondence. Use this original error-analysis task after the learner can handle a simple translation.

**Prompt:** A marked point $(6,3)$ lies on $f$. For $g(x)=-2f(3x-9)+4$, a hypothetical solution says: “Move right 9 and multiply the input coordinate by 3; the new point is $(45,-2)$.” Test the proposed input in the original formula and find the correct corresponding point.

**Agent key:** At $x=45$ the inside value is $126$, not $6$, so the claim is not justified by the known point. Solve $3x-9=6$ to obtain $x=5$ and compute $-2(3)+4=-2$. The correct corresponding point is $(5,-2)$. Do not claim $(45,-2)$ cannot lie anywhere on $g$: $f(126)$ is unspecified. The mistake is its asserted correspondence.

**Method comparison after repair:** Factor $3x-9=3(x-3)$ to obtain $(u,v)\mapsto(3+u/3,-2v+4)$. Ask why this is the same input equation and why the shift is 3 rather than 9. If $f$ has domain $[0,6]$, the transformed domain is $[3,5]$; ask the student to explain both endpoints.

**Respond to reasoning:** Separate horizontal and vertical mistakes. If the output $-2$ is correct, preserve that evidence while repairing the input. An actual plot is still required for the lesson's technology component; this symbolic task alone cannot supply it.

## Criteria

### Apply translations

Curriculum reference: **Horizontal and vertical translations** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** A point $(1,4)$ lies on $f$. Where does it go for $g(x)=f(x-3)+2$?
- **Key:** $(4,6)$, since $x-3=1$ gives $x=4$ and the output increases by $2$.
- **Worked model:** Under translation alone, corresponding points $(-2,5)\mapsto(1,1)$ give $h=3$ and $k=-4$, hence $g(x)=f(x-3)-4$. A second point $(4,-1)$ would map to $(7,-5)$. These conclusions require the stated correspondence and the translation-only assumption.
- **First hint:** “What new input makes the inside expression equal to the old input?”
- **Generation check:** Identify actual correspondences. Similar-looking points or unrelated intercepts do not determine translation parameters.

#### Learn

- Derive the horizontal mapping by solving the input equation.
- Contrast the inside sign with the direction of the horizontal translation.
- Map several points and a recognizable feature such as a vertex or intercept.
- Recover $h$ and $k$ only from actual correspondences under translation alone.

#### Practice

Generate formula-to-mapping, mapping-to-formula, and parameter-recovery tasks. Include positive and negative horizontal and vertical translations and parent functions with recognizable features.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#apply-translations) and generate fresh questions using this coverage checklist.

Require the student to derive a translation from a formula, map at least two points, and recover a translated formula from supplied corresponding features.

#### Misconceptions

- **Inside sign gives movement directly:** Reading $f(x-3)$ as a move left.
- **Only outputs move:** Applying the vertical change but ignoring the horizontal change.
- **Any similar feature corresponds:** Inferring parameters from unrelated points.

### Apply reflections and scale factors

Curriculum reference: **Reflections and scale factors** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Map $(6,-2)$ under $g(x)=-3f(2x)$ and name the scale factors.
- **Key:** $(3,6)$; horizontal factor $1/2$, vertical factor $3$, and reflection across the horizontal axis.
- **Worked model:** Under $g(x)=2f(-x/2)$, $(u,v)$ maps to $(-2u,2v)$. Thus $(1,3)$ maps to $(-2,6)$. Horizontal distances double and input locations reflect across the vertical axis; vertical distances double. If $f$ is even, the inside reflection alone is concealed by symmetry.
- **First hint:** “Solve the inside input equation for the new coordinate before changing the output.”
- **Generation check:** Use a nonsymmetric parent or actual correspondences to expose reflections. For zero multipliers, evaluate the original expression's domain first; multiplying an undefined value by zero is not defined.

#### Learn

- Derive the reciprocal horizontal coordinate change from $bx=u$.
- Contrast coordinate multipliers with geometric scale factors.
- Track reflected coordinates when a multiplier is negative.
- Use a nonsymmetric parent function to expose reflections that symmetry could conceal.

#### Practice

Vary inside and outside multipliers independently before combining them. Include stretches, compressions, both reflections, a symmetric parent that hides one reflection, and zero-multiplier cases: with $a=0$ and $b\ne0$, use $(u,v)\mapsto(u/b,0)$ and preserve the transformed domain; with $b=0$, analyze whether $f(0)$ is defined instead of using a coordinate mapping.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#apply-reflections-and-scale-factors) and generate fresh questions using this coverage checklist.

Use a nonsymmetric parent or explicit point set. Require point mappings for positive and negative inside and outside multipliers, geometric scale factors, and an explanation of the distinction between $a=0$ and $b=0$, including domain restrictions. For $a=0$ and $b\ne0$, require the valid point mapping; for $b=0$, require direct analysis of $f(0)$.

#### Misconceptions

- **Direct horizontal scaling:** Multiplying input coordinates by $b$ rather than dividing by it.
- **Negative scale only changes size:** Omitting the associated reflection.
- **Confusing zero multipliers:** Rejecting the valid point mapping when only $a=0$, dividing by $b=0$, or treating the collapsed plane mapping as invertible.
- **No visible change means no transformation:** Ignoring symmetry that conceals a reflection.

### Apply and verify combined transformations

Curriculum reference: **Combined transformations and experimental checks** in the [concept table](lesson.md#concepts). Use that row’s Content and Proficiency criteria; the checklist below specifies evidence collection for it.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Factor the inside of $g(x)=2f(-3x+6)+1$ and map a point $(3,4)$ on $f$.
- **Key:** $-3(x-2)$; mapping $(u,v)\mapsto(2-u/3,2v+1)$ sends $(3,4)$ to $(1,9)$.
- **Worked model:** Suppose $D_f=[-2,4)$ and $R_f=(-1,3]$. For $g(x)=-2f(-2(x-1))+5$, mapping is $(u,v)\mapsto(1-u/2,5-2v)$. Domain is $(-1,2]$ and range $[-1,7)$: each negative multiplier reverses order while inclusion follows the original endpoint. For $f(x)=|x|$, the graph of $af(bx)$ reveals only $a|b|$, so $a$ and $b$ cannot generally be recovered separately.
- **First hint:** “Track each endpoint together with whether it is included, then put the mapped endpoints in increasing order.”
- **Generation check:** Use feasible domain/range data and independent correspondences. Obtain a real plotted result for technology evidence; never invent an observation. Check discrepancies by substituting into the unfactored original formula.

#### Learn

- Factor an inside affine expression before reading transformation parameters.
- Derive the complete mapping and apply it to points, domain, and range.
- Demonstrate endpoint reordering under a negative scale.
- Predict identifiable features before using graphing technology to check them.

#### Practice

Generate combined transformations with factored and unfactored inside expressions. Include disconnected domains or ranges, open and closed endpoints, negative scales, determined and underdetermined parameter recovery, and a technology-check prompt.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#apply-and-verify-combined-transformations) and generate fresh questions using this coverage checklist.

Require the student to:

- factor an inside affine expression;
- derive and apply the complete point mapping;
- transform a domain and range with endpoint membership preserved;
- determine or explicitly identify nonuniqueness in a parameter-recovery task; and
- compare predicted and plotted corresponding points, vary one parameter at a time, and resolve discrepancies using the formula.

#### Misconceptions

- **Read before factoring:** Treating $f(2x-6)$ as though its horizontal parameter were $6$.
- **Fixed transformation order as a shortcut:** Applying memorized graph moves inconsistently instead of using the coordinate mapping.
- **Negative interval endpoints stay ordered:** Failing to reorder mapped endpoints.
- **Graph appearance proves parameters:** Ignoring symmetry or insufficient correspondence information.

## Lesson completion

Mark this lesson complete only when all three criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), including an algebraic derivation and a verification task.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance). Mathematical reference: [OpenStax 3.5 Transformation of Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-5-transformation-of-functions). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
