# Tutor: Lesson 33.2: Circle angle theorems

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check central angles, radii and triangle angle sums; review arc selection when a vertex lies on the major/minor portion.

Within this unit, revisit [the previous lesson](../lesson-1-circle-similarity-chords-and-tangents/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Supply exact incidence and arc order; defer segment-product calculations and coordinate-circle methods as required proof techniques.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Central and inscribed angles:** Draw the diameter through the angle vertex.

- **Cyclic quadrilaterals:** Prove the forward result by partitioning 360 degrees into the two intercepted arcs.

- **Tangent, chord, and secant angles:** Classify the vertex as on, inside or outside the circle before choosing a relation.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A quadrilateral's adjacent angles are 70° and 110°. Someone declares it cyclic. Ask what condition is missing and why one sketch cannot fix it.

**Agent key and discussion:** The converse requires a supplementary pair of opposite angles in a nondegenerate convex quadrilateral. Adjacent supplementary angles alone do not establish cyclicity; parallel-sided noncyclic examples are possible.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Central and inscribed angles

Curriculum reference: **Central and inscribed angles** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** An inscribed angle has vertex on the minor arc AB. Does it intercept that minor arc?
- **Diagnostic key:** No; it intercepts the other arc AB that excludes its vertex.
- **Worked-example prompt:** An inscribed angle intercepts the arc of measure 146 degrees not containing its vertex. Find the angle and outline the theorem's proof.
- **Worked model and reasoning:** $73^\circ$. Draw the diameter through the vertex; radii create isosceles triangles. In the diameter-side case the central angle is twice the inscribed angle by the triangle sum. Add or subtract two such cases when the center is inside or outside the angle.
- **First hint:** Which arc is cut off by the angle on the side away from its vertex?

#### Learn

- Draw the diameter through the angle vertex.
- In each radius isosceles triangle identify equal base angles and use the exterior-angle relation to double them at the center.
- Add the two identities when the diameter lies inside the angle; subtract when outside.
- Include the case where the diameter is one side.

#### Practice progression

Start with diameter angles, then same-arc comparisons and major arcs, and finally the complete proof split by center position.

**Further variation and generation checks:** Include all center positions in proof coverage, diameter angles, and major intercepted arcs; do not rely on a diagram drawn to scale.

#### Misconceptions and responsive feedback

If half the smaller arc is always taken, mark the angle vertex on the circle and trace the arc it cannot contain. If a numeric check is offered as proof, ask for the diameter argument for arbitrary angle measures.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Account for the center lying on a side, inside, or outside the angle in the proof, and choose the arc opposite the angle’s vertex.

**Task range to sample:** Include all center positions in proof coverage, diameter angles, and major intercepted arcs; do not rely on a diagram drawn to scale.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Cyclic quadrilaterals

Curriculum reference: **Cyclic quadrilaterals** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** A convex quadrilateral has opposite angles 82° and 98°. What circle conclusion follows?
- **Diagnostic key:** Their sum is 180°, so it is cyclic by the converse.
- **Worked-example prompt:** A convex cyclic quadrilateral has opposite angles 4x+10 and 2x+20 degrees. Find them and justify the relation.
- **Worked model and reasoning:** Their intercepted arcs partition 360 degrees, so the angles total 180. Thus $6x+30=180$, $x=25$, angles 110 and 70 degrees. The supplementary-opposite-angle converse applies to a nondegenerate convex quadrilateral.
- **First hint:** Are the named angles opposite or adjacent?

#### Learn

- Prove the forward result by partitioning 360 degrees into the two intercepted arcs.
- Explain the exterior-angle equality by supplementing an interior angle.
- For the converse, draw the circle through three vertices and use the inscribed-angle locus with the convex-side condition to locate the fourth on it.

#### Practice progression

Calculate missing cyclic angles, derive the arc proof, then test cyclicity of convex quadrilaterals and reject insufficient adjacent-angle data.

**Further variation and generation checks:** Include the converse and exterior-angle property; require convexity and avoid inferring cyclicity from adjacent angle sums.

#### Misconceptions and responsive feedback

If adjacent angles are used, label opposite vertex pairs explicitly. If concavity or a collapsed figure is possible, the stated converse cannot be applied without checking hypotheses.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify opposite rather than adjacent angles, explain the intercepted-arc proof, and retain convexity for the stated converse.

**Task range to sample:** Include the converse and exterior-angle property; require convexity and avoid inferring cyclicity from adjacent angle sums.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Tangent, chord, and secant angles

Curriculum reference: **Tangent, chord, and secant angles** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** An exterior circle angle uses far/near arcs 180° and 60°. Is the angle 120°?
- **Diagnostic key:** No: half their difference is 60°.
- **Worked-example prompt:** Two secants meet outside a circle and intercept far and near arcs of 150 and 54 degrees. Find the angle and compare an interior-chord case with these arc measures.
- **Worked model and reasoning:** Exterior angle $(150-54)/2=48^\circ$. For an interior angle whose two relevant opposite arcs are 150 and 54 degrees, the angle is $(150+54)/2=102^\circ$. Use inscribed angles and the triangle exterior-angle theorem to derive the exterior difference.
- **First hint:** Is the vertex inside, on, or outside the circle?

#### Learn

- Classify the vertex as on, inside or outside the circle before choosing a relation.
- For tangent-chord angles draw the radius perpendicular to the tangent and connect to an inscribed angle.
- For interior/exterior intersections extend a chord to form a triangle; inscribed angles plus the angle-sum/exterior-angle relation produce sum/difference formulas.

#### Labeled derivation models

**Two secants, exterior vertex.** Specify collinear points in orders P–A–B and P–C–D, with P outside and A,C the nearer circle intersections. Let the far intercepted arc BD not containing A have measure β and the near arc AC not containing D have measure α. Draw AD. In triangle PAD, the inscribed-angle theorem gives ∠BAD=β/2 and ∠PDA=∠CDA=α/2. Because AP and AB are opposite rays, ∠PAD=180°−β/2. The triangle sum therefore gives

$\angle APD+(180^\circ-\beta/2)+\alpha/2=180^\circ,$

so ∠APD=(β−α)/2. The 150°/54° numerical model follows as 48°. Require the named ray orders and the two specified arcs; a picture's apparent size is not a premise.

**Two chords, interior vertex.** Put four points in cyclic order A,C,B,D and let chords AB and CD meet at E inside the circle. In triangle AEC, ∠EAC=∠BAC is half arc BC, and ∠ECA=∠DCA is half arc DA. Thus

$\angle AEC=180^\circ-\tfrac12(\widehat{BC}+\widehat{DA})
=\tfrac12(\widehat{AC}+\widehat{BD}),$

because these four successive arcs sum to 360°. The angle and its vertical opposite therefore use the sum of their opposite intercepted arcs, not the exterior difference.

**Tangent specializations.** For chord AB with minor central angle α=∠AOB, triangle OAB is isosceles, so ∠OAB=(180°−α)/2. A tangent at A is perpendicular to OA; the tangent–chord angle intercepting the minor arc is 90°−∠OAB=α/2. Its supplementary angle is half the major arc; the diameter endpoint case gives 90° directly. For a tangent PT and secant P–A–B, choose the near arc TA and far arc TB bounding the angle. Triangle PAT has ∠PAT=180°−(arc TB)/2 and ∠PTA=(arc TA)/2 by the just-proved tangent–chord relation. Its angle sum gives ∠APT=[arc TB−arc TA]/2. For two tangents PA,PB, the right angles at A,B in OAPB yield ∠APB=180°−∠AOB; with minor arc α this is [(360°−α)−α]/2. These are justified specializations, not an assumption that a secant formula automatically applies to tangency.

During learning, draw and label each required configuration or request the student's diagram, checking incidences and arc selections before the equation. During assessment, require the student to supply the angle relations on a fresh labeling rather than copying these names.

#### Practice progression

Begin with vertex classification, then tangent-chord and interior cases, then two-secants/tangent-secant/two-tangent cases with labeled arcs and derivations.

**Further variation and generation checks:** Cover tangent-chord, interior-chord, two-secant and two-tangent cases with explicitly labeled arcs and a derivation.

#### Misconceptions and responsive feedback

If arc measures are added outside, ask which smaller angle must be subtracted when extending the triangle. If the vertex is at the center, use the full arc measure instead of any half-arc theorem.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Identify the angle location before choosing a formula, label both arcs, and derive the sum or difference relationship from inscribed angles and triangle angle relationships.

**Task range to sample:** Cover tangent-chord, interior-chord, two-secant and two-tangent cases with explicitly labeled arcs and a derivation.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Decision rehearsal and fading

**Vertex position determines the formula and the arcs.** On a circle, let A,B,C,D occur in that cyclic order. Chords AC and BD meet inside at P, with arc AB $80^\circ$ and arc CD $120^\circ$. Then $\angle APB=(80+120)/2=100^\circ$; its adjacent angle is $80^\circ$. For an exterior point with two secants and far/near intercepted arcs $160^\circ$ and $60^\circ$, the exterior angle is $(160-60)/2=50^\circ$. These are different configurations, not interchangeable arc data on the first drawing.

If the learner subtracts for the interior angle, ask where P lies relative to the circle. Next mark the angle and its vertical angle and their intercepted arcs; then write their half-sum and leave calculation. Fade by keeping the vertex interior and changing arcs to $70^\circ,110^\circ$ (angle $90^\circ$). Require a theorem derivation separately when assessing proof; the multiplier alone does not demonstrate arc selection.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
