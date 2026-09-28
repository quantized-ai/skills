# Lesson 44.2: Binomial and geometric distributions

Repeated Bernoulli trials produce different distributions depending on whether the trial count or the first success ends the process.

## Learning objectives

- Construct and use binomial distributions and compare their theoretical probabilities with simulated frequencies.
- Model first-success waiting times with a geometric distribution and evaluate the model using repeated simulated trials.

## Proficiency criteria

- Check fixed count, binary classification, constant probability, and independence; distinguish exact counts from cumulative events and preserve endpoint cases.
- State the counting convention, distinguish waiting time from a fixed-trial success count, and interpret tail events and the unbounded range.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Binomial counts** | For independent trials with fixed success probability $p$ and fixed nonnegative integer count $n$, $P(X=k)=\binom nkp^k(1-p)^{n-k}$, $0\le k\le n$. Mean is $np$ and standard deviation $\sqrt{np(1-p)}$. Degenerate $p=0,1$ are interpreted directly. | Construct and use binomial distributions and compare their theoretical probabilities with simulated frequencies. | Check fixed count, binary classification, constant probability, and independence; distinguish exact counts from cumulative events and preserve endpoint cases. |
| **Geometric waiting times** | For independent constant-$p$ trials with $0<p\le1$, the trial number of the first success has $P(T=k)=(1-p)^{k-1}p$, $k\ge1$, and mean $1/p$. A failures-before-success convention shifts values by one and must be named. | Model first-success waiting times with a geometric distribution and evaluate the model using repeated simulated trials. | State the counting convention, distinguish waiting time from a fixed-trial success count, and interpret tail events and the unbounded range. |
