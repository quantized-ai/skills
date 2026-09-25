# Lesson 53.2: Zero-sum minimax and mixed strategies

A player can protect against unfavorable responses by choosing a pure strategy or a probability distribution over strategies.

## Learning objectives

- Determine optimal pure strategies and game value using minimax and saddle-point reasoning.
- Calculate optimal mixed strategies and expected value for a two-by-two zero-sum game.

- Determine the optimal two-strategy mix and game value in finite two-by-many or many-by-two zero-sum games using payoff envelopes.

## Proficiency criteria

- Compute row minima and column maxima with the correct payoff perspective, identify all tied saddle points, and avoid claiming a pure optimum when the bounds differ.
- Normalize probabilities, check domination and saddle points first, use the correct indifference equations, and verify the resulting guarantee against every opponent pure strategy.

- Evaluate the correct envelope on the full probability interval, compare endpoints and relevant line intersections, retain ties or flat optimal intervals, and verify the guarantee against every opponent pure strategy.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Saddle points and pure-strategy value** | For a row player maximizing and a column player minimizing a payoff matrix, the largest row minimum is a maximin guarantee and the smallest column maximum a minimax bound. Equality yields a saddle point and pure-strategy game value. | Determine optimal pure strategies and game value using minimax and saddle-point reasoning. | Compute row minima and column maxima with the correct payoff perspective, identify all tied saddle points, and avoid claiming a pure optimum when the bounds differ. |
| **Two-strategy mixing** | A mixed strategy assigns probabilities to pure strategies. In a two-by-two zero-sum game without a saddle point, an interior optimal mix makes the opponent indifferent; each player’s probabilities are obtained from the other player’s payoff equality. Degenerate equations and probabilities outside $[0,1]$ require boundary analysis. | Calculate optimal mixed strategies and expected value for a two-by-two zero-sum game. | Normalize probabilities, check domination and saddle points first, use the correct indifference equations, and verify the resulting guarantee against every opponent pure strategy. |
| **Payoff envelopes with two strategies** | For a row-maximizing $2\times n$ payoff matrix, choosing the first row with probability $p\in[0,1]$ gives $g_j(p)=pa_{1j}+(1-p)a_{2j}$ against column $j$; maximize the lower envelope $\min_j g_j(p)$. For a column-minimizing $m\times2$ matrix, mixing columns with probability $q$ gives $h_i(q)=qa_{i1}+(1-q)a_{i2}$; minimize the upper envelope $\max_i h_i(q)$. These piecewise-linear envelopes attain an optimum at an endpoint or a relevant intersection, possibly over an interval. | Determine the optimal two-strategy mix and game value in finite two-by-many or many-by-two zero-sum games using payoff envelopes. | Evaluate the correct envelope on the full probability interval, compare endpoints and relevant line intersections, retain ties or flat optimal intervals, and verify the guarantee against every opponent pure strategy. |
