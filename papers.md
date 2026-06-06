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
{% assign has_awards = false %}
{% for paper in accepted_papers %}
  {% if paper.award %}
    {% assign has_awards = true %}
  {% endif %}
{% endfor %}

<section id="papers" class="section papers-section" data-animate>
  <div class="section-title">
    <p class="eyebrow">Accepted papers</p>
    <h2>GRAIL-V 2026 Papers</h2>
  </div>
  <p class="lead">
    Accepted papers for GRAIL-V at CVPR 2026 are listed below. Links open the corresponding OpenReview pages and, where available, the official CVF Open Access proceedings pages.
  </p>
  {% if has_awards %}
    <div class="paper-awards" aria-label="Award-winning papers">
      {% for paper in accepted_papers %}
        {% if paper.award %}
          <a class="paper-award-card" href="#paper-{{ paper.number }}">
            <span>{{ paper.award }}{% if paper.award_prize %} · {{ paper.award_prize }}{% endif %}</span>
            <strong>{{ paper.title }}</strong>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
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
      <article id="paper-{{ paper.number }}" class="paper-item{% if paper.award %} has-award{% endif %}" data-paper-type="{{ paper.submission_type }}">
        <div class="paper-meta">
          <span class="paper-number">#{{ paper.number }}</span>
          <span class="paper-type">{{ paper.submission_type }}</span>
          {% if paper.award %}
            <span class="paper-award">{{ paper.award }}{% if paper.award_prize %} · {{ paper.award_prize }}{% endif %}</span>
          {% endif %}
        </div>
        <div class="paper-copy">
          <h3>{{ paper.title }}</h3>
          <p>{{ paper.authors | join: ", " }}</p>
        </div>
        <div class="paper-links">
          {% if paper.url and paper.url != "" %}
            <a class="paper-link" href="{{ paper.url }}" target="_blank" rel="noopener">OpenReview</a>
          {% endif %}
          {% if paper.cvf_url and paper.cvf_url != "" %}
            <a class="paper-link cvf-link" href="{{ paper.cvf_url }}" target="_blank" rel="noopener">CVPR Proceedings</a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

{% include sections/contact.html %}
