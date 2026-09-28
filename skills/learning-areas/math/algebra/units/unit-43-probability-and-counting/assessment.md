# Private calibration: Unit 43 — Probability and counting

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Sample spaces and events | [Original task and checked key](lesson-1-sample-spaces-and-event-algebra/tutor.md#sample-spaces-and-events) | Include unequal weights, exhaustive sample spaces and set operations; never infer equal likelihood merely from a finite list. |
| Theoretical and empirical probability | [Original task and checked key](lesson-1-sample-spaces-and-event-algebra/tutor.md#theoretical-and-empirical-probability) | Compare theoretical and empirical estimates with named trial assumptions; include fluctuation and reject gambler's-fallacy predictions. |
| Geometric probability from area | [Original task and checked key](lesson-1-sample-spaces-and-event-algebra/tutor.md#geometric-probability-from-area) | Include partially overlapping regions, holes and sectors; use area of intersection with the sample region and retain finite positive denominator area. |
| Addition and multiplication principles | [Original task and checked key](lesson-2-counting-arrangements-and-selections/tutor.md#addition-and-multiplication-principles) | Include restricted products, disjoint cases, overlap corrections and changing stage choices; distinguish code strings from ordinary numbers. |
| Permutations and combinations | [Original task and checked key](lesson-2-counting-arrangements-and-selections/tutor.md#permutations-and-combinations) | Cover replacement/no replacement, repeated symbols and probability ratios using matching numerator/denominator conventions. |
| Conditional probability in tables and diagrams | [Original task and checked key](lesson-3-conditional-probability-and-independence/tutor.md#conditional-probability-in-tables-and-diagrams) | Require two-way tables, trees, Venn and area interpretations; include zero-probability conditioning as undefined. |
| Independence and disjointness | [Original task and checked key](lesson-3-conditional-probability-and-independence/tutor.md#independence-and-disjointness) | Include empirical tables, disjoint nonzero events, zero-probability exceptions and without-replacement dependence. |
| Addition and complement rules | [Original task and checked key](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#addition-and-complement-rules) | Include complements, impossible inconsistent supplied probabilities and inclusive/exclusive wording; enforce probability bounds. |
| Multiplication along dependent stages | [Original task and checked key](lesson-4-addition-and-multiplication-of-probabilities/tutor.md#multiplication-along-dependent-stages) | Include dependent trees, replacement, zero branches and complementary events; multiply within paths and add disjoint paths. |
| Fair random selection | [Original task and checked key](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#fair-random-selection) | Include equal/proportional allocation and rejection schemes; state independent uniform draws and distinguish almost-sure termination from a finite bound. |
| Base rates and decision consequences | [Original task and checked key](lesson-5-fair-allocation-and-probability-based-choices/tutor.md#base-rates-and-decision-consequences) | Use nonmedical screening contexts, vary base rates and explicit costs, and require sensitivity rather than a universal decision recommendation. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** A finite model has P(A)=0 and P(B)=0.3. Are A and B independent? Is P(B|A) defined?

**Key and required reasoning:** P(A∩B)=0=P(A)P(B), so independent. P(B|A) is undefined since its denominator is zero; independence must not be judged with that undefined conditional.

### Transfer check 2

**Prompt:** Select two people uniformly without replacement from four, two wearing red. Find probability both wear red using ordered and unordered counts.

**Key and required reasoning:** Ordered: (2/4)(1/3)=1/6. Unordered: one all-red pair among six pairs, also 1/6. Mixing an ordered numerator with an unordered denominator would be invalid.

## Response calibration

| Learner work | Judgment and next action |
| --- | --- |
| Reports $3/5$ for one red and one blue from a 3-red/2-blue bag, with no reasoning requested. | Correct answer evidence; method and replacement reasoning remain unelicited. Request a neutral explanation before broader claims. |
| Gives the same number when explicitly asked to construct and label a probability tree. | Correct probability, incomplete requested representation. Ask for the tree without supplying branches. |
| Uses $\binom31\binom21/\binom52$ with correct interpretation. | Valid alternative probability method; it does not by itself demonstrate tree construction if that is separately targeted. |
| Reports $3/10$ after considering only RB. | One correct path, incomplete event. Ask whether BR is included; after teaching the missing path, a corrected total is assisted. |
| Correctly obtains $9/50$ from the chess/music table and calls it $P(C\mid M)$. | Joint count calculation correct, conditioning denominator wrong. Ask who remains in the conditioning population. |
| Declares population independence proved by equality of two sample proportions. | Sample relationship is usable descriptive evidence; exact population independence is not established by a finite sample equality. |
