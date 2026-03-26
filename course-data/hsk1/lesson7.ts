import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_7: Module = {
  id: "hsk1-m7",
  level: HSKLevel.HSK1,
  title: "Jīntiān jǐ hào? 今天几号? (Lesson 7)",
  description:
    "Learn how to ask about dates, days of the week, and express intentions using the 'go + place + do something' structure.",
  lessons: [
    {
      id: "hsk1-l7-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在银行 (Ở ngân hàng)

**A: 请问，今天几号？**
*Qǐngwèn, jīntiān jǐ hào?*
(Xin hỏi hôm nay là ngày mấy?)

**B: 今天9月1号。**
*Jīntiān jiǔ yuè yī hào.*
(Ngày 1 tháng 9.)

**A: 今天星期几？**
*Jīntiān xīngqī jǐ?*
(Hôm nay là thứ mấy?)

**B: 星期三。**
*Xīngqī sān.*
(Thứ tư.)

---

# Text 2: 看日历 (Xem lịch)

**A: 昨天是几月几号？**
*Zuótiān shì jǐ yuè jǐ hào?*
(Hôm qua là ngày mấy tháng mấy?)

**B: 昨天是8月31号，星期二。**
*Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.*
(Hôm qua là thứ ba, ngày 31 tháng 8.)

**A: 明天呢？**
*Míngtiān ne?*
(Còn ngày mai?)

**B: 明天是9月2号，星期四。**
*Míngtiān shì jiǔ yuè èr hào, xīngqī sì.*
(Ngày mai là thứ năm, ngày 2 tháng 9.)

---

# Text 3: 在咖啡馆儿 (Ở quán cà phê)

**A: 明天星期六，你去学校吗？**
*Míngtiān xīngqī liù, nǐ qù xuéxiào ma?*
(Ngày mai là thứ bảy, bạn có đến trường không?)

**B: 我去学校。**
*Wǒ qù xuéxiào.*
(Có, tôi đến trường.)

**A: 你去学校做什么？**
*Nǐ qù xuéxiào zuò shénme?*
(Bạn đến trường để làm gì?)

**B: 我去学校看书。**
*Wǒ qù xuéxiào kàn shū.*
(Để đọc sách.)

---

# Grammar Notes

## 1. 日期的表达(1): 月、日(rì)/号、星期
**Cách diễn tả ngày tháng (1): tháng, ngày, thứ**

汉语的日期表达方式遵循由大到小的原则，先说“月”，然后说“日/号”，最后说“星期”。口语一般常用“号”。
(Trong tiếng Trung Quốc, người ta nói về ngày tháng theo trình tự từ lớn đến nhỏ: 月 (tháng) -> 日/号 (ngày) -> 星期 (thứ). Trong văn nói thường dùng 号 thay cho 日.)

* **9月1号，星期三。** (Ngày 1 tháng 9, thứ tư.)
* **9月2号，星期四。** (Ngày 2 tháng 9, thứ năm.)
* **8月31号，星期二。** (Ngày 31 tháng 8, thứ ba.)

## 2. 名词谓语句 (Câu có vị ngữ là danh từ)
名词谓语句是谓语部分由名词性成分充当的句子，一般用于表达年龄、时间、日期等。
(Đây là kiểu câu có vị ngữ là thành phần mang đặc điểm của danh từ, thường được dùng để nói về tuổi tác, thời gian, ngày tháng...)

| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- |
| 我的汉语老师 | 33岁。 |
| 明天 | 星期三。 |
| 今天 | 9月1号。 |

## 3. 连动句(1): 去 + 地方 + 做什么
**Câu liên động từ (1): 去 + nơi chốn + làm gì**

连动句的谓语部分由两个或者两个以上动词构成，后一个动作可以表示前一个动作的目的。第一个动词后表示地点的宾语有时可以省略。
(Trong câu liên động từ, vị ngữ có từ hai động từ trở lên, động từ đứng sau diễn tả mục đích của động từ đứng trước.)

| 主语 (Chủ ngữ) | 动词 1 (Động từ 1) | (地方 Nơi chốn) | 动词 2 (Động từ 2) |
| :--- | :--- | :--- | :--- |
| 我 | **去** | (中国) | **学习**汉语。 |
| 我们 | **去** | (中国饭馆儿) | **吃**中国菜。 |
| 我 | **去** | (学校) | **看**书。 |
`,
    },
    {
      id: "hsk1-l7-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words (Từ mới)

| Hanzi | Pinyin | POS | Meaning |
| :--- | :--- | :--- | :--- |
| **请** | qǐng | v. | please; to invite |
| **问** | wèn | v. | to ask |
| **今天** | jīntiān | n. | today |
| **号** | hào | n. | date; number |
| **月** | yuè | n. | month; moon |
| **星期** | xīngqī | n. | week |
| **昨天** | zuótiān | n. | yesterday |
| **明天** | míngtiān | n. | tomorrow |
| **去** | qù | v. | to go |
| **学校** | xuéxiào | n. | school |
| **看** | kàn | v. | to look at; to watch; to read |
| **书** | shū | n. | book |

## Supplementary Word
| Hanzi | Pinyin | POS | Meaning |
| :--- | :--- | :--- | :--- |
| **生日** | shēngrì | n. | birthday |
`,
    },
    {
      id: "hsk1-l7-exercise",
      title: "Exercises & Phonetics",
      type: LessonType.EXERCISE,
      content: `
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **学校** (xuéxiào) - *[Image A: A basketball court]*
2. **看书** (kàn shū) - *[Image B: A woman reading a book]*
3. **书** (shū) - *[Image E: A stack of books]*
4. **中国菜** (Zhōngguó cài) - *[Image D: A bowl of Mapo tofu]*
5. **25 号** (èrshíwǔ hào) - *[Image C: A calendar showing December 25]*
6. **5月** (yuè) - *[Image F: A flip clock showing the number 1]*

---

# Practice (练习)

## 1. Months and Weeks (朗读下列词语)

| 1 - 6 月 | 7 - 12 月 | 星期 (Weeks) |
| :--- | :--- | :--- |
| 一月 (Jan) | 七月 (Jul) | 星期一 (Mon) |
| 二月 (Feb) | 八月 (Aug) | 星期二 (Tue) |
| 三月 (Mar) | 九月 (Sep) | 星期三 (Wed) |
| 四月 (Apr) | 十月 (Oct) | 星期四 (Thu) |
| 五月 (May) | 十一月 (Nov) | 星期五 (Fri) |
| 六月 (Jun) | 十二月 (Dec) | 星期六 (Sat) |
| | | 星期日/天 (Sun) |

## 2. Comprehension Questions (回答问题)
1. 今天几月几号星期几? (Jīntiān jǐ yuè jǐ hào xīngqī jǐ?)
2. 明天几月几号星期几? (Míngtiān jǐ yuè jǐ hào xīngqī jǐ?)
3. 昨天几月几号星期几? (Zuótiān jǐ yuè jǐ hào xīngqī jǐ?)
4. 明天你去哪儿做什么? (Míngtiān nǐ qù nǎr zuò shénme?)
5. 星期日你去哪儿做什么? (Xīngqī rì nǐ qù nǎr zuò shénme?)

---

# Phonetics (拼音)

**双音节词语的声调搭配(2): 二声和各声调的搭配**
**Sự kết hợp thanh điệu (2): Thanh 2 + Thanh 1/2/3/4**

* **国家** (guójiā) / **楼房** (lóufáng) / **苹果** (píngguǒ) / **环境** (huánjìng)
* **昨天** (zuótiān) / **篮球** (lánqiú) / **啤酒** (píjiǔ) / **寒假** (hánjià)
* **明天** (míngtiān) / **明年** (míngnián) / **牛奶** (niúnǎi) / **牛肉** (niúròu)
* **年轻** (niánqīng) / **长城** (Chángchéng) / **游泳** (yóuyǒng) / **游戏** (yóuxì)

---

# Characters (汉字)

## 1. Single Component Characters (独体字)
* **四 (sì)**: Số 4.
* **五 (wǔ)**: Số 5.
* **书 (shū)**: Sách. (Originally meant dipping a brush in ink).

## 2. Structure (汉字结构)
* **左右结构 (Left-Right)**: 你 (nǐ), 好 (hǎo)
* **左中右结构 (Left-Middle-Right)**: 谢 (xiè), 树 (shù)

## 3. Radicals (汉字偏旁)
* **氵** (Sān diǎn shuǐ): Liên quan đến nước. Ví dụ: **汉** (Hàn), **没** (méi).
* **讠** (Yán zì páng): Liên quan đến ngôn ngữ/lời nói. Ví dụ: **语** (yǔ), **谁** (shéi).
`,
    },
  ],
};
