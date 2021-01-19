import crypto from 'crypto'

const CryptoJS = require("crypto-js");
const secureRandomInRange = require("random-number-csprng");

import { SECONDS_PER_DAY, LENGTH_EPHID, NUM_EPOCHS_PER_DAY } from './config'
// Constant string "broadcast key" for domain seperation
const BROADCAST_KEY = Buffer.from("broadcast key", "ascii").toString() //TODO: Determine if this is done correctly
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

async function secure_shuffle(items){
    /* 
    * Perform a cryptographically secure shuffling of the given items
    * 
    * Args:
    *   items (list): list of items to securely shuffle
    * 
    * Returns:
    *   Nothing. Items are shuffled in place
    */
    // Generate an array of random numbers
    let randomNumPromises = []
    for(let i = items.length-1; i > 0; i--){
        randomNumPromises.push(secureRandomInRange(0, i))
    }
    // Asynchronous so wait for them
    const randomNums = await Promise.all(randomNumPromises)

    // apply durstenfeld shuffle with previously generated random numbers
    for (let i = items.length - 1; i > 0; i--) {
        const j = randomNums[items.length - i - 1];
        const temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }
}

// Basic cryptographic functions
function generate_new_day_key(){
    // Generate a random 32 byte key
    return crypto.randomBytes(32).toString('hex')
}

function generate_next_day_key(key){
    /*
    * Computes key of the next day given current key
    * 
    * Args:
    *    key (byte array): A 32-byte key
    * Returns:
    *    byte array: The next 32-byte key
    */
   return CryptoJS.SHA256(key).toString(CryptoJS.enc.Hex)
}

function generate_ephids_for_day(current_day_key, shuffle=true){
    /*
    * Generates the list of EphIDs for the current day
    * Args:
    *     key (byte array): A 32-byte key
    *     shuffle (bool, optional): Whether to shuffle the list of EphIDs. Default: True.
    *         Should only be set to False when testing or when generating test vectors
    * Returns:
    *     list of byte arrays: The list of EphIDs for the day
    */
    // Compute key for stream cipher based on current_day_key
    let stream_key = CryptoJS.HmacSHA256(current_day_key, BROADCAST_KEY)
    /* 
    * Create the number of desired ephIDs by drawing from AES in CTR mode
    * operating as a stream cipher. To get the raw output, we ask the library
    * to "encrypt" an all-zero message of sufficient length.
    */
   let output_bytes = CryptoJS.AES.encrypt(
       CryptoJS.lib.WordArray.create([0x00], LENGTH_EPHID*NUM_EPOCHS_PER_DAY), 
       stream_key,
       { mode: CryptoJS.mode.CTR, iv: CryptoJS.lib.WordArray.create([0x00], 8) }
    ).toString()

    // Cut out ephIds
    let ephIDs = []
    for(let i = 0; ephIDs.length < NUM_EPOCHS_PER_DAY; i+=LENGTH_EPHID){
        ephIDs.push(output_bytes.substring(i, i+LENGTH_EPHID))
    }

    // shuffle the ephIds
    if(shuffle) secure_shuffle(ephIDs)

    return ephIDs
}

export { day_start_from_time, batch_start_from_time, generate_new_day_key, secure_shuffle, generate_next_day_key, generate_ephids_for_day }