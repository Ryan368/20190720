<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>

            <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		            <img src="../../pics/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div></router-link></li><!-- 内容展现到home.vue的router-view中 -->
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../pics/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../pics/menu3.png" alt="">
		            <div class="mui-media-body">商品购买</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../pics/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../pics/menu5.png" alt="">
		            <div class="mui-media-body">视频专区</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		           <img src="../../pics/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>


<script>
export default {
   data() {
	   return {
		   lunbotuList: [],
	   }
   },
   created() {
       console.log("lunbotuList-before: ",this.lunbotuList)
        this.getlunbotu()
        // res.body.message简单赋值后，其值发生变化???????
		console.log("lunbotuList: ",this.lunbotuList)
	},
   methods: {
		getlunbotu () {
		   this.$http.get('api/getlunbo')
			   .then((res) => {
				   if (res.body.status === 0){
						console.log(res.body.message)
						this.lunbotuList = res.body.message;
				   }
					else ((res) => console.log('请求失败!'))
                   })
                .catch(() => console.log('获取数据出错!'))
	   }
   }
}
</script>


<style lang="sass" scoped>
    // mintui的轮播图默认高为0，使用时需要手动为其添加height
    .mint-swipe {
        height: 200px;
        img{
            height: 100%;
            width: 100%
        }
    }
    // 在浏览器中找到相关的css，复制过来进行修改
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img {
            height: 60px;
            width: 60px
        }   
    } 
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
        .mui-media-body {
            font-size: 13px;
        }     
    }
    
</style>
