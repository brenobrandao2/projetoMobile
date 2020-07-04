const baseUrl = "https://desolate-hollows-29433.herokuapp.com/tasks";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getList = () => {
    return fetch((proxyurl + baseUrl), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(err => {
        console.error('Erro: ', JSON.stringify(err));
        throw err;
    });
};

export const editTask = (data: {"id": number, "title"?: string | undefined, "description"?: string | undefined, "status"?: number}) => {
    return fetch((`${baseUrl}/${data.id}/`), {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(err => {
        console.error('Erro: ', JSON.stringify(err));
        throw err;
    });
};

export const createTask = () => {
    return fetch((`${baseUrl}/`), {
        method: 'POST',
        body: JSON.stringify({"title": "Nova tarefa", "description": ""}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(err => {
        console.error('Erro: ', JSON.stringify(err));
        throw err;
    });
};

export const deleteTask = (id: number) => {
    const url = baseUrl + "/" + id + "/";

    return fetch(`${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {})
    .catch(err => {
        console.error('Erro: ', JSON.stringify(err));
        throw err;
    });
}