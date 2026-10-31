import assert from "node:assert/strict";
import { test } from "node:test";
import { buildBookingMessage, formatDate, waLink } from "./booking";

test("formatDate renders Indonesian date", () => {
  assert.equal(formatDate("2026-11-02"), "2 November 2026");
});

test("message carries every booking field", () => {
  const msg = buildBookingMessage({
    car: "Innova",
    pickup: "Pringsewu",
    date: "2026-11-02",
    dropoff: "Jakarta Selatan",
  });
  assert.match(msg, /Innova/);
  assert.match(msg, /Pringsewu/);
  assert.match(msg, /2 November 2026/);
  assert.match(msg, /Jakarta Selatan/);
});

test("waLink points to the business number and encodes the message", () => {
  const url = waLink(buildBookingMessage({ car: "HiAce", pickup: "A", date: "2026-01-01", dropoff: "B" }));
  assert.ok(url.startsWith("https://wa.me/6281367415360?text="));
  assert.ok(!url.includes("\n"));
});
