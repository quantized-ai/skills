# Lesson 13.3: Matrix representation and solution classification

Augmented matrices record linear systems for systematic computation. Interpreting reduced rows identifies contradictions, uniquely determined variables, and free parameters in the complete solution set.

## Learning objectives

- Encode three-variable systems and interpret reduced row-echelon output from matrix technology.
- Classify systems as inconsistent, uniquely solvable, or having infinitely many solutions.
- Parameterize all free variables and verify the resulting solution description.

## Learning outcome

Use matrix technology and reduced equations to give a complete, verified solution set for a three-variable linear system.

## Proficiency criteria

- Encode coefficients, missing-variable zeros, and constants in a fixed variable order.
- Obtain reduced row-echelon output with matrix technology, translate it into equations, and identify any numerical approximation.
- Check for contradictions before using pivots and free variables to classify the solution set.
- Parameterize every free variable, justify that the resulting description contains exactly the solutions, and check it against the original system.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Augmented matrices and technology** | An augmented matrix records coefficient columns in a declared variable order and a final constants column; absent variables have coefficient zero. Reduced row-echelon form represents an equivalent system: each nonzero row begins with a pivot of $1$, the only nonzero entry in its column; pivots move right in successive rows, and zero rows come last. Technology output must be translated back into equations and checked against the original input. Rounded entries provide approximate evidence, not exact equality or a reliable zero test without further verification. | Encode a three-variable linear system in an augmented matrix with a fixed variable order and explicit zero coefficients. Use matrix technology to obtain reduced row-echelon form, interpret and verify its solution claims, and distinguish exact from approximate output. | Enter every coefficient and constant correctly. Obtain reduced row-echelon output and interpret each row as an equation. Check the resulting solution claims against the original system. Report approximation and verify apparent zeros or inconsistencies before classifying rounded output. |
| **Contradictions and free variables** | A reduced equation $0=c$ with $c\ne0$ makes a system inconsistent; $0=0$ imposes no constraint. A consistent reduced system has one solution when every variable is a pivot variable and infinitely many when at least one variable is free. Each free variable receives an independent real parameter; pivot equations determine the remaining coordinates. A single verified parameter choice does not establish completeness. | Classify a reduced three-variable system using contradictions, redundant equations, pivots, and free variables. Describe the complete infinite solution set with one parameter per free variable and verify its equivalence to the original system. | Check for contradictions first. Distinguish redundant equations from free variables and classify the consistent system by its pivots. Parameterize every free variable and express every remaining coordinate. Show that all permitted parameter values satisfy the original system and that every solution is represented; use a particular parameter choice as an additional check. |
