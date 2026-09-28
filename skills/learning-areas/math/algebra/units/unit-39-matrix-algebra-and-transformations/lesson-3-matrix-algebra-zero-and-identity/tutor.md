# Tutor: Lesson 39.3: Matrix algebra, zero, and identity

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check compatible products from lesson 2; choose small counterexamples rather than relying only on verbal warnings.

Within this unit, revisit [the previous lesson](../lesson-2-matrix-arithmetic-and-products/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Compatible algebra laws, zero and identity; do not assume scalar zero-product or cancellation laws.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Matrix algebra laws:** Verify dimension-compatible associative regrouping with one example and explain the repeated-index sum.

- **Zero and identity matrices:** Construct zeros and identities with explicit dimensions and verify left/right identity sizes separately.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A=[[1,0],[0,0]] and B=[[0,0],[0,1]] are nonzero. Compute AB and explain whether AB=0 forces a zero factor.

**Agent key and discussion:** AB is zero because A removes the only nonzero component produced by B. It refutes the scalar zero-product inference for matrices and warns against cancellation without an inverse.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Matrix algebra laws

Curriculum reference: **Matrix algebra laws** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does (AB)C=A(BC) allow changing ABC to ACB?
- **Diagnostic key:** No; regrouping preserves order, reordering changes factors.
- **Worked-example prompt:** Show AB≠BA for A=[[1,1],[0,1]], B=[[1,0],[1,1]], and describe valid laws.
- **Worked model and reasoning:** AB=[[2,1],[1,1]], BA=[[1,1],[1,2]]. Compatible products are associative and distribute over sums; commutativity is not a general law. Different multiplication order changes the transformation.
- **First hint:** Does regrouping operations also permit reversing their order?

#### Learn

- Verify dimension-compatible associative regrouping with one example and explain the repeated-index sum.
- Expand A(B+C) and (A+B)C while preserving side order.
- Compute a noncommuting square pair in both orders and interpret why shared shape is insufficient.
- State which side multiplies an equation before using it.

#### Practice progression

Check laws with compatible and incompatible shapes, expand ordered expressions, produce a noncommuting counterexample and explain when additional hypotheses permit commutation.

**Further variation and generation checks:** Include symbolic dimension checks for associativity/distribution and numeric counterexamples; do not treat one commuting pair as a universal proof.

#### Misconceptions and responsive feedback

If a scalar cancellation habit reorders matrices, compare the already computed AB and BA. If an expression is formally expanded despite undefined sums, perform dimensions first.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Give a valid noncommuting pair, preserve factor order in expansions and regroupings, and verify all intermediate dimensions.

**Task range to sample:** Include symbolic dimension checks for associativity/distribution and numeric counterexamples; do not treat one commuting pair as a universal proof.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Zero and identity matrices

Curriculum reference: **Zero and identity matrices** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can nonzero matrices multiply to the zero matrix?
- **Diagnostic key:** Yes; one matrix may send the other matrix's column images to zero.
- **Worked-example prompt:** Let A=[[1,0],[0,0]], B=[[0,0],[0,1]]. What does AB show?
- **Worked model and reasoning:** AB is the 2-by-2 zero matrix though neither factor is zero. Zero-product inference and cancellation fail without extra hypotheses. For any m-by-n M, $I_mM=M=MI_n$.
- **First hint:** Which vectors does A send to zero, and are those the columns of B?

#### Learn

- Construct zeros and identities with explicit dimensions and verify left/right identity sizes separately.
- Compute a small nonzero-factor zero product, then use it to refute unrestricted cancellation.
- Explain that multiplying by an appropriate inverse restores valid cancellation only on the side where that inverse operates.

#### Practice progression

Apply identities to rectangular matrices, distinguish zero sum/product behavior, then analyze cancellation claims with and without inverses.

**Further variation and generation checks:** Include identity sizes, zero products, singular cancellation counterexamples and rectangular matrices; require an inverse before cancelling a matrix factor.

#### Misconceptions and responsive feedback

If AB=AC implies B=C without invertibility, subtract to A(B−C)=0 and use the counterexample. If one identity size is used on both sides of a rectangular matrix, check product dimensions.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Select the identity size separately on each side, compute zero products correctly, and support any claim about cancellation or nonzero factors with a valid argument or counterexample.

**Task range to sample:** Include identity sizes, zero products, singular cancellation counterexamples and rectangular matrices; require an inverse before cancelling a matrix factor.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## A concrete cancellation failure

Let $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B=I_2$, and $C=\begin{pmatrix}1&0\\0&2\end{pmatrix}$. Both $AB$ and $AC$ equal $A$, yet $B\ne C$. Left multiplication by $A$ discards every second-row contribution; equality after discarding information does not recover equality before it. By contrast, if $A^{-1}$ exists, left multiplication of $AB=AC$ gives $B=C$ without changing factor order.

If the learner cancels $A$, ask them to compare the lower-right entries of $B,C$. Next supply one product $AB$ and ask for $AC$; finally calculate the second row of $AC$ and leave the conclusion. Fade by requesting a different pair $B,C$ with the same first row and different second rows, then ask why any such pair works. Distinguish this general explanation from simply memorizing one counterexample.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
