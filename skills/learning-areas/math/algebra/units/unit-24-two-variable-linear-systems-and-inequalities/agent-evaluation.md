# Agent evaluation: Unit 24: Two-variable linear systems and inequalities

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

### Lesson 24.1: Systems and graphical solutions

**Adversarial claim to test:** Checking the proposed point in only one equation.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-systems-and-graphical-solutions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-systems-and-graphical-solutions/tutor.md). The reference key is in [calibration](assessment.md#lesson-241).

### Lesson 24.2: Solving systems by substitution

**Adversarial claim to test:** Confusing a dependent system with the entire coordinate plane.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-solving-systems-by-substitution/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-solving-systems-by-substitution/tutor.md). The reference key is in [calibration](assessment.md#lesson-242).

### Lesson 24.3: Solving systems by elimination

**Adversarial claim to test:** Replacing two equations by their sum alone and treating it as an equivalent system.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-solving-systems-by-elimination/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-solving-systems-by-elimination/tutor.md). The reference key is in [calibration](assessment.md#lesson-243).

### Lesson 24.4: Classification and choice of system method

**Adversarial claim to test:** Declaring dependency from proportional variable coefficients while ignoring constants.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-classification-and-choice-of-system-method/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-classification-and-choice-of-system-method/tutor.md). The reference key is in [calibration](assessment.md#lesson-244).

### Lesson 24.5: Constructing and interpreting linear systems

**Adversarial claim to test:** Accepting a mathematically valid negative or fractional count without checking context.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-5-constructing-and-interpreting-linear-systems/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-5-constructing-and-interpreting-linear-systems/tutor.md). The reference key is in [calibration](assessment.md#lesson-245).

### Lesson 24.6: Linear inequalities and feasible regions

**Adversarial claim to test:** Shading a union when every constraint must hold.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-6-linear-inequalities-and-feasible-regions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-6-linear-inequalities-and-feasible-regions/tutor.md). The reference key is in [calibration](assessment.md#lesson-246).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 24.1: reasoning, repair and evidence

**Student probe:** An intersection read as(1.3,1.3) is declared the exact solution of y=x,y=4−2x.

**Required mathematical response:** Exact pair is(4/3,4/3); the rounded graph estimate fails exact equality. Keep the approximation useful but label its precision and verify algebraically.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-systems-and-graphical-solutions](lesson-1-systems-and-graphical-solutions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 24.2: reasoning, repair and evidence

**Student probe:** Substitution gives 0=0, and every point in the plane is accepted.

**Required mathematical response:** Only pairs satisfying the retained original equation are solutions. Ask whether an arbitrary off-line point works; parameterize the common line.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-solving-systems-by-substitution](lesson-2-solving-systems-by-substitution/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 24.3: reasoning, repair and evidence

**Student probe:** After adding x+y=5 and 2x−y=4, only 3x=9 is kept, and any y is accepted.

**Required mathematical response:** The sum is a consequence, not a complete equivalent system alone. Retain x+y=5 to gety=2; explain recovery of the removed equation by subtraction.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-solving-systems-by-elimination](lesson-3-solving-systems-by-elimination/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 24.4: reasoning, repair and evidence

**Student probe:** Proportional left sides are assumed dependent despite different scaled constants.

**Required mathematical response:** x+y=2 and 2x+2y=5 contradict because doubling the first gives right side 4. Ask for a full-equation scaling comparison, not just coefficients.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-classification-and-choice-of-system-method](lesson-4-classification-and-choice-of-system-method/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 24.5: reasoning, repair and evidence

**Student probe:** Break-even at t=4 is reported as proof both plans cost the same at every time.

**Required mathematical response:** It identifies one intersection. Test t=0 and t=5 or subtract cost functions to determine which is cheaper on each side.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-5-constructing-and-interpreting-linear-systems](lesson-5-constructing-and-interpreting-linear-systems/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 24.6: reasoning, repair and evidence

**Student probe:** A point satisfying a budget is accepted even though it violates a minimum-production constraint.

**Required mathematical response:** Feasibility requires every constraint. Use a membership table across all originals, then retain lattice points if quantities are counts.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-6-linear-inequalities-and-feasible-regions](lesson-6-linear-inequalities-and-feasible-regions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| I kept only the sum $3x=9$ from $x+y=7$, $2x-y=2$, so y can be anything. | Identify the lost retained equation and recover y=4. A consequence alone is not an equivalent system. |
| My screen shows no crossing for y=x and y=1.01x-1 on [-10,10]. Therefore no solution. | Do not endorse a window-limited conclusion. Algebra gives (100,100); obtain an actual wider graph if graphing is being assessed. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
