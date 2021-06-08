<template>
  <div class="p-2">
    <div class="flex flex-row border-2 border-gray-100 rounded-3xl py-1 px-1">
      <img
        class="w-12 h-12 rounded-full object-cover mr-2"
        :src="school.picture"
        :alt="school.title"
        width="50"
        height="50"
      />
      <div class="flex flex-col">
        <span class="text-sm font-medium text-gray-600">{{
          school.title
        }}</span>
        <span class="text-xs font-normal text-gray-600">{{
          school.duration
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardEducation',
  props: {
    school: {
      type: Object,
      default: null,
    },
  },
}
</script>
