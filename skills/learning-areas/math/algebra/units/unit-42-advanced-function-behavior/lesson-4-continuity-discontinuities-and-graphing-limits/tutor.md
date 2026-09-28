# Tutor: Lesson 42.4: Continuity, discontinuities, and graphing limits

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check one-sided limits and domain endpoints from lesson 3; repair confusion between point values and approach values before classifying discontinuities.

Within this unit, revisit [the previous lesson](../lesson-3-one-sided-and-end-behavior/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Continuity, repairs and actual display limitations; defer differentiability and graph smoothness as separate criteria.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Continuity and removable discontinuities:** Check the point is in the intended domain, its assigned value exists and the appropriate nearby limit agrees.

- **Jump, infinite, and oscillatory discontinuities:** Select each piecewise formula on its own side and compute its finite limit or failure mode.

- **Limitations of numerical graphs:** Inspect exact domains and factorizations before plotting.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A graphing screen draws a connector across a jump, and a learner calls the function continuous. Ask for two one-sided expressions that can overrule that picture.

**Agent key and discussion:** Evaluate the given branch valid just left and the one valid just right. Unequal finite limits establish a jump regardless of a drawn connecting segment; changing one point cannot repair it. Do not invent numerical limits without the actual relation.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Continuity and removable discontinuities

Curriculum reference: **Continuity and removable discontinuities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A hole has a common nearby limit 7. Which single value repairs continuity there?
- **Diagnostic key:** Assign 7 at the missing input, creating the continuous extension.
- **Worked-example prompt:** Define f(x)=(x²-4)/(x-2) for x≠2 and f(2)=9. Is it continuous at 2? Repair it.
- **Worked model and reasoning:** Nearby expression is x+2 with limit 4, which differs from 9. Set f(2)=4 to repair the removable discontinuity. That changes the assigned point value; the original function was not continuous there.
- **First hint:** What value do both sides approach independently of the assigned value?

#### Learn

- Check the point is in the intended domain, its assigned value exists and the appropriate nearby limit agrees.
- For canceled factors find the common nearby value without changing the original domain silently.
- At endpoints use one-sided continuity.
- Name the repaired function separately when adding an input or replacing a value.

#### Practice progression

Diagnose existing continuity, holes and mismatched point values, compute repairs and distinguish original functions from their extensions.

**Further variation and generation checks:** Include holes, mismatched values and one-sided endpoints; distinguish original domain from a repaired extension.

#### Misconceptions and responsive feedback

If any arbitrary value is used to fill a hole, compare it with both approaching outputs. If cancellation is said to prove the original is defined there, return to its denominator.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Check existence of the point value and matching nearby limit, calculate the needed repair value, and distinguish an extended function from its originally restricted version.

**Task range to sample:** Include holes, mismatched values and one-sided endpoints; distinguish original domain from a repaired extension.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Jump, infinite, and oscillatory discontinuities

Curriculum reference: **Jump, infinite, and oscillatory discontinuities** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can changing the value at a jump make its unequal one-sided limits agree?
- **Diagnostic key:** No; changing one point leaves both neighboring branches unchanged.
- **Worked-example prompt:** A piecewise function equals x+1 for x<0 and 2x+4 for x≥0. Can changing its value at zero make it continuous?
- **Worked model and reasoning:** Left limit 1, right limit 4, so it has a jump. No single value can match both. Infinite and oscillatory discontinuities similarly cannot be repaired by changing one point.
- **First hint:** Which branch describes inputs just to each side of the boundary?

#### Learn

- Select each piecewise formula on its own side and compute its finite limit or failure mode.
- Compare jump, infinite and oscillatory cases, explaining why no single point assignment fixes their nearby behavior.
- Distinguish a graph's drawn connector from a legitimate function branch.

#### Practice progression

Classify jumps, one/both-sided poles and oscillation from formulas and graphs, state each side separately and justify nonremovability.

**Further variation and generation checks:** Include jump/infinite/oscillatory cases with independent side analysis and reasons a one-point repair fails.

#### Misconceptions and responsive feedback

If the branch containing the endpoint is used for both sides, mark sample inputs just left/right and evaluate their actual conditions.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Use the formula or graph branch belonging to each side, state the finite limit or failure mode separately, and explain why assigning a single point value cannot repair the mismatch.

**Task range to sample:** Include jump/infinite/oscillatory cases with independent side analysis and reasons a one-point repair fails.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Limitations of numerical graphs

Curriculum reference: **Limitations of numerical graphs** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Can a smooth-looking calculator line certify there is no hole?
- **Diagnostic key:** No; a single excluded input may lie between sampled pixels.
- **Worked-example prompt:** A graphing tool seems to draw (x²-1)/(x-1) as an unbroken line. What exact evidence corrects the display?
- **Worked model and reasoning:** Original denominator excludes x=1, while cancellation yields x+1 only elsewhere. There is a hole at (1,2). A sampled display can miss one point; inspect domain and factors and compare one-sided values.
- **First hint:** Does plotting software necessarily sample the excluded input?

#### Learn

- Inspect exact domains and factorizations before plotting.
- Predict features a finite-resolution display might miss, then change window, sampling interval and one-sided inputs deliberately.
- Compare actual tool output with the algebra and explain any falsely connected discontinuity or hidden branch.
- Do not report a plot that was not generated or inspected.

#### Practice progression

Investigate holes, narrow jumps, poles and oscillation with actual displays and exact corroboration; retain missing technology evidence honestly.

**Further variation and generation checks:** Use holes, narrow jumps, rapid oscillation and window-hidden asymptotes; ask students to vary resolution and corroborate with algebra rather than trust pixels.

#### Misconceptions and responsive feedback

If zooming seems to remove a discontinuity, return to the defining expression. If many samples are treated as a proof, contrast an excluded point that none of them tested.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify features a display can miss or falsely connect, choose informative windows or sample inputs, and support the final classification with the defining relation rather than the screen alone.

**Task range to sample:** Use holes, narrow jumps, rapid oscillation and window-hidden asymptotes; ask students to vary resolution and corroborate with algebra rather than trust pixels.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Compare three separate facts before choosing a repair

For $f(x)=x+1$ when $x<0$ and $f(x)=2x+c$ when $x\ge0$, the left limit is 1, right limit is $c$, and $f(0)=c$. Continuity at zero therefore requires $c=1$. If instead both nearby sides equal $x+1$ but $f(0)=5$, the common limit remains 1 and only the assigned value needs changing. Changing a point cannot repair the original piecewise example when $c=4$, because an entire right branch approaches 4.

If the learner reads the branch containing zero for both limits, ask which formula applies at $-0.01$. Then supply the two branch conditions; finally evaluate one side and leave the other. Fade with a three-line piecewise function whose point value is a separate line. During a display investigation record actual input, window, and observation; a predicted connector or hidden hole is a hypothesis until inspected, and even an inspected display needs algebraic corroboration.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
