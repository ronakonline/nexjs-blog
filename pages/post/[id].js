import Link from "next/dist/client/link"
import Image from "next/image";
import Head from 'next/head'
import Layout from "../../components/layout";
import {getPost,getPosts} from "../../lib/getContents";


export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(post => ({
            params: { id: post.id.toString() }
        })),
        fallback: false
    };
}


export async function getStaticProps({params}) {
    const post = await getPost(params.id)
    return {
        props: {
            post
        }
    }
}


export default function FirstPost({post}) {
    return(
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        
        <div>
            <h1>{post.title}</h1>
            <Link href="/"><a>Go back</a></Link>

            <p>{post.body}</p>
        </div>
        </Layout>
    );
  }
  