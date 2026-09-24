# Lesson 10.6: Rates of change and comparisons

[Unit 10: Exponential functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Constant exponential ratios do not mean constant slopes. Average-rate calculations and comparisons over different scales distinguish local numerical evidence from eventual growth behavior.

## Learning objectives

- Calculate and interpret exponential average rates of change.
- Compare exponential and polynomial growth using tables and graphs without overstating finite evidence.

## Learning outcome

The student can distinguish percentage change, additive average rate, and long-term growth when comparing functions.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Compute average change from endpoint outputs over the same stated input interval.
- Attach output-per-input units and interpret the sign of the rate.
- Explain how equal percentage changes can produce different additive increases.
- Compare exponential and polynomial outputs across scales while separating a finite table’s evidence from a general eventual-growth claim.

## Concepts

### Concept U10-L06-C01: Average rates of change for exponentials

**Content**

- Changing additive rates
- Constant ratios versus slopes

**Learning objectives**

- **U10-L06-C01-O1:** Calculate average rates of change over specified intervals.
  - Standards: CCSS HSF-IF.B.6 (direct).
- **U10-L06-C01-O2:** Explain why constant percentage growth does not imply constant additive growth.
  - Standards: CCSS HSF-LE.A.1a (direct); CCSS HSF-LE.A.1c (direct).

**Proficiency criteria**

- Use net output change divided by input change rather than a ratio of outputs.
- Calculate rates on specified intervals with correct units and signs.
- Reconcile different additive rates with the same multiplicative factor by identifying the different starting amounts.

**Explanation**

Average rate of change over $[a,b]$ is $[f(b)-f(a)]/(b-a)$ and has output-units per input-unit. For a growing positive exponential, later equal-length intervals have larger absolute increases, even though their output ratios match. A percent rate and an average additive rate describe different quantities.

**Worked examples**

For $f(t)=10\cdot2^t$, the average rate on $[0,1]$ is $(20-10)/1=10$, and on $[2,3]$ it is $(80-40)/1=40$. Both intervals double the amount, but the later one adds 40 rather than 10. On $[0,3]$ the average rate is $(80-10)/3=70/3$.

**Exercises**

1. Find the average rate of $5\cdot3^x$ on $[0,2]$. **Answer:** $(45-5)/2=20$.
2. For $100(1/2)^t$, compare one-step changes from 0 to 1 and from 1 to 2. **Answer:** $-50$ and $-25$, though the factor is $1/2$ both times.

**Assessment**

For $f(t)=8\cdot2^t$, compute average rates on $[0,1]$ and $[1,2]$ and interpret the comparison.

- **U10-L06-C01-O1 — 2 points:** Rates are $(16-8)/1=8$ and $(32-16)/1=16$ output units per time unit.
- **U10-L06-C01-O2 — 2 points:** Both intervals have a factor of 2, but the second starts from twice as much, so its additive increase doubles.

### Concept U10-L06-C02: Comparing exponential and polynomial growth

**Content**

- Tables at changing scales
- Eventual growth versus local comparisons

**Learning objectives**

- **U10-L06-C02-O1:** Use tables or graphs to compare exponential and polynomial functions.
  - Standards: CCSS HSF-LE.A.3 (direct); CCSS HSF-IF.C.9 (direct).
- **U10-L06-C02-O2:** Distinguish behavior on a displayed interval from eventual growth.
  - Standards: CCSS HSF-LE.A.3 (direct).

**Proficiency criteria**

- Evaluate or graph both functions on common inputs and compare their outputs accurately.
- Change the viewing scale or extend the table when a local window could conceal a crossover.
- Distinguish verified sample comparisons from a proof for all later inputs, while describing the stated eventual-dominance behavior.

**Explanation**

A positive exponential with base greater than 1 eventually exceeds any fixed polynomial as $x$ increases, although a polynomial may be larger for many initial inputs. Tables and graphs should use more than one scale; a small window can hide a crossover. This lesson supplies numerical evidence and interpretation; a general proof of eventual dominance is beyond this course.

**Worked examples**

Compare $2^x$ and $x^3$. At $x=5$, $32<125$; at 9, $512<729$; at 10, $1024>1000$; at 20, $1{,}048{,}576>8000$. These samples show an eventual change in which model is larger, while $2^0=1>0^3$ also warns that “polynomial first, exponential later” is not a universal ordering over the entire domain.

**Exercises**

1. Compare $2^{10}$ and $10^2$. **Answer:** 1024 versus 100; the exponential is larger.
2. Does a graph on $0\le x\le4$ proving one model larger establish all later comparisons? **Answer:** no; investigate a larger interval and the family’s end behavior.

**Assessment**

Create a table comparing $2^x$ and $x^3$ at 8,10,12, then describe what the evidence establishes and what a finite table alone cannot prove.

- **U10-L06-C02-O1 — 2 points:** Rows $(8,256,512),(10,1024,1000),(12,4096,1728)$ correctly compare both outputs.
- **U10-L06-C02-O2 — 2 points:** The exponential overtakes the cubic among these samples and leads at 10 and 12; the finite table alone is not a proof of dominance at every later real input.
