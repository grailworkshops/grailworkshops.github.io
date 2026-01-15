const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const searchOverlay = document.querySelector('[data-search-overlay]');
const searchInput = document.querySelector('#site-search-input');
const searchResults = document.querySelector('#site-search-results');
const searchOpenButtons = document.querySelectorAll('[data-search-open]');
const searchCloseButtons = document.querySelectorAll('[data-search-close]');

let searchIndex = null;
let searchIndexPromise = null;
let lastFocus = null;

const normalize = (value) => (value || '').toLowerCase().replace(/\s+/g, ' ').trim();

const getSearchIndexUrl = () => {
  const url = document.body?.dataset?.searchIndexUrl;
  return url && url.trim().length ? url : '/search.json';
};

const loadSearchIndex = async () => {
  if (searchIndex) {
    return searchIndex;
  }

  if (!searchIndexPromise) {
    searchIndexPromise = fetch(getSearchIndexUrl(), { cache: 'force-cache' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Search index request failed (${res.status})`);
        }
        return res.json();
      })
      .then((items) =>
        (Array.isArray(items) ? items : [])
          .map((item) => {
            const title = typeof item.title === 'string' ? item.title : '';
            const url = typeof item.url === 'string' ? item.url : '';
            const rawText = typeof item.content === 'string' ? item.content : '';
            return {
              href: url,
              title,
              rawText,
              text: normalize(rawText),
            };
          })
          .filter((item) => item.href && item.title)
      )
      .catch((err) => {
        console.warn('Search index failed to load', err);
        return [];
      })
      .finally(() => {
        searchIndexPromise = null;
      });
  }

  searchIndex = await searchIndexPromise;
  return searchIndex;
};

const makeSnippet = (rawText, queryTokens) => {
  const text = rawText.replace(/\s+/g, ' ').trim();
  const lower = text.toLowerCase();
  const firstToken = queryTokens.find((t) => t && lower.includes(t));
  if (!firstToken) {
    return text.slice(0, 140) + (text.length > 140 ? '...' : '');
  }
  const idx = lower.indexOf(firstToken);
  const start = Math.max(0, idx - 48);
  const end = Math.min(text.length, idx + 92);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < text.length ? '...' : '';
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
};

const closeSearch = () => {
  if (!searchOverlay) {
    return;
  }
  searchOverlay.hidden = true;
  document.body.classList.remove('no-scroll');
  if (lastFocus && typeof lastFocus.focus === 'function') {
    lastFocus.focus();
  }
  lastFocus = null;
};

const renderSearchResults = (query) => {
  if (!searchResults) {
    return;
  }
  const q = normalize(query);
  if (!q) {
    searchResults.innerHTML =
      '<div class="search-empty">Type to search (or press / anywhere).</div>';
    return;
  }

  if (!searchIndex) {
    searchResults.innerHTML = '<div class="search-empty">Loading search index...</div>';
    loadSearchIndex().then(() => renderSearchResults(query));
    return;
  }

  const tokens = q.split(' ').filter(Boolean);
  const scored = [];

  (searchIndex || []).forEach((item) => {
    const haystack = `${normalize(item.title)} ${item.text}`;
    const matchesAll = tokens.every((t) => haystack.includes(t));
    if (!matchesAll) {
      return;
    }

    let score = 0;
    tokens.forEach((t) => {
      if (normalize(item.title).includes(t)) {
        score += 8;
      }
      if (item.text.includes(t)) {
        score += 2;
      }
    });

    scored.push({
      ...item,
      score,
      snippet: makeSnippet(item.rawText, tokens),
    });
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 10);
  searchResults.innerHTML = '';

  if (!top.length) {
    searchResults.innerHTML =
      '<div class="search-empty">No results. Try different keywords.</div>';
    return;
  }

  top.forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'search-result';

    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.title;
    link.addEventListener('click', () => {
      closeSearch();
      if (navLinks) {
        navLinks.classList.remove('open');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    const snippet = document.createElement('p');
    snippet.textContent = item.snippet;

    wrapper.appendChild(link);
    wrapper.appendChild(snippet);
    searchResults.appendChild(wrapper);
  });
};

const openSearch = () => {
  if (!searchOverlay || !searchInput || !searchResults) {
    return;
  }
  lastFocus = document.activeElement;
  searchOverlay.hidden = false;
  document.body.classList.add('no-scroll');
  searchInput.value = '';
  searchResults.innerHTML = '<div class="search-empty">Loading search index...</div>';
  loadSearchIndex().then(() => renderSearchResults(''));
  setTimeout(() => searchInput.focus(), 0);
};

if (searchOverlay && searchInput && searchResults) {
  searchOpenButtons.forEach((btn) => btn.addEventListener('click', openSearch));
  searchCloseButtons.forEach((btn) => btn.addEventListener('click', closeSearch));
  searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));

  document.addEventListener('keydown', (e) => {
    const tagName = (e.target && e.target.tagName) || '';
    const isTypingTarget = ['INPUT', 'TEXTAREA'].includes(tagName);

    if (e.key === 'Escape' && !searchOverlay.hidden) {
      e.preventDefault();
      closeSearch();
      return;
    }

    if (isTypingTarget) {
      return;
    }

    if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      openSearch();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
}

const animatedElements = document.querySelectorAll('[data-animate]');
if (animatedElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});

document.querySelectorAll('.profile-card[data-profile]').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      return;
    }
    const href = card.getAttribute('data-profile');
    if (href) {
      window.open(href, '_blank', 'noopener');
    }
  });
});

const countdownTargets = {
  submission: '2026-03-05T23:59:59-12:00',
  workshop: '2026-06-03T09:00:00-06:00',
};

const formatCountdown = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));

  if (Number.isNaN(diff)) {
    return null;
  }
  if (diff < 0) {
    return 'Event completed';
  }
  if (diff === 0) {
    return 'Today';
  }
  return `${diff} days remaining`;
};

Object.entries(countdownTargets).forEach(([key, date]) => {
  const el = document.querySelector(`[data-countdown="${key}"]`);
  if (!el) {
    return;
  }
  const formatted = formatCountdown(date);
  if (formatted) {
    el.textContent = `${el.textContent} | ${formatted}`;
  }
});
