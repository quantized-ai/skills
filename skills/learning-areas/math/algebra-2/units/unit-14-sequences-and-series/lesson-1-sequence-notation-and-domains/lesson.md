# Lesson 14.1: Sequence notation and domains

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Sequences are functions whose inputs are integer indices. This lesson establishes the notation, domains, and initial conditions needed to read explicit rules and generate recursive terms.

## Learning objectives

- Interpret indexed terms and specify finite or infinite integer domains.
- Evaluate explicit sequence rules and generate recursive terms.
- Explain why initial conditions are necessary for a complete recursive definition.

## Learning outcome

The student can describe a sequence as an indexed function and produce its terms from a complete explicit or recursive specification.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- State the indexing convention and distinguish an input index from its output value.
- Use only the permitted integer inputs when evaluating or plotting a sequence.
- Generate recursive terms in dependency order from the stated initial conditions.
- Identify missing information in an incomplete rule and explain why it prevents a unique sequence from being determined.

## Concepts

### Concept U14-L01-C01: Terms and indices

**Content**

Ordered lists; $a_n$; first index; finite and infinite integer domains.

**Learning objectives**

- **U14-L01-C01-O1:** Interpret an indexed term and evaluate an explicit sequence rule.
  - Standards: CCSS HSF-IF.A.2 (prerequisite review); CCSS HSF-IF.A.3 (direct).
- **U14-L01-C01-O2:** Specify an integer domain and distinguish a term number from a term value.
  - Standards: CCSS HSF-IF.A.3 (direct).

**Proficiency criteria**

- Distinguish an index from its associated term value when reading notation, a table, or a plotted point.
- State the initial index and all permitted integer inputs, preserving finite endpoints where applicable.
- Evaluate an explicit rule only at allowed inputs and represent a sequence as discrete points unless an interpolation is separately defined.

**Explanation**

A sequence assigns one value to each allowed integer index. The subscript is an input, not a factor: $a_4$ means the value at index 4. A rule is incomplete without its indexing convention and domain. Plot separate points unless a continuous interpolation is separately justified.

**Worked examples**

1. For $a_n=2n+3$, $n=1,2,3,4$, substitute $n=3$: $a_3=9$. Its graph has four points, including $(3,9)$; 9 is not the index.
2. For $b_n=5(2)^n$, $n\ge0$, the first three terms are $b_0=5$, $b_1=10$, $b_2=20$. Starting at zero changes which term is called first.

**Exercises**

1. Find $a_5$ for $a_n=n^2-1$, $n\ge1$. **Answer:** $25-1=24$.
2. Give the domain for the first six values of $b_n=3n$ starting at $n=0$. **Answer:** $\{0,1,2,3,4,5\}$, not $[0,5]$.

**Assessment**

For $c_n=7-2n$, $n\in\{0,1,2,3\}$, find $c_2$, identify its index and value, and list the domain. **Expected:** $c_2=3$, index 2, value 3; domain $\{0,1,2,3\}$. **Rubric (4):** substitution and value (2, O1); correct index/value distinction and discrete domain (2, O2).

Objective coverage: **U14-L01-C01-O1**, **U14-L01-C01-O2**.

### Concept U14-L01-C02: Recursive definitions and initial values

**Content**

Initial conditions; recurrence; successive computation; underdetermined rules.

**Learning objectives**

- **U14-L01-C02-O1:** Generate terms using a recurrence and its initial condition.
  - Standards: CCSS HSF-IF.A.3 (direct); TEKS A.12(C) (prerequisite review).
- **U14-L01-C02-O2:** Explain why the recurrence alone does not identify one sequence.
  - Standards: CCSS HSF-IF.A.3 (direct).

**Proficiency criteria**

- State enough initial values and the input range on which a recurrence applies before generating terms.
- Use the previously computed term, rather than the previous index, as the recurrence input when required.
- Demonstrate that a shared update rule can produce different sequences when its initial conditions change.

**Explanation**

A recursive rule uses earlier outputs. It needs enough initial values to start and a statement of where the recurrence applies. Do not replace the earlier term by the earlier index. The same update rule can produce different sequences from different starting values.

**Worked examples**

1. $a_1=4$, $a_n=a_{n-1}+3$ for $n\ge2$ gives $a_2=7$, $a_3=10$, $a_4=13$.
2. The rule $b_n=2b_{n-1}$ gives $3,6,12$ from $b_1=3$, but $5,10,20$ from $b_1=5$. The multiplier does not determine the starting value.

**Exercises**

1. Generate four terms from $a_0=2$, $a_n=3a_{n-1}-1$ for $n\ge1$. **Answer:** $2,5,14,41$.
2. What is missing from $a_n=a_{n-1}-4$ for $n\ge2$? **Answer:** An initial value such as $a_1$; infinitely many sequences fit.

**Assessment**

Use $u_1=-2$, $u_n=u_{n-1}+5$ to find $u_2,u_3$. Explain what would remain unknown without $u_1$. **Expected:** $3,8$; the update specifies a difference but no starting value. **Rubric (4):** both terms (2, O1); identifies missing initial value and nonuniqueness (2, O2).

Objective coverage: **U14-L01-C02-O1**, **U14-L01-C02-O2**.
