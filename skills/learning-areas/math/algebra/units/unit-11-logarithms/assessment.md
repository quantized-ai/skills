# Unit 11 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 11.1: Definition and basic evaluation

### Logarithms as exponents

[Curriculum](lesson-1-definition-and-basic-evaluation/lesson.md#concepts) · [Tutor guidance](lesson-1-definition-and-basic-evaluation/tutor.md#logarithms-as-exponents)

**A — Prompt:** Evaluate $\log_3(1/9)$ by rewriting it exponentially.

**Key:** $3^{-2}=1/9$, so the value is -2; logarithm outputs may be negative.

**B — Prompt:** Find the real domain of $\log_2(x-4)$.

**Key:** Require $x-4>0$, so x>4. The argument is strictly positive, not nonnegative.

**Generation checks:** Check positive argument and valid base; distinguish logarithm output signs from argument restrictions.

### Base 2, common logarithms, and natural logarithms

[Curriculum](lesson-1-definition-and-basic-evaluation/lesson.md#concepts) · [Tutor guidance](lesson-1-definition-and-basic-evaluation/tutor.md#base-2-common-logarithms-and-natural-logarithms)

**A — Prompt:** Evaluate $\log(1000)$ and $\ln(e^{-3})$.

**Key:** Under the course notation, common log is base 10 and natural log base e; values are 3 and -3.

**B — Prompt:** Between which integers lies $\log_2 6$?

**Key:** Between 2 and 3 because $2^2<6<2^3$ and the base-2 exponential increases.

**Generation checks:** Include arguments between zero and one, exact powers, and estimates bounded by nearby powers.

## Lesson 11.2: Logarithmic graphs

### Parent logarithms and reflection

[Curriculum](lesson-2-logarithmic-graphs/lesson.md#concepts) · [Tutor guidance](lesson-2-logarithmic-graphs/tutor.md#parent-logarithms-and-reflection)

**A — Prompt:** Reflect $(2,9)$ on $y=3^x$ to the inverse graph.

**Key:** The reflected point is $(9,2)$ on $y=\log_3x$. Domain and range exchange.

**B — Prompt:** Describe the direction and vertical asymptote of $\log_{1/2}x$.

**Key:** It decreases on x>0 and has vertical asymptote x=0; outputs grow toward positive infinity as x approaches zero from the right.

**Generation checks:** Keep the asymptote vertical and the domain strictly positive; include reciprocal bases.

### Transformations of logarithmic graphs

[Curriculum](lesson-2-logarithmic-graphs/lesson.md#concepts) · [Tutor guidance](lesson-2-logarithmic-graphs/tutor.md#transformations-of-logarithmic-graphs)

**A — Prompt:** Find domain, asymptote, and an exact point of $\log_2(3-x)+1$.

**Key:** Domain x<3, asymptote x=3; x=2 gives y=1. The inside reflection changes the permitted side.

**B — Prompt:** Find domain and x-intercept of $-2\log_3(x+1)+4$.

**Key:** Domain x>-1; setting output zero gives log=2, hence x+1=9 and x=8.

**Generation checks:** Include inside reflections and outside sign changes; verify intercepts in the original domain.

## Lesson 11.3: Logarithm properties with domains

### Product and quotient properties

[Curriculum](lesson-3-logarithm-properties-with-domains/lesson.md#concepts) · [Tutor guidance](lesson-3-logarithm-properties-with-domains/tutor.md#product-and-quotient-properties)

**A — Prompt:** Expand $\ln(xy)$ for x>0,y>0.

**Key:** $\ln x+\ln y$ on the stated positive-factor domain.

**B — Prompt:** Why is that expansion not valid at x=-2,y=-3 although $\ln(xy)$ exists?

**Key:** The product is 6, but the separate real logs of -2 and -3 are undefined. A positive product does not ensure positive factors.

**Generation checks:** Compare original and expanded domains and retain restrictions when condensing.

### Power properties and absolute values

[Curriculum](lesson-3-logarithm-properties-with-domains/lesson.md#concepts) · [Tutor guidance](lesson-3-logarithm-properties-with-domains/tutor.md#power-properties-and-absolute-values)

**A — Prompt:** Expand $\ln(x^2)$ on its full real domain.

**Key:** $2\ln\lvert x\rvert$ for x≠0; absolute value preserves the negative-x branch.

**B — Prompt:** Is $\ln(x+1)=\ln x+\ln1$ for x>0?

**Key:** No: at x=1 the left side is $\ln2$ while the right side is 0. No sum-to-sum logarithm identity applies.

**Generation checks:** Include even powers and negative inputs; do not split logarithms of sums.

## Lesson 11.4: Change of base and inverse identities

### Change-of-base formula

[Curriculum](lesson-4-change-of-base-and-inverse-identities/lesson.md#concepts) · [Tutor guidance](lesson-4-change-of-base-and-inverse-identities/tutor.md#change-of-base-formula)

**A — Prompt:** Express $\log_5 7$ using natural logarithms and bound it.

**Key:** $\ln7/\ln5$; it lies between 1 and 2 because 5<7<25.

**B — Prompt:** Explain why $\ln5/\ln7$ gives a different logarithm.

**Key:** It is $\log_7 5$, the reciprocal value; numerator comes from the argument, denominator from the base.

**Generation checks:** Use both common and natural logs for a check and retain exact quotients until rounding.

### Inverse identities and their domains

[Curriculum](lesson-4-change-of-base-and-inverse-identities/lesson.md#concepts) · [Tutor guidance](lesson-4-change-of-base-and-inverse-identities/tutor.md#inverse-identities-and-their-domains)

**A — Prompt:** Simplify $\log_2(2^{x-3})$.

**Key:** It is x-3 for every real x because the exponential argument is always positive.

**B — Prompt:** Simplify $2^{\log_2(x-3)}$ and state its domain.

**Key:** It is x-3 only for x>3. The simplified expression must retain the original positive-argument restriction.

**Generation checks:** Include mismatched bases and preserved exclusions; cancellation does not enlarge a function domain.

## Lesson 11.5: Exponential and logarithmic equations

### Solving exponential equations with logarithms

[Curriculum](lesson-5-exponential-and-logarithmic-equations/lesson.md#concepts) · [Tutor guidance](lesson-5-exponential-and-logarithmic-equations/tutor.md#solving-exponential-equations-with-logarithms)

**A — Prompt:** Solve $3\cdot2^{2t-1}=15$ exactly.

**Key:** Isolate $2^{2t-1}=5$, so $t=(1+\ln5/\ln2)/2$. Substitution makes the exponential 5.

**B — Prompt:** Does $-2\cdot3^t=4$ have a real solution?

**Key:** No: the isolated target is -2, impossible for a positive-base exponential.

**Generation checks:** Check target sign, full exponent, and constant parameter exceptions before division.

### Solving logarithmic equations and rejecting invalid roots

[Curriculum](lesson-5-exponential-and-logarithmic-equations/lesson.md#concepts) · [Tutor guidance](lesson-5-exponential-and-logarithmic-equations/tutor.md#solving-logarithmic-equations-and-rejecting-invalid-roots)

**A — Prompt:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

**Key:** Domain x>1; condensation gives $x^2-1=8$, candidates ±3, only x=3 valid.

**B — Prompt:** Solve $\log_2(x-4)=0$.

**Key:** Require x>4; exponentiation gives x-4=1, so x=5, not x=4.

**Generation checks:** Include multiple logs and invalid negative-factor branches hidden by a positive condensed product.

## Lesson 11.6: Duration and reasonableness

### Doubling time and half-life

[Curriculum](lesson-6-duration-and-reasonableness/lesson.md#concepts) · [Tutor guidance](lesson-6-duration-and-reasonableness/tutor.md#doubling-time-and-half-life)

**A — Prompt:** Find doubling time for $A(t)=A_0e^{0.3t}$, where $A_0>0$ and t is in years.

**Key:** $e^{0.3T}=2$ gives $T=\ln2/0.3$ years, independent of positive $A_0$.

**B — Prompt:** Find half-life for $A_0e^{-0.2t}$, where $A_0>0$.

**Key:** $H=\ln(1/2)/(-0.2)=\ln2/0.2$, a positive duration in the model's time unit.

**Generation checks:** Distinguish growth, decay, and constant models; preserve sign and units of duration.

### Formulating and validating logarithmic solutions

[Curriculum](lesson-6-duration-and-reasonableness/lesson.md#concepts) · [Tutor guidance](lesson-6-duration-and-reasonableness/tutor.md#formulating-and-validating-logarithmic-solutions)

**A — Prompt:** For $A(n)=100\cdot2^n$ observed at integer n≥0, find the first n with $A(n)>800$.

**Key:** Equality occurs at n=3, but strictness requires n=4; neighboring checks give 800 then 1600.

**B — Prompt:** In the same model, what is the first n with $A(n)\ge600$?

**Key:** n=3, because A(2)=400 and A(3)=800. The continuous crossing $\log_2 6$ is not the observation time.

**Generation checks:** Validate reachability and adjacent observations rather than ordinary rounding of a logarithmic crossing.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Logarithms as exponents](lesson-1-definition-and-basic-evaluation/tutor.md#logarithms-as-exponents) | Require correct three-way roles, valid-base conditions, full positive-argument domain and acceptance of valid negative/zero outputs. |
| [Base 2, common logarithms, and natural logarithms](lesson-1-definition-and-basic-evaluation/tutor.md#base-2-common-logarithms-and-natural-logarithms) | Assess notation, inverse evaluation, exact versus approximate reporting and an exponential-value reasonableness check. Do not infer a base from an unlabeled software function without confirming its convention. |
| [Parent logarithms and reflection](lesson-2-logarithmic-graphs/tutor.md#parent-logarithms-and-reflection) | Require domain-range exchange, correct reflection, asymptote, intercepts, monotonicity and both end directions. A logarithmic output can be any real number. |
| [Transformations of logarithmic graphs](lesson-2-logarithmic-graphs/tutor.md#transformations-of-logarithmic-graphs) | Assess exact domain, point mapping, full range for nondegenerate transforms, asymptote side/direction and all existing intercepts. Handle zero scales separately without repairing undefined arguments. |
| [Product and quotient properties](lesson-3-logarithm-properties-with-domains/tutor.md#product-and-quotient-properties) | Require exponent-based justification, correct signs in quotient rules, each original positive argument and explicit preservation of domain in any equivalence claim. |
| [Power properties and absolute values](lesson-3-logarithm-properties-with-domains/tutor.md#power-properties-and-absolute-values) | Assess the positive-base argument hypothesis, correct coefficient extraction, absolute values where needed and domain comparison. A valid restricted identity must state its restriction. |
| [Change-of-base formula](lesson-4-change-of-base-and-inverse-identities/tutor.md#change-of-base-formula) | Require derivation, all base/argument conditions, justified division, consistent auxiliary base and reasonable final rounding. |
| [Inverse identities and their domains](lesson-4-change-of-base-and-inverse-identities/tutor.md#inverse-identities-and-their-domains) | Assess base matching, admissible intermediate values, each identity's complete input set and equality only on that set. |
| [Solving exponential equations with logarithms](lesson-5-exponential-and-logarithmic-equations/tutor.md#solving-exponential-equations-with-logarithms) | Require isolation, positivity, all scales/shifts, degeneracy classification, exact solution and original/context verification. Rounding is not a substitute for checking reachability. |
| [Solving logarithmic equations and rejecting invalid roots](lesson-5-exponential-and-logarithmic-equations/tutor.md#solving-logarithmic-equations-and-rejecting-invalid-roots) | Assess original-domain intersection, justified conversion, every candidate check and correct model units/meaning. Condensation must not admit inputs excluded by the original equation. |
| [Doubling time and half-life](lesson-6-duration-and-reasonableness/tutor.md#doubling-time-and-half-life) | Require positive initial amount, appropriate rate direction, exact duration, units and independence from initial size. Distinguish algebraic negative time from a permitted future duration. |
| [Formulating and validating logarithmic solutions](lesson-6-duration-and-reasonableness/tutor.md#formulating-and-validating-logarithmic-solutions) | Assess formulation, reachability, continuous solution, schedule-aware conversion and adjacent checks. State time units and avoid claiming a first observation without a defined starting index. |
