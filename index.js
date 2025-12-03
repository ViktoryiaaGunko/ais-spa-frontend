/**
 АИС «Оценки и задания»
  - id (string)
  - description (string) - Название задания
  - createdAt (Date) - Дата создания записи
  - author (string) - Преподаватель
  - photoLink (string) - Ссылка (необязательно)
  - student (string) - ФИО студента
  - discipline (string) - Дисциплина
  - deadline (Date) - Срок сдачи
  - submissionDate (Date | null) - Когда сдал (null, если не сдал)
  - grade (string) - Оценка ('+', '±', '-')
 */
const mockGrades = [
    {
        id: '1',
        description: 'Лабораторная работа №1: Матрицы',
        createdAt: new Date('2025-09-01T10:00:00'),
        author: 'Иванов И.И.',
        photoLink: 'http://img.com/1',
        student: 'Смирнов А.А.',
        discipline: 'Алгебра',
        deadline: new Date('2025-09-15T23:59:00'),
        submissionDate: new Date('2025-09-10T14:00:00'), // Сдал заранее (Зеленая)
        grade: '+',
    },
    {
        id: '2',
        description: 'Лабораторная работа №1: Матрицы',
        createdAt: new Date('2025-09-01T10:00:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Петров Б.Б.',
        discipline: 'Алгебра',
        deadline: new Date('2025-09-15T23:59:00'),
        submissionDate: new Date('2025-09-20T10:00:00'), // Сдал позже (Красная)
        grade: '±',
    },
    {
        id: '3',
        description: 'Эссе: История ЭВМ',
        createdAt: new Date('2025-09-05T09:00:00'),
        author: 'Сидорова Е.В.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Информатика',
        deadline: new Date('2025-09-12T23:59:00'),
        submissionDate: null, // Не сдал
        grade: '-',
    },
    {
        id: '4',
        description: 'Курсовая работа: Базы данных',
        createdAt: new Date('2025-10-01T12:00:00'),
        author: 'Кузнецов Д.Д.',
        photoLink: 'http://img.com/db',
        student: 'Васильев В.В.',
        discipline: 'Базы данных',
        deadline: new Date('2025-12-20T23:59:00'),
        submissionDate: new Date('2025-12-19T18:00:00'),
        grade: '+',
    },
    {
        id: '5',
        description: 'Тест: Производные',
        createdAt: new Date('2025-09-10T14:30:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Мат. анализ',
        deadline: new Date('2025-09-11T16:00:00'),
        submissionDate: new Date('2025-09-11T15:55:00'),
        grade: '+',
    },
    {
        id: '6',
        description: 'Чертеж детали №5',
        createdAt: new Date('2025-09-15T08:00:00'),
        author: 'Петрова А.С.',
        photoLink: '',
        student: 'Орлов К.К.',
        discipline: 'Инженерная графика',
        deadline: new Date('2025-09-25T17:00:00'),
        submissionDate: new Date('2025-09-25T18:00:00'), // Опоздал чуть-чуть
        grade: '±',
    },
    {
        id: '7',
        description: 'Семинар: Философия Канта',
        createdAt: new Date('2025-10-05T10:00:00'),
        author: 'Соколов М.М.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Философия',
        deadline: new Date('2025-10-10T12:00:00'),
        submissionDate: new Date('2025-10-10T11:00:00'),
        grade: '+',
    },
    {
        id: '8',
        description: 'Лабораторная работа №2: Векторы',
        createdAt: new Date('2025-09-20T10:00:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Петров Б.Б.',
        discipline: 'Алгебра',
        deadline: new Date('2025-10-05T23:59:00'),
        submissionDate: null,
        grade: '-',
    },
    {
        id: '9',
        description: 'Проект по JS',
        createdAt: new Date('2025-11-01T09:00:00'),
        author: 'Web-мастер',
        photoLink: 'http://github.com',
        student: 'Козлов П.П.',
        discipline: 'Web-разработка',
        deadline: new Date('2025-11-30T23:59:00'),
        submissionDate: new Date('2025-11-15T12:00:00'), // Сильно заранее (Бонус)
        grade: '+',
    },
    {
        id: '10',
        description: 'Доклад: Экология региона',
        createdAt: new Date('2025-09-25T13:00:00'),
        author: 'Морозова Н.Н.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Экология',
        deadline: new Date('2025-10-01T10:00:00'),
        submissionDate: new Date('2025-10-02T10:00:00'),
        grade: '±',
    },
    {
        id: '11',
        description: 'Задача Коши',
        createdAt: new Date('2025-10-10T11:00:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Лебедев Т.Т.',
        discipline: 'Диф. уравнения',
        deadline: new Date('2025-10-20T23:59:00'),
        submissionDate: new Date('2025-10-20T20:00:00'),
        grade: '+',
    },
    {
        id: '12',
        description: 'Перевод текста (EN)',
        createdAt: new Date('2025-09-02T09:00:00'),
        author: 'Смит Дж.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Английский язык',
        deadline: new Date('2025-09-09T23:59:00'),
        submissionDate: new Date('2025-09-09T10:00:00'),
        grade: '+',
    },
    {
        id: '13',
        description: 'Макет сайта',
        createdAt: new Date('2025-11-05T14:00:00'),
        author: 'Web-мастер',
        photoLink: '',
        student: 'Волков С.С.',
        discipline: 'Web-разработка',
        deadline: new Date('2025-11-12T18:00:00'),
        submissionDate: null,
        grade: '-',
    },
    {
        id: '14',
        description: 'Ряды Фурье',
        createdAt: new Date('2025-10-15T10:00:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Новиков А.А.',
        discipline: 'Мат. анализ',
        deadline: new Date('2025-10-25T23:59:00'),
        submissionDate: new Date('2025-10-30T10:00:00'), // Поздно
        grade: '+',
    },
    {
        id: '15',
        description: 'Схемотехника: Триггеры',
        createdAt: new Date('2025-10-01T08:30:00'),
        author: 'Технарев В.И.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Схемотехника',
        deadline: new Date('2025-10-15T17:00:00'),
        submissionDate: new Date('2025-10-15T16:50:00'),
        grade: '+',
    },
    {
        id: '16',
        description: 'Экономическая теория: Спрос',
        createdAt: new Date('2025-09-12T11:00:00'),
        author: 'Деньгова Р.Р.',
        photoLink: '',
        student: 'Зайцев О.О.',
        discipline: 'Экономика',
        deadline: new Date('2025-09-19T23:59:00'),
        submissionDate: new Date('2025-09-18T12:00:00'),
        grade: '+',
    },
    {
        id: '17',
        description: 'Сортировка массива',
        createdAt: new Date('2025-09-15T09:00:00'),
        author: 'Сидорова Е.В.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Алгоритмы',
        deadline: new Date('2025-09-22T23:59:00'),
        submissionDate: new Date('2025-09-22T23:00:00'),
        grade: '+',
    },
    {
        id: '18',
        description: 'База данных: SQL запросы',
        createdAt: new Date('2025-10-20T12:00:00'),
        author: 'Кузнецов Д.Д.',
        photoLink: '',
        student: 'Павлов Л.Л.',
        discipline: 'Базы данных',
        deadline: new Date('2025-10-27T23:59:00'),
        submissionDate: null,
        grade: '-',
    },
    {
        id: '19',
        description: 'Презентация проекта',
        createdAt: new Date('2025-12-01T10:00:00'),
        author: 'Главарёв П.П.',
        photoLink: '',
        student: 'Смирнов А.А.',
        discipline: 'Менеджмент',
        deadline: new Date('2025-12-10T12:00:00'),
        submissionDate: new Date('2025-12-10T11:55:00'),
        grade: '+',
    },
    {
        id: '20',
        description: 'Итоговый тест',
        createdAt: new Date('2025-12-25T09:00:00'),
        author: 'Иванов И.И.',
        photoLink: '',
        student: 'Все',
        discipline: 'Алгебра',
        deadline: new Date('2025-12-25T12:00:00'),
        submissionDate: null,
        grade: '-',
    },
];

class GradeList {
    // Приватное поле для хранения задания/оценки
    _grades = [];

    constructor(data) {
        if (Array.isArray(data)) {
            this._grades = data;
        }
    }

    _isString(value) {
        return typeof value === 'string';
    }

    _isDate(value) {
        return value instanceof Date && !isNaN(value);
    }

    // Проверка валидности объекта
    _validateStructure(obj) {
        // Проверка обязательных полей
        if (!obj.id || !this._isString(obj.id)) return false;
        if (!obj.description || !this._isString(obj.description) || obj.description.length >= 200) return false;
        if (!obj.createdAt || !this._isDate(obj.createdAt)) return false;
        if (!obj.author || !this._isString(obj.author) || obj.author.trim() === '') return false;
        return true;
    }

    /** массив объектов с пагинацией и фильтрацией       */
    getObjs(skip = 0, top = 10, filterConfig = {}) {
        let result = this._grades;
        // Фильтрация
        if (Object.keys(filterConfig).length > 0) {
            result = result.filter(item => {
                let isValid = true;
                for (let key in filterConfig) {
                    // Если у объекта нет такого поля или значение не совпадает
                    if (item[key] === undefined || item[key] !== filterConfig[key]) {
                        isValid = false;
                        break;
                    }
                }
                return isValid;
            });
        }
        // Сортировка по дате создания
        result.sort((a, b) => b.createdAt - a.createdAt);
        // Пагинация
        return result.slice(skip, skip + top);
    }

    /** Получить один объект по ID */
    getObj(id) {
        const found = this._grades.find(item => item.id === id);
        return found || null;
    }

    /** метод валидации */
    validateObj(obj) {
        return this._validateStructure(obj);
    }

    /** Добавить новый объект */
    addObj(obj) {
        if (!this.validateObj(obj)) {
            console.warn('Ошибка валидации при добавлении объекта');
            return false;
        }
        // если существует объект с таким id
        if (this.getObj(obj.id)) {
            console.warn(`Объект с id ${obj.id} уже существует`);
            return false;
        }
        this._grades.push(obj);
        return true;
    }

    /** Редактировать объект по id
      Нельзя менять: id, author, createdAt     */
    editObj(id, newObj) {
        const index = this._grades.findIndex(item => item.id === id);
        if (index === -1) {
            console.warn('Объект для редактирования не найден');
            return false;
        }
        // копия объкта
        const currentObj = this._grades[index];

        // поля, которые нельзя менять
        const protectedFields = ['id', 'author', 'createdAt'];
        const objToMerge = { ...newObj };

        protectedFields.forEach(field => {
            if (objToMerge.hasOwnProperty(field)) {
                delete objToMerge[field]; // удаляем поля которые есть в списке protectedFields, нельзя менять
            }
        });

        //слияние, если поля совпадают, берем то, что справа - новое
        const updatedObj = { ...currentObj, ...objToMerge };

        // Проверяем валидность
        if (!this.validateObj(updatedObj)) {
            console.warn('Новая версия объекта не прошла валидацию');
            return false;
        }

        this._grades[index] = updatedObj;
        return true;
    }

    /**  Удалить объект по id  */
    removeObj(id) {
        const index = this._grades.findIndex(item => item.id === id);
        if (index === -1) return false;

        this._grades.splice(index, 1); //удаление
        return true;
    }

    /** Добавить массив объектов      */
    addAll(objs) {
        const invalidObjs = [];
        objs.forEach(obj => {
            if(!this.addObj(obj)) {
                invalidObjs.push(obj);
            }
        });
        return invalidObjs; //  те объексты, что не удалось добавить
    }

    /** Очистка     */
    clear() {
        this._grades = [];
    }
}


//  тестирование
const gradeSystem = new GradeList(mockGrades);

console.log("--- Тест 1: Получение первых 5 записей ---");
console.log(gradeSystem.getObjs(0, 5));

console.log("--- Тест 2: Фильтрация (все работы Иванова И.И.) ---");
console.log(gradeSystem.getObjs(0, 10, { author: 'Иванов И.И.' }));

console.log("--- Тест 3: Фильтрация (все несданные работы '-') ---");
console.log(gradeSystem.getObjs(0, 10, { grade: '-' }));

console.log("--- Тест 4: Получение по ID (id='5') ---");
console.log(gradeSystem.getObj('5'));

console.log("--- Тест 5: Добавление валидного объекта ---");
const newValidTask = {
    id: '100',
    description: 'Лабораторная работа 2',
    createdAt: new Date(),
    author: 'Петрова Ю.Ю.',
    student: 'Апов Е.Ю.',
    discipline: 'История',
    deadline: new Date(),
    submissionDate: null,
    grade: '-'
};
console.log('Результат добавления:', gradeSystem.addObj(newValidTask));
console.log('Проверка наличия:', gradeSystem.getObj('100'));

console.log("--- Тест 6: Добавление невалидного объекта (без author) ---");
const invalidTask = {
    id: '101',
    description: 'Лабораторная работа 2',
    createdAt: new Date(),
};
console.log('Результат добавления:', gradeSystem.addObj(invalidTask));

console.log("--- Тест 7: Редактирование (меняем оценку у id='1' на '±') ---");
console.log('Результат редактирования:', gradeSystem.editObj('1', { grade: '±' }));
console.log('Обновленный объект:', gradeSystem.getObj('1'));

console.log("--- Тест 8: Попытка сменить автора (запрещено) ---");
gradeSystem.editObj('1', { author: 'Лавров П.П.' });
console.log('Автор после попытки взлома:', gradeSystem.getObj('1').author); // Иванов И.И.

console.log("--- Тест 9: Удаление объекта (id='100') ---");
console.log('Результат удаления:', gradeSystem.removeObj('100'));
console.log('Поиск после удаления:', gradeSystem.getObj('100'));