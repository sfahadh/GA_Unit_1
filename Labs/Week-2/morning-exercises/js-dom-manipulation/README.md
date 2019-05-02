
## DOM Manipulation

Go to [generalassemb.ly](https://generalassemb.ly) and try the following exercises.

1.  Grab the `body` from the page using `document.querySelector`. and change the `opacity` to `.5`.

1.  Grab all the `img` tags from the page. Iterate through each image and change the source to: 
`http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg`.

1. Create a `kittenPaint` function for your code above. Save it as a snippet in your developer console. Go to Google and run it there.

1. Using `document.querySelectorAll('*')`, grab **all elements** on the page, iterate through each `element` in the list using a `for` loop. Use `element.style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)";` to change every element to have a kitten background image.

1. Turn the above exercise into a `kittenBomb` function and save it in `sources` under your snippets. Then run it on your favorite site.

1. Create a `click` event on the `body`.  When the body is `clicked` grab all the images on the page and use the `style.transform` above to rotate each image. In other words, when the page is clicked rotate all images on the pages using: `body.style.transform = "rotateZ(60deg)";`
