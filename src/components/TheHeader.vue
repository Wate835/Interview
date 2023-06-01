<template>
  <header class="header">
      <div class="header__wrapper">
        <h1 class="header__info">Interview</h1>
        <nav class="nav">
          <router-link class="btn" style="margin-right: 8px;" :to="{ name: 'home' }">Список опрошеных</router-link>
          <router-link class="btn" :to="{ name: 'interview' }">Пройти опрос</router-link>
        </nav>
    </div>
  </header>
</template>