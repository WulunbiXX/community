export const getPostList = async(page: string) =>{
    const response = await fetch(`/api/post/list?page=${page}&limit=5`)
    const resData = await response.json();
    return resData.data;
};

export const addPost = async(data: {title: string, content: string}) => {
     const response = await fetch(`/api/post/add`,{
        method: "Post",
        body: JSON.stringify(data),
     });
     const resData = await response.json();
     return resData.data;
}

export const getPost = async (id:string) => {
    const response = await fetch(`/api/post/detail?id=${id}`);
    const resData = await response.json();
    return resData.data
}

export const getHeadlinePostList = async(page: string, limit: string) =>{
    const response = await fetch(`/api/post/list?page=${page}&limit=${limit}`)
    const resData = await response.json();
    return resData.data;
}

export const getHotPostList = async(limit: string) =>{
    const response = await fetch(`/api/post/hot?limit=${limit}`)
    const resData = await response.json();
    return resData.data;
}