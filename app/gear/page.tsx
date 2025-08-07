"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button"; 
import { Cog } from "lucide-react";
import Link from "next/link";


export default function MachineDetailPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [driverTeeth, setDriverTeeth] = useState(20);
  const [drivenTeeth, setDrivenTeeth] = useState(40);

  const ratio = drivenTeeth / driverTeeth;
  const outputTorque = 10 * ratio;

  const autos = [
    {
        id: "plc",
        title: "เฟืองตรง",   
        image: "/images/spur.jpg", 
    },
    {
        id: "iot",
        title: "เฟืองเฉียง",   
        image: "/images/helical.jpg", 
    },
    {
        id: "robot",
        title: "เฟืองดอกจอก",   
        image: "/images/bevel.jpg", 
    }
  ];
  

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

       <section id="gear-system" className="py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* 🔹 Text Content */}
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    ⚙️ ระบบเฟือง (Gear Systems)
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    การออกแบบระบบเฟืองมีบทบาทสำคัญในการส่งกำลังในเครื่องจักรและหุ่นยนต์อุตสาหกรรม
                    ทั้งเฟืองตรง เฟืองเฉียง และเฟืองดอกจอก
                    จำเป็นต้องคำนวณอัตราทด ความเร็ว และแรงบิดให้เหมาะสมกับงานที่ใช้งานจริง
                </p> 
                </motion.div>

                {/* 🔹 Image */}
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <Image
                    src="/images/systemgear.jpg" // คุณสามารถเปลี่ยน path รูปได้ตามโฟลเดอร์
                    alt="ระบบเฟือง"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg mx-auto"
                />
                </motion.div>
            </div>
        </section>

        <section id="auto" className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-center text-2xl mb-8">ประเภทของเฟือง</h2> 
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {autos.map((auto, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
                      >
                        <img
                          src={auto.image}
                          alt={auto.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            {auto.title}
                          </h3> 
                        </div>  
                      </div>
                    ))}
                  </div>
                </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                🧮 คำนวณอัตราทด & แรงบิดของระบบเฟือง
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                    จำนวนฟันเฟืองต้นกำลัง (Driver Gear)
                    </label>
                    <input
                    type="number"
                    value={driverTeeth}
                    onChange={(e) => setDriverTeeth(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md"
                    min={1}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                    จำนวนฟันเฟืองขับเคลื่อน (Driven Gear)
                    </label>
                    <input
                    type="number"
                    value={drivenTeeth}
                    onChange={(e) => setDrivenTeeth(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md"
                    min={1}
                    />
                </div>
                </div>

                <div className="text-center space-y-3">
                <p className="text-xl font-semibold text-gray-800">
                    ✅ อัตราทด (Gear Ratio): <span className="text-blue-600">{ratio.toFixed(2)}</span>
                </p>
                <p className="text-lg text-gray-600">
                    หากแรงบิดเริ่มต้น 10 Nm → แรงบิดขาออก = <span className="text-green-600 font-semibold">{outputTorque.toFixed(2)} Nm</span>
                </p>
                </div>

                <div className="flex justify-center pt-6">
                <svg width="240" height="120" viewBox="0 0 240 120">
                    <g>
                    <circle cx="60" cy="60" r="40" fill="#6366F1" opacity="0.8" />
                    <text x="60" y="65" textAnchor="middle" fill="white" fontSize="14">Driver</text>
                    <circle cx="180" cy="60" r="60" fill="#06B6D4" opacity="0.8" />
                    <text x="180" y="65" textAnchor="middle" fill="white" fontSize="14">Driven</text>
                    <line x1="100" y1="60" x2="140" y2="60" stroke="#4B5563" strokeWidth="2" markerEnd="url(#arrow)" />
                    </g>
                    <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6" fill="#4B5563" />
                    </marker>
                    </defs>
                </svg>
                </div>

                <p className="text-sm text-center text-gray-500">
                ภาพแสดงเฟืองต้นกำลัง (เล็ก) หมุนขับเฟืองขับเคลื่อน (ใหญ่)
                </p>
            </div>
        </section>
        
            
        {/* 🔙 ปุ่มย้อนกลับ */}
        <div className="max-w-6xl mx-auto mb-6">
            <Button variant="outline" onClick={() => router.back()}>
            ⬅️ ย้อนกลับ
            </Button>
        </div>

        
        {/* 👉 Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* เกี่ยวกับ */}
            <div>
                <div className="flex items-center space-x-2 mb-4">
                <Cog className="h-6 w-6 text-blue-400" />
                <h4 className="text-xl font-bold">AutoMechLab</h4>
                </div>
                <p className="text-gray-400">
                แหล่งเรียนรู้ด้านวิศวกรรมเครื่องกล ครอบคลุมเนื้อหาและเทคโนโลยีสมัยใหม่
                </p>
            </div>

            {/* ลิงก์เมนู */}
            <div>
                <h5 className="font-semibold mb-4">หัวข้อเรียน</h5>
                <ul className="space-y-2 text-gray-400">
                <li><Link href="#force" className="hover:text-white transition">แรง</Link></li>
                <li><Link href="#mechanics" className="hover:text-white transition">กลไก</Link></li>
                <li><Link href="#machines" className="hover:text-white transition">เครื่องจักร</Link></li>
                <li><Link href="#automotive" className="hover:text-white transition">ยานยนต์</Link></li>
                <li><Link href="#automation" className="hover:text-white transition">ระบบอัตโนมัติ</Link></li>
                </ul>
            </div>

            {/* ทรัพยากร */}
            <div>
                <h5 className="font-semibold mb-4">ทรัพยากร</h5>
                <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">บทเรียน</Link></li>
                <li><Link href="#" className="hover:text-white transition">แบบฝึกหัด</Link></li>
                <li><Link href="#" className="hover:text-white transition">เครื่องมือคำนวณ</Link></li>
                <li><Link href="#" className="hover:text-white transition">ชุมชน</Link></li>
                </ul>
            </div>

            {/* ติดต่อเรา */}
            <div>
                <h5 className="font-semibold mb-4">ติดต่อเรา</h5>
                <ul className="space-y-2 text-gray-400">
                <li>อีเมล: info@mechenghub.com</li>
                <li>โทร: 02-xxx-xxxx</li>
                <li>Facebook: MechEngHub</li>
                <li>Line: @mechenghub</li>
                </ul>
            </div>
            </div>

            {/* เส้นแบ่ง & ลิขสิทธิ์ */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
            &copy; 2024 AutoMechLab. สงวนลิขสิทธิ์
            </div>
        </div>
        </footer>
    </div>
  );
}
