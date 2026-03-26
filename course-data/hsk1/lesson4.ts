import { HSKLevel, LessonType, Module } from "../../types";

export const HSK1_LESSON_4: Module = {
  id: "hsk1-m4",
  level: HSKLevel.HSK1,
  title: "她是我的汉语老师 (Lesson 4)",
  description:
    "Learn how to ask about someone's identity and nationality using 谁, 哪, and 呢.",
  lessons: [
    {
      id: "hsk1-l4-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# Text 1: 在教室 (Trong lớp học)

<strong>A: 她是谁？</strong>
<em>Tā shì shéi?</em>
(Cô ấy là ai vậy?)

<strong>B: 她是我的汉语老师，她叫李月。</strong>
<em>Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.</em>
(Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.)

---

# Text 2: 在图书馆 (Ở thư viện)

<strong>A: 你是哪国人？</strong>
<em>Nǐ shì nǎ guó rén?</em>
(Anh là người nước nào vậy?)

<strong>B: 我是美国人。你呢？</strong>
<em>Wǒ shì Měiguó rén. Nǐ ne?</em>
(Tôi là người Mỹ, còn cô?)

<strong>A: 我是中国人。</strong>
<em>Wǒ shì Zhōngguó rén.</em>
(Tôi là người Trung Quốc.)

---

# Text 3: 看照片 (Xem ảnh)

<strong>A: 他是谁？</strong>
<em>Tā shì shéi?</em>
(Anh ấy là ai thế?)

<strong>B: 他是我同学。</strong>
<em>Tā shì wǒ tóngxué.</em>
(Đó là bạn cùng lớp của tôi.)

<strong>A: 她呢？她是你同学吗？</strong>
<em>Tā ne? Tā shì nǐ tóngxué ma?</em>
(Còn cô ấy? Cô ấy cũng là bạn cùng lớp của cô à?)

<strong>B: 她不是我同学，她是我朋友。</strong>
<em>Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.</em>
(Không phải, cô ấy là bạn tôi.)

---

# Grammar Notes (注释)

## 1. 疑问代词“谁”、“哪” (Đại từ nghi vấn 谁 và 哪)
疑问代词“谁”在疑问句中用来询问人。例如：
(Đại từ nghi vấn 谁 được dùng trong câu hỏi để yêu cầu cho biết thông tin về người nào đó. Ví dụ:)

| 主语 Chủ ngữ | 动词 Động từ | 宾语 Tân ngữ |
| :---: | :---: | :---: |
| 谁 | 是 | 李月？ |
| 她 | 是 | 谁？ |
| 他 | 是 | 谁？ |

疑问代词“哪”用在疑问句中的结构形式为：哪+量词/名词+名词。例如：
(Đại từ nghi vấn 哪 được dùng trong câu hỏi theo cấu trúc: 哪 + lượng từ/danh từ + danh từ. Ví dụ:)
(1) 哪本 (běn, lượng từ dùng cho sách) 书 (shū, sách)？
(2) 哪个 (gè, lượng từ chung) 人？
(3) 你是哪国人？

## 2. 结构助词“的” (Trợ từ kết cấu 的)
名词/代词+的+名词 表达一种所属关系。当“的”后的名词是亲属称谓或者指人的名词时，“的”可以省略。例如：
(Cấu trúc “danh từ/đại từ + 的 + danh từ” được dùng để chỉ quan hệ sở hữu. Khi danh từ đứng sau 的 là danh từ chỉ người hay chỉ cách xưng hô với người thân thì 的 có thể được lược bỏ. Ví dụ:)
(1) 李月是我的老师。
(2) 这 (zhè, đây) 是我的书 (shū, sách)。
(3) 她不是我同学，她是我朋友。

## 3. 疑问助词“呢” (1) (Trợ từ nghi vấn 呢 1)
疑问助词“呢”用在名词或代词后构成疑问句，用于询问上文提到的情况。常用的句式是：A………………。B呢？ 例如：
(Trợ từ nghi vấn 呢 được dùng sau danh từ hay đại từ để đặt câu hỏi nhằm yêu cầu cho biết thông tin về một đối tượng – thông tin này đã được đề cập trong câu trước đó. Mẫu câu thường gặp là: “A.......B呢?” (A... B thì sao?). Ví dụ:)
(1) 我不是老师，我是学生。你呢？
(2) 她叫李月。他呢？
(3) 我是美国人。你呢？
`,
    },
    {
      id: "hsk1-l4-vocab",
      title: "New Words",
      type: LessonType.VOCABULARY,
      content: `
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **她** | tā | đt. | cô ấy, bà ấy... |
| **谁** | shéi | đt. | ai |
| **的** | de | trợ. | được dùng sau định ngữ sở hữu |
| **汉语** | Hànyǔ | dt. | tiếng Trung Quốc |
| **哪** | nǎ | dt. | nào |
| **国** | guó | dt. | quốc gia, đất nước |
| **呢** | ne | trợ. | được dùng ở cuối câu hỏi |
| **他** | tā | đt. | anh ấy, ông ấy... |
| **同学** | tóngxué | dt. | bạn cùng lớp |
| **朋友** | péngyou | dt. | bạn |
`,
    },
    {
      id: "hsk1-l4-exercise",
      title: "Exercises, Phonetics & Characters",
      type: LessonType.EXERCISE,
      content: `
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới.)**
* [Images A-F]

1. <strong>他</strong> (tā)
2. <strong>她</strong> (tā)
3. <strong>汉语老师</strong> (Hànyǔ lǎoshī)
4. <strong>朋友</strong> (péngyou)
5. <strong>同学</strong> (tóngxué)
6. <strong>中国朋友</strong> (Zhōngguó péngyou)

---

# Exercises (练习)

**1. 分角色朗读课文 (Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)**

**2. 根据实际情况回答问题 (Trả lời câu hỏi.)**
1. 你是哪国人？ (Nǐ shì nǎ guó rén?)
2. 你叫什么名字？ (Nǐ jiào shénme míngzi?)
3. 你的汉语老师是哪国人？ (Nǐ de Hànyǔ lǎoshī shì nǎ guó rén?)
4. 你的汉语老师叫什么名字？ (Nǐ de Hànyǔ lǎoshī jiào shénme míngzi?)
5. 你的中国朋友是谁？ (Nǐ de Zhōngguó péngyou shì shéi?)

**3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới.)**
* [Image: Steve Jobs] <strong>他是乔布斯 (Steve Jobs)，他是 ______ 人。</strong> (Tā shì Qiáobùsī, tā shì ______ rén.)
* [Image: Li Na] <strong>她是李娜 (Li Na)，她是 ______ 人。</strong> (Tā shì Lǐ Nà, tā shì ______ rén.)
* [Image: Two girls drinking coffee] <strong>她叫玛丽 (Mary)，她不是我 ______，她是我 ______。</strong> (Tā jiào Mǎlì, tā bú shì wǒ ______, tā shì wǒ ______.)
* [Image: Group of friends talking] <strong>他叫大卫 (David)，他是我们的 ______。</strong> (Tā jiào Dàwèi, tā shì wǒmen de ______.)

---

# Phonetics (拼音)

**1. 发音辨析：声母zh、ch、sh、r (Sự khác biệt trong cách phát âm: thanh mẫu zh, ch, sh, r)**
zh、ch、sh、r是一组翘舌音，是由翘起的舌尖和硬腭前部配合而发音的。发zh、ch时，舌尖要先和硬腭接触，然后打开一条缝隙让气流通过，发zh时没有强烈的气流呼出，而发ch时呼出的气流很强。发sh时，舌尖不要与硬腭接触，要始终保持一条缝隙。与sh不同，在发r时声带要振动。
(zh, ch, sh, r là các âm uốn lưỡi, được phát âm với sự phối hợp giữa đầu lưỡi (được uốn cong) và phần trước của ngạc cứng. Khi phát âm zh và ch, đầu lưỡi tiếp xúc với ngạc cứng trước rồi mở ra khe hở, nhưng với zh thì không có luồng hơi mạnh thoát ra còn với ch thì luồng hơi được đẩy ra rất mạnh. Khi phát âm sh, đầu lưỡi không tiếp xúc với ngạc cứng, giữa chúng có khe hở. Khác với sh, khi phát âm r, dây thanh sẽ rung lên.)

*Nghe và luyện đọc theo phần ghi âm, chú ý sự khác biệt trong cách phát âm giữa các thanh mẫu:*
* zhīshi | chúshī | shēngrì | shàng chē
* rènshi | chángshí | shìshí | chāorén
* ránshāo | rènao | chū chāi | Chángchéng
* shǒushù | shāngchǎng | chāoshì | chōng zhí

**2. 发音辨析：前鼻音韵母n和后鼻音韵母ng (Sự khác biệt trong cách phát âm: vận mẫu âm mũi trước n và vận mẫu âm mũi sau ng)**
发前鼻音n[n]时舌尖要抵住上齿龈，而发后鼻音ng[ŋ]时，舌头的后部要拱起，舌根向后收缩，抵住软腭；发n[n]时上下齿相对，开口较小，而发ng[ŋ]时开口度较大。
(Khi phát âm n [n], đầu lưỡi áp vào lợi trên; khi phát âm ng [ŋ], phần sau của lưỡi cong vồng lên, lưỡi được uốn cong và thụt về sau, áp chặt vào ngạc mềm. Khi phát âm n [n], răng trên và răng dưới đối nhau, miệng mở hẹp; khi phát âm ng [ŋ], miệng mở rộng hơn.)

*Nghe và luyện đọc theo phần ghi âm:*
* an — ang
* ian — iang
* uan — uang
* en — eng
* in — ing
* uen — ueng

**3. “一”的变调 (Sự biến đổi thanh điệu của 一 yī)**
**(1) “一”在第一、二、三声音节前变成第四声 (Khi đứng trước âm tiết mang thanh 1, 2 và 3, 一 chuyển thành thanh 4.)**
* yì zhāng (một tờ)
* yì tiáo (một sợi)
* yì zhǒng (một loại)

**(2) “一”在第四声音节前变成第二声 (Khi đứng trước âm tiết mang thanh 4, 一 chuyển thành thanh 2.)**
* yídìng (chắc chắn)
* yí kuài (một miếng)

**(3) “一”单用或表示数字时不变调 (Khi được dùng riêng, chỉ con số thì 一 không thay đổi thanh điệu.)**
* dì yī (thứ nhất)
* yī èr sān (một, hai, ba)
* xīngqī yī (thứ hai)
* shíyī (mười một)
* bǎifēnzhī yī (một phần trăm)

**4. 拼音规则 (3)：y、w的用法 (Các quy tắc ghép âm 3: cách dùng y và w)**
以i、u、ü开头的韵母如果前面没有声母，在拼写时需要使用y或w，具体情况如下：
(Nếu âm bắt đầu bằng i, u hoặc ü (không có thanh mẫu) thì khi viết phiên âm, ta phải sử dụng y hoặc w.)

| 韵母 Vận mẫu | 写法 Cách viết |
| :--- | :--- |
| **Bắt đầu bằng i:** i, in, ing <br> ia, ie, iao, ian, iang, iong <br> iu | yi, yin, ying <br> ya, ye, yao, yan, yang, yong <br> you |
| **Bắt đầu bằng u:** u <br> ua, uo, uai, uan, uang, ueng <br> ui, un | wu <br> wa, wo, wai, wan, wang, weng <br> wei, wen |
| **Bắt đầu bằng ü:** ü, üe, üan, ün | yu, yue, yuan, yun |

*Nghe và luyện đọc theo phần ghi âm:*
yóu yǒng, qīngwā, guó wài, wǎnyàn, yǒuyì, yīnyuè, yuányīn, yǐngxīng, yīngxióng, wēixiǎn, yīntiān, yǔyán, wǎngwǎng, yéye, yíngyǎng, wǒmen

---

# Characters (汉字)

**1. 汉字的笔画 (4)：乚，乙 (Các nét của chữ Hán 4: 乚, 乙)**
| 笔画名称 Tên nét | 运笔方向 Hướng viết | 例字 Chữ Hán |
| :--- | :---: | :--- |
| **竖弯钩 shùwāngōu (sổ cong móc)** | 乚 | <strong>七</strong> qī (bảy), <strong>儿</strong> ér (con trai) |
| **横折弯钩 héngzhéwāngōu (ngang gập cong móc)** | 乙 | <strong>九</strong> jiǔ (chín), <strong>几</strong> jǐ (mấy) |

**2. 认识独体字 (Làm quen với chữ đơn/chữ độc thể)**
* **(1) “七”**，表示数量“7”。 (七 qī : số 7)
* **(2) “儿”**，本义是小孩。现在多指儿子。 (儿 ér : có nghĩa gốc là trẻ con, hiện nay thường được dùng để chỉ con trai.)
* **(3) “几”**，本义是小矮桌。 (几 jǐ : có nghĩa gốc là cái bàn nhỏ và thấp.)
* **(4) “九”**，表示数量“9”。 (九 jiǔ : số 9)

**3. 汉字的笔顺 (2)：从上到下，从左到右 (Thứ tự nét viết trong chữ Hán 2: từ trên xuống dưới, từ trái sang phải)**
| 笔顺 Thứ tự nét viết | 例字 Chữ Hán | 书写顺序 Thứ tự viết |
| :--- | :--- | :--- |
| **从上到下 (từ trên xuống dưới)** | <strong>二</strong> èr (hai), <strong>三</strong> sān (ba) | 二, 三 |
| **从左到右 (từ trái sang phải)** | <strong>几</strong> jǐ (mấy), <strong>八</strong> bā (tám) | 几, 八 |

---

# Application (运用)

**1. 双人活动 (Hoạt động theo cặp)**
两人一组，根据图片内容进行问答练习。 (Ghép thành từng cặp, luyện tập đặt câu hỏi và trả lời dựa theo các hình.)
* 例如：
    * A: 他/她是谁？ (Tā / Tā shì shéi?)
    * A: 他/她是哪国人？ (Tā / Tā shì nǎ guó rén?)
    * B: 他/她是……………… (Tā / Tā shì......)
    * B: 他/她是……………… (Tā / Tā shì......)

**2. 小组活动 (Hoạt động nhóm)**
3~4人一组，每人准备一张自己和同学或者朋友的合影，向同组成员介绍照片上的人物。
(Lập nhóm từ 3 đến 4 người. Mỗi người chuẩn bị một tấm ảnh của mình chụp chung với bạn bè/các bạn cùng lớp và giới thiệu với các thành viên trong nhóm về những người bạn có trong hình.)
* 例如：他/她是我同学/朋友，他/她叫………………，他/她是……………… (Tā / Tā shì wǒ tóngxué / péngyou, tā / tā jiào......, tā / tā shì......)
`,
    },
  ],
};
