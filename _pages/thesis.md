---
layout: default #leave all of these settings as-is
thesis: true
title: Thesis
permalink: /thesis
nav_order: 7
bibliography: thesis.bib
pretty_table: true
images:
  compare: true
  slider: true
mermaid:
  enabled: true
  zoomable: false
toc:
  sidebar: left
nav: false #CHANGE THIS to true when you are ready to show your thesis to the world!
unitygames: #Add the names of the folders containing your WebGL games here, they should be saved under assets/games/
  - Name_Of_Your_WebGL_Build_Here
  - Another_WebGL_Build_Here
---

<!-- You can write comments throughout this document without them 
showing up in the text by using these arrows like this -->

<!--<div><button onClick="ConvertToPages()">Convert to Page Layout</button> <button onClick="Print()">Print Thesis</button></div>-->

<!-- 
  This thesis_frontpage element sets up the front page of your thesis
  Change the fields to your personal and correct information
 -->
{% include thesis_frontpage.liquid 
  schoollogo="assets/img/logo-school-luca.jpg"
  title="On Writing an interactive online thesis"
  subtitle="An in-depth look into using the Thesis Online Framework"
  picture="assets/models/UtahTeapot_placeholder.webp"
  writer="John Doe"
  degree="Master of Arts"
  school="LUCA School of arts"
  date="June 20XX"
  promotors="Doe, Jane and Lastname, Firstname"
%}

<!-------------------------------------------------------------------->

# Abstract

In the abstract we summarize our thesis, generally in 150 words to 250 words. 
Also known as the summary, the abstract is a key part of your thesis.
First we talk about our `objective`, the topic under study, what's already known from previous research and set up our new research.
Secondly we talk about the `methods` we used to research.
Then we discuss the `results`.
Finally we describe our `conclusions`, their implications and significance.
Underneath our abstract we put a line of `keywords` relevant to our thesis.

**Keywords** : Thesis, Game Design, Interactive, Online

<!-------------------------------------------------------------------->

# Table of Contents

<div id="thesis-toc"></div> <!-- Leave this here to automatically generate a table of contents -->

<!-------------------------------------------------------------------->

# Introduction

In the introdcution we introduce the reader into our topic of research.
This is not the place to go too technical too quickly.
Your main research question should be shown here like this : 

> How can a Game Design student write an interactive online thesis?

Next you should explain the question and perhaps further focus on more specific sub-questions.
Finally you should talk about the structure of your thesis.
Give the reader an overview of the contents and how one chapter leads to the next.

<!-------------------------------------------------------------------->

# State of the art

The goal of the state of the art chapter is twofold. Here you gather what other people found on your topic and what research has already been done. By doing this you show the reader that you know your topic well, proving to them that you have sufficient pre-existing knowledge about your topic before starting your research.
At the same time you want to identify the gap that you intend to fill. How does your research contribute to the greater research topic as a whole and what do you intend to do differently? This way of thinking keeps you from re-inventing the wheel and proves to your reader that your research is relevant.

<!-------------------------------------------------------------------->

# Frozen Lords

Sometimes when you are writing your thesis you don't want to break the flow of your text by explaining something the reader probably knows.
However it's always good to make sure you explain even what to you might be obvious.
In such a case it's very easy to add a footnote in your text.
For example next to this line of text will be a footnote<d-footnote>A test footnote about how you can add footnotes.</d-footnote>.

Whenever you're referencing another source like a paper you need to cite it!
Luckily citing them inside the text is very easy.
For example, if we would talk about how Shigeru Miyamoto explains that making New Super Mario Bros. for DS was a fresh start returning to the core principles of Mario games<d-cite key="Nintendo2009IwataAsks"></d-cite>,
you could simple add a `<d-cite>` tag referencing the correct source in your bibliography.
Or when you talk about how Don Norman talks about the affordances of doors<d-cite key="Norman2013Design"></d-cite>, you could simply cite them and the citations will end up automatically in the citations area at the bottom of your thesis.
All your references should be put inside the `thesis.bib` file under `/assets/bibliography`.

## The Dwindling Secret

Sed tristique feugiat ex ut maximus. Quisque dignissim metus eget est maximus tincidunt. Praesent molestie efficitur mollis. Ut elementum, neque ut lacinia eleifend, nisi tortor porta quam, vitae lacinia neque sapien ac mi. Quisque id nisl arcu. Nunc at convallis velit. Morbi ut quam commodo, porta nulla ac, ultrices ante. Nunc a aliquam mi, vel sodales urna. Pellentesque lobortis posuere tempus. Proin ultrices pharetra eros, ut accumsan arcu convallis at. Aliquam erat volutpat. Ut non vehicula nisi.

Curabitur mi sem, porta et ex non, faucibus pellentesque urna. Phasellus eget porta elit. Phasellus ultricies bibendum ornare. Aliquam erat volutpat. Aliquam eu eleifend libero. Sed id tincidunt quam. Phasellus eu imperdiet quam. Phasellus aliquet condimentum commodo. Quisque id dolor quis eros rutrum fermentum in sed massa. Aliquam interdum aliquet fringilla. Fusce magna velit, maximus ac diam finibus, iaculis eleifend diam. Etiam consequat vehicula nunc, id luctus sapien sollicitudin non. Integer suscipit ut arcu eget congue. Integer sed lacus sed tortor fermentum fringilla nec quis lectus. Suspendisse sagittis feugiat libero at efficitur. Vestibulum et sodales orci. 

## Men of Roses

Aliquam erat volutpat. Nam a dolor ac mauris auctor ornare in non ante. Etiam semper diam consequat nisi condimentum gravida. Integer rutrum nunc a nibh gravida, placerat vestibulum libero venenatis. Nam vel dapibus tortor. Ut eu velit pellentesque, vehicula elit vitae, semper felis. Morbi feugiat orci ut est ultricies, porttitor dignissim diam mollis. Nullam placerat feugiat odio. Aenean accumsan, diam in ornare dignissim, enim ipsum pellentesque odio, non ultricies quam lacus sed nulla. Sed vel vestibulum ex. Duis aliquet dolor in hendrerit facilisis. Nulla ullamcorper semper magna. In ultrices diam eu egestas placerat. Nam pellentesque est sit amet est porttitor, id rhoncus nulla facilisis.

### Ashes in the Ice

Suspendisse potenti. Proin cursus eros sed tortor blandit aliquet. Sed enim leo, fringilla eget mauris non, vulputate euismod elit. Nulla pellentesque id augue eu scelerisque. Etiam condimentum aliquet mi, nec varius lectus consectetur id. Curabitur non enim quis arcu varius sollicitudin. Nam dapibus orci et arcu finibus, ut ultrices sem volutpat. 

### The Child of the Valley

Proin ultricies volutpat urna, et pretium massa placerat id. Morbi ultricies elit ac porttitor fermentum. Morbi elementum ullamcorper fermentum. Suspendisse magna urna, elementum vel tortor in, semper rhoncus nisi. Donec consequat augue scelerisque, egestas mi gravida, ultrices ipsum. Proin ac est eleifend, suscipit purus ut, commodo mauris. Vestibulum pretium, ante in accumsan dignissim, tortor elit egestas turpis, in interdum ligula nisi eget lacus. Sed vel enim enim. Praesent faucibus laoreet nisi sit amet dignissim. Sed vehicula aliquam cursus. 

<!-------------------------------------------------------------------->

# Conclusion

The conclusion **is not a summary of your thesis**! The abstract and the introduction serve that purpose.
Here you conclude your findings and talk about what you learned. Refer back to your research question and talk about where you succeeded and failed in answering it. Maybe refer back to your state of the art research and compare your findings with those of previous researchers.

Talk about the limitations of your research. By showing the reader that you understand the shortcomings of your own research you prove that you understand exactly what you accomplished and what needs further research. This also helps future researchers build upon your work by continuing where you had to stop.

Finally emphasize your key contributions to the field. When someone reads your thesis, what should be the main takeaways? What knowledge should they take with them to improve their own work?

<!-------------------------------------------------------------------->

# References

<d-appendix class="custom-appendix">
    <d-citation-list></d-citation-list>
</d-appendix>

<!-------------------------------------------------------------------->

# Footnotes

<d-appendix class="custom-appendix">
    <d-footnote-list></d-footnote-list>
</d-appendix>

<!-------------------------------------------------------------------->

# Appendix

## Acknowledgements

Generally an appendix has an acknowledgements secion to recognize people and institutions. 
It may also be a good place to acknowledge and cite software that makes your work possible (eg. Unity, Blender).

## Third Party Assets

In this section you provide a list of third party assets you used in your final project.

TODO : provide formatting

## Appendix One

If you have material that is not specifically relevant enough to be in the main text, but is usefull for the reader to better understand the thesis it can be put here in the appendices.
