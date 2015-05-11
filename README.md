# rewind.js
[Rewind.js](http://threesquared.github.io/rewind.js/) is a completely practical jQuery plugin that brings the controversial yet widely celebrated practise of the rewind into the web.

### Usage

The animation will last as long as the audio file so bear that in mind when choosing a sample. Use the pullUp method to bind the action to the click event of an element like so:

```javascript
$("#selector").pullUp({
    audio: "src/rewind.mp3"
});
```