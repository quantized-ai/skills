# Lesson 12.5: Restrictions and inverse verification

[Unit 12: Function operations, composition, and inverses](../unit.md) · [Algebra 2](../../../curriculum.md)

A non-one-to-one function can become invertible when its domain is restricted to a suitable branch. Verification then requires both compositions on their own domains, with the chosen branch determining the correct root sign.

## Learning objectives

- Restrict quadratic domains and derive the corresponding inverse branches.
- Verify inverses through both compositions with explicit domain conditions.

## Learning outcome

The student can choose and justify an invertible branch and prove that its inverse reverses the function on the correct sets.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Select a quadratic branch that prevents distinct retained inputs from sharing an output.
- Use the branch condition to choose the correct sign when solving for the inverse.
- Exchange the original restricted domain and attained range.
- Verify both identity compositions on their respective domains and explain why an unrestricted absolute value can invalidate a claimed inverse.

## Concepts

### Concept U12-L05-C01: Restricting a quadratic to obtain an inverse

**Content**

- One-to-one branches
- Different restrictions give different inverses

**Learning objectives**

- **U12-L05-C01-O1:** Restrict a non-one-to-one quadratic to an interval on which it is invertible.
  - Standards: CCSS HSF-BF.B.4d (+) (direct); TEKS 2A.2(C) (direct).
- **U12-L05-C01-O2:** Find the inverse branch and its domain and range for the chosen restriction.
  - Standards: CCSS HSF-BF.B.4a (direct); TEKS 2A.2(B) (direct); TEKS 2A.2(C) (direct).

**Proficiency criteria**

- Specify the chosen side of the vertex and justify one-to-one behavior on that interval.
- Select the square-root sign that corresponds to the original branch.
- State the inverse domain and range as the exchanged original range and restricted domain, including endpoint inclusion.

**Explanation**

A quadratic has two inputs for most outputs, so choose a side of its vertex. For $f(x)=(x-h)^2+k$, the restriction $x\ge h$ yields inverse $h+\sqrt{x-k}$; the restriction $x\le h$ yields $h-\sqrt{x-k}$. The inverse domain is the original range $x\ge k$, while its range is the chosen original branch.

**Worked examples**

For $f(x)=(x-2)^2+1$ on $[2,\infty)$, solve $y-1=(x-2)^2$ with $x-2\ge0$ to get $x=2+\sqrt{y-1}$. Thus $f^{-1}(x)=2+\sqrt{x-1}$, domain $[1,\infty)$, range $[2,\infty)$. Choosing the original domain $(-\infty,2]$ instead produces $2-\sqrt{x-1}$ and inverse range $(-\infty,2]$.

**Exercises**

1. Invert $x^2+3$ on $x\ge0$. **Answer:** $\sqrt{x-3}$, domain $[3,\infty)$ and range $[0,\infty)$.
2. Invert $x^2$ on $x\le0$. **Answer:** $-\sqrt x$, domain $[0,\infty)$ and range $(-\infty,0]$.

**Assessment**

Restrict $f(x)=(x+1)^2-4$ to the branch $x\ge-1$, then find its inverse and both relevant inverse sets.

- **U12-L05-C01-O1 — 2 points:** The chosen branch is increasing and one-to-one, with original range $[-4,\infty)$.
- **U12-L05-C01-O2 — 2 points:** $f^{-1}(x)=-1+\sqrt{x+4}$, inverse domain $[-4,\infty)$ and range $[-1,\infty)$. Applying the positive root matches the chosen branch.

### Concept U12-L05-C02: Verifying both compositions on their domains

**Content**

- Identity maps on different sets
- One-sided checks can mislead

**Learning objectives**

- **U12-L05-C02-O1:** Verify inverse functions using both compositions.
  - Standards: CCSS HSF-BF.B.4b (+) (direct); TEKS 2A.2(D) (direct).
- **U12-L05-C02-O2:** Identify a failed inverse claim caused by missing domain restrictions.
  - Standards: CCSS HSF-BF.B.4b (+) (direct); TEKS 2A.2(D) (direct).

**Proficiency criteria**

- Form and simplify both compositions rather than relying on one successful direction.
- State which original or inverse domain applies to each identity.
- Use sign restrictions to justify any absolute-value simplification and identify why a missing restriction makes an inverse claim fail.

**Explanation**

To show $g=f^{-1}$, verify $g(f(x))=x$ for every $x\in D_f$ and $f(g(y))=y$ for every $y\in D_g$, with $D_g$ equal to the range of $f$. The two identities may have different input sets. Proving only one composition or simplifying without domain checks can conceal a failed inverse.

**Worked examples**

Let $f(x)=x^2$ on $[0,\infty)$ and $g(x)=\sqrt x$ on $[0,\infty)$. Then $g(f(x))=\sqrt{x^2}=|x|=x$ because $x\ge0$, and $f(g(x))=(\sqrt x)^2=x$ for $x\ge0$. If $f$ instead has domain $\mathbb R$, the first composition becomes $|x|$, not $x$ for negative inputs, so the inverse claim fails.

**Exercises**

1. Verify $f(x)=2x+3,g(x)=(x-3)/2$. **Answer:** both compositions simplify to $x$ for all real inputs.
2. Explain why $f(x)=x^2,g(x)=\sqrt x$ fail as inverses when $f$ has all real inputs. **Answer:** $g(f(-2))=2\ne-2$.

**Assessment**

For $f(x)=x^2$ restricted to $x\le0$ and $g(x)=-\sqrt x$ for $x\ge0$, verify both compositions and their domains.

- **U12-L05-C02-O1 — 2 points:** $g(f(x))=-\sqrt{x^2}=-|x|=x$ for $x\le0$; $f(g(y))=(-\sqrt y)^2=y$ for $y\ge0$.
- **U12-L05-C02-O2 — 2 points:** The restrictions are essential: original domain $(-\infty,0]$ equals inverse range and original range $[0,\infty)$ equals inverse domain.
