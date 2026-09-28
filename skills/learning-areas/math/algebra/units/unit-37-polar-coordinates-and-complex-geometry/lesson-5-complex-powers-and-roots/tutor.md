# Tutor: Lesson 37.5: Complex powers and roots

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check polar multiplication/division and integer exponent rules; distinguish a complex root set from a chosen principal root.

Within this unit, revisit [the previous lesson](../lesson-4-polar-complex-multiplication-and-division/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Integer powers and positive-integer root orders; do not introduce a value for 0⁰ or arbitrary complex powers.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **De Moivre powers:** Derive positive powers by repeated polar multiplication, making the modulus exponent and angle multiplier explicit.

- **Complete sets of complex roots:** Write the complete argument family θ+2kπ before dividing by n.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A solution of w³=1 lists only w=1. Generate the missing roots and explain why k=3 supplies no fourth distinct root.

**Agent key and discussion:** Roots are cis0,cis(2π/3),cis(4π/3); k=3 gives cis2π=1 again. All cube to one, and arguments differ by 2π/3 until the cycle repeats.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### De Moivre powers

Curriculum reference: **De Moivre powers** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does (2cisθ)³ have modulus 6?
- **Diagnostic key:** No; modulus is 2³=8.
- **Worked-example prompt:** Compute (1+i)^6 and (1+i)^(-2) using polar form.
- **Worked model and reasoning:** $1+i=\sqrt2\operatorname{cis}(\pi/4)$; sixth power $8\operatorname{cis}(3\pi/2)=-8i$, inverse square $\tfrac12\operatorname{cis}(-\pi/2)=-i/2$. Repeated multiplication proves positive powers; inverse multiplication gives negative ones for nonzero inputs.
- **First hint:** What repeats geometrically when the same complex multiplier acts several times?

#### Learn

- Derive positive powers by repeated polar multiplication, making the modulus exponent and angle multiplier explicit.
- Establish the zero exponent only for nonzero bases and use reciprocals for negative powers.
- Reduce arguments after multiplying rather than dropping full-turn information prematurely.
- Convert exact-angle results back to rectangular form and verify a low power algebraically.

#### Practice progression

Start with positive powers, then zero/negative powers and axis values, finally derive the rule and check equivalence of different initial arguments.

**Further variation and generation checks:** Include positive, zero and negative integer powers; exclude zero for zero or negative powers; 0^0 is not assigned a value in this curriculum.

#### Misconceptions and responsive feedback

If angle also receives an exponent, compare two repeated multiplications. If zero is raised to a nonpositive power, use the curriculum convention: it is not defined here.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Raise the modulus and multiply the angle, apply nonzero restrictions for zero or negative exponents, and convert back to rectangular form when exact trigonometric values permit.

**Task range to sample:** Include positive, zero and negative integer powers; exclude zero for zero or negative powers; 0^0 is not assigned a value in this curriculum.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Complete sets of complex roots

Curriculum reference: **Complete sets of complex roots** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** How many distinct cube roots does a nonzero complex number have?
- **Diagnostic key:** Three, spaced by 2π/3 in argument.
- **Worked-example prompt:** Find and verify every fourth root of -16.
- **Worked model and reasoning:** Roots are $2\operatorname{cis}(\pi/4+k\pi/2)$ for k=0,1,2,3, equivalently $\pm\sqrt2\pm i\sqrt2$. Each fourth power is -16; roots are equally spaced and distinct. Zero has one distinct nth root, zero, with multiplicity n in z^n.
- **First hint:** Can different root angles yield the same point after raising each candidate to the fourth power?

#### Learn

- Write the complete argument family θ+2kπ before dividing by n.
- Take the positive nth root of the modulus and use k=0,…,n−1.
- Show later integers repeat the same points and different listed k give distinct arguments modulo 2π.
- Verify every nth power and explain zero's one distinct root with multiplicity n.

#### Practice progression

Find roots of unity, then general targets and exact rectangular roots, plot spacing and prove completeness with the zero case separated.

**Further variation and generation checks:** Vary root order and complex target, include roots of unity and zero; verify completeness and distinguish distinct roots from multiplicity.

#### Misconceptions and responsive feedback

If only the principal root is reported, ask what happens after adding 2π to the original argument. If n roots of zero are called distinct, compare their coordinates.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Produce exactly n distinct roots for a nonzero input, verify the common nth power, distinguish distinct roots from multiplicity at zero, and explain why additional integer angle choices repeat the list.

**Task range to sample:** Vary root order and complex target, include roots of unity and zero; verify completeness and distinguish distinct roots from multiplicity.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Why enumerating the angles is complete

For $w^3=-8$, the modulus equation is $\lvert w\rvert^3=8$, so $\lvert w\rvert=2$. The argument satisfies $3\phi=\pi+2k\pi$, giving angles $\pi/3,\pi,5\pi/3$ and roots $1+i\sqrt3,-2,1-i\sqrt3$. Every root must satisfy these modulus and angle conditions; values of $k$ differing by 3 repeat a full turn. This establishes completeness, beyond merely checking three powers.

If only $-2$ appears, ask whether a nonreal point can triple its angle to the negative real axis. Then supply $3\phi=\pi+2k\pi$; finally compute the $k=0$ root and leave the other two. If three valid roots are listed with a duplicate, compare arguments modulo $2\pi$ instead of reteaching De Moivre. Fade by providing the full argument family for $w^3=8$ but not the roots; on a later fresh task require that family independently. Do not count this supported enumeration as unassisted completeness evidence.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
