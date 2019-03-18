## BuscaPrecoScrapper - BuscaPreco Search Scrapper

## Arguments
| Arguments  | Type  | Default  | Required | Description
| :------------: | :------------: | :------------: | :------------: | :------------: |
| minpage  | int  | 1 | No | First Page for Scrap  |
| maxpage  |  int | 10 | No | Last Page for Scrap  |
| search  | string  | null | Yes | Word to Search  |
| cookie  | string  | F9FC3C3CE... | Yes | Cookie |
| save  | string  | null  | Yes | file path to save json structure (e.q /homedir/scrap.json) |

### Installation
- Clone or download the project
- In root folder, enter
```javascript
  npm install
```
- In root folder, execute
```javascript
  node index.js minpage=<minpage> maxpage=<maxpage> search=<search> save=<save> cookie=<cookie>
```

### Tested Environment
- Node v10.15.2
- npm v6.4.1
