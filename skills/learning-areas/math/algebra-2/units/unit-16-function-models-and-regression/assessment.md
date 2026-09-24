# Unit 16 assessment

[Unit overview](unit.md)

## Unit cumulative assessment

Six independent tasks, 8 points each, 48 total. Submit technology tables and unrounded coefficients for regression tasks.

1. Given $V=\pi r^2h$ with positive $V,h$, solve for nonnegative $r$. Explain the domain restriction and check units. **Answer:** $r=\sqrt{V/(\pi h)}$; $h>0,V\ge0$; volume/length has units length² before the square root. **Scoring:** 3 isolation, 3 restriction/branch, 2 units. **Objectives:** U16-L01-C01-O1; U16-L01-C02-O1–O2.
2. Items cost 2 and 7 dollars, a budget is 35 dollars, and at least 8 items are needed. Write all constraints and test $(7,3)$ and $(4,4)$. **Answer:** $2x+7y\le35$, $x+y\ge8$, nonnegative integers; $(7,3)$ costs 35 and is feasible, $(4,4)$ costs 36 and is infeasible. **Scoring:** 4 system, 2 each feasibility check. **Objectives:** U16-L02-C02-O1–O2.
3. Price is $p(q)=24-2q$ dollars per item and total cost is $C(q)=20+4q$. Build revenue, profit, and average cost; give the valid count domain for positive sales at nonnegative prices. **Answer:** $R=24q-2q^2$, $P=-2q^2+20q-20$, $A=20/q+4$; integers $1\le q\le12$. **Scoring:** 2 each equation, 2 domain/units. **Objectives:** U16-L04-C01-O1–O2; U16-L04-C02-O1–O2.
4. Regress the table $x=0,1,2,3$, $y=1.2,2.8,5.2,6.8$ linearly. Give coefficients, residuals, SSE, and the predicted output at 2.5. **Answer:** $1.12+1.92x$; residuals $0.08,-0.24,0.24,-0.08$; SSE $0.128$; prediction 5.92. **Scoring:** 3 documented fitting procedure, 2 residuals/SSE, 2 prediction, 1 slope interpretation with declared units. **Objectives:** U16-L05-C01-O1–O2; U16-L05-C02-O1–O2.
5. Fit three tables using the specified families: (a) quadratic, $x=0,1,2,3$, $y=2,3,6,11$; (b) exponential via log-response, same $x$, $y=4,8,16,32$; (c) square-root, $x=0,1,4,9$, $y=3,5,7,9$. **Answer:** (a) $x^2+2$; (b) $4(2)^x$; (c) $3+2\sqrt{x}$. **Scoring:** 2 each correct reproducible fit, 1 log-method statement, 1 root-domain statement. **Objectives:** U16-L06-C01-O1; U16-L06-C02-O1; U16-L07-C01-O1–O2.
6. A linear fit on $[0,5]$ has U-shaped residuals. A quadratic fit reduces that pattern, but both are proposed for an input of 100. Explain a reasoned selection and a validation plan. **Answer:** inspect/verify the quadratic locally, compare new observations with its predictions, acknowledge input 100 is extrapolation and mechanism/domain may invalidate it, document equation and uncertainty rather than promise accuracy. **Scoring:** 2 residual diagnosis, 2 local model comparison, 2 extrapolation reasoning, 2 concrete validation/report plan. **Objectives:** U16-L07-C02-O1–O2; U16-L08-C01-O2; U16-L08-C02-O1–O2.
