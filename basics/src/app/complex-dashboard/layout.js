export default function ComplexDashboardLayout({ children, users, notifications, revenue }) {

    return (
        <div>
            <div>{children}</div>

            <div className="flex bg-red-200">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notifications}</div>
            </div>
        </div>
    )
}