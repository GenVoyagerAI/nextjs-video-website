#!/bin/bash

echo "🚀 Setting up Next.js Video Website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "npm run dev"
echo ""
echo "To build for production, run:"
echo "npm run build"
echo ""
echo "The project is ready for Netlify deployment!"
