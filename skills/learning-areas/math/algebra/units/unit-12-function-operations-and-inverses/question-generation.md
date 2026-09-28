# Unit 12: generating fresh questions

Read the [agent guide](agent-guide.md) and the selected curriculum/tutor pair via [SKILL.md](SKILL.md#lessons). Generate new questions for every quiz, including the first. The [bank](assessment.md) calibrates correctness and coverage; it is not a fixed test sequence.

## Construction and validation

Select the exact curriculum concept and required proficiency before choosing numbers. Use the task families below and the tutor’s concept guidance. Keep arithmetic, step count, abstraction, and prerequisites appropriate to the requested difficulty. On a retake preserve difficulty unless the student requests a change. A longer quiz can cover several task families; a short quiz reports sampled coverage only.

Construct a complete prompt and independently solve that final prompt. Specify domain, parameters, units, geometry or graph information, and exact versus approximate expectations. Check every restriction, degenerate case, and claimed solution count. Reject underdetermined or contradictory data unless diagnosing that defect is explicitly the task. Verify by an appropriate independent computation or derivation; do not grade from an intended answer alone.

Vary representation, reasoning direction, sign patterns, boundary cases, contextual assumptions, and coefficient data. A numerical variant can support procedural practice but does not by itself demonstrate transfer from a worked template. For transfer, ask for construction, interpretation, critique, or a different representation while retaining the same curriculum concept. Never add later topics solely for novelty.

## Construction recipes for this unit

Define each function with its full domain, then derive arithmetic intersections or the two-stage composition domain before simplifying. For inverse tasks ensure one-to-one behavior on the supplied set, derive its actual range and exchange both sets. Check both compositions on those sets, including endpoint membership and excluded inputs. Construct degenerate rational/constant cases deliberately and do not invent a branch or normalization when data leave multiple answers.

## Task families and evidence checks

Each row distinguishes ways to vary a task from the mathematical evidence that must survive that variation. Choose missing cases deliberately. A short quiz samples these requirements; it must not pretend to cover the full unit. Read the linked tutor and curriculum pair before generating.

| Curriculum concept | Practice-to-transfer progression | Key and evidence checks |
| --- | --- | --- |
| [Sums, differences, and products](lesson-1-arithmetic-combinations-of-functions/tutor.md#sums-differences-and-products) | Use formulas and complete tables, restricted domains, reverse missing-function tasks and compatible contextual combinations. | Require correct operation, common admissibility, domain intersection and units. A simplified expression does not waive either original function's restrictions. |
| [Quotients of functions](lesson-1-arithmetic-combinations-of-functions/tutor.md#quotients-of-functions) | Include polynomial, radical and rational operands, isolated divisor zeros and a divisor identically zero on the shared domain. | Assess ordered quotient, both original domains, complete divisor-zero exclusions and valid reduction. Report an empty domain when no common admissible nonzero-divisor input exists. |
| [Composition order and evaluation](lesson-2-composition-and-its-domain/tutor.md#composition-order-and-evaluation) | Use short function machines, formulas and explicitly complete or sampled tables, then compare orders and contextual unit compatibility. | Require both stages, correct order, supported table use and distinction from multiplication. Do not infer commutativity from one input where outputs happen to agree. |
| [Algebraic composition with restrictions](lesson-2-composition-and-its-domain/tutor.md#algebraic-composition-with-restrictions) | Progress from unrestricted polynomials to radicals/reciprocals and concealed restrictions, then reverse reasoning about which inputs feed an allowed outer value. | Assess complete substitution, both-stage inequalities/exclusions, explicit domain and verification in the original composition chain. |
| [When an inverse is a function](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#when-an-inverse-is-a-function) | Classify complete relations, tables and formulas, justify one-to-one behavior or supply a collision, and distinguish inverse/reciprocal evaluations. | Require a valid one-to-one argument or counterexample, relation-versus-function distinction and the inverse's domain as the original range. |
| [Inverse values from tables and graphs](lesson-3-inverse-relations-and-one-to-one-functions/tutor.md#inverse-values-from-tables-and-graphs) | Use finite complete tables, explicitly sampled data, endpoints and labelled graph features. Ask for both numerical inverse values and set exchange. | Assess correct pair reversal, finite membership, endpoint inclusion, domain/range exchange and evidence limits. First confirm the inverse is a function if that claim is required. |
| [Linear inverses and reversal of operations](lesson-4-solving-for-inverse-formulas/tutor.md#linear-inverses-and-reversal-of-operations) | Begin with all-real linear rules, then positive/negative slopes and restricted intervals. Compare inverse and reciprocal and ask for an operation-order explanation. | Require nonzero slope, solved inverse, exact exchanged sets and composition verification. Restriction boundaries belong to the inverse domain only when attained originally. |
| [Simple rational inverses](lesson-4-solving-for-inverse-formulas/tutor.md#simple-rational-inverses) | Use nonconstant examples, constant degeneracies and verification of both excluded values. Include complete set exchange rather than formula-only answers. | Assess nonconstancy, legal equation steps, inverse formula, original/inverse domain and range, and the reason for each exclusion. Handle c=0 as a linear special case when permitted. |
| [Restricting a quadratic to obtain an inverse](lesson-5-restrictions-and-inverse-verification/tutor.md#restricting-a-quadratic-to-obtain-an-inverse) | Compare left/right branches, downward quadratics and narrower bounded intervals. Ask the learner to explain how the same formula with different domains yields different inverses. | Require one-to-one justification, branch selection, exact exchanged sets and endpoint membership. A correct algebraic branch on an overly large domain is incomplete. |
| [Verifying both compositions on their domains](lesson-5-restrictions-and-inverse-verification/tutor.md#verifying-both-compositions-on-their-domains) | Verify valid restricted pairs, reject a pair with only one-sided success and repair either the rule or its sets where possible. | Assess both identities, explicit input sets, admissible intermediate outputs and justified sign simplification. Numeric checks may expose failure but a full identity/domain argument establishes the claim. |
| [Exponential and logarithmic inverses](lesson-6-inverse-function-families/tutor.md#exponential-and-logarithmic-inverses) | Invert transformed exponential and logarithmic rules, include negative scales and supplied restricted domains, and compare symbolic identities with graph correspondences. | Require correct operation reversal, base/argument conditions, full set exchange, both identity checks and reflected features. Do not infer a unique inverse of a degenerate constant formula. |
| [Inverses of square-root and cubic functions](lesson-6-inverse-function-families/tutor.md#inverses-of-square-root-and-cubic-functions) | Contrast positive/negative square-root scales, translated cubics and narrower supplied original domains. Include composition checks that reveal a lost branch condition. | Assess original range, inherited inverse domain, correct formula and sets, both identities and the even/odd-root distinction. Branch restrictions survive algebraic simplification. |

## Exposure and recovery

Compare exact mathematical data and required reasoning with all available learning, practice, and assessment exposure. Rewording a story or renaming a character does not create a fresh item. Keep the exact prompt, checked key, concept, case, representation, and difficulty in the current record. Without supplied past-session history, generate a new task but do not promise it cannot coincide with an unseen prior question. Replace a reported repeat.

If the student asks for a familiar example, use it as review and label the exposure. After hints or taught feedback, choose a genuinely fresh independent task for the affected evidence. If a defect appears after presentation, acknowledge it, invalidate the item without penalty, and generate a checked replacement. This policy supplies many useful variations; it does not establish statistical equivalence of quiz forms or guarantee infinitely many distinct valid questions.

## Checked demand anchors

| Demand | Example and checked key | What changes |
| --- | --- | --- |
| Comparable linear inverses | $3x-7$ inverts to $(x+7)/3$; $4x+5$ to $(x-5)/4$. | Two operation reversals on full real domains. |
| Increased demand | $(x+1)/(x-2)$ inverts to $(2x+1)/(x-1)$. | Requires collecting a repeated unknown and exchanging exclusions, not just reversing two linear operations. |
| Branch transfer | $(x-2)^2+1$ on $x\le2$ inverts to $2-\sqrt{x-1}$ on $x\ge1$. | Restricting instead to $[2,4]$ changes inverse sign and domain to $2+\sqrt{x-1}$ on $[1,5]$. |

These are intended demand comparisons, not measured equivalence. Match the assessed cases, permitted tools, and assistance as well as coefficient size; a numerical variant alone does not establish transfer.
