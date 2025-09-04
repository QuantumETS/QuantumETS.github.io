import Link from 'next/link';

const EventBanner = () => (
  <Link
    href="https://quantuemets-events.com"
    className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 py-3 text-center text-xl font-bold text-white transition-opacity hover:opacity-80"
  >
    Inscrivez-vous! - Qiskit Fall Fest 2025 - Register Now!
  </Link>
);

export { EventBanner };
