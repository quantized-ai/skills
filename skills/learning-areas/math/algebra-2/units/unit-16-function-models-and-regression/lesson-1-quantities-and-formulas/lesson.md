# Lesson 16.1: Quantities and formulas

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Quantitative modeling begins with precisely defined variables and compatible units. Rearranging formulas then isolates quantities without losing restrictions or introducing unjustified precision.

## Learning objectives

- Define modeled quantities, units, graph scales, and reporting precision.
- Rearrange formulas to isolate a specified variable.
- Identify restrictions and exceptional cases created by algebraic operations.

## Learning outcome

The student can express and rearrange a quantitative relationship with consistent units and a justified domain.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Define variables and coefficient units so the equation and labeled graph describe the same quantities.
- Convert units consistently and separate internal calculation precision from final reporting precision.
- Isolate the requested quantity with justified algebra, including any required factorization.
- State nonzero and root conditions, resolve exceptional parameter cases, and select only branches permitted by the original quantity.

## Concepts

### Concept U16-L01-C01: Variable definitions, units, and scales

**Content**

Independent/dependent quantities; units in parameters; graph labels; appropriate precision.

**Learning objectives**

- **U16-L01-C01-O1:** Define quantities and use units consistently in a model and labeled graph.
  - Standards: CCSS HSN-Q.A.1 (direct); CCSS HSN-Q.A.2 (direct); CCSS HSA-CED.A.2 (direct).
- **U16-L01-C01-O2:** Choose a reporting precision consistent with the data and context.
  - Standards: CCSS HSN-Q.A.3 (direct).

**Proficiency criteria**

- Define each quantity and its units before building an equation or labeling a graph.
- Convert input or output units consistently and verify coefficient units through dimensional reasoning.
- Choose readable axis scales and final reporting precision consistent with the measurement context while retaining calculation precision.

**Explanation**

Define what each variable measures before manipulating equations. Units help detect incompatible additions and identify coefficient meanings. Axis scales must show the data without concealing important changes. Calculator output contains more digits than measured data usually justify; retain digits for calculations but report a sensible final precision.

**Worked examples**

1. In $d=60t$, let $d$ be kilometers and $t$ hours; 60 has units km/h. If $t$ is in minutes, use $d=t$, since $60/60=1$ km/min.
2. A model predicts 12.347 cm from measurements recorded to the nearest tenth of a centimeter. Report about 12.3 cm, and label the prediction as modeled rather than an exact measurement.

**Exercises**

1. Interpret coefficients in $C(n)=15+2.5n$, with $C$ dollars and $n$ items. **Answer:** Fixed cost $15, variable cost $2.50/item.
2. A graph uses time in seconds horizontally and height in meters vertically. Give slope units. **Answer:** m/s.

**Assessment**

A measured speed is 12 m/s and time is recorded in minutes. Define and graph a distance formula, then report its prediction at 1.3 minutes to the nearest meter. **Expected:** $d(t)=720t$ meters; axes minutes/meters with origin and $(1,720)$; $d(1.3)=936$ m. **Rubric (4):** conversion, variables, and labeled graph (2, O1); calculation and whole-meter precision (2, O2).

Objective coverage: **U16-L01-C01-O1**, **U16-L01-C01-O2**.

### Concept U16-L01-C02: Rearranging literal formulas

**Content**

Isolating a variable; parentheses and denominators; nonzero restrictions; roots in physical domains.

**Learning objectives**

- **U16-L01-C02-O1:** Rearrange a multivariable formula to isolate a specified quantity.
  - Standards: CCSS HSA-CED.A.4 (direct).
- **U16-L01-C02-O2:** State restrictions introduced by division or roots and select contextually valid solutions.
  - Standards: CCSS HSA-CED.A.4 (direct); CCSS HSA-CED.A.3 (direct).

**Proficiency criteria**

- Isolate the requested variable by justified equality operations, including factoring when the variable appears in multiple terms.
- Record every nonzero-divisor and real-root condition introduced by the rearrangement.
- Distinguish exceptional parameter cases and select any root branch required by the original quantity’s domain.

**Explanation**

Treat other symbols as known quantities and use the same equality operations as for numerical equations. Factor when the desired variable occurs more than once. Division requires a nonzero divisor. Squared variables produce two algebraic branches unless a domain, such as nonnegative length, selects one.

**Worked examples**

1. From $A=2\pi r^2+2\pi rh$, subtract $2\pi r^2$ and divide by $2\pi r$: $h=(A-2\pi r^2)/(2\pi r)$ for $r\ne0$.
2. From $V=\pi r^2h$ with $V\ge0,h>0$, $r^2=V/(\pi h)$. A radius is nonnegative, so $r=\sqrt{V/(\pi h)}$, not the negative branch.

**Exercises**

1. Solve $P=2l+2w$ for $w$. **Answer:** $w=P/2-l$.
2. Solve $y=ax+b$ for $x$. **Answer:** $x=(y-b)/a$ for $a\ne0$; when $a=0$ the equation either has every $x$ if $y=b$, or none.

**Assessment**

Solve $q=mx+nx$ for $x$ and explain the case $m+n=0$. **Expected:** $x=q/(m+n)$ if $m+n\ne0$; if $m+n=0$, all $x$ satisfy the equation when $q=0$, otherwise none do. **Rubric (4):** factoring and isolation (2, O1); restriction and exceptional cases (2, O2).

Objective coverage: **U16-L01-C02-O1**, **U16-L01-C02-O2**.
