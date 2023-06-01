<template>
  <div class="container">
    <BreadCrumbs link="Interview" />
      <reg-form v-model:user="this.user" v-if="!this.user"></reg-form>
      <interview-form v-model:user="this.user" v-else></interview-form>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import RegForm from '@/components/RegForm.vue'
import InterviewForm from '@/components/InterviewForm.vue'

export default {
  components: { BreadCrumbs, RegForm, InterviewForm },
  data() {
    return {
      user: null,
    }
  }
}
</script>
