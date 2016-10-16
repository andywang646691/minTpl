# minTpl
一个简单的模板引擎

##Usage
```
    //第一步：编写模版。你可以使用一个script标签存放模板，如：
    <script id="demo" type="text/template">
    <h3>{{ this.title }}</h3>
    <ul>
    {{#  for(var i = 0;i<this.list.length;i++) { }}
      <li>
        <span>{{ item.modname }}</span>
        <span>{{ item.alias }}：</span>
        <span>{{ item.site || '' }}</span>
      </li>
    {{# } }}
     
    {{#  if(d.list.length === 0){ }}
      无数据
    {{#  } }} 
    </ul>
    </script>
    //第二步：建立视图:
    <div id="view"></div>
    //第三步：渲染数据:
    var data = {
      "title":"前端工程师常用组件"
      ,"list":[{"modname":"弹出层","value":"layer"},{"modname":"表单","value":"form"}]
    }
    var tplSrc = demo.innerHTML;
    html = minTpl(tplSrc).render(data);
    document.getElementById('view').innerHTML = html
```
