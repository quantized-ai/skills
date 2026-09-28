# Tutor: Lesson 2.7: Polynomial identities and equivalence

Read the [curriculum](lesson.md), [agent guide](../agent-guide.md), and this file together. The curriculum defines content, objectives, and proficiency; these original examples and delivery choices implement it. Keep keys private until feedback is appropriate. A worked or exposed item is not independent assessment evidence.

## Prerequisites and routing

Valid expansions and the difference between a claim and its evidence. Review only a demonstrated gap; do not require a full placement test before a requested explanation or assessment.

Relevant earlier lessons: [Lesson 2.3 curriculum](../lesson-3-standard-form-and-evaluation/lesson.md) and [tutor](../lesson-3-standard-form-and-evaluation/tutor.md); [Lesson 2.5 curriculum](../lesson-5-distributive-multiplication/lesson.md) and [tutor](../lesson-5-distributive-multiplication/tutor.md); [Lesson 2.6 curriculum](../lesson-6-special-products/lesson.md) and [tutor](../lesson-6-special-products/tutor.md). Load both files for any selected review.

## Teaching boundaries

Prove polynomial identities; do not infer a general primitive-triple theorem from examples. The concept-level evidence checklists below implement the existing curriculum; they do not create extra objectives.

## Reasoning activity

Use after the relevant basic procedure is accessible. Reveal the prompt first, let the student identify and repair the reasoning, and close with the correct explanation. In assess mode generate a new task instead of administering this exposed example.

**Prompt:** Does agreement at x=0,1 prove x³=x²? Give the shortest valid refutation and describe what a proof would need.

**Private reasoning key:** No: at x=2, 8≠4. A proof of a true identity would cover every permitted input, for example through valid transformations or matching collected coefficients.

Ask what changed between the original claim and the repaired explanation. If the response is only a guessed answer, use the corresponding concept’s targeted cue below; after feedback, collect a new independent attempt.

## Concept guidance

### Proving and disproving polynomial identities

Curriculum reference: **Proving and disproving polynomial identities** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Prove or refute $(x+2)(x-2)+4=x^2$ for real $x$.

**Agent key:** Expansion gives $x^2-4+4=x^2$ for every real input.

**Worked example:** Are $x^2+x$ and $2x$ identical because they agree at 0 and 1?

**Worked reasoning:** No: at 2 their values are 6 and 4. Coefficients differ; two agreeing samples do not prove this claim.


#### Teaching sequence

State the permitted input set first. Prove an identity by transforming one side into the other or expanding both independently and matching every coefficient. For a false claim, one allowed input suffices. In the worked comparison at 0 and 1, expose the missing evidence by evaluating at 2, then explain what symbolic mismatch the counterexample reveals.

#### Respond to student reasoning

**First hint:** Can you compare collected coefficients without assuming the conclusion?

If the desired equality is assumed at the start, ask for two independently computed sides. If matching samples are called proof, challenge the universal quantifier: what covers the unchecked inputs? If a counterexample is excluded by the task domain, replace it.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Alternate true and false claims, numeric counterexamples and coefficient arguments. Ask the student to repair a false identity with the missing term and verify the repaired version generally.

#### Assessment evidence

Require a domain statement, a noncircular proof and a valid refutation. Distinguish proof of expression equivalence from finding particular solutions of an equation.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

### Identities and numerical relationships

Curriculum reference: **Identities and numerical relationships** in the [curriculum concept table](lesson.md#concepts). Read that row’s Content, Learning Objectives, and Proficiency criteria before using these activities.

#### Calibration and worked reasoning

**Diagnostic prompt:** Use $u=3,v=1$ in the polynomial Pythagorean identity and classify the triple.

**Agent key:** Legs are 8 and 6, hypotenuse 10; $64+36=100$. Their common factor 2 makes it nonprimitive.

**Worked example:** Use $u=4,v=1$ and justify the identity for general real $u,v$.

**Worked reasoning:** The triple is $(15,8,17)$ and primitive. Expansion on the left gives $u^4+2u^2v^2+v^4=(u^2+v^2)^2$.


#### Teaching sequence

Expand (u²−v²)² and (2uv)² separately, collect the mixed terms, and compare with (u²+v²)². Then impose positive integers u>v to obtain positive triangle legs. Label the largest component as hypotenuse and check the numerical square sum. Compute a common divisor of all three lengths before calling the triple primitive.

#### Respond to student reasoning

**First hint:** Which mixed terms cancel, and which remain?

If the negative mixed term is omitted, return to the binomial square. If a valid triple is automatically called primitive, compare (8,6,10) with its divided triple. If u=v is chosen, identify the zero leg.

Give only the cue relevant to the observed error; wait for a revision before showing a worked step. Record any mathematical help as assistance.

#### Practice progression

Derive symbolically, generate two integer examples, then contrast primitive and nonprimitive results. Ask why numerical examples alone do not prove the generating identity.

#### Assessment evidence

Assess mixed-term accounting, input constraints, leg/hypotenuse identification, exact verification and the common-factor criterion. Do not add an unproved general primitive-triple classification requirement.

Use the [fresh-question policy](../question-generation.md); the two calibration examples above are exposed learning material, not the default quiz. Collect the curriculum's full proficiency evidence, retain demonstrated components, and reassess unresolved cases with new tasks.

## Completion and handoff

Apply the [shared evidence rubric](../agent-guide.md#evidence-rubric) separately to each referenced curriculum concept. Completion requires independent evidence covering all required proficiency, including transfer and any tool-dependent component. Summarize demonstrated strengths, unresolved gaps, support used, and the next task; never infer durable retention from this session.

## Teaching sources

The [source record](../teaching-sources.md) documents consulted teacher guidance and mathematical references, their local application, and evidence limits. These numerical tasks and AI delivery rules are locally authored.
