# Lesson 9.1: Root definitions and principal values

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Root notation selects particular real values, while equations can have more than one solution. Even roots require special attention to nonnegative principal values and absolute values when extracting powers.

## Learning objectives

- Evaluate real nth roots and distinguish radical values from power-equation solutions.
- Simplify roots of powers with the required absolute values and sign conditions.

## Learning outcome

The student can justify the value and real domain of a root expression without losing a sign or an equation solution.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Distinguish the real-root behavior of even and odd indices, including negative radicands.
- Separate the single principal radical value from the complete solution set of a power equation.
- Use absolute value when an even root extracts a quantity whose sign is not fixed.
- Verify a simplification through its sign and power, and explain any assumption that removes an absolute value.

## Concepts

### Concept U09-L01-C01: Even and odd nth roots

**Content**

- Index, radicand, and principal root
- Root expressions versus solution sets

**Learning objectives**

- **U09-L01-C01-O1:** Evaluate real nth roots and identify radicands that have no real even root.
  - Standards: CCSS HSN-RN.A.1 (supporting knowledge); TEKS 2A.7(G) (supporting knowledge).
- **U09-L01-C01-O2:** Distinguish a principal-root expression from all solutions of a power equation.
  - Standards: CCSS HSN-RN.A.1 (supporting knowledge); CCSS HSA-REI.B.4b (review).

**Proficiency criteria**

- Identify the index and radicand and decide whether a real radical value exists.
- Select the nonnegative principal value for an even root and the unique signed value for an odd root.
- List all real solutions of a related power equation without transferring its multiple signs into the radical symbol.

**Explanation**

For integer $n\ge2$, an nth root of $a$ is a number whose nth power is $a$. For even $n$, the radical symbol denotes the nonnegative principal root and requires $a\ge0$ in the real numbers. For odd $n$, every real $a$ has exactly one real nth root with the same sign as $a$. A radical expression returns one value; a power equation may have two real solutions.

**Worked examples**

$\sqrt[4]{81}=3$, but $x^4=81$ has real solutions $x=\pm3$. The expression $\sqrt[3]{-64}=-4$, because $(-4)^3=-64$. The expression $\sqrt[4]{-16}$ has no real value because every real fourth power is nonnegative.

**Exercises**

1. Evaluate $\sqrt{49}$ and solve $x^2=49$. **Answer:** 7; the equation has $x=\pm7$.
2. Evaluate $\sqrt[5]{-32}$ and $\sqrt[6]{64}$. **Answer:** $-2$ and 2, respectively.

**Assessment**

Evaluate $\sqrt[4]{16}$ and $\sqrt[3]{-27}$, then list all real solutions of $x^4=16$.

- **U09-L01-C01-O1 — 2 points:** The principal fourth root is 2 and the cube root is $-3$, justified by their powers.
- **U09-L01-C01-O2 — 2 points:** The equation has $x=-2,2$; the fourth-root symbol itself denotes only 2.

### Concept U09-L01-C02: Absolute value when extracting even powers

**Content**

- $\sqrt{x^2}=|x|$
- Odd roots and even roots of powers

**Learning objectives**

- **U09-L01-C02-O1:** Simplify roots of powers using absolute values where necessary.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).
- **U09-L01-C02-O2:** Use an input or sign argument to detect a missing absolute value.
  - Standards: CCSS HSN-RN.A.2 (direct); TEKS 2A.7(G) (direct).

**Proficiency criteria**

- Require the result of an even-root extraction to be nonnegative.
- Introduce an absolute value when extracting an unrestricted real quantity to an even power.
- Remove an absolute value only after establishing its sign condition, and use a negative-input check to expose an invalid simplification.

**Explanation**

For real $u$, $\sqrt{u^2}=|u|$ because the principal root must be nonnegative. More generally, $\sqrt[2k]{u^{2k}}=|u|$, whereas $\sqrt[2k+1]{u^{2k+1}}=u$. If a problem states $u\ge0$, the absolute value may be replaced by $u$; otherwise retain it.

**Worked examples**

$\sqrt{9x^2}=3|x|$. At $x=-2$, the original is $\sqrt{36}=6$, agreeing with $3|-2|=6$ but not with $3x=-6$. Similarly, $\sqrt[4]{(x-1)^4}=|x-1|$, while $\sqrt[3]{8x^3}=2x$ for every real $x$.

**Exercises**

1. Simplify $\sqrt{(x+4)^2}$. **Answer:** $|x+4|$.
2. Simplify $\sqrt{x^4}$ and explain. **Answer:** $x^2$, since $|x^2|=x^2$ for every real $x$.

**Assessment**

Simplify $\sqrt{25(x-2)^2}$ without assumptions on $x$, and use $x=0$ to check the result.

- **U09-L01-C02-O1 — 2 points:** $5|x-2|$, since the principal square root is nonnegative.
- **U09-L01-C02-O2 — 2 points:** At $x=0$, both the original and correct form give 10; $5(x-2)$ would give $-10$ and fails.
