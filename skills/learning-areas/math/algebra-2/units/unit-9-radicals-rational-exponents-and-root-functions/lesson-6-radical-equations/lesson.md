# Lesson 9.6: Radical equations

[Unit 9: Radicals, rational exponents, and root functions](../unit.md) · [Algebra 2](../../../curriculum.md)

Radical equations require attention to which transformations are reversible. Isolation and checking control the extraneous candidates introduced by squaring, while cubing real quantities preserves equivalence.

## Learning objectives

- Solve square-root equations, including equations with two radicals.
- Solve cube-root equations and explain the different effects of even and odd powers.

## Learning outcome

The student can produce and verify the complete real solution set of a simple radical equation, explaining any extraneous candidates.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Determine real-domain and sign restrictions before removing a radical.
- Isolate a radical before squaring or cubing and expand every resulting cross term correctly.
- Check every candidate from squaring against the original equation, including after repeated squaring.
- Explain why cubing is reversible on real inputs while squaring may merge opposite values.

## Concepts

### Concept U09-L06-C01: Square-root equations and extraneous candidates

**Content**

- Isolation before squaring
- Sign constraints and checking

**Learning objectives**

- **U09-L06-C01-O1:** Solve square-root equations by isolating and squaring.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.4(F) (direct).
- **U09-L06-C01-O2:** Identify extraneous candidates by substitution and explain their source.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.4(G) (direct).

**Proficiency criteria**

- Isolate the principal square root and require the opposite side to be nonnegative.
- Treat the squared equation as a source of candidates rather than an automatically equivalent equation on unrestricted inputs.
- Check original values and distinguish a forbidden radicand from a candidate rejected by the principal-root sign.

**Explanation**

Isolate a square root and require the other side to be nonnegative. Squaring preserves equality in the forward direction, but it can turn unequal opposite values into equal squares. Solve the squared equation and check every candidate in the original. Domain restrictions alone do not guarantee a candidate satisfies the original sign requirement.

**Worked examples**

Solve $\sqrt{x+2}=x$. Necessarily $x\ge0$. Squaring gives $x+2=x^2$, so $(x-2)(x+1)=0$. Candidate 2 checks: $\sqrt4=2$. Candidate $-1$ fails: $\sqrt1=1\ne-1$. Therefore only 2 is a solution. For $\sqrt{x-1}=-2$, no squaring is needed: a principal square root cannot be negative.

**Exercises**

1. Solve $\sqrt{x+5}=3$. **Answer:** $x=4$, which checks.
2. Solve $\sqrt{x+6}=x$. **Answer:** candidates 3 and $-2$ arise; only 3 checks.

**Assessment**

Solve $\sqrt{2x+3}=x$ and explain any rejected candidate.

- **U09-L06-C01-O1 — 2 points:** $2x+3=x^2$ gives $(x-3)(x+1)=0$, candidates 3 and $-1$.
- **U09-L06-C01-O2 — 2 points:** Only 3 works: $\sqrt9=3$; at $-1$, the left side is 1 but the right side is $-1$, an extraneous candidate caused by squaring.

### Concept U09-L06-C02: Two radicals and cube-root equations

**Content**

- Repeated isolation and squaring
- Odd powers as reversible operations

**Learning objectives**

- **U09-L06-C02-O1:** Solve a simple equation containing two square roots and check its result.
  - Standards: CCSS HSA-REI.A.2 (direct); TEKS 2A.4(F) (direct); TEKS 2A.4(G) (direct).
- **U09-L06-C02-O2:** Solve cube-root equations and distinguish the effect of cubing from squaring.
  - Standards: TEKS 2A.6(B) (direct); CCSS HSA-REI.A.2 (direct).

**Proficiency criteria**

- For two square roots, isolate and square in stages while retaining the full binomial square.
- Verify any candidates in the original two-radical equation after all eliminations.
- Solve a cube-root equation by reversible cubing and explain why this operation itself does not introduce extraneous real values.

**Explanation**

With two square roots, isolate one before squaring; a second isolation and squaring may be needed. Keep the cross term in $(a+b)^2$. In contrast, cubing is one-to-one on the real numbers: $u^3=v^3$ if and only if $u=v$. Thus cubing itself introduces no extraneous real candidates, although restrictions or other nonreversible steps still require attention.

**Worked examples**

Solve $\sqrt{x+1}=\sqrt{x-2}+1$, with $x\ge2$. Squaring gives $x+1=x-2+2\sqrt{x-2}+1$, so $2=2\sqrt{x-2}$ and $x=3$. Check: $2=1+1$. Separately, $\sqrt[3]{2x-1}+2=5$ gives $\sqrt[3]{2x-1}=3$, then $2x-1=27$, so $x=14$; substitution returns 5.

**Exercises**

1. Solve $\sqrt{x+5}=\sqrt x+1$. **Answer:** $x=4$; squaring gives $4=2\sqrt x$, and $3=2+1$ checks.
2. Solve $2\sqrt[3]{x+1}=-4$. **Answer:** $x=-9$, since the isolated cube root is $-2$.

**Assessment**

Solve (a) $\sqrt{x+3}=\sqrt x+1$ and (b) $\sqrt[3]{x-4}=-2$, explaining why checks differ.

- **U09-L06-C02-O1 — 2 points:** (a) $3=2\sqrt x+1$, so $x=1$; substitution $2=1+1$ validates both squaring steps.
- **U09-L06-C02-O2 — 2 points:** (b) $x-4=-8$, hence $x=-4$; cubing is reversible for real values and direct substitution confirms it.
