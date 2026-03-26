import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_8: Module = {
  id: "hsk1-m8",
  level: HSKLevel.HSK1,
  title: "今天几号? Hôm nay là ngày mấy? (Lesson 8)",
  description:
    "Learn to ask and answer about dates, days of the week, and express purpose using 'qu'.",
  lessons: [
    {
      id: "hsk1-l8-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# 课文 1: 在银行 (Ở ngân hàng)

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

# 课文 2: 看日历 (Xem lịch)

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

# 课文 3: 在咖啡馆儿 (Ở quán cà phê)

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

# 注释 (Grammar Notes)

## 1. 日期的表达(1):月、日(rì, ngày)/号、星期 (Cách diễn tả ngày tháng)

汉语的日期表达方式遵循由大到小的原则，先说“月”，然后说“日/号”，最后说“星期”。口语一般常用“号”。例如：
Trong tiếng Trung Quốc, người ta nói về ngày tháng theo trình tự từ đơn vị lớn đến đơn vị nhỏ: trước tiên là 月 (tháng), sau đó đến日/号(ngày), cuối cùng là 星期 (thứ). Trong văn nói, người ta thường dùng 号 thay cho 日. Ví dụ:

(1) 9月1号，星期三。
(2) 9月2号，星期四。
(3) 8月31号，星期二。

## 2. 名词谓语句 (Câu có vị ngữ là danh từ)

名词谓语句是谓语部分由名词性成分充当的句子，一般用于表达年龄、时间、日期等。例如：
Đây là kiểu câu có vị ngữ là thành phần mang đặc điểm của danh từ, thường được dùng để nói về tuổi tác, thời gian, ngày tháng... Ví dụ:

| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- |
| 我的汉语老师 | 33岁。 |
| 明天 | 星期三。 |
| 今天 | 9月1号。 |

## 3. 连动句(1):去+地方+做什么 (Câu liên động từ (1): 去 + nơi chốn + làm gì)

连动句的谓语部分由两个或者两个以上动词构成，后一个动作可以表示前一个动作的目的。第一个动词后表示地点的宾语有时可以省略。例如：
Trong câu liên động từ, vị ngữ có từ hai động từ trở lên, trong đó động từ đứng sau có thể diễn tả mục đích của động từ đứng trước. Đôi lúc ta có thể lược bỏ tân ngữ chỉ nơi chốn theo sau động từ thứ nhất. Ví dụ:

| 主语 (Chủ ngữ) | 动词 1 (Động từ 1) | (地方 nơi chốn) | 动词 2 (Động từ 2) |
| :--- | :--- | :--- | :--- |
| | 去 | | 做什么 (làm gì) |
| 我 | 去 | (中国) | 学习汉语。 |
| 我们 | 去 | (中国饭馆儿) | 吃中国菜。 |
| 我 | 去 | (学校) | 看书。 |
`,
    },
    {
      id: "hsk1-l8-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# 词汇 (New Words)

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **请** | qǐng | đgt. | (lịch sự) mời, xin |
| **问** | wèn | đgt. | hỏi |
| **今天** | jīntiān | dt. | hôm nay |
| **号** | hào | dt. | ngày |
| **月** | yuè | dt. | tháng |
| **星期** | xīngqī | dt. | tuần, thứ |
| **昨天** | zuótiān | dt. | hôm qua |
| **明天** | míngtiān | dt. | ngày mai |
| **去** | qù | đgt. | đi, đi đến |
| **学校** | xuéxiào | dt. | trường |
| **看** | kàn | đgt. | nhìn, xem |
| **书** | shū | dt. | sách |
`,
    },
    {
      id: "hsk1-l8-exercise",
      title: "Exercises & Culture",
      type: LessonType.EXERCISE,
      content: `
# 热身 (Warm-up)

**给下面的词语选择对应的图片 / Chọn hình tương ứng với các từ ngữ bên dưới.**

* [Image A]: A basketball court.
* [Image B]: A woman reading a book.
* [Image C]: A calendar showing December 25 with a Christmas tree and snowman.
* [Image D]: A bowl of Mapo tofu (Chinese food).
* [Image E]: A stack of books.
* [Image F]: A flip clock showing the number 1.

1. **学校** (xuéxiào) ______
2. **看书** (kàn shū) ______
3. **书** (shū) ______
4. **中国菜** (Zhōngguó cài) ______
5. **25 号** (èrshíwǔ hào) ______
6. **5月** (wǔ yuè) ______

---

# 练习 (Exercises)

## 1. 分角色朗读课文 (Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)

## 2. 朗读下列词语 (Đọc to các từ sau.)

| | | | | |
| :---: | :---: | :---: | :---: | :---: |
| yī yuè | èr yuè | sān yuè | sì yuè | wǔ yuè |
| **一月** | **二月** | **三月** | **四月** | **五月** |
| tháng một | tháng hai | tháng ba | tháng tư | tháng năm |
| liù yuè | qī yuè | bā yuè | jiǔ yuè | shí yuè |
| **六月** | **七月** | **八月** | **九月** | **十月** |
| tháng sáu | tháng bảy | tháng tám | tháng chín | tháng mười |
| shíyī yuè | shí'èr yuè | | | |
| **十一月** | **十二月** | | | |
| tháng mười một | tháng mười hai | | | |
| xīngqī yī | xīngqī èr | xīngqī sān | xīngqī sì | |
| **星期一** | **星期二** | **星期三** | **星期四** | |
| thứ hai | thứ ba | thứ tư | thứ năm | |
| xīngqī wǔ | xīngqī liù | xīngqī rì / xīngqī tiān | | |
| **星期五** | **星期六** | **星期日/星期天** | | |
| thứ sáu | thứ bảy | chủ nhật | | |

## 3. 根据实际情况回答问题 (Trả lời câu hỏi.)

1. 今天几月几号星期几? (Jīntiān jǐ yuè jǐ hào xīngqī jǐ?)
2. 明天几月几号星期几? (Míngtiān jǐ yuè jǐ hào xīngqī jǐ?)
3. 昨天几月几号星期几? (Zuótiān jǐ yuè jǐ hào xīngqī jǐ?)
4. 明天你去哪儿做什么? (Míngtiān nǐ qù nǎr zuò shénme?)
5. 星期日你去哪儿做什么? (Xīngqī rì nǐ qù nǎr zuò shénme?)

## 4. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới.)

* [Image 1: A desk calendar showing 1 January 2013]
    今天是 ______ 月 ______ 号，星期 ______ 。 (Jīntiān shì ______ yuè ______ hào, xīngqī ______ .)
* [Image 2: A calendar showing 18 May]
    今天 ______ 月 ______ 号。 (Jīntiān ______ yuè ______ hào.)
* [Image 3: Calendar showing numbers 22, 23, 24]
    22号是 ______ ，23号是 ______ 。 (Èrshí'èr hào shì ______ , èrshísān hào shì ______ .)
* [Image 4: Students reading books in a hallway]
    明天我去 ______ 看 ______ 。 (Míngtiān wǒ qù ______ kàn ______ .)

---

# 拼音 (Phonetics)

## 双音节词语的声调搭配(2):二声和各声调的搭配 (Sự kết hợp thanh điệu của từ có hai âm tiết (2): thanh 2 + thanh 1/2/3/4)

**听录音并跟读，注意声调的搭配 (Nghe và luyện đọc theo phần ghi âm, chú ý sự kết hợp của các thanh.)**

| 国家 (guójiā) | 楼房 (lóufáng) | 苹果 (píngguǒ) | 环境 (huánjìng) |
| :---: | :---: | :---: | :---: |
| 昨天 (zuótiān) | 篮球 (lánqiú) | 啤酒 (píjiǔ) | 寒假 (hánjià) |
| 明天 (míngtiān) | 明年 (míngnián) | 牛奶 (niúnǎi) | 牛肉 (niúròu) |
| 年轻 (niánqīng) | 长城 (Chángchéng) | 游泳 (yóuyǒng) | 游戏 (yóuxì) |

*(Additional terms from images: 时间 shíjiān, 银行 yínháng, 词典 cídiǎn, 蓝色 lánsè)*

---

# 汉字 (Characters)

## 1. 认识独体字 (Làm quen với chữ đơn/chữ độc thể)

* **(1) “四”，表示数量“4”。(四: số 4)**
    sì 四
* **(2) “五”，表示数量“5”。(五: số 5)**
    wǔ 五
* **(3) “书”，本义是将毛笔放在墨池中蘸墨以便涂写，现在是“书写、书籍”等意思。(ban đầu chỉ hành động chấm bút lông vào trong nghiên mực để viết, ngày nay có nghĩa là viết chữ, sách...)**
    shū 书

## 2. 汉字结构(2):左右结构与左中右结构 (Kết cấu của chữ Hán (2): kết cấu trái-phải và kết cấu trái-giữa-phải)

合体结构中包括左右结构和左中右结构。(Kết cấu tổ hợp trong chữ Hán bao gồm kết cấu trái-phải và kết cấu trái-giữa-phải.)

| 结构 (Kết cấu) | 例字 (Chữ Hán) | 图解 (Hình minh họa) |
| :---: | :--- | :---: |
| **左右结构** (kết cấu trái-phải) | **你** (nǐ - (số ít) anh, chị, bạn...) <br> **好** (hǎo - khỏe, tốt) | 你 <br> 好 |
| **左中右结构** (kết cấu trái-giữa phải) | **谢** (xiè - cảm ơn) <br> **树** (shù - cây) | 谢 <br> 树 |

## 3. 汉字偏旁“氵”和“讠” (Các bộ của chữ Hán: 氵 和 讠)

| 偏旁 (Các bộ) | 解释 (Chú thích) | 例字 (Chữ Hán) |
| :---: | :--- | :--- |
| **氵** | 三点水，一般和水有关系。(Bộ 氵 thường liên quan đến nước.) | **汉** (hàn - Hán) <br> **没** (méi - không có) |
| **讠** | 言字旁，一般和语言、说话有关系。(Bộ 讠 thường liên quan đến ngôn ngữ và lời nói.) | **语** (yǔ - lời nói) <br> **谁** (shéi - ai) |

---

# 运用 (Application)

## 1. 双人活动 (Hoạt động theo cặp)

两人一组，根据实际情况进行问答练习。(Ghép thành từng cặp, luyện tập đặt câu hỏi và sử dụng thông tin về bản thân cũng như thời gian hiện tại để trả lời.)

**例如 (Ví dụ):**
* **A: 今天是几月几号？** (Jīntiān shì jǐ yuè jǐ hào?)
    **B:** ......
* **A: 今天星期几？** (Jīntiān xīngqī jǐ?)
    **B:** ......
* **A: 明天是几月几号？** (Míngtiān shì jǐ yuè jǐ hào?)
    **B:** ......
* **A: 明天星期几？** (Míngtiān xīngqī jǐ?)
    **B:** ......
* **A: 明天你做什么？** (Míngtiān nǐ zuò shénme?)
    **B: 明天我去......** (Míngtiān wǒ qù...)

## 2. 小组活动 (Hoạt động nhóm)

3~4人一组，互相询问出生日期并记录，每组请一位同学报告情况。(Lập nhóm từ 3 đến 4 người, hỏi ngày sinh của nhau và ghi lại, sau đó cử một đại diện trình bày những thông tin đã ghi chép.)

**补充生词 (Từ vựng bổ sung):** 生日 (shēngrì) - ngày sinh/sinh nhật

| 姓名 (Họ tên) | 生日 (Ngày sinh) |
| :--- | :--- |
| 李月 (Lǐ Yuè) | 8月31号 (bā yuè sānshíyī hào) |
| | |
| | |
`,
    },
  ],
};
