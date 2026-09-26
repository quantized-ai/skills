# Unit 1 assessment calibration bank (agent-only)

Read the [agent guide](agent-guide.md), [question-generation specification](question-generation.md), and both selected lesson files from the [skill entry point](SKILL.md#lessons) first. Each heading below matches a tutor section, which identifies the authoritative curriculum concept. These fixed prompts and keys are internal examples for calibrating generated questions. Generate a fresh question for every assessment request; do not serve this bank as a recurring quiz. Present only the new question, one manageable part at a time, and retain its checked key privately until feedback is appropriate.

Tasks A and B illustrate different evidence opportunities, not two test forms to alternate. Use the tutor's Assess checklist to track coverage when generating tasks. Parts of one task do not automatically count as independent transfer. Exposed items must be replaced by verified fresh tasks with a changed representation or reasoning demand. Accept equivalent exact answers and valid methods. Grade reasoning, restrictions, and completeness along with results using the shared rubric. No calculator is necessary except actual plotting where specified. A graph description is an accessible alternative for drawing tasks; it does not replace required technology verification.

The [teacher-resource record](teaching-sources.md) explains the instructional basis and its limits. These prompts and keys are locally authored. Use a tutor file's reasoning task for feedback and revision during learning or practice; generate independent assessment questions separately. If the student explicitly requests a bank example, explain it and record its exposure. A before/after improvement on the same task is evidence of revision, not two independent successes. At the end, invite the student to identify one idea they can now explain and one they want to revisit, then compare that reflection with their work.

## Classify relations and identify domain and range

Lesson 1.1: [tutor coverage](lesson-1-relations-and-function-notation/tutor.md#classify-relations-and-identify-domain-and-range).

**A — Prompt:** A complete table lists the pairs $(-2,5),(0,5),(4,-1)$. Does it define a function? Give its domain and range with a reason. Now add $(0,7)$: explain exactly what changes.

**Key:** Initially a function; domain $\{-2,0,4\}$, range $\{-1,5\}$. Shared output $5$ is allowed. After the addition, input $0$ has outputs $5$ and $7$, so the relation is not a function; domain is unchanged, range becomes $\{-1,5,7\}$. A continuous domain interval is incorrect.

**B — Prompt:** One entire graph is a horizontal segment from $(-3,2)$ to $(4,2)$ with both endpoints included. Another entire graph is the outline of a circle centered at $(0,0)$ with radius $2$. Is each a function of its horizontal coordinate? Explain using intersections with vertical lines.

**Key:** The segment is a function: each allowed input has one output, despite repeated outputs. The circle is not: at $x=0$, outputs $2$ and $-2$ both occur. Do not require interval notation here; it belongs to Lesson 1.2.

## Evaluate and interpret function notation

Lesson 1.1: [tutor coverage](lesson-1-relations-and-function-notation/tutor.md#evaluate-and-interpret-function-notation).

**A — Prompt:** For $f(x)=2x^2+x$ with domain all real numbers except $1$, find $f(-2)$ and simplify $f(t-1)$. State when the latter is defined. Is $f(1)$ defined?

**Key:** $f(-2)=6$; $f(t-1)=2(t-1)^2+(t-1)=2t^2-3t+1$, defined for $t\ne2$; $f(1)$ is undefined because of the stated domain. Both variable occurrences must receive the full input. The polynomial alone does not override the domain.

**B — Prompt:** $V(t)$ is the volume of water in liters in a tank $t$ minutes after filling begins, for $0\le t\le10$. Explain $V(3)=18$. A student says it means “after 18 minutes there are 3 liters.” Evaluate that interpretation. Can $V(-1)$ be used in this model?

**Key:** At 3 minutes the tank contains 18 liters; the proposed interpretation swaps quantities and units. $V(-1)$ is outside the model's domain, even if some extension could be imagined. No formula is needed to interpret the notation.

## Represent and combine real sets

Lesson 1.2: [tutor coverage](lesson-2-sets-intervals-domain-and-range/tutor.md#represent-and-combine-real-sets).

**A — Prompt:** Express $-3<x\le2$ and $x\ge4$ in interval and set-builder notation. For $A=(-3,2]$ and $B=[4,\infty)$, find $A\cup B$ and $A\cap B$. Does $\{-3,2\}$ equal $[-3,2]$? Explain.

**Key:** $(-3,2]=\{x\in\mathbb R:-3<x\le2\}$ and $[4,\infty)=\{x\in\mathbb R:x\ge4\}$. Union $(-3,2]\cup[4,\infty)$; intersection $\varnothing$. The finite set differs from the interval, which also contains $0$, for example.

**B — Prompt:** A number line has a shaded ray ending at a filled point at $1$ and extending left forever; a second shaded ray starts at a filled point at $1$ and extends right forever. Describe the inputs belonging to both rays and those belonging to at least one. What changes if the right ray's point at $1$ is made open?

**Key:** Initially intersection $\{1\}$ and union $\mathbb R$. After opening the right endpoint, intersection is empty but union remains $\mathbb R$ because the left ray still contains $1$. Justification must track membership in each ray, not only draw symbols.

## Determine domain and range

Lesson 1.2: [tutor coverage](lesson-2-sets-intervals-domain-and-range/tutor.md#determine-domain-and-range).

**A — Prompt:** Give domain and range for each complete representation: (i) table $(-2,4),(0,0),(2,4)$; (ii) the entire graph formed by straight segments through $(-2,3),(0,-1),(3,2)$, with the first endpoint open and every other point included; (iii) $f(x)=x^2$ for $x\in(-2,1]$.

**Key:** (i) $D=\{-2,0,2\}$, $R=\{0,4\}$. (ii) $D=(-2,3]$, $R=[-1,3)$; the interior minimum is attained but output $3$ is not. (iii) $D=(-2,1]$, $R=[0,4)$; output $1$ remains attained despite the open input endpoint elsewhere. Interior values, not only endpoint images, determine the range.

**B — Prompt:** A machine sells at most 3 notebooks at 5 dollars each in one purchase. State the domain of notebook counts and range of total prices, including a zero-item purchase. Compare with $C(w)=5w$ dollars for any continuously measurable weight $0\le w\le3$ kg. Explain why the two ranges differ.

**Key:** Counts $\{0,1,2,3\}$, prices $\{0,5,10,15\}$ dollars. Continuous weight domain $[0,3]$ kg gives range $[0,15]$ dollars. Indivisible counts create gaps; continuous measurements do not here. Do not generalize that every continuous-domain function has continuous range.

## Describe function features

Lesson 1.3: [tutor coverage](lesson-3-features-and-change-in-functions/tutor.md#describe-function-features).

**A — Prompt:** The entire graph joins $(-3,-2),(-1,2),(1,-2),(3,2)$ by straight segments, including both endpoints. State zeros, both kinds of intercepts, positive and negative regions, increasing and decreasing intervals, and local and absolute extrema with their input locations. Use one-sided comparisons at domain endpoints.

**Key:** Zeros $-2,0,2$; horizontal intercepts $(-2,0),(0,0),(2,0)$; vertical intercept $(0,0)$. Positive on $(-2,0)\cup(2,3]$; negative on $[-3,-2)\cup(0,2)$. Increasing on $[-3,-1]$ and $[1,3]$, decreasing on $[-1,1]$; conventional open turning endpoints also accepted. Absolute maximum $2$ at $-1,3$; absolute minimum $-2$ at $-3,1$. These are also local extrema with the specified endpoint convention. No nontrivial constant interval exists.

**B — Prompt:** A reservoir's height $H(t)$ in meters is $-1$ on $0\le t\le2$ hours and $t-3$ on $2<t\le4$. Describe when height is constant, increasing, and below zero. Explain why “negative” and “decreasing” are different statements, and interpret its greatest height.

**Key:** Constant on $[0,2]$; increasing on $[2,4]$ (or conventional $(2,4)$); below zero on $[0,3)$. It never decreases: negative describes height relative to the reference level, not change over time. Greatest height is $1$ meter at 4 hours. This task checks transfer to contextual features; formal piecewise notation is not required.

## Compute and interpret average rate of change

Lesson 1.3: [tutor coverage](lesson-3-features-and-change-in-functions/tutor.md#compute-and-interpret-average-rate-of-change).

**A — Prompt:** A complete record gives a tank's volumes at times 1, 3, and 6 minutes as 20, 30, and 10 liters. Find the average rate from 1 to 6 minutes and interpret its sign and units. Does it establish that volume decreased throughout?

**Key:** $(10-20)/(6-1)=-2$ liters per minute: net average loss. No; the supplied record shows an increase from 1 to 3 minutes. Without connectivity information, do not invent the behavior between observations.

**B — Prompt:** A graph of position in meters against time in seconds has endpoint readings approximately $s(2)=3$ and $s(6)=11$. Each position reading is accurate to within $0.5$ meter; times are exact. Estimate the average rate, indicate the uncertainty supported by these readings, and describe the line whose slope you estimated. If a different graph has equal endpoint positions, must it be constant between them?

**Key:** Approximately $2$ meters per second, the slope of the secant joining the endpoints. Consistent rates range from $(10.5-3.5)/4=1.75$ to $(11.5-2.5)/4=2.25$ meters per second. Accept “about 2, with up to 0.25 error” or the interval. Equal endpoint positions imply zero average rate only; motion between them may vary. These are explicitly supplied graph readings; do not claim to have inspected an image.

## Apply translations

Lesson 1.4: [tutor coverage](lesson-4-transformations-of-functions/tutor.md#apply-translations).

**A — Prompt:** For $g(x)=f(x+4)-3$, derive how an arbitrary point on $f$ moves, then map $(-2,5)$ and $(3,-1)$.

**Key:** Solve $x+4=u$: $(u,v)\mapsto(u-4,v-3)$. Points become $(-6,2)$ and $(-1,-4)$. A direction label alone is incomplete evidence of the requested derivation.

**B — Prompt:** A translation alone sends the marked point $(2,-1)$ on $f$ to $(-1,3)$ on $g$. Recover the formula for $g$ in terms of $f$ and predict the image of $(-4,2)$. Would two points that merely look alike, with no stated correspondence, justify the same recovery?

**Key:** $h=-3$, $k=4$, so $g(x)=f(x+3)+4$ and $(-4,2)\mapsto(-7,6)$. Unconfirmed visual resemblance is insufficient. This reverses the direction of reasoning from formula-to-points to correspondence-to-formula.

## Apply reflections and scale factors

Lesson 1.4: [tutor coverage](lesson-4-transformations-of-functions/tutor.md#apply-reflections-and-scale-factors).

**A — Prompt:** The complete graph of $f$ consists of the three points $(-2,1),(0,3),(4,-1)$. Map it for $g(x)=2f(-x/2)$ and $h(x)=-f(2x)/2$. For each, give horizontal and vertical scale factors and any reflections.

**Key:** For $g$, points $(4,2),(0,6),(-8,-2)$; both scale magnitudes $2$; reflection across the vertical axis. For $h$, points $(-1,-1/2),(0,-3/2),(2,1/2)$; both scale magnitudes $1/2$; reflection across the horizontal axis. The graph is only those points; do not join them. Collectively both signs of inside and outside multipliers occur.

**B — Prompt:** Let $f$ have domain $[1,3]$. Describe the domain and values of $0f(x)$ and $2f(0x)$. A different function $p$ has domain $\mathbb R$ and is even: explain why $p(-x)$ has the same graph as $p(x)$ although the input transformation is a reflection.

**Key:** $0f(x)$ is zero on $[1,3]$ and undefined outside it. $2f(0x)$ is undefined for every real input because $f(0)$ is undefined. For even $p$, the identity $p(-x)=p(x)$ hides the reflected change of input. For $0f(x)$, $a=0$ and $b=1$, so the mapping $(u,v)\mapsto(u,0)$ remains valid on the original domain; loss of plane-map invertibility does not invalidate these graph images. Do not use the coordinate mapping when $b=0$.

## Apply and verify combined transformations

Lesson 1.4: [tutor coverage](lesson-4-transformations-of-functions/tutor.md#apply-and-verify-combined-transformations).

**A — Prompt:** Let $f(x)=x+1$ on $[-1,3)$. For $g(x)=-3f(2x+4)+2$, factor the inside expression, derive the point mapping, and give the domain, range, and images of the two endpoint locations with their inclusion. Predict the image of $(0,1)$, then check it with an actual graphing tool. Vary only the outside multiplier from $-3$ to $-1$ and compare the predicted and plotted position of that corresponding point.

**Key:** Inside $2(x+2)$; mapping $(u,v)\mapsto(-2+u/2,-3v+2)$. Domain $[-5/2,-1/2)$, range $(-10,2]$. Closed endpoint $(-5/2,2)$; open endpoint $(-1/2,-10)$. Image of $(0,1)$ is $(-2,-1)$; changing only the outside multiplier to $-1$ sends it to $(-2,1)$. Within its domain, original $g(x)=-6x-13$, confirming the prediction. Plot domain restrictions and inspect points in a common viewing window. Record the actual tool observation separately from this key; unavailable plotting means this evidence component remains not assessed.

**B — Prompt:** In $g(x)=af(2(x-h))+k$, two explicitly corresponding pairs are $(0,1)\mapsto(-2,-1)$ and $(2,3)\mapsto(-1,-7)$. Find $h,a,k$ and verify both pairs. Separately, if $f(x)=|x|$, can the graph $g(x)=6|x|$ uniquely determine nonzero $a,b$ in $g(x)=af(bx)$? Justify.

**Key:** $h=-2$ from horizontal correspondence; $a+k=-1$ and $3a+k=-7$ give $a=-3$, $k=2$. Both pairs satisfy the mapping. For absolute value only $a|b|=6$ is determined; $(a,b)=(6,1),(3,2),(3,-2)$ are examples. Do not assert uniqueness or introduce general inverse-function methods.

## Classify functions by even and odd symmetry

Lesson 1.5: [tutor coverage](lesson-5-symmetry-of-functions/tutor.md#classify-functions-by-even-and-odd-symmetry).

**A — Prompt:** Classify each as even, odd, both, or neither and justify: $f(x)=x^2+2$ on $\mathbb R$; $g(x)=x^3-2x$ on $\mathbb R$; $h(x)=x^2$ on $[-1,3]$; $z(x)=0$ on $\{-2,0,2\}$. State the corresponding graph symmetries where they apply.

**Key:** $f$ even only, by $f(-x)=f(x)$, vertical-axis symmetry. $g$ odd only, by $g(-x)=-g(x)$, origin symmetry. $h$ neither because its domain is asymmetric, despite the formula. $z$ both on its symmetric finite domain, with both symmetries. A classification label alone is insufficient.

**B — Prompt:** A complete finite function has pairs $(-2,3),(0,0),(2,-3)$. Classify it. If those pairs are instead only observations of an unspecified function on $\mathbb R$, what global classification is justified? Would an additional observation $(1,4),(-1,4)$ change your conclusion?

**Key:** Complete table: odd only. As a sample: oddness is possible but unproved; evenness is already disproved by $\pm2$, so “odd or neither” is the justified limitation. Adding the $\pm1$ observations disproves oddness as well, establishing neither. Matching finite samples cannot prove an identity, but a counterexample can disprove one.

## Interpret and graph absolute-value functions

Lesson 1.6: [tutor coverage](lesson-6-absolute-value-functions-and-equations/tutor.md#interpret-and-graph-absolute-value-functions).

**A — Prompt:** For $g(x)=\tfrac12|-4(x+2)|-6$, describe the graph, vertex, both branch slopes, domain, range, and all intercepts. Explain what changes if the inside multiplier becomes $4$, or if the outside multiplier changes from $1/2$ to $-1/2$.

**Key:** $g(x)=2|x+2|-6$, vertex $(-2,-6)$, opens up; left slope $-2$, right slope $2$; domain $\mathbb R$; range $[-6,\infty)$. Horizontal intercepts $(-5,0),(1,0)$; vertical intercept $(0,-2)$. Inside sign change has no effect. Outside sign change gives $-2|x+2|-6$: opens down, same vertex, range $(-\infty,-6]$, no horizontal intercepts, vertical intercept $(0,-10)$; slopes reverse.

**B — Prompt:** A transformed absolute-value function with domain $\mathbb R$ has vertex $(3,0)$ and passes through $(5,4)$. Construct a formula, state its range and horizontal intercepts, and express it as two linear branches with conditions. Explain its connection to distance from $3$.

**Key:** $y=2|x-3|$; range $[0,\infty)$; only horizontal intercept $(3,0)$. Branches $-2x+6$ for $x<3$ and $2x-6$ for $x\ge3$ (either consistent assignment at $3$ is valid). Output is twice the distance to $3$. Tasks A and B cover two, zero, and one horizontal-intercept cases without requiring recovery of unique inside/outside multipliers.

## Formulate and solve absolute-value equations

Lesson 1.6: [tutor coverage](lesson-6-absolute-value-functions-and-equations/tutor.md#formulate-and-solve-absolute-value-equations).

**A — Prompt:** Solve over $\mathbb R$ and justify the number of distinct solutions: $7-3|2x+1|=-8$; $2|x-4|+1=1$; $|3x-2|+5=2$. Check any solutions in their original equations.

**Key:** First: $|2x+1|=5$ gives $x=2,-3$; both give $7-15=-8$. Second: $|x-4|=0$ gives only $x=4$, and $2(0)+1=1$. Third would require $|3x-2|=-3$, impossible; no candidates exist to substitute. Do not manufacture two branches for zero or negative bounds.

**B — Prompt:** A point on a straight path is exactly 4 meters from the marker at coordinate $-2$ meters. Write a distance equation, solve it, and check both positions. If the allowed path is $x\ge0$, how does the solution set change?

**Key:** $|x+2|=4$ gives $x=-6,2$; both have distance 4 from $-2$. With $x\ge0$ only $2$ is permitted. Translation from a context and subsequent domain filtering are the transfer evidence.

## Solve and justify absolute-value inequalities

Lesson 1.7: [tutor coverage](lesson-7-absolute-value-inequalities/tutor.md#solve-and-justify-absolute-value-inequalities).

**A — Prompt:** Solve over $\mathbb R$, give equivalent inequalities and interval or set notation, and justify boundary membership: $|2x-1|<5$; $|x+3|\ge2$; $4-2|x-1|>0$. Explain whether the components of each answer are joined by “and” or “or.”

**Key:** First $-5<2x-1<5$, so $-2<x<3$, $(-2,3)$, an intersection. Second $x\le-5$ or $x\ge-1$, $(-\infty,-5]\cup[-1,\infty)$, a union. Third requires comparison reversal: $|x-1|<2$, so $-1<x<3$, $(-1,3)$, an intersection. Boundary points fail the strict comparisons and satisfy the inclusive comparison. Check one interior and one exterior test point as well as endpoints when validating generated variants.

**B — Prompt:** A distance from coordinate $2$ is $|x-2|$. Describe and justify the allowed positions when this distance is (i) less than zero, (ii) at most zero, (iii) greater than zero, (iv) at least zero. Repeat those four comparisons with bound $-1$ instead of zero.

**Key:** At zero: $\varnothing$, $\{2\}$, $(-\infty,2)\cup(2,\infty)$, $\mathbb R$, respectively. At $-1$: $\varnothing$, $\varnothing$, $\mathbb R$, $\mathbb R$. Distance is nonnegative. Require this reasoning rather than a positive-bound case rule used mechanically. These subcases ensure exceptional bounds do not disappear behind success on routine inequalities.

## Evaluate and graph piecewise functions

Lesson 1.8: [tutor coverage](lesson-8-piecewise-and-step-functions/tutor.md#evaluate-and-graph-piecewise-functions).

**A — Prompt:** Let $p(x)=x+2$ for $-2\le x<0$, $p(x)=3$ for $0\le x\le1$, and $p(x)=x-1$ for $2<x\le4$. Find $p(-1),p(1/2),p(3)$ and evaluate or explain undefined values at $-2,0,1,2,4$. Give domain, range, and a graph or precise graph description.

**Key:** Interior values $1,3,2$. Boundary values $0,3,3,$ undefined, $3$, respectively. Domain $[-2,1]\cup(2,4]$. Branch ranges $[0,2)$, $\{3\}$, $(1,3]$ unite to $[0,3]$: range has no gap despite the domain gap. Mark closed $(-2,0)$, open $(0,2)$, closed $(0,3),(1,3)$, open $(2,1)$, closed $(4,3)$. Include only each branch's stated input region.

**B — Prompt:** Decide whether these overlapping rules define functions. Rule one gives $x^2$ for $x\le1$ and $1$ for $x\ge1$. Rule two gives $x$ for $0\le x\le2$ and $2-x$ for $1\le x\le3$. Explain every overlap rather than choosing the first matching branch.

**Key:** Rule one is a function: the only shared input is $1$, and both outputs equal $1$. Rule two fails: overlap is $[1,2]$ and formulas agree only at $1$; for example at $2$ they give $2$ and $0$. Checking only the start of the overlap would miss the conflict. Do not ask for a unique value of the second rule at conflicting inputs.

## Evaluate and construct step functions

Lesson 1.8: [tutor coverage](lesson-8-piecewise-and-step-functions/tutor.md#evaluate-and-construct-step-functions).

**A — Prompt:** Find $\lfloor-2.3\rfloor$, $\lfloor-2\rfloor$, and $\lfloor1.8\rfloor$. Describe the graph of $y=\lfloor x\rfloor$ restricted to $[-2,1)$, including every segment, endpoint, domain, and range.

**Key:** $-3,-2,1$. On $[-2,1)$, horizontal segments have heights $-2,-1,0$ on $[-2,-1),[-1,0),[0,1)$, respectively. Each is closed on the left and open on the right; domain $[-2,1)$, range $\{-2,-1,0\}$. Output $1$ is absent because input $1$ is excluded.

**B — Prompt:** A flat parking charge is 2 dollars for any duration $0\le t<1$ hour, 5 dollars for $1\le t<3$ hours, and 8 dollars for $3\le t\le5$ hours. Other durations are not permitted. Construct a step function, give its domain and range, and test just below, at, and just above each internal threshold.

**Key:** $P(t)=2,5,8$ on those respective intervals; domain $[0,5]$ hours, range $\{2,5,8\}$ dollars. At $0.99,1,1.01$ the charges are $2,5,5$; at $2.99,3,3.01$ they are $5,8,8$. At $0$ charge $2$, at $5$ charge $8$, and beyond the domain it is undefined. These are flat charges, not cumulative sums or hourly rates. Every intended input has exactly one applicable fee.
