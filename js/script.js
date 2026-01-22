const news=[
	"Запуск нового дизайна",
	"Добавлена тёмная тема",
	"Оптимизация мобильной версии",
	"Новый блог‑движок",
	"Улучшена производительность"
]
const latest = document.getElementById('latestNews')
if (latest) news.slice(0,3).forEach(n => latest.innerHTML += `<div>${n}</div>`)
const list = document.getElementById('newsList')
const search = document.getElementById('search')
if (list) render(news)
if (search) search.oninput = e => render(news.filter(n => n.toLowerCase().includes(e.target.value.toLowerCase())))
function render(arr) {
	list.innerHTML = ''
	arr.forEach(n => list.innerHTML += `<div>${n}</div>`)
}
const toggle = document.getElementById('themeToggle')
const saved = localStorage.getItem('theme')
if (saved) document.documentElement.dataset.theme = saved
if (toggle) toggle.onclick = () => {
	const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
	document.documentElement.dataset.theme = t
	localStorage.setItem('theme', t)
}
