
# Endpoint


#### Получение всех заводов

```http
  GET /api/factory
```

#### Добавление нового завода

```http
  POST /api/factory
```

#### Удаление завода

```http
  DELETE /api/factory/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |

```http
  PUT /api/factory/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. |


# Запуск проекта
```bash
  docker compose up
```
    
