"use client";

import Image from "next/image";
import { buildBookingMessage, waLink, WA_NUMBER } from "@/lib/booking";

const CARS = [
  { name: "HiAce", note: "Kabin paling luas, untuk rombongan." },
  { name: "Innova", note: "Kabin lega, nyaman untuk perjalanan jauh." },
  { name: "Avanza", note: "Pilihan keluarga, bagasi cukup." },
  { name: "Calya", note: "Ramping dan hemat untuk grup kecil." },
];

const WA_ICON =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={WA_ICON} />
    </svg>
  );
}

export default function Home() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = buildBookingMessage({
      car: String(data.get("car")),
      pickup: String(data.get("pickup")),
      date: String(data.get("date")),
      dropoff: String(data.get("dropoff")),
    });
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo/logo.png" alt="Logo RH TRANS" width={48} height={48} className="h-11 w-11" />
            <div>
              <p className="text-lg font-bold leading-tight text-navy">RH TRANS</p>
              <p className="text-xs text-slate-600 sm:text-sm">Pringsewu - Jabodetabek</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-lg bg-navy px-3 text-sm font-semibold text-white transition-colors hover:bg-sky sm:px-5 sm:text-base"
          >
            <WhatsAppIcon />
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky/40 bg-white px-3 py-1 text-sm font-medium text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                Rute Pringsewu - Jabodetabek, dua arah
              </p>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Travel Pringsewu ke Jabodetabek, dijemput dari titik Anda
              </h1>
              <p className="mb-8 max-w-xl text-lg text-slate-600">
                Pilih mobil, isi titik jemput dan tanggal, lalu pesanan langsung
                masuk ke WhatsApp kami. Harga dan jadwal dikonfirmasi admin.
              </p>
              <a
                href="#booking"
                className="inline-flex h-12 items-center rounded-lg bg-navy px-7 font-semibold text-white transition-colors hover:bg-sky"
              >
                Isi form booking
              </a>
            </div>
            <Image
              src="/images/hero/main-car.png"
              alt="Armada Toyota Avanza RH TRANS"
              width={600}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section id="booking" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">Booking travel</h2>
            <p className="mb-10 text-center text-slate-600">
              Isi pilihan Anda. Pesanan akan dibuatkan formatnya untuk dikirim ke WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="car" className="mb-2 block text-sm font-semibold text-slate-900">
                  Select Your Car Type
                </label>
                <select
                  id="car"
                  name="car"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900"
                >
                  <option value="" disabled>
                    Pilih tipe mobil
                  </option>
                  {CARS.map((car) => (
                    <option key={car.name} value={car.name}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="pickup" className="mb-2 block text-sm font-semibold text-slate-900">
                    Pick-up point
                  </label>
                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    required
                    placeholder="Contoh: Pringsewu, Lampung"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-semibold text-slate-900">
                    Pick-up date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dropoff" className="mb-2 block text-sm font-semibold text-slate-900">
                  Drop-off point
                </label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  required
                  placeholder="Contoh: Jakarta Selatan"
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy font-semibold text-white transition-colors hover:bg-sky"
              >
                <WhatsAppIcon />
                Kirim pesanan ke WhatsApp
              </button>
              <p className="text-center text-sm text-slate-600">
                Belum ada biaya. Admin akan membalas harga dan ketersediaan jadwal.
              </p>
            </form>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Armada</h2>
            <p className="mb-10 max-w-2xl text-slate-600">
              Empat pilihan kendaraan, dari perjalanan berdua sampai rombongan.
            </p>
            <Image
              src="/images/about/vehicle-lineup.png"
              alt="HiAce, Innova, Avanza, dan Calya milik RH TRANS"
              width={1200}
              height={420}
              className="h-auto w-full"
            />
            <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CARS.map((car) => (
                <div key={car.name} className="border-t-2 border-navy pt-4">
                  <dt className="font-bold text-navy">{car.name}</dt>
                  <dd className="text-sm text-slate-600">{car.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Rute dan titik antar</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky">
                  Dari Pringsewu
                </p>
                <p className="text-slate-600">
                  Penjemputan di Pringsewu dan sekitarnya, antar ke Jakarta, Bogor,
                  Depok, Tangerang, dan Bekasi.
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky">
                  Dari Jabodetabek
                </p>
                <p className="text-slate-600">
                  Arah sebaliknya juga dilayani. Sebutkan titik jemput di Jabodetabek,
                  tujuan di Pringsewu atau sekitarnya.
                </p>
              </div>
            </div>
            <p className="mt-8 text-slate-600">
              Titik jemput di luar area tersebut? Tulis di form, admin akan
              mengonfirmasi apakah bisa dijangkau.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Pertanyaan umum</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  Bagaimana harga ditentukan?
                  <span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">
                  Harga tergantung rute, titik jemput, dan tipe mobil. Isi form booking,
                  admin membalas nominalnya lewat WhatsApp sebelum Anda memutuskan.
                </p>
              </details>
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  Bisa pulang pergi di hari yang sama?
                  <span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">
                  Bisa, tergantung jadwal armada. Sebutkan rencana pulang Anda saat chat
                  agar admin menyiapkan slotnya.
                </p>
              </details>
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  Apakah titik jemput bisa di rumah?
                  <span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">
                  Ya, tulis alamat atau patokan lokasi di form. Admin mengonfirmasi
                  titik temu yang paling memudahkan kedua pihak.
                </p>
              </details>
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  Bagaimana kalau tanggal yang saya pilih penuh?
                  <span className="text-sky transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">
                  Admin menawarkan tanggal terdekat atau armada lain yang tersedia.
                  Tidak ada pembayaran sebelum jadwal disepakati.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="Logo RH TRANS"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg bg-white p-1"
            />
            <div>
              <p className="text-lg font-bold">RH TRANS</p>
              <p className="text-sm text-slate-200">Rute Pringsewu - Jabodetabek</p>
            </div>
          </div>
          <div className="text-sm">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-slate-400 underline-offset-4 hover:decoration-white"
            >
              WhatsApp 081367415360
            </a>
            <p className="mt-1 text-slate-200">HiAce, Innova, Avanza, Calya</p>
          </div>
        </div>
      </footer>
    </>
  );
}
