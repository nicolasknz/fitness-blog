import React, {useEffect, useState} from "react";


import Prismic from 'prismic-javascript'
import {Date, Link, RichText} from 'prismic-reactjs';

import Header from "../../components/header";
import Banner from "../../components/banner";
// import banner from "../../src/assets/images/banner.jpg";
import Card from "../../components/card";

// import { posts } from "../../src/utils/posts/";

import * as Styled from "./styles";
import TopBar from "../../components/top-bar";

interface CardProps {
  thumbnail: {
    image: string;
    alt: string;
  };
  description: string;
  title: string;
  author: {
    image: string;
    name: string;
  };
  releaseDate: string;
}

const apiEndpoint = "https://fitness-blog.cdn.prismic.io/api/v2"

const accessToken = ''

const Client = Prismic.client(apiEndpoint, { accessToken })

const Home = () => {
  const [doc, setDocData]:any = useState(null)
  console.log(doc)

  useEffect(() => {
    const fetchData = async () => {
      const response:any = await Client.query(
        Prismic.Predicates.at('document.type', 'article')
      )
      if (response ){
        setDocData(response.results)
      }
    }
    fetchData()
  },[])


  return (
    <Styled.LandingContainer className="container">

    
    <RichText 
      render={doc?.data?.texto}
    />

      <TopBar />
      <Styled.ContentContainer>
      <Header />
        <Banner />
        <Styled.PostsWrapper>
          {doc?.map((post:any, key:any) => 
           
             (
              <Card
              thumbnail={{
                image: post.data.author_image.url,
                alt: post.data.author_image.alt,
              }}
              title={post.data.title[0].text}
              description={post.data.subtitle[0].text}
              author={{
                image: post.data.author_image.url,
                name: post.data.author_name[0].text,
              }}
              releaseDate={post.data.publish_date}
              key={key}
            />
            )
          )}
          {/* {posts?.map(
            (
              { title, thumbnail, description, author, releaseDate }: CardProps,
              index
            ) => {
              return (
                <Card
                  thumbnail={{
                    image: thumbnail.image,
                    alt: thumbnail.alt,
                  }}
                  title={title}
                  description={description}
                  author={{
                    image: author.image,
                    name: author.name,
                  }}
                  releaseDate={releaseDate}
                  key={index}
                />
              );
            }
          )} */}
        </Styled.PostsWrapper>
      </Styled.ContentContainer>
    </Styled.LandingContainer>
  );
};

export default Home;
