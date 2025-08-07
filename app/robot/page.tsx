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
                หุ่นยนต์ในสายการผลิต
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Robotics (หุ่นยนต์) เป็นเทคโนโลยีที่ใช้ในการทำงานอัตโนมัติ เพื่อเพิ่มประสิทธิภาพ ความแม่นยำ และความปลอดภัยในโรงงานอุตสาหกรรม
                </p>
            </motion.div>

            {/* หัวข้อย่อยเป็นการ์ด */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* การ์ด 1 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-arm.jpg"
                    alt="แขนกลอุตสาหกรรม"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">แขนกลอุตสาหกรรม (Robotic Arm)</h3>
                <p className="text-sm text-gray-600">
                    ทำหน้าที่หยิบจับ ยก วาง หรือประกอบชิ้นงานในสายการผลิตโดยอัตโนมัติ
                </p>
                </div>

                {/* การ์ด 2 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-welding.jpg"
                    alt="หุ่นยนต์เชื่อม"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">หุ่นยนต์เชื่อม (Welding Robot)</h3>
                <p className="text-sm text-gray-600">
                    เชื่อมชิ้นงานด้วยความแม่นยำสูง ลดความเสี่ยงและเพิ่มความเร็วการผลิต
                </p>
                </div>

                {/* การ์ด 3 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-vision.jpg"
                    alt="ระบบกล้องตรวจจับ"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">ระบบมองเห็น (Vision System)</h3>
                <p className="text-sm text-gray-600">
                    ใช้กล้องและ AI ตรวจสอบตำแหน่ง/ขนาด/ข้อผิดพลาดก่อนหรือหลังการประกอบ
                </p>
                </div>

                {/* การ์ด 4 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-agv.jpg"
                    alt="หุ่นยนต์ขนส่ง (AGV)"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">หุ่นยนต์ขนส่ง (AGV)</h3>
                <p className="text-sm text-gray-600">
                    ขนส่งวัตถุดิบและสินค้าภายในโรงงานด้วยระบบนำทางอัตโนมัติ
                </p>
                </div>

                {/* การ์ด 5 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-packaging.jpg"
                    alt="หุ่นยนต์บรรจุภัณฑ์"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">หุ่นยนต์บรรจุภัณฑ์</h3>
                <p className="text-sm text-gray-600">
                    จัดเรียงสินค้า ห่อ แพ็คกล่อง และเตรียมสำหรับการขนส่งโดยอัตโนมัติ
                </p>
                </div>

                {/* การ์ด 6 */}
                <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
                <Image
                    src="/images/robot-maintenance.jpg"
                    alt="ระบบแจ้งเตือนซ่อมบำรุง"
                    width={400}
                    height={250}
                    className="rounded-md mb-4 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-purple-700 mb-2">ระบบวิเคราะห์การซ่อมบำรุง</h3>
                <p className="text-sm text-gray-600">
                    ตรวจจับการสึกหรอหรือปัญหาของหุ่นยนต์แบบเรียลไทม์ ลด Downtime
                </p>
                </div>
            </motion.div>

            {/* ปุ่มเพิ่มเติม */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
            > 
            </motion.div>
        </section>
       
            
        {/* 🔙 ปุ่มย้อนกลับ */}
        <div className="max-w-6xl mx-auto mb-2 ml-22">
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
