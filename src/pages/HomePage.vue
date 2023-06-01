<template>
  <div class="home">
    <div class="container">
      <bread-crumbs link="List of respondents" />
      <main-table></main-table>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import MainTable from '@/components/MainTable.vue'

export default {
  components: { BreadCrumbs, MainTable },
}
</script>
