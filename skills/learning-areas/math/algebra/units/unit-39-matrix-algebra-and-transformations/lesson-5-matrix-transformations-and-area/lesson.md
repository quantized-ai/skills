# Lesson 39.5: Matrix transformations and area

Matrix-vector multiplication defines linear transformations that preserve the origin. Two-by-two matrices describe familiar planar maps and reveal determinant-based area scaling.

## Learning objectives

- Construct and apply matrices for planar linear transformations and their compositions.
- Interpret determinant magnitude as an area scale and singularity as collapse.

## Proficiency criteria

- Use column images of coordinate unit vectors and distinguish linear maps from translations.
- Preserve application order in composed transformations and distinguish signed determinant from nonnegative area.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Matrices as vector transformations** | A compatible matrix defines $T(\mathbf v)=A\mathbf v$. Its columns are the images of coordinate unit vectors. In the plane, two-by-two matrices represent axis scalings, rotations about the origin, reflections across lines through the origin, and shears. Such maps fix the origin; a nonzero translation is not representable by a two-by-two linear matrix alone. | Apply matrix transformations to vectors and construct planar transformation matrices from their action on coordinate unit vectors. | Place unit-vector images in columns, map general vectors consistently, and distinguish origin-preserving linear maps from translations. |
| **Composition and inverse transformations** | Applying $B$ then $A$ gives $A(B\mathbf v)=(AB)\mathbf v$, so the rightmost matrix acts first. When invertible, $A^{-1}$ reverses $A$ and $(AB)^{-1}=B^{-1}A^{-1}$. Geometric order can matter, consistent with noncommuting matrix products. | Compose and reverse invertible matrix transformations and explain the order through vectors or geometric figures. | Match matrix order to application order, verify reversal on transformed points, and explain a geometric instance where reversing the order changes the image. |
| **Determinant and area scaling** | For a two-by-two matrix $A$, the absolute determinant $\lvert\det A\rvert$ is the area of the parallelogram spanned by its columns and the multiplicative area factor for planar figures. A negative determinant reverses orientation; zero determinant collapses the plane to a line or point and makes the transformation noninvertible. | Interpret and use the determinant of a planar transformation to calculate area changes and identify orientation reversal or collapse. | Use absolute determinant for nonnegative area, distinguish orientation from size, and connect zero determinant to dependent column images and noninvertibility. |
