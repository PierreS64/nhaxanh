// Mock Database of Districts and Wards
const LOCATION_DATA = {
  "Hà Nội": {
    "Hai Bà Trưng": ["Bách Khoa", "Đồng Tâm", "Trương Định", "Minh Khai", "Bạch Mai"],
    "Cầu Giấy": ["Dịch Vọng", "Quan Hoa", "Nghĩa Tân", "Mai Dịch", "Yên Hòa"],
    "Bắc Từ Liêm": ["Minh Khai", "Cổ Nhuế 1", "Cổ Nhuế 2", "Đông Ngạc", "Xuân Tảo"],
    "Đống Đa": ["Láng Thượng", "Láng Hạ", "Ô Chợ Dừa", "Cát Linh", "Khương Thượng"]
  },
  "TP.HCM": {
    "Quận 7": ["Tân Phong", "Tân Quy", "Tân Thuận Đông", "Tân Hưng", "Phú Mỹ"],
    "Bình Thạnh": ["Phường 25", "Phường 15", "Phường 26", "Phường 27", "Phường 19"],
    "Thủ Đức": ["Linh Trung", "Linh Tây", "Bình Thọ", "Trường Thọ", "Tam Bình"],
    "Quận 1": ["Bến Nghé", "Bến Thành", "Đa Kao", "Tân Định", "Phạm Ngũ Lão"]
  },
  "Đà Nẵng": {
    "Sơn Trà": ["An Hải Tây", "An Hải Bắc", "An Hải Đông", "Phước Mỹ", "Thọ Quang"],
    "Hải Châu": ["Thạch Thang", "Hòa Cường Bắc", "Hòa Cường Nam", "Phước Ninh", "Nam Dương"],
    "Thanh Khê": ["Vĩnh Trung", "Tân Chính", "Thạc Gián", "Chính Gián", "Xuân Hà"]
  },
  "Hải Phòng": {
    "Ngô Quyền": ["Lạch Tray", "Cầu Đất", "Gia Viên", "Đông Khê", "Máy Chai"],
    "Lê Chân": ["An Biên", "Cát Dài", "Hàng Kênh", "Trần Nguyên Hãn", "Dư Hàng"]
  }
};

// Initial Mock Blog Data
const INITIAL_BLOG_POSTS = [
  {
    id: "post-1",
    title: "Review phòng trọ cực chill tại Bình Thạnh",
    content: "Mình mới thuê được căn phòng trọ mini ở Bình Thạnh, view Landmark 81 cực đẹp. Điện nước giá hợp lý, đặc biệt là chị chủ nhà cực kỳ dễ tính và hỗ trợ nhiệt tình. Phòng rộng 40m2, thiết kế hiện đại thoáng mát, có thang máy, bảo vệ 24/7. Ai cần thông tin chi tiết nhắn mình nhé!",
    category: "REVIEW",
    authorName: "Trần Minh Quân",
    authorRole: "TENANT",
    authorPhone: "0901234567",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: "post-2",
    title: "Cảnh báo lừa đảo đặt cọc tại khu vực Cầu Giấy",
    content: "Mọi người cảnh giác với số điện thoại 0987 654 321 nhé. Người này đăng tin cho thuê căn hộ giá rất rẻ chỉ 2.5 triệu ở Cầu Giấy, sau đó yêu cầu chuyển khoản đặt cọc giữ phòng trước vì nhiều người hỏi. Sau khi nhận cọc xong thì khóa máy và xóa bài đăng. Mong admin kiểm duyệt kỹ các tài khoản như thế này.",
    category: "COMPLAINT",
    authorName: "Nguyễn Khánh Linh",
    authorRole: "TENANT",
    authorPhone: "0912345678",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: "post-3",
    title: "Tìm bạn ở ghép khu vực Thủ Đức gần Đại học Sư Phạm Kỹ Thuật",
    content: "Mình là nam sinh viên năm 2, sạch sẽ, không hút thuốc, ít tụ tập. Cần tìm 1 bạn nam ở ghép chia đôi tiền phòng (khoảng 1.5 triệu/người). Phòng rộng 20m2 ở Linh Trung, có gác lửng và vệ sinh khép kín. Ai quan tâm thì nhắn tin hoặc bình luận ở dưới nha.",
    category: "CHAT",
    authorName: "Hoàng Đức Nam",
    authorRole: "TENANT",
    authorPhone: "0934567890",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: "post-4",
    title: "Kinh nghiệm xương máu khi đi thuê phòng trọ sinh viên",
    content: "Chào các bạn, mình đi thuê trọ được 4 năm rồi nên đúc kết được vài kinh nghiệm chia sẻ cho tân sinh viên:\n1. Phải ghi rõ giá điện nước, wifi, phí gửi xe vào hợp đồng. Tránh trường hợp chủ nhà tự tăng giá.\n2. Kiểm tra kỹ hệ thống nước, xả thử bồn cầu, mở thử vòi hoa sen xem có rò rỉ hay yếu nước không.\n3. Đi xem phòng nên đi ban ngày và rủ thêm bạn bè đi cùng để đánh giá an ninh khu vực.",
    category: "TIP",
    authorName: "Lê Thanh Sơn",
    authorRole: "TENANT",
    authorPhone: "0987111222",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

const INITIAL_BLOG_COMMENTS = [
  {
    id: "comment-1",
    postId: "post-1",
    content: "Phòng đẹp quá bạn ơi, giá thuê bao nhiêu một tháng vậy ạ?",
    authorName: "Nguyễn Thị Mai",
    authorRole: "TENANT",
    createdAt: new Date(Date.now() - 3600000 * 1.5).toISOString()
  },
  {
    id: "comment-2",
    postId: "post-1",
    content: "Giá là 6 triệu đó bạn ơi, mình thấy có đăng trên Nhà Xanh luôn đó.",
    authorName: "Trần Minh Quân",
    authorRole: "TENANT",
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  },
  {
    id: "comment-3",
    postId: "post-2",
    content: "Cảm ơn bạn đã cảnh báo nhé, xém chút nữa mình cũng cọc cho bên này rồi.",
    authorName: "Lê Văn Hải",
    authorRole: "TENANT",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  }
];

// Initial Mock Properties (Matching Designs)
const INITIAL_PROPERTIES = [
  {
    id: "prop-1",
    title: "Phòng trọ cao cấp gần Đại học Bách Khoa",
    type: "phong-tro",
    price: 3500000,
    area: 25,
    city: "Hà Nội",
    district: "Hai Bà Trưng",
    ward: "Bách Khoa",
    street: "12 Trần Đại Nghĩa",
    status: "available",
    description: "Phòng trọ khép kín cao cấp ngay sát Đại học Bách Khoa, phòng mới sơn sửa đẹp, đầy đủ giường nệm điều hòa tủ lạnh. Internet cáp quang tốc độ cao, có chỗ để xe máy miễn phí ở tầng trệt.",
    landlordName: "Nguyễn Văn A",
    landlordPhone: "0396340364",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "100.000/tháng",
    wifi: "50.000/tháng",
    service: "50.000/tháng",
    targets: ["Gia định trẻ", "Người đi làm", "Sinh viên"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp", "Điều hòa", "Giường nệm", "Tủ áo quần"],
    environments: ["Gần chợ / Siêu thị", "Gần trường học"]
  },
  {
    id: "prop-2",
    title: "Căn hộ mini Bình Thạnh, view đẹp",
    type: "can-ho",
    price: 6000000,
    area: 40,
    city: "TP.HCM",
    district: "Bình Thạnh",
    ward: "Phường 25",
    street: "123 Điện Biên Phủ",
    status: "available",
    description: "Căn hộ mini thiết kế hiện đại, thoáng mát, view Landmark 81 cực chill. Đầy đủ nội thất cao cấp: Tủ lạnh, điều hòa, tủ bếp, giường nệm. Khu vực an ninh yên tĩnh, có bảo vệ 24/7, giờ giấc tự do, thang máy di chuyển tiện lợi.",
    landlordName: "Trần Thị B",
    landlordPhone: "0909987654",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Miễn phí",
    water: "Miễn phí",
    wifi: "Miễn phí",
    service: "Miễn phí",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Máy lạnh", "Bếp riêng", "Ban công", "Thang máy"],
    environments: ["Gần Landmark 81", "Gần ĐH Hutech"]
  },
  {
    id: "prop-3",
    title: "Nhà nguyên căn 3 tầng Cầu Giấy",
    type: "nha-nguyen-can",
    price: 15000000,
    area: 80,
    city: "Hà Nội",
    district: "Cầu Giấy",
    ward: "Dịch Vọng",
    street: "78 Xuân Thủy",
    status: "available",
    description: "Cho thuê nhà nguyên căn 3 tầng thích hợp cho gia đình đông người hoặc làm văn phòng công ty. Nhà thiết kế đẹp, rộng rãi, ô tô đỗ cửa, khu vực trung tâm quận Cầu Giấy, gần các trường đại học lớn.",
    landlordName: "Nguyễn Văn C",
    landlordPhone: "0912345678",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Giá dân",
    water: "Giá dân",
    wifi: "Miễn phí",
    service: "Miễn phí",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp", "Điều hòa", "Tủ lạnh", "Giường nệm", "Tủ áo quần", "Ban công/sân thượng", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Trường học"]
  },
  {
    id: "prop-4",
    title: "KTX giá rẻ gần ĐH Công Nghiệp",
    type: "ky-tuc-xa",
    price: 1200000,
    area: 15,
    city: "Hà Nội",
    district: "Bắc Từ Liêm",
    ward: "Minh Khai",
    street: "156 Minh Khai",
    status: "available",
    description: "KTX giường tầng cao cấp dành cho sinh viên giá rẻ, đầy đủ điều hòa, nước nóng lạnh, máy giặt chung. Có tủ cá nhân khoá riêng biệt, bảo vệ trông giữ xe 24/24, không gian học tập yên tĩnh, sạch sẽ.",
    landlordName: "Lê Văn D",
    landlordPhone: "0987654321",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "150.000/tháng",
    water: "50.000/tháng",
    wifi: "Miễn phí",
    service: "50.000/tháng",
    targets: ["Sinh viên"],
    amenities: ["Wifi", "Vệ sinh trong", "Điều hòa", "Giường nệm", "Tủ áo quần", "Bãi để xe riêng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-5",
    title: "Căn hộ view sông Hàn Đà Nẵng",
    type: "can-ho",
    price: 8500000,
    area: 50,
    city: "Đà Nẵng",
    district: "Sơn Trà",
    ward: "An Hải Tây",
    street: "99 Trần Hưng Đạo",
    status: "rented",
    description: "Căn hộ cao cấp view trực diện sông Hàn thơ mộng. Đầy đủ nội thất sang trọng: Sofa, tivi thông minh, máy giặt, tủ lạnh side-by-side, phòng tắm kính đứng hiện đại. Ban công rộng ngắm pháo hoa cực đỉnh.",
    landlordName: "Nguyễn Văn A",
    landlordPhone: "0396340364",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.800/kW",
    water: "100.000/tháng",
    wifi: "Miễn phí",
    service: "120.000/tháng",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp", "Điều hòa", "Tủ lạnh", "Giường nệm", "Tủ áo quần", "Ban công/sân thượng", "Thang máy", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  },
  {
    id: "prop-6",
    title: "Phòng trọ mới xây Thủ Đức",
    type: "phong-tro",
    price: 2800000,
    area: 20,
    city: "TP.HCM",
    district: "Thủ Đức",
    ward: "Linh Trung",
    street: "234 Võ Văn Ngân",
    status: "available",
    description: "Phòng trọ mới xây 100% cực kỳ sạch đẹp, giờ giấc tự do không chung chủ. Khóa vân tay an ninh tuyệt đối, gác lửng đúc bê tông kiên cố cao ráo, kệ bếp đá hoa cương sạch sẽ. Gần nhiều trường đại học lớn.",
    landlordName: "Phạm Thị E",
    landlordPhone: "0933445566",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "80.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp", "Gác lửng", "Bãi để xe riêng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-7",
    title: "Phòng trọ studio gần ĐH Quốc Gia",
    type: "phong-tro",
    price: 3200000,
    area: 22,
    city: "TP.HCM",
    district: "Thủ Đức",
    ward: "Linh Tây",
    street: "45 Kha Vạn Cân",
    status: "available",
    description: "Phòng studio mới, có gác lửng và cửa sổ lớn, đón nắng buổi sáng. Khu vực yên tĩnh, gần trạm xe buýt và nhiều quán ăn sinh viên.",
    landlordName: "Ngô Thị H",
    landlordPhone: "0905123456",
    images: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "80.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp", "Gác lửng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-8",
    title: "Căn hộ 1PN Quận 7, gần Crescent Mall",
    type: "can-ho",
    price: 7200000,
    area: 45,
    city: "TP.HCM",
    district: "Quận 7",
    ward: "Tân Phong",
    street: "28 Nguyễn Lương Bằng",
    status: "available",
    description: "Căn hộ 1 phòng ngủ nội thất đầy đủ, ban công rộng, view công viên. Tòa nhà có bảo vệ 24/7, thang máy và hầm để xe.",
    landlordName: "Lê Quốc K",
    landlordPhone: "0907123987",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "4.000/kW",
    water: "120.000/tháng",
    wifi: "Miễn phí",
    service: "150.000/tháng",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Ban công/sân thượng", "Thang máy", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  },
  {
    id: "prop-9",
    title: "Nhà nguyên căn 2 tầng Đống Đa",
    type: "nha-nguyen-can",
    price: 12000000,
    area: 70,
    city: "Hà Nội",
    district: "Đống Đa",
    ward: "Láng Hạ",
    street: "36 Thái Hà",
    status: "available",
    description: "Nhà nguyên căn 2 tầng, phù hợp gia đình hoặc văn phòng nhỏ. Ngõ rộng, xe ô tô vào được, khu dân cư an ninh.",
    landlordName: "Hoàng Văn L",
    landlordPhone: "0911222333",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Giá dân",
    water: "Giá dân",
    wifi: "100.000/tháng",
    service: "Miễn phí",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Kệ bếp", "Điều hòa", "Ban công/sân thượng", "Bãi để xe riêng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-10",
    title: "Phòng trọ mới sửa gần Chợ Đồng Tâm",
    type: "phong-tro",
    price: 2900000,
    area: 20,
    city: "Hà Nội",
    district: "Hai Bà Trưng",
    ward: "Đồng Tâm",
    street: "98 Trần Đại Nghĩa",
    status: "available",
    description: "Phòng khép kín, có cửa sổ thoáng, nhà vệ sinh riêng, kệ bếp sạch sẽ. Giờ giấc tự do.",
    landlordName: "Đỗ Thị M",
    landlordPhone: "0988111222",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "70.000/tháng",
    wifi: "40.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Kệ bếp"],
    environments: ["Gần chợ / Siêu thị", "Gần trường học"]
  },
  {
    id: "prop-11",
    title: "Căn hộ dịch vụ quận 1, full nội thất",
    type: "can-ho",
    price: 9500000,
    area: 35,
    city: "TP.HCM",
    district: "Quận 1",
    ward: "Đa Kao",
    street: "210 Điện Biên Phủ",
    status: "available",
    description: "Căn hộ dịch vụ cao cấp, thiết kế hiện đại, dọn vào ở ngay. Khu vực trung tâm, thuận tiện di chuyển.",
    landlordName: "Trịnh Quốc N",
    landlordPhone: "0933123456",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Miễn phí",
    water: "Miễn phí",
    wifi: "Miễn phí",
    service: "Miễn phí",
    targets: ["Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Giường nệm", "Thang máy"],
    environments: ["Trung tâm", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-12",
    title: "KTX cao cấp Cầu Giấy gần ĐH Quốc Gia",
    type: "ky-tuc-xa",
    price: 1800000,
    area: 18,
    city: "Hà Nội",
    district: "Cầu Giấy",
    ward: "Mai Dịch",
    street: "55 Hồ Tùng Mậu",
    status: "available",
    description: "KTX giường tầng mới, phòng sạch sẽ, có máy giặt, bếp chung và khu học tập. Bảo vệ 24/7.",
    landlordName: "Nguyễn Thị P",
    landlordPhone: "0966123456",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "150.000/tháng",
    water: "50.000/tháng",
    wifi: "Miễn phí",
    service: "50.000/tháng",
    targets: ["Sinh viên"],
    amenities: ["Wifi", "Vệ sinh trong", "Giường nệm", "Bãi để xe riêng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-13",
    title: "Phòng trọ ban công thoáng Hải Châu",
    type: "phong-tro",
    price: 3300000,
    area: 24,
    city: "Đà Nẵng",
    district: "Hải Châu",
    ward: "Phước Ninh",
    street: "22 Trần Phú",
    status: "available",
    description: "Phòng trọ có ban công, nhiều ánh sáng, gần cầu Rồng. Nội thất cơ bản, vệ sinh riêng.",
    landlordName: "Võ Thị Q",
    landlordPhone: "0977123456",
    images: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "70.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Người đi làm", "Sinh viên"],
    amenities: ["Wifi", "Vệ sinh trong", "Ban công/sân thượng"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  },
  {
    id: "prop-14",
    title: "Căn hộ view biển Sơn Trà",
    type: "can-ho",
    price: 8200000,
    area: 48,
    city: "Đà Nẵng",
    district: "Sơn Trà",
    ward: "Phước Mỹ",
    street: "88 Võ Nguyên Giáp",
    status: "available",
    description: "Căn hộ 1PN view biển, nội thất sang trọng. Tòa nhà có hồ bơi, gym, thang máy.",
    landlordName: "Bùi Văn R",
    landlordPhone: "0909456789",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "4.000/kW",
    water: "120.000/tháng",
    wifi: "Miễn phí",
    service: "200.000/tháng",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Ban công/sân thượng", "Thang máy"],
    environments: ["Gần biển", "Công viên"]
  },
  {
    id: "prop-15",
    title: "Phòng trọ tiện nghi gần Lạch Tray",
    type: "phong-tro",
    price: 2600000,
    area: 19,
    city: "Hải Phòng",
    district: "Ngô Quyền",
    ward: "Lạch Tray",
    street: "12 Văn Cao",
    status: "available",
    description: "Phòng mới sạch sẽ, có điều hòa, tủ quần áo, cửa sổ thoáng. Gần sân vận động Lạch Tray.",
    landlordName: "Phạm Thị S",
    landlordPhone: "0912555666",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.200/kW",
    water: "60.000/tháng",
    wifi: "40.000/tháng",
    service: "20.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Điều hòa", "Tủ áo quần"],
    environments: ["Gần chợ / Siêu thị", "Gần trường học"]
  },
  {
    id: "prop-16",
    title: "Nhà nguyên căn Lê Chân, ô tô đỗ cửa",
    type: "nha-nguyen-can",
    price: 11000000,
    area: 68,
    city: "Hải Phòng",
    district: "Lê Chân",
    ward: "An Biên",
    street: "146 Tô Hiệu",
    status: "available",
    description: "Nhà nguyên căn 2 tầng, sân trước rộng, phù hợp gia đình. Khu dân cư văn minh.",
    landlordName: "Đặng Văn T",
    landlordPhone: "0985333444",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Giá dân",
    water: "Giá dân",
    wifi: "80.000/tháng",
    service: "Miễn phí",
    targets: ["Gia đình trẻ"],
    amenities: ["Kệ bếp", "Ban công/sân thượng", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Trường học"]
  },
  {
    id: "prop-17",
    title: "Phòng trọ có gác lửng, gần ĐH Thủy Lợi",
    type: "phong-tro",
    price: 3000000,
    area: 23,
    city: "Hà Nội",
    district: "Đống Đa",
    ward: "Láng Thượng",
    street: "19 Chùa Bộc",
    status: "available",
    description: "Phòng có gác lửng rộng, bếp riêng, wc sạch sẽ. Gần các trường đại học và tuyến xe buýt.",
    landlordName: "Phan Thị U",
    landlordPhone: "0919555666",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "70.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Gác lửng", "Kệ bếp"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-18",
    title: "Căn hộ mini Yên Hòa, gần Keangnam",
    type: "can-ho",
    price: 6800000,
    area: 38,
    city: "Hà Nội",
    district: "Cầu Giấy",
    ward: "Yên Hòa",
    street: "28 Dương Đình Nghệ",
    status: "available",
    description: "Căn hộ mini nội thất cơ bản, có thang máy, bảo vệ. Gần nhiều tòa văn phòng.",
    landlordName: "Nguyễn Văn V",
    landlordPhone: "0938112233",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.800/kW",
    water: "100.000/tháng",
    wifi: "Miễn phí",
    service: "120.000/tháng",
    targets: ["Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Thang máy", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Văn phòng"]
  },
  {
    id: "prop-19",
    title: "Phòng trọ gần Bến Thành, tiện di chuyển",
    type: "phong-tro",
    price: 3600000,
    area: 21,
    city: "TP.HCM",
    district: "Quận 1",
    ward: "Bến Thành",
    street: "77 Lê Lai",
    status: "rented",
    description: "Phòng trọ trung tâm, thuận tiện đi làm. Nhà vệ sinh riêng, nội thất cơ bản.",
    landlordName: "Lưu Thị W",
    landlordPhone: "0903456677",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.800/kW",
    water: "90.000/tháng",
    wifi: "50.000/tháng",
    service: "40.000/tháng",
    targets: ["Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Điều hòa"],
    environments: ["Trung tâm", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-20",
    title: "Phòng trọ gần cầu Rồng, view đẹp",
    type: "phong-tro",
    price: 3100000,
    area: 23,
    city: "Đà Nẵng",
    district: "Hải Châu",
    ward: "Thạch Thang",
    street: "16 Bạch Đằng",
    status: "available",
    description: "Phòng sạch đẹp, có ban công nhìn sông, gần trung tâm. Giờ giấc tự do.",
    landlordName: "Nguyễn Văn X",
    landlordPhone: "0918666777",
    images: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "70.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong", "Ban công/sân thượng"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  },
  {
    id: "prop-21",
    title: "Căn hộ mini Thanh Khê gần sân bay",
    type: "can-ho",
    price: 5500000,
    area: 32,
    city: "Đà Nẵng",
    district: "Thanh Khê",
    ward: "Vĩnh Trung",
    street: "102 Duy Tân",
    status: "available",
    description: "Căn hộ mini yên tĩnh, đầy đủ nội thất, gần sân bay và ga tàu, thuận tiện di chuyển.",
    landlordName: "Lê Thị Y",
    landlordPhone: "0978555666",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.800/kW",
    water: "100.000/tháng",
    wifi: "Miễn phí",
    service: "120.000/tháng",
    targets: ["Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Tủ lạnh", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Trung tâm"]
  },
  {
    id: "prop-22",
    title: "KTX sinh viên gần ĐH Hutech",
    type: "ky-tuc-xa",
    price: 1500000,
    area: 16,
    city: "TP.HCM",
    district: "Bình Thạnh",
    ward: "Phường 15",
    street: "214 D2",
    status: "available",
    description: "KTX sạch sẽ, có tủ cá nhân, máy giặt chung và khu bếp. Gần trường Hutech.",
    landlordName: "Trần Văn Z",
    landlordPhone: "0939444555",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "120.000/tháng",
    water: "50.000/tháng",
    wifi: "Miễn phí",
    service: "50.000/tháng",
    targets: ["Sinh viên"],
    amenities: ["Wifi", "Giường nệm", "Bãi để xe riêng"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-23",
    title: "Phòng trọ giá tốt gần Hàng Kênh",
    type: "phong-tro",
    price: 2200000,
    area: 18,
    city: "Hải Phòng",
    district: "Lê Chân",
    ward: "Hàng Kênh",
    street: "9 Hàng Kênh",
    status: "available",
    description: "Phòng sạch, rộng vừa đủ, có chỗ để xe và bếp nhỏ. Khu vực an ninh.",
    landlordName: "Vũ Thị A",
    landlordPhone: "0922333444",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.000/kW",
    water: "60.000/tháng",
    wifi: "40.000/tháng",
    service: "20.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Vệ sinh trong"],
    environments: ["Gần chợ / Siêu thị", "Gần trường học"]
  },
  {
    id: "prop-24",
    title: "Căn hộ 2PN Tân Hưng, có bếp riêng",
    type: "can-ho",
    price: 9000000,
    area: 60,
    city: "TP.HCM",
    district: "Quận 7",
    ward: "Tân Hưng",
    street: "52 Nguyễn Thị Thập",
    status: "available",
    description: "Căn hộ 2 phòng ngủ, phòng khách rộng, bếp riêng, phù hợp gia đình nhỏ.",
    landlordName: "Nguyễn Văn B",
    landlordPhone: "0906666777",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "4.000/kW",
    water: "120.000/tháng",
    wifi: "Miễn phí",
    service: "150.000/tháng",
    targets: ["Gia đình trẻ"],
    amenities: ["Wifi", "Kệ bếp", "Điều hòa", "Ban công/sân thượng", "Thang máy"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  },
  {
    id: "prop-25",
    title: "Phòng trọ cao cấp Cổ Nhuế",
    type: "phong-tro",
    price: 3400000,
    area: 24,
    city: "Hà Nội",
    district: "Bắc Từ Liêm",
    ward: "Cổ Nhuế 2",
    street: "112 Phạm Văn Đồng",
    status: "available",
    description: "Phòng trọ mới xây, có điều hòa, giường nệm, tủ lạnh nhỏ. Gần các trường đại học.",
    landlordName: "Trần Thị C",
    landlordPhone: "0966777888",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "3.500/kW",
    water: "80.000/tháng",
    wifi: "50.000/tháng",
    service: "30.000/tháng",
    targets: ["Sinh viên", "Người đi làm"],
    amenities: ["Wifi", "Điều hòa", "Giường nệm", "Tủ áo quần"],
    environments: ["Gần trường học", "Gần chợ / Siêu thị"]
  },
  {
    id: "prop-26",
    title: "Nhà nguyên căn Quận 7, gần Phú Mỹ Hưng",
    type: "nha-nguyen-can",
    price: 14000000,
    area: 85,
    city: "TP.HCM",
    district: "Quận 7",
    ward: "Phú Mỹ",
    street: "19 Nguyễn Đức Cảnh",
    status: "available",
    description: "Nhà nguyên căn 3 tầng, sân trước rộng, nội thất cơ bản, phù hợp gia đình.",
    landlordName: "Lê Văn D",
    landlordPhone: "0908777888",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    electricity: "Giá dân",
    water: "Giá dân",
    wifi: "100.000/tháng",
    service: "Miễn phí",
    targets: ["Gia đình trẻ", "Người đi làm"],
    amenities: ["Wifi", "Kệ bếp", "Ban công/sân thượng", "Bãi để xe riêng"],
    environments: ["Gần chợ / Siêu thị", "Công viên"]
  }
];

// Helper to Format Currency (e.g. 3500000 -> 3.500.000đ)
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}

// Convert type slug to display string
function displayType(type) {
  switch (type) {
    case "phong-tro": return "Phòng trọ";
    case "can-ho": return "Căn hộ";
    case "nha-nguyen-can": return "Nhà nguyên căn";
    case "ky-tuc-xa": return "Ký túc xá";
    default: return type;
  }
}

// State Management Class
class AppState {
  constructor() {
    this.properties = this.loadLocalStorage("nhaxanh_properties", INITIAL_PROPERTIES);
    this.currentUser = this.loadLocalStorage("nhaxanh_user", null);
    this.likedProperties = this.loadLocalStorage("nhaxanh_liked", []);
    this.currentView = "home";
    this.editingPropertyId = null;
    
    // Form wizard temp states
    this.formStep = 1;
    this.uploadedImages = [];
    this.selectedAmenities = [];

    this.blogPosts = this.loadLocalStorage("nhaxanh_blog_posts", INITIAL_BLOG_POSTS);
    this.blogComments = this.loadLocalStorage("nhaxanh_blog_comments", INITIAL_BLOG_COMMENTS);
    this.supportTickets = this.loadLocalStorage("nhaxanh_support_tickets", []);
  }

  loadLocalStorage(key, defaultValue) {
    const val = localStorage.getItem(key);
    if (val === null) return defaultValue;
    try { return JSON.parse(val); } catch { return defaultValue; }
  }

  saveState() {
    localStorage.setItem("nhaxanh_properties", JSON.stringify(this.properties));
    localStorage.setItem("nhaxanh_user", JSON.stringify(this.currentUser));
    localStorage.setItem("nhaxanh_liked", JSON.stringify(this.likedProperties));
    localStorage.setItem("nhaxanh_blog_posts", JSON.stringify(this.blogPosts));
    localStorage.setItem("nhaxanh_blog_comments", JSON.stringify(this.blogComments));
    localStorage.setItem("nhaxanh_support_tickets", JSON.stringify(this.supportTickets));
  }

  toggleLike(propertyId) {
    const idx = this.likedProperties.indexOf(propertyId);
    if (idx === -1) {
      this.likedProperties.push(propertyId);
    } else {
      this.likedProperties.splice(idx, 1);
    }
    this.saveState();
    return this.likedProperties.includes(propertyId);
  }

  isLiked(propertyId) {
    return this.likedProperties.includes(propertyId);
  }

  deleteProperty(id) {
    this.properties = this.properties.filter(p => p.id !== id);
    this.saveState();
  }

  saveProperty(propData) {
    if (propData.id) {
      // Edit mode
      const idx = this.properties.findIndex(p => p.id === propData.id);
      if (idx !== -1) {
        // Retain landlord details from original
        const orig = this.properties[idx];
        this.properties[idx] = { ...orig, ...propData };
      }
    } else {
      // New property
      propData.id = "prop-" + Date.now();
      // Set current user as landlord details
      propData.landlordName = this.currentUser ? this.currentUser.name : "Nguyễn Văn A";
      propData.landlordPhone = this.currentUser ? this.currentUser.phone : "0396340364";
      this.properties.unshift(propData);
    }
    this.saveState();
  }
}

// Global App State Instance
const state = new AppState();

// DOM References
const DOM = {
  header: document.getElementById("app-header"),
  logoBtn: document.getElementById("logo-btn"),
  navLinks: document.querySelectorAll(".nav-link"),
  guestActions: document.getElementById("guest-actions"),
  userActions: document.getElementById("user-actions"),
  navLoginBtn: document.getElementById("nav-login-btn"),
  navRegisterBtn: document.getElementById("nav-register-btn"),
  navPostBtn: document.getElementById("nav-post-btn"),
  userMenuTrigger: document.getElementById("user-menu-trigger"),
  avatarLetters: document.getElementById("avatar-letters"),
  displayName: document.getElementById("display-name"),
  userDropdownMenu: document.getElementById("user-dropdown-menu"),
  menuProfileBtn: document.getElementById("menu-profile-btn"),
  menuDashboardBtn: document.getElementById("menu-dashboard-btn"),
  menuLogoutBtn: document.getElementById("menu-logout-btn"),
  themeToggle: document.getElementById("theme-toggle"),
  
  // Views
  views: {
    home: document.getElementById("view-home"),
    detail: document.getElementById("view-detail"),
    login: document.getElementById("view-login"),
    register: document.getElementById("view-register"),
    dashboard: document.getElementById("view-dashboard"),
    form: document.getElementById("view-form"),
    blog: document.getElementById("view-blog"),
    contact: document.getElementById("view-contact"),
    about: document.getElementById("view-about")
  },

  // Modals
  modals: {
    profile: document.getElementById("modal-profile"),
    blogCreate: document.getElementById("modal-blog-create"),
    blogDetail: document.getElementById("modal-blog-detail")
  },

  // Homepage
  homeListingsGrid: document.getElementById("home-listings-grid"),
  homeSearchForm: document.getElementById("home-search-form"),
  searchLocation: document.getElementById("search-location"),
  searchPrice: document.getElementById("search-price"),
  searchKeyword: document.getElementById("search-keyword"),
  searchSubmitBtn: document.getElementById("search-submit-btn"),
  searchTabs: document.querySelectorAll(".search-tab-btn"),
  cityCards: document.querySelectorAll(".city-card"),
  listingsSectionTitle: document.getElementById("listings-section-title"),
  listingsCount: document.getElementById("listings-count"),
  heroExploreBtn: document.getElementById("hero-explore-btn"),

  // Details
  detailBreadcrumbType: document.getElementById("detail-breadcrumb-type"),
  detailBreadcrumbName: document.getElementById("detail-breadcrumb-name"),
  detailMainImg: document.getElementById("detail-main-img"),
  detailThumbnails: document.getElementById("detail-thumbnails"),
  detailTitle: document.getElementById("detail-title"),
  detailAddressText: document.getElementById("detail-address-text"),
  detailSpecArea: document.getElementById("detail-spec-area"),
  detailSpecElectricity: document.getElementById("detail-spec-electricity"),
  detailSpecWater: document.getElementById("detail-spec-water"),
  detailSpecWifi: document.getElementById("detail-spec-wifi"),
  detailSpecService: document.getElementById("detail-spec-service"),
  detailDescription: document.getElementById("detail-description"),
  detailTargets: document.getElementById("detail-targets"),
  detailAmenities: document.getElementById("detail-amenities"),
  detailEnvironments: document.getElementById("detail-environments"),
  detailMapLabel: document.getElementById("detail-map-label"),
  detailPrice: document.getElementById("detail-price"),
  detailLandlordAvatar: document.getElementById("detail-landlord-avatar"),
  detailLandlordName: document.getElementById("detail-landlord-name"),
  detailLandlordPhone: document.getElementById("detail-landlord-phone"),
  detailCallBtn: document.getElementById("detail-call-btn"),
  detailCallText: document.getElementById("detail-call-text"),
  detailZaloBtn: document.getElementById("detail-zalo-btn"),

  // Auth
  authLoginForm: document.getElementById("auth-login-form"),
  authRegisterForm: document.getElementById("auth-register-form"),
  loginPhone: document.getElementById("login-phone"),
  loginPassword: document.getElementById("login-password"),
  loginRemember: document.getElementById("login-remember"),
  regName: document.getElementById("reg-name"),
  regPhone: document.getElementById("reg-phone"),
  regPassword: document.getElementById("reg-password"),
  roleTenantBtn: document.getElementById("role-tenant"),
  roleLandlordBtn: document.getElementById("role-landlord"),

  // Dashboard
  dashboardAddBtn: document.getElementById("dashboard-add-btn"),
  dashboardSearchInput: document.getElementById("dashboard-search-input"),
  dashboardFilterStatus: document.getElementById("dashboard-filter-status"),
  dashboardTableBody: document.getElementById("dashboard-table-body"),

  // Stepper Form
  formPropertyId: document.getElementById("form-property-id"),
  formPageTitle: document.getElementById("form-page-title"),
  formBreadcrumbTitle: document.getElementById("form-breadcrumb-title"),
  formStepperNodes: document.querySelectorAll(".step-node"),
  formSteps: [
    document.getElementById("form-step-section-1"),
    document.getElementById("form-step-section-2"),
    document.getElementById("form-step-section-3"),
    document.getElementById("form-step-section-4")
  ],
  formTitle: document.getElementById("form-title"),
  formType: document.getElementById("form-type"),
  formPrice: document.getElementById("form-price"),
  formArea: document.getElementById("form-area"),
  formElectricity: document.getElementById("form-electricity"),
  formWater: document.getElementById("form-water"),
  formWifi: document.getElementById("form-wifi"),
  formService: document.getElementById("form-service"),
  formCity: document.getElementById("form-city"),
  formDistrict: document.getElementById("form-district"),
  formWard: document.getElementById("form-ward"),
  formStreet: document.getElementById("form-street"),
  formUploadZone: document.getElementById("form-upload-zone"),
  formFileInput: document.getElementById("form-file-input"),
  formPreviewsContainer: document.getElementById("form-previews-container"),
  formAddMoreImg: document.getElementById("form-add-more-img"),
  formAmenitiesSelection: document.getElementById("form-amenities-selection"),
  formDesc: document.getElementById("form-desc"),
  formStatus: document.getElementById("form-status"),
  formPrevBtn: document.getElementById("form-prev-btn"),
  formNextBtn: document.getElementById("form-next-btn"),
  formSubmitBtn: document.getElementById("form-submit-btn"),
  formCancelBtn: document.getElementById("form-cancel-btn"),

  // Profile Modal
  profilePhone: document.getElementById("profile-phone"),
  profileName: document.getElementById("profile-name"),
  profilePassword: document.getElementById("profile-password"),
  profileRole: document.getElementById("profile-role"),
  profileLogoutBtn: document.getElementById("profile-logout-btn")
};

// Global Temp Register State
let selectedRegisterRole = "tenant";

// Search filter state
let homeActiveCategory = "all";

// ==========================================
// SPA ROUTER (VIEW SWITCHER)
// ==========================================
function switchView(viewName, params = {}) {
  // Normalize auth requests
  if (viewName === "auth") {
    viewName = params.tab === "register" ? "register" : "login";
  }

  // Hide all views, remove active class
  Object.keys(DOM.views).forEach(key => {
    if (DOM.views[key]) {
      DOM.views[key].classList.remove("active");
    }
  });

  // Reset dropdown menu if open
  DOM.userDropdownMenu.classList.remove("show");

  // Show target view after a minor delay for styling transitions
  setTimeout(() => {
    if (DOM.views[viewName]) {
      DOM.views[viewName].classList.add("active");
    }
    window.scrollTo(0, 0);
  }, 50);

  state.currentView = viewName;

  // Handle header active link
  const currentFilterType = params.filterType || (viewName === "home" ? homeActiveCategory : null);
  DOM.navLinks.forEach(link => {
    link.classList.remove("active");
    const linkView = link.dataset.view;
    const linkFilterType = link.dataset.filterType;
    if (linkView === viewName) {
      if (!linkFilterType && (!currentFilterType || currentFilterType === "all")) {
        link.classList.add("active");
      } else if (linkFilterType && linkFilterType === currentFilterType) {
        link.classList.add("active");
      }
    }
  });

  // View specific initializations
  if (viewName === "home") {
    homeActiveCategory = params.filterType || "all";
    // update category pills
    DOM.searchTabs.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.type === homeActiveCategory);
    });
    initHomeView(params.city);
  } else if (viewName === "detail") {
    initDetailView(params.propertyId);
  } else if (viewName === "login" || viewName === "register") {
    initAuthView(viewName);
  } else if (viewName === "dashboard") {
    initDashboardView();
  } else if (viewName === "form") {
    initFormView(params.propertyId);
  } else if (viewName === "blog") {
    initBlogView();
  } else if (viewName === "contact") {
    initContactView();
  } else if (viewName === "about") {
    initAboutView();
  }
}

// ==========================================
// APP INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  // Check and apply saved theme or default to dark
  const savedTheme = localStorage.getItem("nhaxanh_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Bind theme toggle click handler
  if (DOM.themeToggle) {
    DOM.themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("nhaxanh_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!DOM.themeToggle) return;
    const icon = DOM.themeToggle.querySelector("i");
    if (icon) {
      if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
      } else {
        icon.className = "fa-solid fa-moon";
      }
    }
  }

  // Check scroll for header effects
  window.addEventListener("scroll", () => {
    DOM.header.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Bind Global Navigation Click Handlers
  DOM.logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home", { filterType: "all" });
  });

  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      const filterType = link.dataset.filterType;
      
      DOM.navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      if (view === "home") {
        switchView(view, { filterType: filterType || "all" });
      } else {
        if (filterType) {
          switchView(view, { filterType });
        } else {
          switchView(view);
        }
      }
    });
  });

  // Guest actions buttons
  DOM.navLoginBtn.addEventListener("click", () => switchView("login"));
  DOM.navRegisterBtn.addEventListener("click", () => switchView("register"));
  DOM.navPostBtn.addEventListener("click", () => switchView("form"));
  
  // Back to home links
  document.querySelectorAll(".back-home-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("home");
    });
  });

  // User Dropdown toggling
  DOM.userMenuTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    DOM.userDropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    DOM.userDropdownMenu.classList.remove("show");
  });

  // Dropdown options
  DOM.menuProfileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openProfileModal();
  });

  DOM.menuDashboardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("dashboard");
  });

  DOM.menuLogoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogout();
  });

  DOM.profileLogoutBtn.addEventListener("click", () => {
    closeProfileModal();
    handleLogout();
  });

  // Stepper Form location selections
  DOM.formCity.addEventListener("change", populateDistricts);
  DOM.formDistrict.addEventListener("change", populateWards);

  // Initial render setup
  updateUserInterface();
  switchView("home");
}

// Update UI elements based on authentication state
function updateUserInterface() {
  if (state.currentUser) {
    DOM.guestActions.style.display = "none";
    DOM.userActions.style.display = "flex";
    
    // Set display name and initials
    DOM.displayName.textContent = state.currentUser.name;
    const nameWords = state.currentUser.name.split(" ");
    DOM.avatarLetters.textContent = nameWords.map(w => w[0]).join("").substring(0, 2).toUpperCase();
    
    if (state.currentUser.role === "landlord") {
      DOM.navPostBtn.style.display = "inline-flex";
      DOM.menuDashboardBtn.style.display = "flex";
    } else {
      DOM.navPostBtn.style.display = "none";
      DOM.menuDashboardBtn.style.display = "none";
    }
  } else {
    DOM.guestActions.style.display = "flex";
    DOM.userActions.style.display = "none";
    DOM.navPostBtn.style.display = "none";
    DOM.menuDashboardBtn.style.display = "none";
  }
}

// ==========================================
// HOME VIEW LOGIC
// ==========================================
function initHomeView(cityFilter = null) {
  // Bind category pills click handlers
  DOM.searchTabs.forEach(btn => {
    btn.onclick = () => {
      DOM.searchTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      homeActiveCategory = btn.dataset.type;
      filterHomeListings();
      
      // Update navbar links active status to match selected category
      DOM.navLinks.forEach(link => {
        link.classList.remove("active");
        const linkFilterType = link.dataset.filterType;
        if (link.dataset.view === "home") {
          if (!linkFilterType && homeActiveCategory === "all") {
            link.classList.add("active");
          } else if (linkFilterType === homeActiveCategory) {
            link.classList.add("active");
          }
        }
      });
    };
  });

  // Bind popular cities click handlers
  DOM.cityCards.forEach(card => {
    card.onclick = () => {
      DOM.searchLocation.value = card.dataset.city;
      filterHomeListings();
      // Scroll to listings section
      DOM.listingsSectionTitle.scrollIntoView({ behavior: "smooth" });
    };
  });

  // Explore button scroll
  DOM.heroExploreBtn.onclick = () => {
    DOM.listingsSectionTitle.scrollIntoView({ behavior: "smooth" });
  };

  // Pre-fill location if filtered via city parameter
  if (cityFilter) {
    DOM.searchLocation.value = cityFilter;
  }

  // Handle homepage Search Form Submission
  DOM.homeSearchForm.onsubmit = (e) => {
    e.preventDefault();
    filterHomeListings();
  };

  // Perform initial render
  filterHomeListings();
}

function filterHomeListings() {
  const selectedLocation = DOM.searchLocation.value;
  const selectedPriceRange = DOM.searchPrice.value;
  const keyword = DOM.searchKeyword.value.toLowerCase().trim();

  const filtered = state.properties.filter(property => {
    // 1. Filter Category (Pills)
    if (homeActiveCategory !== "all" && property.type !== homeActiveCategory) {
      return false;
    }

    // 2. Filter Location (City)
    if (selectedLocation !== "all" && property.city !== selectedLocation) {
      return false;
    }

    // 3. Filter Price Range
    if (selectedPriceRange !== "all") {
      const price = property.price;
      if (selectedPriceRange === "under-3m" && price >= 3000000) return false;
      if (selectedPriceRange === "3m-7m" && (price < 3000000 || price > 7000000)) return false;
      if (selectedPriceRange === "over-7m" && price <= 7000000) return false;
    }

    // 4. Filter Keyword (matches Title, Address, Description, District, Ward)
    if (keyword !== "") {
      const titleMatch = property.title.toLowerCase().includes(keyword);
      const streetMatch = property.street.toLowerCase().includes(keyword);
      const districtMatch = property.district.toLowerCase().includes(keyword);
      const descMatch = property.description.toLowerCase().includes(keyword);
      if (!titleMatch && !streetMatch && !districtMatch && !descMatch) {
        return false;
      }
    }

    return true;
  });

  renderHomeListings(filtered);
}

function renderHomeListings(listings) {
  DOM.homeListingsGrid.innerHTML = "";
  DOM.listingsCount.textContent = `${listings.length} kết quả được tìm thấy`;

  if (listings.length === 0) {
    DOM.homeListingsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-house-circle-exclamation"></i>
        <h3>Không tìm thấy phòng phù hợp</h3>
        <p class="text-muted">Thử thay đổi bộ lọc tìm kiếm hoặc từ khóa của bạn.</p>
      </div>
    `;
    return;
  }

  listings.forEach(property => {
    const card = document.createElement("div");
    card.className = "property-card";
    
    const isLiked = state.isLiked(property.id);
    const likeClass = isLiked ? "like-btn liked" : "like-btn";
    const likeIcon = isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    const statusText = property.status === "available" ? "Còn trống" : "Đã thuê";
    const statusClass = property.status === "available" ? "status-badge status-available" : "status-badge status-rented";

    // Set fallback image if empty
    const imgUrl = property.images && property.images.length > 0 ? property.images[0] : "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80";

    card.innerHTML = `
      <div class="property-image-wrapper">
        <span class="price-badge">${formatPrice(property.price)}/tháng</span>
        <span class="${statusClass}">${statusText}</span>
        <button class="${likeClass}" data-id="${property.id}" aria-label="Yêu thích">
          <i class="${likeIcon}"></i>
        </button>
        <img class="property-img" src="${imgUrl}" alt="${property.title}" loading="lazy">
      </div>
      <div class="property-content">
        <span class="text-primary" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">
          ${displayType(property.type)}
        </span>
        <h3 class="property-title">${property.title}</h3>
        <div class="property-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${property.street}, Q.${property.district}, ${property.city}</span>
        </div>
        <div class="property-details-meta">
          <span class="property-price">${formatPrice(property.price)}<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/tháng</span></span>
          <span class="property-area"><i class="fa-solid fa-maximize"></i> ${property.area} m²</span>
        </div>
      </div>
    `;

    // Click on Card (Except Like Button) -> details page
    card.addEventListener("click", (e) => {
      if (e.target.closest(".like-btn")) return;
      switchView("detail", { propertyId: property.id });
    });

    // Like Button action
    const btnLike = card.querySelector(".like-btn");
    btnLike.addEventListener("click", (e) => {
      e.stopPropagation();
      const liked = state.toggleLike(property.id);
      btnLike.className = liked ? "like-btn liked" : "like-btn";
      btnLike.querySelector("i").className = liked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    });

    DOM.homeListingsGrid.appendChild(card);
  });
}

// ==========================================
// DETAILS VIEW LOGIC
// ==========================================
function initDetailView(propertyId) {
  const property = state.properties.find(p => p.id === propertyId);
  if (!property) {
    alert("Không tìm thấy thông tin phòng!");
    switchView("home");
    return;
  }

  // Populate Breadcrumb
  DOM.detailBreadcrumbType.textContent = displayType(property.type);
  DOM.detailBreadcrumbName.textContent = property.title;
  
  // Set breadcrumb category click link
  DOM.detailBreadcrumbType.onclick = (e) => {
    e.preventDefault();
    switchView("home", { filterType: property.type });
  };

  // Populate basic text fields
  DOM.detailTitle.textContent = property.title;
  DOM.detailAddressText.textContent = `${property.street}, Phường ${property.ward}, Quận ${property.district}, ${property.city}`;
  DOM.detailSpecArea.textContent = `${property.area} m²`;
  DOM.detailSpecElectricity.textContent = property.electricity || "Chưa cập nhật";
  DOM.detailSpecWater.textContent = property.water || "Chưa cập nhật";
  DOM.detailSpecWifi.textContent = property.wifi || "Chưa cập nhật";
  DOM.detailSpecService.textContent = property.service || "Chưa cập nhật";
  
  DOM.detailDescription.textContent = property.description;
  DOM.detailPrice.textContent = `${formatPrice(property.price)}/tháng`;
  
  // Landlord details
  DOM.detailLandlordName.textContent = property.landlordName;
  DOM.detailLandlordPhone.textContent = property.landlordPhone;
  DOM.detailLandlordAvatar.textContent = property.landlordName.split(" ").pop()[0].toUpperCase();
  
  // Set call & Zalo actions
  DOM.detailCallBtn.href = `tel:${property.landlordPhone}`;
  DOM.detailCallText.textContent = `Gọi ${property.landlordPhone}`;
  DOM.detailZaloBtn.onclick = (e) => {
    e.preventDefault();
    alert(`Đang chuyển hướng tới Zalo số ${property.landlordPhone} ...`);
  };

  // Map label
  DOM.detailMapLabel.textContent = `${property.district}, ${property.city}`;

  // Image Gallery setup
  const imgs = property.images && property.images.length > 0 ? property.images : ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"];
  DOM.detailMainImg.src = imgs[0];

  // Render Thumbnails
  DOM.detailThumbnails.innerHTML = "";
  imgs.forEach((imgSrc, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = i === 0 ? "thumbnail-wrapper active" : "thumbnail-wrapper";
    wrapper.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${i + 1}">`;
    
    wrapper.onclick = () => {
      document.querySelectorAll(".thumbnail-wrapper").forEach(w => w.classList.remove("active"));
      wrapper.classList.add("active");
      DOM.detailMainImg.src = imgSrc;
    };
    DOM.detailThumbnails.appendChild(wrapper);
  });

  // Target Tenants checklist
  DOM.detailTargets.innerHTML = "";
  const targetList = property.targets && property.targets.length > 0 ? property.targets : ["Người đi làm", "Sinh viên"];
  targetList.forEach(target => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    item.innerHTML = `<i class="fa-solid fa-check"></i> <span>${target}</span>`;
    DOM.detailTargets.appendChild(item);
  });

  // Amenities checklist
  DOM.detailAmenities.innerHTML = "";
  const amenityList = property.amenities && property.amenities.length > 0 ? property.amenities : ["Wifi", "Gác lửng"];
  amenityList.forEach(amenity => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    item.innerHTML = `<i class="fa-solid fa-check"></i> <span>${amenity}</span>`;
    DOM.detailAmenities.appendChild(item);
  });

  // Environment checklist
  DOM.detailEnvironments.innerHTML = "";
  const envList = property.environments && property.environments.length > 0 ? property.environments : ["Gần trường học", "Gần siêu thị"];
  envList.forEach(env => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    item.innerHTML = `<i class="fa-solid fa-check"></i> <span>${env}</span>`;
    DOM.detailEnvironments.appendChild(item);
  });
}

// ==========================================
// MOCK AUTHENTICATION VIEW LOGIC
// ==========================================
let activeAuthMode = "login";

function initAuthView(defaultTab = "login") {
  activeAuthMode = defaultTab;
}

function selectRole(role) {
  selectedRegisterRole = role;
  DOM.roleTenantBtn.classList.toggle("active", role === "tenant");
  DOM.roleLandlordBtn.classList.toggle("active", role === "landlord");
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const icon = input.nextElementSibling.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.className = "fa-solid fa-eye-slash";
  } else {
    input.type = "password";
    icon.className = "fa-solid fa-eye";
  }
}

function handleAuthSubmit(event, mode) {
  event.preventDefault();
  
  if (mode === "login") {
    const phone = DOM.loginPhone.value.trim();
    const password = DOM.loginPassword.value;
    
    if (phone === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Mock Login check: Landlord (Chủ nhà) or Tenant (Người thuê)
    // Default account landlord: phone 0396340364 or 0901234567, password 123456
    let role = "tenant";
    let name = "Khách Hàng";
    
    if (phone === "0396340364" || phone === "0901234567" || phone.startsWith("09")) {
      role = "landlord";
      name = "Nguyễn Văn A";
    }

    state.currentUser = {
      phone,
      name,
      role
    };
    
    state.saveState();
    updateUserInterface();
    alert(`Đăng nhập thành công với vai trò ${role === "landlord" ? "Chủ nhà" : "Người thuê"}!`);
    
    // Route after login
    if (role === "landlord") {
      switchView("dashboard");
    } else {
      switchView("home");
    }

    // Reset fields
    DOM.loginPhone.value = "";
    DOM.loginPassword.value = "";
  } else {
    // Register Mode
    const name = DOM.regName.value.trim();
    const phone = DOM.regPhone.value.trim();
    const password = DOM.regPassword.value;
    const role = selectedRegisterRole;

    if (name === "" || phone === "" || password === "") {
      alert("Vui lòng điền đầy đủ các thông tin!");
      return;
    }

    state.currentUser = {
      phone,
      name,
      role
    };

    state.saveState();
    updateUserInterface();
    alert(`Đăng ký tài khoản ${role === "landlord" ? "Chủ nhà" : "Người thuê"} thành công!`);

    // Route
    if (role === "landlord") {
      switchView("dashboard");
    } else {
      switchView("home");
    }

    // Reset fields
    DOM.regName.value = "";
    DOM.regPhone.value = "";
    DOM.regPassword.value = "";
  }
}

function handleSocialAuth(provider) {
  alert(`Giả lập kết nối tài khoản qua ${provider} thành công!`);
  state.currentUser = {
    phone: "0999999999",
    name: `Social User (${provider})`,
    role: "tenant"
  };
  state.saveState();
  updateUserInterface();
  switchView("home");
}

function handleLogout() {
  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    state.currentUser = null;
    state.saveState();
    updateUserInterface();
    alert("Đã đăng xuất tài khoản.");
    switchView("home");
  }
}

// ==========================================
// PROFILE MODAL LOGIC
// ==========================================
function openProfileModal() {
  if (!state.currentUser) return;
  DOM.profilePhone.value = state.currentUser.phone;
  DOM.profileName.value = state.currentUser.name;
  DOM.profilePassword.value = "";
  DOM.profileRole.value = state.currentUser.role === "landlord" ? "Chủ nhà (Landlord)" : "Người thuê (Tenant)";
  
  DOM.modals.profile.classList.add("show");
}

function closeProfileModal() {
  DOM.modals.profile.classList.remove("show");
}

function saveProfileChanges(e) {
  e.preventDefault();
  if (!state.currentUser) return;
  
  const newName = DOM.profileName.value.trim();
  if (newName === "") {
    alert("Tên không được bỏ trống!");
    return;
  }

  state.currentUser.name = newName;
  state.saveState();
  updateUserInterface();
  closeProfileModal();
  alert("Cập nhật thông tin hồ sơ thành công!");
}

// ==========================================
// LANDLORD DASHBOARD LOGIC
// ==========================================
function initDashboardView() {
  if (!state.currentUser || state.currentUser.role !== "landlord") {
    alert("Chỉ có tài khoản Chủ nhà mới được phép truy cập trang này!");
    switchView("home");
    return;
  }

  DOM.dashboardAddBtn.onclick = () => switchView("form");
  
  DOM.dashboardSearchInput.oninput = filterDashboardListings;
  DOM.dashboardFilterStatus.onchange = filterDashboardListings;
  
  filterDashboardListings();
}

function filterDashboardListings() {
  const searchVal = DOM.dashboardSearchInput.value.toLowerCase().trim();
  const filterStatus = DOM.dashboardFilterStatus.value;

  const filtered = state.properties.filter(property => {
    // 1. Search term match
    if (searchVal !== "") {
      const matchTitle = property.title.toLowerCase().includes(searchVal);
      const matchAddress = property.street.toLowerCase().includes(searchVal);
      if (!matchTitle && !matchAddress) return false;
    }

    // 2. Status match
    if (filterStatus !== "all" && property.status !== filterStatus) {
      return false;
    }

    return true;
  });

  renderDashboardTable(filtered);
}

function renderDashboardTable(listings) {
  DOM.dashboardTableBody.innerHTML = "";

  if (listings.length === 0) {
    DOM.dashboardTableBody.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            <i class="fa-solid fa-list-check"></i>
            <h3>Chưa có bất động sản nào</h3>
            <p>Bấm "+ Thêm Phòng Mới" để bắt đầu đăng tin cho thuê đầu tiên của bạn.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  listings.forEach(property => {
    const tr = document.createElement("tr");
    
    const statusText = property.status === "available" ? "Còn trống" : "Đã cho thuê";
    const statusClass = property.status === "available" ? "table-chip available" : "table-chip rented";
    
    tr.innerHTML = `
      <td style="font-weight: 700;">${property.title}</td>
      <td>${displayType(property.type)}</td>
      <td class="text-primary" style="font-weight: 700;">${formatPrice(property.price)}</td>
      <td>${property.area}m²</td>
      <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        ${property.street}, Q.${property.district}, ${property.city}
      </td>
      <td><span class="${statusClass}">${statusText}</span></td>
      <td>
        <div class="table-actions">
          <button class="action-btn view" data-id="${property.id}" title="Xem chi tiết">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="action-btn edit" data-id="${property.id}" title="Sửa thông tin">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button class="action-btn delete" data-id="${property.id}" title="Xóa phòng">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    `;

    // Action button listeners
    tr.querySelector(".action-btn.view").onclick = () => {
      switchView("detail", { propertyId: property.id });
    };
    
    tr.querySelector(".action-btn.edit").onclick = () => {
      switchView("form", { propertyId: property.id });
    };

    tr.querySelector(".action-btn.delete").onclick = () => {
      if (confirm(`Bạn có chắc chắn muốn xóa "${property.title}" không? Hành động này không thể hoàn tác.`)) {
        state.deleteProperty(property.id);
        filterDashboardListings();
        alert("Đã xóa phòng thành công.");
      }
    };

    DOM.dashboardTableBody.appendChild(tr);
  });
}

// ==========================================
// STEPPER ADD/EDIT FORM LOGIC
// ==========================================
function initFormView(propertyId = null) {
  state.editingPropertyId = propertyId;
  state.formStep = 1;
  state.uploadedImages = [];
  state.selectedAmenities = [];

  // Stepper UI reset
  updateStepperUI();

  // Load default dropdown selections
  populateCities();

  // Reset form fields
  DOM.formPropertyId.value = propertyId || "";
  DOM.formTitle.value = "";
  DOM.formType.value = "";
  DOM.formPrice.value = "";
  DOM.formArea.value = "";
  DOM.formElectricity.value = "";
  DOM.formWater.value = "";
  DOM.formWifi.value = "";
  DOM.formService.value = "";
  DOM.formStreet.value = "";
  DOM.formDesc.value = "";
  DOM.formStatus.value = "available";

  // Previews container reset
  renderPreviews();

  // Reset selected targets and env checkboxes
  document.querySelectorAll("input[name='form-target']").forEach(cb => cb.checked = true);
  document.querySelectorAll("input[name='form-env']").forEach(cb => cb.checked = true);

  // Bind clickable utility chips
  const chips = DOM.formAmenitiesSelection.querySelectorAll(".utility-select-card");
  chips.forEach(chip => {
    chip.classList.remove("active");
    chip.onclick = () => {
      const value = chip.dataset.utility;
      chip.classList.toggle("active");
      
      const idx = state.selectedAmenities.indexOf(value);
      if (idx === -1) {
        state.selectedAmenities.push(value);
      } else {
        state.selectedAmenities.splice(idx, 1);
      }
    };
  });

  // Stepper controls
  DOM.formNextBtn.onclick = () => nextFormStep();
  DOM.formPrevBtn.onclick = () => prevFormStep();
  DOM.formCancelBtn.onclick = () => {
    if (confirm("Bạn có chắc chắn muốn hủy bỏ? Các thay đổi sẽ không được lưu.")) {
      switchView("dashboard");
    }
  };

  // Drag and Drop simulated file selection
  DOM.formUploadZone.onclick = () => DOM.formFileInput.click();
  DOM.formFileInput.onchange = handleFileSelect;

  // Add more images button
  DOM.formAddMoreImg.onclick = () => DOM.formFileInput.click();

  // If edit mode -> prefill fields
  if (propertyId) {
    const prop = state.properties.find(p => p.id === propertyId);
    if (prop) {
      DOM.formPageTitle.textContent = "Sửa thông tin phòng";
      DOM.formBreadcrumbTitle.textContent = "Sửa phòng";
      
      DOM.formTitle.value = prop.title;
      DOM.formType.value = prop.type;
      DOM.formPrice.value = prop.price;
      DOM.formArea.value = prop.area;
      DOM.formElectricity.value = prop.electricity || "";
      DOM.formWater.value = prop.water || "";
      DOM.formWifi.value = prop.wifi || "";
      DOM.formService.value = prop.service || "";
      
      // Address selection prefill
      DOM.formCity.value = prop.city;
      populateDistricts();
      DOM.formDistrict.value = prop.district;
      populateWards();
      DOM.formWard.value = prop.ward;
      DOM.formStreet.value = prop.street;
      
      DOM.formDesc.value = prop.description;
      DOM.formStatus.value = prop.status;

      // Prefill images
      state.uploadedImages = [...prop.images];
      renderPreviews();

      // Prefill amenities chips
      state.selectedAmenities = [...prop.amenities];
      chips.forEach(chip => {
        const val = chip.dataset.utility;
        chip.classList.toggle("active", state.selectedAmenities.includes(val));
      });

      // Prefill checkboxes
      document.querySelectorAll("input[name='form-target']").forEach(cb => {
        cb.checked = prop.targets.includes(cb.value);
      });
      document.querySelectorAll("input[name='form-env']").forEach(cb => {
        cb.checked = prop.environments.includes(cb.value);
      });
    }
  } else {
    DOM.formPageTitle.textContent = "Thêm phòng mới";
    DOM.formBreadcrumbTitle.textContent = "Thêm phòng";
  }
}

// Stepper navigation logic
function nextFormStep() {
  if (validateStep(state.formStep)) {
    state.formStep++;
    updateStepperUI();
  }
}

function prevFormStep() {
  if (state.formStep > 1) {
    state.formStep--;
    updateStepperUI();
  }
}

function updateStepperUI() {
  // Show active step section, hide others
  DOM.formSteps.forEach((section, index) => {
    section.classList.toggle("active", index === (state.formStep - 1));
  });

  // Update nodes classes (active / completed)
  DOM.formStepperNodes.forEach((node, index) => {
    const stepNum = index + 1;
    node.classList.remove("active", "completed");
    if (stepNum === state.formStep) {
      node.classList.add("active");
    } else if (stepNum < state.formStep) {
      node.classList.add("completed");
    }
  });

  // Update footer button visibilities
  DOM.formPrevBtn.style.visibility = state.formStep === 1 ? "hidden" : "visible";
  
  if (state.formStep === 4) {
    DOM.formNextBtn.style.display = "none";
    DOM.formSubmitBtn.style.display = "inline-flex";
  } else {
    DOM.formNextBtn.style.display = "inline-flex";
    DOM.formSubmitBtn.style.display = "none";
  }
}

// Validate each form step before proceeding
function validateStep(step) {
  if (step === 1) {
    if (!DOM.formTitle.value.trim()) { alert("Vui lòng điền Tên phòng!"); return false; }
    if (!DOM.formType.value) { alert("Vui lòng chọn Loại hình!"); return false; }
    if (!DOM.formPrice.value || DOM.formPrice.value <= 0) { alert("Vui lòng điền Giá thuê hợp lệ!"); return false; }
    if (!DOM.formArea.value || DOM.formArea.value <= 0) { alert("Vui lòng điền Diện tích hợp lệ!"); return false; }
  } else if (step === 2) {
    if (!DOM.formCity.value) { alert("Vui lòng chọn Tỉnh/Thành phố!"); return false; }
    if (!DOM.formDistrict.value) { alert("Vui lòng chọn Quận/Huyện!"); return false; }
    if (!DOM.formWard.value) { alert("Vui lòng chọn Phường/Xã!"); return false; }
    if (!DOM.formStreet.value.trim()) { alert("Vui lòng nhập số nhà, tên đường!"); return false; }
  } else if (step === 3) {
    // If no images uploaded, we will automatically inject placeholder images
    if (state.uploadedImages.length === 0) {
      if (confirm("Bạn chưa tải lên ảnh phòng nào. Hệ thống sẽ tự động thêm ảnh minh họa ngẫu nhiên. Đồng ý?")) {
        // Add 2 mock images from Unsplash
        state.uploadedImages.push("https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80");
        state.uploadedImages.push("https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80");
      } else {
        return false;
      }
    }
  }
  return true;
}

// Dropdown location populators
function populateCities() {
  DOM.formCity.innerHTML = '<option value="">Chọn Tỉnh/Thành</option>';
  Object.keys(LOCATION_DATA).forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    DOM.formCity.appendChild(opt);
  });
  DOM.formDistrict.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
  DOM.formWard.innerHTML = '<option value="">Chọn Phường/Xã</option>';
}

function populateDistricts() {
  const city = DOM.formCity.value;
  DOM.formDistrict.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
  DOM.formWard.innerHTML = '<option value="">Chọn Phường/Xã</option>';
  
  if (city && LOCATION_DATA[city]) {
    Object.keys(LOCATION_DATA[city]).forEach(district => {
      const opt = document.createElement("option");
      opt.value = district;
      opt.textContent = district;
      DOM.formDistrict.appendChild(opt);
    });
  }
}

function populateWards() {
  const city = DOM.formCity.value;
  const district = DOM.formDistrict.value;
  DOM.formWard.innerHTML = '<option value="">Chọn Phường/Xã</option>';

  if (city && district && LOCATION_DATA[city] && LOCATION_DATA[city][district]) {
    LOCATION_DATA[city][district].forEach(ward => {
      const opt = document.createElement("option");
      opt.value = ward;
      opt.textContent = ward;
      DOM.formWard.appendChild(opt);
    });
  }
}

// Image uploads mock handlers
function handleFileSelect(e) {
  const files = e.target.files;
  if (!files) return;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (event) => {
      // Convert image to base64 data string so it can display and persist in localstorage!
      state.uploadedImages.push(event.target.result);
      renderPreviews();
    };
    reader.readAsDataURL(file);
  }
  // reset file input
  DOM.formFileInput.value = "";
}

function renderPreviews() {
  // Remove existing previews except the add more button
  const existingPreviews = DOM.formPreviewsContainer.querySelectorAll(".preview-card");
  existingPreviews.forEach(el => el.remove());

  state.uploadedImages.forEach((imgSrc, index) => {
    const card = document.createElement("div");
    card.className = "preview-card";
    card.innerHTML = `
      <img src="${imgSrc}" alt="Preview ${index + 1}">
      <div class="remove-img" data-index="${index}"><i class="fa-solid fa-xmark"></i></div>
    `;
    
    card.querySelector(".remove-img").onclick = () => {
      state.uploadedImages.splice(index, 1);
      renderPreviews();
    };

    DOM.formPreviewsContainer.insertBefore(card, DOM.formAddMoreImg);
  });

  // Toggle visibility of add button
  DOM.formAddMoreImg.style.display = state.uploadedImages.length >= 6 ? "none" : "flex";
}

// Submit Form handler
function handleFormSubmit(e) {
  e.preventDefault();
  
  if (!validateStep(4)) return;

  const id = DOM.formPropertyId.value || null;
  const title = DOM.formTitle.value.trim();
  const type = DOM.formType.value;
  const price = parseInt(DOM.formPrice.value);
  const area = parseInt(DOM.formArea.value);
  const electricity = DOM.formElectricity.value.trim() || "Miễn phí";
  const water = DOM.formWater.value.trim() || "Miễn phí";
  const wifi = DOM.formWifi.value.trim() || "Miễn phí";
  const service = DOM.formService.value.trim() || "Miễn phí";
  const city = DOM.formCity.value;
  const district = DOM.formDistrict.value;
  const ward = DOM.formWard.value;
  const street = DOM.formStreet.value.trim();
  const description = DOM.formDesc.value.trim();
  const status = DOM.formStatus.value;

  // Selected Checkboxes
  const targets = [];
  document.querySelectorAll("input[name='form-target']:checked").forEach(cb => targets.push(cb.value));

  const environments = [];
  document.querySelectorAll("input[name='form-env']:checked").forEach(cb => environments.push(cb.value));

  const propertyData = {
    id,
    title,
    type,
    price,
    area,
    city,
    district,
    ward,
    street,
    status,
    description,
    images: state.uploadedImages,
    electricity,
    water,
    wifi,
    service,
    targets,
    amenities: state.selectedAmenities,
    environments
  };

  state.saveProperty(propertyData);
  alert("Lưu dữ liệu bất động sản thành công!");
  switchView("dashboard");
}

// ==========================================================================
// BLOG & SUPPORT MODULES (MOCK STATE + API FALLBACK INTEGRATION)
// ==========================================================================

const API_URL = "http://localhost:3000";

// API helper with graceful fallback to LocalStorage
async function tryApiRequest(path, method = "GET", body = null) {
  try {
    const headers = { "Content-Type": "application/json" };
    // If we want to simulate logged-in user in backend, we search if we have a token (e.g. from admin)
    const token = localStorage.getItem("nhaxanh_token");
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const config = { method, headers };
    if (body) config.body = JSON.stringify(body);

    const res = await fetch(`${API_URL}${path}`, config);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

// Blog constants relocated to top of file

let blogActiveCategory = "all";
let activeDetailPostId = null;

// Display label helper
function displayBlogCategory(cat) {
  switch (cat) {
    case "REVIEW": return "Đánh giá (Review)";
    case "COMPLAINT": return "Phàn nàn / Góp ý";
    case "CHAT": return "Trò chuyện";
    case "TIP": return "Mẹo & Kinh nghiệm";
    default: return cat;
  }
}

// Display style color helper
function getBlogCategoryColor(cat) {
  switch (cat) {
    case "REVIEW": return "#2e7d32"; // Green
    case "COMPLAINT": return "#c62828"; // Red
    case "CHAT": return "#1565c0"; // Blue
    case "TIP": return "#6a1b9a"; // Purple
    default: return "var(--primary)";
  }
}

// Format date nicely (time ago)
function formatTimeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) return "Vừa xong";
  if (minutes < 60) return `${minutes} phút trước`;
  if (hours < 24) return `${hours} giờ trước`;
  return `${days} ngày trước`;
}

// ----------------------------------------------------
// BLOG VIEW INITIALIZATION & RENDERING
// ----------------------------------------------------
async function initBlogView() {
  const categoryButtons = document.querySelectorAll(".blog-cat-btn");
  categoryButtons.forEach(btn => {
    btn.onclick = () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      blogActiveCategory = btn.dataset.category;
      renderBlogPosts();
    };
  });

  // Bind create button
  const createBtn = document.getElementById("blog-create-btn");
  createBtn.onclick = () => {
    if (!state.currentUser) {
      alert("Vui lòng đăng nhập để đăng bài viết cộng đồng!");
      switchView("login");
      return;
    }
    openBlogCreateModal();
  };

  await syncBlogData();
  renderBlogPosts();
}

// Fetch from API or fallback
async function syncBlogData() {
  const apiPosts = await tryApiRequest("/blog");
  if (apiPosts && Array.isArray(apiPosts)) {
    // Transform NestJS API data to match frontend model
    state.blogPosts = apiPosts.map(p => ({
      id: p.id,
      title: p.title,
      content: p.content,
      category: p.category,
      authorName: p.Author ? p.Author.fullName : "Người dùng",
      authorRole: p.Author ? p.Author.role : "TENANT",
      authorPhone: p.Author ? p.Author.phone : "",
      createdAt: p.createdAt,
      commentCount: p._count ? p._count.Comment : 0
    }));
    state.saveState();
  }
}

function renderBlogPosts() {
  const container = document.getElementById("blog-posts-container");
  container.innerHTML = "";

  const filtered = blogActiveCategory === "all" 
    ? state.blogPosts 
    : state.blogPosts.filter(p => p.category === blogActiveCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; border: 1.5px dashed var(--border); border-radius: var(--radius-xl); background: var(--bg-surface-low);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-weight: 800; font-size: 1.25rem;">Chưa có bài viết nào</h3>
        <p class="text-muted" style="margin-top: 0.5rem;">Hãy là người đầu tiên chia sẻ câu chuyện của bạn!</p>
      </div>
    `;
    return;
  }

  filtered.forEach(post => {
    const count = post.commentCount !== undefined 
      ? post.commentCount 
      : state.blogComments.filter(c => c.postId === post.id).length;

    const card = document.createElement("div");
    card.className = "blog-card";
    card.style = "background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 1.5rem; display: flex; flex-direction: column; cursor: pointer; transition: transform 0.25s ease, box-shadow 0.25s ease; box-shadow: var(--shadow-sm);";
    
    // Add hover effects dynamically
    card.onmouseover = () => {
      card.style.transform = "translateY(-4px)";
      card.style.boxShadow = "var(--shadow-md)";
    };
    card.onmouseout = () => {
      card.style.transform = "none";
      card.style.boxShadow = "var(--shadow-sm)";
    };

    const catColor = getBlogCategoryColor(post.category);
    
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: white; background: ${catColor}; padding: 0.3rem 0.6rem; border-radius: var(--radius-sm);">${displayBlogCategory(post.category)}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;"><i class="fa-regular fa-clock" style="margin-right: 0.25rem;"></i>${formatTimeAgo(post.createdAt)}</span>
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 850; margin-bottom: 0.75rem; line-height: 1.4; color: var(--text);">${post.title}</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">${post.content}</p>
      
      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border); padding-top: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem;">${post.authorName.charAt(0).toUpperCase()}</div>
          <div>
            <span style="font-weight: 750; font-size: 0.85rem; display: block; color: var(--text);">${post.authorName}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${post.authorRole === "ADMIN" ? "Quản trị viên" : (post.authorRole === "LANDLORD" ? "Chủ nhà" : "Người thuê")}</span>
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
          <i class="fa-regular fa-comments"></i> ${count} bình luận
        </div>
      </div>
    `;

    card.onclick = () => openBlogDetailModal(post.id);
    container.appendChild(card);
  });
}

// ----------------------------------------------------
// BLOG MODAL HANDLERS
// ----------------------------------------------------
function openBlogCreateModal() {
  DOM.modals.blogCreate.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeBlogCreateModal() {
  DOM.modals.blogCreate.style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("blog-create-form").reset();
}

async function handleBlogCreateSubmit(e) {
  e.preventDefault();
  const category = document.getElementById("blog-form-category").value;
  const title = document.getElementById("blog-form-title").value.trim();
  const content = document.getElementById("blog-form-content").value.trim();

  if (!title || !content) {
    alert("Vui lòng điền đầy đủ tiêu đề và nội dung!");
    return;
  }

  const payload = { title, content, category };
  
  // Try sending to NestJS API
  const newApiPost = await tryApiRequest("/blog", "POST", payload);
  
  if (newApiPost) {
    // If api succeeded, sync
    await syncBlogData();
  } else {
    // Local storage fallback
    const newPost = {
      id: "post-" + Date.now(),
      title,
      content,
      category,
      authorName: state.currentUser ? state.currentUser.name : "Người dùng",
      authorRole: state.currentUser ? state.currentUser.role.toUpperCase() : "TENANT",
      authorPhone: state.currentUser ? state.currentUser.phone : "",
      createdAt: new Date().toISOString()
    };
    state.blogPosts.unshift(newPost);
    state.saveState();
  }

  alert("Đăng bài viết cộng đồng thành công!");
  closeBlogCreateModal();
  renderBlogPosts();
}

async function openBlogDetailModal(postId) {
  activeDetailPostId = postId;
  DOM.modals.blogDetail.style.display = "flex";
  document.body.style.overflow = "hidden";

  // Try syncing from API
  const apiPost = await tryApiRequest(`/blog/${postId}`);
  let post = null;
  let comments = [];

  if (apiPost) {
    post = {
      id: apiPost.id,
      title: apiPost.title,
      content: apiPost.content,
      category: apiPost.category,
      authorName: apiPost.Author ? apiPost.Author.fullName : "Người dùng",
      authorRole: apiPost.Author ? apiPost.Author.role : "TENANT",
      authorPhone: apiPost.Author ? apiPost.Author.phone : "",
      createdAt: apiPost.createdAt
    };
    comments = apiPost.Comment.map(c => ({
      id: c.id,
      postId: c.postId,
      content: c.content,
      authorName: c.Author ? c.Author.fullName : "Người dùng",
      authorRole: c.Author ? c.Author.role : "TENANT",
      createdAt: c.createdAt
    }));
  } else {
    // Fallback
    post = state.blogPosts.find(p => p.id === postId);
    comments = state.blogComments.filter(c => c.postId === postId);
  }

  if (!post) {
    alert("Không tìm thấy bài viết!");
    closeBlogDetailModal();
    return;
  }

  // Populate data
  const badge = document.getElementById("blog-detail-badge");
  badge.textContent = displayBlogCategory(post.category);
  badge.style.background = getBlogCategoryColor(post.category);

  document.getElementById("blog-detail-title").textContent = post.title;
  document.getElementById("blog-detail-author-avatar").textContent = post.authorName.charAt(0).toUpperCase();
  document.getElementById("blog-detail-author-name").textContent = post.authorName;
  document.getElementById("blog-detail-author-role").textContent = post.authorRole === "ADMIN" ? "Quản trị viên" : (post.authorRole === "LANDLORD" ? "Chủ nhà" : "Người thuê");
  document.getElementById("blog-detail-date").textContent = formatTimeAgo(post.createdAt);
  document.getElementById("blog-detail-body").textContent = post.content;

  // Render delete button if owner or admin
  const deleteBtn = document.getElementById("blog-detail-delete-btn");
  const isOwner = state.currentUser && state.currentUser.phone === post.authorPhone;
  const isAdmin = state.currentUser && state.currentUser.role === "admin";
  
  if (isOwner || isAdmin) {
    deleteBtn.style.display = "block";
    deleteBtn.onclick = () => handleDeletePost(post.id);
  } else {
    deleteBtn.style.display = "none";
  }

  renderComments(comments);
}

function closeBlogDetailModal() {
  DOM.modals.blogDetail.style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("blog-comment-form").reset();
  activeDetailPostId = null;
}

function renderComments(commentsList) {
  const container = document.getElementById("blog-detail-comments-list");
  container.innerHTML = "";

  document.getElementById("blog-detail-comment-count").textContent = commentsList.length;

  if (commentsList.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align: center; padding: 1.5rem; font-weight: 500; font-size: 0.9rem;">Chưa có bình luận nào. Hãy gửi ý kiến của bạn!</p>`;
    return;
  }

  commentsList.forEach(comment => {
    const div = document.createElement("div");
    div.style = "background: var(--bg-surface-low); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem; position: relative;";
    
    const isCommentOwner = state.currentUser && state.currentUser.name === comment.authorName;
    const isAdmin = state.currentUser && state.currentUser.role === "admin";

    const deleteCommentHtml = (isCommentOwner || isAdmin) 
      ? `<button class="delete-comment-btn" style="position: absolute; right: 1rem; top: 1rem; border: none; background: none; color: var(--error); cursor: pointer; font-size: 0.85rem;" onclick="handleDeleteComment('${comment.id}')"><i class="fa-solid fa-trash-can"></i></button>`
      : "";

    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
        <div style="width: 26px; height: 26px; border-radius: 50%; background: var(--secondary-light); color: var(--secondary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem;">${comment.authorName.charAt(0).toUpperCase()}</div>
        <div>
          <span style="font-weight: 750; font-size: 0.85rem; color: var(--text);">${comment.authorName}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.35rem; font-weight: 500;">(${comment.authorRole === "ADMIN" ? "Quản trị viên" : (comment.authorRole === "LANDLORD" ? "Chủ nhà" : "Người thuê")})</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin-left: auto; padding-right: 1.5rem;">${formatTimeAgo(comment.createdAt)}</span>
      </div>
      <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text); white-space: pre-line;">${comment.content}</p>
      ${deleteCommentHtml}
    `;

    container.appendChild(div);
  });
}

async function handleCommentSubmit(e) {
  e.preventDefault();
  if (!state.currentUser) {
    alert("Vui lòng đăng nhập để viết bình luận!");
    switchView("login");
    return;
  }

  const content = document.getElementById("blog-comment-content").value.trim();
  if (!content) return;

  // Try calling NestJS API
  const newApiComment = await tryApiRequest(`/blog/${activeDetailPostId}/comments`, "POST", { content });
  
  if (newApiComment) {
    // Reload detail modal
    openBlogDetailModal(activeDetailPostId);
  } else {
    // Local storage fallback
    const newComment = {
      id: "comment-" + Date.now(),
      postId: activeDetailPostId,
      content,
      authorName: state.currentUser.name,
      authorRole: state.currentUser.role.toUpperCase(),
      createdAt: new Date().toISOString()
    };
    state.blogComments.push(newComment);
    state.saveState();
    
    // Rerender comments
    const comments = state.blogComments.filter(c => c.postId === activeDetailPostId);
    renderComments(comments);
  }

  document.getElementById("blog-comment-content").value = "";
  // Update the count in the background list
  renderBlogPosts();
}

async function handleDeletePost(postId) {
  if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;

  const res = await tryApiRequest(`/blog/${postId}`, "DELETE");
  if (res) {
    await syncBlogData();
  } else {
    state.blogPosts = state.blogPosts.filter(p => p.id !== postId);
    state.blogComments = state.blogComments.filter(c => c.postId !== postId);
    state.saveState();
  }

  alert("Đã xóa bài viết thành công!");
  closeBlogDetailModal();
  renderBlogPosts();
}

async function handleDeleteComment(commentId) {
  if (!confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) return;

  const res = await tryApiRequest(`/blog/comments/${commentId}`, "DELETE");
  if (res) {
    openBlogDetailModal(activeDetailPostId);
  } else {
    state.blogComments = state.blogComments.filter(c => c.id !== commentId);
    state.saveState();
    
    // Rerender comments
    const comments = state.blogComments.filter(c => c.postId === activeDetailPostId);
    renderComments(comments);
  }
}

// ----------------------------------------------------
// CONTACT & SUPPORT TICKET FUNCTIONALITY
// ----------------------------------------------------
async function initContactView() {
  // Autofill if logged in
  if (state.currentUser) {
    document.getElementById("contact-name").value = state.currentUser.name;
    document.getElementById("contact-phone").value = state.currentUser.phone || "";
    // Guess email based on phone or leave empty
    document.getElementById("contact-email").value = state.currentUser.email || "";

    document.getElementById("support-history-section").style.display = "block";
    await syncSupportTickets();
    renderSupportTickets();
  } else {
    document.getElementById("support-history-section").style.display = "none";
    document.getElementById("support-contact-form").reset();
  }
}

async function syncSupportTickets() {
  const apiTickets = await tryApiRequest("/contact/my");
  if (apiTickets && Array.isArray(apiTickets)) {
    state.supportTickets = apiTickets;
    state.saveState();
  }
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const fullName = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const phone = document.getElementById("contact-phone").value.trim() || null;
  const subject = document.getElementById("contact-subject").value;
  const message = document.getElementById("contact-message").value.trim();

  if (!fullName || !email || !subject || !message) {
    alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
    return;
  }

  const payload = { fullName, email, phone, subject, message };

  // Try API submission
  const apiRes = await tryApiRequest("/contact", "POST", payload);

  if (apiRes) {
    await syncSupportTickets();
  } else {
    // Local fallback
    const newTicket = {
      id: "ticket-" + Date.now(),
      fullName,
      email,
      phone,
      subject,
      message,
      status: "PENDING",
      reply: null,
      createdAt: new Date().toISOString()
    };
    state.supportTickets.unshift(newTicket);
    state.saveState();
  }

  alert("Yêu cầu hỗ trợ của bạn đã được gửi thành công! Admin sẽ phản hồi sớm nhất qua email hoặc trong lịch sử hỗ trợ.");
  document.getElementById("contact-message").value = "";
  
  if (state.currentUser) {
    renderSupportTickets();
  }
}

function renderSupportTickets() {
  const container = document.getElementById("support-tickets-container");
  container.innerHTML = "";

  if (state.supportTickets.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align: center; padding: 2rem; border: 1.5px dashed var(--border); border-radius: var(--radius-lg); font-weight: 500;">Bạn chưa gửi yêu cầu hỗ trợ nào.</p>`;
    return;
  }

  state.supportTickets.forEach(ticket => {
    const div = document.createElement("div");
    div.style = "background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; box-shadow: var(--shadow-sm);";

    const isResolved = ticket.status === "RESOLVED";
    const statusBg = isResolved ? "var(--success)" : "var(--warning)";
    const statusLabel = isResolved ? "ĐÃ GIẢI QUYẾT" : "ĐANG CHỜ PHẢN HỒI";

    const replyHtml = ticket.reply 
      ? `<div style="background: var(--primary-light); color: var(--primary); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary); margin-top: 0.5rem;">
          <h5 style="font-weight: 850; font-size: 0.9rem; margin-bottom: 0.25rem;"><i class="fa-solid fa-user-tie"></i> Phản hồi từ Admin Nhà Xanh:</h5>
          <p style="font-size: 0.95rem; line-height: 1.5; font-weight: 500;">${ticket.reply}</p>
         </div>`
      : "";

    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <span style="font-weight: 850; font-size: 1.05rem; color: var(--text);">${ticket.subject}</span>
        <span style="font-size: 0.75rem; font-weight: 800; background: ${statusBg}; color: white; padding: 0.25rem 0.5rem; border-radius: var(--radius-sm);">${statusLabel}</span>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">Ngày gửi: ${new Date(ticket.createdAt).toLocaleString("vi-VN")}</div>
      <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-muted); white-space: pre-line;">${ticket.message}</p>
      ${replyHtml}
    `;

    container.appendChild(div);
  });
}

// ----------------------------------------------------
// ABOUT US VIEW & SCROLLYTELLING LOGIC
// ----------------------------------------------------
function initAboutView() {
  // 1. Setup Scroll Reveal (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    // Reset state first to allow smooth re-animations when switching views
    el.classList.remove("visible");
    revealObserver.observe(el);
  });

  // 2. Setup Horizontal Scroll Drag-to-Scroll or Mouse Wheel Scroll
  const timelineContainer = document.querySelector(".timeline-container");
  if (timelineContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    timelineContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      timelineContainer.style.cursor = "grabbing";
      startX = e.pageX - timelineContainer.offsetLeft;
      scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener("mouseleave", () => {
      isDown = false;
      timelineContainer.style.cursor = "grab";
    });

    timelineContainer.addEventListener("mouseup", () => {
      isDown = false;
      timelineContainer.style.cursor = "grab";
    });

    timelineContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timelineContainer.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast multiplier
      timelineContainer.scrollLeft = scrollLeft - walk;
    });
  }
}


