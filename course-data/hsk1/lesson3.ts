import { HSKLevel, LessonType, Module } from '../../types';

export const HSK1_LESSON_3: Module = {
  id: "hsk1-m3",
  level: HSKLevel.HSK1,
  title: "谢谢你！(Thank you!)",
  description: "Learn how to express gratitude, say goodbye, and understand Chinese neutral tones, tone marking, and basic characters.",
  lessons: [
    {
      id: "hsk1-l3-texts",
      title: "Texts & Grammar",
      type: LessonType.GRAMMAR,
      content: `
# 课文 (Texts)

## Text 1 (Audio 02-1)
<strong>A: 谢谢！</strong>
<em>Xièxie!</em>
(Cảm ơn!)

<strong>B: 不谢！</strong>
<em>Bú xiè!</em>
(Không cần cảm ơn đâu!)

---

## Text 2 (Audio 02-2)
<strong>A: 谢谢你！</strong>
<em>Xièxie nǐ!</em>
(Cảm ơn anh/cô!)

<strong>B: 不客气！</strong>
<em>Bú kèqi!</em>
(Đừng khách sáo!)

---

## Text 3 (Audio 02-3)
<strong>A: 再见！</strong>
<em>Zàijiàn!</em>
(Tạm biệt!)

<strong>B: 再见！</strong>
<em>Zàijiàn!</em>
(Tạm biệt!)

---

# 拼音 (Phonetics)

## 1. 汉语拼音的声母和韵母(2) (Thanh mẫu và vận mẫu trong cách ghép âm của tiếng Trung Quốc 2)

* **声母 Thanh mẫu (2):** zh, ch, sh, r, z, c, s
* **韵母 Vận mẫu (2):** ou, iou (iu), an, ian, uan, üan, en, in, uen (un), ün, ang, iang, uang, eng, ing, ueng, ong, iong

## 2. 汉语的轻声 (Thanh nhẹ trong tiếng Trung Quốc)
汉语中除了四声以外，还有一个读得又短又轻的声调，叫作“轻声”。
(Trong tiếng Trung Quốc, ngoài bốn thanh cơ bản còn có một thanh được phát âm vừa ngắn vừa nhẹ, thanh đó được gọi là thanh nhẹ.)
* **例如 (Ví dụ):** māma (妈妈), yéye (爷爷), nǎinai (奶奶), bàba (爸爸)

## 3. 拼音规则(1) (Các quy tắc ghép âm 1)

### (1) 标调法 (Cách ghi dấu thanh điệu)
汉语拼音的声调必须标注在元音字母上。当一个韵母含有两个或者两个以上元音字母时，调号标注在开口度较大的那个元音字母上。调号标注的主要元音顺序为 a、o、e、i、u、ü，但iu是个例外，iu是iou的省略形式，声调标注在u上。轻声音节不标声调。
(Trong phiên âm của tiếng Trung Quốc, dấu thanh điệu phải được ghi trên nguyên âm. Nếu vận mẫu có hai nguyên âm hoặc nhiều hơn, dấu thanh điệu được ghi trên nguyên âm đòi hỏi phải mở miệng rộng hơn khi phát âm. Trật tự của các nguyên âm chủ yếu khi ghi dấu thanh điệu là a, o, e, i, u, ü; nhưng iu là trường hợp ngoại lệ – iu là hình thức giản lược của iou, dấu thanh điệu được ghi trên u. Các âm tiết mang thanh nhẹ không có dấu thanh điệu.)

### (2) 省写 (Cách viết giản lược)
iou、uei、uen 前面加声母的时候，写成：iu、ui、un。例如niu、gui、lun。
(Khi thanh mẫu được thêm vào trước iou, uei, uen thì các vận mẫu này được viết giản lược thành: iu, ui, un. Ví dụ: niu, gui, lun.)
`
    },
    {
      id: "hsk1-l3-vocab",
      title: "New Words & Classroom Expressions",
      type: LessonType.VOCABULARY,
      content: `
# 生词 (New Words)

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **谢谢** | xièxie | đgt. | cảm ơn |
| **不** | bù | phó. | không cần, không, đừng |
| **不客气** | bú kèqi | | đừng khách sáo |
| **再见** | zàijiàn | đgt. | tạm biệt |

---

# 课堂用语 (Mẫu câu thường dùng trong lớp)

| Hanzi | Pinyin | Meaning (Audio 02-10) |
| :--- | :--- | :--- |
| **打开书。** | Dǎkāi shū. | Hãy mở sách ra. |
| **请大声读。** | Qǐng dà shēng dú. | Hãy đọc to lên. |
| **再读一遍。** | Zài dú yí biàn. | Hãy đọc lại lần nữa. |
| **一起读。** | Yìqǐ dú. | Hãy cùng đọc nào. |
| **有问题吗?** | Yǒu wèntí ma? | Có thắc mắc gì không? |
`
    },
    {
      id: "hsk1-l3-exercise",
      title: "Exercises & Characters",
      type: LessonType.EXERCISE,
      content: `
# 练习 (Exercises)

## 1. 看图片，朗读下列单音节词语 (Audio 02-5)
*(Sau đây là các từ có một âm tiết. Hãy xem hình và đọc to những từ này.)*
* shān 山, zhōng 钟, yáng 羊, líng 零, cài 菜
* shǒu 手, xióng 熊, yún 云, xīng 星, yuán 圆
* rén 人, chuán 船, chuáng 床, chī 吃, rè 热

## 2. 看图片，朗读下列双音节词语 (Audio 02-6)
*(Sau đây là các từ có hai âm tiết. Hãy xem hình và đọc to những từ này.)*
* bīngxiāng (Tủ lạnh)
* jīdàn (Trứng gà)
* sījī (Tài xế)
* zúqiú (Bóng đá)
* jīchǎng (Sân bay)
* pá shān (Leo núi)
* shǒubiǎo (Đồng hồ đeo tay)
* xióngmāo (Gấu trúc)

## 3. 朗读下列音节，注意轻声的读法 (Audio 02-7)
*(Đọc to các âm tiết sau, chú ý cách phát âm thanh nhẹ.)*
* zhuōzi, fángzi, yǐzi, guìzi
* tāmen, rénmen, wǒmen, dìdi
* yīfu, érzi, xǐhuan, rènshi
* xiānsheng, péngyou, wǎnshang, piàoliang

## 4. 朗读下列音节，注意声调标注的位置 (Audio 02-8)
*(Đọc to các âm tiết sau, chú ý vị trí của các dấu thanh điệu.)*
* xuéxiào, bāng máng, lánqiú, nǚ'ér
* yóu yǒng, shǒubiǎo, zhōngyú, gōngsī
* shíjiān, shēntǐ, kǎoshì, guójiā
* bàozhǐ, hǎochī, xièxie, kèqi

## 5. 朗读下列音节，注意韵母省写的部分 (Audio 02-9)
*(Đọc to các âm tiết sau, chú ý các vận mẫu đã được viết giản lược.)*
* xiūxi, shuì jiào, lúnchuán, niúnǎi
* píjiǔ, ángguì, liúyán, kāi huì
* tǎolùn, zúqiú, Lúndūn, shīrùn
* cánkuì, shuǐguǒ, táozuì, shùnlì

---

# 汉字 (Chữ Hán)

## 1. 汉字的笔画(2) - Các nét của chữ Hán (2)

| 笔画名称 (Tên nét) | 例字 (Chữ Hán) |
| :--- | :--- |
| **横折 (héngzhé - ngang gập)** | **口** (kǒu - miệng), **日** (rì - mặt trời) |
| **竖折 (shùzhé - sổ gập)** | **山** (shān - núi), **出** (chū - ra) |
| **竖钩 (shùgōu - sổ móc)** | **丁** (dīng - can Đinh), **小** (xiǎo - nhỏ) |

## 2. 认识独体字 (Làm quen với chữ đơn / chữ độc thể)

1.  **口 (kǒu):** 本义是嘴巴，字形像人张开的嘴巴。
    *(Nghĩa gốc của 口 là miệng. Chữ này có hình dạng giống cái miệng mở to ra.)*
2.  **见 (jiàn):** 字形上边是“目”，下边是“人”，意思是“睁着眼睛看”。
    *(Phần phía trên của chữ 见 là 目 (con mắt), phần phía dưới là 人 (người). Chữ này có nghĩa là mở to mắt nhìn.)*
3.  **山 (shān):** 字形像起伏的山峰，意思是“山峰”。
    *(山 có nghĩa là núi. Chữ này có hình dạng giống đỉnh núi nhấp nhô.)*
4.  **小 (xiǎo):** 字形像细微的沙，现在意思与“大”相对。
    *(小 có hình dạng giống những hạt cát nhỏ. Ngày nay nó mang nghĩa là nhỏ, trái nghĩa với 大 (lớn).)*
5.  **不 (bù):** 原来表示一种工具，现在虚化为副词，表示否定。
    *(不 lúc đầu chỉ một loại công cụ, ngày nay nó trở thành từ có chức năng ngữ pháp là phó từ, mang nghĩa phủ định không.)*
`
    }
  ]
};