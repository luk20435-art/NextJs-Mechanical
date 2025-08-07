"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button"; 
import { Cog } from "lucide-react";
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaNetworkWired, FaMicrochip, FaChartLine } from 'react-icons/fa'


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
            {/* Section: Heading */}
            <section className="text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">ระบบ IoT ในอุตสาหกรรม</h1>
                <p className="text-gray-600 text-lg">
                IoT (Internet of Things) คือการเชื่อมต่ออุปกรณ์ต่างๆ ผ่านอินเทอร์เน็ต เพื่อควบคุม ตรวจสอบ และวิเคราะห์ข้อมูลในโรงงานอุตสาหกรรม
                </p>
                <Image
                src="/images/iot-utasahakam.jpg"
                alt="IoT Industrial"
                width={800}
                height={400}
                className="mx-auto mt-6 rounded-lg shadow-lg"
                />
            </section>

            {/* Section: การทำงานของ IoT */}
            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mb-6">องค์ประกอบหลักของ IoT</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <FaMicrochip className="text-4xl text-blue-500 mb-4" />
                    <h3 className="font-bold text-blue-700 mb-2">Sensor & Device</h3>
                    <p className="text-gray-600 text-sm">
                    ตรวจวัดค่าต่างๆ เช่น อุณหภูมิ, ความชื้น, ความดัน และส่งข้อมูลเข้าสู่ระบบ
                    </p>
                    <Image src="/images/sensor.jpg" alt="Sensor" width={300} height={200} className="mt-4 rounded-md" />
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <FaNetworkWired className="text-4xl text-blue-500 mb-4" />
                    <h3 className="font-bold text-blue-700 mb-2">Connectivity</h3>
                    <p className="text-gray-600 text-sm">
                    การเชื่อมต่อผ่าน Wi-Fi, Ethernet, 4G/5G เพื่อส่งข้อมูลจากอุปกรณ์สู่คลาวด์หรือเซิร์ฟเวอร์
                    </p>
                    <Image src="/images/connectivity.jpg" alt="Connectivity" width={300} height={200} className="mt-4 rounded-md" />
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <FaChartLine className="text-4xl text-blue-500 mb-4" />
                    <h3 className="font-bold text-blue-700 mb-2">Data & Dashboard</h3>
                    <p className="text-gray-600 text-sm">
                    การประมวลผล วิเคราะห์ข้อมูล และแสดงผลผ่านแดชบอร์ดเพื่อช่วยในการตัดสินใจ
                    </p>
                    <Image src="/images/data.jpg" alt="Dashboard" width={300} height={200} className="mt-4 rounded-md" />
                </div>
                </div>
            </section>
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
