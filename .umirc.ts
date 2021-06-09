import { defineConfig } from 'umi';

export default defineConfig({
  title: '塞壬唱片 - A WORLD FAMILIARLY UNKNOWN',
  favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  dynamicImport: {},
});
