# Living Documentation

This is an example of living documentation, shown as static html and a jekyll site in the [docs](docs)
folder.

## Static Files Solution
To see the example live, go to [https://researchapps.github.io/living-docs/no-jekyll](https://researchapps.github.io/living-docs/no-jekyll). This solution will add a dropdown with links to one or more static pages (not using Jekyll, and anywhere like Github pages that has a web server). To deploy these docs for your own site, do the following:

 1. Clone the repository `git clone https://www.github.com/researchapps/living-docs`
 2. Copy the content of docs/no-jekyll and place in your own docs folder
 3. Add the style and css files to each page you want rendered
 4. Push to Github to add the content, and of course write some docs!
 5. Make sure to enable Github Pages for the docs folder.

The static content that you include will have a snippet that looks like this:

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="living-doc.js"></script>
<link rel="stylesheet" href="living-doc.css">
```

And at the top of the file `living-doc.js` make sure to edit the variable with your Github url:

```
var github = "https://www.github.com/researchapps/living-docs"
```

## Jekyll Solution
Do the same as above, except start with the content of docs-jekyll. The files mentioned
previously are included in the `_includes` folder and the main site template under `_layouts/post.html`.
