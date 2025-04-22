# Use Cypress official image
FROM cypress/included:14.0.3  

# Set working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install project dependencies
RUN npm install  

# Copy the remaining files into the container
COPY . .  

# Verify Cypress installation (but don't use `$(npm bin)/cypress verify`)
RUN npx cypress verify  
