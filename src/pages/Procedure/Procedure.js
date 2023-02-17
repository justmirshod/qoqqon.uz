import { Link } from 'react-router-dom';
import { Container, MiniContainer } from '../../layouts';
import { useSelector } from 'react-redux';
import { replaceKrill } from '../../config/config';
import Contact from '../../components/Contact/Contact';
import generalTranslations from '../../translations/general.json';
import translations from './procedure.json';

const data = [
  {
    title: {
      uz: 'Fuqarolarni qabul qilish tartibi',
      en: 'Procedure of reception of citizens',
      ru: 'Порядок приема граждан',
      ўз: 'Фуқароларни қабул қилиш тартиби',
    },
    content: {
      uz: `O‘zbekiston Respublikasi "Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida"gi qonuniga asosan davlat organlarida, tashkilotlarda, shuningdek ularning mansabdor shaxslari tomonidan jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish tashkil etiladi. Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish belgilangan kun va soatlarda, qabul qilish jadvaliga muvofiq o‘tkaziladi. Qabul qilish jadvali va uni o‘tkazish vaqti, joyi hamda qabulga oldindan yozilish to‘g‘risidagi axborot, qabul qilish tartibi ularni davlat organlarining rasmiy veb-saytlarida e’lon qilish, shuningdek ularning ma’muriy binosida hamma kirishi mumkin bo‘lgan joylardagi stendlarga yoki boshqa texnik vositalarga joylashtirish orqali manfaatdor shaxslar e’tiboriga yetkaziladi. Jismoniy shaxslarning va yuridik shaxslar vakillarining sayyor shaxsiy qabullari, shuningdek ommaviy qabullar, zarur bo‘lgan hollarda, qabul qilish jadvallaridan tashqari o‘tkazilishi mumkin. Ommaviy qabul hovlilarga (kvartiralarga), boshqa binolarga va joylarga birma-bir kirib chiqish orqali ham o‘tkazilishi mumkin`,
      ru: 'Согласно Закону Республики Узбекистан «Об обращениях физических и юридических лиц» прием физических и представителей юридических лиц организуется государственными органами, организациями, а также их должностными лицами. Прием физических лиц и представителей юридических лиц осуществляется в указанные дни и часы согласно графику приема. График приема, время и место его проведения, а также информация о предварительной записи на прием, порядке приема публикуются на официальных сайтах государственных органов, а также в местах общего пользования их административных зданий. будут доведены до сведения заинтересованных лиц путем размещения их на стендах или других технических средствах. Выездные частные приемы граждан и представителей юридических лиц, а также массовые приемы в случае необходимости могут проводиться вне графика приема. Общественный прием может проводиться также путем поочередного входа и выхода из дворов (квартир), других зданий и мест.',
      en: `According to the Law of the Republic of Uzbekistan "On Appeals of Individuals and Legal Entities", reception of individuals and representatives of legal entities is organized by state bodies, organizations, as well as their officials. Reception of individuals and representatives of legal entities is carried out on the specified days and hours, according to the reception schedule. The admission schedule and the time and place of its holding, as well as information on pre-registration for admission, the procedure for admission shall be published on the official websites of state bodies, as well as in the public places of their administrative buildings. will be brought to the attention of interested persons by placing them on stands or other technical means. Traveling private receptions of individuals and representatives of legal entities, as well as mass receptions, may be held outside of reception schedules, if necessary. Public reception can also be conducted by entering and exiting yards (apartments), other buildings and places one by one.`,
      ўз: `Ўзбекистон Республикаси "Жисмоний ва юридик шахсларнинг мурожаатлари тўғрисида"ги қонунига асосан давлат органларида,  ташкилотларда,  шунингдек уларнинг мансабдор шахслари томонидан жисмоний шахсларни ва юридик шахсларнинг вакилларини қабул қилиш ташкил этилади.  Жисмоний шахсларни ва юридик шахсларнинг вакилларини қабул қилиш белгиланган кун ва соатларда,  қабул қилиш жадвалига мувофиқ ўтказилади.  Қабул қилиш жадвали ва уни ўтказиш вақти,  жойи ҳамда қабулга олдиндан ёзилиш тўғрисидаги ахборот,  қабул қилиш тартиби уларни давлат органларининг расмий веб-сайтларида эълон қилиш,  шунингдек уларнинг маъмурий биносида ҳамма кириши мумкин бўлган жойлардаги стендларга ёки бошқа техник воситаларга жойлаштириш орқали манфаатдор шахслар эътиборига йетказилади.  Жисмоний шахсларнинг ва юридик шахслар вакилларининг сайёр шахсий қабуллари,  шунингдек оммавий қабуллар,  зарур бўлган ҳолларда,  қабул қилиш жадвалларидан ташқари ўтказилиши мумкин.  Оммавий қабул ҳовлиларга (квартираларга),  бошқа биноларга ва жойларга бирма-бир кириб чиқиш орқали ҳам ўтказилиши мумкин`,
    },
  },
  {
    title: {
      uz: 'Murojaatlarni berish va ularni ko‘rib chiqish tartibi',
      en: 'The procedure for issuing appeals and their consideration',
      ru: 'Порядок выдачи обращений и их рассмотрения',
      ўз: 'Мурожаатларни бериш ва уларни кўриб чиқиш тартиби',
    },
    content: {
      uz: 'Axborotdan foydalanuvchi Toshkent shahar Mirobod tumani hokimligiga og‘zaki, yozma yoki elektron hujjat shaklida so‘rov bilan murojaat etishi mumkin. Bunda elektron hujjat shaklidagi so‘rovlar davlat organlarining rasmiy veb-saytlari, rasmiy elektron pochta manzillari yoki O‘zbekiston Respublikasi “Yagona interaktiv davlat xizmatlari portali” orqali taqdim etiladi. Jismoniy shaxsning murojaatida jismoniy shaxsning familiyasi (ismi, otasining ismi), uning yashash joyi to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak. Yuridik shaxsning murojaatida yuridik shaxsning to‘liq nomi, uning joylashgan yeri (pochta manzili) to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak. Jismoniy va yuridik shaxsning murojaatida davlat organining, tashkilotning aniq nomi, murojaat yuborilayotgan mansabdor shaxsning lavozimi va (yoki) familiyasi (ismi, otasining ismi) ko‘rsatilgan, shuningdek murojaatning mohiyati bayon etilgan bo‘lishi kerak. Murojaatlarda murojaat etuvchilarning elektron pochta manzili, aloqa telefonlari va fakslari raqamlari ko‘rsatilishi mumkin. Murojaatlar davlat tilida va boshqa tillarda berilishi mumkin. Axborotdan foydalanuvchini identifikatsiyalash imkoniyatini beradigan ma’lumotlar ko‘rsatilmagan so‘rov anonim hisoblanadi va ko‘rib chiqilmaydi.',
      en: `The user of the information can make a request to the Mirabad district hokim of Tashkent city orally, in writing or in the form of an electronic document. In this case, requests in the form of electronic documents are submitted through official websites of state bodies, official e-mail addresses or through the "Unit Interactive State Services Portal" of the Republic of Uzbekistan. An individual's application must include the individual's surname (first name, patronymic), information about his place of residence. The legal entity's application must contain the full name of the legal entity, information about its location (postal address). In the appeal of a natural and legal person, the exact name of the state body, organization, position and (or) surname (first name, patronymic) of the official to whom the appeal is sent must be indicated, as well as the nature of the appeal. E-mail addresses, telephone numbers and fax numbers of the applicants may be indicated in the applications. Applications can be submitted in the official language and in other languages. A request that does not include information that would allow the user to be identified is considered anonymous and will not be processed.`,
      ru: `Пользователь информации может сделать запрос хокиму Мирабадского района города Ташкента в устной, письменной форме или в форме электронного документа. При этом запросы в форме электронных документов подаются через официальные сайты государственных органов, официальные адреса электронной почты или через «Единый портал интерактивных государственных услуг» Республики Узбекистан. В заявлении физического лица должны быть указаны фамилия (имя, отчество) физического лица, сведения о его месте жительства. Заявление юридического лица должно содержать полное наименование юридического лица, сведения о его местонахождении (почтовый адрес). В обращении физического и юридического лица должны быть указаны точное наименование государственного органа, организации, должность и (или) фамилия (имя, отчество) должностного лица, которому направляется обращение, а также характер апелляции. В заявках могут быть указаны адреса электронной почты, номера телефонов и факсов заявителей. Заявки могут быть поданы на государственном языке и на других языках. Запрос, не содержащий сведений, позволяющих идентифицировать пользователя, считается анонимным и не обрабатывается.
      `,
      ўз: `Ахборотдан фойдаланувчи Тошкент шаҳар Миробод тумани ҳокимлигига оғзаки, ёзма ёки электрон ҳужжат шаклида сўров билан мурожаат этиши мумкин. Бунда электрон ҳужжат шаклидаги сўровлар давлат органларининг расмий веб-сайтлари, расмий электрон почта манзиллари ёки Ўзбекистон Республикаси “Ягона интерактив давлат хизматлари портали” орқали тақдим этилади. Жисмоний шахснинг мурожаатида жисмоний шахснинг фамилияси (исми, отасининг исми), унинг яшаш жойи тўғрисидаги ма’лумотлар кўрсатилган бўлиши керак. Юридик шахснинг мурожаатида юридик шахснинг тўлиқ номи, унинг жойлашган ери (почта манзили) тўғрисидаги ма’лумотлар кўрсатилган бўлиши керак. Жисмоний ва юридик шахснинг мурожаатида давлат органининг, ташкилотнинг аниқ номи, мурожаат юборилаётган мансабдор шахснинг лавозими ва (ёки) фамилияси (исми, отасининг исми) кўрсатилган, шунингдек мурожаатнинг моҳияти баён этилган бўлиши керак. Мурожаатларда мурожаат этувчиларнинг электрон почта манзили, алоқа телефонлари ва факслари рақамлари кўрсатилиши мумкин. Мурожаатлар давлат тилида ва бошқа тилларда берилиши мумкин. Ахборотдан фойдаланувчини идентификатсиялаш имкониятини берадиган ма’лумотлар кўрсатилмаган сўров аноним ҳисобланади ва кўриб чиқилмайди.`,
    },
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
              {generalTranslations.home[activeLang]}
            </Link>
            <i class='fa-solid fa-angle-right text-sm mt-1 mx-2'></i>
            <p>{translations.procedure[activeLang]}</p>
          </div>

          {data.map((item) => (
            <div className='mb-10'>
              <h1 className='text-3xl my-3'>{item.title[activeLang]}</h1>
              <p className='text-gray-600 leading-loose text-lg'>
                {item.content[activeLang]}
              </p>
            </div>
          ))}
        </MiniContainer>
      </div>
      <Contact />
    </div>
  );
}
