#!/bin/bash
# set email variables
source config.ini
# check memory usage
memory_usage=$(ssh "$SERVER" free | awk '/Mem/{printf("%.2f"), $3/$2*100}')
# Check if the memory usage exceeds the threshold
if [ $(echo "$memory_usage >= $THRESHOLD" | bc -l) -eq 1 ]; then
  # Send an email notification using the mailutils package
  email_body="Memory usage is above the threshold. Current usage: $memory_usage%" 
   sendemail -f $FROM_EMAIL -t $TO_EMAIL -u $SUBJECT -m $email_body -s $SMTP_SERVER:$SMTP_PORT -o tls=yes -xu $SMTP_USERNAME -xp $SMTP_PASSWORD
fi