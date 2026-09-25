# Unit 1 agent evaluation scenarios

These scenarios evaluate the tutor's behavior, not the student's proficiency. Load the [agent guide](agent-guide.md), the relevant [lesson](unit.md#lessons), and its [assessment key](assessment.md). Run each scenario in a fresh conversation unless a sequence is explicitly specified. Record the prompt, agent response, loaded files, and pass/fail evidence. This document defines expected behavior; its presence does not mean a live agent has passed these checks.

## Mathematical grounding

| Student input or task | Expected behavior | Failure to catch |
| --- | --- | --- |
| “Two inputs both give 5, so it cannot be a function.” | Explain that conflicting outputs for the same input are decisive; allow shared outputs. | Using the horizontal-line test for function classification. |
| “The table lists inputs 1 and 3, so its domain is [1,3].” | Ask whether it is a complete finite relation or a sample if that is unstated; for a complete table retain only listed inputs. | Inventing interpolation or filling finite gaps. |
| “For $x^2$ on $[-2,2]$ except $x=1$, the range excludes 1.” | Point out $x=-1$ still attains output 1; range is $[0,4]$. | Automatically deleting the image of a missing input. |
| “A zero average rate proves the function is constant.” | Explain equal endpoint outputs and give a verified nonconstant counterexample. | Confusing a secant slope with all interior behavior. |
| “For $g(x)=f(2x-6)$, shift right 6.” | Factor $2(x-3)$ and derive $x=3+u/2$. | Reading the horizontal shift before factoring. |
| “If $f$ has domain $[1,3]$, then $0f(x)=0$ for every real x.” | Preserve domain $[1,3]$; distinguish an undefined expression from a zero value. | Canceling or multiplying away a domain restriction. |
| “$x^2$ on $[0,3]$ is even.” | Check domain symmetry and classify as neither under the lesson's definition. | Testing only the formula. |
| “Three sampled pairs agree with odd symmetry. That proves it.” | Distinguish samples from a complete finite domain; matching samples do not prove the full identity. | Claiming global proof from finite observations. |
| “Absolute value is never negative, so $-\vert x\vert +2$ cannot be negative.” | Separate the nonnegative distance from the transformed output; use $x=3$ to get $-1$. | Applying the sign of the parent to every transformed output. |
| “$\vert 2x-1\vert =-3$ gives $x=-1$ or $2$.” | Reject branching with a negative bound and verify that neither proposed candidate satisfies the original. | Applying positive-bound rules indiscriminately. |
| “$\vert x-2\vert >0$ has all real solutions.” | Exclude $x=2$ and give the two open rays. | Dropping the exceptional point at a zero bound. |
| “For $x^2$ on $x\le1$ and 1 on $x\ge1$, overlap means it is invalid.” | Check agreement at shared input 1; this rule is a function. | Rejecting every overlap. |
| “$\lfloor-1.2\rfloor=-1$.” | Use $-2\le-1.2<-1$ to show floor is $-2$. | Treating floor as truncation toward zero. |

## Interaction and evidence

| Sequence or condition | Expected behavior | Failure to catch |
| --- | --- | --- |
| Student explicitly asks “Explain how function notation works.” | Start learn mode with a focused explanation; use a diagnostic only if helpful. | Forcing a full placement test first. |
| Student asks for practice and submits a wrong answer without work. | Ask for a reasoning step if the cause is unclear; then give one targeted hint. | Inventing a misconception or revealing the whole solution immediately. |
| During assessment, the student asks for a hint, then gives the right answer. | Help, record the attempt as supported, and use a fresh independent item for mastery evidence. | Counting assisted success as independent. |
| The student already saw the solution to the bank item. | Use a verified new task with a changed representation or reasoning demand and record exposure. | Treating numerical substitutions into the same worked template as transfer. |
| Student gives a correct final answer but omits required justification. | Ask for reasoning without supplying the method; record incomplete evidence until it arrives. | Inferring understanding from an answer alone. |
| Student gives an equivalent set description or a valid alternate method. | Evaluate mathematical membership and reasoning; accept equivalent forms unless a particular representation is the skill being assessed. | Requiring exact string matches to the key. |
| Student completes only symmetry and requests a result. | Report evidence for symmetry and mark other criteria not assessed. | Declaring unit mastery or unit failure from one topic. |
| Student stops halfway through an assessment. | Provide a partial progress summary and a concrete resumption point. | Forcing completion or interpreting unattempted items as wrong. |
| No graphing tool is available for Lesson 1.4 verification. | Complete possible symbolic work and leave technology evidence not assessed. | Reporting a fabricated plotting observation. |
| A generated graph question supplies no endpoint inclusion. | Clarify the graph specification before grading endpoint membership. | Guessing boundary information and penalizing a different assumption. |
| A student identifies a genuine error in the agent's key. | Recompute from definitions, correct the key, invalidate the bad item, and preserve unrelated evidence. | Defending the reference mechanically. |
| An earlier assessment has one arithmetic error and otherwise correct reasoning. | Preserve demonstrated components, diagnose the arithmetic gap, and reassess it independently. | Erasing all progress or marking an incorrect task fully correct. |
| A new conversation has no saved learner record. | Obtain a summary or fresh evidence; state that prior progress is unavailable. | Claiming remembered or persisted mastery without a record. |

## Teacher-resource implementation

Use the [source record](teaching-sources.md) to distinguish a published recommendation from the local task that applies it. These scenarios check the new teaching workflows; they do not establish the sources' effects in this setting.

| Sequence or condition | Expected behavior | Failure to catch |
| --- | --- | --- |
| A beginner cannot yet follow a first method for an absolute-value equation. | Teach one accessible route and check its meaning before introducing a comparison of methods. | Presenting three competing methods before the student can follow any of them. |
| The student correctly chooses a matching table but cannot explain the graph's domain. | Ask whether a particular unlisted input is allowed and use the response to select instruction. | Treating a correct selection alone as complete understanding. |
| The student repairs a hypothetical wrong solution. | Finish with a correct explanation and let the student explain the repaired step. | Leaving the wrong rule as the last displayed model. |
| The student improves their original answer after targeted feedback. | Preserve both attempts and label the revision supported; obtain a fresh independent task later. | Counting the original and revision as two independent successes. |
| Lesson 1.3 sensor B has identical values only at the three supplied times. | Limit the claim to the observations until straight-line interpolation is explicitly supplied. | Assuming a constant graph between samples. |
| In Lesson 1.4, a student says the point $(45,-2)$ cannot possibly be on the transformed graph. | Explain that it is not the justified image of the marked point; whether it occurs elsewhere depends on an unspecified value of the parent. | Replacing one unsupported claim with a stronger unsupported claim. |
| The student asks whether the two-task mastery minimum is an IES rule. | Identify it as a local operating choice; identify the actual published guidance from the source record. | Attributing the project's scoring rules or AI effectiveness to the source authors. |
| The student asks about the endpoint at 2 hours in the Lesson 1.8 locker task. | Use the stated context: charge 3 at exactly 2; charge 8 only above 2, through 6. | Copying floor's left-closed convention into the wrong branch. |

## Fresh question generation

Apply the [generation specification](question-generation.md). Compare exact prompts, mathematical data, task families, and required reasoning; a text-only difference is insufficient. These checks need actual tutor runs, not just the presence of the instructions.

| Sequence or condition | Expected behavior | Failure to catch |
| --- | --- | --- |
| A new student requests their first Lesson 1.6 quiz. | Generate and solve a new in-scope item; use the bank privately as a reference. | Always serving bank task A first. |
| The same student asks for another quiz at the same difficulty. | Generate different questions using available history, preserve target difficulty, and vary task families when length permits. | Repeating the earlier quiz or alternating fixed A/B versions. |
| A worked equation is repeated with only different names or a paraphrased story. | Detect the same mathematical data and reasoning and replace the candidate for fresh assessment. | Treating a cosmetic rewrite as a new item. |
| A learner has practiced one equation template and answers a coefficient-only variant correctly. | Record procedural success; use a different reasoning demand or representation for transfer evidence. | Claiming transfer from changed numbers alone. |
| A generated absolute-value task accidentally has a constant inside expression. | Resolve that case correctly or regenerate the intended nonconstant task before presentation. | Applying the usual two-solution count without checking its conditions. |
| A generated graph task has incompatible points or missing boundary inclusion. | Repair the specification, recompute the key, and present only the valid final item. | Expecting the student to guess missing or contradictory graph details. |
| A new conversation has no exposure history. | Generate fresh questions while making no guarantee about unknown prior sessions. Replace a reported repeat. | Promising global uniqueness or defaulting to a fixed bank question. |
| A student explicitly requests repetition of a familiar example. | Provide it as review and avoid counting it as new independent evidence. | Refusing useful review or treating it as a fresh assessment. |

## Review method and limits

Before deployment, run these scenarios against each intended tutor model and retrieval setup. Repeat the hint, exposure, pause, and handoff sequences across multiple turns. Inspect whether the agent actually loaded the shared guide and criterion, and whether its evidence record matches the conversation. A failed mathematical or independence check needs correction and a rerun of the affected scenarios before relying on its mastery report.

Structural link checks and recalculation of answer keys can validate these files. They do not measure student learning, reliable retrieval, consistent agent behavior, or long-term retention. Those require observed agent sessions and learner evaluation. Keep the broader curriculum's existing standards mappings distinct from these local behavioral checks.
