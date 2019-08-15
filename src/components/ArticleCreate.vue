<template>
    <el-form :model="article" label-width="100px" @submit.native.prevent="createArticle">
        <el-form-item label="活动名称">
            <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input type="textarea" v-model="article.body"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">创建文章</el-button>
        </el-form-item>
    </el-form>
</template>
    
<script>
    export default {
        data(){
            return{
                article: {}
            }
        },
        created(){

        },
        methods:{
            createArticle(){
                this.$http.post('articles',this.article).then((res) => {
                    this.$message({
                        message: "创建文章成功",
                        type: "success"
                    })
                    this.$router.push('/articles/index')
                })
            }
        }
    }
</script>