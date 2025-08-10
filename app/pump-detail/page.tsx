"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Cog } from "lucide-react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";


export default function MachineDetailPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [pressure, setPressure] = useState('')
  const [flowRate, setFlowRate] = useState('')
  const [horsepower, setHorsepower] = useState<number | null>(null)

  const calculateHP = () => {
    const P = parseFloat(pressure)
    const Q = parseFloat(flowRate)

    if (!isNaN(P) && !isNaN(Q)) {
      const result = (P * Q) / 1714 // แรงม้า = (PSI x GPM) / 1714
      setHorsepower(parseFloat(result.toFixed(2)))
    } else {
      setHorsepower(null)
    }
  }

  return (
    <div>
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    {/* โลโก้ + ชื่อเว็บ */}
                    <div className="flex items-center space-x-2">
                        <Cog className="h-8 w-8 text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-900">AutoMechLab</h1>
                    </div>

                    {/* เมนูหลัก */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#force" className="text-gray-600 hover:text-blue-600 transition-colors">
                        แรง
                        </Link>
                        <Link href="#mechanics" className="text-gray-600 hover:text-blue-600 transition-colors">
                        กลไก
                        </Link>
                        <Link href="#machines" className="text-gray-600 hover:text-blue-600 transition-colors">
                        เครื่องจักร
                        </Link>
                        <Link href="#automotive" className="text-gray-600 hover:text-blue-600 transition-colors">
                        ยานยนต์
                        </Link>
                        <Link href="#automation" className="text-gray-600 hover:text-blue-600 transition-colors">
                        ระบบอัตโนมัติ
                        </Link>
                    </div> 
                </nav>
            </div>
        </header>

       <section className="max-w-6xl mx-auto px-4 py-16">
            {/* หัวข้อหลัก */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                ปั๊มและคอมเพรสเซอร์
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                ระบบสูบและอัดของเหลวและก๊าซที่ใช้กันอย่างแพร่หลายในอุตสาหกรรม เช่น ระบบไฮดรอลิก, ระบบลม, และระบบระบายความร้อน
                </p>
            </motion.div>

            {/* การ์ดหัวข้อย่อย */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* การ์ด 1: ปั๊มแบบแรงเหวี่ยง */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/pump-centrifugal.jpg"
                    alt="ปั๊มแรงเหวี่ยง"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">ปั๊มแรงเหวี่ยง (Centrifugal Pump)</h3>
                    <p className="text-sm text-gray-600">
                    ใช้ใบพัดในการเร่งของเหลว เหมาะกับการส่งน้ำในระบบหล่อเย็นหรือการชลประทาน
                    </p>
                </div>
                </div>

                {/* การ์ด 2: ปั๊มลูกสูบ */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/pump-piston.jpg"
                    alt="ปั๊มลูกสูบ"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">ปั๊มลูกสูบ (Piston Pump)</h3>
                    <p className="text-sm text-gray-600">
                    ใช้ลูกสูบในการดูดและส่งของเหลวให้แรงดันสูง นิยมในระบบไฮดรอลิก
                    </p>
                </div>
                </div>

                {/* การ์ด 3: คอมเพรสเซอร์แบบสกรู */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/compressor-screw.jpg"
                    alt="คอมเพรสเซอร์แบบสกรู"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">คอมเพรสเซอร์แบบสกรู (Screw Compressor)</h3>
                    <p className="text-sm text-gray-600">
                    อัดอากาศด้วยโรเตอร์หมุน ใช้ในอุตสาหกรรมที่ต้องการอากาศแรงดันสูงต่อเนื่อง
                    </p>
                </div>
                </div>

                {/* การ์ด 4: คอมเพรสเซอร์แบบลูกสูบ */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/compressor-piston.jpg"
                    alt="คอมเพรสเซอร์ลูกสูบ"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">คอมเพรสเซอร์ลูกสูบ (Piston Compressor)</h3>
                    <p className="text-sm text-gray-600">
                    ทำงานแบบเดียวกับเครื่องยนต์ ช่วยอัดอากาศเป็นรอบ เหมาะกับงานทั่วไป
                    </p>
                </div>
                </div>

                {/* การ์ด 5: ปั๊มเกียร์ */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/pump-gear.jpg"
                    alt="ปั๊มเกียร์"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">ปั๊มเกียร์ (Gear Pump)</h3>
                    <p className="text-sm text-gray-600">
                    ใช้เฟืองหมุนดูดของเหลว เหมาะกับการส่งน้ำมันหรือของเหลวหนืด
                    </p>
                </div>
                </div>

                {/* การ์ด 6: คอมเพรสเซอร์แบบแรงเหวี่ยง */}
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                <Image
                    src="/images/compressor-centrifugal.jpg"
                    alt="คอมเพรสเซอร์แรงเหวี่ยง"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">คอมเพรสเซอร์แรงเหวี่ยง</h3>
                    <p className="text-sm text-gray-600">
                    ใช้แรงเหวี่ยงหนีศูนย์กลางเร่งก๊าซให้มีความเร็วและแรงดันสูง
                    </p>
                </div>
                </div>
            </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">🔧 คำนวณแรงม้า (HP)</h2>
                <p className="text-gray-600">กรอกแรงดัน (psi) และอัตราการไหล (GPM)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* 🎛 แบบฟอร์มคำนวณ */}
                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">แรงดัน (PSI)</label>
                    <input
                    type="number"
                    value={pressure}
                    onChange={(e) => setPressure(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="เช่น 1000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">อัตราการไหล (GPM)</label>
                    <input
                    type="number"
                    value={flowRate}
                    onChange={(e) => setFlowRate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="เช่น 10"
                    />
                </div>
                <button
                    onClick={calculateHP}
                    className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
                >
                    คำนวณแรงม้า
                </button>
                {horsepower !== null && (
                    <div className="text-lg font-semibold text-green-700">
                    แรงม้า ≈ {horsepower} HP
                    </div>
                )}
                </div>

                {/* 🌀 SVG Animation */}
                <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="flex justify-center"
                >
                <svg width="180" height="180" viewBox="0 0 100 100">
                    <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0ea5e9"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    />
                    <circle
                    cx="50"
                    cy="50"
                    r="5"
                    fill="#0ea5e9"
                    />
                </svg>
                </motion.div>
            </div>
        </section>

         
        {/* 🔙 ปุ่มย้อนกลับ */}
        <div className="max-w-6xl mx-auto mb-12">
            <Button variant="outline" onClick={() => router.back()}>
            ⬅️ ย้อนกลับ
            </Button>
        </div>

        {/* 👉 Footer */}
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cog className="h-6 w-6 text-blue-400" />
                <h4 className="text-xl font-bold">MechEng Hub</h4>
              </div>
              <p className="text-gray-400">ศูนย์รวมความรู้ด้านวิศวกรรมเครื่องกลที่ครอบคลุมและทันสมัย</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">หัวข้อเรียน</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#force" className="hover:text-white transition-colors">
                    แรง
                  </Link>
                </li>
                <li>
                  <Link href="#mechanics" className="hover:text-white transition-colors">
                    กลไก
                  </Link>
                </li>
                <li>
                  <Link href="#machines" className="hover:text-white transition-colors">
                    เครื่องจักร
                  </Link>
                </li>
                <li>
                  <Link href="#automotive" className="hover:text-white transition-colors">
                    ยานยนต์
                  </Link>
                </li>
                <li>
                  <Link href="#automotive" className="hover:text-white transition-colors">
                    ระบบควบคุมด้วย
                  </Link>
                </li> 
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">ทรัพยากร</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    บทเรียน
                  </Link>
                </li> 
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    เครื่องมือคำนวณ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ชุมชน
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">ติดต่อเรา</h5>
              <ul className="space-y-2 text-gray-400">
                <li>อีเมล: santawisuk511@gmail.com
                          <p className="ml-10">: Chaiyapol210151@gmail.com</p>
                          <p className="ml-10">: bigccubon1256@gmail.com</p>
                </li>
                <li>Facebook : Sutthawat santawisuk
                          <p className="ml-10">: Chaiyapol Mingkhwan</p>
                          <p className="ml-10">: Natthaphat Chanloet</p>
                </li>
                <li>Line : santawisuk2550
                          <p className="ml-10">: Chaiyapol2551</p>
                          <p className="ml-10">: cckomiauto</p>
                </li>
                <li>โทร: 0821318166</li> 
                <li>ที่อยู่: อุบลราชธานี</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 MechEng Hub. สงวนลิขสิทธิ์ทุกประการ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
