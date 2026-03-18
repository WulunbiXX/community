// 全域環境的 type 可共用類型

interface Post {
    id: string;
    title: string;
    content: string;
    createtime: number;
    views?: number;
    imageUrl?: string;
}

interface Member {
    _id: string;
    name: string;
    position: string;
    number: string;
    imageUrl: string;
}