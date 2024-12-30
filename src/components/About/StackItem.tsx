export default function StackItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="bg-gray-200 cursor-default rounded-full px-4 md:text-lg hover:bg-gray-600 hover:text-white transition-colors ease-linear duration-100">{children}</li>
    )
}