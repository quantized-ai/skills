# Tutor: Lesson 36.6: Trigonometric equations and models

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check principal values, factoring and trig domains; route missing inverse branches back to lesson 2 and algebraic identity errors to lessons 3–5.

Within this unit, revisit [the previous lesson](../lesson-5-proving-trigonometric-identities/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Find all solutions only on declared intervals or periodic families; defer numerical uniqueness inferred solely from a plot.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Basic periodic solution families:** Determine whether the target lies in the function range.

- **Algebraic and identity-based equation methods:** Move to a zero equation and factor before dividing.

- **Equations from periodic models:** Extract midline, scale, angular rate, phase and time units before setting a target equation.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Solve sin(2x)=0 on [0,2π]. A proposed answer is {0,π,2π}. Find the missing values and the source of the omission.

**Agent key and discussion:** 2x=kπ gives x=kπ/2; the complete set is {0,π/2,π,3π/2,2π}. The proposed set forgot that the argument advances twice as fast and the x-period is halved.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Basic periodic solution families

Curriculum reference: **Basic periodic solution families** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** How many solutions has sin x=1 on [0,2π)?
- **Diagnostic key:** One, π/2; the usual two sine branches coincide there.
- **Worked-example prompt:** Solve sin(2x)=1/2 on [0,2π).
- **Worked model and reasoning:** $2x=\pi/6+2k\pi$ or $5\pi/6+2k\pi$, so $x=\pi/12+k\pi$ or $5\pi/12+k\pi$. In the interval: $\pi/12,5\pi/12,13\pi/12,17\pi/12$.
- **First hint:** Does the inverse value name every angle with the required trigonometric value?

#### Learn

- Determine whether the target lies in the function range.
- Find principal reference angles, write complete periodic families and solve the affine argument equations for x.
- Restrict integer parameters using the actual x interval, include allowed endpoints and merge duplicate branches.
- Verify several representatives in the original equation.

#### Practice progression

Solve base equations, then affine arguments and restricted intervals, including extrema, impossible targets, tangent exclusions and open/closed endpoints.

**Further variation and generation checks:** Include sine/cosine/tangent, affine arguments, no-solution targets and extrema where branches coincide; enumerate endpoints exactly.

#### Misconceptions and responsive feedback

If only one inverse value is given, draw the other unit-circle intersection. If the period is not rescaled after an affine argument, compare adjacent candidate solutions by substitution.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check allowable target values, scale and shift the angle families correctly, include permitted interval endpoints, and remove duplicated solutions at extrema.

**Task range to sample:** Include sine/cosine/tangent, affine arguments, no-solution targets and extrema where branches coincide; enumerate endpoints exactly.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Algebraic and identity-based equation methods

Curriculum reference: **Algebraic and identity-based equation methods** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** In sin x cos x=sin x, may we cancel sin x immediately?
- **Diagnostic key:** No: its zeros are a complete solution branch.
- **Worked-example prompt:** Solve 2sin²x=sin x on [0,2π).
- **Worked model and reasoning:** Factor $\sin x(2\sin x-1)=0$; solutions $0,\pi,\pi/6,5\pi/6$. Dividing by sin x would lose 0 and π.
- **First hint:** Could the factor you want to divide by be zero at a solution?

#### Learn

- Move to a zero equation and factor before dividing.
- Preserve every factor-zero branch, solve each with periodic families and combine without duplication.
- For squaring or a substituted trigonometric variable, check the variable's allowable range and test candidates in the original.
- Recognize identities and contradictions on their original domains.

#### Practice progression

Progress from factored equations to quadratic substitutions, identity-based rewrites and reciprocal equations; include all-domain/no-solution cases and explicit lost/extraneous checks.

**Further variation and generation checks:** Include factoring, substitutions, squared extraneous roots, reciprocal exclusions and identity/inconsistent cases; substitute into originals.

#### Misconceptions and responsive feedback

If an extraneous root survives, ask which nonreversible operation introduced it. If a lost root is suspected, substitute zeros of the canceled factor before doing more algebra.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Retain zero-factor branches before division, verify squared candidates in the original equation, enforce original domains, and present every surviving periodic family or interval solution.

**Task range to sample:** Include factoring, substitutions, squared extraneous roots, reciprocal exclusions and identity/inconsistent cases; substitute into originals.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Equations from periodic models

Curriculum reference: **Equations from periodic models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A model h(t)=5+2sin t is asked to reach height 8. Should inverse sine be used immediately?
- **Diagnostic key:** No: its modeled range is [3,7], so the target is impossible.
- **Worked-example prompt:** A model is h(t)=7+3cos(πt/4), in meters, for 0≤t≤12 seconds. When is h=7?
- **Worked model and reasoning:** $\cos(\pi t/4)=0$ gives $t=2+4k$; admissible times are 2,6,10 s. All lie within the model interval and substitution gives height 7.
- **First hint:** Is the requested height in the model's possible range?

#### Learn

- Extract midline, scale, angular rate, phase and time units before setting a target equation.
- Predict number and timing of crossings from the cycle, then solve all families and intersect with the allowed observation interval.
- For numerical events bracket or verify roots with actual tools and explain precision relative to input measurements.

#### Practice progression

Use exact midline/extreme events, non-exact targets and longer observation intervals, then boundary and unreachable targets with justified numerical verification.

**Further variation and generation checks:** Vary target within/outside range and measured parameters; use technology for numerical roots, retain all events and label approximations.

#### Misconceptions and responsive feedback

If only the first occurrence is reported, shift by the period and test whether more fit the time window. If radians and hours are mixed, state the argument's dimensionless conversion explicitly.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Formulate the target equation with units, find every solution within the modeled interval, verify numerical candidates, and explain rounding, repeated events, and physical restrictions.

**Task range to sample:** Vary target within/outside range and measured parameters; use technology for numerical roots, retain all events and label approximations.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Solve first, then count the admissible events

For $\sin(2x-\pi/6)=1/2$ on $[0,\pi]$, set the full argument equal to $\pi/6+2k\pi$ or $5\pi/6+2k\pi$. Solving gives $x=\pi/6+k\pi$ or $\pi/2+k\pi$, so only $\pi/6$ and $\pi/2$ remain. The shift is applied before division by 2, and the period becomes $\pi$ in the original variable.

If only the first branch is shown, cue “Which other unit-circle angle has this sine?” → supply the two argument families → solve one family and leave the other plus interval filtering. If both families are correct but a boundary is mishandled, ask for the integer bounds instead of reteaching inverse sine. Fade by supplying only the two full-argument families for a new affine argument; later remove that support. Contrast $\sin x=\cos x$ on $[0,2\pi)$: squaring gives four candidates, but direct substitution retains only $\pi/4,5\pi/4$. A numerical plot may help locate model crossings, but completeness comes from the family/window argument; record actual numerical-tool output when that component is requested.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
