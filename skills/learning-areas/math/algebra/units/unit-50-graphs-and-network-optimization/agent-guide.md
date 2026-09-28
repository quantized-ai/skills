# Unit 50 agent guide

Read this with the selected curriculum/tutor pair in [SKILL.md](SKILL.md#lessons). Curriculum content and proficiency remain authoritative; reference answers do not override mathematics or a valid alternative method. Do not expose the agent documents as student handouts.

## Entry and scope

Honor the student's requested topic, mode and pace. Do not impose a diagnostic before an explicitly requested explanation or quiz. If their work shows a prerequisite gap, use the concept's first hint or a simpler representation to isolate it; do not infer failure of unrelated concepts. In assessment, skip instructional workflows and select fresh tasks in the requested scope.

Declare loops, direction, weights, missing edges and connectivity. Euler inspection covers edges; Hamiltonian tours cover vertices; spanning trees connect without cycles. Heuristic feasibility does not prove optimality. Check every priority, tie and edge-selection rule; critical-path duration assumes adequate resources.

## Learn

Explain one idea at a time using the curriculum Content cell and the concept-specific worked example. The examples are original calibration tasks with keys; show a prompt without the key first only when a diagnostic is useful. After a worked explanation ask the student to justify a consequential step or repair the named misconception, then let them revise. A learner who already explains the idea can skip repetitive instruction. Compare a second method only after a first is intelligible; do not turn strategy comparison into an extra beginner barrier.

## Practice

Generate a task using the lesson's topic-specific constraints. Present one manageable question, wait for the response, locate the first demonstrated divergence, and give feedback about that work. If only a final answer is provided and its cause is unclear, ask for one reasoning step rather than guessing a misconception. Give one hint at a time: conceptual cue (the provided first hint), then representation/setup, then a worked step or full solution if requested. Mark any mathematically assisted attempt as supported. After feedback allow revision, then use a fresh task for independent evidence. After two unproductive supported attempts, simplify or change representation rather than repeating hints.

## Assess

State sampled scope, tools and whether feedback follows each item or the end of a short set. Default to one fresh question at a time, generated and verified under [question-generation.md](question-generation.md). Do not administer the fixed calibration examples as a quiz. Keep keys, hints and misconception labels private until submission. Neutral wording clarification may preserve independence; mathematical help does not. If help is requested, give it, mark the attempt supported and later replace it with a genuinely fresh independent task. If earlier feedback teaches a later item, select another transfer task for independent evidence.

Accept equivalent mathematics, verbal reasoning, accessible descriptions and valid alternative methods. Do not require LaTeX input or exact phrasing. Separate an arithmetic/model error from cosmetic notation. If your key or task is faulty, correct it openly, invalidate the affected item and do not penalize the student.

## Evidence and completion

| Outcome | Evidence |
| --- | --- |
| Not assessed | No usable independent evidence for this concept or a required component. |
| Developing | Independent work reveals a substantive unresolved error or missing reasoning. |
| Demonstrated | One correct, justified independent task on the relevant concept. |
| Secure in this session | At least two independent tasks, including a different representation, context or reasoning direction, collectively satisfy the curriculum proficiency criteria and all required assessment cases, with no unresolved error. |

The two-task rule is a local operating convention, not a research-validated mastery threshold. Several routine subparts remain one task. Renumbering a demonstrated example is not sufficient transfer. Self-correction before mathematical feedback can remain independent; correction after help cannot. Missing cases remain pending without erasing successful components.

A lesson is complete only when every curriculum concept is secure in this session. This unit has 8 concepts across 4 lessons; a short quiz reports sampled evidence, not unit completion. Do not claim durable retention, certification or whole-standard mastery. If a required collection, simulation, graph, dynamic-geometry, technology or oral component cannot be carried out or inspected, record that component as not assessed and continue the parts supported by actual evidence. A described workflow is not an executed tool result.

## Session record

Track curriculum path plus exact Concept Title, task and checked key, required case, representation, difficulty, student reasoning, highest hint, exposed/independent status, outcome and missing evidence. Track task features to avoid repetition. Do not claim persistent memory or global uniqueness unless the host actually supplies it. On pause, provide a concise strengths/gaps/next-step summary and a portable handoff when useful. Let the learner pause or change modes.

## Lesson routing and entry evidence

Use the following probes only when the learner needs placement or their work reveals a gap. A requested assessment goes directly to fresh tasks; these known probes are not scored as unseen evidence. Review references identify possible repairs, not mandatory prerequisites.

| Lesson | Entry probe and response | Targeted review if needed |
| --- | --- | --- |
| [50.1: Graph models and connectivity](lesson-1-graph-models-and-connectivity/tutor.md) | Check an edge list against a drawing:AB connects A and B and a geometric crossing is not a vertex unless declared. Establish undirected versus directed meaning. | Only the observed entry gap |
| [50.2: Euler routes and route inspection](lesson-2-euler-routes-and-route-inspection/tutor.md) | Check connectivity and degree on an explicit edge list; a loop contributes two degree ends. Return to graph models if either condition is uncertain. | 50.1 |
| [50.3: Hamiltonian tours and traveling-salesman heuristics](lesson-3-hamiltonian-tours-and-traveling-salesman-heuristics/tutor.md) | Check whether the application requires visiting vertices or covering edges. Return to graph definitions before choosing a route algorithm. | 50.1 |
| [50.4: Spanning trees and critical paths](lesson-4-spanning-trees-and-critical-paths/tutor.md) | Check a cycle and a precedence arrow: A→B means B waits for A, not vice versa. Separate undirected tree and directed task models. | 50.1 |

## Evidence specific to this unit

Require inspectable edge lists, vertex sets and decision traces. Route feasibility, algorithm fidelity and optimality are separate claims: verify each independently. A lower bound equal to a feasible construction is a certificate; a plausible drawing alone is not.
