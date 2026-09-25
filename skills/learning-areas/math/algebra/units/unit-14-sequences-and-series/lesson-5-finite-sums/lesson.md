# Lesson 14.5: Finite sums

Finite sums combine indexed terms into totals. Arithmetic pairing and geometric cancellation justify formulas while making bounds, term counts, and exceptional ratios explicit.

## Learning objectives

- Construct, interpret, expand, and evaluate finite sigma notation with inclusive bounds.
- Distinguish individual terms from partial sums.
- Derive and apply arithmetic and finite geometric sum formulas with their validity conditions.

## Learning outcome

Select, justify, and apply a finite-sum method with correct bounds, term count, and ratio conditions.

## Proficiency criteria

- Construct a summand and inclusive bounds that reproduce exactly the specified arithmetic or geometric terms.
- Expand every included integer index and count terms from both bounds.
- Distinguish an individual term from an accumulated sum.
- Derive arithmetic sums by pairing and geometric sums by aligned subtraction.
- Use the correct first and last terms or ratio and term count; handle a unit ratio separately.
- Recognize that a finite geometric sum requires no infinite-series convergence condition.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| Sigma notation and arithmetic sums | A sigma expression represents a specified sum by a summand formula, an index, and inclusive integer bounds; construction requires matching the first term, successive differences or ratios, and final included term. A finite series adds sequence terms; $a_n$ denotes one term and $S_n$ a specified partial sum. Bounds $j$ through $k$, with integers $j\le k$, include $N=k-j+1$ terms. For an arithmetic sequence, $\sum_{m=j}^{k}a_m=N(a_j+a_k)/2$. Pairing forward and reversed copies makes each of the $N$ pairs equal to $a_j+a_k$, including when $N$ is odd. | Construct sigma expressions for finite arithmetic and geometric series with a correct summand, index, and inclusive bounds. Interpret, expand, and evaluate finite sums with correct index bounds, distinguishing individual terms from partial sums. Derive the arithmetic-sum formula by pairing and apply it with the correct endpoints and term count. | Construct a summand and bounds that reproduce each specified arithmetic or geometric term exactly once; include every index between the inclusive bounds and count $k-j+1$ terms; distinguish the value of a term from a total; justify pairing for odd and even term counts; identify the first and last included terms and calculate the arithmetic total. |
| Derivation of finite geometric sums | For $N\ge1$ terms with first term $a$ and real ratio $r\ne1$, $S_N=a(1-r^N)/(1-r)$. Aligning $S_N$ and $rS_N$ and subtracting yields $(1-r)S_N=a(1-r^N)$. When $r=1$, $S_N=Na$. Finite sums allow zero, negative, shrinking, and growing ratios; no infinite-series convergence condition is required. | Derive the finite geometric-sum formula by aligned subtraction and explain its ratio restriction. Apply finite geometric sums with correct first terms, term counts, and separate treatment of a unit ratio. | Align the sum and its ratio multiple, show cancellation, and justify division only for $r\ne1$; identify the first included term, ratio, and number of terms; use $Na$ for $r=1$; evaluate finite sums without imposing $\lvert r\rvert<1$. |
