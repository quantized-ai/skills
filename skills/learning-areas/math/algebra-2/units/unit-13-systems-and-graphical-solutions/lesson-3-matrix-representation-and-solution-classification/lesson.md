# Lesson 13.3: Matrix representation and solution classification

[Unit 13: Systems of equations, inequalities, and graphical solutions](../unit.md) · [Algebra 2](../../../curriculum.md)

Augmented matrices encode coefficients and constants for systematic computation. Interpreting reduced rows reveals whether the system has a unique solution, a contradiction, or free variables.

## Learning objectives

- Encode and solve three-variable systems using matrix technology.
- Classify solution sets and express infinite solutions using free parameters.

## Learning outcome

By the end of this lesson, you should be able to interpret matrix output as a complete, verified description of the original system’s solution set.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Build an augmented matrix with fixed variable order, explicit zero entries for absent variables, and a correctly placed constant column.
- Use matrix technology to obtain a reduced system, translate its rows back into equations, and verify the resulting claim against the original system.
- Check for contradictions before counting free variables; a redundant row alone must not be treated as proof of infinitely many solutions.
- Classify the solution set and, when it is infinite, parameterize every free variable and show how the remaining coordinates depend on it.

## Concepts

### Concept U13-L03-C01: Augmented matrices and technology

**Content**

- Coefficient columns in a declared variable order.
- Augmented constants, zero coefficients, and reduced row-echelon form.
- Technology output as a representation to interpret and verify.

**Learning objectives**

- **U13-L03-C01-O1:** Encode a three-variable linear system in an augmented matrix.
  - Standards: TEKS 2A.3(B) (supporting knowledge); CCSS HSA-REI.C.8 (supporting knowledge; +).
- **U13-L03-C01-O2:** Use matrix technology to solve a three-variable system and verify the interpreted result.
  - Standards: TEKS 2A.3(B) (direct).

**Proficiency criteria**

- Fix a variable order and place every coefficient, missing-variable zero, and constant in its correct augmented-matrix position.
- Enter the matrix into a suitable tool and obtain reduced row-echelon output from the intended input.
- Translate the resulting rows into equations instead of treating displayed entries as unexplained coordinates.
- Verify the interpreted solution in the original equations and report any approximation introduced by the tool.

**Explanation**

An augmented matrix records coefficients and constants, not variables in each cell. A missing variable has coefficient zero. With variable order $x,y,z$, a final row $(0,0,1\mid4)$ means $z=4$. In a graphing calculator or algebra system, create a $3\times4$ matrix, enter coefficients row by row, request reduced row-echelon form, and translate rows back to equations. Tool menus differ; mathematical input and output are specified here so the procedure is reproducible without depending on a particular product.

**Worked examples**

The system $x+y+z=9$, $2x-y+z=5$, $x+2y-z=4$ has augmented matrix
$$\left[\begin{array}{rrr|r}1&1&1&9\\2&-1&1&5\\1&2&-1&4\end{array}\right].$$
The reduced form is
$$\left[\begin{array}{rrr|r}1&0&0&2\\0&1&0&3\\0&0&1&4\end{array}\right],$$
so the solution is $(2,3,4)$. Entering $+1$ instead of $-1$ in row two would solve a different system, so check the original equations after computation.

**Exercises**

1. Encode $2x-z=5,\ y+z=1,\ x+2y=4$. **Answer:** Rows $(2,0,-1\mid5),(0,1,1\mid1),(1,2,0\mid4)$.
2. Interpret reduced rows $(1,0,0\mid-1),(0,1,0\mid2),(0,0,1\mid0)$. **Answer:** $(x,y,z)=(-1,2,0)$.

**Assessment**

Enter the system in Exercise 1 into matrix technology, obtain its reduced form, and check the solution. **Expected:** $(x,y,z)=(8/3,2/3,1/3)$; reduced form has the identity in the first three columns and last column $(8/3,2/3,1/3)$. The original left sides are $5$, $1$, and $4$. **Rubric, 5 points:** correct coefficient entry including zero entries (2; O1), retained output, interpretation, and verification (3; O2). If technology is unavailable, complete elimination by hand and record the technology objective as pending.

### Concept U13-L03-C02: Contradictions and free variables

**Content**

- Rows $0=c$ with $c\ne0$ versus rows $0=0$.
- Unique solutions, inconsistent systems, and free variables.
- Parametric descriptions of infinite solution sets.

**Learning objectives**

- **U13-L03-C02-O1:** Classify a reduced three-variable system by its equations, including contradictory and redundant rows.
  - Standards: TEKS 2A.3(B) (direct).
- **U13-L03-C02-O2:** Describe an infinite solution set using a free parameter and verify a sample solution.
  - Standards: TEKS 2A.3(B) (direct).

**Proficiency criteria**

- Identify a contradictory row as sufficient for inconsistency and a redundant row as imposing no new constraint.
- Determine whether a consistent reduced system fixes every variable or leaves free variables.
- Introduce an independent parameter for each free variable and express all remaining coordinates from the pivot equations.
- Describe the full solution set, then verify a permitted parameter choice in the original system without treating one successful choice as proof of completeness.

**Explanation**

A row $0=5$ is impossible and makes the system inconsistent. A row $0=0$ adds no constraint; it does not itself imply infinitely many solutions unless some variable remains free and no contradiction occurs. In a consistent linear system, each free variable may be assigned a real parameter, and pivot equations determine the other variables.

**Worked examples**

Reduced equations $x+z=4$, $y-2z=1$, and $0=0$ allow $z=t$. Thus $(x,y,z)=(4-t,1+2t,t)$ for every real $t$. Setting $t=2$ gives $(2,5,2)$, which satisfies both retained equations. Replacing the last row with $0=3$ would leave no solution at all.

**Exercises**

1. Classify $x=1,y=2,z=3$. **Answer:** Exactly one solution, $(1,2,3)$.
2. Describe $x+y+z=6,\ y-z=0$ with a parameter. **Answer:** Let $z=t$; then $y=t,x=6-2t$.

**Assessment**

Interpret reduced rows $(1,0,2\mid5),(0,1,-1\mid3),(0,0,0\mid0)$ and state what changes if the last constant becomes $1$. **Expected:** $(5-2t,3+t,t)$ for $t\in\mathbb R$; infinitely many solutions. A last constant of $1$ makes the system inconsistent. A valid example is $(5,3,0)$. **Rubric, 4 points:** classifications (2; O1), parameterization/check (2; O2).
