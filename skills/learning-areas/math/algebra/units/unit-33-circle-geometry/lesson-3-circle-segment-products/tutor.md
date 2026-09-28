# Tutor: Lesson 33.3: Circle segment products

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check AA similarity and inscribed/tangent-chord angles from lesson 2; restore endpoint order before algebra.

Within this unit, revisit [the previous lesson](../lesson-2-circle-angle-theorems/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Work with interior chord and exterior secant/tangent configurations; defer signed power conventions for arbitrary points.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Intersecting chord products:** Name endpoints in order A–P–B and C–P–D.

- **Secant and tangent products:** Draw P–A–B in order so PB=PA+AB.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** An exterior secant has outside portion x and inside portion 5; tangent length 6. A proposed equation is 5x=36. Repair and solve.

**Agent key and discussion:** Whole secant length is x+5, so x(x+5)=36. Roots are 4 and −9; only x=4 is a positive exterior length, with whole length 9 and product 36.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Intersecting chord products

Curriculum reference: **Intersecting chord products** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Interior intersecting chords have portions 2,9 on one and 3,x on the other. Is x=8 from equal total lengths?
- **Diagnostic key:** No: equal products give x=6, while chord totals need not match.
- **Worked-example prompt:** Chords AB and CD meet at P inside a circle, with PA=3, PB=8, PC=4. Find PD and explain the product.
- **Worked model and reasoning:** $PD=6$ because $3\cdot8=4\cdot PD$. Triangles APC and DPB are similar: vertical angles at P and inscribed angles intercepting matching arcs give AA; corresponding sides imply $PA/PD=PC/PB$.
- **First hint:** Which endpoints belong to each chord through the intersection?

#### Learn

- Name endpoints in order A–P–B and C–P–D.
- Compare triangles APC and DPB: vertical angles agree and the relevant inscribed angles share arcs.
- Write the side correspondence before proportions, then rearrange to PA·PB=PC·PD.
- Verify each recovered length is positive.

#### Practice progression

Start with labeled subsegments, then total-chord data requiring subtraction, then an algebraic unknown and a complete similarity proof.

**Further variation and generation checks:** Vary which length is missing and require a stated triangle correspondence; reject nonpositive lengths and whole-chord substitutions.

#### Misconceptions and responsive feedback

If adjacent rather than same-chord portions are multiplied, trace one complete straight chord through P. If similar triangles are named in the wrong order, match equal angles before writing ratios.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Establish the correct triangle correspondence and pair the two portions of each chord; verify positivity and full-length relationships in recovered values.

**Task range to sample:** Vary which length is missing and require a stated triangle correspondence; reject nonpositive lengths and whole-chord substitutions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Secant and tangent products

Curriculum reference: **Secant and tangent products** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A secant's outside length is 2 and its inside length 7. Which product gives its power?
- **Diagnostic key:** 2·9=18, not 2·7.
- **Worked-example prompt:** From exterior P, a secant has near distance 4 and inside segment 5. Find the tangent length from P.
- **Worked model and reasoning:** Whole secant length is 9, so $PT^2=4\cdot9=36$ and $PT=6$. A tangent-chord angle equals the corresponding inscribed angle; AA similarity gives tangent squared equals exterior times whole.
- **First hint:** Where is the far endpoint measured from?

#### Learn

- Draw P–A–B in order so PB=PA+AB.
- For tangent T, triangles PTA and PBT share the exterior angle and have tangent-chord/inscribed equal angles; their correspondence yields PT/PA=PB/PT.
- For two secants compare each exterior-times-whole product, then check recovered lengths against point order.

#### Practice progression

Contrast interior and exterior products, solve tangent/one-secant and two-secant cases, then derive the similarity correspondence and test impossible data.

**Further variation and generation checks:** Include two-secant cases and a similarity proof, extraneous negative roots, and the distinction between inside and whole length.

#### Misconceptions and responsive feedback

If the tangent has two algebraic signs, require a positive length. If a whole length is less than its outside segment, reject that candidate even if it solved a manipulated equation.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the full distance to the farther circle point rather than only the interior segment, justify the similarity proof, and check every algebraic solution against the exterior-point configuration.

**Task range to sample:** Include two-secant cases and a similarity proof, extraneous negative roots, and the distinction between inside and whole length.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Measure both secant factors from the exterior point.** For exterior P, a secant meets the circle first at A, then B, with PA=3 and AB=9. Thus PB=12 and the power product is $3\cdot12=36$. A second secant with exterior segment PC=4 has full PD=9 and interior CD=5. A tangent from P has length 6. Using $3\cdot9$ instead would multiply exterior by interior.

If the learner answers CD=9, ask where the computed length starts. Next list $PD=PC+CD$; then supply $4(4+CD)=36$ and leave solving and positivity checks. Fade to exterior 2 and interior 10 on one secant, exterior 3 on another (whole 8, interior 5, tangent $2\sqrt6$). The similarity proof still needs ordered triangles and angle correspondences; arithmetic alone supports only the application component.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
