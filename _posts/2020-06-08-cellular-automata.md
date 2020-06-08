---
  layout: post
  title: cellular automata
  date: 2020-06-08 10:20 +0200
  excerpt_separator: <!--more-->
---

[Cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton) usually consist of a grid of cells, where the state of the next cell (the one below, if they are stacked) depends on the current state of the cell and its neighbors’ states.

![](/softwear/assets/images/rule90-01.jpg)

<!--more-->

One dimensional automata can be generated using 255 different rules.

![](/softwear/assets/images/wolfram.png)

[Elementary Cellular Automaton — from Wolfram MathWorld](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html)

Following [The Nature of Code](https://natureofcode.com/book/chapter-7-cellular-automata/)’s tutorials I made a p5.js sketch which generates images of up to a specific number of generations, for example, below, a rule 150 cellular automaton generated with random initial parameters. The image is 32 pixels by 80 pixels, which can be easily translated to stitches and rows.

Several artists have made more elaborate versions of cellular automata knits, such as [Claire Williams](http://www.xxx-clairewilliams-xxx.com/projets/data-knits/).

What might be interesting in terms of software+knitting, is that **rule 110**, one of the more famous cellular automata rules, is arguably the simplest known Turing complete system. 

![](/softwear/assets/images/Screenshot%202020-06-05%20at%2009.27.10.png)

Turing complete means that the system is able to perform **any** calculation. In other words, I could potentially knit to perform a calculation, starting with the input in the first row, manually observing the current row, setting up the needles for the next row according to the rule, and passing the carriage to knit it in place. This would result in a much larger and longer way to calculate than a computer/calculator would normally use, but I’m fascinated that **the act of knitting could potentially be a way to perform calculations.**

