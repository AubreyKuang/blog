import{_ as l,V as r,W as a,X as e,Y as n,$ as d,a0 as i,E as t}from"./framework-91a010c2.js";const v={},u=i('<h1 id="一、项目介绍" tabindex="-1"><a class="header-anchor" href="#一、项目介绍" aria-hidden="true">#</a> 一、项目介绍</h1><blockquote><p>利用vite + vue3技术栈仿掘金官网首页实现无限滚动列表，Markdown解析、自动生成toc目录、toc自动滚动等功能。</p><p>项目服务地址-必须</p><p>Github 地址，权限设置为 public- 必须</p></blockquote><h1 id="二、项目分工" tabindex="-1"><a class="header-anchor" href="#二、项目分工" aria-hidden="true">#</a> 二、项目分工</h1><table><thead><tr><th><strong>团队成员</strong></th><th><strong>主要贡献</strong></th></tr></thead><tbody><tr><td>刘大维</td><td>负责开发post页面，实现markdown解析toc目录、自动高亮</td></tr><tr><td>况咏蓓</td><td>参与开发post页面，实现markdown解析toc目录</td></tr><tr><td>钱霖奕</td><td>负责开发，参与首页顶部导航栏和侧边栏的设计及后端的开发</td></tr><tr><td>常智凯</td><td>负责选型，参与整体布局和路由编写，完成首页信息流相关组件开发，完善首页其它组件功能</td></tr></tbody></table><h1 id="三、项目实现" tabindex="-1"><a class="header-anchor" href="#三、项目实现" aria-hidden="true">#</a> 三、项目实现</h1><h3 id="_3-1-技术选型与相关功能实现" tabindex="-1"><a class="header-anchor" href="#_3-1-技术选型与相关功能实现" aria-hidden="true">#</a> 3.1 技术选型与相关功能实现</h3><p>前端：html, css, javascript, Vue3, element-ui, Vue-cli</p><p>前后端交互：axios</p><p>后端：python, flask</p><p><strong>要解决的问题1：整体布局分析</strong></p><p>分析首页布局以及文章展示页布局，分割组件开发，一方面便于分工协作，另一方面可以抽取公共组件和功能减少代码冗余，避免重复开发。利用vueRoute进行页面布局管理，实现组件使用最大化。</p><p><strong>要解决的问题2：细节效果分析</strong></p><p>力求模仿官网达到最佳效果，需要对官网的每一个细节功能进行分析，如导航栏部分会跟随文档上下滚动时进行展示或隐藏；文章列表部分，当鼠标悬停时选中的条目颜色发生改变且在右上角出现关闭按钮，悬停在作者名称处将展示作者详情，骨架屏展示等。需要设置动态类名，以及相应的CSS设置，包括display属性、visible属性、transform属性等。骨架屏通过arco-design实现。</p><p><strong>要解决的问题3：无限滚动列表</strong></p>',14),o={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight#%E5%88%A4%E6%96%AD%E5%85%83%E7%B4%A0%E6%98%AF%E5%90%A6%E6%BB%9A%E5%8A%A8%E5%88%B0%E5%BA%95",target:"_blank",rel:"noopener noreferrer"},c=i(`<p><strong>要解决的问题4：markdown解析</strong></p><p>采用marked.js实现文章解析，marked 是一个 JavaScript 编写的Markdown 解析和编译器，可以快速地编译大块的Markdown文本，并且已完全兼容客户端浏览器。对于组件的原生渲染，先把markdown解析成tokens，再交由html的renderer处理。</p><p><strong>要解决的问题5：<strong><strong>文章</strong></strong>toc自动生成、toc目录随页面滚动自动高亮</strong></p><ol><li><p>按照文章先后顺序解析元素，将内容数据记录到数组中，并由此生成toc目录。</p></li><li><p>监控scroll，获取元素距离顶部的距离，并根据页面的滚动方向，从而判断浏览位置，从而对toc目录中的对应元素高亮。</p></li></ol><p><strong>要解决的问题6：Markdown文章渲染与代码高亮</strong></p><p>采用highlight.js进行代码高亮，创建v- highlight全局指令，从而实现在vue组件中应用代码高亮。</p><p><strong>要解决的问题7：后端数据与<strong><strong>前端</strong></strong>接口设计</strong></p><ol><li><p>后端语言和框架选择：Python + Flask，轻量化与模块化，可拓展性强</p></li><li><p>前后端分离：Vue 跨域配置，Flask 使用 flask_cors 开放跨域限制</p></li><li><p>前后端数据交互：使用 axios 进行数据交互，通过 POST 方法在 request body 中传递参数</p></li><li><p>后端功能：注册，登录，文章列表，新建文章，删除文章等</p></li></ol><h3 id="_3-2-架构设计" tabindex="-1"><a class="header-anchor" href="#_3-2-架构设计" aria-hidden="true">#</a> 3.2 架构设计</h3><h3 id="_3-3-项目代码介绍" tabindex="-1"><a class="header-anchor" href="#_3-3-项目代码介绍" aria-hidden="true">#</a> 3.3 项目代码介绍</h3><ol><li><h5 id="前端部分" tabindex="-1"><a class="header-anchor" href="#前端部分" aria-hidden="true">#</a> 前端部分</h5></li><li><p>项目文件</p></li></ol><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>JUEJIN\\SRC
│  App.vue
│  main.ts
│  style.css
├─components
│        AppTopNav.vue --顶部导航栏
│        AppSideBar.vue --侧边栏
│   
│  
├─views
│  │
│  ├─home
│  │    AuthorInfo.vue --作者相关信息
│  │    ListNav.vue --文章列表导航栏
│  │    List.vue --文章列表
│  │    Login.vue --登录
│  │    Register.vue --注册
│  │
│  ├─post
│  │    AuthorInfo.vue --作者简要信息
│  │    Aside.vue --文章页侧边栏
│  │    Article.vue --文章展示
│  │    Catalog.vue -- toc目录
│  │    Content.vue -- Markdown文章显示区
│  │    NewArticle.vue -- 新建文章页面
│  │    ShowPost.vue -- 文章列表
│  │
│  └─Layout.vue --总体布局
│
├─fake-api
│      Article.ts --测试用文章数据
│      index.js --测试用首页列表数据
│
├─router
│      index.js --路由模块
│
└─request
        index.ts --请求模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Vue 跨域配置</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 添加跨域
server: {
  open: false, // 自动打开
  base: &quot;./ &quot;, // 生产环境路径
  proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    // 正则表达式写法
    &#39;^/api&#39;: {
      target: &#39;http://localhost:5000&#39;, // 后端服务实际地址
      changeOrigin: true, //开启代理
      rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>通过 axios 进行前后端数据交互示例：前端获取后端数据库的所有文章</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import axios from &quot;axios&quot;;

export default {
  name: &quot;ShowPost&quot;,
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios
        .post(
            &quot;/api/user/post&quot;,
        )
        .then((response) =&gt; {
          console.log(response)
          this.data = response.data
        });
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),m={href:"https://juejin.cn/post/6952762391566221343%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-TypeScript line-numbers-mode" data-ext="TypeScript"><pre class="language-TypeScript"><code>setup() {
    //滚动事件处理函数
    const animation = ref(true);
    function scrollHandle() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.body.clientHeight;

      //距离=总高-滚动距离-可视区高
      let distance = scrollHeight - scrollTop - clientHeight;
      if(distance &lt; 50) {
        loadMore()
        // console.log( distance );
      }
    }

    onMounted(() =&gt; {
      //组件挂载时，添加scroll监听
      window.addEventListener(&quot;scroll&quot;, scrollHandle, false);
      // console.log(&#39;onMounted&#39;);
    });
    onUnmounted(() =&gt; {
      //组件卸载时，停止监听
      window.removeEventListener(&quot;scroll&quot;, scrollHandle, false);
    });
    const datas = ref([])
    let readyForLoad = true; //默认允许加载一次
    loadMore()
    // 内容加载函数
    function loadMore() {
      if (readyForLoad) {
        //需要加载才进来，防止重复
        readyForLoad = false; //进来了就&quot;锁上&quot;

        getArticles().then((res) =&gt; {
          datas.value = [...datas.value, ...res.data.articles];
          // console.log(datas.value);
          readyForLoad = true; //加载完了才&quot;开锁&quot;，允许再次触发
        });
      }
    }
    let isActive = ref(false); //控制屏蔽标签下拉激活
    return {
      datas, //返回出去，以便在template里使用
      isActive,
      AuthorInfo,
      animation,
    };
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><h5 id="后端部分" tabindex="-1"><a class="header-anchor" href="#后端部分" aria-hidden="true">#</a> 后端部分</h5></li><li><p>初始化</p></li></ol><p>创建工厂函数，在启动文件里直接调用生成 Flask App</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 工厂函数
def create_app(config_name=None):
    if config_name is None:
        config_name = os.getenv(&#39;FLASK_CONFIG&#39;, &#39;development&#39;)
    app = Flask(&#39;juejin&#39;)
    CORS(app, supports_credentials=True)  # 开放跨域限制
    app.config.from_object(config[config_name])
    register_extensions(app)  # 注册拓展（拓展初始化）
    register_commands(app)  # 注册自定义 shell 命令
    register_blueprints(app)  # 注册蓝本
    return app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册 shell 命令，方便快速生成数据库数据</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 注册命令
def register_commands(app):
    #  删除表和数据库后进行重建
    @app.cli.command()
    @click.option(&#39;--drop&#39;, is_flag=True, help=&#39;Create after drop.&#39;)
    def initdb(drop):
        #  初始化数据库
        if drop:
            click.confirm(&#39;This operation will delete the database, do you want to continue?&#39;, abort=True)
            db.drop_all()
            click.echo(&#39;Drop tables.&#39;)
        db.create_all()
        click.echo(&#39;Initialized database.&#39;)

    @app.cli.command()
    @click.option(&#39;--user&#39;, default=10, help=&#39;Quantity of users, default is 10.&#39;)
    @click.option(&#39;--category&#39;, default=10, help=&#39;Quantity of categories, default is 10.&#39;)
    @click.option(&#39;--post&#39;, default=5, help=&#39;Quantity of posts, default is 50.&#39;)
    def forge(user, category, post):
        # 生成虚拟数据
        from src.fakes import fake_categories, fake_posts, fake_user

        db.drop_all()
        db.create_all()

        click.echo(&#39;Generating %d users...&#39; % user)
        fake_user(user)

        click.echo(&#39;Generating %d categories for every user...&#39; % category)
        fake_categories(category)

        click.echo(&#39;Generating %d posts for every user...&#39; % post)
        fake_posts(post)

        click.echo(&#39;Done.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>虚拟数据生成</li></ol><p>使用 faker 生成虚拟用户、分类和文章数据，用以填充界面和检查后端功能</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>fake = Faker(&#39;zh-CN&#39;)


# 生成虚拟用户信息
def fake_user(count=10):
    for i in range(count):
        user = User(
            username=fake.user_name()
        )
        user.set_password(&#39;12345678&#39;)
        db.session.add(user)
        try:
            db.session.commit()
        except IntegrityError:
            db.session.rollback()


# 生成虚拟分类
def fake_categories(count=10):
    for i in range(count):
        category = Category(name=fake.word())
        db.session.add(category)
        try:
            db.session.commit()
        except IntegrityError:
            db.session.rollback()


# 生成虚拟文章
def fake_posts(count=5):
    for i in range(User.query.count()):
        for j in range(count):
            post = Post(
                title=fake.sentence(),
                body=fake.text(2000),
                category=Category.query.get(random.randint(1, Category.query.count())),
                user=User.query.get(i + 1)
            )
            db.session.add(post)
        db.session.commit()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>数据库</li></ol><p>建立用户、分类和文章数据库模型， 设置外键并建立数据库对象之间的关系</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20))
    password_hash = db.Column(db.String(128))
    posts = db.relationship(&#39;Post&#39;, back_populates=&#39;user&#39;)  # 建立用户和文章的一对多关系

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def validate_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return dict(id=self.id, username=self.username)


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)

    # 建立分类和文章的一对多关系
    posts = db.relationship(&#39;Post&#39;, back_populates=&#39;category&#39;)

    def to_dict(self):
        return dict(id=self.id, name=self.name)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)

    category_id = db.Column(db.Integer, db.ForeignKey(&#39;category.id&#39;))
    category = db.relationship(&#39;Category&#39;, back_populates=&#39;posts&#39;)

    user_id = db.Column(db.Integer, db.ForeignKey(&#39;user.id&#39;))
    user = db.relationship(&#39;User&#39;, back_populates=&#39;posts&#39;)

    def to_dict(self):
        return dict(id=self.id, title=self.title, body=self.body,
                    timestamp=self.timestamp.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;), category=self.category.to_dict(),
                    user=self.user.to_dict())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>配置</li></ol><p>进行 Flask 拓展的相关配置，以及数据库连接的 URL 等</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class BaseConfig(object):
    SECRET_KEY = os.getenv(&#39;SECRET_KEY&#39;, &#39;secret_string&#39;)
    # 禁止转译中文
    JSON_AS_ASCII = False
    # 数据库
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    USERNAME = os.getenv(&#39;DATABASE_USERNAME&#39;)
    PASSWORD = os.getenv(&#39;DATABASE_PASSWORD&#39;)
    HOST = os.getenv(&#39;DATABASE_HOST&#39;)
    PORT = os.getenv(&#39;DATABASE_PORT&#39;)
    NAME = os.getenv(&#39;DATABASE_NAME&#39;)

class DevelopmentConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = &#39;mysql+pymysql://{}:{}@{}:{}/{}&#39;.format(
        BaseConfig.USERNAME, BaseConfig.PASSWORD, BaseConfig.HOST, BaseConfig.PORT, BaseConfig.NAME
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>用户部分：获取分类，获取文章，新建文章，删除文章</li></ol><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>user_bp = Blueprint(&#39;user&#39;, __name__)


@user_bp.route(&#39;/category&#39;, methods=[&#39;GET&#39;, &quot;POST&quot;])
def get_category():
    response = {}
    categorys = [_.name for _ in Category.query.all()]
    response[&#39;category&#39;] = categorys
    return jsonify(response)


@user_bp.route(&#39;/post&#39;, methods=[&#39;GET&#39;, &quot;POST&quot;])
def get_post():
    response = {}
    posts = {}
    for _ in Post.query.all():
        posts.update({_.id: [_.title, _.category.name, _.body]})
    response[&#39;post&#39;] = posts
    return jsonify(response)


# 新建文章
@user_bp.route(&#39;/post/new&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])
def new_post():
    user = User.query.get(1)
    title = request.form.get(&#39;title&#39;)
    category = Category.query.filter_by(name=request.form.get(&#39;category&#39;)).first()
    body = request.form.get(&#39;body&#39;)
    post = Post(title=title, body=body, category=category, user=user)
    db.session.add(post)
    db.session.commit()
    response = {&#39;status&#39;: &#39;success&#39;}
    return jsonify(response)


# 删除文章
@user_bp.route(&#39;/post/&lt;int:post_id&gt;/delete&#39;, methods=[&#39;POST&#39;])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    response = {&#39;status&#39;: &#39;success&#39;}
    return jsonify(response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>认证部分：注册、登录</li></ol><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>auth_bp = Blueprint(&#39;auth&#39;, __name__)


@auth_bp.route(&#39;/login&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])
def login():
    username = request.form.get(&#39;username&#39;)
    password = request.form.get(&#39;password&#39;)
    user = User.query.filter_by(username=username).first()
    if user:
        if username == user.username and user.validate_password(password):
            response = {&#39;status&#39;: &#39;success&#39;}
            return jsonify(response)
        else:
            response = {&#39;status&#39;: &#39;failed&#39;, &#39;description&#39;: &#39;密码错误&#39;}
            return jsonify(response)
    else:
        response = {&#39;status&#39;: &#39;failed&#39;, &#39;description&#39;: &#39;账户不存在&#39;}
        return jsonify(response)


@auth_bp.route(&#39;/register&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])
def register():
    username = request.form.get(&#39;username&#39;)
    password = request.form.get(&#39;password&#39;)
    password2 = request.form.get(&#39;confirm-password&#39;)
    if password != password2:
        response = {&#39;status&#39;: &#39;failed&#39;, &#39;description&#39;: &#39;密码不匹配&#39;}
        return jsonify(response)
    user = User(username=username)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    response = {&#39;status&#39;: &#39;success&#39;}
    return jsonify(response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、测试结果" tabindex="-1"><a class="header-anchor" href="#四、测试结果" aria-hidden="true">#</a> 四、测试结果</h1><blockquote><p>建议从功能测试和性能测试两部分分析，其中功能测试补充测试用例，性能测试补充性能分析报告、可优化点等内容。</p></blockquote><ol><li>前端部分</li></ol><p>首页无限流</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/(null)" alt="img" loading="lazy"></p><p>首页导航自动隐藏/展现</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/(null)-20220822204440728.(null)" alt="img" loading="lazy"></p><p>首页列表部分弹出框效果</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/(null)-20220822204441283.(null)" alt="img" loading="lazy"></p><ol><li>后端部分</li></ol><p>2.1 功能测试</p><table><thead><tr><th><strong>测试用例编号</strong></th><th><strong>测试功能</strong></th><th><strong>测试用例</strong></th><th><strong>预期结果</strong></th><th><strong>测试结果</strong></th></tr></thead><tbody><tr><td>2.1.1</td><td>注册</td><td>Username: testPassword: 123456Confirm Password: 12345</td><td>密码不匹配</td><td>通过</td></tr><tr><td>2.1.2</td><td>注册</td><td>Username: testPassword: 123456Confirm Password: 123456</td><td>注册成功，数据库存入该用户信息</td><td>通过</td></tr><tr><td>2.1.3</td><td>登录</td><td>Username: testActual Password: 123456Input Password: 12345</td><td>密码错误</td><td>通过</td></tr><tr><td>2.1.4</td><td>登录</td><td>Inexistent Username: faker</td><td>用户不存在</td><td>通过</td></tr><tr><td>2.1.5</td><td>登录</td><td>Username: testActual Password: 123456Input Password: 123456</td><td>登录成功，返回 success</td><td>通过</td></tr><tr><td>2.1.6</td><td>获取分类</td><td>前端调用后端接口获取数据库中的所有分类名</td><td>将分类名存入 list 中以json 形式封装返回</td><td>通过</td></tr><tr><td>2.1.7</td><td>获取文章数据</td><td>前端调用后端接口获取数据库中的所有文章信息，包括标题，分类和内容</td><td>将文章信息存入 dict 中以 json形式封装返回</td><td>通过</td></tr><tr><td>2.1.8</td><td>新建文章</td><td>前端向后端传入文章表单数据表单形式如下Title: xxxCategory: xxxBody: xxx</td><td>新建文章成功，数据库存入文章数据</td><td>通过</td></tr><tr><td>2.1.9</td><td>删除文章</td><td>点击删除按钮</td><td>删除文章成功，文章列表的相关文章信息消失</td><td>通过</td></tr></tbody></table><p>2.2 性能测试（未做）</p><h1 id="五、demo-演示视频-必填" tabindex="-1"><a class="header-anchor" href="#五、demo-演示视频-必填" aria-hidden="true">#</a> 五、Demo 演示视频 （必填）</h1><p>暂时无法在飞书文档外展示此内容</p><h1 id="六、项目总结与反思" tabindex="-1"><a class="header-anchor" href="#六、项目总结与反思" aria-hidden="true">#</a> 六、项目总结与反思</h1><blockquote><ol><li>目前仍存在的问题</li></ol><p>前端部分：</p><p>首页右侧的侧边栏，在往下滑动后先消失再生成的逻辑没有太厘清，暂时没有进行实现。</p><p>首页部分组件抽离不清晰，文章item应该独立抽离成组件</p><p>首页导航栏隐藏和无限滚动有部分对页面位置监听的处理函数，未能抽象为单独工具函数</p><p>vite在开发时不报错，构建时报错</p><p>后端部分：</p><p>（1）登录时未添加验证（验证码或邮箱）</p><p>（2）新建文章功能未添加 markdown 实时渲染与编辑器插件</p><p>（3）只做了简易后端，可拓展功能还有很多（类博客平台）</p><ol><li><p>已识别出的优化项</p></li><li><p>架构演进的可能性</p></li><li><p>项目过程中的反思与总结</p></li></ol><p>钱：第一次尝试前后端分离开发，尚不熟练，在前后端互传数据时遇到了很多阻力，由于时间原因也仅搭建了简易后端。如上所述，项目还有很多地方可以优化，还有很多功能尚未拓展。但在一周的开发学习过程中，本人切实体会到了前后端分离的优点（代码互不干扰开发效率高，后端只用关心接口交互等），也对 Vue 组件开发有了更深的理解和感悟，今后会多学习一些前后端分离的项目，努力解决和总结每次开发过程中遇到的问题，避免今后重复踩坑。</p><p>常：这次使用Vue模仿掘金官网，学习了许多新的知识点，比如第一次使用vite开发，发现和webpack中就有一些设置是不一样的。同时，通过团队合作开发提高了与队友协作交流的能力。</p></blockquote><h1 id="七、其他补充资料-选填" tabindex="-1"><a class="header-anchor" href="#七、其他补充资料-选填" aria-hidden="true">#</a> 七、其他补充资料（选填）</h1>`,37);function p(g,h){const s=t("ExternalLinkIcon");return r(),a("div",null,[u,e("p",null,[n("首页列表的无限滚动，关键在于合适的时机请求数据并展示数据，数据请求时机可以通过滚动条距离页面底部的距离确定，距离的计算参考MDN关于Element.scrollHeight属性，有"),e("a",o,[n("判断元素是否滚动到底"),d(s)]),n("的方案，在vue中进行一定封装方便使用。当列表滚动到底时，请求数据并将得到的新数据添加至总数据的尾部，vue在虚拟DOM中比较后将只渲染新数据部分的列表。")]),c,e("ol",null,[e("li",null,[n("首页无限流（参考MDN和"),e("a",m,[n("https://juejin.cn/post/6952762391566221343）"),d(s)])])]),b])}const _=l(v,[["render",p],["__file","掘金官网.html.vue"]]);export{_ as default};
