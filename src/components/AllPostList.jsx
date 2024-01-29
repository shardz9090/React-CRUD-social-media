import { useContext } from "react"
import Post from "./Post"
import { PostList } from "../store/Post-list-store"
import LoadingaPage from "./LoadingaPage"
import WelcomeMsg from "./WelcomeMsg"


const AllPostList = () => {
    const { postList, fetching } = useContext(PostList)


    return (
        <>
            Totalpost = {postList.length}
            <center>
                {fetching && <LoadingaPage />}
            </center>
            <div className="postContainer m-6">
                {!fetching && postList.length == 0 && <WelcomeMsg />}

                {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
            </div>

        </>
    )
}

export default AllPostList