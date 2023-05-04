<template>
  <CHeader />
  <BlogDetail
    :title="blogDetail.tieude"
    :image="blogDetail.photo"
    :content="blogDetail.noidung"
  />
</template>

<script>
import CHeader from "@/components/UI/Header/CHeader.vue";
import BlogDetail from "@/components/User/BlogDetail/BlogDetail.vue";
import ThongBaoService from "@/service/ThongBaoService";
export default {
  name: "BlogDetailView",
  components: { BlogDetail, CHeader },
  data() {
    return {
      id: this.$route.params.id,
      blogDetail: {},
    };
  },
  methods: {
    getBlogDetail() {
      ThongBaoService.getByID(this.id).then((res) => {
        this.blogDetail = res.data;
        console.log(res.data);
      });
    },
  },
  created() {
    this.getBlogDetail();
  },
};
</script>

<style>
</style>