# Components UI Vue.js Test

[![npm version](https://img.shields.io/npm/v/components-ui-vuejs-test.svg)](https://www.npmjs.com/package/components-ui-vuejs-test)
[![License](https://img.shields.io/npm/l/components-ui-vuejs-test.svg)](https://github.com/your-username/components-ui-vuejs-test/blob/main/LICENSE)

Thư viện UI components dành cho Vue.js 3 được xây dựng với TypeScript và Vite.

## 🚀 Tính năng

- ✅ Hỗ trợ Vue 3 + TypeScript
- ✅ Tree-shaking friendly
- ✅ ES modules và UMD
- ✅ Styled components với CSS scoped
- ✅ Dễ dàng tùy chỉnh

## 📦 Cài đặt

```bash
npm install components-ui-vuejs-test
```

## 🔧 Cách sử dụng

### Phương pháp 1: Sử dụng Plugin (Recommended)

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import ComponentsUI from 'components-ui-vuejs-test'
import 'components-ui-vuejs-test/dist/style.css'

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

### Phương pháp 2: Import từng component (Tree-shaking)

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

### Phương pháp 3: Import trực tiếp từ source (Development)

```vue
<template>
  <div>
    <LearnVueButton>Direct Import</LearnVueButton>
  </div>
</template>

<script>
import LearnVueButton from 'components-ui-vuejs-test/components/LearnVueButton.vue'

export default {
  components: {
    LearnVueButton,
  },
}
</script>
```

### TypeScript Support

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

Hiện tại chưa có props (sẽ được thêm trong phiên bản tương lai)

#### Slots

- `default`: Nội dung của button

#### Events

- `click`: Được emit khi button được click

#### Ví dụ sử dụng

```vue
<template>
  <div>
    <!-- Button đơn giản -->
    <LearnVueButton @click="handleClick">Click me</LearnVueButton>

    <!-- Button với slot content -->
    <LearnVueButton @click="handleSubmit">
      <span>🚀 Submit</span>
    </LearnVueButton>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('Button clicked!')
    },
    handleSubmit() {
      console.log('Form submitted!')
    },
  },
}
</script>
```

## 🎨 Tùy chỉnh Style

### CSS Variables (Recommended)

```css
:root {
  --learn-vue-button-bg: #42b983;
  --learn-vue-button-color: white;
  --learn-vue-button-padding: 10px 20px;
  --learn-vue-button-border-radius: 5px;
}
```

### CSS Override

```vue
<style>
/* Ghi đè style của LearnVueButton */
.learn-vue-button {
  background-color: #ff6b6b !important;
  border-radius: 10px !important;
  font-weight: bold !important;
}

.learn-vue-button:hover {
  background-color: #ff5252 !important;
  transform: translateY(-1px);
}
</style>
```

## 🚀 Phát triển và Đóng góp

### Build từ source

```bash
# Clone repository
git clone https://github.com/your-username/components-ui-vuejs-test.git
cd components-ui-vuejs-test

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Test package local

```bash
# Trong thư mục package
npm run build
npm pack

# Trong project test
npm install ./components-ui-vuejs-test-1.0.1.tgz
```

## 📁 Cấu trúc build output

```
dist/
├── es.js              # ES modules
├── umd.js             # UMD format
├── components-ui-vuejs-test.css  # Styles
└── types/             # TypeScript definitions
```

## ⚠️ Troubleshooting

### Lỗi "Failed to resolve entry"

Đảm bảo bạn đã:

1. Install đúng package: `npm install components-ui-vuejs-test`
2. Import đúng cú pháp
3. Có file `dist/es.js` và `dist/umd.js` trong package

### Lỗi styles không hiển thị

```javascript
// Đảm bảo import CSS
import 'components-ui-vuejs-test/dist/style.css'
```

### TypeScript errors

Thêm vào `vite-env.d.ts`:

```typescript
declare module 'components-ui-vuejs-test' {
  import type { DefineComponent } from 'vue'
  export const LearnVueButton: DefineComponent<{}, {}, any>
  const plugin: any
  export default plugin
}
```

## 📄 License

MIT License
