interface IStackTitleProps {
    title: string
}

export default function StackTitle(props: IStackTitleProps){
    const {title}=props;
    return (
        <h3 className="text-2xl pt-5 pb-2 pl-4 text-gray-400">{title}</h3>
    )
}