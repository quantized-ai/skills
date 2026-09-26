# Teaching sources and local design decisions

[Unit overview](unit.md) · [Agent guide](agent-guide.md)

Sources consulted on 25 September 2026. This unit uses teacher guidance to shape instruction and published mathematics references to check content. The lesson workflows, numerical examples, reasoning tasks, answer keys, and AI interaction rules are locally authored. Source links document the basis for decisions; students do not need to visit them to complete a lesson.

## IES algebra teaching guidance

**Institute of Education Sciences / What Works Clearinghouse, _Teaching Strategies for Improving Algebra Knowledge in Middle and High School Students_.** Consulted the [official recommendations and evidence ratings](https://ies.ed.gov/ncee/wwc/practiceguide/20) and [Practice Guide Summary](https://ies.ed.gov/ncee/WWC/Docs/PracticeGuide/wwc_algebra_summary_072115.pdf), especially printed pages 2–6. The landing page identifies an April 2015 release and January 2019 revision. The full revised guide was not retrievable in this review; the accessible official summary is the implementation reference used here.

The summary supports examining completed or flawed reasoning, attending to algebraic structure, and comparing solution approaches. It qualifies strategy comparison for learners who already have some procedural knowledge. The WWC rates recommendations 1 and 2 as **minimal evidence** and recommendation 3 as **moderate evidence**. These ratings concern the source recommendations, not this AI tutor.

Local application: worked examples now lead to explanation or repair; Lessons 1.4, 1.6, and 1.7 include decisions about methods after an accessible first approach. The tutor must identify what the student can already do before introducing competing methods.

## Mathematics Assessment Project teacher guidance

**Mathematics Assessment Project (MAP), University of California, Berkeley and the Shell Center team at the University of Nottingham.** Project provenance is described on its [official background page](https://www.map.mathshell.org/background.php).

- [A Brief Guide to the Classroom Challenges](https://www.map.mathshell.org/docs/map_cc_teacher_guide.pdf), printed pages 3–4 and 8–9: use an initial response to choose feedback questions, let students reconsider their reasoning, and examine subsequent work.
- [Representing Functions of Everyday Situations](https://www.map.mathshell.org/lessons.php?unit=9260) and its [teacher guide](https://www.map.mathshell.org/download.php?fileid=1740), pages T-1–T-3: connect contextual descriptions, formulas, graphs, and discrete or continuous domains.

Local application: Lessons 1.1–1.3 and 1.8 connect representations; all lessons distinguish feedback-driven revision from fresh independent evidence. In a one-student conversation the student explains a match or critiques a hypothetical response. The agent does not simulate classmates or claim to reproduce classroom group work.

The published MAP activities and card sets have not been copied, renumbered, or rewritten here. The original tasks below apply general instructional ideas to this unit's existing scope. Refer to the publisher's terms before reproducing its actual materials.

## OpenStax mathematical references

**Jay Abramson, _Algebra and Trigonometry 2e_, OpenStax, 2021.** Consulted the following publisher-hosted sections. This is a mathematical content reference, while the teacher guides above inform the instructional approach. No publisher exercise set, image, or worked solution is reproduced in this unit.

| Section | Content checked | Unit lessons |
| --- | --- | --- |
| [3.1 Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation) | Single-output definition, notation, evaluation, tables and vertical-line test. | 1.1 |
| [3.2 Domain and Range](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-2-domain-and-range) | Allowed inputs, attained outputs, interval notation and piecewise rules. | 1.2, 1.8 |
| [3.3 Rates of Change and Behavior of Graphs](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-3-rates-of-change-and-behavior-of-graphs) | Average rate, increasing/decreasing behavior and extrema. | 1.3 |
| [3.5 Transformation of Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-5-transformation-of-functions) | Input/output transformations, scaling, reflections and even/odd identities. | 1.4, 1.5 |
| [3.6 Absolute Value Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-6-absolute-value-functions) | Distance, the two branches, transformed graphs and equations. | 1.6 |
| [2.7 Linear Inequalities and Absolute Value Inequalities](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities) | Compound inequalities, interval notation, distance inequalities and exact versus graphical solutions. | 1.2, 1.7 |

### Mathematical qualifications retained in this unit

Apply precise definitions when a reference uses a simplified explanation or a different convention:

- **Functions:** identical repeated input-output pairs do not violate single-valuedness; conflicting outputs do. Preserve complete-table versus sampled-data distinctions.
- **Symmetry:** a stated domain must admit negated inputs before either identity can hold throughout it. Keep the zero-function case.
- **Extrema:** Lesson 1.3 explicitly permits one-sided local comparison at included domain endpoints; OpenStax 3.3 describes local extrema using an open interval around the point. State the convention before grading. Absolute endpoint extrema remain meaningful in either convention.
- **Piecewise rules:** the usual disjoint-branch presentation is a convenient format. Overlapping branches still define a function when all applicable outputs agree. The unit's floor and overlap cases remain explicit local content, not coverage attributed to OpenStax 3.2.
- **Absolute value:** two distinct solutions require a positive isolated bound and a nonconstant linear inside expression over the full real domain. Zero, negative bounds, and domain restrictions need separate consideration. Preserve those qualifications when comparing methods.
- **Transformations:** keep explicit original-domain checks for zero multipliers and parameter-identifiability checks. A plotting result does not replace their algebraic justification.

## Lesson application map

The following are local implementations, not publisher lesson titles or endorsements. Each companion `tutor.md` links to this record and contains its teaching decisions and agent-only keys. Curriculum content, objectives, and proficiency remain in `lesson.md`; standards mappings use those exact objectives.

| Lesson | Teaching change | Observable evidence |
| --- | --- | --- |
| [1.1](lesson-1-relations-and-function-notation/tutor.md#reasoning-task-for-learning-and-practice) | Match finite rules, tables, and plotted points; repair a negative-input simplification error. | Student names the conflicting input or justifies every match. |
| [1.2](lesson-2-sets-intervals-domain-and-range/tutor.md#reasoning-task-for-learning-and-practice) | Keep a formula fixed while changing its domain; use a witness input for an attained output. | Student explains why a proposed range endpoint belongs or does not belong. |
| [1.3](lesson-3-features-and-change-in-functions/tutor.md#reasoning-task-for-learning-and-practice) | Compare records with the same endpoint rate but different interior behavior. | Student separates net change, sign, and monotonicity without inventing interpolation. |
| [1.4](lesson-4-transformations-of-functions/tutor.md#reasoning-task-for-learning-and-practice) | Compare coordinate reasoning with an incorrect sequence of graph moves. | Student finds the first disagreement and verifies the corrected point in the original rule. |
| [1.5](lesson-5-symmetry-of-functions/tutor.md#reasoning-task-for-learning-and-practice) | Change one table value or domain member and reconsider the claim. | Student distinguishes an identity on a whole domain from a sampled pattern. |
| [1.6](lesson-6-absolute-value-functions-and-equations/tutor.md#reasoning-task-for-learning-and-practice) | Connect one equation to distance, case equations, and graph intersections. | Student explains why the methods give the same complete solution set. |
| [1.7](lesson-7-absolute-value-inequalities/tutor.md#reasoning-task-for-learning-and-practice) | Compare proposed solution sets using a counterexample, then justify the complete set. | Student repairs the connector and explains endpoints. |
| [1.8](lesson-8-piecewise-and-step-functions/tutor.md#reasoning-task-for-learning-and-practice) | Construct and challenge branch conditions at a contextual threshold. | Student resolves boundary membership and tests the rule on both sides. |

## Local assessment decisions

The evidence-status labels, minimum of two independent tasks, hint ladder, pause/resume record, and technology-evidence requirement are repository design choices. None is a validated scoring system supplied by these sources. Guided revision is useful evidence of learning, but cannot be counted as an unseen independent attempt. The [fresh-question generation policy](question-generation.md) and retained calibration tasks are also local designs; this update does not recertify their standards mappings or establish effectiveness for an AI tutor.

Use the [agent evaluation scenarios](agent-evaluation.md) to test the implementation, then examine real student learning and retention. Check the source record when revising a lesson; do not infer that a cited chapter supports every local extension.
