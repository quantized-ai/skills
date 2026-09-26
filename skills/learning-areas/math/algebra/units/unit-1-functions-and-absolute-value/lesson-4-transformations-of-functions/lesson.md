# Lesson 1.4: Transformations of functions

Input and output transformations connect formulas, corresponding points, and graph features. Combined transformations are checked by mapping coordinates and comparing predictions with technology.

## Learning objectives

- Derive translation, reflection, and scaling effects and recover identifiable parameters from corresponding features.
- Map points, domains, and ranges under combined transformations and verify parameter effects with graphing technology.

## Learning outcome

By the end of this lesson, you should be able to predict and verify a transformed graph from its formula and recover parameters from corresponding features.

## Proficiency criteria

- Determine translation direction by solving for the input that reproduces an original output, rather than reading the inside sign as an outside shift.
- Map horizontal scales reciprocally and vertical scales directly, including the appropriate reflected coordinate for a negative multiplier.
- Distinguish output collapse at a zero outside multiplier from the unavailable coordinate mapping at a zero inside multiplier, preserving domain restrictions.
- Factor an inside affine expression before deriving the combined point mapping, and transform domain and range consistently.
- Recover transformation parameters when supplied correspondences determine them and explain any nonuniqueness or effect concealed by symmetry.
- Use graphing technology to compare predicted and plotted corresponding points in a common window, and resolve disagreements using the formula.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Horizontal and vertical translations** | For $g(x)=f(x-h)+k$, a point $(u,v)$ maps to $(u+h,v+k)$. Solving $x-h=u$ determines the horizontal shift; outside addition directly changes output. The parameters $h$ and $k$ are the horizontal and vertical differences between corresponding points when the transformation is translation alone. | Translate a function formula and graph horizontally and vertically using corresponding-point mappings. Recover translation parameters and the translated formula from corresponding points or features. | Derive the horizontal shift from the input equation. Map both coordinates with the correct signs. Recover parameters only from actual correspondences under translation alone and write the matching formula. |
| **Reflections and scale factors** | For $g(x)=af(bx)$ with real $a,b$ and $b\ne0$, $(u,v)$ maps to $(u/b,av)$ on domain $\{x:bx\in D_f\}$. Horizontal distances scale by $1/\lvert b\rvert$ and vertical distances by $\lvert a\rvert$; negative $b$ reflects input locations across the vertical axis and negative $a$ reflects outputs across the horizontal axis. Symmetry may conceal a reflection. If $a=0$, the same point mapping gives $(u/b,0)$: outputs collapse to zero only on the transformed domain. The plane mapping loses invertibility but remains defined. If $b=0$, division by $b$ prevents this coordinate mapping: when $0\in D_f$, the rule is the constant $af(0)$ on all real inputs unless externally restricted; otherwise the expression is undefined everywhere, even if $a=0$. | Determine coordinate effects of inside and outside multipliers, including reflections, and distinguish output collapse when the outside multiplier is zero from the unavailable coordinate mapping when the inside multiplier is zero. Distinguish horizontal and vertical scaling using corresponding points or a nonsymmetric graph, accounting for concealed symmetry effects. | Divide input coordinates by the inside multiplier and multiply outputs by the outside multiplier. Identify reflected coordinates and scale factors. Use suitable correspondences to separate horizontal from vertical effects. Preserve the original input restrictions when outputs collapse, distinguish that valid mapping from the unavailable mapping at a zero inside multiplier, and explain any effect concealed by symmetry. |
| **Combined transformations and experimental checks** | For $g(x)=af(b(x-h))+k$ with $a,b\ne0$, $(u,v)$ maps to $(h+u/b,av+k)$. Factor an affine inside expression before reading $h$. The new domain is $\{h+u/b:u\in D_f\}$ and range is $\{av+k:v\in R_f\}$; negative scales reverse interval endpoint order while preserving each endpoint’s membership. Specified correspondences and fixed parameters may determine unknown transformation parameters; symmetry can make recovery nonunique. Graphing technology checks predicted points and parameter effects in a common window. | Derive combined transformations to map points, domain, and range and recover parameters when the supplied correspondences determine them. Compare predicted and technology-generated graphs, varying one parameter at a time and resolving discrepancies by substitution. | Factor the inside expression and derive the full coordinate mapping. Transform all domain and range components, preserving membership and ordering endpoints correctly. Recover identifiable parameters and explain any nonuniqueness. Predict features before plotting both graphs in a common window. Check corresponding points, vary one parameter at a time, and resolve discrepancies using the formula. |
