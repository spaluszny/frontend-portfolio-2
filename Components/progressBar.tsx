
interface ProgressBarProps {
    bgcolor: string,
    percent: number
}

export default function ProgressBar({
    bgcolor,
    percent
}: ProgressBarProps) {

    return (
        <div className={`h-2 w-full bg-gray-300 rounded-full`}>
            <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                    width: `${percent}%`,
                    backgroundColor: bgcolor,
                }}
            />
        </div>
    )
}