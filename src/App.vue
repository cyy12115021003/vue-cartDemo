<template>
  <div id="app">  	
  		
  		<Child/>
  </div>  
</template>

<script>
import Child from '@/components/Child';
export default {
		name:'app',
		data(){
			return{
				
			}
		},
		components:{
			 Child
		},
		methods:{
			
		}
}
</script>

<style>
	.pstyle{text-align: center;color: red;}
</style>
