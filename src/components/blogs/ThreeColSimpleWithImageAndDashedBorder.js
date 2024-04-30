import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as CalendarIcon } from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import Friend0 from "../../images/demo/friend0.199d3f75.png"
import Friend1 from "../../images/demo/friend1.c72c5916.jpeg"
import Friend2 from "../../images/demo/friend2.dd4d16de.jpeg"
import Friend3 from "../../images/demo/friend3.82980f49.jpeg"
import Friend4 from "../../images/demo/friend4.6d1defca.png"
import Friend5 from "../../images/demo/friend5.b5e136ff.jpeg"
import Friend_card0 from "../../images/demo/friend_card0.jpeg";
import Friend_card1 from "../../images/demo/friend_card1.jpeg";
import Friend_card2 from "../../images/demo/friend_card2.png";
import Friend_card3 from "../../images/demo/friend_card3.jpeg";
import Friend_card4 from "../../images/demo/friend_card4.jpeg";
import Friend_card5 from "../../images/demo/friend_card5.jpeg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-3 lg:py-3`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-2 border-2 rounded-t-none border-dashed border-primary-100 mr-1 pb-4 lg:w-[30%]`;

const HeadingInfoContainer = tw.div`flex flex-col items-start`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);
const AvatarInfo = tw.div`flex flex-row justify-between`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Details = tw.div`p-6 rounded  flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center mt-3`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

const SocialLinksContainer = tw.div`mt-10 justify-self-end`;
const SocialLink = styled.a`
  ${tw`bg-black cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export default ({
  subheading = "Blog",
  heading = <><span tw="text-primary-500">B² NETWORK FRIENDS</span></>,
  description = "Some amazing blog posts that are written by even more amazing people.",

}) => {
  const blogPosts = [
    {
      avatar: Friend0,
      name: "cyclop",
      emaill: "@nobrainflip",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card0,
      date: "18:34 04/02/2024"
    },
    {
      avatar: Friend1,
      name: "Cyril - DeFi",
      emaill: "@cyrilXBT",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card1,
      date: "18:34 04/02/2024"
    },
    {
      avatar: Friend2,
      name: "Leshka.eth ⛩",
      emaill: "@leshka_eth",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card2,
      date: "18:34 04/02/2024"
    },
    {
      avatar: Friend3,
      name: "Xremlin",
      emaill: "@0x_gremlin",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card3,
      date: "18:34 04/02/2024"
    },
    {
      avatar: Friend4,
      name: "Splin Teron",
      emaill: "@splinter0n",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card4,
      date: "18:34 04/02/2024"
    },
    {
      avatar: Friend5,
      name: "BMS",
      emaill: "@bloomstarbms",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: [
        "The most lucrative airdrops often fly under the radar.",
        "$RBN: $250,000$HFT: 100,000",
        "$CQT: $35,000",
        "Up next? $BSQ airdrop. Potential profit: $2,000+",
        "Here's a thread on how to secure it 👇",
      ],
      imageSrc: Friend_card5,
      date: "18:34 04/02/2024"
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <AvatarInfo>
                  <CustomerInfo>
                    <CustomerProfilePicture src={post.avatar} />
                    <CustomerTextInfo>
                      <CustomerName>{post.name}</CustomerName>
                      <CustomerTitle>{post.emaill}</CustomerTitle>
                    </CustomerTextInfo>
                  </CustomerInfo>
                  <SocialLinksContainer>
                    <SocialLink href="https://twitter.com">
                      <TwitterIcon />
                    </SocialLink>
                  </SocialLinksContainer>
                </AvatarInfo>
                <Details>
                  {post.description.map((item, index) => (
                    <Description key={index}>{item}</Description>
                  ))}
                </Details>
                <Image imageSrc={post.imageSrc} />
                <MetaContainer>
                  <Meta>
                    <CalendarIcon />
                    <div>{post.date}</div>
                  </Meta>
                </MetaContainer>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
