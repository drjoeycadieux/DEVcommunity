var cssRule =
  "color: red;" +
  "-webkit-text-stroke: 4px black;" +
  "font-size: 60px;" +
  "font-weight: bold;" +
  "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
  "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cStop", cssRule);

var cssRule =
  "color: rgb(249, 162, 34);" +
  "font-size: 40px;" +
  "font-weight: bold;" +
  "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
  "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cThis is a browser feature intended for developers.", cssRule);
