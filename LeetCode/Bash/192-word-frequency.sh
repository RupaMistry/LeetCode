#!/bin/bash

# Read words.txt, break into one word per line, count frequencies, and sort descending
tr -s ' ' '\n' < words.txt | sort | uniq -c | sort -nr | awk '{print $2, $1}'