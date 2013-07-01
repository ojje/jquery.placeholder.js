jquery.placeholder.js
=====================

Jquery placeholder plugin to make it possible to have a default text description  in a textfield and remove/add default text on focus/blur.

### Html example
```html
<input id="example-textfield" name="example-freetext" class="text placeholder" type="text" value="My defalt value here" />
```

### Javascript example 
```javascript
$.placeholder({
    selector: '.placeholder',
    focusClass: 'focus',
    blurClass: 'blur'
});
```
