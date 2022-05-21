import {useRef} from 'react'
import {useParams, useLocation} from "react-router-dom";

export default function EditPost({Footer}) {
    const textAreaEl = useRef(null);
    const {id} = useParams();
    const {state} = useLocation()

    const img = 'https://sun3-12.userapi.com/s/v1/if1/JziNTDOcvC3MCgOKRRwkNmlM1gnulHVkDF4543g2UVnl5X7vR0uHT0FztZKRLwzLtLDSO6Mc.jpg?size=100x100&quality=96&crop=0,369,1442,1442&ava=1'

    return (
        <div className={'create-post'}>
            <div className={'post_header'}>
                <img className={'avatar'} src={img} alt={'аватар'}/>
                <div className={'author_info'}>
                    <span className={'full_name'}>Кирилл Русских</span>
                    <span className={'role'}> Основатель группы</span>
                </div>
            </div>

            <textarea className={'textarea'} ref={textAreaEl} defaultValue={state && state.content}/>

            {Footer && <Footer textAreaEl={textAreaEl} id = {id}/>}

        </div>
    )
}