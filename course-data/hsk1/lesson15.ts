import { HSKLevel, LessonType, Module } from "../../types";

/**
 * HSK 1 第 15 课模块数据
 */
export const HSK1_LESSON_15: Module = {
  id: "hsk1-m15",
  level: HSKLevel.HSK1,
  title: "我是坐飞机来的 (Lesson 15)",
  description: "学习使用“是……的”句强调时间、地点、方式，以及日期的表达方法。",
  lessons: [
    {
      id: "hsk1-l15-texts",
      title: "课文与语法 (Texts & Grammar)",
      type: LessonType.GRAMMAR,
      content: `
# 课文 1: 在餐桌旁 (Ở bàn ăn)

<strong>A: 你和李小姐是什么时候认识的？</strong>
<em>Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?</em>
(Cô và cô Lý quen nhau khi nào vậy?)

<strong>B: 我们是2011年9月认识的。</strong>
<em>Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.</em>
(Chúng tôi quen nhau vào tháng 9 năm 2011.)

<strong>A: 你们在哪儿认识 service 的？</strong>
<em>Nǐmen zài nǎr rènshi de?</em>
(Thế các cô quen nhau ở đâu?)

<strong>B: 我们是在学校认识的，她是我大学同学。</strong>
<em>Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.</em>
(Ở trường. Cô ấy học chung lớp với tôi ở đại học.)

---

# 课文 2: 在饭店门口 (Trước khách sạn)

[Image of 出租车]

<strong>A: 你们是怎么来饭店的？</strong>
<em>Nǐmen shì zěnme lái fàndiàn de?</em>
(Anh chị đến khách sạn bằng cách nào?)

<strong>B: 我们是坐出租车来的。</strong>
<em>Wǒmen shì zuò chūzūchē lái de.</em>
(Chúng tôi đi taxi đến.)

<strong>A: 李先生呢？</strong>
<em>Lǐ xiānsheng ne?</em>
(Còn ông Lý thì sao?)

<strong>B: 他是和朋友一起开车来的。</strong>
<em>Tā shì hé péngyou yìqǐ kāi chē lái de.</em>
(Ông ấy và bạn cùng lái xe đến đây.)

---

# 课文 3: 在公司 (Trong công ty)



<strong>A: 很高兴认识您！李小姐。</strong>
<em>Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.</em>
(Cô Lý, rất vui được biết cô.)

<strong>B: 认识你我也很高兴！</strong>
<em>Rènshi nǐ wǒ yě hěn gāoxìng!</em>
(Tôi cũng rất vui được biết anh!)

<strong>A: 听张先生说，您是坐飞机来北京的？</strong>
<em>Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?</em>
(Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, phải vậy không?)

<strong>B: 是的。</strong>
<em>Shì de.</em>
(Đúng vậy.)

---

# 语法注释 (Grammar Notes)

## 1. “是……的”句：强调时间、地点、方式
(Câu có cấu trúc 是……的: nhấn mạnh thời gian, địa điểm, cách thức)

在已经知道事情发生的情况下，可以用“是……的”强调事情发生的时间、地点、方式等。肯定句和疑问句中的“是”字可以省略，否定句中不能省略。
(Nếu biết sự việc nào đó đã xảy ra, ta có thể dùng cấu trúc 是……的 để nhấn mạnh thời gian, địa điểm và cách thức sự việc ấy xảy ra. 是 có thể được lược bỏ trong câu khẳng định và câu hỏi nhưng không được lược bỏ trong câu phủ định.)

| 主语 (Chủ ngữ) | 是 | 时间/地点/方式 (T/Đ/C) | 动词 (Động từ) | 的 |
| :--- | :---: | :--- | :--- | :---: |
| 我 | 是 | 昨天 | 来的 | 。 |
| 这 | 是 | 在北京 | 买的 | 。 |
| 你们 | 是 | 怎么 | 来饭店 | 的？ |

**否定形式 (Câu phủ định):**
| 主语 (Chủ ngữ) | 不是 | 时间/地点/方式 (T/Đ/C) | 动词 (Động từ) | 的 |
| :--- | :---: | :--- | :--- | :---: |
| 我 | 不是 | 昨天 | 来的 | 。 |
| 这 | 不是 | 在北京 | 买的 | 。 |
| 我们 | 不是 | 坐出租车 | 来的 | 。 |

## 2. 日期的表达 (2)：年、月、日/号、星期
(Cách diễn tả ngày tháng (2): năm, tháng, ngày, thứ)

汉语中日期的写法和读法都是从大到小。年要分别读出每个数字，再加上“年”；月、日要读出整个数字，再加上“月”、“日/号”。
(Trong tiếng Trung Quốc, ngày tháng được đọc và viết theo trình tự từ đơn vị lớn đến đơn vị nhỏ. Khi đọc năm, ta phải đọc từng chữ số và thêm 年 phía sau. Khi đọc tháng và ngày, ta đọc cả con số rồi thêm 月 và 日/号 phía sau.)

* **2008年8月8号，星期五** -> *èr líng líng bā nián bā yuè bā hào, xīngqī wǔ*

1. 明天是2014年5月11号。
2. A: 今天几号？星期几？ B: 今天9月10号，星期三。
3. 我们是2011年9月认识的。
`,
    },
    {
      id: "hsk1-l15-vocab",
      title: "生词 (New Words)",
      type: LessonType.VOCABULARY,
      content: `
# 生词 (Từ mới)

| 汉字 (Hanzi) | 拼音 (Pinyin) | 词类 (POS) | 意义 (Meaning) |
| :--- | :--- | :---: | :--- |
| **认识** | rènshi | v. | quen, biết |
| **年** | nián | n. | năm |
| **大学** | dàxué | n. | đại học |
| **饭店** | fàndiàn | n. | khách sạn, nhà hàng |
| **出租车** | chūzūchē | n. | taxi |
| **一起** | yìqǐ | adv. | cùng |
| **高兴** | gāoxìng | adj. | vui, phấn khởi |
| **听** | tīng | v. | nghe |
| **飞机** | fēijī | n. | máy bay |
`,
    },
    {
      id: "hsk1-l15-exercise",
      title: "练习与文化 (Exercises & Culture)",
      type: LessonType.EXERCISE,
      content: `
# 热身 (Warm-up)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **飞机** (fēijī) - 
2. **饭店** (fàndiàn) - 
3. **出租车** (chūzūchē) - [Image of 出租车]
4. **听** (tīng) - 
5. **大学** (dàxué) - 
6. **开车** (kāi chē) - 

---

# 综合练习 (Comprehension Questions)

**根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học):**
1. 她们是什么时候认识的？ (Tāmen shì shénme shíhou rènshi de?)
2. 她们是在哪儿认识的？ (Tāmen shì zài nǎr rènshi de?)
3. 他们是怎么去饭店的？ (Tāmen shì zěnme qù fàndiàn de?)
4. 李先生是坐出租车去饭店的吗？ (Lǐ xiānsheng shì zuò chūzūchē qù fàndiàn de ma?)
5. 李小姐是怎么来北京的？ (Lǐ xiǎojiě shì zěnme lái Běijīng de?)

---

# 图片描述 (Describe Pictures)

1. 
   我们是在巴黎 (Paris) **认识** 的。
2. [Image of A classroom/office]
   我没看见李老师，她是什么时候 **来** 的？
3. 
   这些衣服不 是今天 **买** 的，是昨天买的。
4. 
   我们是一起 **走/开车** 来的，我不喜欢坐出租车。

---

# 拼音 (Phonetics)

**三音节词语的声调搭配(4)：四声音节开头**
* 4+1+1: **电冰箱** (diànbīngxiāng)
* 4+1+2: **麦当劳** (Màidāngláo)
* 4+1+3: **健身馆** (jiànshēnguǎn)
* 4+1+4: **办公室** (bàngōngshì)
* 4+4+4: **照相机** (zhàoxiàngjī), **电话卡** (diànhuàkǎ), **奥运会** (Àoyùnhuì)

---

# 汉字 (Characters)

**1. 认识独体字 (Làm quen với chữ đơn)**
* **年 (nián):** 年 có nghĩa gốc là chở thóc lúa đã thu hoạch về nhà, nay chỉ đơn vị thời gian.
* **出 (chū):** Chữ 出 là hình vẽ bàn chân rời đi, nay có nghĩa là ra, đi ra.
* **飞 (fēi):** Chữ 飞 là hình vẽ đôi cánh chim tung bay trên bầu trời, nay có nghĩa là bay trên trời.

**2. 汉字偏旁 (Radicals)**
* **艹 (草字头):** 一般和草木或者植物有关系 (Liên quan đến cỏ cây)。例：**茶** (chá), **菜** (cài)。
* **宀 (宝盖头):** 一般和房子有关系 (Liên quan đến nhà cửa)。例：**安** (ān), **家** (jiā)。

---

# 运用与文化 (Application & Culture)

### 文化：中国人经常使用的通信工具
在中国，常用的通信工具有电话机和手机两种。
* 电话机号码一般为 7-8 位。
* 手机号码为 11 位（格式 3-4-4，如 139-0107-8866）。
* **注意：** 号码中的“1”要读成“**yāo**”。

### 活动 (Activities)
1. **双人活动：** 询问对方物品的具体购买情况（时间、地点）。
2. **小组活动：** 互相询问并记录小组成员学会某项技能（如说汉语、做中国菜）的时间和地点。
`,
    },
  ],
};
