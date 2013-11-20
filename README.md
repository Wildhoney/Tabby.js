Tabby.js
========

Never neglect your tabs when it comes to usability again! Making `tabindex` easy for custom elements to improve your UX.

<img src="http://us.cdn3.123rf.com/168nwm/fotovampir/fotovampir1103/fotovampir110300026/9008681-tabby-cat-lying-on-white-background.jpg" />

Getting Started
--------

Tabby emits two custom events for you to listen for. These can be listened to the vanilla JavaScript way (`.addEventListener('tabEnter')`) or the jQuery way (`.on('tabEnter')`) &ndash; other libraries are supported as long as they tap into the vanilla JavaScript events.

**<code>tabEnter</code>**<br />
Emitted when an element with a `tabindex` attribute has focus with the tab key.

**<code>tabLeave</code>**<br />
Emitted irrespective of whether the tab key was involved &ndash; allowing you to reset the element's state.

```javascript
elements.on('tabEnter', function() {
    $(this).addClass('focus');
});

elements.on('tabLeave', function() {
    $(this).removeClass('focus');
});
```

Purpose
--------

In today's JavaScript environment with all the custom elements, it's easy to forget that tabbing is an integral part of some people's UX. With HTML5 you can define `tabindex` on **any** property, but you need additional functionality for it to do anything useful. That's where Tabby becomes useful! By emitting two custom events when tabbing occurs, *you* can define the behaviour with ease.