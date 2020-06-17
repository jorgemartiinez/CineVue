<template>
  <div>
    <h2 class="title" v-if="item.title && item.title.length > 0">
      {{ item.title }}
    </h2>
    <h2 class="title" v-else>
      {{ item.name }}
    </h2>

    <h4
      class="title-sub subtitle"
      v-if="item.tagline && item.tagline.length > 0"
    >
      "{{ item.tagline }}"
    </h4>

    <div v-if="item.overview.length > 0">
      <p class="paragraph">{{ item.overview }}</p>
    </div>

    <div v-else>
      <p class="paragraph">
        La descripción de esta película no está disponible en español. &#128532;
      </p>
    </div>

    <ItemGenres :genres="item.genres" />

    <ItemInfoLine v-if="item.homepage">
      <template v-slot:titleName>
        Web
      </template>
      <template v-slot:afterTitle>
        <br />
        <a :href="item.homepage">Acceder a web </a>
      </template>
    </ItemInfoLine>

    <ItemInfoLine v-if="item.revenue">
      <template v-slot:titleName>
        Ingresos
      </template>
      <template v-slot:afterTitle>
        <span> {{ item.revenue }} $</span>
      </template>
    </ItemInfoLine>

    <h3 class="title-sub">Productoras</h3>
    <ItemCompanies
      :companies="item.production_companies"
      v-if="item.production_companies.length > 0"
    />
  </div>
</template>

<script>
import ItemCompanies from './ItemCompanies.vue';
import ItemGenres from './ItemGenres.vue';
import ItemInfoLine from './ItemInfoLine.vue';

export default {
  components: {
    ItemInfoLine,
    ItemGenres,
    ItemCompanies
  },
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin-top: -2rem;
  margin-bottom: 2rem;
  font-style: italic;
}
</style>
