<template>
  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
    <div class="flex items-start">
      <div class="shrink-0">
        <div
          class="p-4 bg-orange-700 rounded-md shadow-md w-14 h-14 flex items-center justify-center"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="headset"
            class="w-5 text-white"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="grow ml-6">
        <p class="font-bold mb-1">{{ title }}</p>
        <p class="text-gray-500">{{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    title: String,
    email: String,
  },
};
</script>

<style>
</style>