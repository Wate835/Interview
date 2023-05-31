<template>
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link">
          Site
        </a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link"> {{ link }} </a>
      </li>
    </ul>
</template>

<script>

export default {
  props: [ 'link' ],
}
</script>
