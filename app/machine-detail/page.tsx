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

  const [cuttingSpeed, setCuttingSpeed] = useState('')
  const [diameter, setDiameter] = useState('')
  const [rpm, setRpm] = useState<number | null>(null)

  const calculateRPM = () => {
    const v = parseFloat(cuttingSpeed)
    const d = parseFloat(diameter)
    if (!v || !d || d === 0) {
      setRpm(null)
      return
    }
    const result = (1000 * v) / (Math.PI * d)
    setRpm(Math.round(result))
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
                        เครื่องจักรกลการผลิต
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                        เครื่องจักรสำคัญในสายการผลิตที่ช่วยให้การทำงานรวดเร็วและแม่นยำ
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
                            src="/images/lathe.jpg"
                            alt="เครื่องกลึง"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-sky-700 mb-2">🛠 เครื่องกลึง (Lathe)</h3>
                            <p className="text-sm text-gray-600">
                            ใช้ในการกลึงชิ้นงานให้เป็นทรงกระบอก โดยการหมุนชิ้นงานกับเครื่องมือ
                            </p>
                        </div>
                        </div>
        
                        {/* การ์ด 2: ปั๊มลูกสูบ */}
                        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                        <Image
                            src="/images/milling.jpg"
                            alt="เครื่องมิลลิ่ง"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-sky-700 mb-2">🧰 เครื่องมิลลิ่ง (Milling)</h3>
                            <p className="text-sm text-gray-600">
                            ใช้ลูกสูบในการดูดและส่งของเหลวให้แรงดันสูง นิยมในระบบไฮดรอลิก
                            </p>
                        </div>
                        </div>
        
                        {/* การ์ด 3: คอมเพรสเซอร์แบบสกรู */}
                        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
                        <Image
                            src="/images/cnc.jpg"
                            alt="เครื่องจักร"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-sky-700 mb-2">🤖 เครื่องจักร CNC</h3>
                            <p className="text-sm text-gray-600">
                            ควบคุมด้วยคอมพิวเตอร์ สามารถผลิตงานที่ซับซ้อนได้อย่างแม่นยำสูง
                            </p>
                        </div>
                        </div> 
                    </motion.div>
        </section>

        <section className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
            <h3 className="text-2xl font-bold text-center text-sky-700 mb-4">🛠 คำนวณความเร็วรอบ (RPM)</h3>
            <p className="text-center text-gray-600 mb-6">สูตร: (1000 × ความเร็วตัด) / (π × เส้นผ่านศูนย์กลาง)</p>

            <div className="space-y-4">
                <div>
                <label className="block text-gray-700 font-medium">ความเร็วตัด (Cutting Speed) m/min</label>
                <input
                    type="number"
                    value={cuttingSpeed}
                    onChange={(e) => setCuttingSpeed(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="เช่น 60"
                />
                </div>
                <div>
                <label className="block text-gray-700 font-medium">เส้นผ่านศูนย์กลางชิ้นงาน (Diameter) mm</label>
                <input
                    type="number"
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="เช่น 40"
                />
                </div>

                <button
                onClick={calculateRPM}
                className="w-full bg-sky-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-sky-700 transition"
                >
                คำนวณ
                </button>

                {rpm !== null && (
                <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-green-700">🌀 ความเร็วรอบที่ต้องใช้คือ:</p>
                    <p className="text-2xl font-bold text-gray-800">{rpm} รอบ/นาที (RPM)</p>
                </div>
                )}
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
