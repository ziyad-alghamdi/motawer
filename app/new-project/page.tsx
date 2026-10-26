"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    city: "",
    landWidth: "",
    landLength: "",
    floors: "2",
    bedrooms: "4",
    parking: "2",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    localStorage.setItem("motawerProject", JSON.stringify(form));
    router.push("/project-details");
  };

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-[#173f35]"
          >
            ← العودة للرئيسية
          </a>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 rounded-full bg-gray-200" />
          </div>

          <p className="text-sm text-[#2f6f5e] mt-5">
            الخطوة 1 من 3
          </p>

          <h1 className="text-4xl font-bold mt-2">
            بيانات المشروع
          </h1>

          <p className="text-gray-600 mt-3">
            أدخل معلومات الأرض والاحتياجات الأساسية.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                المدينة
              </label>

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="مثال: جدة"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                عرض الأرض (متر)
              </label>

              <input
                name="landWidth"
                type="number"
                value={form.landWidth}
                onChange={handleChange}
                placeholder="20"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                طول الأرض (متر)
              </label>

              <input
                name="landLength"
                type="number"
                value={form.landLength}
                onChange={handleChange}
                placeholder="30"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                عدد الأدوار
              </label>

              <select
                name="floors"
                value={form.floors}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              >
                <option value="1">دور واحد</option>
                <option value="2">دورين</option>
                <option value="3">3 أدوار</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                عدد غرف النوم
              </label>

              <select
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              >
                <option value="3">3 غرف</option>
                <option value="4">4 غرف</option>
                <option value="5">5 غرف</option>
                <option value="6">6 غرف</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                عدد مواقف السيارات
              </label>

              <select
                name="parking"
                value={form.parking}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#2f6f5e]"
              >
                <option value="1">موقف واحد</option>
                <option value="2">موقفين</option>
                <option value="3">3 مواقف</option>
                <option value="4">4 مواقف</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full mt-8 bg-[#173f35] text-white py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            متابعة
          </button>
        </div>
      </div>
    </main>
  );
}