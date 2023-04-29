<template>
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay='300'>
        <CHeader />
            <!-- Section: Design Block -->
            <div class="my-10 px-6 mx-auto mb-32 text-gray-800">
                <div class="flex justify-center">
                    <div class="text-center lg:max-w-3xl md:max-w-xl">
                        <h2 class="text-3xl font-bold mb-12 px-6">Contact us</h2>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                        <div class="flex flex-wrap">
                            <ContactItem v-for="contact in listContact" :key="contact" :title="contact.name"
                                :email="contact.email" />
                        </div>
                    </div>
                    <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        <CFooter />
    </div>
</template>

<script>
import CHeader from "../components/UI/Header/CHeader.vue";
import CFooter from "../components/UI/Footer/Footer.vue";
import ContactItem from "../components/User/Contact/ContactItem.vue"
import ContactForm from "@/components/User/Contact/ContactForm.vue";

export default {
    name: "ContactUs",
    data() {
        return {
            listContact: [
                {
                    name: "Trưởng phòng",
                    email: "maithuy2012@gmail.com"
                },
                {
                    name: "Nhân viên Hà Thanh",
                    email: "Thanh.Ha1253@gmail.com"
                },
                {
                    name: "Nhân viên Thanh Thúy",
                    email: "thuy.thanh23343@gmail.com"
                },
                {
                    name: "Nhân viên Quân Đỗ",
                    email: "do.quan123@gmail.com"
                }
            ],
            cart: [],
        }
    },
    components: {
        CHeader,
        CFooter,
        ContactItem,
        ContactForm,
    },
    methods: {
       
    },
    computed:{
    },
    created() {
        // console.log(this.getAllTacGia);
    }
}
</script>

<style></style>