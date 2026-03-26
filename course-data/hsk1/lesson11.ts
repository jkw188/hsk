import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_11: Module = {
  id: "hsk1-m11",
  level: HSKLevel.HSK1,
  title: "现在几点? Xiànzài jǐ diǎn? (Lesson 11)",
  description:
    'Learn how to express time, use time words as adverbials, use the noun "qián" (before), and understand the function of the neutral tone.',
  lessons: [
    {
      id: "hsk1-l11-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在图书馆 (Ở thư viện)

<strong>A: 现在几点?</strong>
<em>Xiànzài jǐ diǎn?</em>
(Bây giờ là mấy giờ rồi?)

<strong>B: 现在十点十分。</strong>
<em>Xiànzài shí diǎn shí fēn.</em>
(10 giờ 10 phút.)

<strong>A: 中午几点吃饭?</strong>
<em>Zhōngwǔ jǐ diǎn chī fàn?</em>
(Mấy giờ thì ăn cơm trưa vậy?)

<strong>B: 十二点吃饭。</strong>
<em>Shí'èr diǎn chī fàn.</em>
(12 giờ.)

---

# Text 2: 在家 (Ở nhà)

<strong>A: 爸爸什么时候回家?</strong>
<em>Bàba shénme shíhou huí jiā?</em>
(Chừng nào cha mới về đến nhà?)

<strong>B: 下午五点。</strong>
<em>Xiàwǔ wǔ diǎn.</em>
(5 giờ chiều.)

<strong>A: 我们什么时候去看电影?</strong>
<em>Wǒmen shénme shíhou qù kàn diànyǐng?</em>
(Khi nào chúng ta đi xem phim?)

<strong>B: 六点三十分。</strong>
<em>Liù diǎn sānshí fēn.</em>
(6 giờ rưỡi.)

---

# Text 3: 在家 (Ở nhà)

<strong>A: 我星期一去北京。</strong>
<em>Wǒ xīngqī yī qù Běijīng.</em>
(Thứ hai anh sẽ đi Bắc Kinh.)

<strong>B: 你想在北京住几天?</strong>
<em>Nǐ xiǎng zài Běijīng zhù jǐ tiān?</em>
(Anh định ở Bắc Kinh mấy ngày?)

<strong>A: 住三天。</strong>
<em>Zhù sān tiān.</em>
(Ba ngày.)

<strong>B: 星期五前能回家吗?</strong>
<em>Xīngqī wǔ qián néng huí jiā ma?</em>
(Anh có thể về nhà trước thứ sáu được không?)

<strong>A: 能。</strong>
<em>Néng.</em>
(Chắc là được.)

---

# Grammar Notes

## 1. 时间的表达 (Cách diễn tả thời gian)
汉语表达时间的时候要用“点”、“分”，遵循由大到小的顺序。
(Để diễn tả thời gian, ta dùng 点 và 分 theo trình tự từ đơn vị lớn đến đơn vị nhỏ.)

用“点”来表示整点。例如：
(Để nói giờ chẵn, ta dùng 点. Ví dụ:)
* 9:00 -> <strong>九点</strong>
* 11:00 -> <strong>十一点</strong>
* 2:00 -> <strong>两点</strong> (liǎng diǎn)

<em>注意：在表达两点时，我们说两点(liǎng diǎn)，不说二点(èr diǎn)。
Chú ý: Khi nói 2 giờ, chúng ta dùng 两点 (liǎng diǎn) chứ không dùng 二点 (èr diǎn).</em>

当不是整点的时候要用到“分”，格式是“...点...分”。例如：
(Khi thời gian cần diễn tả không phải giờ chẵn thì ta dùng thêm 分 theo cấu trúc: 点 分. Ví dụ:)
* 5:30 -> <strong>五点三十分</strong>
* 11:10 -> <strong>十一点十分</strong>
* 2:05 -> <strong>两点零五分</strong> (liǎng diǎn líng wǔ fēn - 2 giờ lẻ 5 phút)

如果区分上午或者下午，一般格式是“上午...点(...分)，下午...点(...分)”。例如：
(Để phân biệt thời gian buổi sáng và thời gian buổi chiều, người ta thường dùng cấu trúc: 上午....点(....分) và 下午....点(....分). Ví dụ:)
* 8:00 sáng -> <strong>上午八点</strong>
* 3:10 chiều -> <strong>下午三点十分</strong>
* 5:25 chiều -> <strong>下午五点二十五分</strong>

## 2. 时间词做状语 (Từ chỉ thời gian làm trạng ngữ)
时间词在句子中做状语，经常出现在主语后边，也可以在主语前边。例如：
(Khi được dùng làm trạng ngữ trong câu, từ chỉ thời gian thường đứng sau chủ ngữ, đôi lúc nó cũng có thể đứng trước chủ ngữ. Ví dụ:)

| 主语 (Chủ ngữ) | 时间状语 (Trạng ngữ TG) | 谓语 (Vị ngữ) |
| :--- | :--- | :--- |
| 妈妈 | <strong>六点</strong> | 做饭。 |
| 李老师 | <strong>上午八点</strong> | 去学校。 |
| 我 | <strong>星期一</strong> | 去北京。 |

| 时间状语 (Trạng ngữ TG) | 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- | :--- |
| <strong>七点</strong> | 我 | 吃饭。 |
| <strong>中午十二点</strong> | 我们 | 回家。 |
| <strong>下午五点</strong> | 他们 | 去看电影。 |

## 3. 名词“前” (Danh từ 前)
名词“前”可以表示现在或者所说的某个时间以前的时间。例如：
(Danh từ 前 có thể được dùng để chỉ khoảng thời gian trước hiện tại hay trước thời điểm được đề cập đến trong câu. Ví dụ:)

1. 三天前、一个星期前、四点前、星期五前
2. A: 你什么时候去学校？ B: 八点前。
3. A: 你什么时候回北京？ B: 星期六前。
4. A: (你)星期五前能回家吗？ B: 能。
`,
    },
    {
      id: "hsk1-l11-vocab",
      title: "New Words & Pronunciation",
      type: LessonType.VOCABULARY,
      content: `
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>现在</strong> | xiànzài | dt. | bây giờ, hiện tại |
| <strong>点</strong> | diǎn | lượng. | giờ |
| <strong>分</strong> | fēn | lượng. | phút |
| <strong>中午</strong> | zhōngwǔ | dt. | buổi trưa |
| <strong>吃饭</strong> | chī fàn | đgt. | ăn cơm |
| <strong>时候</strong> | shíhou | dt. | lúc, khi |
| <strong>回</strong> | huí | đgt. | về, trở về |
| <strong>我们</strong> | wǒmen | dt. | chúng ta |
| <strong>电影</strong> | diànyǐng | dt. | phim |
| <strong>住</strong> | zhù | đgt. | ở |
| <strong>前</strong> | qián | dt. | trước |

**Danh từ riêng:**
* <strong>北京</strong> | Běijīng | Bắc Kinh (thủ đô của Trung Quốc)

---

# Pronunciation (拼音)

## 轻声的功能 (Chức năng của thanh nhẹ)
汉语中轻声不仅是一种音变现象，而且还能区分词义。比如：东西，读作“dōngxī”指方向，读作“dōngxi”指物品。
(Thanh nhẹ không chỉ là hiện tượng biến đổi âm mà còn có chức năng phân biệt nghĩa của từ. Chẳng hạn, 东西 chỉ hướng đông và hướng tây khi được đọc là “dōngxī” nhưng lại mang nghĩa là đồ vật khi được đọc là “dōngxi".)

| Từ | Đọc thanh nhẹ | Đọc giữ nguyên thanh |
| :--- | :--- | :--- |
| <strong>老子</strong> | lǎozi: (từ lóng) bố, cha (dt.) | Lǎozi: Lão Tử (danh từ riêng, nhà tư tưởng TQ) |
| <strong>买卖</strong> | mǎimai: việc buôn bán (dt.) | mǎimài: mua và bán (đgt.) |
| <strong>大意</strong> | dàyi: lơ là (tt.) | dàyì: đại ý (dt.) |
`,
    },
    {
      id: "hsk1-l11-exercise",
      title: "Exercises & Characters",
      type: LessonType.EXERCISE,
      content: `
# Warm-up (热身)

**给下面的词语选择对应的时间 (Chọn hình tương ứng với các mốc thời gian bên dưới):**
* A: 10:10
* B: 2:00
* C: 3:05
* D: 12:00
* E: 6:30
* F: 9:45
* G: 15:00

---

# Comprehension (练习)

**1. 分角色朗读课文**
(Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)

**2. 根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học):**
1. 现在几点? (Xiànzài jǐ diǎn?)
2. 他们几点吃饭? (Tāmen jǐ diǎn chī fàn?)
3. 爸爸什么时候回家? (Bàba shénme shíhou huí jiā?)
4. 他们什么时候去看电影? (Tāmen shénme shíhou qù kàn diànyǐng?)
5. 他去哪儿? 什么时候能回家? (Tā qù nǎr? Shénme shíhou néng huí jiā?)

**3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh):**
* [Image 1] 她 <strong>在学校</strong> (Tā zài xuéxiào)
* [Image 2] 王方中午 <strong>去商店</strong> (Wáng Fāng zhōngwǔ qù shāngdiàn)
* [Image 3] 他们很忙 (bận), 星期六 <strong>也工作</strong>。 (Tāmen hěn máng, xīngqī liù yě gōngzuò.)
* [Image 4] 她上午不喝茶, 下午 <strong>前喝茶</strong>。 (Tā shàngwǔ bù hē chá, xiàwǔ qián hē chá.)

---

# Characters (汉字)

## 1. 认识独体字 (Làm quen với chữ đơn/độc thể)

1. <strong>午 (wǔ - ngọ)</strong>
   “午”，表示一天中白天十一点到一点的一段时间。
   (Chỉ khoảng thời gian từ 11 giờ đến 13 giờ.)
2. <strong>电 (diàn - điện)</strong>
   “电”，本义是下雨时天上出现的锋利多齿的闪光，是一种物理现象，也是一种能源。
   (Ban đầu chỉ tia chớp ngoằn ngoèo xuất hiện trên bầu trời khi có mưa. Điện là hiện tượng vật lý và cũng là một loại năng lượng.)

## 2. 汉字偏旁“阝”和“亻” (Các bộ của chữ Hán: 阝 và 亻)

| 偏旁 (Bộ) | 解释 (Chú thích) | 例字 (Chữ Hán) |
| :---: | :--- | :--- |
| <strong>阝</strong> | 耳刀旁，一般跟地形、位置有关系。 (Bộ 阝 thường liên quan đến địa hình hay vị trí.) | <strong>院</strong> (yuàn - sân), <strong>阳</strong> (yáng - mặt trời) |
| <strong>亻</strong> | 单人旁，一般和人有关系。 (Bộ 亻 thường liên quan đến con người.) | <strong>你</strong> (nǐ - anh/chị/bạn), <strong>他</strong> (tā - anh ấy/ông ấy) |

---

# Application (运用)

**1. 双人活动 (Hoạt động theo cặp)**
两人一组，用“现在...点...分”说说下面的时间。
(Ghép thành từng cặp, sử dụng cấu trúc 现在...点...分 để nói về thời gian.)
* 例如 (Ví dụ):
  A: 现在几点? (Xiànzài jǐ diǎn?)
  B: 现在八点十八分。 (Xiànzài bā diǎn shíbā fēn.)
* Practice times: 03:30, 01:27, 11:23, 10:43, 04:15, 05:58, 12:27, 02:34, 07:45, 10:05.

**2. 小组活动 (Hoạt động nhóm)**
3~4人一组，互相询问并记录一日作息习惯，每组请一位同学报告情况。
(Lập nhóm từ 3 đến 4 người, hỏi và ghi lại thói quen làm việc, nghỉ ngơi trong ngày của nhau, sau đó cử một đại diện trình bày kết quả trao đổi của nhóm.)
* 例如 (Ví dụ):
  A: 你几点吃早饭? (Nǐ jǐ diǎn chī zǎofàn?)
  B: 我七点吃早饭。 (Wǒ qī diǎn chī zǎofàn.)

| 活动 (Hoạt động) | 小王 (Xiǎo Wáng) |
| :--- | :--- |
| 吃早饭 (chī zǎofàn) | 7:00 |
| 来学校 (lái xuéxiào) | 8:20 |
| 看书 (kàn shū) | 15:00 |
| 回家 (huí jiā) | 18:00前 (qián) |
| 看电视 (kàn diànshì) | 晚上20:00 (wǎnshang) |
`,
    },
  ],
};
