# Tutor: Lesson 36.3: Angle addition and subtraction

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check sine/cosine parity, exact special angles and coordinate rotations; derive before expecting memorized sign patterns.

Within this unit, revisit [the previous lesson](../lesson-2-inverse-trigonometric-functions/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Prove identities on their appropriate domains; defer arbitrary inverse-angle equation solving and calculus addition formulas.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Sine and cosine addition formulas:** Rotate unit-circle points and compare their coordinate components to derive cosine and sine addition.

- **Subtraction and cofunction identities:** Substitute −v into addition and use sine oddness/cosine evenness to derive signs.

- **Tangent addition and subtraction:** Divide sine-addition by cosine-addition first, then divide both numerator and denominator by cosu cosv only after declaring it nonzero.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A claimed identity cos(u+v)=cosu+cosv works at a selected pair. Use u=v=0 to refute it, then name the terms a correct derivation must produce.

**Agent key and discussion:** Left side is 1 and proposed right side 2. The valid formula is cosu cosv−sinu sinv. Rotation or equal-chord reasoning establishes both products for all real angles; isolated examples cannot prove it.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Sine and cosine addition formulas

Curriculum reference: **Sine and cosine addition formulas** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is sin(u+v)=sin u+sin v?
- **Diagnostic key:** No; u=v=π/2 gives zero on the left and two on the right.
- **Worked-example prompt:** Find sin 75 degrees exactly and explain a general derivation of the addition formula.
- **Worked model and reasoning:** $\sin(45^\circ+30^\circ)=(\sqrt6+\sqrt2)/4$. Rotating a unit vector $(\cos v,\sin v)$ by u gives $(\cos u\cos v-\sin u\sin v,\sin u\cos v+\cos u\sin v)$, establishing both addition identities.
- **First hint:** How do the horizontal and vertical components each contribute after rotation?

#### Learn

- Rotate unit-circle points and compare their coordinate components to derive cosine and sine addition.
- Alternatively compare squared chord lengths to derive cosine difference, then use parity/cofunctions for the others.
- Name the invariant distance or rotation assumption.
- Only after the derivation compute exact nonstandard angles from familiar pairs.

#### Practice progression

Move from counterexamples to a general derivation, exact evaluations, expression recognition in reverse and choice of efficient angle decomposition.

**Further variation and generation checks:** Require a general rotation/distance derivation, then exact values and rewriting; a numerical check is not a proof.

#### Misconceptions and responsive feedback

If one cross product disappears, expand the rotation's two component contributions separately. If sample agreement is called proof, ask what step holds for arbitrary u,v.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Present a general geometric or algebraic derivation with justified identities, preserve both product terms, and give exact simplified values when component values are exact.

**Task range to sample:** Require a general rotation/distance derivation, then exact values and rewriting; a numerical check is not a proof.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Subtraction and cofunction identities

Curriculum reference: **Subtraction and cofunction identities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Is sin(u−v) the same as sin(v−u)?
- **Diagnostic key:** It is its negative; cosine of the difference is unchanged on reversal.
- **Worked-example prompt:** Derive sin(u-v) and use it to find sin 15 degrees.
- **Worked model and reasoning:** Replace v by -v in addition: sine is odd and cosine even, so $\sin(u-v)=\sin u\cos v-\cos u\sin v$. Thus $\sin15^\circ=(\sqrt6-\sqrt2)/4$.
- **First hint:** Which trigonometric functions change sign when the angle is negated?

#### Learn

- Substitute −v into addition and use sine oddness/cosine evenness to derive signs.
- Set one angle to π/2 to obtain cofunctions, then derive reciprocal/quotient versions only on their common domains.
- Check an angle pair with a negative difference before giving memorized sign patterns.

#### Practice progression

Derive identities by substitution, evaluate exact differences, reverse their order and simplify cofunction expressions with stated domains.

**Further variation and generation checks:** Include cosine subtraction and cofunction identities; retain domain restrictions for reciprocal versions.

#### Misconceptions and responsive feedback

If cosine subtraction is written with a minus product, test u=v: the result must be one. If a cofunction reciprocal is undefined, keep the original restriction.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Derive signs from parity or substitution, preserve the order in sine subtraction, and state restrictions for quotient or reciprocal cofunction identities.

**Task range to sample:** Include cosine subtraction and cofunction identities; retain domain restrictions for reciprocal versions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Tangent addition and subtraction

Curriculum reference: **Tangent addition and subtraction** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can tan(u+v) be evaluated by its quotient formula when tan u is undefined?
- **Diagnostic key:** Not with that formula, even if tan(u+v) itself exists.
- **Worked-example prompt:** Find tan 75 degrees using addition, then explain why that formula cannot directly evaluate tan(90°+30°).
- **Worked model and reasoning:** $(1+1/\sqrt3)/(1-1/\sqrt3)=2+\sqrt3$. The second expression's tan90° is undefined although tan120° exists; sine/cosine addition can still give $-\sqrt3$. Derivation divides sine addition by cosine addition with all divisors nonzero.
- **First hint:** Is each individual tangent defined before forming the quotient?

#### Learn

- Divide sine-addition by cosine-addition first, then divide both numerator and denominator by cosu cosv only after declaring it nonzero.
- Identify the additional requirement cos(u±v)≠0.
- Match numerator and denominator paired signs; use sine/cosine formulas directly when an individual tangent is unavailable.

#### Practice progression

Start with valid exact sums/differences, derive the quotient and restrictions, then distinguish invalid formula use from a genuinely undefined target.

**Further variation and generation checks:** Include undefined individual tangents, zero final denominators, both paired signs and a full quotient derivation.

#### Misconceptions and responsive feedback

If a zero denominator is canceled by informal infinity arithmetic, return to finite sine/cosine quantities. Do not interpret an undefined form as a zero answer.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Derive the quotient from sine and cosine, match the paired signs, and reject use of the tangent formula whenever an individual tangent or final denominator is undefined.

**Task range to sample:** Include undefined individual tangents, zero final denominators, both paired signs and a full quotient derivation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Make the rotation derivation visible

Avoid citing a rotation matrix whose entries were themselves proved by the desired addition identities. A geometric rotation through $u$ sends $(1,0)$ to $(\cos u,\sin u)$ and its perpendicular positive basis vector $(0,1)$ to $(-\sin u,\cos u)$. Rotation preserves vector addition and scalar multiples, so rotating $(\cos v,\sin v)$ gives the sum of $\cos v(\cos u,\sin u)$ and $\sin v(-\sin u,\cos u)$. Its coordinates also equal $(\cos(u+v),\sin(u+v))$. Comparing coordinates proves both formulas for arbitrary real angles.

If a learner omits a cross term, first ask them to display the two rotated component vectors. Then supply the two basis images; finally model only the first coordinate and leave the second to them. Fade by giving the cosine addition identity and asking them to derive cosine subtraction using parity, then derive a cofunction without the substitution supplied. A valid chord-distance proof is equally acceptable; a calculation of $\sin75^\circ$ alone supplies application evidence, not this derivation.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
