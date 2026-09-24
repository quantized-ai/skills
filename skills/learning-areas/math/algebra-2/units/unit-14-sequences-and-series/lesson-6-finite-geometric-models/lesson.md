# Lesson 14.6: Finite geometric models

[Unit 14: Sequences and series](../unit.md) · [Algebra 2](../../../curriculum.md)

Finite geometric sums model repeated proportional contributions and deposit accumulation. Timelines determine which amounts are included and how many growth periods each receives.

## Learning objectives

- Translate finite proportional-change situations into geometric sums.
- Evaluate accumulated totals with appropriate units and endpoints.
- Compare deposit timing at a common valuation time.

## Learning outcome

The student can construct and verify a finite accumulation model from the contributions and their timing.

## Proficiency criteria

To demonstrate proficiency, the student must independently satisfy all of the following criteria.

- Identify each included contribution, its multiplier, and the total number of terms.
- Distinguish the size of one contribution from the combined quantity being measured.
- Assign growth periods consistently with the stated payment and valuation times.
- Compare accumulation conventions and report a total whose units, precision, and zero-growth behavior fit the model.

## Concepts

### Concept U14-L06-C01: Totals from repeated proportional change

**Content**

Defining the first included term; finite horizon; units; physical interpretation.

**Learning objectives**

- **U14-L06-C01-O1:** Translate a finite accumulation with constant proportional change into a geometric sum.
  - Standards: CCSS HSA-SSE.B.4 (direct); CCSS HSF-BF.A.2 (direct).
- **U14-L06-C01-O2:** Evaluate and interpret the total with the correct endpoints and units.
  - Standards: CCSS HSA-SSE.B.4 (direct).

**Proficiency criteria**

- Translate a finite proportional-change situation into a sum with explicit first contribution and endpoints.
- Distinguish one contribution’s size from the accumulated total and account for any repeated physical contribution.
- Evaluate the sum with sufficient internal precision and interpret its final value in the stated units.

**Explanation**

Draw a timeline before summing: identify whether the original amount is included and count the actual contributions. A term formula describes one contribution; the sum describes the accumulated amount. Rounding intermediate terms can distort a long total, so retain precision until the final answer.

**Worked examples**

1. Four successive distances are 20 m, then 80% of the previous distance. The total is $20\sum_{k=0}^{3}0.8^k=20(1-0.8^4)/0.2=59.04$ m.
2. Starting with a 10 m drop, three rebounds reach $6,3.6,2.16$ m. Counting up-and-down travel for all three rebounds gives $10+2(6+3.6+2.16)=33.52$ m; the drop itself is not another rebound term.

**Exercises**

1. Sum five daily quantities starting at 100 and halving daily. **Answer:** $100(1-0.5^5)/0.5=193.75$ units.
2. A series begins at $k=2$ and ends at $k=5$ in $3(2)^k$. Give its first term and term count. **Answer:** 12 and 4; total $12(2^4-1)=180$.

**Assessment**

Six contributions start at 40 kg and each is 90% of the previous. Write the sum and find the total. **Expected:** $\sum_{k=0}^{5}40(0.9)^k=40(1-0.9^6)/0.1=187.4236$ kg. **Rubric (4):** first term, ratio, and bounds (2, O1); calculation and kg interpretation (2, O2).

Objective coverage: **U14-L06-C01-O1**, **U14-L06-C01-O2**.

### Concept U14-L06-C02: Repeated deposits and accumulation timing

**Content**

End-of-period deposits; geometric accumulation; separating principal and interest.

**Learning objectives**

- **U14-L06-C02-O1:** Build a finite geometric accumulation model from a precisely stated payment timeline.
  - Standards: CCSS HSA-SSE.B.4 (direct); TEKS 2A.5(B) (supporting knowledge).
- **U14-L06-C02-O2:** Compare beginning- and end-of-period accumulation by counting growth periods.
  - Standards: CCSS HSA-SSE.B.4 (direct).

**Proficiency criteria**

- Draw or describe a timeline that assigns the correct number of growth periods to each deposit.
- Build the accumulation sum from that timeline and separate deposited principal from modeled growth.
- Compare beginning- and end-of-period deposits at the same valuation time, including a zero-growth case without invalid division.

**Explanation**

If an amount $D$ is deposited at each period end and the balance is valued just after deposit $n$, the oldest deposit has $n-1$ growth periods and the newest has none. Thus $V=D\sum_{k=0}^{n-1}(1+i)^k$. Deposits at the beginning of each period, valued at the end of period $n$, each receive one extra growth period. These are simplified mathematical models with a fixed period rate and no fees.

**Worked examples**

1. Three end-of-period deposits of 100 at a 10% period rate give $100(1.1)^2+100(1.1)+100=331$. Deposits total 300, so modeled growth contributes 31.
2. Three beginning-of-period deposits under the same assumptions give $331(1.1)=364.10$, because every deposit earns for one additional period.

**Exercises**

1. Four end-of-period deposits of 50 with zero growth accumulate to what? **Answer:** $4(50)=200$; use the $r=1$ case.
2. Two end-of-period deposits of 200 with 5% growth give what final balance? **Answer:** $200(1.05)+200=410$.

**Assessment**

Three deposits of 80 occur at period ends with 25% growth each period. Find the value just after deposit 3 and compare with deposits at period beginnings valued at period 3 end. **Expected:** $80(1+1.25+1.25^2)=305$; beginning deposits yield $305(1.25)=381.25$. **Rubric (4):** correct timeline/sum and 305 (2, O1); additional factor and 381.25 (2, O2).

Objective coverage: **U14-L06-C02-O1**, **U14-L06-C02-O2**.
