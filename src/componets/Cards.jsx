import { Card } from "flowbite-react";

export default function Cards({ children }) {

    return (
        <Card className="w-auto bg-transparent border-transparent text-white shadow-lg bg-blue-950 transition-all my-3">
            <article className="flex flex-col space-y-5">
                {children}
            </article>
        </Card>
    )
}