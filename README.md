# Components UI Vue.js

[![npm version](https://img.shields.io/npm/v/components-ui-vuejs-test.svg)](https://www.npmjs.com/package/components-ui-vuejs-test)
[![License](https://img.shields.io/npm/l/components-ui-vuejs-test.svg)](https://github.com/your-username/components-ui-vuejs-test/blob/main/LICENSE)

Thư viện UI components dành cho Vue.js 3 được xây dựng với TypeScript và Vite.

## 🚀 Tính năng

- ✅ Hỗ trợ Vue 3 + TypeScript
- ✅ Tree-shaking friendly
- ✅ ES modules và CommonJS
- ✅ Styled components với CSS scoped
- ✅ Dễ dàng tùy chỉnh

## 📦 Cài đặt

### NPM

```bash
npm install components-ui-vuejs-test
```

### Yarn

```bash
yarn add components-ui-vuejs-test
```

### PNPM

```bash
pnpm add components-ui-vuejs-test
```

## 🔧 Cách sử dụng

### Cài đặt toàn bộ plugin (Recommended)

```javascript
// main.js hoặc main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ComponentsUI from 'components-ui-vuejs-test'

const app = createApp(App)
app.use(ComponentsUI)
app.mount('#app')
```

Sau đó sử dụng trong template:

```vue
<template>
  <div>
    <LearnVueButton>Click me!</LearnVueButton>
  </div>
</template>
```

### Import từng component (Tree-shaking)

```vue
<template>
  <div>
    <LearnVueButton>Custom Button</LearnVueButton>
  </div>
</template>

<script>
import { LearnVueButton } from 'components-ui-vuejs-test'

export default {
  components: {
    LearnVueButton,
  },
}
</script>
```

### Import với TypeScript

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { LearnVueButton } from 'components-ui-vuejs-test'

export default defineComponent({
  components: {
    LearnVueButton,
  },
})
</script>
```

## 📚 Components

### LearnVueButton

Button component đơn giản với styling mặc định.

#### Props

- Chưa có props (sẽ được thêm trong phiên bản tương lai)

#### Slots

- `default`: Nội dung của button

#### Ví dụ sử dụng

```vue
<template>
  <div>
    <!-- Button đơn giản -->
    <LearnVueButton>Click me</LearnVueButton>

    <!-- Button với slot content -->
    <LearnVueButton>
      <span>Custom Content</span>
    </LearnVueButton>
  </div>
</template>
```

## 🎨 Tùy chỉnh Style

Components sử dụng CSS scoped, bạn có thể ghi đè styles bằng cách:

```vue
<style>
/* Ghi đè style của LearnVueButton */
.learn-vue-button {
  background-color: #your-color !important;
  border-radius: 10px !important;
}
</style>
```

## 🛠️ Development

### Yêu cầu hệ thống

- Node.js 18+
- npm 8+ hoặc yarn 1.22+ hoặc pnpm 7+

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

### Build cho production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Type checking

```bash
npm run type-check
```

## 📁 Cấu trúc project

```
components-ui-vuejs-test/
├── src/
│   ├── components/
│   │   └── LearnVueButton.vue
│   ├── index.js              # Entry point cho library
│   ├── main.ts              # Entry point cho dev server
│   └── App.vue              # Demo app
├── dist/                    # Build output
├── public/
└── package.json
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📄 License

MIT License - xem [LICENSE](LICENSE) file để biết thêm chi tiết.

## 🐛 Báo lỗi

Nếu bạn gặp lỗi hoặc có đề xuất, vui lòng tạo [issue](https://github.com/your-username/components-ui-vuejs-test/issues).

## 📞 Liên hệ

- GitHub: [@your-username](https://github.com/your-username)
- Email: your-email@example.com

---

Made with ❤️ in Vietnam
