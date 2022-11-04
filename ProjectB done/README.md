# PROJECT B --- [PL\<A\>Y](https://github.com/lindashao1220/abc2022/raw/master/ProjectB%20done/projectB%20done.zip)


![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)


## Description🎆 
![alt text](https://github.com/lindashao1220/abc2022/blob/master/ProjectB%20done/froggy.gif)

Inspired by the game Frogger, Jean and I made [pl\<a\>y](https://github.com/lindashao1220/abc2022/raw/master/ProjectB%20done/projectB%20done.zip), a chrome extension-style game. Users play as a frog and try to avoid all the hyperlinks text on the web page to survive. The scrolling will get faster as time goes on, so BE CAREFUL and HAVE FUN.

 
## technical explanation🔥
1. The continuous scroll.
First, we connected the game's timer and the page's scrolling speed together. We combine multiple functions together to make it happen. Second, we created two divs and appended the web page's content into them. Then, we make the divs alternate with each other to make the scroll infinite.

2. Get and apply the bounding client.
We get all the \<a\> tags on the web pages and each of their bounding information. Then, we apply the numbers and data we collected into formulas to calculate whether the frog collided with the tags.


Thanks to my partner JEAN and shout-out to LEON, who helped me a loooooot

## Shortcomings and Compromises🎇
Indicators. Because of the limited time, we haven’t finished the indicators that may give instructions to the readers in the god mode of the game. To be more specific, the function may be like this, there are three blood signs, but whenever it collides, you will lose one blood.  

