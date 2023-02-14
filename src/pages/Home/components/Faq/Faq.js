import FaqItem from './FaqItem';
import { Container } from '../../../../layouts';
import translation from './faq.json';
import { useSelector } from 'react-redux';
const questions = [
  {
    id: 1,
    header: 'Эффективно ли работать с психологом онлайн?',
    content:
      'Да, эффективно и уже является стандартной практикой во всем мире. За последние годы было проведено много научных исследований, доказывающих, что данный формат не уступает по эффективности традиционной очной психотерапии.',
  },
  { id: 2, header: 'Как выбрать специалиста?', content: 'No content yet!' },
  {
    id: 3,
    header:
      'Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?',
    content: 'No content yet!',
  },
  {
    id: 4,
    header: 'Как вы отбираете психологов в базу?',
    content: 'No content yet!',
  },
  {
    id: 5,
    header:
      'В чем разница между психологом, психотерапевтом и психиатром и как понять кто мне нужен?',
    content: 'No content yet!',
  },
  {
    id: 6,
    header: 'Как вы отбираете психологов в базу?',
    content: 'No content yet!',
  },
  {
    id: 7,
    header: 'Какое количество сессий мне необходимо, чтобы получить результат?',
    content: 'No content yet!',
  },
];
export default function Faq() {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <Container>
      <div id='#questionare' className='mt-[60px] mb-[80px]'>
        <h1 className='text-2xl text-purple font-extrabold mb-[40px]'>
          {translation.faq[activeLang]}
        </h1>
        {questions.map((question, ind) => (
          <FaqItem key={ind} question={question} />
        ))}
      </div>
    </Container>
  );
}
