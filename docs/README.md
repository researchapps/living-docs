# Living Documentation

If you are a researcher with some code and you care about reproducibility, you probably use <a href="https://www.github.com" target="_blank">version control like Github</a>.  If you go out of your way to write a README file, a quick description of how
to install, use, or otherwise interact with the repository, you are already diabolical and likely doing 
better than most. And perhaps this solution is best for you. But what about if you
are providing some kind of open source software that others might contribute to, including the documentation? 
You want to make the experience of learning about your software pleasant, but still easy to ask questions and
contribute fixes. You want the time between someone's eyes going over a line and having a thought pop into their
head to ask or change something, and pushing a button to do that, to be minimized. Today this is our topic for discussion.
Let's talk about Living Documentation.


## What is documentation?
When someone references documentation, they are ususally referring to a texty thing that is intended to help
someone understand ideas or resources. In the world of academia and enterprise software, this spans out to many
things. The boundry between forums and issue boards, help desks and email support, 
and (more recently) chat support is one massive gray area. You are lost in the shades of gray, and no, I'm not 
talking about <strong>that</strong> reference, I'm talking about the doldrums where the pencil on the white page has become wet, leaving
nothing but blurry graphite nonsense. Let's zoom out a bit, and better understand the space. The core problem that these solutions
are trying to solve is to provide a source of help for a user base, and typically
that means some form of the following things:

## Documentation
A general reference to "documentation" means the white pages, or detailed instruction manual for your resource. Realistically, nobody really reads it until they hit a very specific issue and then find a page via a Google search. The pros of documentation, of course, are that it might have the most informative details about the resource. They might be certified or approved to be written by a small team of experts, and they might even be version controlled. This does not say that they are up to date, or interesting to read. Sometimes, the most effective way to communicate a protocol is in fact straight forward and professional. The cons are that this documentation is only sometimes linked to a "Who do I ask if I have a question?" Let's call this a problem of <strong>support</strong>. The other problem is that this kind of setup creates an artificial divide between the writer and reader. You, reader, are the audience, and the writer is put in the position as expert. It shouldn't be like this, because even if the writer is an expert, the reader can be an expert too. The reader also has much to contribute. If documentation has a bug, it should be straight forward how to suggest a fix without searching the doldrums for a contact page with a tiny phone number or email that you are too introverted to use. Let's call this a problem of <strong>contributing</strong>.

## Tutorials
Tutorials mean that I want step by step instructions for doing something. Many tutorials are basically just documentation that has been gussied up to be pretty to look at, and written in a more friendly, storybook way. The way that I write these posts, period, is done intentionally like this, because writing these like an academic paper would be boring for both of us. It's also easy because I talk to myself internally, anyway. But I digress! There might also be videos, asciinema, or other kind of "watch me and learn" experiences. The pros of the walkthrough or tutorial are that they are detailed and usually complete. The cons are that the state of the world changes quickly, and the next day the content is out of date. Let's call this a problem of <strong>recency</strong>.

## Email Support
Nothing is ever going to beat having interaction with another human, given that the interaction is helpful. Many automated help desks offer email support, but there are so many customers in the queue that an automated (or barely personal) message is sent back that doesn't really solve the problem. Off the top of my head, this has been my experience with most large companies that have to efficiently provide a service. This approach will work well under two conditions. First, if I appreciate the service and it's done well, the job well done may go unnoticed, but importantly, I am not bothered by template, (likely automated) emails. Secondly, it goes without saying that the size of the user base must match the size of the service provider. If not, both sides are frustrated because the quality and speed of the help will suffer. The cons to any kind of email approach is that depending on the openness of the requests for help (e.g., a public Google Group is completely open, whereas a private email list is not) the knowledge reprsented in the answers and responses may not be used to its full potential. For example, if a user asks a question to a closed system and gets an answer, 500 other users might ask the same question. If the knowledge in the answer was discoverable, perhaps 400 out of those 500 wouldn't have been asked because the answer would have been found in a quick search. Let's call this a problem of <strong>discoverability</strong>, and lack of it a problem of <strong>redundancy</strong>.

## Chat Support
Chat support is akin to email support, except it's interactive. The benefits of chat are that if it's done in a "group channel" (e.g., Slack) sort of deal, you actually grow a community around your resource. Users get to interact with the support team, and it's fun. The users also, over time, build up confidence and start to help one another. The previous small team that had to manage hundreds of users all of a sudden get a burden lifted off of them. They also get to keep a complete record of previous conversation in some cases, for future reference if a question is asked again. The con here, of course, is that we trade immediacy for organization and experience. A chat experience is a very different beastie than something organized like a tutorial or documentation.

## Forum and Issue Boards
Forum and issue boards can either refer to something like <a href="https://www.discourse.org/" target="_blank">discourse</a> or (even better) if linked to version controlled code, Github <a href="https://guides.github.com/features/issues/" target="_blank">issue boards</a>. Both of these have the commonality of user accounts - you post a question or answer as your authenticated self, and so you arguably care a lot about what you write because you aren't an anonymous internet troll. This is a good solution for <strong>accountability</strong>. The main difference between a traditional forum and an issue board is version control and topic of discussion. The Github issue board is linked to some code base that has version control, and likely the discussion is around the code. For a general forum, you might be talking about pancakes. This use case is incredibly strong, because it means that people can help one another. There isn't a small group behind closed doors that are "the experts" and get inundated with requests for help. I would argue that for any kind of topic or question that represents some knowledge about the world that can change, it's not such a crazy idea to want version control. If I believe the answer to something to be one way today, I'd want to update it tomorrow, but still remember what was said today.

# Summary of Needs
We've identified that any source of documentation and support must solve the problems of having <strong>receny</strong>, <strong>accountability</strong>, <strong>discoverability</strong>, be easy for <strong>contributing</strong>, and provide <strong>support</strong> and version control.  It's a hard bite, because sometimes it's
better to focus on doing a subset of these things very well. I spent some time brooding
about this, and struggled between wanting to implement some central, master solution where I'd slowly build my army of contribute friendly documentation, and thankfully one of my colleagues quickly brought me back to reality that this was not a reasonable route. Instead, I decided to take an approach that I think can possibly have more impact: implementing something simple, showing others how to do it, and then hoping that the solution can be deployed across many places to solve some of these problems. In summary, we want:

 > An organized, version controlled documentation base that is (visually) pleasant to read, open for edit or contribution, and easy to post general questions to. The solution should be general to be possible to add to existing documentation basis, and harness already existing technologies. It must be entirely static.

# Your Instructions

if you are publishing software with your work, you are already winning if you use version control. Go through these steps to see if you want to try something new with your documentation:

   - Add a README.md like this one to explain how to install and use your software. A cute picture or logo makes it more fun, or a science cartoon. You can put it in a subfolder, docs, to sit alongside your code.
   - Create a folder called "docs" in your repository, and start writing files! In your repository settings you can turn on Github pages, and it will render from this folder to `https://<username>.github.io/<reponame>`.
   - Add the files [livings-docs.js](living-docs.js) and [living-docs.css](living-docs.css) to the same folder, and include them in your markdown files like this:

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="living-doc.js"></script>
<link rel="stylesheet" href="living-doc.css">
```

Do you want help? Reach out to me, or <a href="https://twitter.com/StanfordCompute" target="_blank">StanfordCompute</a> and we will help you with your living documentation, in the name of reproducible, fun, and (beautiful) science! Document on, friends!

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="living-doc.js"></script>
<link rel="stylesheet" href="living-doc.css">
