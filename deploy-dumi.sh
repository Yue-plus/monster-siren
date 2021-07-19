#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build --dumi

# 进入生成的文件夹
cd dist/

# 如果是发布到自定义域名
echo 'monster-siren.docs.yueplus.ink' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Yue-plus/dumi-theme-monster-siren.git master:gh-page

# 清理
rm -rf dist/

cd -
