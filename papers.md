---
layout: default
title: "Accepted Papers | GRAIL-V @ CVPR 2026"
description: "Accepted papers for GRAIL-V at CVPR 2026."
permalink: /papers/
---

{% assign accepted_papers = site.data.papers %}
{% assign long_papers = accepted_papers | where: "submission_type", "Long paper" %}
{% assign short_papers = accepted_papers | where: "submission_type", "Short paper" %}
{% assign non_archival_papers = accepted_papers | where: "submission_type", "Non-archival submission" %}

<section id="papers" class="section papers-section" data-animate>
  <div class="section-title">
    <p class="eyebrow">Accepted papers</p>
    <h2>GRAIL-V 2026 Papers</h2>
  </div>
  <p class="lead">
    Accepted papers for GRAIL-V at CVPR 2026 are listed below. Links open the corresponding OpenReview pages.
  </p>
  <div class="paper-stats" aria-label="Accepted paper filters">
    <button class="paper-filter is-active" type="button" data-paper-filter="all" aria-pressed="true">
      {{ accepted_papers.size }} accepted papers
    </button>
    <button class="paper-filter" type="button" data-paper-filter="Long paper" aria-pressed="false">
      {{ long_papers.size }} long papers
    </button>
    <button class="paper-filter" type="button" data-paper-filter="Short paper" aria-pressed="false">
      {{ short_papers.size }} short papers
    </button>
    <button class="paper-filter" type="button" data-paper-filter="Non-archival submission" aria-pressed="false">
      {{ non_archival_papers.size }} non-archival
    </button>
  </div>

  <div class="papers-list">
    {% for paper in accepted_papers %}
      <article class="paper-item" data-paper-type="{{ paper.submission_type }}">
        <div class="paper-meta">
          <span class="paper-number">#{{ paper.number }}</span>
          <span class="paper-type">{{ paper.submission_type }}</span>
        </div>
        <div class="paper-copy">
          <h3>{{ paper.title }}</h3>
          <p>{{ paper.authors | join: ", " }}</p>
        </div>
        {% if paper.url and paper.url != "" %}
          <a class="paper-link" href="{{ paper.url }}" target="_blank" rel="noopener">OpenReview</a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

{% include sections/contact.html %}
