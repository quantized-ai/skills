# Private calibration: Unit 39 — Matrix algebra and transformations

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Matrix dimensions and labeled entries | [Original task and checked key](lesson-1-matrices-as-data-representations/tutor.md#matrix-dimensions-and-labeled-entries) | Use nonsquare data, payoffs and explicitly directed networks; label units and adjacency conventions and use technology for larger tables. |
| Data manipulation by matrices | [Original task and checked key](lesson-1-matrices-as-data-representations/tutor.md#data-manipulation-by-matrices) | Include label-order mismatches and unit conversions, not just equal dimensions; explain each resulting entry contextually. |
| Entrywise matrix arithmetic | [Original task and checked key](lesson-2-matrix-arithmetic-and-products/tutor.md#entrywise-matrix-arithmetic) | Mix sums/differences/scalars, negative entries and incompatible sizes; distinguish entrywise arithmetic from multiplication. |
| Row-column multiplication | [Original task and checked key](lesson-2-matrix-arithmetic-and-products/tutor.md#row-column-multiplication) | Include matrix-vector products and cases where only one order exists; verify every entry and output size. |
| Contextual matrix products | [Original task and checked key](lesson-2-matrix-arithmetic-and-products/tutor.md#contextual-matrix-products) | Include resource-use and network path products with explicit intermediate labels; reject dimensionally compatible but semantically misaligned data. |
| Matrix algebra laws | [Original task and checked key](lesson-3-matrix-algebra-zero-and-identity/tutor.md#matrix-algebra-laws) | Include symbolic dimension checks for associativity/distribution and numeric counterexamples; do not treat one commuting pair as a universal proof. |
| Zero and identity matrices | [Original task and checked key](lesson-3-matrix-algebra-zero-and-identity/tutor.md#zero-and-identity-matrices) | Include identity sizes, zero products, singular cancellation counterexamples and rectangular matrices; require an inverse before cancelling a matrix factor. |
| Determinants and inverse existence | [Original task and checked key](lesson-4-determinants-inverses-and-linear-systems/tutor.md#determinants-and-inverse-existence) | Vary nonsingular/singular 2-by-2 matrices, determinant sign and verification in both orders; distinguish a small nonzero determinant from zero. |
| Systems as matrix equations | [Original task and checked key](lesson-4-determinants-inverses-and-linear-systems/tutor.md#systems-as-matrix-equations) | Include contextual two-variable systems with units and invertibility checks; verify solutions in the original equations. |
| Technology and singular systems | [Original task and checked key](lesson-4-determinants-inverses-and-linear-systems/tutor.md#technology-and-singular-systems) | Construct contextual three-variable systems and use available technology to compute/verify inverses; use row reasoning for singular systems, never an invented inverse or fake tool result. |
| Matrices as vector transformations | [Original task and checked key](lesson-5-matrix-transformations-and-area/tutor.md#matrices-as-vector-transformations) | Include rotations, reflections, shears and scalings; construct from basis images and verify with a nonbasis vector. |
| Composition and inverse transformations | [Original task and checked key](lesson-5-matrix-transformations-and-area/tutor.md#composition-and-inverse-transformations) | Compare composition orders using a nonsymmetric figure and invertible/noninvertible maps; require inverse order reasoning. |
| Determinant and area scaling | [Original task and checked key](lesson-5-matrix-transformations-and-area/tutor.md#determinant-and-area-scaling) | Include shears, zero determinants and composite maps; distinguish signed orientation from nonnegative area. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** For A=[[1,2],[2,4]], compare right sides b=[3,6] and b=[3,7].

**Key and required reasoning:** Determinant zero in both. First system has infinitely many solutions x=3-2t,y=t. Second is inconsistent because the second equation would need right side 6. No inverse exists.

### Transfer check 2

**Prompt:** A matrix has columns (1,2) and (3,4). Map (2,-1), find its determinant and image area of a unit square.

**Key and required reasoning:** Matrix [[1,3],[2,4]] maps to (-1,0). Determinant -2 gives area 2 and reverses orientation; columns, not rows, are the basis images.
