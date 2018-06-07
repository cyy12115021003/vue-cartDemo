<template>
	<div>		
		<ul>
			<li><router-link :to="{path:'/'}">首页</router-link></li>
			<li><router-link :to="{path:'/router2'}">课程介绍</router-link></li>
			<li><router-link :to="{path:'/router3'}">专家</router-link></li>
		</ul>
		
    </div>
</template>

<script>
	export default{
		name:"navlist",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>	
	ul li{display: inline-block;margin: 0 20px;font-weight: 800;}
</style>