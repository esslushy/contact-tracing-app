const Buffer = require('buffer')
// const crypto = require('crypto');

import { SECONDS_PER_DAY } from './config'
// Constant string "broadcast key" for domain seperation
const BROADCAST_KEY = Buffer.Buffer.from("broadcast key", "ascii")
// Length of a batch (2 hours)
const SECONDS_PER_BATCH = 2*60*60

// Utility functions
function day_start_from_time(time) {
    /*
    * Return the first Unix epoch second of the day corresponding to time
    * 
    * Args:
    *   time: a Date object with the day to get the time from
    * 
    * Returns:
    *   The first Unix epoch second of that day
    */
   // Convert time to seconds
   time = Math.floor(time.getTime()/1000)
   // Cut off any fractional days
   return Math.floor(time/SECONDS_PER_DAY) * SECONDS_PER_DAY
}

function batch_start_from_time(time) {
    /* 
    * Return the first Unix epoch second of the batch corresponding to time
    * 
    * Args:
    *    datetime (obj:datetime.datetime): A datetime
    * Returns:
    *    The first Unix epoch second on that day for that batch
    */
   // Convert time to seconds
   time = Math.floor(time.getTime()/1000)
   // cut off fractional batches
   return Math.floor(time/SECONDS_PER_BATCH) * SECONDS_PER_BATCH
}

function secure_shuffle(items){
    
}

// Basic cryptographic functions
function generate_new_day_key(){
    // Get set of random bytes
    console.log(crypto.randomBytes(32).toString('hex'))
}

export { day_start_from_time, batch_start_from_time, generate_new_day_key }