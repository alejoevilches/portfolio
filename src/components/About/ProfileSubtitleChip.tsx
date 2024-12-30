interface IProfileSubtitleChipProps{
    subtitle: string;
}

export default function ProfileSubtitleChip(props: IProfileSubtitleChipProps){
    const {subtitle}=props;
    return (
        <h2 className="mx-auto bg-gray-200 rounded-full px-4 mt-8 ">{subtitle}</h2>
    )
}