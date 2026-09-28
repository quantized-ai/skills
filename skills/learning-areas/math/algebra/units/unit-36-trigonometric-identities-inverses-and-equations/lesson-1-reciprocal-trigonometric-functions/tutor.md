# Tutor: Lesson 36.1: Reciprocal trigonometric functions

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check unit-circle sine/cosine, reciprocal fractions and transformation point mapping; repair natural-domain errors before sketching asymptotes.

## Teaching boundaries

Cover secant/cosecant/cotangent, including transformed graphs; defer inverse reciprocal functions and calculus.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Reciprocal and quotient definitions:** Build reciprocal and quotient definitions from sine/cosine and write each denominator's exclusions first.

- **Reciprocal trigonometric graphs:** Sketch sine or cosine first as a guide, marking zeros and ±1 points.

- **Transformed reciprocal graphs:** Solve the transformed argument equation for each parent landmark and excluded input.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A student rewrites cot x as 1/tan x and removes x=π/2 from cotangent's domain. Ask for both original evaluations.

**Agent key and discussion:** cot(π/2)=cos(π/2)/sin(π/2)=0; tan(π/2) is undefined, so its reciprocal representation is unusable there. Agreement on a common domain is not equality of their natural domains.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Reciprocal and quotient definitions

Curriculum reference: **Reciprocal and quotient definitions** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is sec(π/2) zero because cos(π/2)=0?
- **Diagnostic key:** No: its reciprocal is undefined.
- **Worked-example prompt:** Compare cot x=cos x/sin x with 1/tan x at x=π/2.
- **Worked model and reasoning:** Cotangent is 0 because cosine is 0 (sine is 1, so the quotient is defined); $1/\tan x$ is undefined because tangent is undefined there. They agree only where both expressions are defined. Secant requires nonzero cosine and cosecant nonzero sine.
- **First hint:** What makes a reciprocal expression undefined?

#### Learn

- Build reciprocal and quotient definitions from sine/cosine and write each denominator's exclusions first.
- Evaluate using unit-circle values and compare cot=cos/sin with 1/tan on their common domain.
- Use a defined input where one representation fails to show why algebraically related expressions need not be identical functions.

#### Practice progression

Start with exact values, then undefined axis angles, equivalent forms with unequal domains and a justified natural-domain comparison.

**Further variation and generation checks:** Cover all reciprocal functions, exact values and alternative-expression domains; retain excluded inputs after rewriting.

#### Misconceptions and responsive feedback

If inverse and reciprocal notation are confused, ask whether the desired object is an angle or a numerical reciprocal. If cancellation enlarges the domain, restore the original exclusions before evaluating.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Record every exclusion, determine signs and exact values, and do not discard cotangent values merely because tangent is undefined.

**Task range to sample:** Cover all reciprocal functions, exact values and alternative-expression domains; retain excluded inputs after rewriting.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Reciprocal trigonometric graphs

Curriculum reference: **Reciprocal trigonometric graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can sec x ever equal 1/2 for real x?
- **Diagnostic key:** No: its values have magnitude at least one.
- **Worked-example prompt:** Sketch one period of csc x and identify zeros, range and asymptotes.
- **Worked model and reasoning:** Period $2\pi$, asymptotes $x=k\pi$, no zeros, range $(-\infty,-1]\cup[1,\infty)$. On (0,π), the branch has minimum 1 at π/2; on (π,2π), maximum -1 at 3π/2.
- **First hint:** What happens to the reciprocal when sine approaches zero from each side?

#### Learn

- Sketch sine or cosine first as a guide, marking zeros and ±1 points.
- Reciprocal branches keep signs, pass through reciprocal extrema and diverge near guide zeros.
- For cotangent use cosine/sine to identify its zeros separately.
- Derive each period from the parent and verify ranges and asymptote locations analytically.

#### Practice progression

Build one period from landmarks, extend periodically, contrast all three reciprocal graphs and justify zeros, ranges and one-sided branch signs.

**Further variation and generation checks:** Contrast secant/cosecant/cotangent, their different periods and ranges; require branch signs and extrema with graphs.

#### Misconceptions and responsive feedback

If secant is drawn between −1 and 1, test a cosine value 1/2 and take its reciprocal. If asymptotes are connected as graph segments, require domain gaps.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Place branches on the correct sign intervals, locate cotangent zeros, identify the absence of secant and cosecant zeros, and justify each domain exclusion.

**Task range to sample:** Contrast secant/cosecant/cotangent, their different periods and ranges; require branch signs and extrema with graphs.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Transformed reciprocal graphs

Curriculum reference: **Transformed reciprocal graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For y=sec(2x), is the period 4π?
- **Diagnostic key:** No: an input change π advances the argument by 2π.
- **Worked-example prompt:** Analyze y=2sec(3(x-π/6))-1.
- **Worked model and reasoning:** Period $2\pi/3$; asymptotes solve $3(x-\pi/6)=\pi/2+k\pi$, giving $x=\pi/3+k\pi/3$, equivalently $x=k\pi/3$. Range $(-\infty,-3]\cup[1,\infty)$. Parent point (0,1) maps to (π/6,1).
- **First hint:** Which parent-function feature creates a secant asymptote?

#### Learn

- Solve the transformed argument equation for each parent landmark and excluded input.
- Apply output scaling/shift separately to branch extrema and range.
- Use negative scales to discuss reflection and order; verify one finite point and both neighboring asymptotes by substitution.
- Treat secant/cosecant as unbounded: outside magnitude is a scale, not an amplitude bound.

#### Practice progression

Begin with one scale or shift, combine input/output changes, then recover a transformed range and graph a full period with verified branch orientation.

**Further variation and generation checks:** Include negative scales and shifted reciprocal graphs; map domains and vertices instead of reading an amplitude for unbounded secant.

#### Misconceptions and responsive feedback

If horizontal scaling is applied directly, solve 2x=u for the new coordinate. If an asymptote value is treated as a point, evaluate the original denominator there.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Transform asymptotes, periods, ranges, intercepts, and representative branch points consistently, retaining exclusions under horizontal reflection.

**Task range to sample:** Include negative scales and shifted reciprocal graphs; map domains and vertices instead of reading an amplitude for unbounded secant.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## From denominator signs to a graph

For $y=-2\csc(2x)+1$, first solve $\sin(2x)=0$: exclusions are $x=k\pi/2$. Between 0 and $\pi/2$, sine is positive, so the negative scale puts the cosecant branch below its vertex $(\pi/4,-1)$; approaching either excluded endpoint sends it downward without bound. The other branches reach upward from 3. Thus the range is $(-\infty,-1]\cup[3,\infty)$ and the period is $\pi$. Explain the sign before drawing: multiplying a range by a negative number reverses its inequalities.

If a learner draws that first branch above 3, ask for their value at $x=\pi/4$ before diagnosing. Hint only the unresolved stage: “Which sign does sine have here?” → “Map the parent point $(\pi/2,1)$ using $u=2x$, $y=-2v+1$” → “Its new coordinates are $(\pi/4,-1)$; determine the neighboring branch directions.” If asymptotes are already right, keep that evidence. Fade by supplying only the exclusions for $2\sec(2x)-1$ and requesting vertices, signs, and a sketch; later remove those supplied exclusions.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
