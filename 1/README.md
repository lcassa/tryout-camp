# tryout-camp
# H1 1 - CSS Grid and Variable Fonts.

Here are the CSS methods used:

* CSS Grid
* CSS variables
* Modern CSS units: rem, fr, vw, vh, ex
* Flexbox
* Media Queries

Here are my learnings from this experiment/exercise:

* Draw what you want to do first!
* Media queries on CSS don't affect the tag style property, therefore using Javascript to manipulate a style that has been modified by a Media query is going to override any Media query future actions
* Javascript window.getComputedStyle(<target>).getPropertyValue(<style name as in css>) can be very useful to retrieve the real value of the CSS because if it is modified by the media query it won't change on the the inline style
* <input type="range" onChange="<yourFunction>"> onChange don't really work on this input type, must use onInput
* To find the right sizes for the screen and proportions can be laborious

Useful links:

* https://desenvolvimentoparaweb.com/css/unidades-css-rem-vh-vw-vmin-vmax-ex-ch/
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
* https://css-tricks.com/one-file-many-options-using-variable-fonts-web/
* https://css-tricks.com/snippets/css/complete-guide-grid/
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries
* https://labs.jensimmons.com/