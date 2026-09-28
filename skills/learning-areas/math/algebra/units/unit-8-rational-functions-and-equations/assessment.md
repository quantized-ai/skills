# Unit 8 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 8.1: Reciprocal functions and transformations

### The reciprocal parent function

[Curriculum](lesson-1-reciprocal-functions-and-transformations/lesson.md#concepts) · [Tutor guidance](lesson-1-reciprocal-functions-and-transformations/tutor.md#the-reciprocal-parent-function)

**A — Prompt:** State domain, range, and asymptotes of $f(x)=1/x$.

**Key:** Both domain and range exclude zero; asymptotes are $x=0$ and $y=0$. Positive inputs give positive outputs.

**B — Prompt:** Describe how the points $(1,1)$ and $(-1,-1)$ show the parent graph's symmetry.

**Key:** They are origin reflections; in general $f(-x)=-f(x)$, so the function is odd on its symmetric domain.

**Generation checks:** Use branch signs and exact points; never join the branches across the excluded input.

### Transformations of reciprocal graphs

[Curriculum](lesson-1-reciprocal-functions-and-transformations/lesson.md#concepts) · [Tutor guidance](lesson-1-reciprocal-functions-and-transformations/tutor.md#transformations-of-reciprocal-graphs)

**A — Prompt:** Give asymptotes and an exact point of $g(x)=-2/(x-3)+1$.

**Key:** Asymptotes $x=3,y=1$; at x=4 the point is $(4,-1)$.

**B — Prompt:** Recover a reciprocal transform with asymptotes x=2, y=-1 through $(3,4)$.

**Key:** In $a/(x-2)-1$, substitution gives $a-1=4$, so $a=5$.

**Generation checks:** Require nonzero numerator scale and an allowed extra point; distinguish reflected branch positions.

## Lesson 8.2: Discontinuities and intercepts

### Holes and vertical asymptotes

[Curriculum](lesson-2-discontinuities-and-intercepts/lesson.md#concepts) · [Tutor guidance](lesson-2-discontinuities-and-intercepts/tutor.md#holes-and-vertical-asymptotes)

**A — Prompt:** Identify holes and vertical asymptotes of $(x^2-1)/(x-1)^2$.

**Key:** It reduces to $(x+1)/(x-1)$ but still has a denominator factor at 1, so x=1 is a vertical asymptote, not a hole.

**B — Prompt:** Classify the excluded point in $(x^2-4)/(x-2)$.

**Key:** Reduction is $x+2$ with a hole at $(2,4)$; the reduced denominator is nonzero there.

**Generation checks:** Track multiplicities and original exclusions; calculate hole height only from a finite reduced value.

### Rational-function intercepts and signs

[Curriculum](lesson-2-discontinuities-and-intercepts/lesson.md#concepts) · [Tutor guidance](lesson-2-discontinuities-and-intercepts/tutor.md#rational-function-intercepts-and-signs)

**A — Prompt:** Find intercepts of $(x-1)(x+2)/[(x-1)(x-3)]$.

**Key:** Domain excludes 1 and 3. The only x-intercept is $(-2,0)$; y-intercept is $(0,-2/3)$. The canceled root 1 is excluded.

**B — Prompt:** Determine signs of $(x+1)/(x-2)$.

**Key:** Positive on $(-\infty,-1)$ and $(2,\infty)$; negative on $(-1,2)$; zero at $-1$, undefined at 2.

**Generation checks:** Partition at zeros and all exclusions; a boundary need not change sign when its multiplicity is even.

## Lesson 8.3: End behavior, domain, and range

### Horizontal asymptotes and end behavior

[Curriculum](lesson-3-end-behavior-domain-and-range/lesson.md#concepts) · [Tutor guidance](lesson-3-end-behavior-domain-and-range/tutor.md#horizontal-asymptotes-and-end-behavior)

**A — Prompt:** Find the horizontal asymptote and side of approach of $(2x+1)/(x-3)$.

**Key:** Division gives $2+7/(x-3)$: asymptote y=2, approached above on the right and below on the left.

**B — Prompt:** Can a rational graph cross its horizontal asymptote? Use $x/(x^2+1)$.

**Key:** Yes: its asymptote is y=0 and it equals zero at x=0. End behavior does not prohibit finite intersections.

**Generation checks:** Include degree comparisons and zero functions; do not infer range exclusions solely from an asymptote.

### Domain and range in three notations

[Curriculum](lesson-3-end-behavior-domain-and-range/lesson.md#concepts) · [Tutor guidance](lesson-3-end-behavior-domain-and-range/tutor.md#domain-and-range-in-three-notations)

**A — Prompt:** Find domain and range of $3/(x+2)-4$.

**Key:** Domain excludes $-2$ and range excludes $-4$. Solving for input gives $x=3/(y+4)-2$ for every $y\ne-4$.

**B — Prompt:** Does deleting input 1 from $f(x)=1/(x^2+1)$ remove output $1/2$?

**Key:** No: input $-1$ still supplies $1/2$. The range remains $(0,1]$.

**Generation checks:** Require attainable-output reasoning and consistent interval, set, and inequality notation.

## Lesson 8.4: Rational equations

### Clearing denominators and checking candidates

[Curriculum](lesson-4-rational-equations/lesson.md#concepts) · [Tutor guidance](lesson-4-rational-equations/tutor.md#clearing-denominators-and-checking-candidates)

**A — Prompt:** Solve $1/(x-1)=2/(x-1)$.

**Key:** Exclude 1. Clearing the nonzero denominator gives $1=2$, so there are no solutions.

**B — Prompt:** Solve $(x^2-1)/(x-1)=x+1$.

**Key:** It is an identity on the original domain, so every real x except 1 is a solution.

**Generation checks:** Include identities, contradictions, and extraneous candidates; check in the original equation.

### Multiple solutions and graphical confirmation

[Curriculum](lesson-4-rational-equations/lesson.md#concepts) · [Tutor guidance](lesson-4-rational-equations/tutor.md#multiple-solutions-and-graphical-confirmation)

**A — Prompt:** Solve $x/(x-1)=2/(x-1)+1$.

**Key:** Exclude 1. Clearing gives $x=2+x-1=x+1$, a contradiction, so no solution.

**B — Prompt:** Solve $x=2/x$ and explain graphical confirmation.

**Key:** Exclude zero; $x^2=2$ gives $\pm\sqrt2$, both valid. They are intersection inputs of y=x and y=2/x; a finite plot alone is not a completeness proof.

**Generation checks:** Generate cleared quadratics with zero, one, and two valid roots; reject apparent intersections at poles.

## Lesson 8.5: Rational equations from relationships

### Inverse variation

[Curriculum](lesson-5-rational-equations-from-relationships/lesson.md#concepts) · [Tutor guidance](lesson-5-rational-equations-from-relationships/tutor.md#inverse-variation)

**A — Prompt:** Assume inverse variation and a pair $(x,y)=(3,8)$. Find y at x=6.

**Key:** The constant product is 24, so $y=24/6=4$; doubling x halves y.

**B — Prompt:** Do pairs $(1,6),(2,5),(3,4)$ support inverse variation?

**Key:** No: products 6,10,12 differ. Decreasing outputs alone do not establish inverse variation.

**Generation checks:** State the model assumption, nonzero quantities, and product units; do not infer the model from one pair alone.

### Formulating rational equations and testing reasonableness

[Curriculum](lesson-5-rational-equations-from-relationships/lesson.md#concepts) · [Tutor guidance](lesson-5-rational-equations-from-relationships/tutor.md#formulating-rational-equations-and-testing-reasonableness)

**A — Prompt:** Two constant-rate pumps fill the same tank in 6 and 3 hours separately. Find the joint time.

**Key:** Combined rate $1/6+1/3=1/2$ tank/hour gives 2 hours, less than either individual time.

**B — Prompt:** A job takes one worker 4 hours and two together 3 hours. Find the second worker's solo time, assuming additive constant positive rates.

**Key:** $1/4+1/t=1/3$ gives $1/t=1/12$, so 12 hours; substitution verifies the rate equation.

**Generation checks:** Use compatible units and positive times; reject roots violating the model or rate assumptions.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [The reciprocal parent function](lesson-1-reciprocal-functions-and-transformations/tutor.md#the-reciprocal-parent-function) | Require both branches, excluded input/output zero, asymptotes and odd symmetry with a domain check. A short table supports plotting but does not alone prove the entire range. |
| [Transformations of reciprocal graphs](lesson-1-reciprocal-functions-and-transformations/tutor.md#transformations-of-reciprocal-graphs) | Assess asymptotes, mapped points, branch orientation, domain/range and justified construction. Do not infer a unique scale from asymptotes alone. |
| [Holes and vertical asymptotes](lesson-2-discontinuities-and-intercepts/tutor.md#holes-and-vertical-asymptotes) | Require original exclusions, multiplicity-aware reduction and correct classification/coordinates. An excluded input is not itself enough to decide hole versus vertical asymptote. |
| [Rational-function intercepts and signs](lesson-2-discontinuities-and-intercepts/tutor.md#rational-function-intercepts-and-signs) | Assess allowed intercept coordinates, zero versus undefined values, complete sign intervals and justified boundary behavior. Preserve holes in any reported solution or graph domain. |
| [Horizontal asymptotes and end behavior](lesson-3-end-behavior-domain-and-range/tutor.md#horizontal-asymptotes-and-end-behavior) | Require justified end behavior, correct asymptote type and a finite-crossing check. Do not use asymptotes alone to infer an entire range. |
| [Domain and range in three notations](lesson-3-end-behavior-domain-and-range/tutor.md#domain-and-range-in-three-notations) | Assess original domain, actual attainable range and consistent three-notation descriptions. A finite sample table or a rough plot cannot establish a global output set. |
| [Clearing denominators and checking candidates](lesson-4-rational-equations/tutor.md#clearing-denominators-and-checking-candidates) | Require domain ledger, complete LCD multiplication, classification, all candidate checks and a justified final set. Do not silently discard inconvenient roots without explaining their invalidity. |
| [Multiple solutions and graphical confirmation](lesson-4-rational-equations/tutor.md#multiple-solutions-and-graphical-confirmation) | Assess all candidates, original verification, exact versus approximate reporting and any required tool evidence. A finite plot alone neither proves completeness nor repairs an undefined point. |
| [Inverse variation](lesson-5-rational-equations-from-relationships/tutor.md#inverse-variation) | Require model assumption, constant product and units, nonzero input, verified predictions and an evidence-based acceptance or rejection of proposed data. |
| [Formulating rational equations and testing reasonableness](lesson-5-rational-equations-from-relationships/tutor.md#formulating-rational-equations-and-testing-reasonableness) | Assess variable definitions, compatible units, rational formulation, complete algebraic solution and contextual rejection of invalid roots. These models assume constant rates unless explicitly changed. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Find range of $3/(x+2)-4$: “all reals except $-4$.” | Correct range; attainability remains unelicited if no justification was requested. Ask how all other outputs are reached. |
| Solve $1/(x-1)=2/(x+1)$ by cross products after excluding $\pm1$; verify $x=3$. | Valid equivalent method on the stated domain. Do not require the key's exact LCD layout. |
| Classify $(x^2-4)/(x-2)$: “hole at 2.” | Correct type and input, missing requested coordinate $(2,4)$. Preserve classification; ask for the missing output. |
| After the tutor supplies $1/t=1/4+1/12$, learner finds $t=3$ hours. | Correct assisted rate calculation, not independent formulation. A fresh model must elicit quantities, units and assumptions. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
