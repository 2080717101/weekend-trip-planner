#!/bin/bash

# 周末出游规划助手 - 本地启动脚本

echo "🗺️  周末出游规划助手"
echo "========================"
echo ""
echo "正在启动本地服务器..."
echo ""

# 检查是否有 Python3
if command -v python3 &> /dev/null; then
    echo "✓ 使用 Python3 启动服务器"
    echo ""
    echo "📊 访问地址: http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "========================"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✓ 使用 Python 启动服务器"
    echo ""
    echo "📊 访问地址: http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "========================"
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "✓ 使用 Node.js 启动服务器"
    echo ""
    echo "📊 访问地址: http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "========================"
    npx -y http-server -p 8000
else
    echo "❌ 错误: 未找到 Python 或 Node.js"
    echo ""
    echo "请手动启动服务器，或直接双击 index.html 文件"
    exit 1
fi
