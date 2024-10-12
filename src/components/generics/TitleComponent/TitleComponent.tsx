interface ITitleComponent{
    title: string;
}

export function TitleComponent(props: ITitleComponent){
    return (
        <div className="mx-auto mb-10 pt-10 text-center">
            <h1 className="px-4 text-center text-6xl font-bold">
                {props.title}
            </h1>
        </div>
    )
}