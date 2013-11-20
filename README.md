Tabby.js
========

Never neglect your tabs when it comes to usability again! Making `tabindex` easy for custom elements to improve your UX.

<img src="http://us.cdn3.123rf.com/168nwm/fotovampir/fotovampir1103/fotovampir110300026/9008681-tabby-cat-lying-on-white-background.jpg" />

Purpose
--------

In today's JavaScript environment with all the custom elements, it's easy to forget that tabbing is an integral part of the UX. With HTML5 you can define `tabindex` on **any** property, but you need additional functionality for it to do anything useful. That's where Tabby becomes useful! By emitting two custom events when tabbing occurs, *you* can define the behaviour with ease.

<img src="https://travis-ci.org/Wildhoney/Tabby.js.png?branch=master" />
&nbsp;
<img src="https://badge.fury.io/js/tabby-js.png" />

Install with npm: `npm install tabby-js`

Getting Started
--------

Tabby emits two custom events for you to listen for. These can be listened to the vanilla JavaScript way (`.addEventListener('tabEnter')`) or the jQuery way (`.on('tabEnter')`) &ndash; other libraries are supported as long as they tap into the vanilla JavaScript events.

<h4>tabEnter</h4>
Emitted when an element with a `tabindex` attribute has focus with the tab key &ndash; allowing you to highlight the element, or to open your faux-select.

<h4>tabLeave</h4>
Emitted irrespective of whether the tab key was involved (an alias of `onblur`) &ndash; allowing you to reset the element's state.

```javascript
// Emitted when a user tabs into the box.
elements.on('tabEnter', function() {
    $(this).addClass('focus');
});

// Emitted each and every time (same as onblur).
elements.on('tabLeave', function() {
    $(this).removeClass('focus');
});
```

Contributions
--------

I'd be over the moon for contributions for **any** of my projects &ndash; including of course Tabby! If you would like to contribute, please fork and issue a pull request and I'll happily merge it in to master.