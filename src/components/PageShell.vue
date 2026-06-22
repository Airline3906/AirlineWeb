<template>
  <div class="page-shell">
    <div class="page-bg" aria-hidden="true">
      <span class="page-orb page-orb-1"></span>
      <span class="page-orb page-orb-2"></span>
    </div>
    <div class="page-inner">
      <header v-if="title || logo" class="page-header animate-fade-up">
        <img v-if="logo" :src="logo" class="page-logo" alt="">
        <h1 v-if="title" class="page-title">{{ title }}</h1>
        <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
      </header>
      <div class="page-body animate-fade-up" style="animation-delay: 0.08s">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageShell',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    logo: { type: String, default: '' },
  },
}
</script>
