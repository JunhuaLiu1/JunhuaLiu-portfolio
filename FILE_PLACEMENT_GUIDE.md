# 文件放置指南

## 需要放置的文件

### 1. YOLO-DFMnet项目图片 ✅ 已创建占位文件
- **文件名**: `1.png`
- **放置位置**: `public/images/1.png`
- **说明**: YOLO-DFMnet项目的展示图片
- **状态**: 已创建占位文件，请替换为您的实际图片

### 2. YOLO-DFMnet项目PDF文档 ✅ 已创建占位文件
- **文件名**: `yolo-dfmnet.pdf`
- **放置位置**: `public/documents/yolo-dfmnet.pdf`
- **说明**: YOLO-DFMnet项目的详细文档，点击"查看详情"按钮将在新标签页中打开此文件
- **状态**: 已创建占位文件，请替换为您的实际PDF文档

### 3. BOC Chat项目图片 ✅ 已创建占位文件
- **文件名**: `2.png`
- **放置位置**: `public/images/2.png`
- **说明**: BOC Chat聊天应用的界面截图或项目展示图片
- **状态**: 已创建占位文件，请替换为您的实际图片

### 4. JunhuaLiu Portfolio项目图片 ✅ 文件已存在
- **文件名**: `3.png`
- **放置位置**: `public/images/3.png`
- **说明**: 个人作品集网站的界面截图或项目展示图片
- **状态**: 文件已存在，可更新为更好的项目图片

## 已创建的文件夹结构

```
public/
├── images/           # 图片资源文件夹
│   ├── profile.jpg   # 现有的个人头像
│   ├── 1.png         # ← YOLO-DFMnet项目图片
│   ├── 2.png         # ← BOC Chat项目图片
│   └── 3.png         # ← JunhuaLiu Portfolio项目图片
├── documents/        # PDF文档文件夹
│   └── yolo-dfmnet.pdf  # ← YOLO-DFMnet项目PDF文档
└── ...
```

## 功能说明

### 第一个项目 - YOLO-DFMnet
- 项目图片：`public/images/1.png`
- 点击"查看详情"：打开PDF文档 (`/documents/yolo-dfmnet.pdf`)

### 第二个项目 - BOC Chat
- 项目图片：`public/images/2.png`
- 点击"查看项目"：跳转到GitHub仓库 (`https://github.com/JunhuaLiu1/boc_chat`)

### 第三个项目 - JunhuaLiu Portfolio
- 项目图片：`public/images/3.png`
- 点击"查看项目"：跳转到GitHub仓库 (`https://github.com/JunhuaLiu1/JunhuaLiu-portfolio`)

## 注意事项

1. ✅ 文件夹结构已创建完成
2. ✅ 占位文件已放置到正确位置
3. 🔄 请替换占位文件为您的实际文件：
   - 将您的YOLO-DFMnet项目图片重命名为 `1.png`，然后覆盖 `public/images/1.png`
   - 将您的BOC Chat项目图片重命名为 `2.png`，然后覆盖 `public/images/2.png`
   - 将您的YOLO-DFMnet PDF文档重命名为 `yolo-dfmnet.pdf`，然后覆盖 `public/documents/yolo-dfmnet.pdf`
4. 文件替换后需要重启开发服务器才能生效（`npm run dev`）

## 如何替换文件

### 方法1：直接覆盖
1. 找到您的项目图片文件
2. 重命名为对应的文件名（`2.png` 或 `3.png`）
3. 复制到对应的文件夹，覆盖现有的占位文件

### 方法2：使用命令行
```bash
# 复制YOLO-DFMnet图片文件（替换 YOUR_IMAGE_PATH 为您的图片路径）
copy "YOUR_IMAGE_PATH\yolo-image.png" "public\images\1.png"

# 复制BOC Chat图片文件
copy "YOUR_IMAGE_PATH\boc-chat-image.png" "public\images\2.png"

# 复制PDF文件（替换 YOUR_PDF_PATH 为您的PDF路径）
copy "YOUR_PDF_PATH\yolo-paper.pdf" "public\documents\yolo-dfmnet.pdf"
```

## 项目展示效果

完成文件替换后，您的项目展示模块将包含：

1. **YOLO-DFMnet项目**：展示车辆检测算法的研究成果
2. **BOC Chat项目**：展示聊天应用的开发能力
3. **JunhuaLiu Portfolio项目**：展示个人作品集网站的设计和开发技能

每个项目都有独立的图片展示和链接功能，为访问者提供清晰的项目概览。