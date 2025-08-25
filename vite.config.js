import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000, // Đảm bảo dùng cổng 3000 nếu bạn muốn
    open: true}
})