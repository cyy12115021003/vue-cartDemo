<template>
	<div>		
		<NavList/>
		<div class="left">
			<p>课程</p>
			<ul>
				<li><router-link to='/router2/java'>java</router-link></li>
				<li><router-link to='/router2/web'>前端</router-link></li>
			</ul>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import NavList from '@/components/NavList';
	export default{
		name:'router2',
		components:{
			NavList
		}
	}
</script>

<style>
	.right,.left{float: left;}
	.right{margin-left: 50px;}
</style>