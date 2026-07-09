export default function InfoBlock({ label, value }) {
    return (
        <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                {label}
            </p>
            <p className="mt-1 font-bold text-app-dark">
                {value}
            </p>
        </div>
    );
}