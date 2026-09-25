
# ==============================
# Stage 1: Build
# ==============================

FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY app.js .


# ==============================
# Stage 2: Production
# ==============================

FROM node:20-alpine AS production

WORKDIR /app

# Copy package files
COPY --from=build /app/package*.json ./

# Copy installed dependencies
COPY --from=build /app/node_modules ./node_modules

# Copy application
COPY --from=build /app/app.js .

# Application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]

