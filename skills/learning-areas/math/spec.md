# Curriculum specification

This document defines the structure and authoring rules for a curriculum. Apply it to any course without copying another course’s topics, standards framework, entry assumptions, or number of units and lessons.

A curriculum specifies what learners should know and be able to do, and what constitutes proficiency. It contains no instructional readings, worked examples, exercises, assessment questions, answer keys, scoring schemes, teaching guides, pacing plans, or diagnostic instruments. Proficiency criteria belong in the curriculum as definitions of mastery; the activities used to demonstrate them are separate work.

## Hierarchy and files

```text
<course-slug>/
    curriculum.md
    units/
        unit-1-<topic-slug>/
            unit.md
            lesson-1-<topic-slug>/
                lesson.md
                standards.md
            lesson-2-<topic-slug>/
                lesson.md
                standards.md
        unit-2-<topic-slug>/
            unit.md
            lesson-1-<topic-slug>/
                lesson.md
                standards.md
```

| Component | Location | Responsibility |
| --- | --- | --- |
| Course | `curriculum.md` | Course identity, purpose, derived high-level objectives, and an index of units. |
| Unit | `units/unit-N-topic/unit.md` | A coherent group of lessons, summarized through derived objectives, topics, and a lesson index. |
| Lesson | `units/unit-N-topic/lesson-M-topic/lesson.md` | The authoritative, atomic curriculum document for a focused topic and its concepts. |
| Concept | One row in the lesson’s concept table | A precise definition of content, intended learning, and proficiency. Concepts do not require separate files. |
| Standards mapping | `standards.md` beside each `lesson.md` | The relationship between that lesson’s concept objectives and verified official standards. |

Use lowercase, hyphen-separated directory names. Number units in course order and lessons within their unit. Human-readable numbering such as “Unit 3” and “Lesson 3.2” is allowed. Do not create internal concept or objective codes, generated identifiers, or labels such as `U03-L02-C01` or `O1`.

## Breakdown, scope, and authority

Organize the course around subject-matter topics. Unit and lesson names should identify the knowledge and skills being defined, rather than a story or classroom activity. Applied topics belong in the curriculum when they are part of the intended scope; define their underlying concepts and methods explicitly.

Group closely related concepts into a lesson with one clear focus. Split lessons when their concepts address substantially different topics. There is no fixed required number of concepts, objectives, lessons, or units. Each concept needs enough detail to support consistent future content authoring without becoming a full instructional explanation.

Establish course coverage from the requested scope and supplied references. A topic’s placement in another course, or its absence from one standards framework, does not automatically justify excluding it. Do not silently assume prior mastery to omit foundational topics. State established course boundaries concisely in the course description, and identify unresolved coverage assumptions instead of presenting them as settled decisions. Do not add prerequisite sections by default.

Consult the [source index](../../../sources/index.md) for available reference materials, their roles, and their limitations. Select sources appropriate to the requested course.

Mark optional or extension content explicitly wherever it appears, including relevant concept titles and parent summaries. Keep it distinct from required proficiency. A standards framework’s advanced-content marker does not by itself determine whether a topic is optional in this course.

The lesson concept rows are the source of truth. Lesson summaries derive from those rows; unit summaries derive from their lessons; course summaries derive from their units. “Derived” means faithfully synthesized from the underlying content, not copied wholesale or inferred from a title. Parent documents must not introduce learning requirements absent from their children.

## Course: `curriculum.md`

Include:

- The course name as the only level-one heading.
- A short description of the course’s purpose, subject matter, and established boundaries.
- Main learning objectives synthesized from the unit objectives.
- Every unit, in order, linked to its `unit.md`, with a concise description of its contribution to the course.

Keep this document short enough to function as an overview and index. Detailed concept definitions and proficiency criteria remain in lessons. If shared standards references exist, a brief link to their index may appear here; do not copy objective mappings into the course overview.

```markdown
# {Course name}

{Short course description and established boundaries.}

## Main learning objectives

- {High-level objective derived from the units.}

## Units

- [1. {Unit title}](units/unit-1-topic/unit.md) — {Brief overview.}
- [2. {Unit title}](units/unit-2-topic/unit.md) — {Brief overview.}
```

## Unit: `unit.md`

Include:

- The unit number and name as the level-one heading.
- A short description of the unit’s focus and the relationship among its lessons.
- Main learning objectives synthesized from the lesson objectives.
- A compact summary of the concepts and topics actually covered.
- Every lesson, in order, linked to its `lesson.md`, with a one-sentence overview.

The unit is a reference and navigation document. Do not repeat the full concept tables, introduce additional mastery requirements, or add an assessment section. A simple link to the course may be included after the description if useful.

```markdown
# Unit {N}: {Unit title}

{Short description derived from the lessons.}

## Main learning objectives

- {Objective synthesized from the lessons.}

## Concepts and topics

{Compact list or paragraph of the covered concepts and topics.}

## Lessons

- [{N}.1: {Lesson title}](lesson-1-topic/lesson.md) — {Brief overview.}
- [{N}.2: {Lesson title}](lesson-2-topic/lesson.md) — {Brief overview.}
```

## Lesson: `lesson.md`

Start with the lesson number and title, followed immediately by its description, with a blank line between them. Do not insert breadcrumb links, navigation, or metadata between the title and description.

Include a concise lesson-level list of learning objectives, lesson-level proficiency criteria, and the concept table. A short learning outcome may summarize the integrated capability the lesson develops. It is optional and must not add a requirement absent from the objectives and concepts.

Derive lesson-level objectives and proficiency criteria from the concept rows. Preserve the required capabilities while avoiding a second full copy of the table. If several methods or representations are individually required by the concepts, the lesson summary must retain those requirements; it must not turn them into interchangeable alternatives.

The lesson contains no standards identifiers, standards source names, standards mappings, or links to `standards.md`. All alignment information belongs in the companion file.

```markdown
# Lesson {N}.{M}: {Lesson title}

{Short description of the topic and its purpose.}

## Learning objectives

- {Main objective derived from the concepts.}

## Learning outcome

{Optional concise statement of the integrated capability.}

## Proficiency criteria

- {Observable requirement derived from concept proficiency.}

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **{Concept name}** | {Precise content definition and conditions.} | {Observable learning objectives.} | {Concise mastery requirements.} |
```

Omit the learning outcome heading and paragraph when no separate outcome is needed. Do not add prerequisite, assessment, teaching, or exercise sections.

## Concepts

Use exactly these four column headings: **Concept Title**, **Content**, **Learning Objectives**, and **Proficiency criteria**. Each concept occupies one row. Do not create a sequence of individual concept headings or additional concept documents.

### Concept Title

Use a concise, recognizable topic name. It should identify a coherent concept and distinguish it from neighboring concepts. Keep the same name in the companion standards table.

### Content

Define the knowledge covered by the concept. Include the definitions, relationships, rules, formulas, notation, conventions, and method requirements needed to determine its scope. Preserve consequential conditions and exceptions when shortening source material.

For mathematical content, make applicable number systems, domains, parameter restrictions, exceptional cases, and representation conventions explicit. Distinguish a formula from a function with a specified domain, exact results from approximations, and assumptions from conclusions when those distinctions matter. Resolve ambiguities in the relevant cell rather than adding generic scope sections to every lesson.

State what a method involves and the conditions under which it is valid. Do not turn the cell into a worked procedure on particular values, a narrated lesson, or a collection of examples. Formulas and general identities are appropriate when they define the concept.

### Learning Objectives

State observable capabilities using precise verbs such as identify, classify, construct, solve, derive, interpret, compare, justify, or verify. Avoid objectives consisting only of “understand,” “learn,” or “be familiar with.”

Specify the relevant breadth: methods, representations, conditions, and level of reasoning. Make clear whether a learner must perform a procedure, interpret a supplied result, justify a method, or do several of these. Do not leave future authors to infer that distinction.

Use as many objectives as the concept needs. Keep distinct capabilities identifiable through separate sentences or semicolon-separated statements; do not number or assign codes to them.

### Proficiency criteria

Describe the observable conditions that establish mastery of the objectives. State what must be correct, complete, justified, or distinguished, including relevant exceptional cases and restrictions. Criteria should make the objectives more precise rather than merely repeat their verbs.

Use concise directives. Do not repeat introductory boilerplate such as “To demonstrate proficiency, the student must independently satisfy all of the following criteria.” Do not include particular problems, prompts, answers, point allocations, pass percentages, or grading procedures.

Every proficiency requirement must be supported by both an objective and the content. Every objective must have corresponding proficiency criteria. Resolve mismatches by clarifying the intended curriculum; do not invent extra requirements or weaken a requirement solely to make the wording match.

## Standards: companion `standards.md`

Create one standards file beside each lesson. It contains a descriptive title, a link to the lesson, any brief legend needed to identify official source documents or mapping categories, and a concise table.

Use exactly the columns **Concept**, **Learning objectives**, and **Standards**. Use one row per learning objective. Repeat the concept name as needed and copy the final objective wording exactly from the lesson. Put all verified mappings for that objective in its standards cell.

```markdown
# Standards: Lesson {N}.{M} — {Lesson title}

Mappings for [Lesson {N}.{M}](lesson.md).

{Official source document names and a brief legend, if needed.}

| Concept | Learning objectives | Standards |
| --- | --- | --- |
| **{Concept name}** | {Exact objective wording from lesson.md.} | {Verified official identifier and mapping category.} |
```

Use only official standards as standards sources. Name the actual documents used; do not assume every course uses the same framework. Textbooks, tutorial websites, and other nonstandard guideline materials may inform curriculum design but must not be presented as standards or included as authoritative standards references. Do not expose filesystem paths to source materials.

Retain official standards identifiers and their meaningful qualifiers. These are distinct from the internal concept and objective codes prohibited above. Verify mappings against the supplied official sources; do not invent identifiers or infer alignment from similar vocabulary alone.

When applicable, distinguish:

- **Direct:** the objective addresses an explicit component of the standard.
- **Supporting knowledge:** the objective provides knowledge needed for the standard without fulfilling its required action by itself.
- **Prerequisite review:** the objective revisits earlier learning relevant to the standard.
- **Extension:** the objective goes beyond the standard’s explicit requirements.

Preserve partial coverage and other necessary qualifications. Alignment with one component does not establish complete coverage of a multipart standard. If an objective has no verified mapping, retain the objective and mark it as unmapped with a brief reason. Do not remove valid curriculum content or fabricate a mapping to make the table appear complete.

### Optional shared references

When a course needs a larger standards reference, it may also contain:

- `standards-coverage.md`: an index of official standards and links to the relevant lesson-level standards tables.
- `standards/`: reference pages grouped by standard or strand, with official definitions and links to the corresponding mappings.
- `sources-and-scope.md`: official document names, their roles, mapping conventions, and established course boundaries.

These files support the curriculum and remain concise references. They do not replace the adjacent `standards.md` files or establish a second source of lesson objectives. Link to the companion standards tables rather than to removed concept headings or internal identifiers. Create shared references when useful; they are not mandatory additions to every course.

## Markdown and navigation

- Use plain Markdown headings, paragraphs, lists, and tables. Do not use HTML, including manual anchors or line-break tags.
- Keep each table row on one physical line. Use concise sentences or semicolons within cells instead of HTML or nested lists.
- Use LaTeX for mathematical notation. Within tables, escape literal pipe characters or use notation such as `\lvert` and `\rvert` so mathematical symbols do not create extra columns.
- Use relative Markdown links between curriculum documents. Course entries link to units; unit entries link to lessons; standards tables link back to their lessons.
- Use descriptive link labels and exact document or topic names. Do not use internal identifiers as labels.
- Keep course and unit documents substantially shorter than the material they summarize. Concision must not remove conditions necessary for correct interpretation.

## Authoring and review

Establish the intended coverage, organize it into topics, and write or revise the concept rows. Derive the lesson summaries, then the unit summaries, then the course overview. Synchronize standards tables with the final objective wording and update affected links whenever files or headings change.

Before considering the curriculum complete, review both structure and substance:

1. Every required topic has an explicit home; substantial omissions are not hidden behind unstated entry assumptions.
2. Each concept’s content, objectives, and proficiency criteria describe the same intended learning, with unambiguous methods, conditions, and exceptions.
3. Lesson, unit, and course summaries accurately reflect their children, including required and optional distinctions.
4. Every lesson has its companion standards file; concept names and objective wording match, and official identifiers and mapping qualifications are accurate.
5. Lesson tables use the exact four-column schema; standards tables use the exact three-column schema.
6. Internal concept/objective codes, HTML, source filesystem paths, and standards references inside lessons are absent.
7. Links resolve to existing files and headings; no reference depends on a removed concept heading or identifier.
8. Documents contain curriculum definitions only, with no instructional or assessment artifacts added.

Formatting checks cannot substitute for this substantive review. Read each lesson as the source another author will use to build learning materials, and correct any ambiguity or mismatch before deriving its parent summaries.
