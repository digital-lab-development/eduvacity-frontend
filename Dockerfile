# Build Stage
FROM node:18-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Set STRIPE_PUBLIC_KEY environment variable
ARG STRIPE_PUBLIC_KEY
ENV STRIPE_PUBLIC_KEY=$STRIPE_PUBLIC_KEY

# Production Stage
FROM node:18-alpine AS production

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the built application from the build stage
COPY --from=build /usr/src/app/.next ./.next

# Set NODE_ENV environment variable to production
ENV NODE_ENV=production

# Expose the port Next.js app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
