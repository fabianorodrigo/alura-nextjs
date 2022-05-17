import {useRouter } from 'next/router';
import { NextPage } from "next";
// com Link do Next, o comportamento é o de SPA, ou seja, não rola 
// recarregamento de toda a página (o que acontece se usar só <a>xxx</a>)
import Link from 'next/link';

/**
 * a presença de [] em volta do nome da rota significa que ela é uma rota dinâmica.
 * é possível aninhar rotas através da estrutura de pastas.
 * @returns 
 */
const PostPage: NextPage = ()=>{
    const router = useRouter();

    return (
        <div>{router.query.id}
        <Link href="/">
            <a>dddd</a>
        </Link>
        </div>
    );
}

// exporting IndexPage as default export
export default PostPage;