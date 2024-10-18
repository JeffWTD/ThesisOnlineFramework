---
layout: page
title: Portfolio
permalink: /portfolio/
nav: true
nav_order: 3
display_categories: [School Projects, Personal Projects]
---

<div class="projects">
    {% for category in page.display_categories %}
        <a id="{{ category }}" href=".#{{ category }}">
            <h2 class="category">{{ category }}</h2>
        </a>
        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}
        <!-- Generate cards for each project -->
        <div class="cards-masonry-vertical">
            {% for project in sorted_projects %}
                {% include projectcard.liquid %}
            {% endfor %}
        </div>
    {% endfor %}
</div>
