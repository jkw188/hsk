import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_1: Module = {
  id: "hsk1-m1",
  level: HSKLevel.HSK1,
  title: "你好! Nǐ hǎo! (Lesson 1)",
  description:
    "Learn basic greetings, classroom expressions, Pinyin (initials, finals, tones), and basic Chinese character strokes.",
  lessons: [
    {
      id: "hsk1-l1-texts",
      title: "Texts & Pinyin",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 你好! (Hello!)

<strong>A: 你好!</strong>
<em>Nǐ hǎo!</em>
(Chào anh!)

<strong>B: 你好!</strong>
<em>Nǐ hǎo!</em>
(Chào anh!)

---

# Text 2: 您好! (Hello - polite)

<strong>A: 您好!</strong>
<em>Nín hǎo!</em>
(Chào ông!)

<strong>B: 你们好!</strong>
<em>Nǐmen hǎo!</em>
(Chào anh chị!)

---

# Text 3: 对不起! (Sorry!)

<strong>A: 对不起!</strong>
<em>Duìbuqǐ!</em>
(Xin lỗi!)

<strong>B: 没关系!</strong>
<em>Méi guānxi!</em>
(Không sao đâu!)

---

# Pinyin: Initials and Finals (1)

<strong>声母 Thanh mẫu (1):</strong>
b, p, m, f, d, t, n, l, g, k, h, j, q, x

<strong>韵母 Vận mẫu (1):</strong>
i, u, ü, a, ia, ua, o, uo, e, ie, üe, ai, uai, ei, uei (ui), ao, iao, ou, iou (iu)

---

# Pinyin: Tones (四声)

汉语的基本声调有四个，分别是第一声(55)、第二声(35)、第三声(214)和第四声(51)。汉语的声调有区别意义的作用。
Tiếng Trung Quốc có bốn thanh cơ bản: thanh 1 (55), thanh 2 (35), thanh 3 (214) và thanh 4 (51). Thanh điệu của tiếng Trung Quốc đóng vai trò phân biệt nghĩa của từ.

* <strong>mā</strong> | 妈 | mẹ
* <strong>má</strong> | 麻 | cây gai
* <strong>mǎ</strong> | 马 | con ngựa
* <strong>mà</strong> | 骂 | mắng

<strong>朗读下列音节，注意声调的不同 (Đọc to các âm tiết sau, chú ý sự khác biệt giữa các thanh):</strong>
ā á ǎ à
ō ó ǒ ò
ē é ě è
ī í ǐ ì
ū ú ǔ ù
ǖ ǘ ǚ ǜ

---

# Pinyin: Syllables (汉语的音节)

汉语的音节一般由声母、韵母、声调三部分组成。一般来说，一个汉字对应一个音节。汉语的一个音节可以没有声母，但是一定要有韵母和声调。
Âm tiết của tiếng Trung Quốc thường được tạo thành bởi ba phần: thanh mẫu (phụ âm đầu), vận mẫu (vần) và thanh điệu. Nói chung, một chữ Trung Quốc tương ứng với một âm tiết. Một âm tiết có thể không có thanh mẫu nhưng bắt buộc phải có vận mẫu và thanh điệu.

| Thanh mẫu | Vận mẫu | Thanh điệu | Ví dụ |
| :---: | :---: | :---: | :--- |
| m | ao | 1 | <strong>māo</strong> (猫, mèo) |
| | ü | 2 | <strong>yú</strong> (鱼, cá) |
| j | ie | 3 | <strong>jiě</strong> (姐, chị) |
| | er | 4 | <strong>èr</strong> (二, hai) |

<em>注意：i和ü自成音节时，韵母前增加y，ü上的两点去掉；u自成音节时，韵母前增加w。
Chú ý: Khi âm tiết được tạo thành bởi vận mẫu i, ü thì y được thêm vào trước vận mẫu, hai dấu chấm trong ü được lược bỏ; khi âm tiết được tạo thành bởi vận mẫu u thì w được thêm vào trước vận mẫu.</em>

---

# Pinyin: 3rd Tone Sandhi (两个三声音节的连读变调)

当两个第三声音节连读时，第一个音节变为第二声，3+3变为2+3。比如“nǐ(你)”+“hǎo(好)”变为“níhǎo”。但是注音时，要标原调。
Sự biến đổi về thanh điệu khi hai âm tiết mang thanh 3 đi liền nhau: Khi hai âm tiết mang thanh 3 được đọc liền nhau, thanh điệu của âm tiết thứ nhất được chuyển thành thanh 2. Ví dụ: “nǐ”(你)+“hǎo” (好) được chuyển thành “ní hǎo”. Tuy nhiên, khi ghi dấu thanh điệu, ta phải ghi thanh ban đầu của âm tiết đó.

* nǐ (你) + hǎo (好) -> <strong>ní hǎo</strong>
* kě (可) + yǐ (以) -> <strong>ké yǐ</strong>
* fǔ (辅) + dǎo (导) -> <strong>fú dǎo</strong>

---

# Classroom Expressions (课堂用语)

* <strong>上课!</strong> (Shàng kè!) - Vào học đi!
* <strong>下课!</strong> (Xià kè!) - Đã hết giờ học rồi!
* <strong>现在休息!</strong> (Xiànzài xiūxi!) - Nghỉ giải lao nhé!
* <strong>看黑板!</strong> (Kàn hēibǎn!) - Hãy nhìn lên bảng!
* <strong>跟我读!</strong> (Gēn wǒ dú!) - Hãy đọc theo tôi!
`,
    },
    {
      id: "hsk1-l1-vocab",
      title: "New Words & Pronunciation",
      type: LessonType.VOCABULARY,
      content: `
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>你</strong> | nǐ | đt. | (số ít) anh, chị, bạn... |
| <strong>好</strong> | hǎo | tt. | khỏe, tốt |
| <strong>您</strong> | nín | đt. | (lịch sự) ông, bà, ngài... |
| <strong>你们</strong> | nǐmen | đt. | (số nhiều) các anh, các chị, các bạn... |
| <strong>对不起</strong> | duìbuqǐ | đgt. | xin lỗi |
| <strong>没关系</strong> | méi guānxi | | không sao đâu, không có vấn đề gì đâu |

---

# Pronunciation Practice (单音节词语 - Single Syllable)

* <strong>yī</strong> (clothing/jacket)
* <strong>wǔ</strong> (number 5)
* <strong>yú</strong> (fish)
* <strong>ěr</strong> (ear)
* <strong>bǐ</strong> (pen)
* <strong>māo</strong> (cat)
* <strong>dǎo</strong> (island)
* <strong>huā</strong> (flower)
* <strong>jī</strong> (chicken)
* <strong>qī</strong> (number 7)
* <strong>xié</strong> (shoes)
* <strong>xuě</strong> (snow)

---

# Pronunciation Practice (双音节词语 - Double Syllable)

* <strong>kāfēi</strong> (coffee)
* <strong>kělè</strong> (cola)
* <strong>kǎoyā</strong> (roast duck)
* <strong>huǒguō</strong> (hotpot)
* <strong>dìtú</strong> (map)
* <strong>fēijī</strong> (airplane)
* <strong>máobǐ</strong> (calligraphy brush)
* <strong>ěrjī</strong> (headphones)

---

# Pronunciation Practice (第三声音节的读音 - Tone 3 Sandhi)

朗读下列词语，注意第三声音节的读音 (Đọc to các từ sau, chú ý cách đọc các âm tiết mang thanh 3):
* <strong>nǐ hǎo</strong>
* <strong>kěyǐ</strong>
* <strong>fǔdǎo</strong>
* <strong>xiǎojiě</strong>
* <strong>kǒuyǔ</strong>
* <strong>yǔfǎ</strong>
* <strong>liǎojiě</strong>
* <strong>yǒuhǎo</strong>
* <strong>yǔsǎn</strong>
* <strong>shǒubiǎo</strong>
`,
    },
    {
      id: "hsk1-l1-exercise",
      title: "Characters",
      type: LessonType.EXERCISE,
      content: `
# Chinese Characters (汉字)

## 1. Strokes of Chinese Characters (汉字的笔画 - 1)

| Tên nét | Pinyin | Hướng viết | Chữ Hán (Ví dụ) |
| :--- | :--- | :--- | :--- |
| <strong>横 (ngang)</strong> | héng | Trái sang phải | <strong>yī</strong> (一 - một), <strong>èr</strong> (二 - hai) |
| <strong>竖 (sổ)</strong> | shù | Trên xuống dưới | <strong>shí</strong> (十 - mười), <strong>gōng</strong> (工 - công việc) |
| <strong>撇 (phẩy)</strong> | piě | Trên xuống trái | <strong>rén</strong> (人 - người), <strong>bā</strong> (八 - tám) |
| <strong>点 (chấm)</strong> | diǎn | Trên xuống phải | <strong>bù</strong> (不 - không), <strong>liù</strong> (六 - sáu) |
| <strong>捺 (mác)</strong> | nà | Trên xuống phải | <strong>dà</strong> (大 - lớn), <strong>tiān</strong> (天 - bầu trời) |

---

## 2. Single-Component Characters (认识独体字)

1.  <strong>一 (yī)</strong>
    “一”，是汉字的基本笔画，也可单独成为汉字表示数量“1”。
    (Nét ngang là nét cơ bản của chữ Hán. Nét ngang cũng chính là chữ "nhất", tức là số 1.)
2.  <strong>二 (èr)</strong>
    表示数量“2”。 (Số 2)
3.  <strong>三 (sān)</strong>
    表示数量“3”。 (Số 3)
4.  <strong>十 (shí)</strong>
    表示数量“10”。 (Số 10)
5.  <strong>八 (bā)</strong>
    表示数量“8”。 (Số 8)
6.  <strong>六 (liù)</strong>
    表示数量“6”。 (Số 6)
`,
    },
  ],
};
