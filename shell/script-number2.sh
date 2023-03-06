#!/bin/bash
source config.ini

# Create dencrypted zip file
unzip -P "$PASSWORD"  "$ZIP_DIR" 

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker is not installed. Please install Docker and try again."
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null
then
    echo "Docker is not running. Starting Docker..."
     service docker start
fi

echo "Docker is running."


# Check if the image exists
if ! docker image inspect "$IMAGE_NAME" &> /dev/null
then
    echo "Image does not exist. Pulling image..."
    docker pull "$IMAGE_NAME"
fi 

echo "Image exists."  

#run the container
docker run -d -p 80:80 "$IMAGE_NAME"


                                                                        




