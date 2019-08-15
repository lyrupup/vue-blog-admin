<template>  
    <el-main>
        <el-table :data="articles">
          <el-table-column prop="title" label="文章标题" width="220">
          </el-table-column>
          <el-table-column prop="body" label="文章内容" width="500">
          </el-table-column>
          <el-table-column fixed="right" label="操作" >
            <template slot-scope="scope">
                <el-button @click="editArticle(scope.row._id)" type="text" size="small">编辑</el-button>
                <el-button @click="removeArticle(scope.row._id)"type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
      </el-main>
</template>

<script>
    export default {
        data(){
            return{
                articles: []
            }
        },
        created(){
            this.getArticles()
        },
        methods:{
            getArticles(){
                this.$http.get('articles').then( (res) => {
                    this.articles = res.data
                })
            },
            editArticle(id){
                this.$router.push(`/articles/${id}/edit`)
            },
            removeArticle(id){
                this.$http.delete(`articles/${id}`).then( (res) => {
                    this.$message({
                        message: "删除文章成功",
                        type: "success"
                    })
                    this.getArticles()
                })
            }
        }
    }
</script>