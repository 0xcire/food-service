# Figma to Website

View [here](https://0xcire.github.io/food_service)

Built using SCSS, Astro

Wanted to use React or Solid but focused on limiting bundle size and etc.

Overall, shows my ability to take a design, apply slight modifications as need be and create a near 1:1, or 1:1 implementation.

Not very confident in my own from-scratch design ability so this is proof I can use CSS to make designs come to life!

Original design file can be found [here](https://www.figma.com/community/file/969885642120779183/Fruit-Salad-Health-Food)

### issues

figma has a 'layer blur' feature that isn't 100% replecable with css?
all blur method radius' max was 100px with no change afterwards
example design uses layerblur, 800px so just tried to replecate with a linear gradient

#### todo

lots of common styles that can be pulled out to a mixin,
padding-x
font sizes, etc
not taking adv of scss for that rn...
even using variables in global scss and passing to layout?
