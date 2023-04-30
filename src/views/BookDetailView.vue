<template>
  <CHeader :changeNumber="this.changeNumber += 1"/>
  <div>
    <BookDetail 
      @changeCart="this.changeNumber += 1" 
      :bookId="book.masach"
      :title="book.tensach" 
      :image="book.photo" 
      :description="book.gioithieu"/>
  </div>
  <Footer/>
</template>

<script>
import BookDetail from '@/components/User/BookDetail/BookDetail.vue'
import SachService from '@/service/SachService'
import CHeader from '@/components/UI/Header/CHeader.vue';
import Footer from '@/components/UI/Footer/Footer.vue';
export default {
  name:"BookDetailView",
  data(){
    return {
      book:{},
      changeNumber: 0,
    };
  },
  components: { BookDetail, CHeader, Footer },
  methods:{
    getBook(){
      let bookID = this.$route.params.id;
      SachService.getByID(bookID).then(res => {
        this.book = res.data;
      })
    }
  },
  created(){
    this.getBook();
  }
}
</script>

<style>

</style>