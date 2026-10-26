"use client";

import { useEffect, useState } from "react";

type ProjectData = {
  city?: string;
  landWidth?: string;
  landLength?: string;
  floors?: string;
  bedrooms?: string;
  parking?: string;
  features?: string[];
  kitchen?: string;
  privacy?: string;
};

const featureNames: Record<string, string> = {
  majlis: "مجلس",
  dining: "غرفة طعام",
  maidRoom: "غرفة خادمة",
  elevator: "مصعد",
  garden: "حديقة",
  pool: "مسبح",
  office: "مكتب منزلي",
  driverRoom: "غرفة سائق",
};

export default function ProjectSummaryPage() {
  const [project, setProject] = useState<ProjectData>({});

  useEffect(() => {
    const saved = localStorage.getItem("motawerProject");

    if (saved) {
      setProject(JSON.parse(saved));
    }
  }, []);

  const area =
    Number(project.landWidth || 0) *
    Number(project.landLength || 0);

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <a
          href="/project-details"
          className="text-sm text-gray-500 hover:text-[#173f35]"
        >
          ← رجوع
        </a>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
          <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
          <div className="h-2 flex-1 rounded-full bg-[#173f35]" />
        </div>

        <p className="text-sm text-[#2f6f5e] mt-5">
          الخطوة 3 من 3
        </p>

        <h1 className="text-4xl font-bold mt-2">
          ملخص مشروعك
        </h1>

        <p className="text-gray-600 mt-3">
          راجع المعلومات قبل إنشاء التصور المبدئي.
        </p>

        <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard label="المدينة" value={project.city || "-"} />

            <InfoCard
              label="مساحة الأرض"
              value={`${area} م²`}
            />

            <InfoCard
              label="الأبعاد"
              value={`${project.landWidth || "-"} × ${
                project.landLength || "-"
              } متر`}
            />

            <InfoCard
              label="عدد الأدوار"
              value={project.floors || "-"}
            />

            <InfoCard
              label="غرف النوم"
              value={project.bedrooms || "-"}
            />

            <InfoCard
              label="المواقف"
              value={project.parking || "-"}
            />
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="font-semibold text-lg">
              المميزات المختارة
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.features?.length ? (
                project.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-[#e8efec] text-[#173f35] px-4 py-2 rounded-full text-sm"
                  >
                    {featureNames[feature]}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">
                  لم يتم اختيار مميزات إضافية
                </span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <InfoCard
              label="نوع المطبخ"
              value={
                project.kitchen === "open"
                  ? "مفتوح"
                  : "مغلق"
              }
            />

            <InfoCard
              label="مستوى الخصوصية"
              value={
                project.privacy === "high"
                  ? "مرتفع"
                  : project.privacy === "low"
                  ? "منخفض"
                  : "متوسط"
              }
            />
          </div>

          <a
            href="/design-options"
            className="block text-center w-full mt-10 bg-[#173f35] text-white py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            إنشاء التصاميم
          </a>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#f7f8f6] rounded-2xl p-5">
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-semibold text-lg mt-2">
        {value}
      </p>
    </div>
  );
}