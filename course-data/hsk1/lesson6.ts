import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_6: Module = {
  id: "hsk1-m6",
  level: HSKLevel.HSK1,
  title: "我会说汉语 (Lesson 6)",
  description:
    'Learn to express abilities using "会", describe situations with adjective predicates, and ask about manners with "怎么".',
  lessons: [
    {
      id: "hsk1-l6-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在学校 (At School)

**A: 你会说汉语吗？**
*Nǐ huì shuō Hànyǔ ma?*
(Em có biết nói tiếng Trung Quốc không?)

**B: 我会说汉语。**
*Wǒ huì shuō Hànyǔ.*
(Em có biết.)

**A: 你妈妈会说汉语吗？**
*Nǐ māma huì shuō Hànyǔ ma?*
(Mẹ em biết nói tiếng Trung Quốc không?)

**B: 她不会说。**
*Tā bú huì shuō.*
(Mẹ em thì không.)

---

# Text 2: 在厨房 (In the kitchen)

**A: 中国菜好吃吗？**
*Zhōngguó cài hǎochī ma?*
(Món ăn Trung Quốc có ngon không?)

**B: 中国菜很好吃。**
*Zhōngguó cài hěn hǎochī.*
(Rất ngon.)

**A: 你会做中国菜吗？**
*Nǐ huì zuò Zhōngguó cài ma?*
(Anh có biết nấu món Trung Quốc không?)

**B: 我不会做。**
*Wǒ bú huì zuò.*
(Tôi không biết.)

---

# Text 3: 在图书馆 (At the library)

**A: 你会写汉字吗？**
*Nǐ huì xiě Hànzì ma?*
(Anh có biết viết chữ Hán không?)

**B: 我会写。**
*Wǒ huì xiě.*
(Tôi có biết.)

**A: 这个字怎么写？**
*Zhège zì zěnme xiě?*
(Vậy chữ này anh viết thế nào?)

**B: 对不起，这个字我会读，不会写。**
*Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.*
(Xin lỗi, chữ này tôi biết đọc chứ không biết viết.)

---

# Grammar Notes

## 1. The Modal Verb 会 (huì)
The modal verb 会 is used before a verb to indicate acquiring an ability through learning. Its negative form is 不会.

| Subject | (不)会 | Verb |
| :--- | :---: | :--- |
| 我 | **会** | 写汉字。 |
| 我 | **不会** | 做中国菜。 |
| 你妈妈 | **会** | 说汉语吗？ |

## 2. Sentences with an Adjective Predicate
An adjective can be used in the structure "Subject + Adverb of degree + Adjective" to describe the nature or state of a person or thing. The adverb of degree is often 很. The negative form is "Subject + 不 + Adjective".

| Subject | Adverb / 不 | Adjective |
| :--- | :---: | :--- |
| 我 | **很** | 好。 |
| 我妈妈的汉语 | **不** | 好。 |
| 中国菜 | **很** | 好吃。 |

## 3. The Interrogative Pronoun 怎么 (zěnme)
The interrogative pronoun 怎么 is used before a verb to ask about the manner of an action.

1. 这个汉字**怎么**读？
2. 你的汉语名字**怎么**写？
3. 这个字**怎么**写？
`,
    },
    {
      id: "hsk1-l6-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning (Vietnamese) |
| :--- | :--- | :--- | :--- |
| **会** | huì | aux. | biết |
| **说** | shuō | v. | nói |
| **妈妈** | māma | n. | mẹ |
| **菜** | cài | n. | món ăn, thức ăn |
| **很** | hěn | adv. | rất |
| **好吃** | hǎochī | adj. | ngon |
| **做** | zuò | v. | làm, nấu |
| **写** | xiě | v. | viết |
| **汉字** | Hànzì | n. | chữ Hán |
| **字** | zì | n. | chữ |
| **怎么** | zěnme | pron. | như thế nào |
| **读** | dú | v. | đọc |

## Supplementary Words

| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **英语** | Yīngyǔ | tiếng Anh |
| **法语** | Fǎyǔ | tiếng Pháp |
| **日语** | Rìyǔ | tiếng Nhật |
`,
    },
    {
      id: "hsk1-l6-exercise",
      title: "Exercises & Culture",
      type: LessonType.EXERCISE,
      content: `
# Warm-up

**Match the words with the corresponding images:**
1. 妈妈 (māma) - *Match with Image F (A mother and a baby smiling)*
2. 汉字 (Hànzì) - *Match with Image A (Chinese calligraphy on paper)*
3. 中国菜 (Zhōngguó cài) - *Match with Image B (Chinese food (baozi and dishes))*
4. 说汉语 (shuō Hànyǔ) - *Match with Image C (Two people greeting each other)*
5. 写汉字 (xiě Hànzì) - *Match with Image D (A teacher writing Chinese characters)*
6. 做中国菜 (zuò Zhōngguó cài) - *Match with Image E (A woman cooking in a kitchen)*

---

# Exercises

**1. Role-play reading the texts (分角色朗读课文)**

**2. Answer the questions based on actual situations (根据实际情况回答问题):**
* 你会说汉语吗？ (Nǐ huì shuō Hànyǔ ma?)
* 你会写汉字吗？ (Nǐ huì xiě Hànzì ma?)
* 你会做中国菜吗？ (Nǐ huì zuò Zhōngguó cài ma?)
* 你有汉语名字吗？ (Nǐ yǒu Hànyǔ míngzi ma?)
* 你会写你的汉语名字吗？ (Nǐ huì xiě nǐ de Hànyǔ míngzi ma?)

**3. Describe the pictures using the newly learned language points and words:**
* [Image: People standing in a line smiling] 我们都会 \_\_\_\_\_\_。(Wǒmen dōu huì \_\_\_\_\_\_.)
* [Image: Couple looking at a roasted duck meal] 中国菜很 \_\_\_\_\_\_。(Zhōngguó cài hěn \_\_\_\_\_\_.)
* [Image: Chef preparing food] 他会做 \_\_\_\_\_\_。(Tā huì zuò \_\_\_\_\_\_.)
* [Image: Chinese calligraphy "床"] 这个汉字我会 \_\_\_\_\_\_，不会 \_\_\_\_\_\_。(Zhège Hànzì wǒ huì \_\_\_\_\_\_ , bú huì \_\_\_\_\_\_ .)

---

# Phonetics: Tone Collocation of Disyllabic Words (1)

**First tone + 1st/2nd/3rd/4th tones**
* 咖啡 (kāfēi)
* 公园 (gōngyuán)
* 机场 (jīchǎng)
* 车站 (chēzhàn)

*Note: In a syllable combination, the pronunciation of the 3rd tone is different from its isolated pronunciation (214). It becomes a low falling tone similar to 211, and the second half does not rise.*

**Listen and read after the recording (听录音并跟读，注意声调的搭配):**
jīntiān, jīnnián, jīngcǎi, chēpiào, gōngsī, gāngcái, cāochǎng, jīdàn, guā fēng, huānyíng, jīnglǐ, jīhuì, guānyú, kāishǐ, gāoxìng

---

# Characters

**1. Strokes of Chinese Characters (6)**
* **撇折 (piězhé - phẩy gập):** e.g., 么 (me), 东 (dōng)
* **斜钩 (xiégōu - nghiêng móc):** e.g., 我 (wǒ), 钱 (qián)
* **提 (tí - hất):** e.g., 我 (wǒ), 打 (dǎ)

**2. Single-Component Characters (独体字)**
* **东 (dōng):** The side where the sun rises, opposite to 西.
* **我 (wǒ):** Originally looked like a weapon with sharp teeth, now evolved into a pronoun (I/me).
* **西 (xī):** Originally looked like a bird's nest, now indicates direction (West), opposite to 东.

**3. Structure of Chinese Characters (1)**
There are basically two types of character structures:
* **Single-component structure (独体结构):** Characters made of only one part (e.g., 人 rén, 我 wǒ, 中 zhōng).
* **Compound structure (合体结构):** Characters made of two or more parts (e.g., 你 nǐ, 做 zuò).

---

# Application

**1. Pair Work (双人活动)**
Practice Q&A based on actual situations:
* A: 你会说汉语吗？ (Nǐ huì shuō Hànyǔ ma?)
* B: 我... (Wǒ...)
* A: 你会写汉字吗？ (Nǐ huì xiě Hànzì ma?)
* B: 我... (Wǒ...)
* A: 你的汉语名字叫什么？ (Nǐ de Hànyǔ míngzi jiào shénme?)
* B: ......
* A: 你会写你的汉语名字吗？ (Nǐ huì xiě nǐ de Hànyǔ míngzi ma?)
* B: ......

**2. Group Work (小组活动)**
Groups of 3-4. Ask each other about mastered language skills and record them.
| 姓名 (Name) | 英语 (English) | 法语 (French) | 汉语 (Chinese) | 日语 (Japanese) |
| :--- | :---: | :---: | :---: | :---: |
| 大卫 (David) | ☑ | ☑ | ☑ | X |
`,
    },
  ],
};
