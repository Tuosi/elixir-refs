# Flexbox

## Features

1. No 'float'
2. Responsive and mobile friendly
3. Position child elements is much easier
4. Container margin do not collapse with its content
5. Change order without change html

## Concepts

A new value add to 'display' property

    `display: flex | inline-flex;`

1. Container
- main axis
    - main start
    - main end
- cross axis
    - cross start
    - cross end

2. Item
- main size
- cross size

## Container

1. Flex Direction

    `flex-direction: row | row-reverse | column | column-reverse`

2. Flex Wrap

    `flex-wrap: nowrap | wrap | wrap-reverse`

3. Justify Content

    `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

4. Align Items

    `align-items: flex-start | flex-end | center | baseline | stretch`

5. Align Content

    `align-content: flex-start | flex-end | center | space-between | space-around | stretch`


## Item

1. Order

    `order: 0`

2. Flex

    `flex: 1`

3. Flex Grow

    `flex-grow: 0`

4. Flex Shrink

    `flex-shrink: 1`

5. Flex Basis

    `flex-basis: 3px | auto`

6. Align Self

    `align-self: auto | flex-start | flex-end | center | baseline | stretch`

## References

[mdn:css:flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
