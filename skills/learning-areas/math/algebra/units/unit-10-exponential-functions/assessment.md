# Unit 10 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 10.1: Exponential structure

### Exponential functions versus power functions

[Curriculum](lesson-1-exponential-structure/lesson.md#concepts) · [Tutor guidance](lesson-1-exponential-structure/tutor.md#exponential-functions-versus-power-functions)

**A — Prompt:** Distinguish $3\cdot2^x$ from $3x^2$.

**Key:** The first has a variable exponent and fixed positive base; the second is a power function with fixed exponent.

**B — Prompt:** Why is $(-2)^x$ not a real exponential function on all real inputs?

**Key:** Negative bases fail to give real values at many noninteger inputs, such as x=1/2.

**Generation checks:** Include base 1 and zero coefficient as constant exceptions to the nonconstant family.

### Equal-interval ratios

[Curriculum](lesson-1-exponential-structure/lesson.md#concepts) · [Tutor guidance](lesson-1-exponential-structure/tutor.md#equal-interval-ratios)

**A — Prompt:** Outputs at x=0,2,4 are 5,20,80. Assuming an exponential model, find its per-unit factor.

**Key:** The two-step ratio is 4, so the positive per-unit factor is 2; model $5\cdot2^x$.

**B — Prompt:** Do outputs 3,6,12 at x=0,1,3 have a constant exponential factor per unit?

**Key:** No: the first one-step ratio gives base 2, but the two-step ratio of 2 gives base $\sqrt2$.

**Generation checks:** Include unequal spacings and finite-data nonuniqueness; divide by nonzero starting values.

## Lesson 10.2: Growth, decay, and construction

### Percent rates and parameters

[Curriculum](lesson-2-growth-decay-and-construction/lesson.md#concepts) · [Tutor guidance](lesson-2-growth-decay-and-construction/tutor.md#percent-rates-and-parameters)

**A — Prompt:** Write a model for 200 units decreasing by 15% each year.

**Key:** $A(t)=200(0.85)^t$; each step retains 85% of the current amount.

**B — Prompt:** Does 10% growth followed by 10% decay restore the starting amount?

**Key:** No: $1.1\cdot0.9=0.99$, leaving 99% of the initial amount.

**Generation checks:** Separate percent from decimal rate and factor; state time units and constant-rate assumptions.

### Constructing a model from points and recursion

[Curriculum](lesson-2-growth-decay-and-construction/lesson.md#concepts) · [Tutor guidance](lesson-2-growth-decay-and-construction/tutor.md#constructing-a-model-from-points-and-recursion)

**A — Prompt:** Assume an exponential model through $(1,6),(3,24)$. Find a and b in $ab^x$.

**Key:** $b^2=24/6=4$ with b>0 gives b=2; $a=6/2=3$.

**B — Prompt:** Express $f(x)=5(1.2)^x$ recursively at nonnegative integer inputs.

**Key:** $u_0=5$ and $u_{n+1}=1.2u_n$ for n≥0; the indexing origin fixes the initial value.

**Generation checks:** Require positive outputs for this construction; equal outputs yield the constant case.

## Lesson 10.3: Exponential graphs

### Parent graphs for bases 2, 10, and e

[Curriculum](lesson-3-exponential-graphs/lesson.md#concepts) · [Tutor guidance](lesson-3-exponential-graphs/tutor.md#parent-graphs-for-bases-2-10-and-e)

**A — Prompt:** Give domain, range, intercept, and horizontal asymptote of $2^x$.

**Key:** Domain all real, range positive reals, y-intercept $(0,1)$, no x-intercept, horizontal asymptote y=0.

**B — Prompt:** How do the tails of $(1/2)^x$ differ from those of $2^x$?

**Key:** It equals $2^{-x}$: it approaches zero to the right and increases without bound to the left.

**Generation checks:** Include bases 2,10,e and reciprocals; distinguish approaching zero from attaining it.

### Transformed exponential graphs

[Curriculum](lesson-3-exponential-graphs/lesson.md#concepts) · [Tutor guidance](lesson-3-exponential-graphs/tutor.md#transformed-exponential-graphs)

**A — Prompt:** Describe $g(x)=-3\cdot2^{x-1}+4$.

**Key:** Domain all real; asymptote y=4; range $(-\infty,4)$; y-intercept $5/2$; decreasing because the outside coefficient is negative.

**B — Prompt:** Find an exact x-intercept of $2^{x-2}-8$.

**Key:** $2^{x-2}=2^3$ gives x=5. The horizontal asymptote is y=-8.

**Generation checks:** Check whether an x-intercept is possible before solving and preserve open range endpoints.

## Lesson 10.4: Time units and the base e

### Equivalent forms and time scales

[Curriculum](lesson-4-time-units-and-the-base-e/lesson.md#concepts) · [Tutor guidance](lesson-4-time-units-and-the-base-e/tutor.md#equivalent-forms-and-time-scales)

**A — Prompt:** A quantity triples every 2 hours from 7 units. Write its real-time model.

**Key:** $A(t)=7\cdot3^{t/2}$ for t in hours; the hourly factor is $\sqrt3$, not 3/2.

**B — Prompt:** Express the same model using time m in minutes.

**Key:** $A(m)=7\cdot3^{m/120}$; after 120 minutes it equals 21, matching two hours.

**Generation checks:** Convert both time and interval units; include doubling and half-life factors.

### The constant e and continuous-rate notation

[Curriculum](lesson-4-time-units-and-the-base-e/lesson.md#concepts) · [Tutor guidance](lesson-4-time-units-and-the-base-e/tutor.md#the-constant-e-and-continuous-rate-notation)

**A — Prompt:** For $A(t)=100e^{0.2t}$, is the effective one-unit increase exactly 20%?

**Key:** No: the factor is $e^{0.2}$ and the increase is $100(e^{0.2}-1)\%$, about 22.14%.

**B — Prompt:** What is the factor over three units of time for $A_0e^{-0.1t}$?

**Key:** $e^{-0.3}$, giving decay. The exponent parameter has reciprocal-time units.

**Generation checks:** Distinguish nominal parameter k from effective percentage; retain exact expressions before rounding.

## Lesson 10.5: Exponential equations

### Common-base equations

[Curriculum](lesson-5-exponential-equations/lesson.md#concepts) · [Tutor guidance](lesson-5-exponential-equations/tutor.md#common-base-equations)

**A — Prompt:** Solve $4^{x-1}=8$ using a common base.

**Key:** $2^{2x-2}=2^3$ implies $2x-2=3$, so x=5/2.

**B — Prompt:** What follows from $1^u=1^v$, and can $3^x=-2$ hold over the reals?

**Key:** The base-1 equation gives no equality constraint on exponents; the second has no real solution because $3^x>0$.

**Generation checks:** Include impossible targets and degenerate bases; substitute the candidate into the original equation.

### Graphical and numerical solutions

[Curriculum](lesson-5-exponential-equations/lesson.md#concepts) · [Tutor guidance](lesson-5-exponential-equations/tutor.md#graphical-and-numerical-solutions)

**A — Prompt:** Bracket the solution of $2^x=3$ and justify uniqueness.

**Key:** At 1 the output is 2 and at 2 it is 4; continuity gives a solution in (1,2), and strict increase makes it unique.

**B — Prompt:** Does a root bracket [1.54,1.56] justify rounding to 1.5 to one decimal place?

**Key:** No: it straddles the 1.55 rounding boundary. Refine the bracket before reporting one decimal place.

**Generation checks:** Require evaluated brackets and error-based precision; two increasing functions need not have one intersection.

## Lesson 10.6: Rates of change and comparisons

### Average rates of change for exponentials

[Curriculum](lesson-6-rates-of-change-and-comparisons/lesson.md#concepts) · [Tutor guidance](lesson-6-rates-of-change-and-comparisons/tutor.md#average-rates-of-change-for-exponentials)

**A — Prompt:** Compute average rates for $f(x)=2^x$ on [0,1] and [1,2].

**Key:** Rates are $(2-1)/1=1$ and $(4-2)/1=2$; ratios are both 2.

**B — Prompt:** For $f(t)=80(1/2)^t$, compare changes on [0,1] and [1,2].

**Key:** Changes are -40 and -20; proportional decay is constant, but additive decreases have smaller magnitude later.

**Generation checks:** Include units, nonunit intervals, growth and decay; do not label constant ratios as constant slope.

### Comparing exponential and polynomial growth

[Curriculum](lesson-6-rates-of-change-and-comparisons/lesson.md#concepts) · [Tutor guidance](lesson-6-rates-of-change-and-comparisons/tutor.md#comparing-exponential-and-polynomial-growth)

**A — Prompt:** Compare $2^x$ and $x^3$ at x=3 and x=10.

**Key:** At 3, 8<27; at 10, 1024>1000. Their relative order changes.

**B — Prompt:** Does that finite comparison alone prove $2^x>x^3$ for every real x>10?

**Key:** No. Finite observations cannot establish all later values; the curriculum's eventual-dominance result is a separate general statement.

**Generation checks:** Use different viewing windows and avoid turning a finite table into a proof of eventual dominance.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Exponential functions versus power functions](lesson-1-exponential-structure/tutor.md#exponential-functions-versus-power-functions) | Require variable-position reasoning, coefficient/base conditions, correct full evaluation and justified constant/negative-base exceptions. |
| [Equal-interval ratios](lesson-1-exponential-structure/tutor.md#equal-interval-ratios) | Assess spacing, nonzero outputs, interval-specific ratios, positive per-unit factor and limits of finite evidence. Constant differences are not the exponential invariant. |
| [Percent rates and parameters](lesson-2-growth-decay-and-construction/tutor.md#percent-rates-and-parameters) | Require initial amount, decimal rate, retained factor, period and repeated multiplicative interpretation. Contextual percent conventions and valid base conditions must agree. |
| [Constructing a model from points and recursion](lesson-2-growth-decay-and-construction/tutor.md#constructing-a-model-from-points-and-recursion) | Assess positive-base recovery, coefficient, both point checks, complete recursion and handling of equal-output degeneracy. Do not infer a unique family without the model assumption. |
| [Parent graphs for bases 2, 10, and e](lesson-3-exponential-graphs/tutor.md#parent-graphs-for-bases-2-10-and-e) | Require consistent points, domain/range, intercept, asymptote, monotonicity and both end directions. A finite plotted window cannot turn near-zero values into actual zeros. |
| [Transformed exponential graphs](lesson-3-exponential-graphs/tutor.md#transformed-exponential-graphs) | Assess mapping, domain/range, asymptote side, existing intercepts and end behavior. Do not merely list parameters without explaining their graph consequences. |
| [Equivalent forms and time scales](lesson-4-time-units-and-the-base-e/tutor.md#equivalent-forms-and-time-scales) | Require interval identification, consistent unit conversion, equivalent checks and distinction between per-period and per-unit change. A sequence interpretation needs an integer domain if real-time interpolation is not assumed. |
| [The constant e and continuous-rate notation](lesson-4-time-units-and-the-base-e/tutor.md#the-constant-e-and-continuous-rate-notation) | Assess initial value, sign, units, period factor and effective-percent distinction. Do not imply a physical instantaneous-rate derivation is demonstrated without the needed calculus context. |
| [Common-base equations](lesson-5-exponential-equations/tutor.md#common-base-equations) | Require base conditions, isolation, justified exponent equality, original verification and accurate all/none classification of degeneracies. |
| [Graphical and numerical solutions](lesson-5-exponential-equations/tutor.md#graphical-and-numerical-solutions) | Assess original-side representation, evaluated continuous bracket, justified precision, approximate notation and valid uniqueness reasoning. Record required actual technology evidence separately. |
| [Average rates of change for exponentials](lesson-6-rates-of-change-and-comparisons/tutor.md#average-rates-of-change-for-exponentials) | Require correct difference quotient, signs, units and an explanation distinguishing multiplicative consistency from constant additive rate. |
| [Comparing exponential and polynomial growth](lesson-6-rates-of-change-and-comparisons/tutor.md#comparing-exponential-and-polynomial-growth) | Assess accurate common-input comparisons, appropriate scale changes, qualified eventual behavior and the evidence/theorem distinction. Do not grade an unsupported global claim as justified because its answer happens to be true. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Construct the assumed exponential through $(1,6),(3,24)$: “$3\cdot2^x$.” | Correct formula; requested ratio reasoning and both-point checks remain incomplete if omitted. |
| Solve $4^{x-1}=8$ by common bases and verify $x=5/2$. | Valid exact route; logarithms are not necessary. If graphical/numerical solution is itself requested, it remains separate evidence. |
| For $80(1/2)^t$, give ratio $1/2$ as the average rate on $[0,1]$. | Correct multiplicative factor, wrong requested quantity. Preserve factor recognition and target output change per time. |
| After the tutor supplies $b^2=4$, learner selects $b=2$ and finds $a$. | Assisted construction setup, with useful positive-base and coefficient evidence; obtain fresh independent ratio setup. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
