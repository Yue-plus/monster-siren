import { defineConfig } from 'umi';

export default defineConfig({
  title: '塞壬唱片 - A WORLD FAMILIARLY UNKNOWN',
  favicon: '/favicon.ico',
  logo: '/svg/logo.svg',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/loadingView/loadingView',
  },
  dva: {
    immer: true,
    hmr: false,
  },
});
