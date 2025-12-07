/**
 * АИС «Оценки и задания»
 *
 * - id (string)
 * - description (string) - Название задания
 * - createdAt (Date) - Дата создания записи
 * - author (string) - Преподаватель
 * - photoLink (string) - Ссылка (необязательно)
 * - student (string) - ФИО студента
 * - discipline (string) - Дисциплина
 * - deadline (Date) - Срок сдачи
 * - submissionDate (Date | null) - Когда сдал (null, если не сдал)
 * - grade (string) - Оценка ('+', '±', '-')
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

/**
 * Класс модели GradeList (задание 5)
 */
class GradeList {
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

    // Проверка валидности структуры
    _validateStructure(obj) {
        if (!obj.id || !this._isString(obj.id)) return false;
        if (!obj.description || !this._isString(obj.description) || obj.description.length >= 200) return false;
        if (!obj.createdAt || !this._isDate(obj.createdAt)) return false;
        if (!obj.author || !this._isString(obj.author) || obj.author.trim() === '') return false;
        return true;
    }

    /** Получить массив объектов с пагинацией и фильтрацией */
    getObjs(skip = 0, top = 10, filterConfig = {}) {
        let result = this._grades;

        if (Object.keys(filterConfig).length > 0) {
            result = result.filter((item) => {
                let isValid = true;
                for (let key in filterConfig) {
                    if (item[key] === undefined || item[key] !== filterConfig[key]) {
                        isValid = false;
                        break;
                    }
                }
                return isValid;
            });
        }

        result.sort((a, b) => b.createdAt - a.createdAt);
        return result.slice(skip, skip + top);
    }

    /** Получить один объект по ID */
    getObj(id) {
        const found = this._grades.find((item) => item.id === id);
        return found || null;
    }

    /** Валидация */
    validateObj(obj) {
        return this._validateStructure(obj);
    }

    /** Добавить новый объект */
    addObj(obj) {
        if (!this.validateObj(obj)) {
            console.warn('Ошибка валидации при добавлении объекта');
            return false;
        }
        if (this.getObj(obj.id)) {
            console.warn(`Объект с id ${obj.id} уже существует`);
            return false;
        }
        this._grades.push(obj);
        return true;
    }

    /** Редактирование объекта по id (нельзя менять id, author, createdAt) */
    editObj(id, newObj) {
        const index = this._grades.findIndex((item) => item.id === id);
        if (index === -1) {
            console.warn('Объект для редактирования не найден');
            return false;
        }

        const currentObj = this._grades[index];
        const protectedFields = ['id', 'author', 'createdAt'];
        const objToMerge = { ...newObj };

        protectedFields.forEach((field) => {
            if (objToMerge.hasOwnProperty(field)) {
                delete objToMerge[field];
            }
        });

        const updatedObj = { ...currentObj, ...objToMerge };

        if (!this.validateObj(updatedObj)) {
            console.warn('Новая версия объекта не прошла валидацию');
            return false;
        }

        this._grades[index] = updatedObj;
        return true;
    }

    /** Удалить объект по id */
    removeObj(id) {
        const index = this._grades.findIndex((item) => item.id === id);
        if (index === -1) return false;
        this._grades.splice(index, 1);
        return true;
    }

    /** Добавить массив объектов */
    addAll(objs) {
        const invalidObjs = [];
        objs.forEach((obj) => {
            if (!this.addObj(obj)) {
                invalidObjs.push(obj);
            }
        });
        return invalidObjs;
    }

    /** Очистка */
    clear() {
        this._grades = [];
    }
}

/** Часть 6b */

let currentUser = 'Student Name'; // текущий пользователь или null

// экземпляр модели
const gradeSystem = new GradeList(mockGrades);

/**  View-класс для отображения оценок и пользователя (2) */
class GradesView {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.warn('GradesView: контейнер не найден');
        }
    }

    /* удаляет всё, что отрисовано, чтобы перед перерисовкой списка не смешивать старые и новые элементы */
    clear() {
        if (!this.container) return;
        this.container.innerHTML = '';
    }

    /* Определение цвета оценки */
    _getGradeClass(grade) {
        if (grade === '+' || grade === 'A' || grade === 'B') {
            return 'green';
        }
        if (grade === '±' || grade === 'F') {
            return 'red';
        }
        return 'black';
    }

    /* перерисовка списка DOM */
    renderList(grades) {
        if (!this.container) return;
        /*чтобы начать с пустого списка*/
        this.clear();

        grades.forEach((g) => {
            const article = document.createElement('article');

            const title = document.createElement('h3');
            title.textContent = `${g.discipline || 'Предмет'} — ${g.student || 'Студент'}`;

            const ul = document.createElement('ul');

            /* Собирается список <ul> из пунктов <li> */
            const liDesc = document.createElement('li');
            liDesc.textContent = `Описание: ${g.description}`;

            const liDeadline = document.createElement('li');
            liDeadline.textContent = `Дедлайн: ${
                g.deadline ? g.deadline.toLocaleString() : '-'
            }`;

            const liSubmission = document.createElement('li');
            liSubmission.textContent = `Сдача: ${
                g.submissionDate ? g.submissionDate.toLocaleString() : '-'
            }`;

            /* Ещё один <li> для оценки: */
            const liGrade = document.createElement('li');
            const gradeSpan = document.createElement('span');
            gradeSpan.classList.add('grade', this._getGradeClass(g.grade));
            gradeSpan.textContent = g.grade || '-';

            const pointsSpan = document.createElement('span');
            pointsSpan.classList.add('points');
            pointsSpan.textContent = `id: ${g.id}`;

            liGrade.appendChild(gradeSpan);
            liGrade.appendChild(pointsSpan);

            /*  Ещё один <li> для оценки: */
            ul.appendChild(liDesc);
            ul.appendChild(liDeadline);
            ul.appendChild(liSubmission);
            ul.appendChild(liGrade);

            article.appendChild(title);
            article.appendChild(ul);

            // Кнопки редактирования/удаления только при наличии пользователя
            if (currentUser) {
                const actions = document.createElement('div');

                const editBtn = document.createElement('button');
                editBtn.textContent = 'Редактировать';
                editBtn.onclick = () => {
                    console.log('Вызов editObj из консоли:', g.id);
                };

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Удалить';
                removeBtn.onclick = () => {
                    console.log('Вызов removeObj из консоли:', g.id);
                };

                actions.appendChild(editBtn);
                actions.appendChild(removeBtn);
                article.appendChild(actions);
            }

            this.container.appendChild(article);
        });
    }

    // Готовый <article> добавляется в основной контейнер .grades
    renderUser(selector) {
        const el = document.querySelector(selector);
        if (!el) return;
        el.textContent = currentUser
            ? `Пользователь: ${currentUser}`
            : 'Гость (не авторизован)';
    }
}

const gradesView = new GradesView('.grades');

/** Первичная инициализация страницы  */
function initPage() {
    // Берём первые 10 объектов из модели gradeSystem
    const list = gradeSystem.getObjs(0, 10, {});
    //Передаём этот массив в GradesView, который строит DOM для каждой записи
    gradesView.renderList(list);
    gradesView.renderUser('#current-user');
}

document.addEventListener('DOMContentLoaded', initPage);

/**
 * Глобальный модуль для демонстрации бизнес-логики через консоль (3)
 * Вызов: domModule.addObj({...}), domModule.editObj('1', {...}) и т.д.
 */
window.domModule = (function () {
    function refresh(filterConfig = {}, skip = 0, top = 10) {
        const list = gradeSystem.getObjs(skip, top, filterConfig);
        gradesView.renderList(list);
    }

    function addObj(obj) {
        const ok = gradeSystem.addObj(obj);
        if (ok) {
            refresh();
        } else {
            console.warn('addObj: объект не добавлен (невалиден или id уже существует)');
        }
        return ok;
    }

    function removeObj(id) {
        const ok = gradeSystem.removeObj(id);
        if (ok) {
            refresh();
        } else {
            console.warn('removeObj: объект с таким id не найден');
        }
        return ok;
    }

    function editObj(id, obj) {
        const ok = gradeSystem.editObj(id, obj);
        if (ok) {
            refresh();
        } else {
            console.warn('editObj: объект не изменён (не найден или невалиден)');
        }
        return ok;
    }

    function setFilter(filterConfig) {
        refresh(filterConfig);
    }

    function setUser(nameOrNull) {
        currentUser = nameOrNull;
        gradesView.renderUser('#current-user');
        refresh();
    }

    return {
        refresh,
        addObj,
        removeObj,
        editObj,
        setFilter,
        setUser,
    };
})();
