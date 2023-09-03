# Use an official lightweight web server image as the base image
FROM nginx:alpine

# Copy your HTML file(s) to the default Nginx web server directory
COPY . /usr/share/nginx/html/

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server in the foreground
CMD ["nginx", "-g", "daemon off;"]
