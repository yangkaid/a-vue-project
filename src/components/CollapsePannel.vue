<template>
<div>
  <div class="collapse-item">
			<input type="checkbox" id="collapse1" checked name="collapse" class="collapse-toggle" />
			<label style="display: flex;" for="collapse1">
				<div>第一个collapse</div>
				<img class="not-show" style="width: 20px;height: 20px;" src="http://csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1587021042">
				<img class="show" style="width: 20px;height: 20px;" src="https://img-blog.csdnimg.cn/2019091813595558.png">
			</label>
			<div class="content">
				这个是切换内容<br/>
				这个是切换内容<br/>
				这个是切换内容<br/>
				这个是切换内容<br/>这个是切换内容<br/>这个是切换内容<br/>这个是<br/>切换内容<br/>
				这个是切<br/>换<br/>内容<br/>
			</div>
		</div>
 
		<div class="collapse-item">
			<input type="checkbox" id="collapse2" checked name="collapse" class="collapse-toggle"/>
			<label style="display: flex;" for="collapse2">
				<div>第二个collapse</div>
				<img class="not-show" style="width: 20px;height: 20px;" src="http://csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1587021042">
				<img class="show" style="width: 20px;height: 20px;" src="https://img-blog.csdnimg.cn/2019091813595558.png">
			</label>
			<div class="content">
				这个是切换内容<br/>
				这个是切换内容<br/>
				这个是切换内容<br/>
				这个是切换内容<br/>这个是切换内容<br/>这个是切换内容<br/>这个是<br/>切换内容<br/>
				这个是切<br/>换<br/>内容<br/>
			</div>
		</div>
</div>
</template>
<style>
.collapse-toggle{
	    		display: none;
		 }
		.content{
			max-height: 0px;
			overflow: hidden;
			transition: all .38s;
		}
		.collapse-toggle:checked~.content{
			max-height: 250px;
		}
		.collapse-toggle:checked ~label .show{
			display: none
		}
		.collapse-toggle:not(:checked) ~label .not-show{
			display: none
		}
		.collapse-item{
			margin: 10px;
			border-radius: 10px
		}
</style>
