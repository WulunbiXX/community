"use client"
import Roster from "@/components/Roster";
import UseQueryMemberList from "@/hooks/use-query-member-list";
import Link from "next/link";

const MemberRoster = () => {
    const { data, isLoading, error } = UseQueryMemberList();
    const members = data || [];

    return (
        <div className="w-full">
            <div className="w-full grid sm:grid-cols-3 mt-8 gap-4">
                {isLoading && <div>Loading...</div>}
                {error && <div>Error:{error.message}</div>}
                {!isLoading && members.length === 0 && <div>No Members</div>}
                {!isLoading && members.map((member: Member) => (
                    <Link key={member._id} href={`/members/${member._id}`} className="w-full h-full">
                        < Roster members={member} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MemberRoster