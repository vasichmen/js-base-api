# Базовый клиент JS API

## Установка 

```shell
npm install @vasichmen/js-base-api
```

## Пример

Класс клиента наследуется от BaseClient
 ```javascript

 class AdminApiClient extends BaseClient {
    apiUrl(path) {
        return super.apiUrl('') + `/admin${path}`;
    }

    buildingList(params) {
        return this.send('get', this.apiUrl('/building/list'), params);
    }
    buildingShortList(params) {
        return this.send('get', this.apiUrl('/building/short'), params);
    }
    buildingDetail(params) {
        return this.send('get', this.apiUrl('/building/detail'), params);
    }

}

const Api = new AdminApiClient();

export default Api;
 ```

Пример вызова метода: 

```javascript
const respone = await AdminApiClient.buildingList({filters: {name: 'название'}})
const content = response.getContent();
```