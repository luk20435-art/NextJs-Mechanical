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

  const items = [
  {
    title: "สายพานแบบแบน (Flat Belt)",
    description: "ใช้ในระบบความเร็วสูง เช่น เครื่องจักรโรงงานขนาดเบา",
    image: "/images/flat.jpg",
  },
  {
    title: "สายพานวี (V-Belt)",
    description: "สายพานทรง V ช่วยเพิ่มแรงเสียดทาน ใช้ในมอเตอร์ทั่วไป",
    image: "/images/vbelt.jpg",
  },
  {
    title: "สายพานฟันเฟือง (Timing Belt)",
    description: "ควบคุมตำแหน่งหมุนแม่นยำ ใช้ในเครื่อง CNC และเครื่องพิมพ์",
    image: "/images/timing.jpg",
  },
  {
    title: "ระบบโซ่ (Chain Drive)",
    description: "ทนทาน ใช้ในเครื่องจักรหนัก รถจักรยานยนต์ และสายพานลำเลียง",
    image: "/images/chain.jpg",
  },
]

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

        <section id="belt-chain" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
                >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ระบบสายพาน (Belt & Chain Systems)
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    การส่งกำลังด้วยสายพานและโซ่สำหรับการเคลื่อนที่ในเครื่องจักรหลากหลายรูปแบบ
                </p>
                </motion.div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {items.map((item, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                    >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                        {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    </motion.div>
                ))}
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
