# Unit 6 assessment calibration bank — agent-only

Load the curriculum/tutor pair through [SKILL.md](SKILL.md#lessons), the [agent guide](agent-guide.md), and the [fresh-question policy](question-generation.md). These original A/B prompts and verified reasoning are internal references, not two quiz forms to alternate. They also appear in teaching material: any displayed example is exposed and cannot establish fresh independent mastery. A prompt and its variants need not cover all proficiency cases by themselves.

Generate new tasks based on the complete curriculum and tutor coverage guidance. Independently verify each new key, accept valid equivalents, and preserve the student’s actual reasoning and support history. If a key is challenged, recompute; a valid student answer takes precedence over an erroneous reference.

## Lesson 6.1: The division algorithm and linear long division

### Quotient, remainder, and division identity

[Curriculum](lesson-1-the-division-algorithm-and-linear-long-division/lesson.md#concepts) · [Tutor guidance](lesson-1-the-division-algorithm-and-linear-long-division/tutor.md#quotient-remainder-and-division-identity)

**A — Prompt:** Divide $x^2+1$ by $x-1$ and state the identity and quotient restriction.

**Key:** $q=x+1,r=2$; $x^2+1=(x-1)(x+1)+2$ for all x, while the quotient form excludes 1.

**B — Prompt:** Divide $2x+3$ by $x^2+1$.

**Key:** The dividend degree is lower: $q=0,r=2x+3$, which satisfies the remainder-degree condition.

**Generation checks:** Include exact and lower-degree cases; distinguish the identity from the restricted quotient function.

### Long division by a linear polynomial

[Curriculum](lesson-1-the-division-algorithm-and-linear-long-division/lesson.md#concepts) · [Tutor guidance](lesson-1-the-division-algorithm-and-linear-long-division/tutor.md#long-division-by-a-linear-polynomial)

**A — Prompt:** Divide $x^3-2x^2+0x+5$ by $x-2$.

**Key:** Quotient $x^2$, remainder 5; reconstruct $(x-2)x^2+5$. The missing linear coefficient occupies a position.

**B — Prompt:** Divide $2x^2+3x-2$ by $2x-1$.

**Key:** The leading quotient term is x, subtraction leaves $4x-2$, giving quotient $x+2$ and remainder 0.

**Generation checks:** Vary dividend degree through four and nonmonic divisors; verify the entire reconstruction.

## Lesson 6.2: Quadratic divisors and synthetic division

### Long division by a quadratic polynomial

[Curriculum](lesson-2-quadratic-divisors-and-synthetic-division/lesson.md#concepts) · [Tutor guidance](lesson-2-quadratic-divisors-and-synthetic-division/tutor.md#long-division-by-a-quadratic-polynomial)

**A — Prompt:** Divide $x^4+1$ by $x^2+1$.

**Key:** Quotient $x^2-1$, remainder 2; $(x^2+1)(x^2-1)+2=x^4+1$.

**B — Prompt:** Divide $2x^3+x+1$ by $2x^2+1$.

**Key:** Quotient x, remainder 1; the remainder is below degree 2.

**Generation checks:** Include linear remainders and fractional quotient coefficients; compare every reconstructed coefficient.

### Synthetic division by $x-c$

[Curriculum](lesson-2-quadratic-divisors-and-synthetic-division/lesson.md#concepts) · [Tutor guidance](lesson-2-quadratic-divisors-and-synthetic-division/tutor.md#synthetic-division-by-x-c)

**A — Prompt:** Use synthetic division on $x^3-3x+2$ by $x-1$.

**Key:** Use coefficients $1,0,-3,2$ and c=1: quotient $x^2+x-2$, remainder 0.

**B — Prompt:** Divide $x^2-1$ by $2x-2$ using a monic normalization.

**Key:** Dividing by $x-1$ gives $x+1$; for $2(x-1)$ the quotient is $(x+1)/2$, remainder 0.

**Generation checks:** Include zero placeholders and signed c; ordinary synthetic division is not a quadratic-divisor procedure.

## Lesson 6.3: Remainders and factors

### The Remainder Theorem

[Curriculum](lesson-3-remainders-and-factors/lesson.md#concepts) · [Tutor guidance](lesson-3-remainders-and-factors/tutor.md#the-remainder-theorem)

**A — Prompt:** Find the remainder when $p(x)=x^3+2x-1$ is divided by $x+2$.

**Key:** Evaluate $p(-2)=-8-4-1=-13$; the divisor root is $-2$.

**B — Prompt:** Why does substituting c in $p=(x-c)q+r$ determine r but not q?

**Key:** The product term becomes zero and leaves $p(c)=r$. Its value gives no quotient coefficients.

**Generation checks:** Include positive and negative divisor roots; one evaluation does not specify a quadratic-divisor remainder.

### The Factor Theorem

[Curriculum](lesson-3-remainders-and-factors/lesson.md#concepts) · [Tutor guidance](lesson-3-remainders-and-factors/tutor.md#the-factor-theorem)

**A — Prompt:** Is $x-2$ a factor of $x^3-4x$?

**Key:** Yes: $p(2)=8-8=0$, so the remainder is zero and the linear factor exists.

**B — Prompt:** Find k so that $x+1$ divides $x^2+kx+3$.

**Key:** $p(-1)=1-k+3=0$ gives $k=4$; $(x+1)(x+3)$ verifies it.

**Generation checks:** Require both directions of the factor/zero connection and check parameter solutions.

## Lesson 6.4: Finding and solving higher-degree factors

### The Rational Root Theorem as a search method

[Curriculum](lesson-4-finding-and-solving-higher-degree-factors/lesson.md#concepts) · [Tutor guidance](lesson-4-finding-and-solving-higher-degree-factors/tutor.md#the-rational-root-theorem-as-a-search-method)

**A — Prompt:** List the rational-root candidates for $2x^3-3x^2-8x+12$.

**Key:** Reduced candidates are $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12,\pm1/2,\pm3/2$. They require testing, not automatic acceptance.

**B — Prompt:** If a monic integer polynomial has constant term zero, how should rational-root search begin?

**Key:** Extract a power of x first and record the zero root; then list candidates for the remaining nonzero constant.

**Generation checks:** Verify integer coefficients, include both signs, deduplicate fractions, and limit exhausted-search conclusions to rational roots.

### Solving cubic and quartic equations by degree reduction

[Curriculum](lesson-4-finding-and-solving-higher-degree-factors/lesson.md#concepts) · [Tutor guidance](lesson-4-finding-and-solving-higher-degree-factors/tutor.md#solving-cubic-and-quartic-equations-by-degree-reduction)

**A — Prompt:** Solve $x^3-2x^2+x-2=0$ over the complex numbers.

**Key:** Grouping gives $(x-2)(x^2+1)$, so roots are $2,i,-i$; three roots match the degree.

**B — Prompt:** Solve $x^4-5x^2+4=0$ and justify completeness.

**Key:** Substitute $U=x^2$: $(U-1)(U-4)=0$, giving $x=\pm1,\pm2$. Four simple roots exhaust degree 4.

**Generation checks:** Include irrational and nonreal residual quadratics; rational-root search alone is not a general complete solver.

## Lesson 6.5: Multiplicity and the Fundamental Theorem

### Multiplicity of zeros

[Curriculum](lesson-5-multiplicity-and-the-fundamental-theorem/lesson.md#concepts) · [Tutor guidance](lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md#multiplicity-of-zeros)

**A — Prompt:** For $(x-1)^3(x+2)^2$, give distinct zeros, multiplicities, and crossing behavior.

**Key:** Zeros 1 and $-2$ have multiplicities 3 and 2; the graph crosses at 1 and touches at $-2$. Total multiplicity is 5.

**B — Prompt:** A polynomial is written $(x-3)^2q(x)$ with $q(3)=0$. Is the multiplicity exactly 2?

**Key:** No. Another factor vanishes there, so multiplicity is greater than 2. The remaining factor must be nonzero to certify an exact multiplicity.

**Generation checks:** Distinguish exact from lower-bound multiplicities and local sign changes from unsupported turning coordinates.

### The Fundamental Theorem of Algebra

[Curriculum](lesson-5-multiplicity-and-the-fundamental-theorem/lesson.md#concepts) · [Tutor guidance](lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md#the-fundamental-theorem-of-algebra)

**A — Prompt:** How many complex roots counting multiplicity must a degree-4 polynomial have? Must all be real?

**Key:** Exactly four counting multiplicity; they need not be real or distinct.

**B — Prompt:** Compare the root counts of $(x-2)^2$ and $x^2+9$.

**Key:** The first has one distinct real root of multiplicity 2; the second has distinct roots $\pm3i$. Both have complex-root count 2.

**Generation checks:** Include all discriminant cases without presenting the quadratic formula as a proof of the theorem for every degree.

## Lesson 6.6: Conjugate roots and polynomial construction

### Conjugate roots of real-coefficient polynomials

[Curriculum](lesson-6-conjugate-roots-and-polynomial-construction/lesson.md#concepts) · [Tutor guidance](lesson-6-conjugate-roots-and-polynomial-construction/tutor.md#conjugate-roots-of-real-coefficient-polynomials)

**A — Prompt:** A real-coefficient polynomial has root $2+3i$. What other root is forced?

**Key:** $2-3i$ with the same multiplicity; their real quadratic factor is $(x-2)^2+9=x^2-4x+13$.

**B — Prompt:** Does $p(x)=x-i$ also have root $-i$?

**Key:** No: $p(-i)=-2i$. Its coefficient is nonreal, so conjugate pairing is not forced.

**Generation checks:** Track multiplicities and state the hypothesis before adding a conjugate root.

### Constructing a polynomial from zeros and scale

[Curriculum](lesson-6-conjugate-roots-and-polynomial-construction/lesson.md#concepts) · [Tutor guidance](lesson-6-conjugate-roots-and-polynomial-construction/tutor.md#constructing-a-polynomial-from-zeros-and-scale)

**A — Prompt:** Find the least-degree real polynomial with roots 1 and $2i$ and leading coefficient 3.

**Key:** The forced partner is $-2i$, giving $3(x-1)(x^2+4)$, degree 3.

**B — Prompt:** Do roots 1 and 2 together with $p(1)=0$ fix a least-degree polynomial?

**Key:** No: $a(x-1)(x-2)$ works for every nonzero a. The extra condition repeats a known zero and supplies no scale.

**Generation checks:** Include multiplicities and incompatible normalization; do not infer uniqueness without a least-degree or fixed-degree condition.

## Lesson 6.7: End behavior and sign intervals

### End behavior from degree and leading coefficient

[Curriculum](lesson-7-end-behavior-and-sign-intervals/lesson.md#concepts) · [Tutor guidance](lesson-7-end-behavior-and-sign-intervals/tutor.md#end-behavior-from-degree-and-leading-coefficient)

**A — Prompt:** State both tails of $-2x^5+100x^2-7$.

**Key:** As x tends to positive infinity the output tends to negative infinity; as x tends to negative infinity it tends to positive infinity. The odd negative leading term dominates eventually.

**B — Prompt:** Must $x^4-1000x^2$ be positive at every positive x because both tails rise?

**Key:** No: at x=1 it is $-999$. Tail behavior concerns sufficiently large magnitude, not every finite input.

**Generation checks:** Include cancellation before identifying degree and distinguish eventual from local behavior.

### Positive and negative intervals of polynomials

[Curriculum](lesson-7-end-behavior-and-sign-intervals/lesson.md#concepts) · [Tutor guidance](lesson-7-end-behavior-and-sign-intervals/tutor.md#positive-and-negative-intervals-of-polynomials)

**A — Prompt:** Solve $(x-1)^2(x+2)<0$.

**Key:** The squared factor is positive except at 1; the product is negative exactly for $x<-2$.

**B — Prompt:** Solve $-(x-1)^2(x+2)^2\ge0$.

**Key:** The expression is nonpositive everywhere and equals zero only at $x=1,-2$, so the solution is $\{-2,1\}$.

**Generation checks:** Include isolated solutions in nonstrict inequalities and test all intervals separated by real zeros.

## Lesson 6.8: Graph synthesis and cubic transformations

### Sketching a polynomial graph from factors

[Curriculum](lesson-8-graph-synthesis-and-cubic-transformations/lesson.md#concepts) · [Tutor guidance](lesson-8-graph-synthesis-and-cubic-transformations/tutor.md#sketching-a-polynomial-graph-from-factors)

**A — Prompt:** Describe a structural sketch of $p(x)=(x+1)^2(x-2)$.

**Key:** It touches at $-1$, crosses at 2, has y-intercept $-2$, left tail down and right tail up. The degree gives at most two turning points, not their exact locations.

**B — Prompt:** Does degree 5 guarantee four turning points?

**Key:** No. The bound is at most four; $x^5$ has none. Exact extrema require more evidence than degree.

**Generation checks:** Do not invent exact turning coordinates or extra roots from a schematic sketch.

### Transformations of the cubic parent

[Curriculum](lesson-8-graph-synthesis-and-cubic-transformations/lesson.md#concepts) · [Tutor guidance](lesson-8-graph-synthesis-and-cubic-transformations/tutor.md#transformations-of-the-cubic-parent)

**A — Prompt:** Map $(1,1)$ on $x^3$ to $g(x)=-2(x-3)^3+4$.

**Key:** The image is $(4,2)$; the center is $(3,4)$, not a maximum or minimum.

**B — Prompt:** Compare $2(3x)^3$ and $54x^3$.

**Key:** They agree because cubing the inside scale contributes $3^3=27$, then the outside multiplier gives 54.

**Generation checks:** Include negative scales and equivalent parameterizations; label the cubic center as an inflection point.

## Lesson 6.9: Binomial coefficients and expansion

### Pascal's triangle and binomial coefficients

[Curriculum](lesson-9-binomial-coefficients-and-expansion/lesson.md#concepts) · [Tutor guidance](lesson-9-binomial-coefficients-and-expansion/tutor.md#pascals-triangle-and-binomial-coefficients)

**A — Prompt:** Give row 4 of Pascal's triangle when row 0 is 1.

**Key:** $1,4,6,4,1$; interior entries sum the adjacent entries in row 3.

**B — Prompt:** Explain why the coefficient choosing two second terms among four binomial factors is 6.

**Key:** There are $\binom42=6$ two-position choices; complementary choices explain the symmetric row entries.

**Generation checks:** Include boundary entries, row indexing, and the choice interpretation rather than memorized rows alone.

### The Binomial Theorem and selected coefficients

[Curriculum](lesson-9-binomial-coefficients-and-expansion/lesson.md#concepts) · [Tutor guidance](lesson-9-binomial-coefficients-and-expansion/tutor.md#the-binomial-theorem-and-selected-coefficients)

**A — Prompt:** Find the coefficient of $x^3$ in $(2x-1)^5$.

**Key:** Choose three $2x$ factors and two $-1$ factors: $\binom53 2^3(-1)^2=80$.

**B — Prompt:** Find the coefficient of $x^4$ in $(x^2+3)^4$.

**Key:** Two factors supply $x^2$ and two supply 3: $\binom42 3^2=54$.

**Generation checks:** Raise complete signed components to their powers; restrict finite binomial expansion to nonnegative integer exponents.

## Coverage planning

The A/B examples above illustrate selected cases. The following checklist identifies evidence to obtain across fresh attempts; do not infer full proficiency from one bank answer. The lesson reasoning activities are additional exposed instruction, linked through each tutor, not unseen retest questions.

| Concept | Required evidence and exceptional cases |
| --- | --- |
| [Quotient, remainder, and division identity](lesson-1-the-division-algorithm-and-linear-long-division/tutor.md#quotient-remainder-and-division-identity) | Require quotient/remainder roles, the degree condition, all-coefficient reconstruction and original quotient restrictions. A correct quotient without its remainder is incomplete when division is not exact. |
| [Long division by a linear polynomial](lesson-1-the-division-algorithm-and-linear-long-division/tutor.md#long-division-by-a-linear-polynomial) | Assess aligned representation, justified successive quotient terms, full subtraction, termination and p=dq+r verification. A synthetic shortcut does not demonstrate long division when that method is the target. |
| [Long division by a quadratic polynomial](lesson-2-quadratic-divisors-and-synthetic-division/tutor.md#long-division-by-a-quadratic-polynomial) | Require the full algorithm or a justified equivalent polynomial calculation, proper remainder degree and all-coefficient reconstruction. Track original exclusions when a rational quotient is requested. |
| [Synthetic division by $x-c$](lesson-2-quadratic-divisors-and-synthetic-division/tutor.md#synthetic-division-by-x-c) | Assess correct c, complete coefficient positions, quotient degree, remainder and reconstruction. Do not apply the ordinary synthetic procedure to a quadratic divisor. |
| [The Remainder Theorem](lesson-3-remainders-and-factors/tutor.md#the-remainder-theorem) | Require correct divisor root, evaluation, identity-based explanation and a distinction between remainder and quotient. Do not infer a quadratic remainder from one function value. |
| [The Factor Theorem](lesson-3-remainders-and-factors/tutor.md#the-factor-theorem) | Assess both factor-zero implications, correct signs, parameter solution and independent verification. A factor claim requires exact zero rather than a rounded near-zero value. |
| [The Rational Root Theorem as a search method](lesson-4-finding-and-solving-higher-degree-factors/tutor.md#the-rational-root-theorem-as-a-search-method) | Require the theorem's integer-coefficient hypothesis, both signs, reduced fractions, exact testing and rational-only conclusions. Keep residual factors for further solving. |
| [Solving cubic and quartic equations by degree reduction](lesson-4-finding-and-solving-higher-degree-factors/tutor.md#solving-cubic-and-quartic-equations-by-degree-reduction) | Require justified degree reduction, every residual solution, restored variables, original checks and completeness with multiplicity. Do not count a candidate list as a solution set. |
| [Multiplicity of zeros](lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md#multiplicity-of-zeros) | Assess exact multiplicity, total versus distinct counts, odd/even sign behavior and limits on what local factors prove about global extrema. |
| [The Fundamental Theorem of Algebra](lesson-5-multiplicity-and-the-fundamental-theorem/tutor.md#the-fundamental-theorem-of-algebra) | Require the number system, nonconstant hypothesis, multiplicity count and valid use in completeness reasoning. Do not present examples as a proof of the full theorem. |
| [Conjugate roots of real-coefficient polynomials](lesson-6-conjugate-roots-and-polynomial-construction/tutor.md#conjugate-roots-of-real-coefficient-polynomials) | Assess the hypothesis, exact partner/multiplicity and product reconstruction. Do not force a partner when the coefficients are allowed to be complex. |
| [Constructing a polynomial from zeros and scale](lesson-6-conjugate-roots-and-polynomial-construction/tutor.md#constructing-a-polynomial-from-zeros-and-scale) | Require coefficient-system consistency, least/fixed-degree interpretation, correct factors, justified scale and all-data checks. Report nonuniqueness when normalization or degree information is insufficient. |
| [End behavior from degree and leading coefficient](lesson-7-end-behavior-and-sign-intervals/tutor.md#end-behavior-from-degree-and-leading-coefficient) | Assess both tails, actual degree and coefficient, and the difference between eventual and local conclusions. A graph window alone cannot establish infinite-end behavior. |
| [Positive and negative intervals of polynomials](lesson-7-end-behavior-and-sign-intervals/tutor.md#positive-and-negative-intervals-of-polynomials) | Require a complete partition, sign justification, endpoint membership and a solution-set description verified in the original polynomial. Preserve the distinction between zeros and negative/positive intervals. |
| [Sketching a polynomial graph from factors](lesson-8-graph-synthesis-and-cubic-transformations/tutor.md#sketching-a-polynomial-graph-from-factors) | Assess consistency across all known attributes and honesty about unlocated extrema. When the curriculum requires actual graphing verification, collect the actual artifact or observation separately. |
| [Transformations of the cubic parent](lesson-8-graph-synthesis-and-cubic-transformations/tutor.md#transformations-of-the-cubic-parent) | Require valid point mappings, center and orientation, equivalence checks and the distinction between inflection and extrema. Do not claim unique recovery of redundant parameters. |
| [Pascal's triangle and binomial coefficients](lesson-9-binomial-coefficients-and-expansion/tutor.md#pascals-triangle-and-binomial-coefficients) | Assess indexing, recurrence, boundary values, symmetry and a choice-based explanation. A memorized row without its selection meaning does not demonstrate the full concept. |
| [The Binomial Theorem and selected coefficients](lesson-9-binomial-coefficients-and-expansion/tutor.md#the-binomial-theorem-and-selected-coefficients) | Require the selection count, component powers, signs and correct coefficient for the requested exponent. Distinguish a coefficient from its attached monomial. |

## Annotated response calibration

| Prompt and actual response | Evidence and next action |
| --- | --- |
| Divide $x^2+1$ by $x-1$: “$q=x+1$.” | Correct quotient but omitted remainder $2$; requested division evidence is incomplete. Ask for reconstruction without supplying the residual. |
| Verify the quotient by expanding $(x-1)(x+1)+2$. | Valid full verification. If long division itself is requested, this does not demonstrate its successive steps; preserve the valid check. |
| Solve $(x-2)(x^2+1)=0$ over the complex numbers: “2.” | Correct real root, missing $\pm i$. Preserve it and target the unresolved factor rather than erase all evidence. |
| After the tutor supplies the factor $x-2$ of $x^3-2x^2+x-2$, learner divides and solves the quadratic. | Assisted factor discovery with useful residual-solving evidence. Reassess discovery independently later. |

Correct answers without explanation establish results only. If reasoning was never requested, collect it neutrally; if explicitly requested but omitted, record incomplete required evidence. Self-correction before mathematical feedback stays independent; completion after a mathematical cue is assisted.
