<template>
	<div>
		<div style="width:100%;display: table;">
			<div style="display: table-cell;width:10% ;">
				<span v-if="isSelectAll==false" @click="selectAll()">
					<img src="../assets/car/images/f.svg" />
					全选						
				</span>
				<span v-else="isSelect==true" @click="selectOne()">
					<img src="../assets/car/images/t.svg" />
					全选	
				</span>
			</div>
			<div style="display: table-cell;width:20% ;">商品</div>
			<div style="display: table-cell;width:30% ;">数量</div>
			<div style="display: table-cell;width:15% ;">单价（元）</div>
			<div style="display: table-cell;width:15% ;">金额（元）</div>
			<div style="display: table-cell;width:10% ;">操作</div>
		</div>
		
		<div style="width:100%;display: table;" v-for="(goods,index) in goodList">
			<div style="display: table-cell;width:10% ;">
				<span v-if="goods.select==false" @click="goods.select=!goods.select">
					<img src="../assets/car/images/f.svg" />
				</span>
				<span v-else="goods.select==true" @click="goods.select=!goods.select">
					<img src="../assets/car/images/t.svg" />
				</span>
			</div>
			<div style="display: table-cell;width:20% ;">
				<img src="../assets/car/images/01.png">
				<p>{{goods.name}}</p>
			</div>
			<div style="display: table-cell;width:30% ;">				
				<p>产地:{{goods.location}}</p>  
                <p>规格:{{goods.size}}</p>                   
			</div>
			<div style="display: table-cell;width:15% ;">
				<span class="btn"@click="(goods.num<=1)?1:goods.num--" >-</span>
				<input type="text" class="number" v-model="goods.num" style="text-align: center;"/>
				<span class="btn"@click="goods.num++" >+</span>
			</div>
			<div style="display: table-cell;width:15% ;">${{goods.price}}</div>
			<div style="display: table-cell;width:10% ;"><a class="btn" @click="deleteOne(index)">删除</a></div>
		</div>
			
			
		<p style="float: left;"><a class="btn" @click="deleteGoods()">删除选中商品</a></p>
		<p style="float: right;">您选中了{{getTotal.totalNum}}商品，共计{{getTotal.totalPrice}}元</p>
	</div>
</template>

<script>
	export default{
		name:'child',
		data(){
			return{
				select:false,
				goodList:[
					{  
				        name:'一碗香',  				         
				        location:'南京1',  
				        size:'小碗',  				      				     
				        price:3,  
				        num:2  
				    },  
				    {  
				        name:'两碗香',  
				        location:'南京2',  
				        size:'大碗',  
				        price:3,  
				        num:1				  
				    },  
				    {  
				        name:'三碗香',  
				        location:'南京3',  
				        size:'中碗',  
						price:4,  
				        num:4 
				    },  
				    {  
				        name:'四碗香',  
				        location:'南京4',  
				        size:'小碗',  
				        price:2,  
				        num:3
				    }
				]
			}
		},
		filters:{
//			formatMoney:function(value){
//				return "￥"+value.toFixed(2)
//			}
		},
		methods:{
			selectAll:function(){
				this.goodList.forEach(function(value){
					value.select=true;
				});				
			},
			selectOne:function(){
				for(var i=0;i<this.goodList.length;i++){
					this.goodList[i].select=false;
				}
			},
			deleteOne:function(index){
				this.goodList.splice(index,1);
			},
			deleteGoods:function(){			
				this.goodList = this.goodList.filter(function(item){						
					return !item.select;
				})
				
			}			
		},
		computed:{
			isSelectAll:function(){
				return this.goodList.every(function(val){
					return val.select;
				})
			},
			getTotal:function(){
				var _goodList = this.goodList.filter(function(val){
					return val.select;
				}),
				totalPrice = 0;
				for(var i=0;i<_goodList.length;i++){
					totalPrice+=_goodList[i].num*_goodList[i].price;
				}
				return {totalNum:_goodList.length,totalPrice:totalPrice}
			}
		},
		mounted:function(){
			var _this = this;
			this.goodList.map(function(goods){
				_this.$set(goods,'select',false)
			})
		}
	}
</script>

<style>
	img{width:60%;}
	.left img{width:60%;float: right;}
	.btn{width: 20px;height: 20px;background-color: #0000FF;color: #fff;}	 
    .number{  
        width:20px;  
    }  
</style>