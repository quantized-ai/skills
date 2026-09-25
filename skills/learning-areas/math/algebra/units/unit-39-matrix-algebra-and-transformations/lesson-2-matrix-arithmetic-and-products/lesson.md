# Lesson 39.2: Matrix arithmetic and products

Matrix arithmetic requires matching dimensions, and a matrix product uses row-column sums rather than entrywise multiplication.

## Learning objectives

- Add, subtract, and scale matrices and determine which products exist.
- Construct and compute contextual matrix products and interpret their matched intermediate dimension, outer indices, and units.

## Proficiency criteria

- Identify dimensions before computing and show correct row-column correspondence.
- Distinguish matrix multiplication from entrywise products and reversed-order products.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Entrywise matrix arithmetic** | For matrices $A,B$ of the same dimension, $(A\pm B)_{ij}=a_{ij}\pm b_{ij}$. Scalar multiplication satisfies $(cA)_{ij}=ca_{ij}$. Addition and subtraction are undefined for unequal dimensions; scalar multiplication preserves dimensions. | Compute sums, differences, and scalar multiples of matrices and identify dimensionally undefined operations. | Combine corresponding entries without changing dimensions, scale all entries, and explicitly reject sums and differences with unequal dimensions. |
| **Row-column multiplication** | If $A$ is $m\times n$ and $B$ is $n\times p$, then $AB$ is $m\times p$ with $(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}$. The inner dimensions must match. Reversing the order can change the dimensions, values, or existence of the product. A matrix-vector product treats the vector as a one-column matrix. | Determine compatible matrix products and calculate every entry using the row-column rule, including matrix-vector products. | State both input dimensions and the output dimension, pair corresponding row and column entries correctly, and assess reversed-order compatibility separately. |
| **Contextual matrix products** | In a product $AB$, the repeated index labels an intermediate quantity summed over to produce a relationship between the outer indices. Data aggregation, resource-requirement calculations, or network path counts give meaning to this operation. Units multiply within terms and must match across the terms being added. | Construct and interpret a matrix product that combines two compatible quantitative or relational data representations. | Explain the intermediate and outer indices, justify the order of multiplication, and interpret entries and units of the resulting matrix in context. |
