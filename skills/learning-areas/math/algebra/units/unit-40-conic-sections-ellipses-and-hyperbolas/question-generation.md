# Fresh-question generation: Unit 40 — Conic sections, ellipses, and hyperbolas

Every practice set, quiz and reassessment uses new questions chosen for the requested concept and current evidence. Fixed tutor examples and [calibration references](assessment.md) are not a student quiz. Read [agent-guide.md](agent-guide.md) and both files for the selected lesson.

## Generate, verify, then present

1. Select curriculum concepts and the exact still-missing proficiency components. Label a short quiz as a sample. Include procedural reasoning and a changed representation, interpretation, proof or model as appropriate; do not replace proof with arithmetic.
2. Choose a family from the table. Vary more than surface wording: change the unknown, data arrangement, representation or reasoning demand. Keep difficulty comparable on retries; do not introduce untaught requirements.
3. Construct consistent givens, explicit domains/units and enough information for a determinate answer, or explicitly ask the student to identify insufficient or impossible data.
4. Solve privately, with a complete key, accepted equivalents, required reasoning and approximation tolerance. Check with an independent route when available: substitution, exact arithmetic, inverse operation, geometric constraints, exhaustive finite enumeration or verified numerical tools. Test domain boundaries and exceptional cases. Reject and regenerate an uncertain item before showing it.
5. Compare with available history, then present one question without the key or suggestive answer choices. Feedback follows the student's response. Do not invent an external generator, randomness or persistent memory.

Specify axis-aligned scope and full versus semi-axis lengths. Ellipses have a²=b²+c²; hyperbolas have c²=a²+b² with positive a,b for nondegenerate forms. Restore radical sign restrictions after squaring focal definitions. Distinguish empty/point/line loci from genuine conics and insufficient constraints from unique constructions. Pair each directrix with its focus.

## Constructive families and verification

- **Choose valid geometry first:** generate ellipse a>c≥0 and b²=a²−c², or hyperbola 0<a<c and b²=c²−a², then translate and choose orientation. Derive focal sums/differences and verify named points in both the standard equation and the original distance definition.
- **Construct-and-recover:** expand a known standard equation to produce a square-completion task; re-expand the student's normalized form to verify constants. Include boundary constants giving a point, lines or empty real locus rather than classifying from coefficient signs alone.
- **Data sufficiency:** supply exactly enough independent center/orientation/size constraints for a unique conic, or explicitly ask whether uniqueness follows. Asymptote slopes fix ratios rather than hyperbola scale. A circle is an ellipse special case, but it has no finite directrix in the chosen e=0 model.
- **Proof/graph transfer:** require valid radical elimination with reverse sign checks, both hyperbola branches and axis-specific asymptote slopes. For eccentricity pair each focus with its matching directrix and verify a distance ratio at a point. Keep rotated xy conics outside this axis-aligned method.

## Concept families and required variation

| Concept and lesson | Generation constraints and variation |
| --- | --- |
| [40.1 Plane sections of a double cone](lesson-1-conic-sections-and-distance-loci/tutor.md#plane-sections-of-a-double-cone) | Specify plane orientation relative to generators, not just a vague tilt; include degenerate apex cases and justify from the three-dimensional configuration. |
| [40.1 Distance-locus definitions](lesson-1-conic-sections-and-distance-loci/tutor.md#distance-locus-definitions) | Include impossible, degenerate and nondegenerate loci and focus-directrix parabola descriptions; retain sum/difference parameter restrictions. |
| [40.2 Deriving the ellipse equation](lesson-2-ellipses-from-focal-definitions/tutor.md#deriving-the-ellipse-equation) | Require derivation with radical-sign checks and $a>c\ge0$; vary horizontal/vertical axes and verify vertices and covertices in the focal definition. |
| [40.2 Ellipse features and translated equations](lesson-2-ellipses-from-focal-definitions/tutor.md#ellipse-features-and-translated-equations) | Include translations and circles as equal-denominator cases; distinguish semiaxis from full length and plot all named features. |
| [40.2 Constructing ellipse equations](lesson-2-ellipses-from-focal-definitions/tutor.md#constructing-ellipse-equations) | Mix foci, axes, points and vertices; enforce sufficient consistent data and distinguish axis-aligned scope from rotated conics. |
| [40.3 Deriving the hyperbola equation](lesson-3-hyperbolas-from-focal-definitions/tutor.md#deriving-the-hyperbola-equation) | Require radical derivation and both-branch verification with $0<a<c$; do not import the ellipse sign relation. |
| [40.3 Hyperbola features and asymptotes](lesson-3-hyperbolas-from-focal-definitions/tutor.md#hyperbola-features-and-asymptotes) | Include translated horizontal/vertical graphs, exact asymptote equations and branch-point checks; avoid treating rectangle corners as points on the curve. |
| [40.3 Constructing hyperbola equations](lesson-3-hyperbolas-from-focal-definitions/tutor.md#constructing-hyperbola-equations) | Mix vertices, foci, asymptotes and point constraints; verify adequacy and original data before choosing a unique equation. |
| [40.4 Expanded conic equations](lesson-4-conic-equations-and-eccentricity/tutor.md#expanded-conic-equations) | Include circle/ellipse/hyperbola/parabola and degenerate/empty axis-aligned relations; do not classify by coefficients while ignoring constants. |
| [40.4 Eccentricity and focus-directrix form](lesson-4-conic-equations-and-eccentricity/tutor.md#eccentricity-and-focus-directrix-form) | Include e<1, e=1, e>1 and circle e=0 with no finite directrix; state orientation and use perpendicular distance to the line. |

## Checked anchors for task demand

| Use | Task and key | Demand |
| --- | --- | --- |
| Routine ellipse construction | Center $(0,0)$, foci $(\pm4,0)$, major-axis length 10: $x^2/25+y^2/9=1$. | Halve full length, recover $b^2$, horizontal placement. |
| Intended same-demand retake | Center $(1,-2)$, foci $(1\pm4,-2)$, major-axis length 10: $(x-1)^2/25+(y+2)^2/9=1$. | Same parameter arithmetic, with translation. If translation is new to the learner, use a centered variant instead. |
| Higher demand | Derive that equation from the distance sum and justify the reverse implication. | Adds radical algebra and a general sign argument; routine feature extraction cannot establish this. |
| Boundary transfer | Classify $4(x-1)^2+9(y+2)^2=0$ and the same left side equal to $-1$. | Point and empty set, respectively; tests meaning of the normalized constant. |

For cone-section tasks specify whether the plane passes through the apex and whether it meets one or both nappes. The parabola orientation is parallel to exactly one generator direction, not merely at least one. Independently check spatial descriptions before labeling a diagram.
