# Tutor: Lesson 36.4: Double-angle and half-angle identities

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check addition formulas, quadrant signs and square-root conventions; if a half-angle sign is missed, halve the interval before computing.

Within this unit, revisit [the previous lesson](../lesson-3-angle-addition-and-subtraction/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Derive double-angle/power-reduction/half-angle forms; defer higher multiple-angle formulas as required knowledge.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Double-angle identities:** Set equal angles in addition to derive sin2u and cos2u.

- **Power reduction:** Rearrange the two cosine double-angle forms separately to expose the different signs.

- **Half-angle values:** Solve the power-reduction equations for squared half-angle values, then determine each sign from the halved interval.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Given u=240°, a student uses the positive square root for cos(u/2). Determine and explain the sign without a calculator.

**Agent key and discussion:** u/2=120° is in quadrant II, so cosine is −1/2. The radical √((1+cosu)/2)=1/2 gives magnitude only; the quadrant supplies the negative sign.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Double-angle identities

Curriculum reference: **Double-angle identities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If sin u is known but the quadrant is not, is sin2u necessarily determined?
- **Diagnostic key:** No: cosine's sign can change, although cos2u=1−2sin²u is determined.
- **Worked-example prompt:** If sin u=5/13 and u is in quadrant II, find sin 2u and cos 2u.
- **Worked model and reasoning:** $\cos u=-12/13$; $\sin2u=-120/169$, $\cos2u=119/169$. Setting v=u in addition yields double angles; the Pythagorean identity gives both alternative cosine forms.
- **First hint:** Determine cosine's sign before multiplying.

#### Learn

- Set equal angles in addition to derive sin2u and cos2u.
- Use sin²u+cos²u=1 to obtain both alternative cosine forms, selecting the one matching the given data.
- Recover missing signs from quadrant information.
- Derive tangent double-angle only when both original and doubled cosines are nonzero.

#### Practice progression

Derive all forms, compute with partial ratio data, choose efficient forms and analyze cases where a tangent form fails while other identities remain valid.

**Further variation and generation checks:** Alternate given sine/cosine/tangent and quadrant; include tangent-domain exceptions and derive all cosine forms.

#### Misconceptions and responsive feedback

If sin2u is written as 2sin u, test u=π/2. If cosine is replaced by a positive root automatically, require a quadrant sketch.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Derive all three cosine forms, select forms consistent with known values, and state the restrictions on tangent calculations.

**Task range to sample:** Alternate given sine/cosine/tangent and quadrant; include tangent-domain exceptions and derive all cosine forms.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Power reduction

Curriculum reference: **Power reduction** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does sin²x=(1+cos2x)/2?
- **Diagnostic key:** No; at x=0 that would equal one, but sine squared is zero.
- **Worked-example prompt:** Rewrite 3sin²x+cos²x+2sin x cos x in double-angle terms.
- **Worked model and reasoning:** $3(1-\cos2x)/2+(1+\cos2x)/2+\sin2x=2-\cos2x+\sin2x$, valid for every real x. Power reduction follows by rearranging cosine double-angle identities.
- **First hint:** Replace each square separately, keeping its factor of one-half.

#### Learn

- Rearrange the two cosine double-angle forms separately to expose the different signs.
- Obtain sinx cosx from sine double-angle.
- Substitute term by term into quadratic combinations and combine constants only afterward.
- Verify every transformation retains all-real domain when no quotient is introduced.

#### Practice progression

Rewrite single squares, weighted sums and mixed products, then derive the power-reduction rules and recognize an equivalent expression in reverse.

**Further variation and generation checks:** Vary quadratic combinations and ask a derivation and domain check; distinguish sin²x from sin(x²).

#### Misconceptions and responsive feedback

If the one-half factor is lost, test both x=0 and π/2. If sin²x is confused with sin(x²), read the operation order aloud.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Justify rearrangement, preserve the factor of one-half and correct signs, and verify that the rewritten expression retains the original domain.

**Task range to sample:** Vary quadratic combinations and ask a derivation and domain check; distinguish sin²x from sin(x²).

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Half-angle values

Curriculum reference: **Half-angle values** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** For u=300 degrees, what quadrant contains u/2?
- **Diagnostic key:** Quadrant II; its cosine is negative although cos u is positive.
- **Worked-example prompt:** If cos u=-7/25 and π<u<2π, determine sin(u/2) and cos(u/2).
- **Worked model and reasoning:** Half-angle lies in quadrant II: sine $\sqrt{(1+7/25)/2}=4/5$ and cosine $-\sqrt{(1-7/25)/2}=-3/5$. Signs come from u/2, not u.
- **First hint:** Halve the interval as well as the angle symbol.

#### Learn

- Solve the power-reduction equations for squared half-angle values, then determine each sign from the halved interval.
- Derive the two tangent quotient forms by multiplication/conjugation and record their individual denominators.
- Test zero and π boundary angles separately so a canceled quotient does not hide a removable restriction.

#### Practice progression

Begin with located angles, then interval-based sign inference, exact half-angle values and boundary cases selecting a defined tangent representation.

**Further variation and generation checks:** Include boundary angles and tangent half-angle quotient forms with different domains; derive from power reduction and reject invalid denominators.

#### Misconceptions and responsive feedback

If a plus radical is always chosen, mark u/2 on the circle. If two quotient forms are declared interchangeable everywhere, evaluate them at u=0 to expose the differing natural domains.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Select each sign using the half-angle quadrant, distinguish boundary zeros from positive or negative values, and check the domain of the particular tangent quotient used.

**Task range to sample:** Include boundary angles and tangent half-angle quotient forms with different domains; derive from power reduction and reject invalid denominators.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Choose a formula before calculating

For $\sin u=3/5$ with $u$ in quadrant II, $\cos 2u=1-2(3/5)^2=7/25$ avoids recovering cosine. To obtain $\sin 2u$, cosine is needed and its sign matters: $\cos u=-4/5$, so $\sin2u=-24/25$. Ask why the first calculation is determined even without a quadrant, while the second is not.

For a learner who writes $\cos(u/2)=+\sqrt{(1+\cos u)/2}$ with $\pi<u<2\pi$, use “Where does halving this interval put the angle?” → supply $\pi/2<u/2<\pi$ → show that cosine is negative there, leaving the magnitude calculation. A learner with the correct sign but wrong fraction needs arithmetic feedback instead. Fade by supplying $\cos^2(u/2)=(1+\cos u)/2$ and asking the learner to select its sign, then remove the identity on the next task. Check the quotient boundary separately: at $u=0$, $\sin u/(1+\cos u)=0$ represents $\tan(u/2)$, whereas $(1-\cos u)/\sin u$ is undefined.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
