export const WA_NUMBER = "6281367415360";

export type Booking = {
  car: string;
  pickup: string;
  date: string;
  dropoff: string;
};

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso + "T00:00:00Z").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function buildBookingMessage(booking: Booking): string {
  return [
    "Halo RH TRANS, saya mau booking travel.",
    "",
    `Tipe mobil: ${booking.car}`,
    `Lokasi jemput: ${booking.pickup}`,
    `Tanggal jemput: ${formatDate(booking.date)}`,
    `Tujuan: ${booking.dropoff}`,
    "",
    "Mohon info harga dan ketersediaan jadwal. Terima kasih.",
  ].join("\n");
}

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
