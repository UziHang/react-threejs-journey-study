/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,  //严格模式
  sassOptions: {  //sass配置
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
