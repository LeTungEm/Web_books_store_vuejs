<template>
  <CHeader />
  <div class="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
    <BlogItem
      :blogName="blog.tieude"
      :content="blog.noidung"
      :createDate="blog.ngaydang"
      :image="require(`../assets/images/blogs/${blog.photo}`)"
      v-for="blog in blogs"
      :key="blog.name"
    />
  </div>
  <CFooter />
</template>

<script>
import CHeader from "../components/UI/Header/Header.vue";
import CFooter from "../components/UI/Footer/Footer.vue";
import BlogItem from "../components/User/Blogs/BlogItem.vue";
import ThongBaoService from '@/service/ThongBaoService';

export default {
  name: "BlogView",
  components: {
    CHeader,
    CFooter,
    BlogItem,
  },
  data() {
    return {
      blogs: [],
      cart: [],
    };
  },
  methods: {
    getAllBlogs(){
      ThongBaoService.getAll().then(res => {
        this.blogs = res.data;
      })
    }
  },
  created() {
    this.getAllBlogs();
  },
};
</script>

<style></style>