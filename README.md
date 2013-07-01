jquery.placeholder.js
=====================

Jquery placeholder plugin to make it possible to have a default text description  in a textfield and remove/add default text on focus/blur.

// Markup Example
<input id="example-textfield" name="example-freetext" class="text placeholder" type="text" value="My defalt value here" />

// JS Example

$.placeholder({
    selector: '.placeholder',
    focusClass: 'focus',
    blurClass: 'blur'
});
