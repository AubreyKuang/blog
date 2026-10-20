<script setup lang="ts">
import { computed } from "vue";
import { useFrontmatter, withBase } from "vuepress/client";

interface Highlight {
  title: string;
  text: string;
}

interface Experience {
  company: string;
  role: string;
  team?: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: Highlight[];
  tags?: string[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string[];
}

interface SkillGroup {
  group: string;
  icon: string;
  items: string[];
}

interface Link {
  text: string;
  link: string;
  icon: string;
  primary?: boolean;
}

interface AboutData {
  intro: string[];
  facts: { icon: string; text: string }[];
  labels: {
    experience: string;
    education: string;
    skills: string;
    connect: string;
    current: string;
  };
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  connect: { text: string; links: Link[] };
}

const frontmatter = useFrontmatter<{ about: AboutData }>();
const about = computed(() => frontmatter.value.about);

const resolveLink = (link: string): string =>
  link.startsWith("/") ? withBase(link) : link;
</script>

<template>
  <div v-if="about" class="about-me">
    <section class="about-intro">
      <p v-for="(paragraph, i) in about.intro" :key="i" v-html="paragraph" />
      <ul class="about-facts">
        <li v-for="fact in about.facts" :key="fact.text">
          <VPIcon :icon="fact.icon" />
          <span>{{ fact.text }}</span>
        </li>
      </ul>
    </section>

    <section class="about-section">
      <h2 class="about-heading">
        <VPIcon icon="briefcase" />{{ about.labels.experience }}
      </h2>
      <ol class="about-timeline">
        <li
          v-for="job in about.experience"
          :key="job.company + job.period"
          class="about-job"
          :class="{ current: job.current }"
        >
          <span class="about-job-dot" aria-hidden="true" />
          <div class="about-card">
            <header class="about-job-header">
              <div>
                <h3 class="about-job-company">{{ job.company }}</h3>
                <p class="about-job-role">
                  {{ job.role }}<template v-if="job.team"> · {{ job.team }}</template>
                </p>
              </div>
              <div class="about-job-meta">
                <span v-if="job.current" class="about-badge">{{
                  about.labels.current
                }}</span>
                <span><VPIcon icon="calendar" />{{ job.period }}</span>
                <span><VPIcon icon="location-dot" />{{ job.location }}</span>
              </div>
            </header>
            <ul class="about-highlights">
              <li v-for="item in job.highlights" :key="item.title">
                <strong>{{ item.title }}</strong>
                <span>{{ item.text }}</span>
              </li>
            </ul>
            <ul v-if="job.tags?.length" class="about-tags">
              <li v-for="tag in job.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section class="about-section">
      <h2 class="about-heading">
        <VPIcon icon="graduation-cap" />{{ about.labels.education }}
      </h2>
      <div class="about-grid">
        <div
          v-for="school in about.education"
          :key="school.school"
          class="about-card about-school"
        >
          <h3>{{ school.school }}</h3>
          <p class="about-school-degree">{{ school.degree }}</p>
          <p class="about-school-period">
            <VPIcon icon="calendar" />{{ school.period }}
          </p>
          <ul v-if="school.details?.length">
            <li v-for="detail in school.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2 class="about-heading">
        <VPIcon icon="layer-group" />{{ about.labels.skills }}
      </h2>
      <div class="about-grid about-skills">
        <div v-for="group in about.skills" :key="group.group" class="about-card">
          <h3><VPIcon :icon="group.icon" />{{ group.group }}</h3>
          <ul class="about-tags">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section about-connect">
      <h2 class="about-heading">
        <VPIcon icon="paper-plane" />{{ about.labels.connect }}
      </h2>
      <p>{{ about.connect.text }}</p>
      <div class="about-actions">
        <a
          v-for="item in about.connect.links"
          :key="item.link"
          :href="resolveLink(item.link)"
          class="about-button"
          :class="{ primary: item.primary }"
          :target="item.link.startsWith('http') ? '_blank' : undefined"
          :rel="item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          <VPIcon :icon="item.icon" />{{ item.text }}
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about-me {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.7;

  h2,
  h3 {
    margin: 0;
    padding: 0;
    border: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .vp-icon {
    margin-inline-end: 0.4em;
  }
}

.about-intro {
  text-align: center;

  p {
    margin: 0 auto 0.75rem;
    max-width: 720px;
    font-size: 1.1rem;
    color: var(--vp-c-text);
  }
}

.about-facts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem !important;

  li {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.9rem;
    border: 1px solid var(--vp-c-border);
    border-radius: 999px;
    background: var(--vp-c-bg-elv, var(--vp-c-bg));
    font-size: 0.9rem;
    color: var(--vp-c-text-mute);

    .vp-icon {
      color: var(--vp-c-accent);
    }
  }
}

.about-section {
  margin-top: 4rem;
}

.about-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem !important;
  font-size: 1.75rem;
  font-weight: 700;

  .vp-icon {
    color: var(--vp-c-accent);
  }
}

.about-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background: var(--vp-c-bg-elv, var(--vp-c-bg));
  box-shadow: 0 1px 2px var(--vp-c-shadow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-accent-soft, var(--vp-c-accent));
    box-shadow: 0 8px 24px var(--vp-c-shadow);
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    font-weight: 700;
  }
}

.about-timeline {
  position: relative;
  padding-inline-start: 2rem !important;

  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    inset-inline-start: 0.45rem;
    width: 2px;
    background: var(--vp-c-border);
  }
}

.about-job {
  position: relative;

  & + & {
    margin-top: 1.5rem;
  }
}

.about-job-dot {
  position: absolute;
  top: 1.85rem;
  inset-inline-start: -2rem;
  width: 1rem;
  height: 1rem;
  border: 3px solid var(--vp-c-bg);
  border-radius: 50%;
  background: var(--vp-c-border-hard, var(--vp-c-border));
  box-shadow: 0 0 0 1px var(--vp-c-border);

  .current & {
    background: var(--vp-c-accent);
    box-shadow: 0 0 0 4px var(--vp-c-accent-soft, transparent);
  }
}

.about-job-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 1rem;
}

.about-job-company {
  font-size: 1.3rem !important;
}

.about-job-role {
  margin: 0.15rem 0 0;
  color: var(--vp-c-accent);
  font-weight: 600;
}

.about-job-meta {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 0.1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);

  @media (max-width: 719px) {
    flex-flow: row wrap;
    align-items: center;
    gap: 0.25rem 1rem;
  }
}

.about-badge {
  padding: 0 0.6rem;
  border-radius: 999px;
  background: var(--vp-c-accent);
  color: var(--vp-c-white, #fff);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.6;
}

.about-highlights {
  display: grid;
  gap: 0.75rem;

  li {
    display: flex;
    flex-flow: column;
    padding-inline-start: 0.9rem;
    border-inline-start: 3px solid
      color-mix(in srgb, var(--vp-c-accent) 45%, transparent);
  }

  strong {
    font-size: 0.95rem;
  }

  span {
    color: var(--vp-c-text-mute);
    font-size: 0.95rem;
  }
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem !important;

  li {
    padding: 0.1rem 0.65rem;
    border-radius: 6px;
    background: var(--vp-c-accent-soft);
    color: var(--vp-c-accent);
    font-size: 0.8rem;
    font-weight: 500;
  }
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.about-school {
  p {
    margin: 0;
  }

  .about-school-degree {
    margin-top: 0.25rem;
    color: var(--vp-c-accent);
    font-weight: 600;
  }

  .about-school-period {
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--vp-c-text-mute);
  }

  ul li {
    position: relative;
    padding-inline-start: 1rem;
    font-size: 0.925rem;
    color: var(--vp-c-text-mute);

    &::before {
      content: "";
      position: absolute;
      top: 0.7em;
      inset-inline-start: 0;
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: var(--vp-c-accent);
    }

    & + li {
      margin-top: 0.35rem;
    }
  }
}

.about-skills {
  .about-tags {
    margin-top: 0.75rem !important;
  }

  .about-tags li {
    background: var(--vp-c-grey-soft);
    color: var(--vp-c-text);
  }
}

.about-connect {
  text-align: center;

  p {
    margin: 0 auto 1.5rem;
    max-width: 640px;
    color: var(--vp-c-text-mute);
  }
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.about-button {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  color: var(--vp-c-text) !important;
  font-weight: 600;
  text-decoration: none !important;

  &::after {
    display: none !important;
  }

  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: var(--vp-c-accent);
  }

  &.primary {
    border-color: var(--vp-c-accent);
    background: var(--vp-c-accent);
    color: var(--vp-c-white, #fff) !important;

    &:hover {
      background: var(--vp-c-accent-hover);
    }
  }
}

@media (max-width: 719px) {
  .about-section {
    margin-top: 3rem;
  }

  .about-card {
    padding: 1.1rem;
  }

  .about-timeline {
    padding-inline-start: 1.5rem !important;

    &::before {
      inset-inline-start: 0.3rem;
    }
  }

  .about-job-dot {
    inset-inline-start: -1.5rem;
    width: 0.85rem;
    height: 0.85rem;
  }
}
</style>
