## BuscaPrecoScrapper - BuscaPreco Search Scrapper

## Arguments
| Arguments  | Type  | Default  | Required | Description
| :------------: | :------------: | :------------: | :------------: | :------------: |
| minpage  | int  | 1 | No | First Page for Scrap  |
| maxpage  |  int | 10 | No | Last Page for Scrap  |
| search  | string  | null | Yes | Word to Search  |
| cookie  | string  | F9FC3C3CE... | Yes | Cookie |
| save  | string  | homedir/busca-preco.json  | No | file path to save json structure (e.q /homedir/scrap.json) |

## Installation
- Install package globally
```javascript
  npm install -g scrap-buscapreco
```
- Execute
```javascript
  scrap-buscapreco --minpage=<minpage> --maxpage=<maxpage> --search=<search> --save=<save> --cookie=<cookie>
  scrap-buscapreco -i <minpage> -a <maxpage> -f <search> -s <save> -c <cookie>
```

## Tested Environment
- Node v10.15.2
- npm v6.4.1
