import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import {Link} from "react-router-dom";
import styled from "styled-components";


/*
It is important to define your styled components outside of the render method, 
otherwise it will be recreated on every single render pass. 
Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, 
and should be avoided.
*/

/*styled component library applying it it to the p tag*/
const SubTitlePost=styled.p`
   font-size:13px;
`;

/* Example of nesting in sytled component */
// const Post = styled.div`
//   border: 1px solid #e1e1e1;
//   padding: 10px 10px;
//   border-radius: 5px;
//   margin-top: 10px;

//   &:hover {
//     border: 1px solid #2196f3;
//   }

//   h3 {
//     margin: 0;
//     padding: 0;
//     font-size: 25px;
//     font-weight: bold;
//     color: black;
//   }

//   a {
//     text-decoration: none;
//   }

//   @media (max-width: 800px) {
//     border: 1px solid black;
//   }
// `;


function Home() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
       firestore
       .collection('posts')
       .onSnapshot((snapshot)=>{
        const posts=snapshot.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            };
        });

        console.log("posts",posts);
        setPosts(posts);
       })


    },[])

  return (
    <div className="home">
      {/* <button className="createPostBtn">Button</button> /***testing the css module way of css styling elements */}
        <h1>Tech Blog</h1>
        <div id="blog-by">Hrithik Singh</div>

      {posts.map((post,index)=>(  //doubt
        <div className="post" key={`post-${index}`}>

        <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
        </Link>
        <SubTitlePost>{post.subTitle}</SubTitlePost>
        </div>

      ))}
    </div>
  );
}

export default Home;