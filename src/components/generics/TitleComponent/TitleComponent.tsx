interface ITitleComponent{
    title: string;
}

export function TitleComponent(props: ITitleComponent){
    return (
        <div className="flex mx-auto mb-8">
            <h1 className="px-4 text-center text-6xl font-bold">
                {props.title}
            </h1>
        </div>
    )
}