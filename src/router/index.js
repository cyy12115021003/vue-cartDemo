import Vue from 'vue'
import Router from 'vue-router'
import Router1 from '@/components/Router1';
import Router2 from '@/components/Router2';
import Router3 from '@/components/Router3';
import Java from '@/components/page/Java';
import Web from '@/components/page/Web';
Vue.use(Router)

const router = new Router({
	routes: [
	    {
	      path:'/',
	      component:Router1	      
	    },{
	    	path:'/router2',
	    	component:Router2,
	    	redirect:'/router2/java',
	    	children:[{
	    		path:'java',
	    		component:Java
	    	},{
	    		path:'web',
	    		component:Web
	    	}]
	    },{
	    	path:'/router3',
	    	component:Router3	      
	    }
  	]
  
});

export default router
