# Tutor: Lesson 3.3: Factoring quadratic trinomials

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Factor GCFs and multiply binomials to check cross terms. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 3.1 curriculum](../lesson-1-factoring-and-greatest-common-factors/lesson.md) and [tutor](../lesson-1-factoring-and-greatest-common-factors/tutor.md); [Lesson 3.2 curriculum](../lesson-2-common-binomial-factors-and-grouping/lesson.md) and [tutor](../lesson-2-common-binomial-factors-and-grouping/tutor.md). Load both files for any selected review.

## Teaching boundaries

Specify rational/integer search limits; failed rational factoring does not imply no real roots. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** A proposed factorization is 2x²+5x+2=(2x+2)(x+1). Diagnose using coefficients.

**Private reasoning key:** The proposal expands to 2x²+4x+2, so the middle coefficient is wrong. The correct factors (2x+1)(x+2) produce cross terms 4x+x=5x.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Monic quadratic trinomials

Curriculum reference: **Monic quadratic trinomials** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Factor $x^2-x-12$.

**Agent key:** Numbers $-4,3$ have sum $-1$ and product $-12$, so $(x-4)(x+3)$.

**Worked example:** Why does failure to factor $x^2-3$ over the rationals not imply no real roots?

**Worked reasoning:** The real roots are $\pm\sqrt3$; rational factor pairs do not cover irrational coefficients.


#### Teaching sequence

Derive (x+r)(x+s)=x²+(r+s)x+rs, so both sum and product must match. Use the product sign to constrain whether r,s have matching or opposite signs, then use their sum. If the constant is zero, extract x directly. Keep a rational search distinct from a statement about real roots.

#### Respond to student reasoning

**First hint:** Which pair must satisfy both a sum and a product?

If only rs is checked, ask for the combined cross coefficient. If signs fit the sum but not the product, use a two-column sum/product check. If x²−3 is called rootless, substitute √3 and distinguish factor systems.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Move through positive, negative and zero constants, then rationally irreducible cases. Ask for a trinomial built from prescribed factors as a reverse task.

#### Assessment evidence

Require simultaneous sum/product reasoning, all sign cases, zero-constant handling, expansion and an accurately limited conclusion from an exhaustive rational search.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Nonmonic quadratic trinomials

Curriculum reference: **Nonmonic quadratic trinomials** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Factor $6x^2+7x+2$.

**Agent key:** Split $7x$ as $3x+4x$: $3x(2x+1)+2(2x+1)=(3x+2)(2x+1)$.

**Worked example:** Factor $4x^2-10x+6$ completely.

**Worked reasoning:** First extract 2, then $2(2x^2-5x+3)=2(2x-3)(x-1)$. Keeping the GCF is necessary.


#### Teaching sequence

Extract any GCF first. For ax²+bx+c, find two numbers whose sum is b and product ac; replace only the middle term by that sum. Group the resulting four terms and verify that the common binomial really agrees. Expand to check leading coefficient, both cross products and constant, while retaining the earlier GCF.

#### Respond to student reasoning

**First hint:** What is the product $ac$ after removing common numerical factors?

If numbers multiply to c instead of ac, derive the split condition from the intended grouping. If the split changes b, add its two pieces before factoring. If the initial GCF vanishes, attach it to every later representation.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Begin with small nonmonic trinomials, then negative middle terms, nontrivial GCFs and cases without rational factors. Compare split-and-group with any valid alternative after one is understood.

#### Assessment evidence

Require a valid split, signed grouping, retained common factors, complete verification and justified search limits. Do not grade a correct alternative factorization method as wrong.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Decision model and graduated practice

For $x^2-x-12$, expanding $(x+r)(x+s)$ forces both $r+s=-1$ and $rs=-12$. Opposite signs are required; the negative magnitude is larger. Of magnitude pairs $(1,12),(2,6),(3,4)$, only the last differ by $1$. Hence $(x-4)(x+3)$, checked by $x^2+3x-4x-12$. For the zero-constant case, $x^2-5x=x(x-5)$. For $x^2+x+1$, the integer pairs with product $1$ have sums $2,-2$, neither $1$; this exhaustive monic integer search rules out rational linear factors.

For the nonmonic model, retain every consequential step:
$4x^2-10x+6=2(2x^2-5x+3)=2(2x^2-2x-3x+3)=2[2x(x-1)-3(x-1)]=2(2x-3)(x-1)$.
The split numbers multiply to $ac$ because, in $(px+q)(rx+s)$, the cross coefficients $ps,qr$ have product $(pr)(qs)=ac$ and sum $b$.

For $6x^2+x-2$, cue “Which terms create the middle coefficient?”; then supply $m+n=1,mn=-12$; only then give $6x^2+4x-3x-2$, leaving grouping to the learner. The completion is $(3x+2)(2x-1)$. This supplied split is faded practice, not independent technique evidence. If the product is already found, ask for expansion instead. Inspection with correct expansion earns factorization credit; an explicitly requested split-and-group demonstration remains unassessed until shown.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
