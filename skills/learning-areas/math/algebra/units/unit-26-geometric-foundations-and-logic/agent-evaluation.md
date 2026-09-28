# Agent evaluation: Unit 26: Geometric foundations and logic

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

### Lesson 26.1: Objects and measurement

**Adversarial claim to test:** Calling any nonintersecting lines parallel or confusing equal side lengths with a regular polygon.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-1-objects-and-measurement/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-1-objects-and-measurement/tutor.md). The reference key is in [calibration](assessment.md#lesson-261).

### Lesson 26.2: Conditional statements and counterexamples

**Adversarial claim to test:** Believing an original implication guarantees its converse.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-2-conditional-statements/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-2-conditional-statements/tutor.md). The reference key is in [calibration](assessment.md#lesson-262).

### Lesson 26.3: Conjecture and deductive proof

**Adversarial claim to test:** Treating a plausible diagram, repeated measurements or the desired conclusion as a proof premise.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-3-conjecture-and-deductive-proof/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-3-conjecture-and-deductive-proof/tutor.md). The reference key is in [calibration](assessment.md#lesson-263).

### Lesson 26.4: Euclidean and spherical geometry

**Adversarial claim to test:** Applying the Euclidean 180° sum to a curved-surface triangle or calling latitude circles parallel spherical lines.

**Expected evidence:** The agent should use the conditions in [the curriculum](lesson-4-euclidean-and-spherical-geometry/lesson.md), explain the issue rather than merely label it wrong, and preserve the constraints listed in [the tutor](lesson-4-euclidean-and-spherical-geometry/tutor.md). The reference key is in [calibration](assessment.md#lesson-264).

## Adversarial lesson-by-lesson trials

These are manual evaluation specifications, not results of completed student sessions. Run each probe, preserve the transcript and record pass/partial/fail for mathematical reasoning, adaptation, freshness and evidence honesty. Independently check any new task the tutor creates.

### Lesson 26.1: reasoning, repair and evidence

**Student probe:** AB+BC is used for AC without a betweenness statement.

**Required mathematical response:** Additivity needs collinear A–B–C with B between. Ask for the missing premise; do not infer it solely from a sketch.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-1-objects-and-measurement](lesson-1-objects-and-measurement/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 26.2: reasoning, repair and evidence

**Student probe:** The true statement 'square implies rectangle' is used to claim every rectangle is square.

**Required mathematical response:** Converse does not follow. A2×3 rectangle meets the new hypothesis but not conclusion; ask for both directions before accepting a biconditional.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-2-conditional-statements](lesson-2-conditional-statements/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 26.3: reasoning, repair and evidence

**Student probe:** Dragging a constrained diagram 100 times is presented as deductive proof.

**Required mathematical response:** It supplies empirical support only, and may impose the conclusion accidentally. Ask which dependencies explain every allowable case; translate a justified chain into another proof format.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-3-conjecture-and-deductive-proof](lesson-3-conjecture-and-deductive-proof/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.

### Lesson 26.4: reasoning, repair and evidence

**Student probe:** Lines of latitude are labeled parallel spherical lines.

**Required mathematical response:** Except equator, latitude circles are not great circles. All distinct great circles meet at antipodal points; ask whether their planes pass through the sphere's center.

**Behavior check:** The tutor must first inspect the student's reason, use the lesson's specific hint if needed, and mark the attempt assisted once it teaches. Then request a fresh changed-case task from [lesson-4-euclidean-and-spherical-geometry](lesson-4-euclidean-and-spherical-geometry/tutor.md). Fail if it repeats the exposed worked example as independent assessment, credits an unobserved artifact/tool run, or reports the entire lesson secure while its case checklist still has gaps.
