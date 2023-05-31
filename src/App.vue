<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <!-- <KeepAlive> -->
        <component :is="Component" />
      <!-- </KeepAlive> -->
    </transition>
  </router-view>
</template>


<script>
import { mapActions } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheHeader },
  created() {
    this.loadUsers()
  },
  methods: {
    ...mapActions(['loadUsers']),
  },
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
