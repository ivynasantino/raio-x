{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000).",
    "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/dados-desempenho/data/dados-processados/desempenho.csv"},
    "title": {
      "text": "Top 20 de desempenho nas disciplinas",
      "anchor": "middle"
    },
    "width": 450,
    "height": 250,
    "encoding": {
  
      "x": {
        "field": "value",
        "type": "quantitative",
        "title": "Mediana das notas"
      },
      "y": {
        "field": "nome_disciplina",
        "type": "nominal",
        "title": "Disciplinas",
        "axis": {
          "offset": 5,
          "ticks": false,
          "minExtent": 70,
          "domain": false
        }
      },
      "tooltip": {"field": "nome_disciplina", "type": "nominal"}
    },
    "layer": [
      {
        "mark": "line",
        "encoding": {
          "detail": {
            "field": "nome_disciplina",
            "type": "nominal"
          },
          "color": {"value": "#000000"}
        }
      },
      {
        "mark": {
          "type": "point",
          "filled": true
        },
        "encoding": {
          "color": {
            "domain": ["Masculino","Feminino"],
            "scheme": "set2",
            "field": "mediana",
            "type": "nominal",
            "title": "Gênero"
          },
          "size": {"value": 40},
          "opacity": {"value": 1}
        }
      }
    ]
  }
  