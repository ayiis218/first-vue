/// <reference types="vite/client" />

// Tidak perlu shim `declare module '*.vue'`: vue-tsc membaca tipe asli tiap SFC,
// sedangkan shim justru menyamarkan props dan emit menjadi tipe generik.
