# Private calibration: Unit 40 — Conic sections, ellipses, and hyperbolas

This is an agent/reviewer reference, not a fixed quiz. The original prompts and worked keys are maintained in the linked tutor sections below to avoid competing copies. Each contains a concrete task and answer; read the linked section when calibrating. They may be shown as teaching examples, so never treat them as fresh independent assessment after exposure. Generate actual assessment questions using [question-generation.md](question-generation.md).

Read each curriculum concept's complete objectives and proficiency criteria. The reference task is deliberately small and does not exhaust its concept. The table identifies further cases to sample before marking it secure; the shared [evidence rule](agent-guide.md#evidence-and-completion) applies. Accept equivalent mathematics, check reasoning and domains, and state which components remain untested.

## Keyed reference tasks and coverage

| Concept | Prompt and worked key | Additional assessment coverage |
| --- | --- | --- |
| Plane sections of a double cone | [Original task and checked key](lesson-1-conic-sections-and-distance-loci/tutor.md#plane-sections-of-a-double-cone) | Specify plane orientation relative to generators, not just a vague tilt; include degenerate apex cases and justify from the three-dimensional configuration. |
| Distance-locus definitions | [Original task and checked key](lesson-1-conic-sections-and-distance-loci/tutor.md#distance-locus-definitions) | Include impossible, degenerate and nondegenerate loci and focus-directrix parabola descriptions; retain sum/difference parameter restrictions. |
| Deriving the ellipse equation | [Original task and checked key](lesson-2-ellipses-from-focal-definitions/tutor.md#deriving-the-ellipse-equation) | Require derivation with radical-sign checks and $a>c\ge0$; vary horizontal/vertical axes and verify vertices and covertices in the focal definition. |
| Ellipse features and translated equations | [Original task and checked key](lesson-2-ellipses-from-focal-definitions/tutor.md#ellipse-features-and-translated-equations) | Include translations and circles as equal-denominator cases; distinguish semiaxis from full length and plot all named features. |
| Constructing ellipse equations | [Original task and checked key](lesson-2-ellipses-from-focal-definitions/tutor.md#constructing-ellipse-equations) | Mix foci, axes, points and vertices; enforce sufficient consistent data and distinguish axis-aligned scope from rotated conics. |
| Deriving the hyperbola equation | [Original task and checked key](lesson-3-hyperbolas-from-focal-definitions/tutor.md#deriving-the-hyperbola-equation) | Require radical derivation and both-branch verification with $0<a<c$; do not import the ellipse sign relation. |
| Hyperbola features and asymptotes | [Original task and checked key](lesson-3-hyperbolas-from-focal-definitions/tutor.md#hyperbola-features-and-asymptotes) | Include translated horizontal/vertical graphs, exact asymptote equations and branch-point checks; avoid treating rectangle corners as points on the curve. |
| Constructing hyperbola equations | [Original task and checked key](lesson-3-hyperbolas-from-focal-definitions/tutor.md#constructing-hyperbola-equations) | Mix vertices, foci, asymptotes and point constraints; verify adequacy and original data before choosing a unique equation. |
| Expanded conic equations | [Original task and checked key](lesson-4-conic-equations-and-eccentricity/tutor.md#expanded-conic-equations) | Include circle/ellipse/hyperbola/parabola and degenerate/empty axis-aligned relations; do not classify by coefficients while ignoring constants. |
| Eccentricity and focus-directrix form | [Original task and checked key](lesson-4-conic-equations-and-eccentricity/tutor.md#eccentricity-and-focus-directrix-form) | Include e<1, e=1, e>1 and circle e=0 with no finite directrix; state orientation and use perpendicular distance to the line. |

## Additional private transfer checks

These original keyed probes combine or stress concepts. They are calibration references, not a default quiz; generate unseen variants for students.

### Transfer check 1

**Prompt:** An ellipse has center (0,0), foci (0,±4) and major-axis length 10. Find equation and eccentricity.

**Key and required reasoning:** a=5,c=4,b=3, vertical major axis: $x^2/9+y^2/25=1$, e=4/5.

### Transfer check 2

**Prompt:** Classify x²-y²=0 and x²+y²=-1. May their feature formulas be used as if they were ordinary nondegenerate conics?

**Key and required reasoning:** First is the union of lines y=±x; second is empty over the reals. Nondegenerate hyperbola/ellipse feature formulas do not apply.

## Learner-response calibration

| Response | Judgment and follow-up |
| --- | --- |
| Derives $x^2/25+y^2/16=1$ from focal sum 10, foci $(\pm3,0)$, but omits the requested reverse implication. | Equation correct; derivation justification incomplete. Ask what guarantees reconstructed distances are nonnegative for every point. |
| Uses a different valid radical-elimination order with explicit sign checks. | Accept the alternative derivation; no fixed sequence is required. |
| Describes only the right branch of $x^2/9-y^2/16=1$. | Partial branch evidence. Ask how reflection exchanges the focal distances; do not discard the valid right-branch work. |
| Completes both branches after the tutor explains that reflection exchanges the distances. | Assisted completeness, with earlier independent algebra retained; reassess branch reasoning on a new orientation. |
| Calls $4(x-1)^2+9(y+2)^2=0$ an ellipse with zero axes. | The real locus is one point; ordinary nondegenerate feature formulas do not apply. |
| Gives a circle or ellipse label from a perspective cone sketch with no incidence information. | The drawing alone may not determine the cut. Request the apex and nappe relationships; repair an ambiguous prompt without penalizing the learner. |
