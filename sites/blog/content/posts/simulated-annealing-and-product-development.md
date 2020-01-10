---
title: "Simulated Annealing and Product Development"
date: 2020-01-07T20:44:17-06:00
draft: true
---

## Anealing

One method of controlling the ductility of metals is anealing. This
involves heating it past some threshold (it's crystalization
tempreture) then cooling it slowly enough for the crystals to align as
they form. Mathametitions have used this idea to get very good solutions to hard
optimization problems and product teams can use it too. Product
development is a hard optimization problem.

<!--more-->

A simplification of the strategy is a cycle of incremental improvement
and stochastically switching to another solution that starts hot and
cools on a schedule until you've found something good enough, or you
are out of time.

- Chose any solution from the search space
  - stochastically consider switching to it by comparing it to your
    current solution
  - If it's early and it's still hot, go wild, willing to yolo and try
    something else even if it's not as good as what you've got
  - If it's late and cold, be conservative, vulkan, calculating, less
    likely switch to worse solutions, and more likely to switch to
    better ones
- Iteratively improve the current solution for a little bit
- Repeat

## What does this have to do with product development?

Finding product market fit, finding good solutions to users tricky
problems is a hard optimization problem. It's got a large but finite
search space. Simulated anealing is a very good strategy for these
kinds of problems. We've just got to translate the steps into product
development work and learn to let go of our darling ideas that the
protocol says we should abandon.

## The cooling schedule

This is arbitrary. The slower it is the more optimal a solution you
are likely to find but the longer it'll take to find it but it depends
on the nature of the problem you are solving and the people solving
it. For general product development work I'd start with a schedule
that cools from start to finish over a three month period.

## Chosing a solution from the search space

This depends on the situation too but it could be anything from
brainstormed new ideas to repurposing work from past projects or using
open source tools as a starting point.

This doesn't need to be random but it should aim to explore a broad
range of possibilities.

## Iteratvly improve the current solution

This is what we are used to doing. It's important however to be lean,
to get to something minimally viable early and improve from
there. This is important because we need to evaluate how well the
problem is solved by our current solution in order to know how likely
we should be to switch to another option.

## Deciding whether to switch or stay

Roll dice. flip coins. `echo $RANDOM`. Use real randomness to chose
from among some reasonable alternatives, and use real randomness when
deciding whether to switch or not. Just weight the randomness more
when it's hot and less when it's cold.
