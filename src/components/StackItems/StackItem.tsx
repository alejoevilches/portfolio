export default function StackItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="bg-gray-200 rounded-full px-4">{children}</li>
    )
}