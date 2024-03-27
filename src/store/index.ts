import { createPinia } from 'pinia';
import { App } from 'vue';
// import { createPersistedState } from 'pinia-plugin-persistedstate';

// 创建 Pinia 实例
const store = createPinia();

// 在应用程序启动时自动安装 Pinia 实例
export function setupPinia(app: App<Element>) {
  app.use(store);
}

// 使用 pinia-plugin-persistedstate 插件持久化 Pinia 状态
// store.use(createPersistedState(), {
//   key: 'my-pinia-state', // 指定存储的键名
//   // 其他配置选项

// });
export { store }
