export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827]">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          مطوّر
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#features">المميزات</a>
          <a href="#how">كيف يعمل</a>
          <a href="#about">عن مطوّر</a>
        </div>

        <a
          href="/new-project"
          className="bg-[#173f35] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          ابدأ مشروعك
        </a>
      </nav>

      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e8efec] text-[#173f35] text-sm mb-6">
          تصميم عقاري مدعوم بالذكاء الاصطناعي
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          حوّل فكرتك إلى
          <span className="text-[#2f6f5e]"> مخطط</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
          أدخل معلومات أرضك واحتياجاتك، ودع مطوّر يساعدك في إنشاء
          تصور أولي لمشروعك بشكل سريع وبسيط.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/new-project"
            className="bg-[#173f35] text-white px-7 py-3.5 rounded-xl font-medium hover:opacity-90 transition"
          >
            ابدأ التصميم
          </a>

          <a
            href="#how"
            className="border border-gray-300 bg-white px-7 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition"
          >
            شاهد كيف يعمل
          </a>
        </div>
      </section>

      <section
        id="how"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <div className="text-center mb-12">
          <p className="text-sm text-[#2f6f5e] font-medium">
            كيف يعمل؟
          </p>

          <h2 className="text-3xl font-bold mt-2">
            من الفكرة إلى المخطط في ثلاث خطوات
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#e8efec] flex items-center justify-center font-bold text-[#173f35]">
              1
            </div>

            <h3 className="text-xl font-semibold mt-5">
              أدخل بيانات الأرض
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              أضف مساحة الأرض، الأبعاد، المدينة ونوع المشروع الذي تريد تصميمه.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#e8efec] flex items-center justify-center font-bold text-[#173f35]">
              2
            </div>

            <h3 className="text-xl font-semibold mt-5">
              حدد احتياجاتك
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              اختر عدد الغرف، الأدوار، المواقف والمساحات التي تحتاجها.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-[#e8efec] flex items-center justify-center font-bold text-[#173f35]">
              3
            </div>

            <h3 className="text-xl font-semibold mt-5">
              شاهد التصميم
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              استعرض أكثر من تصور مبدئي واختر التصميم الأقرب لرؤيتك.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}