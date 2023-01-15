# Monk 业务组件库

### 提供一个业务组件库在编辑器和 H5 页面中都可以使用
该组件包导出两种格式的模块，供不同情况下使用

```javascript
  // umd 格式
  "main": "dist/monk-components.umd.js",
  // es modules 格式
  "module": "dist/monk-components.esm.js",
```

## 安装和使用

```bash
// 安装
npm install monk-components --save
```

```javascript
import Monk from 'monk-components'
// 加载样式
import 'monk-components/dist/monk-components.css'

const app = createApp(App)
app.use(Monk)

app.mount('#app')
```