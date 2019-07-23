<template>
    <div class="app-container">
        <!-- 顶部固定区域 -->
        <mt-header fixed title="Ryan's pro"></mt-header>


        <!-- 中间区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		

        <!-- 底部tapbar区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
import {Tabber} from 'mint-ui'
	export default {
	}

</script>


<style>
	.app-container{
		margin-top: 40px;
		margin-bottom: 50px;
		/* 用于解决组件切换动画使顶部和tabbar也移动的问题 */
		overflow-x: hidden;
	}
	/* 添加动画 */
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease
	}
</style>
