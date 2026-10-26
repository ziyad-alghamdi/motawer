"use client";

import { useRouter } from "next/navigation";

const designs = [
  {
    id: "privacy",
    title: "تصميم الخصوصية",
    description:
      "يركز على فصل الضيوف عن المساحات العائلية وتحقيق خصوصية أعلى داخل المنزل.",
    tag: "خصوصية عالية",
  },
  {
    id: "open",
    title: "التصميم المفتوح",
    description:
      "يركز على المساحات المفتوحة وربط الصالة والمطبخ ومناطق المعيشة بشكل أكبر.",
    tag: "مساحات أوسع",
  },
  {
    id: "efficient",
    title: "أفضل استغلال للمساحة",
    description:
      "يركز على الاستفادة من مساحة الأرض وتقليل المساحات المهدرة قدر الإمكان.",
    tag: "استغلال ذكي",
  },
];

export default function DesignOptionsPage() {
  const router = useRouter();

  const selectDesign = (id: string) => {
    const project = JSON.parse(
      localStorage.getItem("motawerProject") || "{}"
    );

    const updatedProject = {
      ...project,
      selectedDesign: id,
    };

    localStorage.setItem(
      "motawerProject",
      JSON.stringify(updatedProject)
    );

    router.push("/floor-plan");
  };

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <a
          href="/project-summary"
          className="text-sm text-gray-500 hover:text-[#173f35]"
        >
          ← رجوع
        </a>

        <div className="mt-8">
          <p className="text-sm text-[#2f6f5e] font-medium">
            التصاميم المقترحة
          </p>

          <h1 className="text-4xl font-bold mt-2">
            اختر أسلوب التصميم
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl">
            اختر التصميم الأقرب لاحتياجاتك. يمكنك تعديل التفاصيل لاحقًا.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {designs.map((design) => (
            <div
              key={design.id}
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-48 rounded-2xl bg-[#e8efec] flex items-center justify-center">
                <div className="w-32 h-24 border-2 border-[#173f35] rounded-lg relative">
                  <div className="absolute top-0 left-1/2 h-full border-l-2 border-[#173f35]" />
                  <div className="absolute top-1/2 left-0 w-full border-t-2 border-[#173f35]" />
                </div>
              </div>

              <div className="mt-6">
                <span className="inline-block text-xs bg-[#e8efec] text-[#173f35] px-3 py-1.5 rounded-full">
                  {design.tag}
                </span>

                <h2 className="text-xl font-bold mt-4">
                  {design.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-7 text-sm">
                  {design.description}
                </p>

                <button
                  onClick={() => selectDesign(design.id)}
                  className="w-full mt-6 bg-[#173f35] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
                >
                  اختيار التصميم
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}