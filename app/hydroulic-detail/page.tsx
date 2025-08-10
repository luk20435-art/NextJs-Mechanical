"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button"; 
import { Cog } from "lucide-react";
import Link from "next/link";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Separator } from "@radix-ui/react-separator";


export default function MachineDetailPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const topics = [
    {
      title: 'ปั๊มไฮดรอลิก',
      description: 'ปั๊มเป็นแหล่งต้นกำลัง ทำหน้าที่สร้างแรงดันของเหลวเข้าสู่ระบบ',
      image: '/images/pumps.jpg',
    },
    {
      title: 'กระบอกสูบ (Cylinder)',
      description: 'แปลงพลังงานของเหลวให้เป็นพลังงานกล เพื่อขับเคลื่อนโหลด',
      image: '/images/cylinder.jpg',
    },
    {
      title: 'วาล์วควบคุม',
      description: 'ใช้ควบคุมทิศทาง ความดัน และปริมาณการไหลของของเหลว',
      image: '/images/valve.jpg',
    },
  ]

  const [pressure, setPressure] = useState<number | ''>('')
  const [area, setArea] = useState<number | ''>('')
  const [force, setForce] = useState<number | null>(null)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    if (pressure !== '' && area !== '') {
      setForce(Number(pressure) * Number(area))
    } else {
      setForce(null)
    }
  }, [pressure, area])

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

        <section className="max-w-7xl mx-auto px-4 py-16">
            <div data-aos="fade-up" className="text-center mb-12">
                <h2 className="text-3xl font-bold text-sky-800 mb-4">🔧 ระบบไฮดรอลิก (Hydraulic Systems)</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                ระบบส่งกำลังด้วยของเหลวแรงดันสูง ใช้ในงานอุตสาหกรรมที่ต้องการแรงสูงและการควบคุมที่แม่นยำ เช่น เครื่องฉีด, เครื่องอัด, และเครื่องจักรก่อสร้าง
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {topics.map((topic, index) => (
                <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                >
                    <Image
                    src={topic.image}
                    alt={topic.title}
                    width={400}
                    height={240}
                    className="w-full h-52 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-sky-700 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
                ))}
            </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 data-aos="fade-up" className="text-2xl font-bold text-sky-800 mb-6 text-center">
                🔧 คำนวณแรงในระบบไฮดรอลิก
            </h2>

            <div data-aos="zoom-in" className="bg-white p-6 rounded-xl shadow-md space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium text-gray-700 mb-1">แรงดัน (Pressure) – หน่วย: Bar</label>
                    <input
                    type="number"
                    value={pressure}
                    onChange={(e) => setPressure(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                    placeholder="เช่น 100"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-700 mb-1">พื้นที่ (Area) – หน่วย: cm²</label>
                    <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                    placeholder="เช่น 50"
                    />
                </div>
                </div>

                <div className="text-center mt-6">
                {force !== null ? (
                    <div className="text-xl font-semibold text-green-700">
                    ✅ แรงที่ได้: <span className="text-2xl">{(force * 10).toFixed(2)}</span> N
                    </div>
                ) : (
                    <p className="text-gray-500">กรอกข้อมูลเพื่อคำนวณแรง (F = P × A × 10)</p>
                )}
                </div>
            </div>

            {/* 💧 Animation การไหลของของเหลว */}
            <div className="mt-16" data-aos="fade-up">
                <h3 className="text-xl font-bold text-sky-800 text-center mb-6">💧 การไหลของของเหลวในท่อ</h3>
                <div className="relative w-full h-40 bg-blue-100 rounded-lg overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 flex">
                    {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"
                        style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s',
                        animationIterationCount: 'infinite',
                        marginRight: '8px',
                        }}
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
            
        {/* 🔙 ปุ่มย้อนกลับ */}
        <div className="max-w-6xl mx-auto mb-6">
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
