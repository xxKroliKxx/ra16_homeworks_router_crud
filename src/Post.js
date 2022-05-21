export default function Post({content, id, cbFunc}) {
    const img = 'https://sun3-12.userapi.com/s/v1/if1/JziNTDOcvC3MCgOKRRwkNmlM1gnulHVkDF4543g2UVnl5X7vR0uHT0FztZKRLwzLtLDSO6Mc.jpg?size=100x100&quality=96&crop=0,369,1442,1442&ava=1'
    return (
        <div className={'post'} onClick={()=>{cbFunc(id, content)}}>
            <div className={'post_header'}>
                <img className={'avatar'} src={img} alt={'аватар'}/>
                <div className={'author_info'}>
                    <span className={'full_name'}>Кирилл Русских</span>
                    <span className={'role'}> Основатель группы</span>
                </div>
            </div>
            <div className={'post_body'}>
                {content}
            </div>
            <div className={'bottom'}>
                <span className={'like'}> Нравится </span>
                <span className={'comment'}> Комментировать </span>
            </div>
        </div>
    )
}

