import Link from "next/link";

function Config() {
    return (
        <Link href={"/config"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4.00"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z" /><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" /></g></svg>
        </Link>
    );
}

export default Config;