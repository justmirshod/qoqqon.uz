import { Link } from 'react-router-dom';
import { Container, MiniContainer } from '../../layouts';
import { useSelector } from 'react-redux';
import { replaceKrill } from '../../config/config';
import Contact from '../../components/Contact/Contact';

const data = [
  {
    title: 'Fuqarolarni qabul qilish tartibi',
    content: `O‘zbekiston Respublikasi "Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida"gi qonuniga asosan davlat organlarida, tashkilotlarda, shuningdek ularning mansabdor shaxslari tomonidan jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish tashkil etiladi. Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish belgilangan kun va soatlarda, qabul qilish jadvaliga muvofiq o‘tkaziladi. Qabul qilish jadvali va uni o‘tkazish vaqti, joyi hamda qabulga oldindan yozilish to‘g‘risidagi axborot, qabul qilish tartibi ularni davlat organlarining rasmiy veb-saytlarida e’lon qilish, shuningdek ularning ma’muriy binosida hamma kirishi mumkin bo‘lgan joylardagi stendlarga yoki boshqa texnik vositalarga joylashtirish orqali manfaatdor shaxslar e’tiboriga yetkaziladi. Jismoniy shaxslarning va yuridik shaxslar vakillarining sayyor shaxsiy qabullari, shuningdek ommaviy qabullar, zarur bo‘lgan hollarda, qabul qilish jadvallaridan tashqari o‘tkazilishi mumkin. Ommaviy qabul hovlilarga (kvartiralarga), boshqa binolarga va joylarga birma-bir kirib chiqish orqali ham o‘tkazilishi mumkin`,
  },
  {
    title: 'Murojaatlarni berish va ularni ko‘rib chiqish tartibi',
    content: `Axborotdan foydalanuvchi Toshkent shahar Mirobod tumani hokimligiga og‘zaki, yozma yoki elektron hujjat shaklida so‘rov bilan murojaat etishi mumkin. Bunda elektron hujjat shaklidagi so‘rovlar davlat organlarining rasmiy veb-saytlari, rasmiy elektron pochta manzillari yoki O‘zbekiston Respublikasi “Yagona interaktiv davlat xizmatlari portali” orqali taqdim etiladi. Jismoniy shaxsning murojaatida jismoniy shaxsning familiyasi (ismi, otasining ismi), uning yashash joyi to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak. Yuridik shaxsning murojaatida yuridik shaxsning to‘liq nomi, uning joylashgan yeri (pochta manzili) to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak. Jismoniy va yuridik shaxsning murojaatida davlat organining, tashkilotning aniq nomi, murojaat yuborilayotgan mansabdor shaxsning lavozimi va (yoki) familiyasi (ismi, otasining ismi) ko‘rsatilgan, shuningdek murojaatning mohiyati bayon etilgan bo‘lishi kerak. Murojaatlarda murojaat etuvchilarning elektron pochta manzili, aloqa telefonlari va fakslari raqamlari ko‘rsatilishi mumkin. Murojaatlar davlat tilida va boshqa tillarda berilishi mumkin. Axborotdan foydalanuvchini identifikatsiyalash imkoniyatini beradigan ma’lumotlar ko‘rsatilmagan so‘rov anonim hisoblanadi va ko‘rib chiqilmaydi`,
  },
  {
    title: 'Murojaatlarni ko‘rib chiqish muddatlari',
    content: `Ariza yoki shikoyat masalani mazmunan hal etishi shart bo‘lgan davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga kelib tushgan kundan e’tiboran o‘n besh kun ichida, qo‘shimcha o‘rganish va (yoki) tekshirish, qo‘shimcha hujjatlarni so‘rab olish talab etilganda esa, bir oygacha bo‘lgan muddatda ko‘rib chiqiladi. Ariza va shikoyatlarni ko‘rib chiqish uchun tekshirish o‘tkazish, qo‘shimcha materiallarni so‘rab olish yoxud boshqa chora-tadbirlar ko‘rish zarur bo‘lgan hollarda, ularni ko‘rib chiqish muddatlari tegishli davlat organining, tashkilotning rahbari tomonidan istisno tariqasida uzog‘i bilan bir oyga uzaytirilishi mumkin, bu haqda murojaat etuvchiga xabar qilinadi. Taklif davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga kelib tushgan kundan e’tiboran bir oygacha bo‘lgan muddatda ko‘rib chiqiladi, qo‘shimcha o‘rganishni talab etadigan takliflar bundan mustasno bo‘lib, bu haqda taklifni kiritgan jismoniy yoki yuridik shaxsga o‘n kunlik muddatda yozma shaklda xabar qilinadi`,
  },
];

export default function Procedure() {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className=''>
      <div className='py-4'>
        <MiniContainer>
          <div className='flex items-center text-[#9e9c9c] text-lg my-5'>
            <Link to={`${replaceKrill(activeLang)}/`} className=''>
              Bosh sahifa
            </Link>
            <i class='fa-solid fa-angle-right text-sm mt-1 mx-2'></i>
            <p>Fuqarolarni qabul qilish tartibi</p>
          </div>

          {data.map((item) => (
            <div className='mb-10'>
              <h1 className='text-3xl my-3'>{item.title}</h1>
              <p className='text-gray-600 leading-loose text-lg'>
                {item.content}
              </p>
            </div>
          ))}
        </MiniContainer>
      </div>
      <Contact />
    </div>
  );
}
