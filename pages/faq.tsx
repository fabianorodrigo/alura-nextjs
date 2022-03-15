import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

export async function getStaticProps(){
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL).then((response)=>{
      return response.json();
    }).then(dados=>{
        return dados
    })
  return{
    props:{
      qualquercoisa: 'que eu passar aqui',
      faq
    }
  }
}

const FAQ: NextPage = (props: any) => {
  console.log(props)

  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>

      <Link href="/">Ir para a home</Link>
      <ul>
        {props.faq.map((item: {question: any, answer: any})=><li key={item.question}>{item.question}</li>)}
      </ul>
    </div>
  );
}

export default FAQ;
