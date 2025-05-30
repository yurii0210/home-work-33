

# Home Work 33 – Gulp + SCSS Starter Template

Цей проєкт є шаблоном для швидкої верстки з використанням **SCSS**, **Gulp** та **BrowserSync**.  
Він автоматично:

- компілює SCSS у CSS,
- додає автопрефікси,
- форматує та мінімізує стилі,
- оновлює сторінку при зміні `.scss` або `.html` файлів.

---

## ⚙️ Встановлення

1. **Клонуйте репозиторій:**

```bash
git clone <URL>
cd your-repo-name
Встановіть залежності:

bash
Копіювати
Редагувати
npm install
Основні залежності:
gulp

gulp-sass

gulp-autoprefixer

gulp-clean-css

gulp-cssbeautify

browser-sync

🚀 Запуск проєкту
Запуск локального сервера з автоперезавантаженням і компіляцією SCSS:

bash
Копіювати
Редагувати
npm start
Або:

bash
Копіювати
Редагувати
npm run dev
Сервер: http://localhost:3000

Автоматична компіляція SCSS → CSS

Live Reload при зміні .scss або .html

🔨 Збірка стилів
Форматований (не мінімізований) CSS:
bash
Копіювати
Редагувати
npm run styles
Мінімізований CSS для продакшену:
bash
Копіювати
Редагувати
npm run build
📁 Структура проєкту
bash
Копіювати
Редагувати
project-root/
├─ dist/
│   └─ css/
│       └─ style.css         # Скомпільований CSS
│
├─ src/
│   └─ scss/
│       └─ style.scss        # Основний SCSS
│       └─ ...               # Інші SCSS файли (якщо є)
│
├─ index.html                # Головна HTML-сторінка
├─ gulpfile.js               # Gulp-конфігурація
├─ package.json              # Залежності та скрипти
└─ README.md                 # Інструкція
❗ Важливо
У <head> у index.html шлях до стилів має бути:

html
Копіювати
Редагувати
<link rel="stylesheet" href="dist/css/style.css" />
Не відкривайте index.html напряму (через file://) — запускати проєкт потрібно через Gulp, інакше браузер може не завантажити стилі через політику безпеки MIME-типів.

📦 Перевірка встановлених залежностей
bash
Копіювати
Редагувати
npm list --depth=0
👨‍💻 Автор
[Yurii0210]

