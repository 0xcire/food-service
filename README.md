# [Figma to Site Demo](https://0xcire.github.io/food_service)

Showing ability to take a design file and implement as given.

Original design file can be found [here](https://www.figma.com/community/file/969885642120779183/Fruit-Salad-Health-Food)

## Built With

- Astro
- SCSS

## Learning Points

- How to translate design file to code

## Issues

- Design file was free from the internet. No complaints, but mobile and intermediary viewports files were not provided so liberties were taken as to how design would scale up. Always designing mobile first.
- Mostly 1:1 at 1440vw, though.

## Remarks

- Wanted to use React or Solid but focused on really limiting bundle size this go around.
- Some things like figmas layer blur with 800px radius was not replacable with css or svg filters so just making slight adjustments where needed.
  - At least with all solutions I tried. Seems no changes happen past blur radius or gaussianBlur of 100px.
- I believe I have an eye for design yet, the ability to realize my ideas is not there yet. So, just proving I can use CSS and recreate designs. Wether that's a landing page for a client, app component from a design team, et cetera.
