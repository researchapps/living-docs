$(document).ready(function() {

    var divs = $("#h1,h2,h3,h4"); 
    $.each(divs, function(i,e){

        // Edit
        var did = $(e).attr('id');
        var start = "<div class='dropdown more'><span><i class='fa fa-ellipsis-h more' title='Edit'></i></span><div class='dropdown-content'>";

        // Permalink
        var link = "{{ site.url }}/{{ page.url }}#" + did;
        var button = "<p><a href='" + link + "' target='_blank'>Permalink</a></p>";
        start += button;

        // Edit
        var link = "{{ site.repo }}/edit/master/{{ page.path }}#" + did;
        var button = "<p><a href='" + link + "' target='_blank'>Edit this page</a></p>";
        start += button;

        // Issues;
        var link = "{{ site.repo }}/issues/new?labels={% if page.editable %}{{ page.editable }}{% else %}question{% endif %}&title=Question:&body=Question on: {{ site.repo }}/tree/master/{{ page.path }}%23" + did;

        var button = "<p><a href='" + link + "' target='_blank'>Ask a Question</a></p>";
        start += button;
        start += "</div></div>";
        $(e).append(start)

    })
});
