"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Cog } from "lucide-react";
import Link from "next/link";


export default function MachineDetailPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

       <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
            
            {/* SECTION: Introduction */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold text-blue-700 mb-4">🧠 ระบบควบคุมด้วย PLC</h1>
                <p className="text-gray-700 max-w-3xl mx-auto">
                PLC (Programmable Logic Controller) คือคอมพิวเตอร์ขนาดเล็กที่ออกแบบมาเพื่อควบคุมกระบวนการในโรงงานอุตสาหกรรม เช่น การควบคุมมอเตอร์, สายพาน, หุ่นยนต์ ฯลฯ
                </p>

                <div className="mt-8">
                <Image
                    src="/images/plc_system.jpg"
                    alt="PLC system"
                    width={800}
                    height={400}
                    className="rounded-xl shadow-lg mx-auto"
                />
                </div>
            </motion.section>

            {/* SECTION: หลักการทำงาน */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">⚙️ หลักการทำงานของ PLC</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                    src="/images/plc-working.png"
                    alt="PLC working"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                />
                <ul className="space-y-4 text-gray-700">
                    <li>✅ รับข้อมูลจากเซนเซอร์หรือสวิตช์</li>
                    <li>✅ ประมวลผลตามโปรแกรมที่เขียนไว้</li>
                    <li>✅ ส่งสัญญาณควบคุมอุปกรณ์ต่างๆ เช่น มอเตอร์ หรือโซลินอยด์</li>
                </ul>
                </div>
            </motion.section>

            {/* SECTION: ตัวอย่างการใช้งาน */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🏭 ตัวอย่างการใช้งานในอุตสาหกรรม</h2>
                <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                    title: 'ควบคุมสายพานลำเลียง',
                    img: '/images/conveyor.jpg',
                    },
                    {
                    title: 'ควบคุมหุ่นยนต์หยิบวัตถุ',
                    img: '/images/robotic-arm.jpg',
                    },
                    {
                    title: 'ควบคุมระบบบรรจุภัณฑ์',
                    img: '/images/packaging.jpg',
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="rounded-md mb-3 w-full h-48 object-cover"
                    />
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    </div>
                ))}
                </div>
            </motion.section>

            {/* SECTION: โปรแกรม PLC เบื้องต้น */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 ตัวอย่างโปรแกรม PLC (Ladder Diagram)</h2>
                <div className="bg-gray-100 p-4 rounded-md shadow-md overflow-x-auto">
                <Image
                    src="/images/ladder-example.jpg"
                    alt="Ladder Diagram"
                    width={800}
                    height={300}
                    className="rounded-lg mx-auto"
                />
                </div>
            </motion.section> 
        </main>
            
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
