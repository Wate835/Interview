<template>
  <div class="container">
    <BreadCrumbs link="Interview" />
    <req-form v-model:user="this.user" v-if="!this.user"></req-form>
    <interview-form v-model:user="this.user" v-else></interview-form>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import ReqForm from '@/components/ReqForm.vue'
import InterviewForm from '@/components/InterviewForm.vue'
export default {
  components: { BreadCrumbs, ReqForm, InterviewForm },
  data() {
    return {
      user: null,
    }
  }
}
</script>

<style scoped>
</style>
