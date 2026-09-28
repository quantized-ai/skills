# Tutor: Lesson 39.2: Matrix arithmetic and products

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check dimensions, signed arithmetic and data labels; ask for the output shape before any row-column computation.

Within this unit, revisit [the previous lesson](../lesson-1-matrices-as-data-representations/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Standard row-column multiplication, not elementwise array products; defer inverses until lesson 4.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Entrywise matrix arithmetic:** Check equal dimensions before addition/subtraction.

- **Row-column multiplication:** Write input dimensions before numbers and identify the shared inner index.

- **Contextual matrix products:** Name outer indices as the requested output relationship and the shared index as the quantity being summed over.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Let A=[1 2] and B=[3;4]. Compare AB and BA and explain what this says about order.

**Agent key and discussion:** AB=[11] is 1×1. BA=[[3,6],[4,8]] is 2×2. Both are defined but have different shapes, so reversing order is not a valid scalar-style simplification.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Entrywise matrix arithmetic

Curriculum reference: **Entrywise matrix arithmetic** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does multiplying a 2×3 matrix by scalar 4 make it 8×12?
- **Diagnostic key:** No; it remains 2×3 and every entry is scaled.
- **Worked-example prompt:** Compute 3A-B for A=[[1,-2],[0,4]], B=[[2,1],[-3,5]].
- **Worked model and reasoning:** Result [[1,-7],[3,7]]. A 2-by-2 plus a 2-by-3 is undefined; scalar multiplication never changes dimensions.
- **First hint:** Apply the scalar to every entry before subtracting corresponding entries.

#### Learn

- Check equal dimensions before addition/subtraction.
- Work one corresponding entry explicitly, then compute the array preserving row/column order.
- Distribute a scalar over every entry, including zeros and negatives.
- Verify subtraction by adding the second matrix back.

#### Practice progression

Begin with same-size positive entries, add negative/scalar combinations, then reject undefined sums and verify inverse arithmetic.

**Further variation and generation checks:** Mix sums/differences/scalars, negative entries and incompatible sizes; distinguish entrywise arithmetic from multiplication.

#### Misconceptions and responsive feedback

If row sums replace corresponding entries, point to the output cell whose data must match. If only diagonal entries are scaled, test an off-diagonal value.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Combine corresponding entries without changing dimensions, scale all entries, and explicitly reject sums and differences with unequal dimensions.

**Task range to sample:** Mix sums/differences/scalars, negative entries and incompatible sizes; distinguish entrywise arithmetic from multiplication.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Row-column multiplication

Curriculum reference: **Row-column multiplication** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** If A is 2×3 and B is 3×4, what size is AB, and is BA defined?
- **Diagnostic key:** AB is 2×4; BA is undefined because 4≠2.
- **Worked-example prompt:** Multiply A=[[1,2,0],[-1,3,4]] by B=[[2,1],[0,-2],[5,3]].
- **Worked model and reasoning:** AB=[[2,-3],[18,5]], a 2-by-2 matrix. For example (2,2) is $(-1)(1)+3(-2)+4(3)=5$. BA is also defined but is 3-by-3 and need not match.
- **First hint:** Match an entire row of the first matrix with a column of the second.

#### Learn

- Write input dimensions before numbers and identify the shared inner index.
- Compute a selected cell as a full row-column sum, then fill the remaining cells.
- Interpret a vector as one column.
- Check reversed order independently; never infer its existence or value from AB.

#### Practice progression

Start with matrix-vector products, then rectangular products and both-order comparisons, verifying every entry and shape.

**Further variation and generation checks:** Include matrix-vector products and cases where only one order exists; verify every entry and output size.

#### Misconceptions and responsive feedback

If entrywise products are used, choose nonsquare factors where that operation cannot fit the required output. If a sum term is missing, count the inner dimension's contributions.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State both input dimensions and the output dimension, pair corresponding row and column entries correctly, and assess reversed-order compatibility separately.

**Task range to sample:** Include matrix-vector products and cases where only one order exists; verify every entry and output size.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Contextual matrix products

Curriculum reference: **Contextual matrix products** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A quantities table has product columns ordered B,A but the price vector is ordered A,B. Is multiplication trustworthy because dimensions match?
- **Diagnostic key:** No; reorder labels first.
- **Worked-example prompt:** A shop sells product quantities Q=[[3,2],[1,5]] by day and prices p=[[4],[7]]. Interpret Qp.
- **Worked model and reasoning:** Qp=[[26],[39]], the revenue for each day. Products must align product columns with price rows; quantities times currency/item produce currency.
- **First hint:** What index is being summed over in each revenue?

#### Learn

- Name outer indices as the requested output relationship and the shared index as the quantity being summed over.
- Derive one product entry in context before writing AB.
- Track units in each summand and confirm addition is meaningful.
- For network powers state edge direction and that products count permitted intermediate paths.

#### Practice progression

Use sales/resource models, then relational path counts and mismatched category orders; require a verbal interpretation of at least one computed entry.

**Further variation and generation checks:** Include resource-use and network path products with explicit intermediate labels; reject dimensionally compatible but semantically misaligned data.

#### Misconceptions and responsive feedback

If the order is reversed, ask whether its outer labels answer the original question. If mixed units occur within a sum, convert or redesign the model.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Explain the intermediate and outer indices, justify the order of multiplication, and interpret entries and units of the resulting matrix in context.

**Task range to sample:** Include resource-use and network path products with explicit intermediate labels; reject dimensionally compatible but semantically misaligned data.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
