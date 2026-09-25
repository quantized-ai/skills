# Lesson 39.4: Determinants, inverses, and linear systems

A square matrix has an inverse exactly when its determinant is nonzero. This criterion connects reversible transformations to unique solutions of matrix-form linear systems.

## Learning objectives

- Compute two-by-two determinants and inverses and determine whether an inverse exists.
- Construct matrix equations for contextual two- and three-variable linear systems and solve invertible systems, using technology for dimensions of three or more.
- Distinguish singular systems with no solution from those with infinitely many solutions.

## Proficiency criteria

- Verify inverses by multiplication and preserve the unknown-variable order.
- Check recovered solutions in the original equations and context, and never infer the solution count from singularity alone.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Determinants and inverse existence** | For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $\det A=ad-bc$. For any square matrix, $A^{-1}$ exists exactly when $\det A\ne0$; it satisfies $AA^{-1}=A^{-1}A=I$. For a nonsingular two-by-two matrix, $A^{-1}=(ad-bc)^{-1}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$. A nonsquare matrix has no two-sided inverse in this sense. | Compute two-by-two determinants and inverses, determine inverse existence for square matrices, and verify both inverse products. | Check the determinant before division, construct the correct sign-and-position pattern, obtain the identity in both multiplication orders, and distinguish nonsquare matrices from invertible square matrices. |
| **Systems as matrix equations** | A linear system with a fixed unknown order is $A\mathbf x=\mathbf b$, where coefficient rows correspond to equations. If $A$ is square and invertible, the unique solution is $\mathbf x=A^{-1}\mathbf b$. Matrix multiplication recovers each original equation; the inverse is applied on the left. For two-variable contextual systems, quantities, units, and simultaneous constraints determine the coefficient rows and viable solutions. | Represent linear systems, including two-variable systems from quantitative situations, as matrix equations and solve invertible systems using matrix inverses. | Preserve coefficients, constants, and variable order, multiply the inverse on the correct side, and verify the solution in each original equation. Define contextual quantities and units and reject algebraic solutions outside their feasible domains. |
| **Technology and singular systems** | For matrices of dimension $3\times3$ or greater, technology may compute determinants, inverses, and products. An exact zero determinant means the inverse method is unavailable; consistency then depends on the augmented system, which can have no solution or infinitely many. Exact coefficients and numerical precision affect whether a small displayed determinant can be trusted as zero; rounded inverse products need numerical verification. Three-variable quantitative models require three simultaneous linear relationships, defined quantities and units, and an interpretation of the solution within the original situation. | Construct contextual three-variable matrix systems, use technology to find inverses and solve systems of dimension three or greater, and analyze singular systems with row operations or equivalent equation reasoning. | Enter and interpret matrices with correct dimensions, distinguish exact singularity from rounding, verify numerical solutions, and justify no-solution or infinitely-many-solution conclusions from the augmented equations. Verify that all three modeled relationships and contextual restrictions hold and interpret each recovered quantity. |
