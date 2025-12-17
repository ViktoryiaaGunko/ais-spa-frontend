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

// 1
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

// 2
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

    _validateStructure(obj) {
        if (!obj.id || !this._isString(obj.id)) return false;
        if (!obj.description || !this._isString(obj.description) || obj.description.length >= 200) return false;
        if (!obj.createdAt || !this._isDate(obj.createdAt)) return false;
        if (!obj.author || !this._isString(obj.author) || obj.author.trim() === '') return false;
        return true;
    }

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

    // поиск по id
    getObj(id) {
        const found = this._grades.find((item) => item.id === id);
        return found || null;
    }

    validateObj(obj) {
        return this._validateStructure(obj);
    }

    // добавление
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

    // редактирование
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

    // удаление
    removeObj(id) {
        const index = this._grades.findIndex((item) => item.id === id);
        if (index === -1) return false;
        this._grades.splice(index, 1);
        return true;
    }

    addAll(objs) {
        const invalidObjs = [];
        objs.forEach((obj) => {
            if (!this.addObj(obj)) {
                invalidObjs.push(obj);
            }
        });
        return invalidObjs;
    }

    clear() {
        this._grades = [];
    }

    // 1. LocalStorage: методы save / restore в модели
    save() {
        const plain = this._grades.map(g => ({
            ...g,
            createdAt: g.createdAt.toISOString(),
            deadline: g.deadline ? g.deadline.toISOString() : null,
            submissionDate: g.submissionDate ? g.submissionDate.toISOString() : null,
        }));
        localStorage.setItem('grades', JSON.stringify(plain));
    }

    restore() {
        const raw = localStorage.getItem('grades');
        if (!raw) return;
        try {
            const arr = JSON.parse(raw);
            this._grades = arr.map(g => ({
                ...g,
                createdAt: new Date(g.createdAt),
                deadline: g.deadline ? new Date(g.deadline) : null,
                submissionDate: g.submissionDate ? new Date(g.submissionDate) : null,
            }));
        } catch (e) {
            console.warn('restore: ошибка парсинга localStorage', e);
        }
    }
}

let currentUser = null; // текущий пользователь или null

// Инициализация модели с учётом восстановления:
const gradeSystem = new GradeList([]);
// на старте пробуем восстановить
gradeSystem.restore();
// если пусто – заполняем начальными данными и сразу сохраняем
if (gradeSystem.getObjs(0, 1).length === 0) {
    gradeSystem.addAll(mockGrades);
    gradeSystem.save();
}

// 3
class GradesView {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.warn('GradesView: контейнер не найден');
        }
    }

    clear() {
        if (!this.container) return;
        this.container.innerHTML = '';
    }

    _getGradeClass(grade) {
        if (grade === '+' || grade === 'A' || grade === 'B') {
            return 'green';
        }
        if (grade === '±' || grade === 'F') {
            return 'red';
        }
        return 'black';
    }

    // 1 Отобразить информацию на HTML‑странице
    renderList(grades) {
        if (!this.container) return;
        this.clear();

        grades.forEach((g) => {
            const article = document.createElement('article');

            const title = document.createElement('h3');
            title.textContent = `${g.discipline || 'Предмет'} — ${g.student || 'Студент'}`;

            const ul = document.createElement('ul');

            const liDesc = document.createElement('li');
            liDesc.textContent = `Описание: ${g.description}`;

            const liDeadline = document.createElement('li');
            liDeadline.textContent = `Дедлайн: ${g.deadline ? g.deadline.toLocaleString() : '-'}`;

            const liSubmission = document.createElement('li');
            liSubmission.textContent = `Сдача: ${g.submissionDate ? g.submissionDate.toLocaleString() : '-'}`;

            const liGrade = document.createElement('li');
            const gradeSpan = document.createElement('span');
            gradeSpan.classList.add('grade', this._getGradeClass(g.grade));
            gradeSpan.textContent = g.grade || '-';
            const pointsSpan = document.createElement('span');
            pointsSpan.classList.add('points');
            pointsSpan.textContent = `id: ${g.id}`;
            liGrade.appendChild(gradeSpan);
            liGrade.appendChild(pointsSpan);

            ul.appendChild(liDesc);
            ul.appendChild(liDeadline);
            ul.appendChild(liSubmission);
            ul.appendChild(liGrade);

            article.appendChild(title);
            article.appendChild(ul);

            if (currentUser) {
                const actions = document.createElement('div');

                const editBtn = document.createElement('button');
                editBtn.textContent = 'Редактировать';
                editBtn.onclick = () => {
                    const newGrade = prompt('Новая оценка (+, ±, -):', g.grade);
                    if (newGrade) {
                        domModule.editObj(g.id, { grade: newGrade, submissionDate: new Date() });
                    }
                };

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Удалить';
                removeBtn.onclick = () => {
                    if (confirm('Удалить запись?')) {
                        domModule.removeObj(g.id);
                    }
                };

                actions.appendChild(editBtn);
                actions.appendChild(removeBtn);
                article.appendChild(actions);
            }

            this.container.appendChild(article);
        });
    }

    renderUser(selector) {
        const el = document.querySelector(selector);
        if (!el) return;
        el.textContent = currentUser ? `Пользователь: ${currentUser}` : 'Гость (не авторизован)';
    }
}

const gradesView = new GradesView('.grades');

function initPage() {
    const list = gradeSystem.getObjs(0, 10, {});
    // берём ObjInf из модели

    gradesView.renderList(list);
    // рисуем DOM

    gradesView.renderUser('#current-user');
    // рисуем текущего пользователя
}

document.addEventListener('DOMContentLoaded', () => {
    initPage();
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
        description: 'Новая лабораторная',
        createdAt: new Date(),
        author: 'Новый Преподаватель',
        student: 'Студент Х.',
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
        description: 'Плохой объект',
        createdAt: new Date()
    };
    console.log('Результат добавления:', gradeSystem.addObj(invalidTask));

    console.log("--- Тест 7: Редактирование (меняем оценку у id='1') ---");
    // Была '+', меняем на '±'
    console.log('Результат редактирования:', gradeSystem.editObj('1', { grade: '±' }));
    console.log('Обновленный объект:', gradeSystem.getObj('1'));

    console.log("--- Тест 8: Попытка сменить автора (запрещено) ---");
    gradeSystem.editObj('1', { author: 'Хакер' });
    console.log('Автор после попытки взлома:', gradeSystem.getObj('1').author); // Должен остаться Иванов И.И.

    console.log("--- Тест 9: Удаление объекта (id='100') ---");
    console.log('Результат удаления:', gradeSystem.removeObj('100'));
    console.log('Поиск после удаления:', gradeSystem.getObj('100'));
});


// 2 Добавить информацию на HTML‑страницу
// 3 Глобальные функции для демонстрации бизнес‑логики ( Они обёрнуты в модуль window.domModule)
window.domModule = (function () {
    function refresh(filterConfig = {}, skip = 0, top = 10) {
        const list = gradeSystem.getObjs(skip, top, filterConfig);
        gradesView.renderList(list);
    }

    function addObj(obj) {
        const ok = gradeSystem.addObj(obj);
        if (ok) {
            gradeSystem.save();
            refresh();
        } else {
            console.warn('addObj: объект не добавлен (невалиден или id уже существует)');
        }
        return ok;
    }

    // 3 Удалить информацию с HTML‑страницы
    function removeObj(id) {
        const ok = gradeSystem.removeObj(id);
        if (ok) {
            gradeSystem.save();
            refresh();
        } else {
            console.warn('removeObj: объект с таким id не найден');
        }
        return ok;
    }

    // 4 Отредактировать информацию на HTML‑странице
    function editObj(id, obj) {
        const ok = gradeSystem.editObj(id, obj);
        if (ok) {
            gradeSystem.save();
            refresh();
        } else {
            console.warn('editObj: объект не изменён (не найден или невалиден)');
        }
        return ok;
    }

    // Фильтрация реализована в GradeList.getObjs и обёрнута в domModule.setFilter:
    function setFilter(filterConfig) {
        refresh(filterConfig);
    }

    // Смена пользователя
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

// Функция для добавления задания через форму администратора
function addTask() {
    const id = prompt('ID задания');
    const description = prompt('Описание');
    const student = prompt('Студент');
    const discipline = prompt('Дисциплина');
    const deadlineStr = prompt('Дедлайн (ГГГГ-ММ-ДД)');
    const grade = prompt('Оценка (+, ±, -)');

    if (!id || !description || !student || !discipline || !deadlineStr || !grade) {
        alert('Заполните все поля');
        return;
    }

    const deadline = new Date(deadlineStr);
    if (isNaN(deadline)) {
        alert('Неверный формат даты');
        return;
    }

    const newTask = {
        id,
        description,
        createdAt: new Date(),
        author: 'Автоматически',
        student,
        discipline,
        deadline,
        submissionDate: null,
        grade,
    };

    domModule.addObj(newTask);
}

// Авторизация через форму
document.getElementById('auth-form').onsubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value.trim();
    if (username) {
        domModule.setUser(username);
    } else {
        alert('Введите имя пользователя');
    }
};

(function controller() {
    const nav = document.querySelector('header nav');
    const sections = document.querySelectorAll('main > section');
    const ratingsSection = document.getElementById('ratings');
    const sortFilter = ratingsSection.querySelector('.sort-filter');

    // состояние списка (для фильтра и пагинации)
    let currentFilter = {};
    let currentSkip = 0;
    const PAGE_SIZE = 10;

    function showSection(hash) {
        sections.forEach(sec => {
            sec.style.display = ('#' + sec.id === hash) ? 'block' : 'none';
        });
        nav.querySelectorAll('a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === hash);
        });
    }

    function applyList() {
        const list = gradeSystem.getObjs(currentSkip, PAGE_SIZE, currentFilter);
        gradesView.renderList(list);
    }

    // 1) обработка кликов по меню (переход между страницами)
    nav.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') return;
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        showSection(hash);
        if (hash === '#ratings') {
            currentSkip = 0;
            applyList();
        }
    });

    // 2) обработка формы авторизации через submit (заменяет старый onsubmit)
    const authForm = document.getElementById('auth-form');
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('user').value.trim();
        if (username) {
            domModule.setUser(username);
            showSection('#ratings');
        } else {
            alert('Введите имя пользователя');
        }
    });

    // 3) обработка кнопок сортировки / фильтра
    sortFilter.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') return;
        const text = e.target.textContent;

        if (text.includes('Фильтровать')) {
            const teacher = prompt('Фильтр по преподавателю (author):', 'Иванов И.И.');
            if (teacher) {
                currentFilter = { author: teacher };
            } else {
                currentFilter = {};
            }
            currentSkip = 0;
            applyList();
        } else if (text.includes('Сортировать по дате')) {
            // данные уже сортируются по createdAt в модели, просто перерисуем первый "страниц"
            currentSkip = 0;
            applyList();
        } else if (text.includes('Сортировать по баллам')) {
            // пример: сортировка по grade вручную
            const all = gradeSystem.getObjs(0, gradeSystem._grades.length, currentFilter)
                .slice()
                .sort((a, b) => (a.grade || '').localeCompare(b.grade || ''));
            gradesView.renderList(all.slice(0, PAGE_SIZE));
            currentSkip = 0;
        }
    });

    // 4) кнопка "Ещё 10" для пагинации
    // добавь в HTML кнопку: <button id="load-more">Ещё 10</button> внутри .sort-filter
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentSkip += PAGE_SIZE;
            const next = gradeSystem.getObjs(currentSkip, PAGE_SIZE, currentFilter);
            if (next.length === 0) {
                alert('Больше записей нет');
                currentSkip -= PAGE_SIZE;
                return;
            }
            // упрощённо: показываем первые currentSkip+PAGE_SIZE
            const all = gradeSystem.getObjs(0, currentSkip + PAGE_SIZE, currentFilter);
            gradesView.renderList(all);
        });
    }

    // 5) обработчик кнопки "Добавить" в админ‑панели через события (без inline onclick)
    const manageSection = document.getElementById('manage-tasks');
    const addBtn = manageSection.querySelector('button[type="button"]');
    if (addBtn) {
        addBtn.addEventListener('click', addTask);
    }

    // стартовое состояние
    showSection('#home');
})();
