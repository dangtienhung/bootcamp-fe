b1. vào trang web tailwindcss.com
b2. vào phần document -> framwork guides -> react vite
b3. chạy câu lệnh
-> npm create vite@latest my-project -- --template react
b4. npm install -D tailwindcss postcss autoprefixer
b5. npx tailwindcss init -p
b6. tạo 1 file tên tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

b7. dán vào file index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
