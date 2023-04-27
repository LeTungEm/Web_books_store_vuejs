<template>
  <Header/>
  <BlogDetail :title="blogDetail.tieude" :image="require(`../assets/images/blogs/${blogDetail.photo}`)" :content="blogDetail.noidung"/>
</template>

<script>
import Header from '@/components/UI/Header/Header.vue';
import BlogDetail from '@/components/User/BlogDetail/BlogDetail.vue'
import ThongBaoService from '@/service/ThongBaoService';
export default {
  components: { BlogDetail, Header },
  data(){
        return {
            id: this.$route.params.id,
            blogDetail: {},
        };
    },
    methods:{
        getBlogDetail(){
            ThongBaoService.getByID(this.id).then(res => {
                this.blogDetail = res.data
                console.log(res.data);
            })
        }
    },
    created(){
        this.getBlogDetail();
    }
}
</script>

<style>

</style>