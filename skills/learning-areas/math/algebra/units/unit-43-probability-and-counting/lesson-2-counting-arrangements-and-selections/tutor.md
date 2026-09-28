# Tutor: Lesson 43.2: Counting arrangements and selections

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check organized lists and multiplication/addition of counts; determine order and replacement before introducing factorial notation.

Within this unit, revisit [the previous lesson](../lesson-1-sample-spaces-and-event-algebra/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Finite discrete counting under explicit restrictions; defer advanced generating functions and counting with unstated sampling mechanisms.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Addition and multiplication principles:** Build an organized list or tree before compressing its stages into a product.

- **Permutations and combinations:** Identify the actual elementary outcome, order sensitivity and replacement rule before choosing a formula.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A probability uses 12 ordered favorable pairs divided by 6 unordered total pairs and exceeds one. Diagnose the model before recalculating.

**Agent key and discussion:** Numerator and denominator use incompatible elementary outcomes. Either count both ordered or both unordered, preserving any event restrictions; a value above one is a warning, not something to cap at one.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Addition and multiplication principles

Curriculum reference: **Addition and multiplication principles** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A password has two positions with 4 choices each. If repetition is forbidden, is the count 16?
- **Diagnostic key:** No; after the first choice only three remain, giving 12.
- **Worked-example prompt:** How many two-digit codes use digits 0–5 without repetition, with first digit nonzero?
- **Worked model and reasoning:** First position has 5 choices, second 5 remaining choices including zero: 25. An organized tree confirms each permitted code is counted once.
- **First hint:** After fixing one valid first digit, which second choices remain?

#### Learn

- Build an organized list or tree before compressing its stages into a product.
- Define disjoint alternative cases before adding counts.
- Track restrictions after each choice; when choices vary with earlier selections, split into cases rather than multiply one assumed fixed count.
- Verify small cases by enumeration.

#### Practice progression

Start with unrestricted products, then no-repetition/leading-zero restrictions and case sums, finishing with an independently enumerated small check.

**Further variation and generation checks:** Include restricted products, disjoint cases, overlap corrections and changing stage choices; distinguish code strings from ordinary numbers.

#### Misconceptions and responsive feedback

If overlapping cases are added, identify an outcome counted twice. If a first-position restriction is forgotten, mark its allowed choices separately from later positions.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify disjoint cases and stage choices, preserve restrictions, and count every permitted outcome exactly once.

**Task range to sample:** Include restricted products, disjoint cases, overlap corrections and changing stage choices; distinguish code strings from ordinary numbers.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Permutations and combinations

Curriculum reference: **Permutations and combinations** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Does selecting two people as an unordered team differ from choosing president and secretary?
- **Diagnostic key:** Yes; roles make order matter.
- **Worked-example prompt:** From seven distinct volunteers, count an unordered team of three and an ordered captain/deputy/secretary selection.
- **Worked model and reasoning:** Team count $\binom73=35$; distinct roles $7\cdot6\cdot5=210$. A team appears 3! times among role assignments. Zero-person selection counts as one; repeated-symbol arrangements need multiplicity correction.
- **First hint:** Does exchanging two selected people change the outcome?

#### Learn

- Identify the actual elementary outcome, order sensitivity and replacement rule before choosing a formula.
- Derive ordered selection as a descending product and divide by r! only when all permutations represent the same team.
- Treat repeated symbols with multiplicity factorials.
- Use the identical outcome convention in favorable and total probability counts, including empty selections.

#### Practice progression

Contrast teams/roles, repeated symbols and replacement, then construct probability ratios and handle r=0 or impossible selection sizes explicitly.

**Further variation and generation checks:** Cover replacement/no replacement, repeated symbols and probability ratios using matching numerator/denominator conventions.

#### Misconceptions and responsive feedback

If numerator is ordered and denominator unordered, pair a physical outcome with its count in both lists. If replacement is allowed, do not use a shrinking-choice factorial formula.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- State whether order and replacement matter, handle zero-size selections, and use a denominator with the same outcome convention as the numerator.

**Task range to sample:** Cover replacement/no replacement, repeated symbols and probability ratios using matching numerator/denominator conventions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
