# Lesson 1.5: Symmetry of functions

Agent-facing reference for learning, practice, and self-assessment. Read the [shared agent guide](../agent-guide.md) with this lesson; it governs mode selection, hint use, task validation, and evidence. Calibration keys below are for the agent. Use the [assessment bank](../assessment.md) as an internal calibration reference and the [question-generation specification](../question-generation.md) to create fresh assessment questions every time.

## Prerequisites

- [Relations and function notation](../lesson-1-relations-and-function-notation/lesson.md)
- [Sets, intervals, domain, and range](../lesson-2-sets-intervals-domain-and-range/lesson.md)

## Outcome

The student can classify a function as even, odd, both, or neither and justify the conclusion over its stated domain.

## Scope

### Teach

- Domain symmetry under $x\mapsto -x$.
- The identities $f(-x)=f(x)$ and $f(-x)=-f(x)$.
- Vertical-axis and origin symmetry.
- Classification from formulas, complete finite tables, and graphs.
- The limits of conclusions drawn from sampled points.

### Defer

- Decomposition into even and odd parts.
- Periodicity.
- Symmetry that is not vertical-axis or origin symmetry.
- Proof techniques beyond direct use of the identities.

## Agent workflow

1. Check domain symmetry first. Use a complete small table to let the student articulate what each identity would require of a pair of opposite inputs.
2. Use the task below to separate evidence for evenness, oddness, both, and neither. When a value changes, ask for the decisive pair rather than an unexplained new label.
3. Move to formulas with complete substitution of the negative input, then connect the identity to reflected or opposite graph points. Use the calibration examples to resolve sign errors.
4. Reclassify the same information when it is a sample rather than the complete domain. Ask what could disprove a claim and what would be needed to establish it everywhere.
5. Invite revision after feedback. Assess fresh formula and nonalgebraic cases, retaining explicit domain reasoning; observed agreement at a few points cannot replace a global identity.

## Reasoning task for learning and practice

**Purpose:** use small changes to expose exactly what a symmetry claim depends on. These are original complete-table and evidence-limit tasks.

**Prompt:** A complete function has domain $\{-3,0,3\}$ and values $f(-3)=2$, $f(0)=0$, $f(3)=-2$. Classify its symmetry and justify. What happens if only $f(0)$ changes to $1$? What happens instead if input $-3$ is removed?

**Agent key:** Initially odd only: opposite inputs have opposite outputs and the domain is symmetric. Changing $f(0)$ to $1$ breaks oddness because an odd function defined at zero must have output zero; evenness already fails at $\pm3$, so it is neither. Removing $-3$ makes the domain asymmetric, also neither.

**Respond to reasoning:** If the student only checks $\pm3$, ask what the identity says at zero. If they call a negative output “odd,” ask them to write the paired-input relationship. If the domain is ignored, ask where the missing counterpart would be evaluated.

**Follow-up prompt:** Suppose the original three values are only observations of an unknown function on $\mathbb R$. Which conclusions survive? What would happen for the zero function on the original complete domain?

**Agent key:** The observations disprove evenness but leave oddness unproved; the full function could be odd or neither. The zero function on the symmetric complete domain is both. Ask for the reasoning behind each change of conclusion.

## Criteria

### Classify functions by even and odd symmetry

#### Knowledge

Evenness and oddness require a domain symmetric under $x\mapsto -x$: whenever $x$ is allowed, $-x$ must also be allowed. An even function satisfies $f(-x)=f(x)$ throughout its domain and has symmetry across the vertical axis. An odd function satisfies $f(-x)=-f(x)$ throughout its domain and has symmetry about the origin.

A function may be neither. The zero function on a symmetric domain is both even and odd. A complete finite table may establish symmetry on its listed domain, while a finite sample from a larger unspecified function cannot establish an identity beyond the sampled inputs.

#### Calibration examples (agent-only)

- **Diagnostic prompt:** Is $f(x)=x^2$ on $[0,3]$ even, odd, both, or neither? Justify.
- **Key:** Neither under this lesson's definitions: $2$ belongs to the domain but $-2$ does not, so the domain is not symmetric.
- **Worked model:** On $\mathbb R$, $p(x)=x^3+x$ is odd because $p(-x)=-x^3-x=-p(x)$. The zero function on $[-2,2]$ is both; the constant function $q(x)=3$ on $\mathbb R$ is even only. One matching pair in a sample can suggest symmetry but cannot establish an identity everywhere.
- **First hint:** “Whenever an input is allowed, is its negative allowed too?” Then ask what full substitution of $-x$ produces.
- **Generation check:** Label a table as complete or sampled. Inconsistent sampled pairs can disprove symmetry; consistent samples alone cannot prove global symmetry. Do not assume a polynomial's usual domain when a smaller one is stated.

#### Learn

- Check domain symmetry before evaluating either identity.
- Demonstrate substitution of the complete input $-x$ with preserved grouping and signs.
- Connect the two identities to their graph transformations.
- Show why the zero function can satisfy both identities.
- Contrast a complete finite-domain table with a sample from a larger domain.

#### Practice

Generate classifications from formulas, complete tables, and graph descriptions. Include an even function, an odd function, a neither function, the zero function, and a rule whose algebra appears symmetric but whose domain is not. Ask for the domain check and identity or geometric evidence each time.

If the student misclassifies a formula, isolate whether the cause is an asymmetric domain, incomplete substitution, incorrect sign simplification, or confusion between vertical-axis and origin symmetry.

#### Assess

Calibrate against the [reference tasks and keys](../assessment.md#classify-functions-by-even-and-odd-symmetry) and generate fresh questions using this coverage checklist.

Use fresh tasks requiring:

- one algebraic even-or-odd classification;
- one neither classification caused by the rule or domain;
- one case that is both;
- one complete finite-table classification; and
- one sampled representation for which the student must limit the conclusion.

Do not name the symmetry test in the prompt.

#### Mastery evidence

The student checks the domain, substitutes and simplifies correctly, selects among all four classifications, connects the result to the proper graph symmetry, and distinguishes proof over a domain from limited sample evidence.

#### Misconceptions

- **Identity without a symmetric domain:** Classifying the formula while ignoring excluded negative or positive inputs.
- **Odd means negative:** Treating negative output values as proof of oddness.
- **Origin symmetry means horizontal-axis symmetry:** Naming or applying the wrong geometric transformation.
- **Both is impossible:** Failing to recognize the zero function on a symmetric domain.
- **A few matching pairs prove the identity:** Extending sampled evidence to an unspecified larger domain.

## Lesson completion

Mark this lesson complete only when the criterion is **Secure in this session** under the [shared evidence rubric](../agent-guide.md#evidence-rubric), with evidence across algebraic and nonalgebraic representations.

## Teaching sources

Teaching design: [IES algebra guidance](../teaching-sources.md#ies-algebra-teaching-guidance). Mathematical reference: [OpenStax 3.5 Transformation of Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-5-transformation-of-functions). See the [source record](../teaching-sources.md) for the precise role of these references, local qualifications, and evidence limits. The reasoning task and calibration examples are locally authored.
