# Шаблон адаптивного изображения

Создаёт разметку блока `<picture>` с кадрированием, ретинизацией и поддержкой webp (предполагается, что данный таск используется в сборке).

## Пример входных данных

```json
{
  "classes": "map__poster",
  "img": {
    "alt": "Карта",
    "src": "img/map.jpg",
    "srcset": "img/map@2x.jpg 2x"
  },
  "medias": [
    {
      "query": "(min-width: 1200px)",
      "srcset": "img/map-desktop.jpg, img/map-desktop@2x.jpg 2x"
    },
    {
      "query": "(min-width: 768px)",
      "srcset": "img/map-tablet.jpg, img/map-tablet@2x.jpg 2x"
    }
  ]
}
```

`classes` – строка с БЭМ-миксами (в зависимости от того, куда встраивается блок `.picture`).
`params` – принятый в сборке алиас для входных данных компонентов, подключающихся перечнем в шаблон (имитация динамических компонентов).
