# Private calibration: Unit 36 — Trigonometric identities, inverses, and equations

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Reciprocal and quotient definitions | [Original task and checked key](lesson-1-reciprocal-trigonometric-functions/tutor.md#reciprocal-and-quotient-definitions) | Cover all reciprocal functions, exact values and alternative-expression domains; retain excluded inputs after rewriting. |
| Reciprocal trigonometric graphs | [Original task and checked key](lesson-1-reciprocal-trigonometric-functions/tutor.md#reciprocal-trigonometric-graphs) | Contrast secant/cosecant/cotangent, their different periods and ranges; require branch signs and extrema with graphs. |
| Transformed reciprocal graphs | [Original task and checked key](lesson-1-reciprocal-trigonometric-functions/tutor.md#transformed-reciprocal-graphs) | Include negative scales and shifted reciprocal graphs; map domains and vertices instead of reading an amplitude for unbounded secant. |
| Principal inverse branches | [Original task and checked key](lesson-2-inverse-trigonometric-functions/tutor.md#principal-inverse-branches) | Construct each inverse from a monotone restriction and state both domain and range; distinguish an inverse from a reciprocal. |
| Inverse trigonometric graphs | [Original task and checked key](lesson-2-inverse-trigonometric-functions/tutor.md#inverse-trigonometric-graphs) | Require endpoints, intercepts, monotonicity and symmetry for all three; do not assign vertical asymptotes to finite inverse-sine endpoints. |
| Principal values and inverse compositions | [Original task and checked key](lesson-2-inverse-trigonometric-functions/tutor.md#principal-values-and-inverse-compositions) | Include mixed compositions and out-of-domain inputs, branch folding and approximate values with explicit angle units. |
| Sine and cosine addition formulas | [Original task and checked key](lesson-3-angle-addition-and-subtraction/tutor.md#sine-and-cosine-addition-formulas) | Require a general rotation/distance derivation, then exact values and rewriting; a numerical check is not a proof. |
| Subtraction and cofunction identities | [Original task and checked key](lesson-3-angle-addition-and-subtraction/tutor.md#subtraction-and-cofunction-identities) | Include cosine subtraction and cofunction identities; retain domain restrictions for reciprocal versions. |
| Tangent addition and subtraction | [Original task and checked key](lesson-3-angle-addition-and-subtraction/tutor.md#tangent-addition-and-subtraction) | Include undefined individual tangents, zero final denominators, both paired signs and a full quotient derivation. |
| Double-angle identities | [Original task and checked key](lesson-4-double-and-half-angle-identities/tutor.md#double-angle-identities) | Alternate given sine/cosine/tangent and quadrant; include tangent-domain exceptions and derive all cosine forms. |
| Power reduction | [Original task and checked key](lesson-4-double-and-half-angle-identities/tutor.md#power-reduction) | Vary quadratic combinations and ask a derivation and domain check; distinguish sin²x from sin(x²). |
| Half-angle values | [Original task and checked key](lesson-4-double-and-half-angle-identities/tutor.md#half-angle-values) | Include boundary angles and tangent half-angle quotient forms with different domains; derive from power reduction and reject invalid denominators. |
| Reciprocal Pythagorean identities | [Original task and checked key](lesson-5-proving-trigonometric-identities/tutor.md#reciprocal-pythagorean-identities) | Include cosecant/cotangent identity derived by division by sine squared, cancellation and explicit exclusions. |
| Identity proof and common domains | [Original task and checked key](lesson-5-proving-trigonometric-identities/tutor.md#identity-proof-and-common-domains) | Mix one-side proofs, false claims and two expressions with different domains; require justification of each division rather than assuming the desired equality. |
| Basic periodic solution families | [Original task and checked key](lesson-6-trigonometric-equations-and-models/tutor.md#basic-periodic-solution-families) | Include sine/cosine/tangent, affine arguments, no-solution targets and extrema where branches coincide; enumerate endpoints exactly. |
| Algebraic and identity-based equation methods | [Original task and checked key](lesson-6-trigonometric-equations-and-models/tutor.md#algebraic-and-identity-based-equation-methods) | Include factoring, substitutions, squared extraneous roots, reciprocal exclusions and identity/inconsistent cases; substitute into originals. |
| Equations from periodic models | [Original task and checked key](lesson-6-trigonometric-equations-and-models/tutor.md#equations-from-periodic-models) | Vary target within/outside range and measured parameters; use technology for numerical roots, retain all events and label approximations. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** Evaluate arcsin(sin(4π/3)) and solve cos(2x)=0 on [0,π].

**Key and required reasoning:** Principal arcsine is $-\pi/3$. Cosine equation gives $2x=\pi/2+k\pi$, hence $x=\pi/4,3\pi/4$ in the interval.

### Transfer check 2

**Prompt:** A student divides sin²x=1-cos x by 1-cos x and claims only cos x=0 remains. Find all solutions on [0,2π).

**Key and required reasoning:** Use $1-\cos^2x=1-\cos x$, hence $\cos x(1-\cos x)=0$. Solutions 0,π/2,3π/2; division lost x=0. Endpoint 2π is excluded.
