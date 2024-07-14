FROM alpine:latest


RUN apk update

# Install JDK and Maven
RUN apk add openjdk21

RUN apk add maven

# Set the working directory
WORKDIR /app

# Copy the application source code
COPY . .

# Build the application
RUN mvn clean package

EXPOSE 8080
EXPOSE 8081
# Command to run the Spring Boot application
CMD ["java", "-jar", "/app/target/laptops-0.0.0.jar"]