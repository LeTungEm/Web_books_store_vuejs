<template>
    <div :style="`background-image: url(${banner})`" class="bg-no-repeat bg-cover bg-center border-t border-black h-[200px] lg:h-[500px]">
    </div>
    <hr class='border-black border-2'/>
    <div class='grid grid-cols-5 gap-3 py-2 md:gap-5 md:px-20 md:py-4 xl:gap-x-20 xl:px-56 mt-2'>
        <img class='object-contain h-16 lg:h-32' :src="logo" alt='' />
        <img class='object-contain h-16 lg:h-32' :src="logo" alt='' />
        <img class='object-contain h-16 lg:h-32' :src="logo" alt='' />
        <img class='object-contain h-16 lg:h-32' :src="logo" alt='' />
        <img class='object-contain h-16 lg:h-32' :src="logo" alt='' />
    </div>
    <hr class='border-black' />
</template>

<script>
export default {
    name:"CBanner",
    data(){
        return {
            logo: `https://webbooksstore.000webhostapp.com/Images/logo/logo.jpg`,
            banner: `https://webbooksstore.000webhostapp.com/Images/banner/banner.png`,
        };
    }
}
</script>

<style>

</style>