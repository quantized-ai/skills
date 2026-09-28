# Fresh-question generation: Unit 39 — Matrix algebra and transformations

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Check both matrix sizes and semantic row/column labels. Matrix multiplication is ordered and generally noncommutative. Two-sided inverses require square nonsingular matrices; determinant zero does not alone distinguish inconsistency from infinitely many solutions. Compose maps rightmost first, use the absolute determinant for area and its sign for orientation. Do not claim technology use without an actual tool result.

## Constructive families and verification

- **Labels and dimensions:** choose matrix sizes and semantic row/column categories before entries. For AB verify inner dimensions and shared category ordering; calculate each output cell as a row-column sum with consistent units. Test reversed-order compatibility separately. Equal shape does not ensure meaningful data addition.
- **Construct systems:** choose a solution vector and coefficient matrix, compute b=A x, then decide whether the matrix is nonsingular. For singular countercases create a dependent row with matching or conflicting constant to produce infinitely many or no solutions. Do not classify from determinant alone. For 3×3 technology tasks obtain and inspect actual output, then verify all modeled equations.
- **Counterexample families:** build noncommuting pairs and nonzero-factor zero products explicitly. Use compatible identity sizes on each side of a rectangular matrix. Cancellation tasks must state or test the appropriate inverse condition.
- **Transformations:** construct matrices from basis images, test general vectors and compose in rightmost-first order. Use |det| for area, sign for orientation and dependent columns for collapse. Check reversals by actual products/points, not by reversing an informal verbal list.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [39.1 Matrix dimensions and labeled entries](lesson-1-matrices-as-data-representations/tutor.md#matrix-dimensions-and-labeled-entries) | Use nonsquare data, payoffs and explicitly directed networks; label units and adjacency conventions and use technology for larger tables. |
| [39.1 Data manipulation by matrices](lesson-1-matrices-as-data-representations/tutor.md#data-manipulation-by-matrices) | Include label-order mismatches and unit conversions, not just equal dimensions; explain each resulting entry contextually. |
| [39.2 Entrywise matrix arithmetic](lesson-2-matrix-arithmetic-and-products/tutor.md#entrywise-matrix-arithmetic) | Mix sums/differences/scalars, negative entries and incompatible sizes; distinguish entrywise arithmetic from multiplication. |
| [39.2 Row-column multiplication](lesson-2-matrix-arithmetic-and-products/tutor.md#row-column-multiplication) | Include matrix-vector products and cases where only one order exists; verify every entry and output size. |
| [39.2 Contextual matrix products](lesson-2-matrix-arithmetic-and-products/tutor.md#contextual-matrix-products) | Include resource-use and network path products with explicit intermediate labels; reject dimensionally compatible but semantically misaligned data. |
| [39.3 Matrix algebra laws](lesson-3-matrix-algebra-zero-and-identity/tutor.md#matrix-algebra-laws) | Include symbolic dimension checks for associativity/distribution and numeric counterexamples; do not treat one commuting pair as a universal proof. |
| [39.3 Zero and identity matrices](lesson-3-matrix-algebra-zero-and-identity/tutor.md#zero-and-identity-matrices) | Include identity sizes, zero products, singular cancellation counterexamples and rectangular matrices; require an inverse before cancelling a matrix factor. |
| [39.4 Determinants and inverse existence](lesson-4-determinants-inverses-and-linear-systems/tutor.md#determinants-and-inverse-existence) | Vary nonsingular/singular 2-by-2 matrices, determinant sign and verification in both orders; distinguish a small nonzero determinant from zero. |
| [39.4 Systems as matrix equations](lesson-4-determinants-inverses-and-linear-systems/tutor.md#systems-as-matrix-equations) | Include contextual two-variable systems with units and invertibility checks; verify solutions in the original equations. |
| [39.4 Technology and singular systems](lesson-4-determinants-inverses-and-linear-systems/tutor.md#technology-and-singular-systems) | Construct contextual three-variable systems and use available technology to compute/verify inverses; use row reasoning for singular systems, never an invented inverse or fake tool result. |
| [39.5 Matrices as vector transformations](lesson-5-matrix-transformations-and-area/tutor.md#matrices-as-vector-transformations) | Include rotations, reflections, shears and scalings; construct from basis images and verify with a nonbasis vector. |
| [39.5 Composition and inverse transformations](lesson-5-matrix-transformations-and-area/tutor.md#composition-and-inverse-transformations) | Compare composition orders using a nonsymmetric figure and invertible/noninvertible maps; require inverse order reasoning. |
| [39.5 Determinant and area scaling](lesson-5-matrix-transformations-and-area/tutor.md#determinant-and-area-scaling) | Include shears, zero determinants and composite maps; distinguish signed orientation from nonnegative area. |
