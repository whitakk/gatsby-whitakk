---
title: The hot hand fallacy fallacy fallacy
date: "2020-11-01T12:00:00"
template: "post"
draft: false
slug: "hot-hand-fallacy-fallacy-fallacy"
category: "sports"
tags:
  - "sports"
  - "baseball"
  - "analytics"
description: "You've probably heard of the hot hand fallacy. In many areas, but most famously in basketball, people have long believed in the hot hand: a player who made their last couple shots was more likely to make the next one as well. But a famous 1985 study, analyzing some in-game NBA data and some experiments with Cornell basketball players, found that there was no correlation between previous shots and the outcome of the next one -- there was no hot hand."
socialImage: "./media/hothand.jpg"

---

You've probably heard of the hot hand fallacy. In many areas, but most famously in basketball, people have long believed in the "hot hand": a player who made their last couple shots was more likely to make the next one as well. But [a famous 1985 study](https://www.cs.colorado.edu/~mozer/Teaching/syllabi/7782/readings/gilovich%2520vallone%2520tversky.pdf), analyzing some in-game NBA data and some experiments with Cornell basketball players, found that there was no correlation between previous shots and the outcome of the next one -- there was no hot hand.

One of the study's authors, Amos Tversky, became one of the pioneers of behavioral economics (along with Daniel Kahneman), and the hot hand fallacy entered the canon of ways in which we act irrationally -- we read patterns from data that is really just random noise.

**The fallacy of the fallacy**

A few years ago, Joshua Miller and Adam Sanjurjo published a remarkable paper showing that [the 1985 study calculated the hot hand effect wrong](https://osf.io/sv9x2/). Their rough analogy: the original study found that after a streak of three made shots, the next shot was no more or less likely to be made. But if you flip a random coin 100 times, then go back and look for streaks of three heads, the probability that the following flip is tails is actually significantly less than 50%.

The logic on this [is pretty mind-bending](https://jasoncollins.blog/2018/06/28/explaining-the-hot-hand-fallacy-fallacy/), and honestly I can't explain it either, but if you do a little simulation it checks out, and this fact is now pretty well agreed upon among statisticians. If you adjust for this, the 1985 study actually does show evidence of a hot hand -- the players made more shots after a streak of made shots than you would have expected from chance alone.

Not all studies are set up the same way, and some find no evidence of a hot hand with methods that don't require this same type of correction. But [on balance](https://en.wikipedia.org/wiki/Hot_hand) the studies that do the math right and have relevant controls generally point to a small hot hand, something like a 2 percentage point increase of making the next shot when you're on a streak. So, some conclude, the [the practitioners were right all along](https://www.scientificamerican.com/article/momentum-isnt-magic-vindicating-the-hot-hand-with-the-mathematics-of-streaks/) and the behavioral scientists were wrong.

**The fallacy of the fallacy of the fallacy**

In the realm of sports, there are certainly areas where the seemingly smart, non-conventional wisdom has been proven to be incorrect (such as [baseball analysts' ignorance of pitch-framing skill until recently](https://grantland.com/features/studying-art-pitch-framing-catchers-such-francisco-cervelli-chris-stewart-jose-molina-others/)). But in this case, while the strict form of the hot hand fallacy now seems to be false, the essential idea still seems to be true -- [players still greatly](http://datacolada.org/88) [overestimate](http://datacolada.org/88) the effect of hotness. In the original study, players (and fans) expected a massive correlation between prior shooting and the next shot, when only a weak one existed.

[Earlier research by Ezekowitz, Bocskocsky, and Stein](https://grantland.com/the-triangle/biting-the-hot-hand-basketballs-enduring-streakiness-debate-rages-on/) shows how this manifests. By using player-tracking data, they control for the location of where shots are taken and how close the defenders are, and indeed find evidence of a small hot hand. But they also find that players take more difficult shots when they're hot, presumably because they think they're much better at those times. This is a rational adjustment on the margin, but the magnitude is quite large -- players take such harder shots that their overall shooting percentage actually falls when they're "hot". This indicates that they are likely overestimating how much being hot helps, and in doing so probably hurting their team (given that they get more attention from defenders, so their teammates' shooting percentage would likely increase in these times).

This is consistent with other areas where people read too much into noisy signals, and in particular overrate the extent that streaks can be random. ([Try this game](https://www.expunctis.com/2019/03/07/Not-so-random.html) to see how hard it is to mimic random actions -- [most people can't](https://www.expunctis.com/2019/04/01/Not-so-random-followup.html).)

***

The hot hand is relevant this week because of what happened in the final game of the World Series (before [Covid-19 intruded as always](https://www.espn.com/mlb/story/_/id/30211683/mlb-justin-turner-disregarded-coronavirus-protocols)): the Rays took out starter Blake Snell in the sixth inning even though he had not given up a run yet, bringing in a reliever who promptly allowed what turned out to be the game-winning runs. Even before the crucial runs scored, and especially afterward, Rays management was being crucified on Twitter -- how could you take out a great pitcher for a reliever that early in the game?

The main reason was no secret -- it's well-known that [pitchers get much worse](https://www.baseballprospectus.com/news/article/22156/baseball-proguestus-everything-you-always-wanted-to-know-about-the-times-through-the-order-penalty/) when they face the same batter for a third time (the point Snell had just reached), and [Snell's past performance in such situations was worse than Rays' relievers](https://twitter.com/tangotiger/status/1321471038102867970/photo/1). The Rays managed Snell, and all their pitchers, accordingly all season and postseason (Snell never finished the sixth inning in 2020).

Sure, went the reply, but Snell was pitching so well on Tuesday (only two hits and no runs allowed to that point) -- he must have been better than usual that day. In other words, he had the hot hand.

So, is there a hot hand for baseball pitchers -- does someone pitching especially well do better late in games than someone pitching just okay? The best research here also finds [some evidence of a hot hand, but one that's very small](https://www.baseballprospectus.com/news/article/43230/baseball-therapy-what-craig-counsell-knew-about-wade-miley/) -- far less than the original gap between Snell and Rays relievers was expected to be. So even adjusting for his performance so far in that game, removing Snell still looks like the sound decision. (It's possible that some pitchers have more or less propensity for hotness, or that other signals beyond outcomes could be more predictive of hotness, but there's no evidence either applied to Snell, and in fact [more detailed indicators were worrying](https://blogs.fangraphs.com/a-defense-of-kevin-cash-pulling-blake-snell-in-the-world-series/).)

Managerial decisions are first- and second-guessed all the time, but what set this one apart was how emotional the reaction was. (If it had been, say, a controversial bunt call, few would have remembered the next day.) But this wasn't just a controversial decision, it was upsetting -- we feel like starters should get to keep pitching when they have a shutout going, and it's way more fun when they do. That's absolutely true! But pretending the evidence says something it doesn't isn't helpful to anybody.

(I'm absolutely happy to entertain a *philosophical* argument that we should expect decision-makers in sports to do the fun thing even when it doesn't maximize their chances of winning -- sports are an entertainment business, after all. But that's not the discussion that was being had on Tuesday night, and it would require a larger sea change from where we are now.) 

If we want starting pitchers to go deeper into games, when the evidence suggests that relievers generally do better, we need to instead change the rules. Maybe this is as simple as forcing teams to have fewer pitchers, thus making the good ones pitch more. Maybe it requires some more out-of-the-box changes (my zany idea is to only allow players who started the game to pitch, which might bring us back 100 years to the era of nine-inning specialists, with the added bonus of seeing more true two-way players). But it's clear at this point that what's the most fun is not what gives you the best chance of winning, and MLB should be trying to bring those back into alignment.