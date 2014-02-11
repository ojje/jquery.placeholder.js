jquery.placeholder.js
=====================

Jquery placeholder plugin to make it possible to have a default text description in a textfield and remove/add default text on focus/blur.

### Html example
```html
<<<<<<< HEAD
	<input id="example-textfield1" name="example-freetext1" class="text placeholder not-changed" type="text" value="My default value here" /> <br />
	<input id="example-textfield2" name="example-freetext2" class="text placeholder not-changed" type="text" value="Another default value here" /> <br />
	<input id="example-textfield3" name="example-freetext3" class="text placeholder not-changed" type="text" value="Here too..." /> <br />
	<input id="example-textfield4" name="example-freetext4" class="text placeholder not-changed" type="text" value="And here..." /> <br />
	<input id="example-textfield5" name="example-freetext5" class="text placeholder not-changed" type="text" value="Well, you get it..." />
=======
<input id="example-textfield1" name="example-freetext1" class="text placeholder" type="text" value="My default value here" /> <br />
<input id="example-textfield2" name="example-freetext2" class="text placeholder" type="text" value="Another default value here" /> <br />
<input id="example-textfield3" name="example-freetext3" class="text placeholder" type="text" value="Here too..." /> <br />
<input id="example-textfield4" name="example-freetext4" class="text placeholder" type="text" value="And here..." /> <br />
<input id="example-textfield5" name="example-freetext5" class="text placeholder" type="text" value="Well, you get it..." />
>>>>>>> 9e154ad00874e285cbb407c6b521ec6bc3c9b757
```

### Javascript example 
```javascript
<<<<<<< HEAD
	$.placeholder({
		selector: '.placeholder',
		focusClass: 'focus',
		blurClass: 'blur',
		errorClass: 'error',
		defaultClass: 'not-changed'
	});
=======
$.placeholder({
	selector: '.placeholder',
	focusClass: 'focus',
	blurClass: 'blur'
});
>>>>>>> 9e154ad00874e285cbb407c6b521ec6bc3c9b757
```
