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

export default function FloorPlanPage() {
  const [project, setProject] = useState<ProjectData>({});

  useEffect(() => {
    const saved = localStorage.getItem("motawerProject");

    if (saved) {
      setProject(JSON.parse(saved));
    }
  }, []);

  const designName =
    project.selectedDesign === "privacy"
      ? "تصميم الخصوصية"
      : project.selectedDesign === "open"
      ? "التصميم المفتوح"
      : "أفضل استغلال للمساحة";

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <a
          href="/design-options"
          className="text-sm text-gray-500 hover:text-[#173f35]"
        >
          ← رجوع للتصاميم
        </a>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="text-sm text-[#2f6f5e] font-medium">
              المخطط المبدئي
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {designName}
            </h1>

            <p className="text-gray-600 mt-3">
              تصور أولي لتوزيع المساحات بناءً على اختياراتك.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4">
            <p className="text-xs text-gray-500">
              مساحة الأرض
            </p>

            <p className="font-semibold mt-1">
              {project.landWidth || "-"} × {project.landLength || "-"} متر
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-10">
          <section className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  الدور الأرضي
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  مخطط توضيحي مبدئي
                </p>
              </div>

              <span className="text-xs px-3 py-1.5 rounded-full bg-[#e8efec] text-[#173f35]">
                2D Plan
              </span>
            </div>

            <FloorPlan design={project.selectedDesign || "efficient"} />
          </section>

          <aside className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold">
              تفاصيل المشروع
            </h2>

            <div className="mt-6 space-y-5">
              <Detail
                label="المدينة"
                value={project.city || "-"}
              />

              <Detail
                label="عدد الأدوار"
                value={project.floors || "-"}
              />

              <Detail
                label="غرف النوم"
                value={project.bedrooms || "-"}
              />

              <Detail
                label="المواقف"
                value={project.parking || "-"}
              />

              <Detail
                label="نوع التصميم"
                value={designName}
              />
            </div>

            <a
              href="/final-design"
              className="block text-center w-full mt-8 bg-[#173f35] text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition"
            >
              اعتماد هذا التصميم
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}

function FloorPlan({ design }: { design: string }) {
  if (design === "privacy") {
    return (
      <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
        <Room title="مجلس" className="col-span-2 row-span-1" />
        <Room title="مدخل ضيوف" />
        <Room title="دورة مياه" />

        <Room title="صالة عائلية" className="col-span-2 row-span-2" />
        <Room title="مطبخ" className="row-span-2" />
        <Room title="غرفة طعام" className="row-span-1" />
        <Room title="درج" />
      </div>
    );
  }

  if (design === "open") {
    return (
      <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
        <Room title="صالة مفتوحة" className="col-span-3 row-span-2" />
        <Room title="مجلس" className="row-span-1" />
        <Room title="مطبخ مفتوح" className="row-span-1" />

        <Room title="غرفة طعام" className="col-span-2" />
        <Room title="درج" />
        <Room title="دورة مياه" />
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] bg-[#f9faf9] border-2 border-[#173f35] rounded-xl p-3 grid grid-cols-4 grid-rows-3 gap-2">
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
      className={`border border-[#8ea79f] bg-[#eef3f1] rounded-lg flex items-center justify-center text-center p-3 min-h-[90px] ${className}`}
    >
      <span className="font-medium text-sm text-[#173f35]">
        {title}
      </span>
    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="font-medium mt-1">
        {value}
      </p>
    </div>
  );
}