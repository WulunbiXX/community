export const getMembers = async () => {
  const response = await fetch(`/api/member/list`);
  if (!response.ok) {
    throw new Error("Failed to fetch members");
  }
  const resData = await response.json();
  return resData.data;
};

export const addMember = async (data: { name: string; position: string; number: string; imageUrl: string }) => {
    const response = await fetch(`api/member/add`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Failed to add member");
    }
    const resData = await response.json();
    return resData.data;
};