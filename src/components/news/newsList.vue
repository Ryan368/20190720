<template>
    <div>
        <ul class="mui-table-view" v-for="item in newsList" :key="item.img_url">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src='item.img_url'>
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>{{ item.add_time | dateFormat}}</span>
                                <span>点击：{{ item.click }} 次</span>
                            </p>
						</div>
					</a>
				</li>	
			</ul>
    </div>
</template>



<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getnewslist()
    },
    methods: {
        getnewslist(){
            this.$http.get('api/getnewslist')
                .then(res => {
                    if (res.body.status === 0) {
                        this.newsList = res.body.message
                        console.log("newsList:",this.newsList)
                        Toast('获取数据成功！')
                    }
                    else Toast('获取新闻列表失败！')
                })
        } 
    }
}
</script>



<style lang="sass" scoped>
    .mui-media-body{
        h1{
            font-size: 15px;
        }
    }
    // css3实现两端对齐
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
</style>
