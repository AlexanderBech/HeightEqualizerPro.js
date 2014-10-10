HeightEqualizerPro.js
==================

jQuery plugin for equalizing height on a set of elements

Example: http://alexanderbech.com/work/jquery-heightequalizerpro/

Usage
==================
Include jQuery 1.7+ and jquery.heightequalizerpro.js in your layout and target your items with heightEqualizerPro().
```javascript
$('.equalize').heightEqualizerPro();
```

or equalize by height on children

```javascript
$('.equalize ul li').heightEqualizerPro('a');
```

```html
<article>
  <section class="equalize">
		Lorem
	</section>
	<section class="equalize">
		Lorem
	</section>
	<section class="equalize">
		Lorem
	</section>
</article>
```

