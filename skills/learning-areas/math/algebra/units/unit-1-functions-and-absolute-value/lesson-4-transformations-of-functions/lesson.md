# Lesson 1.4: Transformations of functions

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)
- [Features and change in functions](../lesson-3-features-and-change-in-functions/lesson.md)

## Outcome

The student can derive, apply, and verify transformations of a function's formula, points, domain, range, and identifiable parameters.

## Scope

### Teach

- Horizontal and vertical translations.
- Horizontal and vertical reflections and scale factors.
- Coordinate mappings for combined transformations.
- Domain and range under transformations.
- Recovery of parameters from valid correspondences.
- Graphing technology as a check of mathematical predictions.

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

#### Knowledge

For

\[
g(x)=f(x-h)+k,
\]

each point $(u,v)$ on $f$ maps to $(u+h,v+k)$ on $g$. The horizontal mapping follows by solving $x-h=u$; the sign inside the function is not read as an outside movement. Under translation alone, $h$ and $k$ are the coordinate differences between corresponding points.

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

#### Mastery evidence

The student derives rather than guesses the horizontal direction, maps both coordinates correctly, and recovers parameters only when the stated correspondence determines them.

#### Misconceptions

- **Inside sign gives movement directly:** Reading $f(x-3)$ as a move left.
- **Only outputs move:** Applying the vertical change but ignoring the horizontal change.
- **Any similar feature corresponds:** Inferring parameters from unrelated points.

### Apply reflections and scale factors

#### Knowledge

For $g(x)=af(bx)$, where $a,b\ne0$, a point $(u,v)$ maps to

\[
(u/b,av).
\]

Horizontal distances scale by $1/|b|$, while vertical distances scale by $|a|$. A negative $b$ reflects input locations across the vertical axis; a negative $a$ reflects outputs across the horizontal axis. Symmetry may conceal a reflection.

Zero multipliers require separate treatment. For $g(x)=af(bx)$ with $a=0$ and $b\ne0$, outputs are zero only on $\{x:bx\in D_f\}$; multiplying by zero does not repair an undefined input. If $b=0$ and $0\in D_f$, the rule is the constant $af(0)$ for every real input unless an external domain restriction applies. If $0\notin D_f$, the original expression is undefined everywhere, even when $a=0$. The nonzero coordinate mapping cannot be used in these cases.

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

Vary inside and outside multipliers independently before combining them. Include stretches, compressions, both reflections, a symmetric parent that hides one reflection, and zero-multiplier cases requiring verbal analysis rather than the nonzero mapping.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#apply-reflections-and-scale-factors) and generate fresh questions using this coverage checklist.

Use a nonsymmetric parent or explicit point set. Require point mappings for positive and negative inside and outside multipliers, geometric scale factors, and an explanation of why a zero multiplier must be handled separately.

#### Mastery evidence

The student divides input coordinates by the inside multiplier, multiplies outputs by the outside multiplier, distinguishes coordinate changes from scale magnitudes, and recognizes concealed or noninvertible cases.

#### Misconceptions

- **Direct horizontal scaling:** Multiplying input coordinates by $b$ rather than dividing by it.
- **Negative scale only changes size:** Omitting the associated reflection.
- **Zero uses the same mapping:** Dividing by zero or treating a collapsed graph as invertible.
- **No visible change means no transformation:** Ignoring symmetry that conceals a reflection.

### Apply and verify combined transformations

#### Knowledge

For

\[
g(x)=af(b(x-h))+k, \qquad a,b\ne0,
\]

the point mapping is

\[
(u,v)\mapsto(h+u/b,av+k).
\]

An affine inside expression must be factored into $b(x-h)$ before identifying $h$. If the domain of $f$ is $D_f$, the new domain is $\{h+u/b:u\in D_f\}$; if its range is $R_f$, the new range is $\{av+k:v\in R_f\}$. Negative scales reverse interval endpoint order but preserve whether each mapped endpoint is included.

Correspondences and fixed parameters determine unknowns only when enough independent information is supplied. Symmetry may make recovery nonunique. A graphing tool can test predicted points and features in a common viewing window, but substitution into the formula resolves disagreements.

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
- compare one predicted point or feature against a plotted result.

#### Mastery evidence

The student performs the full mapping consistently, preserves set membership, explains identifiability, and uses technology to verify rather than originate unsupported claims.

#### Misconceptions

- **Read before factoring:** Treating $f(2x-6)$ as though its horizontal parameter were $6$.
- **Fixed transformation order as a shortcut:** Applying memorized graph moves inconsistently instead of using the coordinate mapping.
- **Negative interval endpoints stay ordered:** Failing to reorder mapped endpoints.
- **Graph appearance proves parameters:** Ignoring symmetry or insufficient correspondence information.

## Lesson completion

Mark this lesson complete only when all three criteria are **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), including an algebraic derivation and a verification task.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance). Mathematical reference: [OpenStax 3.5 Transformation of Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-5-transformation-of-functions). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
