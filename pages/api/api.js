// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}



export const questions = [
  {
    questionText: 'Które stwierdzenia dotyczące FundacjI VCC są prawdziwe:',
    answerOptions: [
      { answerText: 'Fundacja VCC jest obecnie podmiotem rynkowym uprawnionym do certyfikowania największej liczby kwalifikacji rynkowych włączonych do ZSK', isCorrect: false },
      { answerText: 'Fundacja VCC wydała ponad 100 000 certyfikatów', isCorrect: false },
      { answerText: 'Fundacja VCC w swoim portfolio posiada ponad 100 modułów z różnych branż', isCorrect: false },
      { answerText: 'Wszystkie odpowiedzi są prawidłowe', isCorrect: true },
    ],
  },
  {
    questionText: 'Co oznacza skrót ZSK?',
    answerOptions: [
      { answerText: 'Zawodowy System Kwalifikacji', isCorrect: false },
      { answerText: 'Zintegrowany System Kwalifikacji', isCorrect: true },
      { answerText: 'Zespolony System Kwalifikacji', isCorrect: false },
      { answerText: 'Żadna z powyższych', isCorrect: false },
    ],
  },
  {
    questionText: 'Jakie są rodzaje kwalifikacji?',
    answerOptions: [
      { answerText: 'Pełne i połowiczne', isCorrect: false },
      { answerText: 'Pełne i cząstkowe', isCorrect: true },
      { answerText: 'Całościowe i niepełne', isCorrect: false },
      { answerText: 'Żadna z powyższych', isCorrect: false },
    ],
  },
  {
    questionText: 'Kwalifikacje pełne to:',
    answerOptions: [
      { answerText: 'Świadectwo ukończenia szkoły podstawowej', isCorrect: false },
      { answerText: 'Świadectwo dojrzałości (matura)', isCorrect: false },
      { answerText: 'Dyplom potwierdzający uzyskanie tytułu zawodowego licencjata', isCorrect: false },
      { answerText: 'Wszystkie odpowiedzi są prawidłowe', isCorrect: true },
    ],
  },
  {
    questionText: 'Przykładem kwalifikacji rynkowej jest:',
    answerOptions: [
      { answerText: 'Prawo jazdy', isCorrect: false },
      { answerText: 'Programowanie i obsługiwanie procesu druku 3D', isCorrect: true },
      { answerText: 'Dyplom doktora nauk', isCorrect: false },
      { answerText: 'Wszystkie odpowiedzi są prawidłowe', isCorrect: false },
    ],
  },
  {
    questionText: 'Ile poziomów zawiera Polska Rama Kwalifikacji?',
    answerOptions: [
      { answerText: '7', isCorrect: false },
      { answerText: '8', isCorrect: true },
      { answerText: '9', isCorrect: false },
      { answerText: '10', isCorrect: false },
    ],
  },
];