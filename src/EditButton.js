import {useNavigate} from "react-router-dom";

const url = 'http://localhost:7777/posts'

export default function EditButton({textAreaEl, id}) {
    const navigate = useNavigate();

    const onClickEdit = () => {
        let data = {id: Number(id), content: textAreaEl.current.value}
        fetch(url,
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(
                (response) => {
                    navigate('/')
                }
            )
    }

    const onClickDelete = () => {
        fetch(url + '/' + id, {method: 'DELETE',})
            .then(
                (response) => {
                    navigate('/')
                }
            )
    }

    return (
        <div className={'post-bottom'}>
            <button className={'button create-button'} onClick={onClickEdit}> Изменить</button>
            <button className={'button create-button delete-button'} onClick={onClickDelete}> Удалить</button>
        </div>)
}