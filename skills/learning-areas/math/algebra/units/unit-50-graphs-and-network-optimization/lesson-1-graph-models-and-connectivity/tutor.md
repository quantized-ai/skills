# Tutor: Lesson 50.1 — Graph models and connectivity

Read with [the curriculum](lesson.md), [shared interaction rules](../agent-guide.md), [fresh-question generation](../question-generation.md) and [private assessment calibration](../assessment.md). This file supplies delivery activities; definitions, objectives and proficiency are in the curriculum concept table. [Teaching sources](../teaching-sources.md) record provenance.

## Prerequisites and routing

Check an edge list against a drawing:AB connects A and B and a geometric crossing is not a vertex unless declared. Establish undirected versus directed meaning.

This lesson can be entered directly when its entry probe is secure; review only demonstrated gaps, not a mandatory sequence of unrelated units.

## Teaching boundaries

Use the stated finite graph conventions. Do not infer metric completeness, hidden edges, unlimited processor resources or a theorem of heuristic optimality.

## Lesson reasoning activity

**Purpose:** make the student test a consequential claim before accepting a procedure. Use after its relevant concept has been introduced; it is learning/practice evidence, not an unexposed assessment.

**Prompt:** A route A-B-A is called a circuit because it ends where it began. Use the declared terminology to repair it.

**Agent-only reasoning:** It is a closed walk but repeats edgeAB, so it is not a closed trail/circuit under this curriculum convention.

Ask for the first unjustified step, invite a corrected explanation, and retain correct components of the original response. Then use a different representation or new case for independent evidence.

## Vertices, edges, degrees, and direction

Curriculum reference: **Vertices, edges, degrees, and direction** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** An undirected vertex has one loop and one ordinary incident edge. Is its degree 2 or 3?

**Agent-only key:** Three: the loop contributes two incident ends and the ordinary edge one.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** An undirected network has vertices A,B,C, edges AB,BC and a loop at A. Find degrees; then orient AB from A to B and BC from B to C in a separate loop-free digraph.

**Agent-only worked reasoning:** Undirected degrees: A=3, B=2, C=1; sum 6=2·3 edges. In the digraph, A has in/out 0/1, B 1/1, C 1/0. A loop contributes two ends to undirected degree.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Establish what each vertex, edge, direction and weight represents before inspecting the drawing.
2. Count edge ends using a tally, then verify total undirected degree equals twice edge count.
3. Contrast this with separate incoming/outgoing tallies for directed graphs, each totaling edge count.

### Practice progression

Translate a transport or contact description into an edge list; draw the same abstract graph in two layouts and compare degrees; then include loops/parallel edges/direction and explain which modeling convention changes a count.

**Construction and verification controls:** Specify vertex/edge meanings, loops/multiple edges/direction and weights explicitly; verify handshaking identities.

### Responsive hints and misconceptions

**First conceptual cue:** Count incident edge ends, not just drawn lines.

If crossings in a drawing become vertices automatically, ask whether an actual junction is specified. If a loop is counted once, mark its two ends at the same vertex.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- Define what vertices, edges, directions, and weights mean.
- Count incidences correctly and distinguish network drawings from graphs of functions.

**Required case selection:** Construct and interpret both graph types, incidence counting and modeling conventions.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Walks, paths, circuits, and connected components

Curriculum reference: **Walks, paths, circuits, and connected components** in [lesson.md](lesson.md#concepts). The activities below implement that row; the row remains authoritative for definitions and proficiency.

### Separate diagnostic

**Prompt:** In A-B-C-B, what repeats: an edge, a vertex, or both?

**Agent-only key:** VertexB and edgeBC repeat (assuming undirected edges), so it is a walk but neither a trail nor a simple path.

Use the response to choose where to begin the teaching sequence. A correct short diagnostic does not establish the concept’s complete proficiency.

### Worked model

**Prompt:** In the undirected triangle ABC with extra edge CD, classify A-B-C-A and A-B-A, and decide whether D can reach B.

**Agent-only worked reasoning:** A-B-C-A is a circuit (closed trail) and a cycle; A-B-A is a closed walk repeating AB, not a trail. D-C-B is a simple path, so D reaches B. If edges are directed, reachability must be checked anew in their directions.

Reveal the explanation in the sequence below, asking the learner to justify a consequential step before moving to the next one.

### Teaching sequence

1. Trace a route while maintaining separate used-edge and used-vertex lists.
2. Close the route and apply the curriculum convention that a circuit is a closed trail, not every closed walk.
3. Determine components or directed reachability by exploring allowed adjacency, independent of visual closeness.

### Practice progression

Classify routes with exactly one kind of repetition; construct paths within separate components; then reverse directed edges and recompute reachability, providing a specific unreachable vertex as evidence when appropriate.

**Construction and verification controls:** Generate explicit edge lists and route sequences, including isolated vertices and disconnected components; use the curriculum's circuit convention.

### Responsive hints and misconceptions

**First conceptual cue:** Track edge repetition separately from vertex repetition.

If vertex repetition alone disqualifies every trail, return to the no-repeated-edge definition. If directed reachability is assumed symmetric, trace the reverse route edge by edge.

Give one relevant cue at a time and wait. If a cue does not help, use the indicated representation/setup before demonstrating the next worked step. Mark any mathematically supported attempt assisted; a later corrected response to the same example remains exposed.

### Assessment case checklist

Generate fresh tasks that collectively establish each of these curriculum obligations:

- State the route convention.
- Account for repeated edges or vertices.
- Identify all components or unreachable vertices relevant to the application.

**Required case selection:** Walk/trail/simple path/circuit distinctions, components and directed reachability.

At least one independent task must transfer the reasoning to a changed representation, context, exception or reversed question. Separate numerical correctness from missing proof, assumptions, construction, reporting or technology evidence. An unavailable practical component stays pending; do not replace it with an invented result.

## Lesson completion

Mark this lesson complete only when every concept and its explicit checklist are **Secure in this session** under the [shared guide](../agent-guide.md#evidence-and-completion). Summarize what the learner independently demonstrated, what required help and the next missing case. A short sample or exposed worked example cannot certify the lesson.

## Teaching-source application

The [source record](../teaching-sources.md) identifies consulted sections and their limits. The diagnostic, worked model, misconception response and reasoning activity serve different purposes: locating a gap, explaining a method, repairing that observed gap and transferring the justification. These are locally authored AI-tutoring adaptations, not claims of measured learning gains.
