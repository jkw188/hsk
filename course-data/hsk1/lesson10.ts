import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_10: Module = {
  id: "hsk1-m10",
  level: HSKLevel.HSK1,
  title: "我能坐这儿吗？ (Can I sit here?)",
  description:
    'Learn to express existence using "you", use the conjunction "he", modal verb "neng", and polite requests with "qing".',
  lessons: [
    {
      id: "hsk1-l10-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# 课文 1: 在办公室 (Trong văn phòng)

**A: 桌子上有什吗？**
*Zhuōzi shang yǒu shénme?*
(Trên bàn có gì vậy?)

**B: 桌子上有一个电脑和一本书。**
*Zhuōzi shang yǒu yi ge diànnǎo hé yì běn shū.*
(Có một chiếc máy vi tính và một quyển sách.)

**A: 杯子在哪儿？**
*Bēizi zài nǎr?*
(Vậy cái ly đâu?)

**B: 杯子在桌子里。**
*Bēizi zài zhuōzi li.*
(Ở trong bàn.)

---

# 课文 2: 在健身房 (Phòng tập thể dục)

**A: 前面那个人叫什么名字？**
*Qiánmiàn nàge rén jiào shénme míngzi?*
(Người ở phía trước tên gì vậy?)

**B: 她叫王方，在医院工作。**
*Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.*
(Cô ấy tên là Vương Phương, làm việc ở bệnh viện.)

**A: 后面那个人呢？他叫什么名字？**
*Hòumiàn nàge rén ne? Tā jiào shénme míngzi?*
(Còn người ở phía sau? Anh ấy tên gì?)

**B: 他叫谢朋，在商店工作。**
*Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.*
(Anh ấy tên Tạ Bằng, làm việc ở cửa hàng.)

---

# 课文 3: 在图书馆 (Ở thư viện)

**A: 这儿有人吗？**
*Zhèr yǒu rén ma?*
(Chỗ này có ai ngồi chưa?)

**B: 没有。**
*Méi yǒu.*
(Chưa.)

**A: 我能坐这儿吗？**
*Wǒ néng zuò zhèr ma?*
(Tôi có thể ngồi ở đây được không?)

**B: 请坐。**
*Qǐng zuò.*
(Được, xin mời.)

---

# Grammar Notes (注释)

## 1. “有”字句：表示存在 (Câu có từ 有: diễn tả sự tồn tại)
动词“有”可以用于表示存在的句子中，表示某个处所或者位置存在什么。
*(Động từ 有 có thể được dùng trong câu diễn tả sự tồn tại, để cho biết một người/vật đang ở vị trí hoặc địa điểm nào đó. Ví dụ:)*

| 处所/位置 (Từ chỉ vị trí) | 有 | 人/事物 (Người/Vật đang tồn tại) |
| :--- | :---: | :--- |
| 椅子下面 | **有** | 一只小狗。 |
| 学校里 | **有** | 一个商店。 |
| 桌子上 | **有** | 一个电脑和一本书。 |

**否定形式 (Dạng phủ định):** 使用“没有”。宾语前不能带数量定语。
1. 椅子下面**没有**小狗。
2. 学校里**没有**商店。
3. 桌子上**没有**电脑和书。

## 2. 连词“和” (Liên từ 和)
用于连接两个或者两个以上并列的成分，表示一种并列关系。
*(Liên từ 和 được dùng để nối hai (hoặc nhiều hơn) thành phần ngang nhau nhằm thể hiện quan hệ ngang cấp. Ví dụ:)*
1. 我有一个中国朋友**和**一个美国朋友。
2. 我家有三口人，爸爸、妈妈**和**我。
3. 桌子上有一个电脑**和**一本书。

## 3. 能愿动词“能” (Động từ năng nguyện 能)
一般用在动词前，表示一种能力或者可能。也常用于请求、希望获得许可。
*(Động từ năng nguyện 能 thường đứng trước động từ khác để diễn tả năng lực hay khả năng. Thường dùng trong câu hỏi 能......吗? để thỉnh cầu. Ví dụ:)*
1. 明天下午我**能**去商店。
2. 你**能**在这儿写你的名字吗？
3. 我**能**坐这儿吗？

## 4. 用“请”的祈使句 (Câu cầu khiến với 请)
动词“请”后加其他动词，委婉地表示建议、希望对方做某事。
*(Động từ 请 kết hợp với động từ đi sau tạo thành câu cầu khiến lịch sự. Ví dụ:)*
1. **请**写您的名字。
2. **请**喝茶。
3. **请**坐。
`,
    },
    {
      id: "hsk1-l10-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words (词语)

| # | Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **桌子** | zhuōzi | dt. | bàn |
| 2 | **上** | shang | dt. | trên, phía trên |
| 3 | **电脑** | diànnǎo | dt. | máy vi tính |
| 4 | **和** | hé | liên. | và |
| 5 | **本** | běn | lượng. | quyển, cuốn |
| 6 | **里** | li | dt. | trong, bên trong |
| 7 | **前面** | qiánmiàn | dt. | phía trước |
| 8 | **后面** | hòumiàn | dt. | phía sau |
| 9 | **这儿** | zhèr | dt. | chỗ này, ở đây |
| 10 | **没有 (没)** | méiyǒu (méi) | phó. | không có |
| 11 | **能** | néng | đtnn. | có thể |
| 12 | **坐** | zuò | dgt. | ngồi |

## Proper Names (专有名词)
* **王方** (Wáng Fāng): Vương Phương
* **谢朋** (Xiè Péng): Tạ Bằng
`,
    },
    {
      id: "hsk1-l10-exercise",
      title: "Exercises & Culture",
      type: LessonType.EXERCISE,
      content: `
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **工作** (gōngzuò) - *[Image F: People in an office]*
2. **桌子** (zhuōzi) - *[Image A: Wooden desk]*
3. **看书** (kàn shū) - *[Image C: Woman reading]*
4. **电脑** (diànnǎo) - *[Image D: Desktop computer]*
5. **坐** (zuò) - *[Image B: Man sitting]*
6. **爸爸和妈妈** (bàba hé māma) - *[Image E: Parents with baby]*

---

# Exercises (练习)

**1. 根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học)**
1. 电脑在哪儿？ *(Diànnǎo zài nǎr?)*
2. 书在哪儿？ *(Shū zài nǎr?)*
3. 桌子里面有什么？ *(Zhuōzi lǐmiàn yǒu shénme?)*
4. 哪个人是王方？ *(Nǎge rén shì Wáng Fāng?)*
5. 哪个人是谢朋？ *(Nǎge rén shì Xiè Péng?)*

**2. 描述图片 (Mô tả hình ảnh)**
1. 桌子上 **有** 一本书 **和** 一个电脑。
2. 他在商店 **工作**。
3. 我能 **坐这儿** 吗？

**3. 选择适当的量词填空 (Điền lượng từ thích hợp)**
* 个 (gè) | 口 (kǒu) | 本 (běn) | 块 (kuài)
1. 我家有三 \_\_\_\_\_\_ 人。 (*口*)
2. 我买一 \_\_\_\_\_\_ 杯子。 (*个*)
3. 我有五 \_\_\_\_\_\_ 汉语书。 (*本*)
4. 椅子八十 \_\_\_\_\_\_ 钱。 (*块*)

---

# Pronunciation (语音)

## 1. 轻声音节的读法 (Cách đọc âm tiết mang thanh nhẹ)
Âm mang thanh nhẹ thay đổi theo độ cao của âm đứng trước nó.
* **第一声 + 轻声:** 桌子 (zhuōzi)
* **第二声 + 轻声:** 盘子 (pánzi)
* **第三声 + 轻声:** 椅子 (yǐzi)
* **第四声 + 轻声:** 裤子 (kùzi)

## 2. 叠音词 & 后缀 (Từ láy & Hậu tố)
* **爸爸** (bàba), **妈妈** (māma), **爷爷** (yéye), **奶奶** (nǎinai)
* **谢谢** (xièxie), **看看** (kànkan)
* **你们** (nǐmen), **桌子** (zhuōzi), **枕头** (zhěntou)

---

# Characters (汉字)

**1. 认识独体字 (Chữ độc thể)**
* **上** (shàng): Phía trên.
* **下** (xià): Phía dưới.
* **本** (běn): Gốc cây, cội nguồn.
* **末** (mò): Ngọn cây, thứ yếu.

**2. 汉字结构: 全包围结构 (Kết cấu bao quanh hoàn toàn)**
* **四** (sì): Bốn.
* **国** (guó): Đất nước.

**3. 汉字偏旁 (Bộ thủ)**
* **囗** (Bộ Vi): Bao vây. Ví dụ: **国**, **困**.
* **礻** (Bộ Thị): Thần linh, thờ cúng. Ví dụ: **祝**, **视**.

---

# Culture (文化)

**中国人姓名的特点 (Họ tên của người Trung Quốc)**
Họ tên người Trung Quốc: **Họ đứng trước, Tên đứng sau**.
Ví dụ: **李月** (Lǐ Yuè) - 李 (Họ), 月 (Tên).
* **Họ đơn (单姓):** 张 (Zhang), 王 (Wang), 李 (Li).
* **Họ kép (复姓):** 欧阳 (Ouyang), 诸葛 (Zhuge).
* **Xưng hô:** Họ + Nghề nghiệp (Ví dụ: **李老师** - Cô Lý, **王医生** - Bác sĩ Vương).
`,
    },
  ],
};
