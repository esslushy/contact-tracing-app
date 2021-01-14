// For how many days we should store keys and observations
let RETENTION_PERIOD = 15

// The length of an epoch in minutes
let EPOCH_LENGTH = 15

// Length of EphID in bytes
let LENGTH_EPHID = 16

// Seconds in a UNIX Epoch day
let SECONDS_PER_DAY = 24 * 60 * 60

// Number of epochs in a day
let NUM_EPOCHS_PER_DAY = Math.round(1440 / EPOCH_LENGTH)

export { RETENTION_PERIOD, EPOCH_LENGTH, LENGTH_EPHID, SECONDS_PER_DAY, NUM_EPOCHS_PER_DAY }