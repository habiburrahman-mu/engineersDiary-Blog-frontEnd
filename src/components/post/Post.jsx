import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img 
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/photo-1531564701487-f238224b7c_1200x768.jpeg?q_6io2tiCIj7McK_gRABr11yUCEqtSAC&size=1200:675" 
                alt="" 
                className="postImg" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim aliquam error delectus reprehenderit, corporis at ut id doloribus dolorem hic quia esse facere excepturi amet ex numquam possimus veniam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim aliquam error delectus reprehenderit, corporis at ut id doloribus dolorem hic quia esse facere excepturi amet ex numquam possimus veniam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim aliquam error delectus reprehenderit, corporis at ut id doloribus dolorem hic quia esse facere excepturi amet ex numquam possimus veniam!
            </p>
        </div>
    )
}
