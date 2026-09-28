# Tutor: Lesson 39.5: Matrix transformations and area

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check vector basis representation and matrix products/inverses; predict a simple point image before trusting a transformation graph.

Within this unit, revisit [the previous lesson](../lesson-4-determinants-inverses-and-linear-systems/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Origin-fixing planar linear maps; defer homogeneous-coordinate translations and nonlinear maps.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Matrices as vector transformations:** Express a general vector as x e₁+y e₂.

- **Composition and inverse transformations:** Track a chosen non-symmetric point or figure after each stage, then compare with the proposed product.

- **Determinant and area scaling:** Interpret columns as the spanning edges of the image unit square.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A map reflects across the x-axis and then rotates 90° counterclockwise. Compare the reverse order on (1,2).

**Agent key and discussion:** Reflection then rotation gives (1,−2)→(2,1); rotation then reflection gives (−2,1)→(−2,−1). Different outputs demonstrate noncommutativity; the combined product must respect the actual order.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Matrices as vector transformations

Curriculum reference: **Matrices as vector transformations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A map sends zero to (1,0). Can it be represented by a 2×2 linear matrix?
- **Diagnostic key:** No; every such matrix sends zero to zero.
- **Worked-example prompt:** A linear map sends e₁ to (2,1) and e₂ to (-1,3). Find its matrix and image of (4,-2).
- **Worked model and reasoning:** Images of coordinate unit vectors are columns: [[2,-1],[1,3]]. Multiplication gives (10,-2). An affine translation cannot be represented by a 2-by-2 linear map alone because zero must stay zero.
- **First hint:** Are the supplied images columns or rows?

#### Learn

- Express a general vector as x e₁+y e₂.
- Linearity gives xT(e₁)+yT(e₂), so the basis images form columns.
- Predict a rotation/reflection/shear on the basis before constructing its matrix and test a nonbasis point.
- Separate an affine translation from origin-fixing linear maps.

#### Practice progression

Map vectors using a supplied matrix, recover matrices from basis effects, then construct rotations/reflections/scalings/shears and reject translations in this representation.

**Further variation and generation checks:** Include rotations, reflections, shears and scalings; construct from basis images and verify with a nonbasis vector.

#### Misconceptions and responsive feedback

If images are placed in rows, multiply by e₁ and e₂ to test the claim. If a translation is forced into 2×2 form, evaluate it at zero.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Place unit-vector images in columns, map general vectors consistently, and distinguish origin-preserving linear maps from translations.

**Task range to sample:** Include rotations, reflections, shears and scalings; construct from basis images and verify with a nonbasis vector.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Composition and inverse transformations

Curriculum reference: **Composition and inverse transformations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** To apply B first and A second, is the combined matrix BA?
- **Diagnostic key:** No; A(Bv)=(AB)v.
- **Worked-example prompt:** Apply a 90-degree counterclockwise rotation R and then x-stretch S by factor 2 to (1,2). Which product represents this?
- **Worked model and reasoning:** R(1,2)=(-2,1), then S gives (-4,1); combined matrix SR=[[0,-2],[1,0]]. Reversing order gives RS(1,2)=(-2,2). Undo with $R^{-1}S^{-1}$ in reverse order.
- **First hint:** Which operation acts first on the rightmost vector?

#### Learn

- Track a chosen non-symmetric point or figure after each stage, then compare with the proposed product.
- Derive the rightmost-first convention from nested application.
- To undo, reverse the action order and use each inverse; verify (AB)⁻¹=B⁻¹A⁻¹ by multiplication or mapped points.

#### Practice progression

Compare two noncommuting geometric actions, compose three compatible maps, then reverse invertible compositions and explain why collapse cannot be undone uniquely.

**Further variation and generation checks:** Compare composition orders using a nonsymmetric figure and invertible/noninvertible maps; require inverse order reasoning.

#### Misconceptions and responsive feedback

If the reversed order happens to agree on one point, choose an independent second point before declaring maps equal. If a singular map is assigned an inverse, identify the collapsed information.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Match matrix order to application order, verify reversal on transformed points, and explain a geometric instance where reversing the order changes the image.

**Task range to sample:** Compare composition orders using a nonsymmetric figure and invertible/noninvertible maps; require inverse order reasoning.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Determinant and area scaling

Curriculum reference: **Determinant and area scaling** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If det A=−3 and original area is 7, is image area −21?
- **Diagnostic key:** No; area is 21 and orientation reverses.
- **Worked-example prompt:** For T=[[2,1],[0,-3]], find the image area of a triangle of area 5 and describe orientation.
- **Worked model and reasoning:** Determinant -6 gives area $|-6|\cdot5=30$ and orientation reversal. A determinant-zero map collapses planar area to zero; a negative determinant never means negative geometric area.
- **First hint:** Separate the determinant's magnitude from its sign.

#### Learn

- Interpret columns as the spanning edges of the image unit square.
- Compute their signed parallelogram area, then use dissection/scaling to apply its magnitude to other planar figures.
- Separate sign as orientation information.
- Connect a zero determinant to dependent columns and a line/point image with no inverse.

#### Practice progression

Compute transformed triangle/polygon areas, compare orientation, analyze shears and compositions, then explain zero-area collapse from column geometry.

**Further variation and generation checks:** Include shears, zero determinants and composite maps; distinguish signed orientation from nonnegative area.

#### Misconceptions and responsive feedback

If a large matrix entry alone is called the area factor, compare a shear of determinant one. If zero determinant is called no transformation, show the nontrivial line image.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use absolute determinant for nonnegative area, distinguish orientation from size, and connect zero determinant to dependent column images and noninvertibility.

**Task range to sample:** Include shears, zero determinants and composite maps; distinguish signed orientation from nonnegative area.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Basis images explain the columns and the area

A shear sends $e_1$ to $(1,0)$ and $e_2$ to $(2,1)$, so its matrix is $H=\begin{pmatrix}1&2\\0&1\end{pmatrix}$. For $(x,y)=xe_1+ye_2$, its image is $(x+2y,y)$. The image unit square is a parallelogram with base 1 and height 1, so its area is unchanged even though one column has length $\sqrt5$; $\det H=1$ agrees.

If the basis images were entered as rows, ask the learner to multiply their proposed matrix by $e_1$. Next supply the expansion $xe_1+ye_2$; finally show $xT(e_1)+yT(e_2)$ and leave matrix assembly. Fade by giving only two basis-image arrows, then request the matrix and an independent point check. For composition, use a nonsymmetric point to distinguish $RH$ from $HR$; a coincident output on zero proves nothing because every linear map fixes zero.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
