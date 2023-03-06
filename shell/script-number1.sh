#!/bin/bash 
source config.env

mkdir -p $DEST_DIR

# Copy files and directories that are not ignored by git
rsync -avz --exclude-from="$src_dir/.gitignore" $src_dir/ $dest_dir/

read -s -p "Enter password: " password
echo ""

# Zip the folder

if zip -r -e -P "$PASSWORD" "$ZIP_DIR" "$DEST_DIR" ; then
    echo "Folder zipped successfully."
else
    echo "Folder zip failed."
    exit 1
fi

if echo "This is an email with a folder attachment." | mutt  -a "$ZIP_DIR" -s "$SUBJECT" -- "$TO" ; then
    echo "Email sent successfully."
else
    echo "Email send failed."
    exit 1
fi