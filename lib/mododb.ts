import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // 設為不會是undifined
const options = {maxPoolSize: 10};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mogoClientPromise: Promise<MongoClient>
}

// 檢查全域是否有相同的實體 -> 沒有建立
if(!global._mogoClientPromise){
    client = new MongoClient(uri, options);
    global._mogoClientPromise = client.connect()
}

clientPromise = global._mogoClientPromise;

export default clientPromise