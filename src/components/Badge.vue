<template functional>
  <span class="rounded-full bg-indigo text-indigo-lightest uppercase px-2 py-1 text-xs font-bold mr-3">
    <template v-for="child in children">
      {{ child.text }}
    </template>
  </span>
</template>