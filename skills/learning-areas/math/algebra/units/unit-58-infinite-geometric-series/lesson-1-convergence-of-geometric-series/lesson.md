# Lesson 58.1: Convergence of geometric series

Infinite sums are limits of partial sums and require conditions absent from finite-sum formulas.

## Learning objectives

- Determine convergence and derive and evaluate an infinite geometric sum with all ratio and zero-term exceptions.
- Calculate truncation error and determine how many geometric terms meet a specified accuracy.

## Proficiency criteria

- Distinguish a sequence term from a partial sum and its limit, justify the vanishing remainder for convergent ratios, and never apply the sum formula to a divergent series.
- Use the indexing convention for the first omitted term, compare absolute error with tolerance, handle $r=0$ directly, and verify the final integer count.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Partial sums and convergence** | The first term is defined as $a$, including when $r=0$; then all later terms are zero. For $a\ne0$, the real series $\sum_{k=0}^{\infty}ar^k$ converges exactly when $\lvert r\rvert<1$, with sum $a/(1-r)$ obtained as the limit of $a(1-r^n)/(1-r)$. At $r=1$ terms accumulate, at $r=-1$ nonzero partial sums oscillate, and for $\lvert r\rvert>1$ terms fail to approach zero. When $a=0$ the series is zero for every real $r$. | Determine convergence and derive and evaluate an infinite geometric sum with all ratio and zero-term exceptions. | Distinguish a sequence term from a partial sum and its limit, justify the vanishing remainder for convergent ratios, and never apply the sum formula to a divergent series. |
| **Remainders and required term counts** | For $\lvert r\rvert<1$, the error after the first $n$ terms is $ar^n/(1-r)$ and its magnitude is $\lvert ar^n/(1-r)\rvert$. An error tolerance can determine a sufficient integer term count; logarithmic inequalities require care because $\ln\lvert r\rvert<0$ for $0<\lvert r\rvert<1$. | Calculate truncation error and determine how many geometric terms meet a specified accuracy. | Use the indexing convention for the first omitted term, compare absolute error with tolerance, handle $r=0$ directly, and verify the final integer count. |
