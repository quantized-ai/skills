# Lesson 1.4: Transformations of functions

[Unit 1: Function language, transformations, and absolute value](../unit.md) · [Algebra 2](../../../curriculum.md)

Input and output transformations connect formulas, corresponding points, and graph features. Combined transformations are checked by mapping coordinates and comparing predictions with technology.

## Learning objectives

- Relate translations, reflections, and scale factors to formulas and coordinate changes.
- Apply combined transformations to points, domains, and ranges and verify their effects.

## Learning outcome

By the end of this lesson, you should be able to predict and verify a transformed graph from its formula and recover parameters from corresponding features.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Determine translation direction by solving for the input that reproduces an original output, rather than reading the inside sign as an outside shift.
- Map horizontal scales reciprocally and vertical scales directly, including the appropriate reflected coordinate for a negative multiplier.
- Factor an inside affine expression before deriving the combined point mapping, and transform domain and range consistently.
- Recover transformation parameters when the supplied correspondences determine them and explain any symmetry that hides an effect.
- Use graphing technology to compare predicted and plotted corresponding points in a common window, and resolve disagreements using the formula.

## Concepts

### Concept U01-L04-C01: Horizontal and vertical translations

**Content**

- $f(x)+k$ and $f(x-h)$.
- Point mapping $(u,v)\mapsto(u+h,v+k)$.
- Recovering translation parameters from corresponding points.

**Learning objectives**

- **U01-L04-C01-O1:** Translate a function graph and formula horizontally and vertically.
  - Standards: CCSS HSF-BF.B.3 (direct).
- **U01-L04-C01-O2:** Determine translation parameters from corresponding graph features.
  - Standards: CCSS HSF-BF.B.3 (direct).

**Proficiency criteria**

- Derive a horizontal translation by solving for the input that preserves an original function value.
- Map both coordinates correctly under combined horizontal and vertical translations.
- Write the translated formula and recover translation parameters from corresponding points or features.

**Explanation**

Outside addition changes the output directly. Inside subtraction changes the input at which a previous output occurs: to make $x-h=u$, use $x=u+h$. Thus $f(x-3)$ moves the graph right three, and $f(x+3)$ moves it left three. This reasoning works across function families.

**Worked examples**

If $f$ contains $(1,4)$, then $g(x)=f(x-2)-5$ contains $(3,-1)$. If a known vertex moves from $(0,0)$ to $(-3,2)$ by translation alone, the new formula is $f(x+3)+2$.

**Exercises**

1. Describe $f(x+4)+1$. **Answer:** Left four and up one.
2. A point $(2,-1)$ moves to $(7,3)$ by translation. Write $g$ in terms of $f$. **Answer:** $g(x)=f(x-5)+4$.

**Assessment**

The graph of $f$ includes $(-2,3)$ and $(1,0)$. Map both under $g(x)=f(x+2)-1$. Then give the formula that instead shifts $f$ right one and up four. **Expected:** $(-4,2)$, $(-1,-1)$; $f(x-1)+4$. **Rubric, 4 points:** point mapping (2; O1), recovered parameters/formula (2; O2).

### Concept U01-L04-C02: Reflections and scale factors

**Content**

- $af(x)$ versus $f(bx)$ for nonzero $a,b$.
- Reflection across the $x$-axis or $y$-axis.
- Horizontal factor $1/|b|$; vertical factor $|a|$.

**Learning objectives**

- **U01-L04-C02-O1:** Determine the coordinate effects of outside and inside multipliers, including negative multipliers.
  - Standards: CCSS HSF-BF.B.3 (direct).
- **U01-L04-C02-O2:** Distinguish horizontal and vertical scaling using points or a nonsymmetric graph.
  - Standards: CCSS HSF-BF.B.3 (direct).

**Proficiency criteria**

- Derive the horizontal coordinate using division by the nonzero inside multiplier and the vertical coordinate using the outside multiplier.
- Identify which coordinate changes sign for an inside or outside reflection and which distances are scaled.
- Use an asymmetric graph or corresponding points to distinguish horizontal from vertical effects when a symmetric parent obscures them.
- State why the invertible coordinate mapping does not apply unchanged to a zero multiplier.

**Explanation**

For $g(x)=af(bx)$, a point $(u,v)$ on $f$ becomes $(u/b,av)$. The reciprocal horizontal factor follows by solving $bx=u$. Negative $a$ reverses output signs; negative $b$ reverses input signs. Symmetric parent graphs can hide a reflection, so a table or asymmetric graph helps reveal the distinction. Zero multipliers are special cases and do not have this invertible point mapping.

**Worked examples**

If $(6,-2)$ lies on $f$, then it becomes $(3,6)$ on $g(x)=-3f(2x)$ and $(-6,-2)$ on $h(x)=f(-x)$. The first graph compresses horizontally by $1/2$, stretches vertically by $3$, and reflects across the $x$-axis.

**Exercises**

1. Map $(4,5)$ for $2f(x/2)$. **Answer:** $(8,10)$.
2. Explain why $f(-x)$ and $-f(x)$ need not coincide. **Answer:** One reflects input locations, the other output values; for $f(x)=x+1$, they are $-x+1$ and $-x-1$.

**Assessment**

For a point $(8,3)$ on $f$, find the corresponding points on $f(4x)$ and $4f(x)$. Describe the reflection and scale in $-2f(-x)$. **Expected:** $(2,3)$, $(8,12)$; reflect in both axes and stretch vertically by $2$. **Rubric, 4 points:** transformations (2; O1), horizontal/vertical distinction (2; O2).

### Concept U01-L04-C03: Combined transformations and experimental checks

**Content**

- $g(x)=af(b(x-h))+k$ with $a,b\ne0$.
- Point mapping $(u,v)\mapsto(h+u/b,av+k)$.
- Domain and range effects; verifying predictions with graphing technology.

**Learning objectives**

- **U01-L04-C03-O1:** Use a combined transformation to map points, domain, and range consistently.
  - Standards: CCSS HSF-BF.B.3 (direct); TEKS 2A.7(I) (direct).
- **U01-L04-C03-O2:** Compare predicted and technology-generated graphs to explain parameter effects.
  - Standards: CCSS HSF-BF.B.3 (direct).

**Proficiency criteria**

- Factor the inside affine expression and derive the combined coordinate mapping in an order consistent with the formula.
- Map characteristic points and the complete domain and range, preserving or reversing endpoint order as required.
- Predict graph features before using technology and compare original and transformed graphs in a common viewing window.
- Vary one parameter at a time and reconcile any mismatch between prediction and plotted points using substitution.

**Explanation**

Solve $b(x-h)=u$ to locate the new input; then transform the old output. Factoring the inside expression is essential: $f(2x-6)=f(2(x-3))$ shifts right three after the horizontal scaling encoded by the mapping. To check with technology, enter the original and transformed formulas, use the same viewing window, inspect corresponding points, and change one parameter at a time.

**Worked examples**

Suppose $f$ has domain $[0,4]$ and range $[-1,3]$. For $g(x)=-2f(2(x-3))+1$, the domain is $[3,5]$, since $0\le2(x-3)\le4$. The output interval transforms from $[-1,3]$ to $[-5,3]$. An original point $(2,3)$ becomes $(4,-5)$. For a concrete check use $f(x)=x-1$ on $[0,4]$: the new graph is a segment from $(3,3)$ to $(5,-5)$.

**Exercises**

1. Map $(3,2)$ under $f(-2(x+1))+4$. **Answer:** $(-5/2,6)$.
2. Explain the error in calling $f(3x-6)$ a right-six shift. **Answer:** The inside is $3(x-2)$, so the horizontal translation is right two.

**Assessment**

Use $f(x)=x$ on $[0,2]$ and $g(x)=3f(2(x-1))-2$. Predict endpoints, domain, and range; plot both on a graphing tool and report one coordinate check. **Expected:** Endpoints $(1,-2),(2,4)$, domain $[1,2]$, range $[-2,4]$; for example $g(1.5)=1$. **Rubric, 5 points:** correct mapping and intervals (3; O1), plotted comparison and explained check (2; O2). A hand table may substitute when technology is unavailable, but record that the technology component remains to be demonstrated.
