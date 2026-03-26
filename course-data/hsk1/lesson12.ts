import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_12: Module = {
  id: "hsk1-m12",
  level: HSKLevel.HSK1,
  title: "Míngtiān tiānqì zěnmeyàng? 明天天气怎么样？ (Lesson 12)",
  description:
    'Hỏi về thời tiết, tình trạng sức khỏe và cách sử dụng trợ động từ "会" để diễn tả khả năng xảy ra.',
  lessons: [
    {
      id: "hsk1-l12-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在路上 Trên đường (On the road)

**A: 昨天北京的天气怎么样？**
*Zuótiān Běijīng de tiānqì zěnmeyàng?*
(Hôm qua thời tiết ở Bắc Kinh thế nào?)

**B: 太热了。**
*Tài rè le.*
(Nóng lắm.)

**A: 明天呢？明天天气怎么样？**
*Míngtiān ne? Míngtiān tiānqì zěnmeyàng?*
(Còn ngày mai thì sao? Thời tiết thế nào?)

**B: 明天天气很好，不冷不热。**
*Míngtiān tiānqì hěn hǎo, bù lěng bú rè.*
(Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.)

---

# Text 2: 在健身房 Ở phòng tập thể dục (In the gym)

**A: 今天会下雨吗？**
*Jīntiān huì xià yǔ ma?*
(Hôm nay có mưa không nhỉ?)

**B: 今天不会下雨。**
*Jīntiān bú huì xià yǔ.*
(Hôm nay không mưa đâu.)

**A: 王小姐今天会来吗？**
*Wáng xiǎojiě jīntiān huì lái ma?*
(Hôm nay cô Vương có đến không nhỉ?)

**B: 不会来，天气太冷了。**
*Bú huì lái, tiānqì tài lěng le.*
(Cô ấy không đến đâu, trời lạnh quá mà.)

---

# Text 3: 在病房 Trong phòng bệnh (In the ward)

**A: 你身体怎么样？**
*Nǐ shēntǐ zěnmeyàng?*
(Sức khỏe của anh thế nào?)

**B: 我身体不太好。天气太热了，不爱吃饭。**
*Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.*
(Tôi không được khỏe lắm. Trời nóng quá, tôi chẳng muốn ăn cơm.)

**A: 你多吃些水果，多喝水。**
*Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.*
(Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.)

**B: 谢谢你，医生。**
*Xièxie nǐ, yīshēng.*
(Cảm ơn bác sĩ.)

---

# Grammar Notes / 注释

## 1. 疑问代词“怎么样” (Đại từ nghi vấn 怎么样)
“怎么样”用来询问状况。
*zěnmeyàng* được dùng để hỏi tình hình/tình trạng.

1. 你的汉语**怎么样**？
2. 你妈妈身体**怎么样**？
3. 明天天气**怎么样**？

## 2. 主谓谓语句 (Câu có vị ngữ là kết cấu chủ-vị)
主谓谓语句中的谓语是一个主谓结构的短语。
Trong loại câu này, vị ngữ là một cụm từ có kết cấu chủ-vị.

| 主语 Chủ ngữ | 全句谓语 (主语 + 谓语) |
| :--- | :--- |
| 我 | 身体不太好。 |
| 明天 | 天气很好。 |
| 你 | 身体怎么样？ |

*Chú ý: Chủ ngữ trong kết cấu chủ vị (vị ngữ của cả câu) thường là một bộ phận thuộc chủ ngữ của cả câu hoặc có liên quan đến nó.*

## 3. 程度副词“太” (Phó từ chỉ mức độ 太)
副词“太”表示程度深的意义。用“太”的句尾常带“了”。否定句不用“了”。
Phó từ *tài* diễn tả mức độ cao hơn mức thông thường. Khi khẳng định thường dùng *le* ở cuối; phủ định không dùng *le*.

1. **太**热**了**。
2. 天气**太**冷**了**。
3. 我身体**不太**好。

## 4. 能愿动词“会” (2) (Động từ năng nguyện 会)
“会”在句中表示所说的情况有可能实现。
*huì* được dùng để diễn tả một tình huống có khả năng xảy ra.

1. A: 爸爸八点前**会**回家吗？ B: **会**。
2. A: 明天她**会**来吗？ B: 她**会**来。
3. A: 今天**会**下雨吗？ B: 今天不**会**下雨。
`,
    },
    {
      id: "hsk1-l12-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words / 生词

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **天气** | tiānqì | dt. | thời tiết / weather |
| **怎么样** | zěnmeyàng | đt. | như thế nào / how |
| **太** | tài | phó. | quá, lắm / too, extremely |
| **热** | rè | tt. | nóng / hot |
| **冷** | lěng | tt. | lạnh / cold |
| **下雨** | xià yǔ | | có mưa, đổ mưa / to rain |
| **下** | xià | đgt. | rơi (mưa, tuyết) / to fall |
| **雨** | yǔ | dt. | mưa / rain |
| **小姐** | xiǎojiě | dt. | cô / miss, young lady |
| **来** | lái | đgt. | đến, tới / to come |
| **身体** | shēntǐ | dt. | sức khỏe, cơ thể / health, body |
| **爱** | ài | đgt. | yêu, thích / to love, to like |
| **些** | xiē | lượng. | một ít, một vài / some, a few |
| **水果** | shuǐguǒ | dt. | trái cây / fruit |
| **水** | shuǐ | dt. | nước / water |
| **医生** | yīshēng | dt. | bác sĩ / doctor |
`,
    },
    {
      id: "hsk1-l12-exercise",
      title: "Exercises & Phonetics",
      type: LessonType.EXERCISE,
      content: `
# Warm-up / 热身

**Match the words with the corresponding images:**

1. **冷** (lěng) - *[Image C: A dog in winter clothes]*
2. **水** (shuǐ) - *[Image A: Three glasses of water]*
3. **热** (rè) - *[Image D: A dog under an umbrella]*
4. **水果** (shuǐguǒ) - *[Image F: Various colorful fruits]*
5. **下雨** (xià yǔ) - *[Image B: A person in a raincoat]*
6. **医生** (yīshēng) - *[Image E: A doctor smiling]*

---

# Exercises / 练习

## 1. Comprehension Questions
1. 昨天北京的天气怎么样？ (Zuótiān Běijīng de tiānqì zěnmeyàng?)
2. 明天天气怎么样？ (Míngtiān tiānqì zěnmeyàng?)
3. 今天会下雨吗？ (Jīntiān huì xià yǔ ma?)
4. 王小姐会来吗？ (Wáng Xiǎojiě huì lái ma?)
5. 他的身体怎么样？ (Tā de shēntǐ zěnmeyàng?)

## 2. Describe the pictures
* 妈妈 **______** 不太好。 (Māma ______ bú tài hǎo.)
* 明天天气很好，不会 **______**。 (Míngtiān tiānqì hěn hǎo, bú huì ______.)
* 王小姐爱吃 **______**，不爱吃饭。 (Wáng Xiǎojiě ài chī ______ , bú ài chī fàn.)
* 今天天气 **______**，你多喝水。 (Jīntiān tiānqì ______ , nǐ duō hē shuǐ.)

---

# Phonetics / 拼音
**Trisyllabic tone combinations (starting with tone 1):**

* **1+1+1**: 星期一 (xīngqī yī), 冰激凌 (bīngjīlíng)
* **1+1+2**: 星期五 (xīngqī wǔ)
* **1+2+3**: 吃苹果 (chī píngguǒ)
* **1+2+4**: 加拿大 (Jiānádà)
* **1+3+2**: 堆雪人 (duī xuěrén)
* **1+3+4**: 吃米饭 (chī mǐfàn)
* **1+4+2**: 机器人 (jīqìrén)

---

# Characters / 汉字

## 1. Single Component Characters
* **天 (tiān)**: Bầu trời (sky/day).
* **气 (qì)**: Khí (gas/air).
* **雨 (yǔ)**: Mưa (rain).

## 2. Radicals
* **女** (Nữ): Liên quan đến phụ nữ (姐 jiě, 妈 mā).
* **饣** (Thực): Liên quan đến thức ăn (饭 fàn, 饮 yǐn).
`,
    },
  ],
};
