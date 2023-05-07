// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в міcяць',
  address: 'Kyiv, Bankova st. 11',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summury',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start towork on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handelbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 5,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 8,
        },
        {
          name: 'React. js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Гра на гитарі',
          isMain: true,
        },
        {
          name: 'Автомобілі',
          isMain: false,
        },
        {
          name: 'Спорт',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Школа №1',
          isEnd: true,
        },
        {
          name: 'Державний університет телекомунікацій',
          isEnd: false,
        },
        {
          name: 'Київський національний університет імені Тараса Шевченка,',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Повна середня освіта',
          id: 123,
        },
        {
          name: 'Бакалавр',
          id: 456,
        },
        {
          name: 'Магістр',
          id: 789,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',

          company: {
            name: 'IT Brains',
            url: null,
          },

          duration: {
            from: '05.03.2023',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua',
              about:
                'Airbnb competitor, High-load application for searching apartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons',
                },
                {
                  name: 'Oscar',
                },
              ],
              stackAmount: 3,
              awardAmount: 4,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
