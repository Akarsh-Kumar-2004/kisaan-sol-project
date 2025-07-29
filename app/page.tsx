import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2a9d8f] to-[#f4a261]">
          किसान डायरेक्ट (Kisaan Direct)
        </h1>
        <p className="text-xl text-gray-600 mt-4">A Robust Website Model for Farm-to-Table Commerce</p>
        <p className="text-md text-gray-500 mt-2">SEFA 2025 Case Study</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/users" className="px-6 py-2 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Users</Link>
          <Link href="/inventory" className="px-6 py-2 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Inventory</Link>
          <Link href="/orders" className="px-6 py-2 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Orders</Link>
          <Link href="/payments" className="px-6 py-2 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Payments</Link>
          <Link href="/logistics" className="px-6 py-2 rounded-full bg-[#2a9d8f] text-white font-semibold shadow hover:bg-[#21867a] transition">Logistics</Link>
        </div>
      </header>
      {/* ...rest of the landing page content (copy from your HTML, adapted to JSX and Tailwind) ... */}
      {/* For brevity, only the header and navigation are shown here. The rest of your HTML can be added below. */}
    </div>
  );
}
