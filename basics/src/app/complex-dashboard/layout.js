import Notifications from "@/components/Notifications"
import RevenueMetrices from "@/components/RevenueMetrices"
import UserAnalytics from "@/components/UserAnalytics"

export default function ComplexDashboardLayout({ children }) {
    return
    <>
        <div>
            {children}
        </div>
        <UserAnalytics />
        <RevenueMetrices />
        <Notifications />

    </>
}