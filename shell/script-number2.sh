#!/bin/bash
source config.ini
echo $dest_dir
# Create dencrypted zip file
unzip -P "$PASSWORD"  "$DEST_DIR" 

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

