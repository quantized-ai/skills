# Lesson 13.2: Three-variable linear systems

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

Three-variable systems extend simultaneous constraints to ordered triples. Substitution and Gaussian elimination reduce the system while preserving enough independent information to recover every variable.

## Learning objectives

- Formulate three-variable systems from quantitative relationships.
- Solve by substitution and Gaussian elimination, then verify all coordinates.

## Learning outcome

By the end of this lesson, you should be able to translate three-variable constraints into a system and obtain a verified solution by either required algebraic method.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Define variables and units, then translate every independent relationship into a compatible linear equation.
- Use substitution in both remaining equations after isolating a variable, maintaining a consistent pair of remaining unknowns.
- Perform reversible Gaussian elimination to triangular form and back-substitute without dropping an equation or variable.
- Recover an ordered triple in the stated variable order and verify it against all original equations and contextual restrictions.

## Concepts

### Concept U13-L02-C01: Formulation and substitution

**Content**

- Three unknown quantities and three linear constraints.
- Ordered triples and fixed variable order.
- Reducing a three-variable system to a two-variable system by substitution.

**Learning objectives**

- **U13-L02-C01-O1:** Formulate a three-variable linear system from stated relationships.
  - Standards: TEKS 2A.3(A) (direct); CCSS HSA-CED.A.2 (direct).
- **U13-L02-C01-O2:** Solve a three-variable system by substitution and check the ordered triple.
  - Standards: TEKS 2A.3(B) (direct); CCSS HSA-REI.C.6 (supporting extension to three variables).

**Proficiency criteria**

- Define all unknowns and their units before translating the supplied relationships.
- Form a linear equation for each relationship with compatible units and consistent variable meanings.
- Substitute an isolated variable into both remaining equations, solve the reduced system, and recover the eliminated coordinate.
- Check the ordered triple in every original equation and apply the context’s restrictions.

**Explanation**

Name all variables with units before translating relationships. Isolating one variable and substituting it into both remaining equations produces two equations in two unknowns. Solving only one reduced equation is insufficient. Once two unknowns are found, recover the third and verify all original conditions.

**Worked examples**

Three measured quantities obey: their sum is $6$; the first minus the second plus the third is $2$; twice the first plus the second minus the third is $1$. Write $x+y+z=6$, $x-y+z=2$, $2x+y-z=1$. Substitute $z=6-x-y$ into the last two: $6-2y=2$ and $3x+2y=7$. Thus $y=2$, $x=1$, and $z=3$. The original left sides are $6,2,1$, as required.

**Exercises**

1. Formulate a system if $x+y+z=12$, $y$ is twice $x$, and $z$ exceeds $x$ by $4$; solve it. **Answer:** $x+y+z=12,y=2x,z=x+4$; $(2,4,6)$.
2. Solve $x+y+z=9,\ y=x+1,\ z=2x$. **Answer:** $4x+1=9$, so $(2,3,4)$.

**Assessment**

Three lengths total $17$ cm. The second is $2$ cm longer than the first; the third is twice the first. Formulate and solve the system by substitution. **Expected:** $x+y+z=17,y=x+2,z=2x$; $4x+2=17$, so $(x,y,z)=(15/4,23/4,15/2)$ cm. **Rubric, 5 points:** variables/equations (2; O1), substitution/solution/check (3; O2).

### Concept U13-L02-C02: Gaussian elimination and back-substitution

**Content**

- Eliminating the same variable from two equations.
- Triangular or echelon form.
- Swapping equations, nonzero scaling, and equation replacement.

**Learning objectives**

- **U13-L02-C02-O1:** Use Gaussian elimination to transform a three-variable system into triangular form.
  - Standards: TEKS 2A.3(B) (direct); CCSS HSA-REI.C.5 (supporting extension).
- **U13-L02-C02-O2:** Back-substitute and verify a unique solution in the original system.
  - Standards: TEKS 2A.3(B) (direct).

**Proficiency criteria**

- Use only reversible equation operations and record their effect on entire equations, including constants.
- Eliminate variables in a consistent order so the reduced equations retain the same remaining unknowns.
- Reach triangular form and back-substitute in reverse order to recover every coordinate.
- Verify a claimed unique solution in the original system and recognize when a contradictory or dependent row prevents the assumed unique-solution conclusion.

**Explanation**

Eliminate one variable systematically so that the remaining two equations involve the same two unknowns. Eliminate one of those, then work backward. Legal operations are reversible: swapping equations, multiplying an equation by a nonzero scalar, and adding a multiple of one equation to another. Multiplying an equation by zero destroys information.

**Worked examples**

For $x+y+z=9$, $2x-y+z=5$, $x+2y-z=4$, replace $E_2$ by $E_2-2E_1$ to obtain $-3y-z=-13$, and $E_3$ by $E_3-E_1$ to obtain $y-2z=-5$. Replace the first reduced equation by itself plus three times the second: $-7z=-28$. Hence $z=4$, then $y=3$, then $x=2$. Substitution gives original left sides $9,5,4$.

**Exercises**

1. Solve $x+y+z=6,\ 2y+z=7,\ z=3$. **Answer:** $z=3,y=2,x=1$.
2. Explain why eliminating $x$ from one pair and $y$ from a different pair may be inefficient. **Answer:** The resulting equations can still involve three different unknowns; eliminating the same variable leaves a true two-variable system.

**Assessment**

Use Gaussian elimination on $x+y+z=6,\ 2x-y+z=3,\ x+2y-z=2$. **Expected:** $E_2-2E_1$ gives $-3y-z=-9$; $E_3-E_1$ gives $y-2z=-4$; combination gives $-7z=-21$, hence $(1,2,3)$. **Rubric, 5 points:** equivalent triangular reduction (3; O1), back-substitution and original checks (2; O2).
