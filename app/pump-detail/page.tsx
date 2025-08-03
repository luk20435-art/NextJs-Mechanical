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
        <section className="py-20 px-6 bg-white min-h-screen" ref={ref}>
            
        {/* 🔙 ปุ่มย้อนกลับ */}
        <div className="max-w-6xl mx-auto mb-6">
            <Button variant="outline" onClick={() => router.back()}>
            ⬅️ ย้อนกลับ
            </Button>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* 🖼️ รูปภาพ */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            >
            <Image
                src="/images/gear.jpg"
                alt="Gears"
                width={500}
                height={500}
                className="rounded-lg mx-auto"
            />
            </motion.div>

            {/* ✨ ข้อมูลรายละเอียด */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            >
            <h2 className="text-4xl font-bold text-purple-700">เครื่องจักรกลการผลิต</h2>
            <p className="text-gray-600 text-lg">
                รายละเอียดเกี่ยวกับเครื่องกลึง เครื่องมิลลิ่ง และ CNC
            </p>

            {/* 🔧 ประเภทเครื่องจักร */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">ประเภทเครื่องจักร:</h3>
                <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    เครื่องกลึงความเร็วสูง
                </li>
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    เครื่องมิลลิ่งควบคุมด้วยคอมพิวเตอร์
                </li>
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    เครื่อง CNC แบบ 3 แกน
                </li>
                </ul>
            </div>

            {/* 🌟 ฟีเจอร์หลัก */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">ฟีเจอร์หลัก:</h3>
                <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    ความแม่นยำสูงระดับไมครอน
                </li>
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    รองรับวัสดุหลายประเภท เช่น โลหะ พลาสติก
                </li>
                <li className="flex items-center">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    มีระบบควบคุมอัตโนมัติผ่านหน้าจอสัมผัส
                </li>
                </ul>
            </div>
            </motion.div>
        </div>
        </section>
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
