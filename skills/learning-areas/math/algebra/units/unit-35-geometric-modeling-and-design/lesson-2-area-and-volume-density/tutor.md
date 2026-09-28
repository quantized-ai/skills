# Tutor: Lesson 35.2: Area and volume density

Agent-facing delivery guidance for [the curriculum](lesson.md). Load both with [the shared agent guide](../agent-guide.md). Use [fresh-question generation](../question-generation.md) for all practice and assessment; calibration examples may be taught, but exposed examples are not independent evidence.

## Prerequisites and routing

Check area/volume and compound units; distinguish a density given per square unit from one per cubic unit.

Within this unit, revisit [the previous lesson](../lesson-1-geometric-models-and-measurement/tutor.md) only for the specific prerequisite gap; do not require repeating unrelated work.

## Teaching boundaries

Use piecewise uniform models and explicit additive measures; defer continuously varying density integration.

## Lesson workflow

Use the named prerequisite check only when needed; honor a direct explanation or assessment request. In learn/practice mode, sequence the lesson as follows:

- **Density relationships:** Write quantity=rate×geometric measure and cancel units visibly.

- **Composite density models:** Compute each region's quantity separately and sum only nonoverlapping measures.

Use the error-analysis activity after its underlying method is accessible, then move along the concept-specific practice progressions. For assessment, skip these teaching steps and generate fresh tasks from the explicit checklists.

## Reasoning and error-analysis activity

**When to use:** In learn or practice mode after the first relevant method is intelligible. Ask for a justification or counterexample before revealing the key.

**Prompt:** A 1 m² patch holds 100 seeds/m² and a 9 m² patch 20 seeds/m². A learner gives average density 60. Test that with the total count.

**Agent key and discussion:** Counts 100 and 180 total 280 over 10 m², so average 28 seeds/m². The 60 answer gives equal weight to very unequal areas and predicts an incorrect total 600.

**Respond to the attempt:** Identify which asserted step the student can justify and preserve that evidence. If they only state the final correction, ask them to test the original claim or identify its missing hypothesis. After feedback, let them revise; use a fresh configuration for independent evidence.

## Concept guidance

### Density relationships

Curriculum reference: **Density relationships** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** At uniform 12 people/m² over 5 m², is the modeled count 12/5?
- **Diagnostic key:** No: multiply to obtain 60 people; units determine the operation.
- **Worked-example prompt:** A uniform slab has volume 0.08 m³ and density 750 kg/m³. Find its mass and explain the units.
- **Worked model and reasoning:** $m=750(0.08)=60$ kg; cubic meters cancel. If a volume is given in cm³, $1\text{ m}^3=10^6\text{ cm}^3$, not 100 cm³.
- **First hint:** Which geometric measure cancels the denominator in the density unit?

#### Learn

- Write quantity=rate×geometric measure and cancel units visibly.
- Separate area density from volume density and mass from object count.
- Convert dimensions before powers or convert area/volume units by the appropriate squared/cubed factor.
- Solve for density or required size by rearranging with a positive denominator.

#### Practice progression

Start with compatible units, then conversions, inverse-size questions and physically justified uniformity assumptions.

**Further variation and generation checks:** Include area density, mass/number density and inverse-size questions; require uniformity assumptions and squared/cubed conversions.

#### Misconceptions and responsive feedback

If a density is applied to a length, ask which units remain after multiplication. If a fractional number of required objects occurs, distinguish an expected count from a purchasing/packing integer requirement.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Track compound units, distinguish mass density from number density, justify any uniformity assumption, and convert area or volume units correctly.

**Task range to sample:** Include area density, mass/number density and inverse-size questions; require uniformity assumptions and squared/cubed conversions.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

### Composite density models

Curriculum reference: **Composite density models** in [lesson.md](lesson.md#concepts). Its content and proficiency remain authoritative; the activities below collect evidence for that concept.

#### Calibration examples — agent keys

- **Diagnostic prompt:** Two equal-density regions of different sizes are combined. Does their total density double?
- **Diagnostic key:** No; both quantity and geometric measure increase, leaving density unchanged.
- **Worked-example prompt:** Two patches have areas 30 and 70 m² and densities 4 and 9 plants/m². Find total plants and mean density.
- **Worked model and reasoning:** Total $30(4)+70(9)=750$ plants; overall density $750/100=7.5$ plants/m². The unweighted mean 6.5 ignores unequal areas.
- **First hint:** Compute each patch's count before averaging.

#### Learn

- Compute each region's quantity separately and sum only nonoverlapping measures.
- Derive the weighted mean as total quantity divided by total area/volume.
- Test equal-size and equal-density special cases.
- Explain how a correct overall density can still hide a locally overloaded region.

#### Practice progression

Progress from equal areas to unequal sizes, recover an unknown local density, then compare an overall average with local constraints.

**Further variation and generation checks:** Vary sizes and densities, include volume mixtures without assuming additive volumes unless stated, and distinguish local from overall density.

#### Misconceptions and responsive feedback

If densities are averaged without weights, ask the learner to imagine one patch shrinking almost to zero: it should scarcely affect the total. If volumes change on mixing, additive volume needs an explicit assumption.

#### Assess

Generate fresh questions without showing the method or key. Use this explicit coverage checklist; a single worked example does not cover every case:

- Weight each local density by the corresponding area or volume, distinguish average density from local density, and interpret the result within the chosen partition and assumptions.

**Task range to sample:** Vary sizes and densities, include volume mixtures without assuming additive volumes unless stated, and distinguish local from overall density.

Required proof, construction, graphing or technology components need actual evidence of that action. When help teaches a mathematical step, mark the attempt assisted and collect a fresh independent task later; preserve successful components while missing cases remain pending.

## Lesson completion

Apply [the shared evidence rule](../agent-guide.md#evidence-and-completion) to each concept and its listed cases. Report which methods and representations were independently demonstrated, which needed support, and what is still untested. Do not mark the lesson secure from a short sample or an unobserved graph/proof/tool action. Offer the next lesson or focused repair according to the student's request and evidence.

## Teaching sources

The [source record](../teaching-sources.md) distinguishes actually consulted teacher resources and mathematical references from locally designed activities. The diagnostic, worked and error-analysis tasks here are original. Teacher-source ideas are implemented through eliciting reasoning, testing a specific claim, targeted feedback and revision, not through reproducing published exercises.
