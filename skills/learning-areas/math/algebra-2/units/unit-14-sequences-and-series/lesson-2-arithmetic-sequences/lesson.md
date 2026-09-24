# Lesson 14.2: Arithmetic sequences

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Arithmetic sequences express repeated additive change. Explicit and recursive forms are connected through the number of steps between an initial index and a requested term.

## Learning objectives

- Construct arithmetic rules from consecutive or separated terms.
- Translate between explicit and recursive representations.
- Interpret initial values and common differences in discrete models.

## Learning outcome

The student can construct, translate, and verify arithmetic sequence models with a consistent index convention.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Establish a constant per-step difference from comparable index intervals.
- Recover an initial value and build a rule that reproduces all supplied terms.
- Translate between formulas without changing the starting index or the number of increments.
- Explain how the initial value and difference determine the modeled quantity at any allowed index.

## Concepts

### Concept U14-L02-C01: Constant differences and explicit formulas

**Content**

Common difference; $a_n=a_1+(n-1)d$; formulas from separated terms.

**Learning objectives**

- **U14-L02-C01-O1:** Determine a common difference and construct an explicit arithmetic rule.
  - Standards: CCSS HSF-BF.A.2 (direct); TEKS A.12(D) (prerequisite review).
- **U14-L02-C01-O2:** Use an arithmetic rule to calculate an indexed term, including from two nonconsecutive terms.
  - Standards: CCSS HSF-LE.A.2 (direct); TEKS A.12(D) (prerequisite review).

**Proficiency criteria**

- Confirm equal additive changes across equal index intervals before identifying an arithmetic model.
- Derive a one-step common difference from separated terms by accounting for the number of intervening steps.
- Construct an explicit rule consistent with its initial index and verify it against the supplied terms.

**Explanation**

An arithmetic sequence adds the same number at each step. From index 1 to index $n$ there are $n-1$ increments, which explains the explicit formula. Between indices $j$ and $k$, $a_k-a_j=(k-j)d$. Repeated equal differences in a finite table support a model but do not prove an unspecified infinite continuation.

**Worked examples**

1. $8,5,2,-1$ has $d=-3$, so $a_n=8-3(n-1)$ and $a_7=8-18=-10$.
2. If $a_3=11$ and $a_7=27$, four increments total 16, so $d=4$; $a_1=3$ and $a_n=3+4(n-1)$.

**Exercises**

1. Write a rule for $-1,4,9,14$ starting at 1. **Answer:** $a_n=-1+5(n-1)$.
2. If an arithmetic sequence has $a_2=9,a_6=1$, find $a_{10}$. **Answer:** $d=(1-9)/4=-2$; $a_{10}=1+4(-2)=-7$.

**Assessment**

An arithmetic sequence has $a_4=6$ and $a_9=21$. Find its rule and $a_{12}$. **Expected:** $d=15/5=3$, $a_1=-3$, $a_n=-3+3(n-1)$; $a_{12}=30$. **Rubric (4):** difference and rule (2, O1); index gap and requested value (2, O2).

Objective coverage: **U14-L02-C01-O1**, **U14-L02-C01-O2**.

### Concept U14-L02-C02: Arithmetic recursive and explicit representations

**Content**

Translating forms; index shifts; discrete linear models.

**Learning objectives**

- **U14-L02-C02-O1:** Translate arithmetic sequence formulas between recursive and explicit forms.
  - Standards: CCSS HSF-BF.A.2 (direct).
- **U14-L02-C02-O2:** Build and interpret an arithmetic model with a stated initial index.
  - Standards: CCSS HSF-BF.A.2 (direct); CCSS HSF-LE.B.5 (direct).

**Proficiency criteria**

- Translate between recursive and explicit forms while preserving the same initial value and index convention.
- Explain why the number of additions depends on the distance from the starting index, not simply the displayed term number.
- Interpret the common difference and initial value in the model’s quantities and verify both representations at a shared input.

**Explanation**

The recursive version names the starting value and repeated addition; the explicit version records all additions at once. With index zero use $a_n=a_0+nd$. The coefficient of $n$ is the change per step; the constant may represent index zero rather than the first observed term.

**Worked examples**

1. $a_n=12+4(n-1)$ becomes $a_1=12$, $a_n=a_{n-1}+4$ for $n\ge2$.
2. A count is 30 at week 0 and rises by 6 each week. $C_0=30$, $C_n=C_{n-1}+6$ and $C_n=30+6n$. At week 5, $C_5=60$; using $n-1$ here would undercount.

**Exercises**

1. Convert $a_1=7$, $a_n=a_{n-1}-2$ to explicit form. **Answer:** $a_n=7-2(n-1)$.
2. An initial balance is 50 units, with 8 added at the end of each day. Write the balance after $n$ days. **Answer:** $B_n=50+8n$, $n\ge0$ integer.

**Assessment**

A sequence is $v_n=17-3n$ for integer $n\ge0$. Give its recurrence and explain the initial value and step change in a quantity model. **Expected:** $v_0=17$, $v_n=v_{n-1}-3$ for $n\ge1$; starts at 17 and decreases by 3 each step. **Rubric (4):** initial condition and recurrence (2, O1); both parameter interpretations (2, O2).

Objective coverage: **U14-L02-C02-O1**, **U14-L02-C02-O2**.
