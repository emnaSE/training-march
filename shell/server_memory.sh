#!/bin/bash
# set email variables
source config.ini
# Get the current date and time
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
# check memory usage
memory_usage=$(ssh "$SERVER" free | awk '/Mem/{printf("%.2f"), $3/$2*100}')
echo $memory_usage
# check disk usage
disk_usage=$(ssh "$SERVER" df -h / | awk 'NR==2{printf("%.2f"), $5}')
echo $disk_usage
# Check if the memory usage exceeds the threshold
if [ $(echo "$memory_usage >= $MEMORY_THRESHOLD" | bc -l) -eq 1 ]; then
    # Send an email notification using the mail command
    email_body="Memory usage is above threshold! Current usage: $memory_usage%"

   sendemail -f $FROM_EMAIL -t $TO_EMAIL -u $SUBJECT -m $email_body -s $SMTP_SERVER:$SMTP_PORT -o tls=yes -xu $SMTP_USERNAME -xp $SMTP_PASSWORD
fi
# Check if the disk usage exceeds the threshold

if [ $(echo "$disk_usage >= $DISK_THRESHOLD" | bc -l) -eq 1 ]; then
    # Send an email notification using the mail command
   email_body="Disk usage is above threshold! Current usage: $disk_usage%" 

    sendemail -f $FROM_EMAIL -t $TO_EMAIL -u $SUBJECT -m $email_body -s $SMTP_SERVER:$SMTP_PORT -o tls=yes -xu $SMTP_USERNAME -xp $SMTP_PASSWORD

fi

# Write the usage data to a CSV file with date and time
echo "$TIMESTAMP,$memory_usage%,$disk_usage%" >> usage_data.csv
