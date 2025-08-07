"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator" 
import {
  Car,
  Zap,
  Gauge,
  FuelIcon as Engine,
  Cpu,
  ArrowRight,
  BookOpen,
  Users,
  Award,
} from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cog, Settings, Wrench } from "lucide-react";
import { motion } from "framer-motion";


export default function MechanicalEngineeringSite() {

const [current, setCurrent] = useState(0);

const applications = [
  { title: "", src: "/images/mechanics.jpg" },
  { title: "", src: "/images/engineering_materials.jpg" },
  { title: "", src: "/images/manufacturing_proces.jpg" },
  { title: "", src: "/images/machinery.jpg" },
  { title: "", src: "/images/control_systems.jpg" },
  { title: "", src: "/images/heat_transfer.jpg" }, // สามารถใส่สีพื้นแทนภาพ
];

 const machanics = [
  {
    id: "gear",
    title: "ระบบเฟือง (Gear Systems)",  
    summary: "การออกแบบและคำนวณระบบเฟืองสำหรับการส่งกำลัง",
    image: "/images/gear.jpg",
    href: "/gear",
  },
  {
    id: "pump",
    title: "กลไกลิงค์ (Linkage Mechanisms)",  
    summary: "การวิเคราะห์และออกแบบกลไกแบบต่างๆ",
    image: "/images/pump.jpg",
    href: "/pump",
  },
  {
    id: "belt",
    title: "ระบบสายพาน (Belt & Chain Systems)",  
    summary: "การส่งกำลังด้วยสายพานและโซ่",
    image: "/images/belt.jpg",
    href: "/belt",
  }
  
  ];

  const autos = [
  {
    id: "plc",
    title: "ระบบควบคุมด้วย PLC",  
    summary: "PLC (Programmable Logic Controller) เป็นคอมพิวเตอร์ขนาดเล็กที่ใช้ควบคุมกระบวนการต่างๆ ในโรงงานอุตสาหกรรม",
    image: "/images/plc.jpg",
    href: "/plc",
  },
  {
    id: "iot",
    title: "ระบบ IoT ในอุตสาหกรรม",  
    summary: "IoT (Internet of Things) คือการเชื่อมต่ออุปกรณ์ต่างๆ",
    image: "/images/iot.jpg",
    href: "/iot",
  },
  {
    id: "robot",
    title: "หุ่นยนต์ในสายการผลิต",  
    summary: "Robotics (หุ่นยนต์) เป็นเทคโนโลยีที่ใช้ในการทำงานอัตโนมัติ",
    image: "/images/robot.jpg",
    href: "/robot",
  }
  
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cog className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AutoMechLab</h1>
            </div>
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

      {/* Hero Section */}
      <section id="banner" className="relative h-[700px] w-full">
        {/* 🔹 Background Image */}
        <div className="relative w-full pb-[56.25%]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video_1.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 🔹 Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <motion.h1
              className="text-white text-3xl md:text-4xl font-bold text-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              การเรียนรู้ออนไลน์เกี่ยวกับแรง, กลไก, <br />
              เครื่องจักร, ยานยนต์, ระบบอัตโนมัติเบื้องต้น
            </motion.h1>
          </div>
        </div>
      </section>
 
 
      {/* Force Section */}
      <section id="force" className="py-20 px-4 mt-32">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800">แรง (Force)</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">หลักการของแรงและการเคลื่อนที่</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ศึกษาเกี่ยวกับแรง โมเมนต์ การสมดุล และการประยุกต์ใช้ในงานวิศวกรรม
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Gauge className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>กฎของนิวตัน</CardTitle>
                <CardDescription>กฎการเคลื่อนที่ 3 ข้อของนิวตัน และการประยุกต์ใช้</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• กฎข้อที่ 1: กฎความเฉื่อย</li>
                  <li>• กฎข้อที่ 2: F = ma</li>
                  <li>• กฎข้อที่ 3: แรงกิริยา-ปฏิกิริยา</li>
                </ul>
                {/* <Button className="w-full mt-4 bg-transparent" variant="outline">
                  เรียนรู้เพิ่มเติม <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>สถิตยศาสตร์</CardTitle>
                <CardDescription>การวิเคราะห์แรงในสภาวะสมดุล</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• การสมดุลของแรง</li>
                  <li>• การสมดุลของโมเมนต์</li>
                  <li>• การวิเคราะห์โครงสร้าง</li>
                </ul>
                {/* <Button className="w-full mt-4 bg-transparent" variant="outline">
                  เรียนรู้เพิ่มเติม <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>พลศาสตร์</CardTitle>
                <CardDescription>การเคลื่อนที่และแรงที่เปลี่ยนแปลงตามเวลา</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-10">
                  <li>• จลนศาสตร์ (Kinematics)</li>
                  <li>• จลนพลศาสตร์ (Kinetics)</li>
                  <li>• การสั่นสะเทือน</li>
                </ul>
                {/* <Button className="w-full mt-4 bg-transparent" variant="outline">
                  เรียนรู้เพิ่มเติม <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* กลไก */} 
      <section id="machanic" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">กลไก (Mechanics)</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">ระบบกลไกและการส่งกำลัง</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ศึกษาเกี่ยวกับกลไกต่างๆ การส่งผ่านกำลัง และการออกแบบระบบเครื่องกล
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {machanics.map((machanic, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={machanic.image}
                  alt={machanic.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {machanic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{machanic.summary}</p>
                </div> 
                    <div className="text-center mb-4">
                      <Link key={machanic.id} href={machanic.href}>
                        <span className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer">
                          เรียนรู้เพิ่มเติม →
                        </span>
                      </Link>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* เครื่องจักร */}
      <section id="machines" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800">เครื่องจักร (Machines)</Badge>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">เครื่องจักรกลและอุปกรณ์</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                เรียนรู้เกี่ยวกับเครื่องจักรกล การออกแบบ การบำรุงรักษา และการใช้งาน
              </p>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Engine className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <CardTitle>เครื่องยนต์</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">เครื่องยนต์สันดาปภายใน เครื่องยนต์ไฟฟ้า และระบบขับเคลื่อน</p>
                      <Link href="/engine-detail">
                        <Button variant="outline" size="sm" className="mt-2">
                          ดูรายละเอียด
                        </Button>
                      </Link>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Gauge className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <CardTitle>ปั๊มและคอมเพรสเซอร์</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">ระบบสูบและอัดของเหลวและก๊าซ</p>
                      <Link href="/pump-detail">
                        <Button variant="outline" size="sm" className="mt-8">
                          ดูรายละเอียด
                        </Button>
                      </Link>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Cog className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <CardTitle>เครื่องจักรกลการผลิต</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">เครื่องกลึง เครื่องมิลลิ่ง และเครื่องจักร CNC</p>
                      <Link href="/machine-detail">
                        <Button variant="outline" size="sm" className="mt-2">
                          ดูรายละเอียด
                        </Button>
                      </Link>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Settings className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <CardTitle>ระบบไฮดรอลิก</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">ระบบส่งกำลังด้วยของเหลวแรงดันสูง</p>
                      <Link href="/hydroulic-detail">
                        <Button variant="outline" size="sm" className="mt-8">
                          ดูรายละเอียด
                        </Button>
                      </Link>
                  </CardContent>
                </Card>
              </div>
          </div>
      </section>

      {/* ยานยนต์ */}
      <section id="automotive" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">ยานยนต์ (Automotive)</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">เทคโนโลยียานยนต์</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">ศึกษาระบบต่างๆ ในยานยนต์ การออกแบบ และเทคโนโลยีใหม่ๆ</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <video width="100%" height="auto"  autoPlay muted loop playsInline>
                <source src="/videos/technology.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Car className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold mb-2">ระบบขับเคลื่อน</h4>
                <p className="text-gray-600 text-sm">เครื่องยนต์ เกียร์ และระบบส่งกำลัง</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Gauge className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold mb-2">ระบบเบรก</h4>
                <p className="text-gray-600 text-sm">ระบบเบรกดิสก์ ดรัม และ ABS</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Zap className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold mb-2">ระบบไฟฟ้า</h4>
                <p className="text-gray-600 text-sm">ระบบไฟฟ้าและอิเล็กทรอนิกส์</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ระบบอัตโนมัติ */}
      <section id="auto" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">ระบบอัตโนมัติ (Automation)</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">ระบบควบคุมอัตโนมัติ</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เรียนรู้เกี่ยวกับระบบควบคุม PLC โรโบติกส์ และ IoT ในอุตสาหกรรม
            </p>
          </div>
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
                  <p className="text-gray-600 text-sm">{auto.summary}</p>
                </div> 
                    <div className="text-center mb-4">
                      <Link key={auto.id} href={auto.href}>
                        <span className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer">
                          เรียนรู้เพิ่มเติม →
                        </span>
                      </Link>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* รูปภาพ */}
      <section className="bg-white text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-neutral-900 text-xl font-semibold mb-8 border-l-4 border-teal-500 pl-4 uppercase tracking-wide">
          Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white font-semibold">
          {applications.map((app, index) => (
            <div
              key={index}
              className="relative group h-40 sm:h-48 md:h-52 overflow-hidden rounded-md"
            >
              {app.src ? (
                <Image
                  src={app.src}
                  alt={app.title}
                  fill
                  className="object-cover bg-gray-200 group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="bg-gray-800 w-full h-full" />
              )}

              <div className="absolute inset-0 bg-grey bg-opacity-40 group-hover:bg-opacity-60 transition duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-semibold tracking-wide">{app.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">พร้อมเริ่มเรียนรู้แล้วหรือยัง?</h3>
          <p className="text-xl mb-8 opacity-90">เข้าร่วมกับเราและพัฒนาทักษะด้านวิศวกรรมเครื่องกลของคุณ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
          </div>
        </div>
      </section>

      {/* Footer */}
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
                    แบบฝึกหัด
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
                <li>อีเมล: info@mechenghub.com</li>
                <li>โทร: 02-xxx-xxxx</li>
                <li>Facebook: MechEngHub</li>
                <li>Line: @mechenghub</li>
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
  )
}
function setCurrent(arg0: (prev: any) => number) {
  throw new Error("Function not implemented.");
}

