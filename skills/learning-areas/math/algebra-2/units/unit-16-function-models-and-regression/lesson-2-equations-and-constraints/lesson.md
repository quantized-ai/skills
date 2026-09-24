# Lesson 16.2: Equations and constraints

[Unit 16: Function models and regression](../unit.md) · [Algebra 2](../../../curriculum.md)

Equations describe quantitative relationships, while simultaneous inequalities describe feasible choices. Solving either requires the model’s units, integer conditions, and contextual limits to remain attached.

## Learning objectives

- Create equations from quantitative descriptions and solve them.
- Represent simultaneous constraints with equations or inequalities.
- Evaluate whether candidate values are feasible in the original context.

## Learning outcome

The student can translate a relationship and its constraints into a model and identify its viable solutions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Define the unknowns and select equation structures matching the described relationships.
- Preserve original restrictions when solving and verify candidate values in the stated situation.
- Translate every constraint with its correct boundary condition and include integer or nonnegative domains where required.
- Distinguish an algebraic solution from a feasible solution that satisfies all simultaneous requirements.

## Concepts

### Concept U16-L02-C01: Equations from quantitative relationships

**Content**

Defining variables; translating linear, quadratic, rational, radical, and exponential relationships.

**Learning objectives**

- **U16-L02-C01-O1:** Create equations in one or more variables from quantitative descriptions.
  - Standards: CCSS HSA-CED.A.1 (direct); CCSS HSA-CED.A.2 (direct).
- **U16-L02-C01-O2:** Solve a constructed model and interpret its solution with a meaningful domain.
  - Standards: CCSS HSA-CED.A.1 (direct); CCSS HSF-IF.B.5 (direct).

**Proficiency criteria**

- Define unknown quantities and translate the stated relationship into an equation of an appropriate family.
- Solve the constructed equation while preserving units and restrictions from the original description.
- Check candidate solutions in the model and reject values that violate the quantities’ permitted domains.

**Explanation**

Choose a family from the mechanism described, then translate each relation. Define a variable only once and carry its units through the solution. An algebraically valid root may violate the original quantity’s domain. When creating a two-variable model, provide axes with quantities and scales if asked to graph.

**Worked examples**

1. A rectangle has width $x$ m and length $x+3$ m with area 40 m². $x(x+3)=40$ gives $(x+8)(x-5)=0$; only $x=5$ is a positive width, giving length 8.
2. Travel time $t$ hours for a fixed 180 km distance at speed $v>0$ is $t=180/v$. Requiring $t=3$ yields $v=60$ km/h; the model excludes zero speed.

**Exercises**

1. Write an equation for an initial 50 units growing 20% per step to reach 86.4. **Answer:** $50(1.2)^n=86.4$, solved by $n=3$.
2. A square has area 49 cm². Model its nonnegative side. **Answer:** $s^2=49$, $s\ge0$, so $s=7$ cm.

**Assessment**

A rectangle has length twice its width and area 72 m². Define a variable, form the equation, solve, and reject invalid roots. **Expected:** $w>0$, $2w^2=72$, $w=\pm6$ algebraically; width 6 m, length 12 m. **Rubric (4):** variables and equation (2, O1); solution and domain interpretation (2, O2).

Objective coverage: **U16-L02-C01-O1**, **U16-L02-C01-O2**.

### Concept U16-L02-C02: Feasible sets and inequality constraints

**Content**

At least/at most; simultaneous constraints; nonnegativity; integer restrictions; viable solutions.

**Learning objectives**

- **U16-L02-C02-O1:** Represent simultaneous contextual constraints by equations and inequalities.
  - Standards: CCSS HSA-CED.A.3 (direct); TEKS 2A.3(E) (direct).
- **U16-L02-C02-O2:** Test candidate solutions for feasibility, including domain restrictions.
  - Standards: CCSS HSA-CED.A.3 (direct); TEKS 2A.3(G) (direct).

**Proficiency criteria**

- Translate each simultaneous condition with the correct inequality direction and inclusive or strict boundary.
- Include nonnegativity and integer restrictions whenever the modeled quantities require them.
- Test every condition for a candidate and explain why satisfying only some constraints does not establish feasibility.

**Explanation**

A feasible solution must satisfy every condition at once. Include nonnegativity and integrality when quantities are counts. A point satisfying the budget may fail a capacity constraint, and a fractional point in a continuous graph may be infeasible for indivisible objects. A boundary belongs to the feasible set only when equality is permitted.

**Worked examples**

1. With $x$ and $y$ nonnegative integer counts, budget 30 and unit costs 2 and 5 give $2x+5y\le30$. A minimum of 8 items gives $x+y\ge8$. Candidate $(5,3)$ costs 25 and totals 8, so it is feasible.
2. Candidate $(2,5)$ costs 29 but totals only 7, so it is not feasible despite satisfying the budget.

**Exercises**

1. Test $(10,2)$ under these constraints. **Answer:** Cost 30, count 12; feasible.
2. Is $(2.5,5)$ feasible? **Answer:** No, even though cost is 30; counts must be integers and its total is also less than 8.

**Assessment**

Let $x,y$ be item counts with unit costs 3 and 4, budget 24, and at least 6 items. Write the full feasible system; test $(4,2)$ and $(1,5)$. **Expected:** $3x+4y\le24$, $x+y\ge6$, $x,y\in\mathbb Z_{\ge0}$; costs 20 and 23, totals 6, so both are feasible. **Rubric (4):** full constraints (2, O1); both checks with evidence (2, O2).

Objective coverage: **U16-L02-C02-O1**, **U16-L02-C02-O2**.
