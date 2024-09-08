# Sử dụng image node chính thức
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Mở cổng 3000 để server Vite có thể hoạt động
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["npm", "run", "dev", "--", "--host"]
