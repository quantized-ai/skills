# Tutor: Lesson 39.1: Matrices as data representations

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check reading two-way tables, category ordering and units; use small data before large technology-managed arrays.

## Teaching boundaries

Data representation and entrywise modeling; defer matrix products until lesson 2.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Matrix dimensions and labeled entries:** Build an array from explicitly ordered row and column categories and attach units to entries.

- **Data manipulation by matrices:** Align row/column labels before entrywise arithmetic.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** Two inventory matrices have identical dimensions but product columns reversed. Ask whether their direct sum represents combined inventory and how to repair it.

**Agent key and discussion:** It does not until one column order is aligned. Reorder the values with their labels, then add matching quantities; dimension agreement is necessary but not sufficient for contextual meaning.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Matrix dimensions and labeled entries

Curriculum reference: **Matrix dimensions and labeled entries** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** In a 3×2 matrix, can entry a₂₃ exist?
- **Diagnostic key:** No; there are only two columns.
- **Worked-example prompt:** Rows represent shops A,B and columns pens,notebooks. Interpret M=[[7,2],[4,9]] and its dimensions.
- **Worked model and reasoning:** M is 2-by-2; entry (2,1)=4 means shop B has 4 pens. Row/column labels determine meaning even for a square matrix. Transposing changes the indexing convention.
- **First hint:** Read the row label first and then the column label.

#### Learn

- Build an array from explicitly ordered row and column categories and attach units to entries.
- Read entries in both directions between context and array.
- Reorder one category and update the corresponding entries rather than silently relabeling.
- For a larger collection actually use available table/matrix technology and inspect representative entries after import.

#### Practice progression

Start with small labeled tables, then nonsquare payoff/network matrices and technology-managed larger data with label-order checks.

**Further variation and generation checks:** Use nonsquare data, payoffs and explicitly directed networks; label units and adjacency conventions and use technology for larger tables.

#### Misconceptions and responsive feedback

If dimensions are reversed, count horizontal rows and entries per row. In directed networks, ask whether a row denotes source or destination before interpreting an edge entry.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify entries by row and column, distinguish row count from column count, and explain the quantitative or relational meaning of the matrix.
- Organize larger collections with technology and confirm that entry meanings and category order remain correct.

**Task range to sample:** Use nonsquare data, payoffs and explicitly directed networks; label units and adjacency conventions and use technology for larger tables.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Data manipulation by matrices

Curriculum reference: **Data manipulation by matrices** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can two 2×2 data matrices always be added meaningfully?
- **Diagnostic key:** No; matching dimensions alone do not ensure matching categories or units.
- **Worked-example prompt:** Two days' item-count matrices are A=[[2,5],[3,1]] and B=[[4,1],[0,6]] with matching labels. Interpret A+B and 2A.
- **Worked model and reasoning:** Sum [[6,6],[3,7]] gives combined counts; 2A=[[4,10],[6,2]] doubles each count under that model. Entrywise combination is valid only when labels and units agree.
- **First hint:** Do corresponding positions describe the same kind of quantity?

#### Learn

- Align row/column labels before entrywise arithmetic.
- Explain what a sum, difference or scalar means for a representative entry, then apply it uniformly.
- For unit conversion verify the multiplier changes units consistently.
- Recheck interpretation after computation rather than treating any shape-compatible array as a sensible model.

#### Practice progression

Combine labeled datasets, compare differences, apply common rates/conversions, then detect equal-size but semantically incompatible matrices.

**Further variation and generation checks:** Include label-order mismatches and unit conversions, not just equal dimensions; explain each resulting entry contextually.

#### Misconceptions and responsive feedback

If unlike categories are combined, reorder or reject the operation. If a percentage change is confused with its multiplier, distinguish 20% of data from a 20% increase.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check matching dimensions and categories, apply the scalar to every entry, and explain any changed units or contextual meaning.

**Task range to sample:** Include label-order mismatches and unit conversions, not just equal dimensions; explain each resulting entry contextually.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
