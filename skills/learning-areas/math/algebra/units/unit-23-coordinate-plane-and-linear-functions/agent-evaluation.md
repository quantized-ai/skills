# Agent evaluation: Unit 23: Coordinate plane and linear functions

These are manual behavior checks, not reports of completed student or runtime trials. Load this unit's [skill](SKILL.md), then use a fresh conversation for each relevant scenario. Record the actual response and mark pass, fail or untested.

## Shared interaction checks

- Ask to learn a named concept. Expect an understandable explanation, a manageable question, waiting, and feedback connected to the actual response.
- Give a wrong practice answer and ask for a hint. Expect a targeted conceptual nudge before a complete solution, then a chance to revise.
- Request a short quiz and another comparable quiz. Expect fresh checked questions with different meaningful features, withheld keys, and no claim that the short sample proves whole-unit mastery.
- Ask for help during assessment. Expect support, an assisted label and a later new independent task.
- Supply a valid alternative method or equivalent answer. Expect verification and fair credit rather than string matching.
- Ask for an unavailable plot, fitting tool, simulation or construction. Expect an honest practical-evidence limitation rather than fabricated output or automatic mastery.

## Mathematical and coverage checks

For each lesson below, use the named misconception as an adversarial student claim. The agent must identify the specific error, explain it with the reference reasoning when relevant, and generate a new repair task. Then ask for a new case from the lesson's variation guidance and verify its key independently. Do not count this written test list as executed validation.

### Lesson 23.1: Coordinates and graphs of equations

**Adversarial claim to test:** Swapping coordinates or labeling axis points with quadrants.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-coordinates-and-graphs-of-equations/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-coordinates-and-graphs-of-equations/tutor.md). The reference key is in [calibration](assessment.md#lesson-231).

### Lesson 23.2: Slope and constant rate of change

**Adversarial claim to test:** Reporting a vertical slope as zero or computing rise/run from pixel distances on differently scaled axes.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-slope-and-constant-rate-of-change/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-slope-and-constant-rate-of-change/tutor.md). The reference key is in [calibration](assessment.md#lesson-232).

### Lesson 23.3: Slope-intercept form and graph features

**Adversarial claim to test:** Swapping intercepts or including the zero itself in a strictly positive interval.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-slope-intercept-form-and-graph-features/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-slope-intercept-form-and-graph-features/tutor.md). The reference key is in [calibration](assessment.md#lesson-233).

### Lesson 23.4: Constructing and converting equations of lines

**Adversarial claim to test:** Forcing a vertical line into $y=mx+b$ or accepting two copies of one point as sufficient data.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-constructing-and-converting-equations-of-lines/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-constructing-and-converting-equations-of-lines/tutor.md). The reference key is in [calibration](assessment.md#lesson-234).

### Lesson 23.5: Parallel and perpendicular lines

**Adversarial claim to test:** Applying a reciprocal formula to a zero or undefined slope without a separate case.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-parallel-and-perpendicular-lines/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-parallel-and-perpendicular-lines/tutor.md). The reference key is in [calibration](assessment.md#lesson-235).

### Lesson 23.6: Linear models, domains, and transformations

**Adversarial claim to test:** Extending a draining model indefinitely into negative volume.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-6-linear-models-domains-and-transformations/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-6-linear-models-domains-and-transformations/tutor.md). The reference key is in [calibration](assessment.md#lesson-236).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 23.1: reasoning, repair and evidence

**Student probe:** A student declares (2,4) on y=3x−1 because its x-coordinate fits the table.

**Required mathematical response:** The pair must satisfy the equation: at x=2,y=5. Ask to substitute both coordinates and distinguish input from complete solution pair.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-coordinates-and-graphs-of-equations](lesson-1-coordinates-and-graphs-of-equations/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 23.2: reasoning, repair and evidence

**Student probe:** A vertical line's slope is reported 0 because x does not change.

**Required mathematical response:** Slope hasΔx in the denominator; nonzeroΔy/0 is undefined. Compare with a horizontal line, where numerator 0 produces slope 0.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-slope-and-constant-rate-of-change](lesson-2-slope-and-constant-rate-of-change/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 23.3: reasoning, repair and evidence

**Student probe:** In y=2x−6, the zero is reported as −6.

**Required mathematical response:** −6 is y-intercept output; solve 0=2x−6 for zero input 3. Ask which coordinate must be 0 for each intercept.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-slope-intercept-form-and-graph-features](lesson-3-slope-intercept-form-and-graph-features/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 23.4: reasoning, repair and evidence

**Student probe:** A line through (−2,1) is written y−1=m(x−2).

**Required mathematical response:** The anchored horizontal difference isx −(−2)=x+2. Substituting the given point should make both differences 0; use that check before expanding.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-constructing-and-converting-equations-of-lines](lesson-4-constructing-and-converting-equations-of-lines/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 23.5: reasoning, repair and evidence

**Student probe:** Two equations with the same slope and intercept are called distinct parallel lines.

**Required mathematical response:** They define the same line. Ask whether any point belongs to one but not the other; compare distinct parallel and horizontal/vertical perpendicular examples.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-parallel-and-perpendicular-lines](lesson-5-parallel-and-perpendicular-lines/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 23.6: reasoning, repair and evidence

**Student probe:** For f(x)=2x+1, f(x+3) is called a shift 3 right.

**Required mathematical response:** Old input 0 occurs at new x=−3, so shift left 3; f(x+3)=2x+7. Ask for a mapped point to verify the direction.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-6-linear-models-domains-and-transformations](lesson-6-linear-models-domains-and-transformations/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| I graphed $f(x)=-2x+6$ on $[1,3)$ and called 0 its minimum. | Check attainment: x=3 is excluded. Correct maximum 4 is attained at 1; no minimum is attained. Preserve a correct decreasing-direction judgment. |
| My transformed equation is $g(x)=2x-7$ from $f(x)=2x+1$ on $[0,3]$, using $g(x)=f(x-2)-4$. Domain stays [0,3]. I did not run a graphing tool. | Credit equation, repair domain to [2,5], and leave required technology execution unassessed. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
