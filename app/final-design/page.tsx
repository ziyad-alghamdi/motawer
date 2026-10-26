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
  selectedDesign?: string;
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

export default function FinalDesignPage() {
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

  const designName =
    project.selectedDesign === "privacy"
      ? "تصميم الخصوصية"
      : project.selectedDesign === "open"
      ? "التصميم المفتوح"
      : "أفضل استغلال للمساحة";

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/floor-plan"
            className="text-sm text-gray-500 hover:text-[#173f35]"
          >
            ← رجوع للمخطط
          </a>

          <a
            href="/"
            className="text-sm font-medium text-[#173f35]"
          >
            مطوّر
          </a>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#e8efec] text-[#173f35] text-sm">
            تم إعداد التصور المبدئي
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            مشروعك جاهز
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
            هذا تصور مبدئي للمشروع بناءً على بيانات الأرض والاحتياجات
            التي قمت بإدخالها.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6 mt-12">
          <section className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#2f6f5e] font-medium">
                  التصميم المختار
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {designName}
                </h2>
              </div>

              <span className="text-xs bg-[#e8efec] text-[#173f35] px-3 py-1.5 rounded-full">
                Concept Design
              </span>
            </div>

            <div className="mt-7">
              <FinalPlan design={project.selectedDesign || "efficient"} />
            </div>
          </section>

          <aside className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm h-fit">
            <h2 className="text-xl font-bold">
              معلومات المشروع
            </h2>

            <div className="mt-6 space-y-4">
              <Info label="المدينة" value={project.city || "-"} />
              <Info
                label="مساحة الأرض"
                value={`${area || "-"} م²`}
              />
              <Info
                label="أبعاد الأرض"
                value={`${project.landWidth || "-"} × ${
                  project.landLength || "-"
                } متر`}
              />
              <Info
                label="عدد الأدوار"
                value={project.floors || "-"}
              />
              <Info
                label="غرف النوم"
                value={project.bedrooms || "-"}
              />
              <Info
                label="المواقف"
                value={project.parking || "-"}
              />
            </div>

            <div className="border-t border-gray-200 mt-7 pt-6">
              <h3 className="font-semibold">
                المميزات
              </h3>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.features?.length ? (
                  project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-2 rounded-full bg-[#e8efec] text-[#173f35]"
                    >
                      {featureNames[feature]}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">
                    لا توجد مميزات إضافية
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-7">
              <button
                onClick={() => window.print()}
                className="border border-gray-300 bg-white py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                طباعة
              </button>

              <a
                href="/new-project"
                className="text-center bg-[#173f35] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                مشروع جديد
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-8 bg-[#173f35] text-white rounded-3xl p-7">
          <h2 className="text-xl font-bold">
            ملاحظة
          </h2>

          <p className="mt-3 text-white/80 leading-7">
            هذا المخطط تصور مبدئي لأغراض الاستكشاف والتخطيط الأولي،
            وليس مخططًا هندسيًا معتمدًا للتنفيذ.
          </p>
        </div>
      </div>
    </main>
  );
}

function FinalPlan({ design }: { design: string }) {
  if (design === "privacy") {
    return (
      <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-2xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
        <Room title="مجلس" className="col-span-2" />
        <Room title="مدخل ضيوف" />
        <Room title="دورة مياه" />
        <Room title="صالة عائلية" className="col-span-2 row-span-2" />
        <Room title="مطبخ" className="row-span-2" />
        <Room title="غرفة طعام" />
        <Room title="درج" />
      </div>
    );
  }

  if (design === "open") {
    return (
      <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-2xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
        <Room title="صالة مفتوحة" className="col-span-3 row-span-2" />
        <Room title="مجلس" />
        <Room title="مطبخ مفتوح" />
        <Room title="غرفة طعام" className="col-span-2" />
        <Room title="درج" />
        <Room title="دورة مياه" />
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-2xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
      <Room title="مجلس" className="col-span-2" />
      <Room title="صالة" />
      <Room title="دورة مياه" />
      <Room title="غرفة طعام" />
      <Room title="مطبخ" className="col-span-2" />
      <Room title="درج" />
      <Room title="غرفة متعددة الاستخدام" className="col-span-2" />
      <Room title="مخزن" />
      <Room title="خدمات" />
    </div>
  );
}

function Room({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-[#8ea79f] bg-[#eef3f1] rounded-lg flex items-center justify-center text-center p-3 ${className}`}
    >
      <span className="font-medium text-sm text-[#173f35]">
        {title}
      </span>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="font-medium text-sm">
        {value}
      </span>
    </div>
  );
}