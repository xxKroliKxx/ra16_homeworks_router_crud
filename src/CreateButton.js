import {useNavigate} from "react-router-dom";


const url = 'http://localhost:7777/posts'

export default function CreateButton({textAreaEl}) {
    const navigate = useNavigate();

    const onClick = () => {
        let data = {id: 0, content: textAreaEl.current.value}
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

    return (
        <div className={'post-bottom'}>
            <button className={'button create-button'} onClick={onClick}> Создать пост</button>
        </div>)
}