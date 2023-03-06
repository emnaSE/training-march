#!/bin/bash
# set email variables
source config.env 
# check memory usage
MEMORY_USAGE=$(ssh ubuntu@$ip_address  free | awk 'NR==2{printf "%.2f\n", $3/$2*100}')

# check if memory usage is greater than threshold %
if (( $(echo "$MEMORY_USAGE > $threshold" | bc -l) )); then
  # send email
  echo "Memory usage is greater than 5%. Sending email..."
  echo "Memory usage is currently at $MEMORY_USAGE%." | mail -s "Memory usage on $ip_address is above $threshold%" $TO_EMAIL
else
  echo "Memory usage is below 20%. No action required."
fi
