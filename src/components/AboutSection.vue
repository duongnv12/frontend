<template>
  <section id="about" class="py-16 md:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-800" data-aos="fade-up">
        Về tôi
      </h2>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div class="md:w-1/2" data-aos="fade-right">
          <img
            src="@/assets/duong39.jpg"
            alt="Về Nguyễn Văn Dương"
            class="rounded-lg shadow-xl mx-auto md:mx-0 max-w-full h-auto"
            loading="lazy"
          />
        </div>

        <div class="md:w-1/2 text-gray-700 text-lg leading-relaxed" data-aos="fade-left">
          <p class="mb-6">
            Xin chào! Tôi là **sinh viên năm [Năm học của bạn]** chuyên ngành **[Tên ngành của bạn]** tại **[Tên trường của bạn]**. Tôi có niềm đam mê đặc biệt với lĩnh vực **Phân tích Nghiệp vụ (BA)** và **Đảm bảo Chất lượng Phần mềm (QA)**, luôn tìm kiếm cơ hội để học hỏi và áp dụng kiến thức vào thực tế.
          </p>
          <p class="mb-6">
            Dù chưa có nhiều kinh nghiệm làm việc chính thức, tôi đã tích cực tham gia vào các **dự án học tập, đồ án môn học** và tự tìm tòi các phương pháp, công cụ chuẩn trong ngành. Tôi tự tin với khả năng **phân tích, giải quyết vấn đề, tư duy logic** và đặc biệt là sự **tỉ mỉ, cẩn trọng** trong từng chi tiết để đảm bảo chất lượng sản phẩm.
          </p>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Kỹ năng của tôi</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <font-awesome-icon :icon="['fas', 'clipboard-list']" class="text-blue-500 text-xl" />
              <span class="font-medium text-gray-800">Phân tích Yêu cầu</span>
            </div>
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <font-awesome-icon :icon="['fas', 'file-alt']" class="text-green-500 text-xl" />
              <span class="font-medium text-gray-800">Viết Tài liệu</span>
            </div>
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <font-awesome-icon :icon="['fas', 'comments']" class="text-purple-500 text-xl" />
              <span class="font-medium text-gray-800">Giao tiếp hiệu quả</span>
            </div>

            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              <font-awesome-icon :icon="['fas', 'bug']" class="text-red-500 text-xl" />
              <span class="font-medium text-gray-800">Kiểm thử chức năng</span>
            </div>
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="500">
              <font-awesome-icon :icon="['fas', 'vial']" class="text-indigo-500 text-xl" />
              <span class="font-medium text-gray-800">Thiết kế Test Case</span>
            </div>
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="600">
              <font-awesome-icon :icon="['fas', 'robot']" class="text-orange-500 text-xl" />
              <span class="font-medium text-gray-800">Kiến thức Test Auto.</span>
            </div>
            <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="700">
              <font-awesome-icon :icon="['fas', 'brain']" class="text-yellow-500 text-xl" /> <span class="font-medium text-gray-800">Tư duy phản biện</span>
            </div>
             <div class="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="800">
              <font-awesome-icon :icon="['fas', 'users']" class="text-cyan-500 text-xl" /> <span class="font-medium text-gray-800">Làm việc nhóm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>