<template>
  <nav class="nav">
    <div class="nav__logo">
      <a class="nav__logo-link">CineVue</a>
    </div>
    <ul class="nav__links">
      <li class="nav__item" v-for="(item, index) of menu" :key="index">
        <router-link :to="item.path" class="nav__link">
          <img
            class="nav__icon"
            :src="require(`@/assets/icons/${item.icon}`)"
          />
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import menuJSON from '@/data/menu.json';

export default {
  data() {
    return {
      menu: menuJSON
    };
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-bottom: $border-white;
  margin-bottom: 5rem;

  @include respond(tab-port) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__item {
    &:not(:last-child, :first-child) {
      margin-right: 5rem;
    }
  }

  &__icon {
    margin-right: 1rem;
  }

  &__link {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: auto;
    @include respond(tab-port) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
    color: $color-primary;
    font-size: 3.5rem;
    font-weight: 600;
  }
}
</style>
