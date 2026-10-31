# RH TRANS

Landing page travel Pringsewu - Jabodetabek. Next.js 16 + Tailwind, deploy ke Vercel.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Buka https://vercel.com/new, import repo.
3. Framework terdeteksi otomatis (Next.js). Klik Deploy tanpa setting tambahan.

## Ubah data

- Nomor WhatsApp: `lib/booking.ts` (`WA_NUMBER`).
- Daftar mobil dan deskripsi: `CARS` di `app/page.tsx`.
- Teks pesan WhatsApp: `buildBookingMessage` di `lib/booking.ts`.

## Tes

```bash
node --experimental-strip-types --test lib/booking.test.ts
```

## Aset

`public/images/logo/logo.png`, `public/images/hero/main-car.png`, `public/images/about/vehicle-lineup.png`. `hero-bg.png` tidak dipakai karena warnanya di luar palet putih-biru.
