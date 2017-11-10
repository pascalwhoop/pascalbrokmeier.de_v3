---
title: 'Summary: Artificial Intelligence, A Modern Approach'
author: Pascal Brokmeier
layout: post
thumb: true
banner: false
mathjax: false
tags: academic
excerpt: null
---

# Introduction

AI can be summarized as agents that behavre rationally in an environment based on a certain evaluation criteria or _performance measure_. The field of AI on the other hand doesn't just try to understand when intelligent agents behave in a certain way but they try to develop ways of building intelligent agents of their own.

Perceptrons are a type of linear classifier, i.e. a classification algorithm that makes its predictions based on a linear predictor function combining a set of weights with the feature vector.

> The perceptron convergence theorem (Block et al., 1962) says that the learning algorithm can adjust the connection strengths of a perceptron to match any input data, provided such a match exists. These topics are covered in Chapter 20.

The history of AI includes many different fields, including bidirectional influences of Philisophy, Psychology, Mathematics, Computer Science and Robotics.

Different people approach AI with different goals in mind. Two important questions to ask are: Are you concerned with thinking or behavior? Do you want to model humans or work from an ideal standard?

## Summary by author

> - In this book, we adopt the view that intelligence is concerned mainly with rational action. Ideally, an intelligent agent takes the best possible action in a situation. We study the problem of building agents that are intelligent in this sense.
> - Philosophers (going back to 400 B . C .) made AI conceivable by considering the ideas that the mind is in some ways like a machine, that it operates on knowledge encoded insome internal language, and that thought can be used to choose what actions to take.
> - Mathematicians provided the tools to manipulate statements of logical certainty as wellas uncertain, probabilistic statements. They also set the groundwork for understandingcomputation and reasoning about algorithms.
> - Economists formalized the problem of making decisions that maximize the expectedoutcome to the decision maker.
> - Neuroscientists discovered some facts about how the brain works and the ways in whichit is similar to and different from computers.
> - Psychologists adopted the idea that humans and animals can be considered information-processing machines. Linguists showed that language use fits into this model.
> - Computer engineers provided the ever-more-powerful machines that make AI applica-tions possible.
> - Control theory deals with designing devices that act optimally on the basis of feedbackfrom the environment. Initially, the mathematical tools of control theory were quitedifferent from AI, but the fields are coming closer together.
> - The history of AI has had cycles of success, misplaced optimism, and resulting cutbacksin enthusiasm and funding. There have also been cycles of introducing new creativeapproaches and systematically refining the best ones.
> - AI has advanced more rapidly in the past decade because of greater use of the scientificmethod in experimenting with and comparing approaches.
> - Recent progress in understanding the theoretical basis for intelligence has gone hand inhand with improvements in the capabilities of real systems. The subfields of AI have become more integrated, and AI has found common ground with other disciplines.

## Noteworthy quotes

Quote by researchers:

> [It is] more important to study the underlying principles of intelligence than to duplicate an exemplar. Aeronautical engineering texts do not define the goal of their field as making "machines that fly so exactly like pigeons that they can fool even other pigeons."

Hence the turing test is an absurd measurement tool for the "capabilities" of an Artificial Intelligence. Also it could be considered quiet egoistic to consider only this a benchmark for intelligence. Who says human intelligence is not just a subset of general intelligence phenomenas?

Going into some history in the first chapter, some remarkable people have given their best:

> By 1965, programs existed that could, in principle, solve any solvable problem described in logical notation

> One problem with a purely physical conception of the mind is that it seems to leave little room for free will: if the mind is governed entirely by physical laws, then it has no more free will than a rock "deciding" to fall toward the center of the earth. Descartes was a strong advocate of the power of reasoning in understanding the world, a philosophy now called rationalism,

Then some passages of the history of NP completeness and complexity theory.

> that first-order logic could not capture the principle of mathematical induction needed to characterize the natural numbers. In 1931, Gödel showed that limits on deduction do exist. His incompleteness theorem showed that in any formal theory as strong as Peano arithmetic (the elementary theory of natural numbers), there are true statements that are undecidable in the sense that they have no proof within the theory.

> This fundamental result can also be interpreted as showing that some functions on the integers cannot be represented by an algorithm--that is, they cannot be computed

> For example, no machine can tell in general whether a given program will return an answer on a given input or run forever

> Work in AI has helped explain why some instances of NP-complete problems are hard, yet others are easy (Cheeseman et al., 1991).

Moving towards economics, another strong impacting field:

> The pioneering AI researcher Herbert Simon (1916–2001) won the Nobel Prize in economics in 1978 for his early work showing that models based on satisficing--making decisions that are "good enough," rather than laboriously calculating an optimal decision--gave a better description of actual human behavior (Simon, 1947

And neuroscience

> Typically, an axon is 1 cm long (100 times the diameter of the cell body), but can reach up to 1 meter.

> A neuron makes connections with 10 to 100,000 other neurons at junctions called synapses

> There is almost no theory on how an individual memory is stored.

> Even with a computer of virtually unlimited capacity, we still would not know how to achieve the brain's level of intelligence.

> They proposed a model of artificial neurons in which each neuron is characterized as being "on" or "off," with a switch to "on" occurring in response to stimulation by a sufficient number of neighboring neurons.

> They showed, for example, that any computable function could be computed by some network of connected neurons, and that all the logical connectives (and, or, not, etc.) could be implemented by simple net structures

> Minsky was later to prove influential theorems showing the limitations of neural network research.

> He proposed the Child Programme idea, explaining "Instead of trying to produce a programme to simulate the adult mind, why not rather try to produce one which simulated the child's?"

Why genetic algorithms do not work blindly by just making random adjustments to an agents behavior until a program evolves that solves many tasks: The compute power just doesn't match Billions of years of global _evolutionary computation_.

> machine evolution (now called genetic algorithms) (Friedberg, 1958; Friedberg et al., 1959) were based on the undoubtedly correct belief that by making an appropriate series of small mutations to a machine-code program, one can generate a program with good performance for any particular task. The idea, then, was to try random mutations with a selection process to preserve mutations that seemed useful. Despite thousands of hours of CPU time, almost no progress was demonstrated. Modern genetic algorithms use better representations and have shown more success.

"The field is growing up"

> A shift toward neatness implies that the field has reached a level of stability and maturity

# Intelligent Agents

An agent can be both software and hardware. It's Intelligent if it perceives the world and acts upon certain states to improve it's state or reach a goal or satisfy a performance measure.

> As a general rule, it is better to design performance measures according to what one actually wants in the environment, rather than according to how one thinks the agent should behave.

> So, just as evolution provides animals with enough built-in reflexes to survive long enough to learn for themselves, it would be reasonable to provide an artificial intelligent agent with some initial knowledge as well as an ability to learn

the PEAS (Performance, Environment, Actuators, Sensors) description

> In fact, what matters is not the distinction between "real" and "artificial" environments, but the complexity of the relationship among the behavior of the agent, the percept sequence generated by the environment, and the performance measure

- **Observable / partially / unobservable Environment**: An agent that cannot "see" the environment it is in or only has a limited viewport, is obviously not as good at making perfectly informed choices.

- **Single agent vs. multiagent**: The agent can be alone or it needs to anticipate / include actions of other agents into its calculations. They can be cooperative or competitive.

- **Deterministic vs Stochastic**

- **Episodic vs sequential**: Episodic decision structures do not need to take the past into consideration to make a choice. A robot that selects bad fruit from a factory line does not need to think about past fruit while deciding about the one in front of it.
- **Static vs dynamic**: refers to the environment. A static environment does not change unless the agent manipulates it.
- **Known vs. unknown**: The agent knows what it's actions lead to. Unknown means the agent needs to learn it's impact on the environment through trial/error.

Ways of structuring an agent include

- Simple reflexed based agents
- model based agents which include an internal model of the world to base its actions on and to understand the outside world
- goal based agents which don't only use the performance measure
- utility based agents which are capable of weighing different goals based on their utility and make choices that optimize the utility function

## Summary by author

> - An agent is something that perceives and acts in an environment. The agent functionor an agent specifies the action taken by the agent in response to any percept sequence.
> - The performance measure evaluates the behavior of the agent in an environment. Aational agent acts so as to maximize the expected value of the performance measure,iven the percept sequence it has seen so far.
> - A task environment specification includes the performance measure, the external en-ironment, the actuators, and the sensors. In designing an agent, the first step mustlways be to specify the task environment as fully as possible.
> - Task environments vary along several significant dimensions. They can be fully orartially observable, single-agent or multiagent, deterministic or stochastic, episodic orsequential, static or dynamic, discrete or continuous, and known or unknown.
> - The agent program implements the agent function. There exists a variety of basicgent-program designs reflecting the kind of information made explicit and used in theecision process. The designs vary in efficiency, compactness, and flexibility. Theppropriate design of the agent program depends on the nature of the environment.
> - Simple reflex agents respond directly to percepts, whereas model-based reflex agentsaintain internal state to track aspects of the world that are not evident in the currentercept. Goal-based agents act to achieve their goals, and utility-based agents try toaximize their own expected "happiness."
> - All agents can improve their performance through learning.

# Solving Problems by Searching

The whole process usually is based on graph theory and finding paths in graphs. At least that is the usual example for solution searching. This includes path searching, solvers for rubix cubes and many others.

To explain, some different variants are introduced. While efficient algorithms courses at university focus on known-world problems and efficiently solvable problems, the author mentions both informed search strategies where the agent knows the whole world structure and tries to reach a goal within as well as uninformed search strategies where one does not know the whole landscape and does not posses an explanation of the structure of an environment. The uninformed is interesting as it shows different approaches towards finding a goal state without going exponential in either the memory or time dimensions. This is possible through the use of **heuristic functions** that have certain characteristics to be valid:

- admissibility: never overestimate the cost to reach a goal
- consistency: in a graph: start S, some middle point M and goal point G: `dist(S,G) <= dist(S,M) + dist (M,G)`

  - so consistency is a more strict form of admissibility

Now comes the interesting part: **Can an agent learn such heuristics and therefore learn to search in an uninformed environment**? Answer: **YES**

> The answer is yes, and the method rests on an important concept called the metalevel state space. Each state in a metalevel state space captures the internal (computational) state of a program that is searching in an object-level state space such as Romania. For example, the internal state of the A ∗ algorithm consists of the current search tree. Each action in the metalevel state space is a computation step that alters the internal state; for example, each computation step in A ∗ expands a leaf node and adds its successors to the tree.

> For harder problems, there will be many such missteps, and a metalevel learning algorithm can learn from these experiences to avoid exploring unpromising subtrees. The techniques used for this kind of learning are described in Chapter 21\. The goal of learning is to minimize the total cost of problem solving, trading off computational expense and path cost.

Approaches for heuristics are:

- Relaxed problems
- Pattern databases
- experience using features and recognition of petterns (automated classifying of correlations)

## Notes by author

- Before an agent can start searching for solutions, a goal must be identified and a well-efined problem must be formulated.
- A problem consists of five parts: the initial state, a set of actions, a transition modelescribing the results of those actions, a goal test function, and a path cost function.he environment of the problem is represented by a state space. A path through thetate space from the initial state to a goal state is a solution.
- Search algorithms treat states and actions as atomic: they do not consider any internaltructure they might possess.
- A general TREE SEARCH algorithm considers all possible paths to find a solution,hereas a GRAPH SEARCH algorithm avoids consideration of redundant paths.
- Search algorithms are judged on the basis of completeness, optimality, time complex-ty, and space complexity. Complexity depends on b, the branching factor in the statepace, and d, the depth of the shallowest solution.
- Uninformed search methods have access only to the problem definition. The basiclgorithms are as follows:
    - Breadth-first search expands the shallowest nodes first; it is complete, optimalor unit step costs, but has exponential space complexity.
    -   Uniform-cost search expands the node with lowest path cost, g(n), and is optimalor general step costs. Depth-first search expands the deepest unexpanded node first. It is neither com-lete nor optimal, but has linear space complexity.
    - Depth-limited search adds aepth bound. Iterative deepening search calls depth-first search with increasing depth limitsntil a goal is found. It is complete, optimal for unit step costs, has time complexityomparable to breadth-first search, and has linear space complexity.
    -   Bidirectional search can enormously reduce time complexity, but it is not alwayspplicable and may require too much space.
- Informed search methods may have access to a heuristic function h(n) that estimateshe cost of a solution from n.
    -   The generic best-first search algorithm selects a node for expansion according ton evaluation function.
    -   Greedy best-first search expands nodes with minimal h(n). It is not optimal buts often efficient.
    -   A ∗ search expands nodes with minimal $f(n) = g(n) + h(n)$. A ∗ is complete andptimal, provided that h(n) is admissible (for TREE-SEARCH ) or consistent (for GRAPH-SEARCH ). The space complexity of A ∗ is still prohibitive.
    -   RBFS (recursive best-first search) and SMA ∗ (simplified memory-bounded A ∗ )re robust, optimal search algorithms that use limited amounts of memory; givennough time, they can solve problems that A ∗ cannot solve because it runs out ofemory.
- The performance of heuristic search algorithms depends on the quality of the heuristicunction. One can sometimes construct good heuristics by relaxing the problem defi-ition, by storing precomputed solution costs for subproblems in a pattern database, ory learning from experience with the problem class.
