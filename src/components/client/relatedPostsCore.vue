<script setup lang="ts">
import Fuse from "fuse.js";
import { ref, onMounted } from "vue";

interface Result {
  content: string;
  title: string;
  url: string;
  cover: string;
}

const {
  lang: language,
  title,
  cover,
} = defineProps(["lang", "title", "cover"]);

const results = ref<Fuse.FuseResult<Result>[]>([]);
const loading = ref(true);
const error = ref(false);

const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 1,
  shouldSort: true,
  findAllMatches: false,
  threshold: 1,
  useExtendedSearch: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1,
  keys: ["title", "content"],
};

onMounted(async () => {
  try {
    const list = await hsu.getJson(`/scripts/searchData-${language}.json`);
    const fuse = new Fuse(list, fuseOptions);
    results.value = fuse.search(title).slice(1, 7) as Fuse.FuseResult<Result>[];
    loading.value = false;
  } catch (err) {
    console.error('Failed to load search data:', err);
    error.value = true;
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" class="loading">加载相关文章...</div>
  <div v-else-if="error" class="error">无法加载相关文章</div>
  <div v-else-if="results.length === 0" class="no-results">暂无相关文章</div>
  <a
    v-else
    class="related-post"
    v-for="{ item } in results"
    :key="item.url"
    :href="item.url"
    :style="`background: url(${item.cover || cover}) center/cover no-repeat;`"
  >
    <div class="related-post-title">{{ item.title }}</div>
  </a>
</template>