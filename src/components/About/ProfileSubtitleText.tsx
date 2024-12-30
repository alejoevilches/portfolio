interface IProfileSubtitleTextProps{
    children: React.ReactNode
}

export default function ProfileSubtitleText({children}:IProfileSubtitleTextProps){
    return (
        <p className="text-center pt-4 px-6 text-lg">
            {children}
        </p>
    )
}