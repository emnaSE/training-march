#!/bin/bash 
source config.ini

mkdir -p  $DEST_DIR

# Copy files and directories that are not ignored by git
rsync -avz --exclude-from="$SRC_DIR/.gitignore" $SRC_DIR/ $DEST_DIR/


# Zip the folder

if  zip -r -e  "$ZIP_DIR" "$DEST_DIR" -P "$PASSWORD" ; then
    echo "Folder zipped successfully."
else
    echo "Folder zip failed."
    exit 1
fi

if echo "This is an email with a folder attachment."
 email_body="This is an email with a folder attachment."
 sendemail -f $FROM_EMAIL -t $TO_EMAIL -u $SUBJECT -m $email_body -s $SMTP_SERVER:$SMTP_PORT -o tls=yes -xu $SMTP_USERNAME -xp $SMTP_PASSWORD -a "$ZIP_DIR" ; then
    echo "Email sent successfully."
else
    echo "Email send failed."
    exit 1
fi