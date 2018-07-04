- [英文文档](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [中文文档](https://www.sass.hk/docs/)

# Sass

```
sass input.sass output.css
```

```
sass --watch input.scss output.css
```

```
sass --watch app/sass:public/stylesheets
```

## Nesting

## Partials

-  A partial is simply a Sass file named with a leading underscore. You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that `it should not be generated into a CSS file`. Sass partials are used with the `@import` directive.

## Import

- CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that `each time you use @import in CSS it creates another HTTP request`.
- Sass builds on top of the current CSS @import `but instead of requiring an HTTP request`, Sass will take the file that you want to import and combine it with the file you're importing into so `you can serve a single CSS file` to the web browser.

## Mixins

- @mixin	@include

```
@mixin transform($property) {
  -webkit-transform: $property;
      -ms-transform: $property;
          transform: $property;
}

.box { @include transform(rotate(30deg)); }
```

## Extend/Inheritance

- @extend

## Operators

```
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

---

## sass & scss

```
# Convert Sass to Scss
sass-convert style.sass style.scss

# Convert Scss to Sass
sass-convert style.scss style.sass
```

