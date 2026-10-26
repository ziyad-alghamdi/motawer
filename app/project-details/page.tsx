"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  { id: "majlis", label: "مجلس" },
  { id: "dining", label: "غرفة طعام" },
  { id: "maidRoom", label: "غرفة خادمة" },
  { id: "elevator", label: "مصعد" },
  { id: "garden", label: "حديقة" },
  { id: "pool", label: "مسبح" },
  { id: "office", label: "مكتب منزلي" },
  { id: "driverRoom", label: "غرفة سائق" },
];

export default function ProjectDetailsPage() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const [kitchen, setKitchen] = useState("closed");
  const [privacy, setPrivacy] = useState("medium");

  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleNext = () => {
    const oldData = JSON.parse(
      localStorage.getItem("motawerProject") || "{}"
    );

    const updatedProject = {
      ...oldData,
      features: selected,
      kitchen,
      privacy,
    };

    localStorage.setItem(
      "motawerProject",
      JSON.stringify(updatedProject)
    );

    router.push("/project-summary");
  };

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <a
          href="/new-project"
          className="text-sm text-gray-500 hover:text-[#173f35]"
        >
          ← رجوع
        </a>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
          <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
          <div className="h-2 flex-1 rounded-full bg-gray-200" />
        </div>

        <p className="text-sm text-[#2f6f5e] mt-5">
          الخطوة 2 من 3
        </p>

        <h1 className="text-4xl font-bold mt-2">
          تفاصيل المشروع
        </h1>

        <p className="text-gray-600 mt-3">
          اختر العناصر التي ترغب بوجودها في مشروعك.
        </p>

        <section className="mt-10 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-5">
            المساحات والمميزات
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.map((option) => {
              const active = selected.includes(option.id);

              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`rounded-2xl border p-5 text-center transition ${
                    active
                      ? "border-[#173f35] bg-[#e8efec] text-[#173f35]"
                      : "border-gray-200 bg-white hover:border-gray-400"
                  }`}
                >
                  <div className="font-medium">
                    {option.label}
                  </div>

                  <div className="mt-2 text-xs text-gray-500">
                    {active ? "تم الاختيار ✓" : "اضغط للاختيار"}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            <label className="block font-semibold mb-3">
              نوع المطبخ
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setKitchen("closed")}
                className={`p-4 rounded-xl border ${
                  kitchen === "closed"
                    ? "border-[#173f35] bg-[#e8efec]"
                    : "border-gray-200"
                }`}
              >
                مطبخ مغلق
              </button>

              <button
                onClick={() => setKitchen("open")}
                className={`p-4 rounded-xl border ${
                  kitchen === "open"
                    ? "border-[#173f35] bg-[#e8efec]"
                    : "border-gray-200"
                }`}
              >
                مطبخ مفتوح
              </button>
            </div>
          </div>

          <div className="mt-10">
            <label className="block font-semibold mb-3">
              مستوى الخصوصية
            </label>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["low", "منخفض"],
                ["medium", "متوسط"],
                ["high", "مرتفع"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setPrivacy(value)}
                  className={`p-4 rounded-xl border ${
                    privacy === value
                      ? "border-[#173f35] bg-[#e8efec]"
                      : "border-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full mt-10 bg-[#173f35] text-white py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            عرض ملخص المشروع
          </button>
        </section>
      </div>
    </main>
  );
}