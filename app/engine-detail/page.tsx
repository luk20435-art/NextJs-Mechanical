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
import { Separator } from "@radix-ui/react-separator";


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
        

        <div className="bg-white text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Card ซ้าย */}
                <div className="bg-[#121212] rounded-l overflow-hidden shadow-lg">
                <Image
                    src="/images/engine.jpg" // เปลี่ยนชื่อภาพตามของคุณ
                    alt="3D Reconstruction"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                />
                <div className="p-6">
                    <h2 className="text-green-400 text-2xl font-semibold mb-3">
                     เครื่องยนต์สันดาปภายใน (Internal Combustion Engine - ICE)
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed"></p>
                        <p><span>1. เครื่องยนต์เบนซิน (Gasoline Engine) – จุดระเบิดด้วยหัวเทียน</span></p>
                        <p><span>2. เครื่องยนต์ดีเซล (Diesel Engine) – จุดระเบิดด้วยความดัน</span></p>
                        <p><span>3. เครื่องยนต์แก๊สธรรมชาติ (NGV / LPG Engine)</span></p>
                        <p><span>4. เครื่องยนต์โรตารี (Rotary Engine) – เช่นเครื่องยนต์ Wankel</span></p>
                        <p><span>5. เครื่องยนต์สองจังหวะ / สี่จังหวะ – พบในจักรยานยนต์, เครื่องตัดหญ้า </span></p>
                    
                </div>
                </div>

                {/* Card ขวา */}
                <div className="bg-[#121212] rounded-l overflow-hidden shadow-lg">
                <Image
                    src="/images/electric_motor.jpg" // ใส่ภาพอื่น เช่น robot
                    alt="Robotic Arm"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                />
                <div className="p-6">
                    <h2 className="text-green-400 text-2xl font-semibold mb-3">
                     เครื่องยนต์ไฟฟ้า (Electric Motor)
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        <p><span>1. DC Motor (กระแสตรง)</span></p>
                        <p><span>2. AC Motor (กระแสสลับ)</span></p>
                        <p><span>3. Brushless DC Motor (BLDC)</span></p>
                        <p><span>4. Stepper Motor – ใช้ในหุ่นยนต์หรืออุปกรณ์ควบคุมที่ต้องการความแม่นยำ</span></p>
                        <p><span>5. Servo Motor – ใช้ในระบบที่ต้องการแรงบิดและตำแหน่งแม่นยำ เช่น แขนกล </span></p>
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-white text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Card ซ้าย */}
                <div className="bg-[#121212] rounded-l overflow-hidden shadow-lg">
                <Image
                    src="/images/drive_systems.jpg" // เปลี่ยนชื่อภาพตามของคุณ
                    alt="3D Reconstruction"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                />
                <div className="p-6">
                    <h2 className="text-green-400 text-2xl font-semibold mb-6">
                     ระบบขับเคลื่อน (Drive Systems)
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        <p><span>1. ระบบส่งกำลัง (Transmission System)</span></p>
                        <p><span>2. ระบบขับเคลื่อนล้อ (Drivetrain)</span></p>
                        <p><span>3. ระบบเพลา เพลาขับ เพลาล้อ</span></p>
                        <p><span>4. สายพาน / โซ่ขับเคลื่อน</span></p>
                        <p><span>5. ไฮดรอลิก / นิวแมติกขับเคลื่อน </span></p>
                    </p>
                </div>
                </div>

                {/* Card ขวา */}
                <div className="bg-[#121212] rounded-l overflow-hidden shadow-lg">
                <Image
                    src="/images/smart_drive.jpg" // ใส่ภาพอื่น เช่น robot
                    alt="Robotic Arm"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                />
                <div className="p-6">
                    <h2 className="text-green-400 text-2xl font-semibold mb-3">
                     ระบบควบคุมอัจฉริยะ (Smart Drive & Hybrid Systems)
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        <p><span>1. Hybrid Drive (HEV / PHEV) – ใช้ทั้งเครื่องยนต์และมอเตอร์ไฟฟ้า</span></p>
                        <p><span>2. Electric Drive Unit (EDU) – หน่วยขับเคลื่อนในรถยนต์ไฟฟ้า</span></p>
                        <p><span>3. ระบบควบคุมมอเตอร์ด้วย Inverter / Controller</span></p> 
                    </p>
                </div>
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
