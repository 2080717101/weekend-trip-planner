# 📋 部署指南

本项目是纯静态网页，可以部署到任何静态网站托管服务。以下是几种常见方案：

## 方案一：GitHub Pages（推荐，免费）

### 步骤

1. **创建 GitHub 仓库**
   ```
   https://github.com/new
   ```
   - 仓库名称：如 `weekend-trip-planner`
   - 选择 **Public**（免费）

2. **上传文件**
   - 将 `index.html`、`style.css`、`script.js` 三个文件上传到仓库根目录
   - 可以直接拖拽上传，或使用 GitHub Desktop

3. **启用 GitHub Pages**
   - 进入仓库 Settings
   - 找到 "Pages" 选项卡
   - Source 选择 `main` 分支
   - 点击 Save

4. **获取访问地址**
   ```
   https://你的用户名.github.io/weekend-trip-planner/
   ```

### 优点
- ✅ 完全免费
- ✅ 自动部署
- ✅ 永久链接
- ✅ 支持自定义域名

### 缺点
- ⚠️ 需要 GitHub 账号
- ⚠️ 部署需要几分钟

---

## 方案二：Netlify（快速部署）

### 步骤

1. **创建 Netlify 账号**
   ```
   https://app.netlify.com/
   ```

2. **连接 GitHub**
   - 点击 "Add new site"
   - 选择 "Import" -> "GitHub"
   - 授权 Netlify 访问您的仓库

3. **部署**
   - 选择仓库
   - 点击 "Deploy site"

4. **获取访问地址**
   - Netlify 会自动提供一个随机域名
   - 可以添加自定义域名

### 优点
- ✅ 部署极快（几秒钟）
- ✅ 自动构建
- ✅ 免费额度足够使用

---

## 方案三：Vercel（现代化部署）

### 步骤

1. **创建 Vercel 账号**
   ```
   https://vercel.com/
   ```

2. **导入项目**
   - 点击 "+" 新建项目
   - 连接 GitHub
   - 选择仓库

3. **部署**
   - Vercel 会自动部署

4. **获取访问地址**
   - Vercel 提供默认域名

### 优点
- ✅ 自动化程度高
- ✅ 免费额度足够
- ✅ 支持边缘计算

---

## 方案四：自己的服务器（完全控制）

如果您有自己的服务器（VPS），可以使用 Nginx 部署：

### Docker 方式

```bash
# 创建 docker-compose.yml
cat > docker-compose.yml << EOF
version: '3'
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - .:/usr/share/nginx/html
EOF

# 创建 nginx.conf
cat > nginx.conf << EOF
events {}
http {
    server {
        listen 80;
        server_name _;

        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
EOF

# 启动
docker-compose up -d
```

### Nginx 方式

```bash
# 安装 nginx
sudo apt update
sudo apt install nginx

# 配置
cat > /etc/nginx/sites-available/trip << EOF
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/trip;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

# 启用
sudo ln -s /etc/nginx/sites-available/trip /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔐 关于 API Key

当前使用的高德地图 API Key：
```
b2831541728b9a9c50485e035d8a3516
```

此 Key 已授权所有域名（*），所以部署到任何平台都能正常工作。

### 修改 Key

如果您想使用自己的 Key，需要修改 `index.html` 中的两行：

```html
<!-- 找到这两行 -->
<script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=YOUR_KEY"></script>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=YOUR_KEY&plugin=AMap.Driving,AMap.Walking,AMap.PlaceSearch"></script>
```

---

## 📊 性能优化

### 启用 Gzip 压缩

在 Nginx 配置中添加：

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

### 缓存静态文件

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## 🔒 HTTPS 配置

### 使用 Let's Encrypt（免费）

```bash
sudo apt install certbot python3-certbot-nginx

# 申请证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo systemctl enable certbot.timer
```

---

## 📱 自定义域名

1. 购买域名（如阿里云、腾讯云）
2. 添加 DNS 记录指向您的服务器
3. 配置反向代理（Nginx）
4. 申请 SSL 证书

---

## 🧪 测试部署

### 本地测试

```bash
# 使用 Python
python3 -m http.server 8000

# 访问
http://localhost:8000
```

### 使用 curl 测试

```bash
curl -I https://your-domain.com
```

---

## 📈 监控和日志

### Nginx 日志

```nginx
access_log /var/log/nginx/trip-access.log;
error_log /var/log/nginx/trip-error.log;
```

### 分析工具

可以集成 Google Analytics 或百度统计：

```html
<!-- 在 </body> 之前添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🚨 常见问题

### Q: 部署后地图不显示？
A: 检查 API Key 是否已授权当前域名

### Q: 路线规划失败？
A: 可能是网络问题，检查浏览器控制台

### Q: 如何修改样式？
A: 编辑 `style.css` 文件

### Q: 如何添加新目的地？
A: 编辑 `script.js` 中的 `DESTINATIONS` 数组

---

## 📚 更多资源

- [高德地图 JS API 文档](https://lbs.amap.com/api/javascript-api/v2/)
- [GitHub Pages 文档](https://pages.github.com/)
- [Netlify 文档](https://docs.netlify.com/)

---

## 💡 提示

- 部署前先在本地测试
- 保留备份文件
- 记录部署步骤
- 定期检查服务器状态
