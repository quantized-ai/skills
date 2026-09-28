# Agent evaluation: Unit 20: Algebraic expressions and structure

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

### Lesson 20.1: Variables and expression language

**Adversarial claim to test:** Translating “five less than twice n” as $5-2n$.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-variables-and-expression-language/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-variables-and-expression-language/tutor.md). The reference key is in [calibration](assessment.md#lesson-201).

### Lesson 20.2: Substitution and evaluation

**Adversarial claim to test:** Cancelling before checking an excluded input or silently using complex values in a real-domain task.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-substitution-and-evaluation/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-substitution-and-evaluation/tutor.md). The reference key is in [calibration](assessment.md#lesson-202).

### Lesson 20.3: Properties and distributive structure

**Adversarial claim to test:** Dropping the sign of a distributed negative.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-properties-and-distributive-structure/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-properties-and-distributive-structure/tutor.md). The reference key is in [calibration](assessment.md#lesson-203).

### Lesson 20.4: Like terms and equivalent linear expressions

**Adversarial claim to test:** Treating numerical agreement at one chosen input as a proof of equivalence.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-like-terms-and-equivalent-linear-expressions/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-like-terms-and-equivalent-linear-expressions/tutor.md). The reference key is in [calibration](assessment.md#lesson-204).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 20.1: reasoning, repair and evidence

**Student probe:** 'Three times the sum of x and 4' becomes 3x+4.

**Required mathematical response:** Grouping requires 3(x+4). Test x=0 to expose 12 versus 4; ask which complete quantity is multiplied by 3.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-variables-and-expression-language](lesson-1-variables-and-expression-language/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 20.2: reasoning, repair and evidence

**Student probe:** A student simplifies x/x to 1 and evaluates it at x=0.

**Required mathematical response:** Original expression excludes 0. Ask whether 0/0 names one number; the simplification is valid only on x≠0.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-substitution-and-evaluation](lesson-2-substitution-and-evaluation/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 20.3: reasoning, repair and evidence

**Student probe:** −3(a−2) is expanded as −3a−6.

**Required mathematical response:** Both products must be taken:−3a+6. Ask for the product of −3 and −2, then check at a=0.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-properties-and-distributive-structure](lesson-3-properties-and-distributive-structure/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 20.4: reasoning, repair and evidence

**Student probe:** 2x+3x² is simplified to 5x³.

**Required mathematical response:** Addition combines only identical variable parts. At x=2, originals 16 and claimed 40 differ; ask which operation adds exponents for powers and why it is absent here.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-like-terms-and-equivalent-linear-expressions](lesson-4-like-terms-and-equivalent-linear-expressions/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

## Concrete response audit

These are specified scenarios for a future evaluator, not a report of executed learner or agent trials.

| Actual audit input | Expected judgment |
| --- | --- |
| $3(2x-1)-2(x+4)=4x-11$ because both sides agree at zero. Is my proof complete? | The result and check are correct; the general equivalence proof is missing. Request a property-based chain without calling the expression wrong. |
| For $-\tfrac12(6x-8)$, I got $-3x-8$. Can I have a hint? | Ask which grouped terms the factor reaches; preserve the correct first product. Supply a two-product setup only after the conceptual cue. |

After a mathematical hint, request a fresh retry using this unit's checked demand anchors. Pass only if the tutor records which decision was supplied and preserves the already demonstrated portions.
