---
layout: post
title:  "file formats for the knitting machine"
date:   2020-06-02 9:31 +0200
categories: knitting
excerpt_separator: <!--more-->
---

The knitting machine I have access to (SK840) uses DesignaKnit (DAK) for creating patterns and controlling the machine’s needle placement automatically. DAK supports a few file formats for stitching patterns: **.stp**, **.pat** and **.dat**. I’ve taken a closer look at each of these types, with the hopes of reverse-engineering them, or at least understanding them well enough to create my own files.

<!--more-->

## .stp files
This is DAK’s **[proprietary](https://en.wikipedia.org/wiki/Proprietary_format) file system**, which means it’s designed to be secret, and it’s not meant to be decoded or encoded by another other than the company’s software. Basically, the opposite to open source. This also means there are legal aspects associated with trying to decode or encode this file format (maybe not so much in Europe as there would be in the USA), which perhaps turns this endeavour in to a more activist hack, since my intention is to publicly share this process.

However, my computer science skills aren’t enough to understand how to reverse-engineer these formats, although I have found other attempts. 

Most recently, [this thread](https://github.com/AllYarnsAreBeautiful/ayab-desktop/issues/298) in the [AllYarnsAreBeautiful](https://ayab-knitting.com/) repo, which is open source software and hardware for hacking knitting machines (yay!) but that hasn’t been developed for my machine yet (arggg). Their work is extensive, with custom Arduino boards to connect to the machine, and thoroughly documented software that allows you to import your own patterns, or easily connect it to your own software.

In that thread, AYAB contributors discuss how to open and use DAK files with their software, which means that the’ve figured out how to read or decode **.stp** and **.pat** files: [GitHub - t0mpr1c3/DAKimport](https://github.com/t0mpr1c3/DAKimport). This is useful to me because they point to an initial repo which attempted to decode these formats via a simple java program: [GitHub - gbl/D7CReader](https://github.com/gbl/D7CReader).  I tried it out, and it is able to output a text-based pattern, using symbols to represent each color, and an image of what the pattern looks like.

![](/softwear/assets/images/Screenshot%202020-06-01%20at%2009.53.52.png)
![](/softwear/assets/images/Screenshot%202020-06-01%20at%2009.56.27.png)
Opening an .stp file in a text editor or in a HEX editor doesn’t reveal much.

![](/softwear/assets/images/Screenshot%202020-05-12%20at%2015.42.08.png)
The D7CReader program reveals the actual pattern

This is amazing to me, **decoding** is possible. So I asked my colleagues from the software research department how hard it would be to now **encode** an stp file, that is, create a file which could be readable by DAK. My colleague Thomas asked on the original repo:

![](/softwear/assets/images/Screenshot%202020-06-01%20at%2009.57.52.png)

Following this github user’s advice, we parked the idea of generating a file, and I took a look at the other formats DAK can use.

*If you’re reading this and have any ideas about stp files or on how to do this, [don’t hesitate to email me](mailto:nadiacw@kth.se).*

## .pat files
This file type is readable by DAK and also seems to be more common; it’s relatively easier to find free .pat files previous machine knitters have shared online. Some .pat files even display some sort of pattern with !s and 0s when opened with text editors.

![](/softwear/assets/images/Screenshot%202020-05-12%20at%2015.31.01.png)

## .dat files
This file type is used for the punchcard addition which works with our machine (which we haven’t purchased). It usually removes color information when saving a pattern, and opens it up again with a default palette. When opening it up with a text editor, the results are pretty much the same. However, I tried replacing some HEX code in the middle of the file with some random HEX code, and the file didn’t corrupt, in fact, the pattern just glitched a bit.

(image coming soon)

## end notes
Parting from an existing file supported by DAK and changing a certain number of bytes would be a feasible way to edit/glitch the pattern it contains. Creating a file from scratch won’t be possible at the moment, since these files are proprietary. For now, the best way for me to use the machine is to generate images of my own and then manually import them into DAK, knowing the grid size of the image corresponds to the stitches and rows in the knitted piece, like I did with the QR code in [this earlier post](https://nadiacw.com/softwear/knitting/2020/05/18/knitting-data.html).