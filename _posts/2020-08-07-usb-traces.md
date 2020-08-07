---
  layout: post
  title: peering into 'the black box'
  date:   2020-08-07 15:50 +0200
  categories: knitting
  excerpt_separator: <!--more-->
---

I know that the literal ‘black box’ that sits on the desk next to the knitting machine is in charge of transferring the data of knitting patterns from the computer to the knitting machine, which then moves its needles accordingly to create a two color pattern. But I had no understanding of how it actually does this. Does it send a message for each row with 0s and 1s depending on which position the needle should be in? Is it encrypted? Could I make my own program to control this box?

![](/softwear/assets/images/box.jpg)

<!--more-->

![](/softwear/assets/images/inside-box.jpg)
(I haven't taken a closer look at the hardware in the box yet - but it could possibly be replaced with an open source controller such as Arduino)

In order to ‘tap into’ the data stream sent through the USB I used [an open source USB packet capture tool](https://desowin.org/usbpcap/) and opened this capture in Wireshark (a software for viewing network traffic - all the data sent via a channel such as bluetooth, wifi, usb…). The result was a complex stream of packets (chunks of data) which included all sorts of connection protocols and things that might not be relevant to the knitting machine. My software engineering colleagues helped me filter and make sense of the packets.

![](/softwear/assets/images/wireshark.png)

The DesignAKnit software sends the whole pattern to the box as soon as you start ‘interactive knitting’ which is a mode where the pattern on the computer is synched to the machine. Then it proceeds to send messages back and forth to the computer whenever the knitter moves the carriage across the machine, which knits a row, effectively advancing in the pattern on the screen.

I filtered out the packets that carry data (payload) and visualized them via a simple p5.js visualization. In this case, the original pattern was a moon (including a couple of bugs which were manual mistakes in knitting). *Each row of pixels represents one packet.*

![](/softwear/assets/images/mooncap.png)

I then knit this representation and contrasted it with the original pattern.

![](/softwear/assets/images/moon-compare.jpg)

Here the original (simple) pattern is contrasted with the result of the pattern *once it’s been entangled with the software that enabled its own creation*, the machine, and the human (knitter) - visible through the pauses and different temporalities of each row / packet or the small imperfections in the fabric.

What does it mean to reveal the software of ‘the black box’? It might be revealed but hardly understood. However, out to this seemingly obscure box, I am able to make out certain the pattern, the direction of the carriage when knitting a row, and the number of row I am on. What does this bring to the relationship between software and knitting? How might we imagine a tighter relationship? Or an open-source software such as [AYAB](https://ayab-knitting.com/). Who would benefit, and who would not, from an open source initiative across all knitting machines?


