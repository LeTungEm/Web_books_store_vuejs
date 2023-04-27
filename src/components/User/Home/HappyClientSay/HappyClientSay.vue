<template>
    <h1 className="text-3xl text-center font-medium my-20 lg:text-5xl 2xl:text-7xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Happy Client Say ! <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon></h1>
    <div className="grid grid-cols-1 gap-5 px-5 lg:px-10 lg:gap-10 lg:grid-cols-3 2xl:px-16">
        <ClientSayItem v-for="clientSay in clientSays" :key="clientSay" :rate="clientSay.rate" :author="clientSay.author" :dateTime="clientSay.dateTime" :title="clientSay.title" :description="clientSay.description"/>
    </div>
</template>

<script>
import ClientSayItem from './ClientSayItem.vue';

export default {
    name:"HappyClientSay",
    data(){
        return{
            clientSays: [
                {
                    rate: 4.6, 
                    author: "Good service",
                    dateTime: "2 years ago",
                    title: "I very love the service there !!!",
                    description: "All employee there are very friendly. Sometime they help me to find books or explan about these detail."
                },
                {
                    rate: 4, 
                    author: "The book is interesting.",
                    dateTime: "6 months ago",
                    title: "Book is so interesting",
                    description: "I can find all of my faverite book types. You can read odd books with amazing theorys and let your mine run wild."
                },
                {
                    rate: 5, 
                    author: "The fresh air make me comfortable",
                    dateTime: "5 years ago",
                    title: "It have a clean air",
                    description: "How did they clear this place? I can see books said that come on and read me!"
                }
            ],
        };
    },
    components:{
        ClientSayItem,
    }
};
</script>

<style>
</style>