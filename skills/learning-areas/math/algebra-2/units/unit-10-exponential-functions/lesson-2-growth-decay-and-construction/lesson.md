# Lesson 10.2: Growth, decay, and construction

Construct exponential models from percent change or two observations with positive outputs. Explicit and recursive forms describe the same change when their initial values, input scales, and multiplicative factors agree.

## Learning objectives

- Construct and evaluate percent growth or decay models and interpret their parameters.
- Determine an exponential formula from two observations and express its integer-step values recursively.

## Learning outcome

Produce consistent contextual, explicit, and recursive representations of exponential change.

## Proficiency criteria

- Convert a percent change into a factor applied to the current amount for the stated time unit.
- Identify the initial amount at the chosen time origin and evaluate repeated change.
- Determine and verify a positive base and coefficient from two observations, recognizing the constant case.
- Specify an initial value, recurrence, and integer index range that match the explicit model.

## Concepts

| Concept Title | Content | Learning Objectives | Proficiency criteria |
| --- | --- | --- | --- |
| **Percent rates and parameters** | For initial amount $a>0$, growth at decimal rate $r>0$ per time unit is $A(t)=a(1+r)^t$; decay at $0<r<1$ is $A(t)=a(1-r)^t$. Each percentage applies to the current amount. The coefficient is $A(0)$ at the chosen origin, and the base is the factor per stated time unit. Zero change produces a constant model; complete loss is outside this positive-base exponential family. | Write and evaluate growth or decay functions from an initial amount and a percent rate. Interpret the initial value, multiplier, and percent change relative to the chosen time origin and time unit. | Convert percentage rates to decimal rates and retained factors. Identify the initial amount and factor period. Calculate repeated multiplicative change and explain why a fixed percentage produces changes based on the current amount. |
| **Constructing a model from points and recursion** | For observations $(x_1,y_1)$ and $(x_2,y_2)$ with $x_1\ne x_2$ and $y_1,y_2>0$, $b=(y_2/y_1)^{1/(x_2-x_1)}$ and $a=y_1/b^{x_1}$ determine $f(x)=ab^x$. Input values need not be positive. Equal outputs give $b=1$, a constant model; unequal outputs give a nonconstant exponential. At nonnegative integer inputs, $u_0=a$ and $u_{n+1}=bu_n$ for integers $n\ge0$. | Find and verify a model from two observations with distinct inputs and positive outputs, distinguishing a nonconstant exponential from the constant case. Express integer-step exponential data recursively with an initial value and a valid index range. | Use the output ratio and input separation to determine the positive base. Find the coefficient, check both points, and identify equal-output constant cases. Give a recurrence and initial value that reproduce the explicit model at the stated integer inputs. |
