import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_14: Module = {
  id: "hsk1-m14",
  level: HSKLevel.HSK1,
  title: "她买了不少衣服 (Lesson 14)",
  description:
    "Learn how to use the particle 'le' for completed actions, the noun 'hou' for 'after', the modal particle 'a', and the adverb 'dou'.",
  lessons: [
    {
      id: "hsk1-l14-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在宿舍 (Ký túc xá)

**A: 昨天上午你去哪儿了？** *Zuótiān shàngwǔ nǐ qù nǎr le?* (Sáng hôm qua bạn đi đâu vậy?)

**B: 我去商店买东西了。** *Wǒ qù shāngdiàn mǎi dōngxi le.* (Mình đến cửa hàng để mua đồ.)

**A: 你买什么了？** *Nǐ mǎi shénme le?* (Bạn mua gì vậy?)

**B: 我买了一点儿苹果。** *Wǒ mǎile yìdiǎnr píngguo.* (Mình mua một ít táo.)

---

# Text 2: 在公司 (Trong công ty)

**A: 你看见张先生了吗？** *Nǐ kànjiàn Zhāng xiānsheng le ma?* (Anh có thấy ông Trương không?)

**B: 看见了，他去学开车了。** *Kànjiàn le, tā qù xué kāi chē le.* (Có, ông ấy đi học lái xe rồi.)

**A: 他什么时候能回来？** *Tā shénme shíhou néng huílai?* (Khi nào ông ấy quay lại?)

**B: 40 分钟后回来。** *Sìshí fēnzhōng hòu huílai.* (40 phút nữa.)

---

# Text 3: 在商店门口 (Trước cửa hàng)

**A: 王方的衣服太漂亮了！** *Wáng Fāng de yīfu tài piàoliang le!* (Quần áo của Vương Phương đẹp quá!)

**B: 是啊，她买了不少衣服。** *Shì a, tā mǎile bùshǎo yīfu.* (Đúng vậy. Cô ấy mua nhiều quần áo lắm.)

**A: 你买什么了？** *Nǐ mǎi shénme le?* (Còn bạn mua những gì?)

**B: 我没买，这些都是王方的东西。** *Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.* (Mình không mua gì cả, những thứ này đều là đồ của Vương Phương.)

---

# Grammar Notes (注释)

## 1. “了” 表发生或完成了 (Diễn tả sự việc đã xảy ra hay hoàn thành)
**A. 用于句尾 (Được dùng ở cuối câu):**
| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) | 了 |
| :--- | :--- | :--- |
| 我 | 去商店 | **了**。 |
| 他 | 去学开车 | **了**。 |
| 你 | 买什么 | **了**？ |

**B. 用于动词后带宾语 (Đứng giữa động từ và tân ngữ):**
Trước tân ngữ thường phải có định ngữ (số lượng, tính từ, đại từ).
| 主语 (Chủ ngữ) | 动词 (Động từ) | 了 | 定语 (Định ngữ) | 宾语 (Tân ngữ) |
| :--- | :--- | :--- | :--- | :--- |
| 她 | 买 | **了** | 一点儿 | 苹果。 |
| 我 | 买 | **了** | 不少 | 衣服。 |
| 你 | 看见 | **了** | 几个 | 人？ |

**C. 否定形式 (Hình thức phủ định):**
Sử dụng **没 + 动词 (+ 宾语)**, bỏ "了".
* 她**没**去商店。
* 我**没**买。
* 我**没**看见张先生。

## 2. 名词 “后” (Danh từ 后)
Biểu thị thời gian sau thời điểm hiện tại hoặc sau thời điểm được đề cập.
1. 五点**后** | 40 分钟**后** | 星期三**后**
2. A: 你几点去工作？ B: 八点**后**。
3. A: 你什么时候回家？ B: 五点**后**。
4. A: 他什么时候能回来？ B: 40 分钟**后**回来。

## 3. 语气助词 “啊” (Trợ từ ngữ khí 啊)
Dùng ở cuối câu để tăng sắc thái biểu cảm. Phát âm biến đổi theo âm cuối của từ đứng trước.
* 是**啊** (Shì a).
* 好**啊** (Hǎo a).
* 王方的衣服太漂亮了！ 是**啊**，她买了不少衣服。

## 4. 副词 “都” (Phó từ 都)
Bao gồm toàn bộ. Đối tượng được tổng quát phải đặt trước “都”.
1. 我们**都**是中国人。
2. 他们**都**喜欢喝茶。
3. 这些**都**是王方的东西。
`,
    },
    {
      id: "hsk1-l14-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words (从词)

| Hanzi | Pinyin | POS | Meaning (Vietnamese) |
| :--- | :--- | :--- | :--- |
| **东西** | dōngxi | dt. | đồ, đồ đạc |
| **一点儿** | yìdiǎnr | sl. | một ít, một chút |
| **苹果** | píngguo | dt. | táo |
| **看见** | kànjiàn | đgt. | nhìn thấy |
| **先生** | xiānsheng | dt. | ông, ngài |
| **开** | kāi | đgt. | lái |
| **车** | chē | dt. | xe |
| **回来** | huílai | đgt. | quay về, trở lại |
| **分钟** | fēnzhōng | dt. | phút |
| **后** | hòu | dt. | sau |
| **衣服** | yīfu | dt. | quần áo |
| **漂亮** | piàoliang | tt. | đẹp |
| **啊** | a | trợ. | trợ từ ngữ khí |
| **少** | shǎo | tt. | ít |
| **不少** | bùshǎo | tt. | nhiều |
| **这些** | zhèxiē | dt. | những thứ này |
| **都** | dōu | phó. | đều |

# Proper Nouns (专有名词)

| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **张** | Zhāng | Trương (họ) |
| **王方** | Wáng Fāng | Vương Phương |
`,
    },
    {
      id: "hsk1-l14-exercise",
      title: "Exercises, Phonetics & Characters",
      type: LessonType.EXERCISE,
      content: `
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **苹果** (píngguo) - *[Image of Apples]*
2. **车** (chē) - *[Image of Cars]*
3. **衣服** (yīfu) - *[Image of Clothes]*
4. **商店** (shāngdiàn) - **
5. **书店** (shūdiàn) - **
6. **英语书** (Yīngyǔ shū) - *[Image of English Books]*

---

# Comprehension Questions (根据课文内容回答问题)

1. 昨天上午她去哪儿了？ (Zuótiān shàngwǔ tā qù nǎr le?)
2. 她买什么了？ (Tā mǎi shénme le?)
3. 张先生什么时候能回来？ (Zhāng xiānsheng shénme shíhou néng huílai?)
4. 王方买什么了？ (Wáng Fāng mǎi shénme le?)
5. 王方的朋友买什么了？ (Wáng Fāng de péngyou mǎi shénme le?)

---

# Describe the Pictures (描述图片)

1. 妈妈去商店买了 **苹果**。 (Māma qù shāngdiàn mǎile píngguo.)
2. 她下午去学 **开车** 了。 (Tā xiàwǔ qù xué kāi chē le.)
3. 桌子上 **都** 是张先生的东西。 (Zhuōzi shang dōu shì Zhāng xiānsheng de dōngxi.)
4. 丽丽买了 **不少** 衣服。 (Lìlì mǎile bùshǎo yīfu.)

---

# Phonetics (拼音)

**三音节词语的声调搭配 (3)：三声音节开头**
* **3+1+1**: 洗衣机 (xǐyījī)
* **3+1+2**: 普通人 (pǔtōng rén)
* **3+1+3**: 总经理 (zǒngjīnglǐ)
* **3+1+4**: 火车票 (huǒchē piào)
* **3+2+1**: 史学家 (shǐxuéjiā)
* **3+2+4**: 美容院 (měiróngyuàn)
* **3+3+3**: 米老鼠 (Mǐlǎoshǔ)
* **3+4+4**: 打电话 (dǎ diànhuà)

---

# Characters (汉字)

**1. 认识独体字 (Làm quen với chữ đơn)**
* **开 (kāi)**: Hình dạng hai tay kéo chốt cửa. Nghĩa gốc: mở cửa. Nay: lái xe (开车), ra hoa (开花).
* **车 (chē)**: Hình dạng dụng cụ có bánh xe hai bên. Nay: phương tiện giao thông (taxi, tàu hỏa).
* **回 (huí)**: Hình dạng dòng nước uốn quanh. Nghĩa gốc: xoay tròn. Nay: về, trở về.

**2. 汉字偏旁 (Các bộ của chữ Hán)**
* **月 (Bộ Nguyệt)**: Liên quan đến thân thể, thịt (胖 - béo, 服 - quần áo).
* **扌 (Bộ Thủ)**: Liên quan đến hành động của tay (打 - đánh, 找 - tìm).

---

# Activities (运用)

**1. 双人活动 (Hoạt động theo cặp)**
Hỏi nhau về những thứ đã mua:
* A: 你去商店买什么了？
* B: 我买了苹果/衣服/书...

**2. 小组活动 (Hoạt động nhóm)**
Ghi lại hoạt động một ngày:
| 人名 (Tên) | 时间 (Thời gian) | 地方 (Địa điểm) | 做什么 (Hoạt động) |
| :--- | :--- | :--- | :--- |
| 小王 | 星期一上午 | 电影院 | 看了一个电影 |
`,
    },
  ],
};
